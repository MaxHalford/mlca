import{u as s}from"./index.5ea2ecd9.js";import{a as m,o as a,b as n,e as r,F as i,r as c,u as p,t as u}from"./entry.4948b3af.js";import"./app.config.04e8b06e.js";const d={methods:{clear(){localStorage.clear("elements"),s().value=[]}},mounted(){let e=localStorage.getItem("elements"),t=s();e&&(t.value=JSON.parse(e))}};function f(e,t,g,v,E,o){return a(),n("div",null,[r("button",{onClick:t[0]||(t[0]=(...l)=>o.clear&&o.clear(...l))},"Clear"),(a(!0),n(i,null,c(("useElements"in e?e.useElements:p(s))().value,l=>(a(),n("div",null,[r("p",null,u(l.name),1),r("p",null,u(l.unit),1)]))),256))])}const x=m(d,[["render",f]]);export{x as default};