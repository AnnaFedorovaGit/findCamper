import{u as g,r as h,f as b,j as e,a as j,b as f,s as N}from"./index-353397ab.js";import{u as C,i as m,a as _,o as y,C as F}from"./CamperCard-951e1554.js";const $=i=>i.campers.campers,k=i=>i.campers.page,z="_form_l9mz6_1",L="_formContent_l9mz6_5",S="_label_l9mz6_12",w="_inputContainer_l9mz6_17",P="_iconLocation_l9mz6_27",E="_input_l9mz6_17",I="_text_l9mz6_67",T="_subject_l9mz6_74",W="_list_l9mz6_82",A="_icon_l9mz6_27",V="_caption_l9mz6_94",D="_button_l9mz6_99",J="_item_l9mz6_117",s={form:z,formContent:L,label:S,inputContainer:w,iconLocation:P,input:E,text:I,subject:T,list:W,icon:A,caption:V,button:D,item:J},K=()=>{const i=g(),{register:c}=C(),l=["airConditioner","kitchen","beds","TV","CD","radio","shower","toilet","freezer","hob","microwave","gas","water"],[a,o]=h.useState({location:"",form:""}),u=n=>{const t=n.target.value;o({...a,location:t})},d=n=>{const t=n.target.value;o({...a,form:t})};return h.useEffect(()=>{i(b(a))},[i,a]),e.jsx(e.Fragment,{children:e.jsxs("form",{className:s.form,children:[e.jsxs("div",{className:s.formContent,children:[e.jsxs("div",{children:[e.jsx("label",{className:s.label,children:"Location"}),e.jsxs("div",{className:s.inputContainer,children:[e.jsx("svg",{className:s.iconLocation,width:"18",height:"20",children:e.jsx("use",{href:`${m}#icon-location`})}),e.jsx("input",{...c("location"),onChange:u,placeholder:"Kyiv, Ukraine",className:s.input})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:s.text,children:"Filters"}),e.jsx("h4",{className:s.subject,children:"Vehicle equipment"}),e.jsx("ul",{className:s.list,children:l.map((n,t)=>e.jsxs("li",{className:s.item,children:[e.jsx("input",{id:`${_(n)}`,type:"checkbox",...c("details"),value:`${_(n)}`}),e.jsxs("label",{type:"radio",htmlFor:`${_(n)}`,children:[e.jsx("svg",{className:s.icon,width:"22",height:"24",children:e.jsx("use",{href:`${m}#icon-${_(n)}`})}),e.jsx("p",{className:s.caption,children:y(n)})]})]},t))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:s.subject,children:"Vehicle type"}),e.jsxs("ul",{className:s.list,children:[e.jsxs("li",{className:s.item,children:[e.jsx("input",{id:"alcove",type:"radio",...c("form"),value:"alcove",onChange:d}),e.jsxs("label",{type:"radio",htmlFor:"alcove",children:[e.jsx("svg",{width:"40",height:"29",children:e.jsx("use",{href:`${m}#icon-alcove`})}),e.jsx("p",{className:s.caption,children:"Alcove"})]})]}),e.jsxs("li",{className:s.item,children:[e.jsx("input",{id:"integrated",type:"radio",...c("form"),value:"fully Integrated",onChange:d}),e.jsxs("label",{type:"radio",htmlFor:"integrated",children:[e.jsx("svg",{width:"40",height:"29",children:e.jsx("use",{href:`${m}#icon-fully-integrated`})}),e.jsx("p",{className:s.caption,children:"Fully Integrated"})]})]}),e.jsxs("li",{className:s.item,children:[e.jsx("input",{id:"truck",type:"radio",...c("form"),value:"panel Truck",onChange:d}),e.jsxs("label",{type:"radio",htmlFor:"truck",children:[e.jsx("svg",{width:"40",height:"29",children:e.jsx("use",{href:`${m}#icon-van`})}),e.jsx("p",{className:s.caption,children:"Panel Truck"})]})]})]})]})]}),e.jsx("button",{className:s.button,type:"submit",children:"Search"})]})})},O="_container_1c8ks_1",q="_listWrap_1c8ks_8",R="_list_1c8ks_8",U="_button_1c8ks_21",B="_active_1c8ks_34",G="_disabled_1c8ks_39",r={container:O,listWrap:q,list:R,button:U,active:B,disabled:G},Q=()=>{const[i,c]=h.useState([]),l=j($),a=j(k),o=g(),u=l.length%4===0;h.useEffect(()=>{l.length===0&&o(f(a))},[o,a,l.length]),h.useEffect(()=>{const t=localStorage.getItem("favouriteList");t&&c(JSON.parse(t))},[]);const d=()=>{const t=a+1;o(N(t)),o(f(t))},n=t=>{const x=i.findIndex(v=>v._id===t._id);let p=[];x!==-1?(i.splice(x,1),p=[...i]):p=[...i,t],c(p),localStorage.setItem("favouriteList",JSON.stringify(p))};return e.jsxs("div",{className:r.container,children:[e.jsx("div",{children:e.jsx(K,{})}),e.jsxs("div",{className:r.listWrap,children:[e.jsx("ul",{className:r.list,children:l.map(t=>e.jsx(F,{camper:t,onFavourite:n,favouriteList:i},t._id))}),e.jsx("button",{disabled:!u,className:`${r.button} ${u?r.active:r.disabled}`,onClick:d,children:"Load more"})]})]})};export{Q as default};
