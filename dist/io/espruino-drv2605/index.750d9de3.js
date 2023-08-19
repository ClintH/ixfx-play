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
})({"6enHg":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "96709078750d9de3";
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

},{}],"ljHMZ":[function(require,module,exports) {
/**
 * This code is a playground. It's is meant for playing with in the browser,
 * but the code is not meant to be extended.
 */ var _ioJs = require("ixfx/dist/io.js");
var _domJs = require("ixfx/dist/dom.js");
var _modulationJs = require("ixfx/dist/modulation.js");
var _utilJs = require("ixfx/dist/util.js");
const effects = [
    `strong click 100%`,
    `strong click 60%`,
    `strong click 30%`,
    `sharp click 100%`,
    `sharp click 60%`,
    `sharp click 30%`,
    `soft bump 100%`,
    `soft bump 60%`,
    `soft bump 30%`,
    `double click 100%`,
    `double click 60%`,
    `triple click 100%`,
    `soft fuzz 60%`,
    `strong buzz 100%`,
    `750 ms alert 100%`,
    `1000ms alert 100%`,
    `strong click 1 100%`,
    `strong click 2 80%`,
    `strong click 3 60%`,
    `strong click 4 30%`,
    `medium click 1 100%`,
    `medium click 2 80%`,
    `medium click 3 60%`,
    `sharp tick 1 100%`,
    `sharp tick 2 80%`,
    `sharp tick 3 60%`,
    `short double click strong 1 100%`,
    `short double click strong 2 80%`,
    `short double click strong 3 60%`,
    `short double click strong 4 30%`,
    `short double click medium 1 100%`,
    `short double click medium 2 80%`,
    `short double click medium 3 60%`,
    `short double sharp tick 1 100%`,
    `short double sharp tick 2 80%`,
    `short double sharp tick 3 60%`,
    `long double sharp click strong 1 100%`,
    `long double sharp click strong 2 80%`,
    `long double sharp click strong 3 60%`,
    `long double sharp click strong 4 30%`,
    `long double sharp click medium 1 100%`,
    `long double sharp click medium 2 80%`,
    `long double sharp click medium 3 60%`,
    `long double sharp tick 1 100%`,
    `long double sharp tick 2 80%`,
    `long double sharp tick 3 60%`,
    `buzz 1 100%`,
    `buzz 2 80%`,
    `buzz 3 60%`,
    `buzz 4 40%`,
    `buzz 5 20%`,
    `pulsing strong 1 100%`,
    `pulsing strong 2 60%`,
    `pulsing medium 1 100%`,
    `pulsing medium 2 60%`,
    `pulsing sharp 1 100%`,
    `pulsing sharp 2 60%`,
    `transition click 1 100%`,
    `transition click 2 80%`,
    `transition click 3 60%`,
    `transition click 4 40%`,
    `transition click 5 20%`,
    `transition click 6 10%`,
    `hum 1 100%`,
    `hum 2 80%`,
    `hum 3 60%`,
    `hum 4 40%`,
    `hum 5 20%`,
    `hum 6 10%`,
    `ramp down long smooth 1`,
    `ramp down long smooth 2`,
    `ramp down medium smooth 1`,
    `ramp down medium smooth 2`,
    `ramp down short smooth 1`,
    `ramp down short smooth 2`,
    `ramp down long sharp 1`,
    `ramp down long sharp 2`,
    `ramp down medium sharp 1`,
    `ramp down medium sharp 2`,
    `ramp down short sharp 1`,
    `ramp down short sharp 2`,
    `ramp up long smooth 1`,
    `ramp up long smooth 2`,
    `ramp up medium smooth 1`,
    `ramp up medium smooth 2`,
    `ramp up short smooth 1`,
    `ramp up short smooth 2`,
    `ramp up long sharp 1`,
    `ramp up long sharp 2`,
    `ramp up medium sharp 1`,
    `ramp up medium sharp 2`,
    `ramp up short sharp 1`,
    `ramp up short sharp 2`,
    `ramp down long smooth 1 half`,
    `ramp down long smooth 2 half`,
    `ramp down medium smooth 1 half`,
    `ramp down medium smooth 2 half`,
    `ramp down short smooth 1 half`,
    `ramp down short smooth 2 half`,
    `ramp down long sharp 1 half`,
    `ramp down long sharp 2 half`,
    `ramp down medium sharp 1 half`,
    `ramp down medium sharp 2 half`,
    `ramp down short sharp 1 half`,
    `ramp down short sharp 2 half`,
    `ramp up long smooth 1 half`,
    `ramp up long smooth 2 half`,
    `ramp up medium smooth 1 half`,
    `ramp up medium smooth 2 half`,
    `ramp up short smooth 1 half`,
    `ramp up short smooth 2 half`,
    `ramp up long sharp 1 half`,
    `ramp up long sharp 2 half`,
    `ramp up medium sharp 1 half`,
    `ramp up medium sharp 2 half`,
    `ramp up short sharp 1 half`,
    `ramp up short sharp 2 half`,
    `long buzz no stop`,
    `smooth hum 1 50%`,
    `smooth hum 2 40%`,
    `smooth hum 3 30%`,
    `smooth hum 4 20%`,
    `smooth hum 5 10%`
];
const settings = Object.freeze({
    effects,
    durationLimit: 500,
    selEffectsEl: /** @type HTMLSelectElement */ document.getElementById(`selEffects`),
    seqArrayEl: /** @type HTMLSelectElement */ document.getElementById(`seqArray`),
    txtEnvEl: /** @type HTMLInputElement */ document.getElementById(`txtEnv`),
    envArraysEl: /** @type HTMLElement */ document.getElementById(`envArrays`),
    numEnvResolutionEl: /** @type HTMLInputElement */ document.getElementById(`numEnvResolution`),
    btnEnvSendEl: /** @type HTMLButtonElement */ document.getElementById(`btnEnvSend`)
});
// Keep track of Espruino instance
let state = Object.freeze({
    /** @type {Espruino.EspruinoDevice|null} */ espruino: null
});
const setupTrigger = ()=>{
    const { effects: effects1, selEffectsEl: selEffectsEl1 } = settings;
    const selEffects1 = (0, _domJs.Forms).select(selEffectsEl1, (newValue1)=>{
        console.log(newValue1);
    });
    // Prefix effect name by its index
    const effectsPrefixed1 = effects1.map((e1, index1)=>`${index1 + 1}. ${e1}`);
    selEffects1.setOpts(effectsPrefixed1);
    (0, _domJs.Forms).button(`#btnTrigger`, ()=>{
        const index1 = selEffects1.index + 1;
        if (state.espruino) state.espruino.write(`trigger(${index1})\n`);
    });
};
const setupSequencer = ()=>{
    const { effects: effects1, seqArrayEl: seqArrayEl1 } = settings;
    const steps1 = 8;
    const selectEls1 = [];
    const effectsPrefixed1 = effects1.map((e1, index1)=>`${index1 + 1}. ${e1}`);
    const getSeq1 = ()=>{
        const seq1 = [];
        for(let i1 = 0; i1 < steps1; i1++){
            const index1 = selectEls1[i1].index;
            if (index1 === 0) break;
            seq1[i1] = selectEls1[i1].index;
        }
        return seq1;
    };
    const updateCodePreview1 = ()=>{
        seqArrayEl1.innerText = JSON.stringify(getSeq1());
    };
    let dirty1 = true;
    for(let i1 = 0; i1 < steps1; i1++){
        const el1 = (0, _domJs.Forms).select(`#selSeq${i1}`, ()=>{
            dirty1 = true;
            updateCodePreview1();
        }, {
            shouldAddChoosePlaceholder: true
        });
        el1.setOpts(effectsPrefixed1);
        selectEls1[i1] = el1;
    }
    (0, _domJs.Forms).button(`#btnSeqReset`, ()=>{
        selectEls1.forEach((el1)=>el1.select(0));
        dirty1 = true;
        updateCodePreview1();
    });
    (0, _domJs.Forms).button(`#btnSeqStart`, ()=>{
        const { espruino: espruino1 } = state;
        if (espruino1 === null) return;
        if (dirty1) {
            // Call sequence(steps) on the Espruino
            espruino1.write(`setSequence(${JSON.stringify(getSeq1())}\n)`);
            dirty1 = false;
        }
        espruino1.write(`start()\n`);
    });
    (0, _domJs.Forms).button(`#btnSeqStop`, ()=>{
        if (state.espruino) state.espruino.write(`stop()\n`);
    });
};
const setupEnvelope = ()=>{
    const { btnEnvSendEl, txtEnvEl, envArraysEl, durationLimit, numEnvResolutionEl } = settings;
    let amplitudes = [];
    let durations = [];
    const reset = ()=>{
        envArraysEl.innerHTML = `1. Edit envelope and click 'Sample'.<br />2. Click 'Send to Espruino'`;
        btnEnvSendEl.disabled = true;
    };
    const sampleEnv = async ()=>{
        const sampleRate = parseInt(numEnvResolutionEl.value);
        try {
            const o = eval(`(${txtEnvEl.value.trim()})`);
            console.log(o);
            o.shouldLoop = false;
            if (o.attackDuration > durationLimit) throw new Error(`attackDuration cannot be longer than ${durationLimit}ms.`);
            if (o.decayDuration > durationLimit) throw new Error(`decayDuration cannot be longer than ${durationLimit}ms.`);
            if (o.releaseDuration > durationLimit) throw new Error(`releaseDuration cannot be longer than ${durationLimit}ms.`);
            const data = await (0, _utilJs.IterableAsync).toArray((0, _modulationJs.adsrIterable)({
                env: o,
                sampleRateMs: sampleRate
            }));
            console.log(data);
            amplitudes = data.map((d1)=>Math.round(d1 * 127));
            durations = data.map((d1)=>sampleRate);
            const line1 = `let amplitudes = ${JSON.stringify(amplitudes)};`;
            const line2 = `let durations = ${JSON.stringify(durations)};`;
            envArraysEl.innerHTML = line1 + `<br />` + line2;
            btnEnvSendEl.disabled = false;
        } catch (e) {
            console.log(e);
            envArraysEl.innerHTML = `<h1>:(</h1><p>There is an error in the envelope definition.</p><p>${e}</p>`;
            btnEnvSendEl.disabled = true;
            amplitudes = [];
            durations = [];
        }
    };
    txtEnvEl.addEventListener(`input`, ()=>{
        reset();
    });
    (0, _domJs.Forms).button(`#btnPasteEnv`, async ()=>{
        let t1 = await navigator.clipboard.readText();
        if (t1.startsWith(`"`) && t1.endsWith(`"`)) t1 = t1.substring(1, t1.length - 1);
        let lines1 = t1.split(`\\n`);
        lines1 = lines1.filter((l1)=>{
            l1 = l1.trim();
            // Remove unneeded values
            if (l1.startsWith(`shouldLoop`)) return false;
            if (l1.startsWith(`sustainLevel`)) return false;
            return true;
        });
        txtEnvEl.value = lines1.join(`\n`);
        amplitudes = [];
        durations = [];
        btnEnvSendEl.disabled = true;
    });
    (0, _domJs.Forms).button(`#btnSample`, async ()=>{
        sampleEnv();
    });
    (0, _domJs.Forms).button(btnEnvSendEl, ()=>{
        if (state.espruino && amplitudes.length > 0 && durations.length > 0) state.espruino.write(`rtpMode(${JSON.stringify(amplitudes)}, ${JSON.stringify(durations)})\n`);
    });
    reset();
};
const setup = ()=>{
    // Hide or show UI depending on connection state
    const onConnected1 = (connected1)=>{
        document.querySelectorAll(`section`).forEach((el1)=>{
            if (connected1) {
                el1.classList.remove(`disconnected`);
                el1.classList.add(`connected`);
            } else {
                el1.classList.add(`disconnected`);
                el1.classList.remove(`connected`);
            }
        });
    };
    (0, _domJs.Forms).button(`#btnConnect`, async ()=>{
        try {
            // Connect to Pico
            const p1 = await (0, _ioJs.Espruino).serial();
            // Listen for events
            p1.addEventListener(`change`, (evt1)=>{
                console.log(`${evt1.priorState} -> ${evt1.newState}`);
                onConnected1(evt1.newState === `connected`);
            });
            p1.addEventListener(`data`, (evt1)=>{
                if (evt1.data === `=undefined`) return; // boring
                console.log(evt1.data);
            });
            onConnected1(true);
            updateState({
                espruino: p1
            });
        } catch (ex1) {
            console.error(ex1);
            onConnected1(false);
        }
    });
    setupTrigger();
    setupSequencer();
    setupEnvelope();
};
setup();
/**
 * Update state
 * @param {Partial<state>} s 
 */ function updateState(s1) {
    state = Object.freeze({
        ...state,
        ...s1
    });
}

},{"ixfx/dist/io.js":"k8lTE","ixfx/dist/dom.js":"ao7hr","ixfx/dist/modulation.js":"6HMmE","ixfx/dist/util.js":"2T5uo"}],"k8lTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AudioAnalysers", ()=>(0, _chunkG5YZ6YRDJs.AudioAnalyser_exports));
parcelHelpers.export(exports, "AudioVisualisers", ()=>(0, _chunkG5YZ6YRDJs.AudioVisualiser_exports));
parcelHelpers.export(exports, "Bluetooth", ()=>(0, _chunkG5YZ6YRDJs.NordicBleDevice_exports));
parcelHelpers.export(exports, "Camera", ()=>(0, _chunkG5YZ6YRDJs.Camera_exports));
parcelHelpers.export(exports, "Codec", ()=>(0, _chunkG5YZ6YRDJs.Codec));
parcelHelpers.export(exports, "Espruino", ()=>(0, _chunkG5YZ6YRDJs.Espruino_exports));
parcelHelpers.export(exports, "FrameProcessor", ()=>(0, _chunkG5YZ6YRDJs.FrameProcessor));
parcelHelpers.export(exports, "Serial", ()=>(0, _chunkG5YZ6YRDJs.Serial_exports));
parcelHelpers.export(exports, "StringReceiveBuffer", ()=>(0, _chunkG5YZ6YRDJs.StringReceiveBuffer));
parcelHelpers.export(exports, "StringWriteBuffer", ()=>(0, _chunkG5YZ6YRDJs.StringWriteBuffer));
parcelHelpers.export(exports, "VideoFile", ()=>(0, _chunkG5YZ6YRDJs.VideoFile_exports));
parcelHelpers.export(exports, "genericStateTransitionsInstance", ()=>(0, _chunkG5YZ6YRDJs.genericStateTransitionsInstance));
var _chunkG5YZ6YRDJs = require("./chunk-G5YZ6YRD.js");
var _chunk4DC2CRSBJs = require("./chunk-4DC2CRSB.js");

},{"./chunk-G5YZ6YRD.js":"igz1E","./chunk-4DC2CRSB.js":"jTrL9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ao7hr":[function(require,module,exports) {
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

},{"./chunk-G5YZ6YRD.js":"igz1E","./chunk-4DC2CRSB.js":"jTrL9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HMmE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Easings", ()=>(0, _chunkG5YZ6YRDJs.Easing_exports));
parcelHelpers.export(exports, "Forces", ()=>(0, _chunkG5YZ6YRDJs.Forces_exports));
parcelHelpers.export(exports, "Oscillators", ()=>(0, _chunkG5YZ6YRDJs.Oscillator_exports));
parcelHelpers.export(exports, "adsr", ()=>(0, _chunkG5YZ6YRDJs.adsr));
parcelHelpers.export(exports, "adsrIterable", ()=>(0, _chunkG5YZ6YRDJs.adsrIterable));
parcelHelpers.export(exports, "defaultAdsrOpts", ()=>(0, _chunkG5YZ6YRDJs.defaultAdsrOpts));
parcelHelpers.export(exports, "jitter", ()=>(0, _chunkG5YZ6YRDJs.jitter));
parcelHelpers.export(exports, "pingPong", ()=>(0, _chunkG5YZ6YRDJs.pingPong));
parcelHelpers.export(exports, "pingPongPercent", ()=>(0, _chunkG5YZ6YRDJs.pingPongPercent));
var _chunkG5YZ6YRDJs = require("./chunk-G5YZ6YRD.js");
var _chunk4DC2CRSBJs = require("./chunk-4DC2CRSB.js");

},{"./chunk-G5YZ6YRD.js":"igz1E","./chunk-4DC2CRSB.js":"jTrL9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2T5uo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Debug", ()=>(0, _chunkG5YZ6YRDJs.Debug_exports));
parcelHelpers.export(exports, "IterableAsync", ()=>(0, _chunkG5YZ6YRDJs.IterableAsync_exports));
parcelHelpers.export(exports, "comparerInverse", ()=>(0, _chunkG5YZ6YRDJs.comparerInverse));
parcelHelpers.export(exports, "defaultComparer", ()=>(0, _chunkG5YZ6YRDJs.defaultComparer));
parcelHelpers.export(exports, "defaultKeyer", ()=>(0, _chunkG5YZ6YRDJs.defaultKeyer));
parcelHelpers.export(exports, "getFieldByPath", ()=>(0, _chunkG5YZ6YRDJs.getFieldByPath));
parcelHelpers.export(exports, "getFieldPaths", ()=>(0, _chunkG5YZ6YRDJs.getFieldPaths));
parcelHelpers.export(exports, "ifNaN", ()=>(0, _chunkG5YZ6YRDJs.ifNaN));
parcelHelpers.export(exports, "isEqualDefault", ()=>(0, _chunkG5YZ6YRDJs.isEqualDefault));
parcelHelpers.export(exports, "isEqualValueDefault", ()=>(0, _chunkG5YZ6YRDJs.isEqualValueDefault));
parcelHelpers.export(exports, "isPowerOfTwo", ()=>(0, _chunkG5YZ6YRDJs.isPowerOfTwo));
parcelHelpers.export(exports, "jsComparer", ()=>(0, _chunkG5YZ6YRDJs.jsComparer));
parcelHelpers.export(exports, "mapObject", ()=>(0, _chunkG5YZ6YRDJs.mapObject));
parcelHelpers.export(exports, "numericComparer", ()=>(0, _chunkG5YZ6YRDJs.numericComparer));
parcelHelpers.export(exports, "relativeDifference", ()=>(0, _chunkG5YZ6YRDJs.relativeDifference));
parcelHelpers.export(exports, "roundUpToMultiple", ()=>(0, _chunkG5YZ6YRDJs.roundUpToMultiple));
parcelHelpers.export(exports, "runningiOS", ()=>(0, _chunkG5YZ6YRDJs.runningiOS));
parcelHelpers.export(exports, "toStringDefault", ()=>(0, _chunkG5YZ6YRDJs.toStringDefault));
var _chunkG5YZ6YRDJs = require("./chunk-G5YZ6YRD.js");
var _chunk4DC2CRSBJs = require("./chunk-4DC2CRSB.js");

},{"./chunk-G5YZ6YRD.js":"igz1E","./chunk-4DC2CRSB.js":"jTrL9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6enHg","ljHMZ"], "ljHMZ", "parcelRequirefc40")

//# sourceMappingURL=index.750d9de3.js.map
