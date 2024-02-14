"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[6174],{80439:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(85893),r=t(11151);const s={title:"Mithril signer service new configuration",authors:[{name:"Mithril Team"}],tags:["spo","mithril signer","production"]},o=void 0,a={permalink:"/doc/dev-blog/2024/01/03/signer-service-new-configuration",source:"@site/blog/2024-01-03-signer-service-new-configuration.md",title:"Mithril signer service new configuration",description:"The Mithril signer node service recommended configuration is updated",date:"2024-01-03T00:00:00.000Z",formattedDate:"January 3, 2024",tags:[{label:"spo",permalink:"/doc/dev-blog/tags/spo"},{label:"mithril signer",permalink:"/doc/dev-blog/tags/mithril-signer"},{label:"production",permalink:"/doc/dev-blog/tags/production"}],readingTime:.905,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Mithril signer service new configuration",authors:[{name:"Mithril Team"}],tags:["spo","mithril signer","production"]},unlisted:!1,prevItem:{title:"Mithril client npm package is released!",permalink:"/doc/dev-blog/2024/01/23/mithril-client-npm-package-released"},nextItem:{title:"Mithril client library is released!",permalink:"/doc/dev-blog/2023/11/27/mithril-client-library-released"}},c={authorsImageUrls:[void 0]},d=[{value:"The Mithril signer node service recommended configuration is updated",id:"the-mithril-signer-node-service-recommended-configuration-is-updated",level:3}];function l(e){const i={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"the-mithril-signer-node-service-recommended-configuration-is-updated",children:"The Mithril signer node service recommended configuration is updated"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"PR"}),": ",(0,n.jsx)(i.code,{children:"Fix signer service recommended configuration"})," ",(0,n.jsx)(i.a,{href:"https://github.com/input-output-hk/mithril/pull/1419",children:"#1419"})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Issue"}),": ",(0,n.jsx)(i.code,{children:"Fix signer node service setup"})," ",(0,n.jsx)(i.a,{href:"https://github.com/input-output-hk/mithril/issues/1404",children:"#1404"})]}),"\n",(0,n.jsx)(i.p,{children:"The previous recommended configuration proposed a service restart frequency which was too high. When the service was restarted, and if the Cardano node was not ready yet, the service tried to restart too many times in a short period: thus the service just failed and the service had to be started manually after the Cardano node is up and ready. This lead to some SPOs skipping registrations for some epochs."}),"\n",(0,n.jsxs)(i.p,{children:["The duration before restarting the service is increased to 60s: ",(0,n.jsx)(i.code,{children:"RestartSec=60"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Below is the new recommended configuration:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"[Unit]\nDescription=Mithril signer service\nStartLimitIntervalSec=0\n\n[Service]\nType=simple\nRestart=always\nRestartSec=60\nUser=cardano\nEnvironmentFile=/opt/mithril/mithril-signer.env\nExecStart=/opt/mithril/mithril-signer -vvv\n\n[Install]\nWantedBy=multi-user.target\nEOF'\n"})}),"\n",(0,n.jsxs)(i.p,{children:["We highly recommend to update your existing configuration file (",(0,n.jsx)(i.code,{children:"/etc/systemd/system/mithril-signer.service"}),") with the values specified in the ",(0,n.jsx)(i.a,{href:"https://mithril.network/doc/next/manual/getting-started/run-signer-node/#installing-the-service",children:"guide"})]}),"\n",(0,n.jsxs)(i.p,{children:["\u26a0\ufe0f"," Following this modification, the service needs to be restarted with the following command:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"sudo systemctl restart mithril-signer\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Feel free to reach out to us on the ",(0,n.jsx)(i.a,{href:"https://discord.gg/5kaErDKDRq",children:"Discord channel"})," for questions and/or help."]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>o});var n=t(67294);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);