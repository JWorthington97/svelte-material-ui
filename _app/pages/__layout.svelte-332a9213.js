import{D as be,S as ke,i as we,s as ve,l as A,f as _,E as Se,x as c,u as m,d as h,F as Ie,A as Y,G as Te,H as Me,I as X,J as Be,j as g,m as b,o as k,v as w,k as T,e as Z,n as M,c as y,a as D,b as I,K as x,L as Ee,r as P,w as U,M as ee,N as te,O as re,P as ne,T as se,Q as Ae,R as Ce,U as Le,t as C,g as L,h as z,V as N,W,X as F,Y as je,Z as De,_ as Ge,$ as Ne,a0 as Pe,a1 as Ue}from"../chunks/vendor-f8b01a26.js";import{T as We,R as Fe,S as oe,a as qe}from"../chunks/index-819e4fa2.js";import{D as Re,A as He,C as Ve,S as Je}from"../chunks/index-48f7d2e6.js";import{I as q}from"../chunks/IconButton-0acd4bb6.js";import{I as R}from"../chunks/index-b7dad8bd.js";import{L as Ke,I as Xe,S as ze,T as Oe}from"../chunks/index-7908c704.js";import{W as V,T as J}from"../chunks/index-889f9e71.js";import{A as Qe,S as H}from"../chunks/Ripple-0302a480.js";import"../chunks/useActions-1601e204.js";import"../chunks/prefixFilter-0866cfc5.js";const Ye=()=>{const a=be("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}},Ze={subscribe(a){return Ye().page.subscribe(a)}};const{window:ye}=Me;function ae(a,e,r){const t=a.slice();return t[22]=e[r],t[23]=e,t[24]=r,t}function le(a,e,r){const t=a.slice();return t[25]=e[r],t}function xe(a){let e,r,t,n,s,o,i,l,$;e=new We({props:{variant:"static",class:"demo-top-app-bar",$$slots:{default:[Bt]},$$scope:{ctx:a}}});function f(d){a[17](d)}let u={variant:a[3]?"modal":void 0,class:"demo-drawer mdc-theme--secondary-bg "+(a[3]?"demo-drawer-adjust":"hide-initial-small"),$$slots:{default:[Gt]},$$scope:{ctx:a}};a[4]!==void 0&&(u.open=a[4]),n=new Re({props:u}),a[16](n),X.push(()=>Be(n,"open",f));let p=a[3]&&pe();return l=new He({props:{class:"demo-app-content",$$slots:{default:[Nt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T(),t=Z("div"),g(n.$$.fragment),o=T(),p&&p.c(),i=T(),g(l.$$.fragment),this.h()},l(d){b(e.$$.fragment,d),r=M(d),t=y(d,"DIV",{class:!0});var S=D(t);b(n.$$.fragment,S),o=M(S),p&&p.l(S),i=M(S),b(l.$$.fragment,S),S.forEach(h),this.h()},h(){I(t,"class","drawer-container svelte-nda62k")},m(d,S){k(e,d,S),_(d,r,S),_(d,t,S),k(n,t,null),x(t,o),p&&p.m(t,null),x(t,i),k(l,t,null),$=!0},p(d,S){const G={};S&524408&&(G.$$scope={dirty:S,ctx:d}),e.$set(G);const E={};S&8&&(E.variant=d[3]?"modal":void 0),S&8&&(E.class="demo-drawer mdc-theme--secondary-bg "+(d[3]?"demo-drawer-adjust":"hide-initial-small")),S&524354&&(E.$$scope={dirty:S,ctx:d}),!s&&S&16&&(s=!0,E.open=d[4],Ee(()=>s=!1)),n.$set(E),d[3]?p?S&8&&c(p,1):(p=pe(),p.c(),c(p,1),p.m(t,i)):p&&(P(),m(p,1,1,()=>{p=null}),U());const j={};S&524289&&(j.$$scope={dirty:S,ctx:d}),l.$set(j)},i(d){$||(c(e.$$.fragment,d),c(n.$$.fragment,d),c(p),c(l.$$.fragment,d),$=!0)},o(d){m(e.$$.fragment,d),m(n.$$.fragment,d),m(p),m(l.$$.fragment,d),$=!1},d(d){w(e,d),d&&h(r),d&&h(t),a[16](null),w(n),p&&p.d(),w(l)}}}function et(a){let e;const r=a[12].default,t=ee(r,a,a[19],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&524288)&&te(t,r,n,n[19],e?ne(r,n[19],s,null):re(n[19]),null)},i(n){e||(c(t,n),e=!0)},o(n){m(t,n),e=!1},d(n){t&&t.d(n)}}}function ie(a){let e,r;return e=new q({props:{class:"material-icons",$$slots:{default:[tt]},$$scope:{ctx:a}}}),e.$on("click",a[13]),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524288&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function tt(a){let e;return{c(){e=C("menu")},l(r){e=L(r,"menu")},m(r,t){_(r,e,t)},d(r){r&&h(e)}}}function rt(a){let e=(a[3]?"SMUI":"Svelte Material UI")+"",r;return{c(){r=C(e)},l(t){r=L(t,e)},m(t,n){_(t,r,n)},p(t,n){n&8&&e!==(e=(t[3]?"SMUI":"Svelte Material UI")+"")&&z(r,e)},d(t){t&&h(r)}}}function nt(a){let e,r,t,n=a[3]&&ie(a);return r=new qe({props:{component:Qe,href:"/",class:"mdc-theme--primary",style:a[3]?"padding-left: 0;":"",$$slots:{default:[rt]},$$scope:{ctx:a}}}),r.$on("click",a[14]),{c(){n&&n.c(),e=T(),g(r.$$.fragment)},l(s){n&&n.l(s),e=M(s),b(r.$$.fragment,s)},m(s,o){n&&n.m(s,o),_(s,e,o),k(r,s,o),t=!0},p(s,o){s[3]?n?(n.p(s,o),o&8&&c(n,1)):(n=ie(s),n.c(),c(n,1),n.m(e.parentNode,e)):n&&(P(),m(n,1,1,()=>{n=null}),U());const i={};o&8&&(i.style=s[3]?"padding-left: 0;":""),o&524296&&(i.$$scope={dirty:o,ctx:s}),r.$set(i)},i(s){t||(c(n),c(r.$$.fragment,s),t=!0)},o(s){m(n),m(r.$$.fragment,s),t=!1},d(s){n&&n.d(s),s&&h(e),w(r,s)}}}function ue(a){let e,r,t=a[6].repos||[],n=[];for(let o=0;o<t.length;o+=1)n[o]=fe(le(a,t,o));const s=o=>m(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=A()},l(o){for(let i=0;i<n.length;i+=1)n[i].l(o);e=A()},m(o,i){for(let l=0;l<n.length;l+=1)n[l].m(o,i);_(o,e,i),r=!0},p(o,i){if(i&64){t=o[6].repos||[];let l;for(l=0;l<t.length;l+=1){const $=le(o,t,l);n[l]?(n[l].p($,i),c(n[l],1)):(n[l]=fe($),n[l].c(),c(n[l],1),n[l].m(e.parentNode,e))}for(P(),l=t.length;l<n.length;l+=1)s(l);U()}},i(o){if(!r){for(let i=0;i<t.length;i+=1)c(n[i]);r=!0}},o(o){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)m(n[i]);r=!1},d(o){Ae(n,o),o&&h(e)}}}function st(a){let e;return{c(){e=W("path"),this.h()},l(r){e=F(r,"path",{fill:!0,d:!0,class:!0}),D(e).forEach(h),this.h()},h(){I(e,"fill","currentColor"),I(e,"d",Ue),I(e,"class","svelte-nda62k")},m(r,t){_(r,e,t)},p:N,d(r){r&&h(e)}}}function ot(a){let e,r;return e=new R({props:{component:H,viewBox:"0 0 24 24",$$slots:{default:[st]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524288&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function at(a){let e,r=a[25].split("/").slice(-1)[0]+"",t;return{c(){e=C("View Docs: "),t=C(r)},l(n){e=L(n,"View Docs: "),t=L(n,r)},m(n,s){_(n,e,s),_(n,t,s)},p(n,s){s&64&&r!==(r=n[25].split("/").slice(-1)[0]+"")&&z(t,r)},d(n){n&&h(e),n&&h(t)}}}function lt(a){let e,r,t,n,s;return e=new q({props:{href:a[25],target:"_blank",$$slots:{default:[ot]},$$scope:{ctx:a}}}),t=new J({props:{$$slots:{default:[at]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T(),g(t.$$.fragment),n=T()},l(o){b(e.$$.fragment,o),r=M(o),b(t.$$.fragment,o),n=M(o)},m(o,i){k(e,o,i),_(o,r,i),k(t,o,i),_(o,n,i),s=!0},p(o,i){const l={};i&64&&(l.href=o[25]),i&524288&&(l.$$scope={dirty:i,ctx:o}),e.$set(l);const $={};i&524352&&($.$$scope={dirty:i,ctx:o}),t.$set($)},i(o){s||(c(e.$$.fragment,o),c(t.$$.fragment,o),s=!0)},o(o){m(e.$$.fragment,o),m(t.$$.fragment,o),s=!1},d(o){w(e,o),o&&h(r),w(t,o),o&&h(n)}}}function fe(a){let e,r;return e=new V({props:{$$slots:{default:[lt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524352&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function it(a){let e;return{c(){e=W("path"),this.h()},l(r){e=F(r,"path",{fill:!0,d:!0,class:!0}),D(e).forEach(h),this.h()},h(){I(e,"fill","currentColor"),I(e,"d",je),I(e,"class","svelte-nda62k")},m(r,t){_(r,e,t)},p:N,d(r){r&&h(e)}}}function ut(a){let e,r;return e=new R({props:{component:H,viewBox:"0 0 24 24",$$slots:{default:[it]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524288&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function ft(a){let e;return{c(){e=C("Join the Discord Server")},l(r){e=L(r,"Join the Discord Server")},m(r,t){_(r,e,t)},d(r){r&&h(e)}}}function ct(a){let e,r,t,n;return e=new q({props:{href:"https://discord.gg/aFzmkrmg9P",$$slots:{default:[ut]},$$scope:{ctx:a}}}),t=new J({props:{$$slots:{default:[ft]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T(),g(t.$$.fragment)},l(s){b(e.$$.fragment,s),r=M(s),b(t.$$.fragment,s)},m(s,o){k(e,s,o),_(s,r,o),k(t,s,o),n=!0},p(s,o){const i={};o&524288&&(i.$$scope={dirty:o,ctx:s}),e.$set(i);const l={};o&524288&&(l.$$scope={dirty:o,ctx:s}),t.$set(l)},i(s){n||(c(e.$$.fragment,s),c(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){w(e,s),s&&h(r),w(t,s)}}}function pt(a){let e;return{c(){e=W("path"),this.h()},l(r){e=F(r,"path",{fill:!0,d:!0,class:!0}),D(e).forEach(h),this.h()},h(){I(e,"fill","currentColor"),I(e,"d",De),I(e,"class","svelte-nda62k")},m(r,t){_(r,e,t)},p:N,d(r){r&&h(e)}}}function mt(a){let e,r;return e=new R({props:{component:H,viewBox:"0 0 24 24",$$slots:{default:[pt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524288&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function $t(a){let e;return{c(){e=C("Hunter Perrin (SMUI Author) on Twitter")},l(r){e=L(r,"Hunter Perrin (SMUI Author) on Twitter")},m(r,t){_(r,e,t)},d(r){r&&h(e)}}}function ht(a){let e,r,t,n;return e=new q({props:{href:"https://twitter.com/SciActive",$$slots:{default:[mt]},$$scope:{ctx:a}}}),t=new J({props:{$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T(),g(t.$$.fragment)},l(s){b(e.$$.fragment,s),r=M(s),b(t.$$.fragment,s)},m(s,o){k(e,s,o),_(s,r,o),k(t,s,o),n=!0},p(s,o){const i={};o&524288&&(i.$$scope={dirty:o,ctx:s}),e.$set(i);const l={};o&524288&&(l.$$scope={dirty:o,ctx:s}),t.$set(l)},i(s){n||(c(e.$$.fragment,s),c(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){w(e,s),s&&h(r),w(t,s)}}}function dt(a){let e;return{c(){e=W("path"),this.h()},l(r){e=F(r,"path",{fill:!0,d:!0,class:!0}),D(e).forEach(h),this.h()},h(){I(e,"fill","currentColor"),I(e,"d",Ge),I(e,"class","svelte-nda62k")},m(r,t){_(r,e,t)},p:N,d(r){r&&h(e)}}}function _t(a){let e,r;return e=new R({props:{component:H,viewBox:"0 0 24 24",$$slots:{default:[dt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524288&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function gt(a){let e;return{c(){e=C("SMUI on GitHub")},l(r){e=L(r,"SMUI on GitHub")},m(r,t){_(r,e,t)},d(r){r&&h(e)}}}function bt(a){let e,r,t,n;return e=new q({props:{href:"https://github.com/hperrin/svelte-material-ui",$$slots:{default:[_t]},$$scope:{ctx:a}}}),t=new J({props:{$$slots:{default:[gt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T(),g(t.$$.fragment)},l(s){b(e.$$.fragment,s),r=M(s),b(t.$$.fragment,s)},m(s,o){k(e,s,o),_(s,r,o),k(t,s,o),n=!0},p(s,o){const i={};o&524288&&(i.$$scope={dirty:o,ctx:s}),e.$set(i);const l={};o&524288&&(l.$$scope={dirty:o,ctx:s}),t.$set(l)},i(s){n||(c(e.$$.fragment,s),c(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){w(e,s),s&&h(r),w(t,s)}}}function kt(a){let e;return{c(){e=W("path"),this.h()},l(r){e=F(r,"path",{fill:!0,d:!0,class:!0}),D(e).forEach(h),this.h()},h(){I(e,"fill","currentColor"),I(e,"d",Ne),I(e,"class","svelte-nda62k")},m(r,t){_(r,e,t)},p:N,d(r){r&&h(e)}}}function wt(a){let e;return{c(){e=W("path"),this.h()},l(r){e=F(r,"path",{fill:!0,d:!0,class:!0}),D(e).forEach(h),this.h()},h(){I(e,"fill","currentColor"),I(e,"d",Pe),I(e,"class","svelte-nda62k")},m(r,t){_(r,e,t)},p:N,d(r){r&&h(e)}}}function vt(a){let e,r,t,n;return e=new R({props:{component:H,viewBox:"0 0 24 24",on:!0,$$slots:{default:[kt]},$$scope:{ctx:a}}}),t=new R({props:{component:H,viewBox:"0 0 24 24",$$slots:{default:[wt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T(),g(t.$$.fragment)},l(s){b(e.$$.fragment,s),r=M(s),b(t.$$.fragment,s)},m(s,o){k(e,s,o),_(s,r,o),k(t,s,o),n=!0},p(s,o){const i={};o&524288&&(i.$$scope={dirty:o,ctx:s}),e.$set(i);const l={};o&524288&&(l.$$scope={dirty:o,ctx:s}),t.$set(l)},i(s){n||(c(e.$$.fragment,s),c(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){w(e,s),s&&h(r),w(t,s)}}}function St(a){let e=(a[5]?"Lights off":"Lights on")+"",r;return{c(){r=C(e)},l(t){r=L(t,e)},m(t,n){_(t,r,n)},p(t,n){n&32&&e!==(e=(t[5]?"Lights off":"Lights on")+"")&&z(r,e)},d(t){t&&h(r)}}}function It(a){let e,r,t,n;return e=new q({props:{toggle:!0,pressed:a[5],$$slots:{default:[vt]},$$scope:{ctx:a}}}),e.$on("SMUIIconButtonToggle:change",a[8]),t=new J({props:{$$slots:{default:[St]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T(),g(t.$$.fragment)},l(s){b(e.$$.fragment,s),r=M(s),b(t.$$.fragment,s)},m(s,o){k(e,s,o),_(s,r,o),k(t,s,o),n=!0},p(s,o){const i={};o&32&&(i.pressed=s[5]),o&524288&&(i.$$scope={dirty:o,ctx:s}),e.$set(i);const l={};o&524320&&(l.$$scope={dirty:o,ctx:s}),t.$set(l)},i(s){n||(c(e.$$.fragment,s),c(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){w(e,s),s&&h(r),w(t,s)}}}function Tt(a){let e,r,t,n,s,o,i,l,$,f=a[6]&&ue(a);return r=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:a}}}),n=new V({props:{$$slots:{default:[ht]},$$scope:{ctx:a}}}),o=new V({props:{$$slots:{default:[bt]},$$scope:{ctx:a}}}),l=new V({props:{$$slots:{default:[It]},$$scope:{ctx:a}}}),{c(){f&&f.c(),e=T(),g(r.$$.fragment),t=T(),g(n.$$.fragment),s=T(),g(o.$$.fragment),i=T(),g(l.$$.fragment)},l(u){f&&f.l(u),e=M(u),b(r.$$.fragment,u),t=M(u),b(n.$$.fragment,u),s=M(u),b(o.$$.fragment,u),i=M(u),b(l.$$.fragment,u)},m(u,p){f&&f.m(u,p),_(u,e,p),k(r,u,p),_(u,t,p),k(n,u,p),_(u,s,p),k(o,u,p),_(u,i,p),k(l,u,p),$=!0},p(u,p){u[6]?f?(f.p(u,p),p&64&&c(f,1)):(f=ue(u),f.c(),c(f,1),f.m(e.parentNode,e)):f&&(P(),m(f,1,1,()=>{f=null}),U());const d={};p&524288&&(d.$$scope={dirty:p,ctx:u}),r.$set(d);const S={};p&524288&&(S.$$scope={dirty:p,ctx:u}),n.$set(S);const G={};p&524288&&(G.$$scope={dirty:p,ctx:u}),o.$set(G);const E={};p&524320&&(E.$$scope={dirty:p,ctx:u}),l.$set(E)},i(u){$||(c(f),c(r.$$.fragment,u),c(n.$$.fragment,u),c(o.$$.fragment,u),c(l.$$.fragment,u),$=!0)},o(u){m(f),m(r.$$.fragment,u),m(n.$$.fragment,u),m(o.$$.fragment,u),m(l.$$.fragment,u),$=!1},d(u){f&&f.d(u),u&&h(e),w(r,u),u&&h(t),w(n,u),u&&h(s),w(o,u),u&&h(i),w(l,u)}}}function Mt(a){let e,r,t,n;return e=new oe({props:{$$slots:{default:[nt]},$$scope:{ctx:a}}}),t=new oe({props:{align:"end",toolbar:!0,style:"color: var(--mdc-on-surface, #000);",$$slots:{default:[Tt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T(),g(t.$$.fragment)},l(s){b(e.$$.fragment,s),r=M(s),b(t.$$.fragment,s)},m(s,o){k(e,s,o),_(s,r,o),k(t,s,o),n=!0},p(s,o){const i={};o&524376&&(i.$$scope={dirty:o,ctx:s}),e.$set(i);const l={};o&524384&&(l.$$scope={dirty:o,ctx:s}),t.$set(l)},i(s){n||(c(e.$$.fragment,s),c(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){w(e,s),s&&h(r),w(t,s)}}}function Bt(a){let e,r;return e=new Fe({props:{$$slots:{default:[Mt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524408&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function Et(a){let e,r=a[23],t=a[24],n;const s=()=>a[15](e,r,t),o=()=>a[15](null,r,t);let i={nonInteractive:!("route"in a[22]||"shortcut"in a[22]),href:"route"in a[22]?a[22].route:"shortcut"in a[22]?a[22].shortcut:void 0,activated:a[22]===a[6],style:a[22].indent?"margin-left: "+a[22].indent*25+"px;":"",$$slots:{default:[Lt]},$$scope:{ctx:a}};return e=new Xe({props:i}),s(),{c(){g(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,$){k(e,l,$),n=!0},p(l,$){(r!==l[23]||t!==l[24])&&(o(),r=l[23],t=l[24],s());const f={};$&2&&(f.nonInteractive=!("route"in l[22]||"shortcut"in l[22])),$&2&&(f.href="route"in l[22]?l[22].route:"shortcut"in l[22]?l[22].shortcut:void 0),$&66&&(f.activated=l[22]===l[6]),$&2&&(f.style=l[22].indent?"margin-left: "+l[22].indent*25+"px;":""),$&524290&&(f.$$scope={dirty:$,ctx:l}),e.$set(f)},i(l){n||(c(e.$$.fragment,l),n=!0)},o(l){m(e.$$.fragment,l),n=!1},d(l){o(),w(e,l)}}}function At(a){let e,r;return e=new ze({}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p:N,i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function Ct(a){let e=a[22].name+"",r;return{c(){r=C(e)},l(t){r=L(t,e)},m(t,n){_(t,r,n)},p(t,n){n&2&&e!==(e=t[22].name+"")&&z(r,e)},d(t){t&&h(r)}}}function Lt(a){let e,r,t;return e=new Oe({props:{class:"mdc-theme--on-secondary",$$slots:{default:[Ct]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),r=T()},l(n){b(e.$$.fragment,n),r=M(n)},m(n,s){k(e,n,s),_(n,r,s),t=!0},p(n,s){const o={};s&524290&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){w(e,n),n&&h(r)}}}function ce(a,e){let r,t,n,s,o;const i=[At,Et],l=[];function $(f,u){return"separator"in f[22]?0:1}return t=$(e),n=l[t]=i[t](e),{key:a,first:null,c(){r=A(),n.c(),s=A(),this.h()},l(f){r=A(),n.l(f),s=A(),this.h()},h(){this.first=r},m(f,u){_(f,r,u),l[t].m(f,u),_(f,s,u),o=!0},p(f,u){e=f;let p=t;t=$(e),t===p?l[t].p(e,u):(P(),m(l[p],1,1,()=>{l[p]=null}),U(),n=l[t],n?n.p(e,u):(n=l[t]=i[t](e),n.c()),c(n,1),n.m(s.parentNode,s))},i(f){o||(c(n),o=!0)},o(f){m(n),o=!1},d(f){f&&h(r),l[t].d(f),f&&h(s)}}}function jt(a){let e=[],r=new Map,t,n,s=a[1];const o=i=>i[22].name;for(let i=0;i<s.length;i+=1){let l=ae(a,s,i),$=o(l);r.set($,e[i]=ce($,l))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=A()},l(i){for(let l=0;l<e.length;l+=1)e[l].l(i);t=A()},m(i,l){for(let $=0;$<e.length;$+=1)e[$].m(i,l);_(i,t,l),n=!0},p(i,l){l&66&&(s=i[1],P(),e=Ce(e,l,o,1,i,s,r,t.parentNode,Le,ce,t,ae),U())},i(i){if(!n){for(let l=0;l<s.length;l+=1)c(e[l]);n=!0}},o(i){for(let l=0;l<e.length;l+=1)m(e[l]);n=!1},d(i){for(let l=0;l<e.length;l+=1)e[l].d(i);i&&h(t)}}}function Dt(a){let e,r;return e=new Ke({props:{$$slots:{default:[jt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524354&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function Gt(a){let e,r;return e=new Ve({props:{$$slots:{default:[Dt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&524354&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function pe(a){let e,r;return e=new Je({}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function Nt(a){let e,r;const t=a[12].default,n=ee(t,a,a[19],null);return{c(){e=Z("main"),n&&n.c(),this.h()},l(s){e=y(s,"MAIN",{class:!0});var o=D(e);n&&n.l(o),o.forEach(h),this.h()},h(){I(e,"class","demo-main-content svelte-nda62k")},m(s,o){_(s,e,o),n&&n.m(e,null),a[18](e),r=!0},p(s,o){n&&n.p&&(!r||o&524288)&&te(n,t,s,s[19],r?ne(t,s[19],o,null):re(s[19]),null)},i(s){r||(c(n,s),r=!0)},o(s){m(n,s),r=!1},d(s){s&&h(e),n&&n.d(s),a[18](null)}}}function Pt(a){let e,r,t,n,s,o;const i=[et,xe],l=[];function $(f,u){return f[7]?0:1}return e=$(a),r=l[e]=i[e](a),{c(){r.c(),t=A()},l(f){r.l(f),t=A()},m(f,u){l[e].m(f,u),_(f,t,u),n=!0,s||(o=Se(ye,"resize",a[9]),s=!0)},p(f,[u]){r.p(f,u)},i(f){n||(c(r),n=!0)},o(f){m(r),n=!1},d(f){l[e].d(f),f&&h(t),s=!1,o()}}}function Ut(a,e){return(a.endsWith("/")?a.slice(0,-1):a)===(e.endsWith("/")?e.slice(0,-1):e)}function Wt(a,e,r){let t,n;Ie(a,Ze,v=>r(11,n=v));let{$$slots:s={},$$scope:o}=e;const i=n.path.includes("/iframe");let l,$,f=!1,u=!1,p,d,S=typeof window=="undefined"||window.matchMedia("(prefers-color-scheme: light)").matches;function G(){var K,Q;r(5,S=!S);let v=document.head.querySelector("#theme");v||(v=document.createElement("link"),v.rel="stylesheet",v.id="theme"),v.href=`/smui${S?"":"-dark"}.css`,(K=document.head.querySelector('link[href="/smui-dark.css"]'))==null||K.insertAdjacentElement("afterend",v);let B=document.head.querySelector("#site");B||(B=document.createElement("link"),B.rel="stylesheet",B.id="site"),B.href=`/site${S?"":"-dark"}.css`,(Q=document.head.querySelector('link[href="/site-dark.css"]'))==null||Q.insertAdjacentElement("afterend",B)}const E=[{name:"Installation",route:"/INSTALL.md/",indent:0},{name:"SvelteKit",route:"/SVELTEKIT.md/",indent:1},{name:"Theming",route:"/THEMING.md/",indent:0},{name:"Migrating",route:"/MIGRATING.md/",indent:0},{name:"sep1",separator:!0},{name:"Accordion",route:"/demo/accordion/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/accordion"]},{name:"Badge",route:"/demo/badge/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/badge"]},{name:"Banner",route:"/demo/banner/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/banner"]},{name:"Action Buttons",indent:0},{name:"Button",route:"/demo/button/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/button"]},{name:"Floating Action Button",route:"/demo/fab/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/fab"]},{name:"Icon Button",route:"/demo/icon-button/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/icon-button"]},{name:"Cards",route:"/demo/card/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/card"]},{name:"Common",route:"/demo/common/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/common"]},{name:"Data Table",route:"/demo/data-table/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/data-table"]},{name:"Dialog",route:"/demo/dialog/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/dialog"]},{name:"Drawer",route:"/demo/drawer/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/drawer"]},{name:"Elevation",route:"/demo/elevation/",indent:0},{name:"Image List",route:"/demo/image-list/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/image-list"]},{name:"Inputs and Controls",indent:0},{name:"Autocomplete",route:"/demo/autocomplete/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/autocomplete"]},{name:"Checkbox",route:"/demo/checkbox/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/checkbox"]},{name:"Chips",route:"/demo/chips/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/chips"]},{name:"Form Field",route:"/demo/form-field/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/form-field"]},{name:"Radio Button",route:"/demo/radio/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/radio"]},{name:"Segmented Button",route:"/demo/segmented-button/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/segmented-button"]},{name:"Select Menu",route:"/demo/select/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/select"]},{name:"Slider",route:"/demo/slider/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/slider"]},{name:"Switch",route:"/demo/switch/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/switch"]},{name:"Text Field",route:"/demo/textfield/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/textfield"]},{name:"Layout Grid",route:"/demo/layout-grid/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/layout-grid"]},{name:"List",route:"/demo/list/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/list"]},{name:"Menu Surface",route:"/demo/menu-surface/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/menu-surface"]},{name:"Menu",route:"/demo/menu/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/menu"]},{name:"Paper",route:"/demo/paper/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/paper"]},{name:"Progress Indicators",indent:0},{name:"Circular Progress",route:"/demo/circular-progress/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/circular-progress"]},{name:"Linear Progress",route:"/demo/linear-progress/",indent:1,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/linear-progress"]},{name:"Ripple",route:"/demo/ripple/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/ripple"]},{name:"Snackbar",route:"/demo/snackbar/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/snackbar","https://github.com/hperrin/svelte-material-ui/tree/master/packages/snackbar/kitchen"]},{name:"Tabs",route:"/demo/tabs/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/tab","https://github.com/hperrin/svelte-material-ui/tree/master/packages/tab-bar"]},{name:"Tooltip",route:"/demo/tooltip/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/tooltip"]},{name:"Top App Bar",route:"/demo/top-app-bar/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/top-app-bar"]},{name:"Touch Target",route:"/demo/touch-target/",indent:0,repos:["https://github.com/hperrin/svelte-material-ui/tree/master/packages/touch-target"]},{name:"Typography",route:"/demo/typography/",indent:0}];let j;Y(O),Y(()=>{if($){d=new se($,{mouseSupport:!1});let v=0;d.on("panstart",()=>{v=d.touchStartX}),d.on("swiperight",()=>{v<=40&&r(4,u=!0)})}l&&(p=new se(l.getElement(),{mouseSupport:!1}),p.on("swipeleft",()=>{r(4,u=!1)}))}),Te(()=>{d&&d.destroy(),p&&p.destroy()});function O(){typeof window!="undefined"&&r(3,f=window.innerWidth<720)}const me=()=>r(4,u=!u),$e=()=>r(6,t=void 0);function he(v,B,K){X[v?"unshift":"push"](()=>{B[K].component=v,r(1,E)})}function de(v){X[v?"unshift":"push"](()=>{l=v,r(2,l)})}function _e(v){u=v,r(4,u),r(0,$),r(10,j),r(11,n)}function ge(v){X[v?"unshift":"push"](()=>{$=v,r(0,$),r(10,j),r(11,n)})}return a.$$set=v=>{"$$scope"in v&&r(19,o=v.$$scope)},a.$$.update=()=>{if(a.$$.dirty&2050&&r(6,t=E.find(v=>{var B;return"route"in v&&Ut((B=v.route)!=null?B:"",n.path)})),a.$$.dirty&3073&&$&&j!==n.path){r(4,u=!1);const v=window.location.hash&&document.querySelector(window.location.hash),B=v&&v.offsetTop||0;r(0,$.scrollTop=B,$),r(10,j=n.path)}},[$,E,l,f,u,S,t,i,G,O,j,n,s,me,$e,he,de,_e,ge,o]}class Qt extends ke{constructor(e){super();we(this,e,Wt,Pt,ve,{})}}export{Qt as default};
