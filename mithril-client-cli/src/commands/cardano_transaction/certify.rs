use anyhow::{anyhow, Context};
use clap::Parser;
use config::{builder::DefaultState, ConfigBuilder, Map, Source, Value, ValueKind};
use slog_scope::debug;
use std::{collections::HashMap, sync::Arc};

use mithril_client::{
    common::TransactionHash, MessageBuilder, MithrilCertificate, MithrilResult,
    VerifiedCardanoTransactions,
};

use crate::utils::{IndicatifFeedbackReceiver, ProgressOutputType, ProgressPrinter};
use crate::{commands::client_builder, configuration::ConfigParameters};

/// Clap command to show a given Cardano transaction sets
#[derive(Parser, Debug, Clone)]
pub struct CardanoTransactionsCertifyCommand {
    /// Enable JSON output.
    #[clap(long)]
    json: bool,

    /// Genesis Verification Key to check the certificate chain.
    #[clap(long, env = "GENESIS_VERIFICATION_KEY")]
    genesis_verification_key: Option<String>,

    /// Hashes of the transactions to certify.
    #[clap(value_delimiter = ',', required = true)]
    transactions_hashes: Vec<String>,
}

impl CardanoTransactionsCertifyCommand {
    /// Cardano transaction certify command
    pub async fn execute(&self, config_builder: ConfigBuilder<DefaultState>) -> MithrilResult<()> {
        let config = config_builder.add_source(self.clone()).build()?;
        let params = ConfigParameters::new(config.try_deserialize::<HashMap<String, String>>()?);

        let progress_output_type = if self.json {
            ProgressOutputType::JsonReporter
        } else {
            ProgressOutputType::Tty
        };
        let progress_printer = ProgressPrinter::new(progress_output_type, 4);
        let client = client_builder(&params)?
            .add_feedback_receiver(Arc::new(IndicatifFeedbackReceiver::new(
                progress_output_type,
            )))
            .build()?;

        progress_printer.report_step(1, "Fetching a proof for the given transactions…")?;
        let cardano_transaction_proof = client
            .cardano_transaction_proof()
            .get_proofs(&self.transactions_hashes)
            .await
            .with_context(|| {
                format!(
                    "Can not get proof from aggregator, transactions hashes: '{:?}'",
                    self.transactions_hashes
                )
            })?;
        debug!(
            "Got Proof from aggregator, proof: {:?}",
            cardano_transaction_proof
        );

        progress_printer.report_step(2, "Verifying the proof…")?;
        let verified_transactions = cardano_transaction_proof
            .verify()
            .with_context(|| "Proof verification failed")?;
        debug!("Verified Transactions: {:?}", verified_transactions);

        progress_printer.report_step(
            3,
            "Fetching the associated certificate and verifying the certificate chain…",
        )?;
        let certificate = client
            .certificate()
            .verify_chain(&cardano_transaction_proof.certificate_hash)
            .await
            .with_context(|| {
                format!(
                    "Can not verify the certificate chain from certificate_hash: '{}'",
                    verified_transactions.certificate_hash()
                )
            })?;

        Self::verify_proof_match_certificate(
            4,
            &progress_printer,
            &certificate,
            &verified_transactions,
        )?;

        Self::log_certify_information(
            &verified_transactions,
            &cardano_transaction_proof.non_certified_transactions,
            self.json,
        )
    }

    fn verify_proof_match_certificate(
        step_number: u16,
        progress_printer: &ProgressPrinter,
        certificate: &MithrilCertificate,
        verified_transactions: &VerifiedCardanoTransactions,
    ) -> MithrilResult<()> {
        progress_printer.report_step(
            step_number,
            "Verify that the proof is signed in the associated certificate",
        )?;
        let message = MessageBuilder::new()
            .compute_cardano_transactions_proofs_message(certificate, verified_transactions);
        if !certificate.match_message(&message) {
            return Err(anyhow!(
                "Proof and certificate doesn't match (certificate hash = '{}').",
                certificate.hash
            ));
        }

        Ok(())
    }

    fn log_certify_information(
        verified_transactions: &VerifiedCardanoTransactions,
        non_certified_transactions: &[TransactionHash],
        json_output: bool,
    ) -> MithrilResult<()> {
        if json_output {
            println!(
                r#"{{"certified_transactions": {}, "non_certified_transactions": {}}}"#,
                serde_json::to_string(verified_transactions.certified_transactions())?,
                serde_json::to_string(non_certified_transactions)?,
            );
        } else {
            println!(
                r###"Cardano transactions with hashes "'{}'" have been successfully checked against Mithril multi-signature contained in the certificate."###,
                verified_transactions.certified_transactions().join(","),
            );

            if !non_certified_transactions.is_empty() {
                println!(
                    r###"No proof could be computed for Cardano transactions with hashes "'{}'".
                    
                    Mithril may not have signed those transactions yet, please try again later."###,
                    non_certified_transactions.join(","),
                );
            }
        }

        Ok(())
    }
}

impl Source for CardanoTransactionsCertifyCommand {
    fn clone_into_box(&self) -> Box<dyn Source + Send + Sync> {
        Box::new(self.clone())
    }

    fn collect(&self) -> Result<Map<String, Value>, config::ConfigError> {
        let mut map = Map::new();
        let namespace = "clap arguments".to_string();

        if let Some(genesis_verification_key) = self.genesis_verification_key.clone() {
            map.insert(
                "genesis_verification_key".to_string(),
                Value::new(Some(&namespace), ValueKind::from(genesis_verification_key)),
            );
        }

        Ok(map)
    }
}
