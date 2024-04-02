"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[8754],{1382:(L,m,t)=>{t.r(m),t.d(m,{default:()=>U});var e=t(21272),i=t(11273),v=t(38413),f=t(55356),x=t(4198),T=t(85963),o=t(94061),h=t(83997),p=t(30893),S=t(90151),M=t(68074),E=t(43739),a=t(95336),n=t(80403),l=t(54514),r=t(61535),d=t(54894),c=t(74930),j=t(69224),s=t(46215);const R=[{intlLabel:{id:(0,s.gT)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,s.gT)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.gT)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,s.gT)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.gT)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,s.gT)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,s.gT)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,s.gT)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,s.gT)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.gT)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,s.gT)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,s.gT)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var b=t(12083);const C=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),W=b.Ik().shape({email_confirmation_redirection:b.gl().when("email_confirmation",{is:!0,then:b.Yj().matches(C).required(),otherwise:b.Yj().nullable()}),email_reset_password:b.Yj(n.iW.string).matches(C,n.iW.regex).nullable()}),H=()=>e.createElement(n.kz,{permissions:j.J.readAdvancedSettings},e.createElement(N,null)),N=()=>{const{formatMessage:y}=(0,d.A)(),A=(0,n.hN)(),{lockApp:Q,unlockApp:P}=(0,n.MA)(),{notifyStatus:$}=(0,i.W)(),K=(0,c.useQueryClient)(),{get:V,put:G}=(0,n.ry)(),{formatAPIError:Y}=(0,n.wq)();(0,n.L4)();const{isLoading:J,allowedActions:{canUpdate:z}}=(0,n.ec)({update:j.J.updateAdvancedSettings}),{isLoading:X,data:I}=(0,c.useQuery)(["users-permissions","advanced"],async()=>{const{data:g}=await V("/users-permissions/advanced");return g},{onSuccess(){$(y({id:(0,s.gT)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){A({type:"warning",message:{id:(0,s.gT)("notification.error"),defaultMessage:"An error occured"}})}}),Z=J||X,D=(0,c.useMutation)(g=>G("/users-permissions/advanced",g),{async onSuccess(){await K.invalidateQueries(["users-permissions","advanced"]),A({type:"success",message:{id:(0,s.gT)("notification.success.saved"),defaultMessage:"Saved"}}),P()},onError(g){A({type:"warning",message:Y(g)}),P()},refetchActive:!0}),{isLoading:k}=D,q=async g=>{Q(),D.mutate({...g,email_confirmation_redirection:g.email_confirmation?g.email_confirmation_redirection:""})};return Z?e.createElement(v.g,{"aria-busy":"true"},e.createElement(n.x7,{name:y({id:(0,s.gT)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(f.Q,{title:y({id:(0,s.gT)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(x.s,null,e.createElement(n.Bl,null))):e.createElement(v.g,{"aria-busy":k},e.createElement(n.x7,{name:y({id:(0,s.gT)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(r.l1,{onSubmit:q,initialValues:I.settings,validateOnChange:!1,validationSchema:W,enableReinitialize:!0},({errors:g,values:F,handleChange:w,isSubmitting:_,dirty:ee})=>e.createElement(n.lV,null,e.createElement(f.Q,{title:y({id:(0,s.gT)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(T.$,{loading:_,type:"submit",disabled:z?!ee:!z,startIcon:e.createElement(l.A,null),size:"S"},y({id:"global.save",defaultMessage:"Save"}))}),e.createElement(x.s,null,e.createElement(o.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(h.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(p.o,{variant:"delta",as:"h2"},y({id:"global.settings",defaultMessage:"Settings"})),e.createElement(S.x,{gap:6},e.createElement(M.E,{col:6,s:12},e.createElement(E.l,{label:y({id:(0,s.gT)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:F.default_role,hint:y({id:(0,s.gT)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:u=>w({target:{name:"default_role",value:u}})},I.roles.map(u=>e.createElement(a.c,{key:u.type,value:u.type},u.name)))),R.map(u=>{let O=F[u.name];return O||(O=u.type==="bool"?!1:""),e.createElement(M.E,{key:u.name,...u.size},e.createElement(n.ah,{...u,value:O,error:g[u.name],disabled:u.name==="email_confirmation_redirection"&&F.email_confirmation===!1,onChange:w}))}))))))))},U=H},46215:(L,m,t)=>{t.d(m,{mr:()=>f,gT:()=>x.A});var e=t(77965),i=t.n(e);const f=T=>Object.keys(T).reduce((o,h)=>{const p=T[h].controllers,S=Object.keys(p).reduce((M,E)=>(i()(p[E])||(M[E]=p[E]),M),{});return i()(S)||(o[h]={controllers:S}),o},{});var x=t(34075)},4198:(L,m,t)=>{t.d(m,{s:()=>v});var e=t(92132),i=t(94061);const v=({children:f})=>(0,e.jsx)(i.a,{paddingLeft:10,paddingRight:10,children:f})},55356:(L,m,t)=>{t.d(m,{$:()=>E,Q:()=>S});var e=t(92132),i=t(21272),v=t(79793);const f=a=>{const n=(0,i.useRef)(null),[l,r]=(0,i.useState)(!0),d=([c])=>{r(c.isIntersecting)};return(0,i.useEffect)(()=>{const c=n.current,j=new IntersectionObserver(d,a);return c&&j.observe(n.current),()=>{c&&j.disconnect()}},[n,a]),[n,l]};var x=t(23169);const T=(a,n)=>{const l=(0,x.c)(n);(0,i.useLayoutEffect)(()=>{const r=new ResizeObserver(l);return Array.isArray(a)?a.forEach(d=>{d.current&&r.observe(d.current)}):a.current&&r.observe(a.current),()=>{r.disconnect()}},[a,l])};var o=t(94061),h=t(83997),p=t(30893);const S=a=>{const n=(0,i.useRef)(null),[l,r]=(0,i.useState)(null),[d,c]=f({root:null,rootMargin:"0px",threshold:0});return T(d,()=>{d.current&&r(d.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{n.current&&r(n.current.getBoundingClientRect())},[n]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:l?.height},ref:d,children:c&&(0,e.jsx)(E,{ref:n,...a})}),!c&&(0,e.jsx)(E,{...a,sticky:!0,width:l?.width})]})};S.displayName="HeaderLayout";const M=(0,v.Ay)(o.a)`
  width: ${({width:a})=>a?`${a/16}rem`:void 0};
  z-index: ${({theme:a})=>a.zIndices[1]};
`,E=i.forwardRef(({navigationAction:a,primaryAction:n,secondaryAction:l,subtitle:r,title:d,sticky:c,width:j,...s},B)=>{const R=typeof r=="string";return c?(0,e.jsx)(M,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(h.s,{justifyContent:"space-between",children:[(0,e.jsxs)(h.s,{children:[a&&(0,e.jsx)(o.a,{paddingRight:3,children:a}),(0,e.jsxs)(o.a,{children:[(0,e.jsx)(p.o,{variant:"beta",as:"h1",...s,children:d}),R?(0,e.jsx)(p.o,{variant:"pi",textColor:"neutral600",children:r}):r]}),l?(0,e.jsx)(o.a,{paddingLeft:4,children:l}):null]}),(0,e.jsx)(h.s,{children:n?(0,e.jsx)(o.a,{paddingLeft:2,children:n}):void 0})]})}):(0,e.jsxs)(o.a,{ref:B,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0,children:[a?(0,e.jsx)(o.a,{paddingBottom:2,children:a}):null,(0,e.jsxs)(h.s,{justifyContent:"space-between",children:[(0,e.jsxs)(h.s,{minWidth:0,children:[(0,e.jsx)(p.o,{as:"h1",variant:"alpha",...s,children:d}),l?(0,e.jsx)(o.a,{paddingLeft:4,children:l}):null]}),n]}),R?(0,e.jsx)(p.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:r}):r]})})},38413:(L,m,t)=>{t.d(m,{g:()=>x});var e=t(92132),i=t(79793),v=t(94061);const f=(0,i.Ay)(v.a)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,x=({labelledBy:T="main-content-title",...o})=>(0,e.jsx)(f,{"aria-labelledby":T,as:"main",id:"main-content",tabIndex:-1,...o})}}]);
