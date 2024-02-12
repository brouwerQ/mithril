# Mithril client library example: Cardano transaction

> [!WARNING]
> This example utilizes features of the Mithril client library that are currently marked as unstable.
> Use them at your own risk, and expect possible modifications in future releases.
> Please refer to the links provided at the end of this file for the most up-to-date developer documentation.

## Description

This example shows how to implement a Mithril client and use its features related to the `Cardano Transaction` type.

In this example, the client interacts with an aggregator and performs operations to:
- gives a Cardano transaction proofs based on the transactions passed as arguments
- verifies Cardano transaction proofs are valid
- verify a certificate chain
- compute a message for a Cardano transaction proofs
- verify that the certificate signs the computed message

## Build and run the example

```bash
# Build from the crate directory
cargo build

# Run from the crate directory
cargo run -- --aggregator-endpoint=YOUR_AGGREGATOR_ENDPOINT --genesis-verification-key=YOUR_GENESIS_VERIFICATION_KEY CARDANO_TX_HASH1,CARDANO_TX_HASH2,CARDANO_TX_HASH3

# Example using data from Sanchonet
cargo run -- --aggregator-endpoint=https://aggregator.testing-sanchonet.api.mithril.network/aggregator --genesis-verification-key=5b3132372c37332c3132342c3136312c362c3133372c3133312c3231332c3230372c3131372c3139382c38352c3137362c3139392c3136322c3234312c36382c3132332c3131392c3134352c31332c3233322c3234332c34392c3232392c322c3234392c3230352c3230352c33392c3233352c34345d 3b71679e2ca53f5e8b2b8484be3423e3deddec70d41b510cb46b5bacfcb9d76b
```

## Links
- **Developer documentation**: https://docs.rs/mithril-client/latest/mithril_client/
- **Crates.io**: https://crates.io/crates/mithril-client