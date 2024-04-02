"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[4563],{13252:(S,d,e)=>{e.d(d,{F:()=>o});var t=e(21272),l=e(80403),r=e(74930);function o(E={},a={}){const{id:s="",...g}=E,{get:M}=(0,l.ry)(),{data:n,isError:P,isLoading:D,refetch:R}=(0,r.useQuery)(["users",s,g],async()=>{const{data:{data:u}}=await M(`/admin/users/${s}`,{params:g});return u},a);return{users:t.useMemo(()=>{let u=[];return n&&("results"in n?Array.isArray(n.results)&&(u=n.results):u=[n]),u},[n]),pagination:t.useMemo(()=>(n&&"pagination"in n)??null,[n]),isLoading:D,isError:P,refetch:R}}},2976:(S,d,e)=>{e.d(d,{A:()=>n});var t=e(21272),l=e(94061),r=e(85963),o=e(80403),E=e(28604),a=e(33544),s=e.n(a),g=e(54894);const M=({displayedFilters:P})=>{const[D,R]=(0,t.useState)(!1),{formatMessage:h}=(0,g.A)(),u=(0,t.useRef)(),W=()=>{R(C=>!C)};return t.createElement(t.Fragment,null,t.createElement(l.a,{paddingTop:1,paddingBottom:1},t.createElement(r.$,{variant:"tertiary",ref:u,startIcon:t.createElement(E.A,null),onClick:W,size:"S"},h({id:"app.utils.filters",defaultMessage:"Filters"})),D&&t.createElement(o.LC,{displayedFilters:P,isVisible:D,onToggle:W,source:u})),t.createElement(o.cZ,{filtersSchema:P}))};M.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const n=M},67626:(S,d,e)=>{e.d(d,{h:()=>Me,A:()=>Fe});var t=e(21272),l=e(38413),r=e(55356),o=e(74773),E=e(4198),a=e(80403),s=e(5409),g=e.n(s),M=e(54894),n=e(74930),P=e(82437),D=e(17703),R=e(13252),h=e(88022),u=e(71526),W=e(2976),C=e(85963),F=e(34313),se=e(33544),m=e.n(se);const q=({onClick:i})=>{const{formatMessage:f}=(0,M.A)();return t.createElement(C.$,{onClick:i,startIcon:t.createElement(F.A,null),size:"S"},f({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};q.propTypes={onClick:m().func.isRequired};var ne=e(25641),b=e(90361),X=e(33363),le=e(50215),j=e(30893),$=e(83997),ee=e(88353),p=e(94061),pe=e(41909),fe=e(50612),re=e(40609);const oe=({canDelete:i,headers:f,entriesToDelete:L,onClickDelete:k,onSelectRow:V,withMainAction:z,withBulkActions:K,rows:U})=>{const{push:v,location:{pathname:Q}}=(0,D.W6)(),{formatMessage:O}=(0,M.A)();return t.createElement(ne.N,null,U.map(c=>{const N=L.findIndex(I=>I===c.id)!==-1;return t.createElement(b.Tr,{key:c.id,...(0,a.qM)({fn:()=>v(`${Q}/${c.id}`),condition:K})},z&&t.createElement(X.Td,{...a.dG},t.createElement(le.J,{"aria-label":O({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,re.d)(c.firstname,c.lastname)}),checked:N,onChange:()=>{V({name:c.id,value:!N})}})),f.map(({key:I,cellFormatter:Y,name:x,...H})=>t.createElement(X.Td,{key:I},typeof Y=="function"?Y(c,{key:I,name:x,formatMessage:O,...H}):t.createElement(j.o,{textColor:"neutral800"},c[x]||"-"))),K&&t.createElement(X.Td,null,t.createElement($.s,{justifyContent:"end"},t.createElement(ee.K,{onClick:()=>v(`${Q}/${c.id}`),label:O({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,re.d)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(pe.A,null)}),i&&t.createElement(p.a,{paddingLeft:1,...a.dG},t.createElement(ee.K,{onClick:()=>k(c.id),label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,re.d)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(fe.A,null)})))))}))};oe.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},oe.propTypes={canDelete:m().bool,entriesToDelete:m().array,headers:m().array.isRequired,onClickDelete:m().func,onSelectRow:m().func,rows:m().array,withBulkActions:m().bool,withMainAction:m().bool};const Ae=oe;var ye=e(61485),he=e(99248),ve=e(6239),me=e(90151),ie=e(68074),Pe=e(67030),De=e(37679),Ce=e(60043),Oe=e(61535),Le=e(94844),Te=e(85842),J=e(12083);const Ee={firstname:"",lastname:"",email:"",roles:[]},Re=[],Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ie=J.Ik().shape({firstname:J.Yj().trim().required(a.iW.required),lastname:J.Yj(),email:J.Yj().email(a.iW.email).required(a.iW.required),roles:J.YO().min(1,a.iW.required).required(a.iW.required)}),Be={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},ue=({onSuccess:i,onToggle:f})=>{const[L,k]=(0,t.useState)("create"),[V,z]=(0,t.useState)(!1),[K,U]=(0,t.useState)(null),{formatMessage:v}=(0,M.A)(),Q=(0,a.hN)(),{lockApp:O,unlockApp:c}=(0,a.MA)(),{post:N}=(0,a.ry)(),I=(0,h.h)(Re,async()=>(await e.e(9452).then(e.bind(e,99452))).ROLE_LAYOUT,{combine(y,B){return[...y,B]},defaultValue:[]}),Y=(0,h.h)(Ee,async()=>(await e.e(9452).then(e.bind(e,99452))).FORM_INITIAL_VALUES,{combine(y,B){return{...y,...B}},defaultValue:Ee}),x=(0,h.h)(Le.g,async()=>(await e.e(9034).then(e.bind(e,69034))).MagicLinkEE),H=(0,n.useMutation)(y=>N("/admin/users",y),{async onSuccess({data:y}){U(y.data.registrationToken),await i(),ae(),z(!1)},onError(y){throw z(!1),Q({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),y},onSettled(){c()}}),w=v({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),te=async(y,{setErrors:B})=>{O(),z(!0);try{await H.mutateAsync(y)}catch(Z){c(),Z?.response?.data?.error.message==="Email already taken"&&B({email:Z.response.data.error.message})}},ae=()=>{A?k(A):f()},{buttonSubmitLabel:_,isDisabled:G,next:A}=Be[L],be=L==="create"?t.createElement(C.$,{type:"submit",loading:V},v(_)):t.createElement(C.$,{type:"button",loading:V,onClick:f},v(_));return x?t.createElement(ye.k,{onClose:f,labelledBy:"title"},t.createElement(he.r,null,t.createElement(De.B,{label:w},t.createElement(Ce.m,{isCurrent:!0},w))),t.createElement(Oe.l1,{enableReinitialize:!0,initialValues:Y,onSubmit:te,validationSchema:Ie,validateOnChange:!1},({errors:y,handleChange:B,values:Z})=>t.createElement(a.lV,null,t.createElement(ve.c,null,t.createElement($.s,{direction:"column",alignItems:"stretch",gap:6},L!=="create"&&t.createElement(x,{registrationToken:K}),t.createElement(p.a,null,t.createElement(j.o,{variant:"beta",as:"h2"},v({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(p.a,{paddingTop:4},t.createElement($.s,{direction:"column",alignItems:"stretch",gap:1},t.createElement(me.x,{gap:5},Ue.map(de=>de.map(T=>t.createElement(ie.E,{key:T.name,...T.size},t.createElement(a.ah,{...T,disabled:G,error:y[T.name],onChange:B,value:Z[T.name]})))))))),t.createElement(p.a,null,t.createElement(j.o,{variant:"beta",as:"h2"},v({id:"global.roles",defaultMessage:"User's role"})),t.createElement(p.a,{paddingTop:4},t.createElement(me.x,{gap:5},t.createElement(ie.E,{col:6,xs:12},t.createElement(Te.A,{disabled:G,error:y.roles,onChange:B,value:Z.roles})),I.map(de=>de.map(T=>t.createElement(ie.E,{key:T.name,...T.size},t.createElement(a.ah,{...T,disabled:G,onChange:B,value:Z[T.name]}))))))))),t.createElement(Pe.j,{startActions:t.createElement(C.$,{variant:"tertiary",onClick:f,type:"button"},v({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:be})))):null};ue.propTypes={onToggle:m().func.isRequired,onSuccess:m().func.isRequired};const Se=ue,ce=({pagination:i})=>t.createElement(p.a,{paddingTop:4},t.createElement($.s,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a._u,null),t.createElement(a.W7,{pagination:i})));ce.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ce.propTypes={pagination:m().shape({page:m().number,pageCount:m().number,pageSize:m().number,total:m().number})};const We=ce,Ke=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xe=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:i},{formatMessage:f}){return t.createElement(j.o,{textColor:"neutral800"},i.map(L=>f({id:`Settings.permissions.users.${L.code}`,defaultMessage:L.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:i},{formatMessage:f}){return t.createElement($.s,null,t.createElement(a.nW,{isActive:i,variant:i?"success":"danger"}),t.createElement(j.o,{textColor:"neutral800"},f({id:i?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:i?"Active":"Inactive"})))}}],ge=["ee","license-limit-info"],Me=()=>{const{post:i}=(0,a.ry)(),{formatAPIError:f}=(0,a.wq)(),[L,k]=(0,t.useState)(!1),V=(0,P.d4)(u.G),{allowedActions:{canCreate:z,canDelete:K,canRead:U}}=(0,a.ec)(V.settings.users),v=(0,n.useQueryClient)(),Q=(0,a.hN)(),{formatMessage:O}=(0,M.A)(),{search:c}=(0,D.zy)();(0,a.L4)();const{users:N,pagination:I,isError:Y,isLoading:x,refetch:H}=(0,R.F)(g().parse(c,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:U}),w=(0,h.h)(q,async()=>(await e.e(224).then(e.bind(e,80224))).CreateActionEE),te=xe.map(A=>({...A,metadatas:{...A.metadatas,label:O(A.metadatas.label)}})),ae=O({id:"global.users",defaultMessage:"Users"}),_=()=>{k(A=>!A)},G=(0,n.useMutation)(async A=>{await i("/admin/users/batch-delete",{ids:A})},{async onSuccess(){await H(),await v.refetchQueries(ge)},onError(A){Q({type:"warning",message:{id:"notification.error",message:f(A),defaultMessage:"An error occured"}})}});return w?t.createElement(l.g,{"aria-busy":x},t.createElement(a.x7,{name:"Users"}),t.createElement(r.Q,{primaryAction:z&&t.createElement(w,{onClick:_}),title:ae,subtitle:O({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),U&&t.createElement(o.B,{startActions:t.createElement(t.Fragment,null,t.createElement(a.q7,{label:O({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ae})}),t.createElement(W.A,{displayedFilters:Ke}))}),t.createElement(E.s,{canRead:U},!U&&t.createElement(a.UW,null),Y&&t.createElement("div",null,"TODO: An error occurred"),U&&t.createElement(t.Fragment,null,t.createElement(a.Ee,{contentType:"Users",isLoading:x,onConfirmDeleteAll:G.mutateAsync,onConfirmDelete:A=>G.mutateAsync([A]),headers:te,rows:N,withBulkActions:!0,withMainAction:K},t.createElement(Ae,{canDelete:K,headers:te,rows:N,withBulkActions:!0,withMainAction:K})),I&&t.createElement(We,{pagination:I}))),L&&t.createElement(Se,{onSuccess:async()=>{await H(),await v.refetchQueries(ge)},onToggle:_})):null},Fe=()=>{const i=(0,h.h)(Me,async()=>(await e.e(6869).then(e.bind(e,86869))).UserListPageEE);return i?t.createElement(i,null):null}},50125:(S,d,e)=>{e.r(d),e.d(d,{default:()=>s});var t=e(21272),l=e(80403),r=e(82437),o=e(71526),E=e(67626);const s=()=>{const g=(0,r.d4)(o.G);return t.createElement(l.kz,{permissions:g.settings.users.main},t.createElement(E.A,null))}},16888:(S,d,e)=>{e.d(d,{A:()=>M});var t=e(21272),l=e(88353),r=e(80403),o=e(90625),E=e(33544),a=e.n(E),s=e(54894);const g=({children:n,target:P})=>{const D=(0,r.hN)(),{formatMessage:R}=(0,s.A)(),{copy:h}=(0,r.iD)(),u=R({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),W=async()=>{await h(P)&&D({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(r.bQ,{endAction:t.createElement(l.K,{label:u,noBorder:!0,icon:t.createElement(o.A,null),onClick:W}),title:P,titleEllipsis:!0,subtitle:n,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};g.propTypes={children:a().oneOfType([a().element,a().string]).isRequired,target:a().string.isRequired};const M=g},94844:(S,d,e)=>{e.d(d,{g:()=>s});var t=e(21272),l=e(33544),r=e.n(l),o=e(54894),E=e(35656),a=e(16888);const s=({registrationToken:g})=>{const{formatMessage:M}=(0,o.A)(),n=`${window.location.origin}${E.A}auth/register?registrationToken=${g}`;return t.createElement(a.A,{target:n},M({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:r().string}},85842:(S,d,e)=>{e.d(d,{A:()=>W});var t=e(21272),l=e(43739),r=e(95336),o=e(80403),E=e(84795),a=e(33544),s=e.n(a),g=e(54894),M=e(74930),n=e(79793);const P=(0,n.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,D=n.Ay.div`
  animation: ${P} 2s infinite linear;
`,R=()=>t.createElement(D,null,t.createElement(E.A,null)),h=async()=>{const{get:C}=(0,o.GD)(),{data:F}=await C("/admin/roles");return F.data},u=({disabled:C,error:F,onChange:se,value:m})=>{const{status:q,data:ne}=(0,M.useQuery)(["roles"],h,{staleTime:5e4}),{formatMessage:b}=(0,g.A)(),X=F?b({id:F,defaultMessage:F}):"",le=b({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),j=b({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),$=b({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ee=q==="loading"?t.createElement(R,null):void 0;return t.createElement(l.l,{id:"roles",disabled:C,error:X,hint:j,label:le,name:"roles",onChange:p=>{se({target:{name:"roles",value:p}})},placeholder:$,multi:!0,startIcon:ee,value:m.map(p=>p.toString()),withTags:!0,required:!0},(ne||[]).map(p=>t.createElement(r.c,{key:p.id,value:p.id.toString()},b({id:`global.${p.code}`,defaultMessage:p.name}))))};u.defaultProps={disabled:!1,error:void 0},u.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const W=u},74773:(S,d,e)=>{e.d(d,{B:()=>r});var t=e(92132),l=e(83997);const r=({startActions:o,endActions:E})=>!o&&!E?null:(0,t.jsxs)(l.s,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(l.s,{gap:2,wrap:"wrap",children:o}),(0,t.jsx)(l.s,{gap:2,shrink:0,wrap:"wrap",children:E})]})},34313:(S,d,e)=>{e.d(d,{A:()=>r});var t=e(92132);const l=o=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),r=l}}]);
