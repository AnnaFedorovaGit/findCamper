import{r as o,j as s}from"./index-46b92f1a.js";import{C as u}from"./CamperCard-aef6fa14.js";const d="_title_1ewt2_1",m="_list_1ewt2_8",a={title:d,list:m},h=()=>{const[t,r]=o.useState([]);o.useEffect(()=>{const e=localStorage.getItem("favouriteList");e&&r(JSON.parse(e))},[]);const n=e=>{const l=t.findIndex(c=>c._id===e._id);let i=[];l!==-1?(t.splice(l,1),i=[...t]):i=[...t,e],r(i),localStorage.setItem("favouriteList",JSON.stringify(i))};return s.jsxs(s.Fragment,{children:[t.length>0?s.jsx("h1",{className:a.title,children:"Favourites List"}):s.jsx("h1",{className:a.title,children:"Favourites List is empty"}),t.length>0&&s.jsx("ul",{className:a.list,children:t.map(e=>s.jsx(u,{camper:e,onFavourite:n,favouriteList:t},e._id))})]})};export{h as default};
