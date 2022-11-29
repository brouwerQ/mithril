"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[2603],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>d});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(i),d=r,u=m["".concat(l,".").concat(d)]||m[d]||c[d]||n;return i?a.createElement(u,o(o({ref:t},h),{},{components:i})):a.createElement(u,o({ref:t},h))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<n;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6513:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=i(7462),r=(i(7294),i(3905));const n={sidebar_position:1,sidebar_label:"Protocol in depth"},o="Mithril Protocol in depth",s={unversionedId:"mithril/mithril-protocol/protocol",id:"version-maintained/mithril/mithril-protocol/protocol",title:"Mithril Protocol in depth",description:"The research paper Mithril: Stake-based Threshold Multisignatures is downloadable here.",source:"@site/versioned_docs/version-maintained/mithril/mithril-protocol/protocol.md",sourceDirName:"mithril/mithril-protocol",slug:"/mithril/mithril-protocol/protocol",permalink:"/doc/mithril/mithril-protocol/protocol",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/mithril/mithril-protocol/protocol.md",tags:[],version:"maintained",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Protocol in depth"},sidebar:"mithrilSideBar",previous:{title:"Mithril Protocol",permalink:"/doc/category/mithril-protocol"},next:{title:"Certificate Chain in depth",permalink:"/doc/mithril/mithril-protocol/certificates"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"The phases of the protocol",id:"the-phases-of-the-protocol",level:2},{value:"1. Protocol Establishment Phase",id:"1-protocol-establishment-phase",level:3},{value:"2. Initialisation Phase",id:"2-initialisation-phase",level:3},{value:"3. Operations Phase",id:"3-operations-phase",level:3}],h={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mithril-protocol-in-depth"},"Mithril Protocol in depth"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The research paper ",(0,r.kt)("inlineCode",{parentName:"p"},"Mithril: Stake-based Threshold Multisignatures")," is downloadable ",(0,r.kt)("a",{parentName:"p",href:"https://iohk.io/en/research/library/papers/mithril-stake-based-threshold-multisignatures/"},"here"),".")),(0,r.kt)("admonition",{title:"New",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83c\udd95 Interact with the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Protocol")," by experiencing with our ",(0,r.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-protocol/simulation"},"protocol simulation"),". This will help you understand how the participants interact to create a multi signature and what's the impact of the protocol parameters.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Network"),", please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-network/architecture"},"Architecture")," page.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The full details of the Mithril protocol are provided in the published paper. This section is high-level description of\nthe protocol in layman\u2019s terms."),(0,r.kt)("p",null,"In a nutshell, Mithril is a signature scheme that generates a certificate that convinces\nthe verifiers that a portion of the stake of a system has signed a message."),(0,r.kt)("p",null,'However, rather than taking the whole set of\nstake holders, Mithril\n"randomly selects" a subset of them, and requires a portion of that subset to provide a signature.'),(0,r.kt)("p",null,"An analogy would be\nthat Mithril signers participate in a lottery which defines if they are entitled to sign a particular message. In case\nthey win this lottery, then they can go ahead and sign the message. Whenever a sufficient number of parties have won the\nlottery (and submitted their respective signatures), a certificate can be computed."),(0,r.kt)("h2",{id:"the-phases-of-the-protocol"},"The phases of the protocol"),(0,r.kt)("p",null,"The protocol has 3 different phases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Protocol Establishment phase"),' which determines the parameters that will be used by Mithril participants. Also,\nduring this phase, the set of "allowed signers" is defined.'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Initialization phase")," during which Mithril nodes generate and exchange keys,"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Operations phase")," during which nodes sign and aggregate signatures of messages to produce certificates.")),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that all 3 phases require the set of parties (",(0,r.kt)("inlineCode",{parentName:"p"},"P")," in the paper) to be fixed. During the protocol establishment phase\nthree important parameters are generated:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m"),', defines the number of "lotteries" that a single user can participate in to sign a message.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k"),", defines the required number of single signatures to produce a valid certificate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"phi_f")," (as denoted in the library) which can be interpreted as the chance of a signer to win a lottery."))),(0,r.kt)("p",null,"Now, let's assume that we want to generate a valid signature for message ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," using a mithril signature. Then we need ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," valid signatures from the subset of signers."),(0,r.kt)("p",null,"To this end, each player is allowed to participate in ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),' "lotteries" to see if it "wins" the right to sign the message.'),(0,r.kt)("p",null,"If none of this lotteries are won by this particular signer, then it will not be able to submit a signature."),(0,r.kt)("p",null,"If, contrarily, the signer wins one of the lotteries (or more than one), then it\ncan submit the corresponding signature (or all of the corresponding signatures respectively) to produce the valid certificate. The chance of winning the lottery is defined by a function over ",(0,r.kt)("inlineCode",{parentName:"p"},"phi_f"),". The closer ",(0,r.kt)("inlineCode",{parentName:"p"},"phi_f")," is to one, the higher the chances of winning a lottery are."),(0,r.kt)("p",null,"This means that there exists the possibility that a particular message cannot be certified using Mithril under a given set of parameters. There could be a scenario where not enough signers have won the allowed lotteries to produce a valid certificate. In which case the parameters can be adapted."),(0,r.kt)("h3",{id:"1-protocol-establishment-phase"},"1. Protocol Establishment Phase"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select/fix a prime order group to be used as basis for multi-signature scheme"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"When using bulletproof"),': Generate a "random" string, for example by taking some unpredictable data from the net (hash\nof latest block, stockmarket quotes) and hash it'),(0,r.kt)("li",{parentName:"ul"},"When requested by a party, return the parameters and random string")),(0,r.kt)("p",null,"This setup phase must be done only once and is valid for as long as the same proof system, e.g the parameters can very well be statically baked into the various systems producing and consuming Mithril proofs."),(0,r.kt)("p",null,"Similarly, during the protocol establishment phase, the parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"phi_f")," are defined, as well as the set of allowed signers."),(0,r.kt)("h3",{id:"2-initialisation-phase"},"2. Initialisation Phase"),(0,r.kt)("p",null,"This phase includes both the actual initialisation phase of each party, and the registration of keys."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Party retrieves the protocol parameters"),(0,r.kt)("li",{parentName:"ul"},"It uses the parameters to generate a new key pair of a verification key and a signing key, plus a Proof-of-possession\n",(0,r.kt)("inlineCode",{parentName:"li"},"\u03ba"),". The verification key and PoP are broadcast to all other parties for registration, which is expected to last for\nsome limited period of time. An important difference with the paper is that registration is not centralised in the \"\nidealised\" manner described in the paper. Instead, all signers will register against all other signers. Meaning that\neach signer will trace it's own registration procedure. Together with other participants' keys, the stake of each\nparty is stored."),(0,r.kt)("li",{parentName:"ul"},"Then an aggregate verification key (",(0,r.kt)("inlineCode",{parentName:"li"},"AVK")," in the paper) is created from the registration material, in the form of a\nMerkle-tree.")),(0,r.kt)("p",null,"The key dissemination process can also happen on-chain, which makes sense as the parties need to have some guarantees about the validity of keys and stakes of each other party."),(0,r.kt)("p",null,"This phase happens once for each ",(0,r.kt)("em",{parentName:"p"},"instance")," of the protocol running."),(0,r.kt)("h3",{id:"3-operations-phase"},"3. Operations Phase"),(0,r.kt)("p",null,"Operations run in cycles, where each cycle is triggered by a message (eg. a snapshot of the UTxO set) to sign for which\na quorum of ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," valid signatures must be submitted."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each party needs to check for eligibility to sign the message. It may be eligible to sign the same message more than once. This check is performed for ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," distinct indices. For every index, the signer evaluates a function (parameterized with ",(0,r.kt)("inlineCode",{parentName:"p"},"phi_f"),") that takes its stake as input. If the result of the function is ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", then the signer is eligible to sign this message for the given index.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For every valid signature, it creates a proof (",(0,r.kt)("inlineCode",{parentName:"p"},"\u03c0"),") containing a signature of the message, verification key, stake and paths of party in the Merkle-tree.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then, multiple signatures can be aggregated together to form a certificate (",(0,r.kt)("inlineCode",{parentName:"p"},"\u03c4"),") by:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Verifying signatures from each party:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Checking the party is authorized to sign for the given index (using the same procedure as the signing)"),(0,r.kt)("li",{parentName:"ul"},"Checking the proof is valid which means:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check the evaluation threshold is correct for party\u2019s stake given the message, index and signature"),(0,r.kt)("li",{parentName:"ul"},"Check the provided path exists in the aggregate keys' Merkle-tree"),(0,r.kt)("li",{parentName:"ul"},"Verify the signature of the message is valid w.r.t to verification key"))))),(0,r.kt)("li",{parentName:"ul"},"Producing an aggregation key from all verification keys"),(0,r.kt)("li",{parentName:"ul"},"Producing an aggregate signature from all signatures ",(0,r.kt)("inlineCode",{parentName:"li"},"\u03bc")),(0,r.kt)("li",{parentName:"ul"},"Producing a proof using the aggregate keys, the message and the vector of individual proofs from each party:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the concatenation proof system all these values are simply packed together to form the proof,"),(0,r.kt)("li",{parentName:"ul"},"In the case of ",(0,r.kt)("em",{parentName:"li"},"bulletproof")," system, a more compact proof is generated."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each certificate ",(0,r.kt)("inlineCode",{parentName:"p"},"\u03c4")," can be verified to be valid for some message, using the known setup parameters to verify the certificate\u2019s proof and then verifying the aggregate signatures and verification keys."))),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that if the individual signatures are broadcast to all parties, then each party can independently produce the certificates. In particular, the party that performs aggregation is not required to have any specific knowledge, nor it is assumed to be honest. This means that ",(0,r.kt)("em",{parentName:"p"},"any")," third party that has access to the individual signatures can perform the signature aggregation.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Network"),", please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-network/architecture"},"Architecture")," page.")))}c.isMDXComponent=!0}}]);