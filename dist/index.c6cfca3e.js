!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequire4e41;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){a[e]=n},n.parcelRequire4e41=r);var c=r("8TSCy"),i=r("2TvXO"),o=r("dIxxU");function s(){return(s=c.asyncToGenerator(e(i).mark((function n(){var t,a,r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get",url:"https://api.jikan.moe/v4/anime?q=berserk&sfw"},e.next=3,o(t);case 3:200==(a=e.sent).status&&(r=a.data.data,document.querySelector(".work").innerHTML=r.reduce((function(e,n){return e+'<a class="card" href="detail.html?'.concat(n.mal_id,'">\n                <img class="card-img-top" src="').concat(n.images.jpg.image_url,'" alt="Card image cap">\n                <div class="card-body">\n                    <h1 class="card-title">').concat(n.title,'</h1>\n                    <h2 class="card-title">').concat(n.title_japanese||"",'</h2>\n                    <p class="card-text">').concat(n.synopsis,'</p>...\n                </div>\n                <div class="card-body">\n                    <p href="#" class="card-link">More</p>\n                </div>\n            </a>')}),""));case 5:case"end":return e.stop()}}),n)})))).apply(this,arguments)}!function(){s.apply(this,arguments)}()}();
//# sourceMappingURL=index.c6cfca3e.js.map
