use async_trait::async_trait;
use hex::ToHex;
use mithril_common::chain_observer::ChainObserver;
use slog_scope::{info, trace, warn};
use std::path::PathBuf;
use std::sync::Arc;
use thiserror::Error;

use mithril_common::crypto_helper::{
    key_decode_hex, key_encode_hex, ProtocolClerk, ProtocolInitializer, ProtocolKeyRegistration,
    ProtocolPartyId, ProtocolRegistrationError, ProtocolSigner, ProtocolStakeDistribution,
};
use mithril_common::entities::{
    PartyId, ProtocolMessage, ProtocolParameters, SignerWithStake, SingleSignatures, Stake,
};

#[cfg(test)]
use mockall::automock;

/// MithrilProtocolInitializerBuilder error structure.
#[derive(Error, Debug)]
pub enum MithrilProtocolInitializerBuilderError {
    /// Could not parse a Cardano crypto file
    #[error("the cardano cryptographic file could not be parsed.")]
    CardanoCryptoParse,
}

/// This is responsible of creating new instances of ProtocolInitializer.
#[derive(Default)]
pub struct MithrilProtocolInitializerBuilder {}

impl MithrilProtocolInitializerBuilder {
    /// Create a new MithrilProtocolInitializerBuilder instance.
    pub fn new() -> Self {
        Self {}
    }

    /// Create a ProtocolInitializer instance.
    pub fn build(
        &self,
        stake: &Stake,
        protocol_parameters: &ProtocolParameters,
        kes_secret_key_path: Option<PathBuf>,
        kes_period: Option<usize>,
    ) -> Result<ProtocolInitializer, MithrilProtocolInitializerBuilderError> {
        let mut rng = rand_core::OsRng;
        let protocol_initializer = ProtocolInitializer::setup(
            protocol_parameters.to_owned().into(),
            kes_secret_key_path,
            kes_period,
            stake.to_owned(),
            &mut rng,
        )
        .map_err(|_| MithrilProtocolInitializerBuilderError::CardanoCryptoParse)?;

        Ok(protocol_initializer)
    }
}

/// The SingleSigner is the structure responsible of issuing SingleSignatures.
#[cfg_attr(test, automock)]
#[async_trait]
pub trait SingleSigner: Sync + Send {
    /// Computes single signatures
    async fn compute_single_signatures(
        &self,
        protocol_message: &ProtocolMessage,
        signers_with_stake: &[SignerWithStake],
        protocol_initializer: &ProtocolInitializer,
        chain_observer: Arc<dyn ChainObserver>,
    ) -> Result<Option<SingleSignatures>, SingleSignerError>;

    /// Compute aggregate verification key from stake distribution
    async fn compute_aggregate_verification_key(
        &self,
        signers_with_stake: &[SignerWithStake],
        protocol_initializer: &ProtocolInitializer,
        chain_observer: Arc<dyn ChainObserver>,
    ) -> Result<Option<String>, SingleSignerError>;

    /// Get party id
    fn get_party_id(&self) -> ProtocolPartyId;
}

/// SingleSigner error structure.
#[derive(Error, Debug, PartialEq, Eq)]
pub enum SingleSignerError {
    /// This signer has not registered for this Epoch hence cannot participate to the signature.
    #[error("the signer verification key is not registered in the stake distribution")]
    UnregisteredVerificationKey(),

    /// No stake is associated with this signer.
    #[error("the signer party id is not registered in the stake distribution")]
    UnregisteredPartyId(),

    /// Cryptographic Signer creation error.
    #[error("the protocol signer creation failed: `{0}`")]
    ProtocolSignerCreationFailure(String),

    /// Could not fetch a protocol initializer for this Epoch.
    #[error("the protocol initializer is missing")]
    ProtocolInitializerMissing(),

    /// Could not fetch a signer from a protocol initializer.
    #[error("the protocol initializer is not registered")]
    ProtocolInitializerNotRegistered(#[from] ProtocolRegistrationError),

    /// Chain observer error.
    #[error("chaim observer error: '{0}'")]
    ChainObserver(String),

    /// Encoding / Decoding error.
    #[error("codec error: '{0}'")]
    Codec(String),
}

/// Implementation of the SingleSigner.
pub struct MithrilSingleSigner {
    party_id: PartyId,
}

impl MithrilSingleSigner {
    /// Create a new instance of the MithrilSingleSigner.
    pub fn new(party_id: PartyId) -> Self {
        Self { party_id }
    }

    /// Create a cryptographic signer.
    async fn create_protocol_signer(
        &self,
        signers_with_stake: &[SignerWithStake],
        protocol_initializer: &ProtocolInitializer,
        chain_observer: Arc<dyn ChainObserver + 'static>,
    ) -> Result<ProtocolSigner, SingleSignerError> {
        let signers = signers_with_stake
            .iter()
            .filter(|signer| !signer.verification_key.is_empty())
            .collect::<Vec<&SignerWithStake>>();

        if signers.is_empty() {
            return Err(SingleSignerError::ProtocolSignerCreationFailure(
                "no signer".to_string(),
            ));
        }

        let stake_distribution = signers
            .iter()
            .map(|&s| s.into())
            .collect::<ProtocolStakeDistribution>();
        let mut key_reg = ProtocolKeyRegistration::init(&stake_distribution);
        for s in signers {
            let operational_certificate = match &s.operational_certificate {
                Some(operational_certificate) => {
                    key_decode_hex(operational_certificate).map_err(SingleSignerError::Codec)?
                }
                _ => None,
            };
            let verification_key =
                key_decode_hex(&s.verification_key).map_err(SingleSignerError::Codec)?;
            let kes_signature = match &s.verification_key_signature {
                Some(verification_key_signature) => Some(
                    key_decode_hex(verification_key_signature).map_err(SingleSignerError::Codec)?,
                ),
                _ => None,
            };
            let kes_period = match &operational_certificate {
                Some(operational_certificate) => chain_observer
                    .get_current_kes_period(operational_certificate)
                    .await
                    .map_err(|e| SingleSignerError::ChainObserver(e.to_string()))?
                    .unwrap_or_default(),
                None => 0,
            };
            key_reg
                .register(
                    Some(s.party_id.to_owned()),
                    operational_certificate,
                    kes_signature,
                    kes_period,
                    verification_key,
                )
                .map_err(|e| SingleSignerError::ProtocolSignerCreationFailure(e.to_string()))?;
        }
        let closed_reg = key_reg.close();

        Ok(protocol_initializer.to_owned().new_signer(closed_reg)?)
    }
}

#[async_trait]
impl SingleSigner for MithrilSingleSigner {
    async fn compute_single_signatures(
        &self,
        protocol_message: &ProtocolMessage,
        signers_with_stake: &[SignerWithStake],
        protocol_initializer: &ProtocolInitializer,
        chain_observer: Arc<dyn ChainObserver>,
    ) -> Result<Option<SingleSignatures>, SingleSignerError> {
        let protocol_signer = self
            .create_protocol_signer(signers_with_stake, protocol_initializer, chain_observer)
            .await?;
        let message = protocol_message.compute_hash().as_bytes().to_vec();

        info!("Signing protocol message"; "protocol_message" =>  #?protocol_message, "signed message" => protocol_message.compute_hash().encode_hex::<String>());

        match protocol_signer.sign(&message) {
            Some(signature) => {
                trace!(
                    "Party #{}: lottery #{:?} won",
                    self.party_id,
                    &signature.indexes
                );
                let encoded_signature =
                    key_encode_hex(&signature).map_err(SingleSignerError::Codec)?;
                let won_indexes = signature.indexes;

                Ok(Some(SingleSignatures::new(
                    self.party_id.clone(),
                    encoded_signature,
                    won_indexes,
                )))
            }
            None => {
                warn!("no signature computed, all lotteries were lost");
                Ok(None)
            }
        }
    }

    /// Compute aggregate verification key from stake distribution
    async fn compute_aggregate_verification_key(
        &self,
        signers_with_stake: &[SignerWithStake],
        protocol_initializer: &ProtocolInitializer,
        chain_observer: Arc<dyn ChainObserver>,
    ) -> Result<Option<String>, SingleSignerError> {
        match self
            .create_protocol_signer(signers_with_stake, protocol_initializer, chain_observer)
            .await
        {
            Ok(protocol_signer) => {
                let clerk = ProtocolClerk::from_signer(&protocol_signer);
                Ok(Some(
                    key_encode_hex(clerk.compute_avk()).map_err(SingleSignerError::Codec)?,
                ))
            }
            Err(SingleSignerError::ProtocolSignerCreationFailure(err)) => {
                warn!("compute_aggregate_verification_key::protocol_signer_creation_failure"; "error" => err);
                Ok(None)
            }
            Err(e) => Err(e),
        }
    }

    /// Get party id
    fn get_party_id(&self) -> ProtocolPartyId {
        self.party_id.clone()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use mithril_common::chain_observer::FakeObserver;
    use mithril_common::crypto_helper::tests_setup::*;
    use mithril_common::crypto_helper::{key_decode_hex, ProtocolClerk, ProtocolSingleSignature};
    use mithril_common::entities::ProtocolMessagePartKey;

    #[tokio::test]
    async fn compute_single_signature_success() {
        let chain_observer = Arc::new(FakeObserver::default());
        let snapshot_digest = "digest".to_string();
        let protocol_parameters = setup_protocol_parameters();
        let signers = setup_signers(5, &protocol_parameters);
        let signers_with_stake = signers
            .iter()
            .map(
                |(
                    party_id,
                    stake,
                    verification_key,
                    _verification_key_signature,
                    _operational_certificate,
                    _protocol_signer,
                    _protocol_initializer,
                )| {
                    SignerWithStake::new(
                        party_id.to_owned(),
                        key_encode_hex(verification_key).unwrap(),
                        None,
                        None,
                        *stake,
                    )
                },
            )
            .collect::<Vec<SignerWithStake>>();
        let current_signer = &signers[0];
        let single_signer = MithrilSingleSigner::new(current_signer.0.to_owned());
        let protocol_signer = &current_signer.5;
        let clerk = ProtocolClerk::from_signer(protocol_signer);
        let avk = clerk.compute_avk();
        let mut protocol_message = ProtocolMessage::new();
        protocol_message.set_message_part(ProtocolMessagePartKey::SnapshotDigest, snapshot_digest);
        let expected_message = protocol_message.compute_hash().as_bytes().to_vec();

        let sign_result = single_signer
            .compute_single_signatures(
                &protocol_message,
                &signers_with_stake,
                &current_signer.6,
                chain_observer,
            )
            .await
            .expect("single signer should not fail")
            .expect("single signer should produce a signature here");

        let decoded_sig: ProtocolSingleSignature = key_decode_hex(&sign_result.signature).unwrap();
        assert!(
            decoded_sig
                .verify(&protocol_parameters, &avk, &expected_message)
                .is_ok(),
            "produced single signature should be valid"
        );
        //TODO: decoded_sig.pk should probably be a StmVerificationKeyPoP, uncomment once fixed
        //assert_eq!(current_signer.2, decoded_sig.pk);
    }

    #[tokio::test]
    async fn compute_aggregate_verification_key_success() {
        let chain_observer = Arc::new(FakeObserver::default());
        let signers = setup_signers(5, &setup_protocol_parameters());
        let signers_with_stake = signers
            .iter()
            .map(
                |(
                    party_id,
                    stake,
                    verification_key,
                    _verification_key_signature,
                    _operational_certificate,
                    _protocol_signer,
                    _protocol_initializer,
                )| {
                    SignerWithStake::new(
                        party_id.to_owned(),
                        key_encode_hex(verification_key).unwrap(),
                        None,
                        None,
                        *stake,
                    )
                },
            )
            .collect::<Vec<SignerWithStake>>();
        let current_signer = &signers[0];
        let single_signer = MithrilSingleSigner::new(current_signer.0.to_owned());
        let protocol_initializer = &current_signer.6;
        single_signer
            .compute_aggregate_verification_key(
                &signers_with_stake,
                protocol_initializer,
                chain_observer,
            )
            .await
            .expect("compute aggregate verification signature should not fail")
            .expect("aggregate verification signature should not be empty");
    }
}
