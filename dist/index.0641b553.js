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
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
const axios = require('axios');
async function makeRequest() {
    const config = {
        method: 'get',
        url: 'https://api.jikan.moe/v4/anime?q=berserk&sfw'
    };
    let res = await axios(config);
    console.log(res.status);
}
makeRequest();
const list = require('./episodes.json');
document.querySelector('.work').innerHTML = list.reduce((a, fw)=>a += `<a class="card" href="detail.html?${fw.mal_id}">
        <img class="card-img-top" src="${fw.images.jpg.image_url}" alt="Card image cap">
        <div class="card-body">
            <h1 class="card-title">${fw.title}</h1>
            <h2 class="card-title">${fw.title_japanese || ''}</h2>
            <p class="card-text">${fw.synopsis}</p>...
        </div>
        <div class="card-body">
            <p href="#" class="card-link">More</p>
        </div>
    </a>`
, '');

},{"axios":"jo6P5","./episodes.json":"99NvN"}],"jo6P5":[function(require,module,exports) {
module.exports = require('./lib/axios');

},{"./lib/axios":"63MyY"}],"63MyY":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
axios.VERSION = require('./env/data').version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require('./helpers/spread');
// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"5By4s","./helpers/bind":"haRQb","./core/Axios":"cpqD8","./core/mergeConfig":"b85oP","./defaults":"hXfHM","./cancel/Cancel":"kjMy2","./cancel/CancelToken":"45wzn","./cancel/isCancel":"a0VmF","./env/data":"h29L9","./helpers/spread":"dyQ8N","./helpers/isAxiosError":"eyiLq"}],"5By4s":[function(require,module,exports) {
'use strict';
var bind = require('./helpers/bind');
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return Array.isArray(val);
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return toString.call(val) === '[object FormData]';
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return toString.call(val) === '[object URLSearchParams]';
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) return false;
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"./helpers/bind":"haRQb"}],"haRQb":[function(require,module,exports) {
'use strict';
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"cpqD8":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');
var validator = require('../helpers/validator');
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
    } else config = configOrUrl || {};
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = 'get';
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};
// Provide aliases for supported request methods
utils.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"./../utils":"5By4s","../helpers/buildURL":"3bwC2","./InterceptorManager":"1VRIM","./dispatchRequest":"6sjJ6","./mergeConfig":"b85oP","../helpers/validator":"9vgkY"}],"3bwC2":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') return;
            if (utils.isArray(val)) key = key + '[]';
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};

},{"./../utils":"5By4s"}],"1VRIM":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"./../utils":"5By4s"}],"6sjJ6":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var Cancel = require('../cancel/Cancel');
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new Cancel('canceled');
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"./../utils":"5By4s","./transformData":"eRqJY","../cancel/isCancel":"a0VmF","../defaults":"hXfHM","../cancel/Cancel":"kjMy2"}],"eRqJY":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var defaults = require('../defaults');
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"./../utils":"5By4s","../defaults":"hXfHM"}],"hXfHM":[function(require,module,exports) {
'use strict';
var process = require("process");
var utils = require('../utils');
var normalizeHeaderName = require('../helpers/normalizeHeaderName');
var enhanceError = require('../core/enhanceError');
var transitionalDefaults = require('./transitional');
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) headers['Content-Type'] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') // For browsers use XHR adapter
    adapter = require('../adapters/xhr');
    else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') // For node use HTTP adapter
    adapter = require('../adapters/http');
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
                setContentTypeIfUnset(headers, 'application/json');
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === 'SyntaxError') throw enhanceError(e, this, 'E_JSON_PARSE');
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*'
        }
    }
};
utils.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"process":"d5jf4","../utils":"5By4s","../helpers/normalizeHeaderName":"adBZo","../core/enhanceError":"itUQr","./transitional":"lM32f","../adapters/xhr":"ldm57","../adapters/http":"ldm57"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"adBZo":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"../utils":"5By4s"}],"itUQr":[function(require,module,exports) {
'use strict';
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};

},{}],"lM32f":[function(require,module,exports) {
'use strict';
module.exports = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{}],"ldm57":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');
var transitionalDefaults = require('../defaults/transitional');
var Cancel = require('../cancel/Cancel');
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener('abort', onCanceled);
        }
        if (utils.isFormData(requestData)) delete requestHeaders['Content-Type']; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ('setRequestHeader' in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') request.addEventListener('progress', config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) request.upload.addEventListener('progress', config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"./../utils":"5By4s","./../core/settle":"dD9aC","./../helpers/cookies":"4WJjt","./../helpers/buildURL":"3bwC2","../core/buildFullPath":"1I5TW","./../helpers/parseHeaders":"kqDd5","./../helpers/isURLSameOrigin":"lxXtv","../core/createError":"5nVS9","../defaults/transitional":"lM32f","../cancel/Cancel":"kjMy2"}],"dD9aC":[function(require,module,exports) {
'use strict';
var createError = require('./createError');
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
};

},{"./createError":"5nVS9"}],"5nVS9":[function(require,module,exports) {
'use strict';
var enhanceError = require('./enhanceError');
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"itUQr"}],"4WJjt":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push('expires=' + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push('path=' + path);
            if (utils.isString(domain)) cookie.push('domain=' + domain);
            if (secure === true) cookie.push('secure');
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils":"5By4s"}],"1I5TW":[function(require,module,exports) {
'use strict';
var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"../helpers/isAbsoluteURL":"jD6NM","../helpers/combineURLs":"brOWK"}],"jD6NM":[function(require,module,exports) {
'use strict';
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

},{}],"brOWK":[function(require,module,exports) {
'use strict';
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

},{}],"kqDd5":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === 'set-cookie') parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};

},{"./../utils":"5By4s"}],"lxXtv":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils":"5By4s"}],"kjMy2":[function(require,module,exports) {
'use strict';
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"a0VmF":[function(require,module,exports) {
'use strict';
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"b85oP":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({}, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

},{"../utils":"5By4s"}],"9vgkY":[function(require,module,exports) {
'use strict';
var VERSION = require('../env/data').version;
var validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new TypeError('options must be an object');
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new TypeError('option ' + opt + ' must be ' + result);
            continue;
        }
        if (allowUnknown !== true) throw Error('Unknown option ' + opt);
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

},{"../env/data":"h29L9"}],"h29L9":[function(require,module,exports) {
module.exports = {
    "version": "0.26.1"
};

},{}],"45wzn":[function(require,module,exports) {
'use strict';
var Cancel = require('./Cancel');
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"./Cancel":"kjMy2"}],"dyQ8N":[function(require,module,exports) {
'use strict';
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"eyiLq":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
};

},{"./../utils":"5By4s"}],"99NvN":[function(require,module,exports) {
module.exports = JSON.parse("[{\"mal_id\":32379,\"url\":\"https://myanimelist.net/anime/32379/Berserk\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352l.webp\"}},\"trailer\":{\"youtube_id\":\"XQr7LvFZrlE\",\"url\":\"https://www.youtube.com/watch?v=XQr7LvFZrlE\",\"embed_url\":\"https://www.youtube.com/embed/XQr7LvFZrlE?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/maxresdefault.jpg\"}},\"title\":\"Berserk\",\"title_english\":\"Berserk\",\"title_japanese\":\"ベルセルク\",\"title_synonyms\":[],\"type\":\"TV\",\"source\":\"Manga\",\"episodes\":12,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2016-07-01T00:00:00+00:00\",\"to\":\"2016-09-16T00:00:00+00:00\",\"prop\":{\"from\":{\"day\":1,\"month\":7,\"year\":2016},\"to\":{\"day\":16,\"month\":9,\"year\":2016}},\"string\":\"Jul 1, 2016 to Sep 16, 2016\"},\"duration\":\"24 min per ep\",\"rating\":\"R+ - Mild Nudity\",\"score\":6.3,\"scored_by\":155869,\"rank\":7346,\"popularity\":603,\"members\":311729,\"favorites\":2046,\"synopsis\":\"Now branded for death and destined to be hunted by demons until the day he dies, Guts embarks on a journey to defy such a gruesome fate, as waves of beasts relentlessly pursue him. Steeling his resolve, he takes up the monstrous blade Dragonslayer and vows to exact vengeance on the one responsible, hunting down the very man he once looked up to and considered a friend. Along the way, he encounters some unlikely allies, such as a small elf named Puck, and Isidro, a young thief looking to learn swordsmanship from the former mercenary. As the ragtag group slowly comes together after having decided to join Guts in his quest, they will face incredible danger unlike anything they have ever experienced before. [Written by MAL Rewrite]\",\"background\":null,\"season\":\"summer\",\"year\":2016,\"broadcast\":{\"day\":\"Fridays\",\"time\":\"22:30\",\"timezone\":\"Asia/Tokyo\",\"string\":\"Fridays at 22:30 (JST)\"},\"producers\":[{\"mal_id\":33,\"type\":\"anime\",\"name\":\"WOWOW\",\"url\":\"https://myanimelist.net/anime/producer/33/WOWOW\"},{\"mal_id\":143,\"type\":\"anime\",\"name\":\"Mainichi Broadcasting System\",\"url\":\"https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System\"},{\"mal_id\":148,\"type\":\"anime\",\"name\":\"Hakusensha\",\"url\":\"https://myanimelist.net/anime/producer/148/Hakusensha\"},{\"mal_id\":539,\"type\":\"anime\",\"name\":\"Ultra Super Pictures\",\"url\":\"https://myanimelist.net/anime/producer/539/Ultra_Super_Pictures\"},{\"mal_id\":839,\"type\":\"anime\",\"name\":\"LIDENFILMS\",\"url\":\"https://myanimelist.net/anime/producer/839/LIDENFILMS\"},{\"mal_id\":1113,\"type\":\"anime\",\"name\":\"NBCUniversal Entertainment Japan\",\"url\":\"https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan\"},{\"mal_id\":1123,\"type\":\"anime\",\"name\":\"Lucent Pictures Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/1123/Lucent_Pictures_Entertainment\"},{\"mal_id\":1334,\"type\":\"anime\",\"name\":\"Docomo Anime Store\",\"url\":\"https://myanimelist.net/anime/producer/1334/Docomo_Anime_Store\"},{\"mal_id\":1498,\"type\":\"anime\",\"name\":\"Koei Tecmo Games\",\"url\":\"https://myanimelist.net/anime/producer/1498/Koei_Tecmo_Games\"},{\"mal_id\":2018,\"type\":\"anime\",\"name\":\"Rialto Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/2018/Rialto_Entertainment\"}],\"licensors\":[{\"mal_id\":102,\"type\":\"anime\",\"name\":\"Funimation\",\"url\":\"https://myanimelist.net/anime/producer/102/Funimation\"},{\"mal_id\":1468,\"type\":\"anime\",\"name\":\"Crunchyroll\",\"url\":\"https://myanimelist.net/anime/producer/1468/Crunchyroll\"}],\"studios\":[{\"mal_id\":1237,\"type\":\"anime\",\"name\":\"Millepensee\",\"url\":\"https://myanimelist.net/anime/producer/1237/Millepensee\"},{\"mal_id\":1381,\"type\":\"anime\",\"name\":\"GEMBA\",\"url\":\"https://myanimelist.net/anime/producer/1381/GEMBA\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":35009,\"url\":\"https://myanimelist.net/anime/35009/Berserk_Recap\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535l.webp\"}},\"trailer\":{\"youtube_id\":null,\"url\":null,\"embed_url\":null,\"images\":{\"image_url\":null,\"small_image_url\":null,\"medium_image_url\":null,\"large_image_url\":null,\"maximum_image_url\":null}},\"title\":\"Berserk Recap\",\"title_english\":null,\"title_japanese\":\"ベルセルク 第1期ダイジェスト映像\",\"title_synonyms\":[\"Berserk Dai 1-ki Digest Eizou\"],\"type\":\"Special\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2017-03-03T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":3,\"month\":3,\"year\":2017},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Mar 3, 2017\"},\"duration\":\"24 min\",\"rating\":\"R - 17+ (violence & profanity)\",\"score\":6.03,\"scored_by\":5408,\"rank\":8706,\"popularity\":5074,\"members\":12339,\"favorites\":17,\"synopsis\":\"Recap episode of Berserk.\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":839,\"type\":\"anime\",\"name\":\"LIDENFILMS\",\"url\":\"https://myanimelist.net/anime/producer/839/LIDENFILMS\"}],\"licensors\":[],\"studios\":[{\"mal_id\":1237,\"type\":\"anime\",\"name\":\"Millepensee\",\"url\":\"https://myanimelist.net/anime/producer/1237/Millepensee\"},{\"mal_id\":1381,\"type\":\"anime\",\"name\":\"GEMBA\",\"url\":\"https://myanimelist.net/anime/producer/1381/GEMBA\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":41536,\"url\":\"https://myanimelist.net/anime/41536/Berserk_Movie_Pilot\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712l.webp\"}},\"trailer\":{\"youtube_id\":null,\"url\":null,\"embed_url\":null,\"images\":{\"image_url\":null,\"small_image_url\":null,\"medium_image_url\":null,\"large_image_url\":null,\"maximum_image_url\":null}},\"title\":\"Berserk (Movie Pilot)\",\"title_english\":null,\"title_japanese\":null,\"title_synonyms\":[\"Berserk (Movie Pilot)\"],\"type\":\"Special\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":null,\"to\":null,\"prop\":{\"from\":{\"day\":null,\"month\":null,\"year\":null},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Not available\"},\"duration\":\"1 min\",\"rating\":\"R - 17+ (violence & profanity)\",\"score\":null,\"scored_by\":null,\"rank\":0,\"popularity\":0,\"members\":0,\"favorites\":0,\"synopsis\":\"The pitch pilot shown to Kentaro Miura by Studio 4°C for his permission to greenlight the production of the originally planned Berserk Saga Project, starting with the release of the Golden Age Arc trilogy films.\",\"background\":\"The short film showcases original scenes and frame works based on different arcs from the manga, arranged to test the expected visual quality for the production of the Berserk films.\",\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[],\"licensors\":[],\"studios\":[],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"}],\"explicit_genres\":[],\"themes\":[],\"demographics\":[]},{\"mal_id\":34055,\"url\":\"https://myanimelist.net/anime/34055/Berserk_2nd_Season\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296l.webp\"}},\"trailer\":{\"youtube_id\":\"tbx0PAsWiKw\",\"url\":\"https://www.youtube.com/watch?v=tbx0PAsWiKw\",\"embed_url\":\"https://www.youtube.com/embed/tbx0PAsWiKw?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/maxresdefault.jpg\"}},\"title\":\"Berserk 2nd Season\",\"title_english\":\"Berserk: Season II\",\"title_japanese\":\"ベルセルク\",\"title_synonyms\":[],\"type\":\"TV\",\"source\":\"Manga\",\"episodes\":12,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2017-04-07T00:00:00+00:00\",\"to\":\"2017-06-23T00:00:00+00:00\",\"prop\":{\"from\":{\"day\":7,\"month\":4,\"year\":2017},\"to\":{\"day\":23,\"month\":6,\"year\":2017}},\"string\":\"Apr 7, 2017 to Jun 23, 2017\"},\"duration\":\"24 min per ep\",\"rating\":\"R - 17+ (violence & profanity)\",\"score\":6.57,\"scored_by\":83238,\"rank\":5889,\"popularity\":1238,\"members\":152467,\"favorites\":386,\"synopsis\":\"Demons have now become commonplace around the kingdom of Midland, which has fallen into chaos. The swordsman Guts still cannot stay in one place for long due to his demonic brand. He could always manage to protect himself when he was alone, but now he has the added challenge of protecting former Commander Casca, a shell of her former self who neither remembers nor trusts him. They never have a moment's rest with the constant threat of demons, and they need a place where Casca will be safe till they find a way to heal her. Their elf ally, Puck, tells of the mystical land of Elfhelm, which is supposed to be a safe haven from the demons that ravage the lands. Tired and with only a vague hope, they struggle on to find a place to live—and they still need to find those responsible for the madness they are forced to endure. [Written by MAL Rewrite]\",\"background\":null,\"season\":\"spring\",\"year\":2017,\"broadcast\":{\"day\":\"Fridays\",\"time\":\"22:30\",\"timezone\":\"Asia/Tokyo\",\"string\":\"Fridays at 22:30 (JST)\"},\"producers\":[{\"mal_id\":33,\"type\":\"anime\",\"name\":\"WOWOW\",\"url\":\"https://myanimelist.net/anime/producer/33/WOWOW\"},{\"mal_id\":143,\"type\":\"anime\",\"name\":\"Mainichi Broadcasting System\",\"url\":\"https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System\"},{\"mal_id\":148,\"type\":\"anime\",\"name\":\"Hakusensha\",\"url\":\"https://myanimelist.net/anime/producer/148/Hakusensha\"},{\"mal_id\":539,\"type\":\"anime\",\"name\":\"Ultra Super Pictures\",\"url\":\"https://myanimelist.net/anime/producer/539/Ultra_Super_Pictures\"},{\"mal_id\":839,\"type\":\"anime\",\"name\":\"LIDENFILMS\",\"url\":\"https://myanimelist.net/anime/producer/839/LIDENFILMS\"},{\"mal_id\":1113,\"type\":\"anime\",\"name\":\"NBCUniversal Entertainment Japan\",\"url\":\"https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan\"},{\"mal_id\":1123,\"type\":\"anime\",\"name\":\"Lucent Pictures Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/1123/Lucent_Pictures_Entertainment\"},{\"mal_id\":1334,\"type\":\"anime\",\"name\":\"Docomo Anime Store\",\"url\":\"https://myanimelist.net/anime/producer/1334/Docomo_Anime_Store\"},{\"mal_id\":1498,\"type\":\"anime\",\"name\":\"Koei Tecmo Games\",\"url\":\"https://myanimelist.net/anime/producer/1498/Koei_Tecmo_Games\"}],\"licensors\":[{\"mal_id\":102,\"type\":\"anime\",\"name\":\"Funimation\",\"url\":\"https://myanimelist.net/anime/producer/102/Funimation\"},{\"mal_id\":1468,\"type\":\"anime\",\"name\":\"Crunchyroll\",\"url\":\"https://myanimelist.net/anime/producer/1468/Crunchyroll\"}],\"studios\":[{\"mal_id\":1237,\"type\":\"anime\",\"name\":\"Millepensee\",\"url\":\"https://myanimelist.net/anime/producer/1237/Millepensee\"},{\"mal_id\":1381,\"type\":\"anime\",\"name\":\"GEMBA\",\"url\":\"https://myanimelist.net/anime/producer/1381/GEMBA\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[]},{\"mal_id\":35676,\"url\":\"https://myanimelist.net/anime/35676/Berserk__Majo_no_Tsuisou\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045l.webp\"}},\"trailer\":{\"youtube_id\":null,\"url\":null,\"embed_url\":null,\"images\":{\"image_url\":null,\"small_image_url\":null,\"medium_image_url\":null,\"large_image_url\":null,\"maximum_image_url\":null}},\"title\":\"Berserk: Majo no Tsuisou\",\"title_english\":\"Berserk: Recollections of the Witch\",\"title_japanese\":\"ベルセルク 魔女の追想\",\"title_synonyms\":[\"Berserk 2nd Season Episode 9.5\",\"Berserk 2nd Season Recap\"],\"type\":\"Special\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2017-06-02T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":2,\"month\":6,\"year\":2017},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Jun 2, 2017\"},\"duration\":\"24 min\",\"rating\":\"R - 17+ (violence & profanity)\",\"score\":5.79,\"scored_by\":6745,\"rank\":9660,\"popularity\":4766,\"members\":14386,\"favorites\":22,\"synopsis\":\"Recap episode of Berserk 2nd Season.\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":839,\"type\":\"anime\",\"name\":\"LIDENFILMS\",\"url\":\"https://myanimelist.net/anime/producer/839/LIDENFILMS\"}],\"licensors\":[],\"studios\":[{\"mal_id\":1237,\"type\":\"anime\",\"name\":\"Millepensee\",\"url\":\"https://myanimelist.net/anime/producer/1237/Millepensee\"},{\"mal_id\":1381,\"type\":\"anime\",\"name\":\"GEMBA\",\"url\":\"https://myanimelist.net/anime/producer/1381/GEMBA\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[]},{\"mal_id\":33,\"url\":\"https://myanimelist.net/anime/33/Kenpuu_Denki_Berserk\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988l.webp\"}},\"trailer\":{\"youtube_id\":null,\"url\":null,\"embed_url\":null,\"images\":{\"image_url\":null,\"small_image_url\":null,\"medium_image_url\":null,\"large_image_url\":null,\"maximum_image_url\":null}},\"title\":\"Kenpuu Denki Berserk\",\"title_english\":\"Berserk\",\"title_japanese\":\"剣風伝奇ベルセルク\",\"title_synonyms\":[\"Berserk: The Chronicles of Wind Blades\",\"Sword-Wind Chronicle Berserk\"],\"type\":\"TV\",\"source\":\"Manga\",\"episodes\":25,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"1997-10-08T00:00:00+00:00\",\"to\":\"1998-04-01T00:00:00+00:00\",\"prop\":{\"from\":{\"day\":8,\"month\":10,\"year\":1997},\"to\":{\"day\":1,\"month\":4,\"year\":1998}},\"string\":\"Oct 8, 1997 to Apr 1, 1998\"},\"duration\":\"25 min per ep\",\"rating\":\"R+ - Mild Nudity\",\"score\":8.53,\"scored_by\":282228,\"rank\":102,\"popularity\":333,\"members\":526741,\"favorites\":21645,\"synopsis\":\"Guts, a man who will one day be known as the Black Swordsman, is a young traveling mercenary characterized by the large greatsword he carries. He accepts jobs that offer the most money, but he never stays with one group for long—until he encounters the Band of the Hawk. Ambushed after completing a job, Guts crushes many of its members in combat. Griffith, The Band of the Falcon's leader and founder, takes an interest in Guts and duels him. While the others are no match for Guts, Griffith defeats him in one blow. Incapacitated and taken into the Band of the Hawk's camp to recover, Guts wakes up two days later. He confronts Griffith, and the two duel yet again, only this time with a condition: Guts will join the Band of the Falcon if he loses. Due to his fresh injuries, Guts loses the fight and is inducted by Griffith. In three years' time, Guts has become one of the Band of the Hawk's commanders. On the battlefield, his combat prowess is second only to Griffith as he takes on large groups of enemies all on his own. With Guts' immense strength and Griffith's leadership, the Band of the Hawk dominate every battle they partake in. But something menacing lurks in the shadows, threatening to change Guts' life forever. [Written by MAL Rewrite]\",\"background\":\"Kenpuu Denki Berserk adapts the first 12 volumes and a part of the 13th volume of the manga. While the story remains fairly loyal to the source material, heavy modifications were made to exclude some of the more graphic depictions of violence, as well as characters and other content that could not be covered within the length of the anime’s running time. These changes were approved by the series creator himself. The series was released on DVD by Media Blasters in six volumes from May 28, 2002 to May 27, 2003. The company also released a complete collection on November 16, 2004; it was later remastered by AnimeWorks and published on March 10, 2009. An art book—titled Berserk: Kenpuu Denki - Kanzen Kaiseki-sho—containing sketches and behind-the-scenes information on the anime was published by Hakusensha on December 9, 1998.\",\"season\":\"fall\",\"year\":1997,\"broadcast\":{\"day\":\"Wednesdays\",\"time\":\"01:45\",\"timezone\":\"Asia/Tokyo\",\"string\":\"Wednesdays at 01:45 (JST)\"},\"producers\":[{\"mal_id\":29,\"type\":\"anime\",\"name\":\"VAP\",\"url\":\"https://myanimelist.net/anime/producer/29/VAP\"},{\"mal_id\":148,\"type\":\"anime\",\"name\":\"Hakusensha\",\"url\":\"https://myanimelist.net/anime/producer/148/Hakusensha\"},{\"mal_id\":1003,\"type\":\"anime\",\"name\":\"Nippon Television Network\",\"url\":\"https://myanimelist.net/anime/producer/1003/Nippon_Television_Network\"}],\"licensors\":[{\"mal_id\":250,\"type\":\"anime\",\"name\":\"Media Blasters\",\"url\":\"https://myanimelist.net/anime/producer/250/Media_Blasters\"},{\"mal_id\":595,\"type\":\"anime\",\"name\":\"NYAV Post\",\"url\":\"https://myanimelist.net/anime/producer/595/NYAV_Post\"}],\"studios\":[{\"mal_id\":28,\"type\":\"anime\",\"name\":\"OLM\",\"url\":\"https://myanimelist.net/anime/producer/28/OLM\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":12115,\"url\":\"https://myanimelist.net/anime/12115/Berserk__Ougon_Jidai-hen_III_-_Kourin\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305l.webp\"}},\"trailer\":{\"youtube_id\":\"36IMbYmdSWM\",\"url\":\"https://www.youtube.com/watch?v=36IMbYmdSWM\",\"embed_url\":\"https://www.youtube.com/embed/36IMbYmdSWM?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/maxresdefault.jpg\"}},\"title\":\"Berserk: Ougon Jidai-hen III - Kourin\",\"title_english\":\"Berserk: The Golden Age Arc III - The Advent\",\"title_japanese\":\"ベルセルク 黄金時代篇Ⅲ 降臨\",\"title_synonyms\":[\"Berserk Movie\",\"Berserk Saga\",\"Berserk: Golden Age Arc III - Descent\"],\"type\":\"Movie\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2013-02-01T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":1,\"month\":2,\"year\":2013},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Feb 1, 2013\"},\"duration\":\"1 hr 50 min\",\"rating\":\"R+ - Mild Nudity\",\"score\":8.2,\"scored_by\":121084,\"rank\":324,\"popularity\":1002,\"members\":190536,\"favorites\":1355,\"synopsis\":\"The Band of the Hawk has dwindled in the year since Guts left them on his journey to forge his own destiny. Unaware of their fate, Guts returns to the Hawks—now being led by his former ally Casca—after a rumor about them passes his way. Once the saviors of the kingdom of Midland, the Band of the Hawk are now hunted as they desperately fight for their lives while plotting to free their leader, Griffith, after he was imprisoned for committing treason. But the man they save is far from the Griffith they remember. Griffith is a shell of his former charismatic self after a year of continuous, horrific torture. No longer able to walk, speak, or even hold a sword, he has nothing but the small, strange trinket, the Crimson Behelit, that will not leave him. The entire Band of the Hawk want to rise to greatness once more, but how much are they willing to sacrifice to return to their past glory? It doesn't seem possible, but when Griffith's heart darkens and a solar eclipse blackens the sky, the Behelit offers a choice that will leave the Band of the Hawk with a blood-soaked fate that will haunt them for the rest of their days. [Written by MAL Rewrite]\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":795,\"type\":\"anime\",\"name\":\"Yahoo! Japan\",\"url\":\"https://myanimelist.net/anime/producer/795/Yahoo_Japan\"},{\"mal_id\":1261,\"type\":\"anime\",\"name\":\"Good Smile Company\",\"url\":\"https://myanimelist.net/anime/producer/1261/Good_Smile_Company\"},{\"mal_id\":1584,\"type\":\"anime\",\"name\":\"Beyond C.\",\"url\":\"https://myanimelist.net/anime/producer/1584/Beyond_C\"},{\"mal_id\":2018,\"type\":\"anime\",\"name\":\"Rialto Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/2018/Rialto_Entertainment\"}],\"licensors\":[{\"mal_id\":119,\"type\":\"anime\",\"name\":\"VIZ Media\",\"url\":\"https://myanimelist.net/anime/producer/119/VIZ_Media\"},{\"mal_id\":595,\"type\":\"anime\",\"name\":\"NYAV Post\",\"url\":\"https://myanimelist.net/anime/producer/595/NYAV_Post\"}],\"studios\":[{\"mal_id\":13,\"type\":\"anime\",\"name\":\"Studio 4°C\",\"url\":\"https://myanimelist.net/anime/producer/13/Studio_4%C2%B0C\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":10218,\"url\":\"https://myanimelist.net/anime/10218/Berserk__Ougon_Jidai-hen_I_-_Haou_no_Tamago\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179l.webp\"}},\"trailer\":{\"youtube_id\":\"5_piopZ4bTA\",\"url\":\"https://www.youtube.com/watch?v=5_piopZ4bTA\",\"embed_url\":\"https://www.youtube.com/embed/5_piopZ4bTA?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/maxresdefault.jpg\"}},\"title\":\"Berserk: Ougon Jidai-hen I - Haou no Tamago\",\"title_english\":\"Berserk: The Golden Age Arc I - The Egg of the King\",\"title_japanese\":\"ベルセルク 黄金時代篇Ⅰ 覇王の卵\",\"title_synonyms\":[\"Berserk Movie\",\"Berserk Saga\",\"Berserk: Golden Age Arc I - Egg of the Supreme Ruler\",\"The Golden Age Arc I: The High King's Egg\"],\"type\":\"Movie\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2012-02-04T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":4,\"month\":2,\"year\":2012},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Feb 4, 2012\"},\"duration\":\"1 hr 16 min\",\"rating\":\"R+ - Mild Nudity\",\"score\":7.72,\"scored_by\":128350,\"rank\":1044,\"popularity\":976,\"members\":196436,\"favorites\":845,\"synopsis\":\"In the Kingdom of Midland, a mercenary named Guts wanders the land, preferring a life of conflict over a life of peace. Despite the odds never being in his favor, he is an unstoppable force that overcomes every opponent, wielding a massive sword larger than himself. One day, Griffith, the mysterious leader of the mercenary group Band of the Hawk, witnesses the warrior's battle prowess and invites the wandering swordsman to join his squadron. Rejecting the offer, Guts challenges Griffith to a duel—and, much to the former's surprise, is subsequently defeated and forced to join. Now, Guts must fight alongside Griffith and his crew to help Midland defeat the Empire of Chuder. However, Griffith seems to harbor ulterior motives, desiring something much larger than just settling the war... [Written by MAL Rewrite]\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":795,\"type\":\"anime\",\"name\":\"Yahoo! Japan\",\"url\":\"https://myanimelist.net/anime/producer/795/Yahoo_Japan\"},{\"mal_id\":1261,\"type\":\"anime\",\"name\":\"Good Smile Company\",\"url\":\"https://myanimelist.net/anime/producer/1261/Good_Smile_Company\"},{\"mal_id\":1584,\"type\":\"anime\",\"name\":\"Beyond C.\",\"url\":\"https://myanimelist.net/anime/producer/1584/Beyond_C\"},{\"mal_id\":2018,\"type\":\"anime\",\"name\":\"Rialto Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/2018/Rialto_Entertainment\"}],\"licensors\":[{\"mal_id\":119,\"type\":\"anime\",\"name\":\"VIZ Media\",\"url\":\"https://myanimelist.net/anime/producer/119/VIZ_Media\"},{\"mal_id\":595,\"type\":\"anime\",\"name\":\"NYAV Post\",\"url\":\"https://myanimelist.net/anime/producer/595/NYAV_Post\"}],\"studios\":[{\"mal_id\":13,\"type\":\"anime\",\"name\":\"Studio 4°C\",\"url\":\"https://myanimelist.net/anime/producer/13/Studio_4%C2%B0C\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":12113,\"url\":\"https://myanimelist.net/anime/12113/Berserk__Ougon_Jidai-hen_II_-_Doldrey_Kouryaku\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193l.webp\"}},\"trailer\":{\"youtube_id\":\"0zEbyF6NuAw\",\"url\":\"https://www.youtube.com/watch?v=0zEbyF6NuAw\",\"embed_url\":\"https://www.youtube.com/embed/0zEbyF6NuAw?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/maxresdefault.jpg\"}},\"title\":\"Berserk: Ougon Jidai-hen II - Doldrey Kouryaku\",\"title_english\":\"Berserk: The Golden Age Arc II - The Battle for Doldrey\",\"title_japanese\":\"ベルセルク 黄金時代篇Ⅱ ドルドレイ攻略\",\"title_synonyms\":[\"Berserk Movie\",\"Berserk Saga\"],\"type\":\"Movie\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2012-06-23T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":23,\"month\":6,\"year\":2012},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Jun 23, 2012\"},\"duration\":\"1 hr 32 min\",\"rating\":\"R+ - Mild Nudity\",\"score\":7.88,\"scored_by\":118791,\"rank\":742,\"popularity\":1041,\"members\":181574,\"favorites\":597,\"synopsis\":\"The Band of the Hawk and their enigmatic leader Griffith continue winning battle after battle as their prestige throughout the kingdom of Midland grows. But their latest task is one that has seen failure from everyone who has attempted it: the subjugation of the impenetrable fortress of Doldrey. But with members like Guts—the captain of the Hawks' raiders who can easily fell 100 men with his gigantic sword—such tasks prove to be trivial. However, in the aftermath of the battle, Guts decides to leave the Hawks in order to pursue his own dream and bids farewell to his companions, despite Griffith's attempts to make him stay. This single event causes Griffith to lose his composure, and leads him to make a decision that will alter his and the Hawks' fates forever. [Written by MAL Rewrite]\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":795,\"type\":\"anime\",\"name\":\"Yahoo! Japan\",\"url\":\"https://myanimelist.net/anime/producer/795/Yahoo_Japan\"},{\"mal_id\":1261,\"type\":\"anime\",\"name\":\"Good Smile Company\",\"url\":\"https://myanimelist.net/anime/producer/1261/Good_Smile_Company\"},{\"mal_id\":1584,\"type\":\"anime\",\"name\":\"Beyond C.\",\"url\":\"https://myanimelist.net/anime/producer/1584/Beyond_C\"},{\"mal_id\":2018,\"type\":\"anime\",\"name\":\"Rialto Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/2018/Rialto_Entertainment\"}],\"licensors\":[{\"mal_id\":119,\"type\":\"anime\",\"name\":\"VIZ Media\",\"url\":\"https://myanimelist.net/anime/producer/119/VIZ_Media\"},{\"mal_id\":595,\"type\":\"anime\",\"name\":\"NYAV Post\",\"url\":\"https://myanimelist.net/anime/producer/595/NYAV_Post\"}],\"studios\":[{\"mal_id\":13,\"type\":\"anime\",\"name\":\"Studio 4°C\",\"url\":\"https://myanimelist.net/anime/producer/13/Studio_4%C2%B0C\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]}]");

},{}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequire4e41")

//# sourceMappingURL=index.0641b553.js.map
