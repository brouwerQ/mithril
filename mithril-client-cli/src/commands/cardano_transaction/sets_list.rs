use clap::Parser;
use cli_table::format::Justify;
use cli_table::{print_stdout, Cell, Table};
use config::{builder::DefaultState, ConfigBuilder};
use std::collections::HashMap;

use crate::commands::client_builder_with_fallback_genesis_key;
use crate::configuration::ConfigParameters;
use mithril_client::MithrilResult;

/// Cardano transaction commitment LIST command
#[derive(Parser, Debug, Clone)]
pub struct CardanoTransactionSetsListCommand {
    /// Enable JSON output.
    #[clap(long)]
    json: bool,
}

impl CardanoTransactionSetsListCommand {
    /// Main command execution
    pub async fn execute(&self, config_builder: ConfigBuilder<DefaultState>) -> MithrilResult<()> {
        let config = config_builder.build()?;
        let params = ConfigParameters::new(config.try_deserialize::<HashMap<String, String>>()?);
        let client = client_builder_with_fallback_genesis_key(&params)?.build()?;
        let lines = client.cardano_transaction_proof().list().await?;

        if self.json {
            println!("{}", serde_json::to_string(&lines)?);
        } else {
            let lines = lines
                .into_iter()
                .map(|item| {
                    vec![
                        format!("{}", item.beacon.epoch).cell(),
                        format!("{}", item.beacon.immutable_file_number).cell(),
                        item.beacon.network.cell(),
                        item.hash.cell(),
                        item.certificate_hash.cell(),
                        item.created_at.to_string().cell(),
                    ]
                })
                .collect::<Vec<_>>()
                .table()
                .title(vec![
                    "Epoch".cell(),
                    "Immutable".cell(),
                    "Network".cell(),
                    "Hash".cell(),
                    "Certificate Hash".cell(),
                    "Created".cell().justify(Justify::Right),
                ]);
            print_stdout(lines)?;
        }

        Ok(())
    }
}
