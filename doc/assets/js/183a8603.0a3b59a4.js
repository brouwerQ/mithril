"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[9937,5458],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(n),u=r,g=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2667:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(5892);const l={sidebar_position:3},o="Mithril Client Node",p={unversionedId:"manual/developer-docs/nodes/mithril-client",id:"version-maintained/manual/developer-docs/nodes/mithril-client",title:"Mithril Client Node",description:"This is the node of the Mithril Network responsible for restoring the Cardano blockchain on an empty node from a certified snapshot.",source:"@site/versioned_docs/version-maintained/manual/developer-docs/nodes/mithril-client.md",sourceDirName:"manual/developer-docs/nodes",slug:"/manual/developer-docs/nodes/mithril-client",permalink:"/doc/manual/developer-docs/nodes/mithril-client",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/manual/developer-docs/nodes/mithril-client.md",tags:[],version:"maintained",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSideBar",previous:{title:"Mithril Signer Node",permalink:"/doc/manual/developer-docs/nodes/mithril-signer"},next:{title:"API Reference",permalink:"/doc/manual/developer-docs/references"}},d={},m=[{value:"Resources",id:"resources",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Download source",id:"download-source",level:2},{value:"Development test and build",id:"development-test-and-build",level:2},{value:"Release build and run binary",id:"release-build-and-run-binary",level:2},{value:"Build and run Docker container",id:"build-and-run-docker-container",level:2},{value:"Subcommands",id:"subcommands",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:2}],s={toc:m};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mithril-client-node"},"Mithril Client Node"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is the node of the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Network")," responsible for restoring the ",(0,r.kt)("strong",{parentName:"p"},"Cardano")," blockchain on an empty node from a certified snapshot.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more information about the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Network"),", please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-network/architecture"},"Architecture")," page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more information about the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Client"),", please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-network/client"},"Client Node")," page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checkout the ",(0,r.kt)("a",{parentName:"p",href:"/doc/manual/getting-started/bootstrap-cardano-node"},(0,r.kt)("inlineCode",{parentName:"a"},"Bootstrap a Cardano Node"))," guide.")))),(0,r.kt)("admonition",{title:"Mithril Networks",type:"note"},(0,r.kt)(i.default,{mdxType:"NetworksMatrix"})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Node"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Source Repository"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Rust Documentation"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Docker Packages"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Mithril Client")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/input-output-hk/mithril/tree/main/mithril-client"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://mithril.network/mithril-client/doc/mithril_client/index.html"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/input-output-hk/mithril/pkgs/container/mithril-client"},"\u2197\ufe0f"))))),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"correctly configured")," Rust toolchain (latest stable version)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install OpenSSL development libraries, for example on Ubuntu/Debian/Mint run ",(0,r.kt)("inlineCode",{parentName:"p"},"apt install libssl-dev")))),(0,r.kt)("h2",{id:"download-source"},"Download source"),(0,r.kt)("p",null,"Download from GitHub (HTTPS)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/input-output-hk/mithril.git\n")),(0,r.kt)("p",null,"Or (SSH)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:input-output-hk/mithril.git\n")),(0,r.kt)("p",null,"Change directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd mithril/mithril-client\n")),(0,r.kt)("h2",{id:"development-test-and-build"},"Development test and build"),(0,r.kt)("p",null,"Run tests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,r.kt)("p",null,"Create the help menu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make help\n")),(0,r.kt)("p",null,"Generate the Rust documentation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make doc\n")),(0,r.kt)("p",null,"Run in debug mode with default configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make debug\n")),(0,r.kt)("h2",{id:"release-build-and-run-binary"},"Release build and run binary"),(0,r.kt)("p",null,"Build and run in release with default configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make run\n")),(0,r.kt)("p",null,"Or, build only in release"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,r.kt)("p",null,"Display the help menu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mithril-client --help\n")),(0,r.kt)("p",null,"You should see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mithril-client \nThis program downloads, checks and restores certified blockchain snapshots.\n\nUSAGE:\n    mithril-client [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n        --aggregator-endpoint <AGGREGATOR_ENDPOINT>\n            Override configuration Aggregator endpoint URL\n\n        --config-directory <CONFIG_DIRECTORY>\n            Directory where configuration file is located [default: ./config]\n\n    -h, --help\n            Print help information\n\n        --run-mode <RUN_MODE>\n            Run Mode [env: RUN_MODE=] [default: dev]\n\n    -v, --verbose\n            Verbosity level (-v=warning, -vv=info, -vvv=debug)\n\nSUBCOMMANDS:\n    download    Download a snapshot\n    help        Print this message or the help of the given subcommand(s)\n    list        List available snapshots\n    restore     Restore a snapshot\n    show        Show detailed informations about a snapshot\n\n")),(0,r.kt)("p",null,"Run in release with default configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mithril-client\n")),(0,r.kt)("p",null,"Run in release with a specific mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mithril-client --run-mode preview\n")),(0,r.kt)("p",null,"Run in release with a custom configuration via env vars"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GENESIS_VERIFICATION_KEY=$(wget -q -O - **YOUR_GENESIS_VERIFICATION_KEY**) NETWORK=**YOUR_CARDANO_NETWORK** AGGREGATOR_ENDPOINT=**YOUR_AGGREGATOR_ENDPOINT** ./mithril-client\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"-j"),") option in order to display results in ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," format for the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," commands:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mithril-client list --json\n"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to dig deeper, you can get access to several level of logs from the Mithril Client:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"-v")," for some logs (WARN)"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"-vv")," for more logs (INFO)"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"-vvv")," for even more logs (DEBUG)"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"-vvvv")," for all logs (TRACE)"))),(0,r.kt)("h2",{id:"build-and-run-docker-container"},"Build and run Docker container"),(0,r.kt)("p",null,"Build a local Docker image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-build\n")),(0,r.kt)("p",null,"Run a local Docker container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-run\n")),(0,r.kt)("h2",{id:"subcommands"},"Subcommands"),(0,r.kt)("p",null,"Here are the subcommands available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subcommand"),(0,r.kt)("th",{parentName:"tr",align:null},"Performed action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"download")),(0,r.kt)("td",{parentName:"tr",align:null},"Download a snapshot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"help")),(0,r.kt)("td",{parentName:"tr",align:null},"Print this message or the help of the given subcommand(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:null},"List available snapshots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"restore")),(0,r.kt)("td",{parentName:"tr",align:null},"Restore a snapshot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"show")),(0,r.kt)("td",{parentName:"tr",align:null},"Informations about a snapshot")))),(0,r.kt)("h2",{id:"configuration-parameters"},"Configuration parameters"),(0,r.kt)("p",null,"The configuration parameters are set either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In a configuration file (depending on the ",(0,r.kt)("inlineCode",{parentName:"li"},"--run-mode")," parameter). If runtime mode is ",(0,r.kt)("inlineCode",{parentName:"li"},"testnet")," the file is located in ",(0,r.kt)("inlineCode",{parentName:"li"},"./conf/testnet.json"),"."),(0,r.kt)("li",{parentName:"ul"},"The value can be overridden by an environment variable whose name is the parameter name uppercased.")),(0,r.kt)("p",null,"Here is a list of the available parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Command Line (long)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Command Line (short)"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbose")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-v")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VERBOSE")),(0,r.kt)("td",{parentName:"tr",align:null},"Verbosity level"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Parsed from number of occurrences: ",(0,r.kt)("inlineCode",{parentName:"td"},"-v")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"Warning"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"-vv")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"Info"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"-vvv")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"Debug")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"-vvvv")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"Trace")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"run_mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--run-mode")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RUN_MODE")),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dev")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"network")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NETWORK")),(0,r.kt)("td",{parentName:"tr",align:null},"Cardano network"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testnet")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"mainnet")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"devnet")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aggregator_endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--aggregator-endpoint")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AGGREGATOR_ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregator node endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://aggregator.pre-release-preview.api.mithril.network/aggregator")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genesis_verification_key")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GENESIS_VERIFICATION_KEY")),(0,r.kt)("td",{parentName:"tr",align:null},"Genesis verification key"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json_output")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--json")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-j")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable JSON output"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")))))}k.isMDXComponent=!0},5892:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={unlisted:!0,hide_title:!0,hide_table_of_contents:!0},l=void 0,o={unversionedId:"networks-matrix",id:"version-maintained/networks-matrix",title:"networks-matrix",description:"Here is an up to date list of all the Mithril Networks, their configurations and their status:",source:"@site/versioned_docs/version-maintained/networks-matrix.md",sourceDirName:".",slug:"/networks-matrix",permalink:"/doc/networks-matrix",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/networks-matrix.md",tags:[],version:"maintained",frontMatter:{unlisted:!0,hide_title:!0,hide_table_of_contents:!0}},p={},d=[],m={toc:d};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is an up to date list of all the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Networks"),", their configurations and their status:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Last update: 11/14/2022")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mithril Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Cardano Network"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Magic Id"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Supported"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Aggregator Endpoint"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Genesis Verification Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release-mainnet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mainnet")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Not supported yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release-preprod")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preprod")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://aggregator.release-preprod.api.mithril.network/aggregator",title:"https://aggregator.release-preprod.api.mithril.network/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey",title:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stable Release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pre-release-preview")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preview")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://aggregator.pre-release-preview.api.mithril.network/aggregator",title:"https://aggregator.pre-release-preview.api.mithril.network/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey",title:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unstable Pre-Release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testing-preview")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preview")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://aggregator.testing-preview.api.mithril.network/aggregator",title:"https://aggregator.testing-preview.api.mithril.network/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey",title:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unstable Testing (devs only)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dev-devnet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devnet")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"42")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8080/aggregator",title:"http://localhost:8080/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Supported on the ",(0,r.kt)("inlineCode",{parentName:"td"},"devnet")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testnet")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1097911063")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://aggregator.api.mithril.network/aggregator",title:"https://aggregator.api.mithril.network/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey",title:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Decommissioned, not supported anymore")))),(0,r.kt)("p",null,"\u26a0\ufe0f In this documentation, we use the generic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*",(0,r.kt)("strong",{parentName:"li"},"*YOUR_CARDANO_NETWORK**")," identifier, but you need to replace it with the name of the network that runs on your Cardano node (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"preprod"),")"),(0,r.kt)("li",{parentName:"ul"},"*",(0,r.kt)("strong",{parentName:"li"},"*YOUR_AGGREGATOR_ENDPOINT**")," identifier, but you need to replace it with the endpoint of an aggregator that runs on the Cardano network you target (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://aggregator.release-preprod.api.mithril.network/aggregator"),")"),(0,r.kt)("li",{parentName:"ul"},"*",(0,r.kt)("strong",{parentName:"li"},"*YOUR_GENESIS_VERIFICATION_KEY**")," identifier, but you need to replace it with the genesis verification key url that runs on the Cardano network you target (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"),")")))}s.isMDXComponent=!0}}]);