"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[821],{23544:($,S,t)=>{t.r(S),t.d(S,{default:()=>We});var e=t(21272),d=t(80403),T=t(11235),A=t(33544),c=t.n(A),P=t(38413),p=t(55356),L=t(85963),b=t(4198),K=t(53563),W=t(5194),O=t(36481),r=t(54894),E=t(58272),a=t(56668),v=t(61485),h=t(99248),f=t(30893),j=t(6239),I=t(12081),F=t(83997),M=t(12408),w=t(48653),k=t(94061),B=t(24093),q=t(67030),_=t(54514),N=t(61535),ue=t(2600),me=t.n(ue),z=t(82437),H=t(84012);const ge=()=>{const[n,s]=(0,e.useState)(!1),o=(0,z.wA)(),l=(0,d.hN)(),{post:i}=(0,d.ry)();return{isAdding:n,addLocale:async m=>{s(!0);try{const{data:g}=await i("/i18n/locales",m);l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.create.success")}}),o({type:H.TI,newLocale:g})}catch(g){const y=me()(g,"response.payload.message",null);throw y&&y.includes("already exists")?l({type:"warning",message:{id:(0,a.g)("Settings.locales.modal.create.alreadyExist")}}):l({type:"warning",message:{id:"notification.error"}}),g}finally{s(!1)}}}};var G=t(12083);const ee=(0,G.Ik)().shape({code:(0,G.Yj)().required(),displayName:(0,G.Yj)().max(50,"Settings.locales.modal.locales.displayName.error").required(d.iW.required)});var te=t(4181);const fe=()=>{const{values:n,setFieldValue:s}=(0,N.j7)(),{formatMessage:o}=(0,r.A)();return e.createElement(te.S,{hint:o({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>s("isDefault",!n.isDefault),value:n.isDefault},o({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};var ae=t(90151),U=t(68074),le=t(7537),Ee=t(76517),ve=t(80782),he=t(11273),ye=t(74930);const ne=()=>{const{formatMessage:n}=(0,r.A)(),{notifyStatus:s}=(0,he.W)(),o=(0,d.hN)(),{get:l}=(0,d.ry)(),{isLoading:i,data:u}=(0,ye.useQuery)(["plugin-i18n","locales"],async()=>{try{const{data:m}=await l("/i18n/iso-locales");return s(n({id:(0,a.g)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),m}catch{return o({type:"warning",message:{id:"notification.error"}}),[]}});return{defaultLocales:u,isLoading:i}},Q=e.memo(({value:n,onClear:s,onLocaleChange:o,error:l})=>{const{formatMessage:i}=(0,r.A)(),{defaultLocales:u,isLoading:m}=ne(),{locales:g}=(0,E.A)(),y=(u||[]).map(C=>({label:C.name,value:C.code})).filter(({value:C})=>{const x=g.find(({code:V})=>V===C);return!x||x.code===n}),R=n||"";return e.createElement(Ee.G3,{"aria-busy":m,error:l,label:i({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:R,onClear:n?s:void 0,onChange:C=>{const x=y.find(V=>V.value===C);x&&o({code:x.value,displayName:x.label})},placeholder:i({id:"components.placeholder.select",defaultMessage:"Select"})},y.map(C=>e.createElement(ve.j,{value:C.value,key:C.value},C.label)))});Q.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},Q.propTypes={error:c().string,onClear:c().func,onLocaleChange:c().func,value:c().string};const pe=Q,Le=()=>{const{formatMessage:n}=(0,r.A)(),{values:s,handleChange:o,setFieldValue:l,errors:i}=(0,N.j7)(),u=(0,e.useCallback)(g=>{l("displayName",g.displayName),l("code",g.code)},[l]),m=(0,e.useCallback)(()=>{l("displayName",""),l("code","")},[l]);return e.createElement(ae.x,{gap:4},e.createElement(U.E,{col:6},e.createElement(pe,{error:i.code,value:s.code,onLocaleChange:u,onClear:m})),e.createElement(U.E,{col:6},e.createElement(le.k,{name:"displayName",label:n({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:i.displayName?n({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:s.displayName,onChange:o})))},Ce={code:"",displayName:"",isDefault:!1},se=({onClose:n})=>{const{isAdding:s,addLocale:o}=ge(),{formatMessage:l}=(0,r.A)(),{refetchPermissions:i}=(0,d.r5)(),u=async m=>{await o({code:m.code,name:m.displayName,isDefault:m.isDefault}),await i()};return e.createElement(v.k,{onClose:n,labelledBy:"add-locale-title"},e.createElement(N.l1,{initialValues:Ce,onSubmit:u,validationSchema:ee,validateOnChange:!1},e.createElement(d.lV,null,e.createElement(h.r,null,e.createElement(f.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},l({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(j.c,null,e.createElement(I.f,{label:l({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(F.s,{justifyContent:"space-between"},e.createElement(f.o,{as:"h2",variant:"beta"},l({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(M.t,null,e.createElement(M.o,null,l({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(M.o,null,l({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(w.c,null),e.createElement(k.a,{paddingTop:7,paddingBottom:7},e.createElement(B.T,null,e.createElement(B.K,null,e.createElement(Le,null)),e.createElement(B.K,null,e.createElement(fe,null)))))),e.createElement(q.j,{startActions:e.createElement(L.$,{variant:"tertiary",onClick:n},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(L.$,{type:"submit",startIcon:e.createElement(_.A,null),disabled:s},l({id:"global.save",defaultMessage:"Save"}))}))))};se.propTypes={onClose:c().func.isRequired};const Se=se,Me=()=>{const[n,s]=(0,e.useState)(!1),o=(0,z.wA)(),l=(0,d.hN)(),{del:i}=(0,d.ry)();return{isDeleting:n,deleteLocale:async m=>{try{s(!0),await i(`/i18n/locales/${m}`),l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.delete.success")}}),o({type:H.V2,id:m})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{s(!1)}}}},J=({localeToDelete:n,onClose:s})=>{const{isDeleting:o,deleteLocale:l}=Me(),i=Boolean(n),u=()=>l(n.id).then(s);return e.createElement(d.TM,{isConfirmButtonLoading:o,onConfirm:u,onToggleDialog:s,isOpen:i})};J.defaultProps={localeToDelete:void 0},J.propTypes={localeToDelete:c().shape({id:c().number.isRequired}),onClose:c().func.isRequired};const De=J,xe=()=>{const[n,s]=(0,e.useState)(!1),o=(0,z.wA)(),l=(0,d.hN)(),{put:i}=(0,d.ry)();return{isEditing:n,editLocale:async(m,g)=>{try{s(!0);const{data:y}=await i(`/i18n/locales/${m}`,g);l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.edit.success")}}),o({type:H.JX,editedLocale:y})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{s(!1)}}}},oe=({isDefaultLocale:n})=>{const{values:s,setFieldValue:o}=(0,N.j7)(),{formatMessage:l}=(0,r.A)();return e.createElement(te.S,{name:"isDefault",hint:l({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>o("isDefault",!s.isDefault),value:s.isDefault,disabled:n},l({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};oe.propTypes={isDefaultLocale:c().bool.isRequired};const Te=oe;var Ae=t(43739),je=t(95336);const ie=({locale:n})=>{const{formatMessage:s}=(0,r.A)(),{values:o,handleChange:l,errors:i}=(0,N.j7)(),{defaultLocales:u,isLoading:m}=ne(),g=!m&&u.find(y=>y.code===n.code);return e.createElement(ae.x,{gap:4},e.createElement(U.E,{col:6},e.createElement(Ae.l,{label:s({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:g?.code||n.code,disabled:!0},e.createElement(je.c,{value:g?.code||n.code},g?.name||n.code))),e.createElement(U.E,{col:6},e.createElement(le.k,{name:"displayName",label:s({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:s({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:i.displayName?s({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:o.displayName,onChange:l})))},Re=ie;ie.propTypes={locale:c().shape({id:c().number.isRequired,name:c().string.isRequired,code:c().string.isRequired,isDefault:c().bool.isRequired}).isRequired};const X=({locale:n,onClose:s})=>{const{refetchPermissions:o}=(0,d.r5)(),{isEditing:l,editLocale:i}=xe(),{formatMessage:u}=(0,r.A)(),m=async({displayName:g,isDefault:y})=>{await i(n.id,{name:g,isDefault:y}),await o()};return e.createElement(v.k,{onClose:s,labelledBy:"edit-locale-title"},e.createElement(N.l1,{initialValues:{code:n?.code,displayName:n?.name||"",isDefault:Boolean(n?.isDefault)},onSubmit:m,validationSchema:ee},e.createElement(d.lV,null,e.createElement(h.r,null,e.createElement(f.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},u({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(j.c,null,e.createElement(I.f,{label:u({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(F.s,{justifyContent:"space-between"},e.createElement(f.o,{as:"h2"},u({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(M.t,null,e.createElement(M.o,null,u({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(M.o,null,u({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(w.c,null),e.createElement(k.a,{paddingTop:7,paddingBottom:7},e.createElement(B.T,null,e.createElement(B.K,null,e.createElement(Re,{locale:n})),e.createElement(B.K,null,e.createElement(Te,{isDefaultLocale:Boolean(n&&n.isDefault)})))))),e.createElement(q.j,{startActions:e.createElement(L.$,{variant:"tertiary",onClick:s},u({id:"app.components.Button.cancel"})),endActions:e.createElement(L.$,{type:"submit",startIcon:e.createElement(_.A,null),disabled:l},u({id:"global.save"}))}))))};X.defaultProps={locale:void 0},X.propTypes={locale:c().shape({id:c().number.isRequired,name:c().string.isRequired,code:c().string.isRequired,isDefault:c().bool.isRequired}),onClose:c().func.isRequired};const be=X;var Be=t(35513),Ne=t(26127),ce=t(90361),D=t(33363),Pe=t(98765),Oe=t(25641),de=t(88353),Ie=t(41909),Fe=t(50612);const Y=({locales:n,onDeleteLocale:s,onEditLocale:o})=>{const{formatMessage:l}=(0,r.A)();return e.createElement(Be.X,{colCount:4,rowCount:n.length+1},e.createElement(Ne.d,null,e.createElement(ce.Tr,null,e.createElement(D.Th,null,e.createElement(f.o,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.g)("Settings.locales.row.id")}))),e.createElement(D.Th,null,e.createElement(f.o,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.g)("Settings.locales.row.displayName")}))),e.createElement(D.Th,null,e.createElement(f.o,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.g)("Settings.locales.row.default-locale")}))),e.createElement(D.Th,null,e.createElement(Pe.s,null,"Actions")))),e.createElement(Oe.N,null,n.map(i=>e.createElement(ce.Tr,{key:i.id,...(0,d.qM)({fn:()=>o(i),condition:o})},e.createElement(D.Td,null,e.createElement(f.o,{textColor:"neutral800"},i.id)),e.createElement(D.Td,null,e.createElement(f.o,{textColor:"neutral800"},i.name)),e.createElement(D.Td,null,e.createElement(f.o,{textColor:"neutral800"},i.isDefault?l({id:(0,a.g)("Settings.locales.default")}):null)),e.createElement(D.Td,null,e.createElement(F.s,{gap:1,justifyContent:"flex-end",...d.dG},o&&e.createElement(de.K,{onClick:()=>o(i),label:l({id:(0,a.g)("Settings.list.actions.edit")}),icon:e.createElement(Ie.A,null),noBorder:!0}),s&&!i.isDefault&&e.createElement(de.K,{onClick:()=>s(i),label:l({id:(0,a.g)("Settings.list.actions.delete")}),icon:e.createElement(Fe.A,null),noBorder:!0})))))))};Y.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},Y.propTypes={locales:c().array,onDeleteLocale:c().func,onEditLocale:c().func};const Ve=Y,Z=({canUpdateLocale:n,canDeleteLocale:s,onToggleCreateModal:o,isCreating:l})=>{const[i,u]=(0,e.useState)(),[m,g]=(0,e.useState)(),{locales:y}=(0,E.A)(),{formatMessage:R}=(0,r.A)();(0,d.L4)();const C=()=>u(void 0),x=s?u:void 0,V=()=>g(void 0),Ue=n?g:void 0;return e.createElement(P.g,{tabIndex:-1},e.createElement(p.Q,{primaryAction:e.createElement(L.$,{startIcon:e.createElement(W.A,null),onClick:o,size:"S"},R({id:(0,a.g)("Settings.list.actions.add")})),title:R({id:(0,a.g)("plugin.name")}),subtitle:R({id:(0,a.g)("Settings.list.description")})}),e.createElement(b.s,null,y?.length>0?e.createElement(Ve,{locales:y,onDeleteLocale:x,onEditLocale:Ue}):e.createElement(K.p,{icon:e.createElement(O.A,{width:void 0,height:void 0}),content:R({id:(0,a.g)("Settings.list.empty.title")}),action:o?e.createElement(L.$,{variant:"secondary",startIcon:e.createElement(W.A,null),onClick:o},R({id:(0,a.g)("Settings.list.actions.add")})):null})),l&&e.createElement(Se,{onClose:o}),m&&e.createElement(be,{onClose:V,locale:m}),e.createElement(De,{localeToDelete:i,onClose:C}))};Z.defaultProps={onToggleCreateModal:void 0},Z.propTypes={canUpdateLocale:c().bool.isRequired,canDeleteLocale:c().bool.isRequired,onToggleCreateModal:c().func,isCreating:c().bool.isRequired};const $e=Z,re=({canReadLocale:n,canCreateLocale:s,canDeleteLocale:o,canUpdateLocale:l})=>{const[i,u]=(0,e.useState)(!1),m=s?()=>u(g=>!g):void 0;return n?e.createElement($e,{canUpdateLocale:l,canDeleteLocale:o,onToggleCreateModal:m,isCreating:i}):null};re.propTypes={canReadLocale:c().bool.isRequired,canCreateLocale:c().bool.isRequired,canUpdateLocale:c().bool.isRequired,canDeleteLocale:c().bool.isRequired};const Ke=re,We=()=>{const{isLoading:n,allowedActions:{canRead:s,canUpdate:o,canCreate:l,canDelete:i}}=(0,d.ec)(T.J);return n?null:e.createElement(Ke,{canReadLocale:s,canCreateLocale:l,canUpdateLocale:o,canDeleteLocale:i})}},80782:($,S,t)=>{t.d(S,{j:()=>d});var e=t(76517);const d=e.c$},4198:($,S,t)=>{t.d(S,{s:()=>T});var e=t(92132),d=t(94061);const T=({children:A})=>(0,e.jsx)(d.a,{paddingLeft:10,paddingRight:10,children:A})},55356:($,S,t)=>{t.d(S,{$:()=>O,Q:()=>K});var e=t(92132),d=t(21272),T=t(79793);const A=r=>{const E=(0,d.useRef)(null),[a,v]=(0,d.useState)(!0),h=([f])=>{v(f.isIntersecting)};return(0,d.useEffect)(()=>{const f=E.current,j=new IntersectionObserver(h,r);return f&&j.observe(E.current),()=>{f&&j.disconnect()}},[E,r]),[E,a]};var c=t(23169);const P=(r,E)=>{const a=(0,c.c)(E);(0,d.useLayoutEffect)(()=>{const v=new ResizeObserver(a);return Array.isArray(r)?r.forEach(h=>{h.current&&v.observe(h.current)}):r.current&&v.observe(r.current),()=>{v.disconnect()}},[r,a])};var p=t(94061),L=t(83997),b=t(30893);const K=r=>{const E=(0,d.useRef)(null),[a,v]=(0,d.useState)(null),[h,f]=A({root:null,rootMargin:"0px",threshold:0});return P(h,()=>{h.current&&v(h.current.getBoundingClientRect())}),(0,d.useEffect)(()=>{E.current&&v(E.current.getBoundingClientRect())},[E]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:a?.height},ref:h,children:f&&(0,e.jsx)(O,{ref:E,...r})}),!f&&(0,e.jsx)(O,{...r,sticky:!0,width:a?.width})]})};K.displayName="HeaderLayout";const W=(0,T.Ay)(p.a)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,O=d.forwardRef(({navigationAction:r,primaryAction:E,secondaryAction:a,subtitle:v,title:h,sticky:f,width:j,...I},F)=>{const M=typeof v=="string";return f?(0,e.jsx)(W,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(L.s,{justifyContent:"space-between",children:[(0,e.jsxs)(L.s,{children:[r&&(0,e.jsx)(p.a,{paddingRight:3,children:r}),(0,e.jsxs)(p.a,{children:[(0,e.jsx)(b.o,{variant:"beta",as:"h1",...I,children:h}),M?(0,e.jsx)(b.o,{variant:"pi",textColor:"neutral600",children:v}):v]}),a?(0,e.jsx)(p.a,{paddingLeft:4,children:a}):null]}),(0,e.jsx)(L.s,{children:E?(0,e.jsx)(p.a,{paddingLeft:2,children:E}):void 0})]})}):(0,e.jsxs)(p.a,{ref:F,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,e.jsx)(p.a,{paddingBottom:2,children:r}):null,(0,e.jsxs)(L.s,{justifyContent:"space-between",children:[(0,e.jsxs)(L.s,{minWidth:0,children:[(0,e.jsx)(b.o,{as:"h1",variant:"alpha",...I,children:h}),a?(0,e.jsx)(p.a,{paddingLeft:4,children:a}):null]}),E]}),M?(0,e.jsx)(b.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:v}):v]})})},38413:($,S,t)=>{t.d(S,{g:()=>c});var e=t(92132),d=t(79793),T=t(94061);const A=(0,d.Ay)(T.a)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,c=({labelledBy:P="main-content-title",...p})=>(0,e.jsx)(A,{"aria-labelledby":P,as:"main",id:"main-content",tabIndex:-1,...p})}}]);
