use anyhow::{anyhow, Context};
use async_trait::async_trait;
use slog_scope::{debug, warn};

use mithril_common::{
    crypto_helper::{ProtocolAggregationError, ProtocolMultiSignature},
    entities::{self},
    StdResult,
};

use crate::dependency_injection::EpochServiceWrapper;
use crate::entities::OpenMessage;

#[cfg(test)]
use mockall::automock;

/// MultiSigner is the cryptographic engine in charge of producing multi signatures from individual signatures
#[cfg_attr(test, automock)]
#[async_trait]
pub trait MultiSigner: Sync + Send {
    /// Verify a single signature
    async fn verify_single_signature(
        &self,
        message: &entities::ProtocolMessage,
        signatures: &entities::SingleSignatures,
    ) -> StdResult<()>;

    /// Creates a multi signature from single signatures
    async fn create_multi_signature(
        &self,
        open_message: &OpenMessage,
    ) -> StdResult<Option<ProtocolMultiSignature>>;
}

/// MultiSignerImpl is an implementation of the MultiSigner
pub struct MultiSignerImpl {
    epoch_service: EpochServiceWrapper,
}

impl MultiSignerImpl {
    /// MultiSignerImpl factory
    pub fn new(epoch_service: EpochServiceWrapper) -> Self {
        debug!("New MultiSignerImpl created");
        Self { epoch_service }
    }
}

#[async_trait]
impl MultiSigner for MultiSignerImpl {
    /// Verify a single signature
    async fn verify_single_signature(
        &self,
        message: &entities::ProtocolMessage,
        single_signature: &entities::SingleSignatures,
    ) -> StdResult<()> {
        debug!(
            "Verify single signature from {} at indexes {:?} for message {:?}",
            single_signature.party_id, single_signature.won_indexes, message
        );

        let epoch_service = self.epoch_service.read().await;
        let protocol_multi_signer = epoch_service.protocol_multi_signer().with_context(|| {
            "Multi Signer could not get protocol multi-signer from epoch service"
        })?;

        protocol_multi_signer
            .verify_single_signature(message, single_signature)
            .with_context(|| {
                format!("Multi Signer can not verify single signature for message '{message:?}'")
            })
    }

    /// Creates a multi signature from single signatures
    async fn create_multi_signature(
        &self,
        open_message: &OpenMessage,
    ) -> StdResult<Option<ProtocolMultiSignature>> {
        debug!("MultiSigner:create_multi_signature({open_message:?})");

        let epoch_service = self.epoch_service.read().await;
        let protocol_multi_signer = epoch_service.protocol_multi_signer().with_context(|| {
            "Multi Signer could not get protocol multi-signer from epoch service"
        })?;

        match protocol_multi_signer.aggregate_single_signatures(
            &open_message.single_signatures,
            &open_message.protocol_message,
        ) {
            Ok(multi_signature) => Ok(Some(multi_signature)),
            Err(ProtocolAggregationError::NotEnoughSignatures(actual, expected)) => {
                warn!("Could not compute multi-signature: Not enough signatures. Got only {} out of {}.", actual, expected);
                Ok(None)
            }
            Err(err) => Err(anyhow!(err).context(format!(
                "Multi Signer can not create multi-signature for entity type '{:?}'",
                open_message.signed_entity_type
            ))),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::services::FakeEpochService;
    use mithril_common::entities::SignerWithStake;
    use mithril_common::{
        crypto_helper::tests_setup::*,
        entities::{Beacon, Epoch, SignedEntityType},
        test_utils::{fake_data, MithrilFixtureBuilder},
    };
    use std::sync::Arc;
    use tokio::sync::RwLock;

    fn take_signatures_until_quorum_is_almost_reached(
        signatures: &mut Vec<entities::SingleSignatures>,
        quorum: usize,
    ) -> Vec<entities::SingleSignatures> {
        signatures.sort_by(|l, r| l.won_indexes.len().cmp(&r.won_indexes.len()));

        let mut result = vec![];
        let mut nb_won_indexes = 0;

        while let Some(signature) = signatures.first() {
            if signature.won_indexes.len() + nb_won_indexes >= quorum {
                break;
            }
            nb_won_indexes += signature.won_indexes.len();
            result.push(signatures.remove(0));
        }

        result
    }

    #[tokio::test]
    async fn test_multi_signer_multi_signature_ok() {
        let epoch = Epoch(5);
        let fixture = MithrilFixtureBuilder::default().with_signers(5).build();
        let protocol_parameters = fixture.protocol_parameters();
        let multi_signer = MultiSignerImpl::new(Arc::new(RwLock::new(
            FakeEpochService::from_fixture(epoch, &fixture),
        )));

        let message = setup_message();

        let mut signatures = Vec::new();

        let mut expected_certificate_signers: Vec<SignerWithStake> = Vec::new();
        for signer_fixture in fixture.signers_fixture() {
            if let Some(signature) = signer_fixture
                .protocol_signer
                .sign(message.compute_hash().as_bytes())
            {
                let won_indexes = signature.indexes.clone();

                signatures.push(entities::SingleSignatures::new(
                    signer_fixture.signer_with_stake.party_id.to_owned(),
                    signature.into(),
                    won_indexes,
                ));

                expected_certificate_signers.push(signer_fixture.signer_with_stake.to_owned())
            }
        }

        for signature in &signatures {
            multi_signer
                .verify_single_signature(&message, signature)
                .await
                .expect("single signature should be valid");
        }

        let signatures_to_almost_reach_quorum = take_signatures_until_quorum_is_almost_reached(
            &mut signatures,
            protocol_parameters.k as usize,
        );
        assert!(
            !signatures_to_almost_reach_quorum.is_empty(),
            "they should be at least one signature that can be registered without reaching the quorum"
        );

        let mut open_message = OpenMessage {
            epoch,
            signed_entity_type: SignedEntityType::CardanoImmutableFilesFull(Beacon {
                epoch,
                ..fake_data::beacon()
            }),
            protocol_message: message.clone(),
            is_certified: false,
            single_signatures: Vec::new(),
            ..OpenMessage::dummy()
        };

        // No signatures registered: multi-signer can't create the multi-signature
        assert!(multi_signer
            .create_multi_signature(&open_message)
            .await
            .expect("create multi signature should not fail")
            .is_none());

        // Add some signatures but not enough to reach the quorum: multi-signer should not create the multi-signature
        open_message.single_signatures = signatures_to_almost_reach_quorum;

        assert!(multi_signer
            .create_multi_signature(&open_message)
            .await
            .expect("create multi signature should not fail")
            .is_none());

        // Add the remaining signatures to reach the quorum: multi-signer should create a multi-signature
        open_message.single_signatures.append(&mut signatures);

        assert!(
            multi_signer
                .create_multi_signature(&open_message)
                .await
                .expect("create multi signature should not fail")
                .is_some(),
            "no multi-signature were computed"
        );
    }
}
