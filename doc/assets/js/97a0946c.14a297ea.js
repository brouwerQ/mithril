"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[7327],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),k=l(a),d=n,c=k["".concat(s,".").concat(d)]||k[d]||m[d]||o;return a?r.createElement(c,i(i({ref:t},h),{},{components:a})):r.createElement(c,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},i="Glossary",p={unversionedId:"glossary",id:"version-maintained/glossary",title:"Glossary",description:"Here is a comprehensive list of definitions for some common terms used in this guide.",source:"@site/versioned_docs/version-maintained/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/doc/glossary",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/glossary.md",tags:[],version:"maintained",sidebarPosition:1,frontMatter:{sidebar_position:1}},s={},l=[{value:"Beacon",id:"beacon",level:2},{value:"Cardano Network",id:"cardano-network",level:2},{value:"Cardano Node",id:"cardano-node",level:2},{value:"Cardano Key Pair",id:"cardano-key-pair",level:2},{value:"Certificate",id:"certificate",level:2},{value:"Epoch",id:"epoch",level:2},{value:"Immutable File Number",id:"immutable-file-number",level:2},{value:"Individual Signature",id:"individual-signature",level:2},{value:"Mithril Aggregator",id:"mithril-aggregator",level:2},{value:"Mithril Client",id:"mithril-client",level:2},{value:"Mithril Network",id:"mithril-network",level:2},{value:"Mithril Protocol",id:"mithril-protocol",level:2},{value:"Mithril Signer",id:"mithril-signer",level:2},{value:"Multi Signature",id:"multi-signature",level:2},{value:"Snapshot",id:"snapshot",level:2},{value:"Stake Distribution",id:"stake-distribution",level:2},{value:"Stake Pool Operator (SPO)",id:"stake-pool-operator-spo",level:2},{value:"Verification Key",id:"verification-key",level:2}],h={toc:l};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"glossary"},"Glossary"),(0,n.kt)("p",null,"Here is a comprehensive list of definitions for some common terms used in this guide."),(0,n.kt)("h2",{id:"beacon"},"Beacon"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Beacon")," represents a point of the Blockchain for which a ",(0,n.kt)("a",{parentName:"p",href:"#certificate"},(0,n.kt)("strong",{parentName:"a"},"Mithril Certificate"))," is created. It embeds at least the version of the ",(0,n.kt)("a",{parentName:"p",href:"#cardano-network"},(0,n.kt)("strong",{parentName:"a"},"Cardano Network"))," that is targeted, and the associated ",(0,n.kt)("a",{parentName:"p",href:"#epoch"},(0,n.kt)("strong",{parentName:"a"},"epoch"))," and ",(0,n.kt)("a",{parentName:"p",href:"#immutable-file-number"},(0,n.kt)("strong",{parentName:"a"},"immutable file number")),"."),(0,n.kt)("h2",{id:"cardano-network"},"Cardano Network"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Cardano Network")," is a ",(0,n.kt)("strong",{parentName:"p"},"Proof-of-Stake")," Blockchain platform that supports the ADA cryptocurrency."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cardano.org/introduction"},"here"))),(0,n.kt)("h2",{id:"cardano-node"},"Cardano Node"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Cardano Node")," is a node that runs in a ",(0,n.kt)("a",{parentName:"p",href:"#cardano-network"},(0,n.kt)("strong",{parentName:"a"},"Cardano Network")),". There are several types of nodes, among them are ",(0,n.kt)("strong",{parentName:"p"},"Cardano Full Nodes")," that hold a copy of the whole Blockchain. They can be used by ",(0,n.kt)("strong",{parentName:"p"},"Wallets"),", ",(0,n.kt)("a",{parentName:"p",href:"#stake-pool-operator-spo"},(0,n.kt)("strong",{parentName:"a"},"Stake Pool Operator")),", ",(0,n.kt)("strong",{parentName:"p"},"Exchanges")," or ",(0,n.kt)("strong",{parentName:"p"},"Dapps"),". One of the use cases of the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-network"},(0,n.kt)("strong",{parentName:"a"},"Mithril Network"))," is to bootsrap rapidly a ",(0,n.kt)("strong",{parentName:"p"},"Cardano Full Node"),"."),(0,n.kt)("h2",{id:"cardano-key-pair"},"Cardano Key Pair"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Cardano Key Pair")," is an asymmetric key pair used to identify a ",(0,n.kt)("a",{parentName:"p",href:"#stake-pool-operator-spo"},(0,n.kt)("strong",{parentName:"a"},"Stake Pool Operator"))," on the ",(0,n.kt)("a",{parentName:"p",href:"#cardano-network"},(0,n.kt)("strong",{parentName:"a"},"Cardano Network")),"."),(0,n.kt)("h2",{id:"certificate"},"Certificate"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mithril Aggregator")," combines the produced ",(0,n.kt)("a",{parentName:"p",href:"#multi-signature"},(0,n.kt)("strong",{parentName:"a"},"multi signature"))," and some metadata into a ",(0,n.kt)("a",{parentName:"p",href:"#certificate"},(0,n.kt)("strong",{parentName:"a"},"Mithril Certificate"))," that will be later used by the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-client"},(0,n.kt)("strong",{parentName:"a"},"Mithril Client"))," to verify the authenticity of a ",(0,n.kt)("a",{parentName:"p",href:"#snapshot"},(0,n.kt)("strong",{parentName:"a"},"snapshot")),". The certificates are chained so that the ",(0,n.kt)("a",{parentName:"p",href:"#stake-distribution"},(0,n.kt)("strong",{parentName:"a"},"stake distribution"))," used to create the signatures is verifiably genuine."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-protocol/certificates"},"here"))),(0,n.kt)("h2",{id:"epoch"},"Epoch"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"#cardano-network"},(0,n.kt)("strong",{parentName:"a"},"Cardano Network"))," uses ",(0,n.kt)("strong",{parentName:"p"},"Epochs")," to group blocks computed in a certain amount of time (approximately 5 days). It is part of the design of its ",(0,n.kt)("strong",{parentName:"p"},"Proof-of-Stake")," consensus ",(0,n.kt)("strong",{parentName:"p"},"Ouroboros"),". At the end of each epoch, the ",(0,n.kt)("a",{parentName:"p",href:"#stake-distribution"},(0,n.kt)("strong",{parentName:"a"},"stake distribution"))," of the ending epoch is computed."),(0,n.kt)("h2",{id:"immutable-file-number"},"Immutable File Number"),(0,n.kt)("p",null,"Inside a the database of a ",(0,n.kt)("a",{parentName:"p",href:"#cardano-node"},(0,n.kt)("strong",{parentName:"a"},"Cardano Node")),", the Blockchain state is stored in ",(0,n.kt)("strong",{parentName:"p"},"Immutable files")," which never change once committed. These immutable files are designed so that they are deterministically produced and thus are the same on any ",(0,n.kt)("strong",{parentName:"p"},"Cardano Node"),". These files are created by following an incremental number, the ",(0,n.kt)("strong",{parentName:"p"},"Immutable File Number")," and there are three different immutable files for each number (i.e. ",(0,n.kt)("em",{parentName:"p"},"chunk"),", ",(0,n.kt)("em",{parentName:"p"},"primary")," and ",(0,n.kt)("em",{parentName:"p"},"secondary"),"). Only the files up to the penultimate ",(0,n.kt)("strong",{parentName:"p"},"Immutable File Number")," are considered as committed and final, the last ",(0,n.kt)("strong",{parentName:"p"},"Immutable File Number")," files are constantly evolving. The ",(0,n.kt)("a",{parentName:"p",href:"#snapshot"},(0,n.kt)("strong",{parentName:"a"},"Snapshots"))," produced by the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-network"},(0,n.kt)("strong",{parentName:"a"},"Mithril Network"))," rely on these ",(0,n.kt)("strong",{parentName:"p"},"immutable files"),"."),(0,n.kt)("h2",{id:"individual-signature"},"Individual Signature"),(0,n.kt)("p",null,"For each ",(0,n.kt)("a",{parentName:"p",href:"#beacon"},(0,n.kt)("strong",{parentName:"a"},"Beacon")),", the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-signer"},(0,n.kt)("strong",{parentName:"a"},"Mithril Signers"))," will compute on their end a message representing the Blockchain state, and sign it with their ",(0,n.kt)("strong",{parentName:"p"},"Verification Keys")," in order to create an ",(0,n.kt)("a",{parentName:"p",href:"#individual-signature"},(0,n.kt)("strong",{parentName:"a"},"Individual Signature")),". Upon winning one or multiple lotteries, the ",(0,n.kt)("strong",{parentName:"p"},"Mithril Signer")," will be able to use this ",(0,n.kt)("strong",{parentName:"p"},"Individual Signature")," to participate in the creation of a ",(0,n.kt)("a",{parentName:"p",href:"#multi-signature"},(0,n.kt)("strong",{parentName:"a"},"Multi Signature")),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-protocol/protocol"},"here"))),(0,n.kt)("h2",{id:"mithril-aggregator"},"Mithril Aggregator"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mithril Aggregator")," is a trustless node of the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-network"},(0,n.kt)("strong",{parentName:"a"},"Mithril Network"))," that orchestrates the work of the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-signer"},(0,n.kt)("strong",{parentName:"a"},"Mithril Signer"))," nodes and that gathers their ",(0,n.kt)("a",{parentName:"p",href:"#individual-signature"},(0,n.kt)("strong",{parentName:"a"},"individual signatures"))," to produce ",(0,n.kt)("a",{parentName:"p",href:"#multi-signature"},(0,n.kt)("strong",{parentName:"a"},"Mithril multi signatures"))," and their associated ",(0,n.kt)("a",{parentName:"p",href:"#certificate"},(0,n.kt)("strong",{parentName:"a"},"certificates")),"."),(0,n.kt)("p",null,"It is also in charge of creating and storing the ",(0,n.kt)("a",{parentName:"p",href:"#snapshot"},(0,n.kt)("strong",{parentName:"a"},"snapshot"))," archive."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-network/aggregator"},"here"))),(0,n.kt)("h2",{id:"mithril-client"},"Mithril Client"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mithril Client")," node of the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-network"},(0,n.kt)("strong",{parentName:"a"},"Mithril Network"))," is used to restore a ",(0,n.kt)("a",{parentName:"p",href:"#cardano-node"},(0,n.kt)("strong",{parentName:"a"},"Cardano full node"))," by retrieving, from a ",(0,n.kt)("a",{parentName:"p",href:"#mithril-aggregator"},(0,n.kt)("strong",{parentName:"a"},"Mithril Aggregator")),", a remote ",(0,n.kt)("a",{parentName:"p",href:"#snapshot"},(0,n.kt)("strong",{parentName:"a"},"snapshot")),", its ",(0,n.kt)("a",{parentName:"p",href:"#certificate"},(0,n.kt)("strong",{parentName:"a"},"certificate"))," chain and by verifying their validity thanks to the Mithril cryptographic primitives."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-network/client"},"here"))),(0,n.kt)("h2",{id:"mithril-network"},"Mithril Network"),(0,n.kt)("p",null,"In its current version, the ",(0,n.kt)("strong",{parentName:"p"},"Mithril Network")," is a network of nodes responsible for creating ",(0,n.kt)("a",{parentName:"p",href:"#snapshot"},(0,n.kt)("strong",{parentName:"a"},"Snapshots"))," and ",(0,n.kt)("a",{parentName:"p",href:"#certificate"},(0,n.kt)("strong",{parentName:"a"},"Certificates"))," that enable fast bootstrap of a ",(0,n.kt)("a",{parentName:"p",href:"#cardano-node"},(0,n.kt)("strong",{parentName:"a"},"Cardano Node")),". It runs on top of the ",(0,n.kt)("a",{parentName:"p",href:"#cardano-network"},(0,n.kt)("strong",{parentName:"a"},"Cardano Network")),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-network/architecture"},"here"))),(0,n.kt)("h2",{id:"mithril-protocol"},"Mithril Protocol"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mithril Protocol")," allows ",(0,n.kt)("strong",{parentName:"p"},"stakeholders")," in a ",(0,n.kt)("strong",{parentName:"p"},"Proof-of-Stake")," Blockchain network to individually ",(0,n.kt)("strong",{parentName:"p"},"sign messages")," that are aggregated into a ",(0,n.kt)("strong",{parentName:"p"},"multi signature")," which guarantees that they represent a minimum share of the total stakes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-protocol/protocol"},"here"))),(0,n.kt)("h2",{id:"mithril-signer"},"Mithril Signer"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mithril Signer")," is a node of the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-network"},(0,n.kt)("strong",{parentName:"a"},"Mithril Network"))," that works transparently on top of the ",(0,n.kt)("a",{parentName:"p",href:"#stake-pool-operator-spo"},(0,n.kt)("strong",{parentName:"a"},"Stake Pool Operator"))," Cardano nodes and which individually signs the ledger state."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-network/signer"},"here"))),(0,n.kt)("h2",{id:"multi-signature"},"Multi Signature"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mithril Multi Signature")," is an aggregate of ",(0,n.kt)("a",{parentName:"p",href:"#individual-signature"},(0,n.kt)("strong",{parentName:"a"},"Individual Signatures"))," which guarantees that a minimum share of the total stakes has participated in its creation."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-protocol/protocol"},"here"))),(0,n.kt)("h2",{id:"snapshot"},"Snapshot"),(0,n.kt)("p",null,"A Mithril Snapshot is a signed archive of the Blockchain state that can be used by ",(0,n.kt)("a",{parentName:"p",href:"#mithril-client"},(0,n.kt)("strong",{parentName:"a"},"Mithril Clients"))," to restore a ",(0,n.kt)("a",{parentName:"p",href:"#cardano-node"},(0,n.kt)("strong",{parentName:"a"},"Cardano Full Node")),". It is uniquely identified by its fingerprint or ",(0,n.kt)("strong",{parentName:"p"},"Digest")," which is part of the message signed by the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-network"},(0,n.kt)("strong",{parentName:"a"},"Mithril Network")),"."),(0,n.kt)("h2",{id:"stake-distribution"},"Stake Distribution"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Cardano Stake Distribution")," is the list of all the ",(0,n.kt)("a",{parentName:"p",href:"#stake-pool-operator-spo"},(0,n.kt)("strong",{parentName:"a"},"Stake Pool Operators"))," ",(0,n.kt)("strong",{parentName:"p"},"Pool Id")," addresses and their associated ",(0,n.kt)("strong",{parentName:"p"},"Stakes Share")," of the total ",(0,n.kt)("strong",{parentName:"p"},"Stakes")," of the ",(0,n.kt)("a",{parentName:"p",href:"#cardano-network"},(0,n.kt)("strong",{parentName:"a"},"Cardano Network")),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mithril Stake Distribution")," is the list of all the ",(0,n.kt)("a",{parentName:"p",href:"#stake-pool-operator-spo"},(0,n.kt)("strong",{parentName:"a"},"Stake Pool Operators"))," (that are running a ",(0,n.kt)("a",{parentName:"p",href:"#mithril-signer"},(0,n.kt)("strong",{parentName:"a"},"Mithril Signer")),") ",(0,n.kt)("strong",{parentName:"p"},"Pool Id")," addresses, their associated ",(0,n.kt)("strong",{parentName:"p"},"Stakes Share")," of the total ",(0,n.kt)("strong",{parentName:"p"},"Stakes")," of the ",(0,n.kt)("a",{parentName:"p",href:"#cardano-network"},(0,n.kt)("strong",{parentName:"a"},"Cardano Network")),", and their signing ",(0,n.kt)("a",{parentName:"p",href:"#verification-key"},(0,n.kt)("strong",{parentName:"a"},"Verification Key")),"."),(0,n.kt)("h2",{id:"stake-pool-operator-spo"},"Stake Pool Operator (SPO)"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Stake Pool Operator"),", also known as a ",(0,n.kt)("strong",{parentName:"p"},"SPO"),", represents a party that holds (via delegation) ",(0,n.kt)("strong",{parentName:"p"},"Stakes")," in the ",(0,n.kt)("a",{parentName:"p",href:"#cardano-network"},(0,n.kt)("strong",{parentName:"a"},"Cardano Network")),". The stakes entitle it to participate in the block production thanks to the Cardano consensus mechanism."),(0,n.kt)("h2",{id:"verification-key"},"Verification Key"),(0,n.kt)("p",null,"In order to create ",(0,n.kt)("a",{parentName:"p",href:"#individual-signature"},(0,n.kt)("strong",{parentName:"a"},"Individual Signatures")),", the ",(0,n.kt)("a",{parentName:"p",href:"#mithril-signer"},(0,n.kt)("strong",{parentName:"a"},"Mithril Signers"))," must register their signing public key: the ",(0,n.kt)("strong",{parentName:"p"},"Verification Keys"),". To garantee their genuineness, they are signed by the associated ",(0,n.kt)("a",{parentName:"p",href:"#cardano-key-pair"},(0,n.kt)("strong",{parentName:"a"},"Cardano Key Pair")),". It is worth mentioning that a ",(0,n.kt)("a",{parentName:"p",href:"#mithril-signer"},(0,n.kt)("strong",{parentName:"a"},"Mithril Signer"))," must be aware of the ",(0,n.kt)("strong",{parentName:"p"},"Verification Keys")," of all the other ",(0,n.kt)("strong",{parentName:"p"},"Mithril Signers")," in order to produce valid ",(0,n.kt)("strong",{parentName:"p"},"Individual Signatures"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information is available ",(0,n.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-protocol/protocol"},"here"))))}m.isMDXComponent=!0}}]);