// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bFsqi":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e9e3842144a4bbfd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jjYtX":[function(require,module,exports) {
var _domJs = require("ixfx/dist/dom.js");
var _geometryJs = require("ixfx/dist/geometry.js");
var _dataJs = require("ixfx/dist/data.js");
const settings = Object.freeze({
    tracker: (0, _dataJs.pointTracker)({
        id: `pt`,
        storeIntermediate: true
    }),
    dtInitial: _domJs.dataTable(`#infoInitial`, undefined, {
        formatter
    }),
    dtLast: _domJs.dataTable(`#infoLast`, undefined, {
        formatter
    })
});
let state = Object.freeze({
    bounds: {
        width: 0,
        height: 0,
        center: {
            x: 0,
            y: 0
        }
    },
    lastPoint: {
        x: -1,
        y: -1
    }
});
/**
 * New click point
 * @param {Points.Point} pt 
 */ const handlePoint = (pt)=>{
    const { dtInitial, dtLast, tracker } = settings;
    const { lastPoint } = state;
    const r = tracker.seen(pt);
    const ctx = getCtx();
    if (!ctx) return;
    const firstPoint = lastPoint.x === -1 && lastPoint.y === -1;
    if (firstPoint) drawDot(ctx, pt, `red`);
    else if (!firstPoint) {
        // Draw line
        drawLine(ctx, lastPoint, pt);
        drawDot(ctx, pt);
    }
    updateState({
        lastPoint: pt
    });
    console.log(r);
    dtInitial(r.fromInitial);
    dtLast(r.fromLast);
    document.getElementById(`totalLength`).innerText = Math.round(tracker.length);
    document.getElementById(`elapsed`).innerText = Math.round(tracker.elapsed / 1000) + `s`;
};
const getCtx = ()=>{
    /** @type HTMLCanvasElement|null */ const canvasEl = document.querySelector(`#canvas`);
    const ctx = canvasEl?.getContext(`2d`);
    if (!ctx || !canvasEl) return;
    return ctx;
};
/**
 * Draws a line from a -> b
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Points.Point} a 
 * @param {Points.Point} b 
 * @returns 
 */ const drawLine = (ctx, a, b)=>{
    ctx.beginPath();
    ctx.strokeStyle = `black`;
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
};
/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Points.Point} a 
 */ const drawDot = (ctx, a, fillStyle = `black`)=>{
    ctx.fillStyle = fillStyle;
    ctx.save();
    ctx.translate(a.x, a.y);
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
};
/**
 * Setup and run main loop 
 */ const setup = ()=>{
    _domJs.fullSizeCanvas(`#canvas`, (args)=>{
        // Update state with new size of canvas
        updateState({
            bounds: args.bounds
        });
    });
    document.addEventListener(`click`, (evt)=>{
        handlePoint({
            x: evt.x,
            y: evt.y
        });
    });
};
setup();
function formatter(data, path) {
    if (path === `centroid` || path === `average`) return (0, _geometryJs.Points).toString((0, _geometryJs.Points).apply(data, Math.round));
    return undefined;
}
/**
 * Update state
 * @param {Partial<state>} s 
 */ function updateState(s) {
    state = Object.freeze({
        ...state,
        ...s
    });
}

},{"ixfx/dist/dom.js":"ao7hr","ixfx/dist/geometry.js":"4cvN0","ixfx/dist/data.js":"jF4D4"}],"ao7hr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragDrop", ()=>(0, _chunkG5YZ6YRDJs.DragDrop_exports));
parcelHelpers.export(exports, "Forms", ()=>(0, _chunkG5YZ6YRDJs.Forms_exports));
parcelHelpers.export(exports, "canvasHelper", ()=>(0, _chunkG5YZ6YRDJs.canvasHelper));
parcelHelpers.export(exports, "cardinalPosition", ()=>(0, _chunkG5YZ6YRDJs.cardinalPosition));
parcelHelpers.export(exports, "clear", ()=>(0, _chunkG5YZ6YRDJs.clear));
parcelHelpers.export(exports, "copyToClipboard", ()=>(0, _chunkG5YZ6YRDJs.copyToClipboard));
parcelHelpers.export(exports, "createAfter", ()=>(0, _chunkG5YZ6YRDJs.createAfter));
parcelHelpers.export(exports, "createIn", ()=>(0, _chunkG5YZ6YRDJs.createIn));
parcelHelpers.export(exports, "cycleCssClass", ()=>(0, _chunkG5YZ6YRDJs.cycleCssClass));
parcelHelpers.export(exports, "dataTable", ()=>(0, _chunkG5YZ6YRDJs.dataTable));
parcelHelpers.export(exports, "dataTableList", ()=>(0, _chunkG5YZ6YRDJs.dataTableList));
parcelHelpers.export(exports, "defaultErrorHandler", ()=>(0, _chunkG5YZ6YRDJs.defaultErrorHandler));
parcelHelpers.export(exports, "fullSizeCanvas", ()=>(0, _chunkG5YZ6YRDJs.fullSizeCanvas));
parcelHelpers.export(exports, "fullSizeElement", ()=>(0, _chunkG5YZ6YRDJs.fullSizeElement));
parcelHelpers.export(exports, "getTranslation", ()=>(0, _chunkG5YZ6YRDJs.getTranslation));
parcelHelpers.export(exports, "log", ()=>(0, _chunkG5YZ6YRDJs.log));
parcelHelpers.export(exports, "parentSize", ()=>(0, _chunkG5YZ6YRDJs.parentSize));
parcelHelpers.export(exports, "parentSizeCanvas", ()=>(0, _chunkG5YZ6YRDJs.parentSizeCanvas));
parcelHelpers.export(exports, "pointScaler", ()=>(0, _chunkG5YZ6YRDJs.pointScaler));
parcelHelpers.export(exports, "pointerVisualise", ()=>(0, _chunkG5YZ6YRDJs.pointerVisualise));
parcelHelpers.export(exports, "positionFn", ()=>(0, _chunkG5YZ6YRDJs.positionFn));
parcelHelpers.export(exports, "positionFromMiddle", ()=>(0, _chunkG5YZ6YRDJs.positionFromMiddle));
parcelHelpers.export(exports, "positionRelative", ()=>(0, _chunkG5YZ6YRDJs.positionRelative));
parcelHelpers.export(exports, "reconcileChildren", ()=>(0, _chunkG5YZ6YRDJs.reconcileChildren));
parcelHelpers.export(exports, "resizeObservable", ()=>(0, _chunkG5YZ6YRDJs.resizeObservable));
parcelHelpers.export(exports, "resolveEl", ()=>(0, _chunkG5YZ6YRDJs.resolveEl));
parcelHelpers.export(exports, "rx", ()=>(0, _chunkG5YZ6YRDJs.rx));
parcelHelpers.export(exports, "themeChangeObservable", ()=>(0, _chunkG5YZ6YRDJs.themeChangeObservable));
parcelHelpers.export(exports, "viewportToSpace", ()=>(0, _chunkG5YZ6YRDJs.viewportToSpace));
parcelHelpers.export(exports, "windowResize", ()=>(0, _chunkG5YZ6YRDJs.windowResize));
var _chunkG5YZ6YRDJs = require("./chunk-G5YZ6YRD.js");
var _chunk4DC2CRSBJs = require("./chunk-4DC2CRSB.js");

},{"./chunk-G5YZ6YRD.js":"igz1E","./chunk-4DC2CRSB.js":"jTrL9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4cvN0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Arcs", ()=>(0, _chunkG5YZ6YRDJs.Arc_exports));
parcelHelpers.export(exports, "Beziers", ()=>(0, _chunkG5YZ6YRDJs.Bezier_exports));
parcelHelpers.export(exports, "Circles", ()=>(0, _chunkG5YZ6YRDJs.Circle_exports));
parcelHelpers.export(exports, "Compound", ()=>(0, _chunkG5YZ6YRDJs.CompoundPath_exports));
parcelHelpers.export(exports, "Convolve2d", ()=>(0, _chunkG5YZ6YRDJs.Convolve2d_exports));
parcelHelpers.export(exports, "Ellipses", ()=>(0, _chunkG5YZ6YRDJs.Ellipse_exports));
parcelHelpers.export(exports, "Grids", ()=>(0, _chunkG5YZ6YRDJs.Grid_exports));
parcelHelpers.export(exports, "Layouts", ()=>(0, _chunkG5YZ6YRDJs.Layout_exports));
parcelHelpers.export(exports, "Lines", ()=>(0, _chunkG5YZ6YRDJs.Line_exports));
parcelHelpers.export(exports, "Paths", ()=>(0, _chunkG5YZ6YRDJs.Path_exports));
parcelHelpers.export(exports, "Points", ()=>(0, _chunkG5YZ6YRDJs.Point_exports));
parcelHelpers.export(exports, "Polar", ()=>(0, _chunkG5YZ6YRDJs.Polar_exports));
parcelHelpers.export(exports, "QuadTree", ()=>(0, _chunkG5YZ6YRDJs.QuadTree_exports));
parcelHelpers.export(exports, "Rects", ()=>(0, _chunkG5YZ6YRDJs.Rect_exports));
parcelHelpers.export(exports, "Scaler", ()=>(0, _chunkG5YZ6YRDJs.Scaler_exports));
parcelHelpers.export(exports, "Shapes", ()=>(0, _chunkG5YZ6YRDJs.Shape_exports));
parcelHelpers.export(exports, "Spheres", ()=>(0, _chunkG5YZ6YRDJs.Sphere_exports));
parcelHelpers.export(exports, "SurfacePoints", ()=>(0, _chunkG5YZ6YRDJs.SurfacePoints_exports));
parcelHelpers.export(exports, "Triangles", ()=>(0, _chunkG5YZ6YRDJs.Triangle_exports));
parcelHelpers.export(exports, "Vectors", ()=>(0, _chunkG5YZ6YRDJs.Vector_exports));
parcelHelpers.export(exports, "Waypoints", ()=>(0, _chunkG5YZ6YRDJs.Waypoint_exports));
parcelHelpers.export(exports, "degreeToRadian", ()=>(0, _chunkG5YZ6YRDJs.degreeToRadian));
parcelHelpers.export(exports, "radianToDegree", ()=>(0, _chunkG5YZ6YRDJs.radianToDegree));
parcelHelpers.export(exports, "radiansFromAxisX", ()=>(0, _chunkG5YZ6YRDJs.radiansFromAxisX));
var _chunkG5YZ6YRDJs = require("./chunk-G5YZ6YRD.js");
var _chunk4DC2CRSBJs = require("./chunk-4DC2CRSB.js");

},{"./chunk-G5YZ6YRD.js":"igz1E","./chunk-4DC2CRSB.js":"jTrL9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jF4D4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Correlate", ()=>(0, _chunkG5YZ6YRDJs.Correlate_exports));
parcelHelpers.export(exports, "FrequencyMutable", ()=>(0, _chunkG5YZ6YRDJs.FrequencyMutable));
parcelHelpers.export(exports, "IntervalTracker", ()=>(0, _chunkG5YZ6YRDJs.IntervalTracker));
parcelHelpers.export(exports, "Normalise", ()=>(0, _chunkG5YZ6YRDJs.Normalise_exports));
parcelHelpers.export(exports, "NumberTracker", ()=>(0, _chunkG5YZ6YRDJs.NumberTracker));
parcelHelpers.export(exports, "PointTracker", ()=>(0, _chunkG5YZ6YRDJs.PointTracker));
parcelHelpers.export(exports, "Pool", ()=>(0, _chunkG5YZ6YRDJs.Pool_exports));
parcelHelpers.export(exports, "TrackedPointMap", ()=>(0, _chunkG5YZ6YRDJs.TrackedPointMap));
parcelHelpers.export(exports, "TrackedValueMap", ()=>(0, _chunkG5YZ6YRDJs.TrackedValueMap));
parcelHelpers.export(exports, "TrackerBase", ()=>(0, _chunkG5YZ6YRDJs.TrackerBase));
parcelHelpers.export(exports, "clamp", ()=>(0, _chunkG5YZ6YRDJs.clamp));
parcelHelpers.export(exports, "clampIndex", ()=>(0, _chunkG5YZ6YRDJs.clampIndex));
parcelHelpers.export(exports, "flip", ()=>(0, _chunkG5YZ6YRDJs.flip));
parcelHelpers.export(exports, "frequencyMutable", ()=>(0, _chunkG5YZ6YRDJs.frequencyMutable));
parcelHelpers.export(exports, "interpolate", ()=>(0, _chunkG5YZ6YRDJs.interpolate));
parcelHelpers.export(exports, "interpolateAngle", ()=>(0, _chunkG5YZ6YRDJs.interpolateAngle));
parcelHelpers.export(exports, "intervalTracker", ()=>(0, _chunkG5YZ6YRDJs.intervalTracker));
parcelHelpers.export(exports, "movingAverage", ()=>(0, _chunkG5YZ6YRDJs.movingAverage));
parcelHelpers.export(exports, "movingAverageLight", ()=>(0, _chunkG5YZ6YRDJs.movingAverageLight));
parcelHelpers.export(exports, "movingAverageTimed", ()=>(0, _chunkG5YZ6YRDJs.movingAverageTimed));
parcelHelpers.export(exports, "numberTracker", ()=>(0, _chunkG5YZ6YRDJs.numberTracker));
parcelHelpers.export(exports, "piPi", ()=>(0, _chunkG5YZ6YRDJs.piPi));
parcelHelpers.export(exports, "pointTracker", ()=>(0, _chunkG5YZ6YRDJs.pointTracker));
parcelHelpers.export(exports, "pointsTracker", ()=>(0, _chunkG5YZ6YRDJs.pointsTracker));
parcelHelpers.export(exports, "scale", ()=>(0, _chunkG5YZ6YRDJs.scale));
parcelHelpers.export(exports, "scaleClamped", ()=>(0, _chunkG5YZ6YRDJs.scaleClamped));
parcelHelpers.export(exports, "scalePercent", ()=>(0, _chunkG5YZ6YRDJs.scalePercent));
parcelHelpers.export(exports, "scalePercentages", ()=>(0, _chunkG5YZ6YRDJs.scalePercentages));
parcelHelpers.export(exports, "wrap", ()=>(0, _chunkG5YZ6YRDJs.wrap));
parcelHelpers.export(exports, "wrapInteger", ()=>(0, _chunkG5YZ6YRDJs.wrapInteger));
parcelHelpers.export(exports, "wrapRange", ()=>(0, _chunkG5YZ6YRDJs.wrapRange));
var _chunkG5YZ6YRDJs = require("./chunk-G5YZ6YRD.js");
var _chunk4DC2CRSBJs = require("./chunk-4DC2CRSB.js");

},{"./chunk-G5YZ6YRD.js":"igz1E","./chunk-4DC2CRSB.js":"jTrL9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bFsqi","jjYtX"], "jjYtX", "parcelRequirefc40")

//# sourceMappingURL=index.44a4bbfd.js.map
