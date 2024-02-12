//! This example shows how to implement a Mithril client and use its features.
//!
//! In this example, the client interacts with an aggregator whose URL must be specified in the command to get the data.

use anyhow::anyhow;
use clap::Parser;
use slog::info;
use std::sync::Arc;

use mithril_client::common::TransactionHash;
use mithril_client::{ClientBuilder, MessageBuilder, MithrilResult, VerifiedCardanoTransactions};

#[derive(Parser, Debug)]
#[command(version)]
pub struct Args {
    /// Genesis verification key.
    #[clap(long, env = "GENESIS_VERIFICATION_KEY")]
    genesis_verification_key: String,

    /// Aggregator endpoint URL.
    #[clap(long, env = "AGGREGATOR_ENDPOINT")]
    aggregator_endpoint: String,

    /// Hashes of the transactions to certify.
    #[clap(value_delimiter = ',', required = true)]
    transactions_hashes: Vec<String>,
}

#[tokio::main]
async fn main() -> MithrilResult<()> {
    let args = Args::parse();
    let transactions_hashes = &args
        .transactions_hashes
        .iter()
        .map(|s| s.as_str())
        .collect::<Vec<&str>>();
    let logger = build_logger();
    let client =
        ClientBuilder::aggregator(&args.aggregator_endpoint, &args.genesis_verification_key)
            .with_logger(logger.clone())
            .build()?;

    info!(logger, "Fetching a proof for the given transactions...",);
    let cardano_transaction_proof = client
        .cardano_transaction_proof()
        .get_proofs(transactions_hashes)
        .await
        .unwrap();

    info!(logger, "Verifying the proof…",);
    let verified_transactions = cardano_transaction_proof.verify().unwrap();

    info!(
        logger,
        "Fetching the associated certificate and verifying the certificate chain…",
    );
    let certificate = client
        .certificate()
        .verify_chain(&cardano_transaction_proof.certificate_hash)
        .await
        .unwrap();

    info!(
        logger,
        "Verify that the proof is signed in the associated certificate",
    );
    let message = MessageBuilder::new()
        .compute_cardano_transactions_proofs_message(&certificate, &verified_transactions);
    if !certificate.match_message(&message) {
        return Err(anyhow!(
            "Proof and certificate doesn't match (certificate hash = '{}').",
            certificate.hash
        ));
    }

    log_certify_information(
        &verified_transactions,
        &cardano_transaction_proof.non_certified_transactions,
    );

    Ok(())
}

pub fn log_certify_information(
    verified_transactions: &VerifiedCardanoTransactions,
    non_certified_transactions: &[TransactionHash],
) {
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

fn build_logger() -> slog::Logger {
    use slog::Drain;

    let decorator = slog_term::TermDecorator::new().build();
    let drain = slog_term::FullFormat::new(decorator).build().fuse();
    let drain = slog_async::Async::new(drain).build().fuse();

    slog::Logger::root(Arc::new(drain), slog::o!())
}
