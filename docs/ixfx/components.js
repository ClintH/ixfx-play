import "./chunk-DKWLQETA.js";
import {
  CanvasHelper
} from "./chunk-YZASO33U.js";
import {
  Drawing_exports
} from "./chunk-SVGQAX7H.js";
import "./chunk-VNEODBI7.js";
import "./chunk-LXXXWKFE.js";
import "./chunk-DVKU2AYL.js";
import "./chunk-AJPKVRVS.js";
import "./chunk-KDQVR45O.js";
import "./chunk-RJZKMJ4U.js";
import "./chunk-ARAXT7VF.js";
import "./chunk-7TRDLPZ6.js";
import "./chunk-B5XDBTUM.js";
import "./chunk-KWDFM445.js";
import "./chunk-QJJ6YNP3.js";
import "./chunk-OG7TSNWN.js";
import "./chunk-UCAZO7IK.js";
import "./chunk-BMX5N5CN.js";
import {
  Pathed_exports,
  colour_exports,
  scaler,
  wrap
} from "./chunk-LCHD6KMN.js";
import "./chunk-N7FO4CPW.js";
import "./chunk-INARIK5E.js";
import "./chunk-XFNQJV53.js";
import "./chunk-YG33FJI6.js";
import "./chunk-NK6WZHXG.js";
import "./chunk-VYCNRTDD.js";
import {
  clamp
} from "./chunk-4OK6CU6W.js";
import "./chunk-72EKR3DZ.js";
import "./chunk-ICXKAKPN.js";
import "./chunk-CVHSZDTH.js";
import "./chunk-MZFSDYZE.js";
import "./chunk-IXB3RQED.js";
import "./chunk-YKJ5OEMO.js";
import {
  getSorter
} from "./chunk-RNGEX66F.js";
import "./chunk-PSWPSMIG.js";
import "./chunk-QVTHCRNR.js";
import "./chunk-WYMJKVGY.js";
import "./chunk-Z2SF7PPR.js";
import "./chunk-3UVU2F72.js";
import "./chunk-HOGLR6UM.js";
import "./chunk-6UZ3OSJO.js";
import "./chunk-UC4AQMTL.js";
import "./chunk-CYC5VE6S.js";
import "./chunk-N6YIY4CM.js";
import "./chunk-4IJNRUE7.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet
} from "./chunk-L5EJU35C.js";

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t6, e6, o7) {
    if (this._$cssResult$ = true, o7 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t6, this.t = e6;
  }
  get styleSheet() {
    let t6 = this.o;
    const s5 = this.t;
    if (e && void 0 === t6) {
      const e6 = void 0 !== s5 && 1 === s5.length;
      e6 && (t6 = o.get(s5)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s5, t6));
    }
    return t6;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t6) => new n("string" == typeof t6 ? t6 : t6 + "", void 0, s);
var i = (t6, ...e6) => {
  const o7 = 1 === t6.length ? t6[0] : e6.reduce((e7, s5, o8) => e7 + ((t7) => {
    if (true === t7._$cssResult$) return t7.cssText;
    if ("number" == typeof t7) return t7;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t7 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s5) + t6[o8 + 1], t6[0]);
  return new n(o7, t6, s);
};
var S = (s5, o7) => {
  if (e) s5.adoptedStyleSheets = o7.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet);
  else for (const e6 of o7) {
    const o8 = document.createElement("style"), n7 = t.litNonce;
    void 0 !== n7 && o8.setAttribute("nonce", n7), o8.textContent = e6.cssText, s5.appendChild(o8);
  }
};
var c = e ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
  let e6 = "";
  for (const s5 of t7.cssRules) e6 += s5.cssText;
  return r(e6);
})(t6) : t6;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t6, s5) => t6;
var u = { toAttribute(t6, s5) {
  switch (s5) {
    case Boolean:
      t6 = t6 ? l : null;
      break;
    case Object:
    case Array:
      t6 = null == t6 ? t6 : JSON.stringify(t6);
  }
  return t6;
}, fromAttribute(t6, s5) {
  let i6 = t6;
  switch (s5) {
    case Boolean:
      i6 = null !== t6;
      break;
    case Number:
      i6 = null === t6 ? null : Number(t6);
      break;
    case Object:
    case Array:
      try {
        i6 = JSON.parse(t6);
      } catch (t7) {
        i6 = null;
      }
  }
  return i6;
} };
var f = (t6, s5) => !i2(t6, s5);
var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var b = class extends HTMLElement {
  static addInitializer(t6) {
    this._$Ei(), (this.l ??= []).push(t6);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t6, s5 = y) {
    if (s5.state && (s5.attribute = false), this._$Ei(), this.elementProperties.set(t6, s5), !s5.noAccessor) {
      const i6 = Symbol(), r8 = this.getPropertyDescriptor(t6, i6, s5);
      void 0 !== r8 && e2(this.prototype, t6, r8);
    }
  }
  static getPropertyDescriptor(t6, s5, i6) {
    const { get: e6, set: h5 } = r2(this.prototype, t6) ?? { get() {
      return this[s5];
    }, set(t7) {
      this[s5] = t7;
    } };
    return { get() {
      return e6?.call(this);
    }, set(s6) {
      const r8 = e6?.call(this);
      h5.call(this, s6), this.requestUpdate(t6, r8, i6);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t6) {
    return this.elementProperties.get(t6) ?? y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t6 = n2(this);
    t6.finalize(), void 0 !== t6.l && (this.l = [...t6.l]), this.elementProperties = new Map(t6.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t7 = this.properties, s5 = [...h(t7), ...o2(t7)];
      for (const i6 of s5) this.createProperty(i6, t7[i6]);
    }
    const t6 = this[Symbol.metadata];
    if (null !== t6) {
      const s5 = litPropertyMetadata.get(t6);
      if (void 0 !== s5) for (const [t7, i6] of s5) this.elementProperties.set(t7, i6);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t7, s5] of this.elementProperties) {
      const i6 = this._$Eu(t7, s5);
      void 0 !== i6 && this._$Eh.set(i6, t7);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s5) {
    const i6 = [];
    if (Array.isArray(s5)) {
      const e6 = new Set(s5.flat(1 / 0).reverse());
      for (const s6 of e6) i6.unshift(c(s6));
    } else void 0 !== s5 && i6.push(c(s5));
    return i6;
  }
  static _$Eu(t6, s5) {
    const i6 = s5.attribute;
    return false === i6 ? void 0 : "string" == typeof i6 ? i6 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t6) => t6(this));
  }
  addController(t6) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t6), void 0 !== this.renderRoot && this.isConnected && t6.hostConnected?.();
  }
  removeController(t6) {
    this._$EO?.delete(t6);
  }
  _$E_() {
    const t6 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
    for (const i6 of s5.keys()) this.hasOwnProperty(i6) && (t6.set(i6, this[i6]), delete this[i6]);
    t6.size > 0 && (this._$Ep = t6);
  }
  createRenderRoot() {
    const t6 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t6, this.constructor.elementStyles), t6;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t6) => t6.hostConnected?.());
  }
  enableUpdating(t6) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t6) => t6.hostDisconnected?.());
  }
  attributeChangedCallback(t6, s5, i6) {
    this._$AK(t6, i6);
  }
  _$EC(t6, s5) {
    const i6 = this.constructor.elementProperties.get(t6), e6 = this.constructor._$Eu(t6, i6);
    if (void 0 !== e6 && true === i6.reflect) {
      const r8 = (void 0 !== i6.converter?.toAttribute ? i6.converter : u).toAttribute(s5, i6.type);
      this._$Em = t6, null == r8 ? this.removeAttribute(e6) : this.setAttribute(e6, r8), this._$Em = null;
    }
  }
  _$AK(t6, s5) {
    const i6 = this.constructor, e6 = i6._$Eh.get(t6);
    if (void 0 !== e6 && this._$Em !== e6) {
      const t7 = i6.getPropertyOptions(e6), r8 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== t7.converter?.fromAttribute ? t7.converter : u;
      this._$Em = e6, this[e6] = r8.fromAttribute(s5, t7.type), this._$Em = null;
    }
  }
  requestUpdate(t6, s5, i6) {
    if (void 0 !== t6) {
      if (i6 ??= this.constructor.getPropertyOptions(t6), !(i6.hasChanged ?? f)(this[t6], s5)) return;
      this.P(t6, s5, i6);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t6, s5, i6) {
    this._$AL.has(t6) || this._$AL.set(t6, s5), true === i6.reflect && this._$Em !== t6 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t6);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t7) {
      Promise.reject(t7);
    }
    const t6 = this.scheduleUpdate();
    return null != t6 && await t6, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t8, s6] of this._$Ep) this[t8] = s6;
        this._$Ep = void 0;
      }
      const t7 = this.constructor.elementProperties;
      if (t7.size > 0) for (const [s6, i6] of t7) true !== i6.wrapped || this._$AL.has(s6) || void 0 === this[s6] || this.P(s6, this[s6], i6);
    }
    let t6 = false;
    const s5 = this._$AL;
    try {
      t6 = this.shouldUpdate(s5), t6 ? (this.willUpdate(s5), this._$EO?.forEach((t7) => t7.hostUpdate?.()), this.update(s5)) : this._$EU();
    } catch (s6) {
      throw t6 = false, this._$EU(), s6;
    }
    t6 && this._$AE(s5);
  }
  willUpdate(t6) {
  }
  _$AE(t6) {
    this._$EO?.forEach((t7) => t7.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t6) {
    return true;
  }
  update(t6) {
    this._$Ej &&= this._$Ej.forEach((t7) => this._$EC(t7, this[t7])), this._$EU();
  }
  updated(t6) {
  }
  firstUpdated(t6) {
  }
};
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = t2.trustedTypes;
var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t6) => t6 }) : void 0;
var e3 = "$lit$";
var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var o3 = "?" + h2;
var n3 = `<${o3}>`;
var r3 = document;
var l2 = () => r3.createComment("");
var c3 = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
var a2 = Array.isArray;
var u2 = (t6) => a2(t6) || "function" == typeof t6?.[Symbol.iterator];
var d2 = "[ 	\n\f\r]";
var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var _ = />/g;
var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var p2 = /'/g;
var g = /"/g;
var $ = /^(?:script|style|textarea|title)$/i;
var y2 = (t6) => (i6, ...s5) => ({ _$litType$: t6, strings: i6, values: s5 });
var x = y2(1);
var b2 = y2(2);
var w = y2(3);
var T = Symbol.for("lit-noChange");
var E = Symbol.for("lit-nothing");
var A = /* @__PURE__ */ new WeakMap();
var C = r3.createTreeWalker(r3, 129);
function P(t6, i6) {
  if (!a2(t6) || !t6.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s2 ? s2.createHTML(i6) : i6;
}
var V = (t6, i6) => {
  const s5 = t6.length - 1, o7 = [];
  let r8, l3 = 2 === i6 ? "<svg>" : 3 === i6 ? "<math>" : "", c6 = f2;
  for (let i7 = 0; i7 < s5; i7++) {
    const s6 = t6[i7];
    let a3, u5, d3 = -1, y3 = 0;
    for (; y3 < s6.length && (c6.lastIndex = y3, u5 = c6.exec(s6), null !== u5); ) y3 = c6.lastIndex, c6 === f2 ? "!--" === u5[1] ? c6 = v : void 0 !== u5[1] ? c6 = _ : void 0 !== u5[2] ? ($.test(u5[2]) && (r8 = RegExp("</" + u5[2], "g")), c6 = m) : void 0 !== u5[3] && (c6 = m) : c6 === m ? ">" === u5[0] ? (c6 = r8 ?? f2, d3 = -1) : void 0 === u5[1] ? d3 = -2 : (d3 = c6.lastIndex - u5[2].length, a3 = u5[1], c6 = void 0 === u5[3] ? m : '"' === u5[3] ? g : p2) : c6 === g || c6 === p2 ? c6 = m : c6 === v || c6 === _ ? c6 = f2 : (c6 = m, r8 = void 0);
    const x2 = c6 === m && t6[i7 + 1].startsWith("/>") ? " " : "";
    l3 += c6 === f2 ? s6 + n3 : d3 >= 0 ? (o7.push(a3), s6.slice(0, d3) + e3 + s6.slice(d3) + h2 + x2) : s6 + h2 + (-2 === d3 ? i7 : x2);
  }
  return [P(t6, l3 + (t6[s5] || "<?>") + (2 === i6 ? "</svg>" : 3 === i6 ? "</math>" : "")), o7];
};
var N = class _N {
  constructor({ strings: t6, _$litType$: s5 }, n7) {
    let r8;
    this.parts = [];
    let c6 = 0, a3 = 0;
    const u5 = t6.length - 1, d3 = this.parts, [f5, v3] = V(t6, s5);
    if (this.el = _N.createElement(f5, n7), C.currentNode = this.el.content, 2 === s5 || 3 === s5) {
      const t7 = this.el.content.firstChild;
      t7.replaceWith(...t7.childNodes);
    }
    for (; null !== (r8 = C.nextNode()) && d3.length < u5; ) {
      if (1 === r8.nodeType) {
        if (r8.hasAttributes()) for (const t7 of r8.getAttributeNames()) if (t7.endsWith(e3)) {
          const i6 = v3[a3++], s6 = r8.getAttribute(t7).split(h2), e6 = /([.?@])?(.*)/.exec(i6);
          d3.push({ type: 1, index: c6, name: e6[2], strings: s6, ctor: "." === e6[1] ? H : "?" === e6[1] ? I : "@" === e6[1] ? L : k }), r8.removeAttribute(t7);
        } else t7.startsWith(h2) && (d3.push({ type: 6, index: c6 }), r8.removeAttribute(t7));
        if ($.test(r8.tagName)) {
          const t7 = r8.textContent.split(h2), s6 = t7.length - 1;
          if (s6 > 0) {
            r8.textContent = i3 ? i3.emptyScript : "";
            for (let i6 = 0; i6 < s6; i6++) r8.append(t7[i6], l2()), C.nextNode(), d3.push({ type: 2, index: ++c6 });
            r8.append(t7[s6], l2());
          }
        }
      } else if (8 === r8.nodeType) if (r8.data === o3) d3.push({ type: 2, index: c6 });
      else {
        let t7 = -1;
        for (; -1 !== (t7 = r8.data.indexOf(h2, t7 + 1)); ) d3.push({ type: 7, index: c6 }), t7 += h2.length - 1;
      }
      c6++;
    }
  }
  static createElement(t6, i6) {
    const s5 = r3.createElement("template");
    return s5.innerHTML = t6, s5;
  }
};
function S2(t6, i6, s5 = t6, e6) {
  if (i6 === T) return i6;
  let h5 = void 0 !== e6 ? s5._$Co?.[e6] : s5._$Cl;
  const o7 = c3(i6) ? void 0 : i6._$litDirective$;
  return h5?.constructor !== o7 && (h5?._$AO?.(false), void 0 === o7 ? h5 = void 0 : (h5 = new o7(t6), h5._$AT(t6, s5, e6)), void 0 !== e6 ? (s5._$Co ??= [])[e6] = h5 : s5._$Cl = h5), void 0 !== h5 && (i6 = S2(t6, h5._$AS(t6, i6.values), h5, e6)), i6;
}
var M = class {
  constructor(t6, i6) {
    this._$AV = [], this._$AN = void 0, this._$AD = t6, this._$AM = i6;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t6) {
    const { el: { content: i6 }, parts: s5 } = this._$AD, e6 = (t6?.creationScope ?? r3).importNode(i6, true);
    C.currentNode = e6;
    let h5 = C.nextNode(), o7 = 0, n7 = 0, l3 = s5[0];
    for (; void 0 !== l3; ) {
      if (o7 === l3.index) {
        let i7;
        2 === l3.type ? i7 = new R(h5, h5.nextSibling, this, t6) : 1 === l3.type ? i7 = new l3.ctor(h5, l3.name, l3.strings, this, t6) : 6 === l3.type && (i7 = new z(h5, this, t6)), this._$AV.push(i7), l3 = s5[++n7];
      }
      o7 !== l3?.index && (h5 = C.nextNode(), o7++);
    }
    return C.currentNode = r3, e6;
  }
  p(t6) {
    let i6 = 0;
    for (const s5 of this._$AV) void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t6, s5, i6), i6 += s5.strings.length - 2) : s5._$AI(t6[i6])), i6++;
  }
};
var R = class _R {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t6, i6, s5, e6) {
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t6, this._$AB = i6, this._$AM = s5, this.options = e6, this._$Cv = e6?.isConnected ?? true;
  }
  get parentNode() {
    let t6 = this._$AA.parentNode;
    const i6 = this._$AM;
    return void 0 !== i6 && 11 === t6?.nodeType && (t6 = i6.parentNode), t6;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t6, i6 = this) {
    t6 = S2(this, t6, i6), c3(t6) ? t6 === E || null == t6 || "" === t6 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t6 !== this._$AH && t6 !== T && this._(t6) : void 0 !== t6._$litType$ ? this.$(t6) : void 0 !== t6.nodeType ? this.T(t6) : u2(t6) ? this.k(t6) : this._(t6);
  }
  O(t6) {
    return this._$AA.parentNode.insertBefore(t6, this._$AB);
  }
  T(t6) {
    this._$AH !== t6 && (this._$AR(), this._$AH = this.O(t6));
  }
  _(t6) {
    this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t6 : this.T(r3.createTextNode(t6)), this._$AH = t6;
  }
  $(t6) {
    const { values: i6, _$litType$: s5 } = t6, e6 = "number" == typeof s5 ? this._$AC(t6) : (void 0 === s5.el && (s5.el = N.createElement(P(s5.h, s5.h[0]), this.options)), s5);
    if (this._$AH?._$AD === e6) this._$AH.p(i6);
    else {
      const t7 = new M(e6, this), s6 = t7.u(this.options);
      t7.p(i6), this.T(s6), this._$AH = t7;
    }
  }
  _$AC(t6) {
    let i6 = A.get(t6.strings);
    return void 0 === i6 && A.set(t6.strings, i6 = new N(t6)), i6;
  }
  k(t6) {
    a2(this._$AH) || (this._$AH = [], this._$AR());
    const i6 = this._$AH;
    let s5, e6 = 0;
    for (const h5 of t6) e6 === i6.length ? i6.push(s5 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s5 = i6[e6], s5._$AI(h5), e6++;
    e6 < i6.length && (this._$AR(s5 && s5._$AB.nextSibling, e6), i6.length = e6);
  }
  _$AR(t6 = this._$AA.nextSibling, i6) {
    for (this._$AP?.(false, true, i6); t6 && t6 !== this._$AB; ) {
      const i7 = t6.nextSibling;
      t6.remove(), t6 = i7;
    }
  }
  setConnected(t6) {
    void 0 === this._$AM && (this._$Cv = t6, this._$AP?.(t6));
  }
};
var k = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t6, i6, s5, e6, h5) {
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t6, this.name = i6, this._$AM = e6, this.options = h5, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = E;
  }
  _$AI(t6, i6 = this, s5, e6) {
    const h5 = this.strings;
    let o7 = false;
    if (void 0 === h5) t6 = S2(this, t6, i6, 0), o7 = !c3(t6) || t6 !== this._$AH && t6 !== T, o7 && (this._$AH = t6);
    else {
      const e7 = t6;
      let n7, r8;
      for (t6 = h5[0], n7 = 0; n7 < h5.length - 1; n7++) r8 = S2(this, e7[s5 + n7], i6, n7), r8 === T && (r8 = this._$AH[n7]), o7 ||= !c3(r8) || r8 !== this._$AH[n7], r8 === E ? t6 = E : t6 !== E && (t6 += (r8 ?? "") + h5[n7 + 1]), this._$AH[n7] = r8;
    }
    o7 && !e6 && this.j(t6);
  }
  j(t6) {
    t6 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t6 ?? "");
  }
};
var H = class extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t6) {
    this.element[this.name] = t6 === E ? void 0 : t6;
  }
};
var I = class extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t6) {
    this.element.toggleAttribute(this.name, !!t6 && t6 !== E);
  }
};
var L = class extends k {
  constructor(t6, i6, s5, e6, h5) {
    super(t6, i6, s5, e6, h5), this.type = 5;
  }
  _$AI(t6, i6 = this) {
    if ((t6 = S2(this, t6, i6, 0) ?? E) === T) return;
    const s5 = this._$AH, e6 = t6 === E && s5 !== E || t6.capture !== s5.capture || t6.once !== s5.once || t6.passive !== s5.passive, h5 = t6 !== E && (s5 === E || e6);
    e6 && this.element.removeEventListener(this.name, this, s5), h5 && this.element.addEventListener(this.name, this, t6), this._$AH = t6;
  }
  handleEvent(t6) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t6) : this._$AH.handleEvent(t6);
  }
};
var z = class {
  constructor(t6, i6, s5) {
    this.element = t6, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t6) {
    S2(this, t6);
  }
};
var Z = { M: e3, P: h2, A: o3, C: 1, L: V, R: M, D: u2, V: S2, I: R, H: k, N: I, U: L, B: H, F: z };
var j = t2.litHtmlPolyfillSupport;
j?.(N, R), (t2.litHtmlVersions ??= []).push("3.2.1");
var B = (t6, i6, s5) => {
  const e6 = s5?.renderBefore ?? i6;
  let h5 = e6._$litPart$;
  if (void 0 === h5) {
    const t7 = s5?.renderBefore ?? null;
    e6._$litPart$ = h5 = new R(i6.insertBefore(l2(), t7), t7, void 0, s5 ?? {});
  }
  return h5._$AI(t6), h5;
};

// node_modules/lit-element/lit-element.js
var r4 = class extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t6 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t6.firstChild, t6;
  }
  update(t6) {
    const s5 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t6), this._$Do = B(s5, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return T;
  }
};
r4._$litElement$ = true, r4["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: r4 });
var i4 = globalThis.litElementPolyfillSupport;
i4?.({ LitElement: r4 });
(globalThis.litElementVersions ??= []).push("4.1.1");

// node_modules/@lit/reactive-element/decorators/custom-element.js
var t3 = (t6) => (e6, o7) => {
  void 0 !== o7 ? o7.addInitializer(() => {
    customElements.define(t6, e6);
  }) : customElements.define(t6, e6);
};

// node_modules/@lit/reactive-element/decorators/property.js
var o4 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r5 = (t6 = o4, e6, r8) => {
  const { kind: n7, metadata: i6 } = r8;
  let s5 = globalThis.litPropertyMetadata.get(i6);
  if (void 0 === s5 && globalThis.litPropertyMetadata.set(i6, s5 = /* @__PURE__ */ new Map()), s5.set(r8.name, t6), "accessor" === n7) {
    const { name: o7 } = r8;
    return { set(r9) {
      const n8 = e6.get.call(this);
      e6.set.call(this, r9), this.requestUpdate(o7, n8, t6);
    }, init(e7) {
      return void 0 !== e7 && this.P(o7, void 0, t6), e7;
    } };
  }
  if ("setter" === n7) {
    const { name: o7 } = r8;
    return function(r9) {
      const n8 = this[o7];
      e6.call(this, r9), this.requestUpdate(o7, n8, t6);
    };
  }
  throw Error("Unsupported decorator location: " + n7);
};
function n4(t6) {
  return (e6, o7) => "object" == typeof o7 ? r5(t6, e6, o7) : ((t7, e7, o8) => {
    const r8 = e7.hasOwnProperty(o8);
    return e7.constructor.createProperty(o8, r8 ? { ...t7, wrapped: true } : t7), r8 ? Object.getOwnPropertyDescriptor(e7, o8) : void 0;
  })(t6, e6, o7);
}

// node_modules/lit-html/directive.js
var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e4 = (t6) => (...e6) => ({ _$litDirective$: t6, values: e6 });
var i5 = class {
  constructor(t6) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t6, e6, i6) {
    this._$Ct = t6, this._$AM = e6, this._$Ci = i6;
  }
  _$AS(t6, e6) {
    return this.update(t6, e6);
  }
  update(t6, e6) {
    return this.render(...e6);
  }
};

// node_modules/lit-html/directive-helpers.js
var { I: t5 } = Z;
var f3 = (o7) => void 0 === o7.strings;
var s3 = () => document.createComment("");
var r6 = (o7, i6, n7) => {
  const e6 = o7._$AA.parentNode, l3 = void 0 === i6 ? o7._$AB : i6._$AA;
  if (void 0 === n7) {
    const i7 = e6.insertBefore(s3(), l3), c6 = e6.insertBefore(s3(), l3);
    n7 = new t5(i7, c6, o7, o7.options);
  } else {
    const t6 = n7._$AB.nextSibling, i7 = n7._$AM, c6 = i7 !== o7;
    if (c6) {
      let t7;
      n7._$AQ?.(o7), n7._$AM = o7, void 0 !== n7._$AP && (t7 = o7._$AU) !== i7._$AU && n7._$AP(t7);
    }
    if (t6 !== l3 || c6) {
      let o8 = n7._$AA;
      for (; o8 !== t6; ) {
        const t7 = o8.nextSibling;
        e6.insertBefore(o8, l3), o8 = t7;
      }
    }
  }
  return n7;
};
var v2 = (o7, t6, i6 = o7) => (o7._$AI(t6, i6), o7);
var u3 = {};
var m2 = (o7, t6 = u3) => o7._$AH = t6;
var p3 = (o7) => o7._$AH;
var M2 = (o7) => {
  o7._$AP?.(false, true);
  let t6 = o7._$AA;
  const i6 = o7._$AB.nextSibling;
  for (; t6 !== i6; ) {
    const o8 = t6.nextSibling;
    t6.remove(), t6 = o8;
  }
};

// node_modules/lit-html/directives/repeat.js
var u4 = (e6, s5, t6) => {
  const r8 = /* @__PURE__ */ new Map();
  for (let l3 = s5; l3 <= t6; l3++) r8.set(e6[l3], l3);
  return r8;
};
var c4 = e4(class extends i5 {
  constructor(e6) {
    if (super(e6), e6.type !== t4.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(e6, s5, t6) {
    let r8;
    void 0 === t6 ? t6 = s5 : void 0 !== s5 && (r8 = s5);
    const l3 = [], o7 = [];
    let i6 = 0;
    for (const s6 of e6) l3[i6] = r8 ? r8(s6, i6) : i6, o7[i6] = t6(s6, i6), i6++;
    return { values: o7, keys: l3 };
  }
  render(e6, s5, t6) {
    return this.dt(e6, s5, t6).values;
  }
  update(s5, [t6, r8, c6]) {
    const d3 = p3(s5), { values: p4, keys: a3 } = this.dt(t6, r8, c6);
    if (!Array.isArray(d3)) return this.ut = a3, p4;
    const h5 = this.ut ??= [], v3 = [];
    let m3, y3, x2 = 0, j2 = d3.length - 1, k2 = 0, w2 = p4.length - 1;
    for (; x2 <= j2 && k2 <= w2; ) if (null === d3[x2]) x2++;
    else if (null === d3[j2]) j2--;
    else if (h5[x2] === a3[k2]) v3[k2] = v2(d3[x2], p4[k2]), x2++, k2++;
    else if (h5[j2] === a3[w2]) v3[w2] = v2(d3[j2], p4[w2]), j2--, w2--;
    else if (h5[x2] === a3[w2]) v3[w2] = v2(d3[x2], p4[w2]), r6(s5, v3[w2 + 1], d3[x2]), x2++, w2--;
    else if (h5[j2] === a3[k2]) v3[k2] = v2(d3[j2], p4[k2]), r6(s5, d3[x2], d3[j2]), j2--, k2++;
    else if (void 0 === m3 && (m3 = u4(a3, k2, w2), y3 = u4(h5, x2, j2)), m3.has(h5[x2])) if (m3.has(h5[j2])) {
      const e6 = y3.get(a3[k2]), t7 = void 0 !== e6 ? d3[e6] : null;
      if (null === t7) {
        const e7 = r6(s5, d3[x2]);
        v2(e7, p4[k2]), v3[k2] = e7;
      } else v3[k2] = v2(t7, p4[k2]), r6(s5, d3[x2], t7), d3[e6] = null;
      k2++;
    } else M2(d3[j2]), j2--;
    else M2(d3[x2]), x2++;
    for (; k2 <= w2; ) {
      const e6 = r6(s5, v3[w2 + 1]);
      v2(e6, p4[k2]), v3[k2++] = e6;
    }
    for (; x2 <= j2; ) {
      const e6 = d3[x2++];
      null !== e6 && M2(e6);
    }
    return this.ut = a3, m2(s5, v3), T;
  }
});

// src/components/HistogramVis.ts
var jsonData = (object) => {
  if (object === null || object === void 0 || object === `undefined`) return;
  try {
    if (typeof object === `string`) {
      if (object.length === 0) return;
      const o7 = JSON.parse(object);
      if (!Array.isArray(o7)) {
        console.error(`Histogram innerText should be JSON array`);
        return;
      }
      for (const [index, element] of o7.entries()) {
        if (!Array.isArray(element)) {
          console.error(`Histogram array should consist of inner arrays`);
          return;
        }
        if (element.length !== 2) {
          console.error(
            `Histogram inner arrays should consist of two elements`
          );
          return;
        }
        if (typeof element[0] !== `string`) {
          console.error(
            `First element of inner array should be a string (index ${index})`
          );
          return;
        }
        if (typeof element[1] !== `number`) {
          console.error(
            `Second element of inner array should be a number (index ${index})`
          );
          return;
        }
      }
      return o7;
    }
  } catch (error) {
    console.log(object);
    console.error(error);
  }
  return;
};
var HistogramVis = class extends r4 {
  constructor() {
    super();
    this.data = [];
    this.showDataLabels = true;
    this.height = `100%`;
    this.showXAxis = true;
    this.json = void 0;
  }
  connectedCallback() {
    if (!this.hasAttribute(`json`)) {
      this.setAttribute(`json`, this.innerText);
    }
    super.connectedCallback();
  }
  barTemplate(bar, index, _totalBars) {
    const { percentage } = bar;
    const [key, freq] = bar.data;
    const rowStart = 1;
    const rowEnd = 2;
    const colStart = index + 1;
    const colEnd = colStart + 1;
    const dataLabel = x`<div class="data">${freq}</div>`;
    const xAxis = x`${key}`;
    return x`
      <div
             class="bar"
             style="grid-area: ${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}"
           >
             <div class="barTrack" style="height: ${(percentage ?? 0) * 100}%"></div>
             ${this.showDataLabels ? dataLabel : ``}
           </div>
           <div
             class="xAxisLabels"
             style="grid-area: ${rowStart + 2} / ${colStart} / ${rowEnd + 2} / ${colEnd}"
           >
             ${this.showXAxis ? xAxis : ``}
           </div>
    `;
  }
  render() {
    if ((this.data === void 0 || this.data.length === 0) && this.json === void 0) {
      return x``;
    }
    const d3 = this.data ?? this.json;
    const length = d3.length;
    const highestCount = Math.max(...d3.map((d4) => d4[1]));
    const bars = d3.map((kv) => ({
      data: kv,
      percentage: kv[1] / highestCount
    }));
    const xAxis = x`
      <div
            class="xAxis"
            style="grid-area: 2 / 1 / 3 / ${d3.length + 1}"
          ></div>
    `;
    const height = this.height ? `height: ${this.height};` : ``;
    const h5 = x`
      <style>
             div.chart {
               grid-template-columns: repeat(${d3.length}, minmax(2px, 1fr));
             }
           </style>
           <div class="container" style="${height}">
             <div class="chart">
               ${c4(
      bars,
      (bar) => bar.data[0],
      (b3, index) => this.barTemplate(b3, index, length)
    )}
               ${this.showXAxis ? xAxis : ``}
             </div>
           </div>
    `;
    return h5;
  }
};
HistogramVis.styles = i`
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
  `;
__decorateClass([
  n4()
], HistogramVis.prototype, "data", 2);
__decorateClass([
  n4()
], HistogramVis.prototype, "showDataLabels", 2);
__decorateClass([
  n4()
], HistogramVis.prototype, "height", 2);
__decorateClass([
  n4()
], HistogramVis.prototype, "showXAxis", 2);
__decorateClass([
  n4({ converter: jsonData, type: Object })
], HistogramVis.prototype, "json", 2);
HistogramVis = __decorateClass([
  t3(`histogram-vis`)
], HistogramVis);

// src/components/FrequencyHistogramPlot.ts
var FrequencyHistogramPlot = class {
  #sorter;
  constructor(el) {
    this.el = el;
  }
  setAutoSort(sortStyle) {
    this.#sorter = getSorter(sortStyle);
  }
  clear() {
    if (this.el === void 0) return;
    this.el.data = [];
  }
  // init() {
  //   if (this.el !== undefined) return; // already inited
  //   // eslint-disable-next-line functional/immutable-data
  //   this.el = document.createElement(`histogram-vis`);
  //   this.parentEl.appendChild(this.el);
  // }
  dispose() {
    const el = this.el;
    if (el === void 0) return;
    el.remove();
  }
  update(data) {
    if (this.el === void 0) {
      console.warn(`FrequencyHistogramPlot this.el undefined`);
      return;
    }
    this.el.data = this.#sorter === void 0 ? [...data] : this.#sorter(data);
  }
};

// node_modules/lit-html/async-directive.js
var s4 = (i6, t6) => {
  const e6 = i6._$AN;
  if (void 0 === e6) return false;
  for (const i7 of e6) i7._$AO?.(t6, false), s4(i7, t6);
  return true;
};
var o5 = (i6) => {
  let t6, e6;
  do {
    if (void 0 === (t6 = i6._$AM)) break;
    e6 = t6._$AN, e6.delete(i6), i6 = t6;
  } while (0 === e6?.size);
};
var r7 = (i6) => {
  for (let t6; t6 = i6._$AM; i6 = t6) {
    let e6 = t6._$AN;
    if (void 0 === e6) t6._$AN = e6 = /* @__PURE__ */ new Set();
    else if (e6.has(i6)) break;
    e6.add(i6), c5(t6);
  }
};
function h3(i6) {
  void 0 !== this._$AN ? (o5(this), this._$AM = i6, r7(this)) : this._$AM = i6;
}
function n5(i6, t6 = false, e6 = 0) {
  const r8 = this._$AH, h5 = this._$AN;
  if (void 0 !== h5 && 0 !== h5.size) if (t6) if (Array.isArray(r8)) for (let i7 = e6; i7 < r8.length; i7++) s4(r8[i7], false), o5(r8[i7]);
  else null != r8 && (s4(r8, false), o5(r8));
  else s4(this, i6);
}
var c5 = (i6) => {
  i6.type == t4.CHILD && (i6._$AP ??= n5, i6._$AQ ??= h3);
};
var f4 = class extends i5 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i6, t6, e6) {
    super._$AT(i6, t6, e6), r7(this), this.isConnected = i6._$AU;
  }
  _$AO(i6, t6 = true) {
    i6 !== this.isConnected && (this.isConnected = i6, i6 ? this.reconnected?.() : this.disconnected?.()), t6 && (s4(this, i6), o5(this));
  }
  setValue(t6) {
    if (f3(this._$Ct)) this._$Ct._$AI(t6, this);
    else {
      const i6 = [...this._$Ct._$AH];
      i6[this._$Ci] = t6, this._$Ct._$AI(i6, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/directives/ref.js
var e5 = () => new h4();
var h4 = class {
};
var o6 = /* @__PURE__ */ new WeakMap();
var n6 = e4(class extends f4 {
  render(i6) {
    return E;
  }
  update(i6, [s5]) {
    const e6 = s5 !== this.Y;
    return e6 && void 0 !== this.Y && this.rt(void 0), (e6 || this.lt !== this.ct) && (this.Y = s5, this.ht = i6.options?.host, this.rt(this.ct = i6.element)), E;
  }
  rt(t6) {
    if (this.isConnected || (t6 = void 0), "function" == typeof this.Y) {
      const i6 = this.ht ?? globalThis;
      let s5 = o6.get(i6);
      void 0 === s5 && (s5 = /* @__PURE__ */ new WeakMap(), o6.set(i6, s5)), void 0 !== s5.get(this.Y) && this.Y.call(this.ht, void 0), s5.set(this.Y, t6), void 0 !== t6 && this.Y.call(this.ht, t6);
    } else this.Y.value = t6;
  }
  get lt() {
    return "function" == typeof this.Y ? o6.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});

// src/components/PlotElement.ts
var _series, _canvas, _drawing, _legendColour, _hue, _PlotElement_instances, setupCanvas_fn, _swatchSize;
var PlotElement = class extends r4 {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PlotElement_instances);
    this.streaming = true;
    this.hideLegend = false;
    this.maxLength = 500;
    this.dataWidth = 5;
    this.fixedMax = Number.NaN;
    this.fixedMin = Number.NaN;
    this.lineWidth = 2;
    this.renderStyle = `dot`;
    this.manualDraw = false;
    this.padding = 5;
    this.paused = false;
    __privateAdd(this, _series, /* @__PURE__ */ new Map());
    __privateAdd(this, _canvas);
    __privateAdd(this, _drawing);
    __privateAdd(this, _legendColour, ``);
    __privateAdd(this, _hue, 0);
    this.canvasEl = e5();
    this.seriesRanges = /* @__PURE__ */ new Map();
    __privateAdd(this, _swatchSize, 10);
  }
  get series() {
    return [...__privateGet(this, _series).values()];
  }
  get seriesCount() {
    return __privateGet(this, _series).size;
  }
  /**
   * Returns a `PlotElement` instance based on a query
   * ```js
   * PlotElement.fromQuery(`#someplot`); // PlotElement
   * ```
   * 
   * Throws an error if query does not match.
   * @param query 
   * @returns 
   */
  static fromQuery(query) {
    const el = document.querySelector(query);
    if (!el) throw new Error(`Query does not match an element`);
    if (el.nodeName === "PLOT-ELEMENT") return el;
    throw new Error(`Elment is not a PlotElement ('${el.nodeName}')`);
  }
  /**
   * Delete a series.
   * Returns _true_ if there was a series to delete
   * @param name 
   * @returns 
   */
  deleteSeries(name) {
    name = name.toLowerCase();
    const s5 = __privateGet(this, _series).get(name);
    if (!s5) return false;
    __privateGet(this, _series).delete(name);
    return true;
  }
  /**
   * Keeps the series, but deletes its data
   * @param name
   * @returns 
   */
  clearSeries(name) {
    name = name.toLowerCase();
    const s5 = __privateGet(this, _series).get(name);
    if (!s5) return false;
    __privateGet(this, _series).clear();
    return true;
  }
  /**
   * Delete all data & series
   */
  clear() {
    __privateGet(this, _series).clear();
  }
  /**
   * Keeps all series, but deletes their data
   */
  clearData() {
    for (const s5 of __privateGet(this, _series).values()) {
      s5.clear();
    }
  }
  render() {
    return x`<canvas ${n6(this.canvasEl)}></canvas>`;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated(_changedProperties) {
    const canvas = this.canvasEl.value;
    const ro = new ResizeObserver((event) => {
      const c6 = __privateMethod(this, _PlotElement_instances, setupCanvas_fn).call(this);
      if (!c6) return;
      const entry = event[0];
      c6.setLogicalSize(entry.contentRect);
    });
    ro.observe(this);
    this.updateColours();
  }
  updateColours() {
    __privateSet(this, _legendColour, colour_exports.getCssVariable(`legend-fg`, `black`));
  }
  plot(value, seriesName = ``, skipDrawing = false) {
    if (typeof value !== "number") throw new Error(`Can only add numbers. Got: ${typeof value}`);
    let s5 = __privateGet(this, _series).get(seriesName.toLowerCase());
    if (s5 === void 0) {
      s5 = new PlotSeries(seriesName, this.colourGenerator(seriesName), this);
      __privateGet(this, _series).set(seriesName.toLowerCase(), s5);
    }
    s5.push(value);
    if (!this.manualDraw && !skipDrawing) this.draw();
    return s5;
  }
  /**
   * Draw a set of key-value pairs as a batch.
   * @param value 
   */
  plotObject(value) {
    for (const p4 of Pathed_exports.getPathsAndData(value, true)) {
      this.plot(p4.value, p4.path, true);
    }
    this.draw();
  }
  colourGenerator(series) {
    const c6 = colour_exports.hslFromRelativeValues(__privateGet(this, _hue), 0.9, 0.4);
    __privateSet(this, _hue, wrap(__privateGet(this, _hue) + 0.1));
    return c6;
  }
  draw() {
    if (this.paused) return;
    const c6 = __privateGet(this, _canvas);
    const d3 = __privateGet(this, _drawing);
    const padding = this.padding;
    if (!d3 || !c6) return;
    c6.clear();
    const ctx = d3.ctx;
    const axisYwidth = this.computeAxisYWidth(c6);
    const remainingWidth = c6.width - axisYwidth;
    const clLegend = this.computeLegend(c6, remainingWidth, padding);
    const plotHeight = c6.height - clLegend.bounds.height - padding;
    const cy = { width: axisYwidth, height: plotHeight };
    const cp = this.computePlot(c6, plotHeight, cy.width, padding);
    const cl = { ...clLegend.bounds, x: cy.width, y: cp.y + cp.height + padding };
    let globalScaler;
    if (!Number.isNaN(this.fixedMax) && !Number.isNaN(this.fixedMin)) {
      globalScaler = scaler(this.fixedMin, this.fixedMax);
    }
    if (!this.hideLegend) {
      ctx.save();
      ctx.translate(cl.x + padding, cl.y + padding);
      this.drawLegend(cl, d3);
      ctx.restore();
    }
    ctx.save();
    ctx.translate(cp.x + padding, cp.y + padding);
    for (const series of __privateGet(this, _series).values()) {
      const seriesScale = this.seriesRanges.get(series.name);
      const data = seriesScale === void 0 ? globalScaler === void 0 ? series.getScaled() : series.getScaledBy(globalScaler) : series.getScaledBy(scaler(seriesScale[0], seriesScale[1]));
      const colour = colour_exports.toString(series.colour);
      switch (this.renderStyle) {
        case `line`: {
          this.drawLineSeries(data, cp, d3, colour);
          break;
        }
        default: {
          this.drawDotSeries(data, cp, d3, colour);
        }
      }
    }
    ctx.restore();
  }
  drawLegend(cl, d3) {
    const textColour = __privateGet(this, _legendColour);
    const padding = this.padding;
    let x2 = 0;
    let y3 = padding;
    const swatchSize = 10;
    const ctx = d3.ctx;
    for (const series of __privateGet(this, _series).values()) {
      ctx.fillStyle = colour_exports.toString(series.colour);
      ctx.fillRect(x2, y3, swatchSize, swatchSize);
      ctx.fillStyle = textColour;
      x2 += swatchSize + padding;
      const m3 = ctx.measureText(series.name);
      ctx.textBaseline = `middle`;
      ctx.fillText(series.name, x2, y3 + swatchSize / 2);
      x2 += m3.width + padding;
      if (x2 >= cl.width) {
        y3 += 10 + padding;
        x2 = 0;
      }
    }
  }
  drawLineSeries(data, cp, d3, colour) {
    const pointWidth = this.streaming ? this.dataWidth : cp.width / data.length;
    let x2 = 0;
    if (this.streaming) x2 = cp.width - pointWidth * data.length;
    const pos = data.map((d4) => {
      x2 += pointWidth;
      return {
        x: x2,
        y: (1 - d4) * cp.height,
        radius: pointWidth
      };
    });
    const trimmed = pos.filter((p4) => {
      if (p4.x < 0) return false;
      return true;
    });
    d3.connectedPoints(trimmed, {
      strokeStyle: colour,
      lineWidth: this.lineWidth
    });
  }
  drawDotSeries(data, cp, d3, colour) {
    const pointWidth = this.streaming ? this.dataWidth : cp.width / data.length;
    let x2 = 0;
    if (this.streaming) x2 = cp.width - pointWidth * data.length;
    const pos = data.map((d4) => {
      x2 += pointWidth;
      return {
        x: x2,
        y: (1 - d4) * cp.height,
        radius: pointWidth
      };
    });
    const trimmed = pos.filter((p4) => {
      if (p4.x < 0) return false;
      return true;
    });
    d3.dot(trimmed, { filled: true, fillStyle: colour });
  }
  computePlot(c6, plotHeight, axisYwidth, padding) {
    return {
      x: axisYwidth,
      y: 0,
      width: c6.width - axisYwidth - padding,
      height: plotHeight - padding - padding
    };
  }
  computeAxisYWidth(c6) {
    return 0;
  }
  computeLegend(c6, maxWidth, padding) {
    if (this.hideLegend) {
      return {
        bounds: { width: 0, height: 0 },
        parts: []
      };
    }
    const ctx = c6.ctx;
    const series = [...__privateGet(this, _series).values()];
    let largestH = 0;
    const sizes = series.map((s5) => {
      let width = __privateGet(this, _swatchSize) + padding;
      const m3 = ctx.measureText(s5.name);
      width += m3.width;
      const height = m3.emHeightAscent + m3.emHeightDescent;
      largestH = Math.max(height, largestH);
      return {
        width,
        height
      };
    });
    const parts = [];
    let x2 = padding;
    let y3 = padding;
    let usedWidthMax = 0;
    for (const s5 of sizes) {
      parts.push({
        x: x2,
        y: y3,
        ...s5
      });
      x2 += s5.width;
      usedWidthMax = Math.max(x2, usedWidthMax);
      if (x2 >= maxWidth) {
        x2 = padding;
        y3 += largestH + padding;
      }
    }
    const bounds = { width: usedWidthMax, height: y3 + largestH + padding };
    return {
      bounds,
      parts
    };
  }
  getSeries(name) {
    return __privateGet(this, _series).get(name);
  }
};
_series = new WeakMap();
_canvas = new WeakMap();
_drawing = new WeakMap();
_legendColour = new WeakMap();
_hue = new WeakMap();
_PlotElement_instances = new WeakSet();
setupCanvas_fn = function() {
  if (__privateGet(this, _canvas) !== void 0) return __privateGet(this, _canvas);
  const canvas = this.canvasEl.value;
  if (!canvas) throw new Error(`canvas element not found`);
  const c6 = new CanvasHelper(canvas);
  __privateSet(this, _canvas, c6);
  __privateSet(this, _drawing, Drawing_exports.makeHelper(c6.ctx));
  return c6;
};
_swatchSize = new WeakMap();
PlotElement.styles = i`
  :host {
    width: 100%;
    height: 100%;
    display: block;
  }
  `;
__decorateClass([
  n4({ attribute: `streaming`, type: Boolean })
], PlotElement.prototype, "streaming", 2);
__decorateClass([
  n4({ attribute: `hide-legend`, type: Boolean })
], PlotElement.prototype, "hideLegend", 2);
__decorateClass([
  n4({ attribute: `max-length`, type: Number })
], PlotElement.prototype, "maxLength", 2);
__decorateClass([
  n4({ attribute: `data-width`, type: Number })
], PlotElement.prototype, "dataWidth", 2);
__decorateClass([
  n4({ attribute: `fixed-max`, type: Number })
], PlotElement.prototype, "fixedMax", 2);
__decorateClass([
  n4({ attribute: `fixed-min`, type: Number })
], PlotElement.prototype, "fixedMin", 2);
__decorateClass([
  n4({ attribute: `line-width`, type: Number })
], PlotElement.prototype, "lineWidth", 2);
__decorateClass([
  n4({ attribute: `render`, type: String })
], PlotElement.prototype, "renderStyle", 2);
__decorateClass([
  n4({ attribute: `manual-draw`, type: Boolean })
], PlotElement.prototype, "manualDraw", 2);
PlotElement = __decorateClass([
  t3(`plot-element`)
], PlotElement);
var PlotSeries = class {
  constructor(name, colour, plot) {
    this.name = name;
    this.colour = colour;
    this.plot = plot;
    this.data = [];
    this.minSeen = Number.MAX_SAFE_INTEGER;
    this.maxSeen = Number.MIN_SAFE_INTEGER;
  }
  clear() {
    this.data = [];
    this.resetScale();
  }
  /**
   * Returns a copy of the data scaled by the current
   * range of the data
   * @returns 
   */
  getScaled() {
    const r8 = this.maxSeen - this.minSeen;
    let min = this.minSeen;
    let max = this.maxSeen;
    if (Number.isNaN(min)) min = 0;
    if (Number.isNaN(max)) max = 1;
    const s5 = scaler(min, max);
    return this.getScaledBy(s5);
  }
  getScaledBy(scaler2) {
    return this.data.map((v3) => {
      if (typeof v3 !== `number`) throw new Error(`Data should just be numbers. Got: ${typeof v3}`);
      if (Number.isNaN(v3)) throw new Error(`data contains NaN`);
      const scaled = scaler2(v3);
      if (Number.isNaN(scaled)) throw new Error(`NaN. v: ${v3} scaled: ${scaled}`);
      return clamp(scaled);
    });
  }
  push(value) {
    if (typeof value !== "number") throw new Error(`Can only add numbers. Got: ${typeof value}`);
    this.data.push(value);
    if (this.data.length > this.plot.maxLength && this.plot.streaming) {
      this.data = this.data.slice(1);
    }
    this.minSeen = Math.min(this.minSeen, value);
    this.maxSeen = Math.max(this.maxSeen, value);
  }
  resetScale() {
    this.minSeen = Number.MAX_SAFE_INTEGER;
    this.maxSeen = Number.MIN_SAFE_INTEGER;
  }
};

// src/components/index.ts
function init() {
  try {
    customElements.define(`plot-element`, PlotElement);
  } catch {
  }
}
export {
  FrequencyHistogramPlot,
  HistogramVis,
  PlotElement,
  PlotSeries,
  init
};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=components.js.map