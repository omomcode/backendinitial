(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[4937],{38168:(C,g,e)=>{"use strict";e.d(g,{A:()=>h});var t=e(21272),d=e(55356),o=e(83997),a=e(85963),s=e(80403),r=e(54514),u=e(46270),A=e(33544),n=e.n(A),T=e(54894),M=e(70603),v=e(60256);const c=(U,L,D,I)=>{const[R,S]=(0,t.useState)(!1),B=(0,s.hN)(),{post:l}=(0,s.ry)(),{formatAPIError:$}=(0,s.wq)();return{regenerateData:async()=>{try{const{data:{data:{accessKey:j}}}=await l(`${U}${L}/regenerate`);S(!1),D(j)}catch(j){S(!1),I?I(j):j instanceof v.pe&&B({type:"warning",message:$(j)})}},isLoadingConfirmation:R}},i=({onRegenerate:U,idToRegenerate:L,backUrl:D,onError:I})=>{const{formatMessage:R}=(0,T.A)(),[S,B]=(0,t.useState)(!1),{regenerateData:l,isLoadingConfirmation:$}=c(D,L,U,I),Y=async()=>{l(),B(!1)};return t.createElement(t.Fragment,null,t.createElement(a.$,{startIcon:t.createElement(M.A,null),type:"button",size:"S",variant:"tertiary",onClick:()=>B(!0),name:"regenerate"},R({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(s.TM,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(M.A,null),isConfirmButtonLoading:$,isOpen:S,onToggleDialog:()=>B(!1),onConfirm:Y,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};i.defaultProps={onRegenerate(){},onError:void 0},i.propTypes={onRegenerate:n().func,idToRegenerate:n().oneOfType([n().number,n().string]).isRequired,backUrl:n().string.isRequired,onError:n().func};const E=i,m=({title:U,token:L,setToken:D,canEditInputs:I,canRegenerate:R,isSubmitting:S,backUrl:B,regenerateUrl:l,onErrorRegenerate:$})=>{const{formatMessage:Y}=(0,T.A)(),j=Z=>{D({...L,accessKey:Z})};return t.createElement(d.Q,{title:L?.name||Y(U),primaryAction:I?t.createElement(o.s,{gap:2},R&&L?.id&&t.createElement(E,{backUrl:l,onRegenerate:j,idToRegenerate:L?.id,onError:$}),t.createElement(a.$,{disabled:S,loading:S,startIcon:t.createElement(r.A,null),type:"submit",size:"S"},Y({id:"global.save",defaultMessage:"Save"}))):R&&L?.id&&t.createElement(E,{onRegenerate:j,idToRegenerate:L?.id,backUrl:l}),navigationAction:t.createElement(s.N_,{startIcon:t.createElement(u.A,null),to:B},Y({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};m.propTypes={token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().oneOfType([n().number,n().string]),name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),canEditInputs:n().bool.isRequired,canRegenerate:n().bool.isRequired,setToken:n().func.isRequired,isSubmitting:n().bool.isRequired,backUrl:n().string.isRequired,title:n().shape({id:n().string,label:n().string}).isRequired,regenerateUrl:n().string.isRequired,onErrorRegenerate:n().func},m.defaultProps={token:void 0,onErrorRegenerate:void 0};const h=m},91146:(C,g,e)=>{"use strict";e.d(g,{A:()=>T});var t=e(21272),d=e(43739),o=e(95336),a=e(30893),s=e(33544),r=e.n(s),u=e(54894),A=e(31713);const n=({token:M,errors:v,values:c,onChange:i,isCreating:E})=>{const{formatMessage:m}=(0,u.A)();return t.createElement(t.Fragment,null,t.createElement(d.l,{name:"lifespan",label:m({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:c.lifespan!==null?c.lifespan:"0",error:v.lifespan?m(v.lifespan?.id?v.lifespan:{id:v.lifespan,defaultMessage:v.lifespan}):null,onChange:h=>{i({target:{name:"lifespan",value:h}})},required:!0,disabled:!E,placeholder:"Select"},t.createElement(o.c,{value:"604800000"},m({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(o.c,{value:"2592000000"},m({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(o.c,{value:"7776000000"},m({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(o.c,{value:"0"},m({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(a.o,{variant:"pi",textColor:"neutral600"},!E&&`${m({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,A.N1)(M?.createdAt,parseInt(c.lifespan,10))}`))};n.propTypes={errors:r().shape({lifespan:r().string}),onChange:r().func.isRequired,values:r().shape({lifespan:r().oneOfType([r().number,r().string])}).isRequired,isCreating:r().bool.isRequired,token:r().shape({id:r().oneOfType([r().number,r().string]),type:r().string,lifespan:r().string,name:r().string,accessKey:r().string,permissions:r().array,description:r().string,createdAt:r().string})},n.defaultProps={errors:{},token:{}};const T=n},54134:(C,g,e)=>{"use strict";e.d(g,{A:()=>T});var t=e(21272),d=e(88353),o=e(80403),a=e(90625),s=e(2919),r=e(33544),u=e.n(r),A=e(54894);const n=({token:M,tokenType:v})=>{const{formatMessage:c}=(0,A.A)(),i=(0,o.hN)(),{trackUsage:E}=(0,o.z1)(),{copy:m}=(0,o.iD)(),h=U=>async()=>{await m(U)&&(E("didCopyTokenKey",{tokenType:v}),i({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(o.bQ,{endAction:M&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(d.K,{label:c({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:h(M),noBorder:!0,icon:t.createElement(a.A,null),style:{padding:0,height:"1rem"}})),title:M||c({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:c(M?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(s.A,null),iconBackground:"neutral100"})};n.defaultProps={token:null},n.propTypes={token:u().string,tokenType:u().string.isRequired};const T=n},6937:(C,g,e)=>{"use strict";e.d(g,{A:()=>u});var t=e(21272),d=e(5287),o=e(33544),a=e.n(o),s=e(54894);const r=({errors:A,values:n,onChange:T,canEditInputs:M})=>{const{formatMessage:v}=(0,s.A)();return t.createElement(d.T,{label:v({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:A.description?v(A.description?.id?A.description:{id:A.description,defaultMessage:A.description}):null,onChange:T,disabled:!M},n.description)};r.propTypes={errors:a().shape({description:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({description:a().string}).isRequired},r.defaultProps={errors:{}};const u=r},28506:(C,g,e)=>{"use strict";e.d(g,{A:()=>u});var t=e(21272),d=e(7537),o=e(33544),a=e.n(o),s=e(54894);const r=({errors:A,values:n,onChange:T,canEditInputs:M})=>{const{formatMessage:v}=(0,s.A)();return t.createElement(d.k,{name:"name",error:A.name?v(A.name?.id?A.name:{id:A.name,defaultMessage:A.name}):null,label:v({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:T,value:n.name,disabled:!M,required:!0})};r.propTypes={errors:a().shape({name:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({name:a().string}).isRequired},r.defaultProps={errors:{}};const u=r},85021:(C,g,e)=>{"use strict";e.d(g,{A:()=>A});var t=e(21272),d=e(43739),o=e(95336),a=e(33544),s=e.n(a),r=e(54894);const u=({name:n,errors:T,values:M,onChange:v,canEditInputs:c,options:i,label:E})=>{const{formatMessage:m}=(0,r.A)();return t.createElement(d.l,{name:n,label:m({id:E.id,defaultMessage:E.defaultMessage}),value:M&&M[n],error:T[n]?m(T[n]?.id?T[n]:{id:T[n],defaultMessage:T[n]}):null,onChange:v,placeholder:"Select",required:!0,disabled:!c},i&&i.map(({value:h,label:U})=>t.createElement(o.c,{key:h,value:h},m(U))))};u.propTypes={name:s().string,options:s().arrayOf(s().shape({label:s().shape({id:s().string,defaultMessage:s().string}),value:s().string})),errors:s().shape({type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({type:s().string}).isRequired,label:s().shape({id:s().string,defaultMessage:s().string}).isRequired},u.defaultProps={name:"type",errors:{},options:[]};const A=u},55286:(C,g,e)=>{"use strict";e.d(g,{I:()=>t,j:()=>d});const t="api-token",d="transfer-token"},4937:(C,g,e)=>{"use strict";e.d(g,{A:()=>Qe});var t=e(21272),d=e(38413),o=e(4198),a=e(83997),s=e(80403),r=e(61535),u=e(54894),A=e(74930),n=e(82437),T=e(17703),M=e(92132);const v=t.createContext({selectedAction:null,routes:[],selectedActions:[],data:{allActionsIds:[],permissions:[]},onChange:()=>{},onChangeSelectAll:()=>{},setSelectedAction:()=>{}}),c=({children:p,...f})=>(0,M.jsx)(v.Provider,{value:f,children:p}),i=()=>t.useContext(v);var E=e(17357),m=e(71526),h=e(55286),U=e(38168),L=e(54134),D=e(94061),I=e(30893),R=e(90151),S=e(68074),B=e(33544),l=e.n(B),$=e(91146),Y=e(6937),j=e(28506),Z=e(85021);const X=({errors:p,onChange:f,canEditInputs:y,isCreating:k,values:x,apiToken:W,onDispatch:O,setHasChangedPermissions:Q})=>{const{formatMessage:H}=(0,u.A)(),V=({target:{value:G}})=>{Q(!1),G==="full-access"&&O({type:"SELECT_ALL_ACTIONS"}),G==="read-only"&&O({type:"ON_CHANGE_READ_ONLY"})},w=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(D.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(a.s,{direction:"column",alignItems:"stretch",gap:4},t.createElement(I.o,{variant:"delta",as:"h2"},H({id:"global.details",defaultMessage:"Details"})),t.createElement(R.x,{gap:5},t.createElement(S.E,{key:"name",col:6,xs:12},t.createElement(j.A,{errors:p,values:x,canEditInputs:y,onChange:f})),t.createElement(S.E,{key:"description",col:6,xs:12},t.createElement(Y.A,{errors:p,values:x,canEditInputs:y,onChange:f})),t.createElement(S.E,{key:"lifespan",col:6,xs:12},t.createElement($.A,{isCreating:k,errors:p,values:x,onChange:f,token:W})),t.createElement(S.E,{key:"type",col:6,xs:12},t.createElement(Z.A,{values:x,errors:p,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:G=>{V({target:{value:G}}),f({target:{name:"type",value:G}})},options:w,canEditInputs:y})))))};X.propTypes={errors:l().shape({name:l().string,description:l().string,lifespan:l().string,type:l().string}),onChange:l().func.isRequired,canEditInputs:l().bool.isRequired,values:l().shape({name:l().string,description:l().string,lifespan:l().oneOfType([l().number,l().string]),type:l().string}).isRequired,isCreating:l().bool.isRequired,apiToken:l().shape({id:l().oneOfType([l().number,l().string]),type:l().string,lifespan:l().string,name:l().string,accessKey:l().string,permissions:l().array,description:l().string,createdAt:l().string}),onDispatch:l().func.isRequired,setHasChangedPermissions:l().func.isRequired},X.defaultProps={errors:{},apiToken:{}};const ne=X;var le=e(55356),Te=e(85963),de=e(54514);const _=({apiTokenName:p})=>{const{formatMessage:f}=(0,u.A)();return(0,s.L4)(),t.createElement(d.g,{"aria-busy":"true"},t.createElement(s.x7,{name:"API Tokens"}),t.createElement(le.Q,{primaryAction:t.createElement(Te.$,{disabled:!0,startIcon:t.createElement(de.A,null),type:"button",size:"L"},f({id:"global.save",defaultMessage:"Save"})),title:p||f({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(o.s,null,t.createElement(s.Bl,null)))};_.defaultProps={apiTokenName:null},_.propTypes={apiTokenName:l().string};const ce=_;var se=e(34542),ae=e.n(se),oe=e(61468),Pe=e.n(oe),re=e(79793);const xe=p=>{switch(p){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Oe=(0,re.Ay)(D.a)`
  margin: -1px;
  border-radius: ${({theme:p})=>p.spaces[1]} 0 0 ${({theme:p})=>p.spaces[1]};
`;function pe({route:p}){const{formatMessage:f}=(0,u.A)(),{method:y,handler:k,path:x}=p,W=x?Pe()(x.split("/")):[],[O="",Q=""]=k?k.split("."):[],H=xe(p.method);return t.createElement(a.s,{direction:"column",alignItems:"stretch",gap:2},t.createElement(I.o,{variant:"delta",as:"h3"},f({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,O),t.createElement(I.o,{variant:"delta",textColor:"primary600"},".",Q)),t.createElement(a.s,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(Oe,{background:H.background,borderColor:H.border,padding:2},t.createElement(I.o,{fontWeight:"bold",textColor:H.text},y)),t.createElement(D.a,{paddingLeft:2,paddingRight:2},ae()(W,V=>t.createElement(I.o,{key:V,textColor:V.includes(":")?"neutral600":"neutral900"},"/",V)))))}pe.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},pe.propTypes={route:l().shape({handler:l().string,method:l().string,path:l().string})};const Re=pe,Ie=()=>{const{value:{selectedAction:p,routes:f}}=i(),{formatMessage:y}=(0,u.A)(),k=p?.split(".")[0];return t.createElement(S.E,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},p?t.createElement(a.s,{direction:"column",alignItems:"stretch",gap:2},f[k]?.map(x=>x.config.auth?.scope?.includes(p)||x.handler===p?t.createElement(Re,{key:x.handler,route:x}):null)):t.createElement(a.s,{direction:"column",alignItems:"stretch",gap:2},t.createElement(I.o,{variant:"delta",as:"h3"},y({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement(I.o,{as:"p",textColor:"neutral600"},y({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var De=e(57237),Se=e(60888),Le=e(44604),ve=e(4181),Be=e(20415),ke=e(24092),Ue=e.n(ke);const Ce=(0,re.AH)`
  background: ${p=>p.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,We=(0,re.Ay)(D.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${p=>p.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${p=>p.isActive&&Ce}
  &:hover {
    ${Ce}
  }
`,be=re.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:p})=>p.colors.neutral150};
`,ue=({controllers:p,label:f,orderNumber:y,disabled:k,onExpanded:x,indexExpandendCollapsedContent:W})=>{const{value:{onChangeSelectAll:O,onChange:Q,selectedActions:H,setSelectedAction:V,selectedAction:w}}=i(),[G,ie]=(0,t.useState)(!1),{formatMessage:Ee}=(0,u.A)(),q=()=>{ie(b=>!b),x(y)};(0,t.useEffect)(()=>{W!==null&&W!==y&&G&&ie(!1)},[W,y,G]);const N=b=>b===w;return t.createElement(De.n,{expanded:G,onToggle:q,variant:y%2?"primary":"secondary"},t.createElement(Se.P,{title:Ue()(f)}),t.createElement(Le.u,null,p?.map(b=>{const ee=b.actions.every(F=>H.includes(F.actionId)),fe=b.actions.some(F=>H.includes(F.actionId));return t.createElement(D.a,{key:`${f}.${b?.controller}`},t.createElement(a.s,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(D.a,{paddingRight:4},t.createElement(I.o,{variant:"sigma",textColor:"neutral600"},b?.controller)),t.createElement(be,null),t.createElement(D.a,{paddingLeft:4},t.createElement(ve.S,{value:ee,indeterminate:!ee&&fe,onValueChange:()=>{O({target:{value:[...b.actions]}})},disabled:k},Ee({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(R.x,{gap:4,padding:4},b?.actions&&b?.actions.map(F=>t.createElement(S.E,{col:6,key:F.actionId},t.createElement(We,{isActive:N(F.actionId),padding:2,hasRadius:!0},t.createElement(ve.S,{value:H.includes(F.actionId),name:F.actionId,onValueChange:()=>{Q({target:{value:F.actionId}})},disabled:k},F.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>V({target:{value:F.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(Be.A,null)))))))})))};ue.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},ue.propTypes={controllers:l().array,orderNumber:l().number,label:l().string.isRequired,disabled:l().bool,onExpanded:l().func,indexExpandendCollapsedContent:l().number};const Ke=ue,ge=({section:p,...f})=>{const[y,k]=(0,t.useState)(null),x=W=>k(W);return t.createElement(D.a,{padding:4,background:"neutral0"},p&&p.map((W,O)=>t.createElement(Ke,{key:W.apiId,label:W.label,controllers:W.controllers,orderNumber:O,indexExpandendCollapsedContent:y,onExpanded:x,name:W.apiId,...f})))};ge.defaultProps={section:null},ge.propTypes={section:l().arrayOf(l().object)};const Ne=ge,$e=({...p})=>{const{value:{data:f}}=i(),{formatMessage:y}=(0,u.A)();return t.createElement(R.x,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(S.E,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(a.s,{direction:"column",alignItems:"stretch",gap:2},t.createElement(I.o,{variant:"delta",as:"h2"},y({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement(I.o,{as:"p",textColor:"neutral600"},y({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),f?.permissions&&t.createElement(Ne,{section:f?.permissions,...p})),t.createElement(Ie,null))},je=(0,t.memo)($e);var me=e(31713);const Fe=(p,f=[])=>({...p,selectedAction:null,routes:[],selectedActions:[],data:(0,me.z1)(f)});var ze=e(88761),He=e(92173),Me=e.n(He);const Ve={data:{},selectedActions:[]},Ge=(p,f)=>(0,ze.Ay)(p,y=>{switch(f.type){case"ON_CHANGE":{y.selectedActions.includes(f.value)?Me()(y.selectedActions,f.value):y.selectedActions.push(f.value);break}case"SELECT_ALL_IN_PERMISSION":{f.value.every(x=>y.selectedActions.includes(x.actionId))?f.value.forEach(x=>{Me()(y.selectedActions,x.actionId)}):f.value.forEach(x=>{y.selectedActions.push(x.actionId)});break}case"SELECT_ALL_ACTIONS":{y.selectedActions=[...y.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const k=y.data.allActionsIds.filter(x=>x.includes("find")||x.includes("findOne"));y.selectedActions=[...k];break}case"UPDATE_PERMISSIONS_LAYOUT":{y.data=(0,me.z1)(f.value);break}case"UPDATE_ROUTES":{y.routes={...f.value};break}case"UPDATE_PERMISSIONS":{y.selectedActions=[...f.value];break}case"SET_SELECTED_ACTION":{y.selectedAction=f.value;break}default:return y}}),Ye="Name already taken",Qe=()=>{(0,s.L4)();const{formatMessage:p}=(0,u.A)(),{lockApp:f,unlockApp:y}=(0,s.MA)(),k=(0,s.hN)(),x=(0,T.W6)(),W=(0,n.d4)(m.G),[O,Q]=(0,t.useState)(x.location.state?.apiToken.accessKey?{...x.location.state.apiToken}:null),{trackUsage:H}=(0,s.z1)(),V=(0,t.useRef)(H),{setCurrentStep:w}=(0,s.Cx)(),{allowedActions:{canCreate:G,canUpdate:ie,canRegenerate:Ee}}=(0,s.ec)(W.settings["api-tokens"]),[q,N]=(0,t.useReducer)(Ge,Ve,P=>Fe(P,{})),{params:{id:b}}=(0,T.W5)("/settings/api-tokens/:id"),{get:ee,post:fe,put:F}=(0,s.ry)(),z=b==="create";(0,A.useQuery)("content-api-permissions",async()=>{const[P,J]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async te=>{const{data:K}=await ee(te);return K.data}));N({type:"UPDATE_PERMISSIONS_LAYOUT",value:P}),N({type:"UPDATE_ROUTES",value:J}),O&&(O?.type==="read-only"&&N({type:"ON_CHANGE_READ_ONLY"}),O?.type==="full-access"&&N({type:"SELECT_ALL_ACTIONS"}),O?.type==="custom"&&N({type:"UPDATE_PERMISSIONS",value:O?.permissions}))},{onError(){k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{V.current(z?"didAddTokenFromList":"didEditTokenFromList",{tokenType:h.I})},[z]);const{status:Xe}=(0,A.useQuery)(["api-token",b],async()=>{const{data:{data:P}}=await ee(`/admin/api-tokens/${b}`);return Q({...P}),P?.type==="read-only"&&N({type:"ON_CHANGE_READ_ONLY"}),P?.type==="full-access"&&N({type:"SELECT_ALL_ACTIONS"}),P?.type==="custom"&&N({type:"UPDATE_PERMISSIONS",value:P?.permissions}),P},{enabled:!z&&!O,onError(){k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Je=async(P,J)=>{V.current(z?"willCreateToken":"willEditToken",{tokenType:h.I}),f();const te=P.lifespan&&parseInt(P.lifespan,10)&&P.lifespan!=="0"?parseInt(P.lifespan,10):null;try{const{data:{data:K}}=z?await fe("/admin/api-tokens",{...P,lifespan:te,permissions:P.type==="custom"?q.selectedActions:null}):await F(`/admin/api-tokens/${b}`,{name:P.name,description:P.description,type:P.type,permissions:P.type==="custom"?q.selectedActions:null});z&&(x.replace(`/settings/api-tokens/${K.id}`,{apiToken:K}),w("apiTokens.success")),y(),Q({...K}),k({type:"success",message:p(z?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),V.current(z?"didCreateToken":"didEditToken",{type:O.type,tokenType:h.I})}catch(K){const he=(0,E.N)(K.response.data);J.setErrors(he),K?.response?.data?.error?.message===Ye?k({type:"warning",message:K.response.data.message||"notification.error.tokennamenotunique"}):k({type:"warning",message:K?.response?.data?.message||"notification.error"}),y()}},[Ze,ye]=(0,t.useState)(!1),_e={...q,onChange:({target:{value:P}})=>{ye(!0),N({type:"ON_CHANGE",value:P})},onChangeSelectAll:({target:{value:P}})=>{ye(!0),N({type:"SELECT_ALL_IN_PERMISSION",value:P})},setSelectedAction:({target:{value:P}})=>{N({type:"SET_SELECTED_ACTION",value:P})}},Ae=ie&&!z||G&&z;return!z&&!O&&Xe!=="success"?t.createElement(ce,{apiTokenName:O?.name}):t.createElement(c,{value:_e},t.createElement(d.g,null,t.createElement(s.x7,{name:"API Tokens"}),t.createElement(r.l1,{validationSchema:me.wQ,validateOnChange:!1,initialValues:{name:O?.name||"",description:O?.description||"",type:O?.type,lifespan:O?.lifespan?O.lifespan.toString():O?.lifespan},enableReinitialize:!0,onSubmit:(P,J)=>Je(P,J)},({errors:P,handleChange:J,isSubmitting:te,values:K,setFieldValue:he})=>(Ze&&K?.type!=="custom"&&he("type","custom"),t.createElement(s.lV,null,t.createElement(U.A,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:O,setToken:Q,canEditInputs:Ae,canRegenerate:Ee,isSubmitting:te,regenerateUrl:"/admin/api-tokens/"}),t.createElement(o.s,null,t.createElement(a.s,{direction:"column",alignItems:"stretch",gap:6},Boolean(O?.name)&&t.createElement(L.A,{token:O?.accessKey,tokenType:h.I}),t.createElement(ne,{errors:P,onChange:J,canEditInputs:Ae,isCreating:z,values:K,apiToken:O,onDispatch:N,setHasChangedPermissions:ye}),t.createElement(je,{disabled:!Ae||K?.type==="read-only"||K?.type==="full-access"}))))))))}},31713:(C,g,e)=>{"use strict";e.d(g,{N1:()=>s,wQ:()=>n,z1:()=>M});var t=e(6103),d=e(83058),o=e(96123);const s=(v,c,i="en")=>{if(c&&typeof c=="number"){const E=c/24/60/60/1e3;return(0,t.A)((0,d.A)(new Date(v),E),"PPP",{locale:o[i]})}return"Unlimited"};var r=e(80403),u=e(12083);const n=u.Ik().shape({name:u.Yj(r.iW.string).max(100).required(r.iW.required),type:u.Yj(r.iW.string).oneOf(["read-only","full-access","custom"]).required(r.iW.required),description:u.Yj().nullable(),lifespan:u.ai().integer().min(0).nullable().defined(r.iW.required)}),M=v=>{const c={allActionsIds:[],permissions:[]};return c.permissions=Object.keys(v).map(i=>({apiId:i,label:i.split("::")[1],controllers:Object.keys(v[i].controllers).map(E=>({controller:E,actions:v[i].controllers[E].map(m=>{const h=`${i}.${E}.${m}`;return i.includes("api::")&&c.allActionsIds.push(h),{action:m,actionId:h}}).flat()})).flat()})),c}},97079:C=>{function g(e,t,d,o){for(var a=e.length,s=d+(o?1:-1);o?s--:++s<a;)if(t(e[s],s,e))return s;return-1}C.exports=g},80151:(C,g,e)=>{var t=e(97079),d=e(73155),o=e(77771);function a(s,r,u){return r===r?o(s,r,u):t(s,d,u)}C.exports=a},29327:C=>{function g(e,t,d,o){for(var a=d-1,s=e.length;++a<s;)if(o(e[a],t))return a;return-1}C.exports=g},73155:C=>{function g(e){return e!==e}C.exports=g},20920:(C,g,e)=>{var t=e(87864),d=e(80151),o=e(29327),a=e(52689),s=e(76299),r=Array.prototype,u=r.splice;function A(n,T,M,v){var c=v?o:d,i=-1,E=T.length,m=n;for(n===T&&(T=s(T)),M&&(m=t(n,a(M)));++i<E;)for(var h=0,U=T[i],L=M?M(U):U;(h=c(m,L,h,v))>-1;)m!==n&&u.call(m,h,1),u.call(n,h,1);return n}C.exports=A},77771:C=>{function g(e,t,d){for(var o=d-1,a=e.length;++o<a;)if(e[o]===t)return o;return-1}C.exports=g},34542:(C,g,e)=>{var t=e(87864),d=e(45353),o=e(29884),a=e(82261);function s(r,u){var A=a(r)?t:o;return A(r,d(u,3))}C.exports=s},92173:(C,g,e)=>{var t=e(39226),d=e(76610),o=t(d);C.exports=o},76610:(C,g,e)=>{var t=e(20920);function d(o,a){return o&&o.length&&a&&a.length?t(o,a):o}C.exports=d},61468:(C,g,e)=>{var t=e(52196);function d(o){var a=o==null?0:o.length;return a?t(o,1,a):[]}C.exports=d},57237:(C,g,e)=>{"use strict";e.d(g,{I:()=>T,n:()=>v});var t=e(92132),d=e(21272),o=e(79793),a=e(97366),s=e(84175),r=e(30893),u=e(83997),A=e(94061);const n=({theme:c,expanded:i,variant:E,disabled:m,error:h})=>h?`1px solid ${c.colors.danger600} !important`:m?`1px solid ${c.colors.neutral150}`:i?`1px solid ${c.colors.primary600}`:E==="primary"?`1px solid ${c.colors.neutral0}`:`1px solid ${c.colors.neutral100}`,T=(0,o.Ay)(r.o)``,M=(0,o.Ay)(A.a)`
  border: ${n};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    ${T} {
      color: ${({theme:c,expanded:i})=>i?void 0:c.colors.primary700};
    }

    ${r.o} {
      color: ${({theme:c,expanded:i})=>i?void 0:c.colors.primary600};
    }

    & > ${u.s} {
      background: ${({theme:c})=>c.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:c})=>c.colors.primary200};
    }
  }
`,v=({children:c,disabled:i=!1,error:E,expanded:m=!1,hasErrorMessage:h=!0,id:U,onToggle:L,toggle:D,size:I="M",variant:R="primary",shadow:S})=>{const B=(0,s.B)(U),l=d.useMemo(()=>({expanded:m,onToggle:L,toggle:D,id:B,size:I,variant:R,disabled:i}),[i,m,B,L,I,D,R]);return(0,t.jsxs)(a.C.Provider,{value:l,children:[(0,t.jsx)(M,{"data-strapi-expanded":m,disabled:i,"aria-disabled":i,expanded:m,hasRadius:!0,variant:R,error:E,shadow:S,children:c}),E&&h&&(0,t.jsx)(A.a,{paddingTop:1,children:(0,t.jsx)(r.o,{variant:"pi",textColor:"danger600",children:E})})]})}},44604:(C,g,e)=>{"use strict";e.d(g,{u:()=>a});var t=e(92132),d=e(97366),o=e(94061);const a=({children:s,...r})=>{const{expanded:u,id:A}=(0,d.O)();if(!u)return null;const n=`accordion-content-${A}`,T=`accordion-label-${A}`,M=`accordion-desc-${A}`;return(0,t.jsx)(o.a,{role:"region",id:n,"aria-labelledby":T,"aria-describedby":M,...r,children:s})}},97366:(C,g,e)=>{"use strict";e.d(g,{C:()=>d,O:()=>o});var t=e(21272);const d=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),o=()=>(0,t.useContext)(d)},60888:(C,g,e)=>{"use strict";e.d(g,{P:()=>c});var t=e(92132),d=e(9005),o=e(79793),a=e(57237),s=e(97366);const r=({expanded:i,disabled:E,variant:m})=>{let h="neutral100";return i?h="primary100":E?h="neutral150":m==="primary"&&(h="neutral0"),h};var u=e(18629),A=e(58805),n=e(83997),T=e(30893);const M=(0,o.Ay)(u.Q)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:i,expanded:E})=>E?i.colors.primary600:i.colors.neutral500};
    }
  }
`,v=(0,o.Ay)(n.s)`
  min-height: ${({theme:i,size:E})=>i.sizes.accordions[E]};
  border-radius: ${({theme:i,expanded:E})=>E?`${i.borderRadius} ${i.borderRadius} 0 0`:i.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:i})=>i.colors.primary600};
      }
    }
  }
`,c=({title:i,description:E,as:m="span",togglePosition:h="right",action:U,...L})=>{const{onToggle:D,toggle:I,expanded:R,id:S,size:B,variant:l,disabled:$}=(0,s.O)(),Y=`accordion-content-${S}`,j=`accordion-label-${S}`,Z=`accordion-desc-${S}`,X=B==="M"?6:4,ne=B==="M"?X:X-2,le=r({expanded:R,disabled:$,variant:l}),de={as:m,fontWeight:B==="S"?"bold":void 0,id:j,textColor:R?"primary600":"neutral700",ellipsis:!0,variant:B==="M"?"delta":void 0},_=R?"primary600":"neutral600",ce=R?"primary200":"neutral200",se=B==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{$||(I&&!D?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),I()):D&&D())},oe=(0,t.jsx)(n.s,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:R?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:$?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(A.I,{as:d.A,width:B==="M"?`${11/16}rem`:`${8/16}rem`,color:R?"primary600":"neutral600"})});return(0,t.jsx)(v,{paddingBottom:ne,paddingLeft:X,paddingRight:X,paddingTop:ne,background:le,expanded:R,size:B,justifyContent:"space-between",cursor:$?"not-allowed":"",children:(0,t.jsxs)(n.s,{gap:3,flex:1,maxWidth:"100%",children:[h==="left"&&oe,(0,t.jsx)(M,{onClick:ae,"aria-disabled":$,"aria-expanded":R,"aria-controls":Y,"aria-labelledby":j,"data-strapi-accordion-toggle":!0,expanded:R,type:"button",flex:1,minWidth:0,...L,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.I,{...de,children:i}),E&&(0,t.jsx)(T.o,{as:"p",id:Z,textColor:_,children:E})]})}),h==="right"&&(0,t.jsxs)(n.s,{gap:3,children:[oe,U]}),h==="left"&&U]})})}}}]);