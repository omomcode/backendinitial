(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[6823],{54729:(H,L,o)=>{"use strict";o.d(L,{g:()=>O});var e=o(21272),h=o(80403),R=o(54894),v=o(74930);const O=(P={},x={})=>{const{id:E="",...S}=P,{get:V}=(0,h.ry)(),{locale:a}=(0,R.A)(),k=(0,h.QM)(a,{sensitivity:"base"}),{data:m,error:M,isError:W,isLoading:g,refetch:A}=(0,v.useQuery)(["roles",E,S],async()=>{const{data:Q}=await V(`/admin/roles/${E??""}`,{params:S});return Q},x);return{roles:e.useMemo(()=>{let Q=[];return m&&(Array.isArray(m.data)?Q=m.data:Q=[m.data]),[...Q].sort((oe,ee)=>k.compare(oe.name,ee.name))},[m,k]),error:M,isError:W,isLoading:g,refetch:A}}},59945:(H,L,o)=>{"use strict";o.d(L,{R:()=>R});var e=o(80403),h=o(74930);const R=(v={id:null},O={})=>{const{id:P,...x}=v,{get:E}=(0,e.ry)(),{data:S,error:V,isError:a,isLoading:k,refetch:m}=(0,h.useQuery)(["roles",P,"permissions",x],async()=>{const{data:{data:M}}=await E(`/admin/roles/${P}/permissions`,{params:x});return M},O);return{permissions:S,error:V,isError:a,isLoading:k,refetch:m}}},12370:(H,L,o)=>{"use strict";o.r(L),o.d(L,{CreatePage:()=>me,default:()=>Te});var e=o(21272),h=o(38413),R=o(55356),v=o(83997),O=o(85963),P=o(4198),x=o(94061),E=o(30893),S=o(90151),V=o(68074),a=o(7537),k=o(5287),m=o(80403),M=o(46270),W=o(6103),g=o(61535),A=o(77965),z=o.n(A),Q=o(54894),oe=o(82437),ee=o(17703),C=o(79793),de=o(71526),Z=o(89800),te=o(91125),Y=o(59945),ue=o(12083);const Le=ue.Ik().shape({name:ue.Yj().required(m.iW.required),description:ue.Yj().required(m.iW.required)}),ce=C.Ay.div`
  border: 1px solid ${({theme:X})=>X.colors.primary200};
  background: ${({theme:X})=>X.colors.primary100};
  padding: ${({theme:X})=>`${X.spaces[2]} ${X.spaces[4]}`};
  color: ${({theme:X})=>X.colors.primary600};
  border-radius: ${({theme:X})=>X.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,me=()=>{const X=(0,ee.W5)("/settings/roles/duplicate/:id"),be=(0,m.hN)(),{lockApp:N,unlockApp:J}=(0,m.MA)(),{formatMessage:j}=(0,Q.A)(),[_,re]=(0,e.useState)(!1),{replace:fe}=(0,ee.W6)(),w=(0,e.useRef)(),{trackUsage:Re}=(0,m.z1)(),{post:he,put:Fe}=(0,m.ry)(),{params:Ce}=X??{},{isLoading:ke,data:We}=(0,te.K)(Ce?.id,{cacheTime:0}),{permissions:pe,isLoading:Pe}=(0,Y.R)({id:Ce?.id},{cacheTime:0,enabled:!!Ce?.id}),Ne=Se=>{N(),re(!0),Ce?.id?Re("willDuplicateRole"):Re("willCreateNewRole"),Promise.resolve(he("/admin/roles",Se)).then(async({data:ae})=>{const{permissionsToSend:le}=w.current.getPermissions();return Ce?.id?Re("didDuplicateRole"):Re("didCreateNewRole"),ae.data.id&&!z()(le)&&await Fe(`/admin/roles/${ae.data.id}/permissions`,{permissions:le}),ae}).then(ae=>{re(!1),be({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),fe(`/settings/roles/${ae.data.id}`)}).catch(ae=>{console.error(ae),re(!1),be({type:"warning",message:{id:"notification.error"}})}).finally(()=>{J()})},Ke=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,W.A)(new Date,"PPP")}`;return e.createElement(h.g,null,e.createElement(m.x7,{name:"Roles"}),e.createElement(g.l1,{initialValues:{name:"",description:Ke},onSubmit:Ne,validationSchema:Le,validateOnChange:!1},({handleSubmit:Se,values:ae,errors:le,handleReset:Ee,handleChange:ne})=>e.createElement(m.lV,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(R.Q,{primaryAction:e.createElement(v.s,{gap:2},e.createElement(O.$,{variant:"secondary",onClick:()=>{Ee(),w.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(O.$,{onClick:Se,loading:_,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(m.N_,{startIcon:e.createElement(M.A,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(P.s,null,e.createElement(v.s,{direction:"column",alignItems:"stretch",gap:6},e.createElement(x.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(v.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(v.s,{justifyContent:"space-between"},e.createElement(x.a,null,e.createElement(x.a,null,e.createElement(E.o,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(x.a,null,e.createElement(E.o,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ce,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(S.x,{gap:4},e.createElement(V.E,{col:6},e.createElement(a.k,{name:"name",error:le.name&&j({id:le.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:ne,required:!0,value:ae.name})),e.createElement(V.E,{col:6},e.createElement(k.T,{label:j({id:"global.description",defaultMessage:"Description"}),id:"description",error:le.description&&j({id:le.description}),onChange:ne},ae.description))))),!ke&&!Pe?e.createElement(x.a,{shadow:"filterShadow",hasRadius:!0},e.createElement(Z.A,{isFormDisabled:!1,ref:w,permissions:pe,layout:We})):e.createElement(x.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(m.Bl,null))))))))};function Te(){const X=(0,oe.d4)(de.G);return e.createElement(m.kz,{permissions:X.settings.roles.create},e.createElement(me,null))}},89800:(H,L,o)=>{"use strict";o.d(L,{A:()=>ts});var e=o(21272),h=o(12081),R=o(12408),v=o(24093),O=o(80403),P=o(412),x=o.n(P),E=o(77965),S=o.n(E),V=o(33544),a=o.n(V),k=o(54894),m=o(94061),M=o(45635),W=o.n(M),g=o(79793),A=o(83997),z=o(50215),Q=o(74312),oe=o(44895),ee=o(2600),C=o.n(ee),de=o(35223),Z=o.n(de);const te=e.createContext(null),Y=()=>e.useContext(te);var ue=o(85963),Ae=o(20415);const Le=g.Ay.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,ce=({onClick:t,className:n,hasConditions:r,variant:s})=>{const{formatMessage:i}=(0,k.A)();return e.createElement(Le,{hasConditions:r,className:n},e.createElement(ue.$,{variant:s,startIcon:e.createElement(Ae.A,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};ce.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},ce.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const me=(0,g.Ay)(ce)``;var Te=o(61485),X=o(99248),be=o(6239),N=o(30893),J=o(67030),j=o(37679),_=o(60043),re=o(88761),fe=o(94710),w=o.n(fe),Re=o(39404),he=o.n(Re),Fe=o(76079);const Ce=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),ke=t=>t.reduce((n,[r,s])=>(n.push({label:he()(r),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),We=(t,n)=>t.map(([,r])=>r).flat().reduce((r,s)=>({[s.id]:n.includes(s.id),...r}),{}),pe=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,k.A)(),p=u=>{l(i,We(t,u))};return e.createElement(A.s,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(A.s,{paddingLeft:6,style:{width:180}},e.createElement(N.o,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(N.o,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(N.o,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(m.a,{style:{maxWidth:430,width:"100%"}},e.createElement(Fe.B,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:p,value:Ce(c),options:ke(t),disabled:n})))};pe.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const Pe=pe,Ne=(t,n)=>t.reduce((r,s)=>(r[s.id]=C()(n,s.id,!1),r),{}),Ke=(t,n)=>t.reduce((r,s)=>{const[i,l]=s,c=Ne(l,n);return r[i]=c,r},{}),ae=(t,n,r)=>t.reduce((s,i)=>{const l=C()(n,[...i.pathToConditionsObject,"conditions"],{}),c=Ke(r,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),le=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,k.A)(),{availableConditions:c,modifiedData:d,onChangeConditions:p}=Y(),u=(0,e.useMemo)(()=>Object.entries(w()(c,"category")),[c]),y=t.filter(({isDisplayed:f,hasSomeActionsSelected:B,hasAllActionsSelected:D})=>f&&(B||D)),b=(0,e.useMemo)(()=>ae(y,d,u),[y,d,u]),[$,K]=(0,e.useState)(b),I=(f,B)=>{K((0,re.Ay)(D=>{D[f]||(D[f]={}),D[f].default||(D[f].default={}),D[f].default=B}))},T=()=>{const f=Object.entries($).reduce((B,D)=>{const[F,se]=D,U=Object.values(se).reduce((q,G)=>({...q,...G}),{});return B[F]=U,B},{});p(f),i()};return e.createElement(Te.k,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(X.r,null,e.createElement(j.B,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((f,B,D)=>e.createElement(_.m,{isCurrent:B===D.length-1,key:f},he()(l({id:f,defaultMessage:f})))))),e.createElement(be.c,null,y.length===0&&e.createElement(N.o,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,y.map(({actionId:f,label:B,pathToConditionsObject:D},F)=>{const se=D.join("..");return e.createElement(Pe,{key:f,arrayOfOptionsGroupedByCategory:u,label:B,isFormDisabled:r,isGrey:F%2===0,name:se,onChange:I,value:C()($,se,{})})}))),e.createElement(J.j,{startActions:e.createElement(ue.$,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(ue.$,{onClick:T},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};le.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const Ee=le,ne=`${120/16}rem`,Me=`${200/16}rem`,je=`${53/16}rem`,we=g.Ay.div`
  width: ${ne};
`,at=(0,g.Ay)(A.s)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,ze=({children:t,isCollapsable:n,isActive:r,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:p,value:u})=>{const{formatMessage:y}=(0,k.A)();return e.createElement(A.s,{alignItems:"center",paddingLeft:6,style:{width:Me,flexShrink:0}},e.createElement(m.a,{paddingRight:2},e.createElement(z.J,{name:d,"aria-label":y({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:b=>l({target:{name:d,value:b}}),indeterminate:p,value:u})),e.createElement(at,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":r,onKeyDown:({key:b})=>(b==="Enter"||b===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(N.o,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},he()(i)),t))};ze.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},ze.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const it=(0,e.memo)(ze);var Kt=o(36676),Vt=o.n(Kt),Gt=o(57505),xe=o.n(Gt);const lt=t=>xe()(t)?Vt()(Object.values(t).map(n=>xe()(n)?lt(n):n)):[],Ie=lt,Ye=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Oe=t=>{const n=Ye(t),r=Ie(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=r.every(l=>l),i=r.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}};var Ht=o(9005);const Ve=(0,g.Ay)(Ht.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ge=t=>`
  ${N.o} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ve} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ut=(t,n,r)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...r.split(".."),s],p=S()(l)?[...d,"properties","enabled"]:d,u=p.join(".."),y=C()(n,[...d,"conditions"],null),b=Ie(y).some(T=>T);if(S()(l)){const T=C()(n,p,!1);return{actionId:s,checkboxName:u,hasAllActionsSelected:T,hasConditions:b,hasSomeActionsSelected:T,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const $=C()(n,p,null),{hasAllActionsSelected:K,hasSomeActionsSelected:I}=Oe($);return{actionId:s,checkboxName:u,hasAllActionsSelected:K,hasConditions:b,hasSomeActionsSelected:I,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),Xe=(t,n)=>`
  ${ct} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${ut} {
    display: flex;
  }
  ${me} {
    display: block;
  }
  &:hover {
   ${Ge(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:s})=>Xe(r,s)}
  }
  
`,ct=g.Ay.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${je};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,wt=g.Ay.div`
  display: inline-flex;
  min-width: 100%;

  ${me} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Xe(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Xe(t,n)}
  }
`,dt=(0,g.Ay)(A.s)`
  width: ${ne};
  position: relative;
`,ut=(0,g.Ay)(m.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,mt=g.Ay.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,zt=(0,g.Ay)(m.a)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,pt=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,p]=(0,e.useState)(!1),{formatMessage:u}=(0,k.A)(),{modifiedData:y,onChangeParentCheckbox:b,onChangeSimpleCheckbox:$}=Y(),K=()=>{p(U=>!U)},I=()=>{p(!1)},T=C()(y,c.split(".."),{}),f=(0,e.useMemo)(()=>Object.keys(T).reduce((U,q)=>(U[q]=Z()(T[q],"conditions"),U),{}),[T]),{hasAllActionsSelected:B,hasSomeActionsSelected:D}=Oe(f),F=(0,e.useMemo)(()=>Ut(t,y,c),[t,y,c]),se=F.some(({hasConditions:U})=>U);return e.createElement(wt,{isActive:n},e.createElement(ct,{isGrey:r},e.createElement(it,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:b,onClick:l,someChecked:D,value:B,isActive:n},e.createElement(ut,{paddingLeft:2},n?e.createElement(Q.A,null):e.createElement(oe.A,null))),e.createElement(A.s,{style:{flex:1}},F.map(({actionId:U,hasConditions:q,hasAllActionsSelected:G,hasSomeActionsSelected:ye,isDisplayed:Be,isParentCheckbox:ie,checkboxName:ve,label:He})=>Be?ie?e.createElement(dt,{key:U,justifyContent:"center",alignItems:"center"},q&&e.createElement(mt,null),e.createElement(z.J,{disabled:s,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${He} ${i}`}),onValueChange:$e=>{b({target:{name:ve,value:$e}})},indeterminate:ye,value:G})):e.createElement(dt,{key:U,justifyContent:"center",alignItems:"center"},q&&e.createElement(mt,null),e.createElement(z.J,{disabled:s,indeterminate:q,name:ve,onValueChange:$e=>{$({target:{name:ve,value:$e}})},value:G})):e.createElement(we,{key:U}))),d&&e.createElement(Ee,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:F,isFormDisabled:s,onClosed:I,onToggle:K})),e.createElement(zt,null,e.createElement(me,{onClick:K,hasConditions:se})))};pt.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const Yt=pt,Xt=g.Ay.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,gt=()=>e.createElement(Xt,null,"*"),Jt=(t,n)=>t.map(r=>{const s=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:s}}),Qt=(0,g.Ay)(m.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Zt=g.Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Je=t=>e.createElement(Qt,null,e.createElement(Zt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Je.defaultProps={fill:"primary200"},Je.propTypes={fill:a().string};const qt=(0,e.memo)(Je),yt=(0,g.Ay)(A.s)`
  width: ${ne};
  position: relative;
`,_t=(0,g.Ay)(A.s)`
  height: ${je};
`,en=(0,g.Ay)(m.a)`
  padding-left: ${31/16}rem;
`,tn=(0,g.Ay)(m.a)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,nn=(0,g.Ay)(A.s)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ve} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ge(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ge(n)};
`,sn=g.Ay.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Qe=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,k.A)(),{modifiedData:p,onChangeParentCheckbox:u,onChangeSimpleCheckbox:y}=Y(),[b,$]=(0,e.useState)(null),K=T=>{$(f=>f===T?null:T)},I=(0,e.useMemo)(()=>b?t.find(({value:T})=>T===b):null,[b,t]);return e.createElement(en,null,e.createElement(sn,null),t.map(({label:T,value:f,required:B,children:D},F)=>{const se=F+1<t.length,U=Array.isArray(D),q=b===f;return e.createElement(tn,{key:f,isVisible:se},e.createElement(_t,null,e.createElement(qt,{color:"primary200"}),e.createElement(A.s,{style:{flex:1}},e.createElement(nn,{level:r,isActive:q,isCollapsable:U},e.createElement(at,{alignItems:"center",isCollapsable:U,...U&&{onClick:()=>K(f),"aria-expanded":q,onKeyDown:({key:G})=>(G==="Enter"||G===" ")&&K(f),tabIndex:0,role:"button"},title:T},e.createElement(N.o,{ellipsis:!0},he()(T)),B&&e.createElement(gt,null),e.createElement(Ve,{$isActive:q}))),e.createElement(A.s,{style:{flex:1}},i.map(({actionId:G,label:ye,isActionRelatedToCurrentProperty:Be})=>{if(!Be)return e.createElement(we,{key:G});const ie=[...s.split(".."),G,"properties",c,...l.split(".."),f],ve=C()(p,ie,!1);if(!D)return e.createElement(yt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(z.J,{disabled:n,name:ie.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${T} ${ye}`}),onValueChange:De=>{y({target:{name:ie.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:He,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(yt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(z.J,{key:ye,disabled:n,name:ie.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${T} ${ye}`}),onValueChange:De=>{u({target:{name:ie.join(".."),value:De}})},value:He,indeterminate:$e}))})))),I&&q&&e.createElement(m.a,{paddingBottom:2},e.createElement(Qe,{isFormDisabled:n,parentName:`${l}..${f}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:r+1,childrenForm:I.children})))}))};Qe.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const on=(0,e.memo)(Qe),rn=t=>t.reduce((r,s)=>(s.isActionRelatedToCurrentProperty&&r.push(s.actionId),r),[]),an=(t,n,r,s,i)=>{const c=rn(t).reduce((d,p)=>{const u=[...r.split(".."),p,"properties",s,i],y=C()(n,u,!1);return d[p]=y,d},{});return Oe(c)},ft=(0,g.Ay)(A.s)`
  width: ${ne};
  position: relative;
`,ln=(0,g.Ay)(A.s)`
  height: ${je};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ve} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ge(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ge(n)};
`,Ze=({childrenForm:t,label:n,isFormDisabled:r,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:p})=>{const{formatMessage:u}=(0,k.A)(),[y,b]=(0,e.useState)(null),{modifiedData:$,onChangeCollectionTypeLeftActionRowCheckbox:K,onChangeParentCheckbox:I,onChangeSimpleCheckbox:T}=Y(),f=y===s,B=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),D=B.length>0,F=(0,e.useCallback)(()=>{D&&b(G=>G===s?null:s)},[D,s]),se=({target:{value:G}})=>{K(l,d,s,G)},{hasAllActionsSelected:U,hasSomeActionsSelected:q}=(0,e.useMemo)(()=>an(c,$,l,d,s),[c,$,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(ln,{alignItems:"center",isCollapsable:D,isActive:f,background:p?"neutral100":"neutral0"},e.createElement(A.s,null,e.createElement(it,{onChange:se,onClick:F,isCollapsable:D,isFormDisabled:r,label:n,someChecked:q,value:U,isActive:f},i&&e.createElement(gt,null),e.createElement(Ve,{$isActive:f})),e.createElement(A.s,null,c.map(({label:G,isActionRelatedToCurrentProperty:ye,actionId:Be})=>{if(!ye)return e.createElement(we,{key:G});const ie=[...l.split(".."),Be,"properties",d,s];if(!D){const De=C()($,ie,!1);return e.createElement(ft,{key:Be,justifyContent:"center",alignItems:"center"},e.createElement(z.J,{disabled:r,name:ie.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${G}`}),onValueChange:ns=>{T({target:{name:ie.join(".."),value:ns}})},value:De}))}const ve=C()($,ie,{}),{hasAllActionsSelected:He,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ft,{key:G,justifyContent:"center",alignItems:"center"},e.createElement(z.J,{disabled:r,name:ie.join(".."),onValueChange:De=>{I({target:{name:ie.join(".."),value:De}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${G}`}),value:He,indeterminate:$e}))})))),f&&e.createElement(on,{childrenForm:B,isFormDisabled:r,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Ze.defaultProps={childrenForm:[],required:!1},Ze.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const cn=(0,e.memo)(Ze),ht=(0,g.Ay)(A.s)`
  width: ${ne};
  flex-shrink: 0;
`,dn=(0,g.Ay)(A.s)`
  width: ${Me};
  height: ${je};
  flex-shrink: 0;
`,Ct=({headers:t,label:n})=>{const{formatMessage:r}=(0,k.A)(),s=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(A.s,null,e.createElement(dn,{alignItems:"center",paddingLeft:6},e.createElement(N.o,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ht,{justifyContent:"center",key:i.label},e.createElement(N.o,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ht,{key:i.label})))};Ct.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const un=Ct,mn=(t,n)=>t.map(r=>{const s=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:s}}),pn=g.Ay.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Et=({availableActions:t,childrenForm:n,isFormDisabled:r,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>mn(t,l),[t,l]);return e.createElement(pn,null,e.createElement(un,{label:s,headers:c}),e.createElement(m.a,null,n.map(({children:d,label:p,value:u,required:y},b)=>e.createElement(cn,{childrenForm:d,key:u,label:p,isFormDisabled:r,name:u,required:y,propertyActions:c,pathToData:i,propertyName:l,isOdd:b%2===0}))))};Et.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const gn=Et,yn=g.Ay.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,vt=({allActions:t,contentTypeName:n,label:r,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:p})=>{const u=(0,e.useCallback)(()=>{c(n)},[n,c]),y=(0,e.useMemo)(()=>Jt(t,n),[t,n]);return e.createElement(yn,{isActive:i},e.createElement(Yt,{availableActions:y,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:r,onClickToggle:u,pathToData:d}),i&&p.map(({label:b,value:$,children:K})=>e.createElement(gn,{availableActions:y,childrenForm:K,isFormDisabled:l,label:b,pathToData:d,propertyName:$,key:$})))};vt.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const fn=vt,qe=({actions:t,isFormDisabled:n,pathToData:r,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:p,properties:u},y)=>e.createElement(fn,{allActions:t,key:d,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:n,index:y,onClickToggleCollapse:c,pathToData:`${r}..${d}`,properties:u}))};qe.defaultProps={actions:[],subjects:[]},qe.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const hn=(0,e.memo)(qe),Cn=t=>t.filter(({subjects:n})=>n&&n.length),En=t=>t.map(({actionId:n})=>n),vn=(t,n)=>t.reduce((r,s)=>(Object.keys(n).forEach(i=>{const l=C()(n,[i,s],{}),c={[i]:Ye(l)};r[s]?r[s]={...r[s],...c}:r[s]=c}),r),{}),An=(t,n)=>{const r=En(t),s=vn(r,n);return Object.keys(s).reduce((l,c)=>(l[c]=Oe(s[c]),l),{})},bn=(0,g.Ay)(A.s)`
  width: ${ne};
  flex-shrink: 0;
`,_e=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:s}=(0,k.A)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=Y(),c=(0,e.useMemo)(()=>Cn(t),[t]),d=(0,e.useMemo)(()=>An(c,i[r]),[i,c,r]);return e.createElement(m.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Me}},e.createElement(A.s,{gap:0},c.map(({label:p,actionId:u})=>e.createElement(bn,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(N.o,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(z.J,{disabled:n,onValueChange:y=>{l(r,u,y)},name:u,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:C()(d,[u,"hasAllActionsSelected"],!1),indeterminate:C()(d,[u,"hasSomeActionsSelected"],!1)})))))};_e.defaultProps={actions:[]},_e.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const Rn=(0,e.memo)(_e),xn=(0,g.Ay)(m.a)`
  overflow-x: auto;
`,At=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:s}})=>{const i=W()([...s],"label");return e.createElement(xn,{background:"neutral0"},e.createElement(Rn,{actions:r,kind:n,isFormDisabled:t}),e.createElement(hn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};At.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const bt=(0,e.memo)(At),Rt=({children:t,value:n})=>e.createElement(te.Provider,{value:n},t);Rt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const Tn=Rt;var Pn=o(57237),Sn=o(60888),Mn=o(44604),xt=o(4181),On=o(90151),$n=o(68074);const Dn=(t,n,r)=>t.map(s=>{const i=[...r,s.action,"properties","enabled"],l=C()(n,i,!1),c=C()(n,[...r,s.action,"conditions"],{}),d=Ie(c).some(p=>p);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...r,s.action]}}),Ln=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return Ie(n).some(s=>s)},jn=g.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.Ay.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Tt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:u}=Y(),{formatMessage:y}=(0,k.A)(),b=C()(d,i,{}),$=(0,e.useMemo)(()=>Object.keys(b).reduce((F,se)=>(F[se]=Ye(b[se]),F),{}),[b]),{hasAllActionsSelected:K,hasSomeActionsSelected:I}=Oe($),T=()=>{c(F=>!F)},f=()=>{c(!1)},B=Dn(s,d,i),D=Ln(C()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(m.a,null,e.createElement(A.s,{justifyContent:"space-between",alignItems:"center"},e.createElement(m.a,{paddingRight:4},e.createElement(N.o,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(jn,null),e.createElement(m.a,{paddingLeft:4},e.createElement(xt.S,{name:i.join(".."),disabled:n,onValueChange:F=>{p({target:{name:i.join(".."),value:F}})},indeterminate:I,value:K},y({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(A.s,{paddingTop:6,paddingBottom:6},e.createElement(On.x,{gap:2,style:{flex:1}},B.map(({checkboxName:F,value:se,action:U,displayName:q,hasConditions:G})=>e.createElement($n.E,{col:3,key:U},e.createElement(In,{disabled:n,hasConditions:G},e.createElement(xt.S,{name:F,disabled:n,onValueChange:ye=>{u({target:{name:F,value:ye}})},value:se},q))))),e.createElement(me,{hasConditions:D,onClick:T}))),l&&e.createElement(Ee,{headerBreadCrumbs:[t,r],actions:B,isFormDisabled:n,onClosed:f,onToggle:T}))};Tt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const Bn=Tt,et=({childrenForm:t,kind:n,name:r,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:p}=(0,k.A)(),u=()=>{c(r)},y=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Pn.n,{expanded:s,onToggle:u,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Sn.P,{title:he()(y),description:`${p({id:"Settings.permissions.category"},{category:y})} ${n==="plugins"?"plugin":n}`}),e.createElement(Mn.u,null,e.createElement(m.a,{padding:6},t.map(({actions:b,subCategoryName:$,subCategoryId:K})=>e.createElement(Bn,{key:$,actions:b,categoryName:y,isFormDisabled:i,subCategoryName:$,pathToData:[...d,K]})))))};et.defaultProps={},et.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const Fn=et,Pt=({isFormDisabled:t,kind:n,layout:r})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(m.a,{padding:6,background:"neutral0"},r.map(({category:c,categoryId:d,childrenForm:p},u)=>e.createElement(Fn,{key:c,childrenForm:p,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:u%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Pt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const St=Pt;var kn=o(59080),Wn=o.n(kn),Nn=o(48940),ge=o.n(Nn);const Mt=(t,n,r)=>t.find(s=>s.action===n&&s.subject===r),Ot=(t,n=[])=>t.reduce((r,s)=>(r[s.id]=n.indexOf(s.id)!==-1,r),{}),$t=({children:t},n,r="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:$t(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return s[i.value]=l,s},{}),Kn=(t,n,r)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=C()(r,["properties",l.value],[]),d=$t(l,c);s.properties[i]=d}return s},{properties:{}}),Vn=(t,n)=>n.reduce((r,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(r[s]=i),r},{}),Dt=({subjects:t},n,r,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Vn(t,c);if(S()(d))return i;const p=Object.keys(d).reduce((u,y)=>{const{actionId:b,applyToProperties:$}=l,T=d[y].properties.map(({value:F})=>F).every(F=>($||[]).indexOf(F)===-1),f=Mt(s,b,y),B=Ot(r,C()(f,"conditions",[]));if(S()($)||T)return ge()(u,[y,b],{properties:{enabled:f!==void 0},conditions:B}),u;const D=Kn($,d[y],f);return ge()(u,[y,b],{...D,conditions:B}),u},{});return Wn()(i,p)},{}),Gn=(t,n,r)=>t.reduce((s,i)=>{const l=Mt(r,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:Ot(n,l?.conditions??[])},s},{}),Hn=(t,n,r)=>t.reduce((s,i)=>(s[i.subCategoryId]=Gn(i.actions,n,r),s),{}),Lt=(t,n,r=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Hn(l,n,r);return s[i]=c,s},{}),jt=t=>t.split(" ").join("-"),It=(t,n)=>Object.entries(w()(t,n)).map(([r,s])=>({category:r,categoryId:jt(r),childrenForm:Object.entries(w()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:jt(i),actions:l}))})),Un=(t,n)=>{const{conditions:r,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:It(l,"plugin"),settings:It(c,"category")},p={collectionTypes:Dt(s,s.actions||[],r,n),singleTypes:Dt(i,i.actions||[],r,n),plugins:Lt(d.plugins,r,n),settings:Lt(d.settings,r,n)};return{initialData:p,modifiedData:p,layouts:d}};var wn=o(51187),tt=o.n(wn);const Bt=t=>Object.keys(t).reduce((n,r)=>{const s=t[r];if(xe()(s)&&!x()(s,"conditions"))return{...n,[r]:Bt(s)};if(xe()(s)&&x()(s,"conditions")&&!Ie(Z()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[r]:{...s,conditions:l}}}return n[r]=s,n},{}),nt=Bt,Ft=(t,n,r=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!r?(s[i]=l,s):xe()(l)?{...s,[i]:Ft(l,n,i==="fields")}:(s[i]=n,s)},{}),Ue=Ft,zn={initialData:{},modifiedData:{},layouts:{}},Yn=(t,n)=>(0,re.Ay)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(C()(t,c)).forEach(d=>{const p=C()(t,[...c,d,i],void 0);if(p){let u=Ue(p,l);if(!l&&u.conditions){const y=Ue(u.conditions,!1);u={...u,conditions:y}}ge()(r,[...c,d,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=tt()(t.modifiedData);const p=s.split(".."),u=C()(d,p,{});Object.keys(u).forEach(y=>{if(x()(u[y],`properties.${i}`)){const b=C()(u,[y,"properties",i,l]),$=[...p,y,"properties",i,l];if(!xe()(b))ge()(d,$,c);else{const K=Ue(b,c);ge()(d,$,K)}}}),c||(d=nt(d)),ge()(r,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;ge()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=tt()(t.modifiedData);ge()(s,[...n.keys.split("..")],n.value),n.value||(s=nt(s)),ge()(r,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=tt()(t.modifiedData);const d=C()(c,l,{}),p=Ue(d,i);ge()(c,l,p),i||(c=nt(c)),ge()(r,["modifiedData"],c);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),st=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:st(r),properties:{}}},Jn=t=>Object.values(t).reduce((n,r)=>{const s=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=Xn(l);return i.push(d),i},[]);return[...n,...s]},[]),kt=t=>Object.values(t).reduce((n,r)=>{const s=Jn(r);return[...n,...s]},[]),Wt=(t,n="")=>Object.entries(t).reduce((r,s)=>{const[i,l]=s;return xe()(l)?[...r,...Wt(l,`${n}${i}.`)]:(l&&!xe()(l)&&r.push(`${n}${i}`),r)},[]),Qn=(t,n,{conditions:r,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=Wt(d),i},{action:t,subject:n,conditions:st(r),properties:{}}),Zn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:st(r)}),qn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!Ie(c).some(u=>u))return s;if(!c?.properties?.enabled){const u=Qn(l,t,c);return[...s,u]}if(!c.properties.enabled)return s;const p=Zn(l,t,c);return s.push(p),s},[]),Nt=t=>Object.entries(t).reduce((r,s)=>{const[i,l]=s,c=qn(i,l);return[...r,...c]},[]),_n=t=>{const n=kt(t.plugins),r=kt(t.settings),s=Nt(t.collectionTypes),i=Nt(t.singleTypes);return[...n,...r,...s,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],ot=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Yn,zn,()=>Un(t,r)),{formatMessage:p}=(0,k.A)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const I=(0,O.iv)(i.collectionTypes,c.collectionTypes),T=(0,O.iv)(i.singleTypes,c.singleTypes),f={...I,...T};let B;return S()(f)?B=!1:B=Object.values(f).some(D=>Object.values(D).some(F=>x()(F,"conditions"))),{permissionsToSend:_n(c),didUpdateConditions:B}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(I,T,f,B)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:I,propertyName:T,rowName:f,value:B})},y=(I,T,f)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:I,actionId:T,value:f})},b=I=>{d({type:"ON_CHANGE_CONDITIONS",conditions:I})},$=(0,e.useCallback)(({target:{name:I,value:T}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:I,value:T})},[]),K=(0,e.useCallback)(({target:{name:I,value:T}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:I,value:T})},[]);return e.createElement(Tn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:b,onChangeSimpleCheckbox:$,onChangeParentCheckbox:K,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:y}},e.createElement(h.f,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(R.t,null,es.map(I=>e.createElement(R.o,{key:I.id},p({id:I.labelId,defaultMessage:I.defaultMessage})))),e.createElement(v.T,{style:{position:"relative"}},e.createElement(v.K,null,e.createElement(bt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(v.K,null,e.createElement(bt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(v.K,null,e.createElement(St,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(v.K,null,e.createElement(St,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});ot.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},ot.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const ts=(0,e.memo)(ot)},49659:(H,L,o)=>{"use strict";o.r(L),o.d(L,{default:()=>be});var e=o(21272),h=o(80403),R=o(82437),v=o(17703),O=o(71526),P=o(38413),x=o(55356),E=o(83997),S=o(85963),V=o(4198),a=o(94061),k=o(46270),m=o(61535),M=o(54894),W=o(54729),g=o(91125),A=o(59945),z=o(89800),Q=o(30893),oe=o(90151),ee=o(68074),C=o(7537),de=o(5287),Z=o(33544),te=o.n(Z);const Y=({disabled:N,role:J,values:j,errors:_,onChange:re,onBlur:fe})=>{const{formatMessage:w}=(0,M.A)();return e.createElement(a.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.s,{justifyContent:"space-between"},e.createElement(a.a,null,e.createElement(a.a,null,e.createElement(Q.o,{fontWeight:"bold"},J?J.name:w({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.a,null,e.createElement(Q.o,{textColor:"neutral500",variant:"pi"},J?J.description:w({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(S.$,{disabled:!0,variant:"secondary"},w({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:J.usersCount}))),e.createElement(oe.x,{gap:4},e.createElement(ee.E,{col:6},e.createElement(C.k,{disabled:N,name:"name",error:_.name&&w({id:_.name}),label:w({id:"global.name",defaultMessage:"Name"}),onChange:re,onBlur:fe,required:!0,value:j.name||""})),e.createElement(ee.E,{col:6},e.createElement(de.T,{disabled:N,label:w({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&w({id:_.name}),onChange:re,onBlur:fe},j.description||"")))))};Y.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},Y.propTypes={disabled:te().bool,errors:te().object.isRequired,onBlur:te().func.isRequired,onChange:te().func.isRequired,role:te().object,values:te().object};const ue=Y;var Ae=o(12083);const ce=Ae.Ik().shape({name:Ae.Yj().required(h.iW.required)}),Te=()=>{const N=(0,h.hN)(),{formatMessage:J}=(0,M.A)(),{params:{id:j}}=(0,v.W5)("/settings/roles/:id"),{put:_}=(0,h.ry)(),[re,fe]=(0,e.useState)(!1),w=(0,e.useRef)(),{lockApp:Re,unlockApp:he}=(0,h.MA)(),{trackUsage:Fe}=(0,h.z1)(),{formatAPIError:Ce}=(0,h.wq)(),{isLoading:ke,data:We}=(0,g.K)(j,{cacheTime:0}),{roles:[pe={}],isLoading:Pe,refetch:Ne}=(0,W.g)({id:j},{cacheTime:0}),{permissions:Ke,isLoading:Se}=(0,A.R)({id:j},{cacheTime:0}),ae=async Ee=>{try{Re(),fe(!0);const{permissionsToSend:ne,didUpdateConditions:Me}=w.current.getPermissions();await _(`/admin/roles/${j}`,Ee),pe.code!=="strapi-super-admin"&&(await _(`/admin/roles/${j}/permissions`,{permissions:ne}),Me&&Fe("didUpdateConditions")),w.current.setFormAfterSubmit(),await Ne(),N({type:"success",message:{id:"notification.success.saved"}})}catch(ne){N({type:"warning",message:Ce(ne)})}finally{fe(!1),he()}},le=!Pe&&pe.code==="strapi-super-admin";return e.createElement(P.g,null,e.createElement(h.x7,{name:"Roles"}),e.createElement(m.l1,{enableReinitialize:!0,initialValues:{name:pe.name,description:pe.description},onSubmit:ae,validationSchema:ce,validateOnChange:!1},({handleSubmit:Ee,values:ne,errors:Me,handleChange:je,handleBlur:rt})=>e.createElement("form",{onSubmit:Ee},e.createElement(x.Q,{primaryAction:e.createElement(E.s,{gap:2},e.createElement(S.$,{disabled:pe.code==="strapi-super-admin",onClick:Ee,loading:re,size:"L"},J({id:"global.save",defaultMessage:"Save"}))),title:J({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:J({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(h.N_,{startIcon:e.createElement(k.A,null),to:"/settings/roles"},J({id:"global.back",defaultMessage:"Back"}))}),e.createElement(V.s,null,e.createElement(E.s,{direction:"column",alignItems:"stretch",gap:6},e.createElement(ue,{isLoading:Pe||Se,disabled:le,errors:Me,values:ne,onChange:je,onBlur:rt,role:pe}),!ke&&!Pe&&!Se?e.createElement(a.a,{shadow:"filterShadow",hasRadius:!0},e.createElement(z.A,{isFormDisabled:le,permissions:Ke,ref:w,layout:We})):e.createElement(a.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(h.Bl,null)))))))},be=()=>{const N=(0,R.d4)(O.G),{isLoading:J,allowedActions:{canRead:j,canUpdate:_}}=(0,h.ec)({read:N.settings.roles.read,update:N.settings.roles.update});return J?e.createElement(h.Bl,null):!j&&!_?e.createElement(v.rd,{to:"/"}):e.createElement(Te,null)}},91125:(H,L,o)=>{"use strict";o.d(L,{K:()=>R});var e=o(80403),h=o(74930);const R=(v,O={})=>{const{get:P}=(0,e.ry)(),{data:x,error:E,isError:S,isLoading:V}=(0,h.useQuery)(["permissions",v],async()=>{const{data:{data:a}}=await P("/admin/permissions",{params:{role:v}});return a},O);return{data:x,error:E,isError:S,isLoading:V}}},94445:H=>{function L(o,e,h,R){for(var v=-1,O=o==null?0:o.length;++v<O;){var P=o[v];e(R,P,h(P),o)}return R}H.exports=L},7233:(H,L,o)=>{var e=o(97449);function h(R,v,O,P){return e(R,function(x,E,S){v(P,x,O(x),S)}),P}H.exports=h},88532:(H,L,o)=>{var e=o(94445),h=o(7233),R=o(45353),v=o(82261);function O(P,x){return function(E,S){var V=v(E)?e:h,a=x?x():{};return V(E,P,R(S,2),a)}}H.exports=O},36676:(H,L,o)=>{var e=o(87212),h=1/0;function R(v){var O=v==null?0:v.length;return O?e(v,h):[]}H.exports=R},94710:(H,L,o)=>{var e=o(95292),h=o(88532),R=Object.prototype,v=R.hasOwnProperty,O=h(function(P,x,E){v.call(P,E)?P[E].push(x):e(P,E,[x])});H.exports=O},57237:(H,L,o)=>{"use strict";o.d(L,{I:()=>V,n:()=>k});var e=o(92132),h=o(21272),R=o(79793),v=o(97366),O=o(84175),P=o(30893),x=o(83997),E=o(94061);const S=({theme:m,expanded:M,variant:W,disabled:g,error:A})=>A?`1px solid ${m.colors.danger600} !important`:g?`1px solid ${m.colors.neutral150}`:M?`1px solid ${m.colors.primary600}`:W==="primary"?`1px solid ${m.colors.neutral0}`:`1px solid ${m.colors.neutral100}`,V=(0,R.Ay)(P.o)``,a=(0,R.Ay)(E.a)`
  border: ${S};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:m})=>m.colors.primary600};

    ${V} {
      color: ${({theme:m,expanded:M})=>M?void 0:m.colors.primary700};
    }

    ${P.o} {
      color: ${({theme:m,expanded:M})=>M?void 0:m.colors.primary600};
    }

    & > ${x.s} {
      background: ${({theme:m})=>m.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:m})=>m.colors.primary200};
    }
  }
`,k=({children:m,disabled:M=!1,error:W,expanded:g=!1,hasErrorMessage:A=!0,id:z,onToggle:Q,toggle:oe,size:ee="M",variant:C="primary",shadow:de})=>{const Z=(0,O.B)(z),te=h.useMemo(()=>({expanded:g,onToggle:Q,toggle:oe,id:Z,size:ee,variant:C,disabled:M}),[M,g,Z,Q,ee,oe,C]);return(0,e.jsxs)(v.C.Provider,{value:te,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:M,"aria-disabled":M,expanded:g,hasRadius:!0,variant:C,error:W,shadow:de,children:m}),W&&A&&(0,e.jsx)(E.a,{paddingTop:1,children:(0,e.jsx)(P.o,{variant:"pi",textColor:"danger600",children:W})})]})}},44604:(H,L,o)=>{"use strict";o.d(L,{u:()=>v});var e=o(92132),h=o(97366),R=o(94061);const v=({children:O,...P})=>{const{expanded:x,id:E}=(0,h.O)();if(!x)return null;const S=`accordion-content-${E}`,V=`accordion-label-${E}`,a=`accordion-desc-${E}`;return(0,e.jsx)(R.a,{role:"region",id:S,"aria-labelledby":V,"aria-describedby":a,...P,children:O})}},97366:(H,L,o)=>{"use strict";o.d(L,{C:()=>h,O:()=>R});var e=o(21272);const h=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),R=()=>(0,e.useContext)(h)},60888:(H,L,o)=>{"use strict";o.d(L,{P:()=>m});var e=o(92132),h=o(9005),R=o(79793),v=o(57237),O=o(97366);const P=({expanded:M,disabled:W,variant:g})=>{let A="neutral100";return M?A="primary100":W?A="neutral150":g==="primary"&&(A="neutral0"),A};var x=o(18629),E=o(58805),S=o(83997),V=o(30893);const a=(0,R.Ay)(x.Q)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:M,expanded:W})=>W?M.colors.primary600:M.colors.neutral500};
    }
  }
`,k=(0,R.Ay)(S.s)`
  min-height: ${({theme:M,size:W})=>M.sizes.accordions[W]};
  border-radius: ${({theme:M,expanded:W})=>W?`${M.borderRadius} ${M.borderRadius} 0 0`:M.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:M})=>M.colors.primary600};
      }
    }
  }
`,m=({title:M,description:W,as:g="span",togglePosition:A="right",action:z,...Q})=>{const{onToggle:oe,toggle:ee,expanded:C,id:de,size:Z,variant:te,disabled:Y}=(0,O.O)(),ue=`accordion-content-${de}`,Ae=`accordion-label-${de}`,Le=`accordion-desc-${de}`,ce=Z==="M"?6:4,me=Z==="M"?ce:ce-2,Te=P({expanded:C,disabled:Y,variant:te}),be={as:g,fontWeight:Z==="S"?"bold":void 0,id:Ae,textColor:C?"primary600":"neutral700",ellipsis:!0,variant:Z==="M"?"delta":void 0},N=C?"primary600":"neutral600",J=C?"primary200":"neutral200",j=Z==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{Y||(ee&&!oe?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ee()):oe&&oe())},re=(0,e.jsx)(S.s,{justifyContent:"center",borderRadius:"50%",height:j,width:j,transform:C?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:J,cursor:Y?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(E.I,{as:h.A,width:Z==="M"?`${11/16}rem`:`${8/16}rem`,color:C?"primary600":"neutral600"})});return(0,e.jsx)(k,{paddingBottom:me,paddingLeft:ce,paddingRight:ce,paddingTop:me,background:Te,expanded:C,size:Z,justifyContent:"space-between",cursor:Y?"not-allowed":"",children:(0,e.jsxs)(S.s,{gap:3,flex:1,maxWidth:"100%",children:[A==="left"&&re,(0,e.jsx)(a,{onClick:_,"aria-disabled":Y,"aria-expanded":C,"aria-controls":ue,"aria-labelledby":Ae,"data-strapi-accordion-toggle":!0,expanded:C,type:"button",flex:1,minWidth:0,...Q,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v.I,{...be,children:M}),W&&(0,e.jsx)(V.o,{as:"p",id:Le,textColor:N,children:W})]})}),A==="right"&&(0,e.jsxs)(S.s,{gap:3,children:[re,z]}),A==="left"&&z]})})}},76079:(H,L,o)=>{"use strict";o.d(L,{B:()=>v});var e=o(92132),h=o(79793),R=o(56654);const v=({options:P,...x})=>(0,e.jsx)(R.KF,{...x,children:P.map(E=>"children"in E?(0,e.jsx)(R.np,{label:E.label,values:E.children.map(S=>S.value.toString()),children:E.children.map(S=>(0,e.jsx)(O,{value:S.value,children:S.label},S.value))},E.label):(0,e.jsx)(R.fe,{value:E.value,children:E.label},E.value))}),O=(0,h.Ay)(R.fe)`
  padding-left: ${({theme:P})=>P.spaces[7]};
`}}]);
