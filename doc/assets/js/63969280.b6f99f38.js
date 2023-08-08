"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[3511],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(i),d=n,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||r;return i?a.createElement(u,l(l({ref:t},p),{},{components:i})):a.createElement(u,l({ref:t},p))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},24238:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const r={sidebar_position:2,sidebar_label:"Certificate Chain in depth"},l="Mithril certificate chain in depth",o={unversionedId:"mithril/mithril-protocol/certificates",id:"mithril/mithril-protocol/certificates",title:"Mithril certificate chain in depth",description:"Introduction",source:"@site/root/mithril/mithril-protocol/certificates.md",sourceDirName:"mithril/mithril-protocol",slug:"/mithril/mithril-protocol/certificates",permalink:"/doc/next/mithril/mithril-protocol/certificates",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/mithril/mithril-protocol/certificates.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Certificate Chain in depth"},sidebar:"mithrilSideBar",previous:{title:"Protocol in depth",permalink:"/doc/next/mithril/mithril-protocol/protocol"},next:{title:"Simulation",permalink:"/doc/next/mithril/mithril-protocol/simulation"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"The certificate chain design",id:"the-certificate-chain-design",level:2},{value:"The verification algorithm",id:"the-verification-algorithm",level:2},{value:"The coexistence of multiple certificate chains",id:"the-coexistence-of-multiple-certificate-chains",level:2},{value:"The need for backward compatibility",id:"the-need-for-backward-compatibility",level:2}],p={toc:c},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mithril-certificate-chain-in-depth"},"Mithril certificate chain in depth"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mithril protocol")," can be summarized as:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A protocol that enables stakeholders in a proof-of-stake blockchain network to individually sign messages. These signatures are then aggregated into a multi-signature, ensuring that stakeholders collectively represent a minimum share of the total stake.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"certificate chain")," is a Mithril component that certifies the ",(0,n.kt)("strong",{parentName:"p"},"stake distribution")," used to create the multi-signature. Its primary purpose is to prevent adversaries from executing an ",(0,n.kt)("strong",{parentName:"p"},"eclipse attack")," on the blockchain.  "),(0,n.kt)("p",null,"Without the certificate, the stake distribution can't be trusted. A malicious actor could relatively easily create a fake stake distribution and use it to produce a valid multi-signature, which would be embedded in a valid but non-genuine certificate. This certificate could be served by a dishonest Mithril aggregator node, leading an honest Mithril client to restore a non-genuine snapshot.  "),(0,n.kt)("h2",{id:"the-certificate-chain-design"},"The certificate chain design"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"The stake distribution of an epoch is computed by ",(0,n.kt)("strong",{parentName:"p"},"Cardano nodes")," at the end of each epoch. It becomes usable from the beginning of the following epoch.")),(0,n.kt)("p",null,"The way to certify the stake distribution used to create a multi-signature is by verifying that it has been previously signed in an earlier certificate. Then, one can recursively verify that the earlier certificate is valid in the same manner. This process can be structured as a chain of certificates, known as the Mithril certificate chain. The first certificate in the chain is discussed below."),(0,n.kt)("p",null,"Since multiple certificates can be created during the same epoch using the same stake distribution, it is not necessary to link to all of them for verification. Instead, it is sufficient to link to only one certificate from the previous epoch. By doing so, the verification process becomes faster and helps avoid network congestion. "),(0,n.kt)("p",null,"The first certificate in the certificate chain is known as the ",(0,n.kt)("strong",{parentName:"p"},"genesis certificate"),". Validating the stake distribution embedded in the genesis certificate is only possible by signing it with a private key linked to a widely accessible public key called the ",(0,n.kt)("strong",{parentName:"p"},"genesis key"),". The use of these specific keys ensures the integrity and security of the initial stake distribution and subsequent transitions within the blockchain network."),(0,n.kt)("p",null,"The diagram below presents the certificate chain design:\n",(0,n.kt)("a",{target:"_blank",href:i(42610).Z},(0,n.kt)("img",{alt:"Certificate Chain Design",src:i(6049).Z,width:"1475",height:"677"}))),(0,n.kt)("p",null,"Where the following notations have been used:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"C(p,n)"),": Certificate at trigger ",(0,n.kt)("inlineCode",{parentName:"li"},"p")," and epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FC(n)"),": First certificate of epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GC"),": Genesis certificate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"H()"),": Hash"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SD(n)"),": Stake distribution of epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"VK(n)"),": Verification key at epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"AVK(n)"),": Aggregrate verification key at epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n")," such as ",(0,n.kt)("inlineCode",{parentName:"li"},"AVK(n) = MKT_ROOT(SD(n) || VK(n))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MKT_ROOT()"),": Merkle-tree root"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BEACON(p,n)"),": Beacon at trigger ",(0,n.kt)("inlineCode",{parentName:"li"},"p")," and epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"METADATA(p,n)"),": Metadata of the certificate at trigger ",(0,n.kt)("inlineCode",{parentName:"li"},"p")," and epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MSG(p,n)"),": Message of the certificate at trigger ",(0,n.kt)("inlineCode",{parentName:"li"},"p")," and epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MULTI_SIG(p,n)"),": Multi-signature created to the message ",(0,n.kt)("inlineCode",{parentName:"li"},"H(MSG(p,n) || AVK(n-1))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GENESIS_SIG(MSG)"),": Genesis signature, the signature of ",(0,n.kt)("inlineCode",{parentName:"li"},"MSG")," with the genesis keys")),(0,n.kt)("p",null,"The hash of a certificate ",(0,n.kt)("inlineCode",{parentName:"p"},"H(C(p,n))")," is computed as the concatenation (",(0,n.kt)("inlineCode",{parentName:"p"},"||"),") of all its fields. Therefore, if one field is modified, its hash is different."),(0,n.kt)("p",null,"Information embedded in the ",(0,n.kt)("inlineCode",{parentName:"p"},"METADATA(p,n)")," field:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The version of the Mithril protocol"),(0,n.kt)("li",{parentName:"ul"},"The parameters of the Mithril protocol (",(0,n.kt)("inlineCode",{parentName:"li"},"k"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"m"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"phi_f"),")"),(0,n.kt)("li",{parentName:"ul"},"The date and time at which the multi-signature creation was initiated"),(0,n.kt)("li",{parentName:"ul"},"The date and time at which the certificate was sealed"),(0,n.kt)("li",{parentName:"ul"},"The list of the signers that actively contributed to the multi-signature.")),(0,n.kt)("p",null,"The message ",(0,n.kt)("inlineCode",{parentName:"p"},"MSG(p,n)")," is a map of multiple values associated with their respective keys. It provides a way to add more information to the certificates without breaking the chain itself. Added items can be any message that the signers can compute deterministically thanks to the Cardano consensus \u2013 an immutable files snapshot, the UTXO set, stake distribution, etc."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"trigger")," represents the instant at which a certificate should be created. It is combined with at least the associated ",(0,n.kt)("strong",{parentName:"p"},"epoch")," to create a ",(0,n.kt)("a",{parentName:"p",href:"/doc/next/glossary#beacon"},(0,n.kt)("strong",{parentName:"a"},"beacon"))," of the certificate. In the current implementation of the Cardano node database snapshot, this trigger is a new ",(0,n.kt)("a",{parentName:"p",href:"/doc/next/glossary#immutable-file-number"},(0,n.kt)("strong",{parentName:"a"},"immutable file number")),". ")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"aggregate verification key")," (",(0,n.kt)("inlineCode",{parentName:"p"},"AVK"),") is the root of the Merkle tree where each leaf is filled with ",(0,n.kt)("inlineCode",{parentName:"p"},"H(STAKE(signer) || VK(signer))"),". It represents the corresponding stake distribution in a condensed way.")),(0,n.kt)("h2",{id:"the-verification-algorithm"},"The verification algorithm"),(0,n.kt)("p",null,"Certificate chain verification can be stated as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CHAIN_VERIFY[C(p,n(p))] = CERT_VERIFY[C(p,n(p)] ^ CERT_VERIFY[FC(n(p))] ^ CERT_VERIFY[FC(n(p)-1)] ^ ... ^ CERT_VERIFY[FC(1)] ^ CERT_VERIFY[GC]\n")),(0,n.kt)("p",null,"Where the following notations have been used:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The epoch ",(0,n.kt)("inlineCode",{parentName:"li"},"n(p)")," depends on the trigger ",(0,n.kt)("inlineCode",{parentName:"li"},"p")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CHAIN_VERIFY[]"),": verify all the chain backward from a certificate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CERT_VERIFY[]"),": verify a specific certificate.")),(0,n.kt)("p",null,"A certificate chain is considered valid when there is at least one valid certificate per epoch, starting from a certificate and going all the way up to the genesis certificate of the chain."),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"non-genesis certificate")," is valid if and only if the ",(0,n.kt)("inlineCode",{parentName:"p"},"AVK")," used to verify the multi-signature is also part of the signed message used to create a valid multi-signature in a previously sealed certificate."),(0,n.kt)("p",null,"The genesis certificate is valid if and only if its genesis signature is verified with the advertised public genesis key."),(0,n.kt)("p",null,"An implementation of the algorithm would work as follows for a certificate:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),": Use this certificate as the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),": Verify (or fail) that the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_hash")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")," is valid by computing it and comparing it with the ",(0,n.kt)("inlineCode",{parentName:"li"},"hash")," field of the certificate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),": Get the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_hash")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")," by reading its value in the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),": Verify (or fail) that the ",(0,n.kt)("inlineCode",{parentName:"li"},"multi_signature")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")," is valid"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5"),": Retrieve the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")," that has the hash ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_hash"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.1"),": If it is not a ",(0,n.kt)("inlineCode",{parentName:"li"},"genesis_certificate"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.1.1"),": Verify (or fail) that the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_hash")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")," is valid by computing it and comparing it with the ",(0,n.kt)("inlineCode",{parentName:"li"},"hash")," field of the certificate:"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.1.2"),": Verify the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_avk"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.1.2.1"),": If the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")," is the ",(0,n.kt)("inlineCode",{parentName:"li"},"first_certificate")," of the epoch, verify (or fail) that the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_avk")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")," is part of the message signed by the multi-signature of the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.1.2.2"),": Else verify (or fail) that the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_avk")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")," is the same as the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_avk")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.1.3"),": Verify (or fail) that the ",(0,n.kt)("inlineCode",{parentName:"li"},"multi_signature")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")," is valid"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.1.4"),": Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")," as ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")," and start again at ",(0,n.kt)("strong",{parentName:"li"},"Step 2")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.2"),": If it is a ",(0,n.kt)("inlineCode",{parentName:"li"},"genesis_certificate"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.2.1"),": Verify (or fail) that the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_hash")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")," is valid by computing it and comparing it with the ",(0,n.kt)("inlineCode",{parentName:"li"},"hash")," field of the certificate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.2.2"),": Verify (or fail) that the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_avk")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"current_certificate")," is part of the message signed by the genesis signature of the ",(0,n.kt)("inlineCode",{parentName:"li"},"previous_certificate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.2.3"),": The certificate is valid (success).")))))),(0,n.kt)("h2",{id:"the-coexistence-of-multiple-certificate-chains"},"The coexistence of multiple certificate chains"),(0,n.kt)("p",null,"What would happen if some ",(0,n.kt)("strong",{parentName:"p"},"Mithril aggregator")," claims that not enough signatures were received? This doesn\u2019t really matter, as there will be a different Mithril aggregator that would collect sufficient signatures and aggregate them into a valid certificate."),(0,n.kt)("p",null,"Similarly, different Mithril aggregators might have different views of the individual signatures submitted (one aggregator might receive 10 signatures, and a different one could receive 11), which would result in different certificates signing the same message."),(0,n.kt)("p",null,"This would result in different certificate chains that would all link back to the genesis certificate. Indeed they would be represented by a tree of certificates where each traversal path from the root to a leaf represents a valid certificate chain."),(0,n.kt)("h2",{id:"the-need-for-backward-compatibility"},"The need for backward compatibility"),(0,n.kt)("p",null,"The certificate chain is designed to last. At a certain point, a multi-signature from legacy versions of the Mithril cryptographic library will require certification."),(0,n.kt)("p",null,"To achieve this backward compatibility, some options are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Handle multi-signature verification functions of legacy versions"),(0,n.kt)("li",{parentName:"ul"},"Recreate genesis certificates from time to time"),(0,n.kt)("li",{parentName:"ul"},"Create intermediate ",(0,n.kt)("strong",{parentName:"li"},"milestone certificates")," (with both a multi-signature and a genesis signature)"),(0,n.kt)("li",{parentName:"ul"},"Design a format migration algorithm.")))}m.isMDXComponent=!0},42610:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/files/certificate-chain-e700241394649f948e0aab47b0f881c9.jpg"},6049:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/certificate-chain-e700241394649f948e0aab47b0f881c9.jpg"}}]);