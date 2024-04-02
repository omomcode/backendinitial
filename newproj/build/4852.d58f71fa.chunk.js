"use strict";(self.webpackChunknewproj=self.webpackChunknewproj||[]).push([[4852],{14852:(Se,G,a)=>{a.r(G),a.d(G,{default:()=>ce});var e=a(92132),k=a(13034),K=a(39197),X=a(42455),Y=a(4198),q=a(94061),u=a(30893),W=a(90151),s=a(68074),_=a(4181),C=a(85963),y=a(5287),t=a(21272),T=a(80403);const x={getAllLegals:async()=>{try{return await(0,T.l1)("/omcommerce/legal/find",{method:"GET"})}catch(l){console.error(l)}},addLegal:async l=>{try{return await(0,T.l1)("/omcommerce/legal/create",{method:"POST",body:JSON.parse(JSON.stringify(l))})}catch(o){console.error(o)}},editLegal:async(l,o)=>{try{return await(0,T.l1)(`/omcommerce/legal/update/${l}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.parse(JSON.stringify(o))})}catch(g){console.error(g)}}};var ee=a(61485),ne=a(99248),ae=a(6239),$=a(76021),h=a(3036),te=a(64210),se=a(67030);function le({handleRulesShow:l,setRadioOne:o,setRadioTwo:g,setRestockingFee:c,radioOne:v,radioTwo:P,restockingFee:p,editLegal:j}){const[O,E]=(0,t.useState)(null),F=async r=>{r.preventDefault(),r.stopPropagation();try{if(!L())return;A(),l()}catch(m){console.error("Error:",m)}},A=()=>{},S=r=>{const{name:m,value:f}=r.target;c(I=>parseInt(f,10)),E(null)},L=()=>isNaN(p)||p<0?(E("Enter a valid restocking fee percentage"),!1):!0;return(0,e.jsxs)(ee.k,{onClose:l,labelledBy:"title",as:"form",onSubmit:F,children:[(0,e.jsx)(ne.r,{children:(0,e.jsx)(u.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:"Return Rules"})}),(0,e.jsx)(ae.c,{children:(0,e.jsxs)(W.x,{padding:1,children:[(0,e.jsx)(s.E,{padding:1,col:8,children:(0,e.jsx)(u.o,{variant:"beta",id:"return-window",children:"Return window"})}),(0,e.jsx)(s.E,{padding:1,col:8,children:(0,e.jsxs)($.z,{labelledBy:"return-window",onChange:r=>o(r.target.value),value:v,name:"radio-one",children:[(0,e.jsx)(h.s,{value:"14 days",children:"14 days"}),(0,e.jsx)(h.s,{value:"30 days",children:"30 days"}),(0,e.jsx)(h.s,{value:"90 days",children:"90 days"}),(0,e.jsx)(h.s,{value:"Unlimited",children:"Unlimited"})]})}),(0,e.jsx)(s.E,{padding:1,col:8,children:(0,e.jsx)(u.o,{variant:"beta",id:"return-shipping-cost",children:"Return shipping cost"})}),(0,e.jsx)(s.E,{padding:1,col:8,children:(0,e.jsxs)($.z,{labelledBy:"return-shipping-cost",onChange:r=>g(r.target.value),value:P,name:"radio-two",children:[(0,e.jsx)(h.s,{value:"Customer provides return shipping",children:"Customer provides return shipping"}),(0,e.jsx)(h.s,{value:"Free return shipping",children:"Free return shipping"}),(0,e.jsx)(h.s,{value:"Flat rate return shipping",children:"Flat rate return shipping"})]})}),(0,e.jsx)(s.E,{padding:1,col:8,children:(0,e.jsx)(u.o,{paddingTop:1,variant:"beta",children:"Restocking fee %"})}),(0,e.jsxs)(s.E,{padding:1,col:8,children:[(0,e.jsx)(te.Q,{name:"restocking-fee",onChange:S,value:p}),O&&(0,e.jsx)(u.o,{textColor:"danger600",children:O})]})]})}),(0,e.jsx)(se.j,{startActions:(0,e.jsx)(C.$,{onClick:l,variant:"tertiary",children:"Cancel"}),endActions:(0,e.jsx)(C.$,{onClick:l,children:"Save Rules"})})]})}const J={id:0,checked:!1,returnWindow:"",returnShippingCost:"",restockingFee:0,returnPolicy:"",privacyPolicy:"",termsOfService:"",shippingPolicy:"",online:""},re=()=>{const[l,o]=(0,t.useState)(!0),[g,c]=(0,t.useState)(0),[v,P]=(0,t.useState)(J.checked),[p,j]=(0,t.useState)(!0),[O,E]=(0,t.useState)(J),[F,A]=(0,t.useState)(!1),[S,L]=(0,t.useState)(),[r,m]=(0,t.useState)(),[f,I]=(0,t.useState)(0),[b,U]=(0,t.useState)(""),[N,z]=(0,t.useState)(""),[D,H]=(0,t.useState)(""),[w,Q]=(0,t.useState)(""),[B,V]=(0,t.useState)("");(0,t.useEffect)(()=>{M().then(n=>console.log(n))},[]);const M=async()=>{p||j(!0);try{const n=await x.getAllLegals();n!==void 0&&(o(!1),E(n),c(n.id),P(()=>n.enabled),V(n.online),L(i=>n.returnWindow),m(i=>n.returnShippingCost),I(i=>n.restockingFee),U(i=>n.returnPolicy),z(i=>n.privacyPolicy),H(i=>n.termsOfService),Q(i=>n.shippingPolicy))}catch(n){console.error("Error fetching data:",n)}finally{j(!1)}},de=async n=>{l?(await x.addLegal(n),o(!1)):await x.editLegal(g,n),await M()},ge=async()=>{p||j(!0);try{l?(await x.addLegal({enabled:v,returnPolicy:b,privacyPolicy:N,termsOfService:D,shippingPolicy:w,restockingFee:f,returnWindow:S,returnShippingCost:r,online:B}),o(!1)):await x.editLegal(g,{enabled:v,returnPolicy:b,privacyPolicy:N,termsOfService:D,shippingPolicy:w,restockingFee:f,returnWindow:S,returnShippingCost:r,online:B}),await M()}catch(n){console.error("Error fetching data:",n)}finally{j(!1)}},he=()=>{P(n=>!n)},pe=()=>{ge().then(n=>console.log(n))},Z=()=>{A(n=>!n)},ue=n=>{const{name:i,value:d}=n.target;U(R=>d)},ve=n=>{const{name:i,value:d}=n.target;z(R=>d)},ye=n=>{const{name:i,value:d}=n.target;H(R=>d)},xe=n=>{const{name:i,value:d}=n.target;Q(R=>d)},je=n=>{const{name:i,value:d}=n.target;V(R=>d)};return(0,e.jsx)(X.P,{children:(0,e.jsx)(Y.s,{children:(0,e.jsxs)(q.a,{padding:"2rem",children:[(0,e.jsx)(u.o,{variant:"beta",children:"Legal"}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsxs)(W.x,{paddingTop:5,gap:5,spacing:5,children:[(0,e.jsx)(s.E,{padding:1,col:8,children:(0,e.jsx)(_.S,{id:"enable",onValueChange:he,value:v,children:"Enable return and refund policy"})}),v&&!p&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.E,{padding:1,col:12}),(0,e.jsx)(s.E,{padding:1,col:12,children:(0,e.jsx)(C.$,{variant:"secondary",onClick:Z,children:"Return Rules"})}),F&&(0,e.jsx)(s.E,{children:(0,e.jsx)(le,{handleRulesShow:Z,setRadioOne:L,setRadioTwo:m,setRestockingFee:I,radioOne:S,radioTwo:r,restockingFee:f,editLegal:de})}),(0,e.jsx)(s.E,{padding:1,col:12,children:(0,e.jsx)(y.T,{label:"Return and refund policy",name:"name",value:b,onChange:ue})})]}),(0,e.jsx)(s.E,{padding:1,col:12,children:(0,e.jsx)(y.T,{label:"Privacy Policy",name:"name",value:N,onChange:ve})}),(0,e.jsx)(s.E,{padding:1,col:12,children:(0,e.jsx)(y.T,{label:"Terms of service",name:"name",value:D,onChange:ye})}),(0,e.jsx)(s.E,{padding:1,col:12,children:(0,e.jsx)(y.T,{label:"Shipping Policy",name:"name",value:w,onChange:xe})}),(0,e.jsx)(s.E,{padding:1,col:12,children:(0,e.jsx)(y.T,{label:"Online Shopping Policy",name:"name",value:B,onChange:je})}),(0,e.jsx)(s.E,{padding:1,col:12,children:(0,e.jsx)(C.$,{variant:"secondary",onClick:pe,children:"Save"})}),")"]})]})})})};var oe=a(30462);const ie={id:1,live_paypal_client_id:"",live_paypal_client_secret:"",sandbox_paypal_client_id:"",sandbox_paypal_client_secret:"",live:!1,paypalSelected:!1,payProGlobalSelected:!1,paymentThreeSelected:!1},ce=()=>{const[l,o]=(0,t.useState)(ie);(0,t.useEffect)(()=>{g().then(c=>console.log(c))},[]);const g=async()=>{try{const c=await oe.A.getAllPaypalSetups();o(c)}catch(c){console.error("Error fetching data:",c)}};return(0,e.jsxs)(e.Fragment,{children:[l?.paypalSelected&&(0,e.jsx)(k.A,{}),l?.paypalSelected&&(0,e.jsx)(K.A,{}),(0,e.jsx)(re,{})]})}}}]);
