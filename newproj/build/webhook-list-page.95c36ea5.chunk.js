"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[4001],{62:(U,h,t)=>{t.r(h),t.d(h,{default:()=>ue});var e=t(21272),s=t(80403),c=t(82437),u=t(71526),g=t(11273),L=t(42455),S=t(38413),w=t(55356),D=t(74773),l=t(30893),p=t(85963),j=t(4198),K=t(94061),_=t(35513),ee=t(40216),te=t(26127),V=t(90361),i=t(33363),F=t(50215),ne=t(98765),ae=t(25641),A=t(83997),E=t(92132),z=t(79793);const B=z.Ay.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=z.Ay.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${B} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${B}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:o,onChange:m,onLabel:f="On",offLabel:d="Off",selected:M,visibleLabels:a=!1,...v},b)=>(0,E.jsx)(se,{ref:b,role:"switch","aria-checked":M,"aria-label":o,onClick:m,visibleLabels:a,type:"button",...v,children:(0,E.jsxs)(A.s,{children:[(0,E.jsxs)(B,{children:[(0,E.jsx)("span",{children:f}),(0,E.jsx)("span",{children:d})]}),a&&(0,E.jsx)(K.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:M?"success600":"danger600",children:M?f:d})]})}));var N=t(88353),le=t(53563),$=t(5194),G=t(50612),re=t(41909),ie=t(36481),de=t(54894),P=t(74930),Q=t(17703);const ce=()=>{const[o,m]=(0,e.useState)(!1),[f,d]=(0,e.useState)([]),M=(0,c.d4)(u.G),{formatMessage:a}=(0,de.A)(),{formatAPIError:v}=(0,s.wq)(),b=(0,s.hN)();(0,s.L4)();const{push:me}=(0,Q.W6)(),{pathname:H}=(0,Q.zy)(),{isLoading:he,allowedActions:{canCreate:O,canUpdate:J,canDelete:X}}=(0,s.ec)(M.settings.webhooks),{get:ge,post:Ee,put:fe}=(0,s.ry)(),{notifyStatus:Y}=(0,g.W)(),ve="webhooks",{isLoading:be,data:y,error:W,refetch:Z}=(0,P.useQuery)(ve,async()=>{const{data:{data:n}}=await ge("/admin/webhooks");return n});(0,e.useEffect)(()=>{if(W){b({type:"warning",message:v(W)});return}y&&Y(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[y,W,b,a,Y,v]);const q=(0,P.useMutation)(async()=>{await Ee("/admin/webhooks/batch-delete",{ids:f})},{onError(n){b({type:"warning",message:v(n)}),m(!1)},onSuccess(){d([]),m(!1),Z()}}),ye=(0,P.useMutation)(async({isEnabled:n,id:r})=>{const{id:T,...R}=y.find(Te=>Te.id===r)??{},Ce={...R,isEnabled:n};await fe(`/admin/webhooks/${r}`,Ce)},{onError(n){b({type:"warning",message:v(n)})},onSuccess(){Z()}}),Me=()=>q.mutate(),xe=n=>d(n?y.map(r=>r.id):[]),pe=(n,r)=>d(n?T=>[...T,r]:T=>T.filter(R=>R!==r)),k=n=>me(`${H}/${n}`),I=he||be,C=y?.length??0,x=f.length;return e.createElement(L.P,null,e.createElement(s.x7,{name:"Webhooks"}),e.createElement(S.g,{"aria-busy":I},e.createElement(w.Q,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:O&&!I&&e.createElement(s.z9,{startIcon:e.createElement($.A,null),variant:"default",to:`${H}/create`,size:"S"},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),x>0&&X&&e.createElement(D.B,{startActions:e.createElement(e.Fragment,null,e.createElement(l.o,{variant:"epsilon",textColor:"neutral600"},a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:x})),e.createElement(p.$,{onClick:()=>m(!0),startIcon:e.createElement(G.A,null),size:"L",variant:"danger-light"},a({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(j.s,null,I?e.createElement(K.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.Bl,null)):C>0?e.createElement(_.X,{colCount:5,rowCount:C+1,footer:e.createElement(ee.S,{onClick:()=>O?k("create"):{},icon:e.createElement($.A,null)},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.d,null,e.createElement(V.Tr,null,e.createElement(i.Th,null,e.createElement(F.J,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:x>0&&x<C,value:x===C,onValueChange:xe})),e.createElement(i.Th,{width:"20%"},e.createElement(l.o,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.o,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.o,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(ne.s,null,a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.N,null,y.map(n=>e.createElement(V.Tr,{key:n.id,...(0,s.qM)({fn:()=>k(n.id),condition:J})},e.createElement(i.Td,{...s.dG},e.createElement(F.J,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:f?.includes(n.id),onValueChange:r=>pe(r,n.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.o,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(i.Td,null,e.createElement(l.o,{textColor:"neutral800"},n.url)),e.createElement(i.Td,null,e.createElement(A.s,null,e.createElement(oe,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:r=>{r.stopPropagation(),ye.mutate({isEnabled:!n.isEnabled,id:n.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(A.s,{gap:1},J&&e.createElement(N.K,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(re.A,null),noBorder:!0}),X&&e.createElement(N.K,{onClick:r=>{r.stopPropagation(),d([n.id]),m(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(G.A,null),noBorder:!0}))))))):e.createElement(le.p,{icon:e.createElement(ie.A,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(p.$,{variant:"secondary",startIcon:e.createElement($.A,null),onClick:()=>O?k("create"):{}},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.TM,{isOpen:o,onToggleDialog:()=>m(n=>!n),onConfirm:Me,isConfirmButtonLoading:q.isLoading}))},ue=()=>{const o=(0,c.d4)(u.G);return e.createElement(s.kz,{permissions:o.settings.webhooks.main},e.createElement(ce,null))}},74773:(U,h,t)=>{t.d(h,{B:()=>c});var e=t(92132),s=t(83997);const c=({startActions:u,endActions:g})=>!u&&!g?null:(0,e.jsxs)(s.s,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.s,{gap:2,wrap:"wrap",children:u}),(0,e.jsx)(s.s,{gap:2,shrink:0,wrap:"wrap",children:g})]})},40216:(U,h,t)=>{t.d(h,{S:()=>D});var e=t(92132),s=t(79793),c=t(94061),u=t(48653),g=t(83997),L=t(30893);const S=(0,s.Ay)(c.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,w=(0,s.Ay)(c.a)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,D=({children:l,icon:p,...j})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(u.c,{}),(0,e.jsx)(w,{as:"button",background:"primary100",padding:5,...j,children:(0,e.jsxs)(g.s,{children:[(0,e.jsx)(S,{"aria-hidden":!0,background:"primary200",children:p}),(0,e.jsx)(c.a,{paddingLeft:3,children:(0,e.jsx)(L.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
