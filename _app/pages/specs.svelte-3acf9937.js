import{S as t,i as s,s as e,P as a,k as n,e as c,t as o,M as r,d as i,n as d,c as h,a as l,g as u,b as m,f as _,D as f,h as p,E as x,N as v}from"../chunks/vendor-63f5ebb1.js";import{C as k}from"../chunks/index.svelte_svelte&type=style&lang-937b2acc.js";import{d as y,b}from"../chunks/env-a13806e5.js";const{document:g}=v;function H(t){let s,e,v,k,y,b=t[0].data.key_text__title+"",H=a.RichText.asHtml(t[0].data.rich_text__content)+"";return{c(){s=n(),e=c("h2"),v=o(b),k=n(),y=c("div"),this.h()},l(t){r('[data-svelte="svelte-1l54tes"]',g.head).forEach(i),s=d(t),e=h(t,"H2",{});var a=l(e);v=u(a,b),a.forEach(i),k=d(t),y=h(t,"DIV",{class:!0}),l(y).forEach(i),this.h()},h(){g.title="Специальности",m(y,"class","container")},m(t,a){_(t,s,a),_(t,e,a),f(e,v),_(t,k,a),_(t,y,a),y.innerHTML=H},p(t,[s]){1&s&&b!==(b=t[0].data.key_text__title+"")&&p(v,b),1&s&&H!==(H=a.RichText.asHtml(t[0].data.rich_text__content)+"")&&(y.innerHTML=H)},i:x,o:x,d(t){t&&i(s),t&&i(e),t&&i(k),t&&i(y)}}}const E=y,T=b,j=!0;async function D(){return{props:{document:await k.getByUID("gtk-page","specs")}}}function M(t,s,e){let{document:a}=s;return t.$$set=t=>{"document"in t&&e(0,a=t.document)},[a]}export default class extends t{constructor(t){super(),s(this,t,M,H,e,{document:0})}}export{E as hydrate,D as load,j as prerender,T as router};
