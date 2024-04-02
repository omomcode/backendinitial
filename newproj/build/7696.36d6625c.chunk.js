"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[7696],{47696:(v,i,e)=>{e.r(i),e.d(i,{REVIEW_WORKFLOW_FILTERS:()=>L});var o=e(98342),t=e(21272),T=e(76517),O=e(80782),r=e(33544),n=e.n(r),s=e(54894),l=e(58900),E=e(13252);const a=({value:d,onChange:m})=>{const{formatMessage:R}=(0,s.A)(),{users:C,isLoading:p}=(0,E.F)();return t.createElement(T.G3,{value:d,"aria-label":R({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select an user to filter"}),onChange:m,loading:p},C.map(g=>t.createElement(O.j,{key:g.id,value:g.id.toString()},(0,l.M)(g,R))))};a.propTypes={onChange:n().func.isRequired,value:n().string},a.defaultProps={value:""};var u=e(48323),c=e(83997),S=e(30893),A=e(43064),f=e(78101),w=e(30405);const W=({value:d,onChange:m,uid:R})=>{const{formatMessage:C}=(0,s.A)(),{workflows:[p],isLoading:g}=(0,f.W)({filters:{contentTypes:R}});return t.createElement(u.Z,{"aria-label":C({id:"content-manager.components.Filters.reviewWorkflows.label",defaultMessage:"Search and select an workflow stage to filter"}),value:d,onChange:m,loading:g,customizeContent:()=>t.createElement(c.s,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement(S.o,{textColor:"neutral800",ellipsis:!0},d),g?t.createElement(A.a,{small:!0,style:{display:"flex"}}):null)},(p?.stages??[]).map(({id:P,color:_,name:I})=>{const{themeColorName:y}=(0,w.w)(_);return t.createElement(u.eY,{key:P,startIcon:t.createElement(c.s,{height:2,background:_,borderColor:y==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:I},I)}))};W.defaultProps={value:""},W.propTypes={onChange:n().func.isRequired,uid:n().string.isRequired,value:n().string};const L=[{fieldSchema:{type:"relation",mainField:{name:"name",schema:{type:"string"}}},metadatas:{customInput:W,label:{id:(0,o.gT)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}},name:"strapi_stage"},{fieldSchema:{type:"relation",mainField:{name:"id",schema:{type:"int"}}},metadatas:{customInput:a,customOperators:[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],label:{id:(0,o.gT)("containers.ListPage.table-headers.reviewWorkflows.assignee.label"),defaultMessage:"Assignee"}},name:"strapi_assignee"}]},11714:(v,i,e)=>{e.d(i,{Ae:()=>A,Al:()=>c,Cx:()=>a,Dp:()=>m,T1:()=>l,TE:()=>L,U:()=>E,YT:()=>u,Yy:()=>n,aM:()=>O,fR:()=>T,h$:()=>f,hH:()=>W,hK:()=>d,iz:()=>r,oA:()=>w,p6:()=>t,pq:()=>S,sT:()=>s});var o=e(57438);const t="settings_review-workflows",T="Settings/Review_Workflows/RESET_WORKFLOW",O="Settings/Review_Workflows/SET_CONTENT_TYPES",r="Settings/Review_Workflows/SET_IS_LOADING",n="Settings/Review_Workflows/SET_ROLES",s="Settings/Review_Workflows/SET_WORKFLOW",l="Settings/Review_Workflows/SET_WORKFLOWS",E="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",a="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",u="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",c="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",S="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",A="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",f="Settings/Review_Workflows/WORKFLOW_UPDATE",w={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},W=o._.colors.primary600,L={STAGE:"stage"},d="numberOfWorkflows",m="stagesPerWorkflow"},78101:(v,i,e)=>{e.d(i,{W:()=>O});var o=e(21272),t=e(80403),T=e(74930);function O(r={}){const{get:n}=(0,t.ry)(),{id:s="",...l}=r,E={populate:"stages"},{data:a,isLoading:u,status:c,refetch:S}=(0,T.useQuery)(["review-workflows","workflows",s],async()=>(await n(`/admin/review-workflows/workflows/${s}`,{params:{...E,...l}})).data),A=o.useMemo(()=>s&&a?.data?[a.data]:Array.isArray(a?.data)?a.data:[],[a?.data,s]);return{meta:o.useMemo(()=>a?.meta??{},[a?.meta]),workflows:A,isLoading:u,status:c,refetch:S}}},30405:(v,i,e)=>{e.d(i,{M:()=>O,w:()=>T});var o=e(57438),t=e(11714);function T(r){if(!r)return null;const s=Object.entries(o._.colors).filter(([,l])=>l.toUpperCase()===r.toUpperCase()).reduce((l,[E])=>(t.oA?.[E]&&(l=E),l),null);return s?{themeColorName:s,name:t.oA[s]}:null}function O(){return Object.entries(t.oA).map(([r,n])=>({hex:o._.colors[r].toUpperCase(),name:n}))}}}]);
