"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[139],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={slug:1,title:"1. Record Architecture Decisions\n",authors:[],tags:["Accepted"]},l=void 0,u={permalink:"/doc/adr/1",source:"@site/adr/001-use-adr.md",title:"1. Record Architecture Decisions\n",description:"Status",date:"2022-06-29T10:43:11.000Z",formattedDate:"June 29, 2022",tags:[{label:"Accepted",permalink:"/doc/adr/tags/accepted"}],readingTime:.515,truncated:!1,authors:[],frontMatter:{slug:"1",title:"1. Record Architecture Decisions\n",authors:[],tags:["Accepted"]},prevItem:{title:"2. Use simple structured logging\n",permalink:"/doc/adr/2"}},s={authorsImageUrls:[]},d=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"We are in search for a means to describe our technical architecture."),(0,a.kt)("p",null,"We are a small team working in a very lean and agile way (XP), so we naturally\nprefer also light-weight documentation methods which also accomodate change\neasily."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We will use ",(0,a.kt)("em",{parentName:"li"},"Architecture Decision Records"),", as described by Michael Nygard in\nthis\n",(0,a.kt)("a",{parentName:"li",href:"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions"},"article"),"."),(0,a.kt)("li",{parentName:"ul"},"We will follow the convention of storing those ADRs as Markdown formatted\ndocuments stored under ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/adr")," directory, as exemplified in Nat Pryce's\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/npryce/adr-tools"},"adr-tools"),". This does not imply we will\nbe using ",(0,a.kt)("inlineCode",{parentName:"li"},"adr-tools")," itself.")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"See Michael Nygard's article, linked above."))}f.isMDXComponent=!0}}]);