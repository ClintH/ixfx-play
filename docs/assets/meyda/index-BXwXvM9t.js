var Hi=i=>{throw TypeError(i)};var ii=(i,e,t)=>e.has(i)||Hi("Cannot "+t);var $=(i,e,t)=>(ii(i,e,"read from private field"),t?t.call(i):e.get(i)),R=(i,e,t)=>e.has(i)?Hi("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),D=(i,e,t,n)=>(ii(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),A=(i,e,t)=>(ii(i,e,"access private method"),t);var Wi=(i,e,t,n)=>({set _(r){D(i,e,r,t)},get _(){return $(i,e,n)}});import"../modulepreload-polyfill-B5Qt9EMX.js";import{c as Fe,r as Pt,a as qr,d as Gi,e as jr,f as Ur}from"../geometry-CqFA_olX.js";import{s as ni,w as Hr,c as di,r as Wr,a as Gr,b as Kr,m as Xr}from"../numbers-410CCdbt.js";import{g as Jr,b as Yr}from"../dom-CHyIdTDe.js";import{t as re}from"../collections-CC1DmOuq.js";import{c as we,C as Zr,d as Qr}from"../visual-DuJQoaeN.js";import{_ as le,m as es,c as Ki,n as ts,d as Xi,f as is,g as ns,h as rs,j as Ji,k as ss,s as os}from"../src-2eX6lIN8-VI_Nykma.js";import{E as as,F as xn,g as Rt,S as Ye,G as Sn,H as _n,I as Dt,J as Bt,K as ls,L as ri,M as Yi,c as si,d as cs,Q as fi,e as hs,N as us,t as it,O as ds,P as fs,k as ps,l as ms,m as gs,o as vs,p as ys,R as Zi}from"../src-CURfSkGx-Bgs9tt00.js";import{d as $n,e as pi,o as ws,h as Ze,a as Qi,t as Ht,b as An,f as En,i as bs,m as Cn,j as xs,p as Ss}from"../src-DUdYWbDU-DVRE-5Mg.js";import{r as ge}from"../src-CtUbQWIP-Vt_fnXRn.js";import{m as _s,f as en,t as $s,a as mi,b as As,c as Es}from"../src-3nHXiifJ-B3Cja0hK.js";import"../dist-DE4H3J9W-C3hFOwYK.js";import"../records-Cei7yF1D-C5ys4Q3F.js";import"../is-integer-BmMnD0ra-CbN5m7X_.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=globalThis,Ci=Ft.ShadowRoot&&(Ft.ShadyCSS===void 0||Ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ki=Symbol(),tn=new WeakMap;let kn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ki)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ci&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=tn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&tn.set(t,e))}return e}toString(){return this.cssText}};const Cs=i=>new kn(typeof i=="string"?i:i+"",void 0,ki),te=(i,...e)=>{const t=i.length===1?i[0]:e.reduce(((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1]),i[0]);return new kn(t,i,ki)},ks=(i,e)=>{if(Ci)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const n=document.createElement("style"),r=Ft.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},nn=Ci?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Cs(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ms,defineProperty:Ps,getOwnPropertyDescriptor:Fs,getOwnPropertyNames:Ts,getOwnPropertySymbols:Ns,getPrototypeOf:Rs}=Object,Wt=globalThis,rn=Wt.trustedTypes,Ds=rn?rn.emptyScript:"",Bs=Wt.reactiveElementPolyfillSupport,lt=(i,e)=>i,Ot={toAttribute(i,e){switch(e){case Boolean:i=i?Ds:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Mi=(i,e)=>!Ms(i,e),sn={attribute:!0,type:String,converter:Ot,reflect:!1,useDefault:!1,hasChanged:Mi};Symbol.metadata??=Symbol("metadata"),Wt.litPropertyMetadata??=new WeakMap;let Pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ps(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:s}=Fs(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:r,set(o){const a=r?.call(this);s?.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sn}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const e=Rs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const t=this.properties,n=[...Ts(t),...Ns(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(nn(r))}else e!==void 0&&t.push(nn(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ks(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:Ot).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ot;this._$Em=r;const a=o.fromAttribute(t,s.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){const r=this.constructor,s=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??Mi)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:s},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,s]of n){const{wrapped:o}=s,a=this[r];o!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,s,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((n=>n.hostUpdate?.())),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Pe[lt("elementProperties")]=new Map,Pe[lt("finalized")]=new Map,Bs?.({ReactiveElement:Pe}),(Wt.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=globalThis,zt=Pi.trustedTypes,on=zt?zt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Mn="$lit$",ue=`lit$${Math.random().toFixed(9).slice(2)}$`,Pn="?"+ue,Os=`<${Pn}>`,Ae=document,ht=()=>Ae.createComment(""),ut=i=>i===null||typeof i!="object"&&typeof i!="function",Fi=Array.isArray,zs=i=>Fi(i)||typeof i?.[Symbol.iterator]=="function",oi=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,an=/-->/g,ln=/>/g,ve=RegExp(`>|${oi}(?:([^\\s"'>=/]+)(${oi}*=${oi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cn=/'/g,hn=/"/g,Fn=/^(?:script|style|textarea|title)$/i,Tn=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),L=Tn(1),Q=Tn(2),Ee=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),un=new WeakMap,be=Ae.createTreeWalker(Ae,129);function Nn(i,e){if(!Fi(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return on!==void 0?on.createHTML(e):e}const Ls=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=nt;for(let a=0;a<t;a++){const u=i[a];let p,x,d=-1,m=0;for(;m<u.length&&(o.lastIndex=m,x=o.exec(u),x!==null);)m=o.lastIndex,o===nt?x[1]==="!--"?o=an:x[1]!==void 0?o=ln:x[2]!==void 0?(Fn.test(x[2])&&(r=RegExp("</"+x[2],"g")),o=ve):x[3]!==void 0&&(o=ve):o===ve?x[0]===">"?(o=r??nt,d=-1):x[1]===void 0?d=-2:(d=o.lastIndex-x[2].length,p=x[1],o=x[3]===void 0?ve:x[3]==='"'?hn:cn):o===hn||o===cn?o=ve:o===an||o===ln?o=nt:(o=ve,r=void 0);const g=o===ve&&i[a+1].startsWith("/>")?" ":"";s+=o===nt?u+Os:d>=0?(n.push(p),u.slice(0,d)+Mn+u.slice(d)+ue+g):u+ue+(d===-2?a:g)}return[Nn(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class dt{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const a=e.length-1,u=this.parts,[p,x]=Ls(e,t);if(this.el=dt.createElement(p,n),be.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=be.nextNode())!==null&&u.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Mn)){const m=x[o++],g=r.getAttribute(d).split(ue),_=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:_[2],strings:g,ctor:_[1]==="."?Vs:_[1]==="?"?qs:_[1]==="@"?js:Gt}),r.removeAttribute(d)}else d.startsWith(ue)&&(u.push({type:6,index:s}),r.removeAttribute(d));if(Fn.test(r.tagName)){const d=r.textContent.split(ue),m=d.length-1;if(m>0){r.textContent=zt?zt.emptyScript:"";for(let g=0;g<m;g++)r.append(d[g],ht()),be.nextNode(),u.push({type:2,index:++s});r.append(d[m],ht())}}}else if(r.nodeType===8)if(r.data===Pn)u.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(ue,d+1))!==-1;)u.push({type:7,index:s}),d+=ue.length-1}s++}}static createElement(e,t){const n=Ae.createElement("template");return n.innerHTML=e,n}}function Xe(i,e,t=i,n){if(e===Ee)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl;const s=ut(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=Xe(i,r._$AS(i,e.values),r,n)),e}let Is=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ae).importNode(t,!0);be.currentNode=r;let s=be.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let p;u.type===2?p=new Qe(s,s.nextSibling,this,e):u.type===1?p=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(p=new Us(s,this,e)),this._$AV.push(p),u=n[++a]}o!==u?.index&&(s=be.nextNode(),o++)}return be.currentNode=Ae,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}};class Qe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Xe(this,e,t),ut(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==Ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&ut(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ae.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=dt.createElement(Nn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const s=new Is(r,this),o=s.u(this.options);s.p(t),this.T(o),this._$AH=s}}_$AC(e){let t=un.get(e.strings);return t===void 0&&un.set(e.strings,t=new dt(e)),t}k(e){Fi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new Qe(this.O(ht()),this.O(ht()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Gt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=Xe(this,e,t,0),o=!ut(e)||e!==this._$AH&&e!==Ee,o&&(this._$AH=e);else{const a=e;let u,p;for(e=s[0],u=0;u<s.length-1;u++)p=Xe(this,a[n+u],t,u),p===Ee&&(p=this._$AH[u]),o||=!ut(p)||p!==this._$AH[u],p===j?e=j:e!==j&&(e+=(p??"")+s[u+1]),this._$AH[u]=p}o&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Vs extends Gt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class qs extends Gt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class js extends Gt{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){if((e=Xe(this,e,t,0)??j)===Ee)return;const n=this._$AH,r=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==j&&(n===j||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Us{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Xe(this,e)}}const Hs={I:Qe},Ws=Pi.litHtmlPolyfillSupport;Ws?.(dt,Qe),(Pi.litHtmlVersions??=[]).push("3.3.1");const Gs=(i,e,t)=>{const n=t?.renderBefore??e;let r=n._$litPart$;if(r===void 0){const s=t?.renderBefore??null;n._$litPart$=r=new Qe(e.insertBefore(ht(),s),s,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ti=globalThis;let Y=class extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gs(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ee}};Y._$litElement$=!0,Y.finalized=!0,Ti.litElementHydrateSupport?.({LitElement:Y});const Ks=Ti.litElementPolyfillSupport;Ks?.({LitElement:Y});(Ti.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=i=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(i,e)})):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs={attribute:!0,type:String,converter:Ot,reflect:!1,hasChanged:Mi},Js=(i=Xs,e,t)=>{const{kind:n,metadata:r}=t;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(t.name,i),n==="accessor"){const{name:o}=t;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,u,i)},init(a){return a!==void 0&&this.C(o,void 0,i,a),a}}}if(n==="setter"){const{name:o}=t;return function(a){const u=this[o];e.call(this,a),this.requestUpdate(o,u,i)}}throw Error("Unsupported decorator location: "+n)};function N(i){return(e,t)=>typeof t=="object"?Js(i,e,t):((n,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,n),o?Object.getOwnPropertyDescriptor(r,s):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=(i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rn(i){return(e,t)=>{const{slot:n,selector:r}={},s="slot"+(n?`[name=${n}]`:":not([name])");return Ys(e,t,{get(){const o=this.renderRoot?.querySelector(s),a=o?.assignedElements(i)??[];return r===void 0?a:a.filter((u=>u.matches(r)))}})}}const Zs=Math.PI*2,Qs=i=>{let e=0;const t=i.anchor??"south",n=i.rangeRadian??qr(300);let r=!1;switch(t){case"east":break;case"south-east":e=-Math.PI/4;break;case"north":e=Math.PI/2,r=!0;break;case"south":default:e=Math.PI*3/2}const s=Zs-n;let o=e-s/2,a=e+s/2;const u=e-Math.PI;if(r){const m=o;o=a,a=m}const p=Fe.pointOnPerimeter(i,o),x=Fe.pointOnPerimeter(i,a),d=Fe.pointOnPerimeter(i,u);return{...i,anchor:t,rangeRadian:n,midPoint:d,midAngle:u,startPoint:p,endPoint:x,rotation:e,startAngle:o,endAngle:a,invert:r}},dn=(i,e)=>{const t=i.rangeRadian*e;return Fe.pointOnPerimeter(i,i.startAngle-t)},kt=(i,e,t,n)=>{const r=Fe.pointOnPerimeter(i,e),s=Fe.pointOnPerimeter(i,t);return{startPoint:r,endPoint:s,startAngle:e,endAngle:t,range:Pt(e,t,n)}},fn=(i,e,t=!0,n=!0)=>[`M ${e.startPoint.x} ${e.startPoint.y}`,`A ${i.radius} ${i.radius} 0 ${t?"1":"0"} ${n?"1":"0"} ${e.endPoint.x} ${e.endPoint.y}`],pn=(i,e=!0,t=!0)=>[`M ${i.startPoint.x} ${i.startPoint.y}`,`A ${i.radius} ${i.radius} 0 ${e?"1":"0"} ${t?"1":"0"} ${i.endPoint.x} ${i.endPoint.y}`];/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:eo}=Hs,to=i=>i.strings===void 0,mn=()=>document.createComment(""),rt=(i,e,t)=>{const n=i._$AA.parentNode,r=e===void 0?i._$AB:e._$AA;if(t===void 0){const s=n.insertBefore(mn(),r),o=n.insertBefore(mn(),r);t=new eo(s,o,i,i.options)}else{const s=t._$AB.nextSibling,o=t._$AM,a=o!==i;if(a){let u;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(u=i._$AU)!==o._$AU&&t._$AP(u)}if(s!==r||a){let u=t._$AA;for(;u!==s;){const p=u.nextSibling;n.insertBefore(u,r),u=p}}}return t},ye=(i,e,t=i)=>(i._$AI(e,t),i),io={},no=(i,e=io)=>i._$AH=e,ro=i=>i._$AH,ai=i=>{i._$AR(),i._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn={CHILD:2},Bn=i=>(...e)=>({_$litDirective$:i,values:e});class On{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=(i,e)=>{const t=i._$AN;if(t===void 0)return!1;for(const n of t)n._$AO?.(e,!1),ct(n,e);return!0},Lt=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},zn=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),ao(e)}};function so(i){this._$AN!==void 0?(Lt(this),this._$AM=i,zn(this)):this._$AM=i}function oo(i,e=!1,t=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let s=t;s<n.length;s++)ct(n[s],!1),Lt(n[s]);else n!=null&&(ct(n,!1),Lt(n));else ct(this,i)}const ao=i=>{i.type==Dn.CHILD&&(i._$AP??=oo,i._$AQ??=so)};class lo extends On{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),zn(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ct(this,e),Lt(this))}setValue(e){if(to(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=()=>new co;class co{}const li=new WeakMap,It=Bn(class extends lo{render(i){return j}update(i,[e]){const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=i.options?.host,this.rt(this.ct=i.element)),j}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=li.get(e);t===void 0&&(t=new WeakMap,li.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){return typeof this.G=="function"?li.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ho=(i,e)=>{i.focus();{const t=document.createRange();t.selectNodeContents(i);const n=window.getSelection();n&&(n.removeAllRanges(),n.addRange(t))}};var gt,vt,X,Ln,In,st,Vn,qn,jn;const ji=class ji extends EventTarget{constructor(){super(...arguments);R(this,X);R(this,gt);R(this,vt);this.textRef=ft(),this.editorRef=ft(),D(this,gt,A(this,X,jn).bind(this)),D(this,vt,A(this,X,qn).bind(this))}render(t){return t.editMode?A(this,X,Vn).call(this,t):A(this,X,Ln).call(this,t)}onUpdated(){this.editorRef.value&&ho(this.editorRef.value)}};gt=new WeakMap,vt=new WeakMap,X=new WeakSet,Ln=function(t){const{fill:n,x:r,y:s,displayValue:o,anchor:a,hideValue:u}=t;return u?Q``:Q`<text  ${It(this.textRef)} id="label-value" @click=${()=>A(this,X,In).call(this)} fill=${n} text-anchor=${a} x=${r} y=${s}>${o}</text>`},In=function(){A(this,X,st).call(this,!0)},st=function(t){this.onEditMode!==void 0&&this.onEditMode(t,this),this.dispatchEvent(new CustomEvent("edit-mode",{detail:{enabled:t}}))},Vn=function(t){let{anchor:n,editValue:r,x:s,y:o}=t,a=5,u=5;if(this.textRef.value){const p=this.textRef.value.getBBox();s=s-p.width/2,o=o-p.height+4.5,a=p.width+5,u=p.height}return Q`
    <foreignObject text-anchor=${n} width=${a} height=${u} x=${s} y=${o}>
    <div ${It(this.editorRef)} @blur=${$(this,vt)} @keydown=${$(this,gt)} xmlns="http://www.w3.org/1999/xhtml" tab-index=0 contentEditable=true>${r}</div>
      </foreignObject>`},qn=function(t){const n=t.target.innerText;this.onInput&&this.onInput(n),A(this,X,st).call(this,!1)},jn=function(t){const n=t.key;if(n==="Escape"){A(this,X,st).call(this,!1);return}else if(n==="Enter"){const r=t.target.innerText;this.onInput&&this.onInput(r),A(this,X,st).call(this,!1);return}},ji.styles=te`
  :host {
    display: inline-block;
    --value-label-color: unset;
  }
  input {
    font:unset;
    position:absolute;
    background:unset;
  }
  
  foreignObject>div {
    width:-webkit-fill-available;
    background:red;
    margin: 0;
    padding: 0;
    line-height: unset;
  }
`;let gi=ji;var K=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};const uo=Math.PI*2;var de,yt,Te,fe,O,Un,Hn,Wn,Gn,Kn,Xn,Jn,vi,Yn,Zn,Qn,ot,Ne,Re;let W=(Re=class extends Y{constructor(){super();R(this,O);R(this,de);R(this,yt);R(this,Te);R(this,fe);R(this,Ne);this.rangeAngle=300,this.rangeAnchor="south",this.labelPosition="edge",this.spread=!1,this.hideValue=!1,this.hideTerminators=!1,this.showKnob=!1,this.bipolar=!1,this.needleStyle="to-track",this.value=50,this.step=10,this.stepFine=1,this.radius=.5,this.min=0,this.max=100,this.textRelativeHeight=5,this.valueLabelRef=ft(),this.valueLabel={anchor:"start",x:0,fill:"",hideValue:this.hideValue,y:0,editMode:!1,displayValue:0,editValue:0},D(this,yt,A(this,O,Yn).bind(this)),D(this,Te,A(this,O,Zn).bind(this)),D(this,fe,A(this,O,Qn).bind(this)),D(this,Ne,t=>t.toFixed(1)),D(this,de,new gi),$(this,de).onEditMode=(t,n)=>{this.valueLabel={...this.valueLabel,editMode:t}},$(this,de).onInput=t=>{const n=Number.parseFloat(t);Number.isNaN(n)||A(this,O,ot).call(this,n)}}getRelativeValue(){return ni(this.value,this.min,this.max)}render(){const t=this.resolveVariables(),n=A(this,O,Hn).call(this,t),r={x:50,y:n.middleY,radius:n.maxRadius,anchor:this.rangeAnchor,rangeRadian:jr(this.rangeAngle)},s=Qs(r),o=this.getRelativeValue(),a=this.bipolar?A(this,O,Gn).call(this,o,s):A(this,O,Kn).call(this,o,s);let u=[];const p=Math.max(t.value_width,t.track_width);if(!this.hideTerminators){let d=this.value!==this.min;this.bipolar&&(d=this.value===this.min);const m=this.value===this.max,g=A(this,O,vi).call(this,p,d?t.value_color:t.track_color,s.startPoint),_=A(this,O,vi).call(this,p,m?t.value_color:t.track_color,s.endPoint);u=[...g,..._]}if(this.bipolar){const d=(this.max-this.min)/2,m=this.value.toFixed(1)===d.toFixed(1),g=Q`<circle @click=${this.onMidpointClick} fill=${m?t.value_color:t.track_color} r=${p*1.5} cx=${s.midPoint.x} cy=${s.midPoint.y} />`;u.push(g)}const x=A(this,O,Un).call(this,t,s);return this.valueLabel={...this.valueLabel,...x,hideValue:this.hideValue,displayValue:this.valueToLabel(this.value),editValue:this.value},L`<svg tabindex=0 @pointerdown=${$(this,yt)} @wheel=${this.onMouseWheel} @keydown=${this.onKeyDown} overflow="hidden" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              ${A(this,O,Wn).call(this,t,o,s,a)}
              ${A(this,O,Jn).call(this,t,s)}
              ${u}
              ${A(this,O,Xn).call(this,t,o,s,a)}
              ${$(this,de).render(this.valueLabel)}
              </svg>`}updated(t){$(this,de).onUpdated()}onMidpointClick(){A(this,O,ot).call(this,(this.max-this.min)/2)}onMouseWheel(t){const r=t.shiftKey?this.stepFine:this.step;this.deltaChange(r*t.deltaY*.01),t.preventDefault()}deltaChange(t){A(this,O,ot).call(this,this.value+t)}onKeyDown(t){const n=t.key,r=t.shiftKey;if(this.valueLabel.editMode)return;const s=r?this.stepFine:this.step;n==="ArrowLeft"||n==="ArrowDown"?this.deltaChange(-s):n==="ArrowRight"||n==="ArrowUp"?this.deltaChange(s):Number.parseInt(n).toString()===n&&(this.valueLabel={...this.valueLabel,editMode:!0})}onPointerMove(t){const{x:n,y:r}=t;console.log(`x: ${n} y:${r}`)}resolveVariables(){return Jr({track_width:10,track_color:"gray",value_width:10,value_color:"red",value_label_color:"unset",value_label_x:0,value_label_y:0,needle_overshoot:.2,needle_start:.6,needle_color:"black",needle_width:10,knob_color:"black",knob_radius:.8},this)}set valueToLabel(t){D(this,Ne,t),this.requestUpdate()}get valueToLabel(){return $(this,Ne)}get range(){return this.max-this.min}},de=new WeakMap,yt=new WeakMap,Te=new WeakMap,fe=new WeakMap,O=new WeakSet,Un=function(t,n){let r=0,s=0,o="middle";if(this.labelPosition==="inner")r=n.x,s=n.y+this.textRelativeHeight/4;else switch(this.rangeAnchor){case"north":r=50,s=this.textRelativeHeight*1.5;break;case"east":r=75,s=50,o="start";break;case"south-east":r=99,s=90,o="end";break;default:r=50,s=95}return r+=t.value_label_x,s+=t.value_label_y,{x:r,y:s,anchor:o}},Hn=function(t){const n=this.textRelativeHeight;let r=50-Math.max(t.track_width,t.value_width)*3,s=50;const o=this.rangeAnchor==="south-east";return this.labelPosition==="below"&&(r-=n,s-=n),o&&(s+=n/2,r-=3),{maxRadius:r,middleY:s}},Wn=function(t,n,r,s){if(t.track_width<=0)return Q``;const o=t.track_width<=t.value_width;let a=!0;const u=!0;let p=[];if(o&&!this.bipolar){let d=s.endAngle-.1;const m=kt(r,d,r.endAngle,!0),g=Pt(d,r.endAngle,!0);n>.97?p=pn(r,a,u):(a=g>Math.PI,p=fn(r,m,a,u))}else p=pn(r,a,u);return Q`
    <path 
      d="${p.join(" ")}" 
      fill="none"
      stroke-linecap="round"
      stroke="${t.track_color}" 
      stroke-width="${t.track_width}"
    />
    `},Gn=function(t,n){if(t<.5){const r=ni(t,0,.5),s=Pt(n.startAngle,n.midAngle,!0)*r,o=Gi(n.startAngle,s,!1);return kt(n,o,n.midAngle,!0)}else{const r=ni(t,.5,1),s=Pt(n.midAngle,n.endAngle,!0)*r,o=Gi(n.midAngle,s,!1);return kt(n,n.midAngle,o,!0)}},Kn=function(t,n){const r=t*n.rangeRadian,s=Hr(n.startAngle-r,0,uo);return kt(n,n.startAngle,s,!0)},Xn=function(t,n,r,s){let o=!1;const a=!r.invert;s.range>Math.PI&&(o=!0);const u=fn(r,s,o,a),x=(this.bipolar?n===.5:n===0)?Q``:Q`<path 
        d="${u.join(" ")}" 
        fill="none" 
        stroke="${t.value_color}" 
        stroke-width="${t.value_width}"
      />`,d=t.needle_start*r.radius;let m=1;switch(this.needleStyle){case"none":return x;case"to-knob":m=t.knob_radius*r.radius;break;case"to-track":m=r.radius;break}m+=t.needle_overshoot*(m-d);const g={a:dn({...r,radius:d},n),b:dn({...r,radius:m},n)},_=Q`<line
      x1=${g.a.x}
      y1=${g.a.y}
      x2=${g.b.x}
      y2=${g.b.y}
      stroke-linecap="round"
      stroke=${t.needle_color}
      stroke-width=${t.needle_width}
    />`;return[x,_]},Jn=function(t,n){return this.showKnob?Q`<circle r=${n.radius*t.knob_radius} cx=${n.x} cy=${n.y} fill=${t.knob_color} />`:Q``},vi=function(t,n,...r){return r.map(s=>Q`<circle fill=${n} r=${t} cx=${s.x} cy=${s.y} />`)},Yn=function(t){window.addEventListener("pointermove",$(this,Te)),window.addEventListener("pointercancel",$(this,fe)),window.addEventListener("pointerup",$(this,fe))},Zn=function(t){const n=t.movementY/this.clientHeight,r=this.range*n;A(this,O,ot).call(this,this.value-r)},Qn=function(){window.removeEventListener("pointerup",$(this,fe)),window.removeEventListener("pointercancel",$(this,fe)),window.removeEventListener("pointermove",$(this,Te))},ot=function(t){const n=this.value;t=di(t,this.min,this.max),t!==n&&(this.value=t,this.valueLabel={...this.valueLabel,displayValue:this.valueToLabel(t),editValue:t},this.dispatchEvent(new CustomEvent("change",{detail:{previousValue:n,newValue:t}})))},Ne=new WeakMap,Re.styles=te`
    :host {
      display: inline-block;
      --value-label-color: unset;
    }
    text {
      user-select:none;
    }

  `,Re);K([N({type:Number})],W.prototype,"rangeAngle",void 0);K([N({type:String})],W.prototype,"rangeAnchor",void 0);K([N({type:String})],W.prototype,"labelPosition",void 0);K([N({type:Boolean})],W.prototype,"spread",void 0);K([N({type:Boolean})],W.prototype,"hideValue",void 0);K([N({type:Boolean})],W.prototype,"hideTerminators",void 0);K([N({type:Boolean})],W.prototype,"showKnob",void 0);K([N({type:Boolean})],W.prototype,"bipolar",void 0);K([N({type:String})],W.prototype,"needleStyle",void 0);K([N({type:Number})],W.prototype,"value",void 0);K([N({type:Number})],W.prototype,"step",void 0);K([N({type:Number})],W.prototype,"stepFine",void 0);K([N({type:Number})],W.prototype,"radius",void 0);K([N({type:Number})],W.prototype,"min",void 0);K([N({type:Number})],W.prototype,"max",void 0);K([N({type:Number})],W.prototype,"textRelativeHeight",void 0);K([N({type:Object})],W.prototype,"valueLabel",void 0);W=K([oe("ixfx-dial")],W);var er=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},De;let yi=(De=class extends Y{constructor(){super(...arguments),this.editMode=!1}render(){return console.log("render"),L`
    <option>pre</option>
    <slot></slot>
    <option>post</option>
    `}},De.styles=te`
  :host {
    display: flex;
    overflow: scroll;
    width: 100%;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  
  ::slotted(*),option {
    user-select: none;
    scroll-snap-align: start;
    border: 1px solid silver;
    color:red;
  }
`,De);er([N({type:Boolean})],yi.prototype,"editMode",void 0);yi=er([oe("ixfx-selecthorizontal-element")],yi);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*fo(i,e){const t=typeof e=="function";if(i!==void 0){let n=-1;for(const r of i)n>-1&&(yield t?e(n):e),n++,yield r}}var Ni=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},xe,wt,se,wi,Ut,tr,ir,nr,Be;let Vt=(Be=class extends Y{constructor(){super();R(this,se);R(this,xe,"");R(this,wt,t=>{const n=t.target.value,r=re.Traverse.findAnyChildByValue(this.tree,n);r&&A(this,se,wi).call(this,r)});R(this,Ut,t=>{const n=this.selectedNode;if(!n){console.warn("Bug. No selectedNode");return}if(!n.value?.key){console.warn("Bug. No key for selected value");return}const s=t.target;if(!s){console.warn("Bug. No LI element");return}const o=s.getAttribute("data-key")??"";if(!o){console.warn("Bug. No data-key attribute");return}for(const a of n.childrenStore)if(a.value?.key===o){A(this,se,wi).call(this,a);break}});const t=re.Mutable.createNode({key:"root",label:"root"}),n=re.Mutable.addValue({key:"c",label:"c:"},t),r=re.Mutable.addValue({key:"users",label:"users"},n);re.Mutable.addValue({key:"guest",label:"guest"},r),re.Mutable.addValue({key:"ch",label:"ch"},r),re.Mutable.addValue({key:"admin",label:"admin"},r),re.Mutable.addValue({key:"jane",label:"jane"},r),re.Mutable.addValue({key:"barry",label:"barry"},r),re.Mutable.addValue({key:"reallylongoptionwow",label:"reallylongoptionwow"},r),this.selectedNode=r,this.tree=t}updated(t){if(!this.shadowRoot)return;const n=this.shadowRoot.querySelector(".horiz-select-items");if(!n)return;const r=n.querySelector("ul"),s=this.shadowRoot.querySelector("#btnExpand");r.getBoundingClientRect().width>n.getBoundingClientRect().width?s.style.display="inline":s.style.display="none";for(const o of r.querySelectorAll("li"))if((o.getAttribute("data-key")??"")===$(this,xe)){A(this,se,tr).call(this,o);break}}render(){const t=this.tree,n=this.selectedNode??t;let r=[];r.push(L`<div .value=${n.value} @click=${$(this,wt)}>${n.value?.label}</div>`);for(const o of re.Traverse.parents(n)){if(o.value===void 0)continue;const a=o.value;r.push(L`<div .value=${a} @click=${$(this,wt)}>${a.label}</div>`)}r.reverse();const s=A(this,se,ir).call(this);return L`<div class="parts">${fo(r,L`<span class="separator">&rsaquo;</span>`)}</div>
      ${s}`}},xe=new WeakMap,wt=new WeakMap,se=new WeakSet,wi=function(t){const n=this.selectedNode;n?D(this,xe,n.value?.key??""):D(this,xe,""),this.selectedNode=t,this.dispatchEvent(new CustomEvent("change",{detail:{selected:t,previous:n}}))},Ut=new WeakMap,tr=function(t){let n=t.offsetLeft;const r=t.parentElement;if(!r)return;n-=r.offsetLeft;const s=r.parentElement;if(!s)return;s.scroll({left:n,top:0,behavior:"smooth"});const o=s.parentElement;o&&(o.style.minWidth=t.getBoundingClientRect().width+"px")},ir=function(){const t=this.selectedNode;return t===void 0?(console.warn("No selectedNode"),L``):A(this,se,nr).call(this,t,$(this,xe))},nr=function(t,n){if(t.childrenStore.length===0)return L``;const r=t.childrenStore.map(s=>L`<li class="${s.value?.key===n?"previous":""}" @click=${$(this,Ut)} data-key=${s.value?.key}>${s.value?.label}</li>`);return L`
    <span class="separator">&rsaquo;</span>
    <div class="horiz-select">
      <div class="horiz-select-items">
        <ul>
        ${r}
        </ul>
      </div>
    <div id="pop" popover anchor="btnExpand">
     <ul>
        ${r}
      </ul>
    </div> 
    <button popovertarget="pop" id="btnExpand">&and;</button>
    </div>
    `},Be.styles=te`
  :host {
    --text-highlight: red;
    --separator: silver;
    --padding-s: 0.12ch;
    display: flex;
    overflow: scroll;
    width: 100%;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  #btnExpand {
    scale: 0.5;
    margin:0;
  }
  .parts {
    display: flex;
  }
  .parts > div {
    cursor: pointer;
    margin-right: var(--padding-s);

  }
  .parts > div:hover {
    color: var(--text-highlight);
  }
  
  .horiz-select {
    display:flex;
    min-width: 5ch;
  }
  .horiz-select-items {
    overflow-y: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  .separator {
    margin-left: var(--padding-s);
    margin-right: var(--padding-s);
    color: var(--separator);
  }
  #pop {
    top: anchor(bottom);
    left: anchor(left);
    padding: 1ch;
  }
  #pop {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      cursor: pointer;
      opacity: 0.8;
    }
    li.previous {
      opacity: 0.9;
    }
    li:hover {
      opacity: 1;
    }
  }

  .horiz-select-items {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: inline;
    }
    
    li {
      display: inline;
      margin-left: var(--padding-s);
      margin-right: var(--padding-s);
      cursor: pointer;
      opacity: 0.3;
    }
    li.previous {
      opacity: 0.6;
    }
    li:hover {
      opacity: 1;
    }

    li:not(:last-child):after {
      content: ',';
    }
  }
  ::slotted(*),option {
    user-select: none;
    scroll-snap-align: start;
    border: 1px solid silver;
    color:red;
  }
`,Be);Ni([N({type:Object})],Vt.prototype,"tree",void 0);Ni([N({type:Object})],Vt.prototype,"selectedNode",void 0);Vt=Ni([oe("ixfx-crumb-navigation")],Vt);var Kt=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Oe;let pt=(Oe=class extends Y{constructor(){super(),this.segments=[],this.editing=!1,this.editPath="",this.onclick=()=>{console.log("click"),this.editing=!0},this.segments=[{label:"root",key:"root"},{label:"This PC",key:"ThisPC"},{label:"Storage (D:)",key:"D:"},{label:"Archives",key:"Archives"},{label:"Tumblr",key:"Tumblr"},{label:"whatevruk",key:"whatevruk"}]}updated(e){this.editing&&(this.shadowRoot?.querySelector("input")?.focus(),this.shadowRoot?.querySelector("input")?.select())}setSegmentsWithPath(e,t="/"){const n=e.split(t);let r="",s=[];for(const o of n)r+=o+t,s.push({key:r,label:o});this.segments=s,this.editPath=e}renderSegment(e,t){const n=t===this.segments.length-1,r=L`<div .data=${e} @click=${this.onCaretClick} class="caret">&rsaquo;</div>`;return L`<div class="seg ${e.ensureVisible?"chosen":""}" >
      <label .data=${e} title=${e.label} @click=${this.onLabelClick}>
      ${e.label}
      </label>
      ${n?"":r}
    </div>`}async onCaretClick(e){const t=e.target.data;if(console.log(t),e.preventDefault(),e.stopPropagation(),this.onNavPopup){for await(const n of this.onNavPopup(t))console.log(n);console.log("done")}}onLabelClick(e){const t=e.target.data;e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("navigate",{detail:t}))}render(){if(this.editing)return L`<input @keyup=${this.onInputKeyUp} @blur=${this.onInputBlur} value=${this.editPath} type="text">`;{const e=this.segments.map((t,n)=>this.renderSegment(t,n));return L`${e}`}}onInputKeyUp(e){const t=this.shadowRoot?.querySelector("input");t&&(e.key==="Enter"?(console.log("asf"),this.editPath=t.value,this.editing=!1):e.key==="Escape"&&(this.editing=!1))}onInputBlur(){this.editing=!1}},Oe.styles=te`
  :host {
    --text-highlight: red;
    --separator: silver;
    --padding: 0.5em;
    --padding-s: 0.1em;
    --padding-m: 0.25em;
    --hover-bg: darkgray;
    --hover-fg: unset;
    display: flex;
    width: 100%;
    gap: var(--padding-s);
    transition: all 2s ease-in-out;
    cursor: text;
  }

  .seg {
    cursor: pointer;
    display:flex;
    flex-wrap: nowrap;
    align-items:center;
    user-select: none;
    overflow:hidden;
  }

  input {
    appearance: none;
    border: 0;
    width: 100%;
    margin:var(--padding-s);
    padding: calc(2*var(--padding-s));
    font:unset;
  }
  .seg:hover {
    * {
      color: var(--hover-fg);
      background: color-mix(in srgb, var(--hover-bg) 20%, transparent);
    }
  }
  .seg {
    * {
      transition: all 0.2s ease-in-out;
    }
  }

  label {
    height: 100%;
    white-space:nowrap;
    text-overflow: ellipsis;
    align-content: center;
    overflow: hidden;
    padding: 0 var(--padding-s) 0 var(--padding-s);
  }

  label:hover,.caret:hover {
    background: var(--hover-bg) !important;
  }
  
  .seg:hover,.seg.chosen {
    overflow:unset;
  }
  
  .caret {
    padding: var(--padding-m);
    margin-left: var(--padding-s);
    margin-left: var(--padding-s);
  }
`,Oe);Kt([N({type:Object})],pt.prototype,"segments",void 0);Kt([N({type:Boolean})],pt.prototype,"editing",void 0);Kt([N({type:String})],pt.prototype,"editPath",void 0);pt=Kt([oe("ixfx-crumb-nav")],pt);var rr=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ze;let bi=(ze=class extends Y{constructor(){super(...arguments),this.closeable=!0}render(){return L`<div ><slot part="header"></slot></div>`}},ze.styles=te`
    :host {
      --selected-colour: blue;
      --selected-border-width: 1px;
      --padding: 0.5ch;
      --hover-background: whitesmoke;
      display: inline;
      user-select:none;
      box-sizing: border-box;
    }
    
    :host([selected])>div {
      color: var(--selected-colour);
      border-bottom: var(--selected-border-width) solid var(--selected-colour);
    }
    div {
      padding:var(--padding) calc(2*var(--padding)) var(--padding) calc(2*var(--padding));
      border-bottom: var(--selected-border-width) solid transparent;

    }
    
    div:hover {
      background-color: var(--hover-background);
      color:unset !important;

    }
  `,ze);rr([N({type:Boolean})],bi.prototype,"closeable",void 0);bi=rr([oe("ixfx-tab-list-item")],bi);var Ri=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},bt,ee,Tt,xi,Si,xt,Le;let qt=(Le=class extends Y{constructor(){super(...arguments);R(this,ee);R(this,bt);R(this,xt);this.horizontal=!0,D(this,bt,t=>{const n=t.key;if(n==="ArrowUp"&&!this.horizontal){A(this,ee,Si).call(this);return}else if(n==="ArrowDown"&&!this.horizontal){A(this,ee,xi).call(this);return}else if(n==="ArrowRight"&&this.horizontal){A(this,ee,xi).call(this);return}else if(n==="ArrowLeft"&&this.horizontal){A(this,ee,Si).call(this);return}}),D(this,xt,t=>{this.focus();const n=t.target,r=this.getSelectedElement();this.selectElement(n);const s=n.getAttribute("for");this.dispatchEvent(new CustomEvent("change",{detail:{previous:r,selected:n.id,for:s??""}}))})}render(){return L`
    <div tabindex=0 @keyup=${$(this,bt)} @click=${$(this,xt)} id="container" class=${this.horizontal?"horizontal":"vertical"}>
      <slot></slot>
    </div>`}getSelectedElement(){for(const t of this._listItems)if(A(this,ee,Tt).call(this,t))return t}selectElement(t){const n=this.getSelectedElement();n&&n.removeAttribute("selected"),t.setAttribute("selected","")}},bt=new WeakMap,ee=new WeakSet,Tt=function(t){return t.getAttribute("selected")===null?!1:t.hasAttribute("selected")},xi=function(){let t=!1;for(const n of this._listItems)if(A(this,ee,Tt).call(this,n)&&!t)t=!0;else if(t){this.selectElement(n);break}},Si=function(){let t;for(const n of this._listItems)A(this,ee,Tt).call(this,n)&&t?this.selectElement(t):t=n},xt=new WeakMap,Le.styles=te`
    :host {
      display: inline-block;
      --activated-colour: blue;
      --colur: pink;
    }
    text {
      user-select:none;
    }
    #container {
      display:flex;
    }
    #container.horizontal {
      flex-direction: row;
    }
    #container.vertical {
      flex-direction: column;
    }

    ::slotted(.activated) {
      --colour: var(--activated-colour);
    }
  `,Le);Ri([N({type:Boolean})],qt.prototype,"horizontal",void 0);Ri([Rn()],qt.prototype,"_listItems",void 0);qt=Ri([oe("ixfx-tab-list")],qt);var po=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Ie;let gn=(Ie=class extends Y{render(){return L`<slot></slot>`}},Ie.styles=te`
  :host {
    display:none;
    height:100%;
    width:100%;
  }

  :host([selected]) {
    background: whitesmoke;
    display:block;
  }
  `,Ie);gn=po([oe("ixfx-tab-panel")],gn);var sr=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},me,or,ar,lr,Ve;let _i=(Ve=class extends Y{constructor(){super(...arguments);R(this,me)}render(){return L`<slot></slot>`}getSelectedElement(){for(const t of this._listItems)if(A(this,me,or).call(this,t))return t}syncWithList(t){const n=t.getSelectedElement();if(!n)return;const r=n.getAttribute("for");r&&this.selectPanel(r)}selectPanel(t){const n=this.getSelectedElement();if(n){if(n.id===t)return;A(this,me,ar).call(this,n)}let r=!1;for(const s of this._listItems)s.id===t&&(A(this,me,lr).call(this,s),r=!0);return r}},me=new WeakSet,or=function(t){return t.hasAttribute("selected")},ar=function(t){t.removeAttribute("selected"),this.onUnselectedPanel&&this.onUnselectedPanel(t.id,t)},lr=function(t){this.onSelectingPanel&&this.onSelectingPanel(t.id,t),t.setAttribute("selected",""),this.onSelectedPanel&&this.onSelectedPanel(t.id,t)},Ve.styles=te`
  :host {
    display: block;
  }
  
  `,Ve);sr([Rn()],_i.prototype,"_listItems",void 0);_i=sr([oe("ixfx-tab-panels")],_i);var et=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},St,_t,qe,je,Ue;let Ce=(Ue=class extends Y{constructor(){super(...arguments);R(this,St);R(this,_t);R(this,qe);R(this,je);this.layout="vertical",this.sizeA="",this.sizeB="",this.fixedA=!1,this.fixedB=!1,D(this,_t,t=>{t.preventDefault();const n=this.getZone();n&&n.classList.add("user-resizing"),D(this,St,this.getBoundingClientRect()),window.addEventListener("pointerup",$(this,qe)),window.addEventListener("pointermove",$(this,je))}),D(this,qe,t=>{t.preventDefault();const n=this.getZone();n&&n.classList.remove("user-resizing"),window.removeEventListener("pointerup",$(this,qe)),window.removeEventListener("pointermove",$(this,je))}),D(this,je,t=>{const n=$(this,St);if(n){if(this.layout==="horizontal"){let r=t.y-n.y,s=di(r/n.height);this.fixedA?this.sizeA=`${s*n.height}px`:this.sizeA=`${s*100}%`,this.fixedB?this.sizeB=`${(1-s)*n.height}px`:this.sizeB=`${(1-s)*100}%`}else{let r=t.x-n.x,s=di(r/n.width);this.fixedA?this.sizeA=`${s*n.width}px`:this.sizeA=`${s*100}%`,this.fixedB?this.sizeB=`${(1-s)*n.width}px`:this.sizeB=`${(1-s)*100}%`}t.preventDefault()}})}render(){const t=this.layout==="vertical"?"width":"height";let n=this.sizeA,r=this.sizeB;return n.length===0&&r.length===0?r=n="50%":n.length===0?n="auto":r.length===0&&(r="auto"),n=`${t}:${n}`,r=`${t}:${r}`,L`
    <div id="zone">
      <slot style=${n} name="a"></slot>
      <div @pointerdown=${$(this,_t)} class="resize-handle"></div>
      <slot style=${r} name="b"></slot> 
    </div>`}getZone(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector("#zone");if(t)return t}},St=new WeakMap,_t=new WeakMap,qe=new WeakMap,je=new WeakMap,Ue.styles=te`
    :host {
      --handle-size: 2px;
      --handle-colour: whitesmoke;
      --handle-hover-colour: darkblue;
      --handle-active-colour: blue;

      display: block;
      box-sizing: border-box;
      width:100%;
      height:100%;
    }
    * {
      box-sizing: border-box;
    }
    #zone {
      display:flex;
      height: 100%;
    }
    slot {
      display:block;
    }
    :slotted(*) {
      width: 100%;
      height: 100%;
    }

    .resize-handle {
      background-color: var(--handle-colour);
      width: var(--handle-size);
      height:100%;
      cursor: ew-resize;
    }
    #zone.user-resizing {
      slot {
        opacity: 0.5;
      }
      .resize-handle {
        background-color: var(--handle-active-colour);
      }
    }
    .resize-handle:hover {
      background-color: var(--handle-hover-colour);
    }

    :host([layout='horizontal']) {
      slot {
        
      }
      #zone {
        flex-direction: column;
      }
      .resize-handle {
        background-color: silver;
        height: var(--handle-size);
        width:100%;
        cursor: ns-resize;
      }
    }

  `,Ue);et([N({type:String})],Ce.prototype,"layout",void 0);et([N({type:String})],Ce.prototype,"sizeA",void 0);et([N({type:String})],Ce.prototype,"sizeB",void 0);et([N({type:Boolean})],Ce.prototype,"fixedA",void 0);et([N({type:Boolean})],Ce.prototype,"fixedB",void 0);Ce=et([oe("ixfx-split-layout")],Ce);function ci(i,e,t="undefined",n="from-end"){if(i===void 0)throw new Error("Data undefined");if(!Array.isArray(i))throw new Error("data is not an array");if(i.length===e)return[...i];if(i.length>e)return n==="from-end"?i.slice(0,e):i.slice(i.length-e);const r=[...i],s=e-r.length;for(let o=0;o<s;o++)switch(t){case"undefined":{r.push(void 0);break}case"repeat":{r.push(i[o%i.length]);break}case"first":{r.push(i[0]);break}case"last":{r.push(i.at(-1));break}}return r}var Di=class{enc=new TextEncoder;dec=new TextDecoder("utf-8");toBuffer(i){return this.enc.encode(i)}fromBuffer(i){return this.dec.decode(i)}},Bi=class{onData;separator;buffer="";stream;constructor(i,e=`
`){this.onData=i,this.separator=e}async close(){const i=this.stream;i&&(await i.abort(),await i.close())}clear(){this.buffer=""}writable(){return this.stream===void 0&&(this.stream=this.createWritable()),this.stream}createWritable(){const i=this;return new WritableStream({write(e){i.add(e)},close(){i.clear()}})}addImpl(i){const e=i.indexOf(this.separator);if(e<0)return this.buffer+=i,"";const t=i.substring(0,e);try{this.onData(this.buffer+t),i=i.substring(t.length+this.separator.length)}catch(n){console.warn(n)}return this.buffer="",i}add(i){for(;i.length>0;)i=this.addImpl(i)}},Oi=class{dataHandler;paused=!1;queue=new fi;writer;stream;closed=!1;chunkSize;constructor(i,e={}){this.dataHandler=i,this.chunkSize=e.chunkSize??-1,this.writer=hs(async()=>{await this.onWrite()},e.interval??10)}async close(){if(this.closed)return;const i=this.stream?.getWriter();i?.releaseLock(),await i?.close(),this.closed=!0}clear(){if(this.closed)throw new Error("Buffer closed");this.queue=new fi}writable(){if(this.closed)throw new Error("Buffer closed");return this.stream===void 0&&(this.stream=this.createWritable()),this.stream}createWritable(){const i=this;return new WritableStream({write(e){i.add(e)},close(){i.clear()}})}async onWrite(){if(this.queue.isEmpty)return!1;if(this.paused)return console.warn("WriteBuffer.onWrite: paused..."),!0;const i=this.queue.dequeue();return i===void 0?!1:(await this.dataHandler(i),!0)}get isClosed(){return this.closed}add(i){if(this.closed)throw new Error("Buffer closed");this.chunkSize>0?this.queue.enqueue(...us(i,this.chunkSize)):this.queue.enqueue(i),this.writer.start()}};const zi=Object.freeze({ready:"connecting",connecting:["connected","closed"],connected:["closed"],closed:"connecting"});var mo=class extends Ye{device;config;states;codec;rx;tx;gatt;verboseLogging=!1;rxBuffer;txBuffer;constructor(i,e){super(),this.device=i,this.config=e,this.verboseLogging=e.debug,this.txBuffer=new Oi(async t=>{await this.writeInternal(t)},e),this.rxBuffer=new Bi(t=>{this.fireEvent("data",{data:t})}),this.codec=new Di,this.states=new Sn(zi,{initial:"ready"}),this.states.addEventListener("change",t=>{this.fireEvent("change",t),this.verbose(`${t.priorState} -> ${t.newState}`),t.priorState==="connected"&&(this.rxBuffer.clear(),this.txBuffer.clear())}),i.addEventListener("gattserverdisconnected",()=>{this.isClosed||(this.verbose("GATT server disconnected"),this.states.state="closed")}),this.verbose(`ctor ${i.name} ${i.id}`)}get isConnected(){return this.states.state==="connected"}get isClosed(){return this.states.state==="closed"}write(i){if(this.states.state!=="connected")throw new Error(`Cannot write while state is ${this.states.state}`);this.txBuffer.add(i)}async writeInternal(i){this.verbose(`writeInternal ${i}`);const e=this.tx;if(e===void 0)throw new Error("Unexpectedly without tx characteristic");try{await e.writeValue(this.codec.toBuffer(i))}catch(t){this.warn(t)}}disconnect(){this.states.state==="connected"&&this.gatt?.disconnect()}async connect(){const i=this.config.connectAttempts??3;this.states.state="connecting",this.verbose("connect");const e=this.device.gatt;if(e===void 0)throw new Error("Gatt not available on device");await _n(async()=>{this.verbose("connect.retry");const t=await e.connect();this.verbose("Getting primary service");const n=await t.getPrimaryService(this.config.service);this.verbose("Getting characteristics");const r=await n.getCharacteristic(this.config.rxGattCharacteristic),s=await n.getCharacteristic(this.config.txGattCharacteristic);return r.addEventListener("characteristicvaluechanged",o=>{this.onRx(o)}),this.rx=r,this.tx=s,this.gatt=e,this.states.state="connected",await r.startNotifications(),!0},{limitAttempts:i,startAt:200})}onRx(i){if(this.rx===void 0)return;const t=i.target.value;if(t===void 0)return;let n=this.codec.fromBuffer(t.buffer);const r=Dt(n,19),s=Dt(n,17);s&&r<s&&(this.verbose("Tx plz start"),n=Bt(n,s,1),this.txBuffer.paused=!1),r&&r>s&&(this.verbose("Tx plz stop"),n=Bt(n,r,1),this.txBuffer.paused=!0),this.rxBuffer.add(n)}verbose(i){this.verboseLogging&&console.info(this.config.name,i)}log(i){console.log(this.config.name,i)}warn(i){console.warn(this.config.name,i)}},cr={};le(cr,{NordicBleDevice:()=>hr,defaultOpts:()=>Et});const Et={chunkSize:20,service:"6e400001-b5a3-f393-e0a9-e50e24dcca9e",txGattCharacteristic:"6e400002-b5a3-f393-e0a9-e50e24dcca9e",rxGattCharacteristic:"6e400003-b5a3-f393-e0a9-e50e24dcca9e",name:"NordicDevice",connectAttempts:5,debug:!1};var hr=class extends mo{constructor(i,e={}){super(i,{...Et,...e})}},ur=class{freqMaxRange=200;audio;parent;lastPointer={x:0,y:0};pointerDown=!1;pointerClicking=!1;pointerClickDelayMs=100;pointerDelaying=!1;waveTracker;freqTracker;el;constructor(i,e){this.audio=e,this.parent=i,this.waveTracker=ri(),this.freqTracker=ri(),i.innerHTML=`
    <section>
      <button id="rendererComponentToggle">🔼</button>
      <div>
        <h1>Visualiser</h1>
        <div style="display:flex; flex-wrap: wrap">
          <div class="visPanel">
            <h2>Frequency distribution</h2>
            <br />
            <canvas id="rendererComponentFreqData" height="200" width="400"></canvas>
          </div>
          <div class="visPanel">
            <h2>Waveform</h2>
            <button id="rendererComponentWaveReset">Reset</button>
            <div>
              Press and hold on wave to measure
            </div>
            <br />
            <canvas id="rendererComponentWaveData" height="200" width="400"></canvas>
          </div>
        </div>
      </div>
    </section>
    `,this.el=i.children[0],document.getElementById("rendererComponentToggle")?.addEventListener("click",()=>{this.setExpanded(!this.isExpanded())}),this.el.addEventListener("pointermove",t=>{this.onPointer(t)}),this.el.addEventListener("pointerup",()=>{this.pointerDelaying=!1,this.pointerDown=!1}),this.el.addEventListener("pointerdown",()=>{this.pointerDelaying=!0,setTimeout(()=>{this.pointerDelaying&&(this.pointerDelaying=!1,this.pointerDown=!0)},this.pointerClickDelayMs)}),this.el.addEventListener("pointerleave",()=>{this.pointerDelaying=!1,this.pointerDown=!1}),document.getElementById("rendererComponentWaveReset")?.addEventListener("click",()=>{this.clear()})}renderFreq(i){if(!this.isExpanded()||!i)return;const e=document.getElementById("rendererComponentFreqData");if(e===null)throw new Error("Cannot find canvas element");const t=e.getContext("2d");if(t===null)throw new Error("Cannot create drawing context");const n=i.length,r=e.clientWidth,s=e.clientHeight;t.clearRect(0,0,r,s);const o=this.getPointerRelativeTo(e),a=r/n,u=rs(i);for(let p=0;p<n;p++){if(!Number.isFinite(i[p]))continue;const d=(i[p]-u.min)/this.freqMaxRange,m=Math.abs(s*d),g=s-m,_=p/n*360,b=p*a;if(t.fillStyle=`hsl(${_}, 100%, 50%)`,o.y>0&&o.y<=s&&o.x>=b&&o.x<=b+a){this.freqTracker.id!==p.toString()&&(this.freqTracker=ri({id:p.toString()})),this.freqTracker.seen(i[p]);const y=this.freqTracker.getMinMaxAvg();t.fillStyle="black",this.audio&&t.fillText(`Frequency (${p}) at pointer: ${this.audio.getFrequencyAtIndex(p).toLocaleString("en")} - ${this.audio.getFrequencyAtIndex(p+1).toLocaleString("en")}`,2,10),t.fillText(`Raw value: ${i[p].toFixed(2)}`,2,20),t.fillText(`Min: ${y.min.toFixed(2)}`,2,40),t.fillText(`Max: ${y.max.toFixed(2)}`,60,40),t.fillText(`Avg: ${y.avg.toFixed(2)}`,120,40)}t.fillRect(b,g,a,m)}}isExpanded(){const i=this.el.querySelector("div");if(i===null)throw new Error("contents div not found");return i.style.display===""}setExpanded(i){const e=this.el.querySelector("div"),t=this.el.querySelector("button");if(t===null)throw new Error("Button element not found");if(e===null)throw new Error("Contents element not found");i?(e.style.display="",t.innerText="🔼"):(e.style.display="none",t.innerText="🔽")}clear(){this.clearCanvas(document.getElementById("rendererComponentFreqData")),this.clearCanvas(document.getElementById("rendererComponentWaveData"))}clearCanvas(i){if(i===null)throw new Error("Canvas is null");const e=i.getContext("2d");if(e===null)throw new Error("Cannot create drawing context");e.fillStyle="white",e.fillRect(0,0,i.clientWidth,i.clientHeight)}renderWave(i,e=!0){if(!this.isExpanded()||!i)return;const t=document.getElementById("rendererComponentWaveData");if(t===null)throw new Error("Cannot find wave canvas");const n=t.getContext("2d");if(n===null)throw new Error("Cannot create drawing context for wave");const r=t.clientWidth,s=t.clientHeight,o=this.getPointerRelativeTo(t),a=20,u=60,p=i.length;n.fillStyle="white",n.fillRect(0,0,u,a);const x=r/p;n.fillStyle="rgba(255, 255, 255, 0.03)",n.fillRect(0,20,r,s),n.fillStyle="red",e?n.fillRect(0,s/2,r,1):n.fillRect(0,s-1,r,1),n.lineWidth=1,n.strokeStyle="black",n.beginPath();let d=0;for(let m=0;m<p;m++){const g=i[m]*s,_=e?s/2-g:s-g;m===0?n.moveTo(d,_):n.lineTo(d,_),d+=x,this.pointerDown&&this.waveTracker.seen(i[m])}if(n.lineTo(r,e?s/2:s),n.stroke(),this.pointerDown){const m=this.waveTracker.getMinMaxAvg();n.fillStyle="rgba(255,255,0,1)",n.fillRect(u,0,150,20),n.fillStyle="black",n.fillText("Min: "+m.min.toFixed(2),60,10),n.fillText("Max: "+m.max.toFixed(2),110,10),n.fillText("Avg: "+m.avg.toFixed(2),160,10)}else this.waveTracker.reset();o.y>0&&o.y<=s&&o.x>=0&&o.x<=r&&(n.fillStyle="black",n.fillText("Level: "+(1-o.y/s).toFixed(2),2,10))}getPointerRelativeTo(i){const e=i.getBoundingClientRect();return{x:this.lastPointer.x-e.left-window.scrollX,y:this.lastPointer.y-e.top-window.scrollY}}onPointer(i){this.lastPointer={x:i.pageX,y:i.pageY},i.preventDefault()}};const go=(i,e={})=>new Xt((t,n)=>{const r=new Float32Array(t.frequencyBinCount),s=new Float32Array(t.fftSize);t.getFloatFrequencyData(r),t.getFloatTimeDomainData(s),i(r,s,n)},e),vo=(i,e={})=>new Xt((t,n)=>{const r=new Float32Array(t.frequencyBinCount);t.getFloatFrequencyData(r),i(r,n)},e),yo=(i,e={})=>new Xt((t,n)=>{const r=new Float32Array(t.fftSize);t.getFloatTimeDomainData(r),i(es(r),n)},e);var Xt=class{showVis;fftSize;smoothingTimeConstant;#e=!1;debug;#i=!1;visualiser;audioCtx;analyserNode;analyse;constructor(i,e={}){if(this.showVis=e.showVis??!1,this.fftSize=e.fftSize??1024,this.debug=e.debug??!1,this.smoothingTimeConstant=e.smoothingTimeConstant??.8,Ki(Xi(this.fftSize,"positive","opts.fftSize"),ts(this.smoothingTimeConstant,"percentage","opts.smoothingTimeConstant")),!is(this.fftSize))throw new Error(`fftSize must be a power of two from 32 to 32768 (${this.fftSize})`);if(this.fftSize<32)throw new Error("fftSize must be at least 32");if(this.fftSize>32768)throw new Error("fftSize must be no greater than 32768");this.analyse=i,this.paused=!1,this.init();const t=document.querySelector("#audio-visualiser");if(t){const n=new ur(t,this);n.setExpanded(this.showVis),this.visualiser=n}}init(){if(this.#i){this.debug&&console.debug("Init already in progress");return}this.#i=!0,navigator.mediaDevices.getUserMedia({audio:!0}).then(i=>{this.onMicSuccess(i)}).catch(i=>{this.#i=!1,console.error(i)})}get paused(){return this.#e}set paused(i){i!==this.#e&&(this.#e=i,i?this.debug&&console.log("Paused"):(this.debug&&console.log("Unpaused"),window.requestAnimationFrame(this.analyseLoop.bind(this))))}setup(i,e){const t=i.createAnalyser();return t.fftSize=this.fftSize,t.smoothingTimeConstant=this.smoothingTimeConstant,i.createMediaStreamSource(e).connect(t),t}onMicSuccess(i){try{const e=new AudioContext;e.addEventListener("statechange",()=>{this.debug&&console.log(`Audio context state: ${e.state}`)}),this.audioCtx=e,this.analyserNode=this.setup(e,i),window.requestAnimationFrame(this.analyseLoop.bind(this))}catch(e){this.#i=!1,console.error(e)}}analyseLoop(){if(this.paused){this.debug&&console.log("Paused");return}const i=this.analyserNode;if(i===void 0){console.warn("Analyser undefined");return}try{this.analyse(i,this)}catch(e){console.error(e)}window.requestAnimationFrame(this.analyseLoop.bind(this))}getFrequencyRangeMax(i,e,t){const n=this.sliceByFrequency(i,e,t);return ns(n)}sliceByFrequency(i,e,t){const n=this.getIndexForFrequency(i),r=this.getIndexForFrequency(e);return t.slice(n,r)}getFrequencyAtIndex(i){const e=this.analyserNode,t=this.audioCtx;if(e===void 0)throw new Error("Analyser not available");if(t===void 0)throw new Error("Audio context not available");if(Ki(Xi(i,"positive","index")),i>e.frequencyBinCount)throw new Error(`Index ${i} exceeds frequency bin count ${e.frequencyBinCount}`);return i*t.sampleRate/(e.frequencyBinCount*2)}getIndexForFrequency(i){const e=this.analyserNode;if(e===void 0)throw new Error("Analyser not available");const t=e.context.sampleRate/2,n=Math.round(i/t*e.frequencyBinCount);return n<0?0:n>=e.frequencyBinCount?e.frequencyBinCount-1:n}},wo=class{#e=!1;#i=new Map;filterType="lowpass";constructor(){}init(){if(!this.#e){this.#e=!0;for(const i of document.querySelectorAll("audio"))this.#i.set(i.id,dr(i,this.filterType))}}get(i){return this.init(),this.#i.get(i)}};function dr(i,e="lowpass"){const t=ge(i),n=new AudioContext,r=n.createMediaElementSource(t),s=n.createStereoPanner(),o=n.createGain(),a=n.createBiquadFilter();return a.type=e,r.connect(o),o.connect(s),s.connect(a),a.connect(n.destination),{pan:s,gain:o,filter:a,id:t.id,ctx:n,el:t}}function bo(i={}){const e=new AudioContext,t=i.type??"sawtooth",n=i.frequency??440,r=i.id??ls(),s=e.createOscillator();s.type=t,s.frequency.setValueAtTime(n,e.currentTime);const o=e.createStereoPanner(),a=e.createGain(),u=e.createBiquadFilter();return s.connect(a),a.connect(o),o.connect(u),u.connect(e.destination),{pan:o,gain:a,filter:u,ctx:e,osc:s,id:r}}var fr={};le(fr,{AudioAnalyser:()=>Xt,AudioElements:()=>wo,AudioVisualiser:()=>ur,analyserBasic:()=>go,analyserFrequency:()=>vo,analyserPeakLevel:()=>yo,createFromAudioElement:()=>dr,createOscillator:()=>bo});const Jt=(i,e,t,n,r=200,s)=>{const o={channel:e,note:t,velocity:n,command:"noteon"},a={channel:e,note:t,velocity:0,command:"noteoff"};i.send(Je(o),s),i.send(Je(a),window.performance.now()+r)},Li=i=>{let e;const t=i[0],n=i[1],r=i[2];let s=0;if(t>=144&&t<=159?(s=t-143,e=r===0?"noteoff":"noteon"):t>=128&&t<=143?(s=t-127,e="noteoff"):t>=160&&t<=175?(s=t-159,e="poly-at"):t>=176&&t<=191?(s=t-175,e="cc"):t>=192&&t<=207?(s=t-191,e="progchange"):t>=208&&t<=223?(s=t-207,e="at"):t>=224&&t<=239&&(s=t-223,e="pitchbend"),e===void 0)throw new Error(`Unknown command: '${e}'`);return{command:e,note:n,velocity:r,channel:s}},Je=i=>{const e=new Uint8Array(3);switch(e[1]=i.note,e[2]=i.velocity,i.command){case"cc":e[0]=i.channel+175;break;case"noteon":e[0]=i.channel+143;break;case"noteoff":e[0]=i.channel+127;break;case"pitchbend":e[0]=i.channel+223;break;case"poly-at":e[0]=i.channel+159;break;case"progchange":e[0]=i.channel+191;break;case"at":e[0]=i.channel+207;break;default:throw new Error(`Command not supported '${i.command}'`)}return e},xo=`0	C-1	8.176
1	C#-1	8.662
2	D-1	9.177
3	D#-1	9.723
4	E-1	10.301
5	F-1	10.913
6	F#-1	11.562
7	G-1	12.250
8	G#-1	12.978
9	A-1	13.750
10	A#-1	14.568
11	B-1	15.434
12	C0	16.352
13	C#0	17.324
14	D0	18.354
15	D#0	19.445
16	E0	20.602
17	F0	21.827
18	F#0	23.125
19	G0	24.500
20	G#0	25.957
21	A0	27.500
22	A#0	29.135
23	B0	30.868
24	C1	32.703
25	C#1	34.648
26	D1	36.708
27	D#1	38.891
28	E1	41.203
29	F1	43.654
30	F#1	46.249
31	G1	48.999
32	G#1	51.913
33	A1	55.000
34	A#1	58.270
35	B1	61.735
36	C2	65.406
37	C#2	69.296
38	D2	73.416
39	D#2	77.782
40	E2	82.407
41	F2	87.307
42	F#2	92.499
43	G2	97.999
44	G#2	103.826
45	A2	110.000
46	A#2	116.541
47	B2	123.471
48	C3	130.813
49	C#3	138.591
50	D3	146.832
51	D#3	155.563
52	E3	164.814
53	F3	174.614
54	F#3	184.997
55	G3	195.998
56	G#3	207.652
57	A3	220.000
58	A#3	233.082
59	B3	246.942
60	C4	261.626
61	C#4	277.183
62	D4	293.665
63	D#4	311.127
64	E4	329.628
65	F4	349.228
66	F#4	369.994
67	G4	391.995
68	G#4	415.305
69	A4	440.000
70	A#4	466.164
71	B4	493.883
72	C5	523.251
73	C#5	554.365
74	D5	587.330
75	D#5	622.254
76	E5	659.255
77	F5	698.456
78	F#5	739.989
79	G5	783.991
80	G#5	830.609
81	A5	880.000
82	A#5	932.328
83	B5	987.767
84	C6	1046.502
85	C#6	1108.731
86	D6	1174.659
87	D#6	1244.508
88	E6	1318.510
89	F6	1396.913
90	F#6	1479.978
91	G6	1567.982
92	G#6	1661.219
93	A6	1760.000
94	A#6	1864.655
95	B6	1975.533
96	C7	2093.005
97	C#7	2217.461
98	D7	2349.318
99	D#7	2489.016
100	E7	2637.020
101	F7	2793.826
102	F#7	2959.955
103	G7	3135.963
104	G#7	3322.438
105	A7	3520.000
106	A#7	3729.310
107	B7	3951.066
108	C8	4186.009
109	C#8	4434.922
110	D8	4698.636
111	D#8	4978.032
112	E8	5274.041
113	F8	5587.652
114	F#8	5919.911
115	G8	6271.927
116	G#8	6644.875
117	A8	7040.000
118	A#8	7458.620
119	B8	7902.133
120	C9	8372.018
121	C#9	8869.844
122	D9	9397.273
123	D#9	9956.063
124	E9	10548.080
125	F9	11175.300
126	F#9	11839.820
127	G9	12543.850`,Mt=[],Ct=()=>{if(Mt.length>0)return Mt;const i=xo.split(`
`);for(const e of i){const t=e.split("	");if(t.length!==3){console.warn(`Expected three elements, got ${t.length}. Line:`,t);continue}Mt.push([Number.parseInt(t[0]),t[1].toUpperCase(),Number.parseFloat(t[2])])}return Mt},So=i=>{const e=Ct();i=i.toUpperCase();const t=e.find(n=>n[1]===i);return t?t[0]:NaN},_o=i=>{const e=Ct();i=i.toUpperCase();const t=e.find(n=>n[1]===i);return t?t[2]:NaN},pr=i=>{const t=Ct().find(n=>n[0]===i);return t?t[1]:""},mr=i=>{const t=Ct().find(n=>n[0]===i);return t?t[2]:NaN};var $o=class extends Ye{verbose=!0;#e;#i;#t=[];#n=[];#r=!0;#s=!0;#l=Yi(()=>this.#g(),1e3);#o=Yi(()=>this.#v(),1e3);constructor(){super(),this.#e={initialised:!1,errorReason:""},this.#S()}*getInUse(){for(const i of this.#t)yield i}*getInUseInput(){for(const i of this.#t)i.type==="input"&&(yield i)}*getInUseOutput(){for(const i of this.#t)i.type==="output"&&(yield i)}*known(){for(const i of this.#n)yield i}*knownInput(){for(const i of this.#n)i.type==="input"&&(yield i)}*knownOutput(){for(const i of this.#n)i.type==="output"&&(yield i)}async scan(){await this.#b();const i=this.#i;if(i){for(const[e,t]of i.inputs)this.#c(t);for(const[e,t]of i.outputs)this.#c(t);this.#r&&this.#l(),this.#s&&this.#o()}}send(i,e,t){const n=Je(i);if(typeof e>"u")for(const r of this.#t)r.type==="output"&&r.send(n,t);else e.send(n,t)}sendNote(i,e,t,n,r,s){if(s===void 0)for(const o of this.getInUseOutput())this.sendNote(i,e,t,n,r,o);else Jt(s,i,e,t,n,r)}#c(i){i.state==="connected"?(this.#h(i),i.connection==="open"&&this.#d(i)):i.state==="disconnected"&&this.#p(i)}#a=i=>{const e=i.data,t=i.currentTarget;if(!e)return;const n=Li(e);if(n.command==="noteoff"||n.command==="noteon"){this.fireEvent("message",{...n,port:t,raw:e,frequency:mr(n.note),noteName:pr(n.note)});return}this.fireEvent("message",{...n,port:t,raw:e})};#d(i){const e=this.#t.find(t=>t.id===i.id);if(this.#u(`onPortOpen: id: ${i.id} name: ${i.name} (${i.type})`),e){this.#u("-- bug, port already in use?");return}this.#h(i),i.type==="input"&&i.addEventListener("midimessage",this.#a),this.#t=[...this.#t,i],this.fireEvent("open",{port:i})}#f(i){this.#t.find(t=>t.id===i.id)&&(i.type==="input"&&i.removeEventListener("midimessage",this.#a),this.#t=this.#t.filter(t=>t.id!==i.id),this.fireEvent("close",{port:i}))}#h(i){this.#n.find(t=>t.id===i.id)||(this.#n=[...this.#n,i],this.fireEvent("deviceConnected",{port:i}))}#p(i){this.#n.find(t=>t.id===i.id)&&(this.#f(i),this.#n=this.#n.filter(t=>t.id!==i.id),this.fireEvent("deviceDisconnected",{port:i}))}#m(i){return this.#t.find(e=>e.id===i.id)!==void 0}async closeAll(i="both"){for(const e of this.#t)e.type=="input"&&(i==="both"||i==="input")&&await e.close(),e.type=="output"&&(i==="both"||i==="output")&&await e.close()}async setOmniInput(i){this.#r=i,await this.closeAll("input"),i&&await this.#g()}get omniInput(){return this.#r}async setOmniOutput(i){this.#s=i,await this.closeAll("output"),i&&await this.#v()}get omniOutput(){return this.#s}async#g(){const i=this.#i;if(i){for(const[e,t]of i.inputs)if(t.connection==="closed"){if(this.#m(t))throw new Error("Bug: Input closed, but inUse?");await t.open()}}}async#v(){const i=this.#i;if(i){for(const[e,t]of i.outputs)if(t.connection==="closed"){if(this.#m(t))throw new Error("Bug: Output closed, but inUse?");await t.open()}}}dumpToStringLines(){const i=[],e=t=>` -  ${t.name} (${t.type}) state: ${t.state} conn: ${t.connection} id: ${t.id}`;return i.push("MidiManager"),i.push("In Use:"),i.push(...Ji(this.#t,e,"  (none)")),i.push("Known:"),i.push(...Ji(this.#n,e,"  (none)")),i}#w(i){const e=i.port;e!==null&&(e.state==="connected"?e.connection==="open"?this.#d(e):e.connection==="closed"&&(this.#f(e),this.#h(e),this.#r&&e.type==="input"?this.#l():this.#s&&e.type==="output"&&this.#o()):e.state==="disconnected"&&this.#p(e))}async open(i,e=!1){e&&(i.type==="input"?await this.closeAll("input"):i.type==="output"&&await this.closeAll("output")),i.open()}#u(i){this.verbose&&console.log("MIDI",i)}#y(i){this.#e={...this.#e,...i},this.#u(`State change: ${JSON.stringify(this.#e)}`)}async#b(){if(this.#e.initialised&&this.#i!==void 0)return;if((await navigator.permissions.query({name:"midi",software:!0,sysex:!1})).state==="denied"){this.#i=void 0,this.#y({initialised:!1,errorReason:"Permission denied"});return}this.#i=await navigator.requestMIDIAccess({software:!0,sysex:!1}),this.#i.addEventListener("statechange",e=>{this.#w(e)}),this.#y({initialised:!0,errorReason:""})}#x(){return!!navigator.requestMIDIAccess}#S(){if(!window.isSecureContext)throw new Error("Code is not running in a secure context. Load it via https");if(!this.#x())throw new Error("MIDI not supported in this browser")}findKnownPort(i){return this.#n.find(i)}*filterKnownPort(i){yield*this.#n.filter(i)}findInUsePort(i){return this.#t.find(i)}*filterInUsePort(i){yield*this.#t.filter(i)}},Ao=class{channel=0;cc=-1;note=-1;output;portName;constructor(i={}){this.channel=i.channel??-1,this.cc=i.cc??-1,this.note=i.note??-1,this.output=i.output,this.portName=i.portName}setOutputPort(i){return i.type==="input"||this.portName!==void 0&&i.name!==i.name?!1:(this.output=i,!0)}sendRaw(i){if(!this.output||this.channel<0||this.cc<0&&this.note<0)return!1;let e;return this.cc>=0?(e={channel:this.channel,command:"cc",note:this.cc,velocity:i},console.log(e),this.output.send(Je(e)),!0):(console.log(`sendNote: ch: ${this.channel} note: ${this.note} vel: ${i}`),Jt(this.output,this.channel,this.note,i,200),!0)}},Eo=class gr extends Ye{static controlCount=0;inputChannel=1;inputCommand="cc";inputNote=-1;inputVelocityScale=[0,127];feedbackChannel=1;feedbackCommand="cc";feedbackNote=-1;feedbackVelocity=1;name=`Control-${gr.controlCount++}`;lastMessage;onInputMessage(e){return this.inputChannel>=0&&e.channel!==this.inputChannel||this.inputNote>=0&&e.note!==this.inputNote||this.inputCommand!==void 0&&e.command!==this.inputCommand?!1:(this.lastMessage=e,this.fireEvent("change",{velocity:e.velocity,velocityScaled:this.#e(e.velocity),control:this}),!0)}#e(e){return os(e,this.inputVelocityScale[0],this.inputVelocityScale[1])}get scaledVelocity(){return this.lastMessage?this.#e(this.lastMessage.velocity):NaN}},Co=class extends Ye{encoders=[];#e=-1;#i="disconnected";#t;#n;logOutgoing=!1;bankChangeChannel=4;sideButtonChannel=4;constructor(){super();for(let i=1;i<5;i++)for(let e=1;e<17;e++){const t=new vr(this,{bank:i,encoder:e});this.encoders.push(t),t.addEventListener("encoder",n=>{this.fireEvent("encoder",n)}),t.addEventListener("switch",n=>{this.fireEvent("switch",n)})}}#r=i=>{const e=i.port;e&&(e===this.#n&&(e.state==="disconnected"||e.connection==="closed")&&this.#l(),e===this.#t&&(e.state==="disconnected"||e.connection==="closed")&&this.#s(),this.#n!==void 0&&this.#t!==void 0?this.#o("ready"):this.#o("disconnected"))};#s(){const i=this.#t;i!==void 0&&(i.removeEventListener("statechange",this.#r),i.removeEventListener("midimessage",this.#c)),this.#t=void 0}#l(){const i=this.#n;i!==void 0&&i.removeEventListener("statechange",this.#r),this.#n=void 0}setPort(i){i.name==="Midi Fighter Twister"&&(i.type==="output"?(this.#l(),this.#n=i,this.#n!==void 0&&this.#n.addEventListener("statechange",this.#r)):i.type==="input"&&(this.#s(),this.#t=i,i!==void 0&&(this.#t.addEventListener("midimessage",this.#c),this.#t.addEventListener("statechange",this.#r)))),this.#n!==void 0&&this.#t!==void 0&&this.#o("ready")}#o(i){const e=this.#i;e!==i&&(this.#i=i,this.fireEvent("state",{previous:e,state:i,mf:this}))}#c=i=>{const e=i.data;if(!e)return;const t=Li(e);if(t.channel===this.bankChangeChannel&&t.command==="cc"&&t.note<4){this.#a(t.note+1,!1);return}if(t.channel===this.sideButtonChannel&&t.command=="cc"){let n=-1,r,s;if(t.note===8?(n=1,r="top",s="left"):t.note===10?(n=1,s="left",r="bottom"):t.note===11?(n=1,s="right",r="top"):t.note===13?(n=1,s="right",r="bottom"):t.note===14?(n=2,s="left",r="top"):t.note===16?(n=2,s="left",r="bottom"):t.note===17?(n=2,s="right",r="top"):t.note===19?(n=2,s="right",r="bottom"):t.note===20?(n=3,r="top",s="left"):t.note===22?(n=3,r="bottom",s="left"):t.note===23?(n=3,r="top",s="right"):t.note==25?(n=3,r="bottom",s="right"):t.note==26?(n=4,r="top",s="left"):t.note==28?(n=4,r="bottom",s="left"):t.note==29?(n=4,r="top",s="right"):t.note==31&&(n=4,r="bottom",s="right"),r!==void 0&&s!==void 0){n!==this.#e&&this.#a(n,!0),this.fireEvent("sideButton",{bank:n,position:r,side:s,mf:this});return}}for(const n of this.encoders){if(n.inputEncoderChannel===t.channel&&n.inputEncoderNoteOrCc===t.note){n.onValueSet(t.velocity);return}if(n.inputSwitchChannel===t.channel&&n.inputSwitchNoteOrCc===t.note){n.onSwitchSet(t.velocity);return}}};#a(i,e){const t=this.#e;this.#e=i,t!==i&&this.fireEvent("bankChange",{prev:t,current:this.#e,mf:this,implicit:e})}set bank(i){if(i<1||i>4)throw new Error("Bank must be 1-4");this.#n&&(Jt(this.#n,this.bankChangeChannel,i-1,127,100),this.#a(i,!1))}get bank(){return this.#e}*getBank(i){if(typeof i>"u"&&(i=this.#e),i<1||i>4)throw new Error("Bank out of range, expected 1-4");for(const e of this.encoders)e.bank===i&&(yield e)}getEncoder(i,e){if(typeof e>"u"&&(e=this.#e),e<1||e>4)throw new Error(`Bank out of range, expected 1-4. Got: ${e}`);if(i<1||i>16)throw new Error("Encoder out of range, expected 1-16");return this.encoders.find(t=>t.bank===e&&t.encoder===i)}send(i){return this.#n?(this.logOutgoing&&console.log(`MF send: ${JSON.stringify(i)}`),this.#n.send(Je(i)),!0):!1}get outputPort(){return this.#n}get inputPort(){return this.#t}get state(){return this.#i}},vr=class extends Ye{mf;bank;encoder;inputEncoderNoteOrCc;inputEncoderChannel;inputSwitchChannel;inputSwitchNoteOrCc;ledEffectChannel=3;ledColourChannel=2;ledRingChannel=1;encoderStaticNote=0;lastEncoderValue=-1;lastSwitchValue=-1;constructor(i,e){super(),this.mf=i;const t=e.bank,n=e.encoder;if(t<0||t>4)throw new Error(`Expected bank value 1-4. Got: ${t}`);if(n<0||n>16)throw new Error(`Expected encoder number 1-16. Got: ${n}`);const r=(t-1)*16;this.encoderStaticNote=n-1+r,this.inputEncoderChannel=1,this.inputEncoderNoteOrCc=this.encoderStaticNote,this.inputSwitchChannel=2,this.inputSwitchNoteOrCc=this.encoderStaticNote,this.bank=t,this.encoder=n}onValueSet(i){const e=this.lastEncoderValue;this.lastEncoderValue=i,this.fireEvent("encoder",{previous:e,value:i,encoder:this})}onSwitchSet(i){const e=this.lastSwitchValue;this.lastSwitchValue=i,this.fireEvent("switch",{previous:e,value:i,encoder:this})}setLedRing(i){this.setLedRingRaw(ss(Math.floor(i*127)))}setLedRingRaw(i){if(i<0||i>127)throw new Error("Param 'v' should be between 0-127");const e={channel:this.ledRingChannel,command:"cc",note:this.encoderStaticNote,velocity:i};this.mf.send(e)}setSwitchColourHue(i){if(i<0||i>1)throw new Error("Param 'v' should be in 0-1 range");let e=1-i+.7;e>1&&(e=e-1);const t=Math.floor(e*127);this.setSwitchColourRaw(t)}setSwitchColourRaw(i){if(i<0||i>127)throw new Error("Param 'v' should be between 0-127");const e={channel:this.ledColourChannel,command:"cc",note:this.encoderStaticNote,velocity:i};this.mf.send(e)}setSwitchEffect(i,e=1){let t=0;if(i==="rainbow")t=127;else if(i==="pulse"){if(e<1||e>7)throw new Error("Pulse effect expects a value 1-7");t=9+e}else if(i==="strobe"){if(e<1||e>8)throw new Error("Strobe effect expects a value 1-8");t=e}else if(i==="none")t=0;else throw new Error(`Unknown kind: '${i}'`);const n={channel:this.ledEffectChannel,command:"cc",note:this.encoderStaticNote,velocity:t};this.mf.send(n)}},yr={};le(yr,{Control:()=>Eo,Feedback:()=>Ao,MidiFighter:()=>Co,MidiFighterEncoder:()=>vr,MidiManager:()=>$o,getParsedNotes:()=>Ct,noteNameToFrequency:()=>_o,noteNameToNumber:()=>So,noteNumberToFrequency:()=>mr,noteNumberToName:()=>pr,pack:()=>Je,sendNote:()=>Jt,unpack:()=>Li});var Yt=class extends hr{evalTimeoutMs;evalReplyBluetooth=!0;constructor(i,e={}){super(i,e),this.evalTimeoutMs=e.evalTimeoutMs??5*1e3}async writeScript(i){this.write(`reset();
`),this.write(`${i}
`)}async eval(i,e={},t){const n=e.debug??!1;return Vi(i,e,this,"Bluetooth.println",n,t??(s=>{this.warn(s)}))}},ko=class extends Ye{states;codec;verboseLogging=!1;name;connectAttempts;chunkSize;rxBuffer;txBuffer;constructor(i={}){super(),this.verboseLogging=i.debug??!1,this.chunkSize=i.chunkSize??1024,this.connectAttempts=i.connectAttempts??3,this.name=i.name??"JsonDevice",this.txBuffer=new Oi(async e=>{await this.writeInternal(e)},i),this.rxBuffer=new Bi(e=>{this.fireEvent("data",{data:e})}),this.codec=new Di,this.states=new Sn(zi,{initial:"ready"}),this.states.addEventListener("change",e=>{this.fireEvent("change",e),this.verbose(`${e.priorState} -> ${e.newState}`),e.priorState==="connected"&&(this.rxBuffer.clear(),this.txBuffer.clear())})}get isConnected(){return this.states.state==="connected"}get isClosed(){return this.states.state==="closed"}write(i){if(this.states.state!=="connected")throw new Error(`Cannot write while state is ${this.states.state}`);this.txBuffer.add(i)}async close(){this.states.state==="connected"&&this.onClosed()}async connect(){const i=this.connectAttempts;this.states.state="connecting",await this.onPreConnect(),await _n(async()=>(await this.onConnectAttempt(),this.states.state="connected",!0),{limitAttempts:i,startAt:200})}onRx(i){const e=i.target.value;if(e===void 0)return;let t=this.codec.fromBuffer(e.buffer);const n=Dt(t,19),r=Dt(t,17);r&&n<r&&(this.verbose("Tx plz start"),t=Bt(t,r,1),this.txBuffer.paused=!1),n&&n>r&&(this.verbose("Tx plz stop"),t=Bt(t,n,1),this.txBuffer.paused=!0),this.rxBuffer.add(t)}verbose(i){this.verboseLogging&&console.info(this.name,i)}log(i){console.log(this.name,i)}warn(i){console.warn(this.name,i)}},wr={};le(wr,{Device:()=>br});var br=class extends ko{config;port;tx;abort;baudRate;constructor(i={}){super(i),this.config=i,this.abort=new AbortController;const e=i.eol??`\r
`;this.baudRate=i.baudRate??9600,i.name===void 0&&(this.name="Serial.Device"),this.rxBuffer.separator=e}async writeInternal(i){if(this.tx===void 0)throw new Error("tx not ready");try{this.tx.write(i)}catch(e){this.warn(e)}}onClosed(){this.tx?.releaseLock(),this.abort.abort("closing port"),this.states.state="closed"}onPreConnect(){return Promise.resolve()}async onConnectAttempt(){let i={filters:[]};const e={baudRate:this.baudRate};this.config.filters&&(i={filters:[...this.config.filters]}),this.port=await navigator.serial.requestPort(i),this.port.addEventListener("disconnect",o=>{this.close()}),await this.port.open(e);const t=this.port.writable,n=new TextEncoderStream;t!==null&&(n.readable.pipeTo(t,{signal:this.abort.signal}).catch(o=>{console.log("Serial.onConnectAttempt txText pipe:"),console.log(o)}),this.tx=n.writable.getWriter());const r=this.port.readable,s=new TextDecoderStream;r!==null&&(r.pipeTo(s.writable,{signal:this.abort.signal}).catch(o=>{console.log("Serial.onConnectAttempt rxR pipe:"),console.log(o)}),s.readable.pipeTo(this.rxBuffer.writable(),{signal:this.abort.signal}).catch(o=>{console.log("Serial.onConnectAttempt rxText pipe:"),console.log(o);try{this.port?.close()}catch(a){console.log(a)}}))}},xr=class extends br{evalTimeoutMs;evalReplyBluetooth=!1;constructor(i){super(i),i===void 0&&(i={}),this.evalTimeoutMs=i.evalTimeoutMs??5*1e3}async disconnect(){return super.close()}writeScript(i){this.write(`reset();
`),this.write(`${i}
`)}async eval(i,e={},t){const n=e.debug??!1;return Vi(i,e,this,"USB.println",n,t??(s=>{this.warn(s)}))}},Sr={};le(Sr,{EspruinoBleDevice:()=>Yt,EspruinoSerialDevice:()=>xr,bangle:()=>Po,connectBle:()=>To,deviceEval:()=>Vi,puck:()=>Mo,serial:()=>Fo});const Mo=async(i={})=>{const e=i.name??"Puck",t=i.debug??!1,n=await navigator.bluetooth.requestDevice({filters:Ii(i,"Puck.js"),optionalServices:[Et.service]});i.debug&&console.info(`Espruino.puck device name: ${n.name}`);const r=new Yt(n,{name:e,debug:t});return await r.connect(),r},Po=async(i={})=>{const e=i.name??"Bangle",t=i.debug??!1,n=await navigator.bluetooth.requestDevice({filters:Ii(i,"Bangle.js"),optionalServices:[Et.service]});i.debug&&console.info(`Espruino.bangle device name: ${n.name}`);const r=new Yt(n,{name:e,debug:t});return await r.connect(),r},Fo=async(i={})=>{const e=new xr(i);return await e.connect(),e},Ii=(i,e)=>{const t=[];return i.filters?t.push(...i.filters):i.name?(t.push({name:i.name}),console.info(`Filtering Bluetooth devices by name '${i.name}'`)):t.push({namePrefix:e}),t},To=async(i={})=>{const e=await navigator.bluetooth.requestDevice({filters:Ii(i,"Puck.js"),optionalServices:[Et.service]}),t=new Yt(e,{name:"Espruino",...i});return await t.connect(),t},Vi=async(i,e={},t,n,r,s)=>{const o=e.timeoutMs??t.evalTimeoutMs,a=e.assumeExclusive??!0;if(typeof i!="string")throw new TypeError(`Param 'code' should be a string. Got: ${typeof i}`);return new Promise((u,p)=>{const x=as(5),d=b=>{try{let y=b.data.trim();y.startsWith(">{")&&y.endsWith("}")&&(y=y.slice(1));const w=JSON.parse(y);"reply"in w?w.reply===x?(g(),"result"in w&&u(w.result)):s(`Expected reply ${x}, got ${w.reply}`):s(`Expected packet, missing 'reply' field. Got: ${b.data}`)}catch(y){a?g(`Unexpected reply: ${b.data}. Error: ${Rt(y)}`):s(Rt(y))}},m=b=>{b.newState!=="connected"&&g(`State changed to '${b.newState}', aborting`)};t.addEventListener("data",d),t.addEventListener("change",m);const g=xn(o,b=>{p(new Error(b))},b=>{t.removeEventListener("data",d),t.removeEventListener("change",m)}),_=`${n}(JSON.stringify({reply:"${x}", result:JSON.stringify(${i})}))
`;r&&s(_),t.write(_)})};var _r={};le(_r,{dumpDevices:()=>Ro,start:()=>$r});const No=1e4,Ro=async(i="videoinput")=>{const e=await navigator.mediaDevices.enumerateDevices();for(const t of e)t.kind===i&&(console.log(t.label),console.log(` Kind: ${t.kind}`),console.log(` Device id: ${t.deviceId}`))},$r=async(i={})=>{const e=document.createElement("VIDEO");e.style.display="none",e.playsInline=!0,e.muted=!0,e.classList.add("ixfx-camera"),document.body.append(e);let t=()=>{};const n=()=>{try{t()}catch{}e.remove()};try{return t=(await Do(e,i)).dispose,{videoEl:e,dispose:n}}catch(r){throw console.error(r),n(),r}},Do=async(i,e={})=>{if(i===void 0)throw new Error("videoEl undefined");if(i===null)throw new Error("videoEl null");const t=e.max,n=e.min,r=e.ideal,s={audio:!1,video:{width:{},height:{}}};e.facingMode==="front"&&(e={...e,facingMode:"user"}),e.facingMode==="back"&&(e={...e,facingMode:"environment"}),e.facingMode&&(s.video.facingMode=e.facingMode),e.deviceId&&(s.video.deviceId=e.deviceId),r&&(s.video.width={...s.video.width,ideal:r.width},s.video.height={...s.video.height,ideal:r.height}),t&&(s.video.width={...s.video.width,max:t.width},s.video.height={...s.video.height,max:t.height}),n&&(s.video.width={...s.video.width,min:n.width},s.video.height={...s.video.height,min:n.height});const o=xn(e.startTimeoutMs??No,a=>{throw new Error(`Camera getUserMedia failed: ${a}`)});try{const a=await navigator.mediaDevices.getUserMedia(s),u=()=>{i.pause();const d=a.getTracks();for(const m of d)m.stop()};i.srcObject=a,o();const p={videoEl:i,dispose:u};return new Promise((d,m)=>{i.addEventListener("loadedmetadata",()=>{i.play().then(()=>{d(p)}).catch(g=>{m(g)})})})}catch(a){throw o(Rt(a)),a}};var Ar={};le(Ar,{start:()=>Er});const Er=async i=>{const e=document.createElement("VIDEO");e.style.display="none",e.playsInline=!0,e.muted=!0,e.classList.add("ixfx-video"),document.body.appendChild(e);let t=()=>{};const n=()=>{try{t()}catch{}e.remove()};try{return t=(await Bo(e,i)).dispose,{videoEl:e,dispose:n}}catch(r){throw console.error(r),n(),r}},Bo=async(i,e)=>{if(i===void 0)throw new Error("videoEl undefined");if(i===null)throw new Error("videoEl null");const t=URL.createObjectURL(e);i.src=t,i.loop=!0;const r={videoEl:i,dispose:()=>{i.pause()}};return new Promise((o,a)=>{i.addEventListener("loadedmetadata",()=>{i.play().then(()=>{o(r)}).catch(u=>{a(u)})})})};var Oo=class{_source;_state;_teardownNeeded=!1;_cameraConstraints;_cameraStartResult;_videoSourceCapture;_videoFile;_videoStartResult;_showCanvas;_showPreview;_postCaptureDraw;_timer;_captureCanvasEl;constructor(i={}){this._state="ready",this._source="",this._timer=performance.now(),this._showCanvas=i.showCanvas??!1,this._showPreview=i.showPreview??!1,this._cameraConstraints=i.cameraConstraints??void 0,this._captureCanvasEl=i.captureCanvasEl??void 0,this._postCaptureDraw=i.postCaptureDraw}showPreview(i){if(this._state==="disposed")throw new Error("Disposed");let e;switch(this._source){case"camera":{e=this._cameraStartResult?.videoEl,e!==void 0&&(e.style.display=i?"block":"none");break}}this._showPreview=i}showCanvas(i){if(this._state==="disposed")throw new Error("Disposed");let e;if(this._source==="camera"||this._source==="video")e=this._videoSourceCapture?.canvasEl,e!==void 0&&(e.style.display=i?"block":"none");else throw new Error(`Source not implemented: ${this._source}`);this._showCanvas=i}getCapturer(){if(this._state==="disposed")throw new Error("Disposed");if(this._source==="camera"||this._source==="video")return this._videoSourceCapture;throw new Error(`Source kind not supported ${this._source}`)}async useCamera(i){if(this._state==="disposed")throw new Error("Disposed");this._source="camera",this._teardownNeeded&&this.teardown(),i&&(this._cameraConstraints=i),await this.init()}async useVideo(i){if(this._state==="disposed")throw new Error("Disposed");this._source="video",this._teardownNeeded&&this.teardown(),this._videoFile=i,await this.init()}async initCamera(){const i=await $r(this._cameraConstraints);if(i===void 0)throw new Error("Could not start camera");this._cameraStartResult=i,this.postInit(i)}async initVideo(){if(!this._videoFile)throw new Error("Video file not defined");const i=await Er(this._videoFile);this._videoStartResult=i,this.postInit(i)}async postInit(i){return this._showPreview&&(i.videoEl.style.display="block"),this._videoSourceCapture=_s(i.videoEl,{postCaptureDraw:this._postCaptureDraw,showCanvas:this._showCanvas,canvasEl:this._captureCanvasEl}),this._teardownNeeded=!0,this._cameraStartResult=i,Promise.resolve()}dispose(){this._state!=="disposed"&&(this.teardown(),this._state="disposed")}async init(){switch(this._timer=performance.now(),this._source){case"camera":{await this.initCamera();break}case"video":{await this.initVideo();break}}this._state="initialised"}teardown(){if(this._teardownNeeded){switch((this._source==="camera"||this._source==="video")&&this._videoSourceCapture?.dispose(),this._source){case"camera":{this._cameraStartResult?.dispose();break}case"video":{this._videoStartResult?.dispose();break}}this._teardownNeeded=!1}}getFrame(){if(this._state==="disposed")throw new Error("Disposed");switch(this._source){case"camera":return this.getFrameCamera();case"video":return this.getFrameCamera();default:throw new Error(`source type unhandled ${this._source}`)}}getTimestamp(){return performance.now()-this._timer}getFrameCamera(){return this._videoSourceCapture?.capture()}};const zo=(i,e={})=>{const t=si(e.startDelay,2e3),n=si(e.maxDelay,t*10),r=si(e.checkStateMs,5e3);if(t>n)throw new Error("startDelay should be less than maxDelay");if(r<0)throw new Error("Param 'checkState' should be above zero");let s=!0,o=cs({closed:"connecting",open:"closed",connecting:["closed","open"]}),a;const u=y=>{e.onError?e.onError(y):(console.log("rw on error",y),console.error(` error: ${y.error}`),console.error(` type: ${y.type}`),console.error(` error msg: ${y.message}`))},p=y=>{e.onMessage&&e.onMessage(y.data)},x=async()=>{if(o.value==="connecting")throw new Error("Cannot connect twice");o=it(o,"connecting"),a!==void 0&&(a.removeEventListener("error",u),e.onMessage&&a.removeEventListener("message",p),a=void 0);const y=await ds({async probe(k){try{const B=new WebSocket(i);return(await fs(B,["open","error"],{timeoutMs:1e3})).type==="open"?{success:!0,value:B}:{success:!1,error:"Could not open"}}catch(B){return{success:!1,error:Rt(B)}}}},{predelayMs:t,limitAttempts:e.limitAttempts});a=y.value;let w=!1;return y.success&&a?(e.onMessage,w=!0,o=it(o,"open"),e.onConnected&&e.onConnected()):o=it(o,"closed"),w},d=y=>{if(a)a.readyState===a.OPEN?a.send(y):m();else throw new Error("Not connected")},m=()=>{o.value!=="closed"&&(o.value==="open"&&(o=it(o,"closed"),e.onDisconnected&&e.onDisconnected()),s&&o.value!=="connecting"&&(console.log("Scheduling connect"),setTimeout(()=>{x()},100)))},g=()=>a?a.readyState===a.OPEN:!1,_=()=>{s=!1,o=it(o,"closed"),a?.close(),e.onDisconnected&&e.onDisconnected()},b=()=>(s=!0,o.value==="open"?Promise.resolve(!0):o.value==="connecting"?Promise.resolve(!1):x());return x(),setInterval(()=>{if(a)switch(a.readyState){case a.CLOSED:{o.value==="open"&&m();break}}},r),{send:d,isConnected:g,close:_,open:b}};var Lo={};le(Lo,{Audio:()=>fr,Bluetooth:()=>cr,Camera:()=>_r,Codec:()=>Di,Espruino:()=>Sr,FrameProcessor:()=>Oo,Midi:()=>yr,Serial:()=>wr,StringReceiveBuffer:()=>Bi,StringWriteBuffer:()=>Oi,VideoFile:()=>Ar,genericStateTransitionsInstance:()=>zi,reconnectingWebsocket:()=>zo});const Io=(i,e)=>{if(i===null)throw new Error("Param 'elem' is null. Expected element to observe");if(i===void 0)throw new Error("Param 'elem' is undefined. Expected element to observe");const t=En(n=>{const r=new ResizeObserver(s=>{n.set(s)});return r.observe(i),()=>{r.unobserve(i)}});return $n({elapsed:e??100})(t)},Vo=i=>$n({elapsed:i??100})(pi(window,"resize",{innerWidth:0,innerHeight:0})),qo=(i=document.documentElement)=>En(t=>{const n=new MutationObserver(s=>{t.set(s)}),r={attributeFilter:["class"],attributes:!0};return n.observe(i,r),()=>{n.disconnect()}});function jo(i){let e=i;const t=bs(),n=r=>{e=r,t.set(r)};return{dispose:t.dispose,isDisposed:t.isDisposed,last:()=>e,on:t.on,onValue:t.onValue,set:n,setHsl:r=>{n(r)}}}function Uo(i,e={}){const t=qi(i,e),n=t.el,r=e.relative??!1,s=e.inverted??!1,o=Ht(t,u=>Number.parseFloat(u));return r&&(n.max=s?"0":"1",n.min=s?"1":"0",n.hasAttribute("step")||(n.step="0.1")),n.getAttribute("type")===null&&(n.type="range"),{...o,last(){return Number.parseFloat(t.last())},set:u=>{t.set(u.toString())}}}function Ho(i,e={}){const t=qi(i,{...e,upstreamFilter:r=>typeof r=="object"?mi(r):r});return{...Ht(t,r=>en(r,{scalar:!0,ensureSafe:!0})),last(){return en(t.last(),{scalar:!0,ensureSafe:!0})},set(r){t.set($s(r))}}}function qi(i,e={}){const t=typeof i=="string"?document.querySelector(i):i;if(t===null&&typeof i=="string")throw new Error(`Element query could not be resolved '${i}'`);if(t===null)throw new Error("targetOrQuery is null");const n=ge(i),s=(e.when??"changed")==="changed"?"change":"input",o=e.emitInitialValue??!1,a=e.fallbackValue??"",u=e.upstreamSource;let p=()=>{},x=e.attributeName,d=e.fieldName;d===void 0&&x===void 0&&(x=d="value");const m=()=>{let w;return x&&(w=n.getAttribute(x)),d&&(w=n[d]),w==null&&(w=a),w},g=w=>{x&&n.setAttribute(x,w),d&&(n[d]=w)},_=w=>{w=e.upstreamFilter?e.upstreamFilter(w):w,g(w)};u&&(p=u.onValue(_),Ze(u)&&_(u.last()));const b=An(n,s,{fireInitial:o,debugFiring:e.debugFiring??!1,debugLifecycle:e.debugLifecycle??!1}),y=Ht(b,w=>m());return{...y,el:n,last(){return m()},set(w){g(w)},dispose(w){p(),y.dispose(w),b.dispose(w)}}}function Wo(i,e={}){const t=ge(i),r=(e.when??"changed")==="changed"?"change":"input",s=e.emitInitialValue??!1,o=e.upstreamSource,a=new Map;let u=()=>{};const p=()=>{const b=new FormData(t),y=[];for(const[k,B]of b.entries()){const U=B.toString();let V=a.get(k);if(!V){const G=x(k,U);G&&(G.type==="range"||G.type==="number"?V="number":G.type==="color"?V="colour":G.type==="checkbox"&&(B==="true"||B==="on")?V="boolean":V="string",a.set(k,V))}if(V==="number")y.push([k,Number.parseFloat(U)]);else if(V==="boolean"){const G=U==="true";y.push([k,G])}else if(V==="colour"){const G=mi(U);y.push([k,Es(G,{scalar:!1})])}else y.push([k,B.toString()])}for(const k of t.querySelectorAll('input[type="checkbox"]'))!k.checked&&k.value==="true"&&y.push([k.name,!1]);return Object.fromEntries(y)},x=(b,y)=>{const w=t.querySelector(`[name="${b}"]`);if(!w){console.warn(`Form does not contain an element with name="${b}"`);return}if(w.type==="radio"){const k=t.querySelector(`[name="${b}"][value="${y}"]`);if(!k){console.warn(`Form does not contain radio option for name=${b} value=${y}`);return}return k}return w},d=(b,y)=>{const w=x(b,y);if(w&&(w.nodeName==="INPUT"||w.nodeName==="SELECT")){if(w.type==="color")typeof y=="object"&&(y=mi(y));else if(w.type==="checkbox")if(typeof y=="boolean"){w.checked=y;return}else console.warn(`Rx.Sources.domForm: Trying to set non boolean type to a checkbox. Name: ${b} Value: ${y} (${typeof y})`);else if(w.type==="radio"){w.checked=!0;return}w.value=y}},m=b=>{for(const[y,w]of Object.entries(b)){let k=a.get(y);k||(k=typeof w,k==="object"&&(As(w),k="colour"),a.set(y,k));const B=e.upstreamFilter?e.upstreamFilter(y,w):w;d(y,B)}};o&&(u=o.onValue(m),Ze(o)&&m(o.last()));const g=An(t,r,{fireInitial:s,debugFiring:e.debugFiring??!1,debugLifecycle:e.debugLifecycle??!1}),_=Ht(g,b=>p());return{..._,el:t,last(){return p()},set:m,setNamedValue:d,dispose(b){u(),_.dispose(b),g.dispose(b)}}}function Go(i){const e=[...document.querySelectorAll(i)];return ws(e)}const Ko=(i,e,t={})=>Zt(i,e,{...t,elField:"textContent"}),Xo=(i,e,t={})=>Zt(i,e,{...t,elField:"value",attribName:"value"}),Jo=(i,e,t={})=>Zt(i,e,{...t,elField:"innerHTML"}),Zt=(i,e,...t)=>{if(e===null)throw new Error("Param 'elOrQuery' is null");if(e===void 0)throw new Error("Param 'elOrQuery' is undefined");const n=ge(e);let r=[];t.length===0?r.push({elField:"textContent"}):r=[...t];const s=r.map(o=>"element"in o?o:{...o,element:n});return Mr(i,...s)},Yo=(i,e)=>{const t=Cr(i);return n=>{t(n,e)}},Cr=i=>{if(i.elField!==void 0||i.cssVariable===void 0&&i.attribName===void 0&&i.cssProperty===void 0&&i.textContent===void 0&&i.htmlContent===void 0){const e=i.elField??"textContent";return(t,n)=>{n[e]=t}}if(i.attribName!==void 0){const e=i.attribName;return(t,n)=>{n.setAttribute(e,t)}}if(i.textContent)return(e,t)=>{t.textContent=e};if(i.htmlContent)return(e,t)=>{t.innerHTML=e};if(i.cssVariable!==void 0){let e=i.cssVariable;return e.startsWith("--")||(e="--"+e),(t,n)=>{n.style.setProperty(e,t)}}return i.cssProperty!==void 0?(e,t)=>{t.style[i.cssProperty]=e}:(e,t)=>{}},kr=i=>{if(!(!i.transform&&!i.transformValue)){if(i.transformValue){if(i.sourceField===void 0)throw new Error("Expects 'sourceField' to be set when 'transformValue' is set");return e=>{const t=e[i.sourceField];return i.transformValue(t)}}else if(i.transform){if(i.sourceField!==void 0)throw new Error("If 'transform' is set, 'sourceField' is ignored");return e=>i.transform(e)}}},Mr=(i,...e)=>{const t=e.map(o=>{if(o.element&&o.element!==void 0)return o;if(o.query)return{...o,element:ge(o.query)};throw new Error(`Unable to resolve element. Missing 'element' or 'query' values on bind. ${JSON.stringify(o)}`)}),n=t.map(o=>({update:Yo(o,o.element),transformer:kr(o),sourceField:o.sourceField})),r=o=>{for(const a of n)if(a.transformer)a.update(a.transformer(o));else{const u=a.sourceField?o[a.sourceField]:o;typeof u=="object"?(a.sourceField,a.update(JSON.stringify(u))):a.update(u)}},s=i.on(o=>{Cn(o)?r(o.value):xs(o)&&console.warn(o)});return Ze(i)&&r(i.last()),{remove:o=>{if(s(),o)for(const a of t)a.element.remove()}}},Zo=(i,e,t)=>{const n=ge(e),r=o=>{t(o,n)},s=i.on(o=>{Cn(o)?(console.log(o),r(o.value)):console.warn(o)});return Ze(i)&&r(i.last()),{remove:o=>{s(),o&&n.remove()}}},Qo=(i,e,t,n={})=>{if(e===null)throw new Error("Param 'elOrQuery' is null");if(e===void 0)throw new Error("Param 'elOrQuery' is undefined");const r=ge(e),s=u=>{t(u,r)},o=i.onDiff(u=>{s(u)}),a=()=>{Ze(i)&&n.initial&&n.initial(i.last(),r)};return a(),{refresh:()=>{a()},remove:u=>{o(),u&&r.remove()}}},ea=(i,e)=>{const t=e.container?ge(e.container):document.body,n=e.defaultTag??"div",r=new Map,s=new Map;for(const[d,m]of Object.entries(e.binds??{})){const g=m.tagName??n;s.set(d,{...m,update:Cr(m),transform:kr(m),tagName:g,path:d})}const o=d=>{const m=gs(s,vs(d));if(m!==void 0)return m;if(!d.includes("."))return s.get("_root")};function*a(d){for(const m of ys(d))s.has(m)&&(yield s.get(m));s.has("_root")&&d.includes(".")&&(yield s.get("_root"))}const u=(d,m)=>{const g=hi(d);console.log(`Rx.Dom.elements.create: ${d} rooted: ${g} value: ${JSON.stringify(m)}`);const _=o(hi(d));let b=n;_?.tagName&&(b=_.tagName);const y=document.createElement(b);y.setAttribute("data-path",d),p(d,y,m);let w;for(const k of a(g))if(k?.nestChildren){const B=ps(d,"."),U=k.path.replace("_root",B);if(w=r.get(U),w!==void 0)break}(w??t).append(y),r.set(d,y),console.log(`Added el: ${d}`)},p=(d,m,g)=>{console.log(`Rx.dom.update path: ${d} value:`,g);const _=o(hi(d));_===void 0?(typeof g=="object"&&(g=JSON.stringify(g)),m.textContent=g):(_.transform&&(g=_.transform(g)),_.update(g,m))},x=d=>{const m=new fi({},d);let g=m.dequeue();const _=new Set;for(;g!==void 0;){const b=g.path;if(!("previous"in g)||g.previous===void 0){console.log(`Rx.Dom.elements.changes no previous. path: ${b}`),u(b,g.value);const y=[...Qi(g.value,!1,Number.MAX_SAFE_INTEGER,b)];console.log(y);for(const w of y)_.has(w.path)||(m.enqueue(w),_.add(w.path))}else if(g.value===void 0){const y=r.get(b);y===void 0?console.warn(`No element to delete? ${b} `):(console.log(`Rx.Dom.elements.changes delete ${b}`),y.remove())}else{const y=r.get(b);y===void 0?(console.warn(`Rx.Dom.elements.changes No element to update ? ${b} `),u(b,g.value)):p(b,y,g.value)}g=m.dequeue()}};if(i.onDiff(d=>{x(d)}),Ze(i)){const d=i.last();x([...Qi(d,!1,1)])}},hi=i=>{const e=ms(i,".");return e===i?"_root":"_root."+e};function ta(){const i=()=>({width:window.innerWidth,height:window.innerHeight}),e=pi(window,"resize",{lazy:"very",transform:()=>i()}),t=pi(window,"pointermove",{lazy:"very",transform:r=>{if(r===void 0)return{x:0,y:0};const s=r;return{x:s.x,y:s.y}}});return{dispose:(r="Reactive.win.dispose")=>{e.dispose(r),t.dispose(r)},size:e,pointer:t}}var Pr={};le(Pr,{bind:()=>Mr,bindDiffUpdate:()=>Qo,bindElement:()=>Zt,bindHtml:()=>Jo,bindText:()=>Ko,bindUpdate:()=>Zo,bindValueText:()=>Xo,browserResizeObservable:()=>Io,colour:()=>jo,cssClassChange:()=>qo,domForm:()=>Wo,domHslInputValue:()=>Ho,domInputValue:()=>qi,domNumberInputValue:()=>Uo,elements:()=>ea,fromDomQuery:()=>Go,win:()=>ta,windowResize:()=>Vo});var ia={};le(ia,{RxUi:()=>Pr});var Qt=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};const na=(i,e)=>i===void 0||e===void 0?!1:i.max===e.max&&i.min===e.min;class vn{#e;#i;#t;constructor(e){this.name=e,this.bounds="auto",this.#i=Wr(),this.#t=t=>t}humanFormatValue(e){return e.length===0?"":e[0].toFixed(2)}getRange(e){if(this.bounds==="auto")return this.computeActualRange(e);if(this.bounds==="auto-persistent"){const t=this.computeActualRange(e);return this.#i=Gr(t,this.#i),this.#i}return this.bounds}getCurrentRange(){return this.#e}getValueScaler(e){const t=this.getRange(e);return na(t,this.#e)||(this.#e=t,this.#t=Kr(t.min,t.max,0,1)),this.#t}computeActualRange(e,t=0){let n=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER;for(const s of e)for(const[o,a]of s.getValuesForColumn(t))typeof o=="number"&&(Number.isNaN(o)||(o<n&&(n=o),o>r&&(r=o)));return{min:n,max:r}}}var q,Se,$t,He,_e,ce,$e,At,We,pe,z,Fr,Tr,$i,Ai,Ei,Nr,Rr,at,Dr,Br,Or,Ge;let mt=(Ge=class extends Y{constructor(){super(...arguments);R(this,z);R(this,q);R(this,Se);R(this,$t);R(this,He);R(this,_e);R(this,ce);R(this,$e);R(this,At);R(this,We);R(this,pe);this.hideLegend=!1,this.renderStyle="dot",this.padding=5,this.primaryAxis=new vn("primary"),this.secondaryAxis=new vn("secondary"),this.paused=!1,this.plotAreaFormat={fill:{type:"none"},outline:{type:"none"}},this.automaticSeriesColour={saturation:1,lightness:.5,alpha:1},this.seriesDefault={},D(this,q,new Map),D(this,He,""),D(this,_e,0),D(this,ce,[]),D(this,$e,new Map),D(this,At,10),this.canvasEl=ft(),this.tooltipEl=ft(),D(this,We,Zi.throttle(()=>A(this,z,at).call(this),100)),this.seriesColourGenerate=t=>{const n=we.goldenAngleColour($(this,_e),this.automaticSeriesColour.saturation,this.automaticSeriesColour.lightness,this.automaticSeriesColour.alpha);return Wi(this,_e)._++,n}}setDrawDebounce(t){D(this,We,Zi.throttle(()=>A(this,z,at).call(this),t))}get series(){return[...$(this,q).values()]}get seriesCount(){return $(this,q).size}getSeriesFormatting(t,n){let r=$(this,$e).get(t);return!r&&n&&(r={axis:"primary",fill:{colour:this.seriesColourGenerate(t),type:"solid"},outline:{type:"none"},bar:{gapWidth:3},dot:{gapWidth:0,radius:"automatic"},line:{width:2,cap:"round",join:"round"}},$(this,$e).set(t,r)),r}setSeriesFormatting(t,n){const s={...this.getSeriesFormatting(t,!0),...n};s.fill=ra(s.fill),s.outline=sa(s.outline),$(this,$e).set(t,s)}static fromQuery(t){const n=document.querySelector(t);if(!n)throw new Error("Query does not match an element");if(n.nodeName==="IXFX-PLOT-ELEMENT")return n;throw new Error(`Element is not a PlotElement ('${n.nodeName}')`)}deleteSeries(t){return t=t.toLowerCase(),$(this,q).get(t)?($(this,q).delete(t),!0):!1}clearSeries(t){return t=t.toLowerCase(),$(this,q).get(t)?($(this,q).clear(),!0):!1}clear(){$(this,q).clear(),D(this,_e,0)}clearData(){for(const t of $(this,q).values())t.clear()}connectedCallback(){super.connectedCallback()}firstUpdated(t){new ResizeObserver(r=>{const s=A(this,z,Nr).call(this);if(!s)return;const o=r[0];s.setLogicalSize(o.contentRect),A(this,z,Rr).call(this)&&A(this,z,at).call(this)}).observe(this),this.updateColours()}updateColours(){D(this,He,Yr("legend-fg","black"))}setRawValues(t,n,r){if(!Array.isArray(t))throw new TypeError("Param 'values' is not an array");let s=this.getOrCreateSeries(n);return s.setRawValues(t,r),s}appendObjectBySeries(t,n){for(const r of Ss.getPathsAndData(t,!0)){const s=r.value;typeof s=="number"&&this.appendRawValues(s,r.path,!1)}n&&this.draw()}appendRawValues(t,n,r){Array.isArray(t)||(t=[t]);let s=this.getOrCreateSeries(n);for(const o of t)s.pushValue(o,!1);r&&this.draw()}draw(t=!1){t?A(this,z,at).call(this):$(this,We).call(this)}drawLegend(t,n){const r=$(this,He),s=this.padding;let o=0,a=s;const u=10,p=n.ctx;for(const x of $(this,q).values()){const d=x.getFormatting(),m=d.fill.type==="solid"?d.fill.colour:"transparent";p.fillStyle=we.toCssColour(m),p.fillRect(o,a,u,u),p.fillStyle=r,o+=u+s;const g=p.measureText(x.name);p.textBaseline="middle",p.fillText(x.name,o,a+u/2),o+=g.width+s,o>=t.width&&(a+=10+s,o=0)}}calculatePlotDataArea(t,n,r,s){return{x:r,y:0,width:t.width-r-s-s,height:n-s}}computeAxisYWidth(t){return 0}computeLegend(t,n,r){if(this.hideLegend)return{bounds:{width:0,height:0},parts:[]};const s=t.ctx,o=[...$(this,q).values()];let a=0;const u=o.map(_=>{let b=$(this,At)+r;const y=s.measureText(_.name);b+=y.width;const w=y.emHeightAscent+y.emHeightDescent;return a=Math.max(w,a),{width:b,height:w}}),p=[];let x=r,d=r,m=0;for(const _ of u)p.push({x,y:d,..._}),x+=_.width,m=Math.max(x,m),x>=n&&(x=r,d+=a+r);return{bounds:{width:m,height:d+a+r},parts:p}}getOrCreateSeries(t){let n=$(this,q).get(t.toLowerCase());if(n)return n;n=new oa(t,this);const r={limit:Number.NaN,...this.seriesDefault};return Number.isNaN(r.limit)||n.setCapacityLimit(r.limit),$(this,q).set(t.toLowerCase(),n),n}getSeries(t){return $(this,q).get(t)}render(){return L`<canvas @pointerleave="${A(this,z,Fr)}" @pointermove="${A(this,z,Tr)}" ${It(this.canvasEl)}></canvas><div class="hidden" ${It(this.tooltipEl)} id="tooltip"></div>`}},q=new WeakMap,Se=new WeakMap,$t=new WeakMap,He=new WeakMap,_e=new WeakMap,ce=new WeakMap,$e=new WeakMap,At=new WeakMap,We=new WeakMap,pe=new WeakMap,z=new WeakSet,Fr=function(){D(this,pe,void 0),A(this,z,Ai).call(this)},Tr=function(t){D(this,pe,{x:t.offsetX,screenX:t.pageX,y:t.offsetY,screenY:t.pageY}),A(this,z,$i).call(this)},$i=function(){if($(this,pe)){for(const t of $(this,ce))if(!(t.width<=0)&&Ur.intersectsPoint(t,$(this,pe))){t.value?A(this,z,Ei).call(this,t.series.humanFormatValue(t.value)):A(this,z,Ei).call(this,"");return}A(this,z,Ai).call(this)}},Ai=function(){const t=this.tooltipEl.value;t&&t.classList.add("hidden")},Ei=function(t){const n=this.tooltipEl.value;if(!n)return;const r=$(this,pe);n.classList.remove("hidden");const s=10;n.innerHTML=t,r&&(n.style.left=`${r.screenX+s}px`,n.style.top=`${r.screenY+s}px`)},Nr=function(){if($(this,Se)!==void 0)return $(this,Se);const t=this.canvasEl.value;if(!t)throw new Error("canvas element not found");const n=new Zr(t);return D(this,Se,n),D(this,$t,Qr.makeHelper(n.ctx)),n},Rr=function(){for(const t of this.series.values())if(t.isDirty)return!0;return!1},at=function(){if(this.paused)return;const t=$(this,Se),n=$(this,$t),r=this.padding;if(!n||!t)return;t.clear();const s=n.ctx,o=this.computeAxisYWidth(t),a=t.width-o,u=this.computeLegend(t,a,r),p=t.height-u.bounds.height-r,x={width:o},d=this.calculatePlotDataArea(t,p,x.width,r),m={...u.bounds,x:x.width,y:d.y+d.height+r};this.hideLegend||(s.save(),s.translate(m.x+r,m.y+r),this.drawLegend(m,n),s.restore()),s.save(),s.translate(d.x+r,d.y+r),this.plotAreaFormat.fill.type==="solid"&&(s.fillStyle=we.resolveCss(this.plotAreaFormat.fill.colour),s.fillRect(0,0,d.width,d.height)),this.plotAreaFormat.outline.type==="solid"&&(s.strokeStyle=we.resolveCss(this.plotAreaFormat.outline.colour),s.strokeRect(0,0,d.width,d.height));const g=this.primaryAxis.getValueScaler($(this,q).values().filter(b=>b.onPrimaryAxis)),_=this.secondaryAxis.getValueScaler($(this,q).values().filter(b=>!b.onPrimaryAxis));D(this,ce,[]);for(const b of $(this,q).values()){switch(this.renderStyle){case"line":{A(this,z,Dr).call(this,b,n,b.onPrimaryAxis?g:_,d,{x:r,y:r});break}case"bar":{A(this,z,Or).call(this,b,n,b.onPrimaryAxis?g:_,d,{x:r,y:r});break}default:A(this,z,Br).call(this,b,n,b.onPrimaryAxis?g:_,d,{x:r,y:r})}b.isDirty=!1}s.restore(),A(this,z,$i).call(this)},Dr=function(t,n,r,s,o){const a=t.getFormatting(),u=a.line,p=s.width/t.length,x=p/2,d=u.width,m=d/2,g=s.height;let _=0;const y=[...t.getValuesForColumn(0)].map(B=>{const[U,V]=B;_+=p;const G=r(U);if(!Number.isNaN(U))return{x:_-x,y:(1-G)*g,value:U,index:V}}).filter(B=>B!==void 0),w=y.map(B=>({height:d,width:p,x:o.x+B.x-m,y:o.y+B.y-m,series:t,index:B.index,value:t.getValue(B.index)}));$(this,ce).push(...w);const k={filled:!1,fillStyle:"transparent",stroked:!0,strokeStyle:"black",strokeWidth:u.width};a.outline.type==="solid"?k.strokeStyle=a.outline.colour:a.fill.type==="solid"&&(k.strokeStyle=a.fill.colour),n.ctx.lineWidth=u.width,n.ctx.lineCap=u.cap,n.ctx.lineJoin=u.join,n.connectedPoints(y,k)},Br=function(t,n,r,s,o){const a=t.getFormatting(),u=a.dot,p=s.width/t.length,x=u.radius==="automatic"?p*.3:u.radius,d=p/2,m=s.height;let g=0;const b=[...t.getValuesForColumn(0)].map(k=>{const[B,U]=k;g+=p;const V=r(B);if(!Number.isNaN(B))return{x:g-d,y:(1-V)*m,radius:x,value:B,index:U}}).filter(k=>k!==void 0),y=b.map(k=>({height:k.radius*2,width:k.radius*2,x:o.x+k.x-k.radius,y:o.y+k.y-k.radius,series:t,index:k.index,value:t.getValue(k.index)}));$(this,ce).push(...y);const w={filled:!1,fillStyle:"transparent",stroked:!1,strokeStyle:"transparent"};a.fill.type==="solid"&&(w.filled=!0,w.fillStyle=a.fill.colour),a.outline.type==="solid"&&(w.stroked=!0,w.strokeStyle=a.outline.colour),n.dot(b,w)},Or=function(t,n,r,s,o){const a=t.getFormatting(),u=a.bar,p=s.width/t.length,x=p-u.gapWidth/2,d=s.height;let m=0;const _=[...t.getValuesForColumn(0)].map(w=>{const[k,B]=w;m+=p;const U=r(k);if(Number.isNaN(k))return;const V=U*d;return{x:m-x,y:d-V,width:x,height:V,value:k,index:B}}).filter(w=>w!==void 0),b=_.map(w=>({height:Math.max(5,w.height),width:w.width,x:o.x+w.x,y:o.y+w.y,series:t,index:w.index,value:t.getValue(w.index)}));$(this,ce).push(...b);const y={filled:!1,fillStyle:"transparent",stroked:!1,strokeStyle:"transparent"};a.fill.type==="solid"&&(y.filled=!0,y.fillStyle=a.fill.colour),a.outline.type==="solid"&&(y.stroked=!0,y.strokeStyle=a.outline.colour),n.rect(_,y)},Ge.styles=te`
  :host {
    width: 100%;
    height: 100%;
    display: block;
  }

  #tooltip {
    border: 1px solid black;
    background: white;
    color: black;
    padding: 0.3em;
    font-size: 10px;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity:1;
    pointer-events: none;
  }

  .hidden {
    opacity:0 !important;
  }
  `,Ge);Qt([N({attribute:"hide-legend",type:Boolean})],mt.prototype,"hideLegend",void 0);Qt([N({attribute:"render",type:String})],mt.prototype,"renderStyle",void 0);Qt([N({attribute:"padding",type:Number})],mt.prototype,"padding",void 0);mt=Qt([oe("ixfx-plot-element")],mt);const ra=i=>i.type==="none"?i:{type:"solid",colour:we.resolveCss(i.colour)},sa=i=>{if(i.type==="none")return i;const e=we.resolveCss(i.colour);return{...i,colour:e}};class oa{#e=[];#i=Number.NaN;#t=!1;#n=!0;constructor(e,t){this.name=e,this.plot=t}get length(){return this.#e.length}*getValuesForColumn(e){let t=0;for(const n of this.#e)n&&e in n?yield[n[e],t]:yield[Number.NaN,t],t++}getValue(e){return this.#e[e]}pushValue(e,t){if(Array.isArray(e)||(e=[e]),e.length===0)throw new Error("Param 'value' is empty. Expected a value or array of value components");this.#e.push(e),Number.isNaN(this.#i)||(this.#e=ci(this.#e,this.#i,"undefined","from-start")),this.#t=!0,t&&this.plot.draw()}setValues(e,t){if(!Array.isArray(e))throw new TypeError("Param 'values' is not an array");this.#e=ci(e,this.#i,"undefined"),this.#t=!0,t&&this.plot.draw()}humanFormatValue(e){let t=`${this.name} `;return this.onPrimaryAxis?t+=this.plot.primaryAxis.humanFormatValue(e):t+=this.plot.secondaryAxis.humanFormatValue(e),t}setRawValues(e,t){this.setValues(e.map(n=>[n]),t)}setCapacityLimit(e){if(typeof e!="number")throw new TypeError(`Expect type number. Got: ${typeof e}`);if(!Number.isFinite(e))throw new TypeError("Param 'v' is not finite");if(Number.isNaN(e))throw new TypeError("Param 'v' is NaN");this.#i=e,this.#e=ci(this.#e,this.#i,"undefined")}unsetCapacityLimit(){this.#i=Number.NaN}setFormatting(e){this.plot.setSeriesFormatting(this.name,e)}getFormatting(){return this.plot.getSeriesFormatting(this.name,!0)}get isDirty(){return this.#t}set isDirty(e){this.#t=e}get onPrimaryAxis(){return this.#n}set onPrimaryAxis(e){e!==this.#n&&(this.#n=e,this.#t=!0)}clear(){this.#e=[],this.#t=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=(i,e,t)=>{const n=new Map;for(let r=e;r<=t;r++)n.set(i[r],r);return n},aa=Bn(class extends On{constructor(i){if(super(i),i.type!==Dn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const r=[],s=[];let o=0;for(const a of i)r[o]=n?n(a,o):o,s[o]=t(a,o),o++;return{values:s,keys:r}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){const r=ro(i),{values:s,keys:o}=this.dt(e,t,n);if(!Array.isArray(r))return this.ut=o,s;const a=this.ut??=[],u=[];let p,x,d=0,m=r.length-1,g=0,_=s.length-1;for(;d<=m&&g<=_;)if(r[d]===null)d++;else if(r[m]===null)m--;else if(a[d]===o[g])u[g]=ye(r[d],s[g]),d++,g++;else if(a[m]===o[_])u[_]=ye(r[m],s[_]),m--,_--;else if(a[d]===o[_])u[_]=ye(r[d],s[_]),rt(i,u[_+1],r[d]),d++,_--;else if(a[m]===o[g])u[g]=ye(r[m],s[g]),rt(i,r[d],r[m]),m--,g++;else if(p===void 0&&(p=yn(o,g,_),x=yn(a,d,m)),p.has(a[d]))if(p.has(a[m])){const b=x.get(o[g]),y=b!==void 0?r[b]:null;if(y===null){const w=rt(i,r[d]);ye(w,s[g]),u[g]=w}else u[g]=ye(y,s[g]),rt(i,r[d],y),r[b]=null;g++}else ai(r[m]),m--;else ai(r[d]),d++;for(;g<=_;){const b=rt(i,u[_+1]);ye(b,s[g]),u[g++]=b}for(;d<=m;){const b=r[d++];b!==null&&ai(b)}return this.ut=o,no(i,u),Ee}});var tt=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};const la=i=>{if(!(i==null||i==="undefined"))try{if(typeof i=="string"){if(i.length===0)return;const e=JSON.parse(i);if(!Array.isArray(e)){console.error("Histogram innerText should be JSON array");return}for(const[t,n]of e.entries()){if(!Array.isArray(n)){console.error("Histogram array should consist of inner arrays");return}if(n.length!==2){console.error("Histogram inner arrays should consist of two elements");return}if(typeof n[0]!="string"){console.error(`First element of inner array should be a string (index ${t})`);return}if(typeof n[1]!="number"){console.error(`Second element of inner array should be a number (index ${t})`);return}}return e}}catch(e){console.log(i),console.error(e)}};var Ke;let ke=(Ke=class extends Y{constructor(){super(),this.data=[],this.showDataLabels=!0,this.height="100%",this.showXAxis=!0,this.json=void 0}connectedCallback(){this.hasAttribute("json")||this.setAttribute("json",this.innerText),super.connectedCallback()}barTemplate(e,t,n){const{percentage:r}=e,[s,o]=e.data,a=1,u=2,p=t+1,x=p+1,d=L`<div class="data">${o}</div>`,m=L`${s}`;return L`
      <div
             class="bar"
             style="grid-area: ${a} / ${p} / ${u} / ${x}"
           >
             <div class="barTrack" style="height: ${(r??0)*100}%"></div>
             ${this.showDataLabels?d:""}
           </div>
           <div
             class="xAxisLabels"
             style="grid-area: ${a+2} / ${p} / ${u+2} / ${x}"
           >
             ${this.showXAxis?m:""}
           </div>
    `}render(){if((this.data===void 0||this.data.length===0)&&this.json===void 0)return L``;const e=this.data??this.json,t=e.length,n=Math.max(...e.map(u=>u[1])),r=e.map(u=>({data:u,percentage:u[1]/n})),s=L`
      <div
            class="xAxis"
            style="grid-area: 2 / 1 / 3 / ${e.length+1}"
          ></div>
    `,o=this.height?`height: ${this.height};`:"";return L`
      <style>
             div.chart {
               grid-template-columns: repeat(${e.length}, minmax(2px, 1fr));
             }
           </style>
           <div class="container" style="${o}">
             <div class="chart">
               ${aa(r,u=>u.data[0],(u,p)=>this.barTemplate(u,p,t))}
               ${this.showXAxis?s:""}
             </div>
           </div>
    `}},Ke.styles=te`
    :host {
    }
    div.container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    div.chart {
      display: grid;
      flex: 1;
      grid-template-rows: 1fr 1px min-content;
      justify-items: center;
    }
    div.bar {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-self: normal;
      padding-left: 0.3vw;
      padding-right: 0.3vw;
    }
    div.bar > div.barTrack {
      background-color: var(--histogram-bar-color, gray);
      align-self: stretch;
    }
    div.xAxisLabels,
    div.data {
      font-size: min(1vw, 1em);
      color: var(--histogram-label-color, currentColor);
    }
    div.xAxisLabels {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
    }
    div.xAxis {
      background-color: var(--histogram-axis-color, silver);
      width: 100%;
      height: 100%;
    }
  `,Ke);tt([N()],ke.prototype,"data",void 0);tt([N()],ke.prototype,"showDataLabels",void 0);tt([N()],ke.prototype,"height",void 0);tt([N()],ke.prototype,"showXAxis",void 0);tt([N({converter:la,type:Object})],ke.prototype,"json",void 0);ke=tt([oe("histogram-vis")],ke);const ca=()=>{console.log("Init")};function ha(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nt={exports:{}},ua=Nt.exports,wn;function da(){return wn||(wn=1,(function(i,e){(function(t,n){i.exports=n()})(ua,(function(){/*! *****************************************************************************
		    Copyright (c) Microsoft Corporation.

		    Permission to use, copy, modify, and/or distribute this software for any
		    purpose with or without fee is hereby granted.

		    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		    PERFORMANCE OF THIS SOFTWARE.
		    ***************************************************************************** */function t(c,l,f){for(var h,v=0,S=l.length;v<S;v++)!h&&v in l||(h||(h=Array.prototype.slice.call(l,0,v)),h[v]=l[v]);return c.concat(h||Array.prototype.slice.call(l))}var n=Object.freeze({__proto__:null,blackman:function(c){for(var l=new Float32Array(c),f=2*Math.PI/(c-1),h=2*f,v=0;v<c/2;v++)l[v]=.42-.5*Math.cos(v*f)+.08*Math.cos(v*h);for(v=Math.ceil(c/2);v>0;v--)l[c-v]=l[v-1];return l},sine:function(c){for(var l=Math.PI/(c-1),f=new Float32Array(c),h=0;h<c;h++)f[h]=Math.sin(l*h);return f},hanning:function(c){for(var l=new Float32Array(c),f=0;f<c;f++)l[f]=.5-.5*Math.cos(2*Math.PI*f/(c-1));return l},hamming:function(c){for(var l=new Float32Array(c),f=0;f<c;f++)l[f]=.54-.46*Math.cos(2*Math.PI*(f/c-1));return l}}),r={};function s(c){for(;c%2==0&&c>1;)c/=2;return c===1}function o(c,l){if(l!=="rect"){if(l!==""&&l||(l="hanning"),r[l]||(r[l]={}),!r[l][c.length])try{r[l][c.length]=n[l](c.length)}catch{throw new Error("Invalid windowing function")}c=(function(f,h){for(var v=[],S=0;S<Math.min(f.length,h.length);S++)v[S]=f[S]*h[S];return v})(c,r[l][c.length])}return c}function a(c,l,f){for(var h=new Float32Array(c),v=0;v<h.length;v++)h[v]=v*l/f,h[v]=13*Math.atan(h[v]/1315.8)+3.5*Math.atan(Math.pow(h[v]/7518,2));return h}function u(c){return Float32Array.from(c)}function p(c){var l=Math.max.apply(null,c);return c.map((function(f){return f/l}))}function x(c){return 1127*Math.log(1+c/700)}function d(c,l,f){for(var h,v=new Float32Array(c+2),S=new Float32Array(c+2),E=l/2,P=x(0),F=(x(E)-P)/(c+1),C=new Array(c+2),M=0;M<v.length;M++)v[M]=M*F,S[M]=(h=v[M],700*(Math.exp(h/1127)-1)),C[M]=Math.floor((f+1)*S[M]/l);for(var I=new Array(c),T=0;T<I.length;T++){for(I[T]=new Array(f/2+1).fill(0),M=C[T];M<C[T+1];M++)I[T][M]=(M-C[T])/(C[T+1]-C[T]);for(M=C[T+1];M<C[T+2];M++)I[T][M]=(C[T+2]-M)/(C[T+2]-C[T+1])}return I}function m(c,l,f,h,v,S,E){h===void 0&&(h=5),v===void 0&&(v=2),S===void 0&&(S=!0),E===void 0&&(E=440);var P=Math.floor(f/2)+1,F=new Array(f).fill(0).map((function(H,J){return c*(function(Z,he){return Math.log2(16*Z/he)})(l*J/f,E)}));F[0]=F[1]-1.5*c;var C,M,I,T=F.slice(1).map((function(H,J){return Math.max(H-F[J])}),1).concat([1]),ae=Math.round(c/2),ie=new Array(c).fill(0).map((function(H,J){return F.map((function(Z){return(10*c+ae+Z-J)%c-ae}))})),ne=ie.map((function(H,J){return H.map((function(Z,he){return Math.exp(-.5*Math.pow(2*ie[J][he]/T[he],2))}))}));if(M=(C=ne)[0].map((function(){return 0})),I=C.reduce((function(H,J){return J.forEach((function(Z,he){H[he]+=Math.pow(Z,2)})),H}),M).map(Math.sqrt),ne=C.map((function(H,J){return H.map((function(Z,he){return Z/(I[he]||1)}))})),v){var ti=F.map((function(H){return Math.exp(-.5*Math.pow((H/c-h)/v,2))}));ne=ne.map((function(H){return H.map((function(J,Z){return J*ti[Z]}))}))}return S&&(ne=t(t([],ne.slice(3),!0),ne.slice(0,3))),ne.map((function(H){return H.slice(0,P)}))}function g(c,l){for(var f=0,h=0,v=0;v<l.length;v++)f+=Math.pow(v,c)*Math.abs(l[v]),h+=l[v];return f/h}function _(c){var l=c.ampSpectrum,f=c.barkScale,h=c.numberOfBarkBands,v=h===void 0?24:h;if(typeof l!="object"||typeof f!="object")throw new TypeError;var S=v,E=new Float32Array(S),P=0,F=l,C=new Int32Array(S+1);C[0]=0;for(var M=f[F.length-1]/S,I=1,T=0;T<F.length;T++)for(;f[T]>M;)C[I++]=T,M=I*f[F.length-1]/S;for(C[S]=F.length-1,T=0;T<S;T++){for(var ae=0,ie=C[T];ie<C[T+1];ie++)ae+=F[ie];E[T]=Math.pow(ae,.23)}for(T=0;T<E.length;T++)P+=E[T];return{specific:E,total:P}}function b(c){var l=c.ampSpectrum;if(typeof l!="object")throw new TypeError;for(var f=new Float32Array(l.length),h=0;h<f.length;h++)f[h]=Math.pow(l[h],2);return f}var y=null,w=function(c,l){var f=c.length;return l=l||2,y&&y[f]||(function(h){(y=y||{})[h]=new Array(h*h);for(var v=Math.PI/h,S=0;S<h;S++)for(var E=0;E<h;E++)y[h][E+S*h]=Math.cos(v*(E+.5)*S)})(f),c.map((function(){return 0})).map((function(h,v){return l*c.reduce((function(S,E,P,F){return S+E*y[f][P+v*f]}),0)}))},k=Object.freeze({__proto__:null,buffer:function(c){return c.signal},rms:function(c){var l=c.signal;if(typeof l!="object")throw new TypeError;for(var f=0,h=0;h<l.length;h++)f+=Math.pow(l[h],2);return f/=l.length,f=Math.sqrt(f)},energy:function(c){var l=c.signal;if(typeof l!="object")throw new TypeError;for(var f=0,h=0;h<l.length;h++)f+=Math.pow(Math.abs(l[h]),2);return f},complexSpectrum:function(c){return c.complexSpectrum},spectralSlope:function(c){var l=c.ampSpectrum,f=c.sampleRate,h=c.bufferSize;if(typeof l!="object")throw new TypeError;for(var v=0,S=0,E=new Float32Array(l.length),P=0,F=0,C=0;C<l.length;C++){v+=l[C];var M=C*f/h;E[C]=M,P+=M*M,S+=M,F+=M*l[C]}return(l.length*F-S*v)/(v*(P-Math.pow(S,2)))},spectralCentroid:function(c){var l=c.ampSpectrum;if(typeof l!="object")throw new TypeError;return g(1,l)},spectralRolloff:function(c){var l=c.ampSpectrum,f=c.sampleRate;if(typeof l!="object")throw new TypeError;for(var h=l,v=f/(2*(h.length-1)),S=0,E=0;E<h.length;E++)S+=h[E];for(var P=.99*S,F=h.length-1;S>P&&F>=0;)S-=h[F],--F;return(F+1)*v},spectralFlatness:function(c){var l=c.ampSpectrum;if(typeof l!="object")throw new TypeError;for(var f=0,h=0,v=0;v<l.length;v++)f+=Math.log(l[v]),h+=l[v];return Math.exp(f/l.length)*l.length/h},spectralSpread:function(c){var l=c.ampSpectrum;if(typeof l!="object")throw new TypeError;return Math.sqrt(g(2,l)-Math.pow(g(1,l),2))},spectralSkewness:function(c){var l=c.ampSpectrum;if(typeof l!="object")throw new TypeError;var f=g(1,l),h=g(2,l),v=g(3,l);return(2*Math.pow(f,3)-3*f*h+v)/Math.pow(Math.sqrt(h-Math.pow(f,2)),3)},spectralKurtosis:function(c){var l=c.ampSpectrum;if(typeof l!="object")throw new TypeError;var f=l,h=g(1,f),v=g(2,f),S=g(3,f),E=g(4,f);return(-3*Math.pow(h,4)+6*h*v-4*h*S+E)/Math.pow(Math.sqrt(v-Math.pow(h,2)),4)},amplitudeSpectrum:function(c){return c.ampSpectrum},zcr:function(c){var l=c.signal;if(typeof l!="object")throw new TypeError;for(var f=0,h=1;h<l.length;h++)(l[h-1]>=0&&l[h]<0||l[h-1]<0&&l[h]>=0)&&f++;return f},loudness:_,perceptualSpread:function(c){for(var l=_({ampSpectrum:c.ampSpectrum,barkScale:c.barkScale}),f=0,h=0;h<l.specific.length;h++)l.specific[h]>f&&(f=l.specific[h]);return Math.pow((l.total-f)/l.total,2)},perceptualSharpness:function(c){for(var l=_({ampSpectrum:c.ampSpectrum,barkScale:c.barkScale}),f=l.specific,h=0,v=0;v<f.length;v++)h+=v<15?(v+1)*f[v+1]:.066*Math.exp(.171*(v+1));return h*=.11/l.total},powerSpectrum:b,mfcc:function(c){var l=c.ampSpectrum,f=c.melFilterBank,h=c.numberOfMFCCCoefficients,v=c.bufferSize;if(typeof l!="object")throw new TypeError("Valid ampSpectrum is required to generate MFCC");if(typeof f!="object")throw new TypeError("Valid melFilterBank is required to generate MFCC");var S=Math.min(40,Math.max(1,h||13)),E=b({ampSpectrum:l}),P=f.length,F=Array(P);if(P<S)throw new Error("Insufficient filter bank for requested number of coefficients");for(var C=new Float32Array(P),M=0;M<C.length;M++){F[M]=new Float32Array(v/2),C[M]=0;for(var I=0;I<v/2;I++)F[M][I]=f[M][I]*E[I],C[M]+=F[M][I];C[M]=Math.log(C[M]+1)}var T=Array.prototype.slice.call(C);return w(T).slice(0,S)},chroma:function(c){var l=c.ampSpectrum,f=c.chromaFilterBank;if(typeof l!="object")throw new TypeError("Valid ampSpectrum is required to generate chroma");if(typeof f!="object")throw new TypeError("Valid chromaFilterBank is required to generate chroma");var h=f.map((function(S,E){return l.reduce((function(P,F,C){return P+F*S[C]}),0)})),v=Math.max.apply(Math,h);return v?h.map((function(S){return S/v})):h},spectralFlux:function(c){var l=c.complexSpectrum,f=c.previousComplexSpectrum;if(!f)return 0;for(var h=p(l.real),v=p(f.real),S=0,E=0;E<h.length;E++){var P=Math.abs(h[E])-Math.abs(v[E]);S+=Math.pow(P,2)}return Math.sqrt(S)},positiveFlux:function(c){var l=c.complexSpectrum,f=c.previousComplexSpectrum;if(!f)return 0;for(var h=p(l.real),v=p(f.real),S=0,E=0;E<h.length;E++){var P=Math.abs(v[E])-Math.abs(h[E]);S+=Math.pow(Math.max(P,0),2)}return Math.sqrt(S)}});function B(c){if(Array.isArray(c)){for(var l=0,f=Array(c.length);l<c.length;l++)f[l]=c[l];return f}return Array.from(c)}var U={},V={},G={bitReverseArray:function(c){if(U[c]===void 0){for(var l=(c-1).toString(2).length,f="0".repeat(l),h={},v=0;v<c;v++){var S=v.toString(2);S=f.substr(S.length)+S,S=[].concat(B(S)).reverse().join(""),h[v]=parseInt(S,2)}U[c]=h}return U[c]},multiply:function(c,l){return{real:c.real*l.real-c.imag*l.imag,imag:c.real*l.imag+c.imag*l.real}},add:function(c,l){return{real:c.real+l.real,imag:c.imag+l.imag}},subtract:function(c,l){return{real:c.real-l.real,imag:c.imag-l.imag}},euler:function(c,l){var f=-2*Math.PI*c/l;return{real:Math.cos(f),imag:Math.sin(f)}},conj:function(c){return c.imag*=-1,c},constructComplexArray:function(c){var l={};l.real=c.real===void 0?c.slice():c.real.slice();var f=l.real.length;return V[f]===void 0&&(V[f]=Array.apply(null,Array(f)).map(Number.prototype.valueOf,0)),l.imag=V[f].slice(),l}},Lr=function(c){var l={};c.real===void 0||c.imag===void 0?l=G.constructComplexArray(c):(l.real=c.real.slice(),l.imag=c.imag.slice());var f=l.real.length,h=Math.log2(f);if(Math.round(h)!=h)throw new Error("Input size must be a power of 2.");if(l.real.length!=l.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var v=G.bitReverseArray(f),S={real:[],imag:[]},E=0;E<f;E++)S.real[v[E]]=l.real[E],S.imag[v[E]]=l.imag[E];for(var P=0;P<f;P++)l.real[P]=S.real[P],l.imag[P]=S.imag[P];for(var F=1;F<=h;F++)for(var C=Math.pow(2,F),M=0;M<C/2;M++)for(var I=G.euler(M,C),T=0;T<f/C;T++){var ae=C*T+M,ie=C*T+M+C/2,ne={real:l.real[ae],imag:l.imag[ae]},ti={real:l.real[ie],imag:l.imag[ie]},H=G.multiply(I,ti),J=G.subtract(ne,H);l.real[ie]=J.real,l.imag[ie]=J.imag;var Z=G.add(H,ne);l.real[ae]=Z.real,l.imag[ae]=Z.imag}return l},Ir=Lr,Vr=(function(){function c(l,f){var h=this;if(this._m=f,!l.audioContext)throw this._m.errors.noAC;if(l.bufferSize&&!s(l.bufferSize))throw this._m._errors.notPow2;if(!l.source)throw this._m._errors.noSource;this._m.audioContext=l.audioContext,this._m.bufferSize=l.bufferSize||this._m.bufferSize||256,this._m.hopSize=l.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=l.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=l.callback,this._m.windowingFunction=l.windowingFunction||"hanning",this._m.featureExtractors=k,this._m.EXTRACTION_STARTED=l.startImmediately||!1,this._m.channel=typeof l.channel=="number"?l.channel:0,this._m.inputs=l.inputs||1,this._m.outputs=l.outputs||1,this._m.numberOfMFCCCoefficients=l.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=l.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=l.featureExtractors||[],this._m.barkScale=a(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=d(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(l.source),this._m.spn.onaudioprocess=function(v){var S;h._m.inputData!==null&&(h._m.previousInputData=h._m.inputData),h._m.inputData=v.inputBuffer.getChannelData(h._m.channel),h._m.previousInputData?((S=new Float32Array(h._m.previousInputData.length+h._m.inputData.length-h._m.hopSize)).set(h._m.previousInputData.slice(h._m.hopSize)),S.set(h._m.inputData,h._m.previousInputData.length-h._m.hopSize)):S=h._m.inputData,(function(E,P,F){if(E.length<P)throw new Error("Buffer is too short for frame length");if(F<1)throw new Error("Hop length cannot be less that 1");if(P<1)throw new Error("Frame length cannot be less that 1");var C=1+Math.floor((E.length-P)/F);return new Array(C).fill(0).map((function(M,I){return E.slice(I*F,I*F+P)}))})(S,h._m.bufferSize,h._m.hopSize).forEach((function(E){h._m.frame=E;var P=h._m.extract(h._m._featuresToExtract,h._m.frame,h._m.previousFrame);typeof h._m.callback=="function"&&h._m.EXTRACTION_STARTED&&h._m.callback(P),h._m.previousFrame=h._m.frame}))}}return c.prototype.start=function(l){this._m._featuresToExtract=l||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},c.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},c.prototype.setSource=function(l){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=l,this._m.source.connect(this._m.spn)},c.prototype.setChannel=function(l){l<=this._m.inputs?this._m.channel=l:console.error("Channel "+l+" does not exist. Make sure you've provided a value for 'inputs' that is greater than "+l+" when instantiating the MeydaAnalyzer")},c.prototype.get=function(l){return this._m.inputData?this._m.extract(l||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},c})(),ei={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:k,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:o,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(c){return new Vr(c,Object.assign({},ei))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(c,l,f){var h=this;if(!l)throw this._errors.invalidInput;if(typeof l!="object")throw this._errors.invalidInput;if(!c)throw this._errors.featureUndef;if(!s(l.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=a(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=d(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=m(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in l&&l.buffer===void 0?this.signal=u(l):this.signal=l;var v=Ui(l,this.windowingFunction,this.bufferSize);if(this.signal=v.windowedSignal,this.complexSpectrum=v.complexSpectrum,this.ampSpectrum=v.ampSpectrum,f){var S=Ui(f,this.windowingFunction,this.bufferSize);this.previousSignal=S.windowedSignal,this.previousComplexSpectrum=S.complexSpectrum,this.previousAmpSpectrum=S.ampSpectrum}var E=function(P){return h.featureExtractors[P]({ampSpectrum:h.ampSpectrum,chromaFilterBank:h.chromaFilterBank,complexSpectrum:h.complexSpectrum,signal:h.signal,bufferSize:h.bufferSize,sampleRate:h.sampleRate,barkScale:h.barkScale,melFilterBank:h.melFilterBank,previousSignal:h.previousSignal,previousAmpSpectrum:h.previousAmpSpectrum,previousComplexSpectrum:h.previousComplexSpectrum,numberOfMFCCCoefficients:h.numberOfMFCCCoefficients,numberOfBarkBands:h.numberOfBarkBands})};if(typeof c=="object")return c.reduce((function(P,F){var C;return Object.assign({},P,((C={})[F]=E(F),C))}),{});if(typeof c=="string")return E(c);throw this._errors.invalidFeatureFmt}},Ui=function(c,l,f){var h={};c.buffer===void 0?h.signal=u(c):h.signal=c,h.windowedSignal=o(h.signal,l),h.complexSpectrum=Ir(h.windowedSignal),h.ampSpectrum=new Float32Array(f/2);for(var v=0;v<f/2;v++)h.ampSpectrum[v]=Math.sqrt(Math.pow(h.complexSpectrum.real[v],2)+Math.pow(h.complexSpectrum.imag[v],2));return h};return typeof window<"u"&&(window.Meyda=ei),ei}))})(Nt)),Nt.exports}var fa=da();const pa=ha(fa);ca();const Me={movingAverageSamples:30,fields:{rms:{title:"RMS",group:"time",id:"rms",showAs:"decimal"},zcr:{title:"Zero crossing",showAs:"integer",group:"time",id:"zcr"},energy:{title:"Energy",showAs:"integer",group:"time",id:"energy"},powerSpectrum:{title:"Power Spectrum",group:"spectral",id:"powerSpectrum",showAs:"float32"},spectralCentroid:{title:"Centroid",group:"spectral",showAs:"integer",id:"spectralCentroid"},spectralFlatness:{title:"Flatness",group:"spectral",showAs:"decimal",id:"spectralFlatness"},spectralSlope:{title:"Slope",group:"spectral",showAs:"decimal",id:"spectralSlope"},spectralRolloff:{title:"Rolloff",group:"spectral",showAs:"integer",id:"spectralRolloff"},spectralSpread:{title:"Spread",group:"spectral",showAs:"integer",id:"spectralSpread"},spectralSkewness:{title:"Skewness",group:"spectral",showAs:"decimal",id:"spectralSkewness"},spectralKurtosis:{title:"Kurtosis",group:"spectral",showAs:"integer",id:"spectralKurtosis"},chroma:{title:"Chroma",group:"spectral",showAs:"float32",id:"chroma"},loudness:{title:"Loudness",group:"perceptual",showAs:"float32",id:"loudness"},perceptualSharpness:{title:"Perceptual Sharpness",group:"perceptual",showAs:"decimal",id:"perceptualSharpness"},mfcc:{title:"Mel-Frequency Cepstral Coefficients",group:"perceptual",showAs:"float32",id:"mfcc"}},fgColour:we.resolveCss("--fg")},jt=new Map,ma=i=>{const{fields:e}=Me;for(const[t,n]of Object.entries(i)){const r=e[t];if(!r)continue;let s=jt.get(t);typeof n=="object"&&r.id==="loudness"?bn(n.specific,r,s):bn(n,r,s)}};function ga(i){return{id:i,type:"number",averager:Xr(Me.movingAverageSamples),range:{min:Number.MAX_SAFE_INTEGER,max:Number.MIN_SAFE_INTEGER},lastValue:0,lastAverage:0}}function va(i){return{id:i,type:"array"}}function ya(i){let e=i.showAs;return e||(i.group==="spectral"&&(e="float32"),e="decimal"),e==="float32"?va(i.id):ga(i.id)}function wa(i,e){if(i.type==="number"){if(Number.isNaN(e)||!Number.isFinite(e))return i;const t=i.averager(e);i.lastAverage=t,i.lastValue=e,i.range={max:Math.max(i.range.max,e),min:Math.min(i.range.min,e)}}return i}function bn(i,e,t){t||(t=ya(e));const{sectionEl:n,plotEl:r,statsEl:s}=Sa(e);if(!n||n.classList.contains("frozen"))return;typeof i=="number"&&wa(t,i);const o=e.showAs??"float32";if(r)if(o==="float32"){let a;i instanceof Float32Array?a=Array.from(i):a=i,r.clearData(),r.setRawValues(a,"",!0)}else typeof i=="number"&&!Number.isNaN(i)&&Number.isFinite(i)&&r.appendRawValues(i,"",!0);else console.warn(`No plot element for: ${e.id}`);s&&t&&(s.innerHTML=_a(t,e)),jt.set(e.id,t)}const ba=i=>i.toPrecision(2),xa=i=>Math.floor(i).toString();function Sa(i){const e=document.querySelector(`#section-${i.id}`);if(!e)return console.warn(`Section element not found: #section-${i.id}`),{sectionEl:void 0,plotEl:void 0,statsEl:void 0};const t=e.querySelector("ixfx-plot-element"),n=e.querySelector(".stats");return{sectionEl:e,plotEl:t,statsEl:n}}function _a(i,e){const t=e.showAs==="integer"?xa:ba;if(i.type==="number"){const n=i.range;return`${t(n.min)} - ${t(n.max)}<br />Avg: ${t(i.lastAverage)} <br />Value: ${t(i.lastValue)}`}return""}async function zr(){await navigator.mediaDevices.enumerateDevices();const i=await navigator.mediaDevices.getUserMedia({audio:!0}),e=new AudioContext,t=e.createMediaStreamSource(i);pa.createMeydaAnalyzer({audioContext:e,source:t,bufferSize:512,featureExtractors:[...Object.keys(Me.fields)],inputs:2,callback:ma}).start(),document.querySelector("#btnStart")?.remove()}function ui(i,e){const t=document.querySelector(`${e} .container`);for(const n of i){const r=document.createElement("section"),s=document.createElement("h1");s.innerText=n.id;const o=document.createElement("h2");o.innerText=n.title;const a=document.createElement("ixfx-plot-element");a.setDrawDebounce(40),a.primaryAxis.bounds="auto-persistent",a.seriesColourGenerate=p=>Me.fgColour;const u=n.showAs??"float32";if(u==="float32"?a.renderStyle="bar":(a.setSeriesFormatting("",{dot:{radius:3,gapWidth:0}}),a.seriesDefault={limit:100}),a.id=`plot-${n.id}`,r.id=`section-${n.id}`,a.hideLegend=!0,r.append(s),r.append(o),r.append(a),u!=="float32"){const p=document.createElement("div");p.classList.add("stats"),p.innerHTML="Min: ? Max: ? Average: ?",r.append(p)}r.addEventListener("click",()=>{r.classList.toggle("frozen")}),t?.append(r)}}function $a(){ui(Ca(),"#spectral"),ui(Ea(),"#time-domain"),ui(Aa(),"#perceptual"),document.querySelector("#btnStart")?.addEventListener("click",i=>{zr(),i.target.remove()}),document.querySelector("#btnReset")?.addEventListener("click",i=>{jt.clear();for(const e of document.querySelectorAll("ixfx-plot-element"))e.clear()}),document.querySelector("#btnFreeze")?.addEventListener("click",i=>{jt.clear();for(const e of document.querySelectorAll("section"))e.classList.toggle("frozen")}),document.querySelector("#plotSpeed")?.addEventListener("change",i=>{const e=Math.floor(i.target.valueAsNumber);for(const t of document.querySelectorAll("ixfx-plot-element"))t.setDrawDebounce(e);console.log(`Speed: ${e}`)})}function*Aa(){for(const[i,e]of Object.entries(Me.fields))e.group==="perceptual"&&(yield e)}function*Ea(){for(const[i,e]of Object.entries(Me.fields))e.group==="time"&&(yield e)}function*Ca(){for(const[i,e]of Object.entries(Me.fields))e.group==="spectral"&&(yield e)}$a();zr();
