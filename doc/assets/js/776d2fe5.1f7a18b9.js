"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[5068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?i.createElement(h,o(o({ref:t},s),{},{components:r})):i.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Mithril Relay Security Advisory",authors:[{name:"Mithril Team"}],tags:["spo","mithril signer","mithril relay","mainnet","production","beta","security"]},o=void 0,l={permalink:"/doc/dev-blog/2023/10/10/relay-security-advisory",source:"@site/blog/2023-10-10-relay-security-advisory.md",title:"Mithril Relay Security Advisory",description:"Mithril relay could expose Cardano block producer internal IP when updated (Security Advisory)",date:"2023-10-10T00:00:00.000Z",formattedDate:"October 10, 2023",tags:[{label:"spo",permalink:"/doc/dev-blog/tags/spo"},{label:"mithril signer",permalink:"/doc/dev-blog/tags/mithril-signer"},{label:"mithril relay",permalink:"/doc/dev-blog/tags/mithril-relay"},{label:"mainnet",permalink:"/doc/dev-blog/tags/mainnet"},{label:"production",permalink:"/doc/dev-blog/tags/production"},{label:"beta",permalink:"/doc/dev-blog/tags/beta"},{label:"security",permalink:"/doc/dev-blog/tags/security"}],readingTime:.54,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Mithril Relay Security Advisory",authors:[{name:"Mithril Team"}],tags:["spo","mithril signer","mithril relay","mainnet","production","beta","security"]},prevItem:{title:"Mithril client library is released!",permalink:"/doc/dev-blog/2023/11/27/mithril-client-library-released"},nextItem:{title:"Mithril Protocol\u2019s Mainnet Beta Launch",permalink:"/doc/dev-blog/2023/07/21/mainnet-beta-launch"}},c={authorsImageUrls:[void 0]},p=[{value:"Mithril relay could expose Cardano block producer internal IP when updated (Security Advisory)",id:"mithril-relay-could-expose-cardano-block-producer-internal-ip-when-updated-security-advisory",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"mithril-relay-could-expose-cardano-block-producer-internal-ip-when-updated-security-advisory"},"Mithril relay could expose Cardano block producer internal IP when updated (Security Advisory)"),(0,n.kt)("p",null,"The Mithril team has published a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq"},"security advisory")," to destination of SPOs running a Mithril signer/relay on the ",(0,n.kt)("inlineCode",{parentName:"p"},"mainnet")," infrastructure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Identifier"),": GHSA-9m3h-72xj-x2gq"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Title"),": Mithril relay could expose Cardano block producer internal IP when updated"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Location"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq"},"https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Severity"),": High (7.2/10)")),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"We strongly encourage all the ",(0,n.kt)("inlineCode",{parentName:"p"},"mainnet")," SPOs to update the listening port of their ",(0,n.kt)("strong",{parentName:"p"},"Mithril relay")," in order to prevent the issue, with the process explained in the ",(0,n.kt)("strong",{parentName:"p"},"Workarounds")," section of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq"},"security advisory"),".")),(0,n.kt)("p",null,"Feel free to reach out to us on the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/5kaErDKDRq"},"Discord channel")," for questions and/or help."))}d.isMDXComponent=!0}}]);