import{h as u,K as m,o as r,A as i,S as t,U as c,V as g,u as p,W as h,X as f,Y as y,c as v}from"./entry.b289cd52.js";import{u as k,q as x}from"./query.c3168ba5.js";import"./utils.0ad9ba77.js";const B=t("div",{class:"py-3"},null,-1),$={class:"group-hover:text-pastel-green-600 transition-all duration-300"},C=t("div",{class:"flex items-center gap-1"},[t("span",{class:"font-semibold"},"Read more")],-1),b={name:"BlogItemComponent"},w=u({...b,props:{description:null,title:null,slug:null},setup(s){const e=m();return(n,o)=>(r(),i("div",g({...n.$attrs},{class:"cursor-pointer group",onClick:o[0]||(o[0]=d=>p(e).push(`/blog${s.slug}`))}),[B,t("h1",$,c(s.title),1),t("p",null,c(s.description),1),C],16))}}),A={class:"prose prose-a:no-underline prose-slate dark:prose-invert max-w-none"},R=u({__name:"index",async setup(s){let e,n;const{data:o}=([e,n]=h(()=>k("home",()=>x("/").limit(5).where({isPublished:!0}).only(["description","title","_path"]).find())),e=await e,n(),e);return(d,q)=>{const _=w;return r(),i("div",A,[(r(!0),i(f,null,y(p(o),(a,l)=>(r(),v(_,{id:`blog-post-${l+1}`,key:l,slug:a._path,title:a.title,description:a.description},null,8,["id","slug","title","description"]))),128))])}}});export{R as default};