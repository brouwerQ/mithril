"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[9518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,sidebar_label:"Welcome"},i="User Manual",l={unversionedId:"manual/welcome",id:"manual/welcome",title:"User Manual",description:"Welcome to the Mithril user manual!",source:"@site/root/manual/welcome.md",sourceDirName:"manual",slug:"/manual/welcome",permalink:"/doc/manual/welcome",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/tree/main/docs/root/root/manual/welcome.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Welcome"},sidebar:"docSideBar",next:{title:"Getting Started",permalink:"/doc/category/getting-started"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"What you&#39;ll find in the user manual",id:"what-youll-find-in-the-user-manual",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-manual"},"User Manual"),(0,a.kt)("p",null,"Welcome to the ",(0,a.kt)("strong",{parentName:"p"},"Mithril")," user manual!"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Mithril in less than 5 minutes"),"."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Mithril Network")," is composed of 3 main components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mithril Aggregator"),":")),(0,a.kt)("p",null,"This node is in charge of ",(0,a.kt)("strong",{parentName:"p"},"coordinating the production of the Cardano snapshot archives")," (along with the associated certificates powered by Mithril multi signatures) by interacting with Mithril Signer nodes and a Cardano node."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mithril Signer"),":")),(0,a.kt)("p",null,"This node is in charge of ",(0,a.kt)("strong",{parentName:"p"},"producing single signatures that are then combined into a multi signature")," by the Mithril Aggregator. It works side by side with a Cardano node that has stakes in the network (Stake Pool Operator or SPO)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mithril Client"),":")),(0,a.kt)("p",null,"This node is in charge of ",(0,a.kt)("strong",{parentName:"p"},"verifying and restoring a snapshot")," that will allow a lightning fast boostrapping of a Cardano full node."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more information about the ",(0,a.kt)("strong",{parentName:"p"},"Mithril Protocol"),", please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/doc/mithril/intro"},"About Mithril")," section.")),(0,a.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Linux (preferred) or a macOS computer.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"correctly configured")," Rust toolchain (version 1.62.0+).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A recent version of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker Engine"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A recent version of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A recent version of ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,a.kt)("inlineCode",{parentName:"a"},"jq"))," (1.6+)."))),(0,a.kt)("h2",{id:"what-youll-find-in-the-user-manual"},"What you'll find in the user manual"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/doc/category/getting-started"},(0,a.kt)("strong",{parentName:"a"},"Getting Started"))," guide, you will find tutorials for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83c\udd95 As someone who needs to ",(0,a.kt)("a",{parentName:"p",href:"/doc/manual/getting-started/bootstrap-cardano-node"},"Bootstrap a Cardano node")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As an SPO who wants to ",(0,a.kt)("a",{parentName:"p",href:"/doc/manual/getting-started/run-signer-node"},"Run a Mithril Signer node")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As someone who wants to ",(0,a.kt)("a",{parentName:"p",href:"/doc/manual/getting-started/run-mithril-devnet"},"Run a Private Mithril network")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"devnet"),"."))),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/doc/category/developer-docs"},(0,a.kt)("strong",{parentName:"a"},"Developer Docs")),", you will find documentation for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"Mithril Network Nodes"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/doc/manual/developer-docs/nodes/mithril-aggregator"},(0,a.kt)("strong",{parentName:"a"},"Mithril Aggregator Node"))," developer documentation."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/doc/manual/developer-docs/nodes/mithril-signer"},(0,a.kt)("strong",{parentName:"a"},"Mithril Signer Node"))," developer documentation."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/doc/manual/developer-docs/nodes/mithril-client"},(0,a.kt)("strong",{parentName:"a"},"Mithril Client Node"))," developer documentation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("a",{parentName:"p",href:"/doc/manual/developer-docs/references"},"API Reference")," guide."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you need help, feel free to reach the ",(0,a.kt)("strong",{parentName:"p"},"Mithril")," team:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/discussions"},"Github Discussions"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://cardano.stackexchange.com/questions/tagged/mithril"},"Stack Exchange"))))))}m.isMDXComponent=!0}}]);