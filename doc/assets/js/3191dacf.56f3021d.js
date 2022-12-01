"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[6130],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,u=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={slug:3,title:"3. Release process and versioning\n",authors:[{name:"Mithril Team"}],tags:["Draft"]},o=void 0,l={permalink:"/doc/adr/3",source:"@site/adr/003-release/index.md",title:"3. Release process and versioning\n",description:"Status",date:"2022-12-01T08:38:11.000Z",formattedDate:"December 1, 2022",tags:[{label:"Draft",permalink:"/doc/adr/tags/draft"}],readingTime:2.995,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{slug:"3",title:"3. Release process and versioning\n",authors:[{name:"Mithril Team"}],tags:["Draft"]},prevItem:{title:"2. Use simple structured logging\n",permalink:"/doc/adr/2"}},s={authorsImageUrls:[void 0]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Versioning",id:"versioning",level:3},{value:"Release process",id:"release-process",level:3},{value:"Decision",id:"decision",level:2},{value:"Release Process",id:"release-process-1",level:3},{value:"Hotfix Release",id:"hotfix-release",level:3}],m={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"draft")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"In order to deliver regularly the software to our users, we should implement a release process based on a predictable versioning scheme. "),(0,r.kt)("h3",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"A Release Version determines a distribution of determined node versions and underlying libraries."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our softwares must be able to interact seamlessly with other Mithril software."),(0,r.kt)("li",{parentName:"ul"},"Our softwares must be able to be hosted on crates.io."),(0,r.kt)("li",{parentName:"ul"},"Our softwares must clearly indicate compatibility with other Mithril components to end users.")),(0,r.kt)("h3",{id:"release-process"},"Release process"),(0,r.kt)("p",null,"A Release is a software package that is built once and then promoted from the testing environment to the production environment. It can be signed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep it simple."),(0,r.kt)("li",{parentName:"ul"},"Automated as much as possible: all points not requiring human decision shall be automated."),(0,r.kt)("li",{parentName:"ul"},"Minimize the mean time to release.")),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"There are 3 versioned layers in the Mithril stack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP API protocol to ensure compatibility in the communication between nodes (use Semver)."),(0,r.kt)("li",{parentName:"ul"},"Crate version: each node & library has its own version (use Semver). The commit digest is automatically added to the version by the CI pipeline."),(0,r.kt)("li",{parentName:"ul"},"Release Version: the distribution version (use version scheme ",(0,r.kt)("strong",{parentName:"li"},"YYWW.patch")," | ",(0,r.kt)("strong",{parentName:"li"},"YYWW.patch-name"),"). The VERSION file is computed by the pipeline from the tag release.")),(0,r.kt)("p",null,"The documentation is tied to a Release Version."),(0,r.kt)("h3",{id:"release-process-1"},"Release Process"),(0,r.kt)("p",null,"Starting just after a new release has been made:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Develop on a dedicated development branch."),(0,r.kt)("li",{parentName:"ol"},"When merging PR on main: update the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," files with version of the updated nodes."),(0,r.kt)("li",{parentName:"ol"},"Once merged, the CI creates an ",(0,r.kt)("inlineCode",{parentName:"li"},"unstable")," tag & release which is deployed on testing environment."),(0,r.kt)("li",{parentName:"ol"},"Push a tag using the distribution version format on this commit with a ",(0,r.kt)("inlineCode",{parentName:"li"},"-prerelease")," suffix."),(0,r.kt)("li",{parentName:"ol"},"The CI gets the built artifacts associated with this commit and generates a named pre-release which is deployed on ",(0,r.kt)("inlineCode",{parentName:"li"},"pre-release")," for testing."),(0,r.kt)("li",{parentName:"ol"},"Push a tag using the distribution version format on this commit without the ",(0,r.kt)("inlineCode",{parentName:"li"},"-prerelease")," suffix."),(0,r.kt)("li",{parentName:"ol"},"The CI gets the built artifacts associated with this commit and generates a named release which is deployed on ",(0,r.kt)("inlineCode",{parentName:"li"},"pre-release")," for testing."),(0,r.kt)("li",{parentName:"ol"},"In the release GitHub interface, edit the newly generated release, uncheck the ",(0,r.kt)("inlineCode",{parentName:"li"},"This is a pre-release")," checkbox."),(0,r.kt)("li",{parentName:"ol"},"The CI gets the built artifacts associated with this commit and generates a named release which is deployed on ",(0,r.kt)("inlineCode",{parentName:"li"},"release"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a commit:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"to promote the documentation website from future to current."),(0,r.kt)("li",{parentName:"ol"},"to update the SQL schema with alterations from the previous release.")))),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(5869).Z},(0,r.kt)("img",{alt:"Release Process",src:a(3161).Z,width:"1220",height:"819"}))),(0,r.kt)("h3",{id:"hotfix-release"},"Hotfix Release"),(0,r.kt)("p",null,"\u200b\nIn case of a blocking issue (following a distribution release) on the release environment that requires an immediate fix:\n\u200b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a branch on the last release tag with the following scheme: ",(0,r.kt)("strong",{parentName:"li"},"hotfix/{last_distribution-version}.{last_patch_number + 1}"),"."),(0,r.kt)("li",{parentName:"ol"},"Development of the fix is done on this branch."),(0,r.kt)("li",{parentName:"ol"},"After each commit on this branch, the CI creates an ",(0,r.kt)("inlineCode",{parentName:"li"},"unstable")," tag & release which is not deployed on testing environment (testing must be done on an ad hoc environment manually created)."),(0,r.kt)("li",{parentName:"ol"},"Push a tag on the branch last commit using the branch distribution version with a ",(0,r.kt)("inlineCode",{parentName:"li"},"-hotfix")," suffix."),(0,r.kt)("li",{parentName:"ol"},"The CI gets the built artifacts associated with this commit and generates a named pre-release which is deployed on ",(0,r.kt)("inlineCode",{parentName:"li"},"pre-release")," for testing."),(0,r.kt)("li",{parentName:"ol"},"In the release GitHub interface, edit the newly generated release, uncheck the ",(0,r.kt)("inlineCode",{parentName:"li"},"This is a pre-release")," checkbox."),(0,r.kt)("li",{parentName:"ol"},"The CI gets the built artifacts associated with this commit and generates a named release which is deployed on ",(0,r.kt)("inlineCode",{parentName:"li"},"release"),"."),(0,r.kt)("li",{parentName:"ol"},"Merge the hotfix branch on main branch (and adapt the changes if they are not compatible with the current main branch).")))}p.isMDXComponent=!0},5869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/release_process-a9ce55af510cd542b71e68a485251004.jpg"},3161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/release_process-a9ce55af510cd542b71e68a485251004.jpg"}}]);