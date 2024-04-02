"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[6737],{86085:(y,l,e)=>{e.d(l,{E:()=>d});var t=e(21272),O=e(80403),E=e(74930);const d=(m={})=>{const{get:_}=(0,O.ry)(),{data:a,isLoading:n}=(0,E.useQuery)(["ee","providers"],async()=>{const{data:c}=await _("/admin/providers");return c},m);return{providers:t.useMemo(()=>a??[],[a]),isLoading:n}}},26737:(y,l,e)=>{e.r(l),e.d(l,{LoginEE:()=>i});var t=e(21272),O=e(48653),E=e(94061),d=e(83997),m=e(30893),_=e(33544),a=e.n(_),n=e(54894),D=e(79793),c=e(11679),u=e(62093),M=e(86085),A=e(40811);const o=(0,D.Ay)(O.c)`
  flex: 1;
`,i=P=>{const{formatMessage:s}=(0,n.A)(),{isLoading:g,providers:p}=(0,M.E)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&p.length===0?t.createElement(c.Zj,null,t.createElement(u.A,{...P})):t.createElement(c.Zj,null,t.createElement(u.A,{...P},t.createElement(E.a,{paddingTop:7},t.createElement(d.s,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.s,null,t.createElement(o,null),t.createElement(E.a,{paddingLeft:3,paddingRight:3},t.createElement(m.o,{variant:"sigma",textColor:"neutral600"},s({id:"Auth.login.sso.divider"}))),t.createElement(o,null)),t.createElement(A.A,{providers:p,displayAllProviders:!1})))))};i.defaultProps={onSubmit:P=>P.preventDefault(),requestError:null},i.propTypes={formErrors:a().object.isRequired,modifiedData:a().object.isRequired,onChange:a().func.isRequired,onSubmit:a().func,requestError:a().object}},40811:(y,l,e)=>{e.d(l,{A:()=>P});var t=e(21272),O=e(83997),E=e(79739),d=e(30893),m=e(90151),_=e(68074),a=e(33544),n=e.n(a),D=e(54894),c=e(71389),u=e(79793);const M=u.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,A=(0,u.Ay)(O.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,o=({provider:s})=>t.createElement(E.m,{label:s.displayName},t.createElement(M,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?t.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.o,null,s.displayName)));o.propTypes={provider:n().shape({icon:n().string,displayName:n().string.isRequired,uid:n().string.isRequired}).isRequired};const i=({providers:s,displayAllProviders:g})=>{const{formatMessage:p}=(0,D.A)();return g?t.createElement(m.x,{gap:4},s.map(r=>t.createElement(_.E,{key:r.uid,col:4},t.createElement(o,{provider:r})))):s.length>2&&!g?t.createElement(m.x,{gap:4},s.slice(0,2).map(r=>t.createElement(_.E,{key:r.uid,col:4},t.createElement(o,{provider:r}))),t.createElement(_.E,{col:4},t.createElement(E.m,{label:p({id:"global.see-more"})},t.createElement(M,{as:c.N_,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(A,{justifyContent:"center"},s.map(r=>t.createElement(o,{key:r.uid,provider:r})))};i.defaultProps={displayAllProviders:!0},i.propTypes={providers:n().arrayOf(n().object).isRequired,displayAllProviders:n().bool};const P=i}}]);
