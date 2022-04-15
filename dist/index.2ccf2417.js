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
})({"d8Pj5":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7923cfe92ccf2417";
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

},{}],"jV4mf":[function(require,module,exports) {
const list = require('./episodes.json');
const id = window.location.search.substr(1);
console.log(id, window.location.search);
const detail = list.filter((x)=>x.mal_id === +id
)?.[0];
const nextIndex = list.findIndex((x)=>x.mal_id === +id
) + 1;
const nextId = 3334;
document.querySelector('.detail').innerHTML = `
    <a class="link" href="detail.html?${nextId}">Next volume ></a>
    <div class="volume">
        <img class="volume-img" src="${detail.images.jpg.image_url}" alt="Card image cap">
        <div class="volume-body">
            <h1 class="volume-title">${detail.title}</h1>
            <h2 class="volume-title">${detail.title_japanese || ''}</h2>
            <p class="volume-text">${detail.synopsis}</p>
            <p>Year: ${detail.year || 'unknown'}</p>
        </div>
    </div>
    <p>Trailer</p>
    <iframe width="320" height="285"src="${detail.trailer.embed_url || 'https://www.youtube.com/embed/ZXjaTICqRf8'}"></iframe>
    <ul class="volume-genres">Genres: ${detail.genres.map((x)=>'<li>' + x.name + '</li>'
).join('') || 'unknown'}</ul>`;

},{"./episodes.json":"99NvN"}],"99NvN":[function(require,module,exports) {
module.exports = JSON.parse("[{\"mal_id\":32379,\"url\":\"https://myanimelist.net/anime/32379/Berserk\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/10/79352l.webp\"}},\"trailer\":{\"youtube_id\":\"XQr7LvFZrlE\",\"url\":\"https://www.youtube.com/watch?v=XQr7LvFZrlE\",\"embed_url\":\"https://www.youtube.com/embed/XQr7LvFZrlE?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/XQr7LvFZrlE/maxresdefault.jpg\"}},\"title\":\"Berserk\",\"title_english\":\"Berserk\",\"title_japanese\":\"ベルセルク\",\"title_synonyms\":[],\"type\":\"TV\",\"source\":\"Manga\",\"episodes\":12,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2016-07-01T00:00:00+00:00\",\"to\":\"2016-09-16T00:00:00+00:00\",\"prop\":{\"from\":{\"day\":1,\"month\":7,\"year\":2016},\"to\":{\"day\":16,\"month\":9,\"year\":2016}},\"string\":\"Jul 1, 2016 to Sep 16, 2016\"},\"duration\":\"24 min per ep\",\"rating\":\"R+ - Mild Nudity\",\"score\":6.3,\"scored_by\":155869,\"rank\":7346,\"popularity\":603,\"members\":311729,\"favorites\":2046,\"synopsis\":\"Now branded for death and destined to be hunted by demons until the day he dies, Guts embarks on a journey to defy such a gruesome fate, as waves of beasts relentlessly pursue him. Steeling his resolve, he takes up the monstrous blade Dragonslayer and vows to exact vengeance on the one responsible, hunting down the very man he once looked up to and considered a friend. Along the way, he encounters some unlikely allies, such as a small elf named Puck, and Isidro, a young thief looking to learn swordsmanship from the former mercenary. As the ragtag group slowly comes together after having decided to join Guts in his quest, they will face incredible danger unlike anything they have ever experienced before. [Written by MAL Rewrite]\",\"background\":null,\"season\":\"summer\",\"year\":2016,\"broadcast\":{\"day\":\"Fridays\",\"time\":\"22:30\",\"timezone\":\"Asia/Tokyo\",\"string\":\"Fridays at 22:30 (JST)\"},\"producers\":[{\"mal_id\":33,\"type\":\"anime\",\"name\":\"WOWOW\",\"url\":\"https://myanimelist.net/anime/producer/33/WOWOW\"},{\"mal_id\":143,\"type\":\"anime\",\"name\":\"Mainichi Broadcasting System\",\"url\":\"https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System\"},{\"mal_id\":148,\"type\":\"anime\",\"name\":\"Hakusensha\",\"url\":\"https://myanimelist.net/anime/producer/148/Hakusensha\"},{\"mal_id\":539,\"type\":\"anime\",\"name\":\"Ultra Super Pictures\",\"url\":\"https://myanimelist.net/anime/producer/539/Ultra_Super_Pictures\"},{\"mal_id\":839,\"type\":\"anime\",\"name\":\"LIDENFILMS\",\"url\":\"https://myanimelist.net/anime/producer/839/LIDENFILMS\"},{\"mal_id\":1113,\"type\":\"anime\",\"name\":\"NBCUniversal Entertainment Japan\",\"url\":\"https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan\"},{\"mal_id\":1123,\"type\":\"anime\",\"name\":\"Lucent Pictures Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/1123/Lucent_Pictures_Entertainment\"},{\"mal_id\":1334,\"type\":\"anime\",\"name\":\"Docomo Anime Store\",\"url\":\"https://myanimelist.net/anime/producer/1334/Docomo_Anime_Store\"},{\"mal_id\":1498,\"type\":\"anime\",\"name\":\"Koei Tecmo Games\",\"url\":\"https://myanimelist.net/anime/producer/1498/Koei_Tecmo_Games\"},{\"mal_id\":2018,\"type\":\"anime\",\"name\":\"Rialto Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/2018/Rialto_Entertainment\"}],\"licensors\":[{\"mal_id\":102,\"type\":\"anime\",\"name\":\"Funimation\",\"url\":\"https://myanimelist.net/anime/producer/102/Funimation\"},{\"mal_id\":1468,\"type\":\"anime\",\"name\":\"Crunchyroll\",\"url\":\"https://myanimelist.net/anime/producer/1468/Crunchyroll\"}],\"studios\":[{\"mal_id\":1237,\"type\":\"anime\",\"name\":\"Millepensee\",\"url\":\"https://myanimelist.net/anime/producer/1237/Millepensee\"},{\"mal_id\":1381,\"type\":\"anime\",\"name\":\"GEMBA\",\"url\":\"https://myanimelist.net/anime/producer/1381/GEMBA\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":35009,\"url\":\"https://myanimelist.net/anime/35009/Berserk_Recap\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/9/84535l.webp\"}},\"trailer\":{\"youtube_id\":null,\"url\":null,\"embed_url\":null,\"images\":{\"image_url\":null,\"small_image_url\":null,\"medium_image_url\":null,\"large_image_url\":null,\"maximum_image_url\":null}},\"title\":\"Berserk Recap\",\"title_english\":null,\"title_japanese\":\"ベルセルク 第1期ダイジェスト映像\",\"title_synonyms\":[\"Berserk Dai 1-ki Digest Eizou\"],\"type\":\"Special\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2017-03-03T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":3,\"month\":3,\"year\":2017},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Mar 3, 2017\"},\"duration\":\"24 min\",\"rating\":\"R - 17+ (violence & profanity)\",\"score\":6.03,\"scored_by\":5408,\"rank\":8706,\"popularity\":5074,\"members\":12339,\"favorites\":17,\"synopsis\":\"Recap episode of Berserk.\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":839,\"type\":\"anime\",\"name\":\"LIDENFILMS\",\"url\":\"https://myanimelist.net/anime/producer/839/LIDENFILMS\"}],\"licensors\":[],\"studios\":[{\"mal_id\":1237,\"type\":\"anime\",\"name\":\"Millepensee\",\"url\":\"https://myanimelist.net/anime/producer/1237/Millepensee\"},{\"mal_id\":1381,\"type\":\"anime\",\"name\":\"GEMBA\",\"url\":\"https://myanimelist.net/anime/producer/1381/GEMBA\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":41536,\"url\":\"https://myanimelist.net/anime/41536/Berserk_Movie_Pilot\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/1886/120712l.webp\"}},\"trailer\":{\"youtube_id\":null,\"url\":null,\"embed_url\":null,\"images\":{\"image_url\":null,\"small_image_url\":null,\"medium_image_url\":null,\"large_image_url\":null,\"maximum_image_url\":null}},\"title\":\"Berserk (Movie Pilot)\",\"title_english\":null,\"title_japanese\":null,\"title_synonyms\":[\"Berserk (Movie Pilot)\"],\"type\":\"Special\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":null,\"to\":null,\"prop\":{\"from\":{\"day\":null,\"month\":null,\"year\":null},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Not available\"},\"duration\":\"1 min\",\"rating\":\"R - 17+ (violence & profanity)\",\"score\":null,\"scored_by\":null,\"rank\":0,\"popularity\":0,\"members\":0,\"favorites\":0,\"synopsis\":\"The pitch pilot shown to Kentaro Miura by Studio 4°C for his permission to greenlight the production of the originally planned Berserk Saga Project, starting with the release of the Golden Age Arc trilogy films.\",\"background\":\"The short film showcases original scenes and frame works based on different arcs from the manga, arranged to test the expected visual quality for the production of the Berserk films.\",\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[],\"licensors\":[],\"studios\":[],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"}],\"explicit_genres\":[],\"themes\":[],\"demographics\":[]},{\"mal_id\":34055,\"url\":\"https://myanimelist.net/anime/34055/Berserk_2nd_Season\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/85296l.webp\"}},\"trailer\":{\"youtube_id\":\"tbx0PAsWiKw\",\"url\":\"https://www.youtube.com/watch?v=tbx0PAsWiKw\",\"embed_url\":\"https://www.youtube.com/embed/tbx0PAsWiKw?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/tbx0PAsWiKw/maxresdefault.jpg\"}},\"title\":\"Berserk 2nd Season\",\"title_english\":\"Berserk: Season II\",\"title_japanese\":\"ベルセルク\",\"title_synonyms\":[],\"type\":\"TV\",\"source\":\"Manga\",\"episodes\":12,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2017-04-07T00:00:00+00:00\",\"to\":\"2017-06-23T00:00:00+00:00\",\"prop\":{\"from\":{\"day\":7,\"month\":4,\"year\":2017},\"to\":{\"day\":23,\"month\":6,\"year\":2017}},\"string\":\"Apr 7, 2017 to Jun 23, 2017\"},\"duration\":\"24 min per ep\",\"rating\":\"R - 17+ (violence & profanity)\",\"score\":6.57,\"scored_by\":83238,\"rank\":5889,\"popularity\":1238,\"members\":152467,\"favorites\":386,\"synopsis\":\"Demons have now become commonplace around the kingdom of Midland, which has fallen into chaos. The swordsman Guts still cannot stay in one place for long due to his demonic brand. He could always manage to protect himself when he was alone, but now he has the added challenge of protecting former Commander Casca, a shell of her former self who neither remembers nor trusts him. They never have a moment's rest with the constant threat of demons, and they need a place where Casca will be safe till they find a way to heal her. Their elf ally, Puck, tells of the mystical land of Elfhelm, which is supposed to be a safe haven from the demons that ravage the lands. Tired and with only a vague hope, they struggle on to find a place to live—and they still need to find those responsible for the madness they are forced to endure. [Written by MAL Rewrite]\",\"background\":null,\"season\":\"spring\",\"year\":2017,\"broadcast\":{\"day\":\"Fridays\",\"time\":\"22:30\",\"timezone\":\"Asia/Tokyo\",\"string\":\"Fridays at 22:30 (JST)\"},\"producers\":[{\"mal_id\":33,\"type\":\"anime\",\"name\":\"WOWOW\",\"url\":\"https://myanimelist.net/anime/producer/33/WOWOW\"},{\"mal_id\":143,\"type\":\"anime\",\"name\":\"Mainichi Broadcasting System\",\"url\":\"https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System\"},{\"mal_id\":148,\"type\":\"anime\",\"name\":\"Hakusensha\",\"url\":\"https://myanimelist.net/anime/producer/148/Hakusensha\"},{\"mal_id\":539,\"type\":\"anime\",\"name\":\"Ultra Super Pictures\",\"url\":\"https://myanimelist.net/anime/producer/539/Ultra_Super_Pictures\"},{\"mal_id\":839,\"type\":\"anime\",\"name\":\"LIDENFILMS\",\"url\":\"https://myanimelist.net/anime/producer/839/LIDENFILMS\"},{\"mal_id\":1113,\"type\":\"anime\",\"name\":\"NBCUniversal Entertainment Japan\",\"url\":\"https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan\"},{\"mal_id\":1123,\"type\":\"anime\",\"name\":\"Lucent Pictures Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/1123/Lucent_Pictures_Entertainment\"},{\"mal_id\":1334,\"type\":\"anime\",\"name\":\"Docomo Anime Store\",\"url\":\"https://myanimelist.net/anime/producer/1334/Docomo_Anime_Store\"},{\"mal_id\":1498,\"type\":\"anime\",\"name\":\"Koei Tecmo Games\",\"url\":\"https://myanimelist.net/anime/producer/1498/Koei_Tecmo_Games\"}],\"licensors\":[{\"mal_id\":102,\"type\":\"anime\",\"name\":\"Funimation\",\"url\":\"https://myanimelist.net/anime/producer/102/Funimation\"},{\"mal_id\":1468,\"type\":\"anime\",\"name\":\"Crunchyroll\",\"url\":\"https://myanimelist.net/anime/producer/1468/Crunchyroll\"}],\"studios\":[{\"mal_id\":1237,\"type\":\"anime\",\"name\":\"Millepensee\",\"url\":\"https://myanimelist.net/anime/producer/1237/Millepensee\"},{\"mal_id\":1381,\"type\":\"anime\",\"name\":\"GEMBA\",\"url\":\"https://myanimelist.net/anime/producer/1381/GEMBA\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[]},{\"mal_id\":35676,\"url\":\"https://myanimelist.net/anime/35676/Berserk__Majo_no_Tsuisou\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/13/86045l.webp\"}},\"trailer\":{\"youtube_id\":null,\"url\":null,\"embed_url\":null,\"images\":{\"image_url\":null,\"small_image_url\":null,\"medium_image_url\":null,\"large_image_url\":null,\"maximum_image_url\":null}},\"title\":\"Berserk: Majo no Tsuisou\",\"title_english\":\"Berserk: Recollections of the Witch\",\"title_japanese\":\"ベルセルク 魔女の追想\",\"title_synonyms\":[\"Berserk 2nd Season Episode 9.5\",\"Berserk 2nd Season Recap\"],\"type\":\"Special\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2017-06-02T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":2,\"month\":6,\"year\":2017},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Jun 2, 2017\"},\"duration\":\"24 min\",\"rating\":\"R - 17+ (violence & profanity)\",\"score\":5.79,\"scored_by\":6745,\"rank\":9660,\"popularity\":4766,\"members\":14386,\"favorites\":22,\"synopsis\":\"Recap episode of Berserk 2nd Season.\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":839,\"type\":\"anime\",\"name\":\"LIDENFILMS\",\"url\":\"https://myanimelist.net/anime/producer/839/LIDENFILMS\"}],\"licensors\":[],\"studios\":[{\"mal_id\":1237,\"type\":\"anime\",\"name\":\"Millepensee\",\"url\":\"https://myanimelist.net/anime/producer/1237/Millepensee\"},{\"mal_id\":1381,\"type\":\"anime\",\"name\":\"GEMBA\",\"url\":\"https://myanimelist.net/anime/producer/1381/GEMBA\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[]},{\"mal_id\":33,\"url\":\"https://myanimelist.net/anime/33/Kenpuu_Denki_Berserk\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/1384/119988l.webp\"}},\"trailer\":{\"youtube_id\":null,\"url\":null,\"embed_url\":null,\"images\":{\"image_url\":null,\"small_image_url\":null,\"medium_image_url\":null,\"large_image_url\":null,\"maximum_image_url\":null}},\"title\":\"Kenpuu Denki Berserk\",\"title_english\":\"Berserk\",\"title_japanese\":\"剣風伝奇ベルセルク\",\"title_synonyms\":[\"Berserk: The Chronicles of Wind Blades\",\"Sword-Wind Chronicle Berserk\"],\"type\":\"TV\",\"source\":\"Manga\",\"episodes\":25,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"1997-10-08T00:00:00+00:00\",\"to\":\"1998-04-01T00:00:00+00:00\",\"prop\":{\"from\":{\"day\":8,\"month\":10,\"year\":1997},\"to\":{\"day\":1,\"month\":4,\"year\":1998}},\"string\":\"Oct 8, 1997 to Apr 1, 1998\"},\"duration\":\"25 min per ep\",\"rating\":\"R+ - Mild Nudity\",\"score\":8.53,\"scored_by\":282228,\"rank\":102,\"popularity\":333,\"members\":526741,\"favorites\":21645,\"synopsis\":\"Guts, a man who will one day be known as the Black Swordsman, is a young traveling mercenary characterized by the large greatsword he carries. He accepts jobs that offer the most money, but he never stays with one group for long—until he encounters the Band of the Hawk. Ambushed after completing a job, Guts crushes many of its members in combat. Griffith, The Band of the Falcon's leader and founder, takes an interest in Guts and duels him. While the others are no match for Guts, Griffith defeats him in one blow. Incapacitated and taken into the Band of the Hawk's camp to recover, Guts wakes up two days later. He confronts Griffith, and the two duel yet again, only this time with a condition: Guts will join the Band of the Falcon if he loses. Due to his fresh injuries, Guts loses the fight and is inducted by Griffith. In three years' time, Guts has become one of the Band of the Hawk's commanders. On the battlefield, his combat prowess is second only to Griffith as he takes on large groups of enemies all on his own. With Guts' immense strength and Griffith's leadership, the Band of the Hawk dominate every battle they partake in. But something menacing lurks in the shadows, threatening to change Guts' life forever. [Written by MAL Rewrite]\",\"background\":\"Kenpuu Denki Berserk adapts the first 12 volumes and a part of the 13th volume of the manga. While the story remains fairly loyal to the source material, heavy modifications were made to exclude some of the more graphic depictions of violence, as well as characters and other content that could not be covered within the length of the anime’s running time. These changes were approved by the series creator himself. The series was released on DVD by Media Blasters in six volumes from May 28, 2002 to May 27, 2003. The company also released a complete collection on November 16, 2004; it was later remastered by AnimeWorks and published on March 10, 2009. An art book—titled Berserk: Kenpuu Denki - Kanzen Kaiseki-sho—containing sketches and behind-the-scenes information on the anime was published by Hakusensha on December 9, 1998.\",\"season\":\"fall\",\"year\":1997,\"broadcast\":{\"day\":\"Wednesdays\",\"time\":\"01:45\",\"timezone\":\"Asia/Tokyo\",\"string\":\"Wednesdays at 01:45 (JST)\"},\"producers\":[{\"mal_id\":29,\"type\":\"anime\",\"name\":\"VAP\",\"url\":\"https://myanimelist.net/anime/producer/29/VAP\"},{\"mal_id\":148,\"type\":\"anime\",\"name\":\"Hakusensha\",\"url\":\"https://myanimelist.net/anime/producer/148/Hakusensha\"},{\"mal_id\":1003,\"type\":\"anime\",\"name\":\"Nippon Television Network\",\"url\":\"https://myanimelist.net/anime/producer/1003/Nippon_Television_Network\"}],\"licensors\":[{\"mal_id\":250,\"type\":\"anime\",\"name\":\"Media Blasters\",\"url\":\"https://myanimelist.net/anime/producer/250/Media_Blasters\"},{\"mal_id\":595,\"type\":\"anime\",\"name\":\"NYAV Post\",\"url\":\"https://myanimelist.net/anime/producer/595/NYAV_Post\"}],\"studios\":[{\"mal_id\":28,\"type\":\"anime\",\"name\":\"OLM\",\"url\":\"https://myanimelist.net/anime/producer/28/OLM\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":12115,\"url\":\"https://myanimelist.net/anime/12115/Berserk__Ougon_Jidai-hen_III_-_Kourin\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/41305l.webp\"}},\"trailer\":{\"youtube_id\":\"36IMbYmdSWM\",\"url\":\"https://www.youtube.com/watch?v=36IMbYmdSWM\",\"embed_url\":\"https://www.youtube.com/embed/36IMbYmdSWM?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/36IMbYmdSWM/maxresdefault.jpg\"}},\"title\":\"Berserk: Ougon Jidai-hen III - Kourin\",\"title_english\":\"Berserk: The Golden Age Arc III - The Advent\",\"title_japanese\":\"ベルセルク 黄金時代篇Ⅲ 降臨\",\"title_synonyms\":[\"Berserk Movie\",\"Berserk Saga\",\"Berserk: Golden Age Arc III - Descent\"],\"type\":\"Movie\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2013-02-01T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":1,\"month\":2,\"year\":2013},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Feb 1, 2013\"},\"duration\":\"1 hr 50 min\",\"rating\":\"R+ - Mild Nudity\",\"score\":8.2,\"scored_by\":121084,\"rank\":324,\"popularity\":1002,\"members\":190536,\"favorites\":1355,\"synopsis\":\"The Band of the Hawk has dwindled in the year since Guts left them on his journey to forge his own destiny. Unaware of their fate, Guts returns to the Hawks—now being led by his former ally Casca—after a rumor about them passes his way. Once the saviors of the kingdom of Midland, the Band of the Hawk are now hunted as they desperately fight for their lives while plotting to free their leader, Griffith, after he was imprisoned for committing treason. But the man they save is far from the Griffith they remember. Griffith is a shell of his former charismatic self after a year of continuous, horrific torture. No longer able to walk, speak, or even hold a sword, he has nothing but the small, strange trinket, the Crimson Behelit, that will not leave him. The entire Band of the Hawk want to rise to greatness once more, but how much are they willing to sacrifice to return to their past glory? It doesn't seem possible, but when Griffith's heart darkens and a solar eclipse blackens the sky, the Behelit offers a choice that will leave the Band of the Hawk with a blood-soaked fate that will haunt them for the rest of their days. [Written by MAL Rewrite]\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":795,\"type\":\"anime\",\"name\":\"Yahoo! Japan\",\"url\":\"https://myanimelist.net/anime/producer/795/Yahoo_Japan\"},{\"mal_id\":1261,\"type\":\"anime\",\"name\":\"Good Smile Company\",\"url\":\"https://myanimelist.net/anime/producer/1261/Good_Smile_Company\"},{\"mal_id\":1584,\"type\":\"anime\",\"name\":\"Beyond C.\",\"url\":\"https://myanimelist.net/anime/producer/1584/Beyond_C\"},{\"mal_id\":2018,\"type\":\"anime\",\"name\":\"Rialto Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/2018/Rialto_Entertainment\"}],\"licensors\":[{\"mal_id\":119,\"type\":\"anime\",\"name\":\"VIZ Media\",\"url\":\"https://myanimelist.net/anime/producer/119/VIZ_Media\"},{\"mal_id\":595,\"type\":\"anime\",\"name\":\"NYAV Post\",\"url\":\"https://myanimelist.net/anime/producer/595/NYAV_Post\"}],\"studios\":[{\"mal_id\":13,\"type\":\"anime\",\"name\":\"Studio 4°C\",\"url\":\"https://myanimelist.net/anime/producer/13/Studio_4%C2%B0C\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":10218,\"url\":\"https://myanimelist.net/anime/10218/Berserk__Ougon_Jidai-hen_I_-_Haou_no_Tamago\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/62179l.webp\"}},\"trailer\":{\"youtube_id\":\"5_piopZ4bTA\",\"url\":\"https://www.youtube.com/watch?v=5_piopZ4bTA\",\"embed_url\":\"https://www.youtube.com/embed/5_piopZ4bTA?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/5_piopZ4bTA/maxresdefault.jpg\"}},\"title\":\"Berserk: Ougon Jidai-hen I - Haou no Tamago\",\"title_english\":\"Berserk: The Golden Age Arc I - The Egg of the King\",\"title_japanese\":\"ベルセルク 黄金時代篇Ⅰ 覇王の卵\",\"title_synonyms\":[\"Berserk Movie\",\"Berserk Saga\",\"Berserk: Golden Age Arc I - Egg of the Supreme Ruler\",\"The Golden Age Arc I: The High King's Egg\"],\"type\":\"Movie\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2012-02-04T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":4,\"month\":2,\"year\":2012},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Feb 4, 2012\"},\"duration\":\"1 hr 16 min\",\"rating\":\"R+ - Mild Nudity\",\"score\":7.72,\"scored_by\":128350,\"rank\":1044,\"popularity\":976,\"members\":196436,\"favorites\":845,\"synopsis\":\"In the Kingdom of Midland, a mercenary named Guts wanders the land, preferring a life of conflict over a life of peace. Despite the odds never being in his favor, he is an unstoppable force that overcomes every opponent, wielding a massive sword larger than himself. One day, Griffith, the mysterious leader of the mercenary group Band of the Hawk, witnesses the warrior's battle prowess and invites the wandering swordsman to join his squadron. Rejecting the offer, Guts challenges Griffith to a duel—and, much to the former's surprise, is subsequently defeated and forced to join. Now, Guts must fight alongside Griffith and his crew to help Midland defeat the Empire of Chuder. However, Griffith seems to harbor ulterior motives, desiring something much larger than just settling the war... [Written by MAL Rewrite]\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":795,\"type\":\"anime\",\"name\":\"Yahoo! Japan\",\"url\":\"https://myanimelist.net/anime/producer/795/Yahoo_Japan\"},{\"mal_id\":1261,\"type\":\"anime\",\"name\":\"Good Smile Company\",\"url\":\"https://myanimelist.net/anime/producer/1261/Good_Smile_Company\"},{\"mal_id\":1584,\"type\":\"anime\",\"name\":\"Beyond C.\",\"url\":\"https://myanimelist.net/anime/producer/1584/Beyond_C\"},{\"mal_id\":2018,\"type\":\"anime\",\"name\":\"Rialto Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/2018/Rialto_Entertainment\"}],\"licensors\":[{\"mal_id\":119,\"type\":\"anime\",\"name\":\"VIZ Media\",\"url\":\"https://myanimelist.net/anime/producer/119/VIZ_Media\"},{\"mal_id\":595,\"type\":\"anime\",\"name\":\"NYAV Post\",\"url\":\"https://myanimelist.net/anime/producer/595/NYAV_Post\"}],\"studios\":[{\"mal_id\":13,\"type\":\"anime\",\"name\":\"Studio 4°C\",\"url\":\"https://myanimelist.net/anime/producer/13/Studio_4%C2%B0C\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]},{\"mal_id\":12113,\"url\":\"https://myanimelist.net/anime/12113/Berserk__Ougon_Jidai-hen_II_-_Doldrey_Kouryaku\",\"images\":{\"jpg\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193.jpg\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193t.jpg\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193l.jpg\"},\"webp\":{\"image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193.webp\",\"small_image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193t.webp\",\"large_image_url\":\"https://cdn.myanimelist.net/images/anime/12/37193l.webp\"}},\"trailer\":{\"youtube_id\":\"0zEbyF6NuAw\",\"url\":\"https://www.youtube.com/watch?v=0zEbyF6NuAw\",\"embed_url\":\"https://www.youtube.com/embed/0zEbyF6NuAw?enablejsapi=1&wmode=opaque&autoplay=1\",\"images\":{\"image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/default.jpg\",\"small_image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/sddefault.jpg\",\"medium_image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/mqdefault.jpg\",\"large_image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/hqdefault.jpg\",\"maximum_image_url\":\"https://img.youtube.com/vi/0zEbyF6NuAw/maxresdefault.jpg\"}},\"title\":\"Berserk: Ougon Jidai-hen II - Doldrey Kouryaku\",\"title_english\":\"Berserk: The Golden Age Arc II - The Battle for Doldrey\",\"title_japanese\":\"ベルセルク 黄金時代篇Ⅱ ドルドレイ攻略\",\"title_synonyms\":[\"Berserk Movie\",\"Berserk Saga\"],\"type\":\"Movie\",\"source\":\"Manga\",\"episodes\":1,\"status\":\"Finished Airing\",\"airing\":false,\"aired\":{\"from\":\"2012-06-23T00:00:00+00:00\",\"to\":null,\"prop\":{\"from\":{\"day\":23,\"month\":6,\"year\":2012},\"to\":{\"day\":null,\"month\":null,\"year\":null}},\"string\":\"Jun 23, 2012\"},\"duration\":\"1 hr 32 min\",\"rating\":\"R+ - Mild Nudity\",\"score\":7.88,\"scored_by\":118791,\"rank\":742,\"popularity\":1041,\"members\":181574,\"favorites\":597,\"synopsis\":\"The Band of the Hawk and their enigmatic leader Griffith continue winning battle after battle as their prestige throughout the kingdom of Midland grows. But their latest task is one that has seen failure from everyone who has attempted it: the subjugation of the impenetrable fortress of Doldrey. But with members like Guts—the captain of the Hawks' raiders who can easily fell 100 men with his gigantic sword—such tasks prove to be trivial. However, in the aftermath of the battle, Guts decides to leave the Hawks in order to pursue his own dream and bids farewell to his companions, despite Griffith's attempts to make him stay. This single event causes Griffith to lose his composure, and leads him to make a decision that will alter his and the Hawks' fates forever. [Written by MAL Rewrite]\",\"background\":null,\"season\":null,\"year\":null,\"broadcast\":{\"day\":null,\"time\":null,\"timezone\":null,\"string\":null},\"producers\":[{\"mal_id\":795,\"type\":\"anime\",\"name\":\"Yahoo! Japan\",\"url\":\"https://myanimelist.net/anime/producer/795/Yahoo_Japan\"},{\"mal_id\":1261,\"type\":\"anime\",\"name\":\"Good Smile Company\",\"url\":\"https://myanimelist.net/anime/producer/1261/Good_Smile_Company\"},{\"mal_id\":1584,\"type\":\"anime\",\"name\":\"Beyond C.\",\"url\":\"https://myanimelist.net/anime/producer/1584/Beyond_C\"},{\"mal_id\":2018,\"type\":\"anime\",\"name\":\"Rialto Entertainment\",\"url\":\"https://myanimelist.net/anime/producer/2018/Rialto_Entertainment\"}],\"licensors\":[{\"mal_id\":119,\"type\":\"anime\",\"name\":\"VIZ Media\",\"url\":\"https://myanimelist.net/anime/producer/119/VIZ_Media\"},{\"mal_id\":595,\"type\":\"anime\",\"name\":\"NYAV Post\",\"url\":\"https://myanimelist.net/anime/producer/595/NYAV_Post\"}],\"studios\":[{\"mal_id\":13,\"type\":\"anime\",\"name\":\"Studio 4°C\",\"url\":\"https://myanimelist.net/anime/producer/13/Studio_4%C2%B0C\"}],\"genres\":[{\"mal_id\":1,\"type\":\"anime\",\"name\":\"Action\",\"url\":\"https://myanimelist.net/anime/genre/1/Action\"},{\"mal_id\":2,\"type\":\"anime\",\"name\":\"Adventure\",\"url\":\"https://myanimelist.net/anime/genre/2/Adventure\"},{\"mal_id\":8,\"type\":\"anime\",\"name\":\"Drama\",\"url\":\"https://myanimelist.net/anime/genre/8/Drama\"},{\"mal_id\":10,\"type\":\"anime\",\"name\":\"Fantasy\",\"url\":\"https://myanimelist.net/anime/genre/10/Fantasy\"},{\"mal_id\":14,\"type\":\"anime\",\"name\":\"Horror\",\"url\":\"https://myanimelist.net/anime/genre/14/Horror\"},{\"mal_id\":37,\"type\":\"anime\",\"name\":\"Supernatural\",\"url\":\"https://myanimelist.net/anime/genre/37/Supernatural\"}],\"explicit_genres\":[],\"themes\":[{\"mal_id\":58,\"type\":\"anime\",\"name\":\"Gore\",\"url\":\"https://myanimelist.net/anime/genre/58/Gore\"},{\"mal_id\":38,\"type\":\"anime\",\"name\":\"Military\",\"url\":\"https://myanimelist.net/anime/genre/38/Military\"},{\"mal_id\":6,\"type\":\"anime\",\"name\":\"Mythology\",\"url\":\"https://myanimelist.net/anime/genre/6/Mythology\"}],\"demographics\":[{\"mal_id\":42,\"type\":\"anime\",\"name\":\"Seinen\",\"url\":\"https://myanimelist.net/anime/genre/42/Seinen\"}]}]");

},{}]},["d8Pj5","jV4mf"], "jV4mf", "parcelRequire4e41")

//# sourceMappingURL=index.2ccf2417.js.map
