use anyhow::{anyhow, Context};
use async_trait::async_trait;
use pallas_addresses::Address;
use pallas_codec::utils::{Bytes, CborWrap, TagWrap};
use pallas_network::{
    facades::NodeClient,
    miniprotocols::localstate::{
        queries_v16::{
            self, Addr, Addrs, PostAlonsoTransactionOutput, TransactionOutput, UTxOByAddress,
        },
        Client,
    },
};
use pallas_primitives::ToCanonicalJson;
use std::path::{Path, PathBuf};

use crate::{
    chain_observer::{interface::*, ChainAddress, TxDatum},
    crypto_helper::{KESPeriod, OpCert},
    entities::{Epoch, StakeDistribution},
    CardanoNetwork, StdResult,
};

use super::model::{try_inspect, Datum, Datums};
use super::CardanoCliChainObserver;

/// A runner that uses Pallas library to interact with a Cardano node using N2C Ouroboros mini-protocols
pub struct PallasChainObserver {
    socket: PathBuf,
    network: CardanoNetwork,
    fallback: CardanoCliChainObserver,
}

impl From<anyhow::Error> for ChainObserverError {
    fn from(err: anyhow::Error) -> Self {
        ChainObserverError::General(err)
    }
}

impl PallasChainObserver {
    /// Creates a new PallasObserver while accepting a fallback CliRunner
    pub fn new(socket: &Path, network: CardanoNetwork, fallback: CardanoCliChainObserver) -> Self {
        Self {
            socket: socket.to_owned(),
            network,
            fallback,
        }
    }

    /// Creates and returns a new `NodeClient` connected to the specified socket.
    async fn new_client(&self) -> StdResult<NodeClient> {
        let magic = self.network.code();
        let client = NodeClient::connect(&self.socket, magic).await?;

        Ok(client)
    }

    /// Returns a reference to the fallback `CardanoCliChainObserver` instance.
    fn get_fallback(&self) -> &CardanoCliChainObserver {
        &self.fallback
    }

    /// Creates and returns a new `NodeClient`, handling any potential errors.
    async fn get_client(&self) -> StdResult<NodeClient> {
        self.new_client()
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to create new client")
    }

    /// Fetches the current epoch number using the provided `statequery` client.
    async fn get_epoch(&self, statequery: &mut Client) -> StdResult<u32> {
        statequery
            .acquire(None)
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to acquire statequery")?;

        let era = queries_v16::get_current_era(statequery)
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to get current era")?;

        let epoch = queries_v16::get_block_epoch_number(statequery, era)
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to get block epoch number")?;

        Ok(epoch)
    }

    /// Returns inline datum tag from the given `Values` instance.
    fn get_datum_tag(&self, utxo: &PostAlonsoTransactionOutput) -> StdResult<TagWrap<Bytes, 24>> {
        Ok(utxo
            .inline_datum
            .as_ref()
            .with_context(|| "PallasChainObserver failed to get inline datum")?
            .1
            .clone())
    }

    /// Returns inline datums from the given `Values` instance.
    fn inspect_datum(&self, utxo: &PostAlonsoTransactionOutput) -> StdResult<Datum> {
        let datum = self.get_datum_tag(utxo)?;
        let datum = CborWrap(datum).to_vec();

        try_inspect::<Datum>(datum)
    }

    /// Serializes datum to `TxDatum` instance.
    fn serialize_datum(&self, utxo: &PostAlonsoTransactionOutput) -> StdResult<TxDatum> {
        let datum = self.inspect_datum(utxo)?;
        let serialized = serde_json::to_string(&datum.to_json())
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to serialize datum")?;

        Ok(TxDatum(serialized))
    }

    /// Maps the given `UTxOByAddress` instance to Datums.
    fn map_datums(&self, transaction: UTxOByAddress) -> StdResult<Datums> {
        transaction
            .utxo
            .iter()
            .filter_map(|(_, utxo)| match utxo {
                TransactionOutput::Current(output) => output
                    .inline_datum
                    .as_ref()
                    .map(|_| self.serialize_datum(output)),
                _ => None,
            })
            .collect::<StdResult<Datums>>()
    }

    /// Returns a vector of `TxDatum` instances.
    async fn get_utxo_datums(
        &self,
        client: &mut NodeClient,
        address: &ChainAddress,
    ) -> Result<Datums, ChainObserverError> {
        let statequery = client.statequery();
        let utxo = self.get_utxo_by_address(statequery, address).await?;

        Ok(self.map_datums(utxo)?)
    }

    /// Fetches the current UTxO by address using the provided `statequery` client.
    async fn get_utxo_by_address(
        &self,
        statequery: &mut Client,
        address: &ChainAddress,
    ) -> StdResult<UTxOByAddress> {
        statequery
            .acquire(None)
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to acquire statequery")?;

        let era = queries_v16::get_current_era(statequery)
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to get current era")?;

        let addr: Address = Address::from_bech32(address)
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to parse address")?;

        let addr: Addr = addr.to_vec().into();
        let addrs: Addrs = vec![addr];
        let utxo = queries_v16::get_utxo_by_address(statequery, era, addrs)
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver failed to get utxo")?;

        Ok(utxo)
    }

    /// Processes a state query with the `NodeClient`, releasing the state query.
    async fn process_statequery(&self, client: &mut NodeClient) -> StdResult<()> {
        let statequery = client.statequery();
        statequery
            .send_release()
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver send release failed")?;

        statequery
            .send_done()
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver send done failed")?;

        Ok(())
    }

    /// Synchronizes the `NodeClient` with the cardano server using `chainsync`.
    async fn sync(&self, client: &mut NodeClient) -> StdResult<()> {
        client
            .chainsync()
            .send_done()
            .await
            .map_err(|err| anyhow!(err))
            .with_context(|| "PallasChainObserver chainsync send done failed")?;
        Ok(())
    }

    /// Post-processes a state query afterwards.
    async fn post_process_statequery(&self, client: &mut NodeClient) -> StdResult<()> {
        self.process_statequery(client).await?;
        self.sync(client).await?;

        Ok(())
    }
}

#[async_trait]
impl ChainObserver for PallasChainObserver {
    async fn get_current_epoch(&self) -> Result<Option<Epoch>, ChainObserverError> {
        /* let mut client = self.get_client().await?;

        let epoch = self.get_epoch(client.statequery()).await?;

        self.post_process_statequery(&mut client).await?;

        client.abort().await;

        Ok(Some(Epoch(epoch as u64))) */
        let fallback = self.get_fallback();
        fallback.get_current_epoch().await
    }

    async fn get_current_datums(
        &self,
        address: &ChainAddress,
    ) -> Result<Datums, ChainObserverError> {
        /* let mut client = self.get_client().await?;

        let datums = self.get_utxo_datums(&mut client, address).await?;

        self.post_process_statequery(&mut client).await?;

        client.abort().await;

        Ok(datums) */
        let fallback = self.get_fallback();
        fallback.get_current_datums(address).await
    }

    async fn get_current_stake_distribution(
        &self,
    ) -> Result<Option<StakeDistribution>, ChainObserverError> {
        let fallback = self.get_fallback();
        fallback.get_current_stake_distribution().await
    }

    async fn get_current_kes_period(
        &self,
        opcert: &OpCert,
    ) -> Result<Option<KESPeriod>, ChainObserverError> {
        let fallback = self.get_fallback();
        fallback.get_current_kes_period(opcert).await
    }
}

#[cfg(test)]
mod tests {
    use std::fs;

    use pallas_codec::utils::{AnyCbor, AnyUInt, KeyValuePairs, TagWrap};
    use pallas_crypto::hash::Hash;
    use pallas_network::miniprotocols::localstate::{queries_v16::Value, ClientQueryRequest};
    use tokio::net::UnixListener;

    use super::*;
    use crate::{chain_observer::test_cli_runner::TestCliRunner, CardanoNetwork};

    fn get_fake_utxo_by_address() -> UTxOByAddress {
        let tx_hex = "1e4e5cf2889d52f1745b941090f04a65dea6ce56c5e5e66e69f65c8e36347c17";
        let tx_bytes: [u8; 32] = hex::decode(tx_hex).unwrap().try_into().unwrap();
        let transaction_id = Hash::from(tx_bytes);
        let index = AnyUInt::MajorByte(2);
        let lovelace = AnyUInt::MajorByte(2);
        let hex_datum = "D8799F58407B226D61726B657273223A5B7B226E616D65223A227468616C6573222C2265706F6368223A307D5D2C227369676E6174757265223A22383566323265626261645840333335376338656132646630363230393766396131383064643335643966336261316432363832633732633864313232383866616438636238643063656565625838366134643665383465653865353631376164323037313836366363313930373466326137366538373864663166393733346438343061227DFF";
        let datum = hex::decode(hex_datum).unwrap().into();
        let tag = TagWrap::<_, 24>::new(datum);
        let inline_datum = Some((1_u16, tag));

        let address: Address =
            Address::from_bech32("addr_test1vr80076l3x5uw6n94nwhgmv7ssgy6muzf47ugn6z0l92rhg2mgtu0")
                .unwrap();
        let address: Addr = address.to_vec().into();
        let values = TransactionOutput::Current(PostAlonsoTransactionOutput {
            address,
            amount: Value::Coin(lovelace),
            inline_datum,
            script_ref: None,
        });
        let utxo = KeyValuePairs::from(vec![(
            queries_v16::UTxO {
                transaction_id,
                index,
            },
            values,
        )]);

        UTxOByAddress { utxo }
    }

    /// pallas responses mock server.
    async fn mock_server(server: &mut pallas_network::facades::NodeServer) -> AnyCbor {
        let query: queries_v16::Request =
            match server.statequery().recv_while_acquired().await.unwrap() {
                ClientQueryRequest::Query(q) => q.into_decode().unwrap(),
                x => panic!("unexpected message from client: {x:?}"),
            };

        match query {
            queries_v16::Request::LedgerQuery(queries_v16::LedgerQuery::HardForkQuery(
                queries_v16::HardForkQuery::GetCurrentEra,
            )) => AnyCbor::from_encode(4),
            queries_v16::Request::LedgerQuery(queries_v16::LedgerQuery::BlockQuery(
                _,
                queries_v16::BlockQuery::GetEpochNo,
            )) => AnyCbor::from_encode([8]),
            queries_v16::Request::LedgerQuery(queries_v16::LedgerQuery::BlockQuery(
                _,
                queries_v16::BlockQuery::GetUTxOByAddress(_),
            )) => AnyCbor::from_encode(get_fake_utxo_by_address()),
            _ => panic!("unexpected query from client: {query:?}"),
        }
    }

    /// Creates a new work directory in the system's temporary folder.
    fn create_temp_dir(folder_name: &str) -> PathBuf {
        let temp_dir = std::env::temp_dir()
            .join("mithril_test")
            .join("pallas_chain_observer_test")
            .join(folder_name);
        if temp_dir.exists() {
            fs::remove_dir_all(&temp_dir).expect("Previous work dir removal failed");
        }
        fs::create_dir_all(&temp_dir).expect("Work dir creation failed");
        temp_dir
    }

    /// Sets up a mock server.
    async fn setup_server(socket_path: PathBuf) -> tokio::task::JoinHandle<()> {
        tokio::spawn({
            async move {
                if socket_path.exists() {
                    fs::remove_file(&socket_path).expect("Previous socket removal failed");
                }

                let unix_listener = UnixListener::bind(socket_path.as_path()).unwrap();
                let mut server = pallas_network::facades::NodeServer::accept(&unix_listener, 10)
                    .await
                    .unwrap();

                server.statequery().recv_while_idle().await.unwrap();
                server.statequery().send_acquired().await.unwrap();

                let result = mock_server(&mut server).await;
                server.statequery().send_result(result).await.unwrap();

                let result = mock_server(&mut server).await;
                server.statequery().send_result(result).await.unwrap();
            }
        })
    }

    #[tokio::test]
    async fn get_current_epoch_with_fallback() {
        let socket_path = create_temp_dir("get_current_epoch_with_fallback").join("node.socket");
        let server = setup_server(socket_path.clone()).await;
        let client = tokio::spawn(async move {
            let fallback = CardanoCliChainObserver::new(Box::<TestCliRunner>::default());
            let observer = PallasChainObserver::new(
                socket_path.as_path(),
                CardanoNetwork::TestNet(10),
                fallback,
            );
            observer.get_current_epoch().await.unwrap().unwrap()
        });

        let (_, client_res) = tokio::join!(server, client);
        let epoch = client_res.expect("Client failed");
        assert_eq!(epoch, 8);
    }

    #[tokio::test]
    async fn get_current_datums_with_fallback() {
        let socket_path = create_temp_dir("get_current_datums_with_fallback").join("node.socket");
        let server = setup_server(socket_path.clone()).await;
        let client = tokio::spawn(async move {
            let fallback = CardanoCliChainObserver::new(Box::<TestCliRunner>::default());
            let observer = PallasChainObserver::new(
                socket_path.as_path(),
                CardanoNetwork::TestNet(10),
                fallback,
            );
            let address =
                "addr_test1vr80076l3x5uw6n94nwhgmv7ssgy6muzf47ugn6z0l92rhg2mgtu0".to_string();
            observer.get_current_datums(&address).await.unwrap()
        });

        let (_, client_res) = tokio::join!(server, client);
        let datums = client_res.expect("Client failed");
        assert_eq!(vec![TxDatum(r#"{"constructor":0,"fields":[{"bytes":"7b226d61726b657273223a5b7b226e616d65223a227468616c6573222c2265706f6368223a307d5d2c227369676e6174757265223a2238356632326562626164"},{"bytes":"33333537633865613264663036323039376639613138306464333564396633626131643236383263373263386431323238386661643863623864306365656562"},{"bytes":"366134643665383465653865353631376164323037313836366363313930373466326137366538373864663166393733346438343061227d"}]}"#.to_string())], datums);
    }
}
