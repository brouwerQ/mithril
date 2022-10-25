use async_trait::async_trait;
use chrono::Utc;
use mithril_common::entities::Epoch;
use slog_scope::{debug, info, warn};
use std::path::Path;
use std::path::PathBuf;
use std::sync::Arc;

use mithril_common::crypto_helper::ProtocolStakeDistribution;
use mithril_common::entities::{
    Beacon, Certificate, CertificatePending, ProtocolMessage, ProtocolMessagePartKey, Snapshot,
};
use mithril_common::CardanoNetwork;

use crate::snapshot_uploaders::SnapshotLocation;
use crate::snapshotter::OngoingSnapshot;
use crate::{DependencyManager, ProtocolError, SnapshotError};

#[cfg(test)]
use mockall::automock;

use super::RuntimeError;

/// Configuration structure dedicated to the AggregatorRuntime.
#[derive(Debug, Clone)]
pub struct AggregatorConfig {
    /// Interval between each snapshot, in ms
    pub interval: u64,

    /// Cardano network
    pub network: CardanoNetwork,

    /// DB directory to snapshot
    pub db_directory: PathBuf,
}

impl AggregatorConfig {
    /// Create a new instance of AggregatorConfig.
    pub fn new(interval: u64, network: CardanoNetwork, db_directory: &Path) -> Self {
        Self {
            interval,
            network,
            db_directory: db_directory.to_path_buf(),
        }
    }
}

/// This trait is intended to allow mocking the AggregatorRunner in tests.
/// It exposes all the methods needed by the state machine.
#[async_trait]
pub trait AggregatorRunnerTrait: Sync + Send {
    /// Return the current beacon from the chain
    async fn get_beacon_from_chain(&self) -> Result<Beacon, RuntimeError>;

    /// Check if a certificate already have been issued for a given beacon.
    async fn does_certificate_exist_for_beacon(
        &self,
        beacon: &Beacon,
    ) -> Result<bool, RuntimeError>;

    /// Check if a certificate chain is valid.
    async fn is_certificate_chain_valid(&self) -> Result<bool, RuntimeError>;

    /// Compute the digest of the last immutable file of the node.
    async fn compute_digest(&self, new_beacon: &Beacon) -> Result<String, RuntimeError>;

    /// Update the multisigner with the given beacon.
    async fn update_beacon(&self, new_beacon: &Beacon) -> Result<(), RuntimeError>;

    /// Read the stake distribution from the blockchain and store it.
    async fn update_stake_distribution(&self, new_beacon: &Beacon) -> Result<(), RuntimeError>;

    /// Update the multisigner with the protocol parameters from configuration.
    async fn update_protocol_parameters_in_multisigner(
        &self,
        new_beacon: &Beacon,
    ) -> Result<(), RuntimeError>;

    /// Set the message to sign in the multisigner. The digest is only one part
    /// of the message, the next signing stake distribution must also be signed
    /// as part of the message.
    async fn update_message_in_multisigner(&self, digest: String) -> Result<(), RuntimeError>;

    /// Return the actual pending certificate from the multisigner.
    async fn create_new_pending_certificate_from_multisigner(
        &self,
        beacon: Beacon,
    ) -> Result<CertificatePending, RuntimeError>;

    /// Store the given pending certificate.
    async fn save_pending_certificate(
        &self,
        pending_certificate: CertificatePending,
    ) -> Result<(), RuntimeError>;

    /// Drop the multisigner's actual pending certificate.
    async fn drop_pending_certificate(&self) -> Result<Option<CertificatePending>, RuntimeError>;

    /// Check if the multisigner has issued a multi-signature.
    async fn is_multisig_created(&self) -> Result<bool, RuntimeError>;

    /// Create an archive of the cardano node db directory naming it after the given beacon.
    ///
    /// Returns the path of the created archive and the archive size as byte.
    async fn create_snapshot_archive(
        &self,
        beacon: &Beacon,
    ) -> Result<OngoingSnapshot, RuntimeError>;

    /// Upload the snapshot at the given location using the configured uploader(s).
    ///
    /// **Important**: the snapshot is removed after the upload succeeded.
    async fn upload_snapshot_archive(
        &self,
        ongoing_snapshot: &OngoingSnapshot,
    ) -> Result<Vec<SnapshotLocation>, RuntimeError>;

    /// Create a signed certificate.
    async fn create_and_save_certificate(
        &self,
        beacon: &Beacon,
    ) -> Result<Certificate, RuntimeError>;

    /// Create a snapshot and save it to the given locations.
    async fn create_and_save_snapshot(
        &self,
        certificate: Certificate,
        ongoing_snapshot: &OngoingSnapshot,
        remote_locations: Vec<String>,
    ) -> Result<Snapshot, RuntimeError>;
}

/// The runner responsibility is to expose a code API for the state machine. It
/// holds services and configuration.
pub struct AggregatorRunner {
    config: AggregatorConfig,
    dependencies: Arc<DependencyManager>,
}

impl AggregatorRunner {
    /// Create a new instance of the Aggrergator Runner.
    pub fn new(config: AggregatorConfig, dependencies: Arc<DependencyManager>) -> Self {
        Self {
            config,
            dependencies,
        }
    }
}

#[cfg_attr(test, automock)]
#[async_trait]
impl AggregatorRunnerTrait for AggregatorRunner {
    /// Return the current beacon from the chain
    async fn get_beacon_from_chain(&self) -> Result<Beacon, RuntimeError> {
        debug!("RUNNER: get beacon from chain");
        Ok(self
            .dependencies
            .beacon_provider
            .get_current_beacon()
            .await?)
    }

    async fn does_certificate_exist_for_beacon(
        &self,
        beacon: &Beacon,
    ) -> Result<bool, RuntimeError> {
        debug!("RUNNER: does_certificate_exist_for_beacon");
        let certificate_exist = self
            .dependencies
            .certificate_store
            .get_from_beacon(beacon)
            .await?
            .is_some();
        Ok(certificate_exist)
    }

    async fn is_certificate_chain_valid(&self) -> Result<bool, RuntimeError> {
        debug!("RUNNER: is_certificate_chain_valid");
        let certificate_store = self.dependencies.certificate_store.clone();
        let latest_certificates = certificate_store.get_list(1).await?;
        let latest_certificate = latest_certificates.first();
        if latest_certificate.is_none() {
            return Ok(false);
        }

        match self
            .dependencies
            .certificate_verifier
            .verify_certificate_chain(
                latest_certificate.unwrap().to_owned(),
                certificate_store.clone(),
                &self.dependencies.genesis_verifier,
            )
            .await
        {
            Ok(()) => Ok(true),
            Err(error) => {
                warn!(" > invalid certificate chain"; "error" => ?error);
                Ok(false)
            }
        }
    }

    async fn compute_digest(&self, new_beacon: &Beacon) -> Result<String, RuntimeError> {
        debug!("RUNNER: compute_digest");
        let digester = self.dependencies.digester.clone();

        debug!(" > computing digest"; "cardano_db_directory" => self.config.db_directory.display());

        debug!(" > launching digester thread");
        let digest = digester
            .compute_digest(new_beacon)
            .await
            .map_err(|e| RuntimeError::General(e.into()))?;
        debug!(" > computed digest: {}", digest);

        Ok(digest)
    }

    async fn update_beacon(&self, new_beacon: &Beacon) -> Result<(), RuntimeError> {
        debug!("RUNNER: update beacon"; "beacon" => #?new_beacon);
        self.dependencies
            .multi_signer
            .write()
            .await
            .update_current_beacon(new_beacon.to_owned())
            .await?;
        Ok(())
    }

    async fn update_stake_distribution(&self, new_beacon: &Beacon) -> Result<(), RuntimeError> {
        debug!("RUNNER: update stake distribution"; "beacon" => #?new_beacon);
        let stake_distribution = self
            .dependencies
            .chain_observer
            .get_current_stake_distribution()
            .await?
            .ok_or_else(|| RuntimeError::General("no epoch was returned".to_string().into()))?;
        let stake_distribution = stake_distribution
            .iter()
            .map(|(party_id, stake)| (party_id.to_owned(), *stake))
            .collect::<ProtocolStakeDistribution>();

        Ok(self
            .dependencies
            .multi_signer
            .write()
            .await
            .update_stake_distribution(&stake_distribution)
            .await?)
    }

    async fn update_protocol_parameters_in_multisigner(
        &self,
        new_beacon: &Beacon,
    ) -> Result<(), RuntimeError> {
        debug!("RUNNER: update protocol parameters"; "beacon" => #?new_beacon);
        let protocol_parameters = self.dependencies.config.protocol_parameters.clone();
        Ok(self
            .dependencies
            .multi_signer
            .write()
            .await
            .update_protocol_parameters(&protocol_parameters.into())
            .await?)
    }

    async fn update_message_in_multisigner(&self, digest: String) -> Result<(), RuntimeError> {
        debug!("RUNNER: update message in multisigner");
        let mut multi_signer = self.dependencies.multi_signer.write().await;
        let mut protocol_message = ProtocolMessage::new();
        protocol_message.set_message_part(ProtocolMessagePartKey::SnapshotDigest, digest);
        protocol_message.set_message_part(
            ProtocolMessagePartKey::NextAggregateVerificationKey,
            multi_signer
                .compute_next_stake_distribution_aggregate_verification_key()
                .await
                .map_err(RuntimeError::MultiSigner)?
                .unwrap_or_default(),
        );
        multi_signer
            .update_current_message(protocol_message)
            .await
            .map_err(RuntimeError::MultiSigner)
    }

    async fn create_new_pending_certificate_from_multisigner(
        &self,
        beacon: Beacon,
    ) -> Result<CertificatePending, RuntimeError> {
        debug!("RUNNER: create new pending certificate from multisigner");
        let multi_signer = self.dependencies.multi_signer.read().await;

        let signers = match multi_signer.get_signers().await {
            Ok(signers) => signers,
            Err(ProtocolError::Beacon(_)) => vec![],
            Err(e) => return Err(e.into()),
        };
        let next_signers = match multi_signer.get_next_signers_with_stake().await {
            Ok(signers) => signers,
            Err(ProtocolError::Beacon(_)) => vec![],
            Err(e) => return Err(e.into()),
        };

        let protocol_parameters = multi_signer
            .get_protocol_parameters()
            .await?
            .ok_or_else(|| RuntimeError::General("no protocol parameters".to_string().into()))?;
        let next_protocol_parameters = multi_signer
            .get_next_protocol_parameters()
            .await?
            .ok_or_else(|| {
                RuntimeError::General("no next protocol parameters".to_string().into())
            })?;

        let pending_certificate = CertificatePending::new(
            beacon,
            protocol_parameters.into(),
            next_protocol_parameters.into(),
            signers,
            next_signers.into_iter().map(|s| s.into()).collect(),
        );

        Ok(pending_certificate)
    }

    async fn save_pending_certificate(
        &self,
        pending_certificate: CertificatePending,
    ) -> Result<(), RuntimeError> {
        debug!("RUNNER: saving pending certificate");

        self.dependencies
            .certificate_pending_store
            .save(pending_certificate)
            .await
            .map_err(|e| e.into())
    }

    async fn drop_pending_certificate(&self) -> Result<Option<CertificatePending>, RuntimeError> {
        debug!("RUNNER: drop pending certificate");

        let certificate_pending = self.dependencies.certificate_pending_store.remove().await?;
        if certificate_pending.is_none() {
            warn!(" > drop_pending_certificate::no certificate pending in store, did the previous loop crashed ?");
        }

        Ok(certificate_pending)
    }

    /// Is a multi-signature ready?
    /// Can we create a multi-signature.
    async fn is_multisig_created(&self) -> Result<bool, RuntimeError> {
        debug!("RUNNER: check if we can create a multi-signature");
        let has_multisig = self
            .dependencies
            .multi_signer
            .write()
            .await
            .create_multi_signature()
            .await?
            .is_some();

        if has_multisig {
            debug!(" > new multi-signature created");
        } else {
            info!(" > no multi-signature created");
        }
        Ok(has_multisig)
    }

    async fn create_snapshot_archive(
        &self,
        beacon: &Beacon,
    ) -> Result<OngoingSnapshot, RuntimeError> {
        debug!("RUNNER: create snapshot archive");

        let snapshotter = self.dependencies.snapshotter.clone();
        let protocol_message = self
            .dependencies
            .multi_signer
            .read()
            .await
            .get_current_message()
            .await
            .ok_or_else(|| RuntimeError::General("no message found".to_string().into()))?;
        let snapshot_digest = protocol_message
            .get_message_part(&ProtocolMessagePartKey::SnapshotDigest)
            .ok_or_else(|| {
                RuntimeError::General("no snapshot digest message part found".to_string().into())
            })?;
        let snapshot_name = format!(
            "{}-e{}-i{}.{}.tar.gz",
            beacon.network, beacon.epoch.0, beacon.immutable_file_number, snapshot_digest
        );
        // spawn a separate thread to prevent blocking
        let ongoing_snapshot =
            tokio::task::spawn_blocking(move || -> Result<OngoingSnapshot, SnapshotError> {
                snapshotter.snapshot(&snapshot_name)
            })
            .await
            .map_err(|e| RuntimeError::General(e.into()))??;

        debug!(" > snapshot created: '{:?}'", ongoing_snapshot);

        Ok(ongoing_snapshot)
    }

    async fn upload_snapshot_archive(
        &self,
        ongoing_snapshot: &OngoingSnapshot,
    ) -> Result<Vec<SnapshotLocation>, RuntimeError> {
        debug!("RUNNER: upload snapshot archive");
        let location = self
            .dependencies
            .snapshot_uploader
            .upload_snapshot(ongoing_snapshot.get_file_path())
            .await
            .map_err(RuntimeError::SnapshotUploader)?;

        if let Err(error) = tokio::fs::remove_file(ongoing_snapshot.get_file_path()).await {
            warn!(
                " > Post upload ongoing snapshot file removal failure: {}",
                error
            );
        }

        Ok(vec![location])
    }

    async fn create_and_save_certificate(
        &self,
        beacon: &Beacon,
    ) -> Result<Certificate, RuntimeError> {
        debug!("RUNNER: create and save certificate");
        let certificate_store = self.dependencies.certificate_store.clone();
        let latest_certificates = certificate_store.get_list(2).await?;
        let last_certificate = latest_certificates.get(0);
        let penultimate_certificate = latest_certificates.get(1);
        let previous_hash = match (penultimate_certificate, last_certificate) {
            (Some(penultimate_certificate), Some(last_certificate)) => {
                // Check if last certificate is exactly at most one epoch before current epoch
                if beacon.epoch - last_certificate.beacon.epoch > Epoch(1) {
                    return Err(RuntimeError::CertificateChainEpochGap(
                        beacon.epoch,
                        last_certificate.beacon.epoch,
                    ));
                }
                // Check if last certificate is first certificate of its epoch
                if penultimate_certificate.beacon.epoch != last_certificate.beacon.epoch {
                    &last_certificate.hash
                } else {
                    &last_certificate.previous_hash
                }
            }
            (None, Some(last_certificate)) => &last_certificate.hash,
            _ => "",
        };
        let multisigner = self.dependencies.multi_signer.read().await;
        let certificate = multisigner
            .create_certificate(beacon.clone(), previous_hash.to_owned())
            .await?
            .ok_or_else(|| RuntimeError::General("no certificate generated".to_string().into()))?;
        self.dependencies
            .certificate_verifier
            .verify_certificate(
                &certificate,
                certificate_store.clone(),
                &self.dependencies.genesis_verifier,
            )
            .await?;
        let _ = certificate_store.save(certificate.clone()).await?;

        Ok(certificate)
    }

    async fn create_and_save_snapshot(
        &self,
        certificate: Certificate,
        ongoing_snapshot: &OngoingSnapshot,
        remote_locations: Vec<String>,
    ) -> Result<Snapshot, RuntimeError> {
        debug!("RUNNER: create and save snapshot");
        let snapshot_digest = certificate
            .protocol_message
            .get_message_part(&ProtocolMessagePartKey::SnapshotDigest)
            .ok_or_else(|| RuntimeError::General("message part not found".to_string().into()))?
            .to_owned();
        let snapshot = Snapshot::new(
            snapshot_digest,
            certificate.beacon,
            certificate.hash,
            *ongoing_snapshot.get_file_size(),
            format!("{:?}", Utc::now()),
            remote_locations,
        );

        self.dependencies
            .snapshot_store
            .add_snapshot(snapshot.clone())
            .await?;

        Ok(snapshot)
    }
}

#[cfg(test)]
pub mod tests {
    use crate::multi_signer::MockMultiSigner;
    use crate::runtime::RuntimeError;
    use crate::snapshotter::OngoingSnapshot;
    use crate::ProtocolParametersStorer;
    use crate::{
        initialize_dependencies,
        runtime::{AggregatorRunner, AggregatorRunnerTrait},
    };
    use mithril_common::chain_observer::FakeObserver;
    use mithril_common::crypto_helper::tests_setup::setup_certificate_chain;
    use mithril_common::digesters::DumbImmutableFileObserver;
    use mithril_common::entities::{Beacon, CertificatePending, Epoch, ProtocolMessage};
    use mithril_common::{entities::ProtocolMessagePartKey, fake_data, store::StakeStorer};
    use mithril_common::{BeaconProviderImpl, CardanoNetwork};
    use std::path::Path;
    use std::sync::Arc;
    use tempfile::NamedTempFile;
    use tokio::sync::RwLock;

    #[tokio::test]
    async fn test_get_beacon_from_chain() {
        let expected_beacon = Beacon::new("private".to_string(), 2, 17);
        let (mut dependencies, config) = initialize_dependencies().await;
        let immutable_file_observer = Arc::new(DumbImmutableFileObserver::default());
        immutable_file_observer
            .shall_return(Some(expected_beacon.immutable_file_number))
            .await;
        let beacon_provider = Arc::new(BeaconProviderImpl::new(
            Arc::new(FakeObserver::new(Some(expected_beacon.clone()))),
            immutable_file_observer,
            CardanoNetwork::TestNet(42),
        ));
        dependencies.beacon_provider = beacon_provider;
        let runner = AggregatorRunner::new(config, Arc::new(dependencies));

        // Retrieves the expected beacon
        let res = runner.get_beacon_from_chain().await;
        assert_eq!(expected_beacon, res.unwrap());
    }

    #[tokio::test]
    async fn test_does_certificate_exist_for_beacon() {
        let (dependencies, config) = initialize_dependencies().await;
        let certificate_store = dependencies.certificate_store.clone();
        let runner = AggregatorRunner::new(config, Arc::new(dependencies));

        let beacon = fake_data::beacon();
        let mut certificate = fake_data::certificate("certificate_hash".to_string());
        certificate.beacon = beacon.clone();

        assert!(!runner
            .does_certificate_exist_for_beacon(&beacon)
            .await
            .unwrap());
        certificate_store.save(certificate).await.unwrap();
        assert!(runner
            .does_certificate_exist_for_beacon(&beacon)
            .await
            .unwrap());
    }

    #[tokio::test]
    async fn test_update_beacon() {
        let (deps, config) = initialize_dependencies().await;
        let deps = Arc::new(deps);
        let runner = AggregatorRunner::new(config, deps.clone());
        let beacon = runner.get_beacon_from_chain().await.unwrap();
        let res = runner.update_beacon(&beacon).await;

        assert!(res.is_ok());
        let stored_beacon = deps
            .multi_signer
            .read()
            .await
            .get_current_beacon()
            .await
            .unwrap();

        assert_eq!(beacon, stored_beacon);
    }

    #[tokio::test]
    async fn test_update_stake_distribution() {
        let (deps, config) = initialize_dependencies().await;
        let deps = Arc::new(deps);
        let runner = AggregatorRunner::new(config, deps.clone());
        let beacon = runner.get_beacon_from_chain().await.unwrap();
        runner
            .update_beacon(&beacon)
            .await
            .expect("setting the beacon should not fail");
        runner
            .update_stake_distribution(&beacon)
            .await
            .expect("updating stake distribution should not return an error");

        let current_stake_distribution = deps
            .chain_observer
            .get_current_stake_distribution()
            .await
            .unwrap()
            .expect("The stake distribution should not be None.");

        let saved_stake_distribution = deps
            .stake_store
            .get_stakes(
                beacon
                    .epoch
                    .offset_to_recording_epoch()
                    .expect("offset_to_recording_epoch should not fail"),
            )
            .await
            .unwrap()
            .unwrap_or_else(|| {
                panic!(
                    "I should have a stake distribution for the epoch {:?}",
                    beacon.epoch
                )
            });

        assert_eq!(
            current_stake_distribution.len(),
            saved_stake_distribution.len()
        );
        for (party_id, stake) in current_stake_distribution.iter() {
            assert_eq!(stake, saved_stake_distribution.get(party_id).unwrap());
        }
    }

    #[tokio::test]
    async fn test_update_protocol_parameters_in_multisigner() {
        let (deps, config) = initialize_dependencies().await;
        let deps = Arc::new(deps);
        let runner = AggregatorRunner::new(config, deps.clone());
        let beacon = runner.get_beacon_from_chain().await.unwrap();
        runner
            .update_beacon(&beacon)
            .await
            .expect("setting the beacon should not fail");
        runner
            .update_protocol_parameters_in_multisigner(&beacon)
            .await
            .expect("updating protocol parameters should not return an error");

        let current_protocol_parameters = deps.config.protocol_parameters.clone();

        let saved_protocol_parameters = deps
            .protocol_parameters_store
            .get_protocol_parameters(beacon.epoch + 1)
            .await
            .unwrap()
            .unwrap_or_else(|| {
                panic!(
                    "should have protocol parameters for the epoch {:?}",
                    beacon.epoch
                )
            });

        assert_eq!(current_protocol_parameters, saved_protocol_parameters);
    }

    #[tokio::test]
    async fn test_create_new_pending_certificate_from_multisigner() {
        let (deps, config) = initialize_dependencies().await;
        let deps = Arc::new(deps);
        let runner = AggregatorRunner::new(config, deps.clone());
        let beacon = runner.get_beacon_from_chain().await.unwrap();
        runner.update_beacon(&beacon).await.unwrap();

        let signers = fake_data::signers_with_stakes(5);
        let current_signers = signers[1..3].to_vec();
        let next_signers = signers[2..5].to_vec();
        let protocol_parameters = fake_data::protocol_parameters();
        deps.simulate_genesis(
            current_signers.clone(),
            next_signers.clone(),
            &protocol_parameters.clone(),
        )
        .await;

        let mut certificate = runner
            .create_new_pending_certificate_from_multisigner(beacon.clone())
            .await
            .unwrap();
        certificate.signers.sort_by_key(|s| s.party_id.clone());
        certificate.next_signers.sort_by_key(|s| s.party_id.clone());
        let mut expected = CertificatePending::new(
            beacon,
            protocol_parameters.clone(),
            protocol_parameters,
            current_signers.into_iter().map(|s| s.into()).collect(),
            next_signers.into_iter().map(|s| s.into()).collect(),
        );
        expected.signers.sort_by_key(|s| s.party_id.clone());
        expected.next_signers.sort_by_key(|s| s.party_id.clone());

        assert_eq!(expected, certificate);
    }

    #[tokio::test]
    async fn test_update_message_in_multisigner() {
        let (deps, config) = initialize_dependencies().await;
        let deps = Arc::new(deps);
        let runner = AggregatorRunner::new(config, deps.clone());
        let beacon = runner.get_beacon_from_chain().await.unwrap();
        let digest = "1+2+3+4=10".to_string();
        runner.update_beacon(&beacon).await.unwrap();
        for epoch in [
            beacon.epoch.offset_to_signer_retrieval_epoch().unwrap(),
            beacon
                .epoch
                .offset_to_next_signer_retrieval_epoch()
                .unwrap(),
        ] {
            deps.protocol_parameters_store
                .save_protocol_parameters(epoch, fake_data::protocol_parameters())
                .await
                .unwrap();
        }

        runner
            .update_message_in_multisigner(digest)
            .await
            .expect("update_message_in_multisigner should not fail");
        let message = deps
            .multi_signer
            .read()
            .await
            .get_current_message()
            .await
            .unwrap();

        assert_eq!(
            "1+2+3+4=10",
            message
                .get_message_part(&ProtocolMessagePartKey::SnapshotDigest)
                .unwrap()
        );
    }

    #[tokio::test]
    async fn test_save_pending_certificate() {
        let (deps, config) = initialize_dependencies().await;
        let deps = Arc::new(deps);
        let runner = AggregatorRunner::new(config, deps.clone());
        let beacon = runner.get_beacon_from_chain().await.unwrap();
        runner.update_beacon(&beacon).await.unwrap();
        let pending_certificate = fake_data::certificate_pending();

        runner
            .save_pending_certificate(pending_certificate.clone())
            .await
            .expect("save_pending_certificate should not fail");

        let saved_cert = deps.certificate_pending_store.get().await.unwrap().unwrap();
        assert_eq!(pending_certificate, saved_cert);
    }

    #[tokio::test]
    async fn test_drop_pending_certificate() {
        let (deps, config) = initialize_dependencies().await;
        let deps = Arc::new(deps);
        let runner = AggregatorRunner::new(config, deps.clone());
        let beacon = runner.get_beacon_from_chain().await.unwrap();
        runner.update_beacon(&beacon).await.unwrap();
        let pending_certificate = fake_data::certificate_pending();
        deps.certificate_pending_store
            .save(pending_certificate.clone())
            .await
            .unwrap();

        let cert = runner.drop_pending_certificate().await.unwrap();
        assert_eq!(Some(pending_certificate), cert);
        let maybe_saved_cert = deps.certificate_pending_store.get().await.unwrap();
        assert_eq!(None, maybe_saved_cert);
    }

    #[tokio::test]
    async fn test_drop_pending_no_certificate() {
        let (deps, config) = initialize_dependencies().await;
        let deps = Arc::new(deps);
        let runner = AggregatorRunner::new(config, deps.clone());
        let beacon = runner.get_beacon_from_chain().await.unwrap();
        runner.update_beacon(&beacon).await.unwrap();

        let cert = runner.drop_pending_certificate().await.unwrap();
        assert_eq!(None, cert);
        let maybe_saved_cert = deps.certificate_pending_store.get().await.unwrap();
        assert_eq!(None, maybe_saved_cert);
    }

    #[tokio::test]
    async fn test_create_and_save_certificate_ok() {
        let (certificate_chain, _) = setup_certificate_chain(5, 1);
        let first_certificate = certificate_chain[0].clone();
        let beacon = first_certificate.beacon.clone();
        let (mut deps, config) = initialize_dependencies().await;
        let mut mock_multi_signer = MockMultiSigner::new();
        mock_multi_signer
            .expect_create_certificate()
            .return_once(move |_, _| Ok(Some(first_certificate)));
        deps.multi_signer = Arc::new(RwLock::new(mock_multi_signer));
        let certificate_store = deps.certificate_store.clone();
        let runner = AggregatorRunner::new(config, Arc::new(deps));
        for certificate in certificate_chain[1..].iter().rev() {
            certificate_store
                .as_ref()
                .save(certificate.to_owned())
                .await
                .expect("save certificate to store should not fail");
        }

        let certificate = runner.create_and_save_certificate(&beacon).await;
        certificate.expect("a certificate should have been created and saved");
    }

    #[tokio::test]
    async fn test_create_and_save_certificate_ko_epoch_gap() {
        let (deps, config) = initialize_dependencies().await;
        let certificate_store = deps.certificate_store.clone();
        let runner = AggregatorRunner::new(config, Arc::new(deps));
        let total_certificates = 5;
        let (certificate_chain, _) = setup_certificate_chain(5, 1);
        let mut beacon = certificate_chain.first().unwrap().beacon.clone();
        beacon.epoch += 2;
        for certificate in certificate_chain.into_iter().rev() {
            certificate_store
                .as_ref()
                .save(certificate)
                .await
                .expect("save certificate to store should not fail");
        }

        let certificate = runner.create_and_save_certificate(&beacon).await;
        assert!(certificate.is_err());
        let err = certificate.unwrap_err();
        assert_eq!(
            RuntimeError::CertificateChainEpochGap(beacon.epoch, Epoch(total_certificates))
                .to_string(),
            err.to_string()
        );
    }

    #[tokio::test]
    async fn test_remove_snapshot_archive_after_upload() {
        let (deps, config) = initialize_dependencies().await;
        let runner = AggregatorRunner::new(config, Arc::new(deps));
        let file = NamedTempFile::new().unwrap();
        let file_path = file.path();
        let snapshot = OngoingSnapshot::new(file_path.to_path_buf(), 7331);

        runner
            .upload_snapshot_archive(&snapshot)
            .await
            .expect("Snapshot upload should not fail");

        assert!(
            !file_path.exists(),
            "Ongoing snapshot file should have been removed after upload"
        );
    }

    #[tokio::test]
    async fn test_create_snapshot_archive_name_archive_after_beacon() {
        let beacon = Beacon::new("network".to_string(), 20, 145);
        let mut message = ProtocolMessage::new();
        message.set_message_part(
            ProtocolMessagePartKey::SnapshotDigest,
            "test+digest".to_string(),
        );
        let mut mock_multi_signer = MockMultiSigner::new();
        mock_multi_signer
            .expect_get_current_message()
            .return_once(move || Some(message));
        let (mut deps, config) = initialize_dependencies().await;
        deps.multi_signer = Arc::new(RwLock::new(mock_multi_signer));
        let runner = AggregatorRunner::new(config, Arc::new(deps));

        let ongoing_snapshot = runner
            .create_snapshot_archive(&beacon)
            .await
            .expect("create_snapshot_archive should not fail");

        assert_eq!(
            Path::new(
                format!(
                    "{}-e{}-i{}.{}.tar.gz",
                    beacon.network, beacon.epoch.0, beacon.immutable_file_number, "test+digest"
                )
                .as_str()
            ),
            ongoing_snapshot.get_file_path()
        );
    }
}