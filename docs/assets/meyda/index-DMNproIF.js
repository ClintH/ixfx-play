import{i as e,t as n}from"../chunk-aKtaBQYM.js";import"../modulepreload-polyfill-Dezn_h7o.js";import{l as r}from"../src-Cebc3sfq-CTYZi27Y.js";import{bn as i}from"../src-DyTd46TV-DheFLCEO.js";import{n as a}from"../src-CHw3eZpa-CAV7IyYl.js";import"../visual-Ib0CFdd_.js";import"../flow-W4ncjMPh.js";import"../numbers-CKdsOSNi.js";var o=`incr-search-highlight`;function s(e,n={}){if(typeof CSS>`u`||!CSS.highlights)return;let r=n.key??o;CSS.highlights.delete(r);let i=[];for(let{element:n,text:r,positions:a}of e){if(!a.size)continue;let e=u(n,r);if(e)for(let n of a){let r=new Range;r.setStart(e,n),r.setEnd(e,n+1),i.push(r)}}i.length>0&&CSS.highlights.set(r,new Highlight(...i))}function c(e={}){typeof CSS>`u`||!CSS.highlights||CSS.highlights.delete(e.key??o)}function l(e,n,r,i,a){let o=[],s=e.querySelectorAll(n);for(let e of s){let n=i(e);if(n===void 0)continue;let s=r.get(n);!s||s.size===0||o.push({element:e,text:a(e),positions:s})}return o}function u(e,n){for(let r of e.childNodes)if(r.nodeType===Node.TEXT_NODE&&(n===void 0||r.textContent===n))return r;return null}var d=globalThis,f=d.ShadowRoot&&(d.ShadyCSS===void 0||d.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,p=Symbol(),m=new WeakMap,h=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(f&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=m.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&m.set(n,e))}return e}toString(){return this.cssText}},g=e=>new h(typeof e==`string`?e:e+``,void 0,p),_=(e,...n)=>new h(e.length===1?e[0]:n.reduce((n,r,i)=>n+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(r)+e[i+1],e[0]),e,p),v=(e,n)=>{if(f)e.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of n){let n=document.createElement(`style`),i=d.litNonce;i!==void 0&&n.setAttribute(`nonce`,i),n.textContent=r.cssText,e.appendChild(n)}},y=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let n=``;for(let r of e.cssRules)n+=r.cssText;return g(n)})(e):e,{is:b,defineProperty:x,getOwnPropertyDescriptor:S,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,re=globalThis,ie=re.trustedTypes,ae=ie?ie.emptyScript:``,oe=re.reactiveElementPolyfillSupport,se=(e,n)=>e,ce={toAttribute(e,n){switch(n){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,n){let r=e;switch(n){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},le=(e,n)=>!b(e,n),ue={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol(`metadata`),re.litPropertyMetadata??=new WeakMap;var de=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=ue){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&x(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){let{get:i,set:a}=S(this.prototype,e)??{get(){return this[n]},set(e){this[n]=e}};return{get:i,set(n){let o=i?.call(this);a?.call(this,n),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ue}static _$Ei(){if(this.hasOwnProperty(se(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se(`properties`))){let e=this.properties,n=[...ee(e),...te(e)];for(let r of n)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[e,r]of n)this.elementProperties.set(e,r)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let r=this._$Eu(e,n);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)n.unshift(y(e))}else e!==void 0&&n.push(y(e));return n}static _$Eu(e,n){let r=n.attribute;return!1===r?void 0:typeof r==`string`?r:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return v(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&!0===r.reflect){let a=(r.converter?.toAttribute===void 0?ce:r.converter).toAttribute(n,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,n){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let e=r.getPropertyOptions(i),a=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ce:e.converter;this._$Em=i;let o=a.fromAttribute(n,e.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,n,r,i=!1,a){if(e!==void 0){let o=this.constructor;if(!1===i&&(a=this[e]),r??=o.getPropertyOptions(e),!((r.hasChanged??le)(a,n)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,n,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:i,wrapped:a},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??n??this[e]),!0!==a||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,n]of this._$Ep)this[e]=n;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[n,r]of e){let{wrapped:e}=r,i=this[n];!0!==e||this._$AL.has(n)||i===void 0||this.C(n,void 0,r,i)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(n)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:`open`},de[se(`elementProperties`)]=new Map,de[se(`finalized`)]=new Map,oe?.({ReactiveElement:de}),(re.reactiveElementVersions??=[]).push(`2.1.2`);var fe=globalThis,pe=e=>e,me=fe.trustedTypes,he=me?me.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ge=`$lit$`,_e=`lit$${Math.random().toFixed(9).slice(2)}$`,ve=`?`+_e,ye=`<${ve}>`,be=document,xe=()=>be.createComment(``),Se=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ce=Array.isArray,we=e=>Ce(e)||typeof e?.[Symbol.iterator]==`function`,Te=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,Oe=/>/g,ke=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ae=/'/g,je=/"/g,Me=/^(?:script|style|textarea|title)$/i,Ne=e=>(n,...r)=>({_$litType$:e,strings:n,values:r}),C=Ne(1),w=Ne(2),Pe=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Fe=new WeakMap,Ie=be.createTreeWalker(be,129);function Le(e,n){if(!Ce(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return he===void 0?n:he.createHTML(n)}var Re=(e,n)=>{let r=e.length-1,i=[],a,o=n===2?`<svg>`:n===3?`<math>`:``,s=Ee;for(let n=0;n<r;n++){let r=e[n],c,l,u=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),l!==null);)d=s.lastIndex,s===Ee?l[1]===`!--`?s=De:l[1]===void 0?l[2]===void 0?l[3]!==void 0&&(s=ke):(Me.test(l[2])&&(a=RegExp(`</`+l[2],`g`)),s=ke):s=Oe:s===ke?l[0]===`>`?(s=a??Ee,u=-1):l[1]===void 0?u=-2:(u=s.lastIndex-l[2].length,c=l[1],s=l[3]===void 0?ke:l[3]===`"`?je:Ae):s===je||s===Ae?s=ke:s===De||s===Oe?s=Ee:(s=ke,a=void 0);let f=s===ke&&e[n+1].startsWith(`/>`)?` `:``;o+=s===Ee?r+ye:u>=0?(i.push(c),r.slice(0,u)+ge+r.slice(u)+_e+f):r+_e+(u===-2?n:f)}return[Le(e,o+(e[r]||`<?>`)+(n===2?`</svg>`:n===3?`</math>`:``)),i]},ze=class e{constructor({strings:n,_$litType$:r},i){let a;this.parts=[];let o=0,s=0,c=n.length-1,l=this.parts,[u,d]=Re(n,r);if(this.el=e.createElement(u,i),Ie.currentNode=this.el.content,r===2||r===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(a=Ie.nextNode())!==null&&l.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(let e of a.getAttributeNames())if(e.endsWith(ge)){let n=d[s++],r=a.getAttribute(e).split(_e),i=/([.?@])?(.*)/.exec(n);l.push({type:1,index:o,name:i[2],strings:r,ctor:i[1]===`.`?We:i[1]===`?`?Ge:i[1]===`@`?Ke:Ue}),a.removeAttribute(e)}else e.startsWith(_e)&&(l.push({type:6,index:o}),a.removeAttribute(e));if(Me.test(a.tagName)){let e=a.textContent.split(_e),n=e.length-1;if(n>0){a.textContent=me?me.emptyScript:``;for(let r=0;r<n;r++)a.append(e[r],xe()),Ie.nextNode(),l.push({type:2,index:++o});a.append(e[n],xe())}}}else if(a.nodeType===8)if(a.data===ve)l.push({type:2,index:o});else{let e=-1;for(;(e=a.data.indexOf(_e,e+1))!==-1;)l.push({type:7,index:o}),e+=_e.length-1}o++}}static createElement(e,n){let r=be.createElement(`template`);return r.innerHTML=e,r}};function Be(e,n,r=e,i){if(n===Pe)return n;let a=i===void 0?r._$Cl:r._$Co?.[i],o=Se(n)?void 0:n._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,r,i)),i===void 0?r._$Cl=a:(r._$Co??=[])[i]=a),a!==void 0&&(n=Be(e,a._$AS(e,n.values),a,i)),n}var Ve=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,i=(e?.creationScope??be).importNode(n,!0);Ie.currentNode=i;let a=Ie.nextNode(),o=0,s=0,c=r[0];for(;c!==void 0;){if(o===c.index){let n;c.type===2?n=new He(a,a.nextSibling,this,e):c.type===1?n=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(n=new qe(a,this,e)),this._$AV.push(n),c=r[++s]}o!==c?.index&&(a=Ie.nextNode(),o++)}return Ie.currentNode=be,i}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[n]):(r._$AI(e,r,n),n+=r.strings.length-2)),n++}},He=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Be(this,e,n),Se(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Pe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?we(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&Se(this._$AH)?this._$AA.nextSibling.data=e:this.T(be.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,i=typeof r==`number`?this._$AC(e):(r.el===void 0&&(r.el=ze.createElement(Le(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{let e=new Ve(i,this),r=e.u(this.options);e.p(n),this.T(r),this._$AH=e}}_$AC(e){let n=Fe.get(e.strings);return n===void 0&&Fe.set(e.strings,n=new ze(e)),n}k(n){Ce(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,a=0;for(let o of n)a===r.length?r.push(i=new e(this.O(xe()),this.O(xe()),this,this.options)):i=r[a],i._$AI(o),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let n=pe(e).nextSibling;pe(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ue=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,a){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=a,r.length>2||r[0]!==``||r[1]!==``?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=T}_$AI(e,n=this,r,i){let a=this.strings,o=!1;if(a===void 0)e=Be(this,e,n,0),o=!Se(e)||e!==this._$AH&&e!==Pe,o&&(this._$AH=e);else{let i=e,s,c;for(e=a[0],s=0;s<a.length-1;s++)c=Be(this,i[r+s],n,s),c===Pe&&(c=this._$AH[s]),o||=!Se(c)||c!==this._$AH[s],c===T?e=T:e!==T&&(e+=(c??``)+a[s+1]),this._$AH[s]=c}o&&!i&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},We=class extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},Ge=class extends Ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Ke=class extends Ue{constructor(e,n,r,i,a){super(e,n,r,i,a),this.type=5}_$AI(e,n=this){if((e=Be(this,e,n,0)??T)===Pe)return;let r=this._$AH,i=e===T&&r!==T||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==T&&(r===T||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qe=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Be(this,e)}},Je={M:ge,P:_e,A:ve,C:1,L:Re,R:Ve,D:we,V:Be,I:He,H:Ue,N:Ge,U:Ke,B:We,F:qe},Ye=fe.litHtmlPolyfillSupport;Ye?.(ze,He),(fe.litHtmlVersions??=[]).push(`3.3.3`);var Xe=(e,n,r)=>{let i=r?.renderBefore??n,a=i._$litPart$;if(a===void 0){let e=r?.renderBefore??null;i._$litPart$=a=new He(n.insertBefore(xe(),e),e,void 0,r??{})}return a._$AI(e),a},Ze=globalThis,E=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xe(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pe}};E._$litElement$=!0,E.finalized=!0,Ze.litElementHydrateSupport?.({LitElement:E});var Qe=Ze.litElementPolyfillSupport;Qe?.({LitElement:E}),(Ze.litElementVersions??=[]).push(`4.2.2`);var $e=class e{static{this._lastMouseClientX=NaN}static{this._lastMouseClientY=NaN}static{this._mouseMovedSinceKeyboard=!0}static{this._globalListenerAttached=!1}constructor(e,n){this._tickledId=void 0,this.host=e,this.config=n,this._inputMode=n.initialInputMode??`mouse`,e.addController(this)}hostConnected(){e._globalListenerAttached||=(document.addEventListener(`pointermove`,n=>{e.handleGlobalPointerMove(n.clientX,n.clientY)},{passive:!0}),!0)}hostDisconnected(){}get inputMode(){return this._inputMode}get tickledId(){return this._tickledId}isTickled(e){return this._tickledId===e}static handleGlobalPointerMove(n,r){Number.isNaN(e._lastMouseClientX)||(n!==e._lastMouseClientX||r!==e._lastMouseClientY)&&(e._mouseMovedSinceKeyboard=!0),e._lastMouseClientX=n,e._lastMouseClientY=r}static get hasMouseMovedSinceKeyboard(){return e._mouseMovedSinceKeyboard}handlePointerEnter(n){if(!e._mouseMovedSinceKeyboard)return;let r=this.config.getItems().find(e=>e.id===n);if(r&&r.enabled===!1)return;let i=this._inputMode!==`mouse`;this._inputMode=`mouse`;let a=this._tickledId;this._tickledId=n,this.host.requestUpdate(),a!==n&&this.config.onTickle&&this.config.onTickle(n),(a!==n||i)&&this.config.onStateChange&&this.config.onStateChange()}handlePointerLeave(n){e._mouseMovedSinceKeyboard&&this.clearTickled()}handleKeyboardNavigation(e){let n=this._inputMode!==`keyboard`;this._inputMode=`keyboard`;let r=this.config.getItems().filter(e=>e.enabled!==!1);if(r.length===0)return;let i;if(e===`first`)i=r[0].id;else if(e===`last`)i=r.at(-1)?.id;else if(e===`next`||e===`previous`){let n=r.findIndex(e=>e.id===this._tickledId);if(n===-1)i=e===`next`?r[0].id:r.at(-1)?.id;else{let a=n+(e===`next`?1:-1);a>=0&&a<r.length&&(i=r[a].id)}}else{let n=r.find(n=>n.id===e);n&&(i=n.id)}if(i!==void 0){let e=this._tickledId;this._tickledId=i,this.host.requestUpdate(),e!==i&&this.config.onTickle&&this.config.onTickle(i),(e!==i||n)&&this.config.onStateChange&&this.config.onStateChange()}}setTickled(e){let n=this._tickledId;this._tickledId=e,this.host.requestUpdate(),n!==e&&this.config.onTickle&&this.config.onTickle(e),n!==e&&this.config.onStateChange&&this.config.onStateChange()}clearTickled(){this._tickledId!==void 0&&(this._tickledId=void 0,this.host.requestUpdate(),this.config.onTickle&&this.config.onTickle(void 0),this.config.onStateChange&&this.config.onStateChange())}setInputMode(n){this._inputMode!==n&&(this._inputMode=n,this.host.requestUpdate(),n===`keyboard`&&(e._mouseMovedSinceKeyboard=!1),this.config.onStateChange&&this.config.onStateChange())}},et=_`
  /**
   * No suppression needed - tickled styling is always active.
   */
`,tt=_`
  .item {
    display: inline-flex;
    align-items: center;
    gap: var(--item-icon-spacing);
    padding: var(--item-padding);
    background: var(--item-bg);
    border: var(--item-border);
    border-radius: var(--item-border-radius);
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    transition: background var(--transition, 0.1s ease-out), border-color var(--transition, 0.1s ease-out);
  }

  .item.tickled {
    background: var(--item-bg-tickled);
    border-color: var(--item-border-tickled);
    color: var(--item-text-tickled);
  }

  .item.selected {
    background: var(--item-bg-selected);
    border-color: var(--item-border-selected);
    color: var(--item-text-selected);
  }

  .item.selected.tickled {
    background: var(--item-bg-selected-tickled);
    outline: 2px dashed var(--surface-3);
    outline-offset: -2px;
  }
`,D=_`
  @property --surface-0 {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(5% 0.02 240);
  }
  @property --surface-1 {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(8% 0.02 240);
  }
  @property --surface-2 {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(12% 0.02 240);
  }
  @property --surface-2-text {
    syntax: '<color>';
    inherits: true;
    initial-value: #fff;
  }
  @property --surface-3 {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(15% 0.02 240);
  }
  @property --surface-3-text {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(75% 0.02 240);
  }
  @property --surface-4 {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(22% 0.02 240);
  }
  @property --surface-4-text {
    syntax: '<color>';
    inherits: true;
    initial-value: #fff;
  }
  @property --surface-5 {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(28% 0.02 240);
  }
  @property --surface-5-text {
    syntax: '<color>';
    inherits: true;
    initial-value: #fff;
  }
  @property --surface-6 {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(35% 0.02 240);
  }
  @property --surface-6-text {
    syntax: '<color>';
    inherits: true;
    initial-value: #fff;
  }
  @property --surface-muted-text {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(55% 0.02 240);
  }
  @property --content {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(10% 0.01 240);
  }
  @property --content-text {
    syntax: '<color>';
    inherits: true;
    initial-value: #fff;
  }
  @property --accent {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(60% 0.15 140);
  }
  @property --accent-text {
    syntax: '<color>';
    inherits: true;
    initial-value: #fff;
  }
  @property --error {
    syntax: '<color>';
    inherits: true;
    initial-value: oklch(60% 0.15 20);
  }
  @property --error-text {
    syntax: '<color>';
    inherits: true;
    initial-value: #fff;
  }
  @property --border {
    syntax: '*';
    inherits: true;
    initial-value: 1px solid oklch(25% 0.02 240);
  }
  @property --border-subtle {
    syntax: '*';
    inherits: true;
    initial-value: 1px solid oklch(18% 0.02 240);
  }
  @property --disabled-opacity {
    syntax: '<number>';
    inherits: true;
    initial-value: 0.5;
  }
  @property --transition {
    syntax: '<time>';
    inherits: true;
    initial-value: 0.15s;
  }
  @property --prominence-idle-opacity {
    syntax: '<number>';
    inherits: true;
    initial-value: 0.6;
  }
  @property --prominence-idle-saturate {
    syntax: '<number>';
    inherits: true;
    initial-value: 0.4;
  }
  @property --prominence-tickled-opacity {
    syntax: '<number>';
    inherits: true;
    initial-value: 0.85;
  }
  @property --prominence-tickled-saturate {
    syntax: '<number>';
    inherits: true;
    initial-value: 0.8;
  }
  @property --prominence-disabled-opacity {
    syntax: '<number>';
    inherits: true;
    initial-value: 0.3;
  }
  @property --prominence-disabled-saturate {
    syntax: '<number>';
    inherits: true;
    initial-value: 0.1;
  }
`;function nt(){if(!(typeof customElements>`u`))return customElements}function rt(e,n){let r=nt();r&&r.get(e)===void 0&&r.define(e,n)}function O(e){return n=>{rt(e,n)}}function k(e,n,r,i){var a=arguments.length,o=a<3?n:i===null?i=Object.getOwnPropertyDescriptor(n,r):i,s;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)o=Reflect.decorate(e,n,r,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(a<3?s(o):a>3?s(n,r,o):s(n,r))||o);return a>3&&o&&Object.defineProperty(n,r,o),o}var it=new Map,at=new EventTarget;function ot(e,n){it.set(e,n),at.dispatchEvent(new CustomEvent(`ixfx-icon-change`,{detail:{name:e}}))}function st(e){return it.get(e)}var ct=e=>(n,r)=>{r===void 0?customElements.define(e,n):r.addInitializer(()=>{customElements.define(e,n)})},lt={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:le},ut=(e=lt,n,r)=>{let{kind:i,metadata:a}=r,o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),i===`setter`&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),i===`accessor`){let{name:i}=r;return{set(r){let a=n.get.call(this);n.set.call(this,r),this.requestUpdate(i,a,e,!0,r)},init(n){return n!==void 0&&this.C(i,void 0,e,n),n}}}if(i===`setter`){let{name:i}=r;return function(r){let a=this[i];n.call(this,r),this.requestUpdate(i,a,e,!0,r)}}throw Error(`Unsupported decorator location: `+i)};function A(e){return(n,r)=>typeof r==`object`?ut(e,n,r):((e,n,r)=>{let i=n.hasOwnProperty(r);return n.constructor.createProperty(r,e),i?Object.getOwnPropertyDescriptor(n,r):void 0})(e,n,r)}function j(e){return A({...e,state:!0,attribute:!1})}function dt(e){return(n,r)=>{let i=typeof n==`function`?n:n[r];Object.assign(i,e)}}var ft=(e,n,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof n!=`object`&&Object.defineProperty(e,n,r),r);function M(e,n){return(r,i,a)=>{let o=n=>n.renderRoot?.querySelector(e)??null;if(n){let{get:e,set:n}=typeof i==`object`?r:a??(()=>{let e=Symbol();return{get(){return this[e]},set(n){this[e]=n}}})();return ft(r,i,{get(){let r=e.call(this);return r===void 0&&(r=o(this),(r!==null||this.hasUpdated)&&n.call(this,r)),r}})}return ft(r,i,{get(){return o(this)}})}}function pt(e){return(n,r)=>{let{slot:i,selector:a}=e??{},o=`slot`+(i?`[name=${i}]`:`:not([name])`);return ft(n,r,{get(){let n=(this.renderRoot?.querySelector(o))?.assignedElements(e)??[];return a===void 0?n:n.filter(e=>e.matches(a))}})}}var mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ht=e=>(...n)=>({_$litDirective$:e,values:n}),gt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}},_t=class extends gt{constructor(e){if(super(e),this.it=T,e.type!==mt.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===Pe)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};_t.directiveName=`unsafeHTML`,_t.resultType=1;var vt=ht(_t),yt=class extends E{constructor(...e){super(...e),this.name=``,this.label=``,this.prominence=!1,this.rotate=``,this.#e=e=>{e.detail.name===this.name&&this.requestUpdate()}}#e;connectedCallback(){super.connectedCallback(),at.addEventListener(`ixfx-icon-change`,this.#e)}disconnectedCallback(){super.disconnectedCallback(),at.removeEventListener(`ixfx-icon-change`,this.#e)}render(){let e=st(this.name);if(!e)return T;let n=this.label.length>0;return C`
      <span
        class="icon-wrapper"
        aria-hidden=${n?T:`true`}
        aria-label=${n?this.label:T}
      >${vt(e)}</span>
    `}updated(e){super.updated(e),e.has(`rotate`)&&(this.rotate?.length>0?this.style.setProperty(`--rotate`,this.rotate):this.style.removeProperty(`--rotate`))}static{this.styles=[D,_`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1em;
      height: 1em;
      opacity: var(--opacity, 1);
    }

    :host([prominence]) {
      opacity: var(--prominence-idle-opacity, 1);
    }

    :host([prominence]:hover) {
      opacity: var(--prominence-tickled-opacity, 1);
    }

    :host([prominence][disabled]) {
      opacity: var(--prominence-disabled-opacity, 0.5);
    }

    .icon-wrapper {
      display: contents;
    }

    :host svg {
      width: 100%;
      height: 100%;
      transition: transform var(--transition, 0.15s ease-out);
    }

    :host([rotate]) svg {
      transform: rotate(var(--rotate));
    }
  `]}};k([A()],yt.prototype,`name`,void 0),k([A({type:Number})],yt.prototype,`size`,void 0),k([A()],yt.prototype,`label`,void 0),k([A({type:Boolean,attribute:`prominence`})],yt.prototype,`prominence`,void 0),k([A({type:String,attribute:`rotate`,reflect:!0})],yt.prototype,`rotate`,void 0),yt=k([O(`ixfx-icon`)],yt);var bt=`ac-text-highlight`;function xt(e){let n=new Map;return{get:e=>n.get(e),set:(r,i)=>{n.has(r)&&n.delete(r),n.set(r,i),n.size>e&&n.delete(n.keys().next().value)},has:e=>n.has(e),clear:()=>n.clear()}}var St=class extends E{#e;#t;#n;constructor(){super(),this.placeholder=``,this.cacheSize=20,this.debounceMs=150,this.value=``,this.tabSuffix=``,this._query=``,this._results=[],this._isOpen=!1,this._isLoading=!1,this.tickled=new $e(this,{getItems:()=>this._results.map((e,n)=>({id:n,enabled:!0}))}),this.#e=xt(20),this.#i=()=>{this._isOpen=!0,this._query.trim()&&this.#l(this._query)},this.#a=()=>{this.#p(),this._isOpen=!1,this.tickled.clearTickled()},this.#o=e=>{let n=e.target;if(this._query=n.value,this.#t!==void 0&&clearTimeout(this.#t),!this._query.trim()){this._results=[],this.tickled.clearTickled(),this._isLoading=!1,this._isOpen=!1;return}this._isOpen=!0,this.#t=setTimeout(()=>{this.#l(this._query)},this.debounceMs)},this.#s=e=>{switch(e.key){case`ArrowDown`:if(!this._isOpen||(e.preventDefault(),this._results.length===0))return;this.tickled.handleKeyboardNavigation(`next`),this.#m();break;case`ArrowUp`:if(!this._isOpen||(e.preventDefault(),this._results.length===0))return;this.tickled.handleKeyboardNavigation(`previous`),this.#m();break;case`Enter`:{let n=this.tickled.tickledId??-1;this._isOpen&&n>=0&&this._results[n]?(e.preventDefault(),this.#u(this._results[n])):this._query.trim()&&(e.preventDefault(),this.#d(this._query));break}case`Tab`:{let n=this.tickled.tickledId??-1;if(this._isOpen&&n>=0&&this._results[n]){e.preventDefault();let r=this._results[n];this._query=r.label+(r.isLeaf?``:this.tabSuffix),this.tickled.clearTickled(),this.#l(this._query)}break}case`Escape`:if(!this._isOpen)return;e.preventDefault(),this.#f();break}},this.#c=(e,n)=>{e.preventDefault(),this.#u(n)},this.#e=xt(this.cacheSize)}disconnectedCallback(){super.disconnectedCallback(),this.#p(),c({key:bt})}updated(e){if(e.has(`completionProvider`)&&this.#e.clear(),e.has(`cacheSize`)&&(this.#e=xt(this.cacheSize)),e.has(`value`)){let e=this.shadowRoot?.querySelector(`input`);(!e||document.activeElement!==e)&&(this._query=this.value)}this.#r()}#r(){if(!this._isOpen||!this.shadowRoot){c({key:bt});return}let e=this.shadowRoot.querySelectorAll(`.item-label`),n=[];e.forEach((e,r)=>{let i=this._results[r]?.positions;i?.size&&n.push({element:e,text:this._results[r].label,positions:i})}),s(n,{key:bt})}focus(e,n,r){let i=this.shadowRoot?.querySelector(`input`);if(!i)return;i.focus(e);let a=n??i.value.length,o=r??i.value.length;i.setSelectionRange(a,o),i.scrollLeft=i.scrollWidth}focusWithValue(e,n,r){this._query=e,this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`input`);if(!e)return;e.focus();let i=n??e.value.length,a=r??e.value.length;e.setSelectionRange(i,a)})}selectRange(e,n){let r=this.shadowRoot?.querySelector(`input`);if(!r)return;let i=n??r.value.length;r.setSelectionRange(e,i)}#i;#a;#o;#s;#c;#l(e){if(!this.completionProvider)return;let n=this.#e.get(e);if(n!==void 0){this._results=n,this.tickled.clearTickled(),this._isLoading=!1;return}this.#n?.abort(),this.#n=new AbortController;let{signal:r}=this.#n;this._isLoading=!0,Promise.resolve(this.completionProvider(e,r)).then(n=>{r.aborted||(this.#e.set(e,n),this._results=n,this.tickled.clearTickled(),this._isLoading=!1)}).catch(e=>{r.aborted||(console.error(`[ixfx-ac-text] completionProvider error:`,e),this._results=[],this._isLoading=!1)})}#u(e){this.dispatchEvent(new CustomEvent(`ac-select`,{detail:{item:e,query:this._query},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e.label,key:e.key??e.label,data:e.data,source:`autocomplete`},bubbles:!0,composed:!0})),this._query=e.label,this._isOpen=!1,this.tickled.clearTickled()}#d(e){this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e,key:e,source:`text`},bubbles:!0,composed:!0})),this._isOpen=!1,this.tickled.clearTickled()}#f(){this._isOpen=!1,this.tickled.clearTickled(),c({key:bt})}#p(){this.#t!==void 0&&(clearTimeout(this.#t),this.#t=void 0),this.#n?.abort(),this.#n=void 0,this._isLoading=!1}#m(){this.updateComplete.then(()=>{(this.shadowRoot?.querySelector(`.item.tickled`))?.scrollIntoView({block:`nearest`})})}#h(e,n){let r=this.tickled.isTickled(n);return C`
      <div
        class="item ${r?`tickled`:``}"
        role="option"
        id="ac-item-${n}"
        aria-selected=${r}
        @pointerenter=${()=>this.tickled.handlePointerEnter(n)}
        @pointerdown=${n=>this.#c(n,e)}
      >
        ${e.icon?C`<ixfx-icon class="item-icon" name=${e.icon}></ixfx-icon>`:T}
        <span class="item-label">${e.label}</span>
        ${e.subLabel?C`<span class="item-sublabel">${e.subLabel}</span>`:T}
      </div>
    `}#g(){let e=!this._isLoading&&this._results.length===0;return C`
      <div
        class="popup"
        role="listbox"
        aria-label="Suggestions"
        data-input-mode=${this.tickled.inputMode}
        @pointerleave=${e=>this.tickled.handlePointerLeave(e)}
      >
        ${e?C`<div class="no-results">No matching results</div>`:this._results.map((e,n)=>this.#h(e,n))}
      </div>
    `}render(){let e=this.tickled.tickledId??-1,n=e>=0?`ac-item-${e}`:void 0;return C`
      <div class="input-wrapper">
        <input
          type="text"
          .value=${this._query}
          placeholder=${this.placeholder||T}
          autocomplete="off"
          spellcheck="false"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded=${this._isOpen}
          aria-activedescendant=${n??T}
          @input=${this.#o}
          @keydown=${this.#s}
          @focus=${this.#i}
          @blur=${this.#a}
        >
        ${this._isLoading?C`<span class="spinner" aria-hidden="true"></span>`:T}
      </div>
      ${this._isOpen?this.#g():T}
    `}static{this.styles=[D,et,_`
    :host {
      display: block;
      position: relative;
      font-family: var(--font-family, system-ui, sans-serif);
      font-size: var(--text-m, 12px);
      color: var(--surface-2-text);
    }

    /* ---- Input ---- */

    .input-wrapper {
      display: flex;
      align-items: center;
      position: relative;
    }

    input {
      appearance: none;
      width: 100%;
      box-sizing: border-box;
      padding: var(--ac-input-padding, var(--space-m, 8px) var(--space-l, 12px));
      background: var(--ac-input-background, var(--surface-3, var(--surface-2)));
      color: var(--surface-2-text);
      border: var(--ac-input-border, var(--border));
      border-radius: var(--ac-input-border-radius, var(--radius-m, 4px));
      font: inherit;
      caret-color: var(--accent);
      outline: none;
      transition: border-color var(--transition, 0.15s ease-out);
    }

    input:focus {
      border-color: var(--accent);
    }

    input::placeholder {
      color: var(--surface-muted-text);
    }

    /* ---- Spinner ---- */

    .spinner {
      position: absolute;
      right: var(--space-m, 8px);
      width: 12px;
      height: 12px;
      border: 2px solid var(--surface-5);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: ac-spin 0.7s linear infinite;
      flex-shrink: 0;
      pointer-events: none;
    }

    @keyframes ac-spin {
      to { transform: rotate(360deg); }
    }

    /* ---- Popup ---- */

    .popup {
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      right: 0;
      z-index: 100;
      background: var(--surface-3, var(--surface-2));
      border: var(--border);
      border-radius: var(--radius-m, 4px);
      box-shadow: var(--shadow-l, 0 4px 24px rgba(0, 0, 0, 0.5));
      padding: var(--space-xs, 3px) 0;
      max-height: 280px;
      overflow-y: auto;
      font-size: var(--ac-popup-font-size, var(--text-s, 11px));
    }

    /* ---- Items ---- */

    .item {
      display: flex;
      align-items: center;
      gap: var(--space-m, 8px);
      padding: var(--space-xs, 3px) var(--space-l, 12px);
      cursor: pointer;
      border-radius: var(--radius-s, 3px);
      margin: 0 var(--space-xs, 3px);
      transition: background var(--transition, 0.1s ease-out);
      user-select: none;
      white-space: nowrap;
      min-height: 28px;
    }

    

    .item.tickled {
      background: var(--_item-focused-bg, var(--accent));
      color: var(--accent-text, #fff);
    }

    .item.tickled .item-sublabel {
      color: color-mix(in srgb, var(--accent-text, #fff) 70%, transparent);
    }

    .item-icon {
      flex-shrink: 0;
      width: 1em;
      height: 1em;
    }

    .item-label {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .item-sublabel {
      flex-shrink: 0;
      margin-left: auto;
      color: var(--surface-muted-text);
      font-size: var(--text-s, 11px);
    }

    ::highlight(ac-text-highlight) {
      background: var(--ac-highlight-background, var(--accent));
      color: var(--ac-highlight-color, var(--accent-text, #fff));
      border-radius: 2px;
      padding: 0 1px;
    }

    /* ---- Empty state ---- */

    .no-results {
      padding: var(--space-m, 8px) var(--space-l, 12px);
      color: var(--surface-muted-text);
      font-style: italic;
      font-size: var(--text-s, 11px);
    }
  `]}};k([A({type:Object})],St.prototype,`completionProvider`,void 0),k([A({type:String})],St.prototype,`placeholder`,void 0),k([A({type:Number,attribute:`cache-size`})],St.prototype,`cacheSize`,void 0),k([A({type:Number,attribute:`debounce-ms`})],St.prototype,`debounceMs`,void 0),k([A({type:String})],St.prototype,`value`,void 0),k([A({type:String,attribute:`tab-suffix`})],St.prototype,`tabSuffix`,void 0),k([j()],St.prototype,`_query`,void 0),k([j()],St.prototype,`_results`,void 0),k([j()],St.prototype,`_isOpen`,void 0),k([j()],St.prototype,`_isLoading`,void 0),St=k([O(`ixfx-ac-text`)],St);var Ct={216:`O`,223:`s`,248:`o`,273:`d`,295:`h`,305:`i`,320:`l`,322:`l`,359:`t`,383:`s`,384:`b`,385:`B`,387:`b`,390:`O`,392:`c`,393:`D`,394:`D`,396:`d`,398:`E`,400:`E`,402:`f`,403:`G`,407:`I`,409:`k`,410:`l`,412:`M`,413:`N`,414:`n`,415:`O`,421:`p`,427:`t`,429:`t`,430:`T`,434:`V`,436:`y`,438:`z`,477:`e`,485:`g`,544:`N`,545:`d`,549:`z`,564:`l`,565:`n`,566:`t`,567:`j`,570:`A`,571:`C`,572:`c`,573:`L`,574:`T`,575:`s`,576:`z`,579:`B`,580:`U`,581:`V`,582:`E`,583:`e`,584:`J`,585:`j`,586:`Q`,587:`q`,588:`R`,589:`r`,590:`Y`,591:`y`,592:`a`,593:`a`,595:`b`,596:`o`,597:`c`,598:`d`,599:`d`,600:`e`,603:`e`,604:`e`,605:`e`,606:`e`,607:`j`,608:`g`,609:`g`,610:`G`,613:`h`,614:`h`,616:`i`,618:`I`,619:`l`,620:`l`,621:`l`,623:`m`,624:`m`,625:`m`,626:`n`,627:`n`,628:`N`,629:`o`,633:`r`,634:`r`,635:`r`,636:`r`,637:`r`,638:`r`,639:`r`,640:`R`,641:`R`,642:`s`,647:`t`,648:`t`,649:`u`,651:`v`,652:`v`,653:`w`,654:`y`,655:`Y`,656:`z`,657:`z`,663:`c`,665:`B`,666:`e`,667:`G`,668:`H`,669:`j`,670:`k`,671:`L`,672:`q`,686:`h`,867:`a`,868:`e`,869:`i`,870:`o`,871:`u`,872:`c`,873:`d`,874:`h`,875:`m`,876:`r`,877:`t`,878:`v`,879:`x`,7424:`A`,7427:`B`,7428:`C`,7429:`D`,7431:`E`,7432:`e`,7433:`i`,7434:`J`,7435:`K`,7436:`L`,7437:`M`,7438:`N`,7439:`O`,7440:`O`,7441:`o`,7442:`o`,7443:`o`,7446:`o`,7447:`o`,7448:`P`,7449:`R`,7450:`R`,7451:`T`,7452:`U`,7453:`u`,7454:`u`,7455:`m`,7456:`V`,7457:`W`,7458:`Z`,7522:`i`,7523:`r`,7524:`u`,7525:`v`,7834:`a`,7835:`s`,8305:`i`,8341:`h`,8342:`k`,8343:`l`,8344:`m`,8345:`n`,8346:`p`,8347:`s`,8348:`t`,8580:`c`};for(let e=`̀`.codePointAt(0);e<=`ͯ`.codePointAt(0);++e){let n=String.fromCodePoint(e);for(let e of`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`){let r=(e+n).normalize().codePointAt(0);r>126&&(Ct[r]=e)}}var wt={a:[7844,7863],e:[7870,7879],o:[7888,7907],u:[7912,7921]};for(let e of Object.keys(wt)){let n=e.toUpperCase();for(let r=wt[e][0];r<=wt[e][1];++r)Ct[r]=r%2==0?n:e}function Tt(e){if(e<192||e>8580)return e;let n=Ct[e];return n===void 0?e:n.codePointAt(0)}function Et(e){return e}function Dt(e){return e}function Ot(e,n){return e>n?e:n}var kt=e=>e.split(``).map(e=>e.codePointAt(0)),At=new Set(` \f
\r	\v\xA0 \u2028\u2029  　﻿`.split(``).map(e=>e.codePointAt(0)));for(let e=` `.codePointAt(0);e<=` `.codePointAt(0);e++)At.add(e);var jt=``.codePointAt(0),Mt=`A`.codePointAt(0),Nt=`Z`.codePointAt(0),Pt=`a`.codePointAt(0),Ft=`z`.codePointAt(0),It=`0`.codePointAt(0),Lt=`9`.codePointAt(0);function Rt(e,n,r){return r?e:n-e-1}var zt=16,Bt=-3,Vt=-1,Ht=zt/2,Ut=zt/2,Wt=7,Gt=4,Kt=2;function qt(e){return e?new Set:null}function Jt(e,n,r){if(n!==null&&n.i16.length>e+r){let i=n.i16.subarray(e,e+r);return[e+r,i]}return[e,new Int16Array(r)]}function Yt(e,n,r){if(n!==null&&n.i32.length>e+r){let i=n.i32.subarray(e,e+r);return[e+r,i]}return[e,new Int32Array(r)]}function Xt(e){return e>=Pt&&e<=Ft?1:e>=Mt&&e<=Nt?2:e>=It&&e<=Lt?4:0}function Zt(e){let n=String.fromCodePoint(e);return n===n.toUpperCase()?n===n.toLowerCase()?n.match(/\p{Number}/gu)===null?n.match(/\p{Letter}/gu)===null?0:3:4:2:1}function Qt(e){return e<=jt?Xt(e):Zt(e)}function $t(e,n){return e===0&&n!==0?Ht:e===1&&n===2||e!==4&&n===4?Wt:n===0?Ut:0}function en(e,n){return n===0?Ht:$t(Qt(e[n-1]),Qt(e[n]))}function tn(e,n,r,i){let a=e.slice(i),o=a.indexOf(r);if(o===0)return i;if(!n&&r>=Pt&&r<=Ft){o>0&&(a=a.slice(0,o));let e=a.indexOf(r-32);e>=0&&(o=e)}return o<0?-1:i+o}function nn(e){for(let n of e)if(n>=128)return!1;return!0}function rn(e,n,r){if(!nn(e))return 0;if(!nn(n))return-1;let i=0,a=0;for(let o=0;o<n.length;o++){if(a=tn(e,r,n[o],a),a<0)return-1;o===0&&a>0&&(i=a-1),a++}return i}var an=(e,n,r,i,a,o,s)=>{let c=a.length;if(c===0)return[{start:0,end:0,score:0},qt(o)];let l=i.length;if(s!==null&&l*c>s.i16.length)return sn(e,n,r,i,a,o);let u=rn(i,a,e);if(u<0)return[{start:-1,end:-1,score:0},null];let d=0,f=0,p=null,m=null,h=null,g=null;[d,p]=Jt(d,s,l),[d,m]=Jt(d,s,l),[d,h]=Jt(d,s,l),[f,g]=Yt(f,s,c);let[,_]=Yt(f,s,l);for(let e=0;e<_.length;e++)_[e]=i[e];let v=Et(0),y=0,b=0,x=0,S=a[0],ee=a[0],te=Et(0),ne=0,re=!1,ie=_.subarray(u),ae=p.subarray(u).subarray(0,ie.length),oe=m.subarray(u).subarray(0,ie.length),se=h.subarray(u).subarray(0,ie.length);for(let[i,o]of ie.entries()){let s=null;o<=jt?(s=Xt(o),!e&&s===2&&(o+=32)):(s=Zt(o),!e&&s===2&&(o=String.fromCodePoint(o).toLowerCase().codePointAt(0)),n&&(o=Tt(o))),ie[i]=o;let l=$t(ne,s);if(se[i]=l,ne=s,o===ee&&(b<c&&(g[b]=Dt(u+i),b++,ee=a[Math.min(b,c-1)]),x=u+i),o===S){let e=zt+l*Kt;if(ae[i]=e,oe[i]=1,c===1&&(r&&e>v||!r&&e>=v)&&(v=e,y=u+i,r&&l===Ht))break;re=!1}else re?ae[i]=Ot(te+Vt,0):ae[i]=Ot(te+Bt,0),oe[i]=0,re=!0;te=ae[i]}if(b!==c)return[{start:-1,end:-1,score:0},null];if(c===1){let e={start:y,end:y+1,score:v};if(!o)return[e,null];let n=new Set;return n.add(y),[e,n]}let ce=g[0],le=x-ce+1,ue=null;[d,ue]=Jt(d,s,le*c);{let e=p.subarray(ce,x+1);for(let[n,r]of e.entries())ue[n]=r}let[,de]=Jt(d,s,le*c);{let e=m.subarray(ce,x+1);for(let[n,r]of e.entries())de[n]=r}let fe=g.subarray(1),pe=a.slice(1).slice(0,fe.length);for(let[e,n]of fe.entries()){let i=!1,a=pe[e],o=e+1,s=o*le,l=_.subarray(n,x+1),u=h.subarray(n).subarray(0,l.length),d=de.subarray(s+n-ce).subarray(0,l.length),f=de.subarray(s+n-ce-1-le).subarray(0,l.length),p=ue.subarray(s+n-ce).subarray(0,l.length),m=ue.subarray(s+n-ce-1-le).subarray(0,l.length),g=ue.subarray(s+n-ce-1).subarray(0,l.length);g[0]=0;for(let[e,s]of l.entries()){let l=e+n,_=0,b=0,x=0;if(b=i?g[e]+Vt:g[e]+Bt,a===s){_=m[e]+zt;let n=u[e];x=f[e]+1,n===Ht?x=1:x>1&&(n=Ot(n,Ot(Gt,h[l-x+1]))),_+n<b?(_+=u[e],x=0):_+=n}d[e]=x,i=_<b;let S=Ot(Ot(_,b),0);o===c-1&&(r&&S>v||!r&&S>=v)&&(v=S,y=l),p[e]=S}}let me=qt(o),he=ce;if(o&&me!==null){let e=c-1;he=y;let n=!0;for(;;){let r=e*le,i=he-ce,a=ue[r+i],o=0,s=0;if(e>0&&he>=g[e]&&(o=ue[r-le+i-1]),he>g[e]&&(s=ue[r+i-1]),a>o&&(a>s||a===s&&n)){if(me.add(he),e===0)break;e--}n=de[r+i]>1||r+le+i+1<de.length&&de[r+le+i+1]>0,he--}}return[{start:he,end:y+1,score:v},me]};function on(e,n,r,i,a,o,s){let c=0,l=0,u=!1,d=0,f=Et(0),p=qt(s),m=0;a>0&&(m=Qt(r[a-1]));for(let h=a;h<o;h++){let a=r[h],o=Qt(a);if(e||(a>=Mt&&a<=Nt?a+=32:a>jt&&(a=String.fromCodePoint(a).toLowerCase().codePointAt(0))),n&&(a=Tt(a)),a===i[c]){s&&p!==null&&p.add(h),l+=zt;let e=$t(m,o);d===0?f=e:(e===Ht&&(f=e),e=Ot(Ot(e,f),Gt)),c===0?l+=e*Kt:l+=e,u=!1,d++,c++}else u?l+=Vt:l+=Bt,u=!0,d=0,f=0;m=o}return[l,p]}var sn=(e,n,r,i,a,o,s)=>{if(a.length===0)return[{start:0,end:0,score:0},null];if(rn(i,a,e)<0)return[{start:-1,end:-1,score:0},null];let c=0,l=-1,u=-1,d=i.length,f=a.length;for(let o=0;o<d;o++){let s=i[Rt(o,d,r)];e||(s>=Mt&&s<=Nt?s+=32:s>jt&&(s=String.fromCodePoint(s).toLowerCase().codePointAt(0))),n&&(s=Tt(s));let p=a[Rt(c,f,r)];if(s===p&&(l<0&&(l=o),c++,c===f)){u=o+1;break}}if(l>=0&&u>=0){c--;for(let n=u-1;n>=l;n--){let o=i[Rt(n,d,r)];e||(o>=Mt&&o<=Nt?o+=32:o>jt&&(o=String.fromCodePoint(o).toLowerCase().codePointAt(0)));let s=a[Rt(c,f,r)];if(o===s&&(c--,c<0)){l=n;break}}if(!r){let e=l;l=d-u,u=d-e}let[s,p]=on(e,n,i,a,l,u,o);return[{start:l,end:u,score:s},p]}return[{start:-1,end:-1,score:0},null]},cn=(e,n,r,i,a,o,s)=>{if(a.length===0)return[{start:0,end:0,score:0},null];let c=i.length,l=a.length;if(c<l||rn(i,a,e)<0)return[{start:-1,end:-1,score:0},null];let u=0,d=-1,f=Et(0),p=Et(-1);for(let o=0;o<c;o++){let s=Rt(o,c,r),m=i[s];e||(m>=Mt&&m<=Nt?m+=32:m>jt&&(m=String.fromCodePoint(m).toLowerCase().codePointAt(0))),n&&(m=Tt(m));let h=Rt(u,l,r);if(a[h]===m){if(h===0&&(f=en(i,s)),u++,u===l){if(f>p&&(d=o,p=f),f===Ht)break;o-=u-1,u=0,f=0}}else o-=u,u=0,f=0}if(d>=0){let o=0,s=0;r?(o=d-l+1,s=d+1):(o=c-(d+1),s=c-(d-l+1));let[u]=on(e,n,i,a,o,s,!1);return[{start:o,end:s,score:u},null]}return[{start:-1,end:-1,score:0},null]},ln=100*1024,un=2048;function dn(e,n){return{i16:new Int16Array(e),i32:new Int32Array(n)}}var fn=dn(ln,un),pn=(e,n,r)=>{let i=!1;switch(n){case`smart-case`:e.toLowerCase()!==e&&(i=!0);break;case`case-sensitive`:i=!0;break;case`case-insensitive`:e=e.toLowerCase(),i=!1;break}let a=kt(e);return r&&(a=a.map(Tt)),{queryRunes:a,caseSensitive:i}};function mn(e,n){let r=Object.keys(e).map(e=>parseInt(e,10)).sort((e,n)=>n-e),i=[];for(let a of r)if(i=i.concat(e[a]),i.length>=n)break;return i}function hn(e,n,r){return i=>{let a=this.runesList[i];if(n.length>a.length)return;let[o,s]=this.algoFn(r,this.opts.normalize,this.opts.forward,a,n,!0,fn);if(o.start===-1)return;if(this.opts.fuzzy===!1){s=new Set;for(let e=o.start;e<o.end;++e)s.add(e)}let c=this.opts.sort?o.score:0;e[c]===void 0&&(e[c]=[]),e[c].push({item:this.items[i],...o,positions:s??new Set})}}function gn(e){let{queryRunes:n,caseSensitive:r}=pn(e,this.opts.casing,this.opts.normalize),i={},a=hn.bind(this)(i,n,r);for(let e=0,n=this.runesList.length;e<n;++e)a(e);return mn(i,this.opts.limit)}var _n={limit:1/0,selector:e=>e,casing:`smart-case`,normalize:!0,fuzzy:`v2`,tiebreakers:[],sort:!0,forward:!0},vn=class{constructor(e,...n){switch(this.opts={..._n,...n[0]},this.items=e,this.runesList=e.map(e=>kt(this.opts.selector(e).normalize())),this.algoFn=cn,this.opts.fuzzy){case`v2`:this.algoFn=an;break;case`v1`:this.algoFn=sn;break}}},yn={..._n,match:gn},bn=class extends vn{constructor(e,...n){super(e,...n),this.opts={...yn,...n[0]}}find(e){return e.length===0||this.items.length===0?this.items.slice(0,this.opts.limit).map(xn):(e=e.normalize(),Sn(this.opts.match.bind(this)(e),this.opts))}};({..._n});var xn=e=>({item:e,start:-1,end:-1,score:0,positions:new Set});function Sn(e,n){if(n.sort){let{selector:r}=n;e.sort((e,i)=>{if(e.score===i.score)for(let a of n.tiebreakers){let n=a(e,i,r);if(n!==0)return n}return 0})}return Number.isFinite(n.limit)&&e.splice(n.limit),e}var Cn=class{constructor(e,...n){this.finder=new bn(e,...n),this.find=this.finder.find.bind(this.finder)}};function wn(e){if(typeof e==`string`)return e;let n=e;return typeof n.label==`string`?n.label:typeof n.key==`string`?n.key:typeof n.value==`string`?n.value:String(e)}function Tn(e,n={}){let r=new Cn(e,{selector:n.selector??wn,...n.fzf??{}});return{find:n=>n.trim()?r.find(n).map(e=>({item:e.item,positions:e.positions,score:e.score})):e.map(e=>({item:e,positions:new Set,score:0})),items:e}}function En(e,n={}){let r=Tn(e,{selector:n.selector??(e=>e.label)});return(e,n)=>new Promise((i,a)=>{if(n.aborted){a(new DOMException(`Aborted`,`AbortError`));return}let o=r.find(e).map(e=>({...e.item,positions:e.positions}));if(n.aborted){a(new DOMException(`Aborted`,`AbortError`));return}i(o)})}function Dn(e,n){let r=new Map;for(let n of e)r.set(n.item,n.positions);return Object.freeze({query:n,results:Object.freeze([...e]),positionsByItem:r})}function On(e={}){let n=e.items??[],r=``,i=Tn(n,{selector:e.selector,fzf:e.fzf}),a=Dn(i.find(r),r),o=!1,s=new Set;e.onChange&&s.add(e.onChange);let c=e=>{for(let n of s)n(e)},l=async(e,n)=>{if(await Promise.resolve(),n?.aborted||o)return a;let r=i.find(e);return n?.aborted||o?a:(a=Dn(r,e),c(a),a)};return{get state(){return a},async setItems(a,o){n=a,i=Tn(n,{selector:e.selector,fzf:e.fzf}),await l(r,o)},async setQuery(e,n){return r=e,l(e,n)},async clearQuery(){r=``,await l(``,void 0)},onChange(e){return s.add(e),e(a),()=>{s.delete(e)}},dispose(){o=!0,s.clear(),n=[]}}}var kn=e=>e.textContent?.trim()??``;function An(e){return e.getAttribute(`data-key`)??e.getAttribute(`data-value`)??e.textContent?.trim()??``}function jn(e){let{container:n,itemSelector:r,getLabel:i=kn,getKey:a=An,labelSelector:o,highlightKey:u}=e,d=new Map,f=On({selector:e=>e.label,fzf:e.fzf}),p=e=>{let n=new Set(e.results.map(e=>e.item.key)),r=e.query.trim().length>0;for(let[e,i]of d)i.hidden=r?!n.has(e):!1},m=e=>{if(!e.query.trim()){c({key:u});return}s(l(n,o??r,e.positionsByItem,n=>{let r=a(n);return e.results.find(e=>e.item.key===r)?.item},e=>i(e)),{key:u})},h=f.onChange(n=>{p(n),m(n),e.onChange?.(n)}),g=!1,_=()=>{g||(g=!0,Promise.resolve().then(()=>{g=!1,d=new Map;let e=n.querySelectorAll(r),o=[];for(let n of e){let e=a(n);d.set(e,n),o.push({key:e,label:i(n)})}f.setItems(o)}))},v=new MutationObserver(()=>_());return v.observe(n,{childList:!0,subtree:!1}),_(),{async setQuery(e,n){await f.setQuery(e,n)},async clearQuery(){await f.clearQuery()},refresh:_,onChange(e){return f.onChange(e)},dispose(){v.disconnect(),h(),f.dispose(),c({key:u})}}}var Mn=`<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>`,Nn=`<svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M10 7l6 5-6 5V7z"/></svg>`,Pn=`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>`,Fn=`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>`,In=`<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>`;function Ln(){ot(`chevron-down`,Mn),ot(`chevron-right`,In),ot(`caret-right`,Nn),ot(`check`,Pn),ot(`close`,Fn)}Ln();var Rn=_`
  :host {
    --prominence-idle-opacity: 0.6;
    --prominence-idle-saturate: 0.4;
    --prominence-tickled-opacity: 0.85;
    --prominence-tickled-saturate: 0.8;
    --prominence-disabled-opacity: 0.3;
    --prominence-disabled-saturate: 0.1;
  }
`,zn=_`
  ${Rn}

  :host {
    filter:
      opacity(var(--prominence-idle-opacity))
      saturate(var(--prominence-idle-saturate));
    transition: filter var(--transition, 0.15s ease-out);
  }

  :host(:hover),
  :host(:focus-within) {
    filter:
      opacity(var(--prominence-tickled-opacity))
      saturate(var(--prominence-tickled-saturate));
  }

  :host(:active),
  :host([dragging]) {
    filter: none;
  }

  /* Disabled comes last to override tickled/active selectors of equal specificity */
  :host([disabled]),
  :host(:disabled) {
    filter:
      opacity(var(--prominence-disabled-opacity))
      saturate(var(--prominence-disabled-saturate));
    pointer-events: none;
  }
`;_`
  ${Rn}

  .prominence {
    filter:
      opacity(var(--prominence-idle-opacity))
      saturate(var(--prominence-idle-saturate));
    transition: filter var(--transition, 0.15s ease-out);
  }

  .prominence:hover,
  .prominence:focus-within {
    filter:
      opacity(var(--prominence-tickled-opacity))
      saturate(var(--prominence-tickled-saturate));
  }

  .prominence:active,
  .prominence.dragging {
    filter: none;
  }

  .prominence[disabled],
  .prominence:disabled {
    filter:
      opacity(var(--prominence-disabled-opacity))
      saturate(var(--prominence-disabled-saturate));
    pointer-events: none;
  }
`;var Bn=_`
  :host {
    display: inline-flex;
    max-width: 100%;
    vertical-align: middle;
    user-select: none;
    -webkit-user-select: none;
  }

  button {
    cursor: pointer;
    appearance: none;
    background: var(--surface-4, #ccc);
    color: var(--surface-3-text, #000);
    border: var(--border, 1px solid #999);
    border-radius: var(--radius-xl, 8px);
    corner-shape: superellipse(1);
    padding: var(--space-m, 8px) var(--space-l, 12px);
    font-family: var(--font-family, inherit);
    font-size: var(--text-m, 14px);
    margin: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    box-shadow: 
      inset 1px 1px 1px 1px color-mix(in oklch, var(--surface-4) 30%, transparent), inset -1px -1px 1px 1px color-mix(in oklch, var(--surface-2) 20%, transparent),
      2px 2px 1px 0px color-mix(in oklch, var(--surface-2) 30%, transparent);
    transition: background var(--transition, 0.2s), border-color var(--transition, 0.2s);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:hover:not(:disabled) {
    background: color-mix(in oklch, var(--surface-4) 80%, transparent);
    border-color: var(--accent, #666);
    box-shadow: 
      inset 1px 1px 1px 1px color-mix(in oklch, var(--surface-5) 70%, transparent), 
      inset -1px -1px 1px 1px color-mix(in oklch, var(--surface-2) 60%, transparent),
      2px 2px 1px 0px color-mix(in oklch, var(--surface-2) 90%, transparent);
  }

  button:active:not(:disabled) {
    background: var(--surface-2, #aaa);
    transform: translateY(1px);
    box-shadow: inset 1px 1px 0px 0.5px color-mix(in oklch,var(--surface-1),transparent);
  }

  .button-icon {
    display: var(--ixfx-button-hide-icon, inline-flex);
    align-items: center;
    flex-shrink: 0;
  }

  .button-label {
    white-space: nowrap;
    display: var(--ixfx-button-hide-label, inline);
  }

  :host([hide-label]) .button-label {
    display: none;
  }

  :host([hide-icon]) .button-icon {
    display: none;
  }
`,Vn=class extends E{constructor(...e){super(...e),this.disabled=!1,this.hideIcon=!1,this.hideLabel=!1}_renderIcon(){return this.hideIcon||!this.icon?T:this.icon.startsWith(`<svg`)?C`<span class="button-icon">${vt(this.icon)}</span>`:st(this.icon)?C`<ixfx-icon class="button-icon" name="${this.icon}"></ixfx-icon>`:T}render(){let e=this.hideLabel?T:C`<span class="button-label"><slot></slot></span>`;return C`<button ?disabled=${this.disabled}>${this._renderIcon()}${e}</button>`}static{this.styles=[zn,Bn]}};k([A({type:Boolean})],Vn.prototype,`disabled`,void 0),k([A({type:String})],Vn.prototype,`icon`,void 0),k([A({type:Boolean,attribute:`hide-icon`,reflect:!0})],Vn.prototype,`hideIcon`,void 0),k([A({type:Boolean,attribute:`hide-label`,reflect:!0})],Vn.prototype,`hideLabel`,void 0),Vn=k([O(`ixfx-button`)],Vn);var Hn=_`
  .popup-surface {
    background: var(--surface-5);
    border: 1px solid var(--surface-6);
    border-radius: var(--radius-l);
    box-shadow: var(--shadow-m);
    color: var(--surface-5-text);
  }
`,Un=class extends E{constructor(...e){super(...e),this.tickled=new $e(this,{getItems:()=>this._getMenuItems().map((e,n)=>({id:n,enabled:!e.hasAttribute(`disabled`)})),onTickle:e=>{let n=this._getMenuItems();if(e!==void 0){let r=n[e];r.tabIndex=0,r.focus({preventScroll:!0})}},onStateChange:()=>{this._syncTickledClasses()}}),this._handleMouseOver=e=>{let n=this._getMenuItems(),r=e.composedPath(),i=n.findIndex(e=>r.includes(e));if(i!==-1){let a=n[i],o=r.indexOf(a);r.slice(0,o).some(e=>e instanceof Element&&e.tagName===`IXFX-MENU-CONTAINER`)||this.tickled.handlePointerEnter(i),e.stopPropagation()}},this._handleKeydown=e=>{let n=this._getMenuItems();if(n.length!==0)switch(e.key){case`ArrowDown`:e.preventDefault(),e.stopPropagation(),this._focusNext(n,1);break;case`ArrowUp`:e.preventDefault(),e.stopPropagation(),this._focusNext(n,-1);break;case`Home`:e.preventDefault(),e.stopPropagation(),this._focusItem(n,0);break;case`End`:e.preventDefault(),e.stopPropagation(),this._focusItem(n,n.length-1);break;case`Enter`:case` `:e.preventDefault(),e.stopPropagation(),this._activateFocusedItem(n);break}}}static{this.styles=[Hn,D,et,_`
    :host {
      display: block;
    }

    .popover {
      padding: var(--space-xs) 0;
      min-width: 160px;
    }

    :host {
      opacity: 1;
      transform: translateY(0) scale(1);
      transition: opacity 0.12s ease-out, transform 0.12s ease-out,
                  display 0.12s allow-discrete, overlay 0.12s allow-discrete;
    }

    @starting-style :host {
      opacity: 0;
      transform: translateY(-4px) scale(0.97);
    }

    ::slotted(menu-separator) {
      display: block;
      margin: var(--space-xs) 0;
    }
  `]}_updateIconSections(){let e=this.shadowRoot?.querySelector(`slot`);if(!e)return;let n=e.assignedElements({flatten:!0}),r=[],i=[];for(let e of n)e.tagName===`IXFX-MENU-SEPARATOR`||e.tagName===`IXFX-MENU-HEADER`?i.length>0&&(r.push(i),i=[]):i.push(e);i.length>0&&r.push(i),this._propagateContext();for(let e of r){let n=e.some(e=>e.tagName===`IXFX-MENU-RADIO-GROUP`?[...e.children].some(e=>e.hasAttribute(`icon-name`)):e.hasAttribute(`icon-name`));for(let r of e)if(r.tagName===`IXFX-MENU-RADIO-GROUP`)for(let e of r.children)n?e.setAttribute(`data-icon-section`,``):e.removeAttribute(`data-icon-section`);else n?r.setAttribute(`data-icon-section`,``):r.removeAttribute(`data-icon-section`)}this.performUpdate()}_propagateContext(){let e=this.shadowRoot?.querySelector(`slot`);if(e)for(let n of e.assignedElements({flatten:!0}))`registry`in n&&(n.registry=this.registry),`keyboardManager`in n&&(n.keyboardManager=this.keyboardManager)}updated(e){(e.has(`registry`)||e.has(`keyboardManager`))&&this._propagateContext()}willUpdate(e){super.willUpdate(e),this.setAttribute(`data-input-mode`,this.tickled.inputMode)}render(){return C`
      <div
        class="popover popup-surface"
        role="menu"
        @keydown=${this._handleKeydown}
        @mouseover=${this._handleMouseOver}
      >
        <slot @slotchange=${this._updateIconSections}></slot>
      </div>
    `}_getMenuItems(){let e=this.shadowRoot?.querySelector(`slot`);if(!e)return[];let n=[`IXFX-MENU-SEPARATOR`,`IXFX-MENU-HEADER`],r=[];for(let i of e.assignedElements({flatten:!0})){if(n.includes(i.tagName)||i.hasAttribute(`disabled`))continue;let e=i.getAttribute(`role`);if(!(e===`none`||e===`presentation`))if(i.tagName===`IXFX-MENU-RADIO-GROUP`){let e=i.shadowRoot?.querySelector(`slot`);for(let n of e?.assignedElements({flatten:!0})??[])n.hasAttribute(`disabled`)||r.push(n)}else r.push(i)}return r}_syncTickledClasses(){let e=this._getMenuItems();e.forEach((e,n)=>{if(this.tickled.isTickled(n)){e.classList.add(`tickled`),e.tabIndex=0;let n=e.shadowRoot?.querySelector(`.item`);n&&(n.style.background=`rgba(0, 0, 0, 0.06)`,n.style.borderColor=`var(--accent)`,n.style.color=`inherit`)}else{e.classList.remove(`tickled`),e.tabIndex=-1;let n=e.shadowRoot?.querySelector(`.item`);n&&(n.style.background=``,n.style.borderColor=``,n.style.color=``)}}),this.tickled.inputMode===`keyboard`&&this.tickled.tickledId!==void 0&&e[this.tickled.tickledId]?.focus()}focusFirst(){this.tickled.handleKeyboardNavigation(`first`)}_focusNext(e,n){e.length!==0&&this.tickled.handleKeyboardNavigation(n>0?`next`:`previous`)}_focusItem(e,n){if(e.length===0)return;let r=Math.max(0,Math.min(n,e.length-1));this.tickled.handleKeyboardNavigation(r)}_activateFocusedItem(e){let n=this.tickled.tickledId;if(n===void 0)return;let r=e[n];if(!r)return;let i=r.tagName;if(i!==`IXFX-MENU-SUB-TRIGGER`){if(i===`IXFX-MENU-CHECK-ITEM`){let e=r;e.checked=!e.checked,e.dispatchEvent(new CustomEvent(`command`,{detail:{command:e.command,checked:e.checked},bubbles:!0,composed:!0}));return}if(i===`IXFX-MENU-RADIO-ITEM`){r.dispatchEvent(new CustomEvent(`radio-select`,{detail:{value:r.value},bubbles:!0,composed:!0}));return}if(i===`IXFX-MENU-ITEM`){let e=r.command;e&&r.dispatchEvent(new CustomEvent(`command`,{detail:{command:e},bubbles:!0,composed:!0}));return}r.click()}}};k([A({type:String,attribute:`anchor`})],Un.prototype,`anchor`,void 0),k([A({attribute:!1})],Un.prototype,`registry`,void 0),k([A({attribute:!1})],Un.prototype,`keyboardManager`,void 0),k([M(`.popover`)],Un.prototype,`_popover`,void 0),Un=k([O(`ixfx-menu-container`)],Un);var Wn,Gn=class extends E{static{Wn=this}constructor(...e){super(...e),this.mode=`trigger`,this.label=`⋮`,this.placement=`bottom-start`,this._isOpen=!1,this._hasMenu=!1,this._hasTriggerSlot=!1,this._anchorName=`--mt-${Wn._count++}`,this._clickListener=this._handleClickOutside.bind(this),this._handlePopoverToggle=e=>{e.newState===`closed`&&(this._isOpen=!1,document.removeEventListener(`click`,this._clickListener),this.dispatchEvent(new CustomEvent(`menu-trigger-close`,{bubbles:!0,composed:!0})))},this._handleKeydown=e=>{this._isOpen&&(e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),this._closeMenu(),this._triggerBtn?.focus()):e.key===`Tab`&&(this._closeMenu(),this._triggerBtn?.focus()))}}static{this._count=0}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._handleKeydown),this.addEventListener(`command`,this._handleCommand),this.addEventListener(`radio-change`,this._handleRadioChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._handleKeydown),this.removeEventListener(`command`,this._handleCommand),this.removeEventListener(`radio-change`,this._handleRadioChange),document.removeEventListener(`click`,this._clickListener)}firstUpdated(){this.style.setProperty(`--anchor-name`,this._anchorName),this._popup.addEventListener(`toggle`,this._handlePopoverToggle),this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`slot[name="menu"]`);e&&e.assignedElements({flatten:!0}).length>0&&(this._hasMenu=!0,this._propagateContext()),this._updatePosition()})}updated(e){(e.has(`registry`)||e.has(`keyboardManager`))&&this._propagateContext()}_updatePosition(){let e={"bottom-start":{top:`anchor(bottom)`,left:`anchor(left)`},"bottom-end":{top:`anchor(bottom)`,left:`anchor(right)`},"right-start":{top:`anchor(top)`,left:`anchor(right)`}}[this.placement];this._popup.style.top=e.top,this._popup.style.left=e.left,this._popup.style.positionAnchor=this._anchorName}_propagateContext(){let e=(this.shadowRoot?.querySelector(`slot[name="menu"]`))?.assignedElements({flatten:!0})??[];for(let n of e)`registry`in n&&(n.registry=this.registry),`keyboardManager`in n&&(n.keyboardManager=this.keyboardManager)}_handleSlotChange(e){let n=e.target.assignedElements({flatten:!0});this._hasMenu=n.length>0,this._propagateContext()}_handleTriggerSlotChange(e){let n=e.target;this._hasTriggerSlot=n.assignedElements({flatten:!0}).length>0}get isOpen(){return this._isOpen}openMenu(){this._openMenu()}closeMenu(){this._closeMenu()}focusTrigger(){this._triggerBtn?.focus()}_openMenu(){if(!(this._isOpen||!this._popup?.popover))try{this._popup.showPopover({source:this}),this._isOpen=!0,document.addEventListener(`click`,this._clickListener),this.dispatchEvent(new CustomEvent(`menu-trigger-open`,{bubbles:!0,composed:!0})),requestAnimationFrame(()=>{this._getMenuContainer()?.focusFirst()})}catch(e){console.warn(`showPopover failed:`,e)}}_closeMenu(){if(this._isOpen){if(this._popup?.popover)try{this._popup.hidePopover()}catch{}this._isOpen=!1,document.removeEventListener(`click`,this._clickListener)}}_handleTriggerClick(e){e.stopPropagation(),this._isOpen?(this._closeMenu(),this._triggerBtn?.focus()):this._openMenu()}_handleClickOutside(e){if(!this.contains(e.target)&&this._popup?.popover&&this._popup.hasAttribute(`open`))try{this._popup.hidePopover()}catch{}}_getMenuContainer(){return((this.shadowRoot?.querySelector(`slot[name="menu"]`))?.assignedElements({flatten:!0})??[]).find(e=>e.tagName===`IXFX-MENU-CONTAINER`)??null}_handleCommand(e){if(this._popup?.popover)try{this._popup.hidePopover()}catch{}this.dispatchEvent(new CustomEvent(`menu-command`,{detail:e.detail,bubbles:!0,composed:!0}))}_handleRadioChange(e){if(this._popup?.popover)try{this._popup.hidePopover()}catch{}this.dispatchEvent(new CustomEvent(`menu-command`,{detail:{command:e.detail.name,value:e.detail.value},bubbles:!0,composed:!0}))}_handleContextMenu(e){if(this.mode===`context`&&(e.preventDefault(),this._popup.style.top=`${e.clientY}px`,this._popup.style.left=`${e.clientX}px`,this._popup.style.position=`fixed`,this._popup.style.positionAnchor=`none`,this._popup?.popover))try{this._popup.showPopover()}catch{}}static{this.styles=[D,Hn,_`
    :host {
      display: inline-block;
      position: relative;
    }

    .trigger-area {
      anchor-name: var(--anchor-name);
      display: inline-flex;
      align-items: stretch;
    }

    .trigger-btn {
      background: none;
      border: none;
      color: var(--surface-3-text);
      cursor: pointer;
      padding: var(--space-s) var(--space-m);
      font-size: var(--text-m);
      font-weight: 600;
      border-radius: var(--radius-s);
      opacity: 0.6;
      transition: opacity var(--transition), background var(--transition);
    }

    .trigger-btn:hover {
      background: var(--_trigger-hover-bg, var(--surface-4));
      color: var(--surface-3-text);
      opacity: var(--_trigger-hover-opacity, 1);
    }

    .trigger-btn:focus-visible {
      background: var(--surface-4);
      color: var(--surface-3-text);
      outline: none;
      opacity: 1;
    }

    .popup {
      position: fixed;
      position-anchor: var(--anchor-name);
      inset: auto;
      margin: 0;
      padding: 0;
      border: none;
      background: transparent;
      z-index: 100;
      position-try-fallbacks: flip-inline, flip-block, flip-block flip-inline;
    }

    .popup[popover] {
      opacity: 1;
      transform: translateY(0) scale(1);
      transition: opacity 0.12s ease-out, transform 0.12s ease-out,
                  display 0.12s allow-discrete, overlay 0.12s allow-discrete;
    }

    @starting-style .popup {
      opacity: 0;
      transform: translateY(-4px) scale(0.97);
    }
  `]}render(){let e=this.mode!==`dropdown`&&this._hasMenu&&!this._hasTriggerSlot;return C`
      <div
        class="trigger-area"
        @click=${this._handleTriggerClick}
        @contextmenu=${this._handleContextMenu}
      >
        ${e?C`<button class="trigger-btn" part="base">${this.label}</button>`:null}
        <slot name="trigger" @slotchange=${this._handleTriggerSlotChange}></slot>
      </div>
      <div
        class="popup popup-surface"
        popover="auto"
        @click=${e=>e.stopPropagation()}
      >
          <slot name="menu" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}};k([A({type:String})],Gn.prototype,`mode`,void 0),k([A({type:String})],Gn.prototype,`label`,void 0),k([A({attribute:!1})],Gn.prototype,`registry`,void 0),k([A({attribute:!1})],Gn.prototype,`keyboardManager`,void 0),k([A({type:String})],Gn.prototype,`placement`,void 0),k([j()],Gn.prototype,`_isOpen`,void 0),k([j()],Gn.prototype,`_hasMenu`,void 0),k([j()],Gn.prototype,`_hasTriggerSlot`,void 0),k([M(`.trigger-btn`)],Gn.prototype,`_triggerBtn`,void 0),k([M(`.popup`)],Gn.prototype,`_popup`,void 0),Gn=Wn=k([O(`ixfx-menu-trigger`)],Gn);var Kn=class extends E{constructor(...e){super(...e),this.command=``,this.commandArgs=``,this.label=``,this.disabled=!1,this.iconName=``,this._hasChildren=!1,this._hoverTimeout=null}disconnectedCallback(){super.disconnectedCallback(),this._hoverTimeout&&clearTimeout(this._hoverTimeout)}_handleSlotChange(){let e=this._slot?.assignedElements()??[];this._hasChildren=e.length>0}_handleMouseEnter(){this.disabled||!this._hasChildren||!this.submenuPopover||(this._hoverTimeout&&clearTimeout(this._hoverTimeout),this._hoverTimeout=window.setTimeout(()=>{this._showSubmenu()},150))}_handleMouseLeave(){this._hoverTimeout&&=(clearTimeout(this._hoverTimeout),null),this._hideSubmenu()}_showSubmenu(){if(this.submenuPopover?.popover)try{this.submenuPopover.showPopover()}catch(e){console.warn(`showPopover failed:`,e)}}_hideSubmenu(){if(this.submenuPopover?.popover)try{this.submenuPopover.hidePopover()}catch(e){console.warn(`hidePopover failed:`,e)}}handleClick(){this.disabled||this.dispatchEvent(new CustomEvent(`command`,{detail:{command:this.command,args:this.commandArgs},bubbles:!0,composed:!0}))}_resolvedLabel(){return this.label?this.label:this.registry&&this.command?this.registry.get(this.command)?.label??``:``}_resolvedIcon(){return this.iconName?this.iconName:this.registry&&this.command?this.registry.get(this.command)?.icon??null:null}willUpdate(e){super.willUpdate(e);let n=this._resolvedIcon();n&&!this.iconName?this.setAttribute(`data-icon-section`,``):!n&&!this.iconName&&this.removeAttribute(`data-icon-section`)}updated(e){super.updated(e)}_getShortcut(){if(!this.keyboardManager||!this.command)return null;let e=(this.keyboardManager.getBindings?.()??[]).find(e=>e.commandId===this.command);if(!e)return null;let n=Array.from(e.modifiers??[],e=>({ctrl:`⌃`,shift:`⇧`,alt:`⌥`,meta:`⌘`})[e]??e),r=e.key?.length===1?e.key.toUpperCase():e.key;return[...n,r].join(``)}static{this.styles=[D,tt,_`
    :host {
      display: block;
    }

    .item {
      display: flex !important;
      align-items: center;
      padding: 6px var(--space-m);
      font-size: var(--text-m);
      background: var(--item-bg, transparent);
      border: var(--item-border, 1px solid transparent);
      color: var(--item-text, inherit);
    }

    :host(.tickled) .item {
      background: rgba(0, 0, 0, 0.06);
      border: 1px solid var(--accent);
      color: inherit;
    }

    :host(:focus) {
      outline: none;
    }

    .item.disabled {
      opacity: var(--disabled-opacity);
      cursor: default;
    }

    .item.disabled:hover {
      background: transparent;
    }

    .icon-slot {
      width: 0;
      overflow: hidden;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    :host([icon-name]) .icon-slot,
    :host([data-icon-section]) .icon-slot {
      width: 1em;
      height: 1em;
      margin-right: var(--space-s);
    }

    .label {
      flex: 1;
    }

    .shortcut {
      margin-left: auto;
      color: var(--surface-muted-text);
      font-size: var(--text-s);
    }

    .arrow {
      color: var(--surface-muted-text);
      margin-left: var(--space-m);
    }
  `]}render(){let e=this._getShortcut(),n=this._resolvedIcon();return C`
      <div 
        class="item ${this.disabled?`disabled`:``}"
        @click=${this.handleClick}
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
        tabindex="${this.disabled?-1:0}"
        role="menuitem"
        aria-haspopup="${this._hasChildren?`true`:`false`}"
        aria-expanded="${this.submenuPopover?.matches(`:popover-open`)??!1}"
      >
        <span class="icon-slot">${n?C`<ixfx-icon name="${n}"></ixfx-icon>`:null}</span>
        <span class="label"><slot></slot>${this._resolvedLabel()}</span>
        ${e?C`<span class="shortcut">${e}</span>`:null}
        ${this._hasChildren?C`<span class="arrow"><ixfx-icon name="chevron-right"></ixfx-icon></span>`:null}
      </div>
      <slot @slotchange=${this._handleSlotChange}></slot>
    `}};k([A({type:String})],Kn.prototype,`command`,void 0),k([A({type:String,attribute:`command-args`})],Kn.prototype,`commandArgs`,void 0),k([A({type:String})],Kn.prototype,`label`,void 0),k([A({type:Boolean})],Kn.prototype,`disabled`,void 0),k([A({type:String,attribute:`icon-name`})],Kn.prototype,`iconName`,void 0),k([A({attribute:!1})],Kn.prototype,`registry`,void 0),k([A({attribute:!1})],Kn.prototype,`keyboardManager`,void 0),k([A({attribute:!1})],Kn.prototype,`submenuPopover`,void 0),k([j()],Kn.prototype,`_hasChildren`,void 0),k([M(`slot`)],Kn.prototype,`_slot`,void 0),Kn=k([O(`ixfx-menu-item`)],Kn);var qn=class extends E{constructor(...e){super(...e),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.label=``,this.name=``,this.value=``,this.#e=e=>{let n=e.target;this.checked=n.checked,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked},bubbles:!0,composed:!0}))}}static{this.styles=[zn,D,_`
    :host {
      /* Box */
      --box-size: 18px;
      --box-border-color: var(--surface-4);
      --box-bg-unchecked: color-mix(in oklch, var(--surface-3) 50%, var(--surface-2));
      --box-bg-checked: color-mix(in oklch, var(--surface-3) 50%, var(--surface-2));
      --box-opacity-checked: 1;
      --box-opacity-hover: var(--prominence-tickled-opacity);
      --box-opacity-disabled: var(--prominence-disabled-opacity);
      --box-border-width: 2px;
      
      /* Check */
      --check-line-width: 6px;
      --check-line-color: var(--accent);

      /* Spacing & borders */
      --label-gap: var(--space-m);

      /* Label */
      --label-opacity: 1;
      --label-opacity-unchecked: var(--label-opacity);
      --label-fg: var(--surface-3-text);
      --label-active: var(--surface-2-text);
      --label-hover: var(--surface-2-text);

      /* Animation */
      --transition-duration: var(--transition);

      display: inline-flex;
      user-select: none;
    }

    label {
      display: inline-flex;
      align-items: center;
      gap: var(--label-gap);
      cursor: pointer;
      position: relative;
      opacity: var(--box-opacity-unchecked);
      transition: opacity var(--transition-duration);
    }

    label:hover {
      opacity: var(--box-opacity-hover);
    }

    label:has(input:checked) {
      opacity: var(--box-opacity-checked);
    }

    input {
      position: absolute;
      opacity: 0;
      width: 1px;
      height: 1px;
      margin: -1px;
      clip: rect(0, 0, 0, 0);
    }

    .box {
      position: relative;
      width: var(--box-size);
      height: var(--box-size);
      border: var(--border, 1px solid #999);
      background: var(--box-bg-unchecked);
      flex-shrink: 0;
      transition: background var(--transition-duration);
      overflow: hidden;
      box-shadow: inset 1px 1px 0px 1px color-mix(in oklch, var(--surface-2) 60%, transparent);
    }
    label:has(input:not(:disabled)) {
      .box:hover {
        background: color-mix(in oklch, var(--surface-4) 80%, transparent);
        border-color: var(--accent, #666);
        box-shadow: unset;
      }
    }

    input:checked ~ .box {
      background: var(--box-bg-checked);
    }

    /* Diagonal line from top-left to bottom-right */
    .box::after {
      content: '';
      position: absolute;
      width: 141.4%; /* sqrt(2) × 100% to span corner-to-corner */
      height: var(--check-line-width);
      background: var(--check-line-color);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 0;
      transition: opacity var(--transition-duration);
    }

    input:checked ~ .box::after {
      opacity: 1;
    }

    /* Horizontal line for indeterminate state */
    .box::before {
      content: '';
      position: absolute;
      width: 60%;
      height: var(--check-line-width);
      background: var(--check-line-color);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity var(--transition-duration);
    }

    input:indeterminate ~ .box::before {
      opacity: 1;
    }

    /* Hide diagonal checkmark when indeterminate (must come after checked rule) */
    input:indeterminate ~ .box::after {
      opacity: 0;
    }

    /* Focus state */
    input:focus-visible ~ .box {
      outline: 2px solid var(--check-line-color);
      outline-offset: 2px;
    }

    /* Disabled state */
    label:has(input:disabled) {
      opacity: var(--box-opacity-disabled);
      cursor: not-allowed;
      .box {
        box-shadow: unset;
      }    
    }

    .label {
      color: var(--label-fg);
      opacity: var(--label-opacity);
      transition: opacity var(--transition-duration);
      user-select: none;
      -webkit-user-select: none;
    }

    .label:hover {
      color: var(--label-hover);
    }
    .label:has(+ :hover) {
      color: var(--label-hover);
    }
    .label:has(+ :active) {
      color: var(--label-active);
    }
    input:not(:checked) ~ .label {
      opacity: var(--label-opacity-unchecked);
    }
  `]}#e;render(){return C`
      <label>
        <input
          name="checkbox"
          type="checkbox"
          .checked=${this.checked}
          .disabled=${this.disabled}
          .indeterminate=${this.indeterminate}
          .name=${this.name}
          .value=${this.value}
          @change=${this.#e}
        />
        <span class="box"></span>
        ${this.label?C`<span class="label">${this.label}</span>`:``}
      </label>
    `}};k([A({type:Boolean})],qn.prototype,`checked`,void 0),k([A({type:Boolean})],qn.prototype,`disabled`,void 0),k([A({type:Boolean})],qn.prototype,`indeterminate`,void 0),k([A({type:String})],qn.prototype,`label`,void 0),k([A({type:String})],qn.prototype,`name`,void 0),k([A({type:String})],qn.prototype,`value`,void 0),qn=k([O(`ixfx-checkbox`)],qn);function N(...e){for(let n of e){if(n===void 0)continue;if(typeof n==`boolean`){if(n)continue;throw Jn.fromString(`Guard failed: false result`)}let e=typeof n==`object`?n:n();if(e!==void 0&&!e.success)throw Yn(e)}return!0}var Jn=class e extends Error{cause;constructor(e,n){super(e),this.cause=n}static fromError(n,r){let i=n.message,a=n.stack,o=n.name,s=new e(i,r);return s.stack=a,s.name=`IxfxError(${o})`,s}static fromString(n,r){let i=new e(n,r);return i.name=`IxfxError`,i}};function Yn(e){return typeof e.error==`string`?Jn.fromString(e.error,e.info):e.error instanceof Error?Jn.fromError(e.error,e.info):Jn.fromString(JSON.stringify(e.error),e.info)}function Xn(e,n){return{success:!1,error:e,info:n}}function Zn(...e){let n;for(let r of e){if(typeof r==`boolean`){if(r)continue;return{success:!1,error:`Guard failed: false result`}}if(n=typeof r==`object`?r:r(),n!==void 0&&!n.success)return n}if(!n)throw Error(`No results`);return n}var P=(e,n=``,r=`?`,i)=>{if(e===null)return{success:!1,error:`Parameter '${r}' is null`,info:i};if(e===void 0)return{success:!1,error:`Parameter '${r}' is undefined`,info:i};if(Number.isNaN(e))return{success:!1,error:`Parameter '${r}' is NaN`,info:i};if(typeof e!=`number`)return{success:!1,error:`Parameter '${r}' is not a number (${JSON.stringify(e)})`,info:i};switch(n){case`finite`:if(!Number.isFinite(e))return{success:!1,error:`Parameter '${r} must be finite (Got: ${e})`,info:i};break;case`positive`:if(e<0)return{success:!1,error:`Parameter '${r}' must be at least zero (${e})`,info:i};break;case`negative`:if(e>0)return{success:!1,error:`Parameter '${r}' must be zero or lower (${e})`,info:i};break;case`aboveZero`:if(e<=0)return{success:!1,error:`Parameter '${r}' must be above zero (${e})`,info:i};break;case`belowZero`:if(e>=0)return{success:!1,error:`Parameter '${r}' must be below zero (${e})`,info:i};break;case`percentage`:if(e>1||e<0)return{success:!1,error:`Parameter '${r}' must be in percentage range (0 to 1). (${e})`,info:i};break;case`nonZero`:if(e===0)return{success:!1,error:`Parameter '${r}' must non-zero. (${e})`,info:i};break;case`bipolar`:if(e>1||e<-1)return{success:!1,error:`Parameter '${r}' must be in bipolar percentage range (-1 to 1). (${e})`,info:i};break}return{success:!0,value:e,info:i}},Qn=(e,n=`?`,r)=>P(e,`percentage`,n,r),$n=(e,n=``,r=`?`)=>Zn(P(e,n,r),()=>Number.isInteger(e)?{success:!0,value:e}:{success:!1,error:`Param '${r}' is not an integer`}),er=(e,n,r,i=`?`)=>typeof e==`number`?Number.isNaN(e)?{success:!1,error:`Param '${i}' is not within range ${n}-${r}. Got: NaN`}:Number.isFinite(e)?e<n?{success:!1,error:`Param '${i}' is below range ${n}-${r}. Got: ${e}`}:e>r?{success:!1,error:`Param '${i}' is above range ${n}-${r}. Got: ${e}`}:{success:!0,value:e}:{success:!1,error:`Param '${i}' is not within range ${n}-${r}. Got: infinite`}:{success:!1,error:`Param '${i}' is not a number type. Got type: '${typeof e}' value: '${JSON.stringify(e)}'`},tr=(e,n=`?`)=>e===void 0?{success:!1,error:`Param '${n}' is undefined. Expected: function.`}:e===null?{success:!1,error:`Param '${n}' is null. Expected: function.`}:typeof e==`function`?{success:!0,value:e}:{success:!1,error:`Param '${n}' is type '${typeof e}'. Expected: function`};function nr(e,n=``,r=`?`){if(typeof e!=`string`)return{success:!1,error:`Param '${r} is not type string. Got: ${typeof e}`};switch(n){case`non-empty`:if(e.length===0)return{success:!1,error:`Param '${r} is empty`};break}return{success:!0,value:e}}function rr(...e){for(let n of e){if(n===void 0)continue;if(typeof n==`boolean`){if(n)continue;throw ir.fromString(`Guard failed: false result`)}let e=typeof n==`object`?n:n();if(e!==void 0&&!e.success)throw ar(e)}return!0}var ir=class e extends Error{cause;constructor(e,n){super(e),this.cause=n}static fromError(n,r){let i=n.message,a=n.stack,o=n.name,s=new e(i,r);return s.stack=a,s.name=`IxfxError(${o})`,s}static fromString(n,r){let i=new e(n,r);return i.name=`IxfxError`,i}};function ar(e){return typeof e.error==`string`?ir.fromString(e.error,e.info):e.error instanceof Error?ir.fromError(e.error,e.info):ir.fromString(JSON.stringify(e.error),e.info)}var or=(e,n=`?`)=>Array.isArray(e)?{success:!0,value:e}:{success:!1,error:`Parameter '${n}' is expected to be an array'`};function*sr(e){if(rr(or(e,`values`)),e.length<2)throw Error(`Array needs to have at least two entries. Length: ${e.length}`);for(let n=1;n<e.length;n++)yield[e[n-1],e[n]]}var cr=(e,n=`ignore`)=>{let r=0,i=e[0].length;for(let a=0;a<i;a++){let i=0;for(let[r,o]of e.entries()){let e=o[a];if(Number.isNaN(e)||!Number.isFinite(e)){if(n===`treat-as-zero`)e=0;else if(n===`error`)throw TypeError(`Invalid number at index ${a},${r}`)}r===0?i=e:i*=e}r+=i}return r};function lr(e,n=0,r=1){if(Number.isNaN(e))throw Error(`Param 'value' is NaN`);if(Number.isNaN(n))throw Error(`Param 'min' is NaN`);if(Number.isNaN(r))throw Error(`Param 'max' is NaN`);return e<n?n:e>r?r:e}function ur(e=0,n=1){if(Number.isNaN(e))throw Error(`Param 'min' is NaN`);if(Number.isNaN(n))throw Error(`Param 'max' is NaN`);return r=>r>n?n:r<e?e:r}var dr=(e,n=0,r=1)=>{if(N(P(e,``,`min`),P(n,``,`min`),P(r,``,`max`)),e===n||e===r)return n;for(;(e<=n||e>=r)&&!(e===r||e===n);)e>r?e=n+(e-r):e<n&&(e=r-(n-e));return e};Math.PI*2;function fr(e,n,r,i){let a,o=`clamp`,s=e=>(a&&(e=a(e)),o===void 0||o===`clamp`?e=lr(e):o===`wrap`&&(e>1?e%=1:e<0&&(e=1+e%1)),e),c=(e,n,r)=>(N(P(n,``,`a`),P(r,``,`b`),P(e,``,`amount`)),e=s(e),(1-e)*n+e*r),l=(e={})=>{if(e.transform!==void 0){if(typeof e.transform!=`function`)throw Error(`Param 'transform' is expected to be a function. Got: ${typeof e.transform}`);a=e.transform}o=e.limits??`clamp`},u=(e,n,r)=>(1-e)*n+e*r;if(typeof e!=`number`)throw TypeError(`First param is expected to be a number. Got: ${typeof e}`);if(typeof n==`number`){let a,o;if(r===void 0||typeof r==`object`)return a=e,o=n,l(r),e=>c(e,a,o);if(typeof r==`number`)return a=n,o=r,l(i),c(e,a,o);throw Error(`Values for 'a' and 'b' not defined`)}else if(n===void 0||typeof n==`object`){let r=s(e);return l(n),N(P(r,``,`amount`)),(e,n)=>u(r,e,n)}}function pr(e,n,r){N($n(e,`positive`,`decimalPlaces`));let i=typeof n==`boolean`?n:r??!1,a;if(e===0)a=Math.round;else{let n=10**e;a=i?e=>Math.ceil(e*n)/n:e=>Math.floor(e*n)/n}return typeof n==`number`?a(n):a}Math.PI*2;var mr=(e=3)=>{N(P(e,`aboveZero`,`scaling`));let n=0,r=0;return i=>(P(i,``,`v`).success&&i!==void 0&&(r++,n+=(i-n)/Math.min(r,e)),n)},hr=(e,n,r=!0)=>{let i=n.toString(),a=i.indexOf(`.`),o=1;a>=0&&(o=10*i.substring(a+1).length,n=Math.floor(o*n),e*=o),N(P(e,``,`v`),$n(n,``,`every`));let s=e/n,c=s%1;return s=Math.floor(s),(c===.5&&r||c>.5)&&s++,n*s/o},gr=(e,n,r,i,a,o)=>_r(n,r,i,a,o)(e),_r=(e,n,r,i,a,o)=>{N(P(e,`finite`,`inMin`),P(n,`finite`,`inMax`));let s=i??1,c=r??0,l=o?ur(r,i):void 0;return r=>{if(e===n)return s;let i=(r-e)/(n-e);a!==void 0&&(i=a(i));let o=i*(s-c)+c;return l?l(o):o}},vr=(e,n,r,i,a,o)=>(a===void 0&&(a=1),i===void 0&&(i=0),n===r?a:lr(gr(e,n,r,i,a,o),i,a)),yr=()=>({min:2**53-1,max:-(2**53-1)}),br=(e=yr())=>{let{min:n,max:r}=e;return{seen:e=>(typeof e==`number`&&!Number.isNaN(e)&&Number.isFinite(e)&&(n=Math.min(n,e),r=Math.max(r,e)),{min:n,max:r}),reset:()=>(n=2**53-1,r=-(2**53-1),{min:n,max:r}),get range(){return{min:n,max:r}},get min(){return n},get max(){return r}}},xr=Object.defineProperty,Sr=(e,n)=>{let r={};for(var i in e)xr(r,i,{get:e[i],enumerable:!0});return n||xr(r,Symbol.toStringTag,{value:`Module`}),r};function Cr(e){return L(e)&&e.z!==null?!1:e.x===null&&e.y===null}function wr(e){return L(e)&&!Number.isNaN(e.z)?!1:Number.isNaN(e.x)||Number.isNaN(e.y)}function Tr(e,n=`Point`,r=``){if(e===void 0)return Xn(`'${n}' is undefined. Expected {x,y} got ${JSON.stringify(e)}`,r);if(e===null)return Xn(`'${n}' is null. Expected {x,y} got ${JSON.stringify(e)}`,r);if(typeof e!=`object`)return Xn(`'${n}' is type '${typeof e}'. Expected object.`,r);if(e.x===void 0)return Xn(`'${n}.x' is undefined. Expected {x,y} got ${JSON.stringify(e)}`,r);if(e.y===void 0)return Xn(`'${n}.y' is undefined. Expected {x,y} got ${JSON.stringify(e)}`,r);if(typeof e.x!=`number`)return Xn(`'${n}.x' must be a number. Got ${typeof e.x}`,r);if(typeof e.y!=`number`)return Xn(`'${n}.y' must be a number. Got ${typeof e.y}`,r);if(e.z!==void 0){if(typeof e.z!=`number`)return Xn(`${n}.z must be a number. Got: ${typeof e.z}`,r);if(Number.isNaN(e.z))return Xn(`'${n}.z' is NaN. Got: ${JSON.stringify(e)}`,r)}return e.x===null?Xn(`'${n}.x' is null`,r):e.y===null?Xn(`'${n}.y' is null`,r):Number.isNaN(e.x)?Xn(`'${n}.x' is NaN`,r):Number.isNaN(e.y)?Xn(`'${n}.y' is NaN`,r):{success:!0,value:e}}function F(e,n=`Point`,r){N(Tr(e,n,r))}function Er(e,n=`pt`){return F(e,n),N(P(e.x,`nonZero`,`${n}.x`),P(e.y,`nonZero`,`${n}.y`),()=>{if(e.z!==void 0)return P(e.z,`nonZero`,`${n}.z`)}),!0}function I(e){return!(e==null||e.x===void 0||e.y===void 0)}function L(e){return!(e==null||e.x===void 0||e.y===void 0||e.z===void 0)}function Dr(e){return L(e)&&e.z!==0?!1:e.x===0&&e.y===0}function Or(e){return L(e)&&!Number.isNaN(e.z)?!1:Number.isNaN(e.x)&&Number.isNaN(e.y)}var kr=Math.PI*2,Ar=(e,n=`mean`)=>{let r=0,i=0,a=NaN,o=0;if(n!==`mean`)throw Error(`Unknown averaging kind: '${n}' expected: 'mean'`);for(let n of e){if(r+=n.x,i+=n.y,`z`in n&&n.z!==void 0)a+=n.z;else if(Number.isNaN(a))throw Error(`List of points should all have Z property, or none`);o++}return r/=o,i/=o,Number.isNaN(a)?{x:r,y:i}:{x:r,y:i,z:a/o}};function jr(e,n={}){let r,i,a;switch(e){case`moving-average-light`:{let e=n.scaling??3;r=mr(e),i=mr(e),a=mr(e);break}default:throw Error(`Unknown averaging kind '${e}'. Expected: 'moving-average-light'`)}return e=>{let n=r(e.x),o=i(e.y);if(L(e)){let r=a(e.z);return Object.freeze({x:n,y:o,z:r})}else return Object.freeze({x:n,y:o})}}function Mr(e){return Array.isArray(e)?e.map(e=>Math.PI/180*e):Math.PI/180*e}function Nr(e){return e*1.111111}function Pr(e,n=!0){return n?e*.9%360:e*.9}function Fr(e){return e*63.6619772368}function Ir(e){return e*.0157079633}function Lr(e){return Array.isArray(e)?e.map(e=>e*180/Math.PI):e*180/Math.PI}function Rr(e){if(zr(e))return e;if(typeof e==`number`)return{value:e,unit:`deg`};e=e.toLowerCase();let n=`deg`,r=NaN;if(e.endsWith(`grad`)?(r=Number.parseFloat(e.substring(0,e.length-4)),n=`grad`):e.endsWith(`rad`)?(r=Number.parseFloat(e.substring(0,e.length-3)),n=`rad`):e.endsWith(`turn`)?(r=Number.parseFloat(e.substring(0,e.length-4)),n=`turn`):e.endsWith(`deg`)?(r=Number.parseFloat(e.substring(0,e.length-3)),n=`deg`):r=Number.parseFloat(e),Number.isNaN(r)){if(e===`n`)return{value:90,unit:`deg`};if(e===`e`)return{value:0,unit:`deg`};if(e===`s`)return{value:270,unit:`deg`};if(e===`w`)return{value:180,unit:`deg`};if(e===`ne`)return{value:45,unit:`deg`};if(e===`se`)return{value:315,unit:`deg`};if(e===`sw`)return{value:225,unit:`deg`};if(e===`nw`)return{value:135,unit:`deg`};throw Error(`Invalid angle (bad value?): '${e}'. If using cardinals, use: 'n', 'se', etc.`)}if(n.length===0)throw Error(`Invalid angle (no unit)`);return{value:r,unit:n}}function zr(e){return typeof e==`object`&&`unit`in e&&`value`in e?!(typeof e.unit!=`string`||typeof e.value!=`number`):!1}function Br(e,n){let r=typeof e==`object`?e:Rr(e);switch(n){case`deg`:if(r.unit===`deg`)return r;if(r.unit===`rad`)return{value:Lr(r.value),unit:`deg`};if(r.unit===`grad`)return{value:Pr(r.value),unit:`deg`};if(r.unit===`turn`)return{value:Vr(r.value),unit:`deg`};throw Error(`Unknown unit: ${r.unit}`);case`grad`:if(r.unit===`deg`)return{value:Nr(r.value),unit:`grad`};if(r.unit===`rad`)return{value:Fr(r.value),unit:`grad`};if(r.unit===`grad`)return r;if(r.unit===`turn`)return{value:Fr(Ur(r.value)),unit:`grad`};throw Error(`Unknown unit: ${r.unit}`);case`rad`:if(r.unit===`deg`)return{value:Mr(r.value),unit:`rad`};if(r.unit===`rad`)return r;if(r.unit===`grad`)return{value:Ir(r.value),unit:`rad`};if(r.unit===`turn`)return{value:Ur(r.value),unit:`rad`};throw Error(`Unknown unit: ${r.unit}`);case`turn`:if(r.unit===`deg`)return{value:Wr(r.value),unit:`turn`};if(r.unit===`rad`)return{value:Gr(r.value),unit:`turn`};if(r.unit===`grad`)return{value:Gr(Ir(r.value)),unit:`turn`};if(r.unit===`turn`)return r;throw Error(`Unknown unit: ${r.unit}`);default:throw Error(`Destination unit unknown ('${n}). Expects: deg, grad, rad or turn`)}}function Vr(e,n=!0){return n?e*360%360:e*360}function Hr(e){return e%=kr,e<0?e+kr:e}function Ur(e){return e*kr}function Wr(e){return e/360}function Gr(e){return e/kr}var Kr=Object.defineProperty,qr=(e,n,r)=>n in e?Kr(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,Jr=(e,n)=>{for(var r in n)Kr(e,r,{get:n[r],enumerable:!0})},Yr=(e,n,r)=>qr(e,typeof n==`symbol`?n:n+``,r),Xr={hsl:[`h`,`s`,`l`],oklab:[`l`,`a`,`b`],oklch:[`l`,`c`,`h`],rgb:[`r`,`g`,`b`]},Zr=[`hsl`,`oklab`,`oklch`,`rgb`],Qr=Math.PI/180,$r={l:[.3963377773761749,.2158037573099136],m:[-.1055613458156586,-.0638541728258133],s:[-.0894841775298119,-1.2914855480194092]},ei={l:[.4122214708,.5363325363,.0514459929],m:[.2119034982,.6806995451,.1073969566],s:[.0883024619,.2817188376,.6299787005]},ti={l:[.2104542553,.793617785,.0040720468],a:[1.9779984951,2.428592205,.4505937099],b:[.0259040371,.7827717662,.808675766]},ni={r:[4.076741636075958,-3.307711539258063,.2309699031821043],g:[-1.2684379732850315,2.609757349287688,-.341319376002657],b:[-.0041960761386756,-.7034186179359362,1.7076146940746117]},ri=5,ii=180/Math.PI,R={alpha:`alpha must be a number between 0 and 1`,alphaAdjustment:`alpha must be a number between -1 and 1`,amount:`amount must be a number between 0 and 100`,colorRequired:`color is required`,degreesRange:`degrees must be a number between -360 and 360`,hueArgs:`point, chroma and h are required`,hueRange:`hue must be a number between 0 and 360`,input:`input is required`,inputHex:`input is required and must be a hex`,inputNumber:`input is required and must be a number`,inputString:`input is required and must be a string`,invalid:`invalid input`,invalidColor:`invalid color`,invalidCSS:`invalid CSS string`,invalidHex:`invalid hex`,invalidKey:`invalid key`,invalidModel:`invalid model`,invalidRange:`color value out of range`,left:`left is required and must be a string`,lightnessRange:`lightness must be a number between 0 and 1`,options:`invalid options`,paletteSize:`palette size must be at least 2`,ratioRange:`ratio must be a number between 0 and 1`,right:`right is required and must be a string`,threshold:`threshold must be a number between 0 and 255`,thresholdNormalized:`threshold must be a number between 0 and 1`};function z(e,n){if(e)return;let r=Error(n||`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);throw r.name=`colorizr`,r}var ai={aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkslategrey:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,gold:`#ffd700`,goldenrod:`#daa520`,gray:`#808080`,grey:`#808080`,green:`#008000`,greenyellow:`#adff2f`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavender:`#e6e6fa`,lavenderblush:`#fff0f5`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightgrey:`#d3d3d3`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightslategrey:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,slategrey:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`},oi=/^#(?:[\da-f]{3,4}|[\da-f]{6,8})$/i;function si(e){return Array.isArray(e)&&e.length===6}function B(e){return V(e)?oi.test(e):!1}function ci(e){if(!mi(e))return!1;let n=Object.entries(e);return!!n.length&&n.every(([e,n])=>e===`h`?n>=0&&n<=360:e===`alpha`?n>=0&&n<=1:Xr.hsl.includes(e)&&n>=0&&n<=100)}function li(e){if(!mi(e))return!1;let n=Object.entries(e);return!!n.length&&n.every(([e,n])=>e===`l`?n>=0&&n<=100:e===`alpha`?n>=0&&n<=1:Xr.oklab.includes(e)&&n>=-1&&n<=1)}function ui(e){if(!mi(e))return!1;let n=Object.entries(e);return!!n.length&&n.every(([e,n])=>e===`l`?n>=0&&n<=100:e===`alpha`?n>=0&&n<=1:Xr.oklch.includes(e)&&n>=0&&n<=(e===`h`?360:1))}function di(e){return V(e)&&Object.keys(ai).includes(e.toLowerCase())}function fi(e){return typeof e==`number`&&!Number.isNaN(e)}function pi(e,n,r){return fi(e)&&e>=n&&e<=r}function mi(e){if(!e)return!1;let{toString:n}=Object.prototype,r=Object.getPrototypeOf(e);return n.call(e)===`[object Object]`&&(r===null||r===Object.getPrototypeOf({}))}function hi(e){if(!mi(e))return!1;let n=Object.entries(e);return!!n.length&&n.every(([e,n])=>e===`alpha`?n>=0&&n<=1:Xr.rgb.includes(e)&&n>=0&&n<=255)}function V(e,n=!0){let r=typeof e==`string`;return n?r&&!!e.trim().length:r}function gi(e){return ci(e)||hi(e)||li(e)||ui(e)}function _i(e){z(B(e),R.inputHex);let n=e.replace(`#`,``);if(n.length===3||n.length===4){let e=[...n];n=``,e.forEach(e=>{n+=`${e}${e}`})}let r=`#${n}`;return z(B(r),R.invalidHex),r}function H(e,n){z(gi(e),R.invalid);let r=n;return r===void 0||(r>1&&(r/=100),r===1)?e:{...e,alpha:r}}function vi(e,n=0,r=100){return Math.min(Math.max(e,n),r)}function yi(e,n){z(fi(e),R.inputNumber);let r=e+n;return r>360&&(r%=360),r<0&&(r+=360),Math.abs(r)}function bi(e){if(!Array.isArray(e))return e.alpha}function xi(e,n,r){switch(z(fi(e),R.inputNumber),z(Zr.includes(n),`${R.invalidModel}${n?`: ${n}`:``}`),z(Xr[n].includes(r),`${R.invalidKey}${r?`: ${r}`:``}`),n){case`hsl`:return z(Xr.hsl.includes(r),R.invalidKey),[`l`,`s`].includes(r)?vi(e):vi(e,0,360);case`rgb`:return z(Xr.rgb.includes(r),R.invalidKey),vi(e,0,255);default:throw Error(`Invalid inputs`)}}function Si(e,n){let r=Xr[n],i={hsl:ci,oklab:li,oklch:ui,rgb:hi};z(mi(e)||Array.isArray(e),R.invalid);let a=Array.isArray(e)?{[r[0]]:e[0],[r[1]]:e[1],[r[2]]:e[2]}:e;return z(i[n](a),`${R.invalidColor}: ${n}`),a}function Ci(e,n=ri,r=!0){let i=new Map(Object.entries(e));for(let[e,a]of i.entries())i.set(e,U(a,n,r));return Object.fromEntries(i)}function U(e,n=2,r=!0){if(!fi(e)||e===0)return 0;if(r){let r=10**n;return Math.round(e*r)/r}let i=Math.abs(Math.ceil(Math.log(Math.abs(e))/Math.LN10));i===0?i=2:i>n&&(i=n);let a=n-(i<0?0:i);a<=1&&n>1?a=2:(a>n||a===0)&&(a=n);let o=10**a;return Math.round(e*o)/o}function wi(e,n){return z(B(e),R.inputHex),z(pi(n,0,1),R.alpha),n>=1?Di(e):`${Di(e)}${Ti(n)}`}function Ti(e){z(fi(e),R.inputNumber);let n=e;return e>1&&(n/=100),Math.round(n*255).toString(16).padStart(2,`0`)}function Ei(e){z(B(e),R.inputString);let n=e.substring(7,9);return n?U(parseInt(n,16)/255):1}function Di(e){return z(B(e),R.inputHex),e.length===5?e.substring(0,4):e.substring(0,7)}function Oi(e){z(B(e),R.inputHex);let n=_i(e).slice(1),r=Ei(e);return H({r:parseInt(n.charAt(0)+n.charAt(1),16),g:parseInt(n.charAt(2)+n.charAt(3),16),b:parseInt(n.charAt(4)+n.charAt(5),16)},r)}var ki={};Jr(ki,{hex2hsl:()=>ji,hex2oklab:()=>Ii,hex2oklch:()=>Vi,hex2rgb:()=>Oi,hsl2hex:()=>Gi,hsl2oklab:()=>Ki,hsl2oklch:()=>qi,hsl2rgb:()=>Ui,oklab2hex:()=>Zi,oklab2hsl:()=>Qi,oklab2oklch:()=>zi,oklab2rgb:()=>Xi,oklch2hex:()=>ra,oklch2hsl:()=>ia,oklch2oklab:()=>ta,oklch2rgb:()=>na,rgb2hex:()=>Wi,rgb2hsl:()=>Ai,rgb2oklab:()=>Fi,rgb2oklch:()=>Bi});function Ai(e){let n=Si(e,`rgb`),r=bi(e),i=xi(n.r,`rgb`,`r`)/255,a=xi(n.g,`rgb`,`g`)/255,o=xi(n.b,`rgb`,`b`)/255,s=Math.min(i,a,o),c=Math.max(i,a,o),l=c-s,u=0,d,f=(c+s)/2,p;switch(c){case i:p=l?(a-o)/l:0,u=60*p;break;case a:p=(o-i)/l,u=60*p+120;break;case o:p=(i-a)/l,u=60*p+240;break;default:break}return u<0&&(u=360+u),d=s===c?0:f<.5?l/(2*f):l/(2-2*f),H({h:Math.abs(+(u%360).toFixed(2)),s:+(d*100).toFixed(2),l:+(f*100).toFixed(2)},r)}function ji(e){z(B(e),R.inputHex);let n=Ei(e);return H(Ai(Oi(e)),n)}var{cbrt:Mi,sign:Ni}=Math;function Pi(e){let n=Math.abs(e);return n<.04045?e/12.92:(Ni(e)||1)*((n+.055)/1.055)**2.4}function Fi(e,n=ri){let r=Si(e,`rgb`),i=bi(e),[a,o,s]=[Pi(r.r/255),Pi(r.g/255),Pi(r.b/255)],c=Mi(ei.l[0]*a+ei.l[1]*o+ei.l[2]*s),l=Mi(ei.m[0]*a+ei.m[1]*o+ei.m[2]*s),u=Mi(ei.s[0]*a+ei.s[1]*o+ei.s[2]*s);return H(Ci({l:ti.l[0]*c+ti.l[1]*l-ti.l[2]*u,a:ti.a[0]*c-ti.a[1]*l+ti.a[2]*u,b:ti.b[0]*c+ti.b[1]*l-ti.b[2]*u},n),i)}function Ii(e,n){z(B(e),R.inputHex);let r=Ei(e);return H(Fi(Oi(e),n),r)}var{atan2:Li,sqrt:Ri}=Math;function zi(e,n){let{l:r,a:i,b:a}=Ci(Si(e,`oklab`)),o=bi(e),s=Ri(i**2+a**2),c=(Li(a,i)*ii+360)%360;return U(s*1e4)===0&&(c=0),H(Ci({l:r,c:s,h:c},n),o)}function Bi(e,n){let r=Si(e,`rgb`),i=bi(e);return H(zi(Fi(r,n),n),i)}function Vi(e,n){z(B(e),R.inputHex);let r=Ei(e);return H(Bi(Oi(e),n),r)}function Hi(e,n,r){z(fi(e)&&fi(n)&&fi(r),R.hueArgs);let i=r;return i<0&&(i+=1),i>1&&--i,U(i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e,4)}function Ui(e){let n=Si(e,`hsl`),r=bi(e),i=U(n.h)/360,a=U(n.s)/100,o=U(n.l)/100,s,c,l,u,d;return a===0?(s=o,c=o,l=o):(d=o<.5?o*(1+a):o+a-o*a,u=2*o-d,s=Hi(u,d,i+1/3),c=Hi(u,d,i),l=Hi(u,d,i-1/3)),H({r:Math.round(s*255),g:Math.round(c*255),b:Math.round(l*255)},r)}function Wi(e){let n=Si(e,`rgb`),r=bi(e),i=`#${[n.r,n.g,n.b].map(e=>`0${Math.floor(e).toString(16)}`.slice(-2)).join(``)}`;return r!==void 0&&r<1?wi(i,r):i}function Gi(e){let n=Si(e,`hsl`),r=bi(e),i=Wi(Ui(n));return r!==void 0&&r<1?wi(i,r):i}function Ki(e,n){let r=Si(e,`hsl`),i=bi(e);return H(Fi(Ui(r),n),i)}function qi(e,n){let r=Si(e,`hsl`),i=bi(e);return H(Bi(Ui(r),n),i)}var{abs:Ji}=Math;function Yi(e){let n=Ji(e);return n>.0031308?(e<0?-1:1)*(n**(1/2.4)*1.055-.055):e*12.92}function Xi(e,n=0){let{l:r,a:i,b:a}=Si(e,`oklab`),o=bi(e),s=(r+$r.l[0]*i+$r.l[1]*a)**3,c=(r+$r.m[0]*i+$r.m[1]*a)**3,l=(r+$r.s[0]*i+$r.s[1]*a)**3,u=255*Yi(ni.r[0]*s+ni.r[1]*c+ni.r[2]*l),d=255*Yi(ni.g[0]*s+ni.g[1]*c+ni.g[2]*l),f=255*Yi(ni.b[0]*s+ni.b[1]*c+ni.b[2]*l);return H({r:vi(U(u,n),0,255),g:vi(U(d,n),0,255),b:vi(U(f,n),0,255)},o)}function Zi(e){let n=Si(e,`oklab`),r=bi(e),i=Wi(Xi(n));return r!==void 0&&r<1?wi(i,r):i}function Qi(e){let n=Si(e,`oklab`),r=bi(e);return H(Ai(Xi(n)),r)}var{sin:$i,cos:ea}=Math;function ta(e,n){let{l:r,c:i,h:a}=Si(e,`oklch`),o=bi(e);return(Number.isNaN(a)||a<0)&&(a=0),H(Ci({l:r,a:i*ea(a*Qr),b:i*$i(a*Qr)},n),o)}function na(e,n=0){let r=Si(e,`oklch`),i=bi(e);return H(Xi(ta(r),n),i)}function ra(e){let n=Si(e,`oklch`),r=bi(e),i=Wi(na(n));return r!==void 0&&r<1?wi(i,r):i}function ia(e){let n=Si(e,`oklch`),r=bi(e);return H(Ai(na(n)),r)}var aa=`(rgb|hsl|oklab|oklch)a?`,oa=`(?:\\s*[,/]\\s*|\\s+)`,sa=`(none|[\\d%.-]+(?:deg|grad|rad|turn)?)`,ca=RegExp(`${aa}\\s*\\(\\s*${sa}${oa}${sa}${oa}${sa}(?:${oa}${sa})?\\s*\\)`,`i`);function la(e){let n=parseFloat(e),r;return r=e.endsWith(`grad`)?n*.9:e.endsWith(`rad`)?180/Math.PI*n:e.endsWith(`turn`)?n*360:n,Math.round(r*1e5)/1e5}function ua(e){if(z(V(e),R.inputString),B(e)){let n=Xr.rgb,{r,g:i,b:a}=Oi(e),o=Ei(e);return{model:`rgb`,[n[0]]:r,[n[1]]:i,[n[2]]:a,alpha:o<1?o:void 0}}let n=ca.exec(e);z(si(n),R.invalidCSS);let r=n[1],i=Xr[r],a=n[5]?parseFloat(n[5]):1;a>1&&(a/=100);let o=(e,n)=>{if(e===`none`)return 0;if(r===`hsl`&&n===0||r===`oklch`&&n===2)return la(e);let i=parseFloat(e);if(!e.includes(`%`))return i;if(r===`oklch`){if(n===1)return i*.4/100}else if(r===`oklab`&&(n===1||n===2))return i*.4/100;return i},s=[o(n[2],0),o(n[3],1),o(n[4],2)];return r===`oklab`?(z(s[1]>=-.4&&s[1]<=.4,R.invalidRange),z(s[2]>=-.4&&s[2]<=.4,R.invalidRange)):r===`oklch`&&z(s[1]>=0&&s[1]<=.4,R.invalidRange),{model:r,[i[0]]:s[0],[i[1]]:s[1],[i[2]]:s[2],alpha:a<1?a:void 0}}var da={oklab:Qi,oklch:ia,rgb:Ai},fa={hsl:Ki,oklch:ta,rgb:Fi},pa={hsl:qi,oklab:zi,rgb:Bi},ma={hsl:Ui,oklab:Xi,oklch:na},ha={hsl:Gi,oklab:Zi,oklch:ra,rgb:Wi},ga={hsl:ji,oklab:Ii,oklch:Vi,rgb:Oi},_a={hsl:da,oklab:fa,oklch:pa,rgb:ma};function va(e,n){let{alpha:r,model:i,...a}=ua(e);[`oklab`,`oklch`].includes(i)&&a.l>1&&(a.l=U(a.l/100,ri));let o=Object.values(a);if(n===`hex`){let e=r?Ti(r):``;return`${ha[i](o)}${e}`}let s=_a[n]?.[i];return H(s?s(o):a,r)}function ya(e,n){let r=Ei(e);return n===`hex`?`${Di(e)}${r===1?``:Ti(r)}`:H(ga[n](e),r)}function W(e,n){z(V(e),R.inputString);let r=di(e)?ai[e.toLowerCase()]:e,i=n??(B(r)?`hex`:ua(r).model);return B(r)?ya(r,i):va(r,i)}var ba=2.4,xa=.56,Sa=.57,Ca=.65,wa=.62,Ta=.2126729,Ea=.7151522,Da=.072175,Oa=.022,ka=1.414,Aa=1.14,ja=1.14,Ma=.027,Na=.027,Pa=.1,Fa=5e-4;function Ia(e){return e>Oa?e:e+(Oa-e)**ka}function La(e,n,r){return Ta*(e/255)**ba+Ea*(n/255)**ba+Da*(r/255)**ba}function Ra(e,n){z(V(e),R.inputString),z(V(n),R.inputString);let r=Oi(W(e,`hex`)),i=Oi(W(n,`hex`)),a=Ia(La(i.r,i.g,i.b)),o=Ia(La(r.r,r.g,r.b));if(Math.abs(o-a)<Fa)return 0;let s=o>a?(o**xa-a**Sa)*Aa:(o**Ca-a**wa)*ja;return Math.abs(s)<Pa?0:U(s>0?(s-Ma)*100:(s+Na)*100,5)}function za(e,n,r=ri){z(V(e),R.left),z(V(n),R.right);let i=W(e,`rgb`),a=W(n,`rgb`),o=(i.r*299+i.g*587+i.b*114)/1e3,s=(a.r*299+a.g*587+a.b*114)/1e3;return U(Math.abs(s-o),r)}function Ba(e){z(V(e),R.inputString);let{r:n,g:r,b:i}=W(e,`rgb`);return U((Math.max(n,r,i)-Math.min(n,r,i))/255,4)}function Va(e,n){z(V(e),R.left),z(V(n),R.right);let r=W(e,`rgb`),i=W(n,`rgb`);return Math.max(r.r,i.r)-Math.min(r.r,i.r)+(Math.max(r.g,i.g)-Math.min(r.g,i.g))+(Math.max(r.b,i.b)-Math.min(r.b,i.b))}function Ha(e){z(V(e),R.inputString);let{r:n,g:r,b:i}=W(e,`rgb`),a=[n/255,r/255,i/255];for(let e=0;e<a.length;e++)a[e]<=.04045?a[e]/=12.92:a[e]=((a[e]+.055)/1.055)**2.4;return U(.2126*a[0]+.7152*a[1]+.0722*a[2],4)}function Ua(e,n){z(V(e),R.left),z(V(n),R.right);let r=Ha(e),i=Ha(n);return U(r>=i?(r+.05)/(i+.05):(i+.05)/(r+.05))}function Wa(e,n){z(V(e),R.left),z(V(n),R.right);let r=Va(e,n),i=Ua(e,n),a=za(e,n),o=a>=125,s=r>=500,c=0;return o&&s?c=2:(o||s)&&(c=1),{brightnessDifference:a,colorDifference:r,compliant:c,contrast:i,largeAA:i>=3,largeAAA:i>=4.5,normalAA:i>=4.5,normalAAA:i>=7}}function Ga(e){if(B(e)||di(e))return`hex`;if(ci(e))return`hsl`;if(li(e))return`oklab`;if(ui(e))return`oklch`;if(hi(e))return`rgb`;throw Error(R.invalid)}function Ka(e,n){let r=di(e)?ai[e.toLowerCase()]:e,i=Ga(r);if(i===n)return r;let a=ki[`${i}2${n}`];if(!a)throw Error(`Converter not found for ${i} to ${n}`);return a(r)}function qa(e,n={}){z(B(e)||gi(e),R.invalid);let{alpha:r,format:i=`hex`,precision:a=ri,separator:o=` `}=n,s=r&&r!==1?`${U(r*100)}%`:null,c=[],l=o;switch(i){case`hsl`:{let{h:n,s:r,l:i}=Ka(e,`hsl`);c=[n,`${r}%`,`${i}%`];break}case`oklab`:{l=` `;let{l:n,a:r,b:i}=Ci(Ka(e,`oklab`),a);c=[`${U(n*100,a)}%`,r,i];break}case`oklch`:{l=` `;let{l:n,c:r,h:i}=Ci(Ka(e,`oklch`),a);c=[`${U(n*100,a)}%`,r,i];break}case`rgb`:{let{r:n,g:r,b:i}=Ka(e,`rgb`);c=[n,r,i];break}default:{let n=Di(Ka(e,`hex`));return r&&r!==1?`${n}${Ti(r)}`:n}}return`${i}(${c.join(l)}${s?` / ${s}`:``})`}function Ja(e,n,r){return(i,a)=>{z(V(i),R.inputString),z(pi(a,0,100),R.amount);let o=W(i,`hsl`),s=B(i)||di(i)?`hex`:ua(i).model;return qa({...o,[e]:vi(o[e]+(n===`+`?a:-a),0,100)},{format:r??s})}}function Ya(e,n,r){return Ja(`l`,`-`,r)(e,n)}function Xa(e,n,r){return Ja(`s`,`-`,r)(e,n)}function Za(e,n){z(V(e),R.inputString);let r=B(e)||di(e)?`hex`:ua(e).model,i=W(e,`oklch`);return qa({...i,c:0},{format:n??r,alpha:i.alpha})}function Qa(e,n,r){z(V(e),R.inputString),z(pi(n,-360,360),R.degreesRange);let i=W(e,`hsl`),a=B(e)||di(e)?`hex`:ua(e).model;return qa({...i,h:yi(i.h,n)},{format:r??a})}function $a(e){z(V(e),R.inputString);let n=B(e)||di(e)?`hex`:ua(e).model;return qa(Qa(W(e,`hex`),180),{format:n})}function eo(e,n,r){return Ja(`l`,`+`,r)(e,n)}function to(e,n,r,i,a){if(r<1e-4)return n;if(i<1e-4)return e;let o=n-e;o>180?o-=360:o<-180&&(o+=360);let s=e+o*a;return s<0?s+=360:s>=360&&(s-=360),s}function no(e,n,r=.5,i){z(V(e),R.inputString),z(V(n),R.inputString),z(pi(r,0,1),R.ratioRange);let a=B(e)||di(e)?`hex`:ua(e).model,o=W(e,`oklch`),s=W(n,`oklch`),c=o.l+(s.l-o.l)*r,l=o.c+(s.c-o.c)*r,u=to(o.h,s.h,o.c,s.c,r),d=o.alpha??1,f=d+((s.alpha??1)-d)*r;return qa({l:c,c:l,h:u},{format:i??a,alpha:f<1?f:void 0})}function ro(e){z(!!e,R.input);let n={};if(V(e)){let{alpha:r=1}=ua(e),i=B(e)?`hex`:ua(e).model;n.hex=wi(W(e,`hex`),r),n.hsl=H(W(e,`hsl`),r),n.oklab=H(W(e,`oklab`),r),n.oklch=H(W(e,`oklch`),r),n.rgb=H(W(e,`rgb`),r),n.alpha=r,n.type=i}else if(mi(e)){let{alpha:r=1}=e;if(ci(e))n.hsl={h:xi(e.h,`hsl`,`h`),s:xi(e.s,`hsl`,`s`),l:xi(e.l,`hsl`,`l`)},n.rgb=Ui(n.hsl),n.oklab=Ki(n.hsl),n.oklch=qi(n.hsl),n.type=`hsl`;else if(li(e))n.hsl=Qi(e),n.oklab=e,n.oklch=zi(e),n.rgb=Xi(e),n.type=`oklab`;else if(ui(e))n.hsl=ia(e),n.oklab=ta(e),n.oklch=e,n.rgb=na(e),n.type=`oklch`;else if(hi(e))n.rgb={r:xi(e.r,`rgb`,`r`),g:xi(e.g,`rgb`,`g`),b:xi(e.b,`rgb`,`b`)},n.hsl=Ai(n.rgb),n.oklab=Fi(n.rgb),n.oklch=Bi(n.rgb),n.type=`rgb`;else throw Error(`invalid color`);n.hex=wi(Gi(n.hsl),r),n.hsl=H(n.hsl,r),n.oklab=H(n.oklab,r),n.oklch=H(n.oklch,r),n.rgb=H(n.rgb,r),n.alpha=r}else throw Error(R.input);return n}function io(e,n,r){z(V(e),R.inputString),z(pi(n,0,1),R.alpha);let i=B(e)||di(e)?`hex`:ua(e).model;return qa(W(e,`rgb`),{format:r??i,alpha:n})}function ao(e){if(z(V(e),R.inputString),B(e))return Ei(e);if(Object.keys(ai).includes(e))return 1;let{alpha:n}=ua(e);return n||1}function oo(e,n,r,i){return e>=n?r:i}function so(e,n={}){let{darkColor:r=`#000000`,lightColor:i=`#ffffff`,method:a=`yiq`,threshold:o}=n;switch(z(V(e),R.inputString),a){case`yiq`:{let n=o??128;z(n>=0&&n<=255,R.threshold);let{r:a,g:s,b:c}=Oi(W(e,`hex`));return(a*299+s*587+c*114)/1e3>=n?r:i}case`wcag`:{let n=o??.5;return z(n>=0&&n<=1,R.thresholdNormalized),Ha(e)>=n?r:i}case`contrast`:return oo(Ua(r,e),Ua(i,e),r,i);case`oklab`:{let n=o??.5;z(n>=0&&n<=1,R.thresholdNormalized);let{l:a}=Ii(W(e,`hex`));return a>=n?r:i}case`apca`:return oo(Math.abs(Ra(e,r)),Math.abs(Ra(e,i)),r,i);default:throw Error(`Unknown method: ${a}`)}}function co(e,n,r){return Ja(`s`,`+`,r)(e,n)}function lo(e,n,r){return z(V(e),R.inputString),z(pi(n,-1,1),R.alphaAdjustment),qa(W(e,`oklab`),{format:r,alpha:U(vi(ao(e)-n,0,1))})}var uo=class{constructor(e,n={}){Yr(this,`alpha`),Yr(this,`hex`),Yr(this,`hsl`),Yr(this,`oklab`),Yr(this,`oklch`),Yr(this,`rgb`),Yr(this,`type`),z(!!e,R.colorRequired);let{alpha:r,hex:i,hsl:a,oklab:o,oklch:s,rgb:c,type:l}=ro(e);this.hex=i,this.hsl=a,this.oklab=o,this.oklch=s,this.rgb=c,this.alpha=r,this.type=n.format??l}get css(){return this.currentColor}get red(){return this.rgb.r}get green(){return this.rgb.g}get blue(){return this.rgb.b}get hue(){return this.hsl.h}get saturation(){return this.hsl.s}get lightness(){return this.hsl.l}get luminance(){return Ha(this.currentColor)}get chroma(){return Ba(this.currentColor)}get opacity(){return ao(this.currentColor)}get readableColor(){return so(this.currentColor)}get currentColor(){return qa(this[this.type],{format:this.type,alpha:this.alpha})}brightnessDifference(e){return za(this.currentColor,e)}colorDifference(e){return Va(this.currentColor,e)}compare(e){return Wa(this.currentColor,e)}contrast(e){return Ua(this.currentColor,e)}format(e,n){return qa(this.rgb,{alpha:this.alpha,format:e,precision:n})}lighten(e){return eo(this.currentColor,e)}darken(e){return Ya(this.currentColor,e)}saturate(e){return co(this.currentColor,e)}desaturate(e){return Xa(this.currentColor,e)}grayscale(){return Za(this.currentColor)}invert(){return $a(this.currentColor)}mix(e,n){return no(this.currentColor,e,n)}opacify(e=.9){return io(this.currentColor,e,this.type)}rotate(e){return Qa(this.currentColor,e)}transparentize(e=.1){return lo(this.currentColor,e,this.type)}};function fo(e,n){return qa(W(e,n),{format:n})}function po(e){return!(typeof e!=`object`||!(`h`in e)||!(`s`in e)||!(`l`in e)||!(`unit`in e)||!(`space`in e)||e.space!==`hsl`)}function mo(e){return typeof e!=`object`||!(`r`in e)||!(`g`in e)||!(`b`in e)||!(`space`in e)||!(`unit`in e)?!1:e.space===`srgb`}function ho(e){if(typeof e!=`object`)throw TypeError(`Param 'v' is expected to be an object, got: ${typeof e}`);if(`r`in e&&`g`in e&&`b`in e){if(!(`unit`in e))if(e.r<=1&&e.g<=1&&e.b<=1)e.unit=`scalar`;else if(e.r>255&&e.g<=255&&e.b<=255)return;else e.unit=`8bit`;return`space`in e||(e.space=`srgb`),e}}function go(e){if(`h`in e&&`s`in e&&`l`in e){if(!(`unit`in e))if(e.s<=1&&e.l<=1)e.unit=`scalar`;else if(e.s>100||e.l>100)return;else e.unit=`absolute`;return`space`in e||(e.space=`hsl`),e}}function _o(e){return typeof e!=`object`||!(`l`in e)||!(`c`in e)||!(`h`in e)||!(`unit`in e)||!(`space`in e)?!1:e.space===`lch`||e.space===`oklch`}function vo(e){return typeof e==`string`?!0:typeof e==`object`?!!(po(e)||_o(e)||mo(e)):!1}function yo(e,n,r=1){let i=-1,a=-1;n<e?(i=n-e,a=r-(e-n)):(i=n-e,a=i-r);let o=a>0?a:i,s=a>0?i:a;if(Math.abs(i)<Math.abs(a)){let e=a;a=i,i=e}return{long:i,short:a,forward:o,backward:s}}function bo(e){let n=e=>{let n=Math.floor(e).toString(16);return n.length===1?`0${n}`:n},r=`#${n(e.r)}${n(e.g)}${n(e.b)}`;return e.alpha!==void 0&&e.alpha!==255&&(r+=n(e.alpha)),r}function xo(e){return e%=1,e<0?(1-Math.abs(e))%1:e}var So=Sr({absolute:()=>Ro,changeLightness:()=>wo,fromCss:()=>Oo,fromHexString:()=>Do,generateScalar:()=>No,guard:()=>Fo,interpolator:()=>Io,parseCssHslFunction:()=>zo,scalar:()=>Lo,toAbsolute:()=>Mo,toCssString:()=>ko,toHexString:()=>Ao,toLibraryRgb:()=>Bo,toScalar:()=>Po,withOpacity:()=>Co});function Co(e,n){switch(e.unit){case`absolute`:return{...e,opacity:n((e.opacity??100)/100,e)*100};case`scalar`:return{...e,opacity:n(e.opacity??1,e)}}}function wo(e,n){let r=0;if(n.pdelta!==void 0)r=e.l+e.l*n.pdelta;else if(n.delta!==void 0)r=n.delta+e.l;else if(n.fixed!==void 0){if(n.fixed<0)throw TypeError(`Cannot use negative value with 'fixed'`);r=n.fixed}else throw TypeError(`Parameter 'amount' is missing 'delta/pdelta/fixed' properties`);return{...e,l:To(e,r,`l`)}}function To(e,n,r){return e.unit===`scalar`?n>1?n=1:n<0&&(n=0):n>100?n=100:n<0&&(n=0),n}var Eo=Object.freeze({h:0,s:0,l:0,opacity:0,unit:`absolute`,space:`hsl`});function Do(e,n={}){return jo(ji(e),n)}function Oo(e,n={}){if(e=e.toLowerCase(),e.startsWith(`hsla(`))throw Error(`hsla() not supported`);if(e.startsWith(`rgba(`))throw Error(`rgba() not supported`);if(e.startsWith(`#`))return Do(e,n);if(e.startsWith(`--`))try{e=ws(e)}catch(r){if(n.fallbackString!==void 0&&(e=n.fallbackString),n.fallbackColour!==void 0)return n.fallbackColour;throw r}if(e===`transparent`)return Eo;if(Ts[e]!==void 0)return Do(Ts[e],n);if(e.startsWith(`rgb(`))return jo(as(e),n);if(!e.startsWith(`hsl(`))try{e=fo(e,`hsl`)}catch(r){if(n.fallbackString)e=n.fallbackString;else throw r}try{let r=zo(e);return n.scalar?Po(r):Mo(r)}catch(e){if(n.fallbackColour)return n.fallbackColour;throw e}}function ko(e){let n=Mo(e),r=`hsl(${n.h}deg ${n.s}% ${n.l}%`;return`opacity`in n&&n.opacity!==void 0&&n.opacity<100&&(r+=` / ${n.opacity}%`),r+=`)`,r}function Ao(e){return bo(Bo(e))}function jo(e,n={}){if(e==null&&n.fallbackColour)return n.fallbackColour;let r=n.scalar??!0;return N(er(e.h,0,360,`h`),er(e.s,0,100,`s`),er(e.l,0,100,`l`),Qn(e.alpha??1,`alpha`)),r?Lo(e.h/360,e.s/100,e.l/100,e.alpha??1):Ro(e.h,e.s,e.l,(e.alpha??1)*100)}function Mo(e){if(typeof e==`string`)return Oo(e,{scalar:!1});if(mo(e))return Mo(jo(as(e),{scalar:!1}));let n=e;return Fo(n),n.unit===`absolute`?n:{h:n.h*360,s:n.s*100,l:n.l*100,opacity:(n.opacity??1)*100,unit:`absolute`,space:`hsl`}}function No(e,n=1,r=.5,i=1){typeof e==`string`&&e.startsWith(`--`)&&(e=getComputedStyle(document.body).getPropertyValue(e).trim());let a=Rr(e);if(n>1)throw TypeError(`Param 'saturation' must be between 0..1`);if(r>1)throw TypeError(`Param 'lightness' must be between 0..1`);if(i>1)throw TypeError(`Param 'opacity' must be between 0..1`);return{h:Br(a,`deg`).value/360,s:n,l:r,opacity:i,unit:`scalar`,space:`hsl`}}function Po(e){if(typeof e==`string`)return Oo(e,{scalar:!0});if(mo(e))return Po(jo(as(e),{scalar:!0}));let n=e;return Fo(n),n.unit===`scalar`?n:{h:n.h/360,s:n.s/100,l:n.l/100,opacity:(n.opacity??1)/100,unit:`scalar`,space:`hsl`}}function Fo(e){let{h:n,s:r,l:i,opacity:a,space:o,unit:s}=e;if(o!==`hsl`)throw Error(`Space is expected to be 'hsl'. Got: ${o}`);if(s===`absolute`)N(P(n,`finite`,`h`),er(r,0,100,`s`),er(i,0,100,`l`),()=>{if(typeof a==`number`)return er(a,0,100,`opacity`)});else if(s===`scalar`)N(P(n,`percentage`,`h`),P(r,`percentage`,`s`),P(i,`percentage`,`l`),()=>{if(typeof a==`number`)return P(a,`percentage`,`opacity`)});else throw Error(`Unit is expected to be 'absolute' or 'scalar'. Got: ${s}`)}function Io(e,n,r=`shorter`){e=Po(e),n=Po(n);let i=e.opacity??1,a=yo(e.h,n.h,1),o=r===`longer`?a.long:a.short,s=n.s-e.s,c=n.l-e.l,l=(n.opacity??1)-i;return n=>{n=lr(n);let r=fr(n,0,Math.abs(o));r=o<0?e.h-r:e.h+r;let a=fr(n,0,s),u=fr(n,0,c),d=fr(n,0,l);return Lo(xo(r),a+e.s,u+e.l,d+i)}}function Lo(e=.5,n=1,r=.5,i=1){let a={unit:`scalar`,space:`hsl`,h:e,s:n,l:r,opacity:i};return Fo(a),a}function Ro(e=200,n=100,r=50,i=100){let a={unit:`absolute`,space:`hsl`,h:e,s:n,l:r,opacity:i};return Fo(a),a}function zo(e){if(e.startsWith(`hsla`))throw Error(`hsla() is not supported`);if(!e.startsWith(`hsl(`))throw Error(`Expected hsl(..) CSS colour`);let n=e.indexOf(`(`),r=e.indexOf(`)`);if(r<n)throw Error(`Is hsl() not terminated? Missing ')'`);let i=e.substring(n+1,r).split(/[\s,]+/);if(i.length<3)throw Error(`Expected three tokens. Got: ${i.length} length`);let a=!1;i[0].endsWith(`%`)&&(a=!0),i[1].endsWith(`%`)&&i[2].endsWith(`%`)&&(a=!0);let o=(e,n)=>{if(e===`none`)return 0;if(e.endsWith(`%`))return Number.parseFloat(e.substring(0,e.length-1))/100;e.endsWith(`deg`)&&n===0&&(e=e.substring(0,e.length-3));let r=Number.parseFloat(e);return n===0?r/360:n===3?r:r/100},s=(e,n)=>{if(e===`none`)return 0;if(e.endsWith(`%`)){let r=Number.parseFloat(e.substring(0,e.length-1));return n===0?r*360:r}return e.endsWith(`deg`)&&n===0?Number.parseFloat(e.substring(0,e.length-3)):Number.parseFloat(e)};return i.length>3&&i[3]===`/`&&(i=[i[0],i[1],i[2],i[4]]),a?Lo(o(i[0],0),o(i[1],1),o(i[2],2),o(i[3]??`100%`,3)):Ro(s(i[0],0),s(i[1],1),s(i[2],2),s(i[3]??`100%`,3))}function Bo(e){return typeof e==`string`?Bo(Oo(e,{scalar:!1})):(e=Mo(e),{...Ui({h:e.h,s:e.s,l:e.l}),alpha:(e.opacity??100)/100*255})}var Vo=Sr({changeLightness:()=>$o,eightBit:()=>ts,fromCss:()=>Go,fromHexString:()=>Uo,guard:()=>Qo,interpolator:()=>is,lightness:()=>es,parseCssRgbFunction:()=>rs,scalar:()=>ns,to8bit:()=>Xo,toCssString:()=>qo,toHexString:()=>Ko,toLibraryHsl:()=>as,toScalar:()=>Zo,withOpacity:()=>Ho});function Ho(e,n){switch(e.unit){case`8bit`:return{...e,opacity:n((e.opacity??255)/255,e)*255};case`scalar`:return{...e,opacity:n(e.opacity??1,e)}}}function Uo(e,n=!0){return Yo(Oi(e),{scalar:n})}var Wo=Object.freeze({r:0,g:0,b:0,opacity:0,unit:`8bit`,space:`srgb`});function Go(e,n={}){if(e=e.toLowerCase(),e.startsWith(`hsla(`))throw Error(`hsla() not supported`);if(e.startsWith(`rgba(`))throw Error(`rgba() not supported`);let r=n.scalar??!0;if(e.startsWith(`#`))return Uo(e,r);if(e===`transparent`)return Wo;if(Ts[e]!==void 0)return Uo(Ts[e],r);if(e.startsWith(`hsl(`))return Yo(Bo(e),n);if(!e.startsWith(`rgb(`))try{e=fo(e,`rgb`)}catch(r){if(n.fallbackString)e=n.fallbackString;else throw r}try{let n=rs(e);return r?Zo(n):Xo(n)}catch(e){if(n.fallbackColour)return n.fallbackColour;throw e}}function Ko(e){return bo(Jo(e))}function qo(e){switch(Qo(e),e.unit){case`8bit`:return e.opacity===void 0||e.opacity===255?`rgb(${e.r} ${e.g} ${e.b})`:`rgb(${e.r} ${e.g} ${e.b} / ${(e.opacity??255)/255})`;case`scalar`:return e.opacity===void 0||e.opacity===1?`rgb(${e.r*100}% ${e.g*100}% ${e.b*100}%)`:`rgb(${e.r*100}% ${e.g*100}% ${e.b*100}% / ${(e.opacity??1)*100}%)`;default:throw Error(`Unknown unit: ${e.unit}`)}}function Jo(e){let n=Xo(e);return{r:n.r,g:n.g,b:n.b,alpha:n.opacity}}function Yo(e,n={}){return n.scalar?{r:e.r/255,g:e.g/255,b:e.b/255,opacity:e.alpha??1,unit:`scalar`,space:`srgb`}:{r:e.r,g:e.g,b:e.b,opacity:e.alpha??255,unit:`8bit`,space:`srgb`}}function Xo(e){return typeof e==`string`?Go(e,{scalar:!1}):po(e)?Xo(Yo(Bo(e),{scalar:!1})):(Qo(e),e.unit===`8bit`?e:{r:e.r*255,g:e.g*255,b:e.b*255,opacity:(e.opacity??1)*255,unit:`8bit`,space:`srgb`})}function Zo(e){return typeof e==`string`?Go(e,{scalar:!0}):po(e)?Zo(Yo(Bo(e),{scalar:!0})):(Qo(e),e.unit===`scalar`?e:{r:e.r/255,g:e.g/255,b:e.b/255,opacity:(e.opacity??1)/255,unit:`scalar`,space:`srgb`})}function Qo(e){let{r:n,g:r,b:i,opacity:a,space:o,unit:s}=e;if(o!==`srgb`)throw Error(`Space is expected to be 'srgb'. Got: ${o}`);if(s===`8bit`)N(er(n,0,255,`r`),er(r,0,255,`g`),er(i,0,255,`b`),()=>{if(typeof a==`number`)return er(a,0,255,`opacity`)});else if(s===`scalar`)N(P(n,`percentage`,`r`),P(r,`percentage`,`g`),P(i,`percentage`,`b`),()=>{if(typeof a==`number`)return P(a,`percentage`,`opacity`)});else throw Error(`Unit is expected to be '8bit' or 'scalar'. Got: ${s}`)}function $o(e,n){let r=0,i=new uo(qo(e)),a=e.unit===`scalar`;if(n.pdelta!==void 0)r=i.oklab.l+i.oklab.l*n.pdelta;else if(n.delta!==void 0)r=i.oklab.l+n.delta;else if(n.fixed!==void 0){if(n.fixed<0)throw TypeError(`Amount cannot be negative when using 'fixed'`);r=n.fixed}else throw TypeError(`Parameter 'amount' is missing 'pdelta/delta/fixed' properties`);return r<0?r=0:r>1&&(r=1),Yo(Xi({a:i.oklab.a,b:i.oklab.b,l:r,alpha:i.oklab.alpha}),{scalar:a})}function es(e){return new uo(qo(e)).oklab.l}function ts(e=100,n=100,r=100,i=255){let a={unit:`8bit`,space:`srgb`,r:e,g:n,b:r,opacity:i};return Qo(a),a}function ns(e=.5,n=.5,r=.5,i=1){let a={unit:`scalar`,space:`srgb`,r:e,g:n,b:r,opacity:i};return Qo(a),a}function rs(e){if(e.startsWith(`rgba`))throw Error(`RGBA is not supported`);if(!e.startsWith(`rgb(`))throw Error(`Expected rgb(..) CSS colour`);let n=e.indexOf(`(`),r=e.indexOf(`)`);if(r<n)throw Error(`Is rgb() not terminated? Missing ')'`);let i=e.substring(n+1,r).split(/[\s,]+/);if(i.length<3)throw Error(`Expected three tokens. Got: ${i.length} length`);let a=0;for(let e of i)e.endsWith(`%`)&&a++;let o=(e,n)=>e.endsWith(`%`)?Number.parseFloat(e.substring(0,e.length-1))/100:n<3?Number.parseFloat(e)/255:Number.parseFloat(e),s=(e,n)=>e.endsWith(`%`)?Number.parseFloat(e.substring(0,e.length-1))/100*255:n<3?Number.parseFloat(e):Number.parseFloat(e)*255;return i.length>3&&i[3]===`/`&&(i=[i[0],i[1],i[2],i[4]]),a>1?ns(o(i[0],0),o(i[1],1),o(i[2],2),o(i[3]??`1`,3)):ts(s(i[0],0),s(i[1],1),s(i[2],2),s(i[3]??`1`,3))}function is(e,n){let r=Zo(e),i=Zo(n),a=r.opacity??1,o=(i.opacity??1)-a,s=i.r-r.r,c=i.g-r.g,l=i.b-r.b;return e=>(e=lr(e),ns(r.r+fr(e,0,s),r.g+fr(e,0,c),r.b+fr(e,0,l),a+fr(e,0,o)))}function as(e){return typeof e==`string`?as(Go(e,{scalar:!1})):(e=Xo(e),{...Ai({r:e.r,g:e.g,b:e.b}),alpha:(e.opacity??255)/255})}var os=Sr({OKLCH_CHROMA_MAX:()=>ss,absolute:()=>Ss,fromCss:()=>fs,fromHexString:()=>us,fromLibrary:()=>ls,generateScalar:()=>vs,guard:()=>cs,interpolator:()=>bs,scalar:()=>xs,toAbsolute:()=>ps,toCssString:()=>gs,toHexString:()=>_s,toScalar:()=>ms,withOpacity:()=>ys}),ss=.4;function cs(e){let{l:n,c:r,h:i,opacity:a,space:o,unit:s}=e;if(o!==`oklch`)throw Error(`Space is expected to be 'oklch'. Got: ${o}`);if(s===`absolute`)N(Qn(n,`l`),()=>{if(typeof r==`number`)return er(r,0,ss,`c`)},()=>{if(typeof i==`number`)return er(i,0,360,`h`)},Qn(a??1,`opacity`));else if(s===`scalar`)N(Qn(n,`l`),Qn(r,`c`),Qn(i,`h`),Qn(e.opacity??1,`opacity`));else throw Error(`Unit is expected to be 'absolute' or 'scalar'. Got: ${s}`)}function ls(e,n={}){if(e==null&&n.fallbackColour)return n.fallbackColour;let r=n.scalar??!0;return N(Qn(e.l,`l`),Qn(e.c,`c`),er(e.h,0,360,`h`),Qn(e.alpha??1,`alpha`)),r?xs(e.l,e.c/ss,e.h/360,e.alpha??1):Ss(e.l,e.c,e.h,e.alpha??1)}function us(e,n={}){return ls(Vi(e),n)}var ds=Object.freeze({l:0,c:0,h:0,opacity:0,unit:`absolute`,space:`oklch`});function fs(e,n={}){if(e=e.toLowerCase(),e.startsWith(`#`))return us(e,n);if(e===`transparent`)return ds;if(Ts[e]!==void 0)return us(Ts[e],n);if(e.startsWith(`rgb(`)){let r=Xo(rs(e));return ls(Bi({r:r.r,g:r.g,b:r.b}),n)}if(!e.startsWith(`hsl(`)&&!e.startsWith(`oklch(`))try{e=fo(e,`oklch`)}catch(r){if(n.fallbackString)e=n.fallbackString;else throw r}let r=new uo(e).oklch;return ls(r,n)}function ps(e){return typeof e==`string`?ps(fs(e,{scalar:!0})):(cs(e),e.unit===`absolute`?e:{space:`oklch`,unit:`absolute`,l:e.l,c:e.c*ss,h:e.h*360,opacity:e.opacity})}function ms(e){if(typeof e==`string`)return ms(fs(e,{scalar:!0}));let n=e;return cs(n),n.unit===`scalar`?n:{l:n.l,c:n.c/ss,h:n.h/360,opacity:n.opacity??1,unit:`scalar`,space:`oklch`}}function hs(e){let n=ps(e);return{l:n.l,c:n.c,h:n.h,alpha:n.opacity}}function gs(e,n=3){cs(e);let{l:r,c:i,h:a,opacity:o}=e,s=``;switch(e.unit){case`absolute`:s=`oklch(${(r*100).toFixed(n)}% ${i.toFixed(n)} ${a.toFixed(n)}`;break;case`scalar`:s=`oklch(${r.toFixed(n)} ${(i*ss).toFixed(n)} ${(a*360).toFixed(n)}`;break}return o!==void 0&&o!==1&&(s+=` / ${o.toFixed(n)}`),s+=`)`,s}function _s(e){return bo(na(hs(e)))}function vs(e,n=1,r=.5,i=1){if(typeof e==`string`&&e.startsWith(`--`)&&(e=getComputedStyle(document.body).getPropertyValue(e).trim()),r>1)throw TypeError(`Param 'lightness' must be between 0..1`);if(n>1)throw TypeError(`Param 'chroma' must be between 0..1`);let a=Br(Rr(e),`deg`).value/360;if(i>1)throw TypeError(`Param 'opacity' must be between 0..1`);return{l:r,c:n,h:a,opacity:i,unit:`scalar`,space:`oklch`}}function ys(e,n){switch(e.unit){case`absolute`:return{...e,opacity:n((e.opacity??100)/100,e)*100};case`scalar`:return{...e,opacity:n(e.opacity??1,e)}}}function bs(e,n,r=`shorter`){e=ms(e),n=ms(n);let i=e.opacity??1,a=yo(e.h,n.h,1),o=r===`longer`?a.long:a.short,s=n.c-e.c,c=n.l-e.l,l=(n.opacity??1)-i;return n=>{n=lr(n);let r=fr(n,0,Math.abs(o));r=o<0?e.h-r:e.h+r;let a=fr(n,0,s),u=fr(n,0,c),d=fr(n,0,l);return xs(u+e.l,a+e.c,xo(r),d+i)}}function xs(e=.7,n=.1,r=.5,i=1){let a={unit:`scalar`,space:`oklch`,l:e,c:n,h:r,opacity:i};return cs(a),a}function Ss(e,n,r,i=1){let a={space:`oklch`,unit:`absolute`,opacity:i,l:e,c:n,h:r};return cs(a),a}var Cs=e=>{if(e.startsWith(`#`))return Uo(e,!0);if(e.startsWith(`--`)){let n=getComputedStyle(document.body).getPropertyValue(e).trim();if(n.length===0||n===null)throw Error(`Variable missing: ${e}`);return Cs(n)}let n=e.toLowerCase();if(Ts[n]!==void 0)return Uo(Ts[n],!0);if(n.startsWith(`hsl(`))return Oo(e,{scalar:!0});if(n.startsWith(`rgb(`))return Go(e,{scalar:!0});if(n.startsWith(`oklch(`))return fs(e,{scalar:!0});throw Error(`String colour is not a hex colour, CSS variable nor well-defined colour. Input: '${e}'`)};function ws(e,n){if(e.startsWith(`--`)){let r=getComputedStyle(document.body).getPropertyValue(e).trim();if(r.length===0||r===null){if(n!==void 0)return n;throw Error(`CSS variable missing: '${e}'`)}return ws(r)}return Ts[e]===void 0?e:Ts[e]}var Ts=Object.freeze({aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,gold:`#ffd700`,goldenrod:`#daa520`,gray:`#808080`,green:`#008000`,greenyellow:`#adff2f`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavender:`#e6e6fa`,lavenderblush:`#fff0f5`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`,transparent:`#00000000`});function Es(e,n){if(n===`hsl-scalar`){if(typeof e==`string`||po(e)||mo(e))return Po(e)}else if(n===`hsl-absolute`){if(typeof e==`string`||po(e))return Mo(e)}else if(n===`oklch-scalar`){if(typeof e==`string`||_o(e))return ms(e)}else if(n===`oklch-absolute`){if(typeof e==`string`||_o(e))return ps(e)}else if(n===`srgb-8bit`){if(typeof e==`string`||mo(e))return Xo(e)}else if(n===`srgb-scalar`){if(typeof e==`string`||mo(e))return Zo(e)}else throw Error(`Destination '${n}' not supported for input: ${JSON.stringify(e)}`);return Es(ks(e),n)}function Ds(e,n){return ks(Es(e,n))}function Os(e,n){if(n===`oklch`)return Es(e,`oklch-scalar`);if(n===`srgb`)return Es(e,`srgb-scalar`);if(n===`hsl`)return Es(e,`hsl-scalar`);throw Error(`Unknown destination: '${n}'`)}function ks(e){if(typeof e==`string`)return e;if(po(e))return ko(e);if(mo(e))return qo(e);if(_o(e))return gs(e);let n=ho(e);if(n)return qo(n);let r=go(e);if(r)return ko(r);throw Error(`Unknown colour format: '${JSON.stringify(e)}'`)}function As(e){if(po(e))return Ao(e);if(mo(e))return Ko(e);if(_o(e))return _s(e);if(typeof e==`string`)return e.startsWith(`#`)?e:Ko(Es(e,`srgb-8bit`));let n=ho(e);if(n)return Ko(n);let r=go(e);if(r)return Ao(r);throw Error(`Unknown colour format: '${JSON.stringify(e)}'`)}function js(e){return new uo(ks(e))}function Ms(e){switch(e.space){case`hsl`:Fo(e);break;case`srgb`:Qo(e);break;case`oklch`:cs(e);break;default:throw Error(`Unsupported colour space: '${e.space}'`)}}function Ns(e){if(!vo(e))throw Error(`Could not parse input. Expected CSS colour string or structured colour {r,g,b}, {h,s,l} etc. Got: ${JSON.stringify(e)}`);let n;if(n=typeof e==`string`?Cs(e):e,n===void 0)throw Error(`Could not parse input. Expected CSS colour string or structured colour {r,g,b}, {h,s,l} etc.`);return Ms(n),n}function Ps(...e){for(let n of e)if(n!=null)try{return ks(Ns(n))}catch{}return`rebeccapurple`}function Fs(e,n){let{r,g:i,b:a}=e,o=e.opacity??1;e.unit===`8bit`&&(r/=255,i/=255,a/=255);let s=Math.max(r,i,a),c=Math.min(r,i,a),l=(s+c)/2,u=l,d=l;if(s===c)return n?Lo(0,0,0,o):Ro(0,0,0,o);let f=s-c;switch(u=d>=.5?f/(2-(s+c)):f/(s+c),s){case r:l=((i-a)/f+0)*60;break;case i:l=((a-r)/f+2)*60;break;case a:l=((r-i)/f+4)*60;break}return n?Lo(l/360,u,d,o):Ro(l,u*100,d*100,o)}var Is=(e,n=.5,r=.75,i=1)=>(N(P(e,`positive`,`index`),P(n,`percentage`,`saturation`),P(r,`percentage`,`lightness`),P(i,`percentage`,`alpha`)),ko(Lo(e*137.508%360/360,n,r,i))),Ls=(e=Math.random)=>e()*360;function Rs(e,n={}){let r=n.direction??`shorter`,i=n.destination??`oklch-scalar`,a=n.space??`oklch`,o=zs(e,a),s=o.map(e=>Hs(e[0],e[1],{space:a,direction:r,destination:i})),c=e.map(e=>Es(e,i));return e=>{if(e>=1)return c.at(-1);if(e<=0)return c.at(0);let n=vr(e,0,1,0,o.length),r=Math.floor(n),i=n-r,a=s[r];return a(i)}}function zs(e,n=`hsl`){if(!Array.isArray(e))throw Error(`Param 'colours' is not an array as expected. Got: ${typeof e}`);if(e.length<2)throw Error(`Param 'colours' should be at least two in length. Got: ${e.length}`);return[...sr(e.map(e=>Os(e,n)))]}function Bs(e){return`linear-gradient(to right, ${e.map(e=>ks(e)).join(`, `)})`}function Vs(e,n,r={}){let i=Hs(e,n,r);return e=>ks(i(e))}function Hs(e,n,r={}){let i=r.space??`oklch`,a=r.direction??`shorter`,o=r.destination??`oklch-scalar`,s;switch(i){case`hsl`:{let r=Io(Es(e,`hsl-scalar`),Es(n,`hsl-scalar`),a);s=e=>Es(r(e),o);break}case`srgb`:{let r=is(Es(e,`srgb-scalar`),Es(n,`srgb-scalar`));s=e=>Es(r(e),o);break}default:{let r=bs(Es(e,`oklch-scalar`),Es(n,`oklch-scalar`),a);s=e=>Es(r(e),o)}}return e=>s(e)}function Us(e,n={}){let r=n.direction??`shorter`,i=n.space??`oklch`,a=zs(e,i),o=0;if(typeof n.stepsBetween==`number`){if(o=n.stepsBetween,o<1)throw Error(`Param 'stepsBetween' must be at least 1`)}else if(typeof n.stepsTotal==`number`){if(n.stepsTotal<=e.length)throw Error(`Param 'stepsTotal' must be greater than number of provided colour stops (${e.length}) +1 per stop`);let r=n.stepsTotal-e.length;o=Math.floor(r/a.length)}let s=a.map(e=>{let n=Ws(e[0],e[1],{steps:o,space:i,direction:r,exclusive:!0});return n.push(e[1]),n}),c=a[0];return s.unshift([c[0]]),s.flat().map(e=>ks(e))}function Ws(e,n,r={}){let i=r.exclusive??!1,a=r.steps??5,o=r.space??`oklch`,s=r.direction??`shorter`;if(!i&&a<2)throw Error(`Param 'steps' should be at least 2 when 'exclusive' is false`);if(i&&a<1)throw Error(`Param 'steps' should be at least 1 when 'exlusive' is true`);let c=Os(e,o),l=Os(n,o),u;switch(o){case`hsl`:u=Io(c,l,s);break;case`oklch`:u=bs(c,l,s);break;case`srgb`:u=is(c,l);break;default:throw Error(`Colour space '${o}' not supported for interpolation.`)}if(!u)throw Error(`Could not create interpolator for space: ${o}`);let d=0,f=0,p=1;i?(d=1/(a+1),f=d,p=1-d):d=1/(a-1);let m=[];for(let e=f;e<=p;e+=d)m.push(u(e));return m}function Gs(e,n){return Ks(e,e=>lr(e*n))}function Ks(e,n){let r=Ns(e),i;switch(r.space){case`hsl`:i=Co(r,n);break;case`srgb`:i=Ho(r,n);break;case`oklch`:i=ys(r,n);break;default:throw Error(`Unknown space: '${r.space}'. Expected hsl, srgb, oklch`)}if(!i)throw Error(`Is colour in correct form?`);return typeof e==`string`?ks(i):i}function qs(e,n){let r=Ns(e);return r.opacity=n,typeof e==`string`?ks(r):r}function Js(e){return e.r<<16|e.g<<8|e.b}function Ys(e){if(e>16777215)throw TypeError(`Param 'colour' is out of range. Expected max value of 16_777_215, got ${e}`);return{r:e>>16&255,g:e>>8&255,b:e&255,unit:`8bit`,space:`srgb`}}function Xs(e){let n=e.r>>3&31,r=e.g>>2&63,i=e.b>>3&31;return n<<11|r<<5|i}function Zs(e){if(e>65535)throw TypeError(`Param 'colour' is out of range. Expected max: 65_535. Got: ${e}`);return{r:(e>>11&31)<<3,g:(e>>5&63)<<2,b:(e&31)<<3,unit:`8bit`,space:`srgb`}}var Qs=Sr({eightBit:()=>$s,fromCss:()=>ac,fromHexString:()=>ic,fromSrgTo8bit:()=>tc,guard:()=>sc,scalar:()=>ec,to8bit:()=>rc,toHexString:()=>cc,toScalar:()=>oc,toSrgb8bit:()=>nc});function $s(e=100,n=100,r=100,i=255){let a={unit:`8bit`,space:`ycbcr`,y:e,cb:n,cr:r,opacity:i};return sc(a),a}function ec(e=.5,n=.5,r=.5,i=1){let a={unit:`scalar`,space:`ycbcr`,y:e,cb:n,cr:r,opacity:i};return sc(a),a}function tc(e){let{r:n,g:r,b:i,opacity:a}=Xo(e);return $s(.299*n+.587*r+.114*i+0,-.169*n+-.331*r+.5*i+128,.5*n+-.419*r+-.081*i+128,a)}function nc(e){let{y:n,cb:r,cr:i,opacity:a}=rc(e);return{unit:`8bit`,space:`srgb`,r:1*n+0*(r-128)+1.4*(i-128),g:1*n+-.343*(r-128)+-.711*(i-128),b:1*n+1.765*(r-128)+0*(i-128),opacity:a}}function rc(e){if(sc(e),e.unit===`8bit`)return e;let{y:n,cb:r,cr:i,opacity:a}=e;return $s(n*255,r*255,i*255,typeof a==`number`?a*255:255)}function ic(e,n={}){return tc(Uo(e,!1))}function ac(e,n={}){let r=n.scalar??!1,i=Go(e,{fallbackString:n.fallbackString,scalar:!1,ensureSafe:n.ensureSafe});return r?oc(tc(i)):tc(i)}function oc(e){if(typeof e==`string`)return ac(e,{scalar:!0});if(po(e)||mo(e))return oc(tc(Zo(e)));if(sc(e),e.unit===`scalar`)return e;let{y:n,cb:r,cr:i,opacity:a}=e;return ec(n/255,r/255,i/255,typeof a==`number`?a/255:1)}function sc(e){let{y:n,cb:r,cr:i,opacity:a,space:o,unit:s}=e;if(o!==`ycbcr`)throw Error(`Space is expected to be 'ycbcr'. Got: ${o}`);if(s===`8bit`)N(er(n,0,255,`y`),er(r,0,255,`cb`),er(i,0,255,`cr`),()=>{if(typeof a==`number`)return er(a,0,255,`opacity`)});else if(s===`scalar`)N(P(n,`percentage`,`y`),P(r,`percentage`,`cb`),P(i,`percentage`,`cr`),()=>{if(typeof a==`number`)return P(a,`percentage`,`opacity`)});else throw Error(`Unit is expected to be '8bit' or 'scalar'. Got: ${s}`)}function cc(e){return Ko(nc(e))}var lc=Sr({HslSpace:()=>So,OklchSpace:()=>os,SrgbSpace:()=>Vo,YCbCrSpace:()=>Qs,convert:()=>Es,convertScalar:()=>Os,convertToString:()=>Ds,createSteps:()=>Ws,cssDefinedHexColours:()=>Ts,cssLinearGradient:()=>Bs,decodeRgbFrom16Bit565:()=>Zs,decodeRgbFrom24Bit:()=>Ys,encodeRgbTo16Bit565:()=>Xs,encodeRgbTo24Bit:()=>Js,fromCssColour:()=>Cs,goldenAngleColour:()=>Is,guard:()=>Ms,interpolator:()=>Rs,interpolatorDual:()=>Hs,interpolatorDualToString:()=>Vs,isColourish:()=>vo,isHsl:()=>po,isOkLch:()=>_o,isRgb:()=>mo,multiplyOpacity:()=>Gs,randomHue:()=>Ls,resolveCss:()=>ws,rgbToHsl:()=>Fs,scale:()=>Us,setOpacity:()=>qs,toColour:()=>Ns,toCssColour:()=>ks,toHexColour:()=>As,toLibraryColour:()=>js,toStringFirst:()=>Ps,tryParseObjectToHsl:()=>go,tryParseObjectToRgb:()=>ho,withOpacity:()=>Ks}),{I:uc}=Je,dc=e=>e,fc=()=>document.createComment(``),pc=(e,n,r)=>{let i=e._$AA.parentNode,a=n===void 0?e._$AB:n._$AA;if(r===void 0)r=new uc(i.insertBefore(fc(),a),i.insertBefore(fc(),a),e,e.options);else{let n=r._$AB.nextSibling,o=r._$AM,s=o!==e;if(s){let n;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(n=e._$AU)!==o._$AU&&r._$AP(n)}if(n!==a||s){let e=r._$AA;for(;e!==n;){let n=dc(e).nextSibling;dc(i).insertBefore(e,a),e=n}}}return r},mc=(e,n,r=e)=>(e._$AI(n,r),e),hc={},gc=(e,n=hc)=>e._$AH=n,_c=e=>e._$AH,vc=e=>{e._$AR(),e._$AA.remove()},yc=(e,n,r)=>{let i=new Map;for(let a=n;a<=r;a++)i.set(e[a],a);return i},bc=ht(class extends gt{constructor(e){if(super(e),e.type!==mt.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,n,r){let i;r===void 0?r=n:n!==void 0&&(i=n);let a=[],o=[],s=0;for(let n of e)a[s]=i?i(n,s):s,o[s]=r(n,s),s++;return{values:o,keys:a}}render(e,n,r){return this.dt(e,n,r).values}update(e,[n,r,i]){let a=_c(e),{values:o,keys:s}=this.dt(n,r,i);if(!Array.isArray(a))return this.ut=s,o;let c=this.ut??=[],l=[],u,d,f=0,p=a.length-1,m=0,h=o.length-1;for(;f<=p&&m<=h;)if(a[f]===null)f++;else if(a[p]===null)p--;else if(c[f]===s[m])l[m]=mc(a[f],o[m]),f++,m++;else if(c[p]===s[h])l[h]=mc(a[p],o[h]),p--,h--;else if(c[f]===s[h])l[h]=mc(a[f],o[h]),pc(e,l[h+1],a[f]),f++,h--;else if(c[p]===s[m])l[m]=mc(a[p],o[m]),pc(e,a[f],a[p]),p--,m++;else if(u===void 0&&(u=yc(s,m,h),d=yc(c,f,p)),u.has(c[f]))if(u.has(c[p])){let n=d.get(s[m]),r=n===void 0?null:a[n];if(r===null){let n=pc(e,a[f]);mc(n,o[m]),l[m]=n}else l[m]=mc(r,o[m]),pc(e,a[f],r),a[n]=null;m++}else vc(a[p]),p--;else vc(a[f]),f++;for(;m<=h;){let n=pc(e,l[h+1]);mc(n,o[m]),l[m++]=n}for(;f<=p;){let e=a[f++];e!==null&&vc(e)}return this.ut=s,gc(e,l),Pe}}),xc=Object.defineProperty,Sc=(e,n)=>{let r={};for(var i in e)xc(r,i,{get:e[i],enumerable:!0});return n||xc(r,Symbol.toStringTag,{value:`Module`}),r};function Cc(e,n,r,i,a,o){if(L(e)&&L(n)||I(e)&&I(n))return[e,n];if(L(e)){let a={x:n,y:r,z:i};if(!L(a))throw Error(`Expected x, y & z parameters`);return[e,a]}if(I(e)){let i={x:n,y:r};if(!I(i))throw Error(`Expected x & y parameters`);return[e,i]}if(a!==void 0&&i!==void 0){let s={x:e,y:n,z:r},c={x:i,y:a,z:o};if(!L(s))throw Error(`Expected x,y,z for first point`);if(!L(c))throw Error(`Expected x,y,z for second point`);return[s,c]}let s={x:e,y:n},c={x:r,y:i};if(!I(s))throw Error(`Expected x,y for first point`);if(!I(c))throw Error(`Expected x,y for second point`);return[s,c]}function wc(e,n,r){if(e===void 0)return{x:0,y:0};if(Array.isArray(e)){if(e.length===0)return Object.freeze({x:0,y:0});if(e.length===1)return Object.freeze({x:e[0],y:0});if(e.length===2)return Object.freeze({x:e[0],y:e[1]});if(e.length===3)return Object.freeze({x:e[0],y:e[1],z:e[2]});throw Error(`Expected array to be 1-3 elements in length. Got ${e.length}.`)}if(I(e))return e;if(typeof e!=`number`||typeof n!=`number`)throw TypeError(`Expected point or x,y as parameters. Got: a: ${JSON.stringify(e)} b: ${JSON.stringify(n)}`);return Object.freeze(typeof r==`number`?{x:e,y:n,z:r}:{x:e,y:n})}function Tc(e,n,r,i){let a=wc(n,r,i);return F(a,`b`),F(e,`a`),L(a)&&L(e)?Math.hypot(a.x-e.x,a.y-e.y,a.z-e.z):Math.hypot(a.x-e.x,a.y-e.y)}function Ec(e,n,r){let i=wc(n,r);return F(i,`b`),F(e,`a`),Math.hypot(i.x-e.x,i.y-e.y)}function Dc(e,n,r,i,a,o){let[s,c]=Cc(e,n,r,i,a,o);F(s,`a`),F(c,`b`);let l={x:s.x-c.x,y:s.y-c.y};return(L(s)||L(c))&&(l.z=(s.z??0)-(c.z??0)),Object.freeze(l)}var Oc=(e,n=Math.round)=>(F(e,`pt`),Object.freeze({x:n(e.x),y:n(e.y)})),kc=e=>{F(e,`pt`);let n={...e};return delete n.z,Object.freeze(n)},Ac=(e,n=0)=>(F(e,`pt`),Object.freeze({...e,z:n}));function jc(e,n){if(e===void 0)return`(undefined)`;if(e===null)return`(null)`;F(e,`pt`);let r=n?e.x.toFixed(n):e.x,i=n?e.y.toFixed(n):e.y;return e.z===void 0?`(${r},${i})`:`(${r},${i},${n?e.z.toFixed(n):e.z})`}var Mc=e=>!(e.distance===void 0||e.angleRadian===void 0),Nc=(e,n)=>Object.freeze({...e,angleRadian:e.angleRadian+n}),Pc={x:0,y:0},Fc={x:1,y:1},Ic={x:0,y:0,z:0},Lc={x:1,y:1,z:1},Rc=(e,n,r)=>{if(Mc(e)){if(n===void 0&&(n=Pc),I(n))return Bc(e.distance,e.angleRadian,n);throw Error(`Expecting (Coord, Point). Second parameter is not a point`)}else if(typeof e==`object`)throw TypeError(`First param is an object, but not a Coord: ${JSON.stringify(e)}`);else if(typeof e==`number`&&typeof n==`number`){if(r===void 0&&(r=Pc),!I(r))throw Error(`Expecting (number, number, Point). Point param wrong type`);return Bc(e,n,r)}else throw TypeError(`Expecting parameters of (number, number). Got: (${typeof e}, ${typeof n}, ${typeof r}). a: ${JSON.stringify(e)}`)},zc=(e,n,r={})=>{if(typeof e!=`object`)throw TypeError(`Param 'point' wrong. Expecting a Point, got: ${typeof e}`);let i=r.fullCircle??!0;typeof n==`object`&&(e=Dc(e,n));let a=Math.atan2(e.y,e.x);i&&(a=Hr(a));let o=Math.hypot(e.x,e.y);typeof r.digits==`number`&&(a=parseFloat(a.toFixed(r.digits)),o=parseFloat(o.toFixed(r.digits)));let s={...e,angleRadian:a,distance:o};return delete s.x,delete s.y,Object.freeze(s)},Bc=(e,n,r=Pc)=>(F(r),Object.freeze({x:r.x+e*Math.cos(n),y:r.y+e*Math.sin(n)})),Vc=(e,n,r)=>(F(e,`a`),n===void 0?Math.atan2(e.y,e.x):(F(n,`b`),r===void 0?Math.atan2(n.y-e.y,n.x-e.x):(F(r,`c`),Math.atan2(n.y-e.y,n.x-e.x)-Math.atan2(r.y-e.y,r.x-e.x)))),Hc=(e,n,r)=>{let i=Vc(e,n,r);return i<0?i+kr:i},Uc=(e,n,r)=>{let i=Math.sqrt((n.x-e.x)**2+(n.y-e.y)**2),a=Math.sqrt((n.x-r.x)**2+(n.y-r.y)**2),o=Math.sqrt((r.x-e.x)**2+(r.y-e.y)**2);return Math.acos((a*a+i*i-o*o)/(2*a*i))},Wc=(e,n)=>(F(e,`a`),F(n,`b`),e=Object.freeze({...e}),n=Object.freeze({...n}),Object.freeze({a:e,b:n})),Gc=(e,n,r,i)=>{if(e.y>r.y)throw Error(`topLeft.y greater than bottomRight.y`);if(e.y>i.y)throw Error(`topLeft.y greater than bottomLeft.y`);let a=n.x-e.x,o=r.x-i.x,s=Math.abs(i.y-e.y),c=Math.abs(r.y-n.y);return{x:Math.min(e.x,i.x),y:Math.min(n.y,e.y),width:Math.max(a,o),height:Math.max(s,c)}};function Kc(e,...n){if(n.length===0)throw Error(`No points provided`);let r=n[0];for(let i of n)r=(L(r)&&L(i),e(r,i));return r}var qc=(...e)=>{let n=Kc((e,n)=>e.x<n.x?e:n,...e),r=Kc((e,n)=>e.x>n.x?e:n,...e),i=Kc((e,n)=>e.y<n.y?e:n,...e),a=Kc((e,n)=>e.y>n.y?e:n,...e);return Gc({x:n.x,y:i.y},{x:r.x,y:i.y},{x:r.x,y:a.y},{x:n.x,y:a.y})},Jc=(...e)=>{let n=qc(...e),r=Kc((e,n)=>e.z<n.z?e:n,...e),i=Kc((e,n)=>e.z>n.z?e:n,...e);return{...n,z:r.z,depth:i.z-r.z}};function Yc(e){return!(e===void 0||e.a===void 0||e.b===void 0||!I(e.a)||!I(e.b))}function Xc(e){return Array.isArray(e)?!e.some(e=>!Yc(e)):!1}function Zc(e,n=`line`){return e===void 0?{success:!1,error:`${n} undefined`}:e.a===void 0?{success:!1,error:`${n}.a undefined. Expected {a:Point, b:Point}. Got: ${JSON.stringify(e)}`}:e.b===void 0?{success:!1,error:`${n}.b undefined. Expected {a:Point, b:Point} Got: ${JSON.stringify(e)}`}:{success:!0,value:!0}}var Qc=(e,n)=>{let r;if(Yc(e))n=e.b,r=e.a;else if(r=e,n===void 0)throw Error(`Since first parameter is not a line, two points are expected. Got a: ${JSON.stringify(r)} b: ${JSON.stringify(n)}`);return F(r,`a`),F(r,`b`),[r,n]};function $c(e,n,r){if(Xc(e)){let r=typeof n==`boolean`?n:!1;return e.reduce((e,n)=>$c(n,r)+e,0)}if(e===void 0)throw TypeError(`Parameter 'aOrLine' is undefined`);let[i,a]=typeof n==`object`?Qc(e,n):Qc(e),o=a.x-i.x,s=a.y-i.y;if(!(typeof n==`boolean`?n:typeof r==`boolean`&&r)&&i.z!==void 0&&a.z!==void 0){let e=a.z-i.z;return Math.hypot(o,s,e)}else return Math.hypot(o,s)}function el(e,n,r,i){typeof r==`boolean`&&(i=r,r=void 0),N(i?P(e,``,`amount`):Qn(e,`amount`));let[a,o]=Qc(n,r);return tl({a,b:o},i)(e)}function tl(e,n=!1){N(Zc(e));let r=$c(e),{a:i,b:a}=e;return e=>{N(n?P(e,``,`amount`):Qn(e,`amount`));let o=r*(1-e);if(r===0&&o===0)return Object.freeze({...a});let s=a.x-o*(a.x-i.x)/r,c=a.y-o*(a.y-i.y)/r;return Object.freeze({...a,x:s,y:c})}}var nl=(e,n=`Dimension`)=>{if(e===void 0)throw Error(`${n} is undefined`);if(Number.isNaN(e))throw Error(`${n} is NaN`);if(e<0)throw Error(`${n} cannot be negative`)},rl=(e,n=`rect`)=>{if(e===void 0)throw Error(`{$name} undefined`);al(e)&&F(e,n),nl(e.width,n+`.width`),nl(e.height,n+`.height`)},il=(e,n=`rect`)=>{if(!al(e))throw Error(`Expected ${n} to have x,y`);rl(e,n)},al=e=>e.x!==void 0&&e.y!==void 0,ol=e=>!(e===void 0||e.width===void 0||e.height===void 0),sl=e=>ol(e)&&al(e);function cl(e,n,r){return nl(n,`width`),nl(r,`height`),F(e,`origin`),{x:e.x,y:e.y,width:n,height:r}}var ll=e=>e.quadratic!==void 0,ul=e=>e.cubic1!==void 0&&e.cubic2!==void 0,{abs:dl,cos:fl,sin:pl,acos:ml,atan2:hl,sqrt:gl,pow:_l}=Math;function vl(e){return e<0?-_l(-e,1/3):_l(e,1/3)}var yl=Math.PI,bl=2*yl,xl=yl/2,Sl=1e-6,Cl=2**53-1||9007199254740991,wl=-(2**53-1)||-9007199254740991,Tl={x:0,y:0,z:0},G={Tvalues:[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213],Cvalues:[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872],arcfn:function(e,n){let r=n(e),i=r.x*r.x+r.y*r.y;return r.z!==void 0&&(i+=r.z*r.z),gl(i)},compute:function(e,n,r){if(e===0)return n[0].t=0,n[0];let i=n.length-1;if(e===1)return n[i].t=1,n[i];let a=1-e,o=n;if(i===0)return n[0].t=e,n[0];if(i===1){let n={x:a*o[0].x+e*o[1].x,y:a*o[0].y+e*o[1].y,t:e};return r&&(n.z=a*o[0].z+e*o[1].z),n}if(i<4){let n=a*a,s=e*e,c,l,u,d=0;i===2?(o=[o[0],o[1],o[2],Tl],c=n,l=a*e*2,u=s):i===3&&(c=n*a,l=n*e*3,u=a*s*3,d=e*s);let f={x:c*o[0].x+l*o[1].x+u*o[2].x+d*o[3].x,y:c*o[0].y+l*o[1].y+u*o[2].y+d*o[3].y,t:e};return r&&(f.z=c*o[0].z+l*o[1].z+u*o[2].z+d*o[3].z),f}let s=JSON.parse(JSON.stringify(n));for(;s.length>1;){for(let n=0;n<s.length-1;n++)s[n]={x:s[n].x+(s[n+1].x-s[n].x)*e,y:s[n].y+(s[n+1].y-s[n].y)*e},s[n].z!==void 0&&(s[n].z=s[n].z+(s[n+1].z-s[n].z)*e);s.splice(s.length-1,1)}return s[0].t=e,s[0]},computeWithRatios:function(e,n,r,i){let a=1-e,o=r,s=n,c=o[0],l=o[1],u=o[2],d=o[3],f;if(c*=a,l*=e,s.length===2)return f=c+l,{x:(c*s[0].x+l*s[1].x)/f,y:(c*s[0].y+l*s[1].y)/f,z:i?(c*s[0].z+l*s[1].z)/f:!1,t:e};if(c*=a,l*=2*a,u*=e*e,s.length===3)return f=c+l+u,{x:(c*s[0].x+l*s[1].x+u*s[2].x)/f,y:(c*s[0].y+l*s[1].y+u*s[2].y)/f,z:i?(c*s[0].z+l*s[1].z+u*s[2].z)/f:!1,t:e};if(c*=a,l*=1.5*a,u*=3*a,d*=e*e*e,s.length===4)return f=c+l+u+d,{x:(c*s[0].x+l*s[1].x+u*s[2].x+d*s[3].x)/f,y:(c*s[0].y+l*s[1].y+u*s[2].y+d*s[3].y)/f,z:i?(c*s[0].z+l*s[1].z+u*s[2].z+d*s[3].z)/f:!1,t:e}},derive:function(e,n){let r=[];for(let i=e,a=i.length,o=a-1;a>1;a--,o--){let e=[];for(let r=0,a;r<o;r++)a={x:o*(i[r+1].x-i[r].x),y:o*(i[r+1].y-i[r].y)},n&&(a.z=o*(i[r+1].z-i[r].z)),e.push(a);r.push(e),i=e}return r},between:function(e,n,r){return n<=e&&e<=r||G.approximately(e,n)||G.approximately(e,r)},approximately:function(e,n,r){return dl(e-n)<=(r||Sl)},length:function(e){let n=.5,r=G.Tvalues.length,i=0;for(let a=0,o;a<r;a++)o=n*G.Tvalues[a]+n,i+=G.Cvalues[a]*G.arcfn(o,e);return n*i},map:function(e,n,r,i,a){let o=r-n;return i+(a-i)*((e-n)/o)},lerp:function(e,n,r){let i={x:n.x+e*(r.x-n.x),y:n.y+e*(r.y-n.y)};return n.z!==void 0&&r.z!==void 0&&(i.z=n.z+e*(r.z-n.z)),i},pointToString:function(e){let n=e.x+`/`+e.y;return e.z!==void 0&&(n+=`/`+e.z),n},pointsToString:function(e){return`[`+e.map(G.pointToString).join(`, `)+`]`},copy:function(e){return JSON.parse(JSON.stringify(e))},angle:function(e,n,r){let i=n.x-e.x,a=n.y-e.y,o=r.x-e.x,s=r.y-e.y;return hl(i*s-a*o,i*o+a*s)},round:function(e,n){let r=``+e,i=r.indexOf(`.`);return parseFloat(r.substring(0,i+1+n))},dist:function(e,n){let r=e.x-n.x,i=e.y-n.y;return gl(r*r+i*i)},closest:function(e,n){let r=_l(2,63),i,a;return e.forEach(function(e,o){a=G.dist(n,e),a<r&&(r=a,i=o)}),{mdist:r,mpos:i}},abcratio:function(e,n){if(n!==2&&n!==3)return!1;if(e===void 0)e=.5;else if(e===0||e===1)return e;let r=_l(e,n)+_l(1-e,n);return dl((r-1)/r)},projectionratio:function(e,n){if(n!==2&&n!==3)return!1;if(e===void 0)e=.5;else if(e===0||e===1)return e;let r=_l(1-e,n);return r/(_l(e,n)+r)},lli8:function(e,n,r,i,a,o,s,c){let l=(e*i-n*r)*(a-s)-(e-r)*(a*c-o*s),u=(e*i-n*r)*(o-c)-(n-i)*(a*c-o*s),d=(e-r)*(o-c)-(n-i)*(a-s);return d==0?!1:{x:l/d,y:u/d}},lli4:function(e,n,r,i){let a=e.x,o=e.y,s=n.x,c=n.y,l=r.x,u=r.y,d=i.x,f=i.y;return G.lli8(a,o,s,c,l,u,d,f)},lli:function(e,n){return G.lli4(e,e.c,n,n.c)},makeline:function(e,n){return new Fl(e.x,e.y,(e.x+n.x)/2,(e.y+n.y)/2,n.x,n.y)},findbbox:function(e){let n=Cl,r=Cl,i=wl,a=wl;return e.forEach(function(e){let o=e.bbox();n>o.x.min&&(n=o.x.min),r>o.y.min&&(r=o.y.min),i<o.x.max&&(i=o.x.max),a<o.y.max&&(a=o.y.max)}),{x:{min:n,mid:(n+i)/2,max:i,size:i-n},y:{min:r,mid:(r+a)/2,max:a,size:a-r}}},shapeintersections:function(e,n,r,i,a){if(!G.bboxoverlap(n,i))return[];let o=[],s=[e.startcap,e.forward,e.back,e.endcap],c=[r.startcap,r.forward,r.back,r.endcap];return s.forEach(function(n){n.virtual||c.forEach(function(i){if(i.virtual)return;let s=n.intersects(i,a);s.length>0&&(s.c1=n,s.c2=i,s.s1=e,s.s2=r,o.push(s))})}),o},makeshape:function(e,n,r){let i=n.points.length,a=e.points.length,o=G.makeline(n.points[i-1],e.points[0]),s=G.makeline(e.points[a-1],n.points[0]),c={startcap:o,forward:e,back:n,endcap:s,bbox:G.findbbox([o,e,n,s])};return c.intersections=function(e){return G.shapeintersections(c,c.bbox,e,e.bbox,r)},c},getminmax:function(e,n,r){if(!r)return{min:0,max:0};let i=Cl,a=wl,o,s;r.indexOf(0)===-1&&(r=[0].concat(r)),r.indexOf(1)===-1&&r.push(1);for(let c=0,l=r.length;c<l;c++)o=r[c],s=e.get(o),s[n]<i&&(i=s[n]),s[n]>a&&(a=s[n]);return{min:i,mid:(i+a)/2,max:a,size:a-i}},align:function(e,n){let r=n.p1.x,i=n.p1.y,a=-hl(n.p2.y-i,n.p2.x-r);return e.map(function(e){return{x:(e.x-r)*fl(a)-(e.y-i)*pl(a),y:(e.x-r)*pl(a)+(e.y-i)*fl(a)}})},roots:function(e,n){n||={p1:{x:0,y:0},p2:{x:1,y:0}};let r=e.length-1,i=G.align(e,n),a=function(e){return 0<=e&&e<=1};if(r===2){let e=i[0].y,n=i[1].y,r=i[2].y,o=e-2*n+r;if(o!==0){let i=-gl(n*n-e*r),s=-e+n;return[-(i+s)/o,-(-i+s)/o].filter(a)}else if(n!==r&&o===0)return[(2*n-r)/(2*n-2*r)].filter(a);return[]}let o=i[0].y,s=i[1].y,c=i[2].y,l=i[3].y,u=-o+3*s-3*c+l,d=3*o-6*s+3*c,f=-3*o+3*s,p=o;if(G.approximately(u,0)){if(G.approximately(d,0))return G.approximately(f,0)?[]:[-p/f].filter(a);let e=gl(f*f-4*d*p),n=2*d;return[(e-f)/n,(-f-e)/n].filter(a)}d/=u,f/=u,p/=u;let m=(3*f-d*d)/3,h=m/3,g=(2*d*d*d-9*d*f+27*p)/27,_=g/2,v=_*_+h*h*h,y,b,x,S,ee;if(v<0){let e=-m/3,n=gl(e*e*e),r=-g/(2*n),i=ml(r<-1?-1:r>1?1:r),o=2*vl(n);return x=o*fl(i/3)-d/3,S=o*fl((i+bl)/3)-d/3,ee=o*fl((i+2*bl)/3)-d/3,[x,S,ee].filter(a)}else if(v===0)return y=_<0?vl(-_):-vl(_),x=2*y-d/3,S=-y-d/3,[x,S].filter(a);else{let e=gl(v);return y=vl(-_+e),b=vl(_+e),[y-b-d/3].filter(a)}},droots:function(e){if(e.length===3){let n=e[0],r=e[1],i=e[2],a=n-2*r+i;if(a!==0){let e=-gl(r*r-n*i),o=-n+r;return[-(e+o)/a,-(-e+o)/a]}else if(r!==i&&a===0)return[(2*r-i)/(2*(r-i))];return[]}if(e.length===2){let n=e[0],r=e[1];return n===r?[]:[n/(n-r)]}return[]},curvature:function(e,n,r,i,a){let o,s,c,l,u=0,d=0,f=G.compute(e,n),p=G.compute(e,r),m=f.x*f.x+f.y*f.y;if(i?(o=gl(_l(f.y*p.z-p.y*f.z,2)+_l(f.z*p.x-p.z*f.x,2)+_l(f.x*p.y-p.x*f.y,2)),s=_l(m+f.z*f.z,3/2)):(o=f.x*p.y-f.y*p.x,s=_l(m,3/2)),o===0||s===0)return{k:0,r:0};if(u=o/s,d=s/o,!a){let a=G.curvature(e-.001,n,r,i,!0).k,o=G.curvature(e+.001,n,r,i,!0).k;l=(o-u+(u-a))/2,c=(dl(o-u)+dl(u-a))/2}return{k:u,r:d,dk:l,adk:c}},inflections:function(e){if(e.length<4)return[];let n=G.align(e,{p1:e[0],p2:e.slice(-1)[0]}),r=n[2].x*n[1].y,i=n[3].x*n[1].y,a=n[1].x*n[2].y,o=n[3].x*n[2].y,s=18*(-3*r+2*i+3*a-o),c=18*(3*r-i-3*a),l=18*(a-r);if(G.approximately(s,0)){if(!G.approximately(c,0)){let e=-l/c;if(0<=e&&e<=1)return[e]}return[]}let u=2*s;if(G.approximately(u,0))return[];let d=c*c-4*s*l;if(d<0)return[];let f=Math.sqrt(d);return[(f-c)/u,-(c+f)/u].filter(function(e){return 0<=e&&e<=1})},bboxoverlap:function(e,n){let r=[`x`,`y`],i=r.length;for(let a=0,o,s,c,l;a<i;a++)if(o=r[a],s=e[o].mid,c=n[o].mid,l=(e[o].size+n[o].size)/2,dl(s-c)>=l)return!1;return!0},expandbox:function(e,n){n.x.min<e.x.min&&(e.x.min=n.x.min),n.y.min<e.y.min&&(e.y.min=n.y.min),n.z&&n.z.min<e.z.min&&(e.z.min=n.z.min),n.x.max>e.x.max&&(e.x.max=n.x.max),n.y.max>e.y.max&&(e.y.max=n.y.max),n.z&&n.z.max>e.z.max&&(e.z.max=n.z.max),e.x.mid=(e.x.min+e.x.max)/2,e.y.mid=(e.y.min+e.y.max)/2,e.z&&(e.z.mid=(e.z.min+e.z.max)/2),e.x.size=e.x.max-e.x.min,e.y.size=e.y.max-e.y.min,e.z&&(e.z.size=e.z.max-e.z.min)},pairiteration:function(e,n,r){let i=e.bbox(),a=n.bbox(),o=1e5,s=r||.5;if(i.x.size+i.y.size<s&&a.x.size+a.y.size<s)return[(o*(e._t1+e._t2)/2|0)/o+`/`+(o*(n._t1+n._t2)/2|0)/o];let c=e.split(.5),l=n.split(.5),u=[{left:c.left,right:l.left},{left:c.left,right:l.right},{left:c.right,right:l.right},{left:c.right,right:l.left}];u=u.filter(function(e){return G.bboxoverlap(e.left.bbox(),e.right.bbox())});let d=[];return u.length===0?d:(u.forEach(function(e){d=d.concat(G.pairiteration(e.left,e.right,s))}),d=d.filter(function(e,n){return d.indexOf(e)===n}),d)},getccenter:function(e,n,r){let i=n.x-e.x,a=n.y-e.y,o=r.x-n.x,s=r.y-n.y,c=i*fl(xl)-a*pl(xl),l=i*pl(xl)+a*fl(xl),u=o*fl(xl)-s*pl(xl),d=o*pl(xl)+s*fl(xl),f=(e.x+n.x)/2,p=(e.y+n.y)/2,m=(n.x+r.x)/2,h=(n.y+r.y)/2,g=f+c,_=p+l,v=m+u,y=h+d,b=G.lli8(f,p,g,_,m,h,v,y),x=G.dist(b,e),S=hl(e.y-b.y,e.x-b.x),ee=hl(n.y-b.y,n.x-b.x),te=hl(r.y-b.y,r.x-b.x),ne;return S<te?((S>ee||ee>te)&&(S+=bl),S>te&&(ne=te,te=S,S=ne)):te<ee&&ee<S?(ne=te,te=S,S=ne):te+=bl,b.s=S,b.e=te,b.r=x,b},numberSort:function(e,n){return e-n}},El=class e{constructor(e){this.curves=[],this._3d=!1,e&&(this.curves=e,this._3d=this.curves[0]._3d)}valueOf(){return this.toString()}toString(){return`[`+this.curves.map(function(e){return G.pointsToString(e.points)}).join(`, `)+`]`}addCurve(e){this.curves.push(e),this._3d=this._3d||e._3d}length(){return this.curves.map(function(e){return e.length()}).reduce(function(e,n){return e+n})}curve(e){return this.curves[e]}bbox(){let e=this.curves;for(var n=e[0].bbox(),r=1;r<e.length;r++)G.expandbox(n,e[r].bbox());return n}offset(n){let r=[];return this.curves.forEach(function(e){r.push(...e.offset(n))}),new e(r)}},{abs:Dl,min:Ol,max:kl,cos:Al,sin:jl,acos:Ml,sqrt:Nl}=Math,Pl=Math.PI,Fl=class e{constructor(e){let n=e&&e.forEach?e:Array.from(arguments).slice(),r=!1;if(typeof n[0]==`object`){r=n.length;let e=[];n.forEach(function(n){[`x`,`y`,`z`].forEach(function(r){n[r]!==void 0&&e.push(n[r])})}),n=e}let i=!1,a=n.length;if(r){if(r>4){if(arguments.length!==1)throw Error(`Only new Bezier(point[]) is accepted for 4th and higher order curves`);i=!0}}else if(a!==6&&a!==8&&a!==9&&a!==12&&arguments.length!==1)throw Error(`Only new Bezier(point[]) is accepted for 4th and higher order curves`);let o=this._3d=!i&&(a===9||a===12)||e&&e[0]&&e[0].z!==void 0,s=this.points=[];for(let e=0,r=o?3:2;e<a;e+=r){var c={x:n[e],y:n[e+1]};o&&(c.z=n[e+2]),s.push(c)}let l=this.order=s.length-1,u=this.dims=[`x`,`y`];o&&u.push(`z`),this.dimlen=u.length;let d=G.align(s,{p1:s[0],p2:s[l]}),f=G.dist(s[0],s[l]);this._linear=d.reduce((e,n)=>e+Dl(n.y),0)<f/50,this._lut=[],this._t1=0,this._t2=1,this.update()}static quadraticFromPoints(n,r,i,a){return a===void 0&&(a=.5),a===0?new e(r,r,i):a===1?new e(n,r,r):new e(n,e.getABC(2,n,r,i,a).A,i)}static cubicFromPoints(n,r,i,a,o){a===void 0&&(a=.5);let s=e.getABC(3,n,r,i,a);o===void 0&&(o=G.dist(r,s.C));let c=o*(1-a)/a,l=G.dist(n,i),u=(i.x-n.x)/l,d=(i.y-n.y)/l,f=o*u,p=o*d,m=c*u,h=c*d,g={x:r.x-f,y:r.y-p},_={x:r.x+m,y:r.y+h},v=s.A,y={x:v.x+(g.x-v.x)/(1-a),y:v.y+(g.y-v.y)/(1-a)},b={x:v.x+(_.x-v.x)/a,y:v.y+(_.y-v.y)/a};return new e(n,{x:n.x+(y.x-n.x)/a,y:n.y+(y.y-n.y)/a},{x:i.x+(b.x-i.x)/(1-a),y:i.y+(b.y-i.y)/(1-a)},i)}static getUtils(){return G}getUtils(){return e.getUtils()}static get PolyBezier(){return El}valueOf(){return this.toString()}toString(){return G.pointsToString(this.points)}toSVG(){if(this._3d)return!1;let e=this.points,n=[`M`,e[0].x,e[0].y,this.order===2?`Q`:`C`];for(let r=1,i=e.length;r<i;r++)n.push(e[r].x),n.push(e[r].y);return n.join(` `)}setRatios(e){if(e.length!==this.points.length)throw Error(`incorrect number of ratio values`);this.ratios=e,this._lut=[]}verify(){let e=this.coordDigest();e!==this._print&&(this._print=e,this.update())}coordDigest(){return this.points.map(function(e,n){return``+n+e.x+e.y+(e.z?e.z:0)}).join(``)}update(){this._lut=[],this.dpoints=G.derive(this.points,this._3d),this.computedirection()}computedirection(){let e=this.points;this.clockwise=G.angle(e[0],e[this.order],e[1])>0}length(){return G.length(this.derivative.bind(this))}static getABC(e=2,n,r,i,a=.5){let o=G.projectionratio(a,e),s=1-o,c={x:o*n.x+s*i.x,y:o*n.y+s*i.y},l=G.abcratio(a,e);return{A:{x:r.x+(r.x-c.x)/l,y:r.y+(r.y-c.y)/l},B:r,C:c,S:n,E:i}}getABC(n,r){r||=this.get(n);let i=this.points[0],a=this.points[this.order];return e.getABC(this.order,i,r,a,n)}getLUT(e){if(this.verify(),e||=100,this._lut.length===e+1)return this._lut;this._lut=[],e++,this._lut=[];for(let n=0,r,i;n<e;n++)i=n/(e-1),r=this.compute(i),r.t=i,this._lut.push(r);return this._lut}on(e,n){n||=5;let r=this.getLUT(),i=[];for(let a=0,o,s=0;a<r.length;a++)o=r[a],G.dist(o,e)<n&&(i.push(o),s+=a/r.length);return i.length?t/=i.length:!1}project(e){let n=this.getLUT(),r=n.length-1,i=G.closest(n,e),a=i.mpos,o=(a-1)/r,s=(a+1)/r,c=.1/r,l=i.mdist,u=o,d=u,f;l+=1;for(let n;u<s+c;u+=c)f=this.compute(u),n=G.dist(e,f),n<l&&(l=n,d=u);return d=d<0?0:d>1?1:d,f=this.compute(d),f.t=d,f.d=l,f}get(e){return this.compute(e)}point(e){return this.points[e]}compute(e){return this.ratios?G.computeWithRatios(e,this.points,this.ratios,this._3d):G.compute(e,this.points,this._3d,this.ratios)}raise(){let n=this.points,r=[n[0]],i=n.length;for(let e=1,a,o;e<i;e++)a=n[e],o=n[e-1],r[e]={x:(i-e)/i*a.x+e/i*o.x,y:(i-e)/i*a.y+e/i*o.y};return r[i]=n[i-1],new e(r)}derivative(e){return G.compute(e,this.dpoints[0],this._3d)}dderivative(e){return G.compute(e,this.dpoints[1],this._3d)}align(){let n=this.points;return new e(G.align(n,{p1:n[0],p2:n[n.length-1]}))}curvature(e){return G.curvature(e,this.dpoints[0],this.dpoints[1],this._3d)}inflections(){return G.inflections(this.points)}normal(e){return this._3d?this.__normal3(e):this.__normal2(e)}__normal2(e){let n=this.derivative(e),r=Nl(n.x*n.x+n.y*n.y);return{t:e,x:-n.y/r,y:n.x/r}}__normal3(e){let n=this.derivative(e),r=this.derivative(e+.01),i=Nl(n.x*n.x+n.y*n.y+n.z*n.z),a=Nl(r.x*r.x+r.y*r.y+r.z*r.z);n.x/=i,n.y/=i,n.z/=i,r.x/=a,r.y/=a,r.z/=a;let o={x:r.y*n.z-r.z*n.y,y:r.z*n.x-r.x*n.z,z:r.x*n.y-r.y*n.x},s=Nl(o.x*o.x+o.y*o.y+o.z*o.z);o.x/=s,o.y/=s,o.z/=s;let c=[o.x*o.x,o.x*o.y-o.z,o.x*o.z+o.y,o.x*o.y+o.z,o.y*o.y,o.y*o.z-o.x,o.x*o.z-o.y,o.y*o.z+o.x,o.z*o.z];return{t:e,x:c[0]*n.x+c[1]*n.y+c[2]*n.z,y:c[3]*n.x+c[4]*n.y+c[5]*n.z,z:c[6]*n.x+c[7]*n.y+c[8]*n.z}}hull(e){let n=this.points,r=[],i=[],a=0;for(i[a++]=n[0],i[a++]=n[1],i[a++]=n[2],this.order===3&&(i[a++]=n[3]);n.length>1;){r=[];for(let o=0,s,c=n.length-1;o<c;o++)s=G.lerp(e,n[o],n[o+1]),i[a++]=s,r.push(s);n=r}return i}split(n,r){if(n===0&&r)return this.split(r).left;if(r===1)return this.split(n).right;let i=this.hull(n),a={left:this.order===2?new e([i[0],i[3],i[5]]):new e([i[0],i[4],i[7],i[9]]),right:this.order===2?new e([i[5],i[4],i[2]]):new e([i[9],i[8],i[6],i[3]]),span:i};return a.left._t1=G.map(0,0,1,this._t1,this._t2),a.left._t2=G.map(n,0,1,this._t1,this._t2),a.right._t1=G.map(n,0,1,this._t1,this._t2),a.right._t2=G.map(1,0,1,this._t1,this._t2),r?(r=G.map(r,n,1,0,1),a.right.split(r).left):a}extrema(){let e={},n=[];return this.dims.forEach(function(r){let i=function(e){return e[r]},a=this.dpoints[0].map(i);e[r]=G.droots(a),this.order===3&&(a=this.dpoints[1].map(i),e[r]=e[r].concat(G.droots(a))),e[r]=e[r].filter(function(e){return e>=0&&e<=1}),n=n.concat(e[r].sort(G.numberSort))}.bind(this)),e.values=n.sort(G.numberSort).filter(function(e,r){return n.indexOf(e)===r}),e}bbox(){let e=this.extrema(),n={};return this.dims.forEach(function(r){n[r]=G.getminmax(this,r,e[r])}.bind(this)),n}overlaps(e){let n=this.bbox(),r=e.bbox();return G.bboxoverlap(n,r)}offset(n,r){if(r!==void 0){let e=this.get(n),i=this.normal(n),a={c:e,n:i,x:e.x+i.x*r,y:e.y+i.y*r};return this._3d&&(a.z=e.z+i.z*r),a}if(this._linear){let r=this.normal(0);return[new e(this.points.map(function(e){let i={x:e.x+n*r.x,y:e.y+n*r.y};return e.z&&r.z&&(i.z=e.z+n*r.z),i}))]}return this.reduce().map(function(e){return e._linear?e.offset(n)[0]:e.scale(n)})}simple(){if(this.order===3){let e=G.angle(this.points[0],this.points[3],this.points[1]),n=G.angle(this.points[0],this.points[3],this.points[2]);if(e>0&&n<0||e<0&&n>0)return!1}let e=this.normal(0),n=this.normal(1),r=e.x*n.x+e.y*n.y;return this._3d&&(r+=e.z*n.z),Dl(Ml(r))<Pl/3}reduce(){let e,n=0,r=0,i=.01,a,o=[],s=[],c=this.extrema().values;for(c.indexOf(0)===-1&&(c=[0].concat(c)),c.indexOf(1)===-1&&c.push(1),n=c[0],e=1;e<c.length;e++)r=c[e],a=this.split(n,r),a._t1=n,a._t2=r,o.push(a),n=r;return o.forEach(function(e){for(n=0,r=0;r<=1;)for(r=n+i;r<=1.01;r+=i)if(a=e.split(n,r),!a.simple()){if(r-=i,Dl(n-r)<i)return[];a=e.split(n,r),a._t1=G.map(n,0,1,e._t1,e._t2),a._t2=G.map(r,0,1,e._t1,e._t2),s.push(a),n=r;break}n<1&&(a=e.split(n,1),a._t1=G.map(n,0,1,e._t1,e._t2),a._t2=e._t2,s.push(a))}),s}translate(n,r,i){i=typeof i==`number`?i:r;let a=this.order,o=this.points.map((e,n)=>(1-n/a)*r+n/a*i);return new e(this.points.map((e,r)=>({x:e.x+n.x*o[r],y:e.y+n.y*o[r]})))}scale(n){let r=this.order,i=!1;if(typeof n==`function`&&(i=n),i&&r===2)return this.raise().scale(i);let a=this.clockwise,o=this.points;if(this._linear)return this.translate(this.normal(0),i?i(0):n,i?i(1):n);let s=i?i(0):n,c=i?i(1):n,l=[this.offset(0,10),this.offset(1,10)],u=[],d=G.lli4(l[0],l[0].c,l[1],l[1].c);if(!d)throw Error(`cannot scale this curve. Try reducing it first.`);return[0,1].forEach(function(e){let n=u[e*r]=G.copy(o[e*r]);n.x+=(e?c:s)*l[e].n.x,n.y+=(e?c:s)*l[e].n.y}),i?([0,1].forEach(function(e){if(!(r===2&&e)){var s=o[e+1],c={x:s.x-d.x,y:s.y-d.y},l=i?i((e+1)/r):n;i&&!a&&(l=-l);var f=Nl(c.x*c.x+c.y*c.y);c.x/=f,c.y/=f,u[e+1]={x:s.x+l*c.x,y:s.y+l*c.y}}}),new e(u)):([0,1].forEach(e=>{if(r===2&&e)return;let n=u[e*r],i=this.derivative(e),a={x:n.x+i.x,y:n.y+i.y};u[e+1]=G.lli4(n,a,d,o[e+1])}),new e(u))}outline(n,r,i,a){if(r=r===void 0?n:r,this._linear){let o=this.normal(0),s=this.points[0],c=this.points[this.points.length-1],l,u,d;i===void 0&&(i=n,a=r),l={x:s.x+o.x*n,y:s.y+o.y*n},d={x:c.x+o.x*i,y:c.y+o.y*i},u={x:(l.x+d.x)/2,y:(l.y+d.y)/2};let f=[l,u,d];l={x:s.x-o.x*r,y:s.y-o.y*r},d={x:c.x-o.x*a,y:c.y-o.y*a},u={x:(l.x+d.x)/2,y:(l.y+d.y)/2};let p=[d,u,l],m=G.makeline(p[2],f[0]),h=G.makeline(f[2],p[0]);return new El([m,new e(f),h,new e(p)])}let o=this.reduce(),s=o.length,c=[],l=[],u,d=0,f=this.length(),p=i!==void 0&&a!==void 0;function m(e,n,r,i,a){return function(o){let s=i/r,c=(i+a)/r,l=n-e;return G.map(o,0,1,e+s*l,e+c*l)}}o.forEach(function(e){let o=e.length();p?(c.push(e.scale(m(n,i,f,d,o))),l.push(e.scale(m(-r,-a,f,d,o)))):(c.push(e.scale(n)),l.push(e.scale(-r))),d+=o}),l=l.map(function(e){return u=e.points,u[3]?e.points=[u[3],u[2],u[1],u[0]]:e.points=[u[2],u[1],u[0]],e}).reverse();let h=c[0].points[0],g=c[s-1].points[c[s-1].points.length-1],_=l[s-1].points[l[s-1].points.length-1],v=l[0].points[0],y=G.makeline(_,h),b=G.makeline(g,v);return new El([y].concat(c,[b],l))}outlineshapes(e,n,r){n||=e;let i=this.outline(e,n).curves,a=[];for(let e=1,n=i.length;e<n/2;e++){let o=G.makeshape(i[e],i[n-e],r);o.startcap.virtual=e>1,o.endcap.virtual=e<n/2-1,a.push(o)}return a}intersects(n,r){return n?n.p1&&n.p2?this.lineIntersects(n):(n instanceof e&&(n=n.reduce()),this.curveintersects(this.reduce(),n,r)):this.selfintersects(r)}lineIntersects(e){let n=Ol(e.p1.x,e.p2.x),r=Ol(e.p1.y,e.p2.y),i=kl(e.p1.x,e.p2.x),a=kl(e.p1.y,e.p2.y);return G.roots(this.points,e).filter(e=>{var o=this.get(e);return G.between(o.x,n,i)&&G.between(o.y,r,a)})}selfintersects(e){let n=this.reduce(),r=n.length-2,i=[];for(let a=0,o,s,c;a<r;a++)s=n.slice(a,a+1),c=n.slice(a+2),o=this.curveintersects(s,c,e),i.push(...o);return i}curveintersects(e,n,r){let i=[];e.forEach(function(e){n.forEach(function(n){e.overlaps(n)&&i.push({left:e,right:n})})});let a=[];return i.forEach(function(e){let n=G.pairiteration(e.left,e.right,r);n.length>0&&(a=a.concat(n))}),a}arcs(e){return e||=.5,this._iterate(e,[])}_error(e,n,r,i){let a=(i-r)/4,o=this.get(r+a),s=this.get(i-a),c=G.dist(e,n),l=G.dist(e,o),u=G.dist(e,s);return Dl(l-c)+Dl(u-c)}_iterate(e,n){let r=0,i=1,a;do{a=0,i=1;let o=this.get(r),s,c,l,u,d=!1,f=!1,p,m=i,h=1,g=0;do if(f=d,u=l,m=(r+i)/2,g++,s=this.get(m),c=this.get(i),l=G.getccenter(o,s,c),l.interval={start:r,end:i},d=this._error(l,o,r,i)<=e,p=f&&!d,p||(h=i),d){if(i>=1){if(l.interval.end=h=1,u=l,i>1){let e={x:l.x+l.r*Al(l.e),y:l.y+l.r*jl(l.e)};l.e+=G.angle({x:l.x,y:l.y},e,this.get(1))}break}i+=(i-r)/2}else i=m;while(!p&&a++<100);if(a>=100)break;u||=l,n.push(u),r=h}while(i<1);return n}},Il=Sc({cubic:()=>Vl,interpolator:()=>Rl,isCubicBezier:()=>ul,isQuadraticBezier:()=>ll,quadratic:()=>Ul,quadraticSimple:()=>Ll,quadraticToSvgString:()=>zl,toPath:()=>Bl}),Ll=(e,n,r=0)=>{if(Number.isNaN(r))throw Error(`bend is NaN`);if(r<-1||r>1)throw Error(`Expects bend range of -1 to 1`);let i=el(.5,e,n),a=i;return a=n.y<e.y?r>0?{x:Math.min(e.x,n.x),y:Math.min(e.y,n.y)}:{x:Math.max(e.x,n.x),y:Math.max(e.y,n.y)}:r>0?{x:Math.max(e.x,n.x),y:Math.min(e.y,n.y)}:{x:Math.min(e.x,n.x),y:Math.max(e.y,n.y)},Ul(e,n,el(Math.abs(r),i,a))},Rl=e=>{let n=ul(e)?new Fl(e.a.x,e.a.y,e.cubic1.x,e.cubic1.y,e.cubic2.x,e.cubic2.y,e.b.x,e.b.y):new Fl(e.a,e.quadratic,e.b);return e=>n.compute(e)},zl=(e,n,r)=>[`M ${e.x} ${e.y} Q ${r.x} ${r.y} ${n.x} ${n.y}`],Bl=e=>{if(ul(e))return Hl(e);if(ll(e))return Wl(e);throw Error(`Unknown bezier type`)},Vl=(e,n,r,i)=>({a:Object.freeze(e),b:Object.freeze(n),cubic1:Object.freeze(r),cubic2:Object.freeze(i)}),Hl=e=>{let{a:n,cubic1:r,cubic2:i,b:a}=e,o=new Fl(n,r,i,a);return Object.freeze({...e,length:()=>o.length(),interpolate:e=>o.compute(e),nearest:e=>{throw Error(`not implemented`)},bbox:()=>{let{x:e,y:n}=o.bbox(),r=e.size,i=n.size;if(r===void 0||i===void 0)throw Error(`x.size not present on calculated bbox`);return cl({x:e.min,y:n.min},r,i)},relativePosition:(e,n)=>{throw Error(`Not implemented`)},distanceToPoint:e=>{throw Error(`Not implemented`)},toSvgString:()=>[`brrup`],kind:`bezier/cubic`})},Ul=(e,n,r)=>({a:Object.freeze(e),b:Object.freeze(n),quadratic:Object.freeze(r)}),Wl=e=>{let{a:n,b:r,quadratic:i}=e,a=new Fl(n,i,r);return Object.freeze({...e,length:()=>a.length(),interpolate:e=>a.compute(e),nearest:e=>{throw Error(`not implemented`)},bbox:()=>{let{x:e,y:n}=a.bbox(),r=e.size,i=n.size;if(r===void 0||i===void 0)throw Error(`x.size not present on calculated bbox`);return cl({x:e.min,y:n.min},r,i)},distanceToPoint:e=>{throw Error(`Not implemented`)},relativePosition:(e,n)=>{throw Error(`Not implemented`)},toString:()=>a.toString(),toSvgString:()=>zl(n,r,i),kind:`bezier/quadratic`})},Gl=(e,n=`circle`)=>{if(Yl(e)&&F(e,`circle`),Number.isNaN(e.radius))throw Error(`${n}.radius is NaN`);if(e.radius<=0)throw Error(`${n}.radius must be greater than zero`)},Kl=(e,n=`circle`)=>{if(!Yl(e))throw Error(`Expected a positioned circle with x,y`);Gl(e,n)},ql=e=>e.x!==void 0&&e.y!==void 0,Jl=e=>e.radius!==void 0,Yl=e=>Jl(e)&&ql(e);function Xl(e,n,r,i,a,o){let[s,c]=Cc(e,n,r,i,a,o);F(s,`a`),F(c,`b`);let l={x:s.x+c.x,y:s.y+c.y};return(L(s)||L(c))&&(l.z=(s.z??0)+(c.z??0)),Object.freeze(l)}var Zl=(e,n)=>(Kl(e,`a`),Yl(n)&&Kl(n,`b`),Tc(e,n)),Ql=(e,n)=>{if(Kl(e,`a`),Yl(n))return Math.max(0,Zl(e,n)-e.radius-n.radius);if(I(n)){let r=Tc(e,n);return r<e.radius?0:r}else throw Error(`Second parameter invalid type`)};function $l(e,n,r,i,a,o){let[s,c]=Cc(e,n,r,i,a,o);F(s,`a`),F(c,`b`);let l={x:s.x*c.x,y:s.y*c.y};return(L(s)||L(c))&&(l.z=(s.z??0)*(c.z??0)),Object.freeze(l)}var eu=(e,n)=>L(e)?Object.freeze({...e,x:e.x*n,y:e.y*n,z:e.z*n}):Object.freeze({...e,x:e.x*n,y:e.y*n}),tu=(...e)=>{if(e===void 0)throw Error(`parameter 'p' is undefined`);if(e.length<2)return!0;for(let n=1;n<e.length;n++)if(e[n].x!==e[0].x||e[n].y!==e[0].y)return!1;return!0};function nu(e,n){return e.x<n.x&&e.y<n.y?-2:e.x>n.x&&e.y>n.y?2:e.x<n.x||e.y<n.y?-1:e.x>n.x||e.y>n.y?1:e.x===n.x&&e.x===n.y?0:NaN}function ru(e,n){return e.y<n.y?-1:e.y>n.y?1:e.x<n.x?-1:+(e.x>n.x)}function iu(e,n){let r=ru(e,n)<=0?e:n;return{topLeft:r,bottomRight:r===e?n:e}}function au(e,n){return e.x===n.x?0:e.x<n.x?-1:1}function ou(e,n){return e.y===n.y?0:e.y<n.y?-1:1}function su(e,n){return e.z===n.z?0:e.z<n.z?-1:1}var cu=(e,n)=>e===n,lu=(e,n)=>(r,i)=>{let a=e.get(r);return a===void 0?(a=n(r,i),e.set(r,a),a):a},uu=Object.defineProperty,du=(e,n)=>{let r={};for(var i in e)uu(r,i,{get:e[i],enumerable:!0});return n||uu(r,Symbol.toStringTag,{value:`Module`}),r},fu=(e,n=0,r={})=>{let i=pu(n,0);N($n(i,`positive`,`interval`));let a=r.fireBeforeWait??!1,o=r.onStartCalled,s=r.signal,c=!1,l=`idle`,u=0,d=0,f=performance.now(),p=n??0,m=!1,h,g=()=>{h!==void 0&&(globalThis.clearTimeout(h),h=void 0,u=0,f=NaN)},_=e=>{i===0?typeof requestAnimationFrame>`u`?h=globalThis.setTimeout(e,0):(h=void 0,requestAnimationFrame(e)):h=globalThis.setTimeout(e,i)},v=()=>{m||(m=!0,l!==`idle`&&(l=`idle`,g()))},y=async()=>{if(s?.aborted&&(l=`idle`),l===`idle`)return;l=`running`,u++,d++;let n=e(u,performance.now()-f),r=typeof n==`object`?await n:n;if(!m){if(l=`scheduled`,r!==void 0&&!r){v();return}m||_(y)}},b=()=>{if(c)throw Error(`Disposed`);if(m=!1,o!==void 0)switch(o(u,performance.now()-f)){case`cancel`:v();return;case`reset`:x();return;case`dispose`:c=!0,v();return}l===`idle`&&(u=0,f=performance.now(),l=`scheduled`,a?y():_(y))},x=()=>{if(c)throw Error(`Disposed`);m=!1,u=0,f=NaN,l!==`idle`&&v(),b()};return{start:b,reset:x,cancel:v,get interval(){return p},get runState(){return l},get startCountTotal(){return d},get startCount(){return u},set interval(e){let n=pu(e,0);N($n(n,`positive`,`interval`)),i=n,p=e},get isDisposed(){return c},get elapsedMs(){return performance.now()-f}}};function pu(e,n){if(mu(e)){if(typeof e==`number`)return e;let n=e.millis??0;return n+=(e.hours??0)*60*60*1e3,n+=(e.mins??0)*60*1e3,n+=(e.secs??0)*1e3,n}else{if(n!==void 0)return n;throw Error(`Not a valid interval: ${JSON.stringify(e)}`)}}function mu(e){if(e==null)return!1;if(typeof e==`number`)return!(Number.isNaN(e)||!Number.isFinite(e));if(typeof e!=`object`)return!1;let n=`millis`in e,r=`secs`in e,i=`mins`in e,a=`hours`in e;return n&&!P(e.millis).success||r&&!P(e.secs).success||i&&!P(e.mins).success||a&&!P(e.hours).success?!1:!!(n||r||a||i)}(typeof window>`u`||!(`requestAnimationFrame`in window))&&typeof window>`u`&&(globalThis.requestAnimationFrame=e=>{setTimeout(e,1)});var hu=class{#e=new Map;get(e){let n=this.#e.get(e);return n?[...n]:[]}size(e){let n=this.#e.get(e);return n?n.length:0}*iterateKey(e){let n=this.#e.get(e);n&&(yield*n.values())}*iterateValues(){for(let e of this.#e.keys())yield*this.iterateKey(e)}*iterateKeys(){yield*this.#e.keys()}addKeyedValues(e,...n){let r=this.#e.get(e);r||(r=[],this.#e.set(e,r)),r.push(...n)}deleteKeyValue(e,n){let r=this.#e.get(e);if(!r)return!1;let i=r.filter(e=>e!==n);return i.length===r.length?!1:(this.#e.set(e,i),!0)}clear(){this.#e.clear()}},gu=class{#e=new hu;#t=!1;dispose(){this.#t||this.clearEventListeners()}get isDisposed(){return this.#t}fireEvent(e,n){if(this.#t)throw Error(`Disposed`);for(let r of this.#e.iterateKey(e))r(n,this)}addEventListener(e,n){if(this.#t)throw Error(`Disposed`);this.#e.addKeyedValues(e,n)}removeEventListener(e,n){this.#t||this.#e.deleteKeyValue(e,n)}clearEventListeners(){this.#t||this.#e.clear()}};function _u(e,n,r){rl(e,`rect`);let i=0,a=0;if(typeof n==`number`){if(r===void 0)throw Error(`x and y coordinate needed`);i=n,a=r}else i=n.x,a=n.y;if(al(e)){if(i-e.x>e.width||i<e.x||a-e.y>e.height||a<e.y)return!1}else if(i>e.width||i<0||a>e.height||a<0)return!1;return!0}function vu(e,n){if(il(e,`rect`),F(n,`pt`),_u(e,n))return 0;let r=Math.max(e.x-n.x,0,n.x-e.x+e.width),i=Math.max(e.y-n.y,0,n.y-e.y+e.height);return Math.hypot(r,i)}var yu=(...e)=>{let n=[],r=e[0];for(let i=1;i<e.length;i++)n.push(Wc(r,e[i])),r=e[i];return n},bu=(e,n)=>{e.debug&&console.log(`queue:${n}`)},xu=(e,n,r)=>{let i=n.length+r.length,a=e.capacity??i,o=i-a,s=e.discardPolicy??`additions`;switch(s){case`additions`:return n.length===0?r.slice(0,r.length-o):n.length===e.capacity?n:[...n,...r.slice(0,o-1)];case`newer`:if(o>=n.length)return n.length===0?[...r.slice(0,a-1),r.at(-1)]:r.slice(Math.max(0,r.length-a),Math.min(r.length,a)+1);{let e=Math.max(1,r.length-n.length),i=r.slice(r.length-e,r.length);return[...n.slice(0,Math.min(n.length,a-1)),...i]}case`older`:return[...n,...r].slice(o);default:throw Error(`Unknown overflow policy ${s}`)}},Su=(e,n,...r)=>{if(e===void 0)throw Error(`opts parameter undefined`);let i=n.length+r.length,a=e.capacity&&i>e.capacity,o=a?xu(e,n,r):[...n,...r];if(e.capacity&&o.length!==e.capacity&&a)throw Error(`Bug! Expected return to be at capacity. Return len: ${o.length} capacity: ${e.capacity} opts: ${JSON.stringify(e)}`);if(!e.capacity&&o.length!==i)throw Error(`Bug! Return length not expected. Return len: ${o.length} expected: ${i} opts: ${JSON.stringify(e)}`);return o},Cu=(e,n)=>{if(n.length===0)throw Error(`Queue is empty`);return n.slice(1)},wu=(e,n)=>n[0],Tu=(e,n)=>n.length===0,Eu=(e,n)=>e.capacity?n.length>=e.capacity:!1,Du=class extends gu{options;data;eq;constructor(e={},n=[]){if(super(),e===void 0)throw Error(`opts parameter undefined`);this.options=e,this.data=n,this.eq=e.eq??cu}clear(){let e=[...this.data];this.data=[],this.fireEvent(`removed`,{finalData:this.data,removed:e}),this.onClear()}onClear(){}at(e){if(e>=this.data.length)throw Error(`Index outside bounds of queue`);let n=this.data.at(e);if(n===void 0)throw Error(`Index appears to be outside range of queue`);return n}enqueue(...e){this.data=Su(this.options,this.data,...e);let n=this.data.length;return this.onEnqueue(this.data,e),n}onEnqueue(e,n){this.fireEvent(`enqueue`,{added:n,finalData:e})}dequeue(){let e=wu(this.options,this.data);if(e!==void 0)return this.data=Cu(this.options,this.data),this.fireEvent(`dequeue`,{removed:e,finalData:this.data}),this.onRemoved([e],this.data),e}onRemoved(e,n){this.fireEvent(`removed`,{removed:e,finalData:n})}removeWhere(e){let n=this.data.length,r=this.data.filter(n=>e(n));return r.length===0?0:(this.data=this.data.filter(n=>!e(n)),this.onRemoved(r,this.data),n-this.data.length)}toArray(){return[...this.data]}get isEmpty(){return Tu(this.options,this.data)}get isFull(){return Eu(this.options,this.data)}get length(){return this.data.length}get peek(){return wu(this.options,this.data)}};function Ou(e={},...n){return new Du({...e},[...n])}var ku=e=>typeof e!=`object`||!e?!1:Symbol.asyncIterator in e;function Au(e){let n;for(let r of e)n=r;return n}function*ju(e,n=(e,n)=>e>n){let r;for(let i of e){if(r===void 0){r=i,yield r;continue}n(i,r)&&(r=i,yield r)}return r}function*Mu(e,n=(e,n)=>e>n){let r;for(let i of e)r===void 0&&(r=i,yield r),n(r,i)&&(r=i,yield r)}async function Nu(e,n={}){let r=n.abort,i;for await(let n of e){if(r?.aborted)return;i=n}return i}async function*Pu(e,n=((e,n)=>e>n)){let r;for await(let i of e){if(r===void 0){r=i,yield r;continue}n(i,r)&&(r=i,yield i)}}async function*Fu(e,n=(e,n)=>e>n){let r;for await(let i of e){if(r===void 0){r=i,yield r;continue}n(r,i)&&(r=i,yield i)}return r}function Iu(e,n=(e,n)=>e>n){return ku(e)?Fu(e,n):Mu(e,n)}function Lu(e,n=(e,n)=>e>n){return ku(e)?Pu(e,n):ju(e,n)}function Ru(e){return ku(e)?Nu(e):Au(e)}var zu=class extends Du{constructor(e={}){e.eq===void 0&&(e={...e,eq:(e,n)=>cu(e.item,n.item)}),super(e)}enqueueWithPriority(e,n){N(P(n,`positive`)),super.enqueue({item:e,priority:n})}changePriority(e,n,r=!1,i){if(e===void 0)throw Error(`Item cannot be undefined`);let a;for(let n of this.data)if(i){if(i(n.item,e)){a=n;break}}else if(this.eq(n,{item:e,priority:0})){a=n;break}if(a===void 0&&!r)throw Error(`Item not found in priority queue. Item: ${JSON.stringify(e)}`);a!==void 0&&this.removeWhere(e=>a===e),this.enqueueWithPriority(e,n)}dequeueMax(){let e=Ru(Lu(this.data,(e,n)=>e.priority>=n.priority));if(e!==void 0)return this.removeWhere(n=>n===e),e.item}dequeueMin(){let e=Ru(Lu(this.data,(e,n)=>e.priority>=n.priority));if(e!==void 0)return this.removeWhere(n=>n.item===e),e.item}peekMax(){let e=Ru(Lu(this.data,(e,n)=>e.priority>=n.priority));if(e!==void 0)return e.item}peekMin(){let e=Ru(Iu(this.data,(e,n)=>e.priority>=n.priority));if(e!==void 0)return e.item}};function Bu(e={}){return new zu(e)}var Vu=class e{opts;#e;constructor(e={},n=[]){if(e===void 0)throw Error(`opts parameter undefined`);this.opts=e,this.#e=n}forEach(e){for(let n=this.#e.length-1;n>=0;n--)e(this.#e[n])}forEachFromFront(e){this.#e.forEach(n=>{e(n)})}enqueue(...n){return new e(this.opts,Su(this.opts,this.#e,...n))}dequeue(){return new e(this.opts,Cu(this.opts,this.#e))}get isEmpty(){return Tu(this.opts,this.#e)}get isFull(){return Eu(this.opts,this.#e)}get length(){return this.#e.length}get peek(){return wu(this.opts,this.#e)}toArray(){return[...this.#e]}},Hu=(e={},...n)=>(e={...e},new Vu(e,[...n])),Uu=du({PriorityMutable:()=>zu,QueueImmutable:()=>Vu,QueueMutable:()=>Du,debug:()=>bu,dequeue:()=>Cu,enqueue:()=>Su,immutable:()=>Hu,isEmpty:()=>Tu,isFull:()=>Eu,mutable:()=>Ou,peek:()=>wu,priority:()=>Bu,trimQueue:()=>xu});(class e extends gu{static shared=new e;_loop;_queue;constructor(){super(),this._queue=Uu.mutable(),this._loop=fu(()=>this.processQueue(),100)}enqueue(e){let n=this._queue.enqueue(e);return this._loop.runState===`idle`&&(this.fireEvent(`started`,{}),this._loop.start()),n}async processQueue(){let e=this._queue.dequeue();if(e===void 0)return this.fireEvent(`empty`,{}),!1;try{let n=await e();this.fireEvent(`progress`,{task:e,remaining:this._queue.length,result:n})}catch(n){this.fireEvent(`error`,{error:n,task:e})}return!0}clear(){this._queue.length!==0&&(this._queue.clear(),this._loop.cancel(),this.fireEvent(`empty`,{}))}get isEmpty(){return this._queue.isEmpty}get length(){return this._queue.length}get runState(){return this._loop.runState}});function Wu(e,n={}){let r=pu(e);if(!r)throw Error(`Param 'duration' not valid`);let i={clampValue:n.clampValue,wrapValue:n.wrapValue,timer:n.timer??Yu()},a;return()=>(a??=Ju(r,i),a.elapsed)}function Gu(e,n={}){let r={...n,timer:Xu()},i;return()=>(i??=Ju(e,r),i.elapsed)}var Ku=()=>({elapsed:1,isDone:!0,reset(){},mod(e){}}),qu=()=>({elapsed:0,isDone:!1,reset(){},mod(){}}),Ju=(e,n={})=>{if(!Number.isFinite(e))return Ku();if(Number.isNaN(e))return qu();let r=n.clampValue??!1,i=n.wrapValue??!1;if(r&&i)throw Error(`clampValue and wrapValue cannot both be enabled`);let a=1,o=n.timer??Yu(),s=0,c=n=>{s=n;let o=n/(e*a);return r?o=lr(o):i&&o>=1&&(o%=1),o};return{mod(e){a=e},get isDone(){return c(s)>=1},get elapsed(){return c(o.elapsed)},reset:()=>{o.reset()}}},Yu=()=>{let e=performance.now();return{reset:()=>{e=performance.now()},get elapsed(){return performance.now()-e}}},Xu=()=>{let e=0;return{reset:()=>{e=0},get peek(){return e},get elapsed(){return++e}}},Zu=(e,n)=>{if(typeof e!=`function`)throw Error(`Param 'fn' should be a function. Got: ${typeof e}`);let r=1;return{get elapsed(){return n.elapsed},get isDone(){return n.isDone},get runState(){return n.isDone?`idle`:`scheduled`},get startCount(){return r},get startCountTotal(){return r},compute:()=>{let r=n.elapsed;return e(r)},reset:()=>{n.reset(),r++}}},Qu=class{seenCount;storeIntermediate;resetAfterSamples;sampleLimit;id;debug;constructor(e={}){this.id=e.id??`tracker`,this.debug=e.debug??!1,this.sampleLimit=e.sampleLimit??-1,this.resetAfterSamples=e.resetAfterSamples??-1,this.storeIntermediate=e.storeIntermediate??(this.sampleLimit>-1||this.resetAfterSamples>-1),this.seenCount=0,this.debug&&console.log(`TrackerBase: sampleLimit: ${this.sampleLimit} resetAfter: ${this.resetAfterSamples} store: ${this.storeIntermediate}`)}reset(){this.seenCount=0,this.onReset()}seen(...e){this.resetAfterSamples>0&&this.seenCount>this.resetAfterSamples?this.reset():this.sampleLimit>0&&this.seenCount>this.sampleLimit*2&&(this.seenCount=this.trimStore(this.sampleLimit),this.onTrimmed(`resize`)),this.seenCount+=e.length;let n=this.filterData(e);return this.computeResults(n)}},$u=class extends Qu{values;constructor(e={}){super(e),this.values=[]}onTrimmed(e){}trimStore(e){return e>=this.values.length||(this.values=this.values.slice(-e)),this.values.length}onReset(){this.values=[]}filterData(e){let n=e.map(e=>`at`in e?e:{...e,at:Date.now()}),r=n.at(-1);if(this.storeIntermediate)this.values.push(...n);else switch(this.values.length){case 0:this.values.push(r);break;case 1:this.values.push(r);break;case 2:this.values[1]=r;break}return n}get last(){return this.values.length===1?this.values[0]:this.values.at(-1)}get initial(){return this.values.at(0)}get size(){return this.values.length}get elapsed(){if(this.values.length===0)throw Error(`No values seen yet`);return Date.now()-this.values[0].at}get timespan(){let e=this.initial,n=this.last;return!e||!n?NaN:n.at-e.at}},ed=class{store;gog;constructor(e){this.store=new Map,this.gog=lu(this.store,e)}get size(){return this.store.size}has(e){return this.store.has(e)}seen(e,...n){return this.getTrackedValue(e,...n).seen(...n)}getTrackedValue(e,...n){if(e===null)throw Error(`id parameter cannot be null`);if(e===void 0)throw Error(`id parameter cannot be undefined`);return this.gog(e,n[0])}delete(e){this.store.delete(e)}reset(){this.store=new Map}*ids(){yield*this.store.keys()}*tracked(){yield*this.store.values()}*trackedByAge(){let e=[...this.store.values()];e.sort((e,n)=>{let r=e.elapsed,i=n.elapsed;return r===i?0:r>i?-1:1});for(let n of e)yield n}*valuesByAge(){for(let e of this.trackedByAge())yield e.last}*last(){for(let e of this.store.values())yield e.last}*initialValues(){for(let e of this.store.values())yield e.initial}get(e){return this.store.get(e)}};function td(e,n,r,i){if(I(e)){if(typeof n==`number`&&r!==void 0)N(P(n,`positive`,`width`),P(r,`positive`,`height`));else{if(!ol(n))throw Error(`Expected second parameter to be a rect`);r=n.height,n=n.width}return Object.freeze({x:e.x/n,y:e.y/r})}else{if(N(P(e,`positive`,`x`)),typeof n!=`number`)throw TypeError(`Expecting second parameter to be a number (width)`);if(typeof r!=`number`)throw TypeError(`Expecting third parameter to be a number (height)`);if(N(P(n,`positive`,`y`)),N(P(r,`positive`,`width`)),i===void 0)throw Error(`Expected height parameter`);return N(P(i,`positive`,`height`)),Object.freeze({x:e/r,y:n/i})}}function nd(e,n,r,i,a,o){let[s,c]=Cc(e,n,r,i,a,o);if(F(s,`a`),F(c,`b`),c.x===0)throw TypeError(`Cannot divide by zero (b.x is 0)`);if(c.y===0)throw TypeError(`Cannot divide by zero (b.y is 0)`);let l={x:s.x/c.x,y:s.y/c.y};if(L(s)||L(c)){if(c.z===0)throw TypeError(`Cannot divide by zero (b.z is 0)`);l.z=(s.z??0)/(c.z??0)}return Object.freeze(l)}function rd(e,n,r){let i=wc(e,n,r);return Er(i,`divisor`),(e,n,r)=>{let a=wc(e,n,r);return a.z===void 0?Object.freeze({x:a.x/i.x,y:a.y/i.y}):Object.freeze({x:a.x/i.x,y:a.y/i.y,z:a.z/(i.z??1)})}}function id(e){if(L(e))return Object.freeze({...e,x:Math.abs(e.x),y:Math.abs(e.y),z:Math.abs(e.z)});if(I(e))return Object.freeze({...e,x:Math.abs(e.x),y:Math.abs(e.y)});throw TypeError(`Param 'pt' is not a point`)}function ad(e,n){return F(e,`pt`),L(e)?Object.freeze({...e,x:n(e.x,`x`),y:n(e.y,`y`),z:n(e.z,`z`)}):Object.freeze({...e,x:n(e.x,`x`),y:n(e.y,`y`)})}var od=(...e)=>{if(!Array.isArray(e))throw Error(`Expected list of points`);let n=e.reduce((e,n)=>{if(n===void 0)return e;if(Array.isArray(n))throw TypeError(`'points' list contains an array. Did you mean: centroid(...myPoints)?`);if(!I(n))throw Error(`'points' contains something which is not a point: ${JSON.stringify(n)}`);return{x:e.x+n.x,y:e.y+n.y}},{x:0,y:0});return Object.freeze({x:n.x/e.length,y:n.y/e.length})};function sd(e,n=0,r=1){return L(e)?Object.freeze({x:lr(e.x,n,r),y:lr(e.y,n,r),z:lr(e.z,n,r)}):Object.freeze({x:lr(e.x,n,r),y:lr(e.y,n,r)})}var cd=(...e)=>{let n=[...e].sort(au);if(n.length===1)return n;let r=e=>{let n=[];for(let r of e){for(;n.length>=2;){let e=n.at(-1),i=n.at(-2);if((e.x-i.x)*(r.y-i.y)>=(e.y-i.y)*(r.x-i.x))n.pop();else break}n.push(r)}return n.pop(),n},i=r(n),a=r(n.reverse());return i.length===1&&a.length===1&&tu(a[0],i[0])?i:[...i,...a]},ld=(e,n)=>{if(sl(n))return vu(n,e);if(Yl(n))return Ql(n,e);if(I(n))return Tc(e,n);throw Error(`Unknown shape`)},ud=(e,n)=>{if(sl(n))return vu(n,e);if(Yl(n))return Ql(n,e);if(I(n))return Tc(e,n);throw Error(`Unknown shape`)},dd=e=>[e.x,e.y],fd=(...e)=>cr(e.map(e=>dd(e)));function pd(e,n){return e.x*n.y-e.y*n.x}function md(e,n,r,i){return e*i-n*r}function hd(e,n,r){if(Array.isArray(e)){if(e.length===3)return Object.freeze({x:e[0],y:e[1],z:e[2]});if(e.length===2)return Object.freeze({x:e[0],y:e[1]});throw Error(`Expected array of length two or three, got ${e.length}`)}else{if(e===void 0)throw Error(`Requires an array of [x,y] or x,y parameters at least`);if(Number.isNaN(e))throw Error(`x is NaN`);if(n===void 0)throw Error(`Param 'y' is missing`);if(Number.isNaN(n))throw Error(`y is NaN`);return Object.freeze(r===void 0?{x:e,y:n}:{x:e,y:n,z:r})}}var gd=e=>{if(typeof e!=`string`)throw TypeError(`Param 'str' ought to be a string. Got: ${typeof e}`);let n=e.indexOf(`,`),r=Number.parseFloat(e.substring(0,n)),i=e.indexOf(`,`,n+1);return i>0?{x:r,y:Number.parseFloat(e.substring(n+1,i-n+2)),z:Number.parseFloat(e.substring(i+1))}:{x:r,y:Number.parseFloat(e.substring(n+1))}},_d=(...e)=>{let n=[];if(Array.isArray(e[0]))for(let r of e){if(r.length%2!=0)throw Error(`coords array should be even-numbered`);n.push(Object.freeze({x:r[0],y:r[1]}))}else{if(e.length%2!=0)throw Error(`Expected even number of elements: [x,y,x,y...]`);for(let r=0;r<e.length;r+=2)n.push(Object.freeze({x:e[r],y:e[r+1]}))}return n};function vd(e,n,r,i=!1){return el(e,n,r,i)}var yd=(e,n,r=!1)=>tl({a:e,b:n},r),bd=(e,n=`both`)=>{switch(n){case`both`:return L(e)?Object.freeze({...e,x:e.x*-1,y:e.y*-1,z:e.z*-1}):Object.freeze({...e,x:e.x*-1,y:e.y*-1});case`x`:return Object.freeze({...e,x:e.x*-1});case`y`:return Object.freeze({...e,y:e.y*-1});case`z`:if(L(e))return Object.freeze({...e,z:e.z*-1});throw Error(`pt parameter is missing z`);default:throw Error(`Unknown what parameter. Expecting 'both', 'x' or 'y'`)}},xd=(e,n=1,r=0)=>{let i=Tc(e),a=1;return i>n?a=n/i:i<r&&(a=r/i),a===1?e:$l(e,a,a)},Sd=(...e)=>Kc((e,n)=>e.x<=n.x?e:n,...e),Cd=(...e)=>Kc((e,n)=>e.x>=n.x?e:n,...e),wd=(e,n)=>{if(I(e)&&(n=e.y,e=e.x),n===void 0)throw Error(`Expected y`);return Math.hypot(e,n)},Td=(e,n)=>{let r=wc(e,n),i=wd(r);return i===0?Pc:Object.freeze({...r,x:r.x/i,y:r.y/i})},Ed=(e,...n)=>Dd(...n)(e),Dd=(...e)=>n=>e.reduce((e,n)=>n(e),n),Od=Object.freeze({x:0,y:0}),kd=Math.PI*2,Ad=Math.PI;function jd(e,n=``,r=Od){e=Dc(e,r);let i=Math.atan2(e.y,e.x);return n===`unipolar`&&i<0?i+=kd:n===`bipolar`&&(i>Ad?i-=kd:i<=-Ad&&(i+=kd)),Object.freeze({distance:Tc(e),angleRadian:i})}function Md(e){return Dc(e.b,e.a)}function Nd(e){return N(Zc(e,`line`)),jd(Dc(e.b,e.a))}var Pd=(e,n)=>{let r=wc(e,n),i=0,a=0,o=0,s=performance.now(),c=r;return(e,n)=>{let l=wc(e,n);i+=l.x,a+=l.y,o++;let u=Tc(l,r),d=Tc(l,c),f=performance.now(),p=d/(f-s);return s=f,c=l,Object.freeze({angle:Vc(l,r),distanceFromStart:u,distanceFromLast:d,speed:p,centroid:od(l,r),average:{x:i/o,y:a/o}})}},Fd=Object.freeze({x:NaN,y:NaN}),Id=Object.freeze({x:NaN,y:NaN,z:NaN}),Ld=class extends $u{initialRelation;markRelation;lastResult;constructor(e={}){super(e)}onTrimmed(e){this.initialRelation=void 0}onReset(){super.onReset(),this.lastResult=void 0,this.initialRelation=void 0,this.markRelation=void 0}mark(){this.markRelation=Pd(this.last)}computeResults(e){let n=this.last,r=this.values.at(-2);if(this.initialRelation===void 0&&this.initial)this.initialRelation=Pd(this.initial);else if(this.initialRelation===void 0)throw Error(`Bug: No initialRelation, and this.inital is undefined?`);let i=Pd(r===void 0?n:r),a=this.initialRelation(n),o=this.markRelation===void 0?void 0:this.markRelation(n),s=r===void 0?0:$c(r,n,!0)/(n.at-r.at),c={fromInitial:a,fromLast:{...i(n),speed:s},fromMark:o,values:[...this.values]};return this.lastResult=c,c}get line(){return this.values.length===1?[]:yu(...this.values)}get vectorPolar(){return Nd(this.lineStartEnd)}get vectorCartesian(){return Md(this.lineStartEnd)}get lineStartEnd(){let e=this.initial;return this.values.length<2||!e?$d:{a:e,b:this.last}}distanceFromStart(e=!1){let n=this.initial;return this.values.length>=2&&n!==void 0?e?Ec(n,this.last):Tc(n,this.last):0}speedFromStart(e=!1){let n=this.lengthTotal(e),r=this.timespan;return Number.isNaN(r)||n===0?0:Math.abs(n)/r}speedFromLast(e=!1){let n=this.lastResult;return n?n.fromLast.speed:0}difference(){let e=this.initial;return this.values.length>=2&&e!==void 0?Dc(this.last,e):Fd}angleFromStart(){let e=this.initial;if(e!==void 0&&this.values.length>2)return Vc(e,this.last)}lengthTotal(e=!1){if(this.values.length===1)return 0;let n=this.line;return $c(n,e)}lengthAverage(e=!1){return this.lengthTotal(e)/this.values.length}get x(){return this.last.x}get y(){return this.last.y}get z(){return this.last.z}},Rd=class extends ed{constructor(e={}){super((n,r)=>{if(r===void 0)throw Error(`Requires start point`);let i=new Ld({...e,id:n});return i.seen(r),i})}get(e){return super.get(e)}},zd=class extends Ld{seenEvent(e){if(`getCoalescedEvents`in e){let n=e.getCoalescedEvents().map(e=>({x:e.clientX,y:e.clientY}));return this.seen(...n)}else return this.seen({x:e.clientX,y:e.clientY})}},Bd=class extends ed{constructor(e={}){super((n,r)=>{if(r===void 0)throw Error(`Requires start point`);let i=new zd({...e,id:n});return i.seen(r),i})}get(e){return super.get(e)}seenEvent(e){if(`getCoalescedEvents`in e){let n=e.getCoalescedEvents().map(e=>super.seen(e.pointerId.toString(),e));return Promise.all(n)}else return Promise.all([super.seen(e.pointerId.toString(),e)])}},Vd=(e,n,r)=>{let i=Dc(e,n),a=Dc(r,n);return L(i)&&L(a)?(i.x*a.x+i.y*a.y+i.z*a.z)/(a.x*a.x+a.y*a.y+a.z*a.z):(i.x*a.x+i.y*a.y)/(a.x*a.x+a.y*a.y)},Hd=(e,n,r)=>({x:Math.cos(r)*n+e.x,y:Math.sin(r)*n+e.y});function Ud(e,n,r=!0){if(F(e,`pt`),F(n,`snap`),L(e)){if(!L(n))throw TypeError(`Param 'snap' is missing 'z' field`);return Object.freeze({x:hr(e.x,n.x,r),y:hr(e.y,n.y,r),z:hr(e.z,n.z,r)})}return Object.freeze({x:hr(e.x,n.x,r),y:hr(e.y,n.y,r)})}var Wd=e=>(e===void 0&&(e=Math.random),Object.freeze({x:e(),y:e()})),Gd=e=>(e===void 0&&(e=Math.random),Object.freeze({x:e(),y:e(),z:e()})),Kd=(e,n,r)=>{r===void 0&&(r={x:0,y:0});let i=r;for(let r of e)i=n(r,i);return i};function qd(e,n,r){r===void 0&&(r={x:0,y:0}),F(r,`origin`),N(P(n,``,`amountRadian`));let i=Array.isArray(e);if(n===0)return e;i||(e=[e]);let a=e;for(let[e,n]of a.entries())F(n,`pt[${e}]`);let o=a.map(e=>zc(e,r)).map(e=>Nc(e,n)).map(e=>Rc(e,r));return i?o:o[0]}var Jd=(e,n)=>{let r=[[Math.cos(n),-Math.sin(n)],[Math.sin(n),Math.cos(n)]],i=[];for(let[n,a]of e.entries())i[n]=[r[0][0]*a[0]+r[0][1]*a[1],r[1][0]*a[0]+r[1][1]*a[1]];return i},Yd=(e,n,r)=>{let i=wc(e,n);return r??=n,r??=2,Object.freeze({...i,x:pr(r,i.x),y:pr(r,i.y)})},Xd=(e,n,r)=>{F(e,`a`),F(n,`b`),typeof r==`number`?(N(P(r,`positive`,`maxRange`)),r={x:r,y:r}):F(r,`maxRange`);let i=Math.abs(n.x-e.x),a=Math.abs(n.y-e.y);return i<=r.x&&a<=r.y},Zd=(e,n,r)=>(n===void 0&&(n={x:1,y:1}),r===void 0&&(r={x:0,y:0}),F(e,`pt`),F(n,`ptMax`),F(r,`ptMin`),Object.freeze({x:dr(e.x,r.x,n.x),y:dr(e.y,r.y,n.y)})),Qd=Sc({Empty:()=>Pc,Empty3d:()=>Ic,Placeholder:()=>Fd,Placeholder3d:()=>Id,PointTracker:()=>Ld,PointsTracker:()=>Rd,Unit:()=>Fc,Unit3d:()=>Lc,UserPointerTracker:()=>zd,UserPointersTracker:()=>Bd,abs:()=>id,angleRadian:()=>Vc,angleRadianCircle:()=>Hc,angleRadianThreePoint:()=>Uc,apply:()=>ad,average:()=>Ar,averager:()=>jr,bbox:()=>qc,bbox3d:()=>Jc,centroid:()=>od,clamp:()=>sd,clampMagnitude:()=>xd,compare:()=>nu,compareByX:()=>au,compareByY:()=>ou,compareByZ:()=>su,compareRowwise:()=>ru,convexHull:()=>cd,cross:()=>pd,crossProductRaw:()=>md,distance:()=>Tc,distance2d:()=>Ec,distanceToCenter:()=>ld,distanceToExterior:()=>ud,divide:()=>nd,divider:()=>rd,dotProduct:()=>fd,findMinimum:()=>Kc,from:()=>hd,fromNumbers:()=>_d,fromString:()=>gd,getAsBounds:()=>iu,getPointParameter:()=>wc,getTwoPointParameters:()=>Cc,guard:()=>F,guardNonZeroPoint:()=>Er,interpolate:()=>vd,interpolator:()=>yd,invert:()=>bd,isEmpty:()=>Dr,isEqual:()=>tu,isNaN:()=>wr,isNull:()=>Cr,isPlaceholder:()=>Or,isPoint:()=>I,isPoint3d:()=>L,leftmost:()=>Sd,multiply:()=>$l,multiplyScalar:()=>eu,normalise:()=>Td,normaliseByRect:()=>td,pipeline:()=>Dd,pipelineApply:()=>Ed,pointTest:()=>Tr,progressBetween:()=>Vd,project:()=>Hd,quantiseEvery:()=>Ud,random:()=>Wd,random3d:()=>Gd,reduce:()=>Kd,relation:()=>Pd,rightmost:()=>Cd,rotate:()=>qd,rotatePointArray:()=>Jd,round:()=>Yd,subtract:()=>Dc,sum:()=>Xl,to2d:()=>kc,to3d:()=>Ac,toArray:()=>dd,toIntegerValues:()=>Oc,toString:()=>jc,withinRange:()=>Xd,wrap:()=>Zd}),$d=Object.freeze({a:Object.freeze({x:0,y:0}),b:Object.freeze({x:0,y:0})});Object.freeze({a:Object.freeze({x:NaN,y:NaN}),b:Object.freeze({x:NaN,y:NaN})});var ef=Object.defineProperty,tf=(e,n)=>{let r={};for(var i in e)ef(r,i,{get:e[i],enumerable:!0});return n||ef(r,Symbol.toStringTag,{value:`Module`}),r},nf=Math.pow,rf=1/Math.sqrt(2*Math.PI),af=(e=.4)=>n=>{let r=rf/e,i=-2.5,a=(n-.5)/e;a*=a,i*=a;let o=r*nf(Math.E,i);return o>1?1:o<0?0:o},of=tf({arch:()=>mf,backIn:()=>Nf,backInOut:()=>If,backOut:()=>Pf,bell:()=>Bf,bounceIn:()=>zf,bounceInOut:()=>Hf,bounceOut:()=>df,circIn:()=>jf,circInOut:()=>Ff,circOut:()=>Mf,cubicIn:()=>Cf,cubicOut:()=>wf,elasticIn:()=>Lf,elasticInOut:()=>Vf,elasticOut:()=>Rf,expoIn:()=>Df,expoInOut:()=>Af,expoOut:()=>Of,quadIn:()=>yf,quadInOut:()=>Sf,quadOut:()=>bf,quartIn:()=>Tf,quartOut:()=>Ef,quintIn:()=>ff,quintInOut:()=>kf,quintOut:()=>pf,sineIn:()=>_f,sineInOut:()=>xf,sineOut:()=>vf,smootherstep:()=>gf,smoothstep:()=>hf}),sf=Math.sqrt,K=Math.pow,cf=Math.cos,lf=Math.PI,uf=Math.sin,df=e=>{let n=7.5625,r=2.75;return e<1/r?n*e*e:e<2/r?n*(e-=1.5/r)*e+.75:e<2.5/r?n*(e-=2.25/r)*e+.9375:n*(e-=2.625/r)*e+.984375},ff=e=>e*e*e*e*e,pf=e=>1-K(1-e,5),mf=e=>e*(1-e)*4,hf=e=>e*e*(3-2*e),gf=e=>(e*(e*6-15)+10)*e*e*e,_f=e=>1-cf(e*lf/2),vf=e=>uf(e*lf/2),yf=e=>e*e,bf=e=>1-(1-e)*(1-e),xf=e=>-(cf(lf*e)-1)/2,Sf=e=>e<.5?2*e*e:1-K(-2*e+2,2)/2,Cf=e=>e*e*e,wf=e=>1-K(1-e,3),Tf=e=>e*e*e*e,Ef=e=>1-K(1-e,4),Df=e=>e===0?0:K(2,10*e-10),Of=e=>e===1?1:1-K(2,-10*e),kf=e=>e<.5?16*e*e*e*e*e:1-K(-2*e+2,5)/2,Af=e=>e===0?0:e===1?1:e<.5?K(2,20*e-10)/2:(2-K(2,-20*e+10))/2,jf=e=>1-sf(1-K(e,2)),Mf=e=>sf(1-K(e-1,2)),Nf=e=>2.70158*e*e*e-1.70158*e*e,Pf=e=>1+2.70158*K(e-1,3)+1.70158*K(e-1,2),Ff=e=>e<.5?(1-sf(1-K(2*e,2)))/2:(sf(1-K(-2*e+2,2))+1)/2,If=e=>{let n=1.70158*1.525;return e<.5?K(2*e,2)*(3.5949095*2*e-n)/2:(K(2*e-2,2)*(3.5949095*(e*2-2)+n)+2)/2},Lf=e=>{let n=2*lf/3;return e===0?0:e===1?1:-K(2,10*e-10)*uf((e*10-10.75)*n)},Rf=e=>{let n=2*lf/3;return e===0?0:e===1?1:K(2,-10*e)*uf((e*10-.75)*n)+1},zf=e=>1-df(1-e),Bf=af(),Vf=e=>{let n=2*lf/4.5;return e===0?0:e===1?1:e<.5?-(K(2,20*e-10)*uf((20*e-11.125)*n))/2:K(2,-20*e+10)*uf((20*e-11.125)*n)/2+1},Hf=e=>e<.5?(1-df(1-2*e))/2:(1+df(2*e-1))/2,Uf=(e=0,n=0)=>{let r={x:gr(e,-1,1,0,1),y:gr(e,-1,1,1,0)},i=Qd.interpolate(Math.abs(e),Qd.Empty,r);e!==0&&n>0&&(i=e>0?Qd.interpolate(n,i,{x:0,y:r.x*2}):Qd.interpolate(n,i,{x:r.y*2,y:0}));let a=Il.cubic(Qd.Empty,Qd.Unit,i,r),o=Il.interpolator(a);return e=>o(e)},Wf=(e,n)=>{N(tr(e,`fn`));let r;return()=>(r===void 0&&(r=Wu(n,{clampValue:!0})),e(r()))},Gf=(e,n)=>{N(tr(e,`fn`));let r=Yu(),i=pu(n);if(i===void 0)throw Error(`Param 'duration' not provided`);return Zu(e,Ju(i,{timer:r,clampValue:!0}))},Kf=(e,n)=>{N(tr(e,`fn`));let r;return()=>(r===void 0&&(r=Gu(n,{clampValue:!0})),e(r()))},qf=(e,n)=>(N(tr(e,`fn`)),Zu(e,Ju(n,{timer:Xu(),clampValue:!0}))),Jf=tf({Named:()=>of,create:()=>Yf,get:()=>np,getEasingNames:()=>ip,line:()=>Uf,tickEasing:()=>$f,ticks:()=>Qf,time:()=>Zf,timeEasing:()=>Xf}),Yf=e=>{let n=ep(e.name??`quintIn`)??e.fn;if(n===void 0)throw Error(`Either 'name' or 'fn' must be set`);if(`duration`in e)return Zf(n,e.duration);if(`ticks`in e)return Qf(n,e.ticks);throw Error(`Expected 'duration' or 'ticks' in options`)},Xf=(e,n)=>Gf(ep(e),n),Zf=(e,n)=>Wf(ep(e),n),Qf=(e,n)=>Kf(ep(e),n),$f=(e,n)=>qf(ep(e),n),ep=e=>{let n=typeof e==`function`?e:np(e);if(n===void 0)throw Error(typeof e==`string`?`Easing function not found: '${e}'`:`Easing function not found`);return n},tp,np=function(e){N(nr(e,`non-empty`,`easingName`));let n=rp().get(e.toLowerCase());if(n===void 0)throw Error(`Easing not found: '${e}'`);return n};function rp(){if(tp===void 0){tp=new Map;for(let[e,n]of Object.entries(of))tp.set(e.toLowerCase(),n);return tp}else return tp}function*ip(){yield*rp().keys()}var ap=`oklch(60% 0.15 140)`,op=[`green`,`yellow`,`red`],sp=new Map;function cp(e){let n=e.join(`\0`);return sp.has(n)||sp.set(n,lc.scale(e,{stepsBetween:99})),sp.get(n)}function lp(e,n){let r=getComputedStyle(e),i=r.getPropertyValue(n).trim(),a=/var\((--[\w-]+)(?:,\s*(.*))?\)/g;for(let e=0;e<5&&i.includes(`var(`);e++)i=i.replace(a,(e,n,i)=>r.getPropertyValue(n).trim()||(i?i.trim():``));return i}function up(e){return lp(e,`--plot-color`)||ap}function dp(e){if(!e.trim())return op;let n=e.split(`,`).map(e=>e.trim()).filter(Boolean);return n.length>=2?n:op}function fp(e){try{let n=lc.HslSpace.fromCss(e,{scalar:!0});return{h:n.h,s:n.s,l:n.l}}catch{return{h:.39,s:.5,l:.55}}}function pp(e,n){let r=Math.max(0,Math.min(1,e));if(n.easingName)try{return Math.max(0,Math.min(1,Jf.get(n.easingName)(r)))}catch{}return n.valueMap?Math.max(0,Math.min(1,n.valueMap(r))):r}function mp(e,n,r){let i=pp(e,r);switch(r.mode){case`fixed`:return{fill:n,opacity:1};case`opacity`:return{fill:n,opacity:Math.max(.04,i)};case`hue`:{let e=fp(n);return{fill:`hsl(${Math.round(i*360)}deg ${Math.round(e.s*100)}% ${Math.round(e.l*100)}%)`,opacity:1}}case`saturation`:{let e=fp(n);return{fill:`hsl(${Math.round(e.h*360)}deg ${Math.round(i*100)}% ${Math.round(e.l*100)}%)`,opacity:1}}case`lightness`:{let e=fp(n);return{fill:`hsl(${Math.round(e.h*360)}deg ${Math.round(e.s*100)}% ${Math.round(i*100)}%)`,opacity:1}}case`scale`:{let e=cp(r.palette.length>=2?r.palette:op);return{fill:e[Math.min(e.length-1,Math.floor(i*e.length))],opacity:1}}default:return{fill:n,opacity:1}}}function hp(e,n,r){if(r===`opacity`)return{...e,opacity:e.opacity*Math.max(.08,n**.6)};if(r===`desaturation`){let r=fp(e.fill),i=r.s*n;return{fill:`hsl(${Math.round(r.h*360)}deg ${Math.round(i*100)}% ${Math.round(r.l*100)}%)`,opacity:e.opacity}}return e}var gp=class{#e;#t;#n;#r;constructor(e={}){this.values=[],this.#e=br(),this.#t={min:0,max:0},this.#n=null,this.#r={capacityLimit:100,persistentScaling:!0,fixedRange:null,...e},this.#r.fixedRange!==null&&(this.#n=this.#r.fixedRange)}setRange(e,n){this.#n={min:e,max:n}}unsetRange(){this.#n=null,this.#i()}get isAutoRange(){return this.#n===null}add(e){if(typeof e==`number`)this.values.push(e),this.isAutoRange&&(this.#t=this.#e.seen(e));else if(this.values.push(...e),this.isAutoRange)for(let n of e)this.#t=this.#e.seen(n);this.values.length>this.#r.capacityLimit&&(this.values=this.values.slice(this.values.length-this.#r.capacityLimit),!this.#r.persistentScaling&&this.isAutoRange&&this.#i())}#i(){this.#r.persistentScaling||(this.#e=br());for(let e=0;e<this.values.length;e++)this.#t=this.#e.seen(this.values[e])}set(e){e.length>this.#r.capacityLimit&&(e=e.slice(e.length-this.#r.capacityLimit)),this.values=e,this.#i()}get range(){return this.#n?this.#n:this.#t}clear(){let e=this.values.length===0;return this.values=[],this.#r.persistentScaling||this.#i(),!e}},_p=null,vp=null;function yp(){if(_p)return _p;let e=document.createElement(`div`);return e.style.cssText=`
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    background: var(--surface-5);
    color: var(--surface-5-text);
    border: var(--border);
    border-radius: var(--radius-l, 6px);
    box-shadow: var(--shadow-m);
    padding: 2px 6px;
    font-size: 10px;
    font-family: ui-monospace, monospace;
    opacity: 0;
    transition: opacity 0.1s ease;
  `,document.body.appendChild(e),_p=e,e}function bp(e,n,r,i){let a=yp();vp=e,a.textContent=i,a.style.whiteSpace=`nowrap`,a.style.left=`${n+14}px`,a.style.top=`${r+14}px`,a.style.opacity=`1`}function xp(e,n,r,i){let a=yp();vp=e,a.innerHTML=i,a.style.whiteSpace=`normal`,a.style.left=`${n+14}px`,a.style.top=`${r+14}px`,a.style.opacity=`1`}function Sp(e){if(vp!==e)return;let n=yp();n.style.opacity=`0`,vp=null}function Cp(e,n){return Math.max(1,Math.min(e,n)/25)}function wp(e,n,r){if(r===0)return 3;let i=e/r;return Math.max(1.5,Math.min(i*.45,n*.2,8))}function Tp(e,n,r){let i=r-n;return i===0?.5:(e-n)/i}var Ep=[`oklch(60% 0.15 30)`,`oklch(60% 0.15 90)`,`oklch(60% 0.15 150)`,`oklch(60% 0.15 210)`,`oklch(60% 0.15 270)`,`oklch(60% 0.15 330)`,`oklch(60% 0.15 60)`,`oklch(60% 0.15 180)`],Dp=class extends E{constructor(...e){super(...e),this.layout=`overlap`,this.gridMinWidth=200,this.valueFormat=e=>e?e.toFixed(2):``,this.#e=new Map,this.#t=[],this.#n=new Set,this.#r=new Map}#e;#t;#n;#r;addData(e,n,r=!1){return this.#i(e,n,r)}setData(e,n,r=!1){let[i,a]=this.#a(e);return this.#n.has(e)||(this.#n.add(e),this.#t.push(e)),i.set(n,r),a&&this.requestUpdate(),i}setObjects(e,n=!1){let r=Object.entries(e);for(let[e,n]of r)this.setData(e,n,!0);n||this.redraw()}redraw(){for(let e of this.#e.values())e.redraw()}addObject(e,n=!1){let r=Object.entries(e);for(let[e,n]of r)this.#i(e,n,!0);n||this.redraw()}styleSeries(e,n){let r={};for(let[e,i]of Object.entries(n))r[e.startsWith(`--`)?e:`--${e}`]=i;let i=this.#e.get(e);if(!i){this.#r.set(e,r);return}for(let[e,n]of Object.entries(r))i.style.setProperty(e,n)}clear(){let e=!1;for(let n of this.#e.values())e||=n.clear();return e}clearSeries(e){let n=this.#e.get(e);return n?(n.clear(),!0):!1}get series(){return[...this.#t]}#i(e,n,r=!1){let[i,a]=this.#a(e);return this.#n.has(e)||(this.#n.add(e),this.#t.push(e)),i.add(n,r),a&&this.requestUpdate(),i}#a(e){let n=this.#e.get(e);if(n)return[n,!1];n=document.createElement(`ixfx-plot-single-axis`),n.tooltips=!1,this.#e.set(e,n);let r=this.#e.size%Ep.length;n.style.setProperty(`--plot-color`,Ep[r]);let i=this.#r.get(e);if(i){for(let[e,r]of Object.entries(i))n.style.setProperty(e,r);this.#r.delete(e)}return n.addEventListener(`plot-datapoint-click`,n=>{let r=n;this.dispatchEvent(new CustomEvent(`plot-datapoint-click`,{detail:{...r.detail,series:e},bubbles:!0,composed:!0}))}),n.addEventListener(`plot-pointer-move`,e=>{let n=e;this.#o(n.detail.clientX,n.detail.clientY,n.detail.index)}),n.addEventListener(`plot-pointer-leave`,()=>{this.#s()}),[n,!0]}#o(e,n,r){if(r<0){Sp(this);return}let i=[];for(let[e,n]of this.#e){let a=n.getValueAt(r);if(a===void 0)continue;let o=getComputedStyle(n).getPropertyValue(`--plot-color`).trim();i.push(`<span style="color:${o}">${this.#c(e)}</span> ${this.valueFormat(a)}`)}if(i.length===0){Sp(this);return}xp(this,e,n,i.join(`<br>`))}#s(){Sp(this)}#c(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}render(){let e=this.layout===`grid`?`--grid-min-width: ${this.gridMinWidth}px`:``;return C`
      <div
        id="container"
        class="layout layout-${this.layout}"
        part="container"
        style=${e}
      >
        ${bc(this.#t,e=>e,e=>this.#a(e)[0])}
      </div>
    `}static{this.styles=_`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 40px;
      --plot-color: var(--accent);
    }

    #container {
      width: 100%;
      height: 100%;
    }

    #container.layout-overlap {
      display: grid;
    }
    #container.layout-overlap > * {
      grid-area: 1 / 1;
      background: transparent;
    }

    #container.layout-horizontal {
      display: flex;
      flex-direction: row;
      gap: var(--space-s, 4px);
    }
    #container.layout-horizontal > * {
      flex: 1;
      min-width: 0;
    }

    #container.layout-vertical {
      display: flex;
      flex-direction: column;
      gap: var(--space-s, 4px);
    }
    #container.layout-vertical > * {
      flex: 1;
      min-height: 0;
    }

    #container.layout-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--grid-min-width, 200px), 1fr));
      gap: var(--space-s, 4px);
    }
  `}};k([A()],Dp.prototype,`layout`,void 0),k([A({attribute:`grid-min-width`,type:Number})],Dp.prototype,`gridMinWidth`,void 0),Dp=k([O(`ixfx-plot-multi-axis`)],Dp);var Op=class extends E{constructor(...e){super(...e),this.orientation=`horizontal`,this.resolution=.1,this.capacity=100,this.title=``,this.paused=!1,this._width=100,this._height=40,this.#e=new gp({capacityLimit:100,persistentScaling:!0}),this.#t=!1}#e;#t;#n(e){return e?e.trim().split(/[,\s;]+/).map(e=>Number.parseFloat(e)).filter(e=>!Number.isNaN(e)):[]}add(e){this.#t=!0,this.#e.add(e),!this.paused&&this.requestUpdate()}set(e){this.#t=!0,this.#e.set(e),!this.paused&&this.requestUpdate()}clear(){this.#e.clear(),this.requestUpdate()}firstUpdated(e){if(this._width=this.clientWidth||100,this._height=this.clientHeight||40,new ResizeObserver(e=>{let n=e[0];this._width=n.contentRect.width,this._height=n.contentRect.height}).observe(this),!this.#t){let e=this.#n(this.textContent??``);e.length>0&&this.#e.set(e)}}updated(e){if(e.has(`capacity`)){let e=[...this.#e.values];this.#e=new gp({capacityLimit:this.capacity,persistentScaling:!0}),e.length>0&&this.#e.set(e)}}#r(e){return getComputedStyle(this).getPropertyValue(e).trim()}#i(){let e=this.#r(`--plot-histogram-gap`);if(e===``)return 1;let n=Number.parseFloat(e);return Number.isFinite(n)?Math.max(0,n):1}#a(){let e=this.#r(`--plot-histogram-bar-length`);if(e===``||e===`auto`)return null;let n=Number.parseFloat(e);return Number.isFinite(n)?Math.max(0,Math.min(1,n)):null}#o(e,n,r,i){this.dispatchEvent(new CustomEvent(`plot-bucket-click`,{detail:{bucketIndex:e,valueMin:n,valueMax:r,relativeValue:i},bubbles:!0,composed:!0}))}render(){let{values:e,range:n}=this.#e,r=this._width,i=this._height,a=this.orientation===`horizontal`,o=Math.min(4,(a?i:r)*.05),s=this.min??n.min,c=(this.max??n.max)-s||1,l=Math.max(1,Math.floor(1/this.resolution)),u=(a?r:i)-o*2,d=(a?i:r)-o*2,f=u/l,p=this.#i(),m=this.#a(),h=Array.from({length:l}).fill(0);for(let n of e){let e=(n-s)/c,r=Math.min(l-1,Math.max(0,Math.floor(e*l)));h[r]++}let g=Math.max(1,...h);return C`
      <svg width=${r} height=${i} viewBox="0 0 ${r} ${i}"
        xmlns="http://www.w3.org/2000/svg">
        <rect width=${r} height=${i} fill="transparent" />
        ${h.map((e,n)=>{let r=e/g,i=m===null?r*d:m*d,h=s+n/l*c,_=s+(n+1)/l*c;if(a){let e=o+n*f,a=n===l-1?Math.max(0,o+u-e):Math.max(0,f-p);return w`
          <rect class="bar" x=${e} y=${o+d-i} width=${a} height=${i}
            style="--value: ${r}"
            @click=${()=>this.#o(n,h,_,r)} />
        `}else{let e=o+n*f;return w`
          <rect class="bar" x=${o} y=${e} width=${i} height=${n===l-1?Math.max(0,o+u-e):Math.max(0,f-p)}
            style="--value: ${r}"
            @click=${()=>this.#o(n,h,_,r)} />
        `}})}
        ${this.title?w`<text x=${o+2} y=${o+Math.min(10,i*.6)}
          class="overlay-text" fill=${`var(--plot-text, var(--surface-2-text, #fff))`}
          style="opacity: 0.6">${this.title}</text>`:w``}
      </svg>
    `}static{this.styles=_`
    :host {
      display: inline-block;
      width: 100%;
      height: 100%;
      min-width: 20px;
      min-height: 20px;

      --plot-histogram-fill: currentColor;
      --plot-histogram-gap: 1px;
      --plot-histogram-border-radius: 0;
      --plot-histogram-bar-length: auto;
    }

    svg {
      display: block;
      cursor: crosshair;
      overflow: visible;
    }

    rect.bar {
      fill: var(--plot-histogram-fill, currentColor);
      rx: var(--plot-histogram-border-radius, 0);
      opacity: calc(0.15 + var(--value) * 0.85);
    }

    .overlay-text {
      font-family: var(--font-mono, ui-monospace, monospace);
      font-size: 9px;
      dominant-baseline: hanging;
      pointer-events: none;
    }
  `}};k([A({attribute:`orientation`})],Op.prototype,`orientation`,void 0),k([A({type:Number})],Op.prototype,`resolution`,void 0),k([A({type:Number})],Op.prototype,`min`,void 0),k([A({type:Number})],Op.prototype,`max`,void 0),k([A({type:Number})],Op.prototype,`capacity`,void 0),k([A()],Op.prototype,`title`,void 0),k([A({type:Boolean,reflect:!0})],Op.prototype,`paused`,void 0),k([j()],Op.prototype,`_width`,void 0),k([j()],Op.prototype,`_height`,void 0),Op=k([O(`ixfx-plot-histogram`)],Op);function kp(e){if(e.length===0)return``;let n=`M ${e[0].x},${e[0].y}`;for(let r=1;r<e.length;r++)n+=` L ${e[r].x},${e[r].y}`;return n}function Ap(e,n,r,i){return w`<path
    d=${kp(e)}
    fill="none"
    stroke=${n.fill}
    stroke-width=${r}
    opacity=${n.opacity}
    stroke-linecap=${i?`round`:`butt`}
    stroke-linejoin=${i?`round`:`miter`}
  />`}function jp(e,n,r,i){if(e.length<2)return w``;let a=kp(e),o=i||n.fill;return w`<path d=${`${a} L ${e[e.length-1].x},${r} L ${e[0].x},${r} Z`} fill=${o} opacity=${n.opacity*.2} />`}function Mp(e,n,r,i){return e.map((e,a)=>{let o=i===`size`?r*Math.max(.2,e.ageFraction):r;return w`<circle cx=${e.x} cy=${e.y} r=${o} fill=${n[a].fill} opacity=${n[a].opacity} />`})}function Np(e,n,r,i){return e.map((e,a)=>{let o=i===`size`?r*Math.max(.2,e.ageFraction):r;return w`<rect
      x=${e.x-o/2} y=${e.y-o/2}
      width=${o} height=${o}
      fill=${n[a].fill} opacity=${n[a].opacity}
    />`})}function Pp(e,n,r,i,a){return e.map((e,o)=>{let s=a===`size`?r*Math.max(.2,e.ageFraction):r;return w`<line
      x1=${e.x} y1=${i} x2=${e.x} y2=${e.y}
      stroke=${n[o].fill} stroke-width=${s} opacity=${n[o].opacity}
    />`})}function Fp(e,n,r,i,a){return e.map((e,o)=>{let s=a===`size`?i*Math.max(.2,e.ageFraction):i;return w`<line
      x1=${e.x-s/2} y1=${e.y} x2=${e.x+s/2} y2=${e.y}
      stroke=${n[o].fill} stroke-width=${r} opacity=${n[o].opacity}
    />`})}function Ip(e,n,r,i,a){return e.map((e,o)=>{let s=a===`size`?r*Math.max(.2,e.ageFraction):r;return w`<rect
      x=${e.x-s/2} y=${e.y}
      width=${s} height=${Math.max(1,i-e.y)}
      fill=${n[o].fill} opacity=${n[o].opacity}
    />`})}function Lp(e,n,r,i,a){return e.map((e,o)=>{let s=a===`size`?r*Math.max(.2,e.ageFraction):r;return w`<rect
      x=${e.x-s/2} y=${i}
      width=${s} height=${Math.max(1,e.y-i)}
      fill=${n[o].fill} opacity=${n[o].opacity}
    />`})}function Rp(e,n,r,i,a){return e.map((e,o)=>{let s=a===`size`?r*Math.max(.2,e.ageFraction):r;return w`<rect
      x=${e.x-s/2} y=${Math.min(e.y,i)}
      width=${s} height=${Math.max(1,Math.abs(e.y-i))}
      fill=${n[o].fill} opacity=${n[o].opacity}
    />`})}var q=class extends E{constructor(...e){super(...e),this.drawStyle=`line-sharp`,this.ageStyle=`none`,this.title=``,this.precise=!1,this.tooltips=!0,this.capacity=100,this.rangeMin=NaN,this.rangeMax=NaN,this.persistentScale=!0,this.paused=!1,this.clickPauses=!1,this.shaded=!1,this.areaColor=``,this.colorMode=`fixed`,this.colorEasing=``,this.colorScale=``,this.colorValueMap=null,this._width=100,this._height=40,this.#e=new gp,this.#t=!1,this.#n=null,this.#r=null,this.valueFormat=e=>e?e.toFixed(2):``,this.#c=e=>{this.#n=e.clientX,this.#r=e.clientY,this.#o(e.clientX,e.clientY);let n=this.#a(e.clientX,this.getBoundingClientRect());this.dispatchEvent(new CustomEvent(`plot-pointer-move`,{detail:{clientX:e.clientX,clientY:e.clientY,index:n},bubbles:!0,composed:!0}))},this.#l=()=>{this.#n=null,this.#r=null,Sp(this),this.dispatchEvent(new CustomEvent(`plot-pointer-leave`,{bubbles:!0,composed:!0}))},this.#u=e=>{this.clickPauses&&(this.paused=!this.paused);let n=this.#a(e.clientX,this.getBoundingClientRect());n<0||this.dispatchEvent(new CustomEvent(`plot-datapoint-click`,{detail:{value:this.#e.values[n],index:n},bubbles:!0,composed:!0}))}}#e;#t;#n;#r;#i(e){return e?e.trim().split(/[,\s;]+/).map(e=>Number.parseFloat(e)).filter(e=>!Number.isNaN(e)):[]}add(e,n=!1){this.#t=!0,this.#e.add(e),!this.paused&&(n||this.redraw())}redraw(){this.requestUpdate(),this.#s()}set(e,n=!1){this.#t=!0,this.#e.set(e),!this.paused&&(n||this.redraw())}clear(){let e=this.#e.clear();return this.requestUpdate(),e}firstUpdated(e){if(this._width=this.clientWidth||100,this._height=this.clientHeight||40,new ResizeObserver(e=>{let n=e[0];this._width=n.contentRect.width,this._height=n.contentRect.height}).observe(this),!this.#t){let e=this.#i(this.textContent??``);e.length>0&&this.#e.set(e)}}updated(e){if(e.has(`capacity`)||e.has(`persistentScale`)||e.has(`rangeMin`)||e.has(`rangeMax`)){let e=[...this.#e.values],n=!Number.isNaN(this.rangeMin)&&!Number.isNaN(this.rangeMax)?{min:this.rangeMin,max:this.rangeMax}:null;this.#e=new gp({capacityLimit:this.capacity,persistentScaling:this.persistentScale,fixedRange:n}),e.length>0&&this.#e.set(e)}}#a(e,n){let r=this.#e.values.length;if(r===0)return-1;let i=e-n.left;if(i<0||i>n.width)return-1;let a=n.height<20?0:Math.min(4,n.height*.05),o=n.width-a*2,s=Math.floor((i-a)/(o/r));return s>=0&&s<r?s:-1}#o(e,n){if(!this.tooltips)return;let r=this.getBoundingClientRect(),i=this.#a(e,r);if(i<0){Sp(this);return}bp(this,e,n,this.valueFormat(this.#e.values[i]))}#s(){this.#n===null||this.#r===null||this.#o(this.#n,this.#r)}#c;#l;#u;#d(e,n,r,i,a,o){let s=e.length,c=s>0?a/s:a,l=e=>i+(e+.5)*c;return e.map((e,a)=>{let c=lr(Tp(e,n,r)),u=s>1?a/(s-1):1;return{x:l(a),y:i+(1-c)*o,value:e,scaledValue:c,index:a,ageFraction:u}})}get series(){return this.#e}get values(){return this.#e.values}get dataLength(){return this.#e.values.length}getValueAt(e){return this.#e.values[e]}getIndexFromClientX(e){return this.#a(e,this.getBoundingClientRect())}#f(e,n,r,i,a,o,s,c){let l=n.at(-1)??{fill:`currentColor`,opacity:1},u=(this.drawStyle===`line-sharp`||this.drawStyle===`line-round`)&&this.shaded,d=this.areaColor||void 0;if(u)return[jp(e,l,o,d),this.drawStyle===`line-sharp`?Ap(e,l,r,!1):Ap(e,l,r,!0)];switch(this.drawStyle){case`line-sharp`:return[Ap(e,l,r,!1)];case`line-round`:return[Ap(e,l,r,!0)];case`circles`:return Mp(e,n,i,this.ageStyle);case`squares`:return Np(e,n,i*2,this.ageStyle);case`vbar`:return Pp(e,n,r,o,this.ageStyle);case`hbar`:return Fp(e,n,r,a,this.ageStyle);case`hist-bottom`:return Ip(e,n,a,o,this.ageStyle);case`hist-top`:return Lp(e,n,a,s,this.ageStyle);case`hist-middle`:return Rp(e,n,a,c,this.ageStyle);default:return[]}}render(){let{values:e,range:n}=this.#e,r=this._width,i=this._height,a=i<20?0:Math.min(4,i*.05),o=Math.max(1,r-a*2),s=Math.max(1,i-a*2),c=a+s,l=a,u=a+s/2,d=Cp(r,i),f=wp(r,i,e.length),p=e.length>0?Math.max(1,o/e.length*.85):o,m=`var(--plot-text, var(--surface-2-text, #fff))`,h=e.length>0?this.#d(e,n.min,n.max,a,o,s):[],g=h.length>0?up(this):``,_={mode:this.colorMode,palette:dp(this.colorScale),easingName:this.colorEasing,valueMap:this.colorValueMap},v=this.drawStyle!==`line-sharp`&&this.drawStyle!==`line-round`,y=h.map(e=>{let n=mp(e.scaledValue,g,_);return v?hp(n,e.ageFraction,this.ageStyle):n}),b=h.length>0?this.#f(h,y,d,f,p,c,l,u):[],x=this.title?w`<text
          x=${a+2} y=${l+Math.min(10,i*.6)}
          class="overlay-text"
          fill=${m}
          style="opacity: 0.6"
        >${this.title}</text>`:w``,S=e.length>0?e.at(-1):null,ee=this.precise&&S!==null?w`<text
          x=${r-a-2} y=${l+Math.min(10,i*.6)}
          class="overlay-text"
          text-anchor="end"
          fill=${m}
          style="opacity: 0.8"
        >${this.valueFormat(S)}</text>`:w``;return C`
      <svg
        width=${r} height=${i}
        viewBox="0 0 ${r} ${i}"
        xmlns="http://www.w3.org/2000/svg"
        @pointermove=${this.#c}
        @pointerleave=${this.#l}
        @click=${this.#u}
      >
        <rect width=${r} height=${i} fill="transparent" />
        ${b.map(e=>e)}
        ${x}
        ${ee}
      </svg>
    `}static{this.styles=_`
    :host {
      display: inline-block;
      width: 100%;
      height: 100%;
      min-width: 20px;
      min-height: 4px;
    }

    svg {
      display: block;
      cursor: crosshair;
      overflow: visible;
    }

    .overlay-text {
      font-family: var(--font-mono, ui-monospace, monospace);
      font-size: 9px;
      dominant-baseline: hanging;
      pointer-events: none;
    }
  `}};k([A({attribute:`draw-style`})],q.prototype,`drawStyle`,void 0),k([A({attribute:`age-style`})],q.prototype,`ageStyle`,void 0),k([A()],q.prototype,`title`,void 0),k([A({type:Boolean})],q.prototype,`precise`,void 0),k([A({type:Boolean})],q.prototype,`tooltips`,void 0),k([A({type:Number})],q.prototype,`capacity`,void 0),k([A({type:Number})],q.prototype,`rangeMin`,void 0),k([A({type:Number})],q.prototype,`rangeMax`,void 0),k([A({type:Boolean,attribute:`persistent-scale`})],q.prototype,`persistentScale`,void 0),k([A({type:Boolean,reflect:!0})],q.prototype,`paused`,void 0),k([A({type:Boolean,attribute:`click-pauses`})],q.prototype,`clickPauses`,void 0),k([A({type:Boolean,attribute:`shaded`})],q.prototype,`shaded`,void 0),k([A({attribute:`area-color`})],q.prototype,`areaColor`,void 0),k([A({attribute:`color-mode`})],q.prototype,`colorMode`,void 0),k([A({attribute:`color-easing`})],q.prototype,`colorEasing`,void 0),k([A({attribute:`color-scale`})],q.prototype,`colorScale`,void 0),k([j()],q.prototype,`_width`,void 0),k([j()],q.prototype,`_height`,void 0),q=k([O(`ixfx-plot-single-axis`)],q);var zp=class extends E{constructor(...e){super(...e),this.drawStyle=`circles`,this.ageStyle=`none`,this.title=``,this.precise=!1,this.tooltips=!0,this.capacity=100,this.persistentScale=!0,this.paused=!1,this.clickPauses=!1,this.colorMode=`fixed`,this.colorEasing=``,this.colorScale=``,this.colorValueMap=null,this._width=100,this._height=100,this.#e=new gp({capacityLimit:100,persistentScaling:!0}),this.#t=new gp({capacityLimit:100,persistentScaling:!0}),this.valueFormat=(e,n)=>`${e.toFixed(2)}, ${n.toFixed(2)}`,this.#a=[],this.#o=null,this.#s=null,this.#u=e=>{this.#o=e.clientX,this.#s=e.clientY,this.#c(e.clientX,e.clientY)},this.#d=()=>{this.#o=null,this.#s=null,Sp(this)},this.#f=e=>{this.clickPauses&&(this.paused=!this.paused);let n=e.currentTarget.getBoundingClientRect(),r=this.#i(e.clientX,e.clientY,this.#a,n);r&&this.dispatchEvent(new CustomEvent(`plot-datapoint-click`,{detail:{x:r.xVal,y:r.yVal,index:r.index},bubbles:!0,composed:!0}))}}#e;#t;add(e,n){this.#e.add(e),this.#t.add(n),!this.paused&&(this.requestUpdate(),this.#l())}setXY(e,n){this.#e.set(e),this.#t.set(n),!this.paused&&(this.requestUpdate(),this.#l())}clear(){this.#e.clear(),this.#t.clear(),this.requestUpdate()}firstUpdated(e){this._width=this.clientWidth||100,this._height=this.clientHeight||100,new ResizeObserver(e=>{let n=e[0];this._width=n.contentRect.width,this._height=n.contentRect.height}).observe(this)}updated(e){if(e.has(`capacity`)||e.has(`persistentScale`)){let e={capacityLimit:this.capacity,persistentScaling:this.persistentScale},n=[...this.#e.values],r=[...this.#t.values];this.#e=new gp(e),this.#t=new gp(e),n.length>0&&(this.#e.set(n),this.#t.set(r))}}#n(e,n,r){let i=this.#e.values,a=this.#t.values,o=Math.min(i.length,a.length);if(o===0)return[];let{min:s,max:c}=this.#e.range,{min:l,max:u}=this.#t.range;return Array.from({length:o},(d,f)=>({x:e+Tp(i[f],s,c)*n,y:e+(1-Tp(a[f],l,u))*r,xVal:i[f],yVal:a[f],index:f,ageFraction:o>1?f/(o-1):1}))}#r(e,n){let r={mode:this.colorMode,palette:dp(this.colorScale),easingName:this.colorEasing,valueMap:this.colorValueMap};return e.map(e=>hp(mp(e.ageFraction,n,r),e.ageFraction,this.ageStyle))}#i(e,n,r,i){let a=e-i.left,o=n-i.top,s=null,c=1/0;for(let e of r){let n=e.x-a,r=e.y-o,i=n*n+r*r;i<c&&(c=i,s=e)}return s&&Math.sqrt(c)<30?s:null}#a;#o;#s;#c(e,n){if(!this.tooltips)return;let r=this.getBoundingClientRect(),i=this.#i(e,n,this.#a,r);if(!i){Sp(this);return}bp(this,e,n,this.valueFormat(i.xVal,i.yVal))}#l(){this.#o===null||this.#s===null||this.#c(this.#o,this.#s)}#u;#d;#f;render(){let e=this._width,n=this._height,r=Math.min(6,Math.min(e,n)*.06),i=Math.max(1,e-r*2),a=Math.max(1,n-r*2),o=this.#n(r,i,a);this.#a=o;let s=o.length>0?up(this):``,c=this.#r(o,s),l=wp(e,n,o.length),u=`var(--plot-text, var(--surface-2-text, #fff))`,d=o.map((e,n)=>{let r=c[n],i=this.ageStyle===`size`?Math.max(.2,e.ageFraction):1;if(this.drawStyle===`circles`){let n=l*i;return w`<circle cx=${e.x} cy=${e.y} r=${n} fill=${r.fill} opacity=${r.opacity} />`}let a=l*2*i;return w`<rect x=${e.x-a/2} y=${e.y-a/2} width=${a} height=${a} fill=${r.fill} opacity=${r.opacity} />`}),f=this.title?w`<text
          x=${r+2} y=${r+2}
          class="overlay-text"
          fill=${u}
          style="opacity: 0.6"
        >${this.title}</text>`:w``,p=Math.min(this.#e.values.length,this.#t.values.length),m=p>0?this.#e.values[p-1]:null,h=p>0?this.#t.values[p-1]:null,g=this.precise&&m!==null&&h!==null?w`<text
          x=${e-r-2} y=${r+2}
          class="overlay-text"
          text-anchor="end"
          fill=${u}
          style="opacity: 0.8"
        >${this.valueFormat(m,h)}</text>`:w``;return C`
      <svg
        width=${e} height=${n}
        viewBox="0 0 ${e} ${n}"
        xmlns="http://www.w3.org/2000/svg"
        @pointermove=${this.#u}
        @pointerleave=${this.#d}
        @click=${this.#f}
      >
        <rect width=${e} height=${n} fill="transparent" />
        ${d}
        ${f}
        ${g}
      </svg>
    `}static{this.styles=_`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 40px;
      min-height: 40px;
    }

    svg {
      display: block;
      cursor: crosshair;
    }

    .overlay-text {
      font-family: var(--font-mono, ui-monospace, monospace);
      font-size: 9px;
      dominant-baseline: hanging;
      pointer-events: none;
    }
  `}};k([A({attribute:`draw-style`})],zp.prototype,`drawStyle`,void 0),k([A({attribute:`age-style`})],zp.prototype,`ageStyle`,void 0),k([A()],zp.prototype,`title`,void 0),k([A({type:Boolean})],zp.prototype,`precise`,void 0),k([A({type:Boolean})],zp.prototype,`tooltips`,void 0),k([A({type:Number})],zp.prototype,`capacity`,void 0),k([A({type:Boolean,attribute:`persistent-scale`})],zp.prototype,`persistentScale`,void 0),k([A({type:Boolean,reflect:!0})],zp.prototype,`paused`,void 0),k([A({type:Boolean,attribute:`click-pauses`})],zp.prototype,`clickPauses`,void 0),k([A({attribute:`color-mode`})],zp.prototype,`colorMode`,void 0),k([A({attribute:`color-easing`})],zp.prototype,`colorEasing`,void 0),k([A({attribute:`color-scale`})],zp.prototype,`colorScale`,void 0),k([j()],zp.prototype,`_width`,void 0),k([j()],zp.prototype,`_height`,void 0),zp=k([O(`ixfx-plot-xy-axis`)],zp);function Bp(e,n){e!=null&&(e.value=n)}var Vp=class extends E{constructor(...e){super(...e),this.label=``,this.min=0,this.max=1,this.value=0,this.step=.01,this.precision=0,this.dragSensitivity=1,this.miniWidthThreshold=120,this.miniHeightThreshold=45,this.displayTextLogic=`transient`,this._isMini=!1,this._isDragging=!1,this._debounceTimer=void 0,this._handleNumberChange=e=>{let n=Number.parseFloat(e.detail.value);this.value=n,this._syncValue(n),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e.detail.value},bubbles:!0,composed:!0}))},this._handleInputChange=e=>{this.value=e.detail.value,clearTimeout(this._debounceTimer),this._debounceTimer=window.setTimeout(()=>{this._isDragging=!1},300),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:String(e.detail.value)},bubbles:!0,composed:!0}))},this._handleSliderInput=e=>{console.log(`[LABELLED-INPUT] _handleSliderInput called`,{value:e.detail.value,composedPath:e.composedPath()}),this.value=e.detail.value,this._isDragging=!0,clearTimeout(this._debounceTimer),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:e.detail.value},bubbles:!0,composed:!0}))}}get formatter(){return this._formatter??(e=>e)}set formatter(e){this._formatter=e}get hasCustomFormatter(){return this._formatter!==void 0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(e=>this._handleResize(e)),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_handleResize(e){let{width:n,height:r}=e[0].contentRect,i=getComputedStyle(this).getPropertyValue(`--mini`).trim();if(i===`1`){this._isMini=!0;return}if(i===`0`){this._isMini=!1;return}this._isMini=n<this.miniWidthThreshold||r<this.miniHeightThreshold}_syncValue(e){let n=this.renderRoot?.querySelector(this.inputSelector);n&&Bp(n,e);let r=this.renderRoot?.querySelector(`ixfx-editable-number`);r&&(Bp(r,e),r._requestDisplayUpdate?.())}_renderEditableNumber(){return this._isMini?T:C`
      <ixfx-editable-number
        class="number"
        mode="label"
        no-drag
        .value=${String(this.value)}
        .min=${this.min}
        .max=${this.max}
        .step=${this.step}
        .dragSensitivity=${this.dragSensitivity}
        .precision=${this.precision}
        .displayText=${this.label}
        .displayTextLogic=${this._isDragging?`hidden`:this.displayTextLogic}
        .formatter=${this._formatter}
        @change=${this._handleNumberChange}
      ></ixfx-editable-number>
    `}updated(e){super.updated(e),e.has(`value`)&&this._syncValue(this.value)}};k([A()],Vp.prototype,`label`,void 0),k([A({type:Number})],Vp.prototype,`min`,void 0),k([A({type:Number})],Vp.prototype,`max`,void 0),k([A({type:Number})],Vp.prototype,`value`,void 0),k([A({type:Number})],Vp.prototype,`step`,void 0),k([A({type:Number})],Vp.prototype,`precision`,void 0),k([A({type:Number,attribute:`drag-sensitivity`})],Vp.prototype,`dragSensitivity`,void 0),k([A({type:Number,attribute:`mini-width-threshold`})],Vp.prototype,`miniWidthThreshold`,void 0),k([A({type:Number,attribute:`mini-height-threshold`})],Vp.prototype,`miniHeightThreshold`,void 0),k([A({attribute:`display-text-logic`})],Vp.prototype,`displayTextLogic`,void 0),k([j()],Vp.prototype,`_isMini`,void 0),k([j()],Vp.prototype,`_isDragging`,void 0),k([j()],Vp.prototype,`_formatter`,void 0);var Hp=class extends Vp{constructor(...e){super(...e),this.inputSelector=`ixfx-range-input`,this.orientation=`horizontal`,this.tooltip=!1,this.noTooltip=!1,this.tooltipOrientation=`top`,this.switchHeight=80}render(){let e=this._formatter?e=>this._formatter(String(e)):void 0,n=!this.noTooltip&&(this.tooltip||this._isMini);return C`
      <div class="wrap ${this._isMini?`mini`:``}">
        ${super._renderEditableNumber()}
        <ixfx-range-input
          class="slider"
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .step=${this.step}
          .orientation=${this.orientation}
          ?tooltip=${n}
          .tooltipOrientation=${this.tooltipOrientation}
          .labelFormatter=${e}
          @input=${this._handleSliderInput}
          @change=${this._handleInputChange}
        ></ixfx-range-input>
      </div>
    `}static{this.styles=_`
    :host {
      display: block;
      container-type: size;
      min-height: var(--min-height, 20px);
      min-width: var(--min-width, 50px);
      width: var(--width, auto);
      height: var(--height, 50px);
    }

    .wrap {
      display: flex;
      width: 100%;
      height: 100%;
      gap: var(--space-s, 4px);
      align-items: center;
    }

    ixfx-editable-number {
      flex-shrink: 0;
    }

    ixfx-range-input {
      flex: 1;
      min-width: 0;
    }

    /* Default (compact): horizontal — label beside slider */
    .wrap {
      flex-direction: var(--flow, row);
      justify-content: flex-start;
      align-items: center;
    }

    ixfx-editable-number {
      --label-align: left;
      width: var(--label-width, 5ch);
      --label-min-width: var(--label-width, 5ch);
      /* Block fill/background variables from reaching editable-number */
      --fill-color: initial;
      --fill-opacity: initial;
      --fill-image: initial;
    }

    /* Vertically-stacked layout: when container has enough height */
    @container (height >= 45px) {
      .wrap {
        flex-direction: var(--flow, column);
        justify-content: flex-start;
        align-items: center;
      }

      ixfx-editable-number {
        --label-align: center;
        align-self: center;
        width: 100%;
      }

      ixfx-range-input {
        width: 100%;
      }
    }

    /* Mini mode: slider fills the full component */
    .wrap.mini {
      gap: 0;
    }

    .wrap.mini ixfx-range-input {
      width: 100%;
      height: 100%;
    }
  `}};k([A({type:String})],Hp.prototype,`orientation`,void 0),k([A({type:Boolean})],Hp.prototype,`tooltip`,void 0),k([A({type:Boolean,attribute:`no-tooltip`})],Hp.prototype,`noTooltip`,void 0),k([A({type:String,attribute:`tooltip-orientation`})],Hp.prototype,`tooltipOrientation`,void 0),k([A({type:Number,attribute:`switch-height`})],Hp.prototype,`switchHeight`,void 0),Hp=k([O(`ixfx-labelled-range-input`)],Hp);var Up={l:[0,1],c:[0,.4],h:[0,360],a:[0,1]},Wp={l:Up.l,c:Up.c,h:Up.h,a:Up.a};function Gp(e,n,r,i=1){return i<1?`oklch(${e} ${n} ${r} / ${i})`:`oklch(${e} ${n} ${r})`}var J=class extends E{constructor(...e){super(...e),this.l=.7,this.c=.15,this.h=180,this.a=1,this.hidePreview=!1,this.hideH=!1,this.hideL=!1,this.hideC=!1,this.showA=!1,this.horizontal=!1,this.slidersVertical=!1,this.hideTooltips=!1,this._valueAttr=null,this.rangeLAttr=null,this.rangeCAttr=null,this.rangeHAttr=null,this.rangeAAttr=null,this._ranges={l:Wp.l,c:Wp.c,h:Wp.h,a:Wp.a},this._defaultL=this.l,this._defaultC=this.c,this._defaultH=this.h,this._defaultA=this.a,this._userInitiated=new Set,this._onInput=(e,n)=>{let r=e.detail;this._userInitiated.add(n),this[n]=r.value,this._dispatchInput(),e.stopPropagation()},this._onChange=(e,n)=>{let r=e.detail;this._userInitiated.add(n);let i=typeof r.value==`string`?Number.parseFloat(r.value):r.value;switch(n){case`l`:this.l=i;break;case`c`:this.c=i;break;case`h`:this.h=i;break;case`a`:this.a=i;break}e.stopPropagation(),this.requestUpdate(),this._dispatchChange()}}get value(){return Gp(this.l,this.c,this.h,this.a)}set value(e){let n=lc.convert(e,`oklch-absolute`);this.l=n.l,this.c=n.c,this.h=n.h,this.a=n.opacity??1,this._valueAttr=e}setColour(e){let n=lc.convert(e,`oklch-absolute`);this.l=n.l,this.c=n.c,this.h=n.h,this.a=n.opacity??1}get rangeL(){return[this._ranges.l[0],this._ranges.l[1]]}set rangeL(e){this._applyRangeInput(`l`,e)}get rangeC(){return[this._ranges.c[0],this._ranges.c[1]]}set rangeC(e){this._applyRangeInput(`c`,e)}get rangeH(){return[this._ranges.h[0],this._ranges.h[1]]}set rangeH(e){this._applyRangeInput(`h`,e)}get rangeA(){return[this._ranges.a[0],this._ranges.a[1]]}set rangeA(e){this._applyRangeInput(`a`,e)}setRangeL(e){this.rangeL=e}setRangeC(e){this.rangeC=e}setRangeH(e){this.rangeH=e}setRangeA(e){this.rangeA=e}willUpdate(e){e.has(`rangeLAttr`)&&this._setRangeFromAttribute(`l`,this.rangeLAttr),e.has(`rangeCAttr`)&&this._setRangeFromAttribute(`c`,this.rangeCAttr),e.has(`rangeHAttr`)&&this._setRangeFromAttribute(`h`,this.rangeHAttr),e.has(`rangeAAttr`)&&this._setRangeFromAttribute(`a`,this.rangeAAttr),super.willUpdate(e)}_applyRangeInput(e,n){let r=this._coerceRangeInput(e,n);r&&this._setRange(e,r)}_coerceRangeInput(e,n){if(!Array.isArray(n)||n.length<2)return null;let[r,i]=n;return!Number.isFinite(r)||!Number.isFinite(i)?null:this._normalizeRange(e,[r,i])}_setRangeFromAttribute(e,n){if(n===null){this._setRange(e,Wp[e]);return}let r=this._parseRangeString(e,n);r&&this._setRange(e,r)}_setRange(e,n){let r=this._normalizeRange(e,n),i=this._ranges[e];if(!(i[0]===r[0]&&i[1]===r[1])){switch(this._ranges={...this._ranges,[e]:r},e){case`l`:this.l=this._clampToRange(`l`,this.l);break;case`c`:this.c=this._clampToRange(`c`,this.c);break;case`h`:this.h=this._clampToRange(`h`,this.h);break;case`a`:this.a=this._clampToRange(`a`,this.a);break}this.requestUpdate()}}_getRange(e){return this._ranges[e]??Wp[e]}_parseRangeString(e,n){let r=n.trim().split(`-`,2);if(r.length!==2)return null;let i=Number(r[0].trim()),a=Number(r[1].trim());return!Number.isFinite(i)||!Number.isFinite(a)?null:this._normalizeRange(e,[i,a])}_normalizeRange(e,n){let r=Wp[e],[i,a]=n,o=Math.min(Math.min(i,a),r[1]),s=Math.max(Math.max(i,a),r[0]);return[Math.max(o,r[0]),Math.min(s,r[1])]}_clampToRange(e,n){let[r,i]=this._getRange(e);return Math.min(Math.max(n,r),i)}render(){let e=(e,n,r,i,a,o,s)=>o?T:C`
        <ixfx-labelled-range-input
          id="slider-${e}"
          label="${n}"
          min=${r}
          max=${i}
          mini-width-threshold=200
          .value=${this[e]}
          step=${a}
          .orientation=${this.slidersVertical?`vertical`:`horizontal`}
          .formatter=${s}
          ?no-tooltip=${this.hideTooltips}
          .displayTextLogic=${this.hideTooltips?`show`:`transient`}
          @input=${n=>this._onInput(n,e)}
          @change=${n=>this._onChange(n,e)}
        ></ixfx-labelled-range-input>
      `;return C`
      <div class="picker" ?horizontal=${this.horizontal}>
        <div class="preview" ?hidden=${this.hidePreview}></div>
        <div class="sliders">
          ${e(`h`,`Hue`,...this._getRange(`h`),1,this.hideH,e=>`${Math.round(Number(e))}°`)}
          ${e(`l`,`Lightness`,...this._getRange(`l`),.01,this.hideL,e=>`${Math.round(Number(e)*100)}%`)}
          ${e(`c`,`Chroma`,...this._getRange(`c`),.005,this.hideC,e=>`${Number.parseFloat(e).toFixed(2)}`)}
          ${this.showA?e(`a`,`Opacity`,...this._getRange(`a`),.01,!1,e=>`${Math.round(Number(e)*100)}%`):T}
        </div>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this._updateGradients()}updated(e){super.updated(e),e.has(`l`)&&!this._userInitiated.has(`l`)&&(this._defaultL=this.l),e.has(`c`)&&!this._userInitiated.has(`c`)&&(this._defaultC=this.c),e.has(`h`)&&!this._userInitiated.has(`h`)&&(this._defaultH=this.h),e.has(`a`)&&!this._userInitiated.has(`a`)&&(this._defaultA=this.a),this._userInitiated.clear(),(e.has(`l`)||e.has(`c`)||e.has(`h`)||e.has(`a`)||e.has(`showA`)||e.has(`slidersVertical`))&&this._updateGradients()}_updateGradients(){let e=this.l,n=this.c,r=this.h,i=this.a,[a,o]=this._ranges.l,[s,c]=this._ranges.c,[l,u]=this._ranges.h,[d,f]=this._ranges.a,p=this.slidersVertical?`to top`:`to right`,m=`linear-gradient(in oklch ${p}, oklch(${a} ${n} ${r}), oklch(${o} ${n} ${r}))`,h=`linear-gradient(in oklch ${p}, oklch(${e} ${s} ${r}), oklch(${e} ${c} ${r}))`,g=`linear-gradient(in oklch ${u-l>=300?`longer`:`shorter`} hue ${p}, oklch(${e} ${n} ${l}), oklch(${e} ${n} ${u}))`,_=`
      linear-gradient(${p}, oklch(${e} ${n} ${r} / ${d}), oklch(${e} ${n} ${r} / ${f})),
      repeating-conic-gradient(
        var(--surface-2) 0% 25%,
        var(--surface-4) 0% 50%
      ) 50% / 16px 16px
    `,v=[`--background-track`,`--background-track-hover`],y=[`--background-track-value`,`--background-track-value-hover`,`--background-track-value-active`,`--background-track-value-vertical`,`--background-track-value-hover-vertical`,`--background-track-value-active-vertical`],b=[[this._sliderL,m],[this._sliderC,h],[this._sliderH,g]];this.showA&&this._sliderA&&b.push([this._sliderA,_]);for(let[e,n]of b)if(e){for(let r of v)e.style.setProperty(r,n);for(let n of y)e.style.setProperty(n,`transparent`)}if(this._previewEl)if(this.a<1){let a=`
          linear-gradient(oklch(${e} ${n} ${r} / ${i}), oklch(${e} ${n} ${r} / ${i})),
          repeating-conic-gradient(
            var(--surface-2) 0% 25%,
            var(--surface-4) 0% 50%
          ) 50% / 16px 16px
        `;this._previewEl.style.background=a}else this._previewEl.style.background=this.value}_dispatchInput(){let e={l:this.l,c:this.c,h:this.h,a:this.a};this.dispatchEvent(new CustomEvent(`input`,{detail:e,bubbles:!0,composed:!0}))}_dispatchChange(){let e={l:this.l,c:this.c,h:this.h,a:this.a};this.dispatchEvent(new CustomEvent(`change`,{detail:e,bubbles:!0,composed:!0}))}static{this.styles=[D,_`
    /*
     * Default intrinsic size — not determined by label text.
     * Override via CSS: ixfx-colour-picker { width: 100%; height: 200px; }
     * Or via custom properties: --picker-alt-width, --picker-alt-min-slider-height
     */
    :host {
      display: block;
      width: var(--picker-alt-width, 240px);
      height: var(--picker-alt-height, 240px);
      --_radius-m: var(--radius-m, 4px);
      --_radius-s: var(--radius-m, 3px);
      container-type: size;
    }

    .picker {
      display: flex;
      flex-direction: column;
      gap: var(--space-s, 8px);
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .picker[horizontal] {
      flex-direction: row;
      align-items: stretch;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: var(--space-s, 8px);
      flex: 1;
      min-height: 0;
    }

    .picker[horizontal] .sliders {
      flex-direction: column;
    }

    .preview {
      flex-shrink: 0;
      height: 30%;
      border-radius: var(--_radius-m);
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .preview[hidden] {
      display: none;
    }

    .picker[horizontal] .preview {
      width: 3em;
      height: auto;
      flex-shrink: 0;
    }

    ixfx-labelled-range-input {
      flex: 1;
      min-height: var(--picker-alt-min-slider-height, 2.5em);
      width: 100%;
      min-width: 0;
      --track-thickness: 2em;
      --track-radius: var(--_radius-s);
      --label-width: 5em;
      --thumb-thickness: 4px;
      --thumb-color: rgba(255, 255, 255, 0.9);
      --thumb-color-active: white;
      --thumb-radius: 3px;
      --thumb-border: 2px solid rgba(255, 255, 255, 0.85);
      --thumb-shadow: 0 0 0 2px rgba(0, 0, 0, 0.65);
    }

    /* Vertical sliders mode: sliders are side-by-side vertical bars */
    :host([sliders-vertical]) .sliders {
      flex-direction: row;
      align-items: stretch;
    }

    :host([sliders-vertical]) ixfx-labelled-range-input {
      width: auto;
      height: 100%;
      min-height: 0;
      --mini: 1;             /* force mini mode: no label, tooltip on hover */
      --track-thickness: 100%;  /* fill full width of the narrow slider */
    }

    /* Landscape */
    @container (aspect-ratio > 1) {
      .picker {
        flex-direction: row;
        display:flex;
        align-items: stretch;

      }
      .preview {
        width: 30%;
        height: unset;
      }
      .sliders {
        height: 100%;
        overflow: hidden;
      }
    }

    /* Small height. Show as landscape */
    @container (max-height: 150px) {
      .picker {
        flex-direction: row;
        align-items: stretch;
      }
      ixfx-labelled-range-input {
        --track-thickness: 1em;
        min-height: unset;
      }
      .preview {
        min-width: 50%;
        height: auto;
      }
    }

    /* Medium height — tighter but not extreme */
    @container (max-height: 210px) and (min-height: 150px) {
      ixfx-labelled-range-input {
        --track-thickness: 1.6em;
        min-height: 1.8em;
      }
    }
  `]}};k([A({type:Number})],J.prototype,`l`,void 0),k([A({type:Number})],J.prototype,`c`,void 0),k([A({type:Number})],J.prototype,`h`,void 0),k([A({type:Number})],J.prototype,`a`,void 0),k([A({type:Boolean,attribute:`hide-preview`,reflect:!0})],J.prototype,`hidePreview`,void 0),k([A({type:Boolean,attribute:`hide-h`,reflect:!0})],J.prototype,`hideH`,void 0),k([A({type:Boolean,attribute:`hide-l`,reflect:!0})],J.prototype,`hideL`,void 0),k([A({type:Boolean,attribute:`hide-c`,reflect:!0})],J.prototype,`hideC`,void 0),k([A({type:Boolean,attribute:`show-a`})],J.prototype,`showA`,void 0),k([A({type:Boolean,attribute:`horizontal`,reflect:!0})],J.prototype,`horizontal`,void 0),k([A({type:Boolean,attribute:`sliders-vertical`,reflect:!0})],J.prototype,`slidersVertical`,void 0),k([A({type:Boolean,attribute:`hide-tooltips`,reflect:!0})],J.prototype,`hideTooltips`,void 0),k([A({type:String,attribute:`value`})],J.prototype,`_valueAttr`,void 0),k([A({type:String,attribute:`range-l`})],J.prototype,`rangeLAttr`,void 0),k([A({type:String,attribute:`range-c`})],J.prototype,`rangeCAttr`,void 0),k([A({type:String,attribute:`range-h`})],J.prototype,`rangeHAttr`,void 0),k([A({type:String,attribute:`range-a`})],J.prototype,`rangeAAttr`,void 0),k([M(`#slider-l`)],J.prototype,`_sliderL`,void 0),k([M(`#slider-c`)],J.prototype,`_sliderC`,void 0),k([M(`#slider-h`)],J.prototype,`_sliderH`,void 0),k([M(`#slider-a`)],J.prototype,`_sliderA`,void 0),k([M(`.preview`)],J.prototype,`_previewEl`,void 0),J=k([O(`ixfx-colour-picker`)],J);var Kp=0,qp={small:{width:130,height:100},medium:{width:100,height:155},large:{width:200,height:180},huge:{width:290,height:240}};function Jp(e,n,r,i){return i<1?`
      linear-gradient(oklch(${e} ${n} ${r} / ${i}), oklch(${e} ${n} ${r} / ${i})),
      repeating-conic-gradient(
        var(--surface-2) 0% 25%,
        var(--surface-4) 0% 50%
      ) 50% / 8px 8px
    `:Gp(e,n,r)}var Y=class extends E{constructor(){super(),this.mode=`fluid`,this.l=.7,this.c=.15,this.h=180,this.a=1,this.showPreview=!1,this.hideH=!1,this.hideL=!1,this.hideC=!1,this.showA=!1,this.horizontal=!1,this.size=`medium`,this._isOpen=!1,this._everOpened=!1,this._pendingL=this.l,this._pendingC=this.c,this._pendingH=this.h,this._pendingA=this.a,this._savedL=this.l,this._savedC=this.c,this._savedH=this.h,this._savedA=this.a,this._pendingConfirmed=!1,this._onPopoverToggle=e=>{let n=e;this._isOpen=n.newState===`open`,n.newState===`open`?(this._savedL=this.l,this._savedC=this.c,this._savedH=this.h,this._savedA=this.a,this._pendingL=this.l,this._pendingC=this.c,this._pendingH=this.h,this._pendingA=this.a,this._pendingConfirmed=!1):this.mode===`confirm`&&!this._pendingConfirmed&&this._pickerEl?.setColour(Gp(this._savedL,this._savedC,this._savedH,this._savedA))},this._onPickerInput=e=>{e.stopPropagation();let n=e.detail;if(this.mode===`confirm`){this._pendingL=n.l,this._pendingC=n.c,this._pendingH=n.h,this._pendingA=n.a??1;return}this.l=n.l,this.c=n.c,this.h=n.h,this.a=n.a??1,this._dispatchInput()},this._onPickerChange=e=>{e.stopPropagation();let n=e.detail;if(this.mode===`confirm`){this._pendingL=n.l,this._pendingC=n.c,this._pendingH=n.h,this._pendingA=n.a??1;return}this.l=n.l,this.c=n.c,this.h=n.h,this.a=n.a??1,this._dispatchChange()},this._onConfirm=()=>{this.l=this._pendingL,this.c=this._pendingC,this.h=this._pendingH,this.a=this._pendingA,this._pendingConfirmed=!0,this._dispatchChange();try{this._popupEl.hidePopover()}catch{}},this._onSwatchClick=async()=>{this._everOpened||(this._everOpened=!0,await this.updateComplete);try{this._popupEl.showPopover()}catch{}};let e=++Kp;this._uid=`cp-popup-${e}`,this._anchorName=`--cp-popup-anchor-${e}`,this._popupId=`cp-popup-panel-${e}`}get value(){return Gp(this.l,this.c,this.h,this.a)}get _innerHidePreview(){return this.mode===`fluid`?!this.showPreview:!1}get _pickerDimensions(){return qp[this.size]??qp.medium}setColour(e){let n=lc.convert(e,`oklch-absolute`);this.l=n.l,this.c=n.c,this.h=n.h,this.a=n.opacity??1}firstUpdated(e){super.firstUpdated(e),this._applyAnchorPositioning(),this._updateSwatchBackground()}updated(e){super.updated(e),(e.has(`l`)||e.has(`c`)||e.has(`h`)||e.has(`a`))&&this._updateSwatchBackground()}_applyAnchorPositioning(){let e=this.shadowRoot?.querySelector(`.swatch`);e&&e.style.setProperty(`anchor-name`,this._anchorName),this._popupEl&&this._popupEl.style.setProperty(`position-anchor`,this._anchorName)}_updateSwatchBackground(){let e=this.shadowRoot?.querySelector(`.swatch`);e&&(e.style.background=Jp(this.l,this.c,this.h,this.a))}_dispatchInput(){let e={l:this.l,c:this.c,h:this.h,a:this.a};this.dispatchEvent(new CustomEvent(`input`,{detail:e,bubbles:!0,composed:!0}))}_dispatchChange(){let e={l:this.l,c:this.c,h:this.h,a:this.a};this.dispatchEvent(new CustomEvent(`change`,{detail:e,bubbles:!0,composed:!0}))}render(){return C`
      <button
        class="swatch"
        @click=${this._onSwatchClick}
        aria-label="Pick colour: ${this.value}"
        aria-expanded="${this._isOpen}"
        aria-haspopup="dialog"
      ></button>
      <div
        id="${this._popupId}"
        class="popup popup-surface"
        popover="auto"
        role="dialog"
        aria-label="Colour picker"
        style="--cp-popup-min-width:${this._pickerDimensions.width}px;--cp-popup-min-height:${this._pickerDimensions.height}px"
        @toggle=${this._onPopoverToggle}
      >
        ${this._everOpened?C`
          <ixfx-colour-picker
            .l=${this.l}
            .c=${this.c}
            .h=${this.h}
            .a=${this.a}
            style="width:${this._pickerDimensions.width}px;height:${this._pickerDimensions.height}px"
            ?hide-preview=${this._innerHidePreview}
            ?hide-h=${this.hideH}
            ?hide-l=${this.hideL}
            ?hide-c=${this.hideC}
            ?show-a=${this.showA}
            ?horizontal=${this.horizontal}
            hide-tooltips
            @input=${this._onPickerInput}
            @change=${this._onPickerChange}
          ></ixfx-colour-picker>
          ${this.mode===`confirm`?C`
            <button class="confirm-btn" @click=${this._onConfirm} aria-label="Confirm colour" title="Confirm colour">
              ${vt(Pn)}
            </button>
          `:T}
        `:T}
      </div>
    `}static{this.styles=[D,Hn,_`
    :host {
      display: inline-block;
    }

    .swatch {
      display: inline-block;
      width: var(--cp-popup-swatch-size, 1.5em);
      height: var(--cp-popup-swatch-size, 1.5em);
      border-radius: var(--radius-m, 4px);
      border: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
      padding: 0;
      box-sizing: border-box;
      vertical-align: middle;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .swatch:focus-visible {
      outline: 2px solid var(--accent, oklch(60% 0.15 140));
      outline-offset: 2px;
    }

    /* Popover panel */
    .popup {
      display:flex;
      flex-direction: column;
      gap: var(--space-s);
      /* Reset popover UA inset */
      inset: unset;
      margin: 0;

      min-width: var(--cp-popup-min-width);
      min-height: var(--cp-popup-min-height);

      /* CSS anchor positioning — position-anchor set via inline style in JS */
      position: fixed;
      position-area: block-end span-inline-start;
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
      margin-block-start: 4px;

      padding: var(--space-l);
      z-index: 100;

      /* Animate in/out */
      opacity: 0;
      scale: 0.97;
      pointer-events: none;
      transition: opacity 0.12s ease, scale 0.12s ease;
    }

    .popup:popover-open {
      opacity: 1;
      scale: 1;
      pointer-events: auto;
    }

    ixfx-colour-picker {
      display: block;
    }

    .confirm-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-block-start: var(--space-s);
      margin-inline-start: auto;
      width: 1.8em;
      height: 1.8em;
      border-radius: 50%;
      border: none;
      background: var(--accent, oklch(60% 0.15 140));
      color: var(--accent-text, #fff);
      padding: 0;
      cursor: pointer;
      transition: background var(--transition, 0.15s ease-out);
    }

    .confirm-btn svg {
      width: 1.1em;
      height: 1.1em;
      flex-shrink: 0;
    }

    .confirm-btn:hover {
      background: var(--accent, oklch(70% 0.15 140));
    }

    .confirm-btn:focus-visible {
      outline: 2px solid var(--accent, oklch(60% 0.15 140));
      outline-offset: 2px;
    }
  `]}};k([A({type:String})],Y.prototype,`mode`,void 0),k([A({type:Number})],Y.prototype,`l`,void 0),k([A({type:Number})],Y.prototype,`c`,void 0),k([A({type:Number})],Y.prototype,`h`,void 0),k([A({type:Number})],Y.prototype,`a`,void 0),k([A({type:Boolean,attribute:`show-preview`})],Y.prototype,`showPreview`,void 0),k([A({type:Boolean,attribute:`hide-h`,reflect:!0})],Y.prototype,`hideH`,void 0),k([A({type:Boolean,attribute:`hide-l`,reflect:!0})],Y.prototype,`hideL`,void 0),k([A({type:Boolean,attribute:`hide-c`,reflect:!0})],Y.prototype,`hideC`,void 0),k([A({type:Boolean,attribute:`show-a`})],Y.prototype,`showA`,void 0),k([A({type:Boolean,attribute:`horizontal`})],Y.prototype,`horizontal`,void 0),k([A({type:String})],Y.prototype,`size`,void 0),k([j()],Y.prototype,`_isOpen`,void 0),k([j()],Y.prototype,`_everOpened`,void 0),k([M(`.popup`)],Y.prototype,`_popupEl`,void 0),k([M(`ixfx-colour-picker`)],Y.prototype,`_pickerEl`,void 0),Y=k([O(`ixfx-colour-picker-popup`)],Y);async function Yp(e,n){if(Array.isArray(e))return e;if(Symbol.asyncIterator in Object(e)){let r=[];for await(let i of e){if(n.aborted)return r;i.replace&&(r.length=0),r.push(...i.items)}return r}return e}var Xp=class extends E{constructor(...e){super(...e),this.exclusivity=`none`,this.selectionFilter=`all`,this.interactionMode=`standard`,this._selectedNodes=new Set,this.disableKeyboardNavigation=!1,this._expandedKeys=new Set,this.tickled=new $e(this,{getItems:()=>this.#O().map(({node:e})=>({id:e.item.key,enabled:!0})),onStateChange:()=>{this.setAttribute(`data-input-mode`,this.tickled.inputMode)}}),this._focusedDepth=0,this.#i={indent:20},this.#M=e=>{let n=this.#O();if(n.length===0)return;[`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`,`Enter`,` `].includes(e.key)&&this.tickled.setInputMode(`keyboard`);let r=this.#k();switch(e.key){case`ArrowDown`:{e.preventDefault();let i=Math.min(r+1,n.length-1);this.interactionMode===`implicit`&&this.select(n[i].node),this.#A(i),e.shiftKey&&(this.interactionMode===`standard`||this.interactionMode===`vscode`)?this.#v(n,r,i):this.interactionMode===`vscode`&&(this.#r=void 0),this.requestUpdate();break}case`ArrowUp`:{e.preventDefault();let i=Math.max(r-1,0);this.interactionMode===`implicit`&&this.select(n[i].node),this.#A(i),e.shiftKey&&(this.interactionMode===`standard`||this.interactionMode===`vscode`)?this.#v(n,r,i):this.interactionMode===`vscode`&&(this.#r=void 0),this.requestUpdate();break}case`ArrowRight`:{e.preventDefault();let i=n[r];i&&i.node.item.isLeaf!==!0&&(this._expandedKeys.has(i.node.item.key)?r+1<n.length&&this.#A(r+1):this.#m(i.node,i.depth)),this.requestUpdate();break}case`ArrowLeft`:{e.preventDefault();let i=n[r];if(i&&this._expandedKeys.has(i.node.item.key))this._expandedKeys.delete(i.node.item.key),this.dispatchEvent(new CustomEvent(`collapse`,{detail:{node:i.node,depth:i.depth},bubbles:!0,composed:!0}));else if(i.depth>1){let e=i.depth-1;for(let i=r-1;i>=0;i--)if(n[i].depth===e){this.#A(i);break}}this.requestUpdate();break}case`Enter`:{e.preventDefault();let i=n[r];i&&(this.interactionMode!==`manual`&&this.interactionMode!==`checked`&&this.select(i.node),this.dispatchEvent(new CustomEvent(`activate`,{detail:{node:i.node,depth:i.depth},bubbles:!0,composed:!0})),this.requestUpdate());break}case` `:{e.preventDefault();let i=n[r];if(!i)break;this.interactionMode===`checked`?this._handleCheckboxClick(new MouseEvent(`click`),i.node,i.depth):(this.interactionMode===`standard`||this.interactionMode===`vscode`||this.interactionMode===`manual`)&&this.#p(i.node,i.depth);break}case`Escape`:e.preventDefault(),this.#S();break}},this.#N=e=>{let n=e.target.closest(`li`);if(!n)return;let r=n.dataset.key;if(!r)return;let i=this.#O().find(e=>e.node.item.key===r);i&&this.dispatchEvent(new CustomEvent(`activate`,{detail:{node:i.node,depth:i.depth},bubbles:!0,composed:!0}))}}get selectedNodes(){return this._selectedNodes}#e;#t;#n;#r;#i;updated(e){if(e.has(`root`)&&this.root&&(this.#S(),this._expandedKeys.clear(),this.#o(),this.tickled.clearTickled(),this._focusedDepth=0),e.has(`model`)){this.#n?.(),this.#n=void 0;let e=this.model;e&&(this.root=e.root,this.#n=e._subscribe(e=>{e.type===`root`?(this.root=e.root,this.requestUpdate()):e.type===`invalidate`&&this._expandedKeys.has(e.key)&&(this._expandedKeys.delete(e.key),this.requestUpdate())}))}e.has(`interactionMode`)&&(this.#r=void 0,this.clearSelection()),e.has(`selectedNode`)&&this.selectedNode&&e.get(`selectedNode`)!==this.selectedNode&&this.tickled.setTickled(this.selectedNode.item.key)}connectedCallback(){super.connectedCallback(),this.setAttribute(`data-input-mode`,`mouse`)}disconnectedCallback(){super.disconnectedCallback(),this.#n?.(),this.#n=void 0}getConfig(){return{...this.#i}}setConfig(e){this.#i={...this.#i,...e},this.requestUpdate()}select(e){if(!this.#a(e))return;let n=new Set(this._selectedNodes);this._selectedNodes.clear(),this._selectedNodes.add(e),this.selectedNode=e,this.#s(n),this.requestUpdate()}deselect(e){if(!this._selectedNodes.has(e))return;let n=new Set(this._selectedNodes);this._selectedNodes.delete(e),this.selectedNode===e&&(this.selectedNode=[...this._selectedNodes].at(-1)),this.#s(n),this.requestUpdate()}clearSelection(){if(this._selectedNodes.size===0)return;let e=new Set(this._selectedNodes);this.#o(),this.#s(e),this.requestUpdate()}navigateTo(e){if(!this.root?.children)return!1;this.#S(),this.#o(),this.tickled.clearTickled(),this._focusedDepth=0;let n=this.root;for(let r of e){let i=n?.children;if(!i)return!1;let a=i.find(e=>e.item.key===r);if(!a)return!1;this.#C(a.item.key),this._expandedKeys.add(a.item.key),r===e.at(-1)&&(this.select(a),this.tickled.setTickled(a.item.key)),n=a}return this.requestUpdate(),this.#x(e.at(-1)),!0}navigateToNode(e){if(!this.root?.children)return!1;let n=this.#c(this.root.children,e);return n?this.navigateTo(n):!1}getNodes(){if(!this.root?.children)return[];let e=[],n=(r,i)=>{if(e.push({node:r,depth:i}),r.children)for(let e of r.children)n(e,i+1)};for(let e of this.root.children)n(e,0);return e}#a(e){return this.selectionFilter===`none`?!1:this.selectionFilter===`leaf`?e.item.isLeaf===!0:this.selectionFilter===`branch`?e.item.isLeaf===!1||e.children!==void 0&&e.children.length>0:!0}#o(){this._selectedNodes.clear(),this.selectedNode=void 0}#s(e){let n={selected:new Set(this._selectedNodes),previous:e};this.dispatchEvent(new CustomEvent(`select`,{detail:n,bubbles:!0,composed:!0}))}#c(e,n,r=[]){for(let i of e){let e=[...r,i.item.key];if(n(i))return e;if(i.children?.length){let r=this.#c(i.children,n,e);if(r)return r}}}renderNodeContent(e,n){let r=e.item.isLeaf!==!0,i=this._isExpanded(e);return C`
      <span class="tree-caret">
        ${r?C`<ixfx-icon class="caret-icon" name="chevron-down" .rotate=${i?T:`-90deg`}></ixfx-icon>`:``}
      </span>
      <span class="tree-label">${e.item.label}</span>
    `}_handleItemClick(e,n,r){switch(this.#e&&this._expandedKeys.has(this.#e.item.key)&&this.#S(),this.tickled.handlePointerEnter(e.item.key),this._focusedDepth=n,this.dispatchEvent(new CustomEvent(`item-click`,{detail:{node:e,depth:n},bubbles:!0,composed:!0})),this.interactionMode){case`implicit`:this.#l(e,n);break;case`standard`:this.#u(e,n,r);break;case`vscode`:this.#u(e,n,r);break;case`manual`:this.#f(e,n,r);break;case`checked`:this.#d(e,n);break}this.requestUpdate()}#l(e,n){if(this.#a(e)){let n=new Set(this._selectedNodes);this._selectedNodes.clear(),this._selectedNodes.add(e),this.selectedNode=e,(!n.has(e)||n.size!==1)&&this.#s(n)}this.#m(e,n)}#u(e,n,r){let i=r?r.metaKey||r.ctrlKey:!1,a=r?r.shiftKey:!1;if(i){if(this.#a(e)){let n=new Set(this._selectedNodes);this._selectedNodes.has(e)?(this._selectedNodes.delete(e),this.selectedNode===e&&(this.selectedNode=[...this._selectedNodes].at(-1))):(this._selectedNodes.add(e),this.selectedNode=e,this.#r={node:e,flatIndex:this.#_(e)}),this.#s(n)}return}if(a&&this.#r){let n=this.#O(),r=n.findIndex(e=>e.node===this.#r.node),i=n.findIndex(n=>n.node===e);if(r>=0&&i>=0){let a=new Set(this._selectedNodes),o=Math.min(r,i),s=Math.max(r,i),c=n.slice(o,s+1).map(e=>e.node).filter(e=>this.#a(e));this._selectedNodes=new Set(c),this.selectedNode=e,this.#s(a)}return}if(this.#a(e)){let n=new Set(this._selectedNodes);this._selectedNodes.clear(),this._selectedNodes.add(e),this.selectedNode=e,this.#r={node:e,flatIndex:this.#_(e)},(!n.has(e)||n.size!==1)&&this.#s(n)}this.#m(e,n)}#d(e,n){this.#m(e,n)}#f(e,n,r){let i=r?r.metaKey||r.ctrlKey:!1,a=r?r.shiftKey:!1;if(i){if(this.#a(e)){let n=new Set(this._selectedNodes);this._selectedNodes.has(e)?(this._selectedNodes.delete(e),this.selectedNode===e&&(this.selectedNode=[...this._selectedNodes].at(-1))):(this._selectedNodes.add(e),this.selectedNode=e,this.#r={node:e,flatIndex:this.#_(e)}),this.#s(n)}return}if(a&&this.#r){let n=this.#O(),r=n.findIndex(e=>e.node===this.#r.node),i=n.findIndex(n=>n.node===e);if(r>=0&&i>=0){let a=new Set(this._selectedNodes),o=Math.min(r,i),s=Math.max(r,i),c=n.slice(o,s+1).map(e=>e.node).filter(e=>this.#a(e));this._selectedNodes=new Set(c),this.selectedNode=e,this.#s(a)}return}this.#m(e,n)}#p(e,n){if(!this.#a(e))return;let r=new Set(this._selectedNodes);this._selectedNodes.has(e)?(this._selectedNodes.delete(e),this.selectedNode===e&&(this.selectedNode=[...this._selectedNodes].at(-1))):(this._selectedNodes.add(e),this.selectedNode=e,this.#r={node:e,flatIndex:this.#_(e)}),this.#s(r)}_handleCheckboxClick(e,n,r){e.stopPropagation();let i=new Set(this._selectedNodes),a=this.#h(n);this.#g(n,!a),(this.selectedNode===void 0||!this._selectedNodes.has(this.selectedNode))&&(this.selectedNode=[...this._selectedNodes].at(-1)),this.#s(i),this.requestUpdate()}#m(e,n){if(this._expandedKeys.has(e.item.key))this._expandedKeys.delete(e.item.key),this.dispatchEvent(new CustomEvent(`collapse`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}));else if(e.children===void 0){if(e.item.isLeaf!==!1)return;if(this.model??(this.loadChildren?this:void 0)){this.#e=e;let r=new AbortController;this.#t=r,this.#y(e,n,r).catch(()=>{})}}else this.#C(e.item.key),this._expandedKeys.add(e.item.key),this.dispatchEvent(new CustomEvent(`expand`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}#h(e){return this._selectedNodes.has(e)?e.children?.length?e.children.every(e=>this.#h(e)):!0:!1}#g(e,n){if(this.#a(e)&&(n?this._selectedNodes.add(e):this._selectedNodes.delete(e)),e.children)for(let r of e.children)this.#g(r,n)}#_(e){return this.#O().findIndex(n=>n.node===e)}#v(e,n,r){if(!this.#r){let r=e[n]?.node;r&&(this.#r={node:r,flatIndex:n})}if(!this.#r)return;let i=e.findIndex(e=>e.node===this.#r.node);if(i<0)return;let a=Math.min(i,r),o=Math.max(i,r);if(this.interactionMode===`vscode`){this.#r.selectionSnapshot||(this.#r={...this.#r,selectionSnapshot:new Set(this._selectedNodes)});let n=this.#r.selectionSnapshot,i=e.slice(a,o+1).map(e=>e.node).filter(e=>this.#a(e)),s=new Set(n);for(let e of i)n.has(e)?s.delete(e):s.add(e);let c=new Set(this._selectedNodes);this._selectedNodes=s,this.selectedNode=e[r]?.node??this.selectedNode,this.#s(c)}else{let n=new Set(this._selectedNodes),i=e.slice(a,o+1).map(e=>e.node).filter(e=>this.#a(e));this._selectedNodes=new Set(i),this.selectedNode=e[r]?.node??this.selectedNode,this.#s(n)}}async#y(e,n,r){try{let i;if(i=this.model?await this.model.getChildren(e,n,r.signal):[...await Yp(this.loadChildren({node:e,depth:n},r.signal),r.signal)],r.signal.aborted)return;e.children=i,this.#C(e.item.key),this._expandedKeys.add(e.item.key),this.#e=void 0,this.#t=void 0,this.dispatchEvent(new CustomEvent(`expand`,{detail:{node:e,depth:n},bubbles:!0,composed:!0})),this.requestUpdate()}catch{if(r.signal.aborted)return;e.children=[],this.#e=void 0,this.#t=void 0,this.requestUpdate()}}_isSelected(e){return this._selectedNodes.has(e)}_isFocused(e){return this.tickled.isTickled(e.item.key)}_isExpanded(e){return this._expandedKeys.has(e.item.key)?!0:this.filterPredicate&&e.children?e.children.some(e=>this.#b(e,0)):!1}#b(e,n){return!this.filterPredicate||this.filterPredicate(e,n)?!0:e.children?.some(e=>this.#b(e,n+1))??!1}get _pendingNode(){return this.#e}#x(e){requestAnimationFrame(()=>{let n=this.shadowRoot?.querySelector(`[data-key="${CSS.escape(e)}"]`);if(!n)return;let r=n.getBoundingClientRect(),i=this.getBoundingClientRect(),a=r.top-i.top,o=a+r.height;a<0?this.scrollTop+=a:o>this.clientHeight&&(this.scrollTop+=o-this.clientHeight)})}#S(){this.#t&&(this.#t.abort(),this.#t=void 0,this.#e=void 0)}#C(e){if(this.exclusivity!==`none`){if(this.exclusivity===`depth`)this.#w(e);else if(this.exclusivity===`global`){let n=this.#T(e);for(let r of[...this._expandedKeys])!n.has(r)&&r!==e&&this._expandedKeys.delete(r)}}}#w(e){if(!this.root)return;let n=this.#E(this.root,e);if(n?.children)for(let r of n.children)r.item.key!==e&&this._expandedKeys.has(r.item.key)&&this._expandedKeys.delete(r.item.key)}#T(e){let n=new Set,r=i=>{if(i.item.key===e)return!0;if(!i.children)return!1;for(let e of i.children)if(r(e))return n.add(i.item.key),!0;return!1};return this.root&&r(this.root),n}#E(e,n,r=void 0){if(e.children)for(let i of e.children){if(i.item.key===n)return r??e;let a=this.#E(i,n,i);if(a)return a}}#D(e,n){let r=[],i=(e,n)=>{if(r.push({node:e,depth:n}),this._expandedKeys.has(e.item.key)&&e.children)for(let r of e.children)i(r,n+1)};if(e.children)for(let r of e.children)i(r,n+1);return r}#O(){return this.root?this.#D(this.root,0):[]}#k(){let e=this.#O(),n=this.tickled.tickledId;return n?e.findIndex(e=>e.node.item.key===n):0}#A(e){let n=this.#O();if(e<0||e>=n.length)return;let{node:r,depth:i}=n[e];this.tickled.setTickled(r.item.key),this._focusedDepth=i,this.dispatchEvent(new CustomEvent(`tickle`,{detail:{node:r,depth:i},bubbles:!0,composed:!0})),this.requestUpdate(),this.updateComplete.then(()=>this.#j())}#j(){let e=this.tickled.tickledId;e!==void 0&&(this.shadowRoot?.querySelector(`[data-key="${e}"]`))?.scrollIntoView({block:`nearest`,behavior:`smooth`})}#M;renderLoadingIndicator(){return C`<span class="loading-spinner"></span>`}render(){let e=this.#O();return C`
      <div
        id="container"
        data-input-mode=${this.tickled.inputMode}
        @keydown=${this.#M}
        @dblclick=${this.#N}
        @pointerleave=${e=>this.tickled.handlePointerLeave(e)}
        tabindex="0"
      >
        ${this.root?this.#P(e):T}
      </div>
    `}#N;#P(e){return e.length===0&&this.#e?C`
        <div class="tree-loading">
          ${this.renderLoadingIndicator()}
        </div>
      `:C`
      <ul class="tree-list" role="tree">
        ${e.map(({node:e,depth:n})=>this._renderNode(e,n))}
      </ul>
    `}_renderNode(e,n){let r=this._isSelected(e),i=this._isFocused(e),a=e.item.isLeaf!==!0,o=this._isExpanded(e),s=this.#e===e,c=this.filterPredicate!==void 0&&!this.#b(e,n);return C`
      <li
        class="item ${r?`selected`:``} ${i?`tickled`:``} ${a?`branch`:`leaf`} ${c?`filtered`:``}"
        role="treeitem"
        aria-selected=${r}
        aria-expanded=${a?o:T}
        aria-level=${n+1}
        data-key=${e.item.key}
        style=${`--depth: ${n}`}
        @click=${r=>this._handleItemClick(e,n,r)}
        @pointerenter=${()=>{this.tickled.handlePointerEnter(e.item.key),this.dispatchEvent(new CustomEvent(`tickle`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}}
      >
        ${this.renderNodeContent(e,n)}
        ${s?this.renderLoadingIndicator():T}
      </li>
    `}static{this.styles=[D,et,tt,_`
      :host {
      --tree-bg: var(--surface-3);
      --tree-text: var(--surface-3-text);
      --tree-muted-text: var(--surface-muted-text);
      --tree-indent: 1ch;
      --tree-item-height: 28px;
      --tree-caret-size: 10px;
      --tree-radius: var(--radius-s);

      display: block;
      overflow: auto;
      box-sizing: border-box;
      background: var(--tree-bg);
      color: var(--tree-text);
    }

    #container {
      outline: none;
      min-height: 100%;
    }

    .tree-list {
      list-style: none;
      margin: 0;
      padding: var(--space-xs);
    }

    .item {
      display: flex;
      align-items: center;
      height: var(--tree-item-height);
      padding-left: calc(var(--tree-indent) * var(--depth, 0));
      cursor: pointer;
      user-select: none;
      font-family: var(--font-family);
      font-size: var(--text-m);
      border-radius: var(--tree-radius);
      transition: background var(--transition, 0.15s ease-out);
      margin: 1px 0;
    }

    .tree-caret {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--tree-caret-size);
      height: var(--tree-caret-size);
      flex-shrink: 0;
      margin-right: var(--space-xs);
    }

    .caret-icon {
      width: var(--tree-caret-size);
      height: var(--tree-caret-size);
      color: var(--tree-muted-text);
      transition: transform var(--transition, 0.15s ease-out);
    }

    .item.selected .caret-icon {
      color: var(--accent-text);
    }

    .tree-label {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tree-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-m);
    }

    .loading-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid var(--surface-5);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: tree-spin 0.7s linear infinite;
    }

    @keyframes tree-spin {
      to { transform: rotate(360deg); }
    }

    .item.filtered {
      display: none;
    }

    ::highlight(incr-search-highlight) {
      background: var(--search-highlight-bg, var(--accent));
      color: var(--search-highlight-color, var(--accent-text, #fff));
      border-radius: 2px;
      padding: 0 1px;
    }
  `]}};k([A({type:Object})],Xp.prototype,`root`,void 0),k([A({attribute:!1})],Xp.prototype,`model`,void 0),k([A({attribute:!1})],Xp.prototype,`loadChildren`,void 0),k([A({reflect:!0,attribute:`exclusivity`})],Xp.prototype,`exclusivity`,void 0),k([A({reflect:!0,attribute:`selection-filter`})],Xp.prototype,`selectionFilter`,void 0),k([A({type:String,attribute:`interaction-mode`})],Xp.prototype,`interactionMode`,void 0),k([A({attribute:!1})],Xp.prototype,`selectedNode`,void 0),k([j()],Xp.prototype,`_selectedNodes`,void 0),k([A({attribute:!1})],Xp.prototype,`filterPredicate`,void 0),k([A({type:Boolean,attribute:`disable-keyboard-navigation`})],Xp.prototype,`disableKeyboardNavigation`,void 0),k([j()],Xp.prototype,`_expandedKeys`,void 0),k([j()],Xp.prototype,`_focusedDepth`,void 0),Xp=k([O(`ixfx-tree-base`)],Xp);function Zp(e,n){if(e.item.isLeaf||!e.children?.length)return n.has(e)?`checked`:`unchecked`;let r=e.children.map(e=>Zp(e,n)),i=r.every(e=>e===`checked`),a=r.every(e=>e===`unchecked`);return i?`checked`:a?`unchecked`:`indeterminate`}var Qp=class extends Xp{#e=new Set;render(){return this.#t(),super.render()}#t(){this.#e.clear();let e=(n,r)=>{if(n.item.icon&&this.#e.add(r),n.children)for(let i of n.children)e(i,r+1)};this.root&&e(this.root,0)}renderNodeContent(e,n){let r=e.item.isLeaf!==!0,i=this._isExpanded(e),a=e.item.icon,o=e.item.tooltip,s=C`
      <span class="tree-caret">
        ${r?C`<ixfx-icon class="caret-icon" name="chevron-down" .rotate=${i?T:`-90deg`}></ixfx-icon>`:``}
      </span>
      ${a?C`<ixfx-icon class="tree-icon" name="${a}"></ixfx-icon>`:T}
      <span class="tree-label">
        ${e.item.label}
        ${o?C`<ixfx-tooltip class="tree-tooltip" anchor="--tooltip-tree-${e.item.key}" .value=${o}></ixfx-tooltip>`:T}
      </span>
    `;if(this.interactionMode===`checked`){let r=Zp(e,this._selectedNodes);return C`
        <input
          type="checkbox"
          class="tree-checkbox"
          .checked=${r===`checked`}
          .indeterminate=${r===`indeterminate`}
          aria-label="Select ${e.item.label}"
          @click=${r=>this._handleCheckboxClick(r,e,n)}
        />${s}`}return s}_renderNode(e,n){let r=this._isSelected(e),i=this._isFocused(e),a=e.item.isLeaf!==!0,o=this._isExpanded(e),s=this._pendingNode===e,c=this.#e.has(n);return C`
      <li
        class="item ${r?`selected`:``} ${i?`tickled`:``} ${a?`branch`:`leaf`} ${c?`has-icon-at-depth`:``}"
        data-key=${e.item.key}
        role="treeitem"
        aria-selected=${r}
        aria-expanded=${a?o:T}
        aria-level=${n+1}
        style=${`--depth: ${n}`}
        @click=${r=>this._handleItemClick(e,n,r)}
        @pointerenter=${()=>this.tickled.handlePointerEnter(e.item.key)}
      >
        ${this.renderNodeContent(e,n)}
        ${s?this.renderLoadingIndicator():T}
      </li>
    `}static{this.styles=[D,...Xp.styles,_`
      .tree-caret {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--tree-caret-size);
        height: var(--tree-caret-size);
        flex-shrink: 0;
        margin-right: var(--space-xs);
      }

      .caret-icon {
        width: var(--tree-caret-size);
        height: var(--tree-caret-size);
        color: var(--tree-muted-text);
        transition: transform var(--transition, 0.15s ease-out);
      }

      .item.selected .caret-icon {
        color: var(--accent-text);
      }

      .tree-icon {
        flex-shrink: 0;
        width: var(--icon-size, 1em);
        height: var(--icon-size, 1em);
        margin-right: var(--icon-spacing, 0.3em);
      }

      .item:not(.has-icon-at-depth) .tree-icon {
        display: none;
      }

      .item.has-icon-at-depth .tree-label {
        margin-left: var(--icon-size, 1em);
      }

      .tree-tooltip {
        position: absolute;
        anchor-name: --tooltip-tree;
      }

      .tree-checkbox {
        flex-shrink: 0;
        margin-right: var(--space-xs, 3px);
        cursor: pointer;
        accent-color: var(--accent);
        pointer-events: auto;
      }

      /* In checked mode the checkbox communicates selection state —
         suppress the row highlight so it doesn't double-signal */
      :host([interaction-mode="checked"]) .item.selected {
        background: transparent;
        color: inherit;
        outline: none;
      }

      

      .tree-label {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
      }
    `]}};Qp=k([O(`ixfx-tree-list`)],Qp);var $p=`narrowed-text-highlight`,em=class extends E{constructor(...e){super(...e),this.selectionMode=`single`,this.requiredSelection=!1,this.orientation=`horizontal`,this.nowrap=!1,this.separator=` `,this.preserveFilter=!1,this.value=``,this._query=``,this._computedItems=[],this._filteredItems=[],this._isFocused=!1,this._selectedValues=new Set,this._search=On({selector:e=>e.label??e.value}),this.tickled=new $e(this,{getItems:()=>this._filteredItems.map((e,n)=>({id:n,enabled:!0})),onTickle:e=>{if(e===void 0||!this.shadowRoot)return;let n=this.shadowRoot.querySelector(`.items`);if(!n)return;let r=n.querySelectorAll(`.item`)[e];r&&r.scrollIntoView({block:`nearest`,inline:`nearest`})}}),this.#e=()=>{this._updateComputedItems()},this.#t=e=>{let n=e.target;this._query=n.value,this._query.trim()&&this._filteredItems.length>0?this.tickled.setTickled(0):this.tickled.clearTickled(),this._updateFilteredItems()},this.#n=e=>{if(this._filteredItems.length!==0)switch(e.key){case`Tab`:e.shiftKey&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(`narrowed-text-shift-tab`,{bubbles:!0,composed:!0})));return;case`ArrowRight`:{if(this.orientation!==`horizontal`)return;let n=this.tickled.tickledId,r=this._filteredItems.length-1;if(n!==void 0&&n>=r)return;e.preventDefault(),this.tickled.handleKeyboardNavigation(`next`);break}case`ArrowLeft`:{if(this.orientation!==`horizontal`)return;let n=this.tickled.tickledId;if(n!==void 0&&n<=0)return;e.preventDefault(),this.tickled.handleKeyboardNavigation(`previous`);break}case`ArrowDown`:{if(this.orientation!==`vertical`)return;let n=this.tickled.tickledId,r=this._filteredItems.length-1;if(n!==void 0&&n>=r)return;e.preventDefault(),this.tickled.handleKeyboardNavigation(`next`);break}case`ArrowUp`:{if(this.orientation!==`vertical`)return;let n=this.tickled.tickledId;if(n!==void 0&&n<=0)return;e.preventDefault(),this.tickled.handleKeyboardNavigation(`previous`);break}case`Enter`:{if(e.preventDefault(),this._filteredItems[this.tickled.tickledId??-1],this.orientation!==`horizontal`)return;let n=this.tickled.tickledId,r=this._filteredItems.length-1;if(n!==void 0&&n>=r)return;e.preventDefault(),this.tickled.handleKeyboardNavigation(`next`);break}case`ArrowLeft`:{if(this.orientation!==`horizontal`)return;let n=this.tickled.tickledId;if(n!==void 0&&n<=0)return;e.preventDefault(),this.tickled.handleKeyboardNavigation(`previous`);break}case`ArrowDown`:{if(this.orientation!==`vertical`)return;let n=this.tickled.tickledId,r=this._filteredItems.length-1;if(n!==void 0&&n>=r)return;e.preventDefault(),this.tickled.handleKeyboardNavigation(`next`);break}case`ArrowUp`:{if(this.orientation!==`vertical`)return;let n=this.tickled.tickledId;if(n!==void 0&&n<=0)return;e.preventDefault(),this.tickled.handleKeyboardNavigation(`previous`);break}case`Enter`:{e.preventDefault();let n=this._filteredItems[this.tickled.tickledId??-1];n&&(this._selectItem(n,!1),this._query=``,this._updateFilteredItems());break}case` `:e.preventDefault(),this.tickled.tickledId!==void 0&&this._filteredItems[this.tickled.tickledId]&&this._selectItem(this._filteredItems[this.tickled.tickledId],!1);break;case`Escape`:e.preventDefault(),this._query=``,this.tickled.clearTickled(),this._updateFilteredItems();break}},this.#r=()=>{this._isFocused=!0,this._query.trim()&&this._filteredItems.length>0&&this.tickled.setTickled(0)},this.#i=()=>{let e=this.shadowRoot?.querySelector(`.search-input`);e&&requestAnimationFrame(()=>{e.focus()})},this.#a=()=>{this._isFocused=!1,this.tickled.clearTickled(),this.dispatchEvent(new CustomEvent(`narrowed-text-blur`,{bubbles:!0,composed:!0}))},this.#o=()=>{(this.shadowRoot?.querySelector(`.search-input`))?.focus()},this.#s=e=>{let n=e.target;n.classList.contains(`item`)||n.closest(`.item`)||(this.shadowRoot?.querySelector(`.search-input`))?.focus()}}get selected(){return this.selectionMode===`single`?this._selectedValues.values().next().value??``:[...this._selectedValues]}set selected(e){this.selectionMode===`single`?(this._selectedValues.clear(),e&&this._selectedValues.add(e)):(this._selectedValues.clear(),Array.isArray(e)&&e.forEach(e=>this._selectedValues.add(e))),this._updateFilteredItems()}connectedCallback(){super.connectedCallback(),this._unsubSearch=this._search.onChange(e=>{let n=e.results.map(e=>e.item);for(let e of this._computedItems)this._selectedValues.has(e.value)&&!n.includes(e)&&n.push(e);this._filteredItems=n,this._searchState=e,this.requestUpdate()}),this.addEventListener(`narrowed-text-init`,()=>this.#i())}disconnectedCallback(){super.disconnectedCallback(),this._unsubSearch?.(),this._search.dispose(),c({key:$p}),this.removeEventListener(`narrowed-text-init`,()=>this.#i())}firstUpdated(){this._updateComputedItems()}updated(e){e.has(`value`)&&this._updateSelectedFromValue(),this._applyHighlights()}#e;_updateComputedItems(){let e=this.querySelectorAll(`[data-value]`),n=[];e.forEach(e=>{let r=e.getAttribute(`data-value`)??``,i=e.getAttribute(`data-label`)??e.textContent?.trim()??r,a=e.getAttribute(`data-description`)??void 0,o=e.getAttribute(`data-icon-name`)??void 0;n.push({value:r,label:i,description:a,iconName:o})}),this._computedItems=n,this._search.setItems(n)}_updateSelectedFromValue(){if(this.selectionMode===`single`)this._selectedValues.clear(),this.value&&this._selectedValues.add(this.value);else{let e=this.value.split(`,`).filter(e=>e.trim());this._selectedValues.clear(),e.forEach(e=>this._selectedValues.add(e.trim()))}this._updateFilteredItems()}_updateFilteredItems(){this._search.setQuery(this._query)}_applyHighlights(){if(!this._query.trim()||!this._searchState||!this.shadowRoot){c({key:$p});return}s(l(this.shadowRoot,`.item-label`,this._searchState.positionsByItem,e=>{let n=e.getAttribute(`data-item-value`);return this._computedItems.find(e=>e.value===n)},e=>{let n=e.getAttribute(`data-item-value`),r=this._computedItems.find(e=>e.value===n);return r?.label??r?.value??``}),{key:$p})}#t;#n;#r;#i;focus(){let e=this.shadowRoot?.querySelector(`.search-input`);e?e.focus():super.focus()}blur(){let e=this.shadowRoot?.querySelector(`.search-input`);e?e.blur():super.blur()}#a;#o;#s;#c(e){this._selectItem(e);let n=this._filteredItems.findIndex(n=>n.value===e.value);n>=0&&this.tickled.handlePointerEnter(n),(this.shadowRoot?.querySelector(`.search-input`))?.focus()}_selectItem(e,n=!0){this.selectionMode===`single`?this._selectedValues.has(e.value)&&!this.requiredSelection?this._selectedValues.clear():(this._selectedValues.clear(),this._selectedValues.add(e.value)):this._selectedValues.has(e.value)?(!this.requiredSelection||this._selectedValues.size>1)&&this._selectedValues.delete(e.value):this._selectedValues.add(e.value),this._updateValueFromSelected(),this._updateFilteredItems();let r=this._computedItems.filter(e=>this._selectedValues.has(e.value));this.dispatchEvent(new CustomEvent(`change`,{detail:{item:e,query:this._query,selected:r},bubbles:!0,composed:!0})),n&&!this.preserveFilter&&this._query&&(this._query=``,this._updateFilteredItems())}_updateValueFromSelected(){this.selectionMode===`single`?this.value=[...this._selectedValues][0]??``:this.value=[...this._selectedValues].join(`,`)}#l(e,n){let r=this.tickled.isTickled(n),i=this._selectedValues.has(e.value),a=e.label??e.value;return C`
      <div
        class="item ${r?`tickled`:``} ${i?`selected`:``}"
        part="item"
        role="option"
        aria-selected=${i}
        @click=${()=>this.#c(e)}
        @pointerenter=${()=>this.tickled.handlePointerEnter(n)}
      >
        ${e.iconName?C`<ixfx-icon class="item-icon" name=${e.iconName}></ixfx-icon>`:T}
        <span class="item-label" part="label" data-item-value=${e.value}>${a}</span>
      </div>
    `}render(){let e=this.width!==void 0||this.height!==void 0;return C`
      <slot @slotchange=${this.#e} style="display: none;"></slot>
      <div
        class="container ${this.orientation} ${e?`scrollable`:``} ${this._isFocused?`focused`:``}"
        part="container"
        style=${this._getContainerStyle()}
        data-input-mode=${this.tickled.inputMode}
        @click=${this.#s}
      >
        <input
          type="text"
          class="search-input"
          .value=${this._query}
          autocomplete="off"
          spellcheck="false"
          aria-label="Search items"
          @input=${this.#t}
          @keydown=${this.#n}
          @focus=${this.#r}
          @blur=${this.#a}
        >
        <div class="focus-trigger" @click=${this.#o}></div>
        <div 
          class="items" 
          part="items" 
          role="listbox"
          @pointerleave=${e=>this.tickled.handlePointerLeave(e)}
        >
          ${this._filteredItems.map((e,n)=>this.#l(e,n))}
        </div>
      </div>
    `}_getContainerStyle(){let e=[];return this.width&&e.push(`width: ${this.width}`),this.height&&e.push(`height: ${this.height}`),e.join(`; `)}static{this.styles=[D,et,tt,_`
    :host {
      display: inline-block;
      position: relative;
      font-family: var(--font-family, system-ui, sans-serif);
      font-size: var(--text-m, 12px);
      color: var(--surface-2-text);
      --item-padding: var(--space-xs, 3px) var(--space-m, 8px);
      --item-border-radius: var(--radius-s, 3px);
      --item-icon-spacing: var(--space-xs, 3px);
    }

    .container {
      display: flex;
      position: relative;
      min-width: min-content;
      min-height: min-content;
    }

    .container.horizontal {
      flex-direction: row;
      align-items: stretch;
    }

    .container.vertical {
      flex-direction: column;
    }

    .container.scrollable {
      scrollbar-width: none;
      overflow-x: auto;
      overflow-y: hidden;
      .vertical {
        overflow-x: hidden;
        overflow-y: auto;
      }
    }

    .container.focused {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .search-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: text;
      z-index: 1;
      pointer-events: none;
    }

    .search-input:focus {
      outline: none;
    }

    .focus-trigger {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      cursor: text;
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      gap: var(--item-spacing, var(--space-xs, 3px));
      align-items: center;
      width: 100%;
      height: 100%;
      min-height: var(--item-height, 28px);
      position: relative;
      z-index: 2;
      pointer-events: auto;
    }

    .container.horizontal .items {
      flex-direction: row;
    }

    .container.vertical .items {
      flex-direction: column;
      align-items: stretch;
    }

    :host([nowrap]) .items {
      flex-wrap: nowrap;
    }

    .item-icon {
      flex-shrink: 0;
      width: 1em;
      height: 1em;
    }

    .item-label {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--item-label-color, var(--item-text, inherit));
      font-style: var(--item-label-font-style, var(--item-label-font-style-default, normal));
      text-decoration: var(--item-label-text-decoration, var(--item-label-text-decoration-default, none));
      text-underline-offset: var(--item-label-text-underline-offset, auto);
    }

    .item.selected .item-label {
      --item-label-color: var(--item-text-selected);
      --item-label-font-style: var(--item-label-font-style-selected, italic);
    }

    .item.tickled .item-label {
      --item-label-text-decoration: var(--item-label-text-decoration-tickled, underline dotted);
      --item-label-text-underline-offset: var(--item-label-text-underline-offset-tickled, 3px);
    }

    .item.active .item-label {
      --item-label-color: var(--item-text-selected);
    }

    .item.selected.tickled .item-label {
      --item-label-color: var(--item-text-selected);
      --item-label-font-style: var(--item-label-font-style-selected, italic);
      --item-label-text-decoration: var(--item-label-text-decoration-tickled, underline dotted);
      --item-label-text-underline-offset: var(--item-label-text-underline-offset-tickled, 3px);
    }

    ::highlight(narrowed-text-highlight) {
      background: var(--highlight-background, var(--accent));
      color: var(--highlight-color, var(--accent-text, #fff));
      border-radius: 2px;
      padding: 0 1px;
    }
  `]}};k([A({type:String,attribute:`selection-mode`})],em.prototype,`selectionMode`,void 0),k([A({type:Boolean,attribute:`required-selection`})],em.prototype,`requiredSelection`,void 0),k([A({type:String,attribute:`orientation`})],em.prototype,`orientation`,void 0),k([A({type:Boolean,attribute:`nowrap`})],em.prototype,`nowrap`,void 0),k([A({type:String,attribute:`separator`})],em.prototype,`separator`,void 0),k([A({type:String,attribute:`width`})],em.prototype,`width`,void 0),k([A({type:String,attribute:`height`})],em.prototype,`height`,void 0),k([A({type:Boolean,attribute:`preserve-filter`})],em.prototype,`preserveFilter`,void 0),k([A({type:String})],em.prototype,`value`,void 0),k([j()],em.prototype,`_query`,void 0),k([j()],em.prototype,`_computedItems`,void 0),k([j()],em.prototype,`_filteredItems`,void 0),k([j()],em.prototype,`_isFocused`,void 0),k([M(`slot`)],em.prototype,`_slot`,void 0),em=k([O(`ixfx-narrowed-text`)],em);var tm=class extends E{constructor(...e){super(...e),this._selectedNodes=new Set,this.exclusivity=`none`,this.selectionFilter=`leaf`,this._openIdx=-1,this._isFocused=!1,this._menuOpen=!1,this._focusOnNarrowedText=!1,this.inputMode=``,this.#n=``,this.#r=!1,this.#i=null,this.tickled=new $e(this,{getItems:()=>this.#a(),onTickle:e=>{e!==void 0&&this.#o(e)}}),this.#c=()=>{this._isFocused=!0},this.#l=()=>{this._isFocused=!1},this.#u=()=>{this.shadowRoot?.querySelector(`.host-container`)?.focus()},this.#p=()=>{document.removeEventListener(`keydown`,this.#m,{capture:!0}),this.#i=null,this.#r=!1,requestAnimationFrame(()=>{this.shadowRoot?.querySelector(`.host-container`)?.focus()})},this.#m=e=>{if(!(!this.#i?.querySelector(`ixfx-menu-container`)||!this.#i?.isOpen))switch(e.key){case`ArrowLeft`:case`ArrowRight`:{e.preventDefault(),e.stopPropagation(),this.#i.closeMenu();let n=this.root,r=this.selectedNode;if(!n||!r)break;let i=(this.#C(n,r)??[n]).length+ +!!this.#s(),a=this.tickled.tickledId??-1;e.key===`ArrowLeft`?a>0&&this.tickled.handleKeyboardNavigation(`previous`):a<i-1&&this.tickled.handleKeyboardNavigation(`next`);break}}},this.#h=e=>{let n=this.root,r=this.selectedNode;if(!n||!r)return;let i=(this.#C(n,r)??[n]).length+ +!!this.#s(),a=this.tickled.tickledId??-1;switch(e.key){case`ArrowRight`:e.preventDefault(),a<i-1?this.tickled.handleKeyboardNavigation(`next`):a===i-1&&this.#_();break;case`ArrowLeft`:e.preventDefault(),a>0&&this.tickled.handleKeyboardNavigation(`previous`);break;case`ArrowDown`:case`ArrowUp`:if(this.tickled.tickledId!==void 0)if(e.preventDefault(),this.#i?.isOpen){let n=this.#i.querySelector(`ixfx-menu-container`)?.shadowRoot?.querySelector(`.popover`);n&&n.dispatchEvent(new KeyboardEvent(`keydown`,{key:e.key,bubbles:!0}))}else this.#d();break;case`Enter`:e.preventDefault(),this.#g();break;case`Escape`:e.preventDefault(),this._menuOpen=!1,this.tickled.clearTickled(),this.blur();break;case`Tab`:if(e.shiftKey)e.preventDefault(),this.#v();else if(a===i-1){e.preventDefault(),this._menuOpen=!1,this._focusOnNarrowedText=!0;let n=this.shadowRoot?.querySelector(`ixfx-narrowed-text`);n&&n.focus()}break}},this.#y=()=>{this._focusOnNarrowedText=!1,this.#v()},this.#b=()=>{this._focusOnNarrowedText=!1,this.#v()}}get selectedNodes(){return this._selectedNodes}#e;#t;#n;#r;#i;#a(){let e=this.root,n=this.selectedNode;if(!e||!n)return[];let r=this.#C(e,n)??[e],i=[];return r.forEach((e,n)=>{i.push({id:n,enabled:!0})}),this.#s()&&i.push({id:r.length,enabled:!0}),i}#o(e){let n=this.root,r=this.selectedNode;if(!n||!r)return;let i=this.#C(n,r)??[n],a=this.#s();e<i.length?this._openIdx=e:a&&e===i.length&&(this._openIdx=i.length-1)}#s(){let e=this.selectedNode;if(e===void 0)return!1;let n=this.#e===e;return(e.children??[]).length>0||n}#c;#l;#u;#d(){let e=this.tickled.tickledId;if(e===void 0)return;let n=this.root,r=this.selectedNode;if(!(!n||!r)){if(e<(this.#C(n,r)??[n]).length-1){let n=(this.shadowRoot?.querySelectorAll(`.crumb-segment`))?.[e]?.querySelector(`.caret ixfx-menu-trigger`);if(n){this.#r=!0,this.#i=n,document.addEventListener(`keydown`,this.#m,{capture:!0}),n.openMenu(),this.#f();return}}if(this.#s()){let e=this.shadowRoot?.querySelector(`#child-options-trigger`);e&&(this.#r=!0,this.#i=e,document.addEventListener(`keydown`,this.#m,{capture:!0}),e.openMenu(),this.#f())}}}#f(){let e=this.tickled.inputMode;requestAnimationFrame(()=>{let n=this.#i?.querySelector(`ixfx-menu-container`);n&&n.setAttribute(`data-input-mode`,e)})}#p;#m;#h;#g(){let e=this.root,n=this.selectedNode;if(!e||!n)return;let r=this.#C(e,n)??[e],i=this.#s(),a=this.tickled.tickledId??-1;if(a<r.length){let e=r[a];this.#w(e),this._menuOpen=!1,this.dispatchEvent(new CustomEvent(`item-click`,{detail:{node:e,depth:a},bubbles:!0,composed:!0}))}else if(i&&a===r.length){this._menuOpen=!0,this.#r=!0;let e=this.shadowRoot?.querySelector(`#child-options-trigger`);e&&(this.#i=e,document.addEventListener(`keydown`,this.#m,{capture:!0}),e.openMenu(),this.#f())}}#_(){let e=this.shadowRoot?.querySelector(`ixfx-narrowed-text`);e&&(this._focusOnNarrowedText=!0,e.focus())}#v(){this._focusOnNarrowedText=!1;let e=this.shadowRoot?.querySelector(`.host-container`);e&&e.focus()}#y;#b;select(e){this.#w(e)}deselect(e){}clearSelection(){this.root&&this.#w(this.root)}getNodes(){if(!this.root)return[];let e=[],n=(r,i)=>{if(e.push({node:r,depth:i}),r.children)for(let e of r.children)n(e,i+1)};for(let e of this.root.children??[])n(e,0);return e}updated(e){if(e.has(`model`)){this.#t?.(),this.#t=void 0;let e=this.model;e&&(this.root=e.root,this.#t=e._subscribe(e=>{e.type===`root`&&(this.root=e.root,this.requestUpdate())}))}this.#x(e)}disconnectedCallback(){super.disconnectedCallback(),this.#t?.(),this.#t=void 0,document.removeEventListener(`keydown`,this.#m,{capture:!0}),this.#i=null}#x(e){if(!this.shadowRoot)return;let n=this.shadowRoot.querySelector(`.horiz-select-items`);if(!n)return;let r=n.querySelector(`ul`);if(!r)return;let i=this.shadowRoot.querySelector(`ixfx-menu-trigger`);if(i){r.getBoundingClientRect().width>n.getBoundingClientRect().width?i.style.display=`inline-flex`:i.style.display=`none`;for(let e of r.querySelectorAll(`li`))if((e.getAttribute(`data-key`)??``)===this.#n){this.#S(e);break}}}#S(e){let n=e.offsetLeft,r=e.parentElement;if(!r)return;n-=r.offsetLeft;let i=r.parentElement;if(!i)return;i.scroll({left:n,top:0,behavior:`smooth`});let a=i.parentElement;a&&(a.style.minWidth=`${e.getBoundingClientRect().width}px`)}#C(e,n,r=[]){let i=[...r,e];if(e===n)return i;if(e.children)for(let r of e.children){let e=this.#C(r,n,i);if(e)return e}}#w(e){let n=this.selectedNode;n?this.#n=n.item?.key??``:this.#n=``;let r=n?new Set([n]):new Set;this.selectedNode=e,this._selectedNodes=new Set([e]),this.dispatchEvent(new CustomEvent(`select`,{detail:{selected:new Set([e]),previous:r},bubbles:!0,composed:!0}))}#T(e,n){this._openIdx=-1,this.#w(e),this.dispatchEvent(new CustomEvent(`item-click`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}#E(e,n,r){let i=e.detail.command,a=n.children?.find(e=>e.item.key===i);a&&this.#D(a,r+1)}#D(e,n){this._openIdx=-1,this.#w(e),this.dispatchEvent(new CustomEvent(`item-click`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}navigateTo(e){if(!this.root?.children)return!1;let n=this.root;for(let r of e){let e=n?.children?.find(e=>e.item.key===r);if(!e)return!1;n=e}return n&&n!==this.root&&this.#w(n),!0}navigateToNode(e){if(!this.root)return!1;let n=this.#O(this.root.children??[],e);return n?this.navigateTo(n):!1}#O(e,n,r=[]){for(let i of e){let e=[...r,i.item.key];if(n(i))return e;if(i.children?.length){let r=this.#O(i.children,n,e);if(r)return r}}}#k(e){let n=this.selectedNode;if(!n?.children)return;let r=e.detail.command,i=n.children.find(e=>e.item.key===r);if(i){let e=this.root?this.#C(this.root,n)?.length??1:1;this.#D(i,e)}}render(){let e=this.root,n=this.selectedNode;if(!e||!n)return C``;this.inputMode=this.tickled.inputMode;let r=this.#C(e,n)??[e];this.#s();let i=r.map((e,n)=>{let i=n===r.length-1,a=this.#e===e,o=this._openIdx===n,s=e.item.isLeaf!==!0&&(e.children===void 0||e.children.length>0),c=!i&&s,l=this.tickled.isTickled(n),u=(e.children??[]).map(e=>C`
        <ixfx-menu-item 
          label="${e.item.label}" 
          command="${e.item.key}"
          icon-name="${e.item.icon??T}"
        ></ixfx-menu-item>
      `);return C`
        <div class="item crumb-segment ${l?`tickled`:``}"
          @pointerenter=${()=>{this.tickled.handlePointerEnter(n),this.dispatchEvent(new CustomEvent(`tickle`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}}
        >
          <span class="label" @click=${()=>this.#T(e,n)}>${e.item.label}</span>
          ${c?C`
            <span class="caret ${o?`open`:``} ${a?`pending`:``}">
              ${a?C`<span class="loading-spinner"></span>`:C`
                <ixfx-menu-trigger mode="trigger" label="›" @menu-command=${r=>this.#E(r,e,n)}>
                  <ixfx-menu-container slot="menu">
                    ${u}
                  </ixfx-menu-container>
                </ixfx-menu-trigger>
                `}
            </span>
            `:T}
        </div>
      `}),a=this.#A(),o=this.tickled.isTickled(r.length);return C`
      <div
        class="host-container"
        tabindex="0"
        @focus=${this.#c}
        @blur=${this.#l}
        @keydown=${this.#h}
        @click=${this.#u}
        @menu-trigger-close=${this.#p}
        @pointerleave=${e=>this.tickled.handlePointerLeave(e)}
      >
        <div class="parts">${i}</div>
        ${a?C`
          <ixfx-menu-trigger
            id="child-options-trigger"
            class="item separator-trigger ${o?`tickled`:``}"
            mode="trigger"
            label="›"
            @menu-command=${this.#k}
            @pointerenter=${()=>this.tickled.handlePointerEnter(r.length)}
          >
            <ixfx-menu-container slot="menu">
              ${(this.selectedNode?.children??[]).map(e=>C`
                <ixfx-menu-item 
                  label="${e.item.label}" 
                  command="${e.item.key}"
                  icon-name="${e.item.icon??T}"
                ></ixfx-menu-item>
              `)}
            </ixfx-menu-container>
          </ixfx-menu-trigger>
        `:T}
        ${a}
      </div>
    `}#A(){let e=this.selectedNode;if(e===void 0)return T;let n=this.#e===e,r=e.children??[];return r.length===0&&!n?T:n?C`
        <div class="horiz-select">
          <div class="horiz-select-items">
            <span class="loading-spinner"></span>
          </div>
        </div>
      `:C`
      <ixfx-narrowed-text
        class="horiz-select"
        selection-mode="single"
        orientation="horizontal"
        nowrap
        width=${this.#M()}
        @change=${this.#j}
        @narrowed-text-blur=${this.#y}
        @narrowed-text-shift-tab=${this.#b}
      >
        ${r.map(e=>C`
          <span data-value="${e.item.key}" data-label="${e.item.label}"></span>
        `)}
      </ixfx-narrowed-text>
    `}#j(e){let n=e.detail,r=this.selectedNode;if(!r?.children)return;let i=r.children.find(e=>e.item.key===n.item.value);if(i){let e=this.root?this.#C(this.root,r)?.length??1:1;this.#D(i,e)}}#M(){return`var(--child-options-width, 50ch)`}static{this.styles=[D,et,tt,_`
    :host {
      --text-highlight: var(--accent);
      --separator: var(--surface-muted-text);
      --padding-s: var(--space-xs);
      display: flex;
      overflow: scroll;
      width: 100%;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;

      /* Breadcrumb tickled overrides — no layout shift: keep transparent border at rest */
      --item-padding: 0;
    }

    :host(.focused) {
      outline: none;
    }

    :host([input-mode="keyboard"]) .host-container {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .host-container {
      display: flex;
      width: 100%;
      outline: none;
    }

    .parts {
      display: flex;
    }

    .crumb-segment {
      display: flex;
      align-items: center;
    }

    .label {
      cursor: pointer;
      margin-right: var(--padding-s);
      white-space: nowrap;
    }

    .caret {
      position: relative;
      cursor: pointer;
      padding: var(--padding-m);
      margin-left: var(--padding-s);
      margin-right: var(--padding-s);
      color: var(--separator);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease-in-out;
    }

    .caret.open {
      background: color-mix(in srgb, var(--surface-5) 40%, transparent);
    }

    .caret.pending {
      display: inline-flex;
    }

    .caret > ixfx-menu-trigger {
      display: inline-flex;
      margin: 0;
      --_trigger-hover-bg: transparent;
      --_trigger-hover-opacity: 0.6;
    }

    .caret > ixfx-menu-trigger::part(base) {
      background: none;
      border: none;
      color: inherit;
      padding: 0;
      cursor: pointer;
      font-size: inherit;
      line-height: 1;
    }

    .caret > ixfx-menu-trigger::part(base):hover {
      background: none;
      opacity: 0.6;
    }

    .separator {
      margin-left: var(--padding-s);
      margin-right: var(--padding-s);
      color: var(--separator);
    }

    .separator-trigger {
      display: inline-flex;
      margin-left: var(--padding-s);
      margin-right: var(--padding-s);
      --_trigger-hover-bg: transparent;
      --_trigger-hover-opacity: 0.6;
    }

    .separator-trigger::part(base) {
      background: none;
      border: none;
      color: var(--separator);
      padding: 0;
      cursor: pointer;
      font-size: inherit;
      line-height: 1;
    }

    .separator-trigger::part(base):hover {
      background: none;
      opacity: 0.6;
    }

    .separator-trigger.tickled::part(base) {
    }

    ixfx-menu-trigger {
      display: none;
    }

    .horiz-select > ixfx-menu-trigger {
      display: inline-flex;
    }

    .horiz-select {
      display: flex;
      min-width: 5ch;
    }

    .loading-spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid var(--surface-5);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: crumb-spin 0.7s linear infinite;
    }

    @keyframes crumb-spin {
      to { transform: rotate(360deg); }
    }

    ::slotted(*), option {
      user-select: none;
      scroll-snap-align: start;
    }
  `]}};k([A({type:Object})],tm.prototype,`root`,void 0),k([A({attribute:!1})],tm.prototype,`model`,void 0),k([A({type:Object})],tm.prototype,`selectedNode`,void 0),k([j()],tm.prototype,`_selectedNodes`,void 0),k([A({attribute:!1})],tm.prototype,`loadChildren`,void 0),k([A({attribute:!1})],tm.prototype,`filterPredicate`,void 0),k([A({reflect:!0,attribute:`exclusivity`})],tm.prototype,`exclusivity`,void 0),k([A({reflect:!0,attribute:`selection-filter`})],tm.prototype,`selectionFilter`,void 0),k([j()],tm.prototype,`_openIdx`,void 0),k([j()],tm.prototype,`_isFocused`,void 0),k([j()],tm.prototype,`_menuOpen`,void 0),k([j()],tm.prototype,`_focusOnNarrowedText`,void 0),k([A({reflect:!0,attribute:`input-mode`})],tm.prototype,`inputMode`,void 0),tm=k([O(`ixfx-crumb-navigation`)],tm);var nm=class extends E{static{this.styles=[D,_`
    :host {
      display: block;
      width: fit-content;
    }
    section {
      background: var(--surface-3);
      color: var(--surface-2-text);
      border: var(--border);
      padding: var(--space-m);
      font-family: var(--font-mono);
      display: grid;
      grid-template-columns: auto auto;
      column-gap: var(--space-s);
    }
    .row {
      display: contents;
    }
    .row > label {
      font-weight: bold;
      text-align: end;
      justify-self: end;
      padding: 2px 0;
    }
    .row > :not(label) {
      padding: 2px 0;
    }
    .row > ixfx-led {
      align-self: center;
    }
    .value {
      font-variant-numeric: tabular-nums;
      white-space: pre;
    }
  `]}#e;#t;#n;#r;constructor(){super(),this.automap=!1,this.#e=new Map,this.#t=new Map,this.#n=new Map,this._container=document.createElement(`section`)}connectedCallback(){super.connectedCallback(),this.renderRoot.append(this._container)}configure(e){this.#e.clear();for(let[n,r,i]of e)this.#e.set(n,{style:r,options:i});this._container.innerHTML=``,this.#t.clear(),this.#n.clear(),this.#r!==void 0&&this.#i(this.#r)}formatValue(e,n={}){if(e===null)return`(null)`;if(e===void 0)return`(undefined)`;if(typeof e==`boolean`)return e?`true`:`false`;if(typeof e==`string`)return`"${e}"`;if(typeof e==`number`){let r=e;if(n.roundNumbers!==void 0&&(r=pr(n.roundNumbers,e)),n.precision!==void 0)return r.toFixed(n.precision);let i=r.toFixed(2);return r>=0?` ${i}`:i}return JSON.stringify(e)}displayData(e){if(e===null){this.innerHTML=``;return}this.#i(e)}updateData(e){this.#r=e,this.#i(e),this.previousValue=e}getOrCreate(e,n){let r=this.renderRoot.querySelector(`#${e}`);if(r!==null)return r;let i=document.createElement(`div`);return i.id=e,n&&n(i),this._container.append(i),i}#i(e){let n=new Set;this.#a(e,``,n),this.#y(n)}#a(e,n,r){for(let[i,a]of Object.entries(e)){let e=n?`${n}.${i}`:i;r.add(e);let o=this.#e.get(e);if(o!==void 0){if(o.style!==`hide`){let n=this.#c(e,i);this.#l(n,e,o.style,a,o.options)}continue}if(typeof a==`object`&&a&&!Array.isArray(a))if(this.#o(e))this.#a(a,e,r);else if(this.automap){let n=this.#c(e,i);this.#v(n,a,!0)}else{let n=this.#c(e,i);this.#v(n,a)}else{let n=this.#s(a);if(n!==void 0){let r=this.#c(e,i);this.#l(r,e,n,a,void 0)}else{let n=this.#c(e,i);this.#_(n,this.formatValue(a))}}}}#o(e){let n=e?`${e}.`:``;for(let e of this.#e.keys())if(e.startsWith(n))return!0;return!1}#s(e){if(this.automap){if(typeof e==`boolean`)return`led`;if(typeof e==`number`)return`plot`}}#c(e,n){let r=`path-${e}`,i=this.renderRoot.querySelector(`#${CSS.escape(r)}`);if(i!==null)return i;i=document.createElement(`div`),i.id=r,i.classList.add(`row`);let a=document.createElement(`label`);return a.textContent=n,i.append(a),this._container.append(i),i}#l(e,n,r,i,a){let o=this.#u(r,i);if(o===null)return;let s=this.#d(e,o);s!==null&&this.#f(s,o,r,n,i,a)}#u(e,n){switch(e){case`hide`:return null;case`led`:return`ixfx-led`;case`plot`:return typeof n==`number`?`ixfx-plot-single-axis`:typeof n==`object`&&n?`ixfx-plot-multi-axis`:`span`;case`plot-xy`:return`ixfx-plot-xy-axis`;case`plot-heat`:case`plot-histogram`:return`ixfx-plot-histogram`;case`time-elapsed`:return`span`}}#d(e,n){let r=e.querySelector(`:scope > [data-renderer]`);if(r!==null){if(r.tagName.toLowerCase()===n)return r;r.remove()}let i=document.createElement(n);return i.dataset.renderer=``,n.startsWith(`ixfx-plot`)&&(i.style.height=`1.4em`,n===`ixfx-plot-xy-axis`?i.style.width=`1.4em`:i.style.width=`5em`),e.append(i),i}#f(e,n,r,i,a,o){let s=this.#t.get(i)!==a;switch(r){case`led`:this.#p(e,i,a,o);break;case`plot`:if(typeof a==`number`)s&&e.add(a);else if(typeof a==`object`&&a&&s)if(Array.isArray(a)){let n={};a.forEach((e,r)=>{typeof e==`number`&&(n[String(r)]=e)}),Object.keys(n).length>0&&e.addData(n)}else e.addData(a);this.#h(e,r,o);break;case`plot-xy`:s&&this.#m(e,a),this.#h(e,r,o);break;case`plot-heat`:e.style.setProperty(`--plot-histogram-bar-length`,`1`);case`plot-histogram`:typeof a==`number`&&s&&e.add(a),this.#h(e,r,o);break;case`time-elapsed`:e.textContent=this.#g(a);break}this.#t.set(i,a)}#p(e,n,r,i){let a=e;if(typeof r==`boolean`)a.lit=r,a.value=+!!r;else if(typeof r==`number`){let e=this.#n.get(n);e===void 0&&(e=br(),this.#n.set(n,e));let i=e.seen(r),o=i.max===i.min?.5:(r-i.min)/(i.max-i.min);a.value=o,a.lit=o>.3}i?.color!==void 0&&(a.color=i.color)}#m(e,n){let r=e;if(Array.isArray(n)&&n.length>=2)r.add(n[0],n[1]);else if(typeof n==`object`&&n){let e=n;if(`x`in e&&`y`in e)r.add(e.x,e.y);else{let n=Object.entries(e).filter(([e,n])=>typeof n==`number`);n.length>=2&&r.add(n[0][1],n[1][1])}}}#h(e,n,r){if(r===void 0)return;let i=e;typeof r.capacity==`number`&&(i.capacity=r.capacity),typeof r.resolution==`number`&&(i.resolution=r.resolution),typeof r.drawStyle==`string`&&(i.drawStyle=r.drawStyle),typeof r.orientation==`string`&&(i.orientation=r.orientation),typeof r.layout==`string`&&(i.layout=r.layout)}#g(e){let n;if(e instanceof Date)n=e.getTime();else if(typeof e==`number`)n=e>0xe8d4a51000?e:Date.now();else if(typeof e==`string`)n=new Date(e).getTime();else return String(e);if(Number.isNaN(n))return String(e);let r=Date.now()-n,i=Math.abs(r);return i<1e3?`${i}ms`:i<6e4?`${(i/1e3).toFixed(1)}s`:i<36e5?`${(i/6e4).toFixed(1)}mins`:i<864e5?`${(i/36e5).toFixed(1)}h`:`${(i/864e5).toFixed(1)}d`}#_(e,n){let r=e.querySelector(`:scope > .value`);r===null&&(r=document.createElement(`span`),r.classList.add(`value`),e.append(r)),r.textContent=n}#v(e,n,r=!1){let i=e.querySelector(`:scope > ixfx-data-display`);i===null&&(i=document.createElement(`ixfx-data-display`),e.append(i)),i.automap=r,i.updateData(n)}#y(e){let n=this._container.querySelectorAll(`[id^="path-"]`);for(let r of n){let n=r.id.slice(5);e.has(n)||(r.remove(),this.#n.delete(n),this.#t.delete(n))}}};k([A({type:Boolean})],nm.prototype,`automap`,void 0),nm=k([O(`ixfx-data-display`)],nm);var rm=class extends E{constructor(...e){super(...e),this.mode=`label`,this.entryMode=`free`,this.value=``,this.disabled=!1,this.placeholder=``,this.displayTextLogic=`hidden`,this.appearDelay=50,this.disappearDelay=1e3,this._editing=!1,this._prevValue=``,this._hovering=!1,this._transientShowingValue=!1,this._transientTimer=void 0,this._showModeWaitingToHide=!1,this._onMouseEnter=()=>{this.displayTextLogic===`transient`&&(this._hovering=!0,this._clearTransientTimer(),this._transientTimer=window.setTimeout(()=>{this._transientShowingValue=!0,this._requestDisplayUpdate()},this.appearDelay))},this._onMouseLeave=()=>{this.displayTextLogic===`transient`&&(this._hovering=!1,this._startTransientRevertTimer())},this._handleClick=()=>{this.mode===`label`&&!this.disabled&&!this._editing&&this._beginEdit()},this._handleFocus=()=>{this.mode===`editor`&&!this.disabled&&!this._editing&&this._beginEdit()},this._handleBlur=()=>{this._editing&&this._tryCommit()},this._handleKeydown=e=>{this._editing&&(e.key===`Enter`?(e.preventDefault(),this._tryCommit(),this.mode===`editor`&&this._contentEl?.blur()):e.key===`Escape`&&(e.preventDefault(),this._cancelEdit(),this.mode===`editor`&&this._contentEl?.blur()))},this._handleBeforeInput=e=>{e.inputType!==`insertText`||!e.data||this._isAllowedInput(e.data)||e.preventDefault()},this._handleInput=()=>{if(!this._editing)return;let e=this._contentEl?.textContent?.trim()??``;this.dispatchEvent(new CustomEvent(`input`,{detail:{value:e},bubbles:!0,composed:!0}))}}get _contentEl(){return this.renderRoot?.querySelector(`.content`)??void 0}connectedCallback(){super.connectedCallback(),this.addEventListener(`mouseenter`,this._onMouseEnter),this.addEventListener(`mouseleave`,this._onMouseLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this._onMouseEnter),this.removeEventListener(`mouseleave`,this._onMouseLeave),this._clearTransientTimer()}_clearTransientTimer(){this._transientTimer!==void 0&&(clearTimeout(this._transientTimer),this._transientTimer=void 0)}_startTransientRevertTimer(){this._clearTransientTimer(),this._transientTimer=window.setTimeout(()=>{!this._hovering&&this.displayTextLogic===`transient`&&(this._transientShowingValue=!1,this._requestDisplayUpdate())},this.disappearDelay)}_requestDisplayUpdate(){if(!this._editing){let e=this._contentEl;e&&(e.textContent=this._getDisplayText())}}_onUserInteraction(){this.displayTextLogic===`transient`&&(this._clearTransientTimer(),this._transientTimer=window.setTimeout(()=>{this._transientShowingValue=!0,this._startTransientRevertTimer(),this._requestDisplayUpdate()},this.appearDelay))}_beginEdit(){this._prevValue=this.value,this._editing=!0,this.removeAttribute(`invalid`)}_tryCommit(){let e=this._contentEl?.textContent?.trim()??``;if(this.entryMode===`percent`&&(e=e.replaceAll(`%`,``).trim()),(this.validator??this._defaultValidator.bind(this))(e)){this.removeAttribute(`invalid`);let n=this.value;this.value=e,this._editing=!1,e!==n&&this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e},bubbles:!0,composed:!0}))}else this._cancelEdit()}_cancelEdit(){this.value=this._prevValue,this._editing=!1,this.removeAttribute(`invalid`)}_getDisplayText(){return this._shouldUseDisplayText()&&this.displayText!==void 0&&this.displayText!==``?this.displayText:this.value?this.formatter?this.formatter(this.value):this.entryMode===`percent`?`${this.value}%`:this.value:``}_shouldUseDisplayText(){return this.displayTextLogic===`hidden`?!1:this.displayTextLogic===`override`?!0:this.displayTextLogic===`show`?this._editing?!1:this._showModeWaitingToHide:this.displayTextLogic===`transient`?!(this._editing||this._transientShowingValue):!1}_isAllowedInput(e){switch(this.entryMode){case`text`:return/^[a-z\s]$/i.test(e);case`number`:return/^[\d.\-]$/.test(e);case`percent`:return/^[\d.%]$/.test(e);default:return!0}}_defaultValidator(e){switch(this.entryMode){case`text`:return/^[a-z\s]*$/i.test(e);case`number`:return e===``||/^-?\d*(?:\.\d*)?$/.test(e);case`percent`:return e===``||/^\d*(?:\.\d*)?$/.test(e);default:return!0}}render(){let e=this.mode===`editor`;return C`<div
      class="content"
      contenteditable=${this._editing?`plaintext-only`:`false`}
      data-placeholder=${this.placeholder}
      tabindex=${e&&!this._editing?`0`:T}
      @click=${this._handleClick}
      @focus=${this._handleFocus}
      @blur=${this._handleBlur}
      @keydown=${this._handleKeydown}
      @beforeinput=${this._handleBeforeInput}
      @input=${this._handleInput}
    >${this._editing?T:this._getDisplayText()}</div>`}updated(e){if(super.updated(e),e.has(`_editing`)&&this._editing){let e=this._contentEl;e&&(e.textContent=this.value,e.focus(),im(e))}}static{this.styles=[D,_`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      --_font-size:   var(--label-font-size,   var(--text-m,        12px));
      --_font-family: var(--label-font-family, var(--font-family,   system-ui, sans-serif));
      --_color:       var(--label-color,       var(--surface-2-text));
      --_muted:       var(--label-muted-color, var(--surface-muted-text, oklch(55% 0.02 240)));
      --_padding:     var(--label-padding,     var(--space-xs, 3px) var(--space-s, 4px));
      --_radius:      var(--label-radius,      var(--radius-s, 3px));
      --_align:       var(--label-align,       center);
      --_min-width:   var(--label-min-width,   1ch);
    }

    .content {
      box-sizing: border-box;
      width: 100%;
      text-align: var(--_align);
      outline: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: var(--_min-width);
      font-family: var(--_font-family);
      font-size: var(--_font-size);
      color: var(--_color);
      padding: var(--_padding);
      border: 1px solid transparent;
      border-radius: var(--_radius);
      cursor: pointer;
      transition:
        background var(--transition, 0.15s ease-out),
        border-color var(--transition, 0.15s ease-out);
    }

    /* Remove overflow clipping while editing so the cursor is never hidden */
    .content[contenteditable="plaintext-only"] {
      overflow: visible;
      text-overflow: clip;
    }

    /* ── Label mode ── */
    :host([mode="label"]) .content {
      background: transparent;
    }

    :host([mode="label"]) .content[contenteditable="plaintext-only"] {
      background: var(--surface-4, oklch(22% 0.02 240));
      border: var(--border, 1px solid oklch(25% 0.02 240));
      cursor: text;
    }

    /* ── Editor mode — always shows box ── */
    :host([mode="editor"]) .content {
      background: var(--surface-4, oklch(22% 0.02 240));
      border: var(--border, 1px solid oklch(25% 0.02 240));
    }

    :host([mode="editor"]) .content[contenteditable="plaintext-only"] {
      border-color: var(--accent, oklch(60% 0.15 140));
      cursor: text;
    }

    /* ── Placeholder ── */
    .content:empty::before {
      content: attr(data-placeholder);
      color: var(--_muted);
      pointer-events: none;
    }

    /* ── Invalid ── */
    :host([invalid]) .content {
      border-color: var(--error, oklch(60% 0.15 20));
    }

    /* ── Disabled ── */
    :host([disabled]) .content {
      opacity: var(--disabled-opacity, 0.5);
      cursor: not-allowed;
      pointer-events: none;
    }
  `]}};k([A({reflect:!0})],rm.prototype,`mode`,void 0),k([A({attribute:`entry-mode`,reflect:!0})],rm.prototype,`entryMode`,void 0),k([A({reflect:!0})],rm.prototype,`value`,void 0),k([A({type:Boolean,reflect:!0})],rm.prototype,`disabled`,void 0),k([A()],rm.prototype,`placeholder`,void 0),k([A({attribute:`display-text`})],rm.prototype,`displayText`,void 0),k([A({attribute:`display-text-logic`})],rm.prototype,`displayTextLogic`,void 0),k([A({type:Number,attribute:`appear-delay`})],rm.prototype,`appearDelay`,void 0),k([A({type:Number,attribute:`disappear-delay`})],rm.prototype,`disappearDelay`,void 0),k([A({attribute:!1})],rm.prototype,`validator`,void 0),k([A({attribute:!1})],rm.prototype,`formatter`,void 0),k([j()],rm.prototype,`_editing`,void 0),rm=k([O(`ixfx-editable-label`)],rm);function im(e){let n=document.createRange();n.selectNodeContents(e);let r=window.getSelection();r?.removeAllRanges(),r?.addRange(n)}function am(e,n,r,i=.1){return n!==void 0&&n>1?e/n:r===void 0?e*i:r}var om=class extends E{constructor(...e){super(...e),this.collapsed=!1,this.orientation=`horizontal`,this.closable=!1,this.title=``,this.iconName=``,this.toggleInteraction=`implicit`,this.variant=`titlebar`,this._isVertical=!1}_onToggleClick(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent(`toggle`,{detail:{collapsed:this.collapsed},bubbles:!0,composed:!0}))}_onCloseClick(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0})),this.remove()}_getCaretIcon(){return`chevron-down`}updated(e){super.updated(e),e.has(`orientation`)&&(this._isVertical=this.orientation===`vertical`)}render(){let e=this._getCaretIcon(),n=this.toggleInteraction!==`disabled`,r=this.toggleInteraction===`implicit`,i=this._isVertical?this.collapsed?``:`-90deg`:this.collapsed?`-90deg`:``;return C`
      <div
        class="titlebar"
        role="toolbar"
        @click=${r?this._onToggleClick:T}
      >
        <div class="title-text-wrapper">
          ${this.iconName?C`<ixfx-icon class="title-icon" name=${this.iconName}></ixfx-icon>`:T}
          <span class="title-text">${this.title}</span>
        </div>

        <div class="toolbar" @click=${e=>e.stopPropagation()}>
          <slot name="toolbar"></slot>
          ${this.closable?C`
            <button
              class="close-btn"
              type="button"
              aria-label="Close panel"
              @click=${this._onCloseClick}
            >
              <ixfx-icon name="close"></ixfx-icon>
            </button>
          `:T}
          ${n?C`
          <button
            class="caret-btn"
            type="button"
            aria-label=${this.collapsed?`Expand panel`:`Collapse panel`}
            @click=${this._onToggleClick}
          >
            <ixfx-icon name=${e} prominence .rotate=${i.length>0?i:T}></ixfx-icon>
          </button>
          `:T}
        </div>
      </div>

      <div class="content-wrapper" ?expanded=${!this.collapsed}>
        <div class="content-inner">
          <slot></slot>
        </div>
      </div>
    `}static{this.styles=[D,_`
    :host {
      display: flex;
      flex-direction: column;
      background: var(--surface-3);
      border: var(--border-subtle);
      border-radius: var(--radius-m);
      overflow: hidden;
      box-sizing: border-box;
    }

    :host([orientation="vertical"]) {
      flex-direction: row;
      align-self: flex-start;
      min-width: 0 !important;
      flex-shrink: 1;
    }

    .titlebar {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: var(--space-s) var(--space-m);
      background: var(--surface-4);
      color: var(--surface-3-text);
      min-height: 2em;
      flex-shrink: 0;
    }

    :host([orientation="vertical"]) .titlebar {
      flex-direction: row;
      min-width: 2em;
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }

    .caret-btn,
    .close-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      padding: var(--space-xs);
      margin: 0;
      cursor: pointer;
      color: inherit;
      border-radius: var(--radius-s);
      transition: background var(--transition);
      opacity: var(--prominence-idle-opacity);
    }

    .caret-btn:hover,
    .close-btn:hover {
      background: var(--surface-5);
      opacity: var(--prominence-tickled-opacity);

    }

    .caret-btn:focus-visible,
    .close-btn:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 1px;
    }

    ixfx-icon {
      width: 1.25em;
      height: 1.25em;
      transition: transform var(--transition);
    }

    .title-icon {
      flex-shrink: 0;
    }

    .title-text {
      flex: 1;
      padding-left: 1ch;
      font-family: var(--font-family);
      font-size: var(--text-m);
      font-weight: var(--font-weight-bold, 600);
      white-space: nowrap;
      overflow: hidden;
      align-self: center;
      text-overflow: ellipsis;
      user-select: none;
      -webkit-user-select: none;
    }

    :host([toggle-interaction="implicit"]) .titlebar {
      cursor: pointer;
    }

    :host([orientation="vertical"]) .title-text {
      writing-mode: vertical-rl;
      padding-left: 0;
      padding-bottom: 1ch;
      text-orientation: mixed;
      transform: rotate(180deg);
    }

    .toolbar {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      margin-left: auto;
    }

    :host([orientation="vertical"]) .toolbar {
      flex-direction: column;
      margin-left: 0;
      margin-top: auto;
      writing-mode: horizontal-tb;
    }

    slot[name="toolbar"] {
      display: contents;
    }

    ::slotted(slot[name="toolbar"]) {
      display: contents;
    }

    .content-wrapper {
      interpolate-size: allow-keywords;
      overflow: hidden;
      height: 0;
      transition: height var(--transition, 0.2s ease-out);
      background: var(--surface-3);
     
    }

    .content-wrapper[expanded] {
      height: auto;
    }

    :host([orientation="vertical"]) .content-wrapper {
      height: unset;
      width: 0;
      transition: width var(--transition, 0.2s ease-out);
    }

    :host([orientation="vertical"]) .content-wrapper[expanded] {
      width: auto;
    }

    .content-inner {
      box-shadow: var(--deboss-3);

      min-height: 0;
      min-width: 0;
      overflow: hidden;
      padding: var(--space-m);
      transform: translateY(-100%);
      transition: transform var(--transition, 0.2s ease-out);
    }

    .content-wrapper[expanded] .content-inner {
      transform: translateY(0);
    }

    :host([orientation="vertical"]) .content-inner {
      width: max-content;
      height:100%;
      transform: translateX(-100%);
    }

    :host([orientation="vertical"]) .content-wrapper[expanded] .content-inner {
      transform: translateX(0);
    }

    .title-text-wrapper {
      display:flex;
      padding: 0 var(--space-s);
    }

    /* === Midline variant === */

    :host([variant="midline"]) {
      border: none !important;
      border-radius: 0 !important;
      background: transparent;
    }

    :host([variant="midline"][orientation="horizontal"]) .titlebar,
    :host([variant="midline"][orientation="vertical"]) .titlebar {
      background: transparent;
      padding: var(--space-xs) var(--space-m);
      min-height: unset;
      position: relative;
    }

    :host([variant="midline"][orientation="vertical"]) .titlebar {
      padding: var(--space-m) var(--space-xs);
      min-width: unset;
    }

    :host([variant="midline"]) .title-text-wrapper {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: var(--space-s);
      background: var(--surface-3);
    }

    :host([variant="midline"]) .title-text {
      font-weight: normal;
      color: var(--surface-3-text);
      padding: 0 0.5ch 0 0.5ch;
      background: transparent;
      box-shadow: none;
      flex: unset;
      width: auto;
      white-space: nowrap;
    }

    :host([variant="midline"]) .title-icon {
      background: transparent;
      flex-shrink: 0;
    }

    :host([variant="midline"]) .caret-btn {
      position: relative;
      z-index: 1;
      background: var(--surface-3);
      opacity: 1;
    }

    :host([variant="midline"][orientation="vertical"]) .title-text {
      transform: rotate(180deg);
      padding: 0.5ch 0 0.5ch 0ch;
    }

    :host([variant="midline"]) .toolbar {
      position: relative;
      z-index: 2;
      background: var(--surface-3);
      margin-left: 0;
    }

    :host([variant="midline"][orientation="horizontal"]) .toolbar {
      margin-left: auto;
    }

    /* Debossed line runs from after title-text to before toolbar */
    :host([variant="midline"]) .titlebar::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      transform: translateY(-50%);
      background: var(--surface-2);
      box-shadow:
        0 -1px 0 var(--surface-5),
        0 1px 0 var(--surface-1);
      z-index: 0;
    }

    /* For vertical midline, line runs vertically */
    :host([variant="midline"][orientation="vertical"]) .titlebar::after {
      top: 0;
      bottom: 0;
      left: 50%;
      right: unset;
      width: 1px;
      height: 100%;
      transform: translateX(-50%);
      box-shadow:
        -1px 0 0 var(--surface-5),
        1px 0 0 var(--surface-1);
    }

    :host([variant="midline"]) .content-inner {
      box-shadow: none;
      background: var(--surface-3);
    }

    :host([variant="midline"]) .content-wrapper {
      background: transparent;
    }

    :host([variant="midline"][orientation="vertical"]) .content-wrapper {
      background: transparent;
    }
  `]}};k([A({type:Boolean,reflect:!0})],om.prototype,`collapsed`,void 0),k([A({type:String,attribute:`orientation`,reflect:!0})],om.prototype,`orientation`,void 0),k([A({type:Boolean})],om.prototype,`closable`,void 0),k([A({type:String})],om.prototype,`title`,void 0),k([A({type:String,attribute:`icon-name`})],om.prototype,`iconName`,void 0),k([A({type:String,attribute:`toggle-interaction`})],om.prototype,`toggleInteraction`,void 0),k([A({type:String,attribute:`variant`,reflect:!0})],om.prototype,`variant`,void 0),k([j()],om.prototype,`_isVertical`,void 0),om=k([O(`ixfx-panel`)],om);var sm=`important`,cm=` !important`,lm=ht(class extends gt{constructor(e){if(super(e),e.type!==mt.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((n,r)=>{let i=e[r];return i==null?n:n+`${r=r.includes(`-`)?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${i};`},``)}update(e,[n]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let e of this.ft)n[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in n){let i=n[e];if(i!=null){this.ft.add(e);let n=typeof i==`string`&&i.endsWith(cm);e.includes(`-`)||n?r.setProperty(e,n?i.slice(0,-11):i,n?sm:``):r[e]=i}}return Pe}}),um=new Set([9,10,11,12,13,32]);function dm(e){return e<32&&e!==9&&e!==10&&e!==11&&e!==12&&e!==13}function fm(e){return e>=32&&e<=126}function pm(e){return e===0?`byte-null`:um.has(e)?`byte-whitespace`:dm(e)?`byte-control`:fm(e)?`byte-printable`:`byte-other`}function mm(e,n,r,i){let a=lc.createSteps(r,i,{steps:16}).map(lc.toCssColour);return{forByte:r=>r===0?e:r===255?n:a[r>>4]}}function hm(e){return{data:new Uint8Array(e),changeset:new Set}}function gm(e,n){return e.data[n]??0}function _m(e){return e.data.length}function vm(e){return Math.max(0,Math.min(255,e))}function ym(e,n,r){let i=vm(r),a=e.data[n],o=new Map([[n,{before:a,after:i}]]);return e.data[n]=i,e.changeset.add(n),o}function bm(e,n){let r=new Map;return n.forEach((n,i)=>{let a=vm(n),o=e.data[i];r.set(i,{before:o,after:a}),e.data[i]=a,e.changeset.add(i)}),r}function xm(e,n){let r=new Map;return n.forEach((n,i)=>{let a=e.data[i];r.set(i,{before:n.after,after:a}),e.data[i]=n.after,e.changeset.add(i)}),r}function Sm(e){let n=new Map;return e.forEach((e,r)=>{n.set(r,{before:e.after,after:e.before})}),n}function Cm(e){return e.changeset}function wm(){return{undos:[],redos:[]}}function Tm(e,n){e.undos.push(n),e.redos=[]}function Em(e){let n=e.undos.pop();return n&&e.redos.push(n),n}function Dm(e){let n=e.redos.pop();return n&&e.undos.push(n),n}var Om=e=>e*4,km=(e,n)=>e<n?e:n,Am=(e,n)=>e>n?e:n;function jm(e,n){return Math.max(0,Math.min(e,n-1))}function Mm(e,n){if(!e)return[];let r=Om(n);if(e.kind===`single`)return[e.pos];if(e.kind===`contiguous`){let n=km(e.start,e.end),r=Am(e.start,e.end),i=[];for(let e=n;e<=r;e++)i.push(e);return i}if(e.kind===`rectangular`){let n=[];for(let i=0;i<e.height;i++)for(let a=0;a<e.width;a++){let o=e.y+i,s=e.x+a,c=o*r+s;n.push(c)}return n}return[]}function Nm(e,n,r){if(!e)return!1;let i=Om(r);if(e.kind===`single`)return n===e.pos;if(e.kind===`contiguous`){let r=km(e.start,e.end),i=Am(e.start,e.end);return n>=r&&n<=i}if(e.kind===`rectangular`){let r=Math.floor(n/i),a=n%i,o=e.x,s=e.y,c=e.width,l=e.height;return r>=s&&r<s+l&&a>=o&&a<o+c}return!1}function Pm(e,n,r,i){let a;a=e?e.kind===`single`?e.pos:e.kind===`contiguous`?Am(e.start,e.end):e.kind===`rectangular`?e.y*Om(r)+e.x+e.width-1:0:0;let o=Om(r),s;switch(n){case`left`:s=a-1;break;case`right`:s=a+1;break;case`up`:s=a-o;break;case`down`:s=a+o;break;default:s=a}return jm(s,i)}function Fm(e,n,r,i){return{kind:`single`,pos:Pm(e,n,r,i)}}function Im(e,n,r,i,a=0,o=0){let s=Om(r),c,l,u,d;if(!e||e.kind===`single`){let n=e?.kind===`single`?e.pos:0;c=n%s,l=Math.floor(n/s),u=1,d=1}else if(e.kind===`contiguous`){let n=km(e.start,e.end),r=Am(e.start,e.end);c=n%s,l=Math.floor(n/s),u=r-n+1,d=1}else e.kind===`rectangular`?(c=e.x,l=e.y,u=e.width,d=e.height):(c=0,l=0,u=1,d=1);let f=a>0||e?.kind===`rectangular`?a:c,p=o>0||e?.kind===`rectangular`?o:l;switch(n){case`left`:c>f?--u:(c===f&&u>1||c>0)&&(--c,u+=1);break;case`right`:c+u<s&&(u+=1);break;case`up`:l>p?--d:(l===p&&d>1||l>0)&&(--l,d+=1);break;case`down`:d+=1;break}return{kind:`rectangular`,x:c,y:l,width:u,height:d}}function Lm(e,n,r,i){let a=Om(i);if(r===`contiguous`)return{kind:`contiguous`,start:km(e,n),end:Am(e,n)};let o=e%a,s=Math.floor(e/a),c=n%a,l=Math.floor(n/a);return{kind:`rectangular`,x:km(o,c),y:km(s,l),width:Math.abs(c-o)+1,height:Math.abs(l-s)+1}}var Rm=class extends E{constructor(...e){super(...e),this.columns=4,this.colourScheme=`ascii`,this.showChangeset=!0,this.hideOffsetCol=!1,this.hideHexCol=!1,this.hideTextCol=!1,this._selection=null,this._scrollTop=0,this._editState=null,this._containerH=0,this._shadeMap=null,this._focusSide=null,this._store=hm(new Uint8Array),this._undoStack=wm(),this._copyBuffer=null,this._rowHeight=24,this._dragStart=null,this._dragAnchor=null,this._rectAnchorX=0,this._rectAnchorY=0,this._rectAnchorXFromKeyboard=0,this._rectAnchorYFromKeyboard=0,this._initialSelectionPoint=0,this._currentCursorPoint=0,this._pointerMode=null,this._currentDragDiff=null,this._shiftClickTarget=null,this._onScroll=e=>{let n=e.target;this._scrollTop=n.scrollTop,this.requestUpdate()},this._onKeyDown=e=>{if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key)){e.preventDefault(),e.stopPropagation(),this._editState&&=null;let n=e.key.replace(`Arrow`,``).toLowerCase(),r=_m(this._store),i=Om(this.columns);if(e.metaKey||e.ctrlKey){if(!this._selection||this._selection.kind!==`rectangular`){let e=0;this._selection?.kind===`single`?e=this._selection.pos:this._selection?.kind===`contiguous`&&(e=Math.min(this._selection.start,this._selection.end)),this._rectAnchorXFromKeyboard=e%i,this._rectAnchorYFromKeyboard=Math.floor(e/i),this._selection={kind:`rectangular`,x:this._rectAnchorXFromKeyboard,y:this._rectAnchorYFromKeyboard,width:1,height:1}}this._selection=Im(this._selection,n,this.columns,r,this._rectAnchorXFromKeyboard,this._rectAnchorYFromKeyboard)}else if(e.shiftKey){if(!this._selection)this._initialSelectionPoint=0,this._currentCursorPoint=0;else if(this._selection.kind===`single`)this._initialSelectionPoint=this._selection.pos,this._currentCursorPoint=this._selection.pos;else if(this._selection.kind===`rectangular`){let e=this._selection.y*i+this._selection.x;this._initialSelectionPoint=e,this._currentCursorPoint=e}let e=Pm(this._selection,n,this.columns,r),a=Math.min(this._initialSelectionPoint,e),o=Math.max(this._initialSelectionPoint,e);this._currentCursorPoint=e,this._selection={kind:`contiguous`,start:a,end:o}}else{this._selection=Fm(this._selection,n,this.columns,r);let e=Pm(this._selection,n,this.columns,r);this._initialSelectionPoint=e,this._currentCursorPoint=e}this._dispatchSelectEvent(),this.requestUpdate();return}if(e.key===`Tab`){if(e.preventDefault(),e.stopPropagation(),this._editState)this._advanceCursor();else{let e=_m(this._store);this._selection=Fm(this._selection,`right`,this.columns,e),this._dispatchSelectEvent()}this.requestUpdate();return}if(e.key===`Escape`){if(e.preventDefault(),e.stopPropagation(),this._editState)this._editState=null;else if(this._selection&&this._selection.kind!==`single`){let e=this._selection,n=0;if(e.kind===`contiguous`){let r=e;n=Math.min(r.start,r.end)}if(e.kind===`rectangular`){let r=e;n=r.y*Om(this.columns)+r.x}this._selection={kind:`single`,pos:n},this._dispatchSelectEvent()}this.requestUpdate();return}if(this._editState){if(e.stopPropagation(),e.key===`Backspace`){this._handleBackspace();return}if(e.key===`Enter`){this._editState.side===`hex`&&this._editState.partial.startsWith(`.`)&&this._commitDecimalValue();return}e.key.length===1&&this._handleValueEntry(e.key);return}if(this._selection&&this._selection.kind===`single`&&e.key.length===1){e.preventDefault(),e.stopPropagation();let n=this._selection.pos,r=this._focusSide??`hex`;this._editState={pos:n,side:r,partial:``},this._handleValueEntry(e.key)}}}static{this.styles=_`
    :host {
      --hex-row-height: 24px;
      --hex-offset-width: 8ch;
      --hex-font: monospace;
      --hex-font-size: 0.85rem;
      --hex-changed-weight: bold;

      --ascii-null: #808080;
      --ascii-printable: #4caf50;
      --ascii-whitespace: #ffffff;
      --ascii-control: #f48fb1;
      --ascii-other: #ffeb3b;

      --shade-null: #808080;
      --shade-max: #ffffff;
      --shade-step-start: #ff0000;
      --shade-step-end: #0000ff;

      display: block;
      font-family: var(--hex-font);
      font-size: var(--hex-font-size);
    }

    .hex-editor {
      display: flex;
      flex-direction: column;
      height: 300px;
      overflow: hidden;
      background: #1e1e1e;
      color: #e0e0e0;
      border: 1px solid #333;
      border-radius: 4px;
    }

    .scroll-container {
      flex: 1;
      overflow-y: auto;
      position: relative;
    }

    .header {
      display: flex;
      background: #2d2d2d;
      font-weight: bold;
      border-bottom: 1px solid #444;
      height: var(--hex-row-height);
      flex-shrink: 0;
      align-items: center;
    }

    .row {
      display: flex;
      height: var(--hex-row-height);
      align-items: center;
    }

    .row:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .offset-cell {
      width: var(--hex-offset-width);
      padding: 0 8px;
      text-align: right;
      color: #888;
      flex-shrink: 0;
      box-sizing: border-box;
    }

    .col-group {
      display: inline-flex;
      gap: 4px;
      margin-right: 16px;
    }

    .col-header {
      width: calc(8ch + 28px);
      padding: 0 8px;
      color: #555;
      text-align: right;
      flex-shrink: 0;
      box-sizing: border-box;
    }

    .col-header.active {
      color: #aaa;
    }

    .text-header {
      padding: 4px 8px;
      color: #555;
      width: calc(var(--columns, 4) * 4 * 1ch);
      box-sizing: border-box;
      flex-shrink: 0;
    }

    .text-header.active {
      color: #aaa;
    }

    .hex-cell, .text-char {
      display: inline-block;
      width: 2ch;
      text-align: center;
      cursor: pointer;
      user-select: none;
      padding: 2px 0;
    }

    .hex-cell.selected, .text-char.selected {
      background: rgba(100, 149, 237, 0.4);
    }

    .hex-cell.changed, .text-char.changed {
      font-weight: var(--hex-changed-weight);
    }

    .hex-cell.editing {
      background: rgba(255, 215, 0, 0.3);
    }


    .text-area {
      display: inline-flex;
      gap: 0;
    }

    .text-char {
      width: 1ch;
      text-align: left;
    }

    .byte-null { color: var(--ascii-null); }
    .byte-printable { color: var(--ascii-printable); }
    .byte-whitespace { color: var(--ascii-whitespace); }
    .byte-control { color: var(--ascii-control); }
    .byte-other { color: var(--ascii-other); }
  `}setData(e){this._store=hm(e),this._undoStack=wm(),this._selection=null,this._editState=null,this._scrollTop=0,this.requestUpdate()}undo(){let e=Em(this._undoStack);if(!e)return;let n=Sm(e);xm(this._store,n),this.requestUpdate()}redo(){let e=Dm(this._undoStack);e&&(xm(this._store,e),this.requestUpdate())}recomputeColours(){let e=getComputedStyle(this),n=e.getPropertyValue(`--shade-null`).trim()||`#808080`,r=e.getPropertyValue(`--shade-max`).trim()||`#ffffff`,i=e.getPropertyValue(`--shade-step-start`).trim()||`#ff0000`,a=e.getPropertyValue(`--shade-step-end`).trim()||`#0000ff`;this._shadeMap=mm(n,r,i,a),this.requestUpdate()}*selectedBytes(){let e=Mm(this._selection,this.columns);for(let n=0;n<e.length;n++){let r=e[n];yield{selection_index:n,array_index:r,value:gm(this._store,r)}}}containsPosition(e){return Nm(this._selection,e,this.columns)}selectSingle(e){this._selection={kind:`single`,pos:e},this._dispatchSelectEvent(),this.requestUpdate()}selectContiguous(e,n){this._selection={kind:`contiguous`,start:e,end:n},this._dispatchSelectEvent(),this.requestUpdate()}selectRectangular(e,n,r,i){this._selection={kind:`rectangular`,x:e,y:n,width:r,height:i},this._dispatchSelectEvent(),this.requestUpdate()}clearSelection(){this._selection=null,this._dispatchSelectEvent(),this.requestUpdate()}getSelection(){return this._selection}firstUpdated(){let e=this.shadowRoot?.querySelector(`.scroll-container`);e&&(new ResizeObserver(e=>{this._containerH=e[0].contentRect.height,this.requestUpdate()}).observe(e),this._containerH=e.clientHeight),this.recomputeColours()}_onPointerDown(e,n,r){if(r.preventDefault(),r.button!==0)return;(this.shadowRoot?.querySelector(`.hex-editor`))?.focus(),this._focusSide=n,r.target.setPointerCapture(r.pointerId);let i=Om(this.columns),a=e%i,o=Math.floor(e/i);r.metaKey||r.ctrlKey?(this._pointerMode=`select-rect`,this._dragAnchor=e,this._rectAnchorX=a,this._rectAnchorY=o):r.shiftKey?(this._pointerMode=`select-cont`,!this._selection||this._selection.kind!==`single`?this._dragAnchor=e:(this._dragAnchor=this._selection.pos,this._shiftClickTarget=e)):(this._pointerMode=`pending`,this._dragStart={pos:e,startValue:gm(this._store,e),startY:r.clientY,startX:r.clientX},this._dragAnchor=e,this._currentDragDiff=null)}_onPointerMove(e,n,r){if(!this._dragStart)return;let i=Math.abs(r.clientY-this._dragStart.startY),a=Math.abs(r.clientX-this._dragStart.startX);if(this._pointerMode===`pending`&&i>4&&i>a&&(this._pointerMode=`drag-value`,this._editState=null),this._pointerMode===`drag-value`){let n=Math.round((r.clientY-this._dragStart.startY)/4),i=Math.max(0,Math.min(255,this._dragStart.startValue-n));this._currentDragDiff=ym(this._store,e,i),this.requestUpdate()}if(this._pointerMode===`select-cont`&&this._dragAnchor!==null&&(this._selection=Lm(this._dragAnchor,e,`contiguous`,this.columns),this._dispatchSelectEvent()),this._pointerMode===`select-rect`){let n=Om(this.columns),r=e%n,i=Math.floor(e/n),a=Math.min(this._rectAnchorX,r),o=Math.min(this._rectAnchorY,i),s=Math.abs(r-this._rectAnchorX)+1,c=Math.abs(i-this._rectAnchorY)+1;this._selection={kind:`rectangular`,x:a,y:o,width:s,height:c},this._dispatchSelectEvent()}}_onPointerUp(e,n,r){if(r.target.releasePointerCapture(r.pointerId),this._pointerMode===`pending`&&(this._selection={kind:`single`,pos:e},this._initialSelectionPoint=e,this._currentCursorPoint=e,this._editState={pos:e,side:n,partial:``},this._dispatchSelectEvent()),this._pointerMode===`select-cont`&&(this._dragAnchor!==null&&this._shiftClickTarget!==null?(this._selection={kind:`contiguous`,start:this._dragAnchor,end:this._shiftClickTarget},this._initialSelectionPoint=Math.min(this._dragAnchor,this._shiftClickTarget),this._currentCursorPoint=Math.max(this._dragAnchor,this._shiftClickTarget),this._dispatchSelectEvent()):this._dragAnchor!==null&&(this._selection=Lm(this._dragAnchor,e,`contiguous`,this.columns),this._initialSelectionPoint=this._dragAnchor,this._currentCursorPoint=e,this._dispatchSelectEvent())),this._pointerMode===`select-rect`){let n=Om(this.columns),r=e%n,i=Math.floor(e/n),a=Math.min(this._rectAnchorX,r),o=Math.min(this._rectAnchorY,i),s=Math.abs(r-this._rectAnchorX)+1,c=Math.abs(i-this._rectAnchorY)+1;this._selection={kind:`rectangular`,x:a,y:o,width:s,height:c},this._dispatchSelectEvent()}this._pointerMode===`drag-value`&&this._currentDragDiff&&(Tm(this._undoStack,this._currentDragDiff),this._dispatchChangeEvent(this._currentDragDiff)),this._pointerMode=null,this._dragStart=null,this._dragAnchor=null,this._currentDragDiff=null,this._shiftClickTarget=null}_handleBackspace(){this._editState&&(this._editState={...this._editState,partial:``},this.requestUpdate())}_handleValueEntry(e){if(!this._editState)return;let{pos:n,side:r,partial:i}=this._editState;if(r===`text`){if(e.length===1&&e.charCodeAt(0)>=32&&e.charCodeAt(0)<=126){let r=e.charCodeAt(0),i=ym(this._store,n,r);Tm(this._undoStack,i),this._dispatchChangeEvent(i),this._advanceCursor()}return}if(i===``&&e===`.`){this._editState={...this._editState,partial:`.`},this.requestUpdate();return}if(i.startsWith(`.`)){if(/\d/.test(e)){let n=i+e;Number(n.slice(1))>255&&(n=`.255`),this._editState={...this._editState,partial:n},this.requestUpdate()}return}if(`0123456789ABCDEFabcdef`.includes(e)){let r=(i+e.toUpperCase()).slice(-2);if(this._editState={...this._editState,partial:r},this.requestUpdate(),r.length===2){let e=Number.parseInt(r,16),i=ym(this._store,n,e);Tm(this._undoStack,i),this._dispatchChangeEvent(i),this._advanceCursor()}}else i!==``&&(this._editState={...this._editState,partial:``},this.requestUpdate())}_commitDecimalValue(){if(!this._editState)return;let e=Number.parseInt(this._editState.partial.slice(1),10);if(!isNaN(e)){let n=ym(this._store,this._editState.pos,e);Tm(this._undoStack,n),this._dispatchChangeEvent(n),this._advanceCursor()}}_advanceCursor(){if(!this._editState)return;let e=_m(this._store),n=jm(this._editState.pos+1,e);this._editState={pos:n,side:this._editState.side,partial:``},this._selection={kind:`single`,pos:n},this.requestUpdate()}_dispatchChangeEvent(e){this.dispatchEvent(new CustomEvent(`hex-change`,{detail:{diff:e},bubbles:!0,composed:!0}))}_dispatchSelectEvent(){let e=this._selection,n;n=e?e.kind===`single`?{type:`single`,position:e.pos}:e.kind===`contiguous`?{type:`contiguous`,start:e.start,end:e.end}:e.kind===`rectangular`?{type:`rectangular`,x:e.x,y:e.y,width:e.width,height:e.height}:{type:`none`}:{type:`none`},this.dispatchEvent(new CustomEvent(`select`,{detail:n,bubbles:!0,composed:!0}))}_copy(){let e=Mm(this._selection,this.columns);if(e.length===0)return;let n=e.map(e=>gm(this._store,e));this._copyBuffer=new Uint8Array(n);let r=n.map(e=>e.toString(16).padStart(2,`0`)).join(` `);navigator.clipboard?.writeText(r).catch(()=>{})}async _paste(){let e=null;try{let n=await navigator.clipboard?.readText();n&&(e=this._parseHexString(n))}catch{}if(!e&&this._copyBuffer&&(e=Array.from(this._copyBuffer)),!e||e.length===0||!this._selection)return;let n=new Map;if(this._selection.kind===`single`){let r=this._selection.pos,i=_m(this._store);for(let a=0;a<e.length&&r+a<i;a++)n.set(r+a,e[a])}else if(this._selection.kind===`contiguous`){let r=Math.min(this._selection.start,this._selection.end),i=Math.max(this._selection.start,this._selection.end)-r+1;for(let a=0;a<Math.min(e.length,i);a++)n.set(r+a,e[a])}else if(this._selection.kind===`rectangular`){let{x:r,y:i,width:a,height:o}=this._selection,s=Om(this.columns),c=0;for(let l=0;l<o&&c<e.length;l++)for(let o=0;o<a&&c<e.length;o++){let a=(i+l)*s+r+o;n.set(a,e[c++])}}if(n.size>0){let e=bm(this._store,n);Tm(this._undoStack,e),this._dispatchChangeEvent(e),this.requestUpdate()}}_parseHexString(e){let n=[],r=e.replace(/[^0-9A-F]/gi,` `).trim();if(!r)return n;let i=r.split(/\s+/);for(let e of i)e.length===1?n.push(Number.parseInt(e+e,16)):e.length===2&&n.push(Number.parseInt(e,16));return n}_getColHeaders(){let e=[];for(let n=0;n<this.columns;n++){let r=n*4;e.push(`+${r.toString(16).toUpperCase()}`)}return e}_isRowShaded(e){let n=this._selection;if(!n||n.kind!==`single`)return!0;let r=Om(this.columns);return Math.floor(e/r)===Math.floor(n.pos/r)}_isHexShaded(e){return this._isRowShaded(e)}_isTextShaded(e){return this._isRowShaded(e)}render(){let e=_m(this._store),n=Om(this.columns),r=Math.ceil(e/n),i=this._containerH>0?this._containerH:280,a=Math.floor(this._scrollTop/this._rowHeight),o=Math.min(a+Math.ceil(i/this._rowHeight)+2,r),s=a*this._rowHeight,c=(r-o)*this._rowHeight,l=Cm(this._store),u=this._getColHeaders(),d=this._focusSide===`hex`||this._focusSide===null,f=this._focusSide===`text`;return C`
      <div class="hex-editor" tabindex="0" @keydown=${this._onKeyDown} @pointerleave=${()=>{}}>
        <div class="header">
          ${this.hideOffsetCol?null:C`<span class="offset-cell">Offset</span>`}
          ${this.hideHexCol?null:bc(u,e=>C`<span class="col-header ${d?`active`:``}">${e}</span>`)}
          ${this.hideTextCol?null:C`<span class="text-header ${f?`active`:``}">Text</span>`}
        </div>
        <div class="scroll-container" @scroll=${this._onScroll}>
          <div style="height: ${s}px"></div>
          ${bc(Array.from({length:o-a},(e,n)=>a+n),e=>e,e=>this._renderRow(e,l))}
          <div style="height: ${c}px"></div>
        </div>
      </div>
    `}_renderRow(e,n){let r=Om(this.columns),i=e*r;return C`
      <div class="row" data-row=${e}>
        ${this.hideOffsetCol?null:C`<span class="offset-cell">${i.toString(16).toUpperCase().padStart(6,`0`)}</span>`}
        ${this.hideHexCol?null:bc(Array.from({length:this.columns},(e,n)=>n),e=>e,r=>this._renderColumn(e,r,n))}
        ${this.hideTextCol?null:C`
          <span class="text-area">
            ${bc(Array.from({length:r},(e,n)=>n),e=>e,e=>this._renderTextChar(i+e,n))}
          </span>
        `}
      </div>
    `}_renderColumn(e,n,r){let i=e*Om(this.columns)+n*4;return C`
      <span class="col-group">
        ${[0,1,2,3].map(e=>this._renderHexCell(i+e,r))}
      </span>
    `}_renderHexCell(e,n){if(e>=_m(this._store))return C`<span class="hex-cell"></span>`;let r=gm(this._store,e),i=r.toString(16).toUpperCase().padStart(2,`0`),a=Nm(this._selection,e,this.columns),o=this.showChangeset&&n.has(e),s=this._editState?.pos===e,c=[`hex-cell`];a&&c.push(`selected`),o&&c.push(`changed`),s&&c.push(`editing`),this._isHexShaded(e)&&c.push(`shaded`);let l=i,u;return s&&this._editState&&(l=this._editState.partial===``?i:`${this._editState.partial}_`),this.colourScheme===`shade`&&this._shadeMap?u={color:this._shadeMap.forByte(r)}:this.colourScheme===`ascii`&&c.push(pm(r)),C`
      <span
        class=${c.join(` `)}
        style=${lm(u||{})}
        @pointerdown=${n=>this._onPointerDown(e,`hex`,n)}
        @pointerup=${n=>this._onPointerUp(e,`hex`,n)}
        @pointermove=${n=>this._onPointerMove(e,`hex`,n)}
      >${l}</span>
    `}_renderTextChar(e,n){if(e>=_m(this._store))return C`<span class="text-char"></span>`;let r=gm(this._store,e),i=r>=32&&r<=126?String.fromCharCode(r):`.`,a=Nm(this._selection,e,this.columns),o=this.showChangeset&&n.has(e),s=[`text-char`];a&&s.push(`selected`),o&&s.push(`changed`),this._isTextShaded(e)&&s.push(`shaded`);let c;return this.colourScheme===`shade`&&this._shadeMap?c={color:this._shadeMap.forByte(r)}:this.colourScheme===`ascii`&&s.push(pm(r)),C`
      <span
        class=${s.join(` `)}
        style=${lm(c||{})}
        @pointerdown=${n=>this._onPointerDown(e,`text`,n)}
        @pointerup=${n=>this._onPointerUp(e,`text`,n)}
        @pointermove=${n=>this._onPointerMove(e,`text`,n)}
      >${i}</span>
    `}};k([A({type:Number})],Rm.prototype,`columns`,void 0),k([A({type:String})],Rm.prototype,`colourScheme`,void 0),k([A({type:Boolean})],Rm.prototype,`showChangeset`,void 0),k([A({type:Boolean,attribute:`hide-offset-col`})],Rm.prototype,`hideOffsetCol`,void 0),k([A({type:Boolean,attribute:`hide-hex-col`})],Rm.prototype,`hideHexCol`,void 0),k([A({type:Boolean,attribute:`hide-text-col`})],Rm.prototype,`hideTextCol`,void 0),k([j()],Rm.prototype,`_selection`,void 0),k([j()],Rm.prototype,`_scrollTop`,void 0),k([j()],Rm.prototype,`_editState`,void 0),k([j()],Rm.prototype,`_containerH`,void 0),k([j()],Rm.prototype,`_shadeMap`,void 0),k([j()],Rm.prototype,`_focusSide`,void 0),Rm=k([O(`ixfx-hex-editor`)],Rm);var zm=Math.PI*2,X=-Math.PI/2;function Bm(e,n,r={x:50,y:50}){return{x:r.x+Math.cos(e)*n,y:r.y+Math.sin(e)*n}}function Vm(e){let n=zm*(1-e)/2,r=-Math.PI/2,i=r-n,a=r+n;return{startAngle:i,endAngle:a,totalArc:a-i}}function Hm(e,n,r){let{startAngle:i,endAngle:a,totalArc:o}=Vm(r);switch(n){case`range`:return i+e*o;case`bipolar`:return e<=.5?i+e/.5*(X-i):X+(e-.5)/.5*(a-X);case`unipolar`:return X;default:return i}}function Um(e,n,r){let{startAngle:i,endAngle:a,totalArc:o}=Vm(r);switch(n){case`range`:return{startAngle:i,endAngle:i+e*o};case`bipolar`:return e<.5?{startAngle:i+e/.5*(X-i),endAngle:X}:e>.5?{startAngle:X,endAngle:X+(e-.5)/.5*(a-X)}:{startAngle:X,endAngle:X};case`unipolar`:{let n=e*o/2;return{startAngle:X-n,endAngle:X+n}}default:return{startAngle:i,endAngle:i}}}function Wm(e,n,r,i){let{startAngle:a,endAngle:o,totalArc:s}=Vm(i),c=Hm(e,r,i),l=n*s/2,u=c-l,d=c+l;return u<a&&(u=a),d>o&&(d=o),u>=d?{startAngle:c,endAngle:c}:{startAngle:u,endAngle:d}}function Gm(e,n,r,i={x:50,y:50}){if(e===n)return``;let a=n-e;if(a<0&&(a+=zm),a>=zm-.001){let n=e+zm-.001,a=Bm(e,r,i),o=Bm(n,r,i);return`M ${a.x},${a.y} A ${r},${r} 0 1 1 ${o.x},${o.y}`}let o=Bm(e,r,i),s=Bm(n,r,i),c=+(a>Math.PI);return`M ${o.x},${o.y} A ${r},${r} 0 ${c} 1 ${s.x},${s.y}`}function Km(e,n,r={x:50,y:50}){let{startAngle:i,endAngle:a}=Vm(n);return Gm(i,a,e,r)}function qm(e,n,r,i={x:50,y:50},a=!0){if(e===n)return``;let o=n-e;if(o<0&&(o+=zm),o>=zm-.001){let n=Bm(e,r,i),o=Bm(e+zm-.001,r,i),s=+!!a;return`M ${i.x},${i.y} L ${n.x},${n.y} A ${r},${r} 0 1 ${s} ${o.x},${o.y} Z`}let s=e,c=n,l=a;!a&&o>Math.PI&&(s=n,c=e,l=!0,o=zm-o);let u=Bm(s,r,i),d=Bm(c,r,i),f=+(o>Math.PI),p=+!!l;return`M ${i.x},${i.y} L ${u.x},${u.y} A ${r},${r} 0 ${f} ${p} ${d.x},${d.y} Z`}function Jm(e,n,r){let{startAngle:i,endAngle:a,totalArc:o}=Vm(r),s=Hm(e,n,r);switch(n){case`range`:return{startAngle:i,endAngle:s,clockwise:!0};case`bipolar`:return e<.5?{startAngle:X,endAngle:s,clockwise:!1}:{startAngle:X,endAngle:s,clockwise:!0};case`unipolar`:{let n=e*o/2;return{startAngle:X-n,endAngle:X+n,clockwise:!0}}default:return{startAngle:i,endAngle:i,clockwise:!0}}}function Ym(e,n,r,i,a={x:50,y:50}){let o=Hm(e,n,r);return{angle:o,position:Bm(o,i,a)}}function Xm(e,n={x:50,y:50}){return{angle:X,position:Bm(X,e,n)}}function Zm(e,n,r){return Math.min(Math.max(e,n),r)}function Qm(e,n,r,i,a){return i+(e-n)/(r-n)*(a-i)}var Z={x:50,y:50},$m=class extends E{#e;get radius(){return this.#e}set radius(e){this.#e=Zm(e,10,50)}#t;#n;#r;#i;#a;#o;constructor(){super(),this.#e=45,this.value=0,this.min=0,this.max=100,this.step=void 0,this.valueMode=`range`,this.flatten=.3,this.markerStyle=`needle`,this.wedge=!1,this.disabled=!1,this.#t=new Map,this.#n=!1,this.#r=0,this.#i=0,this.#o=!1,this.#p=e=>{if(this.disabled)return;e.preventDefault();let n=this.renderRoot.querySelector(`svg`);n?.focus(),this.#n=!0,this.#r=e.clientY,this.#i=this.value,this.toggleAttribute(`dragging`,!0),n&&n.setPointerCapture(e.pointerId),window.addEventListener(`pointermove`,this.#m),window.addEventListener(`pointerup`,this.#h),window.addEventListener(`pointercancel`,this.#h)},this.#m=e=>{if(!this.#n)return;e.preventDefault();let n=this.clientHeight*2*(e.shiftKey?10:1),r=(this.#r-e.clientY)/n*(this.max-this.min),i=Qm(this.#i+r,this.min,this.max,0,1);this.#u(Zm(i,0,1),!0)},this.#h=()=>{this.#n=!1,this.toggleAttribute(`dragging`,!1);let e=this.renderRoot.querySelector(`svg`);e&&`hasPointerCapture`in e&&typeof e.hasPointerCapture==`function`&&e.hasPointerCapture(1)&&e.releasePointerCapture(1),window.removeEventListener(`pointermove`,this.#m),window.removeEventListener(`pointerup`,this.#h),window.removeEventListener(`pointercancel`,this.#h)},this.#g=e=>{if(this.disabled)return;let n=e.shiftKey?10:1,r=this.max-this.min,i=am(r,this.stops,this.step)/n,a=!1;switch(e.key){case`ArrowUp`:case`ArrowRight`:this.#u(this.#s()+i/r,!0),a=!0;break;case`ArrowDown`:case`ArrowLeft`:this.#u(this.#s()-i/r,!0),a=!0;break;case`Home`:this.#u(0,!0),a=!0;break;case`End`:this.#u(1,!0),a=!0;break}a&&e.preventDefault()},this.#t.set(`track`,{key:`track`,value:1,type:`fixed`,offset:0,width:.16}),this.#t.set(`value`,{key:`value`,value:0,type:`value`,offset:0,width:.24})}addLane(e,n){let r=this.#s();this.#t.set(e,{key:e,value:n?.value??r,type:n?.type??`value`,offset:n?.offset??0,width:n?.width??.1}),this.requestUpdate()}setLaneValue(e,n){let r=this.#t.get(e);r&&(r.value=Zm(n,0,1),this.requestUpdate())}removeLane(e){this.#t.delete(e),this.requestUpdate()}getLanes(){return new Map(this.#t)}getLane(e){return this.#t.get(e)}#s(){return Qm(this.value,this.min,this.max,0,1)}#c(){return this.valueMode===`unipolar`&&this.markerStyle===`needle`?`none`:this.markerStyle}#l(e){if(this.stops&&this.stops>1){let n=(this.max-this.min)/this.stops;return Math.round((e-this.min)/n)*n+this.min}return e}#u(e,n=!1){let r=Qm(e,0,1,this.min,this.max),i=this.#l(Zm(r,this.min,this.max));if(i===this.value)return;let a=this.value;this.value=i,this.#o=n;let o=this.#t.get(`value`);if(o&&o.type===`value`&&(o.value=this.#s()),this.hasAttribute(`data-tooltip-live`)){let e=Math.round(this.#s()*100);this.setAttribute(`data-tooltip`,`${e}%`)}n?(this.dispatchEvent(new CustomEvent(`input`,{detail:{value:this.value,valueRelative:this.#s()},bubbles:!0,composed:!0})),this.#d(a)):this.#f(a)}#d(e){this.#a!==void 0&&clearTimeout(this.#a),this.#a=window.setTimeout(()=>{this.#f(e),this.#a=void 0},150)}#f(e){this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value,valueRelative:this.#s(),previousValue:e},bubbles:!0,composed:!0}))}#p;#m;#h;#g;#_(){let e=Km(this.radius,this.flatten,Z),n=this.#w(`--dial-border-width`,2);return w`<path class="dial-border" d="${e}" fill="none" stroke="${getComputedStyle(this).getPropertyValue(`--dial-border-color`).trim()||`var(--surface-4)`}" stroke-width="${n}" stroke-linecap="round" vector-effect="non-scaling-stroke" />`}#v(){return w`<path class="dial-fill" d="${Km(this.radius,this.flatten,Z)}" fill="${getComputedStyle(this).getPropertyValue(`--dial-fill`).trim()||`transparent`}" />`}#y(){let{startAngle:e,endAngle:n,clockwise:r}=Jm(this.#s(),this.valueMode,this.flatten),i=qm(e,n,this.radius,Z,r);return i?w`<path class="wedge" d="${i}" />`:w``}#b(e){let n=``;if(e.type===`fixed`)n=Km(this.radius-e.offset*this.radius,this.flatten,Z);else if(e.type===`anchored`){let{startAngle:r,endAngle:i}=Wm(this.#s(),e.value,this.valueMode,this.flatten);n=Gm(r,i,this.radius-e.offset*this.radius,Z)}else{let{startAngle:r,endAngle:i}=Um(e.value,this.valueMode,this.flatten);n=Gm(r,i,this.radius-e.offset*this.radius,Z)}return n?w`
      <path 
        class="lane" 
        data-lane-key="${e.key}" 
        part="lane lane-${e.key}"
        d="${n}"
        style="
          stroke-width: calc(var(--lane-${e.key}-width, var(--lane-width)) * ${this.radius}%);
          stroke-linecap: round;
        "
      />
    `:w``}#x(e,n,r){let i=r*this.radius,a=n*this.radius,o={x:Z.x+Math.cos(e)*i,y:Z.y+Math.sin(e)*i},s={x:Z.x+Math.cos(e)*a,y:Z.y+Math.sin(e)*a};return`M ${o.x} ${o.y} L ${s.x} ${s.y}`}#S(e){let{angle:n,position:r}=Ym(this.#s(),this.valueMode,this.flatten,this.radius,Z),i=this.#w(`--marker-offset`,1),a=this.#w(`--marker-border-width`,0),o=this.#c();if(o===`dot`){let e=this.#w(`--marker-thickness`,.15)*this.radius,n=Z.x+(r.x-Z.x)*i,o=Z.y+(r.y-Z.y)*i;return a>0?w`
          <g class="value-marker" part="value-marker">
            <use href="#dot-path" class="marker-border" />
            <use href="#dot-path" class="marker-fill" />
          </g>
        `:w`
        <g class="value-marker" part="value-marker">
          <circle cx="${n}" cy="${o}" r="${e}" />
        </g>
      `}else if(o===`needle`){if(a>0&&e)return w`
          <g class="value-marker" part="value-marker">
            <use href="#needle-path" class="marker-border" />
            <use href="#needle-path" class="marker-fill" />
          </g>
        `;let r=this.#w(`--marker-length`,.8),i=this.#w(`--marker-offset`,.2);return w`
        <g class="value-marker" part="value-marker">
          <path d="${this.#x(n,r,i)}" />
        </g>
      `}}#C(){if(this.valueMode!==`bipolar`&&this.valueMode!==`unipolar`)return w``;let{position:e}=Xm(this.radius,Z);if(this.markerStyle===`dot`){let n=this.#w(`--midpoint-thickness`,.08);return w`
        <g class="midpoint-marker" part="midpoint-marker">
          <circle 
            cx="${e.x}" 
            cy="${e.y}" 
            r="${n*this.radius}" 
          />
        </g>
      `}else{let e=this.#w(`--midpoint-length`,.15),n=this.#w(`--midpoint-offset`,.85),r=-Math.PI/2,i=n*this.radius,a=(n+e)*this.radius,o={x:Z.x+Math.cos(r)*i,y:Z.y+Math.sin(r)*i},s={x:Z.x+Math.cos(r)*a,y:Z.y+Math.sin(r)*a};return w`
        <g class="midpoint-marker" part="midpoint-marker">
          <line 
            x1="${o.x}" 
            y1="${o.y}" 
            x2="${s.x}" 
            y2="${s.y}" 
          />
        </g>
      `}}#w(e,n){let r=getComputedStyle(this),i=r.getPropertyValue(e).trim();if(!i)return n;if(i.includes(`calc(`)){let e=r.getPropertyValue(`--value-relative`).trim();if(!e){let e=Number.parseFloat(i.replace(/[^0-9.-]/g,``));return Number.isNaN(e)?n:e}let a=i.replace(/var\(--value-relative\)/g,e);try{let e=Function(`return ${a.replace(/calc\s*\(([^)]+)\)/g,`$1`)}`)();return typeof e==`number`&&!Number.isNaN(e)?e:n}catch{let e=Number.parseFloat(i.replace(/[^0-9.-]/g,``));return Number.isNaN(e)?n:e}}let a=Number.parseFloat(i);return Number.isNaN(a)?n:a}willUpdate(e){if(super.willUpdate(e),e.has(`value`)||!this.hasUpdated){let e=this.#t.get(`value`);e&&e.type===`value`&&(e.value=this.#s())}}render(){let e=Array.from(this.#t.values()),{angle:n,position:r}=Ym(this.#s(),this.valueMode,this.flatten,this.radius,Z),i=this.#w(`--marker-length`,.8),a=this.#w(`--marker-offset`,.2),o=this.#w(`--marker-border-width`,0),s=o>0?this.#x(n,i,a):void 0,c=this.#w(`--marker-thickness`,.15)*this.radius,l=[];return s&&l.push(w`<path id="needle-path" d="${s}" />`),o>0&&l.push(w`<circle id="dot-path" cx="${r.x}" cy="${r.y}" r="${c}" />`),C`
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        tabindex="${this.disabled?-1:0}"
        @pointerdown="${this.#p}"
        @keydown="${this.#g}"
        style="cursor: ${this.#n?`ns-resize`:`grab`}"
      >
        ${l.length>0?w`<defs>${l}</defs>`:``}
        ${this.#v()}
        ${this.wedge?this.#y():``}
        ${this.#_()}
        ${e.map(e=>this.#b(e))}
        ${this.#C()}
        ${this.#S(s)}
      </svg>
    `}updated(e){if(super.updated(e),e.has(`radius`)&&this.style.setProperty(`--radius`,`${this.radius}%`),this.style.setProperty(`--value-relative`,this.#s().toString()),e.has(`flatten`)){let e=this.#w(`--marker-thickness`,.15),n=this.#w(`--radius`,45),r=Math.round(e*n)+5,i=Math.round(100*(1-this.flatten))+r;this.style.setProperty(`--dial-height`,`${i}px`);let a=this.renderRoot.querySelector(`svg`);a&&a.setAttribute(`viewBox`,`0 0 100 ${i}`)}}disconnectedCallback(){super.disconnectedCallback(),this.#a!==void 0&&clearTimeout(this.#a),this.#h()}firstUpdated(){let e=this.#w(`--marker-thickness`,.15),n=this.#w(`--radius`,45),r=Math.round(e*n),i=Math.round(100*(1-this.flatten))+r;this.style.setProperty(`--dial-height`,`${i}px`);let a=this.renderRoot.querySelector(`svg`);a&&a.setAttribute(`viewBox`,`0 0 100 ${i}`)}static{this.styles=[D,zn,_`
    :host {
      display: inline-block;
      width: 100px;
      height: var(--dial-height, 100px);
      touch-action: none;
      user-select: none;
      tabindex: 0;

      /* Dynamic value - set by JS */
      --value-relative: 0;

      /* Lane widths (used in stroke-width calculations) */
      --lane-width: 0.16;
      --lane-track-width: 0.08;
      --lane-value-width: 0.12;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    svg {
      width: 100%;
      height: 100%;
      outline: none;
    }

    svg:active {
      cursor: grabbing;
    }

    svg:focus-visible {
      outline: var(--radial-input-svg-focus-outline, 2px solid var(--accent));
      outline-offset: var(--radial-input-svg-focus-outline-offset, 2px);
    }

    .dial-border {
      fill: none;
      stroke: var(--dial-border-color, var(--surface-4));
      stroke-width: var(--dial-border-width, 2px);
      stroke-linecap: round;
      vector-effect: non-scaling-stroke;
    }

    .dial-fill {
      fill: var(--dial-fill, transparent);
    }

    .wedge {
      fill: var(--wedge-fill, var(--accent));
      fill-opacity: var(--wedge-fill-opacity, 0.25);
      stroke: var(--wedge-border-color, var(--accent));
      stroke-width: var(--wedge-border-width, 0);
      stroke-opacity: var(--wedge-border-opacity, 1);
      vector-effect: non-scaling-stroke;
    }

    .lane {
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: var(--lane-dasharray, none);
      stroke-dashoffset: var(--lane-dashoffset, 0);
      vector-effect: non-scaling-stroke;
    }

    .lane[data-lane-key='track'] {
      stroke: var(--lane-track-color, var(--surface-4));
    }

    .lane[data-lane-key='value'] {
      stroke: var(--lane-value-color, var(--accent));
    }

    .lane:not([data-lane-key='track']):not([data-lane-key='value']) {
      stroke: var(--lane-color, var(--accent));
    }

    .value-marker path,
    .value-marker .marker-fill {
      stroke: var(--marker-color, var(--accent));
      stroke-width: calc(var(--marker-thickness, 0.15) * var(--radius, 45%));
      stroke-linecap: round;
      stroke-dasharray: var(--marker-dasharray, none);
      stroke-dashoffset: var(--marker-dashoffset, 0);
      vector-effect: non-scaling-stroke;
    }

    .value-marker .marker-border {
      stroke: var(--marker-border-color, transparent);
      stroke-width: calc((var(--marker-thickness, 0.15) + var(--marker-border-width, 0) * 2) * var(--radius, 45%));
      stroke-linecap: round;
      vector-effect: non-scaling-stroke;
    }

    .value-marker .marker-border {
      fill: none;
    }

    .value-marker .marker-fill,
    .value-marker circle {
      fill: var(--marker-color, var(--accent));
    }

    .midpoint-marker line {
      stroke: var(--midpoint-color, var(--surface-muted-text));
      stroke-width: var(--midpoint-thickness, 1px);
      stroke-linecap: round;
      vector-effect: non-scaling-stroke;
    }

    .midpoint-marker circle {
      fill: var(--midpoint-color, var(--surface-muted-text));
      stroke: var(--midpoint-border-color, transparent);
      stroke-width: var(--midpoint-border-width, 0);
      vector-effect: non-scaling-stroke;
    }
  `]}};k([A({type:Number})],$m.prototype,`radius`,null),k([A({type:Number})],$m.prototype,`value`,void 0),k([A({type:Number})],$m.prototype,`min`,void 0),k([A({type:Number})],$m.prototype,`max`,void 0),k([A({type:Number})],$m.prototype,`step`,void 0),k([A({type:Number})],$m.prototype,`stops`,void 0),k([A({type:String,attribute:`value-mode`})],$m.prototype,`valueMode`,void 0),k([A({type:Number})],$m.prototype,`flatten`,void 0),k([A({type:String,attribute:`marker-style`})],$m.prototype,`markerStyle`,void 0),k([A({type:Boolean})],$m.prototype,`wedge`,void 0),k([A({type:Boolean,reflect:!0})],$m.prototype,`disabled`,void 0),$m=k([O(`ixfx-radial-input`)],$m);var eh=class extends Vp{constructor(...e){super(...e),this.inputSelector=`ixfx-radial-input`,this.max=100,this.step=1,this.radius=45,this.flatten=.3,this.markerStyle=`needle`,this.wedge=!1,this.valueMode=`range`,this.tooltip=!1,this.flip=!1,this.aspectRatioThreshold=1.5,this._isWide=!1}_getEffectivePrecision(){if(this.hasAttribute(`precision`))return this.precision;if(this.step!==void 0){let e=String(this.step).split(`.`)[1];return e?e.length:0}return this.max-this.min>10?0:2}_handleResize(e){super._handleResize(e);let{width:n,height:r}=e[0].contentRect;this._isWide=r>0&&n/r>=this.aspectRatioThreshold}_renderEditableNumber(){if(this._isMini)return T;let e=Math.max(this.label?.length??0,3)+1;return C`
      <ixfx-editable-number
        class="number"
        mode="label"
        no-drag
        .value=${String(this.value)}
        .min=${this.min}
        .max=${this.max}
        .step=${this.step}
        .dragSensitivity=${this.dragSensitivity}
        .precision=${this._getEffectivePrecision()}
        .displayText=${this.label}
        .displayTextLogic=${this._isDragging?`hidden`:this.displayTextLogic}
        .formatter=${this._formatter}
        style="--label-min-width: var(--label-width, ${e}ch); --label-align: center;"
        @change=${this._handleNumberChange}
      ></ixfx-editable-number>
    `}render(){let e=this.tooltip||this._isMini,n=this._getTooltipValue();return C`
      <div class="wrap ${this._isMini?`mini`:``} ${this._isWide?`wide`:``} ${this.flip?`flip`:``}">
        ${this._renderEditableNumber()}
        <ixfx-radial-input
          class="dial"
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .step=${this.step}
          .radius=${this.radius}
          .flatten=${this.flatten}
          .markerStyle=${this.markerStyle}
          ?wedge=${this.wedge}
          .valueMode=${this.valueMode}
          data-tooltip-anchor="top"
          data-tooltip=${n}
          data-tooltip-live=${e?`input`:T}
          @input=${this._handleSliderInput}
          @change=${this._handleInputChange}
        ></ixfx-radial-input>
      </div>
    `}_getTooltipValue(){let e=this.max-this.min,n=Number(this.value);return this.min===0&&this.max===1?`${Math.round(n*100)}%`:e>10?String(Math.floor(n)):n.toFixed(2)}static{this.styles=[D,_`
    :host {
    display: block;
    min-height: var(--min-height, 60px);
    min-width: var(--min-width, 60px);
    width: var(--width, auto);
    height: var(--height, auto);
  }

  :host(:focus-within) {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

    .wrap {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      flex-direction: var(--flow, column);
    }

    ixfx-editable-number {
      flex-shrink: 0;
      --label-align: center;
      width: 100%;
    }

  ixfx-radial-input {
    flex-shrink: 1;
    min-height: 0;
    min-width: 0;
    max-width: 100%;
    --radial-input-svg-focus-outline: none;
    --radial-input-svg-focus-outline-offset: 0;
    --prominence-tickled-opacity: 1;
    --prominence-tickled-saturate: 1;
  }

    /* Wide layout (aspect ratio >= threshold): label to the left of dial */
    .wrap.wide {
      flex-direction: var(--flow, row);
      justify-content: space-evenly;
    }

    .wrap.wide ixfx-editable-number {
      --label-align: left;
      width: var(--label-width, 5ch);
    }

    .wrap.wide ixfx-radial-input {
      height: auto;
      max-width: none;
    }

    /* Flip: label after dial (bottom in column, right in row) */
    .wrap.flip ixfx-editable-number {
      order: 1;
    }

    /* Mini mode: dial fills the component */
    .wrap.mini {
      justify-content: center;
      gap: 0;
    }

    .wrap.mini ixfx-radial-input {
      width: 100%;
      height: 100%;
    }
  `]}};k([A({type:Number})],eh.prototype,`radius`,void 0),k([A({type:Number})],eh.prototype,`flatten`,void 0),k([A({type:String,attribute:`marker-style`})],eh.prototype,`markerStyle`,void 0),k([A({type:Boolean})],eh.prototype,`wedge`,void 0),k([A({type:String,attribute:`value-mode`})],eh.prototype,`valueMode`,void 0),k([A({type:Boolean})],eh.prototype,`tooltip`,void 0),k([A({type:Boolean})],eh.prototype,`flip`,void 0),k([A({type:Number,attribute:`aspect-ratio-threshold`})],eh.prototype,`aspectRatioThreshold`,void 0),k([j()],eh.prototype,`_isWide`,void 0),eh=k([O(`ixfx-labelled-radial-input`)],eh);var th=class extends E{constructor(...e){super(...e),this.value=0,this.lit=!1,this.color=`oklch(50% 0.15 25)`,this.blinking=!1,this.rate=500}#e;willUpdate(e){if(e.has(`value`)&&this.style.setProperty(`--value`,String(this.value)),(e.has(`blinking`)||e.has(`rate`))&&this.#t(),e.has(`rate`)){let e=this.rate<300?this.rate*.5:150;this.style.setProperty(`--transition-duration`,`${e}ms`)}}updated(e){e.has(`lit`)&&(this.value=+!!this.lit)}disconnectedCallback(){super.disconnectedCallback(),this.#n()}#t(){this.blinking&&this.rate>0?(this.#n(),this.#e=window.setInterval(()=>{this.value=+(this.value===0)},this.rate)):(this.#n(),this.value=0)}#n(){this.#e!==void 0&&(clearInterval(this.#e),this.#e=void 0)}render(){return C`<div part="circle"></div>`}static{this.styles=_`
    :host {
      --_size: var(--size, 1ex);
      display: inline-block;
      min-width: 1ex;
      min-height: 1ex;
      width: var(--_size);
      height: var(--_size);
      vertical-align: middle;
    }

    div {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: color-mix(in oklch, var(--colour, oklch(50% 0.15 25)), white calc((1 - var(--value, 0)) * 50%));
      transition: background var(--transition-duration, 150ms) ease-out;
    }
  `}};k([A({type:Number})],th.prototype,`value`,void 0),k([A({type:Boolean,attribute:`lit`,reflect:!0})],th.prototype,`lit`,void 0),k([A({type:String})],th.prototype,`color`,void 0),k([A({type:Boolean,attribute:`blinking`,reflect:!0})],th.prototype,`blinking`,void 0),k([A({type:Number,attribute:`rate`})],th.prototype,`rate`,void 0),th=k([O(`ixfx-led`)],th);var nh=class extends E{constructor(...e){super(...e),this._openTrigger=null,this._inputMode=`mouse`,this._handlePointerMove=()=>{this._setInputMode(`mouse`)},this._handleTriggerOpen=e=>{this._openTrigger=e.target},this._handleTriggerClose=e=>{e.target===this._openTrigger&&(this._openTrigger=null)},this._handleFocusIn=e=>{let n=this._getTriggers().find(n=>n===e.target);!n||!this._openTrigger||n===this._openTrigger||(this._openTrigger.closeMenu(),n.openMenu())},this._handleKeydown=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;let n=this._getTriggers();if(n.length===0)return;let r=this._openTrigger??n.find(n=>n===e.target);if(!r)return;let i=n.indexOf(r);if(i===-1)return;e.preventDefault(),e.stopPropagation(),this._setInputMode(`keyboard`);let a=n[(i+(e.key===`ArrowRight`?1:-1)+n.length)%n.length];this._openTrigger?(this._openTrigger.closeMenu(),a.openMenu()):a.focusTrigger()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`menu-trigger-open`,this._handleTriggerOpen),this.addEventListener(`menu-trigger-close`,this._handleTriggerClose),this.addEventListener(`focusin`,this._handleFocusIn),this.addEventListener(`keydown`,this._handleKeydown),this.addEventListener(`pointermove`,this._handlePointerMove)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`menu-trigger-open`,this._handleTriggerOpen),this.removeEventListener(`menu-trigger-close`,this._handleTriggerClose),this.removeEventListener(`focusin`,this._handleFocusIn),this.removeEventListener(`keydown`,this._handleKeydown),this.removeEventListener(`pointermove`,this._handlePointerMove)}_setInputMode(e){this._inputMode!==e&&(this._inputMode=e,this.setAttribute(`data-input-mode`,e))}_getTriggers(){return[...this.children].filter(e=>e.tagName===`IXFX-MENU-TRIGGER`)}static{this.styles=_`
    :host {
      display: flex;
      align-items: center;
    }

    /* Keyboard mode: suppress hover highlight on trigger buttons */
    :host([data-input-mode="keyboard"]) {
      --_trigger-hover-bg: transparent;
      --_trigger-hover-opacity: 0.6;
    }
  `}render(){return C`<slot role="menubar"></slot>`}};nh=k([O(`ixfx-menu-bar`)],nh);var rh=class extends E{constructor(...e){super(...e),this.command=``,this.commandArgs=``,this.label=``,this.checked=!1,this.disabled=!1,this.iconName=``}handleClick(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent(`command`,{detail:{command:this.command,checked:this.checked,args:this.commandArgs},bubbles:!0,composed:!0})))}_resolvedLabel(){return this.label?this.label:this.registry&&this.command?this.registry.get(this.command)?.label??``:``}_resolvedIcon(){return this.iconName?this.iconName:this.registry&&this.command?this.registry.get(this.command)?.icon??null:null}willUpdate(e){super.willUpdate(e);let n=this._resolvedIcon();n&&!this.iconName?this.setAttribute(`data-icon-section`,``):!n&&!this.iconName&&this.removeAttribute(`data-icon-section`)}updated(e){super.updated(e)}_getShortcut(){if(!this.keyboardManager||!this.command)return null;let e=(this.keyboardManager.getBindings?.()??[]).find(e=>e.commandId===this.command);if(!e)return null;let n=Array.from(e.modifiers??[],e=>({ctrl:`⌃`,shift:`⇧`,alt:`⌥`,meta:`⌘`})[e]??e),r=e.key?.length===1?e.key.toUpperCase():e.key;return[...n,r].join(``)}static{this.styles=[D,tt,_`
    :host {
      display: block;
    }

    .item {
      display: flex;
      padding: 6px var(--space-m);
      font-size: var(--text-m);
    }

    :host(:focus) {
      outline: none;
    }

    .item.disabled {
      opacity: var(--disabled-opacity);
      cursor: default;
    }

    .item.disabled:hover {
      background: transparent;
    }

    .check {
      width: 16px;
      margin-right: var(--space-s);
      font-size: var(--text-m);
      color: var(--accent);
    }

    .icon-slot {
      width: 0;
      overflow: hidden;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    :host([icon-name]) .icon-slot,
    :host([data-icon-section]) .icon-slot {
      width: 1em;
      height: 1em;
      margin-right: var(--space-s);
    }

    .label {
      flex: 1;
    }

    .shortcut {
      margin-left: var(--space-l);
      color: var(--surface-muted-text);
      font-size: var(--text-s);
    }
  `]}render(){let e=this._getShortcut(),n=this._resolvedIcon();return C`
      <div 
        class="item ${this.disabled?`disabled`:``}"
        @click=${this.handleClick}
        tabindex="${this.disabled?-1:0}"
        role="menuitemcheckbox"
        aria-checked="${this.checked}"
      >
        <span class="check">${this.checked?`✓`:``}</span>
        <span class="icon-slot">${n?C`<ixfx-icon name="${n}"></ixfx-icon>`:null}</span>
        <span class="label">${this._resolvedLabel()}</span>
        ${e?C`<span class="shortcut">${e}</span>`:null}
      </div>
    `}};k([A({type:String})],rh.prototype,`command`,void 0),k([A({type:String,attribute:`command-args`})],rh.prototype,`commandArgs`,void 0),k([A({type:String})],rh.prototype,`label`,void 0),k([A({type:Boolean})],rh.prototype,`checked`,void 0),k([A({type:Boolean})],rh.prototype,`disabled`,void 0),k([A({type:String,attribute:`icon-name`})],rh.prototype,`iconName`,void 0),k([A({attribute:!1})],rh.prototype,`registry`,void 0),k([A({attribute:!1})],rh.prototype,`keyboardManager`,void 0),rh=k([O(`ixfx-menu-check-item`)],rh);var ih,ah=class extends E{static{ih=this}constructor(...e){super(...e),this.command=``,this.commandArgs=``,this.label=``,this.disabled=!1,this.iconName=``,this._hasSubmenu=!1,this._anchorName=`--mst-${ih._count++}`,this._hoverTimeout=null,this._hideTimeout=null}static{this._count=0}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this._handleKeydown)}firstUpdated(){this.style.setProperty(`--anchor-name`,this._anchorName)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this._handleKeydown),this._hoverTimeout&&clearTimeout(this._hoverTimeout),this._hideTimeout&&clearTimeout(this._hideTimeout)}_propagateContext(){let e=this._slot?.assignedElements({flatten:!0})??[];for(let n of e)`registry`in n&&(n.registry=this.registry),`keyboardManager`in n&&(n.keyboardManager=this.keyboardManager)}updated(e){(e.has(`registry`)||e.has(`keyboardManager`))&&this._propagateContext()}willUpdate(e){super.willUpdate(e);let n=this._resolvedIcon();n&&!this.iconName?this.setAttribute(`data-icon-section`,``):!n&&!this.iconName&&this.removeAttribute(`data-icon-section`)}_resolvedIcon(){return this.iconName?this.iconName:this.registry&&this.command?this.registry.get(this.command)?.icon??null:null}_handleSlotChange(){this._hasSubmenu=this._slot?.assignedElements().length>0,this._propagateContext()}_showSubmenu(){if(this._submenuPopover?.popover)try{this._submenuPopover.showPopover()}catch{}}_hideSubmenu(){if(this._submenuPopover?.popover)try{this._submenuPopover.hidePopover()}catch{}}_cancelHide(){this._hideTimeout&&=(clearTimeout(this._hideTimeout),null)}_scheduleHide(){this._cancelHide(),this._hideTimeout=window.setTimeout(()=>{this._hideSubmenu(),this._hideTimeout=null},100)}_handleMouseEnter(){this.disabled||!this._hasSubmenu||(this._cancelHide(),this._hoverTimeout&&clearTimeout(this._hoverTimeout),this._hoverTimeout=window.setTimeout(()=>{this._showSubmenu()},150))}_handleMouseLeave(){this._hoverTimeout&&=(clearTimeout(this._hoverTimeout),null),this._scheduleHide()}_handleSubmenuMouseEnter(){this._cancelHide()}_handleSubmenuMouseLeave(){this._scheduleHide()}_handleClick(){this.disabled||!this.command||this.dispatchEvent(new CustomEvent(`command`,{detail:{command:this.command,args:this.commandArgs},bubbles:!0,composed:!0}))}_handleKeydown(e){if(!this.disabled)switch(e.key){case`ArrowRight`:case`Enter`:case` `:e.preventDefault(),e.stopPropagation(),this._hasSubmenu&&(this._showSubmenu(),requestAnimationFrame(()=>{(this._slot?.assignedElements({flatten:!0}).find(e=>e.tagName===`IXFX-MENU-CONTAINER`))?.focusFirst()}));break;case`ArrowLeft`:e.preventDefault(),e.stopPropagation(),this._hideSubmenu(),this._itemEl?.focus();break;case`Escape`:e.preventDefault(),e.stopPropagation(),this._hideSubmenu();break}}static{this.styles=[D,tt,_`
    :host {
      display: block;
    }

    .item {
      anchor-name: var(--anchor-name);
      display: flex;
      padding: 6px var(--space-m);
      font-size: var(--text-m);
    }

    .submenu-popover {
      position: fixed;
      position-anchor: var(--anchor-name);
      inset: auto;
      top: anchor(top);
      left: anchor(right);
      margin: 0;
      padding: 0;
      border: none;
      background: transparent;
      /* UA stylesheet sets overflow:auto on [popover], which clips the box-shadow
         of the inner ixfx-menu-container child. Override to let the shadow render. */
      overflow: visible;
      position-try-fallbacks: flip-inline, flip-block, flip-block flip-inline;
    }

    :host(:focus) {
      outline: none;
    }

    .item.disabled {
      opacity: var(--disabled-opacity);
      cursor: default;
    }

    .item.disabled:hover {
      background: transparent;
    }

    .icon-slot {
      width: 0;
      overflow: hidden;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    :host([icon-name]) .icon-slot,
    :host([data-icon-section]) .icon-slot {
      width: 1em;
      height: 1em;
      margin-right: var(--space-s);
    }

    .label {
      flex: 1;
    }

    .arrow {
      color: var(--surface-muted-text);
      margin-left: var(--space-m);
    }
  `]}render(){let e=this._resolvedIcon();return C`
      <div
        class="item ${this.disabled?`disabled`:``}"
        @click=${this._handleClick}
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
        tabindex="${this.disabled?-1:0}"
        role="menuitem"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span class="icon-slot">${e?C`<ixfx-icon name="${e}"></ixfx-icon>`:null}</span>
        <span class="label"><slot></slot>${this.label}</span>
        <span class="arrow">${this._hasSubmenu?C`<ixfx-icon name="chevron-right"></ixfx-icon>`:T}</span>
      </div>
      <div class="submenu-popover" popover="auto"
        @mouseenter=${this._handleSubmenuMouseEnter}
        @mouseleave=${this._handleSubmenuMouseLeave}
      >
        <slot name="submenu" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}};k([A({type:String})],ah.prototype,`command`,void 0),k([A({type:String,attribute:`command-args`})],ah.prototype,`commandArgs`,void 0),k([A({type:String})],ah.prototype,`label`,void 0),k([A({type:Boolean})],ah.prototype,`disabled`,void 0),k([A({type:String,attribute:`icon-name`})],ah.prototype,`iconName`,void 0),k([A({attribute:!1})],ah.prototype,`registry`,void 0),k([A({attribute:!1})],ah.prototype,`keyboardManager`,void 0),k([j()],ah.prototype,`_hasSubmenu`,void 0),k([M(`slot[name="submenu"]`)],ah.prototype,`_slot`,void 0),k([M(`.submenu-popover`)],ah.prototype,`_submenuPopover`,void 0),k([M(`.item`)],ah.prototype,`_itemEl`,void 0),ah=ih=k([O(`ixfx-menu-sub-trigger`)],ah);var oh=class extends E{static{this.styles=[D,_`
    :host {
      display: block;
      margin: var(--space-xs) 0;
    }

    .separator {
      height: 1px;
      background: var(--surface-4);
    }
  `]}render(){return C`<div class="separator"></div>`}};oh=k([O(`ixfx-menu-separator`)],oh);var sh=class extends E{constructor(...e){super(...e),this.label=``}static{this.styles=[D,_`
    :host {
      display: block;
      padding: 6px var(--space-m) var(--space-xs);
      font-size: var(--text-s);
      font-weight: var(--font-weight-bold);
      text-transform: uppercase;
      color: var(--surface-muted-text);
      letter-spacing: 0.5px;
    }
  `]}render(){return C`<div>${this.label}</div>`}};k([A({type:String})],sh.prototype,`label`,void 0),sh=k([O(`ixfx-menu-header`)],sh);var ch=class extends E{constructor(...e){super(...e),this.value=``,this.label=``,this.disabled=!1,this.groupValue=``,this.iconName=``}handleClick(){this.disabled||this.dispatchEvent(new CustomEvent(`radio-select`,{detail:{value:this.value},bubbles:!0,composed:!0}))}static{this.styles=[D,tt,_`
    :host {
      display: block;
    }

    .item {
      display: flex;
      padding: 6px var(--space-m);
      font-size: var(--text-m);
    }

    :host(:focus) {
      outline: none;
    }

    .item.disabled {
      opacity: var(--disabled-opacity);
      cursor: default;
    }

    .item.disabled:hover {
      background: transparent;
    }

    .radio {
      width: 16px;
      margin-right: var(--space-s);
      font-size: var(--text-m);
      color: var(--accent);
    }

    .icon-slot {
      width: 0;
      overflow: hidden;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    :host([icon-name]) .icon-slot,
    :host([data-icon-section]) .icon-slot {
      width: 1em;
      height: 1em;
      margin-right: var(--space-s);
    }

    .label {
      flex: 1;
    }
  `]}render(){let e=this.groupValue===this.value;return C`
      <div 
        class="item ${this.disabled?`disabled`:``}"
        @click=${this.handleClick}
        tabindex="${this.disabled?-1:0}"
        role="menuitemradio"
        aria-checked="${e}"
      >
        <span class="radio">${e?`●`:``}</span>
        <span class="icon-slot">${this.iconName?C`<ixfx-icon name="${this.iconName}"></ixfx-icon>`:null}</span>
        <span class="label">${this.label}</span>
      </div>
    `}};k([A({type:String})],ch.prototype,`value`,void 0),k([A({type:String})],ch.prototype,`label`,void 0),k([A({type:Boolean})],ch.prototype,`disabled`,void 0),k([A({type:String})],ch.prototype,`groupValue`,void 0),k([A({type:String,attribute:`icon-name`})],ch.prototype,`iconName`,void 0),ch=k([O(`ixfx-menu-radio-item`)],ch);var lh=class extends E{constructor(...e){super(...e),this.name=``,this.value=``,this.slottedElements=[]}handleSlotChange(e){let n=e.target;this.slottedElements=n.assignedElements(),this.updateSlottedValues()}updateSlottedValues(){for(let e of this.slottedElements)e.groupValue=this.value}handleRadioSelect(e){this.value=e.detail.value,this.dispatchEvent(new CustomEvent(`radio-change`,{detail:{name:this.name,value:this.value},bubbles:!0,composed:!0}))}updated(e){e.has(`value`)&&this.updateSlottedValues()}static{this.styles=_`
    :host {
      display: block;
    }

    ::slotted(menu-radio-item) {
      display: block;
    }
  `}render(){return C`
      <slot @slotchange=${this.handleSlotChange} @radio-select=${this.handleRadioSelect}></slot>
    `}};k([A({type:String})],lh.prototype,`name`,void 0),k([A({type:String})],lh.prototype,`value`,void 0),k([j()],lh.prototype,`slottedElements`,void 0),lh=k([O(`ixfx-menu-radio-group`)],lh);var uh=150,dh=class extends E{constructor(...e){super(...e),this.headers=!1,this.interactionMode=`standard`,this.selectionFilter=`leaf`,this.exclusivity=`none`,this._columns=[],this._selectedByDepth=new Map,this._selectedKeys=new Set,this._selectedNodes=new Set,this.#n=new Map,this.#o=-1,this.#s=0,this.#c=0,this.tickled=new $e(this,{getItems:()=>{let e=[];for(let n=0;n<this._columns.length;n++){let r=this._columns[n];if(r)for(let i of r)e.push({id:this.#u(i,n)})}return e}}),this.#A=e=>{let n=this.#E(),r=this._columns[n];if(!r||r.length===0){let e=this._columns[0];e&&e.length>0&&(this.tickled.setTickled(this.#u(e[0],0)),this.requestUpdate());return}switch(e.key){case`ArrowDown`:{e.preventDefault();let i=this.#D(),a=0;i&&i.depth===n&&(a=Math.min(i.index+1,r.length-1));let o=r[a];if(!o)break;if(this.#k(o,n),this.interactionMode===`standard`||this.interactionMode===`vscode`){let s=i?.index??0;if(e.shiftKey){if(!this.#t||this.#t.depth!==n){let e=r[s];e&&(this.#t={key:e.item.key,depth:n,index:s,selectionSnapshot:this.interactionMode===`vscode`?new Set(this._selectedKeys):void 0})}if(this.#t){let e=Math.min(this.#t.index,a),n=Math.max(this.#t.index,a),i=r.slice(e,n+1).map(e=>e.item.key);if(this.interactionMode===`vscode`){let e=this.#t.selectionSnapshot;for(let n of i)e.has(n)?this._selectedKeys.delete(n):this._selectedKeys.add(n)}else this._selectedKeys=new Set(i)}}else this.interactionMode===`standard`?this.#t={key:o.item.key,depth:n,index:a}:this.#t=void 0}this.requestUpdate();break}case`ArrowUp`:{e.preventDefault();let i=this.#D(),a=0;i&&i.depth===n&&(a=Math.max(i.index-1,0));let o=r[a];if(!o)break;if(this.#k(o,n),this.interactionMode===`standard`||this.interactionMode===`vscode`){let s=i?.index??0;if(e.shiftKey){if(!this.#t||this.#t.depth!==n){let e=r[s];e&&(this.#t={key:e.item.key,depth:n,index:s,selectionSnapshot:this.interactionMode===`vscode`?new Set(this._selectedKeys):void 0})}if(this.#t){let e=Math.min(this.#t.index,a),n=Math.max(this.#t.index,a),i=r.slice(e,n+1).map(e=>e.item.key);if(this.interactionMode===`vscode`){let e=this.#t.selectionSnapshot;for(let n of i)e.has(n)?this._selectedKeys.delete(n):this._selectedKeys.add(n)}else this._selectedKeys=new Set(i)}}else this.interactionMode===`standard`?this.#t={key:o.item.key,depth:n,index:a}:this.#t=void 0}this.requestUpdate();break}case`ArrowRight`:{e.preventDefault();let i=this.#D();if(!i){r.length>0&&(this.#k(r[0],n),this.requestUpdate());return}let{node:a,depth:o}=i;if(this.interactionMode===`vscode`||this.interactionMode===`standard`?(this._selectedByDepth.set(o,a),this.#S(a,o)):this.#y(a,o),this._columns.length>o+1){let e=this._columns[o+1];e&&e.length>0&&this.#k(e[0],o+1)}this.requestUpdate();break}case`ArrowLeft`:if(e.preventDefault(),n>0){this.#g(),this._columns=this._columns.slice(0,n);let e=this._columns[n-1];if(e&&e.length>0){let r=this._selectedByDepth.get(n-1),i=r&&e.includes(r)?r:e[0];this.#k(i,n-1)}this.requestUpdate()}break;case`Enter`:{e.preventDefault();let n=this.#D();if(!n)return;let{node:i,depth:a,index:o}=n;if(this.interactionMode===`standard`||this.interactionMode===`vscode`)if(e.shiftKey&&this.#t?.depth===a){let e=Math.min(this.#t.index,o),n=Math.max(this.#t.index,o);this._selectedKeys=new Set(r.slice(e,n+1).map(e=>e.item.key))}else this._selectedKeys.add(i.item.key),this.#t={key:i.item.key,depth:a,index:o};else this._selectedByDepth.set(a,i);this.dispatchEvent(new CustomEvent(`activate`,{detail:{node:i,depth:a},bubbles:!0,composed:!0})),this.requestUpdate();break}case`Escape`:if(e.preventDefault(),this.#g(),this._columns.length>1){this._columns=this._columns.slice(0,-1);let e=Math.max(0,n-1),r=this._columns[e];if(r&&r.length>0){let n=this._selectedByDepth.get(e),i=n&&r.includes(n)?n:r[0];this.#k(i,e)}this.requestUpdate()}break}},this.#j=(e,n)=>{e.preventDefault(),e.stopPropagation(),this.#o=n,this.#s=e.clientX;let r=this.shadowRoot?.querySelectorAll(`.column`)[n];this.#c=r?r.getBoundingClientRect().width:200,window.addEventListener(`pointermove`,this.#M),window.addEventListener(`pointerup`,this.#N)},this.#M=e=>{if(this.#o<0)return;let n=e.clientX-this.#s,r=Math.max(32,this.#c+n);this.#n.set(this.#o,r),this.requestUpdate()},this.#N=()=>{this.#o=-1,window.removeEventListener(`pointermove`,this.#M),window.removeEventListener(`pointerup`,this.#N)}}#e;#t;#n;#r;#i;#a;#o;#s;#c;#l;#u(e,n){return`${n}:${e.item.key}`}#d(){let e=this.tickled.tickledId;if(!e)return;let n=e.indexOf(`:`);if(!(n<0))return Number(e.substring(0,n))}updated(e){if(e.has(`root`)&&this.root&&(this.#g(),this._columns=this.root.children?[this.root.children]:[],this._selectedByDepth.clear(),this._selectedKeys=new Set,this._selectedNodes.clear(),this.#e=void 0,this.#t=void 0,this.tickled.clearTickled()),e.has(`model`)){this.#l?.(),this.#l=void 0;let e=this.model;e&&(this.root=e.root,this.#l=e._subscribe(e=>{if(e.type===`root`)this.root=e.root,this.requestUpdate();else if(e.type===`invalidate`){for(let n=0;n<this._columns.length-1;n++)if(this._columns[n]?.some(n=>n.item.key===e.key)){this._columns=this._columns.slice(0,n+1),this.requestUpdate();break}}}))}if(this.#r?.children!==void 0&&this._loadingDepth!==void 0){let e=this._loadingDepth,n=this.#r.children;this.#r=void 0,this.#i=void 0,this._loadingDepth=void 0;let r=this._columns.slice(0,e);n.length>0&&r.push(n),this._columns=r}let n=e.get(`_columns`),r=e.has(`_columns`)&&(n?.length??0)<this._columns.length,i=e.has(`_loadingDepth`)&&this._loadingDepth!==void 0;if(r||i){let e=this.shadowRoot?.querySelector(`#container`);e?.scrollTo({left:e.scrollWidth,behavior:`smooth`})}}disconnectedCallback(){super.disconnectedCallback(),this.#l?.(),this.#l=void 0}getConfig(){let e={};for(let[n,r]of this.#n)e[n]=r;return{columnWidths:e}}setConfig(e){this.#n.clear();for(let[n,r]of Object.entries(e.columnWidths))this.#n.set(Number(n),r);this.requestUpdate()}get selectedKeys(){return this._selectedKeys}set selectedKeys(e){this._selectedKeys=new Set(e),this.requestUpdate()}get selectedNode(){return this.#e}set selectedNode(e){this.#e=e,e&&(this.interactionMode===`implicit`||this.interactionMode===`standard`)&&(this._selectedKeys=new Set([e.item.key])),this.requestUpdate()}get selectedNodes(){return this._selectedNodes}select(e){if(!this.#m(e))return;let n=new Set(this._selectedNodes);this._selectedNodes.add(e),this._selectedKeys.add(e.item.key),this.#e=e,this.#h(n),this.requestUpdate()}deselect(e){if(!this._selectedNodes.has(e))return;let n=new Set(this._selectedNodes);this._selectedNodes.delete(e),this._selectedKeys.delete(e.item.key),this.#e===e&&(this.#e=[...this._selectedNodes].at(-1)),this.#h(n),this.requestUpdate()}clearSelection(){let e=new Set(this._selectedNodes);this._selectedKeys=new Set,this._selectedNodes.clear(),this.#e=void 0,e.size>0&&this.#h(e),this.requestUpdate()}setSelected(e,n){this.interactionMode===`checked`?this.#T(e,n):n?(this._selectedKeys.add(e.item.key),this._selectedNodes.add(e)):(this._selectedKeys.delete(e.item.key),this._selectedNodes.delete(e)),this.requestUpdate()}getSelected(){let e=[];for(let n of this._columns)for(let r of n)this._selectedKeys.has(r.item.key)&&e.push(r);return e}navigateTo(e){if(!this.root?.children)return!1;this.#g(),this._selectedByDepth.clear(),this.tickled.clearTickled();let n=[this.root.children],r=this.root.children,i=!0,a,o=0;for(let s=0;s<e.length;s++){let c=r.findIndex(n=>n.item.key===e[s]);if(c<0){i=!1;break}let l=r[c];if(this._selectedByDepth.set(s,l),a=l,o=s,l.item.isLeaf||!l.children||l.children.length===0){s<e.length-1&&(i=!1);break}n.push(l.children),r=l.children}if(this._columns=n,a&&this.tickled.setTickled(this.#u(a,o)),this.interactionMode!==`implicit`&&this.interactionMode!==`manual`){let n=e.at(-1);n&&(this._selectedKeys=new Set([n]))}return this.requestUpdate(),this.#O(),i}navigateToNode(e){if(!this.root?.children)return!1;let n=this.#f(this.root.children,e);return n?this.navigateTo(n):!1}getNodes(){if(!this.root?.children)return[];let e=[],n=(r,i)=>{if(e.push({node:r,depth:i}),r.children)for(let e of r.children)n(e,i+1)};for(let e of this.root.children)n(e,0);return e}#f(e,n,r=[]){for(let i of e){let e=[...r,i.item.key];if(n(i))return e;if(i.children?.length){let r=this.#f(i.children,n,e);if(r)return r}}}renderColumnContent(e,n){return console.warn(`ixfx-miller-base: renderColumnContent not overridden. depth=${n}, nodes=${e.length}`),T}_handleItemClick(e,n,r){this.#y(e,n,r)}_handleCheckboxClick(e,n,r){e.stopPropagation(),this.#C(n)}_handleItemDblClick(e,n,r){this.dispatchEvent(new CustomEvent(`item-dblclick`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}_handleItemRightClick(e,n,r){this.dispatchEvent(new CustomEvent(`item-rightclick`,{detail:{node:e,depth:n,mouseEvent:r},bubbles:!0,composed:!0}))}_handleHeaderRightClick(e,n){let r=this.#P(n),i=this.#_(n);this.dispatchEvent(new CustomEvent(`header-rightclick`,{detail:{depth:n,label:r,path:i,mouseEvent:e},bubbles:!0,composed:!0}))}_isSelected(e,n){return this.interactionMode===`implicit`?this._selectedByDepth.get(n)===e:this._selectedKeys.has(e.item.key)}#p(e,n){let r=this._columns[n+1];return r!==void 0&&e.children===r}_isOpen(e,n){return this.#p(e,n)}getItemState(e,n){let r=this._columns[n]?.find(n=>n.item.key===e);if(r)return{selected:this._isSelected(r,n),open:this.#p(r,n),focused:this._isFocused(r,n),isLeaf:r.item.isLeaf??!1}}#m(e){return this.selectionFilter===`none`?!1:this.selectionFilter===`leaf`?e.item.isLeaf!==!1:this.selectionFilter===`branch`?e.item.isLeaf===!1||e.children!==void 0&&e.children.length>0:!0}#h(e){let n={selected:new Set(this._selectedNodes),previous:e};this.dispatchEvent(new CustomEvent(`select`,{detail:n,bubbles:!0,composed:!0}))}#g(){if(this.#a!==void 0&&(clearTimeout(this.#a),this.#a=void 0),this.#i){let e=this.#r,n=this._loadingDepth;this.#i.abort(),this.#i=void 0,this.#r=void 0,this._loadingDepth=void 0,e&&n!==void 0&&this.dispatchEvent(new CustomEvent(`collapse`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}}#_(e){let n=[];this.root&&n.push(this.root);for(let r=0;r<e;r++){let e=this._selectedByDepth.get(r);e&&n.push(e)}return n}#v(e){let n={depth:e,label:this.#P(e),path:this.#_(e)};this.dispatchEvent(new CustomEvent(`header-click`,{detail:n,bubbles:!0,composed:!0}))}#y(e,n,r){switch(this._loadingDepth!==void 0&&this._loadingDepth>n&&this.#g(),this.tickled.setTickled(this.#u(e,n)),this.dispatchEvent(new CustomEvent(`item-click`,{detail:{node:e,depth:n},bubbles:!0,composed:!0})),this.interactionMode){case`implicit`:this.#b(e,n);break;case`standard`:this.#x(e,n,r);break;case`vscode`:this.#x(e,n,r);break;case`manual`:break;case`checked`:this.#S(e,n);break}}#b(e,n){let r=new Set(this._selectedNodes);this._selectedByDepth.set(n,e),this.#e=e,this._selectedKeys=new Set([e.item.key]),this._selectedNodes.clear(),this._selectedNodes.add(e),this.#S(e,n),r.has(e)||this.#h(r)}#x(e,n,r){let i=this._columns[n],a=i?i.indexOf(e):-1,o=r?r.metaKey||r.ctrlKey:!1,s=r?r.shiftKey:!1;if(o){this._selectedKeys.has(e.item.key)?(this._selectedKeys.delete(e.item.key),this._selectedNodes.delete(e)):(this._selectedKeys.add(e.item.key),this._selectedNodes.add(e)),this.#t=a>=0?{key:e.item.key,depth:n,index:a}:this.#t,this.requestUpdate();return}if(s&&this.#t&&this.#t.depth===n&&i){let e=Math.min(this.#t.index,a),n=Math.max(this.#t.index,a),r=i.slice(e,n+1);this._selectedKeys=new Set(r.map(e=>e.item.key)),this._selectedNodes=new Set(r),this.requestUpdate();return}let c=new Set(this._selectedNodes);this._selectedKeys=new Set([e.item.key]),this._selectedNodes=new Set([e]),this.#t=a>=0?{key:e.item.key,depth:n,index:a}:void 0,this._selectedByDepth.set(n,e),this.#e=e,this.#S(e,n),(!c.has(e)||c.size!==1)&&this.#h(c)}#S(e,n){if(e.item.isLeaf){this._columns=this._columns.slice(0,n+1),this.requestUpdate();return}if(e.children===void 0){this._columns=this._columns.slice(0,n+1),this._loadingDepth=n+1,this.#r=e;let r=new AbortController;this.#i=r,this.dispatchEvent(new CustomEvent(`expand`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}));let i=i=>{if(r.signal.aborted)return;e.children=i,this.#r=void 0,this.#i=void 0,this._loadingDepth=void 0;let a=this._columns.slice(0,n+1);i.length>0&&a.push(i),this._columns=a},a=n=>{n.name!==`AbortError`&&console.error(n),e.children=[],this.#r=void 0,this.#i=void 0,this._loadingDepth=void 0,this.requestUpdate()};if(this.model||this.loadChildren)this.#a!==void 0&&clearTimeout(this.#a),this.#a=setTimeout(()=>{this.#a=void 0,this.#r===e&&(this.model?this.model.getChildren(e,n,r.signal):Yp(this.loadChildren({node:e,depth:n},r.signal),r.signal)).then(e=>i([...e])).catch(a)},uh);else{this._loadingDepth=void 0,this.#r=void 0,this.#i=void 0;let e=this._columns.slice(0,n+1);e.push([]),this._columns=e}}else{let r=this._columns.slice(0,n+1);r.push(e.children),this._columns=r,this.dispatchEvent(new CustomEvent(`expand`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}}#C(e){let n=this._selectedKeys.has(e.item.key);(e.children?.length?this.#w(e):n)?this.#T(e,!1):this.#T(e,!0),this.requestUpdate()}#w(e){return this._selectedKeys.has(e.item.key)?e.children?.length?e.children.every(e=>this.#w(e)):!0:!1}#T(e,n){if(n?(this._selectedKeys.add(e.item.key),this._selectedNodes.add(e)):(this._selectedKeys.delete(e.item.key),this._selectedNodes.delete(e)),e.children)for(let r of e.children)this.#T(r,n)}#E(){return this.#d()??0}#D(){let e=this.tickled.tickledId;if(!e)return;let n=e.indexOf(`:`);if(n<0)return;let r=Number(e.substring(0,n)),i=e.substring(n+1),a=this._columns[r];if(!a)return;let o=a.findIndex(e=>e.item.key===i);if(!(o<0))return{node:a[o],depth:r,index:o}}#O(){requestAnimationFrame(()=>{let e=this.#D();if(!e)return;let n=this.shadowRoot?.querySelectorAll(`.column`)[e.depth]?.querySelector(`.column-content`);n&&n.querySelectorAll(`.item`)[e.index]?.scrollIntoView({block:`nearest`,behavior:`smooth`})})}#k(e,n){this.tickled.setTickled(this.#u(e,n)),this.dispatchEvent(new CustomEvent(`tickle`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}#A;#j;#M;#N;#P(e){if(e===0)return this.root?.item.label??``;let n=this._selectedByDepth.get(e-1);if(n)return n.item.label;let r=this._columns[e-1],i=this._columns[e];if(r&&i){let e=r.find(e=>e.children===i);if(e)return e.item.label}return``}#F(e){let n=this.#n.get(e);return n===void 0?`width:max-content`:`width:${n}px;flex-shrink:0`}#I(e,n){return this.tickled.isTickled(this.#u(e,n))}renderLoadingIndicator(){return C`<div class="loading-spinner"></div>`}#L(){let e=this._loadingDepth;return C`
      <div class="column loading-column" style=${this.#F(e)}>
        ${this.headers?C`
          <div class="column-header">${this.#P(e)}</div>
        `:T}
        <div class="column-content loading-content">
          ${this.renderLoadingIndicator()}
        </div>
      </div>
    `}render(){return C`
      <div id="container" @keydown=${this.#A} tabindex="0">
        ${this._columns.map((e,n)=>{let r=this.filterPredicate?e.filter(e=>this.filterPredicate(e,n)):e;return C`
          <div class="column" style=${this.#F(n)}>
            ${this.headers?C`
              <div class="column-header"
                @click=${()=>this.#v(n)}
                @contextmenu=${e=>this._handleHeaderRightClick(e,n)}>
                ${this.#P(n)}
              </div>
            `:T}
            <div class="column-content">
              ${this.renderColumnContent(r,n)}
            </div>
            <div class="resize-handle"
              @pointerdown=${e=>this.#j(e,n)}>
            </div>
          </div>
        `})}
        ${this._loadingDepth===void 0?T:this.#L()}
      </div>
    `}_getFocusedIndex(e){let n=this.#D();return n&&n.depth===e?n.index:0}_isFocused(e,n){return this.#I(e,n)}_handleItemPointerEnter(e,n){this.tickled.handlePointerEnter(this.#u(e,n)),this.dispatchEvent(new CustomEvent(`tickle`,{detail:{node:e,depth:n},bubbles:!0,composed:!0}))}_handleColumnPointerLeave(){this.tickled.handlePointerLeave(new PointerEvent(`pointerleave`))}static{this.styles=[D,et,_`
    :host {
      --column-bg: var(--surface-3);
      --column-header-bg: var(--surface-2);
      --column-header-text: var(--surface-muted-text);
      --column-separator: var(--surface-5);
      --column-resize-handle: var(--surface-5);
      --column-resize-handle-hover: var(--accent);
      --column-resize-width: 4px;
      --item-hover-bg: var(--item-bg-tickled);
      --item-open-bg: color-mix(in oklch, var(--accent, oklch(60% 0.15 140)) 15%, transparent);
      --item-selected-bg: var(--item-bg-selected);
      --item-selected-text: var(--item-text-selected);

      display: block;
      overflow: hidden;
      position: relative;
      box-sizing: border-box;
    }

    #container {
      display: flex;
      height: 100%;
      overflow-x: auto;
      outline: none;
    }

    .column {
      display: flex;
      flex-direction: column;
      position: relative;
      background: var(--column-bg);
      border-right: 1px solid var(--column-separator);
      flex-shrink: 0;
    }

    .column-header {
      background: var(--column-header-bg);
      color: var(--column-header-text);
      font-size: var(--text-s, 11px);
      font-family: var(--font-family, system-ui, sans-serif);
      font-weight: var(--font-weight-bold, 600);
      padding: var(--space-xs, 3px) var(--space-m, 8px);
      border-bottom: 1px solid var(--column-separator);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
      cursor: pointer;
      user-select: none;
      transition: background var(--transition, 0.15s ease-out),
                  color var(--transition, 0.15s ease-out);
    }

    .column-header:hover {
      background: var(--item-hover-bg);
      color: var(--surface-2-text, #fff);
    }

    .column-content {
      flex: 1;
      overflow-y: auto;
      overflow-x: visible;
    }

    .resize-handle {
      position: absolute;
      top: 0;
      right: 0;
      width: var(--column-resize-width);
      height: 100%;
      background: var(--column-resize-handle);
      cursor: ew-resize;
      z-index: 1;
      transition: background var(--transition, 0.15s ease-out);
    }

    .resize-handle:hover {
      background: var(--column-resize-handle-hover);
    }

    .loading-column {
      min-width: 60px;
    }

    .loading-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loading-spinner {
      width: 22px;
      height: 22px;
      border: 2px solid var(--column-separator);
      border-top-color: var(--accent, oklch(60% 0.15 140));
      border-radius: 50%;
      animation: miller-spin 0.7s linear infinite;
    }

    @keyframes miller-spin {
      to { transform: rotate(360deg); }
    }

    ::highlight(incr-search-highlight) {
      background: var(--search-highlight-bg, var(--accent));
      color: var(--search-highlight-color, var(--accent-text, #fff));
      border-radius: 2px;
      padding: 0 1px;
    }
  `]}};k([A({type:Object})],dh.prototype,`root`,void 0),k([A({attribute:!1})],dh.prototype,`model`,void 0),k([A({type:Boolean})],dh.prototype,`headers`,void 0),k([A({type:String})],dh.prototype,`interactionMode`,void 0),k([A({reflect:!0,attribute:`selection-filter`})],dh.prototype,`selectionFilter`,void 0),k([A({reflect:!0,attribute:`exclusivity`})],dh.prototype,`exclusivity`,void 0),k([A({type:Object})],dh.prototype,`loadChildren`,void 0),k([A({attribute:!1})],dh.prototype,`filterPredicate`,void 0),k([j()],dh.prototype,`_columns`,void 0),k([j()],dh.prototype,`_loadingDepth`,void 0),k([j()],dh.prototype,`_selectedNodes`,void 0),dh=k([O(`ixfx-miller-base`)],dh);function fh(e,n){if(e.item.isLeaf||!e.children?.length)return n.has(e.item.key)?`checked`:`unchecked`;let r=e.children.map(e=>fh(e,n)),i=r.every(e=>e===`checked`),a=r.every(e=>e===`unchecked`);return i?`checked`:a?`unchecked`:`indeterminate`}var ph=class extends dh{renderColumnContent(e,n){let r=e.some(e=>!!e.item.icon),i=this.interactionMode===`checked`;return C`
      <ul
        class="item-list ${r?`has-icons`:``} ${i?`checked-mode`:``}"
        role="listbox"
        aria-label="Column ${n}"
        @pointerleave=${()=>this._handleColumnPointerLeave()}
      >
        ${e.map(e=>this.#e(e,n))}
      </ul>
    `}#e(e,n){let r=this._isSelected(e,n),i=this._isFocused(e,n),a=this._isOpen(e,n),o=e.item.isLeaf!==!0,s=e.item.icon,c=e.item.tooltip,l=this.interactionMode===`checked`,u=T;if(l){let r=fh(e,this._selectedKeys);u=C`
        <input
          type="checkbox"
          class="item-checkbox"
          .checked=${r===`checked`}
          .indeterminate=${r===`indeterminate`}
          aria-label="Select ${e.item.label}"
          @click=${r=>this._handleCheckboxClick(r,e,n)}
        />
      `}return C`
      <li
        class="item ${r?`selected`:``} ${a?`open`:``} ${i?`tickled`:``} ${o?`branch`:`leaf`}"
        role="option"
        aria-selected=${r}
        @click=${r=>this._handleItemClick(e,n,r)}
        @dblclick=${r=>this._handleItemDblClick(e,n,r)}
        @contextmenu=${r=>this._handleItemRightClick(e,n,r)}
        @pointerenter=${()=>this._handleItemPointerEnter(e,n)}
      >
        ${u}
        ${s?C`<ixfx-icon class="item-icon" name="${s}"></ixfx-icon>`:T}
        <span class="label">${e.item.label}</span>
        ${c?C`<ixfx-tooltip class="item-tooltip" anchor="--tooltip-miller-${n}-${e.item.key}" .value=${c}></ixfx-tooltip>`:T}
        ${o?C`<span class="caret" aria-hidden="true">›</span>`:T}
      </li>
    `}static{this.styles=[D,...dh.styles,tt,_`
      .item-list {
        list-style: none;
        margin: 0;
        padding: var(--space-xs, 3px) 0;
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .item.selected {
        background: var(--item-selected-bg);
        color: var(--item-selected-text, #fff);
        outline: 2px dashed var(--surface-3, #333);
        outline-offset: -2px;
      }

      /* Item is on the currently open path (ancestor of deepest column) */
      .item.open:not(.selected) {
        background: var(--item-open-bg);
      }

      .item-icon {
        flex-shrink: 0;
        width: var(--icon-size, 1em);
        height: var(--icon-size, 1em);
        margin-right: var(--icon-spacing, 0.3em);
      }

      /* Align text on icon-less rows with icon rows in a mixed list */
      .item-list.has-icons .item:not(:has(.item-icon)) .label {
        margin-left: calc(var(--icon-size, 1em) + var(--icon-spacing, 0.3em));
      }

      .label {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .item-tooltip {
        position: absolute;
      }

      .caret {
        flex-shrink: 0;
        margin-left: var(--space-s, 4px);
        color: var(--surface-muted-text);
        font-size: var(--text-l, 13px);
      }

      .item.selected .caret {
        color: var(--item-selected-text, #fff);
      }

      /* ---- checked mode ---- */

      .item-checkbox {
        flex-shrink: 0;
        margin-right: var(--space-xs, 3px);
        cursor: pointer;
        accent-color: var(--accent);
        /* Prevent the checkbox click from also triggering item styles */
        pointer-events: auto;
      }

      /* In checked mode the item row itself is not highlighted on selection —
         the checkbox communicates state instead. */
      .item-list.checked-mode .item.selected {
        background: transparent;
        color: var(--surface-3-text, #fff);
      }

      
    `]}};ph=k([O(`ixfx-miller-list`)],ph);var mh=Math.PI/180,hh=180/Math.PI;function gh(e,n){let r=n*50;return{x:50+Math.cos(e)*r,y:50+Math.sin(e)*r}}function _h(e,n){let r=e-50,i=n-50,a=Math.sqrt(r*r+i*i),o=Math.min(1,a/50);return{angleRad:(Math.atan2(i,r)%(2*Math.PI)+2*Math.PI)%(2*Math.PI),radius:o}}var vh=e=>Math.max(0,Math.min(1,e));function yh(e,n,r,i){if(r<=0||!i)return e;let a=360/r,o=(e%360+360)%360,s=Math.round(o/a)*a,c=o%a;if(Math.abs(c)<1e-4||Math.abs(a-c)<1e-4){let r=e-n;return r>180&&(r-=360),r<-180&&(r+=360),(s+(r>=0?1:-1)*a+360)%360}return s}function bh(e,n,r,i){if(r<=0||!i)return e;let a=1/r,o=Math.round(e/a)*a,s=e%a;return Math.abs(s)<1e-4||Math.abs(a-s)<1e-4?Math.max(0,Math.min(1,o+(e>=n?1:-1)*a)):o}function xh(e,n){if(!n||n<=1)return e;let r=360/n,i=(e%360+360)%360;return Math.round(i/r)*r}function Sh(e,n){if(!n||n<=1)return e;let r=1/n;return Math.round(e/r)*r}var Ch=class extends E{constructor(...e){super(...e),this.angle=0,this.radius=.5,this.rings=0,this.rays=0,this.showRay=!1,this.showOrigin=!1,this.hideCursor=!1,this.snapValue=!1,this.disabled=!1,this._dragging=!1,this._dragStartAngle=0,this._dragStartRadius=0,this._pressedKeys=new Set,this._prevAngle=0,this._prevRadius=0,this._onPointerDown=e=>{e.preventDefault(),this.renderRoot.querySelector(`svg`)?.focus();let n=this.renderRoot.querySelector(`.polar-pad-area`);n&&n.setPointerCapture(e.pointerId),this._dragging=!0,this._dragStartAngle=this.angle,this._dragStartRadius=this.radius,this.setAttribute(`dragging`,``),this._updateFromPointer(e),globalThis.addEventListener(`pointermove`,this._onPointerMove),globalThis.addEventListener(`pointerup`,this._onPointerUp)},this._onPointerMove=e=>{this._dragging&&(e.preventDefault(),this._updateFromPointer(e))},this._onPointerUp=()=>{let e=this.angle!==this._dragStartAngle||this.radius!==this._dragStartRadius;this._dragging=!1,this.removeAttribute(`dragging`),globalThis.removeEventListener(`pointermove`,this._onPointerMove),globalThis.removeEventListener(`pointerup`,this._onPointerUp),e&&this.dispatchEvent(new CustomEvent(`change`,{detail:{angle:this.angle,radius:this.radius},bubbles:!0,composed:!0}))},this._onKeyDown=e=>{this.disabled||[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key)&&(e.preventDefault(),this._pressedKeys.add(e.key),this._handleKeyboardMove(e.shiftKey))},this._onKeyUp=e=>{this._pressedKeys.delete(e.key)},this._handleKeyboardMove=e=>{let n=e?10:1,r=this.stopsAngle??this.stops,i=this.stopsRadius??this.stops,a;a=r&&r>1?360/r:360/(this.rays>0&&this.snapValue?this.rays:20);let o;o=i&&i>1?1/i:1/20,a/=n,o/=n,this._prevAngle=this.angle,this._prevRadius=this.radius;let s=this.angle,c=this.radius;this._pressedKeys.has(`ArrowLeft`)&&(s-=a),this._pressedKeys.has(`ArrowRight`)&&(s+=a),this._pressedKeys.has(`ArrowUp`)&&(c=Math.min(1,c+o)),this._pressedKeys.has(`ArrowDown`)&&(c=Math.max(0,c-o)),s=(s%360+360)%360;let l=yh(s,this._prevAngle,this.rays,this.snapValue),u=bh(c,this._prevRadius,this.rings,this.snapValue);l=xh(l,r),u=Sh(u,i),(l!==this.angle||u!==this.radius)&&(this.angle=l,this.radius=u,this.dispatchEvent(new CustomEvent(`input`,{detail:{angle:this.angle,radius:this.radius},bubbles:!0,composed:!0})))},this._uid=Math.random().toString(36).slice(2,8)}static{this.styles=[zn,D,_`
    :host {
      display: block;
      width: 200px;
      height: 200px;
      touch-action: none;
      user-select: none;
      container-type: size;

      /* Pad background */
      --pad-background: var(--surface-4, oklch(22% 0.02 240));
      --pad-border-color: var(--surface-6, oklch(35% 0.02 240));
      --pad-border-width: 1px;

      /* Marker */
      --marker-size: 10cqb;
      --marker-color: var(--accent, oklch(60% 0.15 140));
      --marker-opacity: 1;
      --marker-stroke: none;
      --marker-stroke-width: 0;

      /* Origin dot */
      --origin-size: 6cqb;
      --origin-color: var(--accent, oklch(60% 0.15 140));
      --origin-opacity: 1;

      /* Ray line */
      --ray-color: var(--surface-6, oklch(35% 0.02 240));
      --ray-width: 2px;
      --ray-opacity: 1;
      --ray-dash: none;

      /* Concentric rings */
      --ring-color: var(--surface-6, oklch(35% 0.02 240));
      --ring-width: 1px;
      --ring-opacity: 1;
      --ring-dash: none;

      /* Radial spokes */
      --spoke-color: var(--surface-6, oklch(35% 0.02 240));
      --spoke-width: 1px;
      --spoke-opacity: 1;
      --spoke-dash: none;
    }

    :host([disabled]) {
      opacity: var(--prominence-disabled-opacity);
      pointer-events: none;
    }

    .polar-pad-area {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: var(--cursor-display, crosshair);
    }

    :host([dragging]) .polar-pad-area {
      cursor: none;
    }

    svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .pad-background {
      /* Used on the foreignObject div — accepts any CSS background value */
      width: 100%;
      height: 100%;
      background: var(--pad-background);
    }

    .pad-border {
      fill: none;
      stroke: var(--pad-border-color);
      stroke-width: var(--pad-border-width);
      vector-effect: non-scaling-stroke;
    }

    .ring {
      fill: none;
      stroke: var(--ring-color);
      stroke-width: var(--ring-width);
      stroke-dasharray: var(--ring-dash);
      opacity: var(--ring-opacity);
      vector-effect: non-scaling-stroke;
    }

    .spoke {
      fill: none;
      stroke: var(--spoke-color);
      stroke-width: var(--spoke-width);
      stroke-dasharray: var(--spoke-dash);
      opacity: var(--spoke-opacity);
      vector-effect: non-scaling-stroke;
    }

    .ray {
      fill: none;
      stroke: var(--ray-color);
      stroke-width: var(--ray-width);
      stroke-dasharray: var(--ray-dash);
      opacity: var(--ray-opacity);
      vector-effect: non-scaling-stroke;
    }

    .origin-dot {
      fill: var(--origin-color);
      opacity: var(--origin-opacity);
    }

    .marker {
      fill: var(--marker-color);
      opacity: var(--marker-opacity);
      stroke: var(--marker-stroke);
      stroke-width: var(--marker-stroke-width);
      cursor: grab;
    }

    .marker:active {
      cursor: grabbing;
    }

    svg:focus {
      outline: none;
    }

    svg:focus-visible .pad-border {
      stroke: var(--accent);
      stroke-width: 3;
    }
  `]}_updateFromPointer(e){let n=this.renderRoot.querySelector(`.polar-pad-area`);if(!n)return;let r=n.getBoundingClientRect(),i=Math.min(r.width,r.height),{angleRad:a,radius:o}=_h((e.clientX-r.left)/i*100,(e.clientY-r.top)/i*100),s=a*hh,c=vh(o);this._prevAngle=this.angle,this._prevRadius=this.radius;let l=yh(s,this._prevAngle,this.rays,this.snapValue),u=bh(c,this._prevRadius,this.rings,this.snapValue),d=this.stopsAngle??this.stops,f=this.stopsRadius??this.stops;this.angle=xh(l,d),this.radius=Sh(u,f),this._prevAngle=s,this._prevRadius=c,this.dispatchEvent(new CustomEvent(`input`,{detail:{angle:this.angle,radius:this.radius},bubbles:!0,composed:!0}))}_setCssVars(){this.style.setProperty(`--angle-deg`,`${this.angle}`),this.style.setProperty(`--angle-rad`,`${this.angle*mh}`),this.style.setProperty(`--radius-pct`,`${vh(this.radius)*100}`)}updated(e){super.updated(e),this._setCssVars()}disconnectedCallback(){super.disconnectedCallback(),this._onPointerUp(),this._pressedKeys.clear()}_renderRings(){if(this.rings<=0)return``;let e=[];for(let n=1;n<=this.rings;n++){let r=n/this.rings*50;e.push(w`<circle class="ring" cx="50" cy="50" r="${r}" />`)}return e}_renderSpokes(){if(this.rays<=0)return``;let e=[];for(let n=0;n<this.rays;n++){let r=n/this.rays*2*Math.PI,i=Math.cos(r),a=Math.sin(r),o=50+i*50,s=50+a*50,c=50-i*50,l=50-a*50;e.push(w`<line class="spoke" x1="${o}" y1="${s}" x2="${c}" y2="${l}" />`)}return e}_renderRay(e,n){return this.showRay?w`<line class="ray" x1="50" y1="50" x2="${e}" y2="${n}" />`:``}_renderOrigin(){return this.showOrigin?w`<circle class="origin-dot" cx="50" cy="50" r="3" style="r: calc(var(--origin-size) / 2)" />`:``}render(){let{x:e,y:n}=gh(this.angle*mh,vh(this.radius));return C`
      <div class="polar-pad-area"
           @pointerdown=${this._onPointerDown}
           @keydown=${this._onKeyDown}
           @keyup=${this._onKeyUp}
           @blur=${()=>this._pressedKeys.clear()}>
        <svg viewBox="0 0 100 100"
             preserveAspectRatio="xMidYMid meet"
             tabindex=${this.disabled?-1:0}>
          <defs>
            <clipPath id="circle-clip-${this._uid}">
              <circle cx="50" cy="50" r="50" />
            </clipPath>
          </defs>

          <!-- clipped group: background + rings + spokes -->
          <g clip-path="url(#circle-clip-${this._uid})">
            <foreignObject x="0" y="0" width="100" height="100">
              <div class="pad-background" xmlns="http://www.w3.org/1999/xhtml"></div>
            </foreignObject>
            ${this._renderRings()}
            ${this._renderSpokes()}
          </g>

          <!-- border circle (on top of clip, non-scaling stroke) -->
          <circle class="pad-border" cx="50" cy="50" r="49.75" />

          <!-- ray + origin + marker -->
          ${this._renderRay(e,n)}
          ${this._renderOrigin()}
          <circle
            class="marker"
            cx="${e}"
            cy="${n}"
            r="5"
            style="r: calc(var(--marker-size) / 2)"
          />
        </svg>
      </div>
    `}};k([A({type:Number})],Ch.prototype,`angle`,void 0),k([A({type:Number})],Ch.prototype,`radius`,void 0),k([A({type:Number})],Ch.prototype,`rings`,void 0),k([A({type:Number})],Ch.prototype,`rays`,void 0),k([A({type:Boolean,reflect:!0,attribute:`show-ray`})],Ch.prototype,`showRay`,void 0),k([A({type:Boolean,reflect:!0,attribute:`show-origin`})],Ch.prototype,`showOrigin`,void 0),k([A({type:Boolean,reflect:!0,attribute:`hide-cursor`})],Ch.prototype,`hideCursor`,void 0),k([A({type:Boolean,attribute:`snap-value`,reflect:!0})],Ch.prototype,`snapValue`,void 0),k([A({type:Boolean,reflect:!0})],Ch.prototype,`disabled`,void 0),k([A({type:Number})],Ch.prototype,`stops`,void 0),k([A({type:Number,attribute:`stops-angle`})],Ch.prototype,`stopsAngle`,void 0),k([A({type:Number,attribute:`stops-radius`})],Ch.prototype,`stopsRadius`,void 0),Ch=k([O(`ixfx-polar-pad`)],Ch);var wh=_`

  output.tooltip {
    user-select: none;
    position: fixed;
    position-anchor: var(--anchor-id);
  }

  .tooltip-type-number {
    font-family: monospace;
  }

  .tooltip-orientation-top { 
    position-area: block-start;
    margin-block: -100%;
  }

  .tooltip-orientation-bottom { 
    position-area: block-end;
    margin-block: 10px;
  }

  .tooltip-orientation-right { 
    position-area: inline-end;
    margin-inline: 10px;
  }

  .tooltip-orientation-left { 
    position-area: inline-start;
    margin-inline: -100%;
  }

  ixfx-tooltip {
    --tooltip-background: var(--surface-5);
    --tooltip-color: var(--surface-5-text);
    opacity: 0;
    transition: opacity .2s ease, translate .2s ease;
    color: var(--tooltip-color);
    pointer-events: none;
    font-variant-numeric: tabular-nums;

    button:is(:hover, :focus-visible) + & {
      opacity:1;
    }

    input:is(:hover, :focus-visible) + & {
      opacity:1;
    }
  }
  
  .tooltip-style-bubble {
    padding-block: .5ex;
    padding-inline: 1ex;
 
    /* tether arrow styles */
    /* https://www.smashingmagazine.com/2024/01/css-border-image-property/ */
    --b: 1ex; 
    --h: 1ex; 

    border-image: fill 0//var(--h) conic-gradient(var(--tooltip-background) 0 0); 
    
    &.tooltip-orientation-top {
      margin-block-end: 1ex;
      clip-path: 
        polygon(0 100%,0 0,100% 0,100% 100%,
          calc(50% + var(--b)/2) 100%,
          50% calc(100% + var(--h)),
          calc(50% - var(--b)/2) 100%);
    }
    
    &.tooltip-orientation-right {
      margin-inline-start: 1ex;
      clip-path: 
        polygon(0 100%,100% 100%,100% 0,0 0,
          0 calc(50% - var(--b)/2),
          calc(-1*var(--h)) 50%,
          0 calc(50% + var(--b)/2));
    }
    
    &.tooltip-orientation-bottom {
      margin-block-start: 1ex;
      clip-path: 
        polygon(0 0,100% 0,100% 100%,0 100%,
          calc(50% - var(--b)/2) 0,
          50% calc(-1*var(--h)),
          calc(50% + var(--b)/2) 0);
    }
    
    &.tooltip-orientation-left {
      margin-inline-end: 1ex;
      clip-path: 
        polygon(0 0,100% 0,100% 100%,0 100%,
          100% calc(50% - var(--b)/2),
          calc(100% + var(--h)) 50%,
          100% calc(50% + var(--b)/2));
    }
  } 
  `;function Th(e,n,r){return r===n?0:(e-n)/(r-n)}var Eh=class extends E{constructor(...e){super(...e),this.min=0,this.max=1,this.value=0,this.step=.01,this.orientation=`horizontal`,this.swipeable=!1,this.tooltip=!1,this.tooltipOrientation=`top`,this._swipeModified=!1,this._onPointerDown=e=>{this.swipeable&&(e.preventDefault(),this._swipeModified=!1,this._applySwipeValue(this._valueFromPointer(e)),window.addEventListener(`pointerup`,this._onWindowPointerUp,{once:!0}))},this._onPointerMove=e=>{!this.swipeable||e.buttons===0||this._applySwipeValue(this._valueFromPointer(e))},this._onPointerEnter=e=>{!this.swipeable||e.buttons===0||(this._swipeModified=!1,this._applySwipeValue(this._valueFromPointer(e)),window.addEventListener(`pointerup`,this._onWindowPointerUp,{once:!0}))},this._onPointerLeave=e=>{!this.swipeable||!this._swipeModified||(this._swipeModified=!1,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0})))},this._onWindowPointerUp=()=>{this._swipeModified&&(this._swipeModified=!1,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0})))},this._handleInput=e=>{e.preventDefault(),e.stopImmediatePropagation();let n=e.target,r=Number.parseFloat(n.value);this.value=r,this.style.setProperty(`--value`,String(Th(r,this.min,this.max))),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:r},bubbles:!0,composed:!0}))},this._handleChange=()=>{let e=Number.parseFloat(this._inputEl.value);this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener(`pointerdown`,this._onPointerDown),this.addEventListener(`pointermove`,this._onPointerMove),this.addEventListener(`pointerenter`,this._onPointerEnter),this.addEventListener(`pointerleave`,this._onPointerLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`pointerdown`,this._onPointerDown),this.removeEventListener(`pointermove`,this._onPointerMove),this.removeEventListener(`pointerenter`,this._onPointerEnter),this.removeEventListener(`pointerleave`,this._onPointerLeave),window.removeEventListener(`pointerup`,this._onWindowPointerUp)}_valueFromPointer(e){let n=this.getBoundingClientRect(),r=this.orientation===`vertical`?Math.max(0,Math.min(1,1-(e.clientY-n.top)/n.height)):Math.max(0,Math.min(1,(e.clientX-n.left)/n.width)),i=this.min+r*(this.max-this.min),a=Math.round((i-this.min)/this.step)*this.step+this.min;return Math.max(this.min,Math.min(this.max,a))}_applySwipeValue(e){this.value=e,this._inputEl&&(this._inputEl.value=String(e)),this.style.setProperty(`--value`,String(Th(e,this.min,this.max))),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:e},bubbles:!0,composed:!0})),this._swipeModified=!0}updated(e){super.updated(e),(e.has(`value`)||e.has(`min`)||e.has(`max`))&&this.style.setProperty(`--value`,String(Th(this.value,this.min,this.max))),this._tooltipEl&&(this._tooltipEl.valueFormatTooltip=e=>{let n=typeof e==`number`?e:Number(e);if(this.labelFormatter)return this.labelFormatter(n,Th(n,this.min,this.max));let r=this.step>=1?0:this.step>=.1?1:2;return n.toFixed(r)})}_formatTooltipLabel(){let e=Th(this.value,this.min,this.max);if(this.labelFormatter)return this.labelFormatter(this.value,e);let n=this.step>=1?0:this.step>=.1?1:2;return this.value.toFixed(n)}render(){let e=this.tooltip?C`
      <ixfx-tooltip
        style="--tooltip-background: var(--surface-5); --tooltip-color: var(--surface-5-text)"
        .orientation=${this.tooltipOrientation}
        anchor="--ixfx-ri-thumb"
        .value=${this.value}
      ></ixfx-tooltip>
    `:T;return C`
      <div class="wrap">
        <div class="range-bg"></div>
        <input
          type="range"
          .min=${String(this.min)}
          .max=${String(this.max)}
          .step=${String(this.step)}
          .value=${String(this.value)}
          @input=${this._handleInput}
          @change=${this._handleChange}
        >${e}
      </div>
    `}static{this.styles=[D,wh,_`
    :host {
      display: block;
      container-type: size;
      user-select: none;
      touch-action: none;
      -webkit-touch-action: none;
      width: var(--width, 200px);
      height: var(--height, 2em);

      /*
       * Internal resolved vars — read public vars and apply defaults here.
       * Public vars are NOT defined in :host {}, only read via fallback.
       * This lets inherited values from ancestor elements flow through.
       */
      --_track-thickness: var(--track-thickness, 100%);
      --_thumb-thickness: var(--thumb-thickness, 2em);
      --_thumb-color: var(--thumb-color, var(--surface-2-text));
      --_thumb-color-active: var(--thumb-color-active, var(--surface-2-text));
      --_thumb-opacity: var(--thumb-opacity, 0.7);
      --_thumb-opacity-hover: var(--thumb-opacity-hover, 0.8);
      --_thumb-opacity-active: var(--thumb-opacity-active, 1); 
      --_thumb-size: var(--thumb-size, var(--_track-thickness));
      --_thumb-radius: var(--thumb-radius, 0);
      --_thumb-border: var(--thumb-border, none);
      --_thumb-shadow: var(--thumb-shadow, none);
      --_track-radius: var(--track-radius, none);
      --_track-corner-shape: var(--track-corner-shape, none);
      --_bg-track: var(--background-track, var(--surface-4));
      --_bg-track-hover: var(--background-track-hover, var(--_bg-track));
      --_bg-track-value: var(--background-track-value, var(--surface-6));
      --_bg-track-value-hover: var(--background-track-value-hover, var(--accent));
      --_bg-track-value-active: var(--background-track-value-active, var(--accent));

      --value: 0;
      --sx1: calc(var(--_thumb-thickness) + var(--value) * (100% - var(--_thumb-thickness)));
      --track-avail: calc(100% - var(--_thumb-thickness));
      --sx: calc(var(--_thumb-thickness) + (var(--value) * var(--track-avail)));
      --track-mask: linear-gradient(to right, rgba(0,0,0,1) var(--sx), rgba(0,0,0,0) var(--sx) 100%);
      --track-mask-vertical: linear-gradient(to top, rgba(0,0,0,1) var(--sx), rgba(0,0,0,0) var(--sx) 100%);
    }

    :host([orientation="vertical"]) {
      width: var(--width, 2em);
      height: var(--height, 200px);
    }

    .wrap {
      display: grid;
      width: 100%;
      height: 100%;
    }

    .wrap > * {
      grid-area: 1 / 1;
    }

    .range-bg {
      background: var(--_bg-track);
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      border-radius: var(--_track-radius);
      corner-shape: var(--_track-corner-shape);
    }

    .wrap:hover .range-bg {
      background: var(--_bg-track-hover);
    }

    input[type=range] {
      margin: 0;
      padding: 0;
      -webkit-appearance: none;
      background: unset;
      box-shadow: none;
      width: 100%;
      height: var(--_track-thickness);
      align-self: center;
    }

    input[type=range]:focus {
      outline: none;
    }

    /* Vertical layout */
    :host([orientation="vertical"]) .range-bg {
      background: var(--background-track-vertical, var(--_bg-track));
      width: var(--_track-thickness);
      height: 100%;
      justify-self: center;
    }

    :host([orientation="vertical"]) .wrap:hover .range-bg {
      background: var(--background-track-hover-vertical, var(--_bg-track-hover));
    }

    :host([orientation="vertical"]) input[type=range] {
      writing-mode: vertical-rl;
      direction: rtl;
      width: var(--_track-thickness);
      height: 100%;
      justify-self: center;
    }

    /* ── Webkit thumb ── */
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      opacity: var(--_thumb-opacity);
      box-sizing: border-box;
      anchor-name: --ixfx-ri-thumb;
      width: var(--_thumb-thickness);
      height: var(--_thumb-size);
      border-radius: var(--_thumb-radius);
      background: var(--_thumb-color);
      border: var(--_thumb-border);
      box-shadow: var(--_thumb-shadow);
      margin-top: calc(max((var(--_thumb-thickness) - 1px - 1px) * 0.5, 0px) - var(--_thumb-thickness) * 0.5);
    }

    :host([orientation="vertical"]) input[type=range]::-webkit-slider-thumb {
      width: var(--_thumb-size);
      height: var(--_thumb-thickness);
      margin-top: 0;
      margin-left: calc(max((1em - 1px - 1px) * 0.5, 0px) - 1.2em * 0.5);
    }

    input[type=range]::-webkit-slider-thumb:hover {
      opacity: var(--_thumb-opacity-hover);
    }

    input[type=range]::-webkit-slider-thumb:active {
      opacity: var(--_thumb-opacity-active);
    }
    input[type=range]::-webkit-slider-thumb:hover,
    input[type=range]::-webkit-slider-thumb:active {
      background: var(--_thumb-color-active);
    }

    /* ── Webkit track ── */
    input[type=range]::-webkit-slider-runnable-track {
      height: var(--_track-thickness);
      background: var(--_bg-track-value);
      mask-image: var(--track-mask);
      box-shadow: none;
      margin: 0;
      padding: 0;
      border-radius: var(--_track-radius);
      corner-shape: var(--_track-corner-shape);
    }

    input[type=range]:hover::-webkit-slider-runnable-track {
      background: var(--_bg-track-value-hover);
      mask-image: var(--track-mask);
    }

    input[type=range]:active::-webkit-slider-runnable-track {
      background: var(--_bg-track-value-active);
      mask-image: var(--track-mask);
    }

    :host([orientation="vertical"]) input[type=range]::-webkit-slider-runnable-track {
      background: var(--background-track-value-vertical, var(--_bg-track-value));
      mask-image: var(--track-mask-vertical);
      width: var(--_track-thickness);
      height: unset;
    }

    :host([orientation="vertical"]) input[type=range]:hover::-webkit-slider-runnable-track {
      background: var(--background-track-value-hover-vertical, var(--_bg-track-value-hover));
      mask-image: var(--track-mask-vertical);
    }

    :host([orientation="vertical"]) input[type=range]:active::-webkit-slider-runnable-track {
      background: var(--background-track-value-active-vertical, var(--_bg-track-value-active));
      mask-image: var(--track-mask-vertical);
    }

    /* ── Mozilla thumb ── */
    input[type=range]::-moz-range-thumb {
      box-sizing: border-box;
      width: var(--_thumb-thickness);
      height: var(--_thumb-size);
      border-radius: var(--_thumb-radius);
      background: var(--_thumb-color);
      border: var(--_thumb-border);
      box-shadow: var(--_thumb-shadow);
    }

    :host([orientation="vertical"]) input[type=range]::-moz-range-thumb {
      width: var(--_thumb-size);
      height: var(--_thumb-thickness);
    }

    input[type=range]::-moz-range-thumb:hover,
    input[type=range]::-moz-range-thumb:active {
      background: var(--_thumb-color-active);
    }

    /* ── Mozilla track ── */
    input[type=range]::-moz-range-track {
      height: var(--_track-thickness);
      background: var(--_bg-track-value);
      mask-image: var(--track-mask);
      box-shadow: none;
      margin: 0;
      padding: 0;
    }

    input[type=range]:hover::-moz-range-track {
      background: var(--_bg-track-value-hover);
      mask-image: var(--track-mask);
    }

    input[type=range]:active::-moz-range-track {
      background: var(--_bg-track-value-active);
      mask-image: var(--track-mask);
    }

    :host([orientation="vertical"]) input[type=range]::-moz-range-track {
      background: var(--background-track-value-vertical, var(--_bg-track-value));
      mask-image: var(--track-mask-vertical);
      height: unset;
      width: var(--_track-thickness);
    }

    :host([orientation="vertical"]) input[type=range]:hover::-moz-range-track {
      background: var(--background-track-value-hover-vertical, var(--_bg-track-value-hover));
      mask-image: var(--track-mask-vertical);
    }

    :host([orientation="vertical"]) input[type=range]:active::-moz-range-track {
      background: var(--background-track-value-active-vertical, var(--_bg-track-value-active));
      mask-image: var(--track-mask-vertical);
    }

    /* ── Swipeable mode ── */
    /* Disable native pointer capture so the cursor can move freely between sliders */
    :host([swipeable]) input {
      pointer-events: none;
    }

    /* In swipeable mode, disable pointer events on wrap so host receives hover */
    :host([swipeable]) .wrap {
      pointer-events: none;
    }

    /* In swipeable mode, use host hover to trigger track/thumb hover styles */
    :host([swipeable]):hover input[type=range]::-webkit-slider-runnable-track {
      background: var(--_bg-track-value-hover);
    }

    :host([swipeable]):hover input[type=range]::-webkit-slider-thumb {
      background: var(--_thumb-color-active);
    }

    :host([swipeable][orientation="vertical"]):hover input[type=range]::-webkit-slider-runnable-track {
      background: var(--background-track-value-hover-vertical, var(--_bg-track-value-hover));
    }

    :host([swipeable]):hover input[type=range]::-moz-range-track {
      background: var(--_bg-track-value-hover);
    }

    :host([swipeable]):hover input[type=range]::-moz-range-thumb {
      background: var(--_thumb-color-active);
    }

    :host([swipeable][orientation="vertical"]):hover input[type=range]::-moz-range-track {
      background: var(--background-track-value-hover-vertical, var(--_bg-track-value-hover));
    }

    :host([swipeable]):hover .range-bg {
      background: var(--_bg-track-hover);
    }

    :host([swipeable][orientation="vertical"]):hover .range-bg {
      background: var(--background-track-hover-vertical, var(--_bg-track-hover));
    }
  `]}};k([A({type:Number})],Eh.prototype,`min`,void 0),k([A({type:Number})],Eh.prototype,`max`,void 0),k([A({type:Number})],Eh.prototype,`value`,void 0),k([A({type:Number})],Eh.prototype,`step`,void 0),k([A({type:String,reflect:!0})],Eh.prototype,`orientation`,void 0),k([A({type:Boolean,reflect:!0})],Eh.prototype,`swipeable`,void 0),k([A({type:Boolean})],Eh.prototype,`tooltip`,void 0),k([A({type:String,attribute:`tooltip-orientation`})],Eh.prototype,`tooltipOrientation`,void 0),k([A({attribute:!1})],Eh.prototype,`labelFormatter`,void 0),k([M(`input`)],Eh.prototype,`_inputEl`,void 0),k([M(`ixfx-tooltip`)],Eh.prototype,`_tooltipEl`,void 0),Eh=k([O(`ixfx-range-input`)],Eh);var Dh=class extends E{constructor(...e){super(...e),this.tooltip=!0,this.tooltipOrientation=`top`,this.orientation=`horizontal`,this.disabled=!1,this.min=0,this.max=100,this.#e=0,this.step=0}set value(e){this.#e=e}get value(){return this.#e}#e;onRangeInput(e){let n=e.target.valueAsNumber,r=e.target.value;if(this.#e=n,this.tooltip){let e=this.shadowRoot?.querySelector(`output`);e?e.value=r:console.warn(`Output element not found`)}}render(){let e=this.tooltip?C`<ixfx-tooltip
          style="--tooltip-background: var(--surface-5); --tooltip-color: var(--surface-5-text)"
          .orientation=${this.tooltipOrientation}
          anchor="--thumb-tooltip"
          .value=${this.value}></ixfx-tooltip>`:T,n=this.orientation===`vertical`?`writing-mode: vertical-lr; direction: rtl;`:T;return C`
      <input ?disabled=${this.disabled} step=${this.step} min=${this.min} max=${this.max} value=${this.value} @input=${this.onRangeInput} type="range" style=${n}>
      ${e}
    `}static{this.styles=[D,zn,wh,_`
    :host {
      display: inline-block;
      --value-label-color: unset;
      --thumb-background: ButtonFace;
      --thumb-radius: 50%;
      --thumb-width: 1em;
      --thumb-height: 1em;
    }

    :host([orientation="vertical"]) {
      display: block;
      width: 1.5em;
      height: 200px;
    }

    [type="range"] {
      width: 100%;
      height: 1.5em;
      accent-color: var(--accent, AccentColor);
    }

    :host([orientation="vertical"]) [type="range"] {
      writing-mode: vertical-lr;
      direction: rtl;
      width: 1.5em;
      height: 100%;
    }

    [type="range"]::-webkit-slider-thumb {
      width: var(--thumb-width);
      height: var(--thumb-height);
      border-radius: var(--thumb-radius);
      background: var(--thumb-background);
      anchor-name: --thumb-tooltip;
    }

    :host([orientation="vertical"]) [type="range"]::-webkit-slider-thumb {
      width: var(--thumb-height);
      height: var(--thumb-width);
    }

    [type="range"]::-moz-range-thumb {
      width: var(--thumb-width);
      height: var(--thumb-height);
      border-radius: var(--thumb-radius);
      background: var(--thumb-background);
      box-shadow: var(--shadow-m);
      anchor-name: --thumb-tooltip;
    }

    :host([orientation="vertical"]) [type="range"]::-moz-range-thumb {
      width: var(--thumb-height);
      height: var(--thumb-width);
    }

    [type="range"]:focus {
      outline: none;
    }
  `]}};k([A({type:Boolean})],Dh.prototype,`tooltip`,void 0),k([A({type:String,attribute:`tooltip-orientation`})],Dh.prototype,`tooltipOrientation`,void 0),k([A({type:String,reflect:!0})],Dh.prototype,`orientation`,void 0),k([A({type:Boolean,attribute:!0})],Dh.prototype,`disabled`,void 0),k([A({type:Number})],Dh.prototype,`min`,void 0),k([A({type:Number})],Dh.prototype,`max`,void 0),k([A({type:Number})],Dh.prototype,`value`,null),k([A({type:Number})],Dh.prototype,`step`,void 0),Dh=k([O(`ixfx-range`)],Dh);var Oh=class extends E{constructor(...e){super(...e),this.editMode=!1}render(){return console.log(`render`),C`
    <option>pre</option>
    <slot></slot>
    <option>post</option>
    `}static{this.styles=[D,_`
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
    border: var(--border);
    color: var(--accent);
  }
`]}};k([A({type:Boolean})],Oh.prototype,`editMode`,void 0),Oh=k([O(`ixfx-selecthorizontal-element`)],Oh);var kh=class extends E{constructor(...e){super(...e),this.orientation=`horizontal`,this.snapPositions=3,this.snapLogic=`balanced`,this.clickSnap=`closest`,this.snap=0,this._dragging=!1,this._dragStart=0,this._dragThreshold=10,this._thresholdReached=!1,this._currentDragIndex=0,this._child=null,this._onPointerDown=e=>{let n=this._getChild();if(!n)return;let r=this.getBoundingClientRect(),i=this._getSnapIndex(this._isHorizontal?e.clientX:e.clientY,r);if(n.contains(e.target))e.preventDefault(),e.stopPropagation(),this._dragging=!0,this._thresholdReached=!1,this._dragStart=this._isHorizontal?e.clientX:e.clientY,this._currentDragIndex=i,n.classList.add(`dragging`),document.addEventListener(`pointermove`,this._onPointerMove),document.addEventListener(`pointerup`,this._onPointerUp);else{let r;if(this.clickSnap===`step`){r=this.snap;let i=n.getBoundingClientRect(),a=this._isHorizontal?i.left+i.width/2:i.top+i.height/2,o=this._isHorizontal?e.clientX:e.clientY;o>a?r=Math.min(this.snapPositions-1,this.snap+1):o<a&&(r=Math.max(0,this.snap-1))}else r=i;if(r!==this.snap){let e=this.snap;this.snap=r,this._updateChildPosition(this.snap),this.dispatchEvent(new CustomEvent(`snap-change`,{detail:{previousSnap:e,newSnap:this.snap},bubbles:!0,composed:!0}))}else this._updateChildPosition(this.snap)}},this._onPointerMove=e=>{if(!this._dragging)return;let n=this._isHorizontal?e.clientX:e.clientY,r=n-this._dragStart,i=this.getBoundingClientRect();if(!this._thresholdReached&&Math.abs(r)<this._dragThreshold)return;this._thresholdReached=!0;let a=this._getSnapIndex(n,i);this._currentDragIndex=a,this._updateChildPosition(a),this.dispatchEvent(new CustomEvent(`snap-input`,{detail:{index:a},bubbles:!0,composed:!0}))},this._onPointerUp=()=>{if(!this._dragging)return;this._dragging=!1;let e=this._getChild();if(e&&e.classList.remove(`dragging`),document.removeEventListener(`pointermove`,this._onPointerMove),document.removeEventListener(`pointerup`,this._onPointerUp),this._thresholdReached&&this._currentDragIndex!==this.snap){let e=this.snap;this.snap=this._currentDragIndex,this._updateChildPosition(this.snap),this.dispatchEvent(new CustomEvent(`snap-change`,{detail:{previousSnap:e,newSnap:this.snap},bubbles:!0,composed:!0}))}else this._updateChildPosition(this.snap)},this._onKeyDown=e=>{let n=this.snap;if(this._isHorizontal)if(e.key===`ArrowLeft`)n=Math.max(0,this.snap-1);else if(e.key===`ArrowRight`)n=Math.min(this.snapPositions-1,this.snap+1);else return;else if(e.key===`ArrowUp`)n=Math.max(0,this.snap-1);else if(e.key===`ArrowDown`)n=Math.min(this.snapPositions-1,this.snap+1);else return;if(e.preventDefault(),n!==this.snap){let e=this.snap;this.snap=n,this._updateChildPosition(this.snap),this.dispatchEvent(new CustomEvent(`snap-change`,{detail:{previousSnap:e,newSnap:this.snap},bubbles:!0,composed:!0}))}}}static{this.styles=_`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      touch-action: none;
      user-select: none;
      --transition-duration: 200ms;
    }
    
    :host([orientation="horizontal"]) {
      width: 100%;
      height: auto;
      min-height: 25px;
    }
    
    :host([orientation="vertical"]) {
      height: 100%;
      width: auto;
      min-width: 25px;
    }
    
    :host(:not([orientation])) {
      width: 100%;
      min-height: 25px;
    }
    
    .container {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: inherit;
      min-width: inherit;
    }
    
    ::slotted(*) {
      position: absolute;
      transition: left var(--transition-duration) ease-out, 
                  top var(--transition-duration) ease-out;
      cursor: grab;
      will-change: left, top;
    }
    
    ::slotted(*:active) {
      cursor: grabbing;
    }
    
    :host([orientation="vertical"]) ::slotted(*) {
      transition: top var(--transition-duration) ease-out,
                  left var(--transition-duration) ease-out;
    }
    
    .dragging {
      transition: none !important;
    }
  `}get _isHorizontal(){return this.orientation!==`vertical`}_getChild(){return this._child?this._child:this.firstElementChild}_computeSnapPositions(){let e=[],n=this._isHorizontal?this.clientWidth:this.clientHeight,r=this._getChild(),i=r?this._isHorizontal?r.offsetWidth:r.offsetHeight:0;if(n===0||i===0)return[];let a=n-i;if(this.snapLogic===`centre`)for(let n=0;n<this.snapPositions;n++){let r=n/(this.snapPositions-1||1);e.push(r*a)}else{let n=a;if(this.snapPositions===1)e.push(a/2);else if(this.snapPositions===2)e.push(0,n);else{e.push(0);let r=this.snapPositions-2;for(let i=1;i<=r;i++){let a=i/(r+1);e.push(0+a*(n-0))}e.push(n)}}return e}_getSnapIndex(e,n){let r=this._isHorizontal?e-n.left:e-n.top,i=this._computeSnapPositions();if(i.length===0)return 0;let a=this._getChild(),o=(a?this._isHorizontal?a.offsetWidth:a.offsetHeight:0)/2,s=0,c=1/0;for(let e=0;e<i.length;e++){let n=i[e]+o,a=Math.abs(r-n);a<c&&(c=a,s=e)}return s}_clampChildPosition(e){let n=this._isHorizontal?this.clientWidth:this.clientHeight,r=this._getChild(),i=n-(r?this._isHorizontal?r.offsetWidth:r.offsetHeight:0);return Math.max(0,Math.min(e,i))}_updateChildPosition(e){let n=this._computeSnapPositions();if(n.length===0)return;let r=Math.max(0,Math.min(e,n.length-1)),i=n[r],a=this._getChild();if(a){if(this._isHorizontal){let e=this._clampChildPosition(i);a.style.left=`${e}px`,a.style.top=`0px`}else{let e=this._clampChildPosition(i);a.style.top=`${e}px`,a.style.left=`0px`}a.style.setProperty(`--snap-index`,String(r))}}firstUpdated(){this._child=this.firstElementChild,this._updateChildPosition(this.snap)}updated(e){e.has(`snap`)&&!this._dragging&&this._updateChildPosition(this.snap)}render(){return C`
      <div 
        class="container"
        @pointerdown=${this._onPointerDown}
        tabindex="0"
        @keydown=${this._onKeyDown}
      >
        <slot></slot>
      </div>
    `}};k([A({type:String,attribute:`orientation`})],kh.prototype,`orientation`,void 0),k([A({type:Number,attribute:`snap-positions`})],kh.prototype,`snapPositions`,void 0),k([A({type:String,attribute:`snap-logic`})],kh.prototype,`snapLogic`,void 0),k([A({type:String,attribute:`click-snap`})],kh.prototype,`clickSnap`,void 0),k([A({type:Number})],kh.prototype,`snap`,void 0),k([j()],kh.prototype,`_dragging`,void 0),kh=k([O(`ixfx-snap-container`)],kh);var Ah=class extends E{constructor(...e){super(...e),this.layout=`vertical`,this.sizeA=``,this.sizeB=``,this.fixedA=!1,this.fixedB=!1,this.collapsible=!1,this.collapsedA=!1,this.collapsedB=!1,this.minSizeA=``,this.maxSizeA=``,this.minSizeB=``,this.maxSizeB=``,this._hasCorner=!1,this.#t=``,this.#n=``,this.#r=0,this.#i=0,this.#a=``,this.#u=null,this.#p=.1,this.#E=e=>{e.preventDefault();let n=this.getZone();n&&n.classList.add(`user-resizing`),this.#e=this.getBoundingClientRect(),this.#t=this.sizeA,this.#n=this.sizeB,window.addEventListener(`pointerup`,this.#D),window.addEventListener(`pointermove`,this.#O)},this.#D=e=>{e.preventDefault();let n=this.getZone();n&&n.classList.remove(`user-resizing`),window.removeEventListener(`pointerup`,this.#D),window.removeEventListener(`pointermove`,this.#O)},this.#O=e=>{let n=this.#e;if(n){if(this.layout===`horizontal`){let r=lr((e.y-n.y)/n.height);if(this.collapsible&&this.collapsedA){if(r>(this.#d??.05)+this.#p){this.collapsedA=!1,this.#h(`A`,!1),this.#d=void 0;let{sizeA:e,sizeB:i}=this.#x(`${r*100}%`,`${(1-r)*100}%`,n.height);this.sizeA=e,this.sizeB=i}}else if(this.collapsible&&!this.collapsedA&&r<5/n.height)this.collapsedA=!0,this.#h(`A`,!0),this.sizeA=`0px`,this.sizeB=`100%`,this.#d=r;else if(!this.collapsedA){let{sizeA:e,sizeB:i}=this.#x(`${r*100}%`,`${(1-r)*100}%`,n.height);this.sizeA=e,this.sizeB=i}if(this.collapsible&&this.collapsedB){if(r<(this.#f??.95)-this.#p){this.collapsedB=!1,this.#h(`B`,!1),this.#f=void 0;let{sizeA:e,sizeB:i}=this.#x(`${r*100}%`,`${(1-r)*100}%`,n.height);this.sizeA=e,this.sizeB=i}}else this.collapsible&&!this.collapsedB&&r>1-5/n.height&&(this.collapsedB=!0,this.#h(`B`,!0),this.sizeA=`100%`,this.sizeB=`0px`,this.#f=r)}else{let r=lr((e.x-n.x)/n.width);if(this.collapsible&&this.collapsedA){if(r>(this.#d??.05)+this.#p){this.collapsedA=!1,this.#h(`A`,!1),this.#d=void 0;let{sizeA:e,sizeB:i}=this.#x(`${r*100}%`,`${(1-r)*100}%`,n.width);this.sizeA=e,this.sizeB=i}}else if(this.collapsible&&!this.collapsedA&&r<5/n.width)this.collapsedA=!0,this.#h(`A`,!0),this.sizeA=`0px`,this.sizeB=`100%`,this.#d=r;else if(!this.collapsedA){let{sizeA:e,sizeB:i}=this.#x(`${r*100}%`,`${(1-r)*100}%`,n.width);this.sizeA=e,this.sizeB=i}if(this.collapsible&&this.collapsedB){if(r<(this.#f??.95)-this.#p){this.collapsedB=!1,this.#h(`B`,!1),this.#f=void 0;let{sizeA:e,sizeB:i}=this.#x(`${r*100}%`,`${(1-r)*100}%`,n.width);this.sizeA=e,this.sizeB=i}}else this.collapsible&&!this.collapsedB&&r>1-5/n.width&&(this.collapsedB=!0,this.#h(`B`,!0),this.sizeA=`100%`,this.sizeB=`0px`,this.#f=r)}e.preventDefault()}},this.#k=e=>{e.preventDefault(),e.stopPropagation();let n=this.getZone();n&&n.classList.add(`user-resizing`),this.#e=this.getBoundingClientRect(),this.#r=e.clientX,this.#i=e.clientY,this.#t=this.sizeA,this.#n=this.sizeB;let r=this.#v();if(r){this.#a=r.sizeA;let e=r.getBoundingClientRect(),n=r.shadowRoot?.querySelector(`.resize-handle`);n&&(this.#s=e,this.#c=n.getBoundingClientRect());let i=r.getZone();i&&i.classList.add(`user-resizing`)}window.addEventListener(`pointerup`,this.#A),window.addEventListener(`pointermove`,this.#M)},this.#A=e=>{e.preventDefault();let n=this.getZone();n&&n.classList.remove(`user-resizing`);let r=this.#v();if(r){let e=r.getZone();e&&e.classList.remove(`user-resizing`)}window.removeEventListener(`pointerup`,this.#A),window.removeEventListener(`pointermove`,this.#M)},this.#M=e=>{let n=this.#e,r=this.getZone(),i=this.#v();if(!n||!r||!i)return;let a=r.getBoundingClientRect(),o=e.clientX-a.left,s=e.clientY-a.top;if(this.layout===`vertical`&&i.layout===`horizontal`){let e=o/n.width,r=s/n.height,{sizeA:i,sizeB:a}=this.#x(`${e*100}%`,`${(1-e)*100}%`,n.width);e=this.#y(i,n.width),this.sizeA=i,this.sizeB=a,this.#u={sizeA:r,sizeB:1-r},requestAnimationFrame(()=>this.#j());let c=this.shadowRoot?.querySelector(`.corner-zone`);c&&(c.style.left=`${o-6}px`,c.style.top=`${s-6}px`)}else if(this.layout===`horizontal`&&i.layout===`vertical`){let e=o/n.width,r=s/n.height,{sizeA:i,sizeB:a}=this.#x(`${r*100}%`,`${(1-r)*100}%`,n.height);r=this.#y(i,n.height),this.sizeA=i,this.sizeB=a,this.#u={sizeA:e,sizeB:1-e},requestAnimationFrame(()=>this.#j());let c=this.shadowRoot?.querySelector(`.corner-zone`);c&&(c.style.left=`${o-6}px`,c.style.top=`${s-6}px`)}e.preventDefault()}}#e;#t;#n;#r;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p;disconnectedCallback(){super.disconnectedCallback(),this.#l?.disconnect()}firstUpdated(){this.#g()}updated(e){(e.has(`sizeA`)||e.has(`sizeB`)||e.has(`collapsedA`)||e.has(`collapsedB`))&&this.#T(),(e.has(`sizeA`)||e.has(`sizeB`))&&this.#m()}#m(){this.collapsedA?this.setAttribute(`data-collapsed-a`,``):this.removeAttribute(`data-collapsed-a`),this.collapsedB?this.setAttribute(`data-collapsed-b`,``):this.removeAttribute(`data-collapsed-b`)}#h(e,n){this.dispatchEvent(new CustomEvent(`ixfx-split-collapsed`,{detail:{panel:e,collapsed:n},bubbles:!0,composed:!0}))}#g(){let e=this.shadowRoot?.querySelector(`slot[name="a"]`);e&&(this.#l=new MutationObserver(()=>{this.#_()}),this.#l.observe(e,{characterData:!0,childList:!0,subtree:!0}),this.#_())}#_(){let e=this.shadowRoot?.querySelector(`slot[name="a"]`);if(!e)return;let n=e.assignedElements(),r=e=>{for(let n of e){if(n.tagName===`IXFX-SPLIT-LAYOUT`)return n;let e=r(Array.from(n.children));if(e)return e}},i=r(n);i?(this.#o=i,this._hasCorner=!0,requestAnimationFrame(()=>this.#T())):(this.#o=void 0,this._hasCorner=!1)}#v(){if(this.#o)return this.#o;let e=this.shadowRoot?.querySelector(`slot[name="a"]`);if(e)return e.assignedElements().find(e=>e.tagName===`IXFX-SPLIT-LAYOUT`)}#y(e,n){return e.endsWith(`px`)?Number.parseFloat(e.replace(`px`,``))/n:e.endsWith(`%`)?Number.parseFloat(e.replace(`%`,``))/100:.5}#b(e,n){return e.endsWith(`px`)?Number.parseFloat(e.replace(`px`,``)):e.endsWith(`%`)?Number.parseFloat(e.replace(`%`,``))/100*n:null}#x(e,n,r){let i=this.#y(e,r),a=this.#y(n,r),o=this.#S(this.minSizeA,r),s=this.#S(this.minSizeB,r),c=this.#C(this.maxSizeA,r),l=this.#C(this.maxSizeB,r);if(o!==null||s!==null){let e=(o??0)+(s??0);if(e>1){let n=1/e;o!==null&&(i=o===null?0:o*n),s!==null&&(a=s===null?0:s*n)}i<(o??0)&&(i=o??0),a<(s??0)&&(a=s??0)}c!==null&&i>c&&(i=c),l!==null&&a>l&&(a=l),a=1-i;let u=!this.sizeA.endsWith(`px`);return this.sizeB.endsWith(`px`),u?{sizeA:`${i*100}%`,sizeB:`${a*100}%`}:{sizeA:`${i*r}px`,sizeB:`${a*r}px`}}#S(e,n){if(e.length===0)return null;let r=this.#b(e,n);return r===null?e.endsWith(`%`)?Number.parseFloat(e.replace(`%`,``))/100:null:r/n}#C(e,n){if(e.length===0)return null;let r=this.#b(e,n);return r===null?e.endsWith(`%`)?Number.parseFloat(e.replace(`%`,``))/100:null:r/n}#w(){let e=this.getBoundingClientRect(),n=this.getZone();if(!n)return null;let r=this.#v();if(!r)return null;n.getBoundingClientRect();let i=this.#y(this.sizeA||`50%`,e.width),a,o;if(this.layout===`vertical`&&r.layout===`horizontal`)a=i*e.width,o=this.#y(r.sizeA||`50%`,e.height)*e.height;else if(this.layout===`horizontal`&&r.layout===`vertical`)a=this.#y(r.sizeA||`50%`,e.width)*e.width,o=i*e.height;else return null;return{x:a,y:o}}#T(){if(!this._hasCorner)return;let e=this.shadowRoot?.querySelector(`.corner-zone`);if(!e||!this.getZone())return;let n=this.#w();if(!n){e.style.display=`none`;return}let r=n.x-6,i=n.y-6;e.style.left=`${r}px`,e.style.top=`${i}px`,e.style.display=`block`;let a=this.#v();a&&(this.layout===`vertical`&&a.layout===`horizontal`?e.style.cursor=`nwse-resize`:this.layout===`horizontal`&&a.layout===`vertical`&&(e.style.cursor=`nesw-resize`))}getZone(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`#zone`);if(e)return e}#E;#D;#O;#k;#A;#j(){if(!this.#u)return;let{sizeA:e,sizeB:n}=this.#u,r=this.#v();r&&(r.sizeA=`${e*100}%`,r.sizeB=`${n*100}%`),this.#u=null}#M;render(){let e=this.layout===`vertical`?`width`:`height`,n=this.sizeA,r=this.sizeB;return this.collapsedA?n=`0px`:n.length===0&&r.length===0?r=n=`50%`:n.length===0?n=`auto`:r.length===0&&(r=`auto`),this.collapsedB&&(r=`0px`),n=`${e}:${n}`,r=`${e}:${r}`,C`
    <div id="zone">
      <slot style=${n} name="a"></slot>
      ${this._hasCorner?C`<div class="corner-zone" @pointerdown=${this.#k}></div>`:``}
      <div @pointerdown=${this.#E} class="resize-handle"></div>
      <slot style=${r} name="b"></slot> 
    </div>`}static{this.styles=[D,_`
  :host {
      --handle-size: 2px;
      --handle-colour: var(--surface-5);
      --handle-hover-colour: var(--surface-6);
      --handle-active-colour: var(--accent);

      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
    * {
      box-sizing: border-box;
    }
    #zone {
      display: flex;
      height: 100%;
      position: relative;
    }
    slot {
      display: block;
      overflow: hidden;
    }
    :slotted(*) {
      width: 100%;
      height: 100%;
    }

    .resize-handle {
      background-color: var(--handle-colour);
      width: var(--handle-size);
      height: 100%;
      cursor: ew-resize;
      flex-shrink: 0;
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

    .corner-zone {
      position: absolute;
      width: 12px;
      height: 12px;
      z-index: 10;
      border-radius: 50%;
      background: transparent;
    }
    .corner-zone:hover {
      background: transparent;
    }

    :host([layout='horizontal']) {
      #zone {
        flex-direction: column;
      }
      .resize-handle {
        background-color: silver;
        height: var(--handle-size);
        width: 100%;
        cursor: ns-resize;
      }
      .resize-handle:hover {
        background-color: var(--handle-hover-colour);
      }
      #zone.user-resizing .resize-handle {
        background-color: var(--handle-active-colour);
      }
    }

    :host([data-collapsed-a]) slot[name="a"],
    :host([data-collapsed-b]) slot[name="b"] {
      display: none;
    }
  `]}};k([A({type:String})],Ah.prototype,`layout`,void 0),k([A({type:String})],Ah.prototype,`sizeA`,void 0),k([A({type:String})],Ah.prototype,`sizeB`,void 0),k([A({type:Boolean})],Ah.prototype,`fixedA`,void 0),k([A({type:Boolean})],Ah.prototype,`fixedB`,void 0),k([A({type:Boolean})],Ah.prototype,`collapsible`,void 0),k([A({type:Boolean,reflect:!0})],Ah.prototype,`collapsedA`,void 0),k([A({type:Boolean,reflect:!0})],Ah.prototype,`collapsedB`,void 0),k([A({type:String})],Ah.prototype,`minSizeA`,void 0),k([A({type:String})],Ah.prototype,`maxSizeA`,void 0),k([A({type:String})],Ah.prototype,`minSizeB`,void 0),k([A({type:String})],Ah.prototype,`maxSizeB`,void 0),k([j()],Ah.prototype,`_hasCorner`,void 0),Ah=k([O(`ixfx-split-layout`)],Ah);var jh=class extends E{constructor(...e){super(...e),this.barSpacing=20,this.barWidth=14,this.debounceMs=200,this.retractDurationMs=400,this._startX=0,this._currentX=0,this._pointerId=null,this._componentWidth=0,this._isDragging=!1,this._offset=0,this._width=0,this._height=0,this._animRafId=null,this._debounceTimer=null,this._animStartOffset=0,this._animStartTime=null,this._resizeObserver=null,this.#e=e=>{if(e.pointerId!==this._pointerId)return;this.#r();let n=this.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom){let e=this._currentX-this._startX,n=Math.max(-1,Math.min(1,e/this._componentWidth));this.#n(n)}this._isDragging=!1,this._pointerId=null,this.#i()},this.#t=e=>{e.pointerId===this._pointerId&&(this.#r(),this._isDragging=!1,this._pointerId=null,this.#i())},this._onPointerDown=e=>{e.preventDefault(),this.#o(),e.target.setPointerCapture(e.pointerId),this._pointerId=e.pointerId,this._startX=e.clientX,this._currentX=e.clientX,this._componentWidth=this.getBoundingClientRect().width,this._isDragging=!0,window.addEventListener(`pointerup`,this.#e),window.addEventListener(`pointercancel`,this.#t)},this._onPointerMove=e=>{if(!this._isDragging||e.pointerId!==this._pointerId)return;this._currentX=e.clientX;let n=this._currentX-this._startX,r=Math.max(-1,Math.min(1,n/this._componentWidth));this._offset=r*this._height*.5,this.requestUpdate()}}#e;#t;#n(e){this.dispatchEvent(new CustomEvent(`input`,{detail:{value:e},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(e=>{let n=e[0];n&&(this._width=n.contentRect.width,this._height=n.contentRect.height,this.requestUpdate())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this.#o(),this.#r(),this._isDragging=!1,this._pointerId=null}#r(){window.removeEventListener(`pointerup`,this.#e),window.removeEventListener(`pointercancel`,this.#t)}#i(){this._debounceTimer!==null&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this._debounceTimer=null,this.#a()},this.debounceMs)}#a(){this._animStartOffset=this._offset,this._animStartTime=null;let e=n=>{this._animStartTime===null&&(this._animStartTime=n);let r=n-this._animStartTime,i=Math.min(r/this.retractDurationMs,1),a=1-(1-i)**3;this._offset=this._animStartOffset*(1-a),this.requestUpdate(),i<1?this._animRafId=requestAnimationFrame(e):(this._offset=0,this._animRafId=null,this.requestUpdate())};this._animRafId=requestAnimationFrame(e)}#o(){this._animRafId!==null&&(cancelAnimationFrame(this._animRafId),this._animRafId=null),this._debounceTimer!==null&&(clearTimeout(this._debounceTimer),this._debounceTimer=null)}#s(){let e=this._width,n=this._height,r=this._offset,{barSpacing:i,barWidth:a}=this;if(e===0||n===0)return w``;let o=a/2,s=n/2,c=Math.ceil(e/i)+1;return w`${Array.from({length:c},(e,a)=>{let c=a*i,l=c-o,u=c+o,d=a%2==0?`var(--swipe-color-a, var(--surface-4))`:`var(--swipe-color-b, var(--surface-5))`;return w`<path d=${`M${l},0 L${u},0 L${u+r},${s} L${u},${n} L${l},${n} L${l+r},${s}Z`} style="fill:${d}"></path>`})}`}static{this.styles=[D,zn,_`
    :host {
      display: block;
      user-select: none;
      touch-action: none;
      width: 100%;
      height: 2.5rem;
      --swipe-border-color: var(--border);
    }

    .swipe-area {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: grab;
      border: var(--swipe-border-color);
      overflow: hidden;
    }

    .swipe-area:active {
      cursor: grabbing;
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  `]}render(){return C`
      <div
        class="swipe-area"
        @pointerdown=${this._onPointerDown}
        @pointermove=${this._onPointerMove}
      >
        <svg aria-hidden="true">${this.#s()}</svg>
      </div>
    `}};k([A({type:Number})],jh.prototype,`barSpacing`,void 0),k([A({type:Number})],jh.prototype,`barWidth`,void 0),k([A({type:Number})],jh.prototype,`debounceMs`,void 0),k([A({type:Number})],jh.prototype,`retractDurationMs`,void 0),jh=k([O(`ixfx-swipe`)],jh);var Mh=class extends E{constructor(...e){super(...e),this.orientation=`horizontal`,this.flip=!1,this.scrollable=!1,this.#e=[],this.#r=()=>{this.updateComplete.then(()=>{this.#e=(this.shadowRoot?.querySelector(`slot`))?.assignedElements({flatten:!0})??[],this.#i()})},this.#a=e=>{let n=e.key;this.#t?n===`ArrowUp`?this.#c():n===`ArrowDown`&&this.#s():n===`ArrowRight`?this.#s():n===`ArrowLeft`&&this.#c()},this.#l=e=>{this.focus();let n=e.target.closest(`ixfx-tab-list-item`);if(!n)return;let r=this.getSelectedElement();this.selectElement(n);let i=n.getAttribute(`for`),a=r?.id;this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,detail:{previous:a,selected:n.id,for:i??``}}))}}#e;get#t(){return this.orientation===`vertical-stack`||this.orientation===`vertical-side`}get#n(){return this.scrollable?`${this.orientation} scrollable`:this.orientation}render(){return C`
    <div 
      tabindex=0 
      @keyup=${this.#a} 
      @click=${this.#l} 
      id="container" 
      class=${this.#n}
    >
      <slot @slotchange=${this.#r}></slot>
    </div>`}#r;firstUpdated(){this.updateComplete.then(()=>{this.#e.length>0&&this.#i()})}updated(e){super.updated(e),this.classList.toggle(`scrollable`,this.scrollable)}#i(){for(let e of this.#e)e.style.setProperty(`--indicator-color-bottom`,`transparent`),e.style.setProperty(`--indicator-color-top`,`transparent`),e.style.setProperty(`--indicator-color-left`,`transparent`),e.style.setProperty(`--indicator-color-right`,`transparent`),e.hasAttribute(`selected`)&&(this.orientation===`horizontal`&&!this.flip?e.style.setProperty(`--indicator-color-bottom`,`var(--accent)`):this.orientation===`horizontal`&&this.flip?e.style.setProperty(`--indicator-color-top`,`var(--accent)`):this.#t&&!this.flip?e.style.setProperty(`--indicator-color-right`,`var(--accent)`):this.#t&&this.flip&&e.style.setProperty(`--indicator-color-left`,`var(--accent)`))}#a;getSelectedElement(){for(let e of this.#e)if(this.#o(e))return e;let e=this.shadowRoot?.querySelector(`slot`);if(e){let n=e.assignedElements({flatten:!0});for(let e of n)if(this.#o(e))return e}}#o(e){return e.getAttribute(`selected`)===null?!1:e.hasAttribute(`selected`)}selectElement(e){let n=this.getSelectedElement();n&&(n.removeAttribute(`selected`),n.style.setProperty(`--indicator-color-bottom`,`transparent`),n.style.setProperty(`--indicator-color-top`,`transparent`),n.style.setProperty(`--indicator-color-left`,`transparent`),n.style.setProperty(`--indicator-color-right`,`transparent`)),e.setAttribute(`selected`,``),this.orientation===`horizontal`&&!this.flip?e.style.setProperty(`--indicator-color-bottom`,`var(--accent)`):this.orientation===`horizontal`&&this.flip?e.style.setProperty(`--indicator-color-top`,`var(--accent)`):this.#t&&!this.flip?e.style.setProperty(`--indicator-color-right`,`var(--accent)`):this.#t&&this.flip&&e.style.setProperty(`--indicator-color-left`,`var(--accent)`)}#s(){let e=!1;for(let n of this.#e)if(this.#o(n)&&!e)e=!0;else if(e){this.selectElement(n);break}}#c(){let e;for(let n of this.#e)this.#o(n)&&e?this.selectElement(e):e=n}#l;static{this.styles=[D,_`
  :host {
      display: inline-block;
      --activated-colour: var(--accent);
      --colour: var(--surface-4);
      --scroll-max-height: 200px;
      --allow-overflow: hidden;
    }
    :host(.scrollable) {
      max-height: var(--scroll-max-height);
    }
    text {
      user-select:none;
    }
    #container {
      display:flex;
    }
    #container.horizontal {
      flex-direction: row;
      overflow: hidden;
    }
    #container.horizontal.scrollable {
      overflow-x: auto;
      --allow-overflow: visible;
    }
    #container.horizontal.scrollable ::slotted(ixfx-tab-list-item) {
      flex-shrink: 0;
    }
    #container.vertical-stack {
      flex-direction: column;
    }
    #container.vertical-stack.flip {
      flex-direction: column-reverse;
    }
    #container.vertical-stack.scrollable {
      overflow-y: auto;
      max-height: var(--scroll-max-height);
      --allow-overflow: visible;
    }
    #container.vertical-side {
      flex-direction: column;
    }
    #container.vertical-side.flip {
      flex-direction: column-reverse;
    }
    #container.vertical-side.scrollable {
      overflow-y: auto;
      max-height: var(--scroll-max-height);
      --allow-overflow: visible;
    }

    ::slotted(ixfx-tab-list-item) {
      flex: 1 1 auto;
      min-width: 0;
    }

    #container.vertical-side ::slotted(ixfx-tab-list-item) {
      writing-mode: vertical-lr;
      text-orientation: mixed;
    }
    #container.vertical-side.flip ::slotted(ixfx-tab-list-item) {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }

    ::slotted(.activated) {
      --colour: var(--activated-colour);
    }
  `]}};k([A({type:String})],Mh.prototype,`orientation`,void 0),k([A({type:Boolean})],Mh.prototype,`flip`,void 0),k([A({type:Boolean})],Mh.prototype,`scrollable`,void 0),Mh=k([O(`ixfx-tab-list`)],Mh);var Nh=ht(class extends gt{constructor(e){if(super(e),e.type!==mt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(n=>e[n]).join(` `)+` `}update(e,[n]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in n)n[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(n)}let r=e.element.classList;for(let e of this.st)e in n||(r.remove(e),this.st.delete(e));for(let e in n){let i=!!n[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return Pe}}),Ph=[1,2,5,10];function Fh(e,n,r,i=`adaptive`,a,o){return i===`fixed`&&a!==void 0&&o!==void 0?Lh(a,o):Ih(e,n,r)}function Ih(e,n,r){let i=e.max-e.min;if(i<=0||r<=0)return{majorStep:100,minorDivisions:4,minorStep:25};let a=80*Rh(n),o=i/Math.max(2,Math.floor(r/a)),s=10**Math.floor(Math.log10(o)),c=s;for(let e of Ph){let n=e*s;if(n>=o*.8){c=n;break}}let l=c/s,u=l===5||l===10?5:4,d=c/u;return{majorStep:c,minorDivisions:u,minorStep:d}}function Lh(e,n){let r=e;for(;r*n<5&&r<0xe8d4a51000;)r*=2;return{majorStep:r*4,minorDivisions:4,minorStep:r}}function Rh(e){switch(e){case`x-wide`:return 2;case`wide`:return 1.5;case`normal`:return 1;case`slim`:return .7;case`x-slim`:return .5;default:return 1}}function zh(e,n,r,i,a,o){let{majorStep:s,minorStep:c}=r;if(s<=0)return;let l=n.x+n.width;if(i){e.fillStyle=a[`--timeline-alt-major-bg`]??`rgba(255,255,255,0.03)`;let r=Math.floor(n.x/s);for(let i=r;i*s<l;i++)if(i%2!=0){let r=i*s*o;e.fillRect(r,n.y,s*o,n.height)}}if(c>0){e.strokeStyle=a[`--timeline-grid-minor-color`]??`rgba(255,255,255,0.05)`,e.lineWidth=Number.parseFloat(a[`--timeline-grid-minor-width`]??`0.5`),e.beginPath();let r=Math.floor(n.x/c)*c;for(let i=r;i<l;i+=c){if(Math.abs(i%s)<c*.01)continue;let r=i*o;e.moveTo(r,n.y),e.lineTo(r,n.y+n.height)}e.stroke()}e.strokeStyle=a[`--timeline-grid-major-color`]??`rgba(255,255,255,0.12)`,e.lineWidth=Number.parseFloat(a[`--timeline-grid-major-width`]??`1`),e.beginPath();let u=Math.floor(n.x/s)*s;for(let r=u;r<l;r+=s){let i=r*o;e.moveTo(i,n.y),e.lineTo(i,n.y+n.height)}e.stroke()}function Bh(e,n,r,i,a,o,s,c=0){let{majorStep:l}=r;if(l<=0||i<=0)return;let u=c,d=c+i;if(n.y+n.height<u||n.y>d)return;let f=n.x+n.width,p=i-6;e.fillStyle=o[`--timeline-bg`]??`#111`;let m=n.x*s;e.fillRect(m,u,n.width*s,p),e.strokeStyle=o[`--timeline-grid-major-color`]??`rgba(255,255,255,0.12)`,e.lineWidth=Number.parseFloat(o[`--timeline-grid-major-width`]??`1`),e.beginPath();let h=Math.ceil(n.x/l)*l;for(let n=h;n<f;n+=l){let r=n*s;e.moveTo(r,u+p),e.lineTo(r,d)}e.stroke(),e.strokeStyle=o[`--timeline-grid-major-color`]??`rgba(255,255,255,0.12)`,e.lineWidth=1,e.beginPath(),e.moveTo(m,d),e.lineTo(m+n.width*s,d),e.stroke(),e.fillStyle=o[`--timeline-axis-label-color`]??`rgba(255,255,255,0.5)`,e.font=`11px system-ui, sans-serif`,e.textBaseline=`middle`,e.textAlign=`left`;for(let n=h;n<f;n+=l){let r=n*s;e.fillText(a(n),r+4,u+p/2)}e.textAlign=`start`}function Vh(e,n,r,i,a,o){let s=a[`--timeline-track-bg`]??`#1a1a1a`,c=a[`--timeline-track-bg-alt`]??`#1e1e1e`;for(let l=0;l<r.length;l++){let u=r[l];if(u.y+u.height<n.y)continue;if(u.y>n.y+n.height)break;let d=i.find(e=>e.key===u.trackKey);e.fillStyle=d?.color?`${d.color}22`:l%2==0?s:c,e.fillRect(n.x*o,u.y,n.width*o,u.height),e.strokeStyle=a[`--timeline-grid-major-color`]??`rgba(255,255,255,0.12)`,e.lineWidth=.5,e.beginPath(),e.moveTo(n.x*o,u.y+u.height),e.lineTo((n.x+n.width)*o,u.y+u.height),e.stroke()}}function Hh(e,n,r,i,a,o,s,c,l){let u=c[`--timeline-event-bg`]??`#3498db`,d=c[`--timeline-event-selected-bg`]??`#5dade2`,f=c[`--timeline-event-tickled-bg`]??`#444`,p=c[`--timeline-event-label-color`]??`#fff`,m=Number.parseFloat(c[`--timeline-event-radius`]??`4`),h=n.x+n.width;for(let c of r){if(c.end<n.x||c.start>h)continue;let r=i.find(e=>e.trackKey===c.trackKey);if(!r||r.y+r.height<n.y||r.y>n.y+n.height)continue;let g=!1;(s.kind===`event-move`&&s.eventId===c.id||s.kind===`event-start`&&s.eventId===c.id||s.kind===`event-end`&&s.eventId===c.id)&&(g=!0);let _=c.start*l,v=(c.end-c.start)*l,y=r.y+3,b=r.height-6;if(v<1)continue;let x=a.has(c.id),S=o===c.id,ee;ee=x?d:S?f:c.color??u,e.fillStyle=ee,e.beginPath(),Wh(e,_,y,v,b,Math.min(m,v/2,b/2)),e.fill(),g&&(e.strokeStyle=`#fff`,e.lineWidth=1.5,e.beginPath(),Wh(e,_,y,v,b,Math.min(m,v/2,b/2)),e.stroke()),x&&!g&&(e.strokeStyle=d,e.lineWidth=1,e.beginPath(),Wh(e,_,y,v,b,Math.min(m,v/2,b/2)),e.stroke()),v>=40&&c.label&&(e.fillStyle=p,e.font=`11px system-ui, sans-serif`,e.textBaseline=`middle`,e.save(),e.beginPath(),e.rect(_+4,y,v-8,b),e.clip(),e.fillText(c.label,_+6,y+b/2),e.restore())}}function Uh(e,n,r){if(n.kind!==`marquee`)return;let i=Math.min(n.startLogicalX,n.currentLogicalX)*r,a=Math.max(n.startLogicalX,n.currentLogicalX)*r,o=Math.min(n.startY,n.currentY),s=Math.max(n.startY,n.currentY);e.fillStyle=`rgba(100, 150, 255, 0.15)`,e.fillRect(i,o,a-i,s-o),e.strokeStyle=`rgba(100, 150, 255, 0.6)`,e.lineWidth=1,e.strokeRect(i,o,a-i,s-o)}function Wh(e,n,r,i,a,o){o=Math.max(0,o),e.moveTo(n+o,r),e.arcTo(n+i,r,n+i,r+a,o),e.arcTo(n+i,r+a,n,r+a,o),e.arcTo(n,r+a,n,r,o),e.arcTo(n,r,n+i,r,o),e.closePath()}var Gh=[`--timeline-bg`,`--timeline-track-bg`,`--timeline-track-bg-alt`,`--timeline-alt-major-bg`,`--timeline-grid-major-color`,`--timeline-grid-minor-color`,`--timeline-grid-major-width`,`--timeline-grid-minor-width`,`--timeline-event-bg`,`--timeline-event-selected-bg`,`--timeline-event-tickled-bg`,`--timeline-event-label-color`,`--timeline-event-radius`,`--timeline-axis-label-color`];function Kh(e){let n=getComputedStyle(e),r={};for(let e of Gh)r[e]=n.getPropertyValue(e).trim();return r}var qh=8;function Jh(e,n,r){return e/n+r}function Yh(e){return e>0?1/e:1}function Xh(e,n,r,i,a){let o=i.find(e=>n>=e.y&&n<e.y+e.height);if(!o)return{kind:`empty`,logicalX:e,y:n,trackKey:void 0};let s=qh*Yh(a),c=r.filter(e=>e.trackKey===o.trackKey);for(let n of c)if(!(e<n.start||e>n.end))return e<=n.start+s?{kind:`event-start`,eventId:n.id}:e>=n.end-s?{kind:`event-end`,eventId:n.id}:{kind:`event-move`,eventId:n.id,trackKey:o.trackKey,offsetX:e-n.start};return{kind:`empty`,logicalX:e,y:n,trackKey:o.trackKey}}function Zh(e,n){return n.find(n=>e>=n.y&&e<n.y+n.height)?.trackKey}var Qh=100;function $h(e,n){return Math.abs(e)>n?e-Math.sign(e)*n:0}function eg(e,n,r,i,a){let o=n*Math.exp(-a/Qh),s=r-(r-e)*n/o;return o>0&&(s+=-i/o),{ppu:o,viewMin:s}}function tg(e,n,r,i,a,o){let s=n-e,c=s*Math.exp(-a/Qh),l=i-(s>0?(i-e)/s:.5)*c;return r>0&&(l+=o/r),{vMin:l,vMax:l+c}}function ng(e,n){let r=new AbortController,i=r.signal;return n.addEventListener(`pointerdown`,r=>{let i=e.pxPerUnit,a=n.convertFromViewportToCanvas(r.offsetX,r.offsetY),o=Jh(a.x,i,e.min),s=a.y,c=n.logicalScrollTop;if(s>=c&&s<c+e.axisHeight){n.setPointerCapture(r.pointerId),e._drag={kind:`axis-zoom`,anchorUnit:o,startScreenX:r.screenX,startScreenY:r.screenY,startViewMin:e._viewRange.min,startPpu:i};return}let l=Xh(o,s,e._internalEvents,e._trackLayout,i);if(r.shiftKey&&l.kind===`event-move`){ig(e,l.eventId);return}if(l.kind===`event-move`){n.setPointerCapture(r.pointerId),e._drag={kind:`event-move`,eventId:l.eventId,originTrackKey:l.trackKey,offsetX:l.offsetX};return}if(l.kind===`event-start`){n.setPointerCapture(r.pointerId),e._drag={kind:`event-start`,eventId:l.eventId};return}if(l.kind===`event-end`){n.setPointerCapture(r.pointerId),e._drag={kind:`event-end`,eventId:l.eventId};return}l.kind===`empty`&&(n.setPointerCapture(r.pointerId),e._drag={kind:`marquee`,startLogicalX:o,startY:s,currentLogicalX:o,currentY:s})},{signal:i}),n.addEventListener(`pointermove`,r=>{let i=e._drag;if(i.kind===`none`){rg(e,n,r);return}let a=e.pxPerUnit,o=n.convertFromViewportToCanvas(r.offsetX,r.offsetY),s=Jh(o.x,a,e.min),c=o.y;if(i.kind===`axis-zoom`){let n=r.screenX-i.startScreenX,a=r.screenY-i.startScreenY;if(Math.abs(n)+Math.abs(a)<5)return;let o=$h(n,4),s=$h(a,4),c=eg(i.startViewMin,i.startPpu,i.anchorUnit,o,s);e.setZoomPan(c.viewMin,c.ppu);return}if(i.kind===`marquee`){e._drag={...i,currentLogicalX:s,currentY:c},n.invalidateAll();return}if(i.kind===`event-move`){let r=e._internalEvents.find(e=>e.id===i.eventId);if(!r)return;let a=r.end-r.start,o=s,l=c,u=s-i.offsetX,d=u+a,f=Zh(c,e._trackLayout)??r.trackKey,p=e.pxPerUnit,m=Fh(e._viewRange,e.userScale,n.viewportWidth,e.gridMode,e.minorStep,p),h=e.processDrag(i.eventId,o,l,u,d,f,i.originTrackKey,m);e._internalEvents=e._internalEvents.map(e=>e.id===i.eventId?{...e,start:h.start,end:h.end,trackKey:h.trackKey}:e),n.invalidateAll();return}if(i.kind===`event-start`){let r=e._internalEvents.find(e=>e.id===i.eventId);if(!r)return;let a=Math.min(s,r.end-1);e._internalEvents=e._internalEvents.map(e=>e.id===i.eventId?{...e,start:a}:e),n.invalidateAll();return}if(i.kind===`event-end`){let r=e._internalEvents.find(e=>e.id===i.eventId);if(!r)return;let a=Math.max(s,r.start+1);e._internalEvents=e._internalEvents.map(e=>e.id===i.eventId?{...e,end:a}:e),n.invalidateAll()}},{signal:i}),n.addEventListener(`pointerup`,r=>{let i=e._drag;if(n.releasePointerCapture(r.pointerId),i.kind===`axis-zoom`){e._drag={kind:`none`};return}if(i.kind===`marquee`){let r=Math.min(i.startLogicalX,i.currentLogicalX),a=Math.max(i.startLogicalX,i.currentLogicalX),o=Math.min(i.startY,i.currentY),s=Math.max(i.startY,i.currentY);if(Math.abs(a-r)<2&&Math.abs(s-o)<2)e._selectedIds=new Set,ag(e);else{let n=new Set;for(let i of e._internalEvents){let c=e._trackLayout.find(e=>e.trackKey===i.trackKey);if(!c)continue;let l=c.y+3,u=c.y+c.height-3;i.end>=r&&i.start<=a&&u>=o&&l<=s&&n.add(i.id)}e._selectedIds=n,ag(e)}e._drag={kind:`none`},n.invalidateAll();return}if(i.kind===`event-move`){let n=e._internalEvents.find(e=>e.id===i.eventId);n&&e.dispatchEvent(new CustomEvent(`event-move`,{detail:{eventId:n.id,fromTrackKey:i.originTrackKey,toTrackKey:n.trackKey,start:n.start,end:n.end},bubbles:!0,composed:!0})),e._drag={kind:`none`};return}if(i.kind===`event-start`||i.kind===`event-end`){let n=e._internalEvents.find(e=>e.id===i.eventId);n&&e.dispatchEvent(new CustomEvent(`event-resize`,{detail:{eventId:n.id,start:n.start,end:n.end},bubbles:!0,composed:!0})),e._drag={kind:`none`};return}e._drag={kind:`none`}},{signal:i}),n.addEventListener(`pointerleave`,()=>{e._tickledId!==void 0&&(e._tickledId=void 0,n.invalidateAll())},{signal:i}),()=>r.abort()}function rg(e,n,r){let i=e.pxPerUnit,a=n.convertFromViewportToCanvas(r.offsetX,r.offsetY),o=Jh(a.x,i,e.min),s=a.y,c=n.logicalScrollTop;if(s>=c&&s<c+e.axisHeight){n.style.cursor=`col-resize`,e._tickledId!==void 0&&(e._tickledId=void 0,n.invalidateAll());return}let l=Xh(o,s,e._internalEvents,e._trackLayout,i),u;(l.kind===`event-move`||l.kind===`event-start`||l.kind===`event-end`)&&(u=l.eventId),l.kind===`event-start`||l.kind===`event-end`?n.style.cursor=`ew-resize`:l.kind===`event-move`?n.style.cursor=`grab`:n.style.cursor=`crosshair`,u!==e._tickledId&&(e._tickledId=u,n.invalidateAll())}function ig(e,n){let r=new Set(e._selectedIds);r.has(n)?r.delete(n):r.add(n),e._selectedIds=r,ag(e),e.getVCanvas()?.invalidateAll()}function ag(e){e.dispatchEvent(new CustomEvent(`selection-change`,{detail:{selectedIds:[...e._selectedIds]},bubbles:!0,composed:!0}))}var og=_`
  :host {
    /* Layout */
    --timeline-axis-height: 24px;
    --timeline-tab-width: 120px;

    /* Backgrounds */
    --timeline-bg: var(--content, #111);
    --timeline-track-bg: var(--surface-2);
    --timeline-track-bg-alt: var(--surface-3);
    --timeline-alt-major-bg: color-mix(in oklch, var(--surface-3) 40%, transparent);
    --timeline-meta-bg: var(--surface-2);

    /* Grid */
    --timeline-grid-major-color: var(--surface-5);
    --timeline-grid-minor-color: var(--surface-4);
    --timeline-grid-major-width: 1px;
    --timeline-grid-minor-width: 0.5px;

    /* Events */
    --timeline-event-bg: var(--accent);
    --timeline-event-selected-bg: color-mix(in oklch, var(--accent) 80%, white);
    --timeline-event-tickled-bg: var(--surface-6);
    --timeline-event-label-color: var(--accent-text);
    --timeline-event-radius: var(--radius-s, 4px);

    /* Tabs */
    --timeline-tab-bg: var(--surface-3);
    --timeline-tab-text: var(--surface-3-text);
    --timeline-tab-selected-bg: var(--accent);

    /* Axis */
    --timeline-axis-label-color: var(--surface-muted-text);

    /* Resizer */
    --timeline-resizer-color: var(--surface-5);

    display: grid;
    grid-template-rows: 1fr auto auto auto;
    background: var(--timeline-bg);
    overflow: hidden;
    position: relative;
  }

  /* ── Content wrapper ───────────────────────────────────────────────── */

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    overflow: hidden;
    min-height: 0;
  }

  /* ── Vertical zoom (right sidebar) ─────────────────────────────────── */

  .v-zoom {
    padding: 6px 4px;
    padding-top: var(--timeline-axis-height);
    display: flex;
    align-items: stretch;
    width: 30px;
    box-sizing: content-box;
  }

  .v-zoom ixfx-range-multi {
    height: 100%;
    width: 100%;
  }

  /* ── Content area ──────────────────────────────────────────────────── */

  .content-area {
    position: relative;
    display: grid;
    grid-template-columns: var(--timeline-tab-width) 1fr;
    overflow: hidden;
    min-height: 0;
  }

  /* ── Tab column (sits beside vcanvas) ────────────────────────────── */

  .tab-column {
    position: relative;
    overflow: hidden;
    z-index: 2;
  }

  .tab-column ixfx-timeline-track-tab {
    position: absolute;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    pointer-events: auto;
  }

  /* ── Vertical axis interaction zone ─────────────────────────────────── */

  .v-axis-zone {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--timeline-tab-width);
    height: 100%;
    cursor: ns-resize;
    z-index: 3;
  }

  /* ── VCanvas ───────────────────────────────────────────────────────── */

  .content-area x-vcanvas {
    width: 100%;
    height: 100%;
    display: block;
    --scrollbar-width: none;
  }

  /* ── Horizontal zoom ───────────────────────────────────────────────── */

  .h-zoom {
    padding: 4px 8px;
    padding-left: var(--timeline-tab-width);
    padding-right: 38px; /* align with v-zoom column (30px + 2×4px padding) */
  }

  .h-zoom ixfx-range-multi {
    width: 100%;
  }

  /* ── Meta area ─────────────────────────────────────────────────────── */

  .meta-resizer {
    display: none;
    height: 6px;
    cursor: ns-resize;
    background: var(--timeline-resizer-color);
  }

  .meta-resizer.visible {
    display: block;
  }

  .meta-area {
    display: none;
    background: var(--timeline-meta-bg);
    overflow: hidden;
  }

  .meta-area.visible {
    display: block;
  }
`,sg=24,cg=6,lg=class extends E{constructor(...e){super(...e),this.label=``,this.trackKey=``,this.selected=!1,this.reorderable=!1,this.resizable=!1,this.#e=!1,this.#t=0,this.#n=0,this.#r=void 0,this.#o=e=>{if(this.#e){let n=e.screenY-this.#t,r=Math.max(sg,this.#n+n);this.#a(`track-resize-move`,r);return}this.#i(e)?this.style.cursor=`ns-resize`:this.style.cursor=``},this.#s=e=>{this.#i(e)&&(e.stopPropagation(),e.preventDefault(),this.#e=!0,this.#t=e.screenY,this.#n=this.offsetHeight,this.#r=e.pointerId,this.setPointerCapture(e.pointerId))},this.#c=e=>{if(!this.#e)return;let n=e.screenY-this.#t,r=Math.max(sg,this.#n+n);this.#a(`track-resize`,r),this.#u(e.pointerId)},this.#l=e=>{this.#e&&this.#u(this.#r)}}static{this.styles=_`
    :host {
      display: flex;
      align-items: center;
      background: color-mix(in oklch, var(--timeline-tab-bg, #2a2a2a) 70%, transparent);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: var(--timeline-tab-text, #ccc);
      font-size: 0.75rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid var(--timeline-grid-major-color, rgba(255,255,255,0.12));
      box-sizing: border-box;
      position: relative;
    }

    :host([selected]) {
      background: color-mix(in oklch, var(--timeline-tab-selected-bg, #3498db) 75%, transparent);
      color: white;
    }

    .handle {
      display: none;
      cursor: grab;
      padding: 0 4px;
      opacity: 0.5;
      font-size: 0.65rem;
    }

    :host([reorderable]) .handle {
      display: block;
    }

    .label {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 8px;
    }
  `}#e;#t;#n;#r;connectedCallback(){super.connectedCallback(),this.addEventListener(`pointermove`,this.#o),this.addEventListener(`pointerdown`,this.#s),this.addEventListener(`pointerup`,this.#c),this.addEventListener(`pointercancel`,this.#l),this.addEventListener(`lostpointercapture`,this.#l)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`pointermove`,this.#o),this.removeEventListener(`pointerdown`,this.#s),this.removeEventListener(`pointerup`,this.#c),this.removeEventListener(`pointercancel`,this.#l),this.removeEventListener(`lostpointercapture`,this.#l),this.#e=!1}render(){return C`
      <span class="handle">\u2630</span>
      <span class="label">${this.label}</span>
    `}#i(e){if(!this.resizable)return!1;let n=this.getBoundingClientRect();return e.clientY>=n.bottom-cg}#a(e,n){this.dispatchEvent(new CustomEvent(e,{detail:{trackKey:this.trackKey,height:n},bubbles:!0,composed:!0}))}#o;#s;#c;#l;#u(e){if(this.#e=!1,this.#t=0,this.#n=0,e!==void 0)try{this.releasePointerCapture(e)}catch{}this.#r=void 0,this.style.cursor=``}};k([A({type:String})],lg.prototype,`label`,void 0),k([A({type:String,attribute:`track-key`})],lg.prototype,`trackKey`,void 0),k([A({type:Boolean,reflect:!0})],lg.prototype,`selected`,void 0),k([A({type:Boolean,reflect:!0})],lg.prototype,`reorderable`,void 0),k([A({type:Boolean,reflect:!0})],lg.prototype,`resizable`,void 0),lg=k([O(`ixfx-timeline-track-tab`)],lg);function ug(e,n,r,i,a=0,o=0){return{x:e+r-i,y:n+a-o}}function dg(e,n,r,i,a=0,o=0){return{x:e-r+i,y:n-a+o}}function fg(e,n,r){return Math.max(n,Math.min(e,r))}var pg=_`
  :host {
    display: block;
    position: relative;
    overflow: hidden;
  }

  .scroll-container {
    overflow-x: auto;
    overflow-y: clip;
    width: 100%;
    height: 100%;
    position: relative;
    touch-action: pan-x;
    scrollbar-width: var(--scrollbar-width, auto);
    scrollbar-color: var(--scrollbar-color, auto);
  }

  .scroll-container.vertical {
    overflow-y: auto;
    touch-action: pan-x pan-y;
  }

  .spacer {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: -1;
  }

  .tile-pool {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }

  canvas {
    position: absolute;
    top: 0;
    pointer-events: auto;
  }

  .children-container {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
  }

  @property --left-fade {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@property --right-fade {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@keyframes scrollfade {
  0% {
    --left-fade: 0;
  }
  10%,
  100% {
    --left-fade: 3rem;
  }
  0%,
  90% {
    --right-fade: 3rem;
  }
  100% {
    --right-fade: 0;
  }
}

.scrollable {
  mask: linear-gradient(to right, #0000, #ffff var(--left-fade) calc(100% - var(--right-fade)), #0000);
  animation: scrollfade;
  animation-timeline: --scrollfade;
  scroll-timeline: --scrollfade x;
}

`;function mg(e,n){return e*n}function hg(e,n){return n===0?!0:e<=n}function gg(e,n){return e<0||n===0?0:hg(e,n)?(n-e)/2:0}function _g(e,n,r,i,a){if(n===0||e<0)return 0;let o=r+i*a;return e>=o?0:hg(r,i)?r:e+n>o?Math.max(0,o-e):n}function vg(e,n,r,i){if(r===0)return{firstTile:0,lastTile:0,tiles:[]};let a=mg(n,i.tileWidthMultiplier);if(hg(r,n))return{firstTile:0,lastTile:0,tiles:[{index:0,logicalX:0}]};let o=Math.floor(e/a),s=Math.floor((e+n-1)/a),c=Math.max(0,Math.ceil(r/a)-1),l=[],u=o,d=Math.min(s+i.tilesBuffer,c);for(let e=u;e<=d;e++){let n=e*a;if(!(n>=r)&&(l.push({index:e,logicalX:n}),l.length>=i.maxPoolSize))break}return{firstTile:Math.max(0,o),lastTile:l.length>0?l[l.length-1].index:0,tiles:l}}function yg(e,n){return e*n}function bg(e,n){return n===0?!0:e<=n}function xg(e,n){return e<0||n===0?0:bg(e,n)?(n-e)/2:0}function Sg(e,n,r,i,a){if(n===0||e<0)return 0;let o=r+i*a;return e>=o?0:bg(r,i)?r:e+n>o?Math.max(0,o-e):n}function Cg(e,n,r,i){if(r===0)return{firstRow:0,lastRow:0,rows:[]};let a=yg(n,i.tileHeightMultiplier);if(bg(r,n))return{firstRow:0,lastRow:0,rows:[{row:0,logicalY:0}]};let o=Math.floor(e/a),s=Math.floor((e+n-1)/a),c=Math.max(0,Math.ceil(r/a)-1),l=[],u=Math.min(s+i.tilesBuffer,c);for(let e=o;e<=u;e++){let n=e*a;if(!(n>=r)&&(l.push({row:e,logicalY:n}),l.length>=i.maxPoolSize))break}return{firstRow:Math.max(0,o),lastRow:l.length>0?l[l.length-1].row:0,rows:l}}function wg(e,n){let r=null,i=(...i)=>{r&&clearTimeout(r),r=setTimeout(()=>{e(...i)},n)};return i.cancel=()=>{r&&=(clearTimeout(r),null)},i}var Tg=[`#FF6B6B`,`#4ECDC4`,`#45B7D1`,`#96CEB4`,`#FFEAA7`,`#DDA0DD`,`#98D8C8`,`#F7DC6F`,`#BB8FCE`,`#85C1E9`];function Eg(e){return Tg[e%Tg.length]}function Dg(e,n,r,i,a){i.fillStyle=`whitesmoke`,i.fillRect(a.x,a.y,a.width,a.height),i.fillStyle=Eg(e),i.strokeStyle=Eg(e),i.lineWidth=2,i.beginPath(),i.moveTo(a.x,a.y),i.lineTo(a.x+a.width,a.y+a.height),i.moveTo(a.x+a.width,a.y),i.lineTo(a.x,a.y+a.height),i.stroke(),i.font=`24pt system-ui`,i.textBaseline=`top`,i.fillText(`#${e}/${n}`,a.x+20,a.y+20),i.font=`18pt system-ui`,i.fillText(`Pos: ${Math.round(a.x)},${Math.round(a.y)}`,a.x+20,a.y+60),i.fillText(`Size: ${Math.round(a.width)}x${Math.round(a.height)}`,a.x+20,a.y+90),i.fillText(`VCanvas width: ${Math.round(r)}`,a.x+20,a.y+120);let o=a.x+a.width/2,s=a.y+a.height/2;i.beginPath(),i.moveTo(a.x,s),i.lineTo(a.x+a.width,s),i.moveTo(o,a.y),i.lineTo(o,a.y+a.height),i.stroke(),i.strokeRect(a.x,a.y,a.width,a.height)}var Og=function(e,n,r,i){var a=arguments.length,o=a<3?n:i===null?i=Object.getOwnPropertyDescriptor(n,r):i,s;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)o=Reflect.decorate(e,n,r,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(a<3?s(o):a>3?s(n,r,o):s(n,r))||o);return a>3&&o&&Object.defineProperty(n,r,o),o},kg=(e,n)=>`${e},${n}`,Ag=.5,jg=.5,Mg=2,Ng=.01,Pg=1,Fg=3,Ig=100,Lg=class extends E{_emitScrollEndEvent(e){let n=new CustomEvent(`scrollend-virtual`,{detail:{logicalScrollLeft:this._scrollLeft,logicalScrollTop:this._scrollTop,userGesture:e,containerScrollLeft:this._scrollContainer?.scrollLeft??0,containerScrollTop:this._scrollContainer?.scrollTop??0},bubbles:!0,composed:!0});this.dispatchEvent(n)}constructor(){super(),this.debugTrace=!1,this.debugDraw=!1,this.hinting=!1,this._viewportWidth=0,this._viewportHeight=0,this._scrollLeft=0,this._scrollTop=0,this._logicalHeight=0,this._tilePool=new Map,this._visibleTiles=new Set,this._pendingDraws=new Map,this._scrollContainer=null,this._spacer=null,this._tilePoolEl=null,this._childrenContainerEl=null,this._resizeObserver=null,this._positionedChildren=new Map,this._boundOnScroll=this._onScroll.bind(this),this._renderingOptions={tileWidthMultiplier:Ag,tileHeightMultiplier:jg,tilesBuffer:Mg,overlapPercent:Ng,overscrollPadMultiplier:Pg,maxPoolSize:Fg,scrollDebounceMs:Ig},this._dpr=window.devicePixelRatio||1,this._logicalWidth=0,this.logicalWidth=0,this.logicalHeight=0,this.drawCallback=null,this._scrollDebounce=wg(()=>{this._requestRedrawAll(`scrollDebounce`)},this._renderingOptions.scrollDebounceMs),this._scrollEndDebounce=wg(()=>{this._emitScrollEndEvent(!0)},this._renderingOptions.scrollDebounceMs),this._resizeDebounce=wg(()=>{this._onResize()},this._renderingOptions.scrollDebounceMs)}static{this.styles=pg}connectedCallback(){super.connectedCallback(),this._setupResizeObserver()}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._scrollEndDebounce.cancel(),this._pendingDraws.forEach(e=>e.abort()),this._tilePool.clear(),this._scrollContainer?.removeEventListener(`scroll`,this._boundOnScroll)}firstUpdated(){let e=this.shadowRoot?.querySelector(`.scroll-container`);this._scrollContainer=e,this._spacer=this.shadowRoot?.querySelector(`.spacer`),this._tilePoolEl=this.shadowRoot?.querySelector(`.tile-pool`),this._childrenContainerEl=this.shadowRoot?.querySelector(`.children-container`),this._scrollContainer&&this._scrollContainer.addEventListener(`scroll`,this._boundOnScroll),requestAnimationFrame(()=>{this._updateViewportDimensions(),this._updateSpacer(),this._updateScrollContainerClass(),this._recalculateTiles(`firstUpdated cb`),this._positionChildren(`firstUpdated cb`)})}set logicalWidth(e){this._logicalWidth=e,this._updateSpacer(),this._updateScrollContainerClass(),this.hasUpdated&&(this._updateTileWidths(`set logicalWidth`),this._recalculateTiles(`set logicalWidth`))}get logicalWidth(){return this._logicalWidth}set logicalHeight(e){this._logicalHeight=e,this._updateSpacer(),this._updateScrollContainerClass(),this.hasUpdated&&this._recalculateTiles(`set logicalHeight`)}get logicalHeight(){return this._logicalHeight}get effectiveLogicalWidth(){return this._logicalWidth||this._viewportWidth}get effectiveLogicalHeight(){return this._logicalHeight||this._viewportHeight}_setupResizeObserver(){this._resizeObserver=new ResizeObserver(()=>{this._resizeDebounce()}),this._resizeObserver.observe(this)}_onResize(){let e=this._viewportWidth,n=this._viewportHeight;this._updateViewportDimensions();let r=e!==this._viewportWidth,i=n!==this._viewportHeight;(r||i)&&(this._updateSpacer(),this._updateScrollContainerClass(),this._recalculateTiles(`onResize`))}_updateTileWidths(e){let n=this._getTileWidth();for(let e of this._tilePool.values()){let r=this._getTileClippedWidth(e.logicalX,n);e.canvas.width=r*this._dpr,e.canvas.style.width=`${r}px`,e.ctx.scale(this._dpr,this._dpr)}this._requestRedrawAll(`updateTileWidths (${e})`)}_updateViewportDimensions(){let e=this.getBoundingClientRect();this._viewportWidth=e.width,this._viewportHeight=e.height}_onScroll(){if(!this._scrollContainer)return;let e=this._scrollContainer.scrollLeft,n=this._scrollContainer.scrollTop;e===this._scrollLeft&&n===this._scrollTop||(this._scrollLeft=e,this._scrollTop=n,this._recalculateTiles(`onScroll`),this._emitScrollEvent(!0),this._scrollDebounce(),this._scrollEndDebounce())}_updateSpacer(){if(!this._spacer)return;let e=hg(this.effectiveLogicalWidth,this._viewportWidth),n=bg(this.effectiveLogicalHeight,this._viewportHeight);e&&n?this._spacer.style.display=`none`:(this._spacer.style.display=`block`,this._spacer.style.width=`${this.effectiveLogicalWidth}px`,this._spacer.style.height=`${this.effectiveLogicalHeight}px`),this._childrenContainerEl&&(this._childrenContainerEl.style.width=`${this.effectiveLogicalWidth}px`,this._childrenContainerEl.style.height=`${this.effectiveLogicalHeight}px`)}_updateScrollContainerClass(){if(!this._scrollContainer)return;let e=this.effectiveLogicalHeight>this._viewportHeight;this._scrollContainer.classList.toggle(`vertical`,e)}_getTileWidth(){return mg(this._viewportWidth,this._renderingOptions.tileWidthMultiplier)}_getTileHeight(){return yg(this._viewportHeight,this._renderingOptions.tileHeightMultiplier)}_getTileClippedWidth(e,n){return _g(e,n,this.effectiveLogicalWidth,this._viewportWidth,this._renderingOptions.overscrollPadMultiplier)}_getTileClippedHeight(e,n){return Sg(e,n,this.effectiveLogicalHeight,this._viewportHeight,this._renderingOptions.overscrollPadMultiplier)}_calculateTileRange(){return vg(this._scrollLeft,this._viewportWidth,this.effectiveLogicalWidth,this._renderingOptions)}_calculateTileRowRange(){return Cg(this._scrollTop,this._viewportHeight,this.effectiveLogicalHeight,this._renderingOptions)}_recalculateTiles(e){this._updateViewportDimensions();let{tiles:n}=this._calculateTileRange(),{rows:r}=this._calculateTileRowRange(),i=new Set;for(let{index:e,logicalX:a}of n)for(let{row:n,logicalY:o}of r)i.add(kg(e,n)),this._tilePool.has(kg(e,n))||this._tilePool.set(kg(e,n),this._createTile(e,n,a,o));let a=this._renderingOptions.maxPoolSize*Math.max(1,r.length),o=[...this._tilePool.keys()].filter(e=>!i.has(e)),s=[...i].filter(e=>!this._tilePool.has(e)),c=Math.min(o.length,s.length);for(let e=0;e<c;e++){let n=o[e],r=s[e],i=this._tilePool.get(n);if(i&&r){let[e,a]=r.split(`,`),o=Number(e),s=Number(a);this._tilePool.delete(n),i.col=o,i.row=s,i.logicalX=o*this._getTileWidth(),i.logicalY=s*this._getTileHeight(),i.visible=!1,i.canvas.dataset.tileKey=r,this._tilePool.set(r,i)}}let l=[...this._tilePool.keys()];if(l.length>a){let e=l.length-a;l.filter(e=>!i.has(e)).slice(0,e).forEach(e=>{let n=this._tilePool.get(e);n&&(this._tilePool.delete(e),n.canvas.remove())})}this._updateTiles(`recalculateTiles (${e})`)}_createTile(e,n,r,i){let a=document.createElement(`canvas`),o=kg(e,n);a.dataset.tileKey=o;let s=this._getTileWidth(),c=this._getTileHeight(),l=this._getTileClippedWidth(r,s),u=this._getTileClippedHeight(i,c),d=a.getContext(`2d`);if(!d)throw Error(`Could not get canvas context`);return this._viewportHeight===0&&this.#e(`Warning: Creating tile ${o} with viewport height 0. The VCanvas component may not be properly sized or visible.`),a.width=l*this._dpr,a.height=u*this._dpr,a.style.width=`${l}px`,a.style.height=`${u}px`,d.scale(this._dpr,this._dpr),this.#e(`Created tile ${o} at logicalX ${r} logicalY ${i}`),{canvas:a,ctx:d,logicalX:r,logicalY:i,col:e,row:n,visible:!1,isInDOM:!1}}_updateTiles(e){let{tiles:n,firstTile:r,lastTile:i}=this._calculateTileRange(),{rows:a,firstRow:o,lastRow:s}=this._calculateTileRowRange(),c=this._getTileWidth(),l=this._getTileHeight(),u=hg(this.effectiveLogicalWidth,this._viewportWidth),d=bg(this.effectiveLogicalHeight,this._viewportHeight),f=gg(this.effectiveLogicalWidth,this._viewportWidth),p=xg(this.effectiveLogicalHeight,this._viewportHeight),m=this._renderingOptions.tilesBuffer,h=[];for(let e of this._tilePool.values())e.visible=!1;this._visibleTiles.clear();for(let[n,a]of this._tilePool){let g=u?a.col===0:a.col>=r-m&&a.col<=i+m,_=d?a.row===0:a.row>=o-m&&a.row<=s+m;if(g&&_){this._visibleTiles.add(n);let r=a.col*c,i=a.row*l,o=u?f:r,s=d?p:i,m=this._getTileClippedWidth(r,c),g=this._getTileClippedHeight(i,l);(!a.visible||a.logicalX!==r||a.logicalY!==i||a.canvas.style.left!==`${o}px`||a.canvas.style.top!==`${s}px`||a.canvas.width!==m*this._dpr||a.canvas.height!==g*this._dpr)&&(a.logicalX=r,a.logicalY=i,a.canvas.width=m*this._dpr,a.canvas.style.width=`${m}px`,a.canvas.height=g*this._dpr,a.canvas.style.height=`${g}px`,a.canvas.style.left=`${o}px`,a.canvas.style.top=`${s}px`,a.ctx.scale(this._dpr,this._dpr),!a.isInDOM&&this._tilePoolEl&&(this._tilePoolEl.appendChild(a.canvas),a.isInDOM=!0),a.visible||(h.push(n),this._requestTileDraw(`updateTiles(${e})`,n))),a.visible=!0}else a.visible&&(a.visible=!1,a.isInDOM=!1,a.canvas.remove())}for(let{index:r,logicalX:i}of n)for(let{row:n,logicalY:o}of a){let a=kg(r,n);if(!this._tilePool.has(a)&&this._tilePoolEl){let s=this._createTile(r,n,i,o),c=u?f:i,l=d?p:o;s.canvas.style.left=`${c}px`,s.canvas.style.top=`${l}px`,s.visible=!0,s.isInDOM=!0,this._tilePoolEl.appendChild(s.canvas),this._tilePool.set(a,s),this._visibleTiles.add(a),h.push(a),this._requestTileDraw(`updateTiles(${e})`,a)}}return h}_requestRedrawAll(e){this.#e(`Requesting _requestRedrawAll: ${e} visible tiles: ${this._visibleTiles.size} pending draws: ${this._pendingDraws.size}`),this._pendingDraws.forEach(e=>e.abort()),this._pendingDraws.clear();for(let n of this._visibleTiles)this._requestTileDraw(`requestRedrawAll(${e})`,n)}#e(e){this.debugTrace&&console.log(`[VCanvas]`,e)}_requestTileDraw(e,n,r){let i=this._tilePool.get(n);if(!i||!this.drawCallback)return;let a=new AbortController;this._pendingDraws.set(n,a);let o=this._getTileWidth(),s=this._getTileHeight(),c=hg(this.effectiveLogicalWidth,this._viewportWidth),l=bg(this.effectiveLogicalHeight,this._viewportHeight),u;if(r)u=r;else{let e=o*this._renderingOptions.overlapPercent,n=s*this._renderingOptions.overlapPercent;u={x:c?0:i.logicalX-e,y:l?0:i.logicalY-n,width:c?this.effectiveLogicalWidth:o+e*2,height:l?this.effectiveLogicalHeight:s+n*2}}i.ctx.save(),i.ctx.translate(-i.logicalX,-i.logicalY);let d=u.x-i.logicalX,f=u.y-i.logicalY;r?(i.ctx.beginPath(),i.ctx.rect(d,f,u.width,u.height),i.ctx.clip(),i.ctx.clearRect(d,f,u.width,u.height)):i.ctx.clearRect(0,0,i.canvas.width,i.canvas.height),this.debugDraw&&Dg(i.col,this._tilePool.size,this.effectiveLogicalWidth,i.ctx,u);try{this.drawCallback(i.ctx,u,a.signal)}finally{i&&i.ctx.restore(),this._pendingDraws.delete(n)}}_emitScrollEvent(e){let n=new CustomEvent(`scroll-virtual`,{detail:{logicalScrollLeft:this._scrollLeft,logicalScrollTop:this._scrollTop,userGesture:e,containerScrollLeft:this._scrollContainer?.scrollLeft??0,containerScrollTop:this._scrollContainer?.scrollTop??0,viewportStartLogical:this._scrollLeft,viewportEndLogical:this._scrollLeft+this._viewportWidth,viewportStartLogicalY:this._scrollTop,viewportEndLogicalY:this._scrollTop+this._viewportHeight},bubbles:!0,composed:!0});this.dispatchEvent(n)}isRegionVisible(e){let n=this._scrollLeft,r=this._scrollLeft+this._viewportWidth,i=e.x+e.width>n&&e.x<r,a=this._scrollTop,o=this._scrollTop+this._viewportHeight,s=e.y+e.height>a&&e.y<o;return i&&s}_updateScrollPosition(e){this._scrollContainer&&(this._scrollContainer.scrollLeft=this._scrollLeft,this._scrollContainer.scrollTop=this._scrollTop),this._recalculateTiles(`updateScrollPosition`),this._emitScrollEvent(e),this._scrollDebounce()}get logicalScrollLeft(){return this._scrollLeft}set logicalScrollLeft(e){let n=this._scrollLeft,r=fg(e,0,Math.max(0,this.effectiveLogicalWidth-this._viewportWidth));r!==this._scrollLeft&&(this._scrollLeft=r,this.requestUpdate(`logicalScrollLeft`,n),this._updateScrollPosition(!1))}get logicalScrollTop(){return this._scrollTop}set logicalScrollTop(e){let n=this._scrollTop,r=fg(e,0,Math.max(0,this.effectiveLogicalHeight-this._viewportHeight));r!==this._scrollTop&&(this._scrollTop=r,this.requestUpdate(`logicalScrollTop`,n),this._updateScrollPosition(!1))}get containerScrollLeft(){return this._scrollContainer?.scrollLeft??0}get containerScrollTop(){return this._scrollContainer?.scrollTop??0}get viewportWidth(){return this._viewportWidth}get viewportHeight(){return this._viewportHeight}setRenderingOptions(e){this._renderingOptions={...this._renderingOptions,...e},this._recalculateTiles(`setRenderingOptions`)}getRenderingOptions(){return this._renderingOptions}invalidateAll(){this._requestRedrawAll(`invalidateAll`)}invalidateRegion(e,n,r,i){this.#e(`invalidateRegion: ${e},${n},${r},${i}`);let a=this._getTileWidth(),o=this._getTileHeight(),{firstTile:s,lastTile:c}=this._calculateTileRange(),{firstRow:l,lastRow:u}=this._calculateTileRowRange(),d=this._renderingOptions.overlapPercent,f=Math.floor(e/a),p=Math.ceil((e+r)/a),m=Math.floor(n/o),h=Math.ceil((n+i)/o);for(let g=Math.max(s,f);g<=Math.min(c,p);g++)for(let s=Math.max(l,m);s<=Math.min(u,h);s++){let c=kg(g,s);if(this._visibleTiles.has(c)){let s=this._tilePool.get(c);if(s){let l=a*d,u=o*d,f=s.logicalX-l,p=s.logicalX+a+l,m=s.logicalY-u,h=s.logicalY+o+u,g=Math.max(e,f),_=Math.min(e+r,p)-g,v=Math.max(n,m),y=Math.min(n+i,h)-v;if(_>0&&y>0){let e={x:g,y:v,width:_,height:y};this._requestTileDraw(`invalidateRegion`,c,e)}}}}}convertFromViewportToCanvas(e,n){let r=gg(this.effectiveLogicalWidth,this._viewportWidth),i=xg(this.effectiveLogicalHeight,this._viewportHeight);return ug(e,n,this._scrollLeft,r,this._scrollTop,i)}convertFromCanvasToViewport(e,n){let r=gg(this.effectiveLogicalWidth,this._viewportWidth),i=xg(this.effectiveLogicalHeight,this._viewportHeight);return dg(e,n,this._scrollLeft,r,this._scrollTop,i)}positionChildRange(e,n,r,i,a){if(Number.isNaN(n)||Number.isNaN(r)){console.warn(`positionChildRange: Invalid startX or endX values: ${n}, ${r}`);return}let o=Array.from(this.children).filter(n=>n.matches?.(e)),s=i??0,c=a??this.effectiveLogicalHeight;for(let e of o)this._positionedChildren.set(e,{startX:n,endX:r,startY:s,endY:c});this._positionChildren(`positionChildRange`)}manualChildPositioningUpdate(){this._positionChildren(`manualChildPositioningUpdate`)}positionChildClear(e){for(let[n]of this._positionedChildren)n.matches?.(e)&&(this._positionedChildren.delete(n),n.removeAttribute(`style`))}_positionChildren(e){if(this.#e(`_positionChildren: ${e} positionedChildren: ${this._positionedChildren.size}`),this.hasUpdated&&this._childrenContainerEl)for(let[e,n]of this._positionedChildren){let r=n.endX-n.startX,i=n.endY-n.startY;e.setAttribute(`style`,`position: absolute; left: ${n.startX}px; top: ${n.startY}px; width: ${r}px; height: ${i}px;`)}}render(){return C`
      <div class=${Nh({"scroll-container":!0,scrollable:this.hinting})}>
        <div class="spacer"></div>
        <div class="tile-pool"></div>
        <div class="children-container">
          <slot></slot>
        </div>
      </div>
    `}};Og([A({type:Boolean})],Lg.prototype,`hinting`,void 0),Og([A()],Lg.prototype,`logicalWidth`,null),Og([A()],Lg.prototype,`logicalHeight`,null),Og([A({type:Number})],Lg.prototype,`logicalScrollLeft`,null),Og([A({type:Number})],Lg.prototype,`logicalScrollTop`,null),Lg=Og([ct(`x-vcanvas`)],Lg);var Rg=1e4,zg=24,Q=class extends E{constructor(...e){super(...e),this.tracks=[],this.events=[],this.min=0,this.max=1e3,this.trackHeight=`fixed`,this.userScale=`normal`,this.reorderable=!1,this.metaEnabled=!1,this.altMajorBg=!1,this.defaultTrackHeight=48,this.gridMode=`adaptive`,this.minorStep=10,this.onDragging=null,this.formatLabel=String,this._ppu=1,this._viewRange={min:0,max:4e3},this._vViewRange={min:0,max:1},this._vScale=1,this._selectedIds=new Set,this._tickledId=void 0,this._drag={kind:`none`},this._metaHeight=120,this._trackHeightOverrides=new Map,this._trackLayout=[],this._internalEvents=[],this._internalTracks=[],this.#e=null,this.#t={},this.#n=null,this.#r=24,this.#i=void 0,this.#a=null,this.#o=!1,this.#s=!1,this.#C=e=>{this.#s?(this._viewRange=this.#_(this._viewRange.min,this._ppu),this.#m(this._vViewRange.min,this._vViewRange.max)):(this.#s=!0,this.#v(),this.#h(),this.#E()),this.#y(),this.#S()},this.#w=(e,n,r)=>{let i=this._ppu,a={x:n.x/i+this.min,y:n.y,width:n.width/i,height:n.height};this.#t=Kh(this);let o=Fh(this._viewRange,this.userScale,this.#c(),this.gridMode,this.minorStep,i),s=this._internalTracks.map(e=>({key:e.key,color:e.color}));Vh(e,a,this._trackLayout,s,this.#t,i),zh(e,a,o,this.altMajorBg,this.#t,i),Hh(e,a,this._internalEvents,this._trackLayout,this._selectedIds,this._tickledId,this._drag,this.#t,i),Uh(e,this._drag,i);let c=this.#e?.logicalScrollTop??0;Bh(e,a,o,this.#r,this.formatLabel,this.#t,i,c)},this.#T=e=>{let n=e.detail;if(n.userGesture===!1)return;let r=this._ppu;if(r<=0)return;let i=n.logicalScrollLeft/r+this.min;if(this._viewRange=this.#_(i,r),this._vScale>0){let e=this._vViewRange.max-this._vViewRange.min,r=n.logicalScrollTop/this._vScale;this.#m(r,r+e)}},this.#D=e=>{let n=e.detail,r=n.b-n.a,i=this.#c();r>0&&(this._ppu=Math.max(this.#l(),Math.min(i/r,Rg))),this._viewRange=this.#_(n.a,this._ppu),this.#y()},this.#O=e=>{let n=e.detail;this.#m(n.a,n.b)},this.#k=e=>{let n=e.currentTarget;n.setPointerCapture(e.pointerId),e.stopPropagation(),e.preventDefault();let r=n.getBoundingClientRect(),i=r.height>0?(e.clientY-r.top)/r.height:.5,a=this._vViewRange.max-this._vViewRange.min,o=this._vViewRange.min+i*a;this._drag={kind:`v-axis-zoom`,anchorBaseY:o,startScreenX:e.screenX,startScreenY:e.screenY,startVMin:this._vViewRange.min,startVMax:this._vViewRange.max,startVScale:this._vScale}},this.#A=e=>{if(this._drag.kind!==`v-axis-zoom`)return;let n=this._drag,r=e.screenX-n.startScreenX,i=e.screenY-n.startScreenY;if(Math.abs(r)+Math.abs(i)<5)return;let a=$h(r,4),o=$h(i,4),s=tg(n.startVMin,n.startVMax,n.startVScale,n.anchorBaseY,a,o);this.setVerticalZoomPan(s.vMin,s.vMax)},this.#j=e=>{this._drag.kind===`v-axis-zoom`&&(e.currentTarget.releasePointerCapture(e.pointerId),this._drag={kind:`none`})},this.#F=e=>{let{trackKey:n,height:r}=e.detail;this.#L(n,r)},this.#I=e=>{let{trackKey:n,height:r}=e.detail;this.#L(n,r),this.dispatchEvent(new CustomEvent(`track-resize`,{detail:{trackKey:n,height:r},bubbles:!0,composed:!0}))}}static{this.styles=[og]}#e;#t;#n;#r;#i;#a;#o;#s;get pxPerUnit(){return this._ppu}get axisHeight(){return this.#r}get tabWidth(){return this.#P}#c(){return this.#e?.viewportWidth??this.#e?.clientWidth??800}#l(){let e=this.max-this.min;return e<=0?1:this.#c()/e}#u(){return this.#e?.viewportHeight??this.#e?.clientHeight??300}#d(){let e=0;for(let n of this._internalTracks){if(n.hidden)continue;let r=this._trackHeightOverrides.get(n.key);e+=r??n.height??this.defaultTrackHeight}return e||1}#f(){let e=1/0;for(let n of this._internalTracks){if(n.hidden)continue;let r=this._trackHeightOverrides.get(n.key)??n.height??this.defaultTrackHeight;r<e&&(e=r)}return e===1/0?this.defaultTrackHeight:e}#p(){let e=0;for(let n of this._internalTracks){if(n.hidden)continue;let r=this._trackHeightOverrides.get(n.key)??n.height??this.defaultTrackHeight;r>e&&(e=r)}return e||this.defaultTrackHeight}#m(e,n){let r=this.#d(),i=this.#u()-this.#r,a=e,o=n,s=this.#p(),c=Math.max(s,r*.05),l=this.#f(),u=i>0?i*l/zg:r,d=Math.min(r,u),f=o-a;if(f<c){let e=(a+o)/2;a=e-c/2,o=e+c/2,f=c}if(f>d){let e=(a+o)/2;a=e-d/2,o=e+d/2,f=d}o>r&&(o=r,a=Math.max(0,o-f)),a<0&&(a=0,o=Math.min(r,a+f)),this._vViewRange={min:a,max:o},this._vScale=i>0?i/(o-a):1}#h(){let e=this.#d();this.#m(0,e)}get#g(){return this._vViewRange.min*this._vScale}#_(e,n){let r=this.#c(),i=n>0?r/n:this.max-this.min,a=e,o=a+i;return o>this.max&&(o=this.max,a=Math.max(this.min,o-i)),a<this.min&&(a=this.min,o=Math.min(this.max,a+i)),{min:a,max:o}}setPpu(e){this._ppu=Math.max(this.#l(),Math.min(e,Rg)),this._viewRange=this.#_(this._viewRange.min,this._ppu)}setViewRange(e){let n=this.#c(),r=e.max-e.min;r>0&&(this._ppu=Math.max(this.#l(),Math.min(n/r,Rg))),this._viewRange=this.#_(e.min,this._ppu)}setZoomPan(e,n){this._ppu=Math.max(this.#l(),Math.min(n,Rg)),this._viewRange=this.#_(e,this._ppu)}setVerticalZoomPan(e,n){this.#m(e,n)}selectAll(){this._selectedIds=new Set(this._internalEvents.map(e=>e.id)),this.#R(),this.#S()}deselectAll(){this._selectedIds=new Set,this.#R(),this.#S()}getTrackEvents(e){return this._internalEvents.filter(n=>n.trackKey===e)}get selectedIds(){return[...this._selectedIds]}set selectedIds(e){this._selectedIds=new Set(e),this.#R(),this.#S()}selectTrack(e,n=!1){this.dispatchEvent(new CustomEvent(`track-select`,{detail:{trackKey:e,shiftKey:n},bubbles:!0,composed:!0}))}resetTrackHeights(){this._trackHeightOverrides=new Map,this.#o=!0}static{this.defaultDragSnapping=()=>({})}static{this.gridSnapping=e=>{let{gridResolution:n,currentStart:r,currentEnd:i}=e,{minorStep:a}=n;return{start:Math.round(r/a)*a,end:Math.round(i/a)*a}}}processDrag(e,n,r,i,a,o,s,c){let l=i,u=a,d=o;if(this.onDragging){let f=this.onDragging({eventId:e,rawLogicalX:n,rawY:r,currentStart:i,currentEnd:a,currentTrackKey:o,gridResolution:c,originTrackKey:s});l=f.start??i,u=f.end??a,d=f.trackKey??o}return this.dispatchEvent(new CustomEvent(`dragging`,{detail:{eventId:e,start:l,end:u,trackKey:d,rawLogicalX:n,rawY:r,originTrackKey:s},bubbles:!0,composed:!0})),{start:l,end:u,trackKey:d}}getVCanvas(){return this.#e}get tickledEvent(){return this._tickledId===void 0?null:this._internalEvents.find(e=>e.id===this._tickledId)??null}firstUpdated(){this.#e=this.shadowRoot?.querySelector(`x-vcanvas`),this.#e&&(this.#e.drawCallback=this.#w,this.#e.addEventListener(`scroll-virtual`,this.#T),this.#n=ng(this,this.#e),this.#a=new ResizeObserver(this.#C),this.#a.observe(this.#e))}disconnectedCallback(){super.disconnectedCallback(),this.#n?.(),this.#n=null,this.#a?.disconnect(),this.#a=null}willUpdate(e){let n=!1,r=!1,i=!1;e.has(`tracks`)&&(this._internalTracks=[...this.tracks],n=!0,r=!0),e.has(`events`)&&(this._internalEvents=[...this.events]),e.has(`trackHeight`)&&(this.trackHeight!==`free`&&this._trackHeightOverrides.size>0&&(this._trackHeightOverrides=new Map),n=!0,r=!0),(e.has(`_vScale`)||e.has(`defaultTrackHeight`)||e.has(`_trackHeightOverrides`))&&(n=!0),(e.has(`min`)||e.has(`max`))&&(i=!0),this.#o&&(this.#o=!1,r=!0),i&&this.#v(),r&&this.#h(),n&&this.#E()}updated(e){(e.has(`_ppu`)||e.has(`_viewRange`)||e.has(`min`)||e.has(`max`))&&(this.#y(),this.#S()),(e.has(`events`)||e.has(`userScale`)||e.has(`altMajorBg`)||e.has(`gridMode`)||e.has(`minorStep`))&&this.#S(),e.has(`_trackLayout`)&&(this.#b(),this.#N(),this.#S()),(e.has(`_vViewRange`)||e.has(`_vScale`))&&(this.#M(),this.#S()),this._tickledId!==this.#i&&(this.#i=this._tickledId,this.dispatchEvent(new CustomEvent(`tickle-change`,{detail:{event:this.tickledEvent},bubbles:!0,composed:!0})))}render(){let e=this.#d();return C`
      <div class="content-wrapper">
        <div class="content-area">
          <div class="v-axis-zone"
            @pointerdown=${this.#k}
            @pointermove=${this.#A}
            @pointerup=${this.#j}
            @pointercancel=${this.#j}
          ></div>
          <div class="tab-column">
            ${this._internalTracks.filter(e=>!e.hidden).map(e=>this._trackLayout.find(n=>n.trackKey===e.key)?C`
                  <ixfx-timeline-track-tab
                    .label=${e.label}
                    track-key="${e.key}"
                    ?resizable=${this.trackHeight!==`none`}
                    ?reorderable=${this.reorderable}
                    @click=${n=>this.selectTrack(e.key,n.shiftKey)}
                    @track-resize-move=${this.#F}
                    @track-resize=${this.#I}
                  ></ixfx-timeline-track-tab>
                `:T)}
          </div>
          <x-vcanvas></x-vcanvas>
        </div>
        <div class="v-zoom">
          <ixfx-range-multi
            orientation="vertical"
            min="0"
            max="${e}"
            a="${this._vViewRange.min}"
            b="${this._vViewRange.max}"
            step="any"
            crossover="stop"
            resize-mode="bipolar-flex"
            @input=${this.#O}
          ></ixfx-range-multi>
        </div>
      </div>

      <div class="h-zoom">
        <ixfx-range-multi
          min="${this.min}"
          max="${this.max}"
          a="${this._viewRange.min}"
          b="${this._viewRange.max}"
          crossover="stop"
          resize-mode="bipolar-flex"
          @input=${this.#D}
        ></ixfx-range-multi>
      </div>

      <div class="meta-resizer ${this.metaEnabled?`visible`:``}"></div>
      <div class="meta-area ${this.metaEnabled?`visible`:``}" style="height:${this._metaHeight}px"></div>
    `}#v(){let e=this.#c(),n=this.max-this.min,r=.8;this._ppu=n>0?e/(n*r):1,this._viewRange={min:this.min,max:this.min+n*r},this.#y()}#y(){if(!this.#e)return;let e=this.max-this.min;this.#e.logicalWidth=e*this._ppu,this.#b(),this.#x()}#b(){if(!this.#e)return;let e=this._trackLayout.reduce((e,n)=>e+n.height,0),n=Math.max(e,40)+this.#r;this.#e.logicalHeight=n,this.#e.logicalScrollTop=this.#g}#x(){this.#e&&(this.#e.logicalScrollLeft=(this._viewRange.min-this.min)*this._ppu)}#S(){this.#e?.invalidateAll()}#C;#w;#T;#E(){let e=[],n=this.#r;for(let r of this._internalTracks){if(r.hidden)continue;let i=this._trackHeightOverrides.get(r.key)??r.height??this.defaultTrackHeight,a=Math.round(i*this._vScale);e.push({trackKey:r.key,y:n,height:a}),n+=a}this._trackLayout=e}#D;#O;#k;#A;#j;#M(){this.#b(),this.#N()}#N(){let e=this.shadowRoot?.querySelector(`.tab-column`);if(!e)return;let n=this.#e?.logicalScrollTop??0;e.style.transform=`translateY(${-n}px)`;for(let n of this._trackLayout){let r=e.querySelector(`ixfx-timeline-track-tab[track-key="${n.trackKey}"]`);r&&(r.style.top=`${n.y}px`,r.style.height=`${n.height}px`)}}get#P(){let e=getComputedStyle(this).getPropertyValue(`--timeline-tab-width`).trim();return Number.parseInt(e,10)||120}#F;#I;#L(e,n){if(this.trackHeight===`fixed`)this.defaultTrackHeight=n;else if(this.trackHeight===`free`){let r=new Map(this._trackHeightOverrides);r.set(e,n),this._trackHeightOverrides=r}}#R(){this.dispatchEvent(new CustomEvent(`selection-change`,{detail:{selectedIds:[...this._selectedIds]},bubbles:!0,composed:!0}))}};k([A({type:Array})],Q.prototype,`tracks`,void 0),k([A({type:Array})],Q.prototype,`events`,void 0),k([A({type:Number})],Q.prototype,`min`,void 0),k([A({type:Number})],Q.prototype,`max`,void 0),k([A({type:String,attribute:`track-height`})],Q.prototype,`trackHeight`,void 0),k([A({type:String,attribute:`user-scale`})],Q.prototype,`userScale`,void 0),k([A({type:Boolean})],Q.prototype,`reorderable`,void 0),k([A({type:Boolean,attribute:`meta`})],Q.prototype,`metaEnabled`,void 0),k([A({type:Boolean,attribute:`alt-major-bg`})],Q.prototype,`altMajorBg`,void 0),k([A({type:Number,attribute:`default-track-height`})],Q.prototype,`defaultTrackHeight`,void 0),k([A({type:String,attribute:`grid-mode`})],Q.prototype,`gridMode`,void 0),k([A({type:Number,attribute:`minor-step`})],Q.prototype,`minorStep`,void 0),k([A({type:Object})],Q.prototype,`onDragging`,void 0),k([j()],Q.prototype,`_ppu`,void 0),k([j()],Q.prototype,`_viewRange`,void 0),k([j()],Q.prototype,`_vViewRange`,void 0),k([j()],Q.prototype,`_vScale`,void 0),k([j()],Q.prototype,`_selectedIds`,void 0),k([j()],Q.prototype,`_tickledId`,void 0),k([j()],Q.prototype,`_drag`,void 0),k([j()],Q.prototype,`_metaHeight`,void 0),k([j()],Q.prototype,`_trackHeightOverrides`,void 0),k([j()],Q.prototype,`_trackLayout`,void 0),k([j()],Q.prototype,`_internalEvents`,void 0),k([j()],Q.prototype,`_internalTracks`,void 0),Q=k([O(`ixfx-timeline`)],Q);function Bg(e,n,r,i){return i===`linear`?(e-n)/(r-n):Math.log(e/n)/Math.log(r/n)}function Vg(e,n,r,i){return i===`linear`?n+e*(r-n):n*(r/n)**e}function Hg(e,n,r,i){if(!i||i<=1)return e;let a=(r-n)/i;return Math.round((e-n)/a)*a+n}var $=class extends E{constructor(...e){super(...e),this.xMin=1,this.xMax=100,this.x=50,this.yMin=1,this.yMax=100,this.y=50,this.xScale=`linear`,this.yScale=`linear`,this.xLabel=`X`,this.yLabel=`Y`,this.showCrosshairs=!1,this.showGrid=!1,this.hideCursor=!1,this.disabled=!1,this._dragging=!1,this._dragStartX=0,this._dragStartY=0,this._pressedKeys=new Set,this._onKeyDown=e=>{if(!this.disabled){if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))e.preventDefault(),this._pressedKeys.add(e.key),this._handleKeyboardMove(e.shiftKey);else if(e.key===`Home`||e.key===`End`){e.preventDefault();let n=e.key===`Home`?this.xMin:this.xMax,r=e.key===`Home`?this.yMin:this.yMax;(n!==this.x||r!==this.y)&&(this.x=n,this.y=r,this.dispatchEvent(new CustomEvent(`input`,{detail:{x:this.x,y:this.y},bubbles:!0,composed:!0})))}}},this._onKeyUp=e=>{this._pressedKeys.delete(e.key)},this._handleKeyboardMove=e=>{let n=e?10:1,r=this.xMax-this.xMin,i=this.yMax-this.yMin,a=this.stopsX??this.stops,o=this.stopsY??this.stops,s=am(r,a,void 0)/n,c=am(i,o,void 0)/n,l=this.x,u=this.y;if(this._pressedKeys.has(`ArrowLeft`)&&(l=Math.max(this.xMin,this.x-s)),this._pressedKeys.has(`ArrowRight`)&&(l=Math.min(this.xMax,this.x+s)),this._pressedKeys.has(`ArrowUp`)&&(u=Math.min(this.yMax,this.y+c)),this._pressedKeys.has(`ArrowDown`)&&(u=Math.max(this.yMin,this.y-c)),l!==this.x||u!==this.y){let e=this.xSnapStep&&this.xSnapStep>0?Math.round(l/this.xSnapStep)*this.xSnapStep:l,n=this.ySnapStep&&this.ySnapStep>0?Math.round(u/this.ySnapStep)*this.ySnapStep:u;e=Hg(e,this.xMin,this.xMax,a),n=Hg(n,this.yMin,this.yMax,o),this.x=e,this.y=n,this.dispatchEvent(new CustomEvent(`input`,{detail:{x:this.x,y:this.y},bubbles:!0,composed:!0}))}},this._onPointerDown=e=>{e.preventDefault();let n=this.renderRoot.querySelector(`.xy-pad-area`);n?.focus(),n&&n.setPointerCapture(e.pointerId),this._dragging=!0,this._dragStartX=this.x,this._dragStartY=this.y,this.setAttribute(`dragging`,``),this._updateFromPointer(e),globalThis.addEventListener(`pointermove`,this._onPointerMove),globalThis.addEventListener(`pointerup`,this._onPointerUp)},this._onPointerMove=e=>{this._dragging&&(e.preventDefault(),this._updateFromPointer(e))},this._onPointerUp=()=>{let e=this.x!==this._dragStartX||this.y!==this._dragStartY;this._dragging=!1,this.removeAttribute(`dragging`),globalThis.removeEventListener(`pointermove`,this._onPointerMove),globalThis.removeEventListener(`pointerup`,this._onPointerUp),e&&this.dispatchEvent(new CustomEvent(`change`,{detail:{x:this.x,y:this.y},bubbles:!0,composed:!0}))}}static{this.styles=[D,zn,_`
    :host {
      display: block;
      width: 200px;
      height: 200px;
      touch-action: none;
      user-select: none;
      container-type: size;
      --marker-size: 10cqb;
      --crosshair-color: var(--surface-6);
      --crosshair-width: 2px;
      --crosshair-x-color: var(--crosshair-color);
      --crosshair-x-width: var(--crosshair-width);
      --crosshair-y-color: var(--crosshair-color);
      --crosshair-y-width: var(--crosshair-width);
      --grid-color: var(--surface-6);
      --grid-width: 1px;
      --_space-s: var(--space-s, 4px);
      --_space-m: var(--space-m, 8px);
    }
    .xy-pad-area {
      position: relative;
      width: 100%;
      height: 100%;
      background: var(--xy-pad-bg, var(--surface-3));
      border: var(--border);
      border-radius: var(--radius-m);
      overflow: hidden;
      box-shadow: var(--deboss-3);
      cursor: var(--cursor-display, crosshair);
    }
    :host([dragging]) .xy-pad-area {
      cursor: none;
    }

    .xy-pad-area:focus {
      outline: none;
    }

    .xy-pad-area:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
    .xy-pad-area::before,
    .xy-pad-area::after {
      content: '';
      position: absolute;
      pointer-events: none;
      opacity: var(--show-crosshairs, 0);
    }
    :host([show-crosshairs]) {
      --show-crosshairs: 1;
    }
    .xy-pad-area::before {
      left: 0;
      right: 0;
      top: calc(100% - var(--y-pct, 50) * 1%);
      height: var(--crosshair-y-width);
      background: var(--crosshair-y-color);
    }
    .xy-pad-area::after {
      top: 0;
      bottom: 0;
      left: calc(var(--x-pct, 50) * 1%);
      width: var(--crosshair-x-width);
      background: var(--crosshair-x-color);
    }

    .xy-pad-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(to right, var(--grid-color) var(--grid-width), transparent var(--grid-width)),
        linear-gradient(to bottom, var(--grid-color) var(--grid-width), transparent var(--grid-width));
      background-size: 10cqb 10cqb;
      pointer-events: none;
      opacity: var(--show-grid, 0);
    }
    :host([show-grid]) {
      --show-grid: 1;
    }
    
    .xy-pad-marker {
      position: absolute;
      width: var(--marker-size, 10cqb);
      height: var(--marker-size, 10cqb);
      border-radius: 50%;
      background: var(--surface-2-accent, var(--accent));
      top: calc(100% - var(--y-pct, 50) * 1%);
      left: calc(var(--x-pct, 50) * 1%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 2;
    }
    .xy-pad-label-x {
      position: absolute;
      bottom: var(--_space-s);
      color: var(--surface-muted-text);
      font-size: var(--text-s, 12px);
      pointer-events: none;
      width: 100%;
      text-align: center;
    }
    .xy-pad-label-y {
      position: absolute;
      top: var(--_space-s);
      left: var(--_space-m);
      color: var(--surface-muted-text);
      font-size: var(--text-s, 12px);
      pointer-events: none;
      writing-mode: sideways-lr;
      height:100%;
      text-align:center;
    }
  `]}_updateFromPointer(e){let n=this.renderRoot.querySelector(`.xy-pad-area`);if(!n)return;let r=n.getBoundingClientRect(),i=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),a=Math.max(0,Math.min(1,1-(e.clientY-r.top)/r.height)),o=Vg(i,this.xMin,this.xMax,this.xScale),s=Vg(a,this.yMin,this.yMax,this.yScale),c=this.xSnapStep&&this.xSnapStep>0?Math.round(o/this.xSnapStep)*this.xSnapStep:o,l=this.ySnapStep&&this.ySnapStep>0?Math.round(s/this.ySnapStep)*this.ySnapStep:s,u=this.stopsX??this.stops,d=this.stopsY??this.stops;c=Hg(c,this.xMin,this.xMax,u),l=Hg(l,this.yMin,this.yMax,d),this.x=c,this.y=l,this.dispatchEvent(new CustomEvent(`input`,{detail:{x:this.x,y:this.y},bubbles:!0,composed:!0}))}_setPctVars(){let e=Math.max(this.xMin,Math.min(this.xMax,this.x)),n=Math.max(this.yMin,Math.min(this.yMax,this.y)),r=Bg(e,this.xMin,this.xMax,this.xScale)*100,i=Bg(n,this.yMin,this.yMax,this.yScale)*100;this.style.setProperty(`--x-pct`,`${r}`),this.style.setProperty(`--y-pct`,`${i}`);let a=r-50,o=i-50,s=Math.sqrt(a*a+o*o);this.style.setProperty(`--radius-pct`,`${s}`)}getRelativeX(){return Bg(Math.max(this.xMin,Math.min(this.xMax,this.x)),this.xMin,this.xMax,this.xScale)}getRelativeY(){return Bg(Math.max(this.yMin,Math.min(this.yMax,this.y)),this.yMin,this.yMax,this.yScale)}getPolar(){let e=this.getRelativeX()-.5,n=this.getRelativeY()-.5,r=Math.sqrt(e*e+n*n)*2,i=Math.atan2(n,e);return i<0&&(i+=2*Math.PI),{radius:r,angle:i}}updated(e){super.updated(e),this._setPctVars()}disconnectedCallback(){super.disconnectedCallback(),this._onPointerUp(),this._pressedKeys.clear()}render(){return C`
      <div class="xy-pad-area"
           tabindex=${this.disabled?-1:0}
           @pointerdown=${this._onPointerDown}
           @keydown=${this._onKeyDown}
           @keyup=${this._onKeyUp}
           @blur=${()=>this._pressedKeys.clear()}>
        ${this.showGrid?C`<div class="xy-pad-grid"></div>`:``}
        <div class="xy-pad-marker"></div>
        <div class="xy-pad-label-x">${this.xLabel}</div>
        <div class="xy-pad-label-y">${this.yLabel}</div>
      </div>
    `}};k([A({type:Number})],$.prototype,`xMin`,void 0),k([A({type:Number})],$.prototype,`xMax`,void 0),k([A({type:Number})],$.prototype,`x`,void 0),k([A({type:Number})],$.prototype,`yMin`,void 0),k([A({type:Number})],$.prototype,`yMax`,void 0),k([A({type:Number})],$.prototype,`y`,void 0),k([A({type:String})],$.prototype,`xScale`,void 0),k([A({type:String})],$.prototype,`yScale`,void 0),k([A({type:Number,attribute:`x-snap-step`})],$.prototype,`xSnapStep`,void 0),k([A({type:Number,attribute:`y-snap-step`})],$.prototype,`ySnapStep`,void 0),k([A({type:String})],$.prototype,`xLabel`,void 0),k([A({type:String})],$.prototype,`yLabel`,void 0),k([A({type:Boolean,reflect:!0,attribute:`show-crosshairs`})],$.prototype,`showCrosshairs`,void 0),k([A({type:Boolean,reflect:!0,attribute:`show-grid`})],$.prototype,`showGrid`,void 0),k([A({type:Boolean,reflect:!0,attribute:`hide-cursor`})],$.prototype,`hideCursor`,void 0),k([A({type:Boolean,reflect:!0})],$.prototype,`disabled`,void 0),k([A({type:Number})],$.prototype,`stops`,void 0),k([A({type:Number,attribute:`stops-x`})],$.prototype,`stopsX`,void 0),k([A({type:Number,attribute:`stops-y`})],$.prototype,`stopsY`,void 0),$=k([O(`ixfx-xy-pad`)],$);var Ug=ht(class extends gt{constructor(){super(...arguments),this.key=T}render(e,n){return this.key=e,n}update(e,[n,r]){return n!==this.key&&(gc(e),this.key=n),r}});function Wg(e){return typeof e==`object`&&!!e&&Symbol.asyncIterator in e}var Gg=class{#e;#t;#n;#r;#i=[];#a=!1;#o=0;#s;#c;constructor(e,n,r){this.#e=e,this.#n=n,this.#t={clearOnRequest:r?.clearOnRequest??!0,onError:r?.onError},e.addController(this)}hostConnected(){}hostDisconnected(){this.cancel()}get provider(){return this.#n}set provider(e){this.#n=e}get items(){return this.#i}get loading(){return this.#a}get loaded(){return this.#o}get total(){return this.#s}get progress(){if(!(this.#s===void 0||this.#s===0))return Math.min(this.#o/this.#s,1)}get error(){return this.#c}request(e){if(this.cancel(),!this.#n)return;this.#t.clearOnRequest&&(this.#i=[],this.#o=0),this.#s=void 0,this.#c=void 0,this.#a=!0,this.#e.requestUpdate(),this.#r=new AbortController;let{signal:n}=this.#r;this.#l(this.#n(e,n),n)}cancel(){this.#r?.abort(),this.#r=void 0,this.#a&&(this.#a=!1,this.#e.requestUpdate())}#l(e,n){Array.isArray(e)?(this.#d({items:e},n),this.#a=!1,this.#e.requestUpdate()):Wg(e)?this.#u(e,n):e.then(e=>{n.aborted||(this.#d({items:e},n),this.#a=!1,this.#e.requestUpdate())},e=>{n.aborted||this.#f(e)})}async#u(e,n){try{for await(let r of e){if(n.aborted)return;this.#d(r,n),this.#e.requestUpdate()}}catch(e){if(n.aborted)return;this.#f(e);return}n.aborted||(this.#a=!1,this.#e.requestUpdate())}#d(e,n){e.replace?(this.#i=[...e.items],this.#o=e.items.length):(this.#i=[...this.#i,...e.items],this.#o=this.#i.length),e.total!==void 0&&(this.#s=e.total)}#f(e){this.#c=e,this.#a=!1,this.#t.onError?.(e),this.#e.requestUpdate()}},Kg=e=>e.split(/[\s,;]+/);function qg(e){let n=new Map;return{get:e=>n.get(e),set:(r,i)=>{n.has(r)&&n.delete(r),n.set(r,i),n.size>e&&n.delete(n.keys().next().value)},has:e=>n.has(e),clear:()=>n.clear()}}var Jg=class extends E{#e;#t;#n;#r;#i;constructor(){super(),this.placeholder=``,this.cacheSize=20,this.debounceMs=150,this.strict=!1,this.allowDuplicates=!1,this._tokens=[],this._draft=``,this._isOpen=!1,this._tickled=new $e(this,{getItems:()=>this.#e.items.map((e,n)=>({id:n,enabled:!0}))}),this.#e=new Gg(this,void 0,{clearOnRequest:!0,onError:e=>console.error(`[ixfx-ac-token] completionProvider error:`,e)}),this.#t=qg(20),this.#i=[],this.#o=e=>{e.target.closest(`.token-chip`)||this.shadowRoot?.querySelector(`input.draft`)?.focus()},this.#s=()=>{this._selectedTokenIndex=void 0,this.#S(this._draft)},this.#c=()=>{setTimeout(()=>{this._isOpen=!1,this._tickled.clearTickled(),this._selectedTokenIndex=void 0},120)},this.#l=e=>{let n=e.target.value;this._selectedTokenIndex=void 0;let r=(this.tokenizer??Kg)(n);if(r.length>1){for(let e=0;e<r.length-1;e++){let n=r[e].trim();n&&this.#g({label:n})}this._draft=r[r.length-1]??``}else this._draft=n;this.#S(this._draft)},this.#u=e=>{let n=e.target;if((e.metaKey||e.ctrlKey)&&e.key===`a`){e.preventDefault();let n=[...this._tokens.map(e=>e.label),this._draft.trim()].filter(Boolean);navigator.clipboard.writeText(n.join(` `)).catch(()=>{});return}if(this._selectedTokenIndex!==void 0&&e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey){e.preventDefault(),this.#h(e.key);return}this.#d(e,n)},this.#f=e=>{e.preventDefault();let n=e.clipboardData?.getData(`text/plain`)??``;if(!n)return;let r=(this.tokenizer??Kg)(this._draft+n).filter(Boolean);if(r.length!==0){if(r.length===1)this._draft=r[0];else{for(let e=0;e<r.length-1;e++){let n=r[e].trim();n&&this.#g({label:n})}this._draft=r[r.length-1]??``}this.updateComplete.then(()=>{this.shadowRoot?.querySelector(`input.draft`)?.setSelectionRange(this._draft.length,this._draft.length)}),this.#S(this._draft)}},this.#p=(e,n)=>{e.preventDefault(),this.#v(n)},this.#m=(e,n)=>{if(e.button!==0)return;e.preventDefault();let r=e.currentTarget,i=e.clientY,a=!1;r.setPointerCapture(e.pointerId);let o=()=>{r.removeEventListener(`pointermove`,s),r.removeEventListener(`pointerup`,c)},s=e=>{Math.abs(e.clientY-i)>28&&(a=!0,r.releasePointerCapture(e.pointerId),o(),this.#_(n),this.shadowRoot?.querySelector(`input.draft`)?.focus())},c=()=>{o(),a||(this._selectedTokenIndex=this._selectedTokenIndex===n?void 0:n,this.shadowRoot?.querySelector(`input.draft`)?.focus())};r.addEventListener(`pointermove`,s),r.addEventListener(`pointerup`,c)},this.#t=qg(this.cacheSize)}get tokens(){return this._tokens}set tokens(e){this._tokens=[...e],this.#y()}get value(){return this._tokens.map(e=>e.label).join(`, `)}connectedCallback(){super.connectedCallback(),this.#a()}disconnectedCallback(){super.disconnectedCallback(),this.#n!==void 0&&(clearTimeout(this.#n),this.#n=void 0)}updated(e){(e.has(`completionProvider`)||e.has(`cacheSize`))&&(this.#t=qg(this.cacheSize)),e.has(`completionProvider`)&&this.#a(),this.#e.items!==this.#i&&(this.#i=this.#e.items,this._tickled.clearTickled())}#a(){let e=this.getAttribute(`data-tokens`);if(!e||this.completionProvider){this.#r=void 0;return}let n=e.trim().split(/[\s,;]+/).filter(Boolean).map(e=>({label:e}));this.#r=En(n)}#o;#s;#c;#l;#u;#d(e,n){switch(e.key){case`ArrowLeft`:n.selectionStart===0&&n.selectionEnd===0&&(e.preventDefault(),this._selectedTokenIndex===void 0?this._tokens.length>0&&(this._selectedTokenIndex=this._tokens.length-1):this._selectedTokenIndex>0&&this._selectedTokenIndex--);break;case`ArrowRight`:this._selectedTokenIndex!==void 0&&(e.preventDefault(),this._selectedTokenIndex<this._tokens.length-1?this._selectedTokenIndex++:this._selectedTokenIndex=void 0);break;case`Backspace`:n.selectionStart===0&&n.selectionEnd===0&&(e.preventDefault(),this._selectedTokenIndex===void 0?this._tokens.length>0&&this.#_(this._tokens.length-1):this.#_(this._selectedTokenIndex));break;case`Enter`:{let n=this._tickled.tickledId;this._isOpen&&n!==void 0&&this.#e.items[n]?(e.preventDefault(),this.#v(this.#e.items[n])):!this.strict&&this._draft.trim()&&(e.preventDefault(),this.#g({label:this._draft.trim()}),this._draft=``,this.#x());break}case`ArrowDown`:if(!this._isOpen)return;e.preventDefault(),this._tickled.handleKeyboardNavigation(`next`),this.#w();break;case`ArrowUp`:if(!this._isOpen)return;e.preventDefault(),this._tickled.handleKeyboardNavigation(`previous`),this.#w();break;case`Escape`:e.preventDefault(),this.#x(),this._selectedTokenIndex=void 0;break}}#f;#p;#m;#h(e){let n=this._selectedTokenIndex;if(n===void 0)return;let r=this._tokens[n];if(!r)return;let i=r.label+e;this.#_(n),this._selectedTokenIndex=void 0,this._draft=i,this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`input.draft`);e&&e.setSelectionRange(e.value.length,e.value.length)}),this.#S(i)}#g(e){let n=this._tokens.length;this._tokens=[...this._tokens,e],this.dispatchEvent(new CustomEvent(`ac-token-add`,{detail:{item:e,index:n},bubbles:!0,composed:!0})),this.#y()}#_(e){let n=this._tokens[e];n&&(this._tokens=this._tokens.filter((n,r)=>r!==e),this._selectedTokenIndex!==void 0&&(this._selectedTokenIndex===e?this._selectedTokenIndex=void 0:this._selectedTokenIndex>e&&this._selectedTokenIndex--),this.dispatchEvent(new CustomEvent(`ac-token-remove`,{detail:{item:n,index:e},bubbles:!0,composed:!0})),this.#y())}#v(e){this.#g(e),this._draft=``,this.#x()}#y(){this.dispatchEvent(new CustomEvent(`ac-token-change`,{detail:{tokens:this._tokens},bubbles:!0,composed:!0}))}#b(e){if(this.allowDuplicates)return e;let n=new Set(this._tokens.map(e=>e.label));return e.filter(e=>!n.has(e.label))}#x(){this._isOpen=!1,this._tickled.clearTickled()}#S(e){let n=this.#C();if(!n){this._isOpen=!1;return}this.#n!==void 0&&clearTimeout(this.#n),this._isOpen=!0,this.#n=setTimeout(()=>{this.#e.provider=n,this.#e.request(e)},this.debounceMs)}#C(){let e=this.completionProvider??this.#r;if(e)return(n,r)=>{let i=this.#t.get(n);if(i!==void 0)return this.#b(i);let a=e(n,r);return Symbol.asyncIterator in new Object(a)?a:Array.isArray(a)?(this.#t.set(n,a),this.#b(a)):a.then(e=>(r.aborted||this.#t.set(n,e),this.#b(e)))}}#w(){this.updateComplete.then(()=>{this.shadowRoot?.querySelector(`.item.tickled`)?.scrollIntoView({block:`nearest`})})}#T(e,n){return C`
      <span
        class="token-chip ${this._selectedTokenIndex===n?`selected`:``}"
        title=${e.subLabel??T}
        @pointerdown=${e=>this.#m(e,n)}
      >
        ${e.icon?C`<ixfx-icon class="chip-icon" name=${e.icon}></ixfx-icon>`:T}
        <span class="chip-label">${e.label}</span>
      </span>
    `}#E(e,n){let r=this._tickled.isTickled(n);return C`
      <div
        class="item ${r?`tickled`:``}"
        role="option"
        id="ac-token-sugg-${n}"
        aria-selected=${r}
        @pointerenter=${()=>this._tickled.handlePointerEnter(n)}
        @pointerdown=${n=>this.#p(n,e)}
      >
        ${e.icon?C`<ixfx-icon class="sugg-icon" name=${e.icon}></ixfx-icon>`:T}
        <span class="sugg-label">${e.label}</span>
        ${e.subLabel?C`<span class="sugg-sublabel">${e.subLabel}</span>`:T}
      </div>
    `}#D(){let e=!this.#e.loading&&this.#e.items.length===0;return C`
      <div
        class="popup"
        role="listbox"
        aria-label="Suggestions"
        data-input-mode=${this._tickled.inputMode}
        @pointerleave=${e=>this._tickled.handlePointerLeave(e)}
      >
        ${e?C`<div class="no-results">No matching results</div>`:this.#e.items.map((e,n)=>this.#E(e,n))}
      </div>
    `}render(){let e=this._tickled.tickledId??-1,n=e>=0?`ac-token-sugg-${e}`:void 0,r=this._tokens.length===0&&this.placeholder||T;return C`
      <div class="wrapper" @click=${this.#o}>
        ${this._tokens.map((e,n)=>this.#T(e,n))}
        <input
          type="text"
          class="draft"
          .value=${this._draft}
          placeholder=${r}
          autocomplete="off"
          spellcheck="false"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded=${this._isOpen}
          aria-activedescendant=${n??T}
          @input=${this.#l}
          @keydown=${this.#u}
          @focus=${this.#s}
          @blur=${this.#c}
          @paste=${this.#f}
        >
        ${this.#e.loading?C`<span class="spinner" aria-hidden="true"></span>`:T}
      </div>
      ${this._isOpen?this.#D():T}
    `}static{this.styles=[D,et,tt,_`
    :host {
      display: block;
      position: relative;
      font-family: var(--font-family, system-ui, sans-serif);
      font-size: var(--text-m, 12px);
      color: var(--surface-2-text);
    }

    /* ---- Wrapper (looks like a text input) ---- */

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--ac-token-chip-gap, var(--space-xs, 3px));
      padding: var(--ac-token-input-padding, var(--space-xs, 3px) var(--space-m, 8px));
      background: var(--ac-token-input-background, var(--surface-3, var(--surface-2)));
      color: var(--surface-2-text);
      border: var(--ac-token-input-border, var(--border));
      border-radius: var(--ac-token-input-border-radius, var(--radius-m, 4px));
      cursor: text;
      min-height: 32px;
      box-sizing: border-box;
      transition: border-color var(--transition, 0.15s ease-out);
    }

    .wrapper:focus-within {
      border-color: var(--accent);
    }

    /* ---- Token chips ---- */

    .token-chip {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs, 3px);
      padding: 1px var(--space-m, 8px);
      background: var(--ac-token-chip-background, var(--surface-4));
      border: var(--ac-token-chip-border, var(--border));
      border-radius: var(--ac-token-chip-border-radius, var(--radius-s, 3px));
      user-select: none;
      cursor: default;
      font-size: var(--text-s, 11px);
      white-space: nowrap;
      touch-action: none;
      transition:
        background var(--transition, 0.1s ease-out),
        border-color var(--transition, 0.1s ease-out),
        color var(--transition, 0.1s ease-out);
    }

    .token-chip.selected {
      background: var(--ac-token-chip-selected-background, var(--accent));
      color: var(--ac-token-chip-selected-color, var(--accent-text, #fff));
      border-color: var(--accent);
    }

    .chip-icon {
      flex-shrink: 0;
      width: 1em;
      height: 1em;
    }

    /* ---- Draft input ---- */

    input.draft {
      flex: 1;
      min-width: 60px;
      border: none;
      background: transparent;
      color: inherit;
      font: inherit;
      outline: none;
      caret-color: var(--accent);
      padding: 1px 0;
      anchor-name: --ac-token-draft;
    }

    input.draft::placeholder {
      color: var(--surface-muted-text);
    }

    /* ---- Spinner ---- */

    .spinner {
      width: 12px;
      height: 12px;
      border: 2px solid var(--surface-5);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: ac-token-spin 0.7s linear infinite;
      flex-shrink: 0;
      pointer-events: none;
      margin-left: var(--space-xs, 3px);
    }

    @keyframes ac-token-spin {
      to { transform: rotate(360deg); }
    }

    /* ---- Popup ---- */

    .popup {
      position: fixed;
      position-anchor: --ac-token-draft;
      top: anchor(bottom);
      left: anchor(left);
      margin-top: 2px;
      position-try-fallbacks: --ac-token-popup-above;
      z-index: 200;
      background: var(--surface-3, var(--surface-2));
      border: var(--border);
      border-radius: var(--radius-m, 4px);
      box-shadow: var(--shadow-l, 0 4px 24px rgba(0, 0, 0, 0.5));
      padding: var(--space-xs, 3px) 0;
      max-height: 260px;
      min-width: 160px;
      overflow-y: auto;
      font-size: var(--ac-token-popup-font-size, var(--text-s, 11px));
    }

    @position-try --ac-token-popup-above {
      top: auto;
      bottom: anchor(top);
      left: anchor(left);
      margin-top: 0;
      margin-bottom: 2px;
    }

    /* ---- Suggestion items ---- */

    .item {
      /* tickledItemStyles provides base; override layout for popup context */
      display: flex;
      padding: var(--item-padding, var(--space-xs, 3px) var(--space-l, 12px));
      gap: var(--space-m, 8px);
      cursor: pointer;
      margin: 0 var(--space-xs, 3px);
      white-space: nowrap;
      min-height: 28px;
      user-select: none;
    }

    .sugg-icon {
      flex-shrink: 0;
      width: 1em;
      height: 1em;
    }

    .sugg-label {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .sugg-sublabel {
      flex-shrink: 0;
      margin-left: auto;
      color: var(--surface-muted-text);
      font-size: var(--text-s, 11px);
    }

    /* ---- Empty state ---- */

    .no-results {
      padding: var(--space-m, 8px) var(--space-l, 12px);
      color: var(--surface-muted-text);
      font-style: italic;
    }
  `]}};k([A({type:Object})],Jg.prototype,`completionProvider`,void 0),k([A({type:Object})],Jg.prototype,`tokenizer`,void 0),k([A({type:String})],Jg.prototype,`placeholder`,void 0),k([A({type:Number,attribute:`cache-size`})],Jg.prototype,`cacheSize`,void 0),k([A({type:Number,attribute:`debounce-ms`})],Jg.prototype,`debounceMs`,void 0),k([A({type:Boolean})],Jg.prototype,`strict`,void 0),k([A({type:Boolean,attribute:`allow-duplicates`})],Jg.prototype,`allowDuplicates`,void 0),k([j()],Jg.prototype,`_tokens`,void 0),k([j()],Jg.prototype,`_draft`,void 0),k([j()],Jg.prototype,`_selectedTokenIndex`,void 0),k([j()],Jg.prototype,`_isOpen`,void 0),Jg=k([O(`ixfx-ac-token`)],Jg);var Yg=class extends E{constructor(...e){super(...e),this.value=``,this.orientation=`horizontal`,this.items=[],this.name=``,this.mode=`compact`,this.checked=!1,this.valueOff=``,this.iconName=``,this.iconNameOff=``,this.hideLabels=!1,this._computedItems=[],this._icons=new Map}get _isSingleToggle(){return this._computedItems.length===0&&!!this.textContent?.trim()}get _singleToggleIconName(){return!this.iconName&&!this.iconNameOff?null:this.checked?this.iconName:this.iconNameOff||this.iconName}firstUpdated(){this.#e()}updated(e){if(e.has(`checked`)){let e=this.shadowRoot?.querySelector(`.radio-toggle-input`);if(e&&e.checked!==this.checked){e.checked=this.checked;let n=this.checked?this.value||`on`:this.valueOff||void 0;this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked,value:n},bubbles:!0,composed:!0}))}}if(e.has(`value`)&&!this._isSingleToggle){let e=this.shadowRoot?.querySelectorAll(`.radio-input`);if(e)for(let n of e)n.checked!==(n.value===this.value)&&(n.checked=n.value===this.value)}}#e(){let e=this.querySelectorAll(`option`),n=new Map;e.length>0?(this._computedItems=Array.from(e,e=>{let r=document.createElement(`div`);r.innerHTML=e.innerHTML;let i=r.querySelector(`svg`);return i&&n.set(e.getAttribute(`value`)||``,i.outerHTML),{value:e.getAttribute(`value`)||``,label:e.textContent?.trim()||``,disabled:e.hasAttribute(`disabled`),iconName:e.getAttribute(`icon-name`)||void 0,iconNameOff:e.getAttribute(`icon-name-off`)||void 0}}),this._icons=n):this._computedItems=[...this.items]}#t(e){e.stopImmediatePropagation();let n=e.target;this.value=n.value,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:!0,value:n.value},bubbles:!0,composed:!0}))}#n(e){e.stopImmediatePropagation();let n=e.target;this.checked=n.checked;let r=this.checked?this.value||`on`:this.valueOff||void 0;this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked,value:r},bubbles:!0,composed:!0}))}render(){if(this._isSingleToggle){let e=this._singleToggleIconName,n=e||this.hideLabels?C`<ixfx-icon class="radio-icon" name="${e||`check`}"></ixfx-icon>`:null,r=this.hideLabels?null:C`<span class="radio-label" data-text="${this.textContent?.trim()}">${this.textContent?.trim()}</span>`;return C`
        <label class="radio-item ${this.checked?`selected`:``}">
          <input
            type="checkbox"
            class="radio-toggle-input"
            ?checked=${this.checked}
            @change=${this.#n}
          />
          ${n}
          ${r}
        </label>
      `}return C`
      <slot @slotchange=${this.#e} style="display: none;"></slot>
      <div class="radio-group ${this.orientation} ${this.mode}" role="radiogroup" aria-label=${this.name}>
        ${this._computedItems.map(e=>{let n=e.value===this.value?e.iconName||null:e.iconNameOff||e.iconName||null,r=n||this.hideLabels?C`<ixfx-icon class="radio-icon" name="${n||`check`}"></ixfx-icon>`:null,i=this.hideLabels?null:C`<span class="radio-label" data-text="${e.label}">${e.label}</span>`;return C`
            <label class="radio-item ${e.value===this.value?`selected`:``}" ?disabled=${e.disabled}>
              <input
                type="radio"
                class="radio-input"
                name=${this.name}
                value=${e.value}
                ?disabled=${e.disabled}
                ?checked=${e.value===this.value}
                @change=${this.#t}
              />
              ${r}
              ${i}
            </label>
          `})}
      </div>
    `}static{this.styles=[D,zn,_`
    :host {
      display: inline-flex;
      min-width: min-content;
      box-sizing: border-box;
      /* Default to looking like a cohesive control group */
      background: var(--surface-3, transparent);
      border: var(--border, none);
      border-radius: var(--radius-m, 4px);
    }

    * {
      box-sizing: border-box;
    }

    .radio-toggle-input {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
      pointer-events: none;
    }

    .radio-input {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
      pointer-events: none;
    }

    .radio-group {
      display: flex;
      width: 100%;
      height: 100%;
      gap: var(--item-spacing, 0);
      overflow: hidden;
      border-radius: inherit;
    }

    .radio-group.horizontal {
      flex-direction: row;
    }

    .radio-group.vertical {
      flex-direction: column;
    }

    .radio-group.max.horizontal .radio-item {
      flex: 1;
      justify-content: center;
    }

    .radio-group.max.vertical .radio-item {
      flex: 1;
      justify-content: flex-start;
    }

    .radio-item {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      gap: var(--icon-label-spacing, 0.5rem);
      padding: var(--space-m, 0.5rem) var(--space-l, 1rem);
      border: none;
      background: transparent;
      color: var(--color-fg-fade, var(--surface-muted-text));
      font-family: inherit;
      font-size: var(--text-m, inherit);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      transition: all var(--transition, 0.1s) ease;
      user-select: none;
      white-space: nowrap;
    }

    .radio-item:hover:not([disabled]) {
      opacity: 0.9;
      background: var(--surface-4, rgba(255,255,255,0.05));
    }

    .radio-item.selected {
      font-weight: bold;
      color: var(--color-fg-accent, var(--surface-2-text));
      background: var(--surface-6, rgba(255,255,255,0.1));
    }

    .radio-item[disabled] {
      cursor: not-allowed;
    }

    .radio-item:has(input:focus-visible) {
      outline: 2px solid var(--accent, #666);
      outline-offset: -2px;
    }

    .radio-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--icon-size, 1.2rem);
      height: var(--icon-size, 1.2rem);
      flex-shrink: 0;
    }

    .radio-icon svg {
      width: 100%;
      height: 100%;
    }

    .radio-label {
      position: relative;
      display: inline-flex;
      flex-shrink: 0;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .radio-label::after {
      content: attr(data-text);
      content: attr(data-text)/"";
      font-weight: bold;
      height: 0;
      visibility: hidden;
      overflow: hidden;
      user-select: none;
      pointer-events: none;
      @media speech {
        display: none;
      }
    }

    .radio-group.vertical .radio-item {
      width: 100%;
    }

    .radio-group.horizontal .radio-item {
      flex-shrink: 0;
    }

    .radio-group.compact .radio-label {
      display: var(--show-labels, inline-flex);
    }

    .radio-group.compact.horizontal .radio-item {
      padding: var(--compact-padding, 0.5rem);
    }
  `]}};k([A({type:String})],Yg.prototype,`value`,void 0),k([A({type:String})],Yg.prototype,`orientation`,void 0),k([A({type:Array})],Yg.prototype,`items`,void 0),k([A({type:String})],Yg.prototype,`name`,void 0),k([A({type:String})],Yg.prototype,`mode`,void 0),k([A({type:Boolean})],Yg.prototype,`checked`,void 0),k([A({type:String,attribute:`value-off`})],Yg.prototype,`valueOff`,void 0),k([A({type:String,attribute:`icon-name`})],Yg.prototype,`iconName`,void 0),k([A({type:String,attribute:`icon-name-off`})],Yg.prototype,`iconNameOff`,void 0),k([A({type:Boolean,attribute:`hide-labels`})],Yg.prototype,`hideLabels`,void 0),k([j()],Yg.prototype,`_computedItems`,void 0),k([j()],Yg.prototype,`_icons`,void 0),k([M(`slot`)],Yg.prototype,`_slot`,void 0),Yg=k([O(`ixfx-radio-group`)],Yg);var Xg=class extends Vn{constructor(...e){super(...e),this.mode=`default`,this.defaultValue=``,this._compact=!1,this._selectedCommand=``,this._selectedLabel=``,this._selectedIcon=``,this._switcherItems=[],this._dynamicItems=[],this._loadingItems=!1,this._menuHasItems=!1,this._widthNeeded=0,this._onDefaultMenuSlotChange=e=>{let n=e.target;this._menuHasItems=n.assignedElements({flatten:!0}).length>0},this._onSwitcherSlotChange=e=>{if(this.itemsProvider)return;let n=e.target;this._applySwitcherItems(n.assignedElements({flatten:!0}).filter(e=>e.tagName===`IXFX-MENU-ITEM`).map(e=>({command:e.getAttribute(`command`)??``,label:e.getAttribute(`label`)??e.textContent?.trim()??``,icon:e.getAttribute(`icon-name`)??``})))},this._handleSwitcherMenuCommand=e=>{if(this.mode!==`switcher`)return;e.stopPropagation();let{command:n}=e.detail,r=this._switcherItems.find(e=>e.command===n);r&&(this._selectedCommand=r.command,this._selectedLabel=r.label,this._selectedIcon=r.icon,this.dispatchEvent(new CustomEvent(`menu-command`,{detail:e.detail,bubbles:!0,composed:!0})))},this._handleSwitcherPrimaryClick=()=>{this._selectedCommand&&this.dispatchEvent(new CustomEvent(`menu-command`,{detail:{command:this._selectedCommand},bubbles:!0,composed:!0}))},this._handleCaretClick=async e=>{if(e.stopPropagation(),this._menuTrigger?.isOpen){this._menuTrigger.closeMenu();return}if(this.itemsProvider){this._loadingItems=!0;try{let e=this.itemsProvider(),n=e instanceof Promise?await e:e;this.mode===`switcher`?this._applySwitcherItems(n.map(e=>({command:e.command,label:e.label,icon:e.icon??``}))):this._dynamicItems=n}finally{this._loadingItems=!1}await this.updateComplete}this._menuTrigger?.openMenu()},this._handlePrimaryKeyDown=e=>{e.key===`ArrowDown`&&(e.preventDefault(),this._menuTrigger?.openMenu())},this._handleCaretKeyDown=e=>{e.key===`ArrowDown`&&(e.preventDefault(),this._menuTrigger?.openMenu())}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(([e])=>{this._compact?this._widthNeeded>0&&e.contentRect.width>=this._widthNeeded&&(this._compact=!1):this._checkOverflow()}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._menuTrigger?.removeEventListener(`menu-command`,this._handleSwitcherMenuCommand)}firstUpdated(){this.updateComplete.then(()=>{this._menuTrigger?.addEventListener(`menu-command`,this._handleSwitcherMenuCommand)})}updated(e){super.updated(e),this._checkOverflow(),(e.has(`items`)||e.has(`mode`))&&this.items&&!this.itemsProvider&&this._applyItems(this.items)}_checkOverflow(){if(this._compact)return;let e=this.shadowRoot?.querySelector(`button.primary`);if(e&&e.scrollWidth>e.offsetWidth+1){let n=this.shadowRoot?.querySelector(`button.caret`);this._widthNeeded=e.scrollWidth+(n?.offsetWidth??32)+4,this._compact=!0}}_applyItems(e){this.mode===`switcher`?this._applySwitcherItems(e.map(e=>({command:e.command,label:e.label,icon:e.icon??``}))):(this._dynamicItems=[...e],this._menuHasItems=e.length>0)}selectCommand(e){let n=this._switcherItems.find(n=>n.command===e);return n?(this._selectedCommand=n.command,this._selectedLabel=n.label,this._selectedIcon=n.icon,!0):!1}get _caretHasContent(){return this.itemsProvider||this.items&&this.items.length>0?!0:this.mode===`switcher`?this._switcherItems.length>1:this._menuHasItems}_applySwitcherItems(e){if(this._switcherItems=e,!this._selectedCommand&&e.length>0){let n=this.defaultValue?e.find(e=>e.command===this.defaultValue)??e[0]:e[0];this._selectedCommand=n.command,this._selectedLabel=n.label,this._selectedIcon=n.icon}}render(){return this.mode===`switcher`?this._renderSwitcher():this._renderDefault()}_renderCaret(e,n){let r=!this._caretHasContent;return C`
      <button
        slot="trigger"
        class="caret"
        part="caret"
        ?disabled=${this.disabled}
        ?data-empty=${r}
        aria-haspopup="true"
        aria-label=${n}
        @click=${this._handleCaretClick}
        @keydown=${this._handleCaretKeyDown}
      >
        <ixfx-icon name="${e}"></ixfx-icon>
      </button>
    `}_renderLoadingOrItems(e){return this._loadingItems?C`<ixfx-menu-item label="Loading…" disabled></ixfx-menu-item>`:e.map(e=>C`
      <ixfx-menu-item
        command=${e.command}
        label=${e.label}
        icon-name=${e.icon||T}
        ?disabled=${e.disabled??!1}
      ></ixfx-menu-item>
    `)}_renderDefault(){let e=!this.hideLabel&&!this._compact?C`<span class="button-label"><slot></slot></span>`:T,n=this.itemsProvider?C`
          <ixfx-menu-container slot="menu">
            ${this._renderLoadingOrItems(this._dynamicItems)}
          </ixfx-menu-container>
        `:C`<slot name="menu" slot="menu" @slotchange=${this._onDefaultMenuSlotChange}></slot>`;return C`
      <div class="split">
        <button
          class="primary"
          part="primary"
          ?disabled=${this.disabled}
          @keydown=${this._handlePrimaryKeyDown}
        >
          ${this._renderIcon()}${e}
        </button>
        <ixfx-menu-trigger .registry=${this.registry} .keyboardManager=${this.keyboardManager}>
          ${this._renderCaret(`chevron-down`,`Open menu`)}
          ${n}
        </ixfx-menu-trigger>
      </div>
    `}_renderSwitcher(){let e=!this.hideLabel&&!this._compact,n=this._selectedIcon?C`<ixfx-icon class="button-icon" name="${this._selectedIcon}"></ixfx-icon>`:T,r=e?C`<span class="button-label">${this._selectedLabel}</span>`:T,i=this.itemsProvider?this._renderLoadingOrItems(this._dynamicItems):this._switcherItems.filter(e=>e.command!==this._selectedCommand).map(e=>C`
            <ixfx-menu-item
              command=${e.command}
              label=${e.label}
              icon-name=${e.icon||T}
            ></ixfx-menu-item>
          `);return C`
      <!-- Hidden data-capture slot reads light-DOM items as the data source -->
      <slot name="menu" class="switcher-data" @slotchange=${this._onSwitcherSlotChange}></slot>
      <div class="split switcher">
        <button
          class="primary"
          part="primary"
          ?disabled=${this.disabled}
          @keydown=${this._handlePrimaryKeyDown}
          @click=${this._handleSwitcherPrimaryClick}
        >
          ${n}${r}
        </button>
        <ixfx-menu-trigger .registry=${this.registry} .keyboardManager=${this.keyboardManager}>
          ${this._renderCaret(`chevron-right`,`Choose action`)}
          <ixfx-menu-container slot="menu">
            ${i}
          </ixfx-menu-container>
        </ixfx-menu-trigger>
      </div>
    `}static{this.styles=[D,zn,Bn,_`
      :host {
        display: inline-flex;
        max-width: 100%;
        vertical-align: middle;
      }

      slot.switcher-data {
        display: none;
      }

      .split {
        display: inline-flex;
        width: 100%;
        background: var(--surface-3, #ccc);
        color: var(--surface-3-text, #000);
        border: var(--border, 1px solid #999);
        border-radius: var(--radius-xl, 8px);
        corner-shape: superellipse(1);
        box-shadow:
          inset 1px 1px 1px 1px color-mix(in oklch, var(--surface-4) 30%, transparent),
          inset -1px -1px 1px 1px color-mix(in oklch, var(--surface-2) 20%, transparent),
          2px 2px 1px 0px color-mix(in oklch, var(--surface-2) 30%, transparent);
        overflow: hidden;
        transition: background var(--transition, 0.2s), border-color var(--transition, 0.2s);
      }

      /* Switcher: accent the caret separator to signal "this changes the default" */
      .split.switcher button.caret {
        border-inline-start-color: var(--accent, #666);
        opacity: 0.7;
      }

      .split.switcher button.caret:hover:not(:disabled) {
        opacity: 1;
      }

      /* Caret is dimmed when there is no popup content */
      button.caret[data-empty] {
        opacity: 0.3;
        pointer-events: none;
      }

      .split:has(button:hover:not(:disabled)) {
        border-color: var(--accent, #666);
        box-shadow:
          inset 1px 1px 1px 1px color-mix(in oklch, var(--surface-5) 70%, transparent),
          inset -1px -1px 1px 1px color-mix(in oklch, var(--surface-2) 60%, transparent),
          2px 2px 1px 0px color-mix(in oklch, var(--surface-2) 90%, transparent);
      }

      .split:has(button:active:not(:disabled)) {
        transform: translateY(1px);
        box-shadow: inset 1px 1px 0px 0.5px color-mix(in oklch, var(--surface-1), transparent);
      }

      button.primary,
      button.caret {
        border: none;
        border-radius: 0;
        background: none;
        box-shadow: none;
        color: inherit;
        margin: 0;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background var(--transition, 0.2s), opacity var(--transition, 0.2s);
      }

      button.primary {
        flex: 1;
        padding: var(--space-m, 8px) var(--space-l, 12px);
        gap: 0.5em;
        overflow: hidden;
        white-space: nowrap;
      }

      button.caret {
        padding: var(--space-m, 8px) var(--space-s, 6px);
        border-inline-start: var(--border, 1px solid #999);
        flex-shrink: 0;
      }

      button.primary:hover:not(:disabled),
      button.caret:hover:not(:disabled) {
        background: color-mix(in oklch, var(--surface-4) 80%, transparent);
      }

      button.primary:active:not(:disabled),
      button.caret:active:not(:disabled) {
        background: var(--surface-2, #aaa);
        transform: none;
        box-shadow: none;
      }

      button.primary:disabled,
      button.caret:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      button.primary:focus-visible,
      button.caret:focus-visible {
        outline: 2px solid var(--accent, #666);
        outline-offset: -2px;
      }

      ixfx-menu-trigger {
        display: inline-flex;
        align-items: stretch;
      }
    `]}};k([A({attribute:!1})],Xg.prototype,`registry`,void 0),k([A({attribute:!1})],Xg.prototype,`keyboardManager`,void 0),k([A({type:String})],Xg.prototype,`mode`,void 0),k([A({type:String,attribute:`default-value`})],Xg.prototype,`defaultValue`,void 0),k([A({attribute:!1})],Xg.prototype,`itemsProvider`,void 0),k([A({attribute:!1})],Xg.prototype,`items`,void 0),k([M(`ixfx-menu-trigger`)],Xg.prototype,`_menuTrigger`,void 0),k([j()],Xg.prototype,`_compact`,void 0),k([j()],Xg.prototype,`_selectedCommand`,void 0),k([j()],Xg.prototype,`_selectedLabel`,void 0),k([j()],Xg.prototype,`_selectedIcon`,void 0),k([j()],Xg.prototype,`_switcherItems`,void 0),k([j()],Xg.prototype,`_dynamicItems`,void 0),k([j()],Xg.prototype,`_loadingItems`,void 0),k([j()],Xg.prototype,`_menuHasItems`,void 0),Xg=k([O(`ixfx-split-button`)],Xg);var Zg=/[^\w-]/g,Qg=class extends E{constructor(...e){super(...e),this.path=``,this.separator=`/`,this.pathRoot=``,this._openIdx=null,this._editing=!1,this._cachedSiblings=new Map,this._leafSegmentIndex=null,this._confirmedLeafIndices=new Set,this._dropdownActiveIndex=-1,this._editingCancelled=!1,this._editStartIndex=null,this._openCumPath=null,this.#n=Math.random().toString(36).slice(2,8),this.#a=e=>{e.newState===`closed`&&this._openIdx!==null&&(this._openIdx=null,this._dropdownActiveIndex=-1,this.#o())},this.#m=e=>{if(this._openIdx===null)return;let n=this._cachedSiblings.get(this._openCumPath??String(this._openIdx))??[];if(!n.length){e.key===`Escape`&&(e.preventDefault(),this.#i());return}switch(e.key){case`ArrowDown`:e.preventDefault(),this._dropdownActiveIndex=(this._dropdownActiveIndex+1)%n.length,this.#h();break;case`ArrowUp`:e.preventDefault(),this._dropdownActiveIndex=this._dropdownActiveIndex<=0?n.length-1:this._dropdownActiveIndex-1,this.#h();break;case`Enter`:this._dropdownActiveIndex>=0&&(e.preventDefault(),this.#f(this._openIdx,n[this._dropdownActiveIndex]));break;case`Escape`:e.preventDefault(),this.#i();break}},this.#D=e=>{this._editing||[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Enter`].includes(e.key)||(this._editing=!0)}}#e;#t;#n;#r(e){return`--cp-${this.#n}-${e.replaceAll(this.separator,`-`).replaceAll(` `,`-`).replace(Zg,`-`)}`}#i(){if(this._openIdx!==null){this._openIdx=null,this._openCumPath=null,this._dropdownActiveIndex=-1,this.#o();let e=this.shadowRoot?.querySelector(`.crumb-dropdown`);try{e?.hidePopover()}catch{}}}#a;updated(e){if(this._editing){let e=this.shadowRoot?.querySelector(`ixfx-ac-text`);if(e instanceof E){let n=this.path;if(this._editStartIndex!==null){let r=this.#s()[this._editStartIndex],i=this.path.indexOf(r);e.focusWithValue(n,i)}else e.focusWithValue(n)}}e.has(`_openIdx`)&&this._openIdx!==null&&this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`.crumb-dropdown`);if(e){e.style.setProperty(`position-anchor`,this.#r(this._openCumPath??String(this._openIdx)));try{e.showPopover()}catch{}e.focus()}})}#o(){this.#e&&(this.#e.abort(),this.#e=void 0,this.#t=void 0)}#s(){let e=this.path;return this.pathRoot.length>0&&e.startsWith(this.pathRoot)?e.slice(this.pathRoot.length).split(this.separator).filter(e=>e.length>0):this.path.split(this.separator).filter(e=>e.length>0)}#c(){return this.pathRoot.length===0?[]:this.pathRoot.split(this.separator).filter(e=>e.length>0)}#l(e,n){let r=this.#s(),i=this.#c();return n?i.slice(0,e+1).join(this.separator):[...i,...r.slice(0,e+1)].join(this.separator)}setPath(e){this.#o(),this.pathRoot.length>0&&!e.startsWith(this.pathRoot)&&(e=this.pathRoot),this.path=e,this._cachedSiblings=new Map,this._openIdx=null,this._leafSegmentIndex=null,this._confirmedLeafIndices=new Set}getPath(){return this.path}#u(e,n){if(n.preventDefault(),n.stopPropagation(),this._openIdx===e){this.#i();return}let r=n.currentTarget.dataset.cumulative;this._openIdx=e,this._openCumPath=r??null,this._dropdownActiveIndex=-1;let i=this.#s(),a=this.#c(),o=r?r.split(this.separator).filter(e=>e.length>0):e===-1?a:i.slice(0,e+1),s=r??String(e);if(!this._cachedSiblings.has(s)&&this.siblingLookup){this.#o();let n=new AbortController;this.#e=n,this.#t=e,this.siblingLookup(o,e,n.signal).then(e=>{n.signal.aborted||(this._cachedSiblings.set(s,e),e.length===0&&this._confirmedLeafIndices.add(r??``),this.#e=void 0,this.#t=void 0,this.requestUpdate())}).catch(e=>{e.name!==`AbortError`&&console.error(`Sibling lookup failed:`,e),this.#e=void 0,this.#t=void 0}),this.dispatchEvent(new CustomEvent(`expand`,{detail:{index:e,segments:o,path:o.join(this.separator),signal:n.signal},bubbles:!0,composed:!0}))}this.requestUpdate()}#d(e,n){n.preventDefault(),n.stopPropagation(),this.#i();let r=this.#s().slice(0,e+1),i=this.path.startsWith(this.separator),a=r.join(this.separator);this.path=i?this.separator+a:a,this._cachedSiblings=new Map,this._leafSegmentIndex=null;let o=r.slice(0,-1).join(this.separator);this.dispatchEvent(new CustomEvent(`navigate`,{detail:{index:e,label:r[e],parentPath:o,fullPath:a},bubbles:!0,composed:!0}))}#f(e,n){let r=this._openCumPath;this.#i();let i=this.#s(),a=this.#c(),o;o=r?[...r.split(this.separator).filter(e=>e.length>0),n.label]:this.pathRoot.length>0&&e<a.length?[...a.slice(0,e+1),n.label]:[...a,...i.slice(0,e+1-a.length),n.label];let s=this.path.startsWith(this.separator),c=o.join(this.separator);this.path=s?this.separator+c:c,this._cachedSiblings=new Map;let l=n.isLeaf?o.length-1:null;this._leafSegmentIndex=l,n.isLeaf&&this._confirmedLeafIndices.add(r??``);let u=o.slice(0,-1).join(this.separator);this.dispatchEvent(new CustomEvent(`navigate`,{detail:{index:e,label:n.label,parentPath:u,fullPath:c},bubbles:!0,composed:!0}))}#p(e,n,r){r.preventDefault(),r.stopPropagation(),this.#f(e,n)}#m;#h(){this.updateComplete.then(()=>{this.shadowRoot?.querySelector(`.crumb-option.active`)?.scrollIntoView({block:`nearest`})})}#g(e){let n=this._cachedSiblings.get(this._openCumPath??String(e))??[],r=this.#t===e;return C`
      ${r?C`<span class="loading-spinner"></span>`:T}
      ${n.length===0&&!r?C`<span class="crumb-option crumb-option-label">No items</span>`:n.map((n,r)=>C`
          <div class="crumb-option ${r===this._dropdownActiveIndex?`active`:``}"
               @click=${r=>this.#p(e,n,r)}>
            ${n.icon?C`<ixfx-icon class="crumb-icon" name="${n.icon}"></ixfx-icon>`:T}
            <span class="option-label">${n.label}</span>
          </div>
        `)}
    `}#_(e,n,r){let i=this._openIdx===n,a=this.#l(n,!1);return C`
      <div class="seg" data-cumulative=${a} @click=${e=>this.#b(n,e)}>
        <label title=${e} @click=${e=>this.#d(n,e)}>
          ${e}
        </label>
        ${(!r||this.siblingLookup)&&this._leafSegmentIndex!==n?C`
          <div class="caret ${i?`open`:``} ${this._confirmedLeafIndices.has(a)?`disabled`:``}"
               style="anchor-name: ${this.#r(a)}"
               data-cumulative=${a}
               @click=${e=>this.#u(n,e)}>
            ${this.separator}
          </div>
        `:T}
      </div>
    `}#v(e,n){let r=n===this.#c().length-1,i=this._openIdx===n,a=this.#l(n,!0);return C`
      <div class="seg seg-root" data-cumulative=${a} @click=${e=>this.#y(n,e)}>
        <label title=${e}>${e}</label>
        ${r&&this.siblingLookup?C`
          <div class="caret ${i?`open`:``} ${this._confirmedLeafIndices.has(a)?`disabled`:``}"
               style="anchor-name: ${this.#r(a)}"
               data-cumulative=${a}
               @click=${e=>this.#u(n,e)}>
            ${this.separator}
          </div>
        `:T}
      </div>
    `}#y(e,n){n.preventDefault(),n.stopPropagation();let r=this.#c().slice(0,e+1).join(this.separator);this.setPath(r)}#b(e,n){n.preventDefault(),n.stopPropagation(),this.#i(),this._editing=!0,this._editStartIndex=e}#x(){this.#i(),this._editing=!0,this._editStartIndex=null}#S(){return async(e,n)=>{if(!this.siblingLookup)return[];let r=e.endsWith(this.separator),i=e.split(this.separator).filter(e=>e.length>0),a=r?i:i.slice(0,-1),o=r?``:i.at(-1)??``,s=e.startsWith(this.separator);return(await this.siblingLookup(a,a.length-1,n)).filter(e=>e.label.toLowerCase().startsWith(o.toLowerCase())).map(e=>{let n=[...a,e.label].join(this.separator);return{label:s?this.separator+n:n,icon:e.icon,isLeaf:e.isLeaf}})}}#C(e){e.stopPropagation();let n=e.detail.value;this.path=n,this._cachedSiblings=new Map,this._leafSegmentIndex=n.endsWith(this.separator)?null:n.split(this.separator).filter(e=>e.length>0).length-1,this._editing=!1,this._editingCancelled=!1,this._editStartIndex=null,this.#T(n)}#w(){if(this._editing){if(this._editing=!1,!this._editingCancelled){let e=this.shadowRoot?.querySelector(`ixfx-ac-text`)?.value??this.path;e!==this.path&&(this.path=e,this._cachedSiblings=new Map,this._leafSegmentIndex=e.endsWith(this.separator)?null:e.split(this.separator).filter(e=>e.length>0).length-1,this.#T(e))}this._editingCancelled=!1,this._editStartIndex=null}}#T(e){let n=e.split(this.separator).filter(e=>e.length>0),r=n.at(-1)??``,i=n.slice(0,-1).join(this.separator);this.dispatchEvent(new CustomEvent(`change`,{detail:{label:r,parentPath:i,fullPath:e},bubbles:!0,composed:!0}))}#E(e){e.key===`Escape`&&(this._editingCancelled=!0,this._editing=!1,this._editStartIndex=null)}#D;render(){let e=this.#s();if(this._editing)return C`
        <ixfx-ac-text
          .value=${this.path}
          .tabSuffix=${this.separator}
          .completionProvider=${this.#S()}
          @change=${this.#C}
          @focusout=${this.#w}
          @keydown=${this.#E}
        ></ixfx-ac-text>
      `;let n=this.#c(),r=this.siblingLookup&&n.length===0?C`
      <div class="caret ${this._openIdx===-1?`open`:``} ${this._confirmedLeafIndices.has(``)?`disabled`:``}"
           style="anchor-name: ${this.#r(``)}"
           data-cumulative=""
           @click=${e=>this.#u(-1,e)}>
        ${this.separator}
      </div>`:T;return C`
      <div class="crumbs" tabindex="0" @keydown=${this.#D}>
        ${n.length>0?n.map((e,n)=>this.#v(e,n)):T}
        ${r}
        ${e.map((n,r)=>this.#_(n,r,r===e.length-1))}
        <div class="trailing" @click=${this.#x}></div>
      </div>
      ${this._openIdx===null?T:C`
        <div class="crumb-dropdown popup-surface" popover="auto" tabindex="-1"
             @toggle=${this.#a}
             @keydown=${this.#m}
             @click=${e=>e.stopPropagation()}>
          ${this.#g(this._openIdx)}
        </div>
      `}
    `}static{this.styles=[zn,D,Hn,_`
    :host {
      --text-highlight: var(--accent);
      --separator: var(--surface-muted-text);
      --padding-s: var(--space-xs);
      --padding-m: var(--space-s);
      --hover-bg: var(--surface-5);
      --hover-fg: var(--surface-5-text);

      display: flex;
      width: 100%;
      gap: var(--padding-s);
      position: relative;
    }

    ixfx-ac-text {
      flex: 1;
      font-size: inherit;
      --ac-input-padding: var(--padding-s) var(--padding-m);
      --ac-input-background: var(--surface-4);
      --ac-input-border-radius: var(--radius-s, 3px);
      --ac-popup-font-size: var(--text-s, 11px);
    }

    .crumbs {
      display: flex;
      width: 100%;
      overflow-x:scroll;
      scroll-snap-type:x proximity;
      scrollbar-width: none;
    }

    .trailing {
      flex: 1;
      min-width: 1em;
      cursor: text;
    }

    .seg {
      scroll-snap-align:start;

      position: relative;
      cursor: pointer;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      user-select: none;
      pointer-events: auto;
    }

    .seg:hover {
      overflow: unset;
    }

    .seg-root {
      opacity: var(--prominence-idle-opacity);
    }

    .seg-root:hover {
      opacity: var(--prominence-tickled-opacity);
    }

    .seg-root label {
      font-weight: normal;
    }

    label {
      display: flex;
      align-items: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      align-content: center;
      overflow: hidden;
      padding: 0 var(--padding-m);
      transition: all 0.2s ease-in-out;
      border-radius: var(--radius-m);
    }

    label:hover,.caret:hover {
      color: var(--item-text-tickled);
      background: var(--item-bg-tickled);
    }

    .caret {
      scroll-snap-align:start;

      position: relative;
      padding: var(--padding-m);
      transition: all 0.2s ease-in-out;

      border-radius: var(--radius-m);
    }


    .caret.open {
      background: color-mix(in srgb, var(--hover-bg) 40%, transparent);
    }

    .caret.disabled {
      opacity: var(--prominence-disabled-opacity);
      cursor: not-allowed;
    }

    .crumb-icon {
      width: 1em;
      height: 1em;
      flex-shrink: 0;
    }

    .crumb-dropdown {
      /* Reset popover UA defaults */
      inset: unset;
      margin: 0;

      /* Anchor positioning — position-anchor set dynamically via JS */
      position: fixed;
      position-area: block-end span-inline-end;
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
      margin-block-start: 2px;

      min-width: 10ch;
      max-width: min(40ch, 80vw);
      max-height: 280px;
      overflow-y: auto;
      padding: var(--padding-s);
      outline: none;
    }

    .crumb-option {
      display: flex;
      align-items: center;
      gap: var(--padding-s);
      padding: var(--padding-s) var(--padding-m);
      cursor: pointer;
      border-radius: var(--radius-s, 4px);
      transition: background 0.15s ease-out;
      overflow: hidden;
    }

    .crumb-option:hover,
    .crumb-option.active {
      background: var(--hover-bg);
      color: var(--hover-fg);
    }

    .option-label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .crumb-option-label {
      font-style: italic;
      opacity: 0.6;
      pointer-events: none;
      user-select: none;
    }

    .loading-spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid var(--surface-5);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: crumb-spin 0.7s linear infinite;
    }

    @keyframes crumb-spin {
      to { transform: rotate(360deg); }
    }
  `]}};k([A({type:String})],Qg.prototype,`path`,void 0),k([A({type:String})],Qg.prototype,`separator`,void 0),k([A({type:String,attribute:`path-root`})],Qg.prototype,`pathRoot`,void 0),k([A({type:Object})],Qg.prototype,`siblingLookup`,void 0),k([j()],Qg.prototype,`_openIdx`,void 0),k([j()],Qg.prototype,`_editing`,void 0),k([j()],Qg.prototype,`_cachedSiblings`,void 0),k([j()],Qg.prototype,`_leafSegmentIndex`,void 0),k([j()],Qg.prototype,`_confirmedLeafIndices`,void 0),k([j()],Qg.prototype,`_dropdownActiveIndex`,void 0),k([j()],Qg.prototype,`_editingCancelled`,void 0),k([j()],Qg.prototype,`_editStartIndex`,void 0),k([j()],Qg.prototype,`_openCumPath`,void 0),Qg=k([O(`ixfx-crumb-path`)],Qg);var $g=3,e_=class extends rm{#e;#t;#n;#r;#i;#a;#o;constructor(){super(),this.dragSensitivity=1,this.noDrag=!1,this.precision=0,this.#e=0,this.#t=0,this.#n=!1,this.#r=!1,this.#i=0,this.#a=``,this.#o=!1,this._stopNativeInput=e=>{e.stopPropagation()},this._handleMouseEnter=()=>{this.displayTextLogic!==`transient`||this._editing||(this._hovering=!0,this._clearTransientTimer(),this._transientTimer=window.setTimeout(()=>{this._transientShowingValue=!0,this._requestDisplayUpdate()},this.appearDelay))},this._handleMouseLeave=()=>{this.displayTextLogic!==`transient`||this._editing||(this._hovering=!1,this._clearTransientTimer(),this._transientShowingValue&&(this._transientTimer=window.setTimeout(()=>{this._hovering||(this._transientShowingValue=!1,this._requestDisplayUpdate())},this.disappearDelay)))},this._handleClick=()=>{this.disabled||this.renderRoot?.querySelector(`.number`)?.focus()},this._handleFocus=()=>{},this._handleBeforeInput=e=>{if(e.inputType!==`insertText`||!e.data)return;if(!this._isAllowedInput(e.data)){e.preventDefault();return}let n=this._contentEl;if(!n)return;let r=n.textContent??``,i=n.selectionStart??r.length,a=r.slice(0,i)+e.data+r.slice(i);a!==this.#a&&(this.#a=a,this.dispatchEvent(new CustomEvent(`input`,{detail:{value:a},bubbles:!0,composed:!0})))},this._handleKeydown=e=>{this._editing&&(e.key===`Enter`?(e.preventDefault(),this._tryCommit(),this.mode===`editor`&&this._contentEl?.blur()):e.key===`Escape`&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(`cancelled`,{detail:{value:this._prevValue},bubbles:!0,composed:!0})),this._cancelEdit(),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this._prevValue},bubbles:!0,composed:!0})),this.mode===`editor`&&this._contentEl?.blur()))},this._onKeyDown=e=>{this._editing||this.disabled||this._handleArrowKey(e)||e.key.length===1&&(this._onUserInteraction(),this._beginEdit())},this._onPointerDown=e=>{e.button===0&&(this._editing||this.disabled||this.noDrag||(e.preventDefault(),this.renderRoot?.querySelector(`.number`)?.focus(),this.#e=e.clientY,this.#t=this._parseValue(),this.#i=this.#t,this.#n=!1,this.#r=!1,this.setPointerCapture(e.pointerId)))},this._onPointerMove=e=>{if(!(e.buttons&1)||this._editing||this.disabled||this.noDrag)return;let n=this.#e-e.clientY;if(!this.#n&&Math.abs(n)<$g)return;this.#n=!0,this.#r=!0,this.toggleAttribute(`dragging`,!0),this._onUserInteraction();let r=this.#t+n*this.dragSensitivity*(this.step||1),i=this._clamp(this._snap(r));this.#i=this.step===void 0?Number.parseFloat(i.toFixed(this.precision)):i;let a=this.step===void 0?this.#i.toFixed(this.precision):this._formatNumber(this.#i);a!==this.#a&&(this.#a=a,this.dispatchEvent(new CustomEvent(`input`,{detail:{value:a},bubbles:!0,composed:!0}))),this._requestDisplayUpdate(),this._updateValueCss(this._normalizedValue(this.#i))},this._onPointerUp=e=>{if(this.hasPointerCapture(e.pointerId)&&this.releasePointerCapture(e.pointerId),!this.#n||this.disabled||this.noDrag)return;this.#n=!1,this.toggleAttribute(`dragging`,!1);let n=this.step===void 0?this.#i.toFixed(this.precision):this._formatNumber(this.#i),r=this.value;this.value=n,n!==r&&this.dispatchEvent(new CustomEvent(`change`,{detail:{value:n},bubbles:!0,composed:!0}))},this._interceptClick=e=>{this.#r&&=(e.stopImmediatePropagation(),!1)},this.mode=`editor`,this.entryMode=`number`,this.value=`0`}render(){return C`
      ${this.fillStyle?C`<div class="track"></div>`:``}
      ${this.fillStyle?C`<div class="value"><div class="bar"></div></div>`:``}
      <div
        class="number"
        part="content"
        tabindex="${this.disabled?-1:0}"
        contenteditable="${this._editing?`plaintext-only`:`false`}"
        data-placeholder="${this.placeholder}"
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
        @keydown=${this._handleKeydown}
        @beforeinput=${this._handleBeforeInput}
        @input=${this._stopNativeInput}
      ></div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`pointerdown`,this._onPointerDown),this.addEventListener(`pointermove`,this._onPointerMove),this.addEventListener(`pointerup`,this._onPointerUp),this.addEventListener(`keydown`,this._onKeyDown),this.addEventListener(`click`,this._interceptClick,{capture:!0}),this.addEventListener(`mouseenter`,this._handleMouseEnter),this.addEventListener(`mouseleave`,this._handleMouseLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`pointerdown`,this._onPointerDown),this.removeEventListener(`pointermove`,this._onPointerMove),this.removeEventListener(`pointerup`,this._onPointerUp),this.removeEventListener(`keydown`,this._onKeyDown),this.removeEventListener(`click`,this._interceptClick),this.removeEventListener(`mouseenter`,this._handleMouseEnter),this.removeEventListener(`mouseleave`,this._handleMouseLeave)}get _contentEl(){return this.renderRoot?.querySelector(`.number`)??void 0}firstUpdated(e){super.firstUpdated(e),this.displayTextLogic===`show`&&(this._showModeWaitingToHide=!0),this._updateValueCss(this._normalizedValue()),this._requestDisplayUpdate()}_onUserInteraction(){if(this.displayTextLogic===`show`&&!this._editing){this._clearTransientTimer(),this._showModeWaitingToHide=!1,this._requestDisplayUpdate(),this._transientTimer=window.setTimeout(()=>{this._showModeWaitingToHide=!0,this._requestDisplayUpdate()},this.disappearDelay);return}if(this.displayTextLogic===`transient`&&!this._editing){this._clearTransientTimer(),this._transientShowingValue=!0,this._requestDisplayUpdate(),this._transientTimer=window.setTimeout(()=>{this._hovering||(this._transientShowingValue=!1,this._requestDisplayUpdate())},this.disappearDelay);return}super._onUserInteraction()}_onValueChange(){this.displayTextLogic!==`show`||this._editing||(this._clearTransientTimer(),this._showModeWaitingToHide=!1,this._requestDisplayUpdate(),this._transientTimer=window.setTimeout(()=>{this._showModeWaitingToHide=!0,this._requestDisplayUpdate()},this.disappearDelay))}updated(e){super.updated(e),this._editing||this._updateValueCss(this._normalizedValue())}_updateValueCss(e){this.style.setProperty(`--value`,String(e));let n=0,r=e;if(this.linearStyle===`bipolar`?e<=.5?(n=e,r=.5):(n=.5,r=e):this.linearStyle===`unipolar`&&(n=.5-e*.5,r=.5+e*.5),this.style.setProperty(`--value-start`,String(n)),this.style.setProperty(`--value-end`,String(r)),this.fillStyle===`circular`&&this.circularStyle===`offset`){let n=this.offsetHeight,r=this.offsetWidth,i=n/2-2,a=r-2,o=2+i+e*(a-2-2*i);this.style.setProperty(`--radius`,`${i}px`),this.style.setProperty(`--value-center-px`,`${o}px`),this.style.setProperty(`--component-width-px`,`${r}px`),this.style.setProperty(`--component-height-px`,`${n}px`)}}_getDisplayText(){if(this._shouldUseDisplayText())return this.displayText??``;if(this.#n){let e=this.step===void 0?this.#i.toFixed(this.precision):this._formatNumber(this.#i);return this.formatter?this.formatter(e):e}if(this.formatter){let e=Number.parseFloat(this.value);return this.formatter(Number.isNaN(e)?this.value:String(e))}return this._formatDisplay()}_tryCommit(){let e=this.renderRoot?.querySelector(`.number`);if(e){let n=Number.parseFloat(e.textContent?.trim()??``);Number.isNaN(n)||(e.textContent=this._formatNumber(this._clamp(this._snap(n))))}super._tryCommit()}_handleArrowKey(e){let n=(this.max??100)-(this.min??0);if(n===0)return!1;let r=e.shiftKey?10:1,i=am(n,void 0,this.step)/r,a=0,o=!1;switch(e.key){case`ArrowUp`:case`ArrowRight`:a=i,o=!0;break;case`ArrowDown`:case`ArrowLeft`:a=-i,o=!0;break;case`Home`:a=-(this._parseValue()-(this.min??0)),o=!0;break;case`End`:a=(this.max??0)-this._parseValue(),o=!0;break}if(o){e.preventDefault();let n=this.value,r=this._parseValue(),i=this._clamp(this._snap(r+a)),o=this.step===void 0?i.toFixed(this.precision):this._formatNumber(i);return this.value=o,this._requestDisplayUpdate(),this._updateValueCss(this._normalizedValue(i)),o!==n&&this.dispatchEvent(new CustomEvent(`input`,{detail:{value:o},bubbles:!0,composed:!0})),requestAnimationFrame(()=>{this.value!==n&&this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0}))}),!0}return!1}_parseValue(){return Number.parseFloat(this.value)||0}_formatDisplay(){let e=Number.parseFloat(this.value);if(Number.isNaN(e))return this.value;if(this.precision!==void 0)return e.toFixed(this.precision);let n=this.value.indexOf(`.`),r=n>=0?this.value.length-n-1:0;return e.toFixed(r)}_clamp(e){return this.min!==void 0&&(e=Math.max(this.min,e)),this.max!==void 0&&(e=Math.min(this.max,e)),e}_snap(e){return this.step?Math.round(e/this.step)*this.step:e}_inferDecimals(e){if(this.step!==void 0){let e=String(this.step),n=e.indexOf(`.`);return n>=0?e.length-n-1:0}let n=String(e??this._parseValue()),r=n.indexOf(`.`);return r>=0?n.length-r-1:0}_formatNumber(e){return e.toFixed(this._inferDecimals(e))}_normalizedValue(e=this._parseValue()){return this.min===void 0||this.max===void 0||this.max===this.min?0:Math.max(0,Math.min(1,(e-this.min)/(this.max-this.min)))}static{this.styles=[D,zn,...rm.styles,_`
    :host {
      font-size: var(--text-s,11px);
      --value: 0;
      --value-start: 0;
      --value-end: 0;
      --_fill-color-alpha: color-mix(
        in oklch,
        var(--fill-color, var(--accent, oklch(60% 0.15 140))) calc(var(--fill-opacity, 0.25) * 100%),
        transparent
      );
    }

    /* ── Layout (when fill-style is enabled) ── */
    :host([fill-style]) {
      display: grid;
      position: relative;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      min-height: 1.5em;
      min-width: 5em;
    }

    :host([fill-style]) .track,
    :host([fill-style]) .value {
      grid-area: 1 / 1;
      position: absolute;
      inset: 0;
    }

    /* Track background styling */
    :host([fill-style]) .track {
      z-index: 0;
      background: var(--surface-4, oklch(22% 0.02 240));
      border: var(--border, 1px solid oklch(25% 0.02 240));
    }

    :host([fill-style]) .value {
      z-index: 1;
    }

    :host([fill-style="linear"]) .track {
      border-radius: var(--radius-s, 3px);
    }

    :host([fill-style="circular"]) .track {
      border-radius: 50%;
      overflow: hidden;
    }

    /* Linear: all linear-styles use .bar positioned via --value-start and --value-end */
    :host([fill-style="linear"]) .value {
      overflow: hidden;
    }

    :host([fill-style="linear"]) .bar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(var(--value-start, 0) * 100%);
      width: calc((var(--value-end, 0) - var(--value-start, 0)) * 100%);
      background: var(--fill-image, var(--_fill-color-alpha));
    }

    /* Circular grow: filled circle growing from center */
    :host([fill-style="circular"][circular-style="grow"]) .value,
    :host([fill-style="circular"]:not([circular-style])) .value {
      background: var(--fill-image, var(--_fill-color-alpha));
      clip-path: circle(calc(var(--value) * 50%) at 50% 50%);
    }

    /* Circular offset: value circle slides left/right from center.
       Track circle is centered, filling the height.
       Value circle is same size, offset by --value-offset-px.
       At value=0.5: value circle centered on track (invisible when overlaid)
       At value=0: value circle at far left
       At value=1: value circle at far right
    */
    :host([fill-style="circular"][circular-style="offset"]) {
      min-width: 80px;
      min-height: 26px;
      overflow: hidden;
    }

    :host([fill-style="circular"][circular-style="offset"]) .track {
      position: absolute;
      top: 50%;
      border-radius: 50%;
      background: var(--surface-4, oklch(22% 0.02 240));
      border: var(--border, 1px solid oklch(25% 0.02 240));
      width: calc(var(--radius, 11px) * 2);
      height: calc(var(--radius, 11px) * 2);
      left: 50%;
      transform: translate(-50%, -50%);
    }

    :host([fill-style="circular"][circular-style="offset"]) .value {
      position: absolute;
      top: 50%;
      background: var(--fill-image, var(--_fill-color-alpha));
      border-radius: 50%;
      width: calc(var(--radius, 11px) * 2);
      height: calc(var(--radius, 11px) * 2);
      transform: translate(calc(var(--value-center-px, 13px) - var(--radius, 11px)), -50%);
    }

    :host([fill-style="circular"][circular-style="offset"]) .number {
      border-radius: 0;
    }

    /* Circular dot: full circle */
    :host([fill-style="circular"][circular-style="dot"]) .value {
      background: var(--fill-image, var(--_fill-color-alpha));
    }

    /* ── Number (top layer - text display) ── */
    :host([fill-style]) .number {
      position: absolute;
      inset: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      padding: var(--space-xs, 3px) var(--space-s, 4px);
    }

    :host([fill-style="circular"]) .number {
      border-radius: 50%;
    }

    /* Drag cursor + no text selection while not in text-edit mode */
    :host(:not([disabled]):not([no-drag])) .number:not([contenteditable="plaintext-only"]) {
      cursor: ns-resize;
      user-select: none;
      -webkit-user-select: none;
      touch-action: none;
    }

    /* Focus outline */
    :host .number {
      outline: none;
    }

    :host .number:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    /* ── Circular host sizing ── */
    :host([fill-style="circular"][circular-style="grow"]),
    :host([fill-style="circular"]:not([circular-style])) {
      aspect-ratio: 1;
    }
  `]}};k([A({type:Number})],e_.prototype,`min`,void 0),k([A({type:Number})],e_.prototype,`max`,void 0),k([A({type:Number})],e_.prototype,`step`,void 0),k([A({type:Number,attribute:`drag-sensitivity`})],e_.prototype,`dragSensitivity`,void 0),k([A({attribute:`fill-style`})],e_.prototype,`fillStyle`,void 0),k([A({attribute:`linear-style`})],e_.prototype,`linearStyle`,void 0),k([A({attribute:`circular-style`})],e_.prototype,`circularStyle`,void 0),k([A({type:Boolean,attribute:`no-drag`})],e_.prototype,`noDrag`,void 0),k([A({type:Number})],e_.prototype,`precision`,void 0),e_=k([O(`ixfx-editable-number`)],e_);var t_=`__ungrouped__`,n_=class extends E{constructor(...e){super(...e),this.grouped=!1,this.crossGroupSelection=!1,this.#n=new Map,this.#i=!1,this.#a=new Gg(this),this.#d=e=>{if(this.#i)return;let n=e.target,r;for(let[e,i]of this.#n)if(i===n){r=e;break}if(r!==void 0){if(this.grouped&&!this.crossGroupSelection){this.#i=!0;for(let[e,n]of this.#n)e!==r&&n.clearSelection();this.#i=!1}this.dispatchEvent(new CustomEvent(`grouped-select`,{detail:{selected:this.selectedItems,groupKey:r===t_?void 0:r},bubbles:!0,composed:!0}))}}}#e;#t;#n;#r;#i;#a;get groupBy(){return this.#e}set groupBy(e){this.#e=e,this.requestUpdate()}get factory(){return this.#t}set factory(e){e!==this.#t&&(this.#s(),this.#t=e,this.requestUpdate())}get provider(){return this.#a.provider}set provider(e){this.#a.provider=e,e&&this.#a.request(void 0)}get selectedItems(){let e=new Set;for(let n of this.#n.values())for(let r of n.selectedItems)e.add(r);return e}dispatch(e,n){for(let r of this.#n.values())r.dispatch(e,n)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.addEventListener(`select`,this.#d)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`select`,this.#d)}updated(e){super.updated(e),e.has(`grouped`)&&this.#s(),this.#c()}render(){return this.#t?this.grouped?this.#e?(this.#r=this.#o(),C`${bc(this.#r.keys(),e=>e,e=>C`<ixfx-panel data-group-key=${e} .title=${e}></ixfx-panel>`)}`):T:C`<div class="ungrouped-host"></div>`:T}#o(){let e=new Map;if(!this.#e)return e;for(let n of this.#a.items){let r=this.#e(n),i=e.get(r);i||(i=[],e.set(r,i)),i.push(n)}return e}#s(){for(let e of this.#n.values())e.remove();this.#n.clear()}#c(){if(this.#t){if(!this.grouped){this.#l();return}this.#e&&this.#u()}}#l(){let e=this.querySelector(`.ungrouped-host`);if(!e)return;let n=this.#n.get(t_);n||(n=this.#t(void 0),e.appendChild(n),this.#n.set(t_,n)),n.setItems(this.#a.items)}#u(){let e=this.#r??this.#o();for(let n of[...this.#n.keys()])e.has(n)||(this.#n.get(n)?.remove(),this.#n.delete(n));for(let[n,r]of e){let e=[...this.children].find(e=>e instanceof HTMLElement&&e.dataset.groupKey===n);if(!e)continue;let i=this.#n.get(n);i||(i=this.#t(n),e.appendChild(i),this.#n.set(n,i)),i.setItems(r)}}#d};k([A({type:Boolean,reflect:!0})],n_.prototype,`grouped`,void 0),k([A({type:Boolean,attribute:`cross-group-selection`,reflect:!0})],n_.prototype,`crossGroupSelection`,void 0),n_=k([O(`ixfx-grouped-item-lister`)],n_);var r_=`li, [data-list-item]`;function i_(e){return e===`checked`||e===`vscode`||e===`standard`}var a_=class extends E{constructor(...e){super(...e),this.selectionMode=`single`,this.interactionMode=`standard`,this._selectedItems=new Set,this._searchVisible=!1,this._searchQuery=``,this.#n=new Map,this.tickled=new $e(this,{getItems:()=>this._getVisibleItems().map(e=>({id:e,enabled:!0})),onTickle:e=>{e!==void 0&&this._dispatch(`list-tickle`,{item:e})},onStateChange:()=>this._syncItemStates()}),this._onPointerOver=e=>{let n=this._findListItem(e.composedPath());n&&this.tickled.handlePointerEnter(n)},this._onPointerLeave=e=>{this.tickled.handlePointerLeave(e)},this._onKeyDown=e=>{if((e.ctrlKey||e.metaKey)&&e.key===`f`){e.preventDefault(),this._openSearch();return}if((e.ctrlKey||e.metaKey)&&e.key===`a`){(this.selectionMode===`multiple`||i_(this.interactionMode))&&this.selectionMode!==`none`&&(e.preventDefault(),this._selectAll());return}if(!this._searchVisible)switch(e.key){case`ArrowDown`:if(e.preventDefault(),this.tickled.handleKeyboardNavigation(`next`),e.shiftKey&&this.interactionMode===`vscode`){let e=this.tickled.tickledId;e&&this._rangeSelectTo(e)}break;case`ArrowUp`:if(e.preventDefault(),this.tickled.handleKeyboardNavigation(`previous`),e.shiftKey&&this.interactionMode===`vscode`){let e=this.tickled.tickledId;e&&this._rangeSelectTo(e)}break;case`Enter`:{let n=this.tickled.tickledId;n&&(e.preventDefault(),this._dispatch(`list-item-click`,{item:n}),this._activateItem(n));break}case` `:{let n=this.tickled.tickledId;n&&(e.preventDefault(),this._handleSpaceKey(n));break}case`Escape`:this._clearSelection();break}},this._onClick=e=>{let n=this._findListItem(e.composedPath());n&&(this._dispatch(`list-item-click`,{item:n}),this._handleClickSelection(n,e))},this._onDblClick=e=>{let n=this._findListItem(e.composedPath());n&&this._activateItem(n)},this._onSearchInput=e=>{let n=e.target;this._searchQuery=n.value,this.#e?.setQuery(this._searchQuery)},this._onSearchKeydown=e=>{if(e.key===`Escape`)e.stopPropagation(),this._closeSearch();else if(e.key===`ArrowDown`)e.preventDefault(),this.tickled.handleKeyboardNavigation(`next`);else if(e.key===`ArrowUp`)e.preventDefault(),this.tickled.handleKeyboardNavigation(`previous`);else if(e.key===`Enter`){e.preventDefault(),e.stopPropagation();let n=this.tickled.tickledId??this._getVisibleItems()[0];n&&(this._dispatch(`list-item-click`,{item:n}),this._activateItem(n),this._closeSearch())}}}#e;#t;#n;connectedCallback(){super.connectedCallback(),this.hasAttribute(`tabindex`)||(this.tabIndex=0),this.addEventListener(`pointerover`,this._onPointerOver),this.addEventListener(`pointerleave`,this._onPointerLeave),this.addEventListener(`keydown`,this._onKeyDown),this.addEventListener(`click`,this._onClick),this.addEventListener(`dblclick`,this._onDblClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`pointerover`,this._onPointerOver),this.removeEventListener(`pointerleave`,this._onPointerLeave),this.removeEventListener(`keydown`,this._onKeyDown),this.removeEventListener(`click`,this._onClick),this.removeEventListener(`dblclick`,this._onDblClick),this.#e?.dispose(),this.#e=void 0}firstUpdated(){this.#e=jn({container:this,itemSelector:r_,getLabel:e=>e.getAttribute(`data-search-label`)??e.textContent?.trim()??``,getKey:e=>e.getAttribute(`data-key`)??e.getAttribute(`data-search-label`)??e.textContent?.trim()??``,highlightKey:`vertical-list-search`})}updated(e){if(super.updated(e),e.has(`interactionMode`)){this.#t=void 0;let n=this._selectedItems,r=e.get(`interactionMode`)===`checked`?new Map(this.#n):null;if(this._syncCheckboxes(),n.size>0){let e;if(r&&r.size>0)e=new Set([...n].map(e=>r.get(e)??e));else if(this.#n.size>0){let r=new Map([...this.#n].map(([e,n])=>[n,e]));e=new Set([...n].map(e=>r.get(e)??e))}else e=new Set(n);this._selectedItems=e}this._syncItemStates()}}get selectedItem(){return[...this._selectedItems].at(-1)}get selectedItems(){return this._selectedItems}addItem(e){if(typeof e==`string`){let n=document.createElement(`li`);n.textContent=e,this.appendChild(n)}else this.appendChild(e);this.interactionMode===`checked`&&this._syncCheckboxes()}removeItem(e){e.remove()}clearItems(){this.#n.clear(),this.replaceChildren(),this.#t=void 0,this._selectedItems=new Set,this._syncItemStates()}setItems(e){this.clearItems();for(let n of e)this.appendChild(n);this.interactionMode===`checked`&&this._syncCheckboxes()}dispatch(e,n){}select(e){this._replaceSelection(e)}selectMany(e){if(this.selectionMode!==`multiple`)throw Error(`selectMany requires selectionMode="multiple" (current: "${this.selectionMode}")`);let n=this._selectedItems,r=new Set(e);r.size!==0&&(this._selectedItems=r,this.#t=[...r].at(-1),this._syncItemStates(),this._dispatch(`list-select`,{selected:r,previous:n}))}deselect(e){if(!this._selectedItems.has(e))return;let n=this._selectedItems,r=new Set(this._selectedItems);r.delete(e),this._selectedItems=r,this._syncItemStates(),this._dispatch(`list-select`,{selected:r,previous:n})}clearSelection(){this._clearSelection()}selectAll(){(this.selectionMode===`multiple`||i_(this.interactionMode))&&this.selectionMode!==`none`&&this._selectAll()}_replaceSelection(e){if(this.selectionMode===`none`)return;let n=this._selectedItems,r=new Set([e]);this._selectedItems=r,this.#t=e,this._syncItemStates(),this._dispatch(`list-select`,{selected:r,previous:n})}_toggleItem(e){let n=this.selectionMode===`multiple`||i_(this.interactionMode);if(this.selectionMode===`none`&&this.interactionMode!==`checked`)return;let r=this._selectedItems,i=new Set(this._selectedItems);i.has(e)?i.delete(e):(n||i.clear(),i.add(e)),this._selectedItems=i,this._syncItemStates(),this._dispatch(`list-select`,{selected:i,previous:r})}_rangeSelectTo(e){if(this.selectionMode===`none`)return;if(!this.#t){this._replaceSelection(e);return}let n=this._getVisibleItems(),r=n.indexOf(this.#t),i=n.indexOf(e);if(r===-1||i===-1){this._replaceSelection(e);return}let a=Math.min(r,i),o=Math.max(r,i),s=this._selectedItems,c=new Set(n.slice(a,o+1));this._selectedItems=c,this._syncItemStates(),this._dispatch(`list-select`,{selected:c,previous:s})}_clearSelection(){if(this._selectedItems.size===0)return;let e=this._selectedItems;this._selectedItems=new Set,this._syncItemStates(),this._dispatch(`list-select`,{selected:new Set,previous:e})}_selectAll(){let e=this._getVisibleItems();if(e.length===0)return;let n=this._selectedItems,r=new Set(e);this._selectedItems=r,this._syncItemStates(),this._dispatch(`list-select`,{selected:r,previous:n})}_handleClickSelection(e,n){let r=this.interactionMode;if(r!==`manual`&&!(this.selectionMode===`none`&&r!==`checked`))switch(r){case`implicit`:this._replaceSelection(e);break;case`standard`:case`vscode`:n.ctrlKey||n.metaKey?(this.selectionMode===`multiple`||r===`vscode`)&&this._toggleItem(e):n.shiftKey&&(this.selectionMode===`multiple`||r===`vscode`)?this._rangeSelectTo(e):this._replaceSelection(e);break;case`checked`:break}}_handleSpaceKey(e){let n=this.interactionMode;n!==`manual`&&(n===`implicit`?this._replaceSelection(e):this._toggleItem(e))}_getVisibleItems(){return Array.from(this.querySelectorAll(r_)).filter(e=>!(e.hidden||this.filterPredicate&&!this.filterPredicate(e)))}_syncItemStates(){for(let e of this.querySelectorAll(r_))e.toggleAttribute(`data-tickled`,this.tickled.isTickled(e)),e.toggleAttribute(`data-selected`,this._selectedItems.has(e)),this.interactionMode===`checked`?e.toggleAttribute(`data-checked`,this._selectedItems.has(e)):e.removeAttribute(`data-checked`);this.dataset.inputMode=this.tickled.inputMode,this._syncCheckboxes()}_syncCheckboxes(){let e=this.interactionMode===`checked`;if(e)for(let e of Array.from(this.children)){if(!e.hasAttribute(`data-list-item`)||e.parentElement!==this)continue;let n=document.createElement(`li`);n.className=`ixfx-custom-row`;let r=e.getAttribute(`data-key`),i=e.getAttribute(`data-search-label`);r!==null&&n.setAttribute(`data-key`,r),i!==null&&n.setAttribute(`data-search-label`,i),e.removeAttribute(`data-list-item`),this.insertBefore(n,e),n.appendChild(e),this.#n.set(n,e)}else{for(let[e,n]of this.#n)e.parentElement===this&&(n.setAttribute(`data-list-item`,``),this.insertBefore(n,e),e.remove());this.#n.clear()}for(let n of this.querySelectorAll(`li`)){let r=n.querySelector(`input.ixfx-list-checkbox`);e?(r||(r=document.createElement(`input`),r.type=`checkbox`,r.className=`ixfx-list-checkbox`,r.style.cssText=`flex-shrink:0;margin:0 6px 0 0;cursor:pointer;accent-color:var(--accent,#60a5fa);pointer-events:auto`,r.tabIndex=-1,r.addEventListener(`click`,e=>{e.stopPropagation(),this._toggleItem(n)}),n.prepend(r)),r.checked=this._selectedItems.has(n)):r&&r.remove()}}_findListItem(e){for(let n of e)if(n instanceof Element){if(n===this)break;if(n.parentElement===this&&n.matches(r_))return n}}_dispatch(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}_openSearch(){this._searchVisible=!0,this.updateComplete.then(()=>this._searchInputEl?.focus())}_closeSearch(){this._searchVisible=!1,this._searchQuery=``,this.#e?.clearQuery(),this.focus()}_activateItem(e){this.interactionMode!==`manual`&&this._replaceSelection(e),this._dispatch(`list-activate`,{item:e})}static{this.styles=[D,_`
    :host {
      display: block;
      position: relative;
      background: var(--list-bg, var(--surface-3));
      color: var(--list-text, var(--surface-3-text));
      border-radius: var(--list-radius, var(--radius-s));
      border: 1px solid var(--list-border, var(--border));
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      outline: none;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      box-sizing: border-box;
    }

    ::slotted([hidden]) {
      display: none !important;
    }

    ::slotted(li) {
      display: flex;
      align-items: center;
      padding: var(--list-item-padding, 4px var(--space-m, 8px));
      min-height: var(--list-item-height, 28px);
      cursor: pointer;
      user-select: none;
      transition: background var(--transition, 0.1s ease-out),
                  outline-color var(--transition, 0.1s ease-out);
      box-sizing: border-box;
      outline: 1px solid transparent;
    }

    /* Custom shadow-DOM components handle their own internal layout/padding */
    ::slotted([data-list-item]) {
      display: block;
      cursor: pointer;
      user-select: none;
      transition: background var(--transition, 0.1s ease-out),
                  outline-color var(--transition, 0.1s ease-out);
      outline: 1px solid transparent;
    }

    ::slotted([data-tickled]) {
      background: var(--item-bg-tickled);
      outline: var(--item-border-tickled);
    }

    ::slotted([data-selected]) {
      background: var(--item-bg-selected);
      color: var(--item-text-selected);
      outline: 1px solid transparent;
    }

    ::slotted([data-selected][data-tickled]) {
      background: var(--item-bg-selected-tickled);
      outline: 2px dashed var(--surface-3);
      outline-offset: -2px;
    }

    /* checked mode: checkbox (injected into li) communicates selection — suppress bg highlight */
    :host([interaction-mode="checked"]) ::slotted([data-selected]) {
      background: transparent;
      color: inherit;
      outline: 1px solid transparent;
    }

    :host([interaction-mode="checked"]) ::slotted([data-selected][data-tickled]) {
      background: var(--item-bg-tickled);
      color: inherit;
      outline: var(--item-border-tickled);
    }

    .search-overlay {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 10;
      display: flex;
      align-items: center;
      gap: 4px;
      background: var(--surface-4, #2a2a2a);
      border: 1px solid var(--border, #444);
      border-radius: var(--radius-m, 4px);
      padding: 4px 6px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .search-overlay[hidden] {
      display: none;
    }

    .search-input {
      background: transparent;
      border: none;
      outline: none;
      color: inherit;
      font-size: var(--text-m, 0.875em);
      min-width: 140px;
    }

    .search-close {
      background: transparent;
      border: none;
      color: var(--surface-muted-text, #888);
      cursor: pointer;
      font-size: 1.1em;
      line-height: 1;
      padding: 0 2px;
    }

    .search-close:hover {
      color: inherit;
    }
  `]}render(){return C`
      <div class="container">
        <ul part="list">
          <slot></slot>
        </ul>
        <div
          class="search-overlay"
          part="search-overlay"
          ?hidden=${!this._searchVisible}
        >
          <input
            type="text"
            class="search-input"
            placeholder="Search…"
            .value=${this._searchQuery}
            @input=${this._onSearchInput}
            @keydown=${this._onSearchKeydown}
          />
          <button class="search-close" @click=${this._closeSearch} title="Close search (Esc)">×</button>
        </div>
      </div>
    `}};k([A({type:String,attribute:`selection-mode`})],a_.prototype,`selectionMode`,void 0),k([A({type:String,attribute:`interaction-mode`})],a_.prototype,`interactionMode`,void 0),k([A({attribute:!1})],a_.prototype,`filterPredicate`,void 0),k([j()],a_.prototype,`_selectedItems`,void 0),k([j()],a_.prototype,`_searchVisible`,void 0),k([j()],a_.prototype,`_searchQuery`,void 0),k([M(`.search-input`)],a_.prototype,`_searchInputEl`,void 0),a_=k([O(`ixfx-vertical-list`)],a_);var o_=class extends E{constructor(...e){super(...e),this.orientation=`horizontal`,this.variant=`titlebar`,this.toggleInteraction=`implicit`,this.allowMultiple=!1,this.gap=`var(--space-m)`}_onPanelToggle(e){let n=e.target;if(!n.collapsed&&!this.allowMultiple)for(let e of this._panels)e!==n&&(e.collapsed=!0)}firstUpdated(){this.updateComplete.then(()=>{this._propagateAll()})}updated(e){super.updated(e),(e.has(`variant`)||e.has(`toggleInteraction`)||e.has(`orientation`))&&this.updateComplete.then(()=>{this._propagateAll()})}_propagateAll(){let e=this.orientation===`horizontal`?`vertical`:`horizontal`;for(let n of this._panels)n.setAttribute(`variant`,this.variant),n.setAttribute(`toggle-interaction`,this.toggleInteraction),n.setAttribute(`orientation`,e)}render(){return C`
      <slot
        @toggle=${this._onPanelToggle}
      ></slot>
    `}static{this.styles=_`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--group-gap, var(--space-m));
    }

    :host([orientation="horizontal"]) {
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    :host([orientation="vertical"]) {
      flex-direction: column;
    }

    ::slotted(ixfx-panel) {
      flex-shrink: 1;
    }

    :host([orientation="horizontal"]) ::slotted(ixfx-panel) {
      flex-basis: content;
      min-width: 0;
    }
  `}};k([A({type:String,reflect:!0})],o_.prototype,`orientation`,void 0),k([A({type:String})],o_.prototype,`variant`,void 0),k([A({type:String,attribute:`toggle-interaction`})],o_.prototype,`toggleInteraction`,void 0),k([A({type:Boolean,attribute:`allow-multiple`})],o_.prototype,`allowMultiple`,void 0),k([A()],o_.prototype,`gap`,void 0),k([pt({slot:``})],o_.prototype,`_panels`,void 0),o_=k([O(`ixfx-panel-group`)],o_);function s_(e){return{client:{x:e.clientX,y:e.clientY},offset:{x:e.offsetX,y:e.offsetY}}}function c_(e,n){let r=s_(e),i=e=>{n.progress(s_(e),r)},a=e=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a),n.complete(s_(e),r)};document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)}function l_(e,n){let r=e-n,i=e+n;return e=>e>=r&&e<=i}var u_=class extends E{constructor(...e){super(...e),this.tooltip=!0,this.tooltipOrientation=`top`,this.crossover=`allow`,this.resizeMode=`dual`,this.orientation=`horizontal`,this.step=1,this.a=0,this.b=50,this.#e=100,this.#t=0,this.#n=e=>e,this.#r=e=>e,this.#i=e=>e,this.draggingThumb=`none`}#e;#t;#n;#r;#i;#a(){this.#n=_r(this.#t,this.#e,0,100),this.#r=_r(0,100,this.#t,this.#e),this.#i=ur(this.#t,this.#e),this.a=this.#i(this.a),this.b=this.#i(this.b)}set max(e){this.#e=e,this.#a()}get max(){return this.#e}set min(e){this.#t=e,this.#a()}get min(){return this.#t}_onInput(e){e.stopPropagation();let n=e.target,r=this.#r(n.valueAsNumber),i=n.id,a=this.a,o=this.b;if(this.resizeMode===`none`){let e=r-(i===`a`?this.a:this.b),s=this.a+e,c=this.b+e;if(s<this.min&&(e=this.min-this.a),c>this.max&&(e=this.max-this.b),e===0){n.valueAsNumber=this.#n(i===`a`?this.a:this.b);return}a=this.a+e,o=this.b+e}else if(this.resizeMode===`bipolar`){let e,s;if(i===`a`){let n=r-this.a;e=r,s=this.b-n}else{let n=r-this.b;e=this.a-n,s=r}if(e<this.min||s>this.max||e>this.max||s<this.min){n.valueAsNumber=this.#n(i===`a`?this.a:this.b);return}a=e,o=s}else if(this.resizeMode===`bipolar-flex`){let e,s;if(i===`a`)if(e=r,this.b<=this.min)s=this.min;else if(this.b>=this.max)s=this.max;else{let e=r-this.a;s=this.b-e}else if(s=r,this.a<=this.min)e=this.min;else if(this.a>=this.max)e=this.max;else{let n=r-this.b;e=this.a-n}if(e<this.min&&(e=this.min),e>this.max&&(e=this.max),s<this.min&&(s=this.min),s>this.max&&(s=this.max),e>s){n.valueAsNumber=this.#n(i===`a`?this.a:this.b);return}a=e,o=s}else if(i===`a`)r>this.b&&this.crossover===`stop`?n.valueAsNumber=this.#n(this.a):a=r;else if(i===`b`)r<a&&this.crossover===`stop`?n.valueAsNumber=this.#n(this.b):o=r;else throw Error(`Expected 'a' or 'b', got: '${n.id}'`);this.setPoles(a,o)}setPoles(e,n){let r=e!==this.a,i=n!==this.b;this.a=this.#i(e),this.b=this.#i(n),this.dispatchEvent(new CustomEvent(`input`,{detail:{a:this.a,b:this.b,changed:r&&i?`both`:r?`a`:`b`}}))}_onPointerDown(e){let n=this.a,r=this.b;this.valuesAtPointerDown={a:n,b:r};let i=e.target.getBoundingClientRect(),a=this.orientation===`vertical`,o=a?i.height:i.width,s=o/(this.max-this.min),c=a?e.offsetY:e.offsetX,l=e=>a?this.max-e*s:e*s,u=e=>a?o-e*s:e*s,d=u(n),f=u(r);if(a?(this.b<this.a?c>f:c<f)||(this.b<this.a?c<d:c>d):this.b<this.a&&c<f||this.b>this.a&&c>f||this.a<this.b&&c<d||this.a>this.b&&c>d){if(this.resizeMode===`none`||this.resizeMode===`bipolar`||this.resizeMode===`bipolar-flex`){let e=l(c)-this.b;this.a+e<this.min&&(e=this.min-this.a),this.b+e>this.max&&(e=this.max-this.b);let n=this.a+e,r=this.b+e;n>=this.min&&r<=this.max&&this.setPoles(n,r)}else this.b=l(c);return}let p=l_(d,10),m=l_(f,10),h=i=>{let o=this.setPoles.bind(this),c=this.resizeMode,u=this.min,p=this.max,m=a?e.offsetY:e.offsetX,h=!1;c_(e,{progress(e,l){let d=a?e.offset.y:e.offset.x,f=(a?m-d:d-m)/s;if(h=!0,i===`a`)if(c===`bipolar`){let e=n+f,i=r-f;if(e<u||i>p||e>p||i<u)return;o(e,i)}else if(c===`bipolar-flex`){let e=n+f,i=r;if(r<=u?i=u:r>=p?i=p:(e=n+f,i=r-f),e<u&&(e=u),e>p&&(e=p),i<u&&(i=u),i>p&&(i=p),e>i)return;o(e,i)}else{let e=f;n+f<u&&(e=u-n),r+e>p&&(e=p-r);let i=n+e,a=r+e;i>=u&&a<=p&&o(i,a)}else if(i===`b`)if(c===`bipolar`){let e=n-f,i=r+f;if(e<u||i>p||e>p||i<u)return;o(e,i)}else if(c===`bipolar-flex`){let e=n,i=r+f;if(n<=u?e=u:n>=p?e=p:(e=n-f,i=r+f),e<u&&(e=u),e>p&&(e=p),i<u&&(i=u),i>p&&(i=p),e>i)return;o(e,i)}else{let e=f;n+f<u&&(e=u-n),r+e>p&&(e=p-r);let i=n+e,a=r+e;i>=u&&a<=p&&o(i,a)}else if(c===`bipolar`){let e=n+f,i=r+f;if(e<u||i>p)return;o(e,i)}else if(c===`bipolar-flex`){let e=n+f,i=r+f;if(e<u?(e=u,i=u+(r-n)):i>p&&(i=p,e=p-(r-n)),e<u||i>p||e>i)return;o(e,i)}else{let e=f;n+f<u&&(e=u-n),r+e>p&&(e=p-r);let i=n+e,a=r+e;i>=u&&a<=p&&o(i,a)}},complete(i,s){if(!h){let i=a?e.offsetY:e.offsetX;Math.abs(i-d)<Math.abs(i-f)?o(l(i),r):o(n,l(i))}}})};if(p(c)){if(this.draggingThumb=`a`,this.resizeMode===`dual`)return!1;e.preventDefault(),e.target.setPointerCapture(e.pointerId),h(`a`);return}else if(m(c)){if(this.draggingThumb=`b`,this.resizeMode===`dual`)return!1;e.preventDefault(),e.target.setPointerCapture(e.pointerId),h(`b`);return}else this.draggingThumb=`none`;e.preventDefault(),e.target.setPointerCapture(e.pointerId),h(`none`)}firstUpdated(e){this.#a()}render(){let e=this.tooltip?C`<ixfx-tooltip style="--tooltip-background: var(--surface-5); --tooltip-color: var(--surface-5-text)" anchor="--a-tooltip" .orientation=${this.tooltipOrientation} .value=${this.a}></ixfx-tooltip>`:T,n=this.tooltip?C`<ixfx-tooltip style="--tooltip-background: var(--surface-5); --tooltip-color: var(--surface-5-text)" anchor="--b-tooltip" .orientation=${this.tooltipOrientation} .value=${this.b}></ixfx-tooltip>`:T,r=this.#n(this.a),i=this.#n(this.b),a=this.orientation===`vertical`?`writing-mode: vertical-lr; direction: rtl;`:T;return C`
      <div @pointerdown=${this._onPointerDown} @input=${this._onInput} style="--a: ${r}; --b: ${i}">
        <input class="thumb-round" .value=${r} id="a" step=${this.step} type="range" style="${a}" anchor="--a-tooltip" />
        ${e}

        <input class="thumb-round" .value=${i} id="b" step=${this.step} type="range" style="${a}" anchor="--b-tooltip" />
        ${n}
      </div>`}static{this.styles=[D,wh,zn,_`
    :host {
      display: grid;
      --value-label-color: unset;
  
      --range-background: AccentColor;
      --range-height: 1.5em;
      --range-thickness: 1em;
      --thumb-background: ButtonFace;
      --thumb-radius: 50%;
      --thumb-width: 1em;
      --thumb-height: 1em;
      --js:1;
    }

    :host([orientation="vertical"]) {
      display: block;
      width: 1.5em;
      height: 200px;
    }

    * {
      margin: 0;
      padding: 0;
      font: inherit;
    }

    div {
       --j: var(--js, 0);
       display:inline grid;
       align-content: end;
       grid-gap: 0.25em;
       place-self: center;
       min-width: 8em;
       width: calc(100% - 1.5em);
       height: 1.5rem;
    }

    :host([orientation="vertical"]) div {
       width: 1.5rem;
       height: calc(100% - 1.5em);
       min-width: unset;
       min-height: 8em;
    }

    div::before, div::after {
       margin: 0.5rem 0.6875rem;
       border-radius: 0.25rem;
       box-shadow: none;
       background: var(--surface-4);
       content: "";
    }
    :host([orientation="vertical"]) div::before,
    :host([orientation="vertical"]) div::after {
       margin: 0.5rem 0;
    }
    div::after {
       --or: calc((100 - Max(var(--a), var(--b)))*1%);
       --ol: calc(Min(var(--a), var(--b))*1%);
       box-shadow: none;
       background: var(--accent);
       clip-path: inset(0 var(--or) 0 var(--ol));
    }
    :host([orientation="vertical"]) div::after {
       clip-path: inset(var(--or) 0 var(--ol) 0);
    }
    div input, div::before, div::after {
       grid-area: calc(1 + var(--j))/1;
    }
    div output, div::after {
       display:'none';
    }

    [type=range] {
      width: 100%;
      height: var(--range-height);
      background: transparent;
      pointer-events: none;
    }

    :host([orientation="vertical"]) [type=range] {
      writing-mode: vertical-lr;
      direction: rtl;
      width: var(--range-height);
      height: 100%;
    }

    [type=range], [type=range]::-webkit-slider-runnable-track, [type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    [type=range], [type=range] + ixfx-tooltip {
      --sel: 0;
      z-index: calc(1 + var(--sel));
    }
    [type=range]::-webkit-slider-runnable-track {
      background: transparent;
    }
    [type=range]::-moz-range-track {
      background: transparent;
    }

    input.thumb-round::-webkit-slider-thumb {
      width: var(--thumb-width);
      height: var(--thumb-height);
      border-radius: var(--thumb-radius);
    }

    [type=range]::-webkit-slider-thumb {
      box-sizing: border-box;
      border: solid calc(0.5rem + -1px) transparent;

      /* box-shadow: var(--shadow-m); */
      background: var(--thumb-background);
      pointer-events: auto;
      cursor: ew-resize;
    }

    :host([orientation="vertical"]) [type=range]::-webkit-slider-thumb {
      width: var(--thumb-height);
      height: var(--thumb-width);
      cursor: ns-resize;
    }

    [type=range]::-moz-range-thumb {
      box-sizing: border-box;
      border: solid calc(0.5rem + -1px) transparent;
      width: 1.375rem;
      height: 1.375rem;
      border-radius: 50%;
      box-shadow: var(--shadow-m);
      background: var(--thumb-background);
      pointer-events: auto;
      cursor: ew-resize;
    }

    :host([orientation="vertical"]) [type=range]::-moz-range-thumb {
      cursor: ns-resize;
    }

    [type=range]:focus {
      outline: none;
    }
    [type=range]:focus, [type=range]:focus + ixfx-tooltip, [type=range]:hover, [type=range]:hover + ixfx-tooltip {
      --sel: 1 ;
    }
  `]}};k([A({type:Boolean})],u_.prototype,`tooltip`,void 0),k([A({type:String,attribute:`tooltip-orientation`})],u_.prototype,`tooltipOrientation`,void 0),k([A({type:String})],u_.prototype,`crossover`,void 0),k([A({type:String,attribute:`resize-mode`})],u_.prototype,`resizeMode`,void 0),k([A({type:String,reflect:!0})],u_.prototype,`orientation`,void 0),k([A()],u_.prototype,`step`,void 0),k([A({type:Number})],u_.prototype,`a`,void 0),k([A({type:Number})],u_.prototype,`b`,void 0),k([A({type:Number})],u_.prototype,`max`,null),k([A({type:Number})],u_.prototype,`min`,null),k([dt({capture:!0})],u_.prototype,`_onInput`,null),k([dt({capture:!0})],u_.prototype,`_onPointerDown`,null),u_=k([O(`ixfx-range-multi`)],u_);var d_=class extends E{constructor(...e){super(...e),this.closeable=!1,this.iconName=void 0,this.description=void 0,this.commandActive=void 0,this.registry=void 0,this._compact=!1}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(([e])=>{this._compact=e.contentRect.width<64}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._commandCleanup?.(),this._commandCleanup=void 0}updated(e){super.updated(e),this._syncTooltipAttrs(),(e.has(`registry`)||e.has(`commandActive`))&&this._syncCommandListener()}_syncTooltipAttrs(){this.description?(this.setAttribute(`data-tooltip`,this.description),this.setAttribute(`data-tooltip-anchor`,`top`)):(this.removeAttribute(`data-tooltip`),this.removeAttribute(`data-tooltip-anchor`))}_syncCommandListener(){this._commandCleanup?.(),this._commandCleanup=void 0,this.registry&&this.commandActive&&(this._commandCleanup=this.registry.addOnInvokeHandler(e=>{e===this.commandActive&&this.click()}))}render(){let e=!this._compact||!this.iconName;return C`
      <div>
        ${this.iconName?C`<ixfx-icon name="${this.iconName}"></ixfx-icon>`:T}
        ${e?C`<span class="label"><slot></slot></span>`:T}
        <div class="actions">
          <div class="toolbar"><slot name="toolbar"></slot></div>
          ${this.closeable?C`
            <button
              class="close-btn"
              type="button"
              aria-label="Close tab"
              @click=${this._onCloseClick}
            >
              <ixfx-icon name="close"></ixfx-icon>
            </button>
          `:T}
        </div>
      </div>
    `}_onCloseClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0})),this.remove()}static{this.styles=[D,zn,_`
      :host {
        --selected-colour: var(--accent);
        --selected-border-width: 1px;
        --padding: var(--space-m);
        display: inline-flex;
        min-width: 0;
        user-select: none;
        box-sizing: border-box;
      }

      :host > div {
        display: flex;
        align-items: center;
        gap: var(--space-s, 4px);
        padding: var(--padding) calc(2 * var(--padding));
        min-width: 0;
        width: 100%;
        font-weight: 500;
        border: var(--selected-border-width) solid transparent;
      }

      :host([selected]) > div {
        color: var(--selected-colour);
        border-top-color: var(--indicator-color-top, transparent);
        border-bottom-color: var(--indicator-color-bottom, transparent);
        border-left-color: var(--indicator-color-left, transparent);
        border-right-color: var(--indicator-color-right, transparent);
      }

      .label {
        overflow: var(--allow-overflow, hidden);
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
        flex: 1 1 auto;
      }

      ixfx-icon {
        flex-shrink: 0;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        margin-left: auto;
        flex-shrink: 0;
      }

      .toolbar {
        display: none;
        align-items: center;
        gap: var(--space-xs);
      }

      :host([selected]) .toolbar {
        display: flex;
      }

      slot[name="toolbar"] {
        display: contents;
      }

      .close-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        padding: var(--space-xs);
        cursor: pointer;
        color: inherit;
        border-radius: var(--radius-s);
        opacity: var(--prominence-idle-opacity);
        transition: opacity var(--transition), background var(--transition);
      }

      .close-btn:hover {
        background: var(--surface-5);
        opacity: var(--prominence-tickled-opacity);
      }

      .close-btn:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 1px;
      }

      :host([selected]) .close-btn,
      :host(:hover) .close-btn {
        opacity: var(--prominence-tickled-opacity);
      }
    `]}};k([A({type:Boolean})],d_.prototype,`closeable`,void 0),k([A({type:String,attribute:`icon-name`})],d_.prototype,`iconName`,void 0),k([A({type:String})],d_.prototype,`description`,void 0),k([A({type:String,attribute:`command-active`})],d_.prototype,`commandActive`,void 0),k([A({attribute:!1})],d_.prototype,`registry`,void 0),k([j()],d_.prototype,`_compact`,void 0),d_=k([O(`ixfx-tab-list-item`)],d_);var f_=class extends E{render(){return C`<slot></slot>`}static{this.styles=[D,_`
  :host {
    display:none;
    height:100%;
    width:100%;
  }

  :host([selected]) {
    background: var(--surface-3);
    display:block;
  }
  `]}};f_=k([O(`ixfx-tab-panel`)],f_);var p_=class extends E{render(){return C`<slot></slot>`}getSelectedElement(){for(let e of this._listItems)if(this.#e(e))return e}#e(e){return e.hasAttribute(`selected`)}#t(e){e.removeAttribute(`selected`),this.onUnselectedPanel&&this.onUnselectedPanel(e.id,e)}#n(e){this.onSelectingPanel&&this.onSelectingPanel(e.id,e),e.setAttribute(`selected`,``),this.onSelectedPanel&&this.onSelectedPanel(e.id,e)}syncWithList(e){Promise.all([e.updateComplete,this.updateComplete]).then(()=>{let n=e.getSelectedElement();if(!n)return;let r=n.getAttribute(`for`);r&&this.selectPanel(r)})}selectPanel(e){let n=this.getSelectedElement();if(n){if(n.id===e)return;this.#t(n)}let r=!1;for(let n of this._listItems)n.id===e&&(this.#n(n),r=!0);return r}static{this.styles=_`
  :host {
    display: block;
  }
  
  `}};k([pt()],p_.prototype,`_listItems`,void 0),p_=k([O(`ixfx-tab-panels`)],p_);var m_=class extends E{constructor(...e){super(...e),this.text=``,this.effect=`fade`,this.duration=300,this.easing=`ease`,this._currentText=``,this._outgoingText=``,this._transitionId=0,this._queue=[],this.#e=()=>{this._onTransitionEnd()},this.#t=()=>{this._onTransitionEnd()}}setText(e,n){this._pendingEffect=n,this.text=e}updated(e){if(e.has(`text`)&&this.text!==this._currentText){let e=this._pendingEffect??this.effect;this._pendingEffect=void 0,this._activeEffect===void 0?this._startTransition(this.text,e):this._queue.push({text:this.text,effect:e})}}_startTransition(e,n){let r=this._currentText;this._currentText=e,this._outgoingText=r,r!==``&&(this._transitionId++,this._activeEffect=n)}_onTransitionEnd(){if(this._outgoingText=``,this._activeEffect=void 0,this._queue.length>0){let e=this._queue.shift();this._startTransition(e.text,e.effect)}}#e;#t;#n(){let e=Math.round(this.duration*.3),n=Math.round(this.duration*.1),r=this._currentText.split(``),i=this._outgoingText.split(``),a=i.length-1,o=r=>`animation-duration:${e}ms;animation-delay:${r*n}ms;animation-timing-function:${this.easing}`;return C`
      ${Ug(`cc${this._transitionId}`,C`
        <span class="layer current char-swap">
          ${r.map((e,n)=>C`<span class="char in" style=${o(n)}>${e}</span>`)}
        </span>
      `)}
      ${this._outgoingText?Ug(this._transitionId,C`
          <span class="layer outgoing char-swap">
            ${i.map((e,n)=>C`<span
                class="char out"
                style=${o(n)}
                @animationend=${n===a?this.#t:void 0}
              >${e}</span>`)}
          </span>
        `):T}
    `}render(){if(this._activeEffect===`character-swap`)return C`<span class="container">${this.#n()}</span>`;let e=this._activeEffect??``,n=this._activeEffect?`animation-duration:${this.duration}ms;animation-timing-function:${this.easing}`:``;return C`
      <span class="container">
        ${this._outgoingText?Ug(this._transitionId,C`
            <span class="layer outgoing ${e}" style=${n} @animationend=${this.#e}>
              ${this._outgoingText}
            </span>
          `):T}
        ${Ug(`c${this._transitionId}`,C`
          <span class="layer current ${e}" style=${n}>
            ${this._currentText}
          </span>
        `)}
      </span>
    `}static{this.styles=_`
    :host {
      display: inline-block;
      --transitory-label-easing: ease;
    }

    .container {
      display: inline-grid;
      overflow: hidden;
    }

    .layer {
      grid-area: 1 / 1;
      white-space: nowrap;
    }

    .layer.outgoing {
      pointer-events: none;
    }

    /* slide-right */
    .layer.current.slide-right {
      transform: translateX(-100%);
      animation: tl-slide-in-left var(--transitory-label-easing) forwards;
    }
    .layer.outgoing.slide-right {
      animation: tl-slide-out-right var(--transitory-label-easing) forwards;
    }

    @keyframes tl-slide-in-left {
      from { transform: translateX(-100%); }
      to   { transform: translateX(0); }
    }
    @keyframes tl-slide-out-right {
      from { transform: translateX(0); }
      to   { transform: translateX(100%); }
    }

    /* slide-left */
    .layer.current.slide-left {
      transform: translateX(100%);
      animation: tl-slide-in-right var(--transitory-label-easing) forwards;
    }
    .layer.outgoing.slide-left {
      animation: tl-slide-out-left var(--transitory-label-easing) forwards;
    }

    @keyframes tl-slide-in-right {
      from { transform: translateX(100%); }
      to   { transform: translateX(0); }
    }
    @keyframes tl-slide-out-left {
      from { transform: translateX(0); }
      to   { transform: translateX(-100%); }
    }

    /* slide-up */
    .layer.current.slide-up {
      transform: translateY(100%);
      animation: tl-slide-in-bottom var(--transitory-label-easing) forwards;
    }
    .layer.outgoing.slide-up {
      animation: tl-slide-out-top var(--transitory-label-easing) forwards;
    }

    @keyframes tl-slide-in-bottom {
      from { transform: translateY(100%); }
      to   { transform: translateY(0); }
    }
    @keyframes tl-slide-out-top {
      from { transform: translateY(0); }
      to   { transform: translateY(-100%); }
    }

    /* slide-down */
    .layer.current.slide-down {
      transform: translateY(-100%);
      animation: tl-slide-in-top var(--transitory-label-easing) forwards;
    }
    .layer.outgoing.slide-down {
      animation: tl-slide-out-bottom var(--transitory-label-easing) forwards;
    }

    @keyframes tl-slide-in-top {
      from { transform: translateY(-100%); }
      to   { transform: translateY(0); }
    }
    @keyframes tl-slide-out-bottom {
      from { transform: translateY(0); }
      to   { transform: translateY(100%); }
    }

    /* fade */
    .layer.current.fade {
      opacity: 0;
      animation: tl-fade-in var(--transitory-label-easing) forwards;
    }
    .layer.outgoing.fade {
      animation: tl-fade-out var(--transitory-label-easing) forwards;
    }

    @keyframes tl-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes tl-fade-out {
      from { opacity: 1; }
      to   { opacity: 0; }
    }

    /* character-swap */
    .char {
      display: inline-block;
    }

    .char.in {
      opacity: 0;
      animation: tl-char-in var(--transitory-label-easing) forwards;
    }

    .char.out {
      animation: tl-char-out var(--transitory-label-easing) forwards;
    }

    @keyframes tl-char-in {
      from { opacity: 0; transform: translateY(-0.3em) scale(0.8); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes tl-char-out {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(0.3em) scale(0.8); }
    }
  `}};k([A({type:String})],m_.prototype,`text`,void 0),k([A({type:String})],m_.prototype,`effect`,void 0),k([A({type:Number})],m_.prototype,`duration`,void 0),k([A({type:String})],m_.prototype,`easing`,void 0),k([j()],m_.prototype,`_currentText`,void 0),k([j()],m_.prototype,`_outgoingText`,void 0),k([j()],m_.prototype,`_activeEffect`,void 0),k([j()],m_.prototype,`_transitionId`,void 0),m_=k([O(`ixfx-transitory-label`)],m_);function h_(e){if(typeof e==`number`)return!0;if(typeof e!=`string`)return!1;let n=e.trim();return n!==``&&!Number.isNaN(Number(n))}var g_,__=class extends E{static{g_=this}constructor(...e){super(...e),this.valueFormatTooltip=g_.defaultFormatter,this.orientation=`top`,this.anchor=`--tooltip`}static{this.numberFormatter=e=>Math.floor(e).toString()}static{this.defaultFormatter=e=>typeof e==`number`?Number.isInteger(e)?e.toString():e.toFixed(2):typeof e==`string`?e:JSON.stringify(e)}#e(){return this.icon?this.icon.startsWith(`<svg`)?C`<span class="tooltip-icon" style="display:inline-flex;align-items:center;margin-right:0.25em">${vt(this.icon)}</span>`:st(this.icon)?C`<ixfx-icon class="tooltip-icon" style="margin-right:0.25em" name="${this.icon}"></ixfx-icon>`:T:T}render(){let e={tooltip:!0,"tooltip-orientation-top":this.orientation===`top`,"tooltip-orientation-bottom":this.orientation===`bottom`,"tooltip-orientation-right":this.orientation===`right`,"tooltip-orientation-left":this.orientation===`left`,"tooltip-type-text":!0,"tooltip-type-number":!1,"tooltip-style-bubble":!0},n=``;switch(typeof this.value){case`number`:e[`tooltip-type-number`]=!0,n=this.valueFormatTooltip(this.value);break;case`string`:h_(this.value)?(e[`tooltip-type-number`]=!0,n=this.valueFormatTooltip(Number.parseFloat(this.value))):n=this.value;break;default:n=JSON.stringify(this.value)}return C`<output style="--anchor-id: ${this.anchor}" class=${Nh(e)}>${this.#e()}${n}</output>`}createRenderRoot(){return this}};k([A({type:String})],__.prototype,`orientation`,void 0),k([A({type:String})],__.prototype,`anchor`,void 0),k([A()],__.prototype,`value`,void 0),k([A({type:String})],__.prototype,`icon`,void 0),__=g_=k([O(`ixfx-tooltip`)],__);function v_(){console.log(`Init`)}var y_=e(n(((e,n)=>{(function(r,i){typeof e==`object`&&n!==void 0?n.exports=i():typeof define==`function`&&define.amd?define(i):(r=typeof globalThis<`u`?globalThis:r||self).Meyda=i()})(e,(function(){function e(e,n,r){if(r||arguments.length===2)for(var i,a=0,o=n.length;a<o;a++)!i&&a in n||(i||=Array.prototype.slice.call(n,0,a),i[a]=n[a]);return e.concat(i||Array.prototype.slice.call(n))}var n=Object.freeze({__proto__:null,blackman:function(e){for(var n=new Float32Array(e),r=2*Math.PI/(e-1),i=2*r,a=0;a<e/2;a++)n[a]=.42-.5*Math.cos(a*r)+.08*Math.cos(a*i);for(a=Math.ceil(e/2);a>0;a--)n[e-a]=n[a-1];return n},sine:function(e){for(var n=Math.PI/(e-1),r=new Float32Array(e),i=0;i<e;i++)r[i]=Math.sin(n*i);return r},hanning:function(e){for(var n=new Float32Array(e),r=0;r<e;r++)n[r]=.5-.5*Math.cos(2*Math.PI*r/(e-1));return n},hamming:function(e){for(var n=new Float32Array(e),r=0;r<e;r++)n[r]=.54-.46*Math.cos(2*Math.PI*(r/e-1));return n}}),r={};function i(e){for(;e%2==0&&e>1;)e/=2;return e===1}function a(e,i){if(i!==`rect`){if(i!==``&&i||(i=`hanning`),r[i]||(r[i]={}),!r[i][e.length])try{r[i][e.length]=n[i](e.length)}catch{throw Error(`Invalid windowing function`)}e=function(e,n){for(var r=[],i=0;i<Math.min(e.length,n.length);i++)r[i]=e[i]*n[i];return r}(e,r[i][e.length])}return e}function o(e,n,r){for(var i=new Float32Array(e),a=0;a<i.length;a++)i[a]=a*n/r,i[a]=13*Math.atan(i[a]/1315.8)+3.5*Math.atan((i[a]/7518)**2);return i}function s(e){return Float32Array.from(e)}function c(e){var n=Math.max.apply(null,e);return e.map((function(e){return e/n}))}function l(e){return 1127*Math.log(1+e/700)}function u(e,n,r){for(var i,a=new Float32Array(e+2),o=new Float32Array(e+2),s=n/2,c=l(0),u=(l(s)-c)/(e+1),d=Array(e+2),f=0;f<a.length;f++)a[f]=f*u,o[f]=(i=a[f],700*(Math.exp(i/1127)-1)),d[f]=Math.floor((r+1)*o[f]/n);for(var p=Array(e),m=0;m<p.length;m++){for(p[m]=Array(r/2+1).fill(0),f=d[m];f<d[m+1];f++)p[m][f]=(f-d[m])/(d[m+1]-d[m]);for(f=d[m+1];f<d[m+2];f++)p[m][f]=(d[m+2]-f)/(d[m+2]-d[m+1])}return p}function d(n,r,i,a,o,s,c){a===void 0&&(a=5),o===void 0&&(o=2),s===void 0&&(s=!0),c===void 0&&(c=440);var l=Math.floor(i/2)+1,u=Array(i).fill(0).map((function(e,a){return n*function(e,n){return Math.log2(16*e/n)}(r*a/i,c)}));u[0]=u[1]-1.5*n;var d,f,p,m=u.slice(1).map((function(e,n){return Math.max(e-u[n])}),1).concat([1]),h=Math.round(n/2),g=Array(n).fill(0).map((function(e,r){return u.map((function(e){return(10*n+h+e-r)%n-h}))})),_=g.map((function(e,n){return e.map((function(e,r){return Math.exp(-.5*(2*g[n][r]/m[r])**2)}))}));if(f=(d=_)[0].map((function(){return 0})),p=d.reduce((function(e,n){return n.forEach((function(n,r){e[r]+=n**2})),e}),f).map(Math.sqrt),_=d.map((function(e,n){return e.map((function(e,n){return e/(p[n]||1)}))})),o){var v=u.map((function(e){return Math.exp(-.5*((e/n-a)/o)**2)}));_=_.map((function(e){return e.map((function(e,n){return e*v[n]}))}))}return s&&(_=e(e([],_.slice(3),!0),_.slice(0,3),!0)),_.map((function(e){return e.slice(0,l)}))}function f(e,n){for(var r=0,i=0,a=0;a<n.length;a++)r+=a**+e*Math.abs(n[a]),i+=n[a];return r/i}function p(e){var n=e.ampSpectrum,r=e.barkScale,i=e.numberOfBarkBands,a=i===void 0?24:i;if(typeof n!=`object`||typeof r!=`object`)throw TypeError();var o=a,s=new Float32Array(o),c=0,l=n,u=new Int32Array(o+1);u[0]=0;for(var d=r[l.length-1]/o,f=1,p=0;p<l.length;p++)for(;r[p]>d;)u[f++]=p,d=f*r[l.length-1]/o;for(u[o]=l.length-1,p=0;p<o;p++){for(var m=0,h=u[p];h<u[p+1];h++)m+=l[h];s[p]=m**.23}for(p=0;p<s.length;p++)c+=s[p];return{specific:s,total:c}}function m(e){var n=e.ampSpectrum;if(typeof n!=`object`)throw TypeError();for(var r=new Float32Array(n.length),i=0;i<r.length;i++)r[i]=n[i]**2;return r}var h=null,g=function(e,n){var r=e.length;return n||=2,h&&h[r]||function(e){(h||={})[e]=Array(e*e);for(var n=Math.PI/e,r=0;r<e;r++)for(var i=0;i<e;i++)h[e][i+r*e]=Math.cos(n*(i+.5)*r)}(r),e.map((function(){return 0})).map((function(i,a){return n*e.reduce((function(e,n,i,o){return e+n*h[r][i+a*r]}),0)}))},_=Object.freeze({__proto__:null,buffer:function(e){return e.signal},rms:function(e){var n=e.signal;if(typeof n!=`object`)throw TypeError();for(var r=0,i=0;i<n.length;i++)r+=n[i]**2;return r/=n.length,r=Math.sqrt(r)},energy:function(e){var n=e.signal;if(typeof n!=`object`)throw TypeError();for(var r=0,i=0;i<n.length;i++)r+=Math.abs(n[i])**2;return r},complexSpectrum:function(e){return e.complexSpectrum},spectralSlope:function(e){var n=e.ampSpectrum,r=e.sampleRate,i=e.bufferSize;if(typeof n!=`object`)throw TypeError();for(var a=0,o=0,s=new Float32Array(n.length),c=0,l=0,u=0;u<n.length;u++){a+=n[u];var d=u*r/i;s[u]=d,c+=d*d,o+=d,l+=d*n[u]}return(n.length*l-o*a)/(a*(c-o**2))},spectralCentroid:function(e){var n=e.ampSpectrum;if(typeof n!=`object`)throw TypeError();return f(1,n)},spectralRolloff:function(e){var n=e.ampSpectrum,r=e.sampleRate;if(typeof n!=`object`)throw TypeError();for(var i=n,a=r/(2*(i.length-1)),o=0,s=0;s<i.length;s++)o+=i[s];for(var c=.99*o,l=i.length-1;o>c&&l>=0;)o-=i[l],--l;return(l+1)*a},spectralFlatness:function(e){var n=e.ampSpectrum;if(typeof n!=`object`)throw TypeError();for(var r=0,i=0,a=0;a<n.length;a++)r+=Math.log(n[a]),i+=n[a];return Math.exp(r/n.length)*n.length/i},spectralSpread:function(e){var n=e.ampSpectrum;if(typeof n!=`object`)throw TypeError();return Math.sqrt(f(2,n)-f(1,n)**2)},spectralSkewness:function(e){var n=e.ampSpectrum;if(typeof n!=`object`)throw TypeError();var r=f(1,n),i=f(2,n),a=f(3,n);return(2*r**3-3*r*i+a)/Math.sqrt(i-r**2)**3},spectralKurtosis:function(e){var n=e.ampSpectrum;if(typeof n!=`object`)throw TypeError();var r=n,i=f(1,r),a=f(2,r),o=f(3,r),s=f(4,r);return(-3*i**4+6*i*a-4*i*o+s)/Math.sqrt(a-i**2)**4},amplitudeSpectrum:function(e){return e.ampSpectrum},zcr:function(e){var n=e.signal;if(typeof n!=`object`)throw TypeError();for(var r=0,i=1;i<n.length;i++)(n[i-1]>=0&&n[i]<0||n[i-1]<0&&n[i]>=0)&&r++;return r},loudness:p,perceptualSpread:function(e){for(var n=p({ampSpectrum:e.ampSpectrum,barkScale:e.barkScale}),r=0,i=0;i<n.specific.length;i++)n.specific[i]>r&&(r=n.specific[i]);return((n.total-r)/n.total)**2},perceptualSharpness:function(e){for(var n=p({ampSpectrum:e.ampSpectrum,barkScale:e.barkScale}),r=n.specific,i=0,a=0;a<r.length;a++)i+=a<15?(a+1)*r[a+1]:.066*Math.exp(.171*(a+1));return i*=.11/n.total},powerSpectrum:m,mfcc:function(e){var n=e.ampSpectrum,r=e.melFilterBank,i=e.numberOfMFCCCoefficients,a=e.bufferSize;if(typeof n!=`object`)throw TypeError(`Valid ampSpectrum is required to generate MFCC`);if(typeof r!=`object`)throw TypeError(`Valid melFilterBank is required to generate MFCC`);var o=Math.min(40,Math.max(1,i||13)),s=m({ampSpectrum:n}),c=r.length,l=Array(c);if(c<o)throw Error(`Insufficient filter bank for requested number of coefficients`);for(var u=new Float32Array(c),d=0;d<u.length;d++){l[d]=new Float32Array(a/2),u[d]=0;for(var f=0;f<a/2;f++)l[d][f]=r[d][f]*s[f],u[d]+=l[d][f];u[d]=Math.log(u[d]+1)}return g(Array.prototype.slice.call(u)).slice(0,o)},chroma:function(e){var n=e.ampSpectrum,r=e.chromaFilterBank;if(typeof n!=`object`)throw TypeError(`Valid ampSpectrum is required to generate chroma`);if(typeof r!=`object`)throw TypeError(`Valid chromaFilterBank is required to generate chroma`);var i=r.map((function(e,r){return n.reduce((function(n,r,i){return n+r*e[i]}),0)})),a=Math.max.apply(Math,i);return a?i.map((function(e){return e/a})):i},spectralFlux:function(e){var n=e.complexSpectrum,r=e.previousComplexSpectrum;if(!r)return 0;for(var i=c(n.real),a=c(r.real),o=0,s=0;s<i.length;s++){var l=Math.abs(i[s])-Math.abs(a[s]);o+=l**2}return Math.sqrt(o)},positiveFlux:function(e){var n=e.complexSpectrum,r=e.previousComplexSpectrum;if(!r)return 0;for(var i=c(n.real),a=c(r.real),o=0,s=0;s<i.length;s++){var l=Math.abs(a[s])-Math.abs(i[s]);o+=Math.max(l,0)**2}return Math.sqrt(o)}});function v(e){if(Array.isArray(e)){for(var n=0,r=Array(e.length);n<e.length;n++)r[n]=e[n];return r}return Array.from(e)}var y={},b={},x={bitReverseArray:function(e){if(y[e]===void 0){for(var n=(e-1).toString(2).length,r=`0`.repeat(n),i={},a=0;a<e;a++){var o=a.toString(2);o=r.substr(o.length)+o,o=[].concat(v(o)).reverse().join(``),i[a]=parseInt(o,2)}y[e]=i}return y[e]},multiply:function(e,n){return{real:e.real*n.real-e.imag*n.imag,imag:e.real*n.imag+e.imag*n.real}},add:function(e,n){return{real:e.real+n.real,imag:e.imag+n.imag}},subtract:function(e,n){return{real:e.real-n.real,imag:e.imag-n.imag}},euler:function(e,n){var r=-2*Math.PI*e/n;return{real:Math.cos(r),imag:Math.sin(r)}},conj:function(e){return e.imag*=-1,e},constructComplexArray:function(e){var n={};n.real=e.real===void 0?e.slice():e.real.slice();var r=n.real.length;return b[r]===void 0&&(b[r]=Array.apply(null,Array(r)).map(Number.prototype.valueOf,0)),n.imag=b[r].slice(),n}},S=function(e){var n={};e.real===void 0||e.imag===void 0?n=x.constructComplexArray(e):(n.real=e.real.slice(),n.imag=e.imag.slice());var r=n.real.length,i=Math.log2(r);if(Math.round(i)!=i)throw Error(`Input size must be a power of 2.`);if(n.real.length!=n.imag.length)throw Error(`Real and imaginary components must have the same length.`);for(var a=x.bitReverseArray(r),o={real:[],imag:[]},s=0;s<r;s++)o.real[a[s]]=n.real[s],o.imag[a[s]]=n.imag[s];for(var c=0;c<r;c++)n.real[c]=o.real[c],n.imag[c]=o.imag[c];for(var l=1;l<=i;l++)for(var u=2**l,d=0;d<u/2;d++)for(var f=x.euler(d,u),p=0;p<r/u;p++){var m=u*p+d,h=u*p+d+u/2,g={real:n.real[m],imag:n.imag[m]},_={real:n.real[h],imag:n.imag[h]},v=x.multiply(f,_),y=x.subtract(g,v);n.real[h]=y.real,n.imag[h]=y.imag;var b=x.add(v,g);n.real[m]=b.real,n.imag[m]=b.imag}return n},ee=function(){function e(e,n){var r=this;if(this._m=n,!e.audioContext)throw this._m.errors.noAC;if(e.bufferSize&&!i(e.bufferSize))throw this._m._errors.notPow2;if(!e.source)throw this._m._errors.noSource;this._m.audioContext=e.audioContext,this._m.bufferSize=e.bufferSize||this._m.bufferSize||256,this._m.hopSize=e.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=e.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=e.callback,this._m.windowingFunction=e.windowingFunction||`hanning`,this._m.featureExtractors=_,this._m.EXTRACTION_STARTED=e.startImmediately||!1,this._m.channel=typeof e.channel==`number`?e.channel:0,this._m.inputs=e.inputs||1,this._m.outputs=e.outputs||1,this._m.numberOfMFCCCoefficients=e.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=e.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=e.featureExtractors||[],this._m.barkScale=o(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=u(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(e.source),this._m.spn.onaudioprocess=function(e){var n;r._m.inputData!==null&&(r._m.previousInputData=r._m.inputData),r._m.inputData=e.inputBuffer.getChannelData(r._m.channel),r._m.previousInputData?((n=new Float32Array(r._m.previousInputData.length+r._m.inputData.length-r._m.hopSize)).set(r._m.previousInputData.slice(r._m.hopSize)),n.set(r._m.inputData,r._m.previousInputData.length-r._m.hopSize)):n=r._m.inputData,function(e,n,r){if(e.length<n)throw Error(`Buffer is too short for frame length`);if(r<1)throw Error(`Hop length cannot be less that 1`);if(n<1)throw Error(`Frame length cannot be less that 1`);var i=1+Math.floor((e.length-n)/r);return Array(i).fill(0).map((function(i,a){return e.slice(a*r,a*r+n)}))}(n,r._m.bufferSize,r._m.hopSize).forEach((function(e){r._m.frame=e;var n=r._m.extract(r._m._featuresToExtract,r._m.frame,r._m.previousFrame);typeof r._m.callback==`function`&&r._m.EXTRACTION_STARTED&&r._m.callback(n),r._m.previousFrame=r._m.frame}))}}return e.prototype.start=function(e){this._m._featuresToExtract=e||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},e.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},e.prototype.setSource=function(e){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=e,this._m.source.connect(this._m.spn)},e.prototype.setChannel=function(e){e<=this._m.inputs?this._m.channel=e:console.error(`Channel `+e+` does not exist. Make sure you've provided a value for 'inputs' that is greater than `+e+` when instantiating the MeydaAnalyzer`)},e.prototype.get=function(e){return this._m.inputData?this._m.extract(e||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},e}(),te={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:`hanning`,featureExtractors:_,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:a,_errors:{notPow2:Error(`Meyda: Buffer size must be a power of 2, e.g. 64 or 512`),featureUndef:Error(`Meyda: No features defined.`),invalidFeatureFmt:Error(`Meyda: Invalid feature format`),invalidInput:Error(`Meyda: Invalid input.`),noAC:Error(`Meyda: No AudioContext specified.`),noSource:Error(`Meyda: No source node specified.`)},createMeydaAnalyzer:function(e){return new ee(e,Object.assign({},te))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(e,n,r){var a=this;if(!n||typeof n!=`object`)throw this._errors.invalidInput;if(!e)throw this._errors.featureUndef;if(!i(n.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=o(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=u(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=d(this.chromaBands,this.sampleRate,this.bufferSize)),`buffer`in n&&n.buffer===void 0?this.signal=s(n):this.signal=n;var c=ne(n,this.windowingFunction,this.bufferSize);if(this.signal=c.windowedSignal,this.complexSpectrum=c.complexSpectrum,this.ampSpectrum=c.ampSpectrum,r){var l=ne(r,this.windowingFunction,this.bufferSize);this.previousSignal=l.windowedSignal,this.previousComplexSpectrum=l.complexSpectrum,this.previousAmpSpectrum=l.ampSpectrum}var f=function(e){return a.featureExtractors[e]({ampSpectrum:a.ampSpectrum,chromaFilterBank:a.chromaFilterBank,complexSpectrum:a.complexSpectrum,signal:a.signal,bufferSize:a.bufferSize,sampleRate:a.sampleRate,barkScale:a.barkScale,melFilterBank:a.melFilterBank,previousSignal:a.previousSignal,previousAmpSpectrum:a.previousAmpSpectrum,previousComplexSpectrum:a.previousComplexSpectrum,numberOfMFCCCoefficients:a.numberOfMFCCCoefficients,numberOfBarkBands:a.numberOfBarkBands})};if(typeof e==`object`)return e.reduce((function(e,n){var r;return Object.assign({},e,((r={})[n]=f(n),r))}),{});if(typeof e==`string`)return f(e);throw this._errors.invalidFeatureFmt}},ne=function(e,n,r){var i={};e.buffer===void 0?i.signal=s(e):i.signal=e,i.windowedSignal=a(i.signal,n),i.complexSpectrum=S(i.windowedSignal),i.ampSpectrum=new Float32Array(r/2);for(var o=0;o<r/2;o++)i.ampSpectrum[o]=Math.sqrt(i.complexSpectrum.real[o]**2+i.complexSpectrum.imag[o]**2);return i};return typeof window<`u`&&(window.Meyda=te),te}))}))(),1);v_();var b_={movingAverageSamples:30,fields:{rms:{title:`RMS`,group:`time`,id:`rms`,showAs:`decimal`},zcr:{title:`Zero crossing`,showAs:`integer`,group:`time`,id:`zcr`},energy:{title:`Energy`,showAs:`integer`,group:`time`,id:`energy`},powerSpectrum:{title:`Power Spectrum`,group:`spectral`,id:`powerSpectrum`,showAs:`float32`},spectralCentroid:{title:`Centroid`,group:`spectral`,showAs:`integer`,id:`spectralCentroid`},spectralFlatness:{title:`Flatness`,group:`spectral`,showAs:`decimal`,id:`spectralFlatness`},spectralFlux:{title:`Flux`,group:`spectral`,showAs:`decimal`,id:`spectralFlux`},spectralSlope:{title:`Slope`,group:`spectral`,showAs:`decimal`,id:`spectralSlope`},spectralRolloff:{title:`Rolloff`,group:`spectral`,showAs:`integer`,id:`spectralRolloff`},spectralSpread:{title:`Spread`,group:`spectral`,showAs:`integer`,id:`spectralSpread`},spectralSkewness:{title:`Skewness`,group:`spectral`,showAs:`decimal`,id:`spectralSkewness`},spectralKurtosis:{title:`Kurtosis`,group:`spectral`,showAs:`integer`,id:`spectralKurtosis`},chroma:{title:`Chroma`,group:`spectral`,showAs:`float32`,id:`chroma`},loudness:{title:`Loudness`,group:`perceptual`,showAs:`float32`,id:`loudness`},perceptualSharpness:{title:`Perceptual Sharpness`,group:`perceptual`,showAs:`decimal`,id:`perceptualSharpness`},mfcc:{title:`Mel-Frequency Cepstral Coefficients`,group:`perceptual`,showAs:`float32`,id:`mfcc`}},fgColour:a.resolveCss(`--fg`)},x_=new Map,S_=i(C_,40);S_.start();function C_(){for(let e of document.querySelectorAll(`ixfx-plot-single-axis`))e.redraw()}var w_=e=>{let{fields:n}=b_;for(let[r,i]of Object.entries(e)){let e=n[r];if(!e)continue;let a=x_.get(r);typeof i==`object`&&e.id===`loudness`?k_(i.specific,e,a):k_(i,e,a)}};function T_(e){return{id:e,type:`number`,averager:r(b_.movingAverageSamples),range:{min:2**53-1,max:-(2**53-1)},lastValue:0,lastAverage:0}}function E_(e){return{id:e,type:`array`}}function D_(e){let n=e.showAs;return n||=(e.group===`spectral`&&(n=`float32`),`decimal`),n===`float32`?E_(e.id):T_(e.id)}function O_(e,n){if(e.type===`number`){if(Number.isNaN(n)||!Number.isFinite(n))return e;e.lastAverage=e.averager(n),e.lastValue=n,e.range={max:Math.max(e.range.max,n),min:Math.min(e.range.min,n)}}return e}function k_(e,n,r){r||=D_(n);let{sectionEl:i,plotEl:a,statsEl:o}=M_(n);if(!i||i.classList.contains(`frozen`))return;typeof e==`number`&&O_(r,e);let s=n.showAs??`float32`;if(a)if(s===`float32`){let n;n=e instanceof Float32Array?Array.from(e):e,a.set(n,!0)}else typeof e==`number`&&!Number.isNaN(e)&&Number.isFinite(e)&&a.add(e,!0);else console.warn(`No plot element for: ${n.id}`);o&&r&&(o.innerHTML=N_(r,n)),x_.set(n.id,r)}var A_=e=>e.toPrecision(2),j_=e=>Math.floor(e).toString();function M_(e){let n=document.querySelector(`#section-${e.id}`);return n?{sectionEl:n,plotEl:n.querySelector(`ixfx-plot-single-axis`),statsEl:n.querySelector(`.stats`)}:(console.warn(`Section element not found: #section-${e.id}`),{sectionEl:void 0,plotEl:void 0,statsEl:void 0})}function N_(e,n){let r=n.showAs===`integer`?j_:A_;if(e.type===`number`){let n=e.range;return`${r(n.min)} - ${r(n.max)}<br />Avg: ${r(e.lastAverage)} <br />Value: ${r(e.lastValue)}`}return``}async function P_(){await navigator.mediaDevices.enumerateDevices();let e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,r=n.createMediaStreamSource(e);y_.default.createMeydaAnalyzer({audioContext:n,source:r,bufferSize:512,featureExtractors:[...Object.keys(b_.fields)],inputs:2,callback:w_}).start(),document.querySelector(`#btnStart`)?.remove()}function F_(e,n){let r=document.querySelector(`${n} .container`);for(let n of e){let e=document.createElement(`section`),i=document.createElement(`h1`);i.innerText=n.id;let a=document.createElement(`h2`);a.innerText=n.title;let o=document.createElement(`ixfx-plot-single-axis`),s=n.showAs??`float32`;if(s===`float32`?o.drawStyle=`hist-bottom`:(o.drawStyle=`circles`,o.capacity=100),o.id=`plot-${n.id}`,e.id=`section-${n.id}`,e.append(i),e.append(a),e.append(o),s!==`float32`){let n=document.createElement(`div`);n.classList.add(`stats`),n.innerHTML=`Min: ? Max: ? Average: ?`,e.append(n)}e.addEventListener(`click`,()=>{e.classList.toggle(`frozen`)}),r?.append(e)}}function I_(){F_(z_(),`#spectral`),F_(R_(),`#time-domain`),F_(L_(),`#perceptual`),document.querySelector(`#btnStart`)?.addEventListener(`click`,e=>{P_(),e.target.remove()}),document.querySelector(`#btnReset`)?.addEventListener(`click`,e=>{x_.clear();for(let e of document.querySelectorAll(`ixfx-plot-single-axis`))e.clear()}),document.querySelector(`#btnFreeze`)?.addEventListener(`click`,e=>{x_.clear();for(let e of document.querySelectorAll(`section`))e.classList.toggle(`frozen`)}),document.querySelector(`#plotSpeed`)?.addEventListener(`change`,e=>{S_.interval=Math.floor(e.target.valueAsNumber)})}function*L_(){for(let[e,n]of Object.entries(b_.fields))n.group===`perceptual`&&(yield n)}function*R_(){for(let[e,n]of Object.entries(b_.fields))n.group===`time`&&(yield n)}function*z_(){for(let[e,n]of Object.entries(b_.fields))n.group===`spectral`&&(yield n)}I_(),P_();