use mithril_common::entities::{CardanoTransactionsCommitment, SignedEntity};
use mithril_common::messages::{CardanoTransactionCommitmentMessage, ToMessageAdapter};

/// Adapter to convert [CardanoTransaction] to [CardanoTransactionCommitmentMessage] instances
pub struct ToCardanoTransactionMessageAdapter;

impl
    ToMessageAdapter<
        SignedEntity<CardanoTransactionsCommitment>,
        CardanoTransactionCommitmentMessage,
    > for ToCardanoTransactionMessageAdapter
{
    /// Method to trigger the conversion
    fn adapt(
        from: SignedEntity<CardanoTransactionsCommitment>,
    ) -> CardanoTransactionCommitmentMessage {
        CardanoTransactionCommitmentMessage {
            merkle_root: from.artifact.merkle_root.clone(),
            beacon: from.artifact.beacon,
            hash: from.artifact.hash,
            certificate_hash: from.certificate_id,
            created_at: from.created_at,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn adapt_ok() {
        let signed_entity = SignedEntity::<CardanoTransactionsCommitment>::dummy();
        let cardano_stake_distribution_message_expected = CardanoTransactionCommitmentMessage {
            merkle_root: signed_entity.artifact.merkle_root.clone(),
            beacon: signed_entity.artifact.beacon.clone(),
            hash: signed_entity.artifact.hash.clone(),
            certificate_hash: signed_entity.certificate_id.clone(),
            created_at: signed_entity.created_at,
        };

        let cardano_stake_distribution_message =
            ToCardanoTransactionMessageAdapter::adapt(signed_entity);

        assert_eq!(
            cardano_stake_distribution_message_expected,
            cardano_stake_distribution_message
        );
    }
}
