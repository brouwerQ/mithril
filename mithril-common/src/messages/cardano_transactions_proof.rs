use crate::entities::{
    CardanoTransactionsSetProof, ProtocolMessage, ProtocolMessagePartKey, TransactionHash,
};
use crate::messages::CardanoTransactionsSetProofMessagePart;
use crate::StdError;
use serde::{Deserialize, Serialize};
use thiserror::Error;

/// A cryptographic proof for a set of Cardano transactions
#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CardanoTransactionsProofsMessage {
    /// Hash of the certificate that validate this proof merkle root
    pub certificate_hash: String,

    /// Transactions that have been certified
    pub certified_transactions: Vec<CardanoTransactionsSetProofMessagePart>,

    /// Transactions that could not be certified
    pub non_certified_transactions: Vec<TransactionHash>,
}

/// Set of transactions verified by [CardanoTransactionsProofsMessage::verify].
///
/// Can be used to reconstruct part of a [ProtocolMessage] in order to check that
/// it is indeed signed by a certificate.
#[derive(Debug, Clone, PartialEq)]
pub struct VerifiedCardanoTransactions {
    certificate_hash: String,
    merkle_root: String,
    certified_transactions: Vec<TransactionHash>,
}

impl VerifiedCardanoTransactions {
    /// Hash of the certificate that signs this struct Merkle root.
    pub fn certificate_hash(&self) -> &str {
        &self.certificate_hash
    }

    /// Hashes of the certified transactions
    pub fn certified_transactions(&self) -> &[TransactionHash] {
        &self.certified_transactions
    }

    /// Fill the given [ProtocolMessage] with the data associated with this
    /// verified transactions set.
    pub fn fill_protocol_message(&self, message: &mut ProtocolMessage) {
        message.set_message_part(
            ProtocolMessagePartKey::CardanoTransactionsMerkleRoot,
            self.merkle_root.clone(),
        );
    }
}

#[derive(Error, Debug)]
pub enum VerifyCardanoTransactionsProofsError {
    /// The verification of an individual [CardanoTransactionsSetProofMessagePart] failed.
    #[error("Invalid set proof for transactions hashes: {transactions_hashes:?}")]
    InvalidSetProof {
        transactions_hashes: Vec<TransactionHash>,
        source: StdError,
    },

    /// No certified transactions set proof to verify
    #[error("There's no certified transaction to verify")]
    NoCertifiedTransaction,

    /// Not all certified transactions set proof have the same merkle root.
    ///
    /// This is problematic because all the set proof should be generated from the same
    /// merkle tree which root is signed in the [crate::entities::Certificate][certificate].
    #[error("All certified transactions set proofs must share the same Merkle root")]
    NonMatchingMerkleRoot,

    /// An individual [CardanoTransactionsSetProofMessagePart] could not be converted to a
    /// [CardanoTransactionsProofsMessage] for verification.
    #[error("Malformed data or unknown Cardano Set Proof format")]
    MalformedData(#[source] StdError),
}

impl CardanoTransactionsProofsMessage {
    /// Create a new `CardanoTransactionsProofsMessage`
    pub fn new(
        certificate_hash: &str,
        certified_transactions: Vec<CardanoTransactionsSetProofMessagePart>,
        non_certified_transactions: Vec<TransactionHash>,
    ) -> Self {
        Self {
            certificate_hash: certificate_hash.to_string(),
            certified_transactions,
            non_certified_transactions,
        }
    }

    /// Verify that all the certified transactions proofs are valid
    ///
    /// The following checks will be executed:
    /// 1 - Check that each Merkle proof is valid
    /// 2 - Check that all proofs share the same Merkle root
    /// 3 - Assert that there's at least one certified transaction
    ///
    /// If every check is okay, the hex encoded Merkle root of the proof will be returned.
    pub fn verify(
        &self,
    ) -> Result<VerifiedCardanoTransactions, VerifyCardanoTransactionsProofsError> {
        let mut merkle_root = None;

        for certified_transaction in &self.certified_transactions {
            let certified_transaction: CardanoTransactionsSetProof = certified_transaction
                .clone()
                .try_into()
                .map_err(VerifyCardanoTransactionsProofsError::MalformedData)?;
            certified_transaction.verify().map_err(|e| {
                VerifyCardanoTransactionsProofsError::InvalidSetProof {
                    transactions_hashes: certified_transaction.transactions_hashes().to_vec(),
                    source: e,
                }
            })?;

            let tx_merkle_root = Some(certified_transaction.merkle_root());

            if merkle_root.is_none() {
                merkle_root = tx_merkle_root;
            } else if merkle_root != tx_merkle_root {
                return Err(VerifyCardanoTransactionsProofsError::NonMatchingMerkleRoot);
            }
        }

        Ok(VerifiedCardanoTransactions {
            certificate_hash: self.certificate_hash.clone(),
            merkle_root: merkle_root
                .ok_or(VerifyCardanoTransactionsProofsError::NoCertifiedTransaction)?,
            certified_transactions: self
                .certified_transactions
                .iter()
                .flat_map(|c| c.transactions_hashes.clone())
                .collect(),
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::crypto_helper::MKProof;

    #[test]
    fn verify_malformed_proofs_fail() {
        let txs_proofs = CardanoTransactionsProofsMessage::new(
            "whatever",
            vec![CardanoTransactionsSetProofMessagePart {
                transactions_hashes: vec![],
                proof: "invalid".to_string(),
            }],
            vec![],
        );

        let error = txs_proofs
            .verify()
            .expect_err("Malformed txs proofs should fail to verify itself");
        assert!(
            matches!(
                error,
                VerifyCardanoTransactionsProofsError::MalformedData(_)
            ),
            "Expected 'MalformedData' error but got '{:?}'",
            error
        );
    }

    #[test]
    fn verify_no_certified_transaction_fail() {
        let txs_proofs = CardanoTransactionsProofsMessage::new("whatever", vec![], vec![]);

        let error = txs_proofs
            .verify()
            .expect_err("Proofs without certified transactions should fail to verify itself");
        assert!(
            matches!(
                error,
                VerifyCardanoTransactionsProofsError::NoCertifiedTransaction
            ),
            "Expected 'NoCertifiedTransactions' error but got '{:?}'",
            error
        );
    }

    #[test]
    fn verify_valid_proofs() {
        let set_proof = CardanoTransactionsSetProof::dummy();
        let expected = VerifiedCardanoTransactions {
            certificate_hash: "whatever".to_string(),
            merkle_root: set_proof.merkle_root(),
            certified_transactions: set_proof.transactions_hashes().to_vec(),
        };
        let txs_proofs = CardanoTransactionsProofsMessage::new(
            "whatever",
            vec![set_proof.try_into().unwrap()],
            vec![],
        );

        let verified_txs = txs_proofs
            .verify()
            .expect("Valid txs proofs should verify itself");

        assert_eq!(expected, verified_txs);
    }

    #[test]
    fn verify_invalid_proofs() {
        let set_proof = CardanoTransactionsSetProof::new(
            vec!["invalid1".to_string()],
            MKProof::from_leaves(&["invalid2"]).unwrap(),
        );
        let txs_proofs = CardanoTransactionsProofsMessage::new(
            "whatever",
            vec![set_proof.try_into().unwrap()],
            vec![],
        );

        let error = txs_proofs
            .verify()
            .expect_err("Invalid txs proofs should fail to verify itself");

        assert!(
            matches!(
                error,
                VerifyCardanoTransactionsProofsError::InvalidSetProof { .. },
            ),
            "Expected 'InvalidSetProof' error but got '{:?}'",
            error
        );
    }

    #[test]
    fn verify_valid_proof_with_different_merkle_root_fail() {
        let set_proofs = vec![
            CardanoTransactionsSetProof::new(
                vec!["tx-1".to_string()],
                MKProof::from_leaves(&["tx-1"]).unwrap(),
            ),
            CardanoTransactionsSetProof::new(
                vec!["tx-2".to_string()],
                MKProof::from_leaves(&["tx-2"]).unwrap(),
            ),
        ];
        let txs_proofs = CardanoTransactionsProofsMessage::new(
            "whatever",
            set_proofs
                .into_iter()
                .map(|p| p.try_into().unwrap())
                .collect(),
            vec![],
        );

        let error = txs_proofs
            .verify()
            .expect_err("Txs proofs with non matching merkle root should fail to verify itself");

        assert!(
            matches!(
                error,
                VerifyCardanoTransactionsProofsError::NonMatchingMerkleRoot { .. },
            ),
            "Expected 'NonMatchingMerkleRoot' error but got '{:?}'",
            error
        );
    }
}
