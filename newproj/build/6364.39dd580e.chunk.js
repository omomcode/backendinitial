"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[6364],{38168:(W,M,e)=>{e.d(M,{A:()=>P});var t=e(21272),T=e(55356),c=e(83997),i=e(85963),s=e(80403),a=e(54514),d=e(46270),g=e(33544),n=e.n(g),f=e(54894),E=e(70603),o=e(60256);const l=(D,v,F,r)=>{const[U,C]=(0,t.useState)(!1),I=(0,s.hN)(),{post:S}=(0,s.ry)(),{formatAPIError:L}=(0,s.wq)();return{regenerateData:async()=>{try{const{data:{data:{accessKey:O}}}=await S(`${D}${v}/regenerate`);C(!1),F(O)}catch(O){C(!1),r?r(O):O instanceof o.pe&&I({type:"warning",message:L(O)})}},isLoadingConfirmation:U}},u=({onRegenerate:D,idToRegenerate:v,backUrl:F,onError:r})=>{const{formatMessage:U}=(0,f.A)(),[C,I]=(0,t.useState)(!1),{regenerateData:S,isLoadingConfirmation:L}=l(F,v,D,r),N=async()=>{S(),I(!1)};return t.createElement(t.Fragment,null,t.createElement(i.$,{startIcon:t.createElement(E.A,null),type:"button",size:"S",variant:"tertiary",onClick:()=>I(!0),name:"regenerate"},U({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(s.TM,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(E.A,null),isConfirmButtonLoading:L,isOpen:C,onToggleDialog:()=>I(!1),onConfirm:N,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};u.defaultProps={onRegenerate(){},onError:void 0},u.propTypes={onRegenerate:n().func,idToRegenerate:n().oneOfType([n().number,n().string]).isRequired,backUrl:n().string.isRequired,onError:n().func};const y=u,p=({title:D,token:v,setToken:F,canEditInputs:r,canRegenerate:U,isSubmitting:C,backUrl:I,regenerateUrl:S,onErrorRegenerate:L})=>{const{formatMessage:N}=(0,f.A)(),O=X=>{F({...v,accessKey:X})};return t.createElement(T.Q,{title:v?.name||N(D),primaryAction:r?t.createElement(c.s,{gap:2},U&&v?.id&&t.createElement(y,{backUrl:S,onRegenerate:O,idToRegenerate:v?.id,onError:L}),t.createElement(i.$,{disabled:C,loading:C,startIcon:t.createElement(a.A,null),type:"submit",size:"S"},N({id:"global.save",defaultMessage:"Save"}))):U&&v?.id&&t.createElement(y,{onRegenerate:O,idToRegenerate:v?.id,backUrl:S}),navigationAction:t.createElement(s.N_,{startIcon:t.createElement(d.A,null),to:I},N({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};p.propTypes={token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().oneOfType([n().number,n().string]),name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),canEditInputs:n().bool.isRequired,canRegenerate:n().bool.isRequired,setToken:n().func.isRequired,isSubmitting:n().bool.isRequired,backUrl:n().string.isRequired,title:n().shape({id:n().string,label:n().string}).isRequired,regenerateUrl:n().string.isRequired,onErrorRegenerate:n().func},p.defaultProps={token:void 0,onErrorRegenerate:void 0};const P=p},91146:(W,M,e)=>{e.d(M,{A:()=>f});var t=e(21272),T=e(43739),c=e(95336),i=e(30893),s=e(33544),a=e.n(s),d=e(54894),g=e(31713);const n=({token:E,errors:o,values:l,onChange:u,isCreating:y})=>{const{formatMessage:p}=(0,d.A)();return t.createElement(t.Fragment,null,t.createElement(T.l,{name:"lifespan",label:p({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:l.lifespan!==null?l.lifespan:"0",error:o.lifespan?p(o.lifespan?.id?o.lifespan:{id:o.lifespan,defaultMessage:o.lifespan}):null,onChange:P=>{u({target:{name:"lifespan",value:P}})},required:!0,disabled:!y,placeholder:"Select"},t.createElement(c.c,{value:"604800000"},p({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(c.c,{value:"2592000000"},p({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(c.c,{value:"7776000000"},p({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(c.c,{value:"0"},p({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(i.o,{variant:"pi",textColor:"neutral600"},!y&&`${p({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,g.N1)(E?.createdAt,parseInt(l.lifespan,10))}`))};n.propTypes={errors:a().shape({lifespan:a().string}),onChange:a().func.isRequired,values:a().shape({lifespan:a().oneOfType([a().number,a().string])}).isRequired,isCreating:a().bool.isRequired,token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().string,name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string})},n.defaultProps={errors:{},token:{}};const f=n},54134:(W,M,e)=>{e.d(M,{A:()=>f});var t=e(21272),T=e(88353),c=e(80403),i=e(90625),s=e(2919),a=e(33544),d=e.n(a),g=e(54894);const n=({token:E,tokenType:o})=>{const{formatMessage:l}=(0,g.A)(),u=(0,c.hN)(),{trackUsage:y}=(0,c.z1)(),{copy:p}=(0,c.iD)(),P=D=>async()=>{await p(D)&&(y("didCopyTokenKey",{tokenType:o}),u({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(c.bQ,{endAction:E&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(T.K,{label:l({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:P(E),noBorder:!0,icon:t.createElement(i.A,null),style:{padding:0,height:"1rem"}})),title:E||l({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:l(E?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(s.A,null),iconBackground:"neutral100"})};n.defaultProps={token:null},n.propTypes={token:d().string,tokenType:d().string.isRequired};const f=n},6937:(W,M,e)=>{e.d(M,{A:()=>d});var t=e(21272),T=e(5287),c=e(33544),i=e.n(c),s=e(54894);const a=({errors:g,values:n,onChange:f,canEditInputs:E})=>{const{formatMessage:o}=(0,s.A)();return t.createElement(T.T,{label:o({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:g.description?o(g.description?.id?g.description:{id:g.description,defaultMessage:g.description}):null,onChange:f,disabled:!E},n.description)};a.propTypes={errors:i().shape({description:i().string}),onChange:i().func.isRequired,canEditInputs:i().bool.isRequired,values:i().shape({description:i().string}).isRequired},a.defaultProps={errors:{}};const d=a},28506:(W,M,e)=>{e.d(M,{A:()=>d});var t=e(21272),T=e(7537),c=e(33544),i=e.n(c),s=e(54894);const a=({errors:g,values:n,onChange:f,canEditInputs:E})=>{const{formatMessage:o}=(0,s.A)();return t.createElement(T.k,{name:"name",error:g.name?o(g.name?.id?g.name:{id:g.name,defaultMessage:g.name}):null,label:o({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:f,value:n.name,disabled:!E,required:!0})};a.propTypes={errors:i().shape({name:i().string}),onChange:i().func.isRequired,canEditInputs:i().bool.isRequired,values:i().shape({name:i().string}).isRequired},a.defaultProps={errors:{}};const d=a},85021:(W,M,e)=>{e.d(M,{A:()=>g});var t=e(21272),T=e(43739),c=e(95336),i=e(33544),s=e.n(i),a=e(54894);const d=({name:n,errors:f,values:E,onChange:o,canEditInputs:l,options:u,label:y})=>{const{formatMessage:p}=(0,a.A)();return t.createElement(T.l,{name:n,label:p({id:y.id,defaultMessage:y.defaultMessage}),value:E&&E[n],error:f[n]?p(f[n]?.id?f[n]:{id:f[n],defaultMessage:f[n]}):null,onChange:o,placeholder:"Select",required:!0,disabled:!l},u&&u.map(({value:P,label:D})=>t.createElement(c.c,{key:P,value:P},p(D))))};d.propTypes={name:s().string,options:s().arrayOf(s().shape({label:s().shape({id:s().string,defaultMessage:s().string}),value:s().string})),errors:s().shape({type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({type:s().string}).isRequired,label:s().shape({id:s().string,defaultMessage:s().string}).isRequired},d.defaultProps={name:"type",errors:{},options:[]};const g=d},55286:(W,M,e)=>{e.d(M,{I:()=>t,j:()=>T});const t="api-token",T="transfer-token"},31713:(W,M,e)=>{e.d(M,{N1:()=>s,wQ:()=>n,z1:()=>E});var t=e(6103),T=e(83058),c=e(96123);const s=(o,l,u="en")=>{if(l&&typeof l=="number"){const y=l/24/60/60/1e3;return(0,t.A)((0,T.A)(new Date(o),y),"PPP",{locale:c[u]})}return"Unlimited"};var a=e(80403),d=e(12083);const n=d.Ik().shape({name:d.Yj(a.iW.string).max(100).required(a.iW.required),type:d.Yj(a.iW.string).oneOf(["read-only","full-access","custom"]).required(a.iW.required),description:d.Yj().nullable(),lifespan:d.ai().integer().min(0).nullable().defined(a.iW.required)}),E=o=>{const l={allActionsIds:[],permissions:[]};return l.permissions=Object.keys(o).map(u=>({apiId:u,label:u.split("::")[1],controllers:Object.keys(o[u].controllers).map(y=>({controller:y,actions:o[u].controllers[y].map(p=>{const P=`${u}.${y}.${p}`;return u.includes("api::")&&l.allActionsIds.push(P),{action:p,actionId:P}}).flat()})).flat()})),l}},56364:(W,M,e)=>{e.d(M,{A:()=>ne});var t=e(21272),T=e(38413),c=e(4198),i=e(83997),s=e(80403),a=e(61535),d=e(54894),g=e(74930),n=e(82437),f=e(17703),E=e(17357),o=e(71526),l=e(55286),u=e(38168),y=e(54134),p=e(94061),P=e(30893),D=e(90151),v=e(68074),F=e(33544),r=e.n(F),U=e(91146),C=e(6937),I=e(28506),S=e(85021);const L=({errors:k,onChange:B,canEditInputs:j,isCreating:h,values:x,transferToken:A})=>{const{formatMessage:V}=(0,d.A)(),J=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return t.createElement(p.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(i.s,{direction:"column",alignItems:"stretch",gap:4},t.createElement(P.o,{variant:"delta",as:"h2"},V({id:"global.details",defaultMessage:"Details"})),t.createElement(D.x,{gap:5},t.createElement(v.E,{key:"name",col:6,xs:12},t.createElement(I.A,{errors:k,values:x,canEditInputs:j,onChange:B})),t.createElement(v.E,{key:"description",col:6,xs:12},t.createElement(C.A,{errors:k,values:x,canEditInputs:j,onChange:B})),t.createElement(v.E,{key:"lifespan",col:6,xs:12},t.createElement(U.A,{isCreating:h,errors:k,values:x,onChange:B,token:A})),t.createElement(v.E,{key:"permissions",col:6,xs:12},t.createElement(S.A,{name:"permissions",values:x,errors:k,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:Y=>{B({target:{name:"permissions",value:Y}})},options:J,canEditInputs:j})))))};L.propTypes={errors:r().shape({name:r().string,description:r().string,lifespan:r().string,type:r().string}),onChange:r().func.isRequired,canEditInputs:r().bool.isRequired,values:r().shape({name:r().string,description:r().string,lifespan:r().oneOfType([r().number,r().string]),type:r().string}).isRequired,isCreating:r().bool.isRequired,transferToken:r().shape({id:r().oneOfType([r().number,r().string]),type:r().string,lifespan:r().string,name:r().string,accessKey:r().string,permissions:r().array,description:r().string,createdAt:r().string})},L.defaultProps={errors:{},transferToken:{}};const N=L;var O=e(55356),X=e(85963),w=e(54514);const G=({transferTokenName:k})=>{const{formatMessage:B}=(0,d.A)();return(0,s.L4)(),t.createElement(T.g,{"aria-busy":"true"},t.createElement(s.x7,{name:"Transfer Tokens"}),t.createElement(O.Q,{primaryAction:t.createElement(X.$,{disabled:!0,startIcon:t.createElement(w.A,null),type:"button",size:"L"},B({id:"global.save",defaultMessage:"Save"})),title:k||B({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),t.createElement(c.s,null,t.createElement(s.Bl,null)))};G.defaultProps={transferTokenName:null},G.propTypes={transferTokenName:r().string};const q=G;var $=e(12083);const ee=$.Ik().shape({name:$.Yj(s.iW.string).max(100).required(s.iW.required),description:$.Yj().nullable(),lifespan:$.ai().integer().min(0).nullable().defined(s.iW.required),permissions:$.Yj(s.iW.string).required(s.iW.required)}),te="Name already taken",ne=()=>{(0,s.L4)();const{formatMessage:k}=(0,d.A)(),{lockApp:B,unlockApp:j}=(0,s.MA)(),h=(0,s.hN)(),x=(0,f.W6)(),[A,V]=(0,t.useState)(x.location.state?.transferToken.accessKey?{...x.location.state.transferToken}:null),{trackUsage:J}=(0,s.z1)(),Y=(0,t.useRef)(J),{setCurrentStep:se}=(0,s.Cx)(),ae=(0,n.d4)(o.G),{allowedActions:{canCreate:re,canUpdate:ie,canRegenerate:oe}}=(0,s.ec)(ae.settings["transfer-tokens"]),{params:{id:H}}=(0,f.W5)("/settings/transfer-tokens/:id"),{get:le,post:de,put:ce}=(0,s.ry)(),R=H==="create",{formatAPIError:b}=(0,s.wq)();(0,t.useEffect)(()=>{Y.current(R?"didAddTokenFromList":"didEditTokenFromList",{tokenType:l.j})},[R]);const{status:ge}=(0,g.useQuery)(["transfer-token",H],async()=>{const{data:{data:m}}=await le(`/admin/transfer/tokens/${H}`);return V({...m}),m},{enabled:!R&&!A,onError(m){m.response.data.error.details?.code==="INVALID_TOKEN_SALT"?h({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):h({type:"warning",message:b(m)})}}),pe=async(m,z)=>{Y.current(R?"willCreateToken":"willEditToken",{tokenType:l.j}),B();const Z=m.lifespan&&parseInt(m.lifespan,10)&&m.lifespan!=="0"?parseInt(m.lifespan,10):null,Q=m.permissions.split("-");try{const{data:{data:K}}=R?await de("/admin/transfer/tokens",{...m,lifespan:Z,permissions:Q}):await ce(`/admin/transfer/tokens/${H}`,{name:m.name,description:m.description,permissions:Q});j(),R&&(x.replace(`/settings/transfer-tokens/${K.id}`,{transferToken:K}),se("transferTokens.success")),V({...K}),h({type:"success",message:k(R?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),Y.current(R?"didCreateToken":"didEditToken",{type:A?.permissions,tokenType:l.j})}catch(K){const me=(0,E.N)(K.response.data);z.setErrors(me),K?.response?.data?.error?.message===te?h({type:"warning",message:K.response.data.message||"notification.error.tokennamenotunique"}):K?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?h({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):h({type:"warning",message:K?.response?.data?.message||"notification.error"}),j()}},_=ie&&!R||re&&R;if(!R&&!A&&ge!=="success")return t.createElement(q,{transferTokenName:A?.name});const ue=m=>{m?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?h({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):h({type:"warning",message:b(m)})};return t.createElement(T.g,null,t.createElement(s.x7,{name:"Transfer Tokens"}),t.createElement(a.l1,{validationSchema:ee,validateOnChange:!1,initialValues:{name:A?.name||"",description:A?.description||"",lifespan:A?.lifespan?A.lifespan.toString():A?.lifespan,permissions:A?.permissions.join("-")},enableReinitialize:!0,onSubmit:(m,z)=>pe(m,z)},({errors:m,handleChange:z,isSubmitting:Z,values:Q})=>t.createElement(s.lV,null,t.createElement(u.A,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:A,setToken:V,canEditInputs:_,canRegenerate:oe,isSubmitting:Z,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:ue}),t.createElement(c.s,null,t.createElement(i.s,{direction:"column",alignItems:"stretch",gap:6},Boolean(A?.name)&&t.createElement(y.A,{token:A?.accessKey,tokenType:l.j}),t.createElement(N,{errors:m,onChange:z,canEditInputs:_,isCreating:R,values:Q,transferToken:A}))))))}}}]);
