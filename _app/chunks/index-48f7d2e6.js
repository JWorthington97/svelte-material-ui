var ge=Object.defineProperty;var P=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var N=(t,e,s)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,y=(t,e)=>{for(var s in e||(e={}))pe.call(e,s)&&N(t,s,e[s]);if(P)for(var s of P(e))we.call(e,s)&&N(t,s,e[s]);return t};import{S as G,i as K,s as R,M as V,B as w,e as Se,c as be,a as Ee,d as H,a2 as z,f as J,a3 as Q,E as W,N as X,O as Y,P as Z,p as x,a4 as ve,x as D,u as C,a5 as De,a6 as k,a7 as $,y as T,A as Ce,G as ke,af as Ie,ag as Me,ad as ee,ah as Fe,I as se,j as te,l as ne,m as Oe,o as ae,q as Ae,r as Ue,v as ie,w as ye}from"./vendor-f8b01a26.js";import{c as I,u as He,f as le,d as j}from"./useActions-1601e204.js";import{c as b,D as M,H as Te,b as je}from"./Ripple-0302a480.js";function Le(t){let e,s,o,i,f,g;const l=t[15].default,r=V(l,t,t[14],null);let m=[{class:s=I(y({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],_={};for(let n=0;n<m.length;n+=1)_=w(_,m[n]);return{c(){e=Se("aside"),r&&r.c(),this.h()},l(n){e=be(n,"ASIDE",{class:!0});var d=Ee(e);r&&r.l(d),d.forEach(H),this.h()},h(){z(e,_)},m(n,d){J(n,e,d),r&&r.m(e,null),t[16](e),i=!0,f||(g=[Q(o=He.call(null,e,t[0])),Q(t[7].call(null,e)),W(e,"keydown",t[17]),W(e,"transitionend",t[18])],f=!0)},p(n,[d]){r&&r.p&&(!i||d&16384)&&X(r,l,n,n[14],i?Z(l,n[14],d,null):Y(n[14]),null),z(e,_=x(m,[(!i||d&78&&s!==(s=I(y({[n[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":n[2]==="dismissible","mdc-drawer--modal":n[2]==="modal","smui-drawer__absolute":n[2]==="modal"&&!n[3]},n[6]))))&&{class:s},d&256&&n[8]])),o&&ve(o.update)&&d&1&&o.update.call(null,n[0])},i(n){i||(D(r,n),i=!0)},o(n){C(r,n),i=!1},d(n){n&&H(e),r&&r.d(n),t[16](null),f=!1,De(g)}}}function qe(t,e,s){const o=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let i=k(e,o),{$$slots:f={},$$scope:g}=e;const{FocusTrap:l}=Fe,r=le($());let{use:m=[]}=e,{class:_=""}=e,{variant:n=void 0}=e,{open:d=!1}=e,{fixed:S=!0}=e,h,u,c={},E=null,F,p=!1;T("SMUI:list:nav",!0),T("SMUI:list:item:nav",!0),T("SMUI:list:wrapFocus",!0);let O=n;Ce(()=>{F=new l(h,{skipInitialFocus:!0}),s(4,u=L()),u&&u.init()}),ke(()=>{u&&u.destroy(),p&&p.removeEventListener("SMUIDrawerScrim:click",A)});function L(){var a,U;p&&p.removeEventListener("SMUIDrawerScrim:click",A),n==="modal"&&(p=(U=(a=h.parentNode)===null||a===void 0?void 0:a.querySelector(".mdc-drawer-scrim"))!==null&&U!==void 0?U:!1,p&&p.addEventListener("SMUIDrawerScrim:click",A));const B=n==="dismissible"?Ie:n==="modal"?Me:void 0;return B?new B({addClass:oe,removeClass:ce,hasClass:re,elementHasClass:(v,he)=>v.classList.contains(he),saveFocus:()=>E=document.activeElement,restoreFocus:()=>{E&&"focus"in E&&h.contains(document.activeElement)&&E.focus()},focusActiveNavigationItem:()=>{const v=h.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");v&&v.focus()},notifyClose:()=>{s(9,d=!1),j(h,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{s(9,d=!0),j(h,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>F.trapFocus(),releaseFocus:()=>F.releaseFocus()}):void 0}function re(a){return a in c?c[a]:q().classList.contains(a)}function oe(a){c[a]||s(6,c[a]=!0,c)}function ce(a){(!(a in c)||c[a])&&s(6,c[a]=!1,c)}function A(){u&&"handleScrimClick"in u&&u.handleScrimClick()}function ue(a){s(9,d=a)}function de(){return d}function q(){return h}function fe(a){se[a?"unshift":"push"](()=>{h=a,s(5,h)})}const me=a=>u&&u.handleKeydown(a),_e=a=>u&&u.handleTransitionEnd(a);return t.$$set=a=>{e=w(w({},e),ee(a)),s(8,i=k(e,o)),"use"in a&&s(0,m=a.use),"class"in a&&s(1,_=a.class),"variant"in a&&s(2,n=a.variant),"open"in a&&s(9,d=a.open),"fixed"in a&&s(3,S=a.fixed),"$$scope"in a&&s(14,g=a.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&O!==n&&(s(13,O=n),u&&u.destroy(),s(6,c={}),s(4,u=L()),u&&u.init()),t.$$.dirty&528&&u&&u.isOpen()!==d&&(d?u.open():u.close())},[m,_,n,S,u,h,c,r,i,d,ue,de,q,O,g,f,fe,me,_e]}class Je extends G{constructor(e){super();K(this,e,qe,Le,R,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var Qe=b({class:"mdc-drawer-app-content",component:M}),We=b({class:"mdc-drawer__content",component:M}),Xe=b({class:"mdc-drawer__header",component:M}),Ye=b({class:"mdc-drawer__title",component:Te}),Ze=b({class:"mdc-drawer__subtitle",component:je});function Be(t){let e;const s=t[8].default,o=V(s,t,t[11],null);return{c(){o&&o.c()},l(i){o&&o.l(i)},m(i,f){o&&o.m(i,f),e=!0},p(i,f){o&&o.p&&(!e||f&2048)&&X(o,s,i,i[11],e?Z(s,i[11],f,null):Y(i[11]),null)},i(i){e||(D(o,i),e=!0)},o(i){C(o,i),e=!1},d(i){o&&o.d(i)}}}function Pe(t){let e,s,o;const i=[{use:[t[6],...t[0]]},{class:I({[t[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!t[2]})},t[7]];var f=t[3];function g(l){let r={$$slots:{default:[Be]},$$scope:{ctx:l}};for(let m=0;m<i.length;m+=1)r=w(r,i[m]);return{props:r}}return f&&(e=new f(g(t)),t[9](e),e.$on("click",t[10])),{c(){e&&te(e.$$.fragment),s=ne()},l(l){e&&Oe(e.$$.fragment,l),s=ne()},m(l,r){e&&ae(e,l,r),J(l,s,r),o=!0},p(l,[r]){const m=r&199?x(i,[r&65&&{use:[l[6],...l[0]]},r&6&&{class:I({[l[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!l[2]})},r&128&&Ae(l[7])]):{};if(r&2048&&(m.$$scope={dirty:r,ctx:l}),f!==(f=l[3])){if(e){Ue();const _=e;C(_.$$.fragment,1,0,()=>{ie(_,1)}),ye()}f?(e=new f(g(l)),l[9](e),e.$on("click",l[10]),te(e.$$.fragment),D(e.$$.fragment,1),ae(e,s.parentNode,s)):e=null}else f&&e.$set(m)},i(l){o||(e&&D(e.$$.fragment,l),o=!0)},o(l){e&&C(e.$$.fragment,l),o=!1},d(l){t[9](null),l&&H(s),e&&ie(e,l)}}}function Ne(t,e,s){const o=["use","class","fixed","component","getElement"];let i=k(e,o),{$$slots:f={},$$scope:g}=e;const l=le($());let{use:r=[]}=e,{class:m=""}=e,{fixed:_=!0}=e,n,{component:d=M}=e;function S(){return n.getElement()}function h(c){se[c?"unshift":"push"](()=>{n=c,s(5,n)})}const u=c=>j(S(),"SMUIDrawerScrim:click",c);return t.$$set=c=>{e=w(w({},e),ee(c)),s(7,i=k(e,o)),"use"in c&&s(0,r=c.use),"class"in c&&s(1,m=c.class),"fixed"in c&&s(2,_=c.fixed),"component"in c&&s(3,d=c.component),"$$scope"in c&&s(11,g=c.$$scope)},[r,m,_,d,S,n,l,i,f,h,u,g]}class Ge extends G{constructor(e){super();K(this,e,Ne,Pe,R,{use:0,class:1,fixed:2,component:3,getElement:4})}get getElement(){return this.$$.ctx[4]}}const xe=Ge;export{Qe as A,We as C,Je as D,Xe as H,xe as S,Ye as T,Ze as a};
