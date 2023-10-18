"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{4503:function(e,a,n){n.r(a),n.d(a,{default:function(){return AggregatorSetter}});var r=n(7437),l=n(2265),s=n(6716),t=n(4434),i=n(4665),o=n(2801),c=n(7322),d=n(7800),u=n(3198),g=n(9718),h=n(4931),x=n(2410),j=n(3513);function AddAggregatorModal(e){let[a,n]=(0,l.useState)(""),[t,o]=(0,l.useState)(!1),c=(0,u.I0)();function handleClose(){e.onAskClose(),o(!1),n("")}function handleSave(e){e.preventDefault(),(0,j.checkUrl)(a)?(handleClose(),c((0,g.VT)(a))):o(!0)}return(0,r.jsxs)(x.Z,{show:e.show,onHide:handleClose,size:"lg","aria-labelledby":"add-aggregator-title",centered:!0,children:[(0,r.jsx)(x.Z.Header,{closeButton:!0,children:(0,r.jsx)(x.Z.Title,{id:"add-aggregator-title",children:"New aggregator source"})}),(0,r.jsx)(x.Z.Body,{children:(0,r.jsx)(i.Z,{onSubmit:handleSave,children:(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(i.Z.Label,{children:"URL"}),(0,r.jsx)(i.Z.Control,{type:"url",value:a,onChange:e=>n(e.target.value),isInvalid:t,autoFocus:!0}),(0,r.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Invalid URL"})]})})}),(0,r.jsxs)(x.Z.Footer,{children:[(0,r.jsx)(s.Z,{variant:"secondary",onClick:handleClose,children:"Close"}),(0,r.jsx)(s.Z,{variant:"primary",onClick:handleSave,children:"Save"})]})]})}function AggregatorSetter(e){let[a,n]=(0,l.useState)(!1),h=(0,u.v9)(e=>e.settings.selectedAggregator),x=(0,u.v9)(e=>e.settings.availableAggregators),j=(0,u.v9)(e=>e.settings.canRemoveSelected),v=(0,u.I0)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(AddAggregatorModal,{show:a,onAskClose:()=>n(!1)}),(0,r.jsxs)(i.Z.Group,{as:t.Z,className:e.className,children:[(0,r.jsx)(i.Z.Label,{children:"Aggregator:"}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{variant:"outline-success",onClick:()=>n(!0),children:(0,r.jsx)("i",{className:"bi bi-plus-circle"})}),j&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{variant:"outline-danger",onClick:()=>v((0,g.OR)()),children:(0,r.jsx)("i",{className:"bi bi-dash-circle"})}),(0,r.jsx)(c.Z,{overlay:(0,r.jsx)(d.Z,{children:"Unofficial Aggregator"}),children:(0,r.jsx)(s.Z,{variant:"outline-warning",children:(0,r.jsx)("i",{className:"bi bi-exclamation-triangle"})})})]}),(0,r.jsx)(i.Z.Select,{value:h,onChange:e=>v((0,g.VT)(e.target.value)),children:x.map((e,a)=>(0,r.jsx)("option",{value:e,children:e},"agg-"+a))}),(0,r.jsx)(c.Z,{overlay:(0,r.jsx)(d.Z,{children:"Copy url"}),children:(0,r.jsx)(s.Z,{variant:"outline-secondary",onClick:function(){window.isSecureContext&&h&&navigator.clipboard.writeText(h).then(()=>{})},children:(0,r.jsx)("i",{className:"bi bi-clipboard"})})})]})]})]})}},2801:function(e,a,n){n.d(a,{Z:function(){return g}});var r=n(4440),l=n.n(r),s=n(2265),t=n(7127),i=n(6641);let o=s.createContext(null);o.displayName="InputGroupContext";var c=n(7437);let d=s.forwardRef(({className:e,bsPrefix:a,as:n="span",...r},s)=>(a=(0,t.vE)(a,"input-group-text"),(0,c.jsx)(n,{ref:s,className:l()(e,a),...r})));d.displayName="InputGroupText";let u=s.forwardRef(({bsPrefix:e,size:a,hasValidation:n,className:r,as:i="div",...d},u)=>{e=(0,t.vE)(e,"input-group");let g=(0,s.useMemo)(()=>({}),[]);return(0,c.jsx)(o.Provider,{value:g,children:(0,c.jsx)(i,{ref:u,...d,className:l()(r,e,a&&`${e}-${a}`,n&&"has-validation")})})});u.displayName="InputGroup";var g=Object.assign(u,{Text:d,Radio:e=>(0,c.jsx)(d,{children:(0,c.jsx)(i.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(d,{children:(0,c.jsx)(i.Z,{type:"checkbox",...e})})})}}]);