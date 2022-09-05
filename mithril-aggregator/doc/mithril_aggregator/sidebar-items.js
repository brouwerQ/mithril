window.SIDEBAR_ITEMS = {"enum":[["ProtocolError","Error type for multi signer service."],["SnapshotError","Snapshotter error type."],["SnapshotStoreType","Snapshot store type enumerates the different kinds of snapshot stores. Local storage is mainly used by development and test environements while GCP is intended for production use."],["SnapshotUploaderType","Uploader needed to copy the snapshot once computed."]],"struct":[["AggregatorConfig","Configuration structure dedicated to the AggregatorRuntime."],["AggregatorRunner","The runner responsibility is to expose a code API for the state machine. It holds services and configuration."],["AggregatorRuntime","The AggregatorRuntime responsibility is to create a state machine to handle all actions required by the process of getting multi-signatures. See the documentation for more explanations about the Aggregator state machine."],["CertificatePendingStore","Store for [CertificatePending]."],["CertificateStore","Store for issued certificates."],["Config","Aggregator configuration"],["DependencyManager","DependencyManager handles the dependencies"],["DumbSnapshotUploader","Dummy uploader for test purposes."],["DumbSnapshotter","Snapshotter that does nothing. It is mainly used for test purposes."],["GzipSnapshotter","Gzip Snapshotter create a compressed file."],["LocalSnapshotStore","Store for local snapshots."],["LocalSnapshotUploader","LocalSnapshotUploader is a snapshot uploader working using local files"],["MultiSignerImpl","MultiSignerImpl is an implementation of the MultiSigner"],["ProtocolParametersStore","`ProtocolParameter` store."],["RemoteSnapshotStore","GoogleCloudPlatformSnapshotStore is a snapshot store working using Google Cloud Platform services"],["RemoteSnapshotUploader","GCPSnapshotUploader is a snapshot uploader working using Google Cloud Platform services"],["Server","Server"],["SingleSignatureStore","Store for [SingleSignatures]."],["VerificationKeyStore","Store for the `VerificationKey`."]],"trait":[["AggregatorRunnerTrait","This trait is intended to allow mocking the AggregatorRunner in tests. It exposes all the methods needed by the state machine."],["MultiSigner","MultiSigner is the cryptographic engine in charge of producing multi signatures from individual signatures"],["ProtocolParametersStorer","Trait for mocking `ProtocolParameterStore`."],["SnapshotStore","SnapshotStore represents a snapshot store interactor"],["SnapshotUploader","SnapshotUploader represents a snapshot uploader interactor"],["Snapshotter","Define the ability to create snapshots."],["VerificationKeyStorer","Mocking trait for `VerificationKeyStore`."]]};