(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[6719],{23005:(p,g,t)=>{"use strict";t.r(g),t.d(g,{default:()=>Pt});var e=t(21272),n=t(80403),a=t(17703),r=t(69224),o=t(38413),d=t(55356),i=t(85963),f=t(4198),h=t(83997),u=t(30893),L=t(90151),E=t(68074),c=t(7537),m=t(5287),A=t(54514),C=t(61535),v=t(54894),b=t(74930),S=t(33544),P=t.n(S);const w=(0,e.createContext)({}),$=({children:s,value:l})=>e.createElement(w.Provider,{value:l},s),F=()=>(0,e.useContext)(w);$.propTypes={children:P().node.isRequired,value:P().object.isRequired};var U=t(34075),X=t(57237),V=t(60888),ce=t(44604),ne=t(39404),de=t.n(ne);function k(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return de()(s.replace("api::","").replace("plugin::",""))}}const se=k,fe=(s,l)=>{const y=Object.keys(l).sort().map(x=>({name:x,isOpen:!1}));return{...s,collapses:y}};var G=t(94061),ue=t(45635),ae=t.n(ue),q=t(4181),_=t(98765),re=t(20415),be=t(2600),oe=t.n(be),ee=t(79793);const Ee=(0,ee.AH)`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Be=(0,ee.Ay)(G.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&Ee}
  &:hover {
    ${Ee}
  }
`,Se=ee.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,ve=({subCategory:s})=>{const{formatMessage:l}=(0,v.A)(),{onChange:y,onChangeSelectAll:x,onSelectedAction:T,selectedAction:M,modifiedData:D}=F(),j=(0,e.useMemo)(()=>oe()(D,s.name,{}),[D,s]),O=(0,e.useMemo)(()=>Object.values(j).every(R=>R.enabled===!0),[j]),B=(0,e.useMemo)(()=>Object.values(j).some(R=>R.enabled===!0)&&!O,[j,O]),I=(0,e.useCallback)(({target:{name:R}})=>{x({target:{name:R,value:!O}})},[O,x]),W=(0,e.useCallback)(R=>M===R,[M]);return e.createElement(G.a,null,e.createElement(h.s,{justifyContent:"space-between",alignItems:"center"},e.createElement(G.a,{paddingRight:4},e.createElement(u.o,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(Se,null),e.createElement(G.a,{paddingLeft:4},e.createElement(q.S,{name:s.name,value:O,onValueChange:R=>I({target:{name:s.name,value:R}}),indeterminate:B},l({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(h.s,{paddingTop:6,paddingBottom:6},e.createElement(L.x,{gap:2,style:{flex:1}},s.actions.map(R=>{const N=`${R.name}.enabled`;return e.createElement(E.E,{col:6,key:R.name},e.createElement(Be,{isActive:W(R.name),padding:2,hasRadius:!0},e.createElement(q.S,{value:oe()(D,N,!1),name:N,onValueChange:z=>y({target:{name:N,value:z}})},R.label),e.createElement("button",{type:"button",onClick:()=>T(R.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(_.s,{as:"span"},l({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:R.name})),e.createElement(re.A,null))))}))))};ve.propTypes={subCategory:P().object.isRequired};const Ie=ve,ye=({name:s,permissions:l})=>{const y=(0,e.useMemo)(()=>ae()(Object.values(l.controllers).reduce((x,T,M)=>{const D=`${s}.controllers.${Object.keys(l.controllers)[M]}`,j=ae()(Object.keys(T).reduce((O,B)=>[...O,{...T[B],label:B,name:`${D}.${B}`}],[]),"label");return[...x,{actions:j,label:Object.keys(l.controllers)[M],name:D}]},[]),"label"),[s,l]);return e.createElement(G.a,{padding:6},y.map(x=>e.createElement(Ie,{key:x.name,subCategory:x})))};ye.propTypes={name:P().string.isRequired,permissions:P().object.isRequired};const $e=ye;var xe=t(88761);const We={collapses:[]},Ue=(s,l)=>(0,xe.Ay)(s,y=>{switch(l.type){case"TOGGLE_COLLAPSE":{y.collapses=s.collapses.map((x,T)=>T===l.index?{...x,isOpen:!x.isOpen}:{...x,isOpen:!1});break}default:return y}}),Ne=()=>{const{modifiedData:s}=F(),{formatMessage:l}=(0,v.A)(),[{collapses:y},x]=(0,e.useReducer)(Ue,We,M=>fe(M,s)),T=M=>x({type:"TOGGLE_COLLAPSE",index:M});return e.createElement(h.s,{direction:"column",alignItems:"stretch",gap:1},y.map((M,D)=>e.createElement(X.n,{expanded:M.isOpen,onToggle:()=>T(D),key:M.name,variant:D%2===0?"secondary":void 0},e.createElement(V.P,{title:se(M.name),description:l({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:M.name}),variant:D%2?"primary":"secondary"}),e.createElement(ce.u,null,e.createElement($e,{permissions:s[M.name],name:M.name})))))};var Ke=t(77965),we=t.n(Ke),ze=t(6223),Fe=t.n(ze),Ge=t(34542),He=t.n(Ge),Ve=t(61468),Je=t.n(Ve);const Qe=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},ke=(0,ee.Ay)(G.a)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function me({route:s}){const{formatMessage:l}=(0,v.A)(),{method:y,handler:x,path:T}=s,M=T?Je()(T.split("/")):[],[D="",j=""]=x?x.split("."):[],O=Qe(s.method);return e.createElement(h.s,{direction:"column",alignItems:"stretch",gap:2},e.createElement(u.o,{variant:"delta",as:"h3"},l({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,D),e.createElement(u.o,{variant:"delta",textColor:"primary600"},".",j)),e.createElement(h.s,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(ke,{background:O.background,borderColor:O.border,padding:2},e.createElement(u.o,{fontWeight:"bold",textColor:O.text},y)),e.createElement(G.a,{paddingLeft:2,paddingRight:2},He()(M,B=>e.createElement(u.o,{key:B,textColor:B.includes(":")?"neutral600":"neutral900"},"/",B)))))}me.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},me.propTypes={route:P().shape({handler:P().string,method:P().string,path:P().string})};const Ye=me,Ze=()=>{const{formatMessage:s}=(0,v.A)(),{selectedAction:l,routes:y}=F(),x=Fe()(l.split("."),"controllers"),T=oe()(y,x[0]),M=x.slice(1).join("."),D=we()(T)?[]:T.filter(j=>j.handler.endsWith(M));return e.createElement(E.E,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},l?e.createElement(h.s,{direction:"column",alignItems:"stretch",gap:2},D.map((j,O)=>e.createElement(Ye,{key:O,route:j}))):e.createElement(h.s,{direction:"column",alignItems:"stretch",gap:2},e.createElement(u.o,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(u.o,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Xe=(s,l,y)=>({...s,initialData:l,modifiedData:l,routes:y});var qe=t(48940),Ce=t.n(qe),_e=t(501),et=t.n(_e);const tt={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},nt=(s,l)=>(0,xe.Ay)(s,y=>{switch(l.type){case"ON_CHANGE":{const x=l.keys.length,T=l.keys[x-1]==="enabled";if(l.value&&T){const M=et()(l.keys,x-1).join(".");y.selectedAction=M}Ce()(y,["modifiedData",...l.keys],l.value);break}case"ON_CHANGE_SELECT_ALL":{const x=["modifiedData",...l.keys],T=oe()(s,x,{}),M=Object.keys(T).reduce((D,j)=>(D[j]={...T[j],enabled:l.value},D),{});Ce()(y,x,M);break}case"ON_RESET":{y.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{y.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:x}=l;y.selectedAction=x===s.selectedAction?"":x;break}default:return y}}),Me=(0,e.forwardRef)(({permissions:s,routes:l},y)=>{const{formatMessage:x}=(0,v.A)(),[T,M]=(0,e.useReducer)(nt,tt,I=>Xe(I,s,l));(0,e.useImperativeHandle)(y,()=>({getPermissions(){return{permissions:T.modifiedData}},resetForm(){M({type:"ON_RESET"})},setFormAfterSubmit(){M({type:"ON_SUBMIT_SUCCEEDED"})}}));const B={...T,onChange:({target:{name:I,value:W}})=>M({type:"ON_CHANGE",keys:I.split("."),value:W==="empty__string_value"?"":W}),onChangeSelectAll:({target:{name:I,value:W}})=>M({type:"ON_CHANGE_SELECT_ALL",keys:I.split("."),value:W}),onSelectedAction:I=>M({type:"SELECT_ACTION",actionToSelect:I})};return e.createElement($,{value:B},e.createElement(L.x,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(E.E,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(h.s,{direction:"column",alignItems:"stretch",gap:6},e.createElement(h.s,{direction:"column",alignItems:"stretch",gap:2},e.createElement(u.o,{variant:"delta",as:"h2"},x({id:(0,U.A)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(u.o,{as:"p",textColor:"neutral600"},x({id:(0,U.A)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(Ne,null))),e.createElement(Ze,null)))});Me.propTypes={permissions:P().object.isRequired,routes:P().object.isRequired};const Ae=(0,e.memo)(Me);var ge=t(12083);const Re=ge.Ik().shape({name:ge.Yj().required(n.iW.required),description:ge.Yj().required(n.iW.required)});var te=t(46215);const Pe=()=>{const s=(0,n.hN)(),{get:l}=(0,n.ry)(),{formatAPIError:y}=(0,n.wq)(te.gT),[{data:x,isLoading:T,error:M,refetch:D},{data:j,isLoading:O,error:B,refetch:I}]=(0,b.useQueries)([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:N}}=await l("/users-permissions/permissions");return N}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:N}}=await l("/users-permissions/routes");return N}}]),W=async()=>{await Promise.all([D(),I()])};(0,e.useEffect)(()=>{M&&s({type:"warning",message:y(M)})},[s,M,y]),(0,e.useEffect)(()=>{B&&s({type:"warning",message:y(B)})},[s,B,y]);const R=T||O;return{permissions:x?(0,te.mr)(x):{},routes:j??{},getData:W,isLoading:R}},st=()=>{const{formatMessage:s}=(0,v.A)(),l=(0,n.hN)(),{goBack:y}=(0,a.W6)(),{lockApp:x,unlockApp:T}=(0,n.MA)(),{isLoading:M,permissions:D,routes:j}=Pe(),{trackUsage:O}=(0,n.z1)(),B=e.useRef(),{post:I}=(0,n.ry)(),W=(0,b.useMutation)(N=>I("/users-permissions/roles",N),{onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})},onSuccess(){O("didCreateRole"),l({type:"success",message:{id:(0,U.A)("Settings.roles.created"),defaultMessage:"Role created"}}),y()}}),R=async N=>{x();const z=B.current.getPermissions();await W.mutate({...N,...z,users:[]}),T()};return e.createElement(o.g,null,e.createElement(n.x7,{name:"Roles"}),e.createElement(C.l1,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:R,validationSchema:Re},({handleSubmit:N,values:z,handleChange:Y,errors:K})=>e.createElement(n.lV,{noValidate:!0,onSubmit:N},e.createElement(d.Q,{primaryAction:!M&&e.createElement(i.$,{type:"submit",loading:W.isLoading,startIcon:e.createElement(A.A,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(f.s,null,e.createElement(h.s,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow"},e.createElement(h.s,{direction:"column",alignItems:"stretch"},e.createElement(u.o,{variant:"delta",as:"h2"},s({id:(0,U.A)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(L.x,{gap:4},e.createElement(E.E,{col:6},e.createElement(c.k,{name:"name",value:z.name||"",onChange:Y,label:s({id:"global.name",defaultMessage:"Name"}),error:K?.name?s({id:K.name,defaultMessage:"Name is required"}):!1,required:!0})),e.createElement(E.E,{col:6},e.createElement(m.T,{id:"description",value:z.description||"",onChange:Y,label:s({id:"global.description",defaultMessage:"Description"}),error:K?.description?s({id:K.description,defaultMessage:"Description is required"}):!1,required:!0})))),!M&&e.createElement(Ae,{ref:B,permissions:D,routes:j}))))))},at=()=>e.createElement(n.kz,{permissions:r.J.createRole},e.createElement(st,null));var rt=t(46270);const ot=()=>{const{formatMessage:s}=(0,v.A)(),l=(0,n.hN)(),{lockApp:y,unlockApp:x}=(0,n.MA)(),{params:{id:T}}=(0,a.W5)("/settings/users-permissions/roles/:id"),{get:M}=(0,n.ry)(),{isLoading:D,routes:j}=Pe(),{data:O,isLoading:B,refetch:I}=(0,b.useQuery)(["users-permissions","role",T],async()=>{const{data:{role:K}}=await M(`/users-permissions/roles/${T}`);return K}),W=e.useRef(),{put:R}=(0,n.ry)(),{formatAPIError:N}=(0,n.wq)(),z=(0,b.useMutation)(K=>R(`/users-permissions/roles/${T}`,K),{onError(K){l({type:"warning",message:N(K)})},async onSuccess(){l({type:"success",message:{id:(0,U.A)("Settings.roles.created"),defaultMessage:"Role edited"}}),await I()}}),Y=async K=>{y();const J=W.current.getPermissions();await z.mutate({...K,...J,users:[]}),x()};return B?e.createElement(n.Bl,null):e.createElement(o.g,null,e.createElement(n.x7,{name:"Roles"}),e.createElement(C.l1,{enableReinitialize:!0,initialValues:{name:O.name,description:O.description},onSubmit:Y,validationSchema:Re},({handleSubmit:K,values:J,handleChange:ie,errors:Z})=>e.createElement(n.lV,{noValidate:!0,onSubmit:K},e.createElement(d.Q,{primaryAction:!D&&e.createElement(i.$,{disabled:O.code==="strapi-super-admin",type:"submit",loading:z.isLoading,startIcon:e.createElement(A.A,null)},s({id:"global.save",defaultMessage:"Save"})),title:O.name,subtitle:O.description,navigationAction:e.createElement(n.N_,{startIcon:e.createElement(rt.A,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(f.s,null,e.createElement(h.s,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow"},e.createElement(h.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(u.o,{variant:"delta",as:"h2"},s({id:(0,U.A)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(L.x,{gap:4},e.createElement(E.E,{col:6},e.createElement(c.k,{name:"name",value:J.name||"",onChange:ie,label:s({id:"global.name",defaultMessage:"Name"}),error:Z?.name?s({id:Z.name,defaultMessage:"Name is required"}):!1,required:!0})),e.createElement(E.E,{col:6},e.createElement(m.T,{id:"description",value:J.description||"",onChange:ie,label:s({id:"global.description",defaultMessage:"Description"}),error:Z?.description?s({id:Z.description,defaultMessage:"Description is required"}):!1,required:!0})))),!D&&e.createElement(Ae,{ref:W,permissions:O.permissions,routes:j}))))))},it=()=>e.createElement(n.kz,{permissions:r.J.updateRole},e.createElement(ot,null));var lt=t(11273),ct=t(42455),dt=t(74773),ut=t(35513),mt=t(26127),Le=t(90361),H=t(33363),gt=t(5194),pt=t(64871),ht=t(25641),ft=t(88353),Et=t(41909),vt=t(50612);const yt=(0,ee.Ay)(pt.N)`
  align-items: center;
  height: ${(0,n.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:s})=>`${s.spaces[2]}}`};
  width: ${(0,n.a8)(32)};

  svg {
    height: ${(0,n.a8)(12)};
    width: ${(0,n.a8)(12)};

    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:s})=>s.colors.neutral800};
      }
    }
  }
`,pe=({sortedRoles:s,canDelete:l,permissions:y,setRoleToDelete:x,onDelete:T})=>{const{formatMessage:M}=(0,v.A)(),{push:D}=(0,a.W6)(),[j,O]=T,B=R=>l&&!["public","authenticated"].includes(R.type),I=R=>{x(R),O(!j)},W=R=>{D(`/settings/users-permissions/roles/${R}`)};return e.createElement(ht.N,null,s?.map(R=>e.createElement(Le.Tr,{key:R.name,...(0,n.qM)({fn:()=>W(R.id)})},e.createElement(H.Td,{width:"20%"},e.createElement(u.o,null,R.name)),e.createElement(H.Td,{width:"50%"},e.createElement(u.o,null,R.description)),e.createElement(H.Td,{width:"30%"},e.createElement(u.o,null,M({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:R.nb_users}))),e.createElement(H.Td,null,e.createElement(h.s,{justifyContent:"end",...n.dG},e.createElement(n.d4,{permissions:y.updateRole},e.createElement(yt,{to:`/settings/users-permissions/roles/${R.id}`,"aria-label":M({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${R.name}`})},e.createElement(Et.A,null))),B(R)&&e.createElement(n.d4,{permissions:y.deleteRole},e.createElement(ft.K,{onClick:()=>I(R.id),noBorder:!0,icon:e.createElement(vt.A,null),label:M({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${R.name}`})})))))))},xt=pe;pe.defaultProps={canDelete:!1},pe.propTypes={onDelete:P().array.isRequired,permissions:P().object.isRequired,setRoleToDelete:P().func.isRequired,sortedRoles:P().array.isRequired,canDelete:P().bool};const Ct=async(s,l)=>{try{const{get:y}=(0,n.GD)(),{data:x}=await y("/users-permissions/roles");return l("The roles have loaded successfully"),x}catch(y){throw s({type:"warning",message:{id:"notification.error"}}),new Error(y)}},Mt=async(s,l)=>{try{const{del:y}=(0,n.GD)();await y(`/users-permissions/roles/${s}`)}catch{l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},At=()=>{const{trackUsage:s}=(0,n.z1)(),{formatMessage:l,locale:y}=(0,v.A)(),x=(0,n.hN)(),{notifyStatus:T}=(0,lt.W)(),[{query:M}]=(0,n.sq)(),D=M?._q||"",[j,O]=(0,e.useState)(!1),[B,I]=(0,e.useState)(!1),[W,R]=(0,e.useState)();(0,n.L4)();const{isLoading:N,allowedActions:{canRead:z,canDelete:Y}}=(0,n.ec)({create:r.J.createRole,read:r.J.readRoles,update:r.J.updateRole,delete:r.J.deleteRole}),{isLoading:K,data:{roles:J},isFetching:ie,refetch:Z}=(0,b.useQuery)("get-roles",()=>Ct(x,T),{initialData:{},enabled:z}),{includes:Te}=(0,n.U2)(y,{sensitivity:"base"}),De=(0,n.QM)(y,{sensitivity:"base"}),Oe=K||ie,Lt=()=>{O(!j)},Tt={roles:{id:(0,te.gT)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,te.gT)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Dt=l({id:"global.roles",defaultMessage:"Roles"}),Ot=(0,b.useMutation)(Q=>Mt(Q,x),{async onSuccess(){await Z()}}),jt=async()=>{I(!0),await Ot.mutateAsync(W),O(!j),I(!1)},le=(J||[]).filter(Q=>Te(Q.name,D)||Te(Q.description,D)).sort((Q,je)=>De.compare(Q.name,je.name)||De.compare(Q.description,je.description)),bt=D&&!le.length?"search":"roles",Bt=4,St=(J?.length||0)+1;return e.createElement(ct.P,null,e.createElement(n.x7,{name:Dt}),e.createElement(o.g,{"aria-busy":Oe},e.createElement(d.Q,{title:l({id:"global.roles",defaultMessage:"Roles"}),subtitle:l({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.d4,{permissions:r.J.createRole},e.createElement(n.z9,{to:"/settings/users-permissions/roles/new",onClick:()=>s("willCreateRole"),startIcon:e.createElement(gt.A,null),size:"S"},l({id:(0,te.gT)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(dt.B,{startActions:e.createElement(n.q7,{label:l({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(f.s,null,!z&&e.createElement(n.UW,null),(Oe||N)&&e.createElement(n.Bl,null),z&&le&&le?.length?e.createElement(ut.X,{colCount:Bt,rowCount:St},e.createElement(mt.d,null,e.createElement(Le.Tr,null,e.createElement(H.Th,null,e.createElement(u.o,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(H.Th,null,e.createElement(u.o,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"Description"}))),e.createElement(H.Th,null,e.createElement(u.o,{variant:"sigma",textColor:"neutral600"},l({id:"global.users",defaultMessage:"Users"}))),e.createElement(H.Th,null,e.createElement(_.s,null,l({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(xt,{sortedRoles:le,canDelete:Y,permissions:r.J,setRoleToDelete:R,onDelete:[j,O]})):e.createElement(n.pA,{content:Tt[bt]})),e.createElement(n.TM,{isConfirmButtonLoading:B,onConfirm:jt,onToggleDialog:Lt,isOpen:j})))},Rt=()=>e.createElement(n.kz,{permissions:r.J.accessRoles},e.createElement(At,null)),Pt=()=>e.createElement(n.kz,{permissions:r.J.accessRoles},e.createElement(a.dO,null,e.createElement(a.qh,{path:"/settings/users-permissions/roles/new",component:at,exact:!0}),e.createElement(a.qh,{path:"/settings/users-permissions/roles/:id",component:it,exact:!0}),e.createElement(a.qh,{path:"/settings/users-permissions/roles",component:Rt,exact:!0}),e.createElement(a.qh,{path:"",component:n.hH})))},46215:(p,g,t)=>{"use strict";t.d(g,{mr:()=>r,gT:()=>o.A});var e=t(77965),n=t.n(e);const r=d=>Object.keys(d).reduce((i,f)=>{const h=d[f].controllers,u=Object.keys(h).reduce((L,E)=>(n()(h[E])||(L[E]=h[E]),L),{});return n()(u)||(i[f]={controllers:u}),i},{});var o=t(34075)},83289:(p,g,t)=>{var e=t(80151);function n(a,r){var o=a==null?0:a.length;return!!o&&e(a,r,0)>-1}p.exports=n},96685:p=>{function g(t,e,n){for(var a=-1,r=t==null?0:t.length;++a<r;)if(n(e,t[a]))return!0;return!1}p.exports=g},60759:(p,g,t)=>{var e=t(48143),n=t(83289),a=t(96685),r=t(87864),o=t(52689),d=t(37879),i=200;function f(h,u,L,E){var c=-1,m=n,A=!0,C=h.length,v=[],b=u.length;if(!C)return v;L&&(u=r(u,o(L))),E?(m=a,A=!1):u.length>=i&&(m=d,A=!1,u=new e(u));e:for(;++c<C;){var S=h[c],P=L==null?S:L(S);if(S=E||S!==0?S:0,A&&P===P){for(var w=b;w--;)if(u[w]===P)continue e;v.push(S)}else m(u,P,E)||v.push(S)}return v}p.exports=f},97449:(p,g,t)=>{var e=t(85373),n=t(75821),a=n(e);p.exports=a},97079:p=>{function g(t,e,n,a){for(var r=t.length,o=n+(a?1:-1);a?o--:++o<r;)if(e(t[o],o,t))return o;return-1}p.exports=g},80151:(p,g,t)=>{var e=t(97079),n=t(73155),a=t(77771);function r(o,d,i){return d===d?a(o,d,i):e(o,n,i)}p.exports=r},73155:p=>{function g(t){return t!==t}p.exports=g},29884:(p,g,t)=>{var e=t(97449),n=t(91522);function a(r,o){var d=-1,i=n(r)?Array(r.length):[];return e(r,function(f,h,u){i[++d]=o(f,h,u)}),i}p.exports=a},4191:(p,g,t)=>{var e=t(87864),n=t(86386),a=t(45353),r=t(29884),o=t(74565),d=t(52689),i=t(48126),f=t(82388),h=t(82261);function u(L,E,c){E.length?E=e(E,function(C){return h(C)?function(v){return n(v,C.length===1?C[0]:C)}:C}):E=[f];var m=-1;E=e(E,d(a));var A=r(L,function(C,v,b){var S=e(E,function(P){return P(C)});return{criteria:S,index:++m,value:C}});return o(A,function(C,v){return i(C,v,c)})}p.exports=u},74565:p=>{function g(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}p.exports=g},64958:(p,g,t)=>{var e=t(91662);function n(a,r){if(a!==r){var o=a!==void 0,d=a===null,i=a===a,f=e(a),h=r!==void 0,u=r===null,L=r===r,E=e(r);if(!u&&!E&&!f&&a>r||f&&h&&L&&!u&&!E||d&&h&&L||!o&&L||!i)return 1;if(!d&&!f&&!E&&a<r||E&&o&&i&&!d&&!f||u&&o&&i||!h&&i||!L)return-1}return 0}p.exports=n},48126:(p,g,t)=>{var e=t(64958);function n(a,r,o){for(var d=-1,i=a.criteria,f=r.criteria,h=i.length,u=o.length;++d<h;){var L=e(i[d],f[d]);if(L){if(d>=u)return L;var E=o[d];return L*(E=="desc"?-1:1)}}return a.index-r.index}p.exports=n},75821:(p,g,t)=>{var e=t(91522);function n(a,r){return function(o,d){if(o==null)return o;if(!e(o))return a(o,d);for(var i=o.length,f=r?i:-1,h=Object(o);(r?f--:++f<i)&&d(h[f],f,h)!==!1;);return o}}p.exports=n},77771:p=>{function g(t,e,n){for(var a=n-1,r=t.length;++a<r;)if(t[a]===e)return a;return-1}p.exports=g},34542:(p,g,t)=>{var e=t(87864),n=t(45353),a=t(29884),r=t(82261);function o(d,i){var f=r(d)?e:a;return f(d,n(i,3))}p.exports=o},45635:(p,g,t)=>{var e=t(87212),n=t(4191),a=t(39226),r=t(3956),o=a(function(d,i){if(d==null)return[];var f=i.length;return f>1&&r(d,i[0],i[1])?i=[]:f>2&&r(i[0],i[1],i[2])&&(i=[i[0]]),n(d,e(i,1),[])});p.exports=o},61468:(p,g,t)=>{var e=t(52196);function n(a){var r=a==null?0:a.length;return r?e(a,1,r):[]}p.exports=n},501:(p,g,t)=>{var e=t(52196),n=t(88765);function a(r,o,d){return r&&r.length?(o=d||o===void 0?1:n(o),e(r,0,o<0?0:o)):[]}p.exports=a},6223:(p,g,t)=>{var e=t(60759),n=t(39226),a=t(56793),r=n(function(o,d){return a(o)?e(o,d):[]});p.exports=r},57237:(p,g,t)=>{"use strict";t.d(g,{I:()=>u,n:()=>E});var e=t(92132),n=t(21272),a=t(79793),r=t(97366),o=t(84175),d=t(30893),i=t(83997),f=t(94061);const h=({theme:c,expanded:m,variant:A,disabled:C,error:v})=>v?`1px solid ${c.colors.danger600} !important`:C?`1px solid ${c.colors.neutral150}`:m?`1px solid ${c.colors.primary600}`:A==="primary"?`1px solid ${c.colors.neutral0}`:`1px solid ${c.colors.neutral100}`,u=(0,a.Ay)(d.o)``,L=(0,a.Ay)(f.a)`
  border: ${h};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    ${u} {
      color: ${({theme:c,expanded:m})=>m?void 0:c.colors.primary700};
    }

    ${d.o} {
      color: ${({theme:c,expanded:m})=>m?void 0:c.colors.primary600};
    }

    & > ${i.s} {
      background: ${({theme:c})=>c.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:c})=>c.colors.primary200};
    }
  }
`,E=({children:c,disabled:m=!1,error:A,expanded:C=!1,hasErrorMessage:v=!0,id:b,onToggle:S,toggle:P,size:w="M",variant:$="primary",shadow:F})=>{const U=(0,o.B)(b),X=n.useMemo(()=>({expanded:C,onToggle:S,toggle:P,id:U,size:w,variant:$,disabled:m}),[m,C,U,S,w,P,$]);return(0,e.jsxs)(r.C.Provider,{value:X,children:[(0,e.jsx)(L,{"data-strapi-expanded":C,disabled:m,"aria-disabled":m,expanded:C,hasRadius:!0,variant:$,error:A,shadow:F,children:c}),A&&v&&(0,e.jsx)(f.a,{paddingTop:1,children:(0,e.jsx)(d.o,{variant:"pi",textColor:"danger600",children:A})})]})}},44604:(p,g,t)=>{"use strict";t.d(g,{u:()=>r});var e=t(92132),n=t(97366),a=t(94061);const r=({children:o,...d})=>{const{expanded:i,id:f}=(0,n.O)();if(!i)return null;const h=`accordion-content-${f}`,u=`accordion-label-${f}`,L=`accordion-desc-${f}`;return(0,e.jsx)(a.a,{role:"region",id:h,"aria-labelledby":u,"aria-describedby":L,...d,children:o})}},97366:(p,g,t)=>{"use strict";t.d(g,{C:()=>n,O:()=>a});var e=t(21272);const n=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),a=()=>(0,e.useContext)(n)},60888:(p,g,t)=>{"use strict";t.d(g,{P:()=>c});var e=t(92132),n=t(9005),a=t(79793),r=t(57237),o=t(97366);const d=({expanded:m,disabled:A,variant:C})=>{let v="neutral100";return m?v="primary100":A?v="neutral150":C==="primary"&&(v="neutral0"),v};var i=t(18629),f=t(58805),h=t(83997),u=t(30893);const L=(0,a.Ay)(i.Q)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:m,expanded:A})=>A?m.colors.primary600:m.colors.neutral500};
    }
  }
`,E=(0,a.Ay)(h.s)`
  min-height: ${({theme:m,size:A})=>m.sizes.accordions[A]};
  border-radius: ${({theme:m,expanded:A})=>A?`${m.borderRadius} ${m.borderRadius} 0 0`:m.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:m})=>m.colors.primary600};
      }
    }
  }
`,c=({title:m,description:A,as:C="span",togglePosition:v="right",action:b,...S})=>{const{onToggle:P,toggle:w,expanded:$,id:F,size:U,variant:X,disabled:V}=(0,o.O)(),ce=`accordion-content-${F}`,ne=`accordion-label-${F}`,de=`accordion-desc-${F}`,k=U==="M"?6:4,se=U==="M"?k:k-2,he=d({expanded:$,disabled:V,variant:X}),G={as:C,fontWeight:U==="S"?"bold":void 0,id:ne,textColor:$?"primary600":"neutral700",ellipsis:!0,variant:U==="M"?"delta":void 0},ue=$?"primary600":"neutral600",ae=$?"primary200":"neutral200",q=U==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{V||(w&&!P?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),w()):P&&P())},re=(0,e.jsx)(h.s,{justifyContent:"center",borderRadius:"50%",height:q,width:q,transform:$?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ae,cursor:V?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(f.I,{as:n.A,width:U==="M"?`${11/16}rem`:`${8/16}rem`,color:$?"primary600":"neutral600"})});return(0,e.jsx)(E,{paddingBottom:se,paddingLeft:k,paddingRight:k,paddingTop:se,background:he,expanded:$,size:U,justifyContent:"space-between",cursor:V?"not-allowed":"",children:(0,e.jsxs)(h.s,{gap:3,flex:1,maxWidth:"100%",children:[v==="left"&&re,(0,e.jsx)(L,{onClick:_,"aria-disabled":V,"aria-expanded":$,"aria-controls":ce,"aria-labelledby":ne,"data-strapi-accordion-toggle":!0,expanded:$,type:"button",flex:1,minWidth:0,...S,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.I,{...G,children:m}),A&&(0,e.jsx)(u.o,{as:"p",id:de,textColor:ue,children:A})]})}),v==="right"&&(0,e.jsxs)(h.s,{gap:3,children:[re,b]}),v==="left"&&b]})})}},74773:(p,g,t)=>{"use strict";t.d(g,{B:()=>a});var e=t(92132),n=t(83997);const a=({startActions:r,endActions:o})=>!r&&!o?null:(0,e.jsxs)(n.s,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.s,{gap:2,wrap:"wrap",children:r}),(0,e.jsx)(n.s,{gap:2,shrink:0,wrap:"wrap",children:o})]})},4198:(p,g,t)=>{"use strict";t.d(g,{s:()=>a});var e=t(92132),n=t(94061);const a=({children:r})=>(0,e.jsx)(n.a,{paddingLeft:10,paddingRight:10,children:r})},55356:(p,g,t)=>{"use strict";t.d(g,{$:()=>E,Q:()=>u});var e=t(92132),n=t(21272),a=t(79793);const r=c=>{const m=(0,n.useRef)(null),[A,C]=(0,n.useState)(!0),v=([b])=>{C(b.isIntersecting)};return(0,n.useEffect)(()=>{const b=m.current,S=new IntersectionObserver(v,c);return b&&S.observe(m.current),()=>{b&&S.disconnect()}},[m,c]),[m,A]};var o=t(23169);const d=(c,m)=>{const A=(0,o.c)(m);(0,n.useLayoutEffect)(()=>{const C=new ResizeObserver(A);return Array.isArray(c)?c.forEach(v=>{v.current&&C.observe(v.current)}):c.current&&C.observe(c.current),()=>{C.disconnect()}},[c,A])};var i=t(94061),f=t(83997),h=t(30893);const u=c=>{const m=(0,n.useRef)(null),[A,C]=(0,n.useState)(null),[v,b]=r({root:null,rootMargin:"0px",threshold:0});return d(v,()=>{v.current&&C(v.current.getBoundingClientRect())}),(0,n.useEffect)(()=>{m.current&&C(m.current.getBoundingClientRect())},[m]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:A?.height},ref:v,children:b&&(0,e.jsx)(E,{ref:m,...c})}),!b&&(0,e.jsx)(E,{...c,sticky:!0,width:A?.width})]})};u.displayName="HeaderLayout";const L=(0,a.Ay)(i.a)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,E=n.forwardRef(({navigationAction:c,primaryAction:m,secondaryAction:A,subtitle:C,title:v,sticky:b,width:S,...P},w)=>{const $=typeof C=="string";return b?(0,e.jsx)(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(f.s,{justifyContent:"space-between",children:[(0,e.jsxs)(f.s,{children:[c&&(0,e.jsx)(i.a,{paddingRight:3,children:c}),(0,e.jsxs)(i.a,{children:[(0,e.jsx)(h.o,{variant:"beta",as:"h1",...P,children:v}),$?(0,e.jsx)(h.o,{variant:"pi",textColor:"neutral600",children:C}):C]}),A?(0,e.jsx)(i.a,{paddingLeft:4,children:A}):null]}),(0,e.jsx)(f.s,{children:m?(0,e.jsx)(i.a,{paddingLeft:2,children:m}):void 0})]})}):(0,e.jsxs)(i.a,{ref:w,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,e.jsx)(i.a,{paddingBottom:2,children:c}):null,(0,e.jsxs)(f.s,{justifyContent:"space-between",children:[(0,e.jsxs)(f.s,{minWidth:0,children:[(0,e.jsx)(h.o,{as:"h1",variant:"alpha",...P,children:v}),A?(0,e.jsx)(i.a,{paddingLeft:4,children:A}):null]}),m]}),$?(0,e.jsx)(h.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:C}):C]})})},42455:(p,g,t)=>{"use strict";t.d(g,{P:()=>d});var e=t(92132),n=t(79793),a=t(94061);const r=(0,n.Ay)(a.a)`
  display: grid;
  grid-template-columns: ${({hasSideNav:i})=>i?"auto 1fr":"1fr"};
`,o=(0,n.Ay)(a.a)`
  overflow-x: hidden;
`,d=({sideNav:i,children:f})=>(0,e.jsxs)(r,{hasSideNav:Boolean(i),children:[i,(0,e.jsx)(o,{paddingBottom:10,children:f})]})},64871:(p,g,t)=>{"use strict";t.d(g,{N:()=>L});var e=t(92132),n=t(21272),a=t(14595),r=t(71389),o=t(79793),d=t(78732),i=t(30893),f=t(94061);const h=o.Ay.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:E})=>E?"none":void 0};
  color: ${({disabled:E,theme:c})=>E?c.colors.neutral600:c.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${i.o} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:E})=>E.colors.primary500};
  }

  &:active {
    color: ${({theme:E})=>E.colors.primary700};
  }

  ${d.AP};
`,u=(0,o.Ay)(f.a)`
  display: flex;
`,L=n.forwardRef(({children:E,href:c,to:m,disabled:A=!1,startIcon:C,endIcon:v,...b},S)=>{const P=c?"_blank":void 0,w=c?"noreferrer noopener":void 0;return(0,e.jsxs)(h,{as:m&&!A?r.k2:"a",target:P,rel:w,to:A?void 0:m,href:A?"#":c,disabled:A,ref:S,...b,children:[C&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingRight:2,children:C}),(0,e.jsx)(i.o,{children:E}),v&&!c&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingLeft:2,children:v}),c&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(a.A,{})})]})})},38413:(p,g,t)=>{"use strict";t.d(g,{g:()=>o});var e=t(92132),n=t(79793),a=t(94061);const r=(0,n.Ay)(a.a)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,o=({labelledBy:d="main-content-title",...i})=>(0,e.jsx)(r,{"aria-labelledby":d,as:"main",id:"main-content",tabIndex:-1,...i})},46270:(p,g,t)=>{"use strict";t.d(g,{A:()=>a});var e=t(92132);const n=r=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=n},20415:(p,g,t)=>{"use strict";t.d(g,{A:()=>a});var e=t(92132);const n=r=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),a=n}}]);
