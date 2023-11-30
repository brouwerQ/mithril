"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[5943],{45943:(e,t,s)=>{s.d(t,{diagram:()=>N});var o=s(41504),i=s(45625),a=s(64218),r=s(36690),n=s(87936);s(27484),s(17967),s(27856),s(41644),s(39354);const d="rect",l="rectWithTitle",c="statediagram",p=`${c}-state`,b="transition",g=`${b} note-edge`,h=`${c}-note`,u=`${c}-cluster`,y=`${c}-cluster-alt`,f="parent",w="note",m="----",x=`${m}${w}`,$=`${m}${f}`,T="fill:none",S="fill: #333",k="text",D="normal";let A={},v=0;function B(e="",t=0,s="",o=m){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const C=(e,t,s,i,a,n)=>{const c=s.id,b=null==(m=i[c])?"":m.classes?m.classes.join(" "):"";var m;if("root"!==c){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),A[c]||(A[c]={id:c,shape:t,description:r.e.sanitizeText(c,(0,r.c)()),classes:`${b} ${p}`});const i=A[c];s.description&&(Array.isArray(i.description)?(i.shape=l,i.description.push(s.description)):i.description.length>0?(i.shape=l,i.description===c?i.description=[s.description]:i.description=[i.description,s.description]):(i.shape=d,i.description=s.description),i.description=r.e.sanitizeTextOrArray(i.description,(0,r.c)())),1===i.description.length&&i.shape===l&&(i.shape=d),!i.type&&s.doc&&(r.l.info("Setting cluster for ",c,R(s)),i.type="group",i.dir=R(s),i.shape=s.type===o.a?"divider":"roundedWithTitle",i.classes=i.classes+" "+u+" "+(n?y:""));const a={labelStyle:"",shape:i.shape,labelText:i.description,classes:i.classes,style:"",id:c,dir:i.dir,domId:B(c,v),type:i.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:c+x+"-"+v,domId:B(c,v,w),type:i.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:i.classes,style:"",id:c+$,domId:B(c,v,f),type:"group",padding:0};v++;const r=c+$;e.setNode(r,o),e.setNode(t.id,t),e.setNode(c,a),e.setParent(c,r),e.setParent(t.id,r);let n=c,d=t.id;"left of"===s.note.position&&(n=t.id,d=c),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:g,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D})}else e.setNode(c,a)}t&&"root"!==t.id&&(r.l.trace("Setting node ",c," to be child of its parent ",t.id),e.setParent(c,t.id)),s.doc&&(r.l.trace("Adding nodes children "),E(e,s,s.doc,i,a,!n))},E=(e,t,s,i,a,n)=>{r.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:C(e,t,s,i,a,n);break;case o.S:{C(e,t,s.state1,i,a,n),C(e,t,s.state2,i,a,n);const o={id:"edge"+v,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:r.e.sanitizeText(s.description,(0,r.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D,classes:b};e.setEdge(s.state1.id,s.state2.id,o,v),v++}}}))},R=(e,t=o.c)=>{let s=t;if(e.doc)for(let o=0;o<e.doc.length;o++){const t=e.doc[o];"dir"===t.stmt&&(s=t.value)}return s},V={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){r.l.info("Drawing state diagram (v2)",t),A={},o.db.getDirection();const{securityLevel:l,state:p}=(0,r.c)(),b=p.nodeSpacing||50,g=p.rankSpacing||50;r.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),r.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new i.k({multigraph:!0,compound:!0}).setGraph({rankdir:R(o.db.getRootDocV2()),nodesep:b,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;C(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===l&&(y=(0,a.Ys)("#i"+t));const f="sandbox"===l?(0,a.Ys)(y.nodes()[0].contentDocument.body):(0,a.Ys)("body"),w=f.select(`[id="${t}"]`),m=f.select("#"+t+" g");await(0,n.r)(m,u,["barb"],c,t);r.u.insertTitle(w,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const x=w.node().getBBox(),$=x.width+16,T=x.height+16;w.attr("class",c);const S=w.node().getBBox();(0,r.i)(w,T,$,p.useMaxWidth);const k=`${S.x-8} ${S.y-8} ${$} ${T}`;r.l.debug(`viewBox ${k}`),w.attr("viewBox",k);const D=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const i of D){const e=i.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),i.insertBefore(t,i.firstChild)}}},N={parser:o.p,db:o.d,renderer:V,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);