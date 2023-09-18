(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{80:function(e,t,r){Promise.resolve().then(r.bind(r,3359))},4402:function(e,t,r){"use strict";t.Z=["https://aggregator.release-mainnet.api.mithril.network/aggregator","https://aggregator.release-preprod.api.mithril.network/aggregator","https://aggregator.pre-release-preview.api.mithril.network/aggregator","https://aggregator.testing-preview.api.mithril.network/aggregator","http://localhost:8080/aggregator"]},3359:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var s=r(7437),n=r(2265),i=r(3198),a=r(4033),l=r(8864),c=r.n(l),o=r(4434),h=r(4665),d=r(8597),u=r(3839),g=r(613),x=r(8821),j=r(507),f=r(2402),m=r(6028),v=r(3316);function p(e){let{protocolParameters:t}=e;return(0,s.jsxs)(f.Z,{horizontal:!0,children:[(0,s.jsxs)(f.Z.Item,{children:["k: ",null==t?void 0:t.k]}),(0,s.jsxs)(f.Z.Item,{children:["m: ",null==t?void 0:t.m]}),(0,s.jsxs)(f.Z.Item,{children:["f: ",null==t?void 0:t.phi_f]})]})}var Z=r(6641),b=r(3956);function y(e){let[t,r]=(0,n.useState)({}),a=(0,i.v9)(e=>e.settings.selectedAggregator),l=(0,i.v9)(e=>"".concat((0,Z.k6)(e),"/epoch-settings")),c=(0,i.v9)(e=>e.settings.autoUpdate),o=(0,i.v9)(e=>e.settings.updateInterval),[h,d]=(0,n.useState)(void 0);return(0,n.useEffect)(()=>{if(!c)return;let e=()=>{fetch(l).then(e=>200===e.status?e.json():{}).then(e=>r(e)).catch(e=>{r({}),console.error("Fetch epoch-settings error:",e)})};e();let t=setInterval(e,o);return()=>clearInterval(t)},[l,o,c]),(0,n.useEffect)(()=>{if((0,b.checkUrl)(a)&&Number.isInteger(null==t?void 0:t.epoch)){let e=new URLSearchParams;e.set("aggregator",a),e.set("epoch",t.epoch),d("/registrations?".concat(e.toString()))}},[a,t]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{children:["Epoch Settings",(0,s.jsx)(v.Z,{href:l,variant:"outline-light",size:"sm"})]}),(0,s.jsxs)(j.Z,{children:[(0,s.jsxs)(j.Z.Body,{children:[(0,s.jsx)(j.Z.Title,{children:"Current Epoch"}),(0,s.jsx)(f.Z,{variant:"flush",children:(0,s.jsx)(f.Z.Item,{children:t.epoch})}),(0,s.jsx)(j.Z.Title,{children:"Protocol Parameters"}),(0,s.jsx)(p,{protocolParameters:t.protocol}),(0,s.jsx)(j.Z.Title,{children:"Next Protocol Parameters"}),(0,s.jsx)(p,{protocolParameters:t.next_protocol})]}),h&&(0,s.jsx)(j.Z.Footer,{className:"text-center",children:(0,s.jsx)(m.Z,{href:h,children:"Registered Signers"})})]})]})}var k=r(8402);function S(e){let{signedEntityType:t}=e,[r,i]=(0,n.useState)(""),[a,l]=(0,n.useState)({});return(0,n.useEffect)(()=>{let e=Object.keys(t).at(0);if(i(e),"MithrilStakeDistribution"===e||"CardanoStakeDistribution"===e)l({epoch:t[e]});else{var r;l(null!==(r=t[e])&&void 0!==r?r:{})}},[t]),(0,s.jsxs)(f.Z,{children:[(0,s.jsx)(f.Z.Item,{children:(0,s.jsx)("h6",{children:r})}),(0,s.jsx)(f.Z.Item,{children:(0,s.jsx)(f.Z,{horizontal:"xxl",children:Object.entries(a).map(e=>{let[t,r]=e;return(0,s.jsxs)(f.Z.Item,{children:[t,": ",r]},t)})})})]})}var I=r(9882);function _(e){let[t,r]=(0,n.useState)({}),a=(0,i.v9)(e=>"".concat((0,Z.k6)(e),"/certificate-pending")),l=(0,i.v9)(e=>e.settings.autoUpdate),c=(0,i.v9)(e=>e.settings.updateInterval);return(0,n.useEffect)(()=>{if(!l)return;let e=()=>{fetch(a).then(e=>200===e.status?e.json():{}).then(e=>r(e)).catch(e=>{r({}),console.error("Fetch certificate-pending error:",e)})};e();let t=setInterval(e,c);return()=>clearInterval(t)},[a,c,l]),(0,s.jsxs)("div",{className:e.className,children:[(0,s.jsxs)("h2",{children:["Pending Certificate",0!==Object.entries(t).length&&(0,s.jsx)(v.Z,{href:a,variant:"outline-light",size:"sm"})]}),0===Object.entries(t).length?(0,s.jsx)("p",{children:"No pending certificate available"}):(0,s.jsxs)(k.Z,{children:[(0,s.jsx)(j.Z,{children:(0,s.jsxs)(j.Z.Body,{children:[(0,s.jsx)(j.Z.Title,{children:"Beacon"}),(0,s.jsxs)(f.Z,{className:"margin-bottom--md",variant:"flush",children:[(0,s.jsxs)(f.Z.Item,{children:["Network: ",t.beacon.network]}),(0,s.jsxs)(f.Z.Item,{children:["Epoch: ",t.beacon.epoch]})]}),(0,s.jsx)(j.Z.Title,{children:"Entity Type"}),(0,s.jsx)(S,{signedEntityType:t.entity_type})]})}),(0,s.jsx)(j.Z,{children:(0,s.jsxs)(j.Z.Body,{children:[(0,s.jsx)(j.Z.Title,{children:"Signers"}),0===t.signers.length?(0,s.jsx)("div",{children:"No Signers registered"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(f.Z,{variant:"flush",children:[(0,s.jsx)(f.Z.Item,{children:(0,s.jsx)("b",{children:"Party id"})}),t.signers.map(e=>(0,s.jsxs)(f.Z.Item,{children:[e.party_id,e.verification_key_signature&&(0,s.jsx)("div",{className:"float-end",children:(0,s.jsx)(I.Z,{tooltip:"Verified Signer"})})]},e.party_id))]})})]})}),(0,s.jsx)(j.Z,{children:(0,s.jsxs)(j.Z.Body,{children:[(0,s.jsx)(j.Z.Title,{children:"Next Signers"}),0===t.next_signers.length?(0,s.jsx)("div",{children:"No Signers registered for next epoch"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(f.Z,{variant:"flush",children:[(0,s.jsx)(f.Z.Item,{children:(0,s.jsx)("b",{children:"Party id"})}),t.next_signers.map(e=>(0,s.jsxs)(f.Z.Item,{children:[e.party_id,e.verification_key_signature&&(0,s.jsx)("div",{className:"float-end",children:(0,s.jsx)(I.Z,{tooltip:"Verified Signer"})})]},e.party_id))]})})]})})]})]})}var N=r(3761),w=r(6716),C=r(2824),A=r(2410),E=r(1387),F=r(5890);function B(e){let[t,r]=(0,n.useState)({}),a=(0,i.v9)(t=>"".concat((0,Z.k6)(t),"/certificate/").concat(e.hash));return(0,n.useEffect)(()=>{e.hash&&fetch(a).then(e=>200===e.status?e.json():{}).then(e=>r(e)).catch(e=>{r({}),console.error("Fetch certificate error:",e)})},[a,e.hash]),(0,s.jsxs)(A.Z,{show:void 0!==e.hash,onHide:function(){e.onHashChange(void 0)},size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,s.jsx)(A.Z.Header,{className:"text-break",closeButton:!0,children:(0,s.jsxs)(A.Z.Title,{id:"contained-modal-title-vcenter",children:["Certificate ",t.hash]})}),(0,s.jsx)(A.Z.Body,{children:0===Object.entries(t).length?(0,s.jsx)("p",{children:"Not found"}):(0,s.jsx)(C.Z,{children:(0,s.jsxs)(d.Z,{md:1,xl:"auto",children:[(0,s.jsxs)(o.Z,{xl:4,children:[(0,s.jsx)("h4",{children:"Beacon"}),(0,s.jsxs)(f.Z,{className:"margin-bottom--md",variant:"flush",children:[(0,s.jsxs)(f.Z.Item,{children:["Network: ",t.beacon.network]}),(0,s.jsxs)(f.Z.Item,{children:["Epoch: ",t.beacon.epoch]}),(0,s.jsxs)(f.Z.Item,{children:["Immutable File Number: ",t.beacon.immutable_file_number]})]}),(0,s.jsx)("h4",{children:"Protocol Parameters"}),(0,s.jsx)(p,{protocolParameters:t.metadata.parameters})]}),(0,s.jsxs)(o.Z,{xl:8,children:[(0,s.jsx)("h4",{children:"Signers"}),""!==t.genesis_signature?(0,s.jsx)("div",{children:"This is the chain Genesis Certificate, since it's manually created it doesn't contain any Signers."}):0===t.metadata.signers.length?(0,s.jsx)("div",{children:"No Signers for this certificate, something went wrong either with the data retrieval or the signing process"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(E.Z,{responsive:!0,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{}),(0,s.jsx)("th",{children:"Party id"}),(0,s.jsx)("th",{style:{textAlign:"end"},children:"Stake"})]})}),(0,s.jsx)("tbody",{children:t.metadata.signers.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.verification_key_signature&&(0,s.jsx)(I.Z,{tooltip:"Verified Signer"})}),(0,s.jsx)("td",{children:e.party_id}),(0,s.jsx)("td",{style:{textAlign:"end"},children:(0,s.jsx)(F.Z,{lovelace:e.stake})})]},e.party_id))})]})})]})]})})}),(0,s.jsxs)(A.Z.Footer,{children:[""!==t.genesis_signature?(0,s.jsx)(N.Z,{bg:"warning",children:"Genesis"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(w.Z,{size:"sm",onClick:function(){e.onHashChange(t.previous_hash)},className:"text-break",children:["Previous hash: ",t.previous_hash]})}),(0,s.jsx)(v.Z,{href:a,size:"sm"})]})]})}function P(e){let{datetime:t}=e;return(0,s.jsx)(s.Fragment,{children:new Date(t).toLocaleString()})}function z(e){let[t,r]=(0,n.useState)([]),[a,l]=(0,n.useState)(void 0),c=(0,i.v9)(Z.k6),h=(0,i.v9)(e=>"".concat((0,Z.k6)(e),"/artifact/snapshots")),g=(0,i.v9)(e=>e.settings.autoUpdate),x=(0,i.v9)(e=>e.settings.updateInterval);return(0,n.useEffect)(()=>{if(!g)return;let e=()=>{fetch(h).then(e=>e.json()).then(e=>r(e)).catch(e=>{r([]),console.error("Fetch snapshots error:",e)})};e();let t=setInterval(e,x);return()=>clearInterval(t)},[h,x,g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(B,{hash:a,onHashChange:function(e){l(e)}}),(0,s.jsxs)("div",{className:e.className,children:[(0,s.jsxs)("h2",{children:["Snapshots ",(0,s.jsx)(v.Z,{href:h,variant:"outline-light",size:"sm"})]}),0===Object.entries(t).length?(0,s.jsx)("p",{children:"No snapshot available"}):(0,s.jsx)(C.Z,{fluid:!0,children:(0,s.jsx)(d.Z,{xs:1,md:2,lg:3,xl:4,children:t.map((e,t)=>(0,s.jsx)(o.Z,{className:"mb-2",children:(0,s.jsxs)(j.Z,{border:0===t?"primary":"",children:[(0,s.jsxs)(j.Z.Body,{children:[(0,s.jsx)(j.Z.Title,{children:e.digest}),(0,s.jsxs)(f.Z,{variant:"flush",className:"data-list-group",children:[(0,s.jsxs)(f.Z.Item,{children:["Epoch: ",e.beacon.epoch]}),(0,s.jsxs)(f.Z.Item,{children:["Immutable file number: ",e.beacon.immutable_file_number]}),e.cardano_node_version&&(0,s.jsxs)(f.Z.Item,{children:["Cardano node: ",e.cardano_node_version]}),e.compression_algorithm&&(0,s.jsxs)(f.Z.Item,{children:["Compression: ",e.compression_algorithm]}),(0,s.jsxs)(f.Z.Item,{children:["Certificate hash: ",(0,s.jsx)("br",{}),e.certificate_hash," ",(0,s.jsx)(w.Z,{size:"sm",onClick:()=>{l(e.certificate_hash)},children:"Show"})]}),(0,s.jsxs)(f.Z.Item,{children:["Created: ",(0,s.jsx)(P,{datetime:e.created_at})]}),(0,s.jsxs)(f.Z.Item,{children:["Archive size: ",function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";let r=t<0?0:t,s=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,s)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]}(e.size)]})]})]}),(0,s.jsx)(j.Z.Footer,{children:(0,s.jsxs)(u.Z,{direction:"horizontal",gap:1,children:[0===t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N.Z,{bg:"primary",children:"Latest"})," "]}),(0,s.jsx)(N.Z,{bg:"secondary",children:e.beacon.network}),(0,s.jsx)(v.Z,{href:"".concat(c,"/snapshot/").concat(e.digest),size:"sm",className:"ms-auto"})]})})]})},e.digest))})})]})]})}function T(e){let[t,r]=(0,n.useState)([]),[a,l]=(0,n.useState)(void 0),c=(0,i.v9)(Z.k6),h=(0,i.v9)(e=>"".concat((0,Z.k6)(e),"/artifact/mithril-stake-distributions")),g=(0,i.v9)(e=>e.settings.autoUpdate),x=(0,i.v9)(e=>e.settings.updateInterval);return(0,n.useEffect)(()=>{if(!g)return;let e=()=>{fetch(h).then(e=>e.json()).then(e=>r(e)).catch(e=>{r([]),console.error("Fetch mithrilStakeDistributions error:",e)})};e();let t=setInterval(e,x);return()=>clearInterval(t)},[h,x,g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(B,{aggregator:c,hash:a,onHashChange:function(e){l(e)}}),(0,s.jsxs)("div",{className:e.className,children:[(0,s.jsxs)("h2",{children:["Mithril Stake Distribution ",(0,s.jsx)(v.Z,{href:h,variant:"outline-light",size:"sm"})]}),0===Object.entries(t).length?(0,s.jsx)("p",{children:"No mithril stake distribution available"}):(0,s.jsx)(C.Z,{fluid:!0,children:(0,s.jsx)(d.Z,{xs:1,md:2,lg:3,xl:4,children:t.map((e,t)=>(0,s.jsx)(o.Z,{className:"mb-2",children:(0,s.jsxs)(j.Z,{border:0===t?"primary":"",children:[(0,s.jsxs)(j.Z.Body,{children:[(0,s.jsx)(j.Z.Title,{children:e.hash}),(0,s.jsxs)(f.Z,{variant:"flush",className:"data-list-group",children:[(0,s.jsxs)(f.Z.Item,{children:["Epoch: ",e.epoch]}),e.created_at&&(0,s.jsxs)(f.Z.Item,{children:["Created: ",(0,s.jsx)(P,{datetime:e.created_at})]}),(0,s.jsxs)(f.Z.Item,{children:["Certificate hash: ",(0,s.jsx)("br",{}),e.certificate_hash," ",(0,s.jsx)(w.Z,{size:"sm",onClick:()=>{l(e.certificate_hash)},children:"Show"})]})]})]}),(0,s.jsx)(j.Z.Footer,{children:(0,s.jsxs)(u.Z,{direction:"horizontal",gap:1,children:[0===t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N.Z,{bg:"primary",children:"Latest"})," "]}),(0,s.jsx)(v.Z,{href:"".concat(c,"/artifact/mithril-stake-distribution/").concat(e.hash),size:"sm",className:"ms-auto"})]})})]})},e.hash))})})]})]})}var U=r(7153);let M=c()(()=>r.e(38).then(r.bind(r,38)),{loadableGenerated:{webpack:()=>[38]},ssr:!1}),O=c()(()=>r.e(758).then(r.bind(r,5758)),{loadableGenerated:{webpack:()=>[5758]},ssr:!1});function R(){let e=(0,a.useRouter)(),t=(0,a.useSearchParams)(),r=(0,i.I0)(),[l,c]=(0,n.useState)(!1),j=(0,i.v9)(Z.k6);return(0,n.useEffect)(()=>{let r=t.get(U.W);if(j!==r){let t=new URLSearchParams;t.set("aggregator",j),c(!0),e.push("?"+t.toString(),void 0,{shallow:!0})}},[j]),(0,n.useEffect)(()=>{if(l)c(!1);else{let e=t.get("aggregator");r((0,Z.VT)(e))}},[t]),(0,s.jsxs)(u.Z,{gap:3,children:[(0,s.jsx)(h.Z,{children:(0,s.jsxs)(d.Z,{xs:1,sm:2,children:[(0,s.jsx)(M,{}),(0,s.jsx)(O,{})]})}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(o.Z,{xs:12,sm:4,lg:3,xl:2,children:(0,s.jsx)(y,{})}),(0,s.jsx)(o.Z,{xs:12,sm:8,lg:9,xl:10,children:(0,s.jsx)(_,{})})]}),(0,s.jsxs)(x.Z,{defaultActiveKey:"snapshots",children:[(0,s.jsx)(g.Z,{title:"Snapshots",eventKey:"snapshots",children:(0,s.jsx)(z,{})}),(0,s.jsx)(g.Z,{title:"Mithril Stake Distribution",eventKey:"mithrilStakeDistribution",children:(0,s.jsx)(T,{})})]})]})}},6028:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(7437);r(2265);var n=r(1396),i=r.n(n);function a(e){let{href:t,children:r,className:n,disabled:a,...l}=e;return!0===a?n="".concat(n," disabled"):a=!1,(0,s.jsx)(i(),{href:t,"aria-disabled":a,className:"btn btn-primary link-underline-opacity-0 link-light ".concat(n),...l,children:r})}},3316:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(7437);r(2265);var n=r(6716),i=r(7322),a=r(7800);function l(e){return(0,s.jsx)(i.Z,{overlay:(0,s.jsx)(a.Z,{children:"Raw JSON"}),children:(0,s.jsx)(n.Z,{variant:"outline-secondary",target:"_blank",...e,children:(0,s.jsx)("i",{className:"bi bi-filetype-json",style:{color:"black"}})})})}},5890:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(7437);r(2265);var n=r(7322),i=r(7800),a=r(3956);function l(e){let{lovelace:t}=e;return(0,s.jsx)(n.Z,{overlay:(0,s.jsxs)(i.Z,{children:[(0,a.formatCurrency)((0,a.toAda)(t),20),"₳"]}),children:(0,s.jsx)("span",{children:(0,a.formatStake)(t)})})}},9882:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(7437);r(2265);var n=r(7322),i=r(7800);function a(e){return(0,s.jsx)(n.Z,{overlay:(0,s.jsx)(i.Z,{children:e.tooltip}),children:(0,s.jsx)("a",{href:"#",className:"badge bg-success",children:(0,s.jsx)("i",{className:"bi bi-shield-lock"})})})}},7153:function(e,t,r){"use strict";r.d(t,{W:function(){return s}});let s="aggregator"},6641:function(e,t,r){"use strict";r.d(t,{E3:function(){return a},JV:function(){return c},OR:function(){return d},VT:function(){return h},k6:function(){return u},uI:function(){return o},xj:function(){return l}});var s=r(64),n=r(4402),i=r(3956);let a={autoUpdate:!0,updateInterval:1e4,selectedAggregator:n.Z[0],availableAggregators:n.Z,canRemoveSelected:!1},l=(0,s.oM)({name:"settings",initialState:a,reducers:{setUpdateInterval:(e,t)=>{e.updateInterval=t.payload},toggleAutoUpdate:e=>{e.autoUpdate=!e.autoUpdate},selectAggregator:(e,t)=>{if(!(0,i.checkUrl)(t.payload))return e;let r=e.availableAggregators.includes(t.payload)?e.availableAggregators:[...e.availableAggregators,t.payload];return{...e,selectedAggregator:t.payload,availableAggregators:r,canRemoveSelected:!n.Z.includes(t.payload)}},removeSelectedAggregator:e=>n.Z.includes(e.selectedAggregator)?e:{...e,selectedAggregator:e.availableAggregators.at(0),availableAggregators:e.availableAggregators.filter(t=>t!==e.selectedAggregator),canRemoveSelected:!n.Z.includes(e.availableAggregators.at(0))}}}),{setUpdateInterval:c,toggleAutoUpdate:o,selectAggregator:h,removeSelectedAggregator:d}=l.actions,u=e=>e.settings.selectedAggregator;l.reducer},3956:function(e){"use strict";let t=e=>e/1e6,r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString(void 0,{maximumFractionDigits:t})};e.exports={checkUrl:function(e){try{return new URL(e),!0}catch(e){return!1}},formatStake:function(e){let s=t(e),n=[{suffix:"B",value:1e9},{suffix:"M",value:1e6},{suffix:"K",value:1e3},{suffix:"",value:1}].find(e=>Math.abs(s)>=e.value-.001);return n?"".concat(r(s/n.value)).concat(n.suffix,"₳"):"".concat(r(s),"₳")},setChartJsDefaults:function(e){let t=["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],r=["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"];e.defaults.plugins.legend.display=!1,e.defaults.elements.arc.backgroundColor=t,e.defaults.elements.arc.borderColor=r,e.defaults.elements.arc.borderWidth=1,e.defaults.elements.bar.backgroundColor=t,e.defaults.elements.bar.borderColor=r,e.defaults.elements.bar.borderWidth=1},toAda:t,formatCurrency:r}}},function(e){e.O(0,[807,369,141,149,971,596,744],function(){return e(e.s=80)}),_N_E=e.O()}]);