import{s as ne,l as rt,f as He,q as be,v as st,p as it,h as ae,w as E,b as f,i as Ke,j as G,g as lt,Z as ct,m as y,d as M,o as m,c as T,C as v,D as q,N as Ue,r as D,I as U,G as A,n as j,am as we,an as _e,E as ce,M as Z,H as Se,a0 as Te,T as ue,a6 as ut,a7 as dt,ao as ft,X as Ge,a as J,t as X,ap as de,aq as vt,ar as pt,Y as bt,as as fe,ac as ht,at as mt,S as yt,U as gt,au as wt,av as _t,k as St}from"./framework.7726510e.js";var Tt=Object.defineProperty,Ot=Object.defineProperties,It=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,$t=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,Ie=(t,e,n)=>e in t?Tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Nt=(t,e)=>{for(var n in e||(e={}))$t.call(e,n)&&Ie(t,n,e[n]);if(Oe)for(var n of Oe(e))Et.call(e,n)&&Ie(t,n,e[n]);return t},Ct=(t,e)=>Ot(t,It(e));function qe(t,e){var n;const a=ne();return rt(()=>{a.value=t()},Ct(Nt({},e),{flush:(n=e==null?void 0:e.flush)!=null?n:"sync"})),He(a)}var $e;const he=typeof window<"u",xt=t=>typeof t<"u",Pt=t=>typeof t=="function",Ft=t=>typeof t=="string",se=()=>{};he&&(($e=window==null?void 0:window.navigator)!=null&&$e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function W(t){return typeof t=="function"?t():f(t)}function Rt(t){return t}function me(t){return Ke()?(G(t),!0):!1}function kt(t,e=!0){be()?st(t):e?t():it(t)}function Bt(t,e,n={}){const{immediate:a=!0}=n,o=ae(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function c(){o.value=!1,i()}function d(...b){i(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,t(...b)},W(e))}return a&&(o.value=!0,he&&d()),me(c),{isPending:o,start:d,stop:c}}function Ee(t,e,n){return E(t,(a,o,r)=>{a&&e(a,o,r)},n)}function ye(t){var e;const n=W(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ge=he?window:void 0;function At(...t){let e,n,a,o;if(Ft(t[0])?([n,a,o]=t,e=ge):[e,n,a,o]=t,!e)return se;let r=se;const i=E(()=>ye(e),d=>{r(),d&&(d.addEventListener(n,a,o),r=()=>{d.removeEventListener(n,a,o),r=se})},{immediate:!0,flush:"post"}),c=()=>{i(),r()};return me(c),c}const Dt=t=>typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):t?()=>!0:()=>!1;function Lt(t,e,n={}){const{target:a=ge,eventName:o="keydown",passive:r=!1}=n,i=Dt(t);return At(a,o,d=>{i(d)&&e(d)},r)}function Ne(t,e=null){const n=be();let a=()=>{};const o=lt((r,i)=>(a=i,{get(){var c,d;return r(),(d=(c=n==null?void 0:n.proxy)==null?void 0:c.$refs[t])!=null?d:e},set(){}}));return kt(a),ct(a),o}function Mt(t){return JSON.parse(JSON.stringify(t))}const Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xe="__vueuse_ssr_handlers__";Ce[xe]=Ce[xe]||{};function zt(t,e={}){const{immediate:n=!0,window:a=ge}=e,o=ae(!1);let r=null;function i(){!o.value||!a||(t(),r=a.requestAnimationFrame(i))}function c(){!o.value&&a&&(o.value=!0,i())}function d(){o.value=!1,r!=null&&a&&(a.cancelAnimationFrame(r),r=null)}return n&&c(),me(d),{isActive:o,pause:d,resume:c}}var Pe;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Pe||(Pe={}));var jt=Object.defineProperty,Fe=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,Re=(t,e,n)=>e in t?jt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Kt=(t,e)=>{for(var n in e||(e={}))Vt.call(e,n)&&Re(t,n,e[n]);if(Fe)for(var n of Fe(e))Ht.call(e,n)&&Re(t,n,e[n]);return t};const Ut={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Kt({linear:Rt},Ut);function We(t,e,n,a={}){var o,r,i;const{clone:c=!1,passive:d=!1,eventName:b,deep:g=!1,defaultValue:_}=a,p=be(),O=n||(p==null?void 0:p.emit)||((o=p==null?void 0:p.$emit)==null?void 0:o.bind(p))||((i=(r=p==null?void 0:p.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(p==null?void 0:p.proxy));let I=b;e||(e="modelValue"),I=b||I||`update:${e.toString()}`;const P=N=>c?Pt(c)?c(N):Mt(N):N,z=()=>xt(t[e])?P(t[e]):_;if(d){const N=z(),k=ae(N);return E(()=>t[e],C=>k.value=P(C)),E(k,C=>{(C!==t[e]||g)&&O(I,C)},{deep:g}),k}else return y({get(){return z()},set(N){O(I,N)}})}function Gt(...t){return y(()=>t.every(e=>W(e)))}function qt(t){return y(()=>!W(t))}function ie(...t){return y(()=>t.some(e=>W(e)))}/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Qe=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],ee=Qe.join(","),Ye=typeof Element>"u",L=Ye?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ve=!Ye&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Ze=function(e,n,a){var o=Array.prototype.slice.apply(e.querySelectorAll(ee));return n&&L.call(e,ee)&&o.unshift(e),o=o.filter(a),o},Je=function t(e,n,a){for(var o=[],r=Array.from(e);r.length;){var i=r.shift();if(i.tagName==="SLOT"){var c=i.assignedElements(),d=c.length?c:i.children,b=t(d,!0,a);a.flatten?o.push.apply(o,b):o.push({scope:i,candidates:b})}else{var g=L.call(i,ee);g&&a.filter(i)&&(n||!e.includes(i))&&o.push(i);var _=i.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(i),p=!a.shadowRootFilter||a.shadowRootFilter(i);if(_&&p){var O=t(_===!0?i.children:_.children,!0,a);a.flatten?o.push.apply(o,O):o.push({scope:i,candidates:O})}else r.unshift.apply(r,i.children)}}return o},Xe=function(e,n){return e.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Wt=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},et=function(e){return e.tagName==="INPUT"},Qt=function(e){return et(e)&&e.type==="hidden"},Yt=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return n},Zt=function(e,n){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===n)return e[a]},Jt=function(e){if(!e.name)return!0;var n=e.form||ve(e),a=function(c){return n.querySelectorAll('input[type="radio"][name="'+c+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=a(window.CSS.escape(e.name));else try{o=a(e.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var r=Zt(o,e.form);return!r||r===e},Xt=function(e){return et(e)&&e.type==="radio"},en=function(e){return Xt(e)&&!Jt(e)},ke=function(e){var n=e.getBoundingClientRect(),a=n.width,o=n.height;return a===0&&o===0},tn=function(e,n){var a=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var r=L.call(e,"details>summary:first-of-type"),i=r?e.parentElement:e;if(L.call(i,"details:not([open]) *"))return!0;var c=ve(e).host,d=(c==null?void 0:c.ownerDocument.contains(c))||e.ownerDocument.contains(e);if(!a||a==="full"){if(typeof o=="function"){for(var b=e;e;){var g=e.parentElement,_=ve(e);if(g&&!g.shadowRoot&&o(g)===!0)return ke(e);e.assignedSlot?e=e.assignedSlot:!g&&_!==e.ownerDocument?e=_.host:e=g}e=b}if(d)return!e.getClientRects().length}else if(a==="non-zero-area")return ke(e);return!1},nn=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var a=0;a<n.children.length;a++){var o=n.children.item(a);if(o.tagName==="LEGEND")return L.call(n,"fieldset[disabled] *")?!0:!o.contains(e)}return!0}n=n.parentElement}return!1},te=function(e,n){return!(n.disabled||Qt(n)||tn(n,e)||Yt(n)||nn(n))},pe=function(e,n){return!(en(n)||Xe(n)<0||!te(e,n))},an=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},on=function t(e){var n=[],a=[];return e.forEach(function(o,r){var i=!!o.scope,c=i?o.scope:o,d=Xe(c,i),b=i?t(o.candidates):c;d===0?i?n.push.apply(n,b):n.push(c):a.push({documentOrder:r,tabIndex:d,item:o,isScope:i,content:b})}),a.sort(Wt).reduce(function(o,r){return r.isScope?o.push.apply(o,r.content):o.push(r.content),o},[]).concat(n)},rn=function(e,n){n=n||{};var a;return n.getShadowRoot?a=Je([e],n.includeContainer,{filter:pe.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:an}):a=Ze(e,n.includeContainer,pe.bind(null,n)),on(a)},sn=function(e,n){n=n||{};var a;return n.getShadowRoot?a=Je([e],n.includeContainer,{filter:te.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):a=Ze(e,n.includeContainer,te.bind(null,n)),a},Q=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return L.call(e,ee)===!1?!1:pe(n,e)},ln=Qe.concat("iframe").join(","),le=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return L.call(e,ln)===!1?!1:te(n,e)};/*!
* focus-trap 6.9.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Be(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function Ae(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Be(Object(n),!0).forEach(function(a){cn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function cn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var De=function(){var t=[];return{activateTrap:function(n){if(t.length>0){var a=t[t.length-1];a!==n&&a.pause()}var o=t.indexOf(n);o===-1||t.splice(o,1),t.push(n)},deactivateTrap:function(n){var a=t.indexOf(n);a!==-1&&t.splice(a,1),t.length>0&&t[t.length-1].unpause()}}}(),un=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},dn=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},fn=function(e){return e.key==="Tab"||e.keyCode===9},Le=function(e){return setTimeout(e,0)},Me=function(e,n){var a=-1;return e.every(function(o,r){return n(o)?(a=r,!1):!0}),a},K=function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return typeof e=="function"?e.apply(void 0,a):e},Y=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},vn=function(e,n){var a=(n==null?void 0:n.document)||document,o=Ae({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),r={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},i,c=function(s,l,u){return s&&s[l]!==void 0?s[l]:o[u||l]},d=function(s){return r.containerGroups.findIndex(function(l){var u=l.container,h=l.tabbableNodes;return u.contains(s)||h.find(function(S){return S===s})})},b=function(s){var l=o[s];if(typeof l=="function"){for(var u=arguments.length,h=new Array(u>1?u-1:0),S=1;S<u;S++)h[S-1]=arguments[S];l=l.apply(void 0,h)}if(l===!0&&(l=void 0),!l){if(l===void 0||l===!1)return l;throw new Error("`".concat(s,"` was specified but was not a node, or did not return a node"))}var $=l;if(typeof l=="string"&&($=a.querySelector(l),!$))throw new Error("`".concat(s,"` as selector refers to no known node"));return $},g=function(){var s=b("initialFocus");if(s===!1)return!1;if(s===void 0)if(d(a.activeElement)>=0)s=a.activeElement;else{var l=r.tabbableGroups[0],u=l&&l.firstTabbableNode;s=u||b("fallbackFocus")}if(!s)throw new Error("Your focus-trap needs to have at least one focusable element");return s},_=function(){if(r.containerGroups=r.containers.map(function(s){var l=rn(s,o.tabbableOptions),u=sn(s,o.tabbableOptions);return{container:s,tabbableNodes:l,focusableNodes:u,firstTabbableNode:l.length>0?l[0]:null,lastTabbableNode:l.length>0?l[l.length-1]:null,nextTabbableNode:function(S){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,F=u.findIndex(function(B){return B===S});if(!(F<0))return $?u.slice(F+1).find(function(B){return Q(B,o.tabbableOptions)}):u.slice(0,F).reverse().find(function(B){return Q(B,o.tabbableOptions)})}}}),r.tabbableGroups=r.containerGroups.filter(function(s){return s.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!b("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function w(s){if(s!==!1&&s!==a.activeElement){if(!s||!s.focus){w(g());return}s.focus({preventScroll:!!o.preventScroll}),r.mostRecentlyFocusedNode=s,un(s)&&s.select()}},O=function(s){var l=b("setReturnFocus",s);return l||(l===!1?!1:s)},I=function(s){var l=Y(s);if(!(d(l)>=0)){if(K(o.clickOutsideDeactivates,s)){i.deactivate({returnFocus:o.returnFocusOnDeactivate&&!le(l,o.tabbableOptions)});return}K(o.allowOutsideClick,s)||s.preventDefault()}},P=function(s){var l=Y(s),u=d(l)>=0;u||l instanceof Document?u&&(r.mostRecentlyFocusedNode=l):(s.stopImmediatePropagation(),p(r.mostRecentlyFocusedNode||g()))},z=function(s){var l=Y(s);_();var u=null;if(r.tabbableGroups.length>0){var h=d(l),S=h>=0?r.containerGroups[h]:void 0;if(h<0)s.shiftKey?u=r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:u=r.tabbableGroups[0].firstTabbableNode;else if(s.shiftKey){var $=Me(r.tabbableGroups,function(oe){var re=oe.firstTabbableNode;return l===re});if($<0&&(S.container===l||le(l,o.tabbableOptions)&&!Q(l,o.tabbableOptions)&&!S.nextTabbableNode(l,!1))&&($=h),$>=0){var F=$===0?r.tabbableGroups.length-1:$-1,B=r.tabbableGroups[F];u=B.lastTabbableNode}}else{var H=Me(r.tabbableGroups,function(oe){var re=oe.lastTabbableNode;return l===re});if(H<0&&(S.container===l||le(l,o.tabbableOptions)&&!Q(l,o.tabbableOptions)&&!S.nextTabbableNode(l))&&(H=h),H>=0){var at=H===r.tabbableGroups.length-1?0:H+1,ot=r.tabbableGroups[at];u=ot.firstTabbableNode}}}else u=b("fallbackFocus");u&&(s.preventDefault(),p(u))},N=function(s){if(dn(s)&&K(o.escapeDeactivates,s)!==!1){s.preventDefault(),i.deactivate();return}if(fn(s)){z(s);return}},k=function(s){var l=Y(s);d(l)>=0||K(o.clickOutsideDeactivates,s)||K(o.allowOutsideClick,s)||(s.preventDefault(),s.stopImmediatePropagation())},C=function(){if(r.active)return De.activateTrap(i),r.delayInitialFocusTimer=o.delayInitialFocus?Le(function(){p(g())}):p(g()),a.addEventListener("focusin",P,!0),a.addEventListener("mousedown",I,{capture:!0,passive:!1}),a.addEventListener("touchstart",I,{capture:!0,passive:!1}),a.addEventListener("click",k,{capture:!0,passive:!1}),a.addEventListener("keydown",N,{capture:!0,passive:!1}),i},V=function(){if(r.active)return a.removeEventListener("focusin",P,!0),a.removeEventListener("mousedown",I,!0),a.removeEventListener("touchstart",I,!0),a.removeEventListener("click",k,!0),a.removeEventListener("keydown",N,!0),i};return i={get active(){return r.active},get paused(){return r.paused},activate:function(s){if(r.active)return this;var l=c(s,"onActivate"),u=c(s,"onPostActivate"),h=c(s,"checkCanFocusTrap");h||_(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=a.activeElement,l&&l();var S=function(){h&&_(),C(),u&&u()};return h?(h(r.containers.concat()).then(S,S),this):(S(),this)},deactivate:function(s){if(!r.active)return this;var l=Ae({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},s);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,V(),r.active=!1,r.paused=!1,De.deactivateTrap(i);var u=c(l,"onDeactivate"),h=c(l,"onPostDeactivate"),S=c(l,"checkCanReturnFocus"),$=c(l,"returnFocus","returnFocusOnDeactivate");u&&u();var F=function(){Le(function(){$&&p(O(r.nodeFocusedBeforeActivation)),h&&h()})};return $&&S?(S(O(r.nodeFocusedBeforeActivation)).then(F,F),this):(F(),this)},pause:function(){return r.paused||!r.active?this:(r.paused=!0,V(),this)},unpause:function(){return!r.paused||!r.active?this:(r.paused=!1,_(),C(),this)},updateContainerElements:function(s){var l=[].concat(s).filter(Boolean);return r.containers=l.map(function(u){return typeof u=="string"?a.querySelector(u):u}),r.active&&_(),this}},i.updateContainerElements(e),i};const x={Info:"info",Success:"success",Warning:"warning",Error:"error"},pn={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},bn=v("title",null,"basic-close-24",-1),hn=v("path",{d:"M18.364 4.222l1.414 1.414-14.142 14.142-1.414-1.414 14.142-14.142z"},null,-1),mn=v("path",{d:"M4.222 5.636l1.414-1.414 14.142 14.142-1.414 1.414-14.142-14.142z"},null,-1),yn=[bn,hn,mn];function gn(t,e){return m(),T("svg",pn,yn)}const tt={render:gn},wn={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},_n=v("title",null,"basic-circle-checked-24",-1),Sn=v("path",{d:"M12 23c-6.075 0-11-4.925-11-11s4.925-11 11-11c6.075 0 11 4.925 11 11s-4.925 11-11 11zM12 21c4.971 0 9-4.029 9-9s-4.029-9-9-9c-4.971 0-9 4.029-9 9s4.029 9 9 9zM15.293 8.293l-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707 6.707-6.707-1.414-1.414z"},null,-1),Tn=[_n,Sn];function On(t,e){return m(),T("svg",wn,Tn)}const In={render:On},$n={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},En=v("title",null,"notifications-info-24",-1),Nn=v("path",{d:"M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11c0-6.075-4.925-11-11-11s-11 4.925-11 11zM21 12c0 4.971-4.029 9-9 9s-9-4.029-9-9c0-4.971 4.029-9 9-9s9 4.029 9 9zM13.004 13.998h0.999v2h-4v-2h1v-2h-1v-2h3.001v4zM13.001 7.998c0 0.552-0.448 1-1 1s-1-0.448-1-1 0.448-1 1-1c0.552 0 1 0.448 1 1z"},null,-1),Cn=[En,Nn];function xn(t,e){return m(),T("svg",$n,Cn)}const Pn={render:xn},Fn={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Rn=v("title",null,"notifications-alert-triangle-24",-1),kn=v("path",{d:"M22.442 15.953l-7.005-11.976c-0.703-1.219-2.014-1.976-3.432-1.978s-2.729 0.752-3.441 1.978l-7.008 11.98c-0.727 1.222-0.743 2.753-0.039 4.002 0.704 1.25 2.023 2.027 3.458 2.039h14.038c1.45-0.014 2.766-0.789 3.471-2.038 0.703-1.247 0.688-2.775-0.041-4.007zM3.278 16.974l7.013-11.989c0.355-0.611 1.007-0.986 1.711-0.985s1.356 0.377 1.705 0.982l7.011 11.985c0.367 0.621 0.375 1.386 0.023 2.010s-1.012 1.014-1.738 1.021l-14.020-0c-0.711-0.006-1.371-0.395-1.724-1.021s-0.344-1.392 0.020-2.003zM12 17.998c0.552 0 1-0.448 1-1s-0.448-1-1-1c-0.552 0-1 0.448-1 1s0.448 1 1 1zM13.004 7.998h-2.001v7h2.001v-7z"},null,-1),Bn=[Rn,kn];function An(t,e){return m(),T("svg",Fn,Bn)}const Dn={render:An},Ln={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Mn=v("title",null,"notifications-x-octagon-24",-1),zn=v("path",{d:"M16.556 1l6.444 6.444v9.113l-6.444 6.444h-9.113l-6.444-6.444v-9.113l6.444-6.444h9.113zM15.728 3h-7.456l-5.272 5.272v7.456l5.272 5.272h7.456l5.272-5.272v-7.456l-5.272-5.272zM8.707 16.707l3.293-3.293 3.293 3.293 1.414-1.414-3.293-3.293 3.293-3.293-1.414-1.414-3.293 3.293-3.293-3.293-1.414 1.414 3.293 3.293-3.293 3.293 1.414 1.414z"},null,-1),jn=[Mn,zn];function Vn(t,e){return m(),T("svg",Ln,jn)}const Hn={render:Vn},Kn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Un=v("path",{d:"M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z",fill:"currentColor"},null,-1),Gn=[Un];function qn(t,e){return m(),T("svg",Kn,Gn)}const Wn={name:"ri-alert-fill",render:qn},Qn={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Yn=v("title",null,"status-success-clr-16",-1),Zn=v("path",{fill:"#090",d:"M15 8c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-3.866 3.134-7 7-7s7 3.134 7 7z"},null,-1),Jn=v("path",{fill:"#fff",d:"M11.98 6.207l-5.207 5.207-2.753-2.753 1.414-1.414 1.338 1.338 3.793-3.793 1.414 1.414z"},null,-1),Xn=[Yn,Zn,Jn];function ea(t,e){return m(),T("svg",Qn,Xn)}const ta={render:ea},na={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},aa=v("title",null,"status-error-ic-16",-1),oa=v("path",{d:"M8 15c-3.866 0-7-3.134-7-7s3.134-7 7-7c3.866 0 7 3.134 7 7s-3.134 7-7 7zM9.414 8l2.293-2.293-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414-2.293-2.293z"},null,-1),ra=[aa,oa];function sa(t,e){return m(),T("svg",na,ra)}const ia={render:sa},nt={[x.Info]:Pn,[x.Warning]:Dn,[x.Error]:Hn,[x.Success]:In};x.Warning+"",x.Error+"",x.Success+"";function la(t){const e=Ge(t);if(!e)throw new Error(`Injection of "${String(t)}" failed`);return e}let ca=0;function ua(){return ca++}function da(){return`soraui-uid-${ua()}`}const fa=["data-status"],va={class:"s-alert__icon-wrapper"},pa={class:"flex-1"},ba={class:"sora-tpg-h5"},ha={class:"sora-tpg-p3"},ma={key:0,class:"s-alert__close-wrapper"},co=M({name:"SAlert",props:{inline:{type:Boolean},status:{default:x.Info},showCloseBtn:{type:Boolean,default:!1},title:null,description:null},emits:["click:close"],setup(t,{emit:e}){const n=t,a=qe(()=>nt[n.status]);function o(){e("click:close")}return(r,i)=>(m(),T("div",{class:j(["s-alert",{"s-alert_inline":t.inline}]),"data-status":t.status},[v("div",va,[(m(),q(Ue(f(a))))]),v("div",pa,[v("div",ba,[D(r.$slots,"title",{},()=>[J(X(t.title),1)])]),v("div",ha,[D(r.$slots,"description",{},()=>[J(X(t.description),1)])])]),t.showCloseBtn?(m(),T("div",ma,[v("button",{onClick:o},[U(f(tt))])])):A("",!0)],10,fa))}}),ya=t=>(yt("data-v-b244ad8e"),t=t(),gt(),t),ga={viewBox:"0 0 50 50"},wa=ya(()=>v("circle",{cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"},null,-1)),_a=[wa],Sa=M({name:"SSpinner",props:{size:{default:"1em"},width:{default:5}},setup(t){const e=t;pt(a=>({"44120f1a":f(n),"0d455870":t.width}));const n=qe(()=>typeof e.size=="number"||!Number.isNaN(Number(e.size))?`${e.size}px`:e.size);return(a,o)=>(m(),T("svg",ga,_a))}}),Ta=(t,e)=>{const n=t.__vccOpts||t;for(const[a,o]of e)n[a]=o;return n},Oa=Ta(Sa,[["__scopeId","data-v-b244ad8e"]]),ze=t=>typeof t=="string"?`'${t}'`:JSON.stringify(t);function Ia(t){return function(e,n,a){return y(()=>{if(n.includes(t[e]))return t[e];const o=n.map(ze).join(" | "),r=ze(t[e]);return console.warn(`[soramitsu-ui warn]: Invalid prop: type check failed for prop "${String(e)}". Expected: ${o}, got ${r}`),a})}}const $a=["primary","secondary","outline","action"],Ea=["xs","sm","md","lg"],Na=["left","right"],Ca={xs:"12",sm:"18",md:"24",lg:"24"},xa={xs:"3",sm:"4",md:"4",lg:"4"},Pa={xs:"sora-tpg-p4",sm:"sora-tpg-h7",md:"sora-tpg-h6",lg:"sora-tpg-h5"},Fa=["type","disabled"],Ra={class:"s-button__icon"},ka={class:"s-button__text"},uo=M({name:"SButton",props:{type:{default:"secondary"},size:{default:"md"},nativeType:{default:"button"},icon:{default:""},iconPosition:{default:"left"},rounded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},uppercase:{type:Boolean,default:!1}},setup(t){const e=t,n=Ia(e),a=n("type",$a,"primary"),o=n("size",Ea,"md"),r=n("iconPosition",Na,"left"),i=y(()=>a.value==="action"),c=y(()=>o.value==="xs"&&e.uppercase?"sora-tpg-ch3":Pa[o.value]);return(d,b)=>(m(),T("button",{type:t.nativeType,class:j(["s-button",`s-button_type_${f(a)}`,`s-button_size_${f(o)}`,`s-button_icon-position_${f(r)}`,f(c),{"s-button_disabled":t.loading||t.disabled,"s-button_rounded":f(i)&&t.rounded,"s-button_loading":t.loading}]),disabled:t.loading||t.disabled},[t.loading?(m(),q(f(Oa),{key:0,class:"flex-grow absolute",size:f(Ca)[f(o)],width:f(xa)[f(o)]},null,8,["size","width"])):A("",!0),v("span",Ra,[t.icon?(m(),T("i",{key:0,class:j(t.icon)},null,2)):D(d.$slots,"icon",{key:1})]),v("span",ka,[f(i)?A("",!0):D(d.$slots,"default",{key:0})])],10,Fa))}});function je(t){return t?typeof t=="string"?{name:t}:t:null}function Ba(t,e){Lt("Escape",()=>{t.value&&e()})}const R={Hidden:"hidden",Entering:"entering",Visible:"visible",Leaving:"leaving"};function Aa(t){return mt(Object.fromEntries(t.map(e=>[e,R.Hidden])))}function Da(t){const e=Aa(t);function n(a,o){e[a]=o}return{state:e,toggle:n}}function Ve(t,e){return{beforeEnter:()=>e(t,R.Entering),afterEnter:()=>e(t,R.Visible),beforeLeave:()=>e(t,R.Leaving),afterLeave:()=>e(t,R.Hidden)}}function La({show:t,eager:e,emit:n,overlayEnabled:a}){const{toggle:o,state:r}=Da(["modal","overlay"]),i=y(()=>r.modal===R.Hidden&&r.overlay===R.Hidden),c=y(()=>r.modal===R.Visible&&r.overlay===R.Visible),d=qt(i);E(t,P=>{n(P?"before-open":"before-close")},{flush:"pre"}),Ee(c,()=>n("after-open")),Ee(i,()=>n("after-close"));const b=ie(e,t,d),g=ie(t,d),_=ie(e,t),p=t,O=!(e.value&&!t.value),I=Gt(t,a);return{toggleFragmentVisibility:o,rootIf:b,rootShow:g,modalIf:_,modalShow:p,modalTransitionAppear:O,overlayIf:I,overlayTransitionListeners:Ve("overlay",o),modalTransitionListeners:Ve("modal",o)}}const Ma=Symbol("ModalAPI");function za(t){const e=ne(null),n=y(()=>ye(t.elem));return E(n,a=>{const o=e.value;if(a)if(o)o.updateContainerElements(a);else{const r=de(vn(a,t.options));e.value=r}else o&&(o.deactivate(),e.value=null)},{immediate:!0}),G(()=>{var a;(a=e.value)==null||a.deactivate()}),{trap:e}}const ja=Symbol("SBodyScrollLockApi");function Va(t){const e=Ge(ja,void 0);if(!e)return;const n=y(()=>ye(t));E(n,(a,o)=>{o&&e.unlock(o),a&&e.lock(a)},{immediate:!0}),G(()=>{const a=n.value;a&&e.unlock(a)})}const Ha=["data-absolute"],Ka=["aria-labelledby","aria-describedby"],fo=M({name:"SModal",props:{show:{type:Boolean},teleportTo:{default:"body"},absolute:{type:Boolean},rootClass:null,modalClass:null,overlayClass:null,rootStyle:null,modalStyle:null,overlayStyle:null,modalTransition:{default:"s-modal__modal-transition"},overlayTransition:{default:"s-modal__overlay-transition"},lockScroll:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0},closeOnOverlayClick:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},focusTrap:{type:[Boolean,Object],default:!0},eager:{type:Boolean,default:!1},labelledBy:{default:da},describedBy:{default:null}},emits:["update:show","click:overlay","before-open","after-open","before-close","after-close"],setup(t,{emit:e}){const n=t,a=We(n,"show",e),o=y(()=>n.eager),r=y(()=>n.showOverlay);function i(){a.value=!1}const c=Ne("modal"),d=Ne("root"),b=y(()=>je(n.overlayTransition)),g=y(()=>je(n.modalTransition)),{rootIf:_,rootShow:p,modalIf:O,modalShow:I,overlayIf:P,overlayTransitionListeners:z,modalTransitionListeners:N,modalTransitionAppear:k}=La({show:a,overlayEnabled:r,eager:o,emit:e});let C=null;if(n.focusTrap){const s=n.focusTrap===!0?{}:n.focusTrap,l=ne(null);E([I,d],([u,h])=>{l.value=u?h??null:null},{flush:"post"}),{trap:C}=za({elem:l,options:{...s,escapeDeactivates(u){return typeof s.escapeDeactivates=="function"?s.escapeDeactivates(u):!!n.closeOnEsc}}}),E(C,u=>{try{u==null||u.activate()}catch(h){throw console.warn(`[SModal] focus-trap activation is failed. Does your modal contain any tabbable node?
Tip: you can disable focus-trap completely by setting \`focus-trap\` prop to \`false\`

Original error:

%o`,h),h}},{immediate:!0})}Va(y(()=>n.lockScroll?f(c):null));const V=He({close:i,focusTrap:C,labelledBy:y(()=>n.labelledBy),describedBy:y(()=>n.describedBy)});bt(Ma,V);function w(){e("click:overlay"),n.closeOnOverlayClick&&(a.value=!1)}return Ba(y(()=>a.value&&n.closeOnEsc),i),(s,l)=>(m(),q(ft,{to:t.teleportTo,disabled:t.teleportTo===null},[f(_)?we((m(),T("div",{key:0,ref:"root",class:j(["s-modal__root",t.rootClass]),style:Z(t.rootStyle),"data-absolute":t.absolute},[U(ue,Se({appear:""},f(b),Te(f(z))),{default:ce(()=>[f(P)?(m(),T("div",{key:0,class:j(["s-modal__overlay",t.overlayClass]),style:Z(t.overlayStyle),onClick:w},null,6)):A("",!0)]),_:1},16),U(ue,Se({appear:f(k)},f(g),Te(f(N))),{default:ce(()=>[f(O)?we((m(),T("div",{key:0,ref:"modal",style:Z(t.modalStyle),class:j(["s-modal__modal",t.modalClass]),role:"dialog","aria-modal":"true","aria-labelledby":t.labelledBy,"aria-describedby":t.describedBy||""},[D(s.$slots,"default",ut(dt(f(V))))],14,Ka)),[[_e,f(I)]]):A("",!0)]),_:3},16,["appear"])],14,Ha)),[[_e,f(p)]]):A("",!0)],8,["to","disabled"]))}}),Ua=Symbol("NotificationsToastsAPI"),Ga=M({name:"SNotificationBodyTimeline",props:{timeout:null},emits:["timeout"],setup(t,{emit:e}){const n=t,{timeout:a}=vt(n);let o=null;const r=ae(0),{start:i,stop:c,isPending:d}=Bt(()=>{o=null,e("timeout")},a,{immediate:!1}),{pause:b,resume:g}=zt(()=>{if(o){const[p,O]=o,I=performance.now();r.value=Math.max(0,Math.min(1,(I-p)/(O-p)))}else r.value=0,b()},{immediate:!1});E(a,p=>{if(c(),o=null,p){const O=performance.now();o=[O,O+p],i(),g()}},{immediate:!0});const _=y(()=>`${r.value*100}%`);return(p,O)=>(m(),q(ue,{name:"s-notification-body-timeline__transition"},{default:ce(()=>[f(d)?(m(),T("div",{key:0,class:"s-notification-body-timeline",style:Z({right:f(_)})},null,4)):A("",!0)]),_:1}))}}),qa=["data-status"],Wa={class:"flex space-x-4"},Qa={class:"s-notification-body__icon-wrapper"},Ya={class:"flex-1"},Za={class:"sora-tpg-p2"},Ja={class:"sora-tpg-p4"},Xa={class:"s-notification-body__close-wrapper"},eo=M({name:"SNotificationBody",props:{title:null,description:null,status:{default:x.Info},timeout:{default:0},showCloseBtn:{type:Boolean}},emits:["click:close","timeout"],setup(t,{emit:e}){const n=t,a=y(()=>nt[n.status]);function o(){e("click:close")}function r(){e("timeout")}return(i,c)=>(m(),T("div",{class:"s-notification-body","data-status":t.status},[v("div",Wa,[v("div",Qa,[(m(),q(Ue(f(a))))]),v("div",Ya,[v("div",Za,[D(i.$slots,"title",{},()=>[J(X(t.title),1)])]),v("div",Ja,[D(i.$slots,"description",{},()=>[J(X(t.description),1)])])]),v("div",Xa,[t.showCloseBtn?(m(),T("button",{key:0,onClick:o},[U(f(tt))])):A("",!0)])]),U(Ga,{timeout:t.timeout,onTimeout:r},null,8,["timeout"])],8,qa))}});function to(t,e){let n=null;function a(){n=fe(),n.run(e)}function o(){n==null||n.stop()}E(t,r=>{r?a():o()},{immediate:!0}),G(o)}x.Info;function vo(t,e,n){return E(()=>t.fulfilled,a=>a&&e(a.value),n)}function po(t,e,n){return E(()=>t.rejected,a=>a&&e(a.reason),n)}function no(){let t=null;const e=wt({pending:!1,fulfilled:null,rejected:null});function n(o){t=o,e.pending=!0,e.fulfilled=null,e.rejected=null,o.then(r=>{o===t&&(e.pending=!1,e.fulfilled=de({value:r}))}).catch(r=>{o===t&&(e.pending=!1,e.rejected=de({reason:r}))})}function a(){t=null,e.pending=!1,e.fulfilled=e.rejected=null}return{state:e,set:n,clear:a}}function bo(t,e){const{state:n,set:a,clear:o}=no(),r=()=>a(t());return e!=null&&e.immediate&&r(),{state:n,run:r,clear:o}}function ao(){const t=Ke()||fe();let e=null;const n=ne(null);function a(r){o(),t.run(()=>{e=fe(),e.run(()=>{n.value={expose:r()}})})}function o(){e&&(e.stop(),e=n.value=null)}return{setup:a,dispose:o,scope:_t(n)}}function oo(t){const e=typeof t;return t===!0||e==="string"||e==="number"||e==="symbol"}function ro(t){return oo(t)?t:t.key}function so(t){return typeof t=="object"?t:{key:t}}function io(t){return t==null||t===!1?null:{some:t}}function ho(t,e){const n=ao(),a=y(()=>{const o=St(t)?t.value:t();return io(o)});return E(()=>{const o=a.value;return o?ro(o.some):null},o=>{o?n.setup(()=>{if(o===!0)return{expose:e(!0)};const r=a.value.some;return{expose:e(r),...so(r)}}):n.dispose()},{immediate:!0}),y(()=>{var o;return((o=n.scope.value)==null?void 0:o.expose)??null})}export{x as S,co as _,Oa as a,bo as b,no as c,po as d,uo as e,fo as f,ho as u,vo as w};
