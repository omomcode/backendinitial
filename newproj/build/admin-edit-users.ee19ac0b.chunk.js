"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[9298],{13252:(B,d,e)=>{e.d(d,{F:()=>r});var t=e(21272),a=e(80403),o=e(74930);function r(f={},c={}){const{id:n="",...g}=f,{get:E}=(0,a.ry)(),{data:s,isError:l,isLoading:M,refetch:A}=(0,o.useQuery)(["users",n,g],async()=>{const{data:{data:m}}=await E(`/admin/users/${n}`,{params:g});return m},c);return{users:t.useMemo(()=>{let m=[];return s&&("results"in s?Array.isArray(s.results)&&(m=s.results):m=[s]),m},[s]),pagination:t.useMemo(()=>(s&&"pagination"in s)??null,[s]),isLoading:M,isError:l,refetch:A}}},86209:(B,d,e)=>{e.r(d),e.d(d,{default:()=>le});var t=e(21272),a=e(80403),o=e(82437),r=e(17703),f=e(71526),c=e(38413),n=e(55356),g=e(85963),E=e(4198),s=e(94061),l=e(83997),M=e(30893),A=e(90151),O=e(68074),m=e(54514),W=e(46270),R=e(61535),C=e(2600),S=e.n(C),Y=e(35223),F=e.n(Y),$=e(79275),y=e.n($),G=e(33544),Q=e.n(G),H=e(54894),V=e(13252),X=e(88022),v=e(17357),b=e(40609),te=e(94844),ae=e(85842),se=e(84241);const ne=async(L,u)=>{const{put:T}=(0,a.GD)(),{data:U}=await T(`/admin/users/${L}`,u);return U.data},oe=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],w=["email","firstname","lastname","username","isActive","roles"],k=({canUpdate:L})=>{const{formatMessage:u}=(0,H.A)(),{params:{id:T}}=(0,r.W5)("/settings/users/:id"),{push:U}=(0,r.W6)(),{setUserDisplayName:K}=(0,a.Xe)(),h=(0,a.hN)(),{lockApp:Z,unlockApp:J}=(0,a.MA)(),_=(0,X.h)(te.g,async()=>(await e.e(9034).then(e.bind(e,69034))).MagicLinkEE);(0,a.L4)();const{users:[x],isLoading:ie}=(0,V.F)({id:T},{cacheTime:0,onError(i){const{status:p}=i.response;p===403?(h({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),U("/")):h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),de=async(i,p)=>{Z();try{const P=await ne(T,F()(i,"confirmPassword"));h({type:"success",message:u({id:"notification.success.saved",defaultMessage:"Saved"})});const I=a.j2.getUserInfo();if(T.toString()===I.id.toString()){a.j2.setUserInfo(P);const j=S()(i,"username")||(0,b.d)(i.firstname,i.lastname);K(j)}p.setValues(y()(i,w))}catch(P){const I=(0,v.N)(P.response.data),j=Object.keys(I).reduce((N,D)=>(N[D]=I[D].id,N),{});p.setErrors(j),h({type:"warning",message:S()(P,"response.data.error.message","notification.error")})}J()},q=ie||!_,ce=q?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},z=Object.keys(y()(x,w)).reduce((i,p)=>p==="roles"?(i[p]=(x?.roles||[]).map(({id:P})=>P),i):(i[p]=x?.[p],i),{}),me=z.username||(0,b.d)(z.firstname,z.lastname),ee=u(ce,{name:me});return q?t.createElement(c.g,{"aria-busy":"true"},t.createElement(a.x7,{name:"Users"}),t.createElement(n.Q,{primaryAction:t.createElement(g.$,{disabled:!0,startIcon:t.createElement(m.A,null),type:"button",size:"L"},u({id:"global.save",defaultMessage:"Save"})),title:ee,navigationAction:t.createElement(a.N_,{startIcon:t.createElement(W.A,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},u({id:"global.back",defaultMessage:"Back"}))}),t.createElement(E.s,null,t.createElement(a.Bl,null))):t.createElement(c.g,null,t.createElement(a.x7,{name:"Users"}),t.createElement(R.l1,{onSubmit:de,initialValues:z,validateOnChange:!1,validationSchema:se.Gd},({errors:i,values:p,handleChange:P,isSubmitting:I,dirty:j})=>t.createElement(a.lV,null,t.createElement(n.Q,{primaryAction:t.createElement(g.$,{disabled:I||!L?!0:!j,startIcon:t.createElement(m.A,null),loading:I,type:"submit",size:"L"},u({id:"global.save",defaultMessage:"Save"})),title:ee,navigationAction:t.createElement(a.N_,{startIcon:t.createElement(W.A,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},u({id:"global.back",defaultMessage:"Back"}))}),t.createElement(E.s,null,x?.registrationToken&&t.createElement(s.a,{paddingBottom:6},t.createElement(_,{registrationToken:x.registrationToken})),t.createElement(l.s,{direction:"column",alignItems:"stretch",gap:7},t.createElement(s.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(l.s,{direction:"column",alignItems:"stretch",gap:4},t.createElement(M.o,{variant:"delta",as:"h2"},u({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(A.x,{gap:5},oe.map(N=>N.map(D=>t.createElement(O.E,{key:D.name,...D.size},t.createElement(a.ah,{...D,disabled:!L,error:i[D.name],onChange:P,value:p[D.name]||""}))))))),t.createElement(s.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(l.s,{direction:"column",alignItems:"stretch",gap:4},t.createElement(M.o,{variant:"delta",as:"h2"},u({id:"global.roles",defaultMessage:"User's role"})),t.createElement(A.x,{gap:5},t.createElement(O.E,{col:6,xs:12},t.createElement(ae.A,{disabled:!L,error:i.roles,onChange:P,value:p.roles}))))))))))};k.propTypes={canUpdate:Q().bool.isRequired};const re=k,le=()=>{const L=(0,a.hN)(),u=(0,o.d4)(f.G),T=t.useMemo(()=>({read:u.settings.users.read,update:u.settings.users.update}),[u.settings.users]),{isLoading:U,allowedActions:{canRead:K,canUpdate:h}}=(0,a.ec)(T),{state:Z}=(0,r.zy)(),J=Z?.from??"/";return(0,t.useEffect)(()=>{U||!K&&!h&&L({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[U,K,h,L]),U?t.createElement(a.Bl,null):!K&&!h?t.createElement(r.rd,{to:J}):t.createElement(re,{canUpdate:h})}},16888:(B,d,e)=>{e.d(d,{A:()=>E});var t=e(21272),a=e(88353),o=e(80403),r=e(90625),f=e(33544),c=e.n(f),n=e(54894);const g=({children:s,target:l})=>{const M=(0,o.hN)(),{formatMessage:A}=(0,n.A)(),{copy:O}=(0,o.iD)(),m=A({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),W=async()=>{await O(l)&&M({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(o.bQ,{endAction:t.createElement(a.K,{label:m,noBorder:!0,icon:t.createElement(r.A,null),onClick:W}),title:l,titleEllipsis:!0,subtitle:s,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};g.propTypes={children:c().oneOfType([c().element,c().string]).isRequired,target:c().string.isRequired};const E=g},94844:(B,d,e)=>{e.d(d,{g:()=>n});var t=e(21272),a=e(33544),o=e.n(a),r=e(54894),f=e(35656),c=e(16888);const n=({registrationToken:g})=>{const{formatMessage:E}=(0,r.A)(),s=`${window.location.origin}${f.A}auth/register?registrationToken=${g}`;return t.createElement(c.A,{target:s},E({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:o().string}},85842:(B,d,e)=>{e.d(d,{A:()=>W});var t=e(21272),a=e(43739),o=e(95336),r=e(80403),f=e(84795),c=e(33544),n=e.n(c),g=e(54894),E=e(74930),s=e(79793);const l=(0,s.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,M=s.Ay.div`
  animation: ${l} 2s infinite linear;
`,A=()=>t.createElement(M,null,t.createElement(f.A,null)),O=async()=>{const{get:R}=(0,r.GD)(),{data:C}=await R("/admin/roles");return C.data},m=({disabled:R,error:C,onChange:S,value:Y})=>{const{status:F,data:$}=(0,E.useQuery)(["roles"],O,{staleTime:5e4}),{formatMessage:y}=(0,g.A)(),G=C?y({id:C,defaultMessage:C}):"",Q=y({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),H=y({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),V=y({id:"app.components.Select.placeholder",defaultMessage:"Select"}),X=F==="loading"?t.createElement(A,null):void 0;return t.createElement(a.l,{id:"roles",disabled:R,error:G,hint:H,label:Q,name:"roles",onChange:v=>{S({target:{name:"roles",value:v}})},placeholder:V,multi:!0,startIcon:X,value:Y.map(v=>v.toString()),withTags:!0,required:!0},($||[]).map(v=>t.createElement(o.c,{key:v.id,value:v.id.toString()},y({id:`global.${v.code}`,defaultMessage:v.name}))))};m.defaultProps={disabled:!1,error:void 0},m.propTypes={disabled:n().bool,error:n().string,onChange:n().func.isRequired,value:n().array.isRequired};const W=m},84241:(B,d,e)=>{e.d(d,{Gd:()=>E,pK:()=>f});var t=e(12083),a=e(80403);const o={firstname:t.Yj().trim().required(a.iW.required),lastname:t.Yj(),email:t.Yj().email(a.iW.email).lowercase().required(a.iW.required),username:t.Yj().nullable(),password:t.Yj().min(8,a.iW.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Yj().min(8,a.iW.minLength).oneOf([t.KR("password"),null],"components.Input.error.password.noMatch").when("password",(s,l)=>s?l.required(a.iW.required):l)},f={...o,currentPassword:t.Yj().when(["password","confirmPassword"],(s,l,M)=>s||l?M.required(a.iW.required):M),preferedLanguage:t.Yj().nullable()},n={roles:t.YO().min(1,a.iW.required).required(a.iW.required)},E=t.Ik().shape({...o,isActive:t.lc(),...n})},46270:(B,d,e)=>{e.d(d,{A:()=>o});var t=e(92132);const a=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),o=a}}]);
