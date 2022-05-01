/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fredoka&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    font-family:arial;\n    height: 100vh;\n    width: 100vw;\n    background-color: #19386d;\n    margin: 0;\n    overflow-y: auto;\n}\n\n.flexify-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.flexify-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    width: 100vw;\n    height: 100vh;\n    color: #fff;\n    overflow-y: auto;\n}\n\n/*Options container styles*/\n.logo-container{\n    width:8%;\n}\n.logo{\n    height: 3rem;\n    width: 3rem;\n    padding: .3em 0 0 .3em;\n}\n\n.logo-container p{\n    margin: 0;\n}\n\n/*Main container styles*/\n.main-container{\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    width: 70%;\n    max-width: 700px; \n    height: 100%;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.vertical-line{\n    border-left: 3px solid #000;\n    height: 100vh;\n    width: 3px;\n    position: fixed;\n    top: 0;\n    justify-self: left;\n}\n\n.search-container{\n    margin: 1em 0 0 0;\n    width: fit-content;\n    min-width: 10rem;\n    max-height: 2.5rem;\n}\n\n.search-container input{\n    font-size: 1.5rem;\n    border: .1em none #000;\n    border-radius: 5px;  \n    width: 85%;\n}\n\n.search-container img{\n    width: 12.5%;\n}\n.weather-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 30%;\n    width: 100%;\n    min-height: fit-content;\n    min-height: 300px;\n    margin: 2rem 0 0 0;\n    background-color: #546bab;\n    border-style: none;\n}\n\n.weather-container{\n    height: 100%;\n    width: 50%;\n}\n\n.location-div{\n    display: flex;\n    align-items: center;\n}\n\n.flag{\n    height: 2rem;\n    margin: 0 0 0 .5em;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.location-container p{\n    margin: 0;\n    text-align: center;\n}\n.location-container img{\n    justify-self: center;\n    align-self: center;\n    height: 10rem;\n    width: 10rem;\n}\n\n.weather-container button span{\n    padding: 0 1rem 0 1rem;\n}\n\n.temperature{\n    margin: 0;\n    font-size:5rem;\n    justify-self: center;\n}\n\n.temperature-container{\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.data-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 1rem;\n    height: 40%;\n    width: 100%;\n    margin: 2rem 0 0 0;\n}\n\n.data-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    background-color: #546bab;\n    border-style: none;\n    height: 100%;\n}\n\n.data-div:hover, .weather-div:hover{\n    background-color: #546babaf;\n}\n\n.data-div div{\n    width: 100%;\n    display: grid;\n    grid-template-columns: auto auto;\n}\n.data-div p{\n    text-align: center;\n    align-self: center;\n}\n\n.data-div img{\n    max-height: 2rem;\n    max-width: 2rem;\n    margin: .2em .2em 0 .2em;\n}\n\n\n.temperature-container div{\n    font-size: 1.5rem;\n}\n\n.temperature-container div p{\n    margin: 5px 0 0 0;\n}\n\n/*Forecast container styles*/\n.forecast-container{\n    display: grid;\n    grid-template-rows: auto auto;\n    max-width: 290px;\n    width: 28%;\n    height: 95%;\n    background-color: #546bab;\n    border-style: none;\n    border-color: #000;\n    border-radius: 10px;\n    margin: .5em .5em 0 0;\n}\n\n.timeframe-container{\n    justify-self: center;\n    width: 13rem;\n}\n\n.timeframe-container p{\n    text-align: center;\n    width: 6rem;\n    font-size: 2rem;\n    height: fit-content;\n    padding: 0 0 .5em 0;\n    margin: 0;\n}\n\n.timeframe-container img{\n    max-height: 3rem;\n    max-width: 3rem;\n    text-align: center;\n}\n\n.forecasts{\n    width: 100%;\n    overflow-y: auto;\n}\n\n.day{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    align-items: center;\n    width: 100%;\n    padding: 0 0 .5em 0;\n    border-bottom: 2px solid #fff;\n}\n\n.day p{\n    padding-left: 20px;\n}\n\n.day img{\n    max-width: 6rem\n}\n\n.weather-div, .data-div{\n    border-radius: 20px;\n}\n\nbutton{\n    display: flex;\n    flex-direction: row;\n    font-size: 1.5rem;\n    width: fit-content;\n    height: 2.5rem;\n    margin-bottom: 30px;\n    border-radius: 15px;\n    border-style: none;\n    background-color: #fff;\n    color: #000;\n    align-self: center;\n}\n\nh1{\n    font-size: 1.5rem;\n}\n\nspan{\n    width: fit-content;\n}\n\nspan:hover{\n    text-decoration: underline;\n}\n\n@media (max-width: 767px){\n\n    .container{\n        display: grid;\n        grid-template-rows: auto auto;\n    }\n\n    .forecast-container{\n        width: 90vw;\n        max-width: 90vw;\n        height: fit-content;\n        margin: .5em 0;\n        justify-self: center;\n    }\n\n    .timeframe-container{\n        height: fit-content;\n        width: fit-content;\n        margin-top: .5em;\n        align-self: center;\n    }\n\n    .timeframe-container img{\n        height: 2rem;\n        width: 2rem;\n    }\n\n    .forecasts{\n        flex-direction: row;\n        height: fit-content;\n        width: 100%;\n    }\n\n    .vertical-line{\n        display: none;\n    }\n\n    .main-container{\n        width: 100vw;\n        height: 85%;\n        padding: 0;\n    }\n\n    .data-container{\n        width: 90%;\n        min-height: fit-content;\n        margin-top: .5em;\n    }\n\n    .data-div{\n        padding: .2em;\n        height: 130px;\n    }\n\n    .data-div p{\n        margin: 0 0 1.5em 0;\n    }\n\n    h1{\n        font-size: 1.2rem\n    }\n\n    .day{\n        border-bottom: none;\n    }\n\n    .day img{\n        width: 3rem;\n    }\n    \n    .search-container{\n        width: 15rem;\n        margin-left: 2.5rem;\n    }\n\n    .weather-div{\n        flex-direction: column;\n        align-items: center;\n        width: 90%;\n        height: 40%;\n    }\n\n    .logo-container{\n        position: absolute;\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .weather-container{\n        height: 14rem;\n        width: fit-content;\n        justify-content: space-between;\n    }\n\n    .location-div{\n        align-items: center;\n        justify-content: center;\n    }\n\n    .location-div img{\n        height: 2rem;\n    }\n\n    .location-container{\n        height: 80px;\n\n    }\n\n    .location-container img{\n       display: none;\n    }\n\n    button{\n        margin-bottom: 0;\n        align-self: center;\n        width: fit-content;\n        color: #000;\n    }\n/* \n    @media (max-height: 840px){\n\n        .main-container{\n            height: 85%;\n        }\n\n        .timeframe-container{\n            align-self: center;\n            height: fit-content;\n            margin-top: 0;\n        }\n\n        .forecast-container{\n            height: 12.5%;\n            margin-bottom: .5em;\n        }\n\n        .forecasts{\n            height: 100;\n            margin-top: 1.3em;\n        }\n\n        .data-container{\n            margin-top: .8em;\n            width: 90vw;\n        }\n\n        .weather-div{\n            height: fit-content;\n        }\n\n        button{\n            width: fit-content;\n            color: #000;\n        }\n    }\n\n    @media (max-height: 700px){\n\n        .main-container{\n            height:fit-content;\n        }\n        .data-container{\n            margin-top: .5em;\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            grid-template-rows: none;\n            width: 90vw;\n            overflow-x: auto;\n        }\n        .data-div{\n            height: 110px;\n            width: 135px;\n        }\n\n        .forecast-container{\n            height: fit-content;\n           \n        }\n    } */\n}\n/*General styles*/\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');\n\nbody{\n    font-family:arial;\n    height: 100vh;\n    width: 100vw;\n    background-color: #19386d;\n    margin: 0;\n    overflow-y: auto;\n}\n\n.flexify-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.flexify-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    width: 100vw;\n    height: 100vh;\n    color: #fff;\n    overflow-y: auto;\n}\n\n/*Options container styles*/\n.logo-container{\n    width:8%;\n}\n.logo{\n    height: 3rem;\n    width: 3rem;\n    padding: .3em 0 0 .3em;\n}\n\n.logo-container p{\n    margin: 0;\n}\n\n/*Main container styles*/\n.main-container{\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    width: 70%;\n    max-width: 700px; \n    height: 100%;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.vertical-line{\n    border-left: 3px solid #000;\n    height: 100vh;\n    width: 3px;\n    position: fixed;\n    top: 0;\n    justify-self: left;\n}\n\n.search-container{\n    margin: 1em 0 0 0;\n    width: fit-content;\n    min-width: 10rem;\n    max-height: 2.5rem;\n}\n\n.search-container input{\n    font-size: 1.5rem;\n    border: .1em none #000;\n    border-radius: 5px;  \n    width: 85%;\n}\n\n.search-container img{\n    width: 12.5%;\n}\n.weather-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 30%;\n    width: 100%;\n    min-height: fit-content;\n    min-height: 300px;\n    margin: 2rem 0 0 0;\n    background-color: #546bab;\n    border-style: none;\n}\n\n.weather-container{\n    height: 100%;\n    width: 50%;\n}\n\n.location-div{\n    display: flex;\n    align-items: center;\n}\n\n.flag{\n    height: 2rem;\n    margin: 0 0 0 .5em;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.location-container p{\n    margin: 0;\n    text-align: center;\n}\n.location-container img{\n    justify-self: center;\n    align-self: center;\n    height: 10rem;\n    width: 10rem;\n}\n\n.weather-container button span{\n    padding: 0 1rem 0 1rem;\n}\n\n.temperature{\n    margin: 0;\n    font-size:5rem;\n    justify-self: center;\n}\n\n.temperature-container{\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.data-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 1rem;\n    height: 40%;\n    width: 100%;\n    margin: 2rem 0 0 0;\n}\n\n.data-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    background-color: #546bab;\n    border-style: none;\n    height: 100%;\n}\n\n.data-div:hover, .weather-div:hover{\n    background-color: #546babaf;\n}\n\n.data-div div{\n    width: 100%;\n    display: grid;\n    grid-template-columns: auto auto;\n}\n.data-div p{\n    text-align: center;\n    align-self: center;\n}\n\n.data-div img{\n    max-height: 2rem;\n    max-width: 2rem;\n    margin: .2em .2em 0 .2em;\n}\n\n\n.temperature-container div{\n    font-size: 1.5rem;\n}\n\n.temperature-container div p{\n    margin: 5px 0 0 0;\n}\n\n/*Forecast container styles*/\n.forecast-container{\n    display: grid;\n    grid-template-rows: auto auto;\n    max-width: 290px;\n    width: 28%;\n    height: 95%;\n    background-color: #546bab;\n    border-style: none;\n    border-color: #000;\n    border-radius: 10px;\n    margin: .5em .5em 0 0;\n}\n\n.timeframe-container{\n    justify-self: center;\n    width: 13rem;\n}\n\n.timeframe-container p{\n    text-align: center;\n    width: 6rem;\n    font-size: 2rem;\n    height: fit-content;\n    padding: 0 0 .5em 0;\n    margin: 0;\n}\n\n.timeframe-container img{\n    max-height: 3rem;\n    max-width: 3rem;\n    text-align: center;\n}\n\n.forecasts{\n    width: 100%;\n    overflow-y: auto;\n}\n\n.day{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    align-items: center;\n    width: 100%;\n    padding: 0 0 .5em 0;\n    border-bottom: 2px solid #fff;\n}\n\n.day p{\n    padding-left: 20px;\n}\n\n.day img{\n    max-width: 6rem\n}\n\n.weather-div, .data-div{\n    border-radius: 20px;\n}\n\nbutton{\n    display: flex;\n    flex-direction: row;\n    font-size: 1.5rem;\n    width: fit-content;\n    height: 2.5rem;\n    margin-bottom: 30px;\n    border-radius: 15px;\n    border-style: none;\n    background-color: #fff;\n    color: #000;\n    align-self: center;\n}\n\nh1{\n    font-size: 1.5rem;\n}\n\nspan{\n    width: fit-content;\n}\n\nspan:hover{\n    text-decoration: underline;\n}\n\n@media (max-width: 767px){\n\n    .container{\n        display: grid;\n        grid-template-rows: auto auto;\n    }\n\n    .forecast-container{\n        width: 90vw;\n        max-width: 90vw;\n        height: fit-content;\n        margin: .5em 0;\n        justify-self: center;\n    }\n\n    .timeframe-container{\n        height: fit-content;\n        width: fit-content;\n        margin-top: .5em;\n        align-self: center;\n    }\n\n    .timeframe-container img{\n        height: 2rem;\n        width: 2rem;\n    }\n\n    .forecasts{\n        flex-direction: row;\n        height: fit-content;\n        width: 100%;\n    }\n\n    .vertical-line{\n        display: none;\n    }\n\n    .main-container{\n        width: 100vw;\n        height: 85%;\n        padding: 0;\n    }\n\n    .data-container{\n        width: 90%;\n        min-height: fit-content;\n        margin-top: .5em;\n    }\n\n    .data-div{\n        padding: .2em;\n        height: 130px;\n    }\n\n    .data-div p{\n        margin: 0 0 1.5em 0;\n    }\n\n    h1{\n        font-size: 1.2rem\n    }\n\n    .day{\n        border-bottom: none;\n    }\n\n    .day img{\n        width: 3rem;\n    }\n    \n    .search-container{\n        width: 15rem;\n        margin-left: 2.5rem;\n    }\n\n    .weather-div{\n        flex-direction: column;\n        align-items: center;\n        width: 90%;\n        height: 40%;\n    }\n\n    .logo-container{\n        position: absolute;\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .weather-container{\n        height: 14rem;\n        width: fit-content;\n        justify-content: space-between;\n    }\n\n    .location-div{\n        align-items: center;\n        justify-content: center;\n    }\n\n    .location-div img{\n        height: 2rem;\n    }\n\n    .location-container{\n        height: 80px;\n\n    }\n\n    .location-container img{\n       display: none;\n    }\n\n    button{\n        margin-bottom: 0;\n        align-self: center;\n        width: fit-content;\n        color: #000;\n    }\n/* \n    @media (max-height: 840px){\n\n        .main-container{\n            height: 85%;\n        }\n\n        .timeframe-container{\n            align-self: center;\n            height: fit-content;\n            margin-top: 0;\n        }\n\n        .forecast-container{\n            height: 12.5%;\n            margin-bottom: .5em;\n        }\n\n        .forecasts{\n            height: 100;\n            margin-top: 1.3em;\n        }\n\n        .data-container{\n            margin-top: .8em;\n            width: 90vw;\n        }\n\n        .weather-div{\n            height: fit-content;\n        }\n\n        button{\n            width: fit-content;\n            color: #000;\n        }\n    }\n\n    @media (max-height: 700px){\n\n        .main-container{\n            height:fit-content;\n        }\n        .data-container{\n            margin-top: .5em;\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            grid-template-rows: none;\n            width: 90vw;\n            overflow-x: auto;\n        }\n        .data-div{\n            height: 110px;\n            width: 135px;\n        }\n\n        .forecast-container{\n            height: fit-content;\n           \n        }\n    } */\n}\n/*General styles*/\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/setup.dom.js":
/*!**************************!*\
  !*** ./src/setup.dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupSections": () => (/* binding */ setupSections)
/* harmony export */ });
/* harmony import */ var _search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.svg */ "./src/search.svg");
/* harmony import */ var _arrow_back_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow_back.svg */ "./src/arrow_back.svg");
/* harmony import */ var _arrow_forward_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow_forward.svg */ "./src/arrow_forward.svg");
/* harmony import */ var _location_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.svg */ "./src/location.svg");
/* harmony import */ var _cloudy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloudy.png */ "./src/cloudy.png");
/* harmony import */ var _rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rain.png */ "./src/rain.png");
/* harmony import */ var _rain_drops_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rain-drops.png */ "./src/rain-drops.png");
/* harmony import */ var _thermometer_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thermometer.png */ "./src/thermometer.png");
/* harmony import */ var _wind_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wind.png */ "./src/wind.png");










let isCelsius = true;

function setupSections(){
    const container = document.createElement("div");
    container.classList.add("container");

    const logoContainer = setupOptionsContainer();

    const mainContainer = setupMainContainer();

    const forecastContainer = setupForecastContainer();

    container.append(logoContainer, mainContainer, forecastContainer);

    document.body.appendChild(container);
}

function setupOptionsContainer(){
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("logo-container", "flexify-column");

    const logo = new Image();
    logo.src = _cloudy_png__WEBPACK_IMPORTED_MODULE_4__;
    logo.classList.add("logo");

    optionsContainer.append(logo);

    return optionsContainer;
}

function setupMainContainer(){
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    const searchContainer = document.createElement("div");
    searchContainer.classList.add("search-container", "flexify-row");

    const searchIcon = new Image();
    searchIcon.src = _search_svg__WEBPACK_IMPORTED_MODULE_0__;
    searchIcon.addEventListener("click", ()=>{
        if(searchBar.value !== ""){
            setupDom(flag, searchBar.value, locationName, temperature, weather, weatherIcon, windSpeed, feelsLike, humidity, date, high, low);
            searchBar.value = "";
            searchBar.placeholder = "Search Location";
            
        }else{
            searchBar.addEventListener("input", ()=>{
                searchBar.setCustomValidity("");
            })
            searchBar.setCustomValidity("Enter a city");
            searchBar.reportValidity();
        }
    });

    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.placeholder = `Search Location`;

    searchContainer.append(searchBar, searchIcon);

    const divWeather = document.createElement("div");
    divWeather.classList.add("weather-div");

    const weatherContainer = document.createElement("div");
    weatherContainer.classList.add("weather-container", "flexify-column");

    const locationIcon = new Image();
    locationIcon.src = _location_svg__WEBPACK_IMPORTED_MODULE_3__;
    locationIcon.classList.add("locationIcon");

    const locationName = document.createElement("p");
    locationName.setAttribute("id", "location");

    
    const flag = new Image();
    flag.classList.add("flag");

    const divLocation = document.createElement("div");
    divLocation.classList.add("location-div");

    divLocation.append(locationIcon, locationName, flag);

    const temperatureContainer = document.createElement("div");
    temperatureContainer.classList.add("temperature-container");

    const temperature = document.createElement("p");
    temperature.classList.add("temperature");

    const highAndLowContainer = document.createElement("div");
    const high = document.createElement("p");

    const low = document.createElement("p");

    highAndLowContainer.append(high, low);

    temperatureContainer.append(temperature, highAndLowContainer);

    const btnTemperature = document.createElement("button")
    const celsius = document.createElement("span");
    celsius.textContent = "\xB0C";
    celsius.style.textDecoration = "underline";
    celsius.addEventListener("click", ()=>{
        isCelsius = true;
        setupDom(flag, locationName.textContent, locationName, temperature, weather, weatherIcon, windSpeed, feelsLike, humidity, date, high, low);
        celsius.style.textDecoration = "underline";
        fahrenheit.style.textDecoration = "none";
    });

    const fahrenheit = document.createElement("span");
    fahrenheit.textContent = "\xB0F";
    fahrenheit.addEventListener("click", ()=>{
        isCelsius = false;
        setupDom(flag, locationName.textContent, locationName, temperature, weather, weatherIcon, windSpeed, feelsLike, humidity, date, high, low);
        celsius.style.textDecoration = "none";
        fahrenheit.style.textDecoration = "underline";
    });

    btnTemperature.append(celsius,"/", fahrenheit);

    weatherContainer.append(divLocation, temperatureContainer, btnTemperature);

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");

    const weather = document.createElement("p");

    const weatherIcon = new Image();

    const date = document.createElement("p");

    locationContainer.append(weather, weatherIcon, date);

    divWeather.append(weatherContainer, locationContainer);

    const dataContainer = document.createElement("div");
    dataContainer.classList.add("data-container", "flexify-row");

    const divChanceOfRain = document.createElement("div");
    divChanceOfRain.classList.add("data-div");

    const header1 = document.createElement("div");
    header1.classList.add("flexify-row");

    const chanceOfRainIcon = new Image();
    chanceOfRainIcon.src = _rain_png__WEBPACK_IMPORTED_MODULE_5__;

    const title1 = document.createElement("h1");
    title1.textContent = "P(Rain)";

    header1.append(chanceOfRainIcon, title1);

    const chanceOfRain = document.createElement("p");
    chanceOfRain.setAttribute("id", "chanceOfRain");
    divChanceOfRain.append(header1, chanceOfRain);

    const header2 = document.createElement("div");
    header2.classList.add("flexify-row");

    const windIcon = new Image();
    windIcon.src = _wind_png__WEBPACK_IMPORTED_MODULE_8__;

    const divWindSpeed = document.createElement("div");
    divWindSpeed.classList.add("data-div");

    const title2 = document.createElement("h1");
    title2.textContent = "Wind Speed";

    header2.append(windIcon, title2);

    const windSpeed = document.createElement("p");

    divWindSpeed.append(header2, windSpeed);
    
    const divFeelsLike = document.createElement("div");
    divFeelsLike.classList.add("data-div");

    const header3 = document.createElement("div");
    header3.classList.add("flexify-row");

    const feelsIcon = new Image();
    feelsIcon.src = _thermometer_png__WEBPACK_IMPORTED_MODULE_7__;

    const title3 = document.createElement("h1");
    title3.textContent = "Feels Like";

    header3.append(feelsIcon, title3);

    const feelsLike = document.createElement("p");

    divFeelsLike.append(header3, feelsLike);

    const divHumidity = document.createElement("div");
    divHumidity.classList.add("data-div");

    const header4 = document.createElement("div");
    header4.classList.add("flexify-row");

    const humidityIcon = new Image();
    humidityIcon.src = _rain_drops_png__WEBPACK_IMPORTED_MODULE_6__;

    const title4 = document.createElement("h1");
    title4.textContent = "Humidity";

    header4.append(humidityIcon, title4);

    const humidity = document.createElement("p");

    divHumidity.append(header4, humidity);

    dataContainer.append(divChanceOfRain, divWindSpeed, divFeelsLike, divHumidity);

    mainContainer.append(searchContainer, divWeather, dataContainer);

    setupDom(flag, "Johannesburg", locationName, temperature, weather, weatherIcon, windSpeed, feelsLike, humidity, date, high, low);
    return mainContainer;
}

function setupForecastContainer(){
    const forecastContainer = document.createElement("div");
    forecastContainer.setAttribute("id", "forecast");
    forecastContainer.classList.add("forecast-container");

    const timeframeContainer = document.createElement("div");
    timeframeContainer.classList.add("timeframe-container", "flexify-row");

    const timeframe = document.createElement("p");
    timeframe.setAttribute("id", "timeframe");
    timeframe.textContent = "Daily";

    const backArrow = new Image();
    backArrow.src = _arrow_back_svg__WEBPACK_IMPORTED_MODULE_1__;
    backArrow.addEventListener("click", ()=>{
        changeTimeFrame(timeframe);
        const location = document.getElementById("location");
        loadForecast(location.textContent);
    });

    const forwardArrow = new Image();
    forwardArrow.src = _arrow_forward_svg__WEBPACK_IMPORTED_MODULE_2__;
    forwardArrow.addEventListener("click", ()=>{
        changeTimeFrame(timeframe);
        const location = document.getElementById("location");
        loadForecast(location.textContent);
    });

    timeframeContainer.append(backArrow, timeframe, forwardArrow);

    forecastContainer.appendChild(timeframeContainer)

    console.log(timeframeContainer)

    return forecastContainer;
}

function changeTimeFrame(timeframe){
    if(timeframe.textContent === "Daily"){
        timeframe.textContent = "Hourly";
    }else{
        timeframe.textContent = "Daily";
    }
}

function setupDom(flag, cityName, locationName, temperature, weather, weatherIcon, windSpeed, feelsLike, humidity, date, high, low){
    try{
        setData(flag, cityName, locationName, temperature, weather, weatherIcon, windSpeed, feelsLike, humidity, date, high, low);
        loadForecast(cityName);
    }catch(error){
      
    }
}

async function getUrl(url){
    let response = await fetch(url, {mode:"cors"})
    
    if(response.ok == false){
        const searchBar = document.querySelector("input");
        
        searchBar.addEventListener("input", ()=>{
            searchBar.setCustomValidity("");
        })
        searchBar.setCustomValidity("Enter a valid city");
        searchBar.reportValidity();
    }else{
        return response;
    }
}

async function loadData(cityName){
    try{
        let response;

        if(isCelsius){
            response = await getUrl(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=84b09d737f032fbf1f5673bd964502c2&units=metric`)
        }else{
            response = await getUrl(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=84b09d737f032fbf1f5673bd964502c2&units=imperial`);
        }
    
        let responseData = await response.json();
        let flag = `https://flagcdn.com/96x72/${(responseData.sys.country).toLowerCase()}.png`;
        let location = responseData.name;
        let temperature = responseData.main.temp;
        let weatherDescription = responseData.weather[0].description;
        let time = responseData.dt;
        let timeZone = responseData.timezone;
        let pressure = responseData.main.pressure;
        let windSpeed = responseData.wind.speed;
        let feelsLike = responseData.main.feels_like;
        let humidity = responseData.main.humidity;
        let country = responseData.sys.country;
        let high = responseData.main.temp_max;
        let low = responseData.main.temp_min;
        let latitude = responseData.coord.lat;
        let longitude = responseData.coord.lon;
        let icon = responseData.weather[0].icon;

        return { flag, icon, location, temperature, weatherDescription, time, windSpeed, feelsLike, humidity, country, timeZone, high, low, pressure, latitude, longitude };

    }catch(error){}
}

async function getCoordinates(cityName){
    try{
        let data = await loadData(cityName)

        return `${data.latitude} ${data.longitude}`;
        
    }catch(error){
    } 
}

async function setData(flag, cityName, name, temperature, weatherDescription, weatherIcon, windSpeed, feelsLike, humidity, date, high, low){
    try{
        let data = await loadData(cityName);
        flag.src = data.flag;
        name.textContent = data.location;
        temperature.textContent = `${Math.round((Number)(data.temperature))}\xB0`
        weatherDescription.textContent = (data.weatherDescription).toUpperCase();

        if(isCelsius){
            windSpeed.textContent = `${Math.round((Number)(data.windSpeed))} km/h`;
        }else{
            windSpeed.textContent = `${Math.round((Number)(data.windSpeed))} mph`;
        }
        feelsLike.textContent = `${Math.round((Number)(data.feelsLike))}\xB0`;
        humidity.textContent = `${data.humidity}%`;
        high.textContent = `H: ${Math.round((Number)(data.high))}\xB0`;
        low.textContent = `L: ${Math.round((Number)(data.low))}\xB0`;
        date.textContent = setDate(data.time, data.timeZone);
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
    }catch(error){
    }
}

function setDate(time, timeZone){
    let dateTokens = new Date((time + timeZone) * 1000).toDateString().split(" ");

    return `${dateTokens[0]}`;
}

function setHour(time, timeZone){
    let dateTokens = new Date((time + timeZone) * 1000).toLocaleTimeString().split(":");
    
    return `${dateTokens[0]}:${dateTokens[1]}`;
}

async function loadForecast(cityName){
    try{
        let coordinates = (await getCoordinates(cityName)).split(" ");
        let data;
    
        if(isCelsius){
            data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&exclude=minutely,alerts&appid=84b09d737f032fbf1f5673bd964502c2&units=metric`, {mode: "cors"})
        }else{
            data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&exclude=minutely,alerts&appid=84b09d737f032fbf1f5673bd964502c2&units=imperial`, {mode: "cors"})
        }
        
        let dataJson = await data.json();
        
        const forecastContainer = document.getElementById("forecast");
    
        const div = document.createElement("div");
        div.classList.add("flexify-column", "forecasts");
    
        const timeframe = document.getElementById("timeframe");
    
        let arr;
    
        if(timeframe.textContent == "Daily"){
            arr = dataJson.daily;
            const chanceOfRain = document.getElementById("chanceOfRain");
            chanceOfRain.textContent = `${(Math.round(((Number)(arr[0].pop)) * 100))}%`
    
        }else{
            let filledArray = dataJson.hourly;
            arr = filledArray.slice(0, 24);
        }
        
        div.innerHTML = null;
    
        if(forecastContainer.children.length > 1){
            forecastContainer.removeChild(forecastContainer.children[1]);
        }
        
        
        arr.forEach(element =>{ 
            const day = document.createElement("div");
            day.classList.add("day");
    
            const date = document.createElement("p");
            const temperature = document.createElement("p");
    
            if(timeframe.textContent == "Daily"){
                temperature.textContent = `${Math.round((Number)(element.temp.day))}\xB0`;
                date.textContent = setDate(element.dt, dataJson.timezone_offset);
            }else{
                temperature.textContent = `${Math.round((Number)(element.temp))}\xB0`;
                date.textContent = setHour(element.dt, dataJson.timezone_offset);
            }
    
            const icon = new Image();
            icon.src = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
    
            day.append(date, temperature, icon);
            div.append(day);
        });
        forecastContainer.append(div);
    }catch(error){
    }
}   


/***/ }),

/***/ "./src/arrow_back.svg":
/*!****************************!*\
  !*** ./src/arrow_back.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fa11f2a159a8d06b05b.svg";

/***/ }),

/***/ "./src/arrow_forward.svg":
/*!*******************************!*\
  !*** ./src/arrow_forward.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d6c7052d8b5d8bc6216.svg";

/***/ }),

/***/ "./src/cloudy.png":
/*!************************!*\
  !*** ./src/cloudy.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d597697efa09e5dbddd1.png";

/***/ }),

/***/ "./src/location.svg":
/*!**************************!*\
  !*** ./src/location.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d84d1476f227b364e066.svg";

/***/ }),

/***/ "./src/rain-drops.png":
/*!****************************!*\
  !*** ./src/rain-drops.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31d33e59aafc78bdc62e.png";

/***/ }),

/***/ "./src/rain.png":
/*!**********************!*\
  !*** ./src/rain.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25ba735c00fe2d279b5d.png";

/***/ }),

/***/ "./src/search.svg":
/*!************************!*\
  !*** ./src/search.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8be5f77cefea839c881.svg";

/***/ }),

/***/ "./src/thermometer.png":
/*!*****************************!*\
  !*** ./src/thermometer.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7489334252f8db93953b.png";

/***/ }),

/***/ "./src/wind.png":
/*!**********************!*\
  !*** ./src/wind.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55d901272d4922b2aa76.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.dom */ "./src/setup.dom.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



(0,_setup_dom__WEBPACK_IMPORTED_MODULE_0__.setupSections)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssZ0VBQWdFLE1BQU0sS0FBSyw2R0FBNkcsU0FBUyx3QkFBd0Isb0JBQW9CLG1CQUFtQixnQ0FBZ0MsZ0JBQWdCLHVCQUF1QixHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIsR0FBRyxlQUFlLG9CQUFvQiwwQkFBMEIscUNBQXFDLHdCQUF3QixtQkFBbUIsb0JBQW9CLGtCQUFrQix1QkFBdUIsR0FBRyxrREFBa0QsZUFBZSxHQUFHLFFBQVEsbUJBQW1CLGtCQUFrQiw2QkFBNkIsR0FBRyxzQkFBc0IsZ0JBQWdCLEdBQUcsK0NBQStDLG9CQUFvQiw2QkFBNkIsd0JBQXdCLGlCQUFpQix3QkFBd0IsbUJBQW1CLDBCQUEwQixzQkFBc0IsR0FBRyxtQkFBbUIsa0NBQWtDLG9CQUFvQixpQkFBaUIsc0JBQXNCLGFBQWEseUJBQXlCLEdBQUcsc0JBQXNCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLHlCQUF5QixHQUFHLDRCQUE0Qix3QkFBd0IsNkJBQTZCLDJCQUEyQixpQkFBaUIsR0FBRywwQkFBMEIsbUJBQW1CLEdBQUcsZUFBZSxvQkFBb0IsMEJBQTBCLG9DQUFvQyxrQkFBa0Isa0JBQWtCLDhCQUE4Qix3QkFBd0IseUJBQXlCLGdDQUFnQyx5QkFBeUIsR0FBRyx1QkFBdUIsbUJBQW1CLGlCQUFpQixHQUFHLGtCQUFrQixvQkFBb0IsMEJBQTBCLEdBQUcsVUFBVSxtQkFBbUIseUJBQXlCLEdBQUcsd0JBQXdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLG1CQUFtQixHQUFHLDBCQUEwQixnQkFBZ0IseUJBQXlCLEdBQUcsMEJBQTBCLDJCQUEyQix5QkFBeUIsb0JBQW9CLG1CQUFtQixHQUFHLG1DQUFtQyw2QkFBNkIsR0FBRyxpQkFBaUIsZ0JBQWdCLHFCQUFxQiwyQkFBMkIsR0FBRywyQkFBMkIsOEJBQThCLG9CQUFvQixxQ0FBcUMsR0FBRyxvQkFBb0Isb0JBQW9CLDRDQUE0Qyx5Q0FBeUMscUJBQXFCLGtCQUFrQixrQkFBa0IseUJBQXlCLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLDBCQUEwQiwwQkFBMEIsZ0NBQWdDLHlCQUF5QixtQkFBbUIsR0FBRyx3Q0FBd0Msa0NBQWtDLEdBQUcsa0JBQWtCLGtCQUFrQixvQkFBb0IsdUNBQXVDLEdBQUcsY0FBYyx5QkFBeUIseUJBQXlCLEdBQUcsa0JBQWtCLHVCQUF1QixzQkFBc0IsK0JBQStCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyx1REFBdUQsb0JBQW9CLG9DQUFvQyx1QkFBdUIsaUJBQWlCLGtCQUFrQixnQ0FBZ0MseUJBQXlCLHlCQUF5QiwwQkFBMEIsNEJBQTRCLEdBQUcseUJBQXlCLDJCQUEyQixtQkFBbUIsR0FBRywyQkFBMkIseUJBQXlCLGtCQUFrQixzQkFBc0IsMEJBQTBCLDBCQUEwQixnQkFBZ0IsR0FBRyw2QkFBNkIsdUJBQXVCLHNCQUFzQix5QkFBeUIsR0FBRyxlQUFlLGtCQUFrQix1QkFBdUIsR0FBRyxTQUFTLG9CQUFvQix5Q0FBeUMsMEJBQTBCLGtCQUFrQiwwQkFBMEIsb0NBQW9DLEdBQUcsV0FBVyx5QkFBeUIsR0FBRyxhQUFhLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLEdBQUcsV0FBVyxvQkFBb0IsMEJBQTBCLHdCQUF3Qix5QkFBeUIscUJBQXFCLDBCQUEwQiwwQkFBMEIseUJBQXlCLDZCQUE2QixrQkFBa0IseUJBQXlCLEdBQUcsT0FBTyx3QkFBd0IsR0FBRyxTQUFTLHlCQUF5QixHQUFHLGVBQWUsaUNBQWlDLEdBQUcsOEJBQThCLG1CQUFtQix3QkFBd0Isd0NBQXdDLE9BQU8sNEJBQTRCLHNCQUFzQiwwQkFBMEIsOEJBQThCLHlCQUF5QiwrQkFBK0IsT0FBTyw2QkFBNkIsOEJBQThCLDZCQUE2QiwyQkFBMkIsNkJBQTZCLE9BQU8saUNBQWlDLHVCQUF1QixzQkFBc0IsT0FBTyxtQkFBbUIsOEJBQThCLDhCQUE4QixzQkFBc0IsT0FBTyx1QkFBdUIsd0JBQXdCLE9BQU8sd0JBQXdCLHVCQUF1QixzQkFBc0IscUJBQXFCLE9BQU8sd0JBQXdCLHFCQUFxQixrQ0FBa0MsMkJBQTJCLE9BQU8sa0JBQWtCLHdCQUF3Qix3QkFBd0IsT0FBTyxvQkFBb0IsOEJBQThCLE9BQU8sV0FBVyxrQ0FBa0MsYUFBYSw4QkFBOEIsT0FBTyxpQkFBaUIsc0JBQXNCLE9BQU8sOEJBQThCLHVCQUF1Qiw4QkFBOEIsT0FBTyxxQkFBcUIsaUNBQWlDLDhCQUE4QixxQkFBcUIsc0JBQXNCLE9BQU8sd0JBQXdCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLE9BQU8sMkJBQTJCLHdCQUF3Qiw2QkFBNkIseUNBQXlDLE9BQU8sc0JBQXNCLDhCQUE4QixrQ0FBa0MsT0FBTywwQkFBMEIsdUJBQXVCLE9BQU8sNEJBQTRCLHVCQUF1QixTQUFTLGdDQUFnQyx1QkFBdUIsT0FBTyxlQUFlLDJCQUEyQiw2QkFBNkIsNkJBQTZCLHNCQUFzQixPQUFPLHNDQUFzQyw0QkFBNEIsMEJBQTBCLFdBQVcsaUNBQWlDLGlDQUFpQyxrQ0FBa0MsNEJBQTRCLFdBQVcsZ0NBQWdDLDRCQUE0QixrQ0FBa0MsV0FBVyx1QkFBdUIsMEJBQTBCLGdDQUFnQyxXQUFXLDRCQUE0QiwrQkFBK0IsMEJBQTBCLFdBQVcseUJBQXlCLGtDQUFrQyxXQUFXLG1CQUFtQixpQ0FBaUMsMEJBQTBCLFdBQVcsT0FBTyxtQ0FBbUMsNEJBQTRCLGlDQUFpQyxXQUFXLDBCQUEwQiwrQkFBK0IsNEJBQTRCLG9EQUFvRCx1Q0FBdUMsMEJBQTBCLCtCQUErQixXQUFXLG9CQUFvQiw0QkFBNEIsMkJBQTJCLFdBQVcsZ0NBQWdDLGtDQUFrQyx3QkFBd0IsUUFBUSxLQUFLLDJDQUEyQztBQUNoOGxCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmtDO0FBQ087QUFDTTtBQUNUO0FBQ047QUFDRjtBQUNVO0FBQ0Y7QUFDUjs7QUFFOUI7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSx3Q0FBSTtBQUNuQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHdDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQ0FBUTtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsc0NBQUk7O0FBRS9CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQUk7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDZDQUFLOztBQUV6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qiw0Q0FBUTs7QUFFL0I7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNENBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsdUJBQXVCLCtDQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlGQUF5RixTQUFTO0FBQ2xHLFNBQVM7QUFDVCx5RkFBeUYsU0FBUztBQUNsRztBQUNBO0FBQ0E7QUFDQSxnREFBZ0QseUNBQXlDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGVBQWUsRUFBRSxlQUFlO0FBQ2xEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1Q0FBdUM7QUFDNUU7O0FBRUE7QUFDQSx1Q0FBdUMsc0NBQXNDO0FBQzdFLFNBQVM7QUFDVCx1Q0FBdUMsc0NBQXNDO0FBQzdFO0FBQ0EsbUNBQW1DLHFDQUFxQztBQUN4RSxrQ0FBa0MsY0FBYztBQUNoRCxpQ0FBaUMsZ0NBQWdDO0FBQ2pFLGdDQUFnQywrQkFBK0I7QUFDL0Q7QUFDQSw4REFBOEQsVUFBVTtBQUN4RSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGNBQWMsY0FBYztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGNBQWMsR0FBRyxjQUFjO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixlQUFlLE9BQU8sZUFBZSxnRkFBZ0YsYUFBYTtBQUN4TixTQUFTO0FBQ1Qsc0ZBQXNGLGVBQWUsT0FBTyxlQUFlLGtGQUFrRixhQUFhO0FBQzFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJDQUEyQztBQUNyRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx1Q0FBdUM7QUFDcEY7QUFDQSxhQUFhO0FBQ2IsNkNBQTZDLG1DQUFtQztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx3QkFBd0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0YkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDdEI7O0FBRXRCLHlEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL3NldHVwLmRvbS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OmFyaWFsO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTM4NmQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmZsZXhpZnktcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleGlmeS1jb2x1bW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi8qT3B0aW9ucyBjb250YWluZXIgc3R5bGVzKi9cXG4ubG9nby1jb250YWluZXJ7XFxuICAgIHdpZHRoOjglO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgcGFkZGluZzogLjNlbSAwIDAgLjNlbTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLypNYWluIGNvbnRhaW5lciBzdHlsZXMqL1xcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLnZlcnRpY2FsLWxpbmV7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICAgIG1hcmdpbjogMWVtIDAgMCAwO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogMTByZW07XFxuICAgIG1heC1oZWlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IC4xZW0gbm9uZSAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICBcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW1ne1xcbiAgICB3aWR0aDogMTIuNSU7XFxufVxcbi53ZWF0aGVyLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sb2NhdGlvbi1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGFne1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgLjVlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIGJ1dHRvbiBzcGFue1xcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVye1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSAwIDAgMDtcXG59XFxuXFxuLmRhdGEtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRhdGEtZGl2OmhvdmVyLCAud2VhdGhlci1kaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWJhZjtcXG59XFxuXFxuLmRhdGEtZGl2IGRpdntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbn1cXG4uZGF0YS1kaXYgcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kYXRhLWRpdiBpbWd7XFxuICAgIG1heC1oZWlnaHQ6IDJyZW07XFxuICAgIG1heC13aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luOiAuMmVtIC4yZW0gMCAuMmVtO1xcbn1cXG5cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVyIGRpdntcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIgZGl2IHB7XFxuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xcbn1cXG5cXG4vKkZvcmVjYXN0IGNvbnRhaW5lciBzdHlsZXMqL1xcbi5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDI5MHB4O1xcbiAgICB3aWR0aDogMjglO1xcbiAgICBoZWlnaHQ6IDk1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmJhYjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogLjVlbSAuNWVtIDAgMDtcXG59XFxuXFxuLnRpbWVmcmFtZS1jb250YWluZXJ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTNyZW07XFxufVxcblxcbi50aW1lZnJhbWUtY29udGFpbmVyIHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMCAwIC41ZW0gMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGltZWZyYW1lLWNvbnRhaW5lciBpbWd7XFxuICAgIG1heC1oZWlnaHQ6IDNyZW07XFxuICAgIG1heC13aWR0aDogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3Rze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmRheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDJmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMCAuNWVtIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uZGF5IHB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmRheSBpbWd7XFxuICAgIG1heC13aWR0aDogNnJlbVxcbn1cXG5cXG4ud2VhdGhlci1kaXYsIC5kYXRhLWRpdntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbnNwYW57XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuc3Bhbjpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XFxuXFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbjogLjVlbSAwO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRpbWVmcmFtZS1jb250YWluZXJ7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGltZWZyYW1lLWNvbnRhaW5lciBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgfVxcblxcbiAgICAuZm9yZWNhc3Rze1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAudmVydGljYWwtbGluZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA4NSU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC5kYXRhLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtZGl2e1xcbiAgICAgICAgcGFkZGluZzogLjJlbTtcXG4gICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtZGl2IHB7XFxuICAgICAgICBtYXJnaW46IDAgMCAxLjVlbSAwO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgfVxcblxcbiAgICAuZGF5e1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGF5IGltZ3tcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItZGl2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgIH1cXG5cXG4gICAgLmxvZ28tY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAud2VhdGhlci1jb250YWluZXJ7XFxuICAgICAgICBoZWlnaHQ6IDE0cmVtO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1kaXZ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWRpdiBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgICAgIGhlaWdodDogODBweDtcXG5cXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tY29udGFpbmVyIGltZ3tcXG4gICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgIH1cXG4vKiBcXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4NDBweCl7XFxuXFxuICAgICAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGltZWZyYW1lLWNvbnRhaW5lcntcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDEyLjUlO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZm9yZWNhc3Rze1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuM2VtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC44ZW07XFxuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud2VhdGhlci1kaXZ7XFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA3MDBweCl7XFxuXFxuICAgICAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRhdGEtZGl2e1xcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH0gKi9cXG59XFxuLypHZW5lcmFsIHN0eWxlcyovXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7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Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7O0lBRWhCOztJQUVBO09BQ0csYUFBYTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E0RE87QUFDUDtBQUNBLGlCQUFpQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OmFyaWFsO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTM4NmQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmZsZXhpZnktcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleGlmeS1jb2x1bW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi8qT3B0aW9ucyBjb250YWluZXIgc3R5bGVzKi9cXG4ubG9nby1jb250YWluZXJ7XFxuICAgIHdpZHRoOjglO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgcGFkZGluZzogLjNlbSAwIDAgLjNlbTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLypNYWluIGNvbnRhaW5lciBzdHlsZXMqL1xcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLnZlcnRpY2FsLWxpbmV7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICAgIG1hcmdpbjogMWVtIDAgMCAwO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogMTByZW07XFxuICAgIG1heC1oZWlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IC4xZW0gbm9uZSAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICBcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW1ne1xcbiAgICB3aWR0aDogMTIuNSU7XFxufVxcbi53ZWF0aGVyLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sb2NhdGlvbi1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGFne1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgLjVlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIGJ1dHRvbiBzcGFue1xcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVye1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSAwIDAgMDtcXG59XFxuXFxuLmRhdGEtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRhdGEtZGl2OmhvdmVyLCAud2VhdGhlci1kaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWJhZjtcXG59XFxuXFxuLmRhdGEtZGl2IGRpdntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbn1cXG4uZGF0YS1kaXYgcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kYXRhLWRpdiBpbWd7XFxuICAgIG1heC1oZWlnaHQ6IDJyZW07XFxuICAgIG1heC13aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luOiAuMmVtIC4yZW0gMCAuMmVtO1xcbn1cXG5cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVyIGRpdntcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIgZGl2IHB7XFxuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xcbn1cXG5cXG4vKkZvcmVjYXN0IGNvbnRhaW5lciBzdHlsZXMqL1xcbi5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDI5MHB4O1xcbiAgICB3aWR0aDogMjglO1xcbiAgICBoZWlnaHQ6IDk1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmJhYjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogLjVlbSAuNWVtIDAgMDtcXG59XFxuXFxuLnRpbWVmcmFtZS1jb250YWluZXJ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTNyZW07XFxufVxcblxcbi50aW1lZnJhbWUtY29udGFpbmVyIHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMCAwIC41ZW0gMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGltZWZyYW1lLWNvbnRhaW5lciBpbWd7XFxuICAgIG1heC1oZWlnaHQ6IDNyZW07XFxuICAgIG1heC13aWR0aDogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3Rze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmRheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDJmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMCAuNWVtIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uZGF5IHB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmRheSBpbWd7XFxuICAgIG1heC13aWR0aDogNnJlbVxcbn1cXG5cXG4ud2VhdGhlci1kaXYsIC5kYXRhLWRpdntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbnNwYW57XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuc3Bhbjpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XFxuXFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbjogLjVlbSAwO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRpbWVmcmFtZS1jb250YWluZXJ7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGltZWZyYW1lLWNvbnRhaW5lciBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgfVxcblxcbiAgICAuZm9yZWNhc3Rze1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAudmVydGljYWwtbGluZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA4NSU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC5kYXRhLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtZGl2e1xcbiAgICAgICAgcGFkZGluZzogLjJlbTtcXG4gICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtZGl2IHB7XFxuICAgICAgICBtYXJnaW46IDAgMCAxLjVlbSAwO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgfVxcblxcbiAgICAuZGF5e1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGF5IGltZ3tcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItZGl2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgIH1cXG5cXG4gICAgLmxvZ28tY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAud2VhdGhlci1jb250YWluZXJ7XFxuICAgICAgICBoZWlnaHQ6IDE0cmVtO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1kaXZ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWRpdiBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgICAgIGhlaWdodDogODBweDtcXG5cXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tY29udGFpbmVyIGltZ3tcXG4gICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgIH1cXG4vKiBcXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4NDBweCl7XFxuXFxuICAgICAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGltZWZyYW1lLWNvbnRhaW5lcntcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDEyLjUlO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZm9yZWNhc3Rze1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuM2VtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC44ZW07XFxuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud2VhdGhlci1kaXZ7XFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA3MDBweCl7XFxuXFxuICAgICAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRhdGEtZGl2e1xcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH0gKi9cXG59XFxuLypHZW5lcmFsIHN0eWxlcyovXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IEJhY2tBcnJvdyBmcm9tIFwiLi9hcnJvd19iYWNrLnN2Z1wiO1xuaW1wb3J0IEZvcndhcmRBcnJvdyBmcm9tIFwiLi9hcnJvd19mb3J3YXJkLnN2Z1wiO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL2xvY2F0aW9uLnN2Z1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vY2xvdWR5LnBuZ1wiO1xuaW1wb3J0IFJhaW4gZnJvbSBcIi4vcmFpbi5wbmdcIjtcbmltcG9ydCBIdW1pZGl0eSBmcm9tIFwiLi9yYWluLWRyb3BzLnBuZ1wiO1xuaW1wb3J0IEZlZWxzIGZyb20gXCIuL3RoZXJtb21ldGVyLnBuZ1wiO1xuaW1wb3J0IFdpbmQgZnJvbSBcIi4vd2luZC5wbmdcIjtcblxubGV0IGlzQ2Vsc2l1cyA9IHRydWU7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFNlY3Rpb25zKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBzZXR1cE9wdGlvbnNDb250YWluZXIoKTtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBzZXR1cE1haW5Db250YWluZXIoKTtcblxuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gc2V0dXBGb3JlY2FzdENvbnRhaW5lcigpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChsb2dvQ29udGFpbmVyLCBtYWluQ29udGFpbmVyLCBmb3JlY2FzdENvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHNldHVwT3B0aW9uc0NvbnRhaW5lcigpe1xuICAgIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udGFpbmVyXCIsIFwiZmxleGlmeS1jb2x1bW5cIik7XG5cbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nby5zcmMgPSBMb2dvO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG5cbiAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZChsb2dvKTtcblxuICAgIHJldHVybiBvcHRpb25zQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzZXR1cE1haW5Db250YWluZXIoKXtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtY29udGFpbmVyXCIsIFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCBzZWFyY2hJY29uID0gbmV3IEltYWdlKCk7XG4gICAgc2VhcmNoSWNvbi5zcmMgPSBTZWFyY2g7XG4gICAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgaWYoc2VhcmNoQmFyLnZhbHVlICE9PSBcIlwiKXtcbiAgICAgICAgICAgIHNldHVwRG9tKGZsYWcsIHNlYXJjaEJhci52YWx1ZSwgbG9jYXRpb25OYW1lLCB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgd2VhdGhlckljb24sIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgZGF0ZSwgaGlnaCwgbG93KTtcbiAgICAgICAgICAgIHNlYXJjaEJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBMb2NhdGlvblwiO1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKT0+e1xuICAgICAgICAgICAgICAgIHNlYXJjaEJhci5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZWFyY2hCYXIuc2V0Q3VzdG9tVmFsaWRpdHkoXCJFbnRlciBhIGNpdHlcIik7XG4gICAgICAgICAgICBzZWFyY2hCYXIucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHNlYXJjaEJhci50eXBlID0gXCJ0ZXh0XCI7XG4gICAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gYFNlYXJjaCBMb2NhdGlvbmA7XG5cbiAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kKHNlYXJjaEJhciwgc2VhcmNoSWNvbik7XG5cbiAgICBjb25zdCBkaXZXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZXZWF0aGVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWRpdlwiKTtcblxuICAgIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItY29udGFpbmVyXCIsIFwiZmxleGlmeS1jb2x1bW5cIik7XG5cbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2NhdGlvbkljb24uc3JjID0gTG9jYXRpb247XG4gICAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkljb25cIik7XG5cbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb2NhdGlvbk5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2NhdGlvblwiKTtcblxuICAgIFxuICAgIGNvbnN0IGZsYWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBmbGFnLmNsYXNzTGlzdC5hZGQoXCJmbGFnXCIpO1xuXG4gICAgY29uc3QgZGl2TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1kaXZcIik7XG5cbiAgICBkaXZMb2NhdGlvbi5hcHBlbmQobG9jYXRpb25JY29uLCBsb2NhdGlvbk5hbWUsIGZsYWcpO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlbXBlcmF0dXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZVwiKTtcblxuICAgIGNvbnN0IGhpZ2hBbmRMb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgaGlnaEFuZExvd0NvbnRhaW5lci5hcHBlbmQoaGlnaCwgbG93KTtcblxuICAgIHRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZCh0ZW1wZXJhdHVyZSwgaGlnaEFuZExvd0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidG5UZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2Vsc2l1cy50ZXh0Q29udGVudCA9IFwiXFx4QjBDXCI7XG4gICAgY2Vsc2l1cy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCI7XG4gICAgY2Vsc2l1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgaXNDZWxzaXVzID0gdHJ1ZTtcbiAgICAgICAgc2V0dXBEb20oZmxhZywgbG9jYXRpb25OYW1lLnRleHRDb250ZW50LCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpO1xuICAgICAgICBjZWxzaXVzLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcbiAgICAgICAgZmFocmVuaGVpdC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGZhaHJlbmhlaXQudGV4dENvbnRlbnQgPSBcIlxceEIwRlwiO1xuICAgIGZhaHJlbmhlaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGlzQ2Vsc2l1cyA9IGZhbHNlO1xuICAgICAgICBzZXR1cERvbShmbGFnLCBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQsIGxvY2F0aW9uTmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyk7XG4gICAgICAgIGNlbHNpdXMuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgZmFocmVuaGVpdC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCI7XG4gICAgfSk7XG5cbiAgICBidG5UZW1wZXJhdHVyZS5hcHBlbmQoY2Vsc2l1cyxcIi9cIiwgZmFocmVuaGVpdCk7XG5cbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZChkaXZMb2NhdGlvbiwgdGVtcGVyYXR1cmVDb250YWluZXIsIGJ0blRlbXBlcmF0dXJlKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZCh3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgZGF0ZSk7XG5cbiAgICBkaXZXZWF0aGVyLmFwcGVuZCh3ZWF0aGVyQ29udGFpbmVyLCBsb2NhdGlvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWNvbnRhaW5lclwiLCBcImZsZXhpZnktcm93XCIpO1xuXG4gICAgY29uc3QgZGl2Q2hhbmNlT2ZSYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDaGFuY2VPZlJhaW4uY2xhc3NMaXN0LmFkZChcImRhdGEtZGl2XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyMS5jbGFzc0xpc3QuYWRkKFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCBjaGFuY2VPZlJhaW5JY29uID0gbmV3IEltYWdlKCk7XG4gICAgY2hhbmNlT2ZSYWluSWNvbi5zcmMgPSBSYWluO1xuXG4gICAgY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlMS50ZXh0Q29udGVudCA9IFwiUChSYWluKVwiO1xuXG4gICAgaGVhZGVyMS5hcHBlbmQoY2hhbmNlT2ZSYWluSWNvbiwgdGl0bGUxKTtcblxuICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNoYW5jZU9mUmFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoYW5jZU9mUmFpblwiKTtcbiAgICBkaXZDaGFuY2VPZlJhaW4uYXBwZW5kKGhlYWRlcjEsIGNoYW5jZU9mUmFpbik7XG5cbiAgICBjb25zdCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIyLmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IHdpbmRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgd2luZEljb24uc3JjID0gV2luZDtcblxuICAgIGNvbnN0IGRpdldpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2V2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWRpdlwiKTtcblxuICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZTIudGV4dENvbnRlbnQgPSBcIldpbmQgU3BlZWRcIjtcblxuICAgIGhlYWRlcjIuYXBwZW5kKHdpbmRJY29uLCB0aXRsZTIpO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBkaXZXaW5kU3BlZWQuYXBwZW5kKGhlYWRlcjIsIHdpbmRTcGVlZCk7XG4gICAgXG4gICAgY29uc3QgZGl2RmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcImRhdGEtZGl2XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyMy5jbGFzc0xpc3QuYWRkKFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCBmZWVsc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBmZWVsc0ljb24uc3JjID0gRmVlbHM7XG5cbiAgICBjb25zdCB0aXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUzLnRleHRDb250ZW50ID0gXCJGZWVscyBMaWtlXCI7XG5cbiAgICBoZWFkZXIzLmFwcGVuZChmZWVsc0ljb24sIHRpdGxlMyk7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGRpdkZlZWxzTGlrZS5hcHBlbmQoaGVhZGVyMywgZmVlbHNMaWtlKTtcblxuICAgIGNvbnN0IGRpdkh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZIdW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiZGF0YS1kaXZcIik7XG5cbiAgICBjb25zdCBoZWFkZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXI0LmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IGh1bWlkaXR5SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGh1bWlkaXR5SWNvbi5zcmMgPSBIdW1pZGl0eTtcblxuICAgIGNvbnN0IHRpdGxlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZTQudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5XCI7XG5cbiAgICBoZWFkZXI0LmFwcGVuZChodW1pZGl0eUljb24sIHRpdGxlNCk7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgZGl2SHVtaWRpdHkuYXBwZW5kKGhlYWRlcjQsIGh1bWlkaXR5KTtcblxuICAgIGRhdGFDb250YWluZXIuYXBwZW5kKGRpdkNoYW5jZU9mUmFpbiwgZGl2V2luZFNwZWVkLCBkaXZGZWVsc0xpa2UsIGRpdkh1bWlkaXR5KTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHNlYXJjaENvbnRhaW5lciwgZGl2V2VhdGhlciwgZGF0YUNvbnRhaW5lcik7XG5cbiAgICBzZXR1cERvbShmbGFnLCBcIkpvaGFubmVzYnVyZ1wiLCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzZXR1cEZvcmVjYXN0Q29udGFpbmVyKCl7XG4gICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcmVjYXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9yZWNhc3RcIik7XG4gICAgZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRpbWVmcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGltZWZyYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lZnJhbWUtY29udGFpbmVyXCIsIFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCB0aW1lZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aW1lZnJhbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aW1lZnJhbWVcIik7XG4gICAgdGltZWZyYW1lLnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xuXG4gICAgY29uc3QgYmFja0Fycm93ID0gbmV3IEltYWdlKCk7XG4gICAgYmFja0Fycm93LnNyYyA9IEJhY2tBcnJvdztcbiAgICBiYWNrQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGNoYW5nZVRpbWVGcmFtZSh0aW1lZnJhbWUpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG4gICAgICAgIGxvYWRGb3JlY2FzdChsb2NhdGlvbi50ZXh0Q29udGVudCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3J3YXJkQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb3J3YXJkQXJyb3cuc3JjID0gRm9yd2FyZEFycm93O1xuICAgIGZvcndhcmRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgY2hhbmdlVGltZUZyYW1lKHRpbWVmcmFtZSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbiAgICAgICAgbG9hZEZvcmVjYXN0KGxvY2F0aW9uLnRleHRDb250ZW50KTtcbiAgICB9KTtcblxuICAgIHRpbWVmcmFtZUNvbnRhaW5lci5hcHBlbmQoYmFja0Fycm93LCB0aW1lZnJhbWUsIGZvcndhcmRBcnJvdyk7XG5cbiAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lZnJhbWVDb250YWluZXIpXG5cbiAgICBjb25zb2xlLmxvZyh0aW1lZnJhbWVDb250YWluZXIpXG5cbiAgICByZXR1cm4gZm9yZWNhc3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRpbWVGcmFtZSh0aW1lZnJhbWUpe1xuICAgIGlmKHRpbWVmcmFtZS50ZXh0Q29udGVudCA9PT0gXCJEYWlseVwiKXtcbiAgICAgICAgdGltZWZyYW1lLnRleHRDb250ZW50ID0gXCJIb3VybHlcIjtcbiAgICB9ZWxzZXtcbiAgICAgICAgdGltZWZyYW1lLnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBEb20oZmxhZywgY2l0eU5hbWUsIGxvY2F0aW9uTmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyl7XG4gICAgdHJ5e1xuICAgICAgICBzZXREYXRhKGZsYWcsIGNpdHlOYW1lLCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpO1xuICAgICAgICBsb2FkRm9yZWNhc3QoY2l0eU5hbWUpO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVybCh1cmwpe1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge21vZGU6XCJjb3JzXCJ9KVxuICAgIFxuICAgIGlmKHJlc3BvbnNlLm9rID09IGZhbHNlKXtcbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICBcbiAgICAgICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKT0+e1xuICAgICAgICAgICAgc2VhcmNoQmFyLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICB9KVxuICAgICAgICBzZWFyY2hCYXIuc2V0Q3VzdG9tVmFsaWRpdHkoXCJFbnRlciBhIHZhbGlkIGNpdHlcIik7XG4gICAgICAgIHNlYXJjaEJhci5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRGF0YShjaXR5TmFtZSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG5cbiAgICAgICAgaWYoaXNDZWxzaXVzKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZ2V0VXJsKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPTg0YjA5ZDczN2YwMzJmYmYxZjU2NzNiZDk2NDUwMmMyJnVuaXRzPW1ldHJpY2ApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBnZXRVcmwoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9ODRiMDlkNzM3ZjAzMmZiZjFmNTY3M2JkOTY0NTAyYzImdW5pdHM9aW1wZXJpYWxgKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBsZXQgZmxhZyA9IGBodHRwczovL2ZsYWdjZG4uY29tLzk2eDcyLyR7KHJlc3BvbnNlRGF0YS5zeXMuY291bnRyeSkudG9Mb3dlckNhc2UoKX0ucG5nYDtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gcmVzcG9uc2VEYXRhLm5hbWU7XG4gICAgICAgIGxldCB0ZW1wZXJhdHVyZSA9IHJlc3BvbnNlRGF0YS5tYWluLnRlbXA7XG4gICAgICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSByZXNwb25zZURhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IHRpbWUgPSByZXNwb25zZURhdGEuZHQ7XG4gICAgICAgIGxldCB0aW1lWm9uZSA9IHJlc3BvbnNlRGF0YS50aW1lem9uZTtcbiAgICAgICAgbGV0IHByZXNzdXJlID0gcmVzcG9uc2VEYXRhLm1haW4ucHJlc3N1cmU7XG4gICAgICAgIGxldCB3aW5kU3BlZWQgPSByZXNwb25zZURhdGEud2luZC5zcGVlZDtcbiAgICAgICAgbGV0IGZlZWxzTGlrZSA9IHJlc3BvbnNlRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gICAgICAgIGxldCBodW1pZGl0eSA9IHJlc3BvbnNlRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgICAgICBsZXQgY291bnRyeSA9IHJlc3BvbnNlRGF0YS5zeXMuY291bnRyeTtcbiAgICAgICAgbGV0IGhpZ2ggPSByZXNwb25zZURhdGEubWFpbi50ZW1wX21heDtcbiAgICAgICAgbGV0IGxvdyA9IHJlc3BvbnNlRGF0YS5tYWluLnRlbXBfbWluO1xuICAgICAgICBsZXQgbGF0aXR1ZGUgPSByZXNwb25zZURhdGEuY29vcmQubGF0O1xuICAgICAgICBsZXQgbG9uZ2l0dWRlID0gcmVzcG9uc2VEYXRhLmNvb3JkLmxvbjtcbiAgICAgICAgbGV0IGljb24gPSByZXNwb25zZURhdGEud2VhdGhlclswXS5pY29uO1xuXG4gICAgICAgIHJldHVybiB7IGZsYWcsIGljb24sIGxvY2F0aW9uLCB0ZW1wZXJhdHVyZSwgd2VhdGhlckRlc2NyaXB0aW9uLCB0aW1lLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGNvdW50cnksIHRpbWVab25lLCBoaWdoLCBsb3csIHByZXNzdXJlLCBsYXRpdHVkZSwgbG9uZ2l0dWRlIH07XG5cbiAgICB9Y2F0Y2goZXJyb3Ipe31cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eU5hbWUpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YShjaXR5TmFtZSlcblxuICAgICAgICByZXR1cm4gYCR7ZGF0YS5sYXRpdHVkZX0gJHtkYXRhLmxvbmdpdHVkZX1gO1xuICAgICAgICBcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgIH0gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldERhdGEoZmxhZywgY2l0eU5hbWUsIG5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyRGVzY3JpcHRpb24sIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGxvYWREYXRhKGNpdHlOYW1lKTtcbiAgICAgICAgZmxhZy5zcmMgPSBkYXRhLmZsYWc7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uO1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS50ZW1wZXJhdHVyZSkpfVxceEIwYFxuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAoZGF0YS53ZWF0aGVyRGVzY3JpcHRpb24pLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYoaXNDZWxzaXVzKXtcbiAgICAgICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS53aW5kU3BlZWQpKX0ga20vaGA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgoTnVtYmVyKShkYXRhLndpbmRTcGVlZCkpfSBtcGhgO1xuICAgICAgICB9XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS5mZWVsc0xpa2UpKX1cXHhCMGA7XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0lYDtcbiAgICAgICAgaGlnaC50ZXh0Q29udGVudCA9IGBIOiAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS5oaWdoKSl9XFx4QjBgO1xuICAgICAgICBsb3cudGV4dENvbnRlbnQgPSBgTDogJHtNYXRoLnJvdW5kKChOdW1iZXIpKGRhdGEubG93KSl9XFx4QjBgO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gc2V0RGF0ZShkYXRhLnRpbWUsIGRhdGEudGltZVpvbmUpO1xuICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDJ4LnBuZ2A7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldERhdGUodGltZSwgdGltZVpvbmUpe1xuICAgIGxldCBkYXRlVG9rZW5zID0gbmV3IERhdGUoKHRpbWUgKyB0aW1lWm9uZSkgKiAxMDAwKS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIik7XG5cbiAgICByZXR1cm4gYCR7ZGF0ZVRva2Vuc1swXX1gO1xufVxuXG5mdW5jdGlvbiBzZXRIb3VyKHRpbWUsIHRpbWVab25lKXtcbiAgICBsZXQgZGF0ZVRva2VucyA9IG5ldyBEYXRlKCh0aW1lICsgdGltZVpvbmUpICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKCkuc3BsaXQoXCI6XCIpO1xuICAgIFxuICAgIHJldHVybiBgJHtkYXRlVG9rZW5zWzBdfToke2RhdGVUb2tlbnNbMV19YDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEZvcmVjYXN0KGNpdHlOYW1lKXtcbiAgICB0cnl7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IChhd2FpdCBnZXRDb29yZGluYXRlcyhjaXR5TmFtZSkpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgXG4gICAgICAgIGlmKGlzQ2Vsc2l1cyl7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9ODRiMDlkNzM3ZjAzMmZiZjFmNTY3M2JkOTY0NTAyYzImdW5pdHM9bWV0cmljYCwge21vZGU6IFwiY29yc1wifSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9ODRiMDlkNzM3ZjAzMmZiZjFmNTY3M2JkOTY0NTAyYzImdW5pdHM9aW1wZXJpYWxgLCB7bW9kZTogXCJjb3JzXCJ9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZGF0YUpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LWNvbHVtblwiLCBcImZvcmVjYXN0c1wiKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGltZWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lZnJhbWVcIik7XG4gICAgXG4gICAgICAgIGxldCBhcnI7XG4gICAgXG4gICAgICAgIGlmKHRpbWVmcmFtZS50ZXh0Q29udGVudCA9PSBcIkRhaWx5XCIpe1xuICAgICAgICAgICAgYXJyID0gZGF0YUpzb24uZGFpbHk7XG4gICAgICAgICAgICBjb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5jZU9mUmFpblwiKTtcbiAgICAgICAgICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAkeyhNYXRoLnJvdW5kKCgoTnVtYmVyKShhcnJbMF0ucG9wKSkgKiAxMDApKX0lYFxuICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBmaWxsZWRBcnJheSA9IGRhdGFKc29uLmhvdXJseTtcbiAgICAgICAgICAgIGFyciA9IGZpbGxlZEFycmF5LnNsaWNlKDAsIDI0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IG51bGw7XG4gICAgXG4gICAgICAgIGlmKGZvcmVjYXN0Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgZm9yZWNhc3RDb250YWluZXIucmVtb3ZlQ2hpbGQoZm9yZWNhc3RDb250YWluZXIuY2hpbGRyZW5bMV0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYXJyLmZvckVhY2goZWxlbWVudCA9PnsgXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIFxuICAgICAgICAgICAgaWYodGltZWZyYW1lLnRleHRDb250ZW50ID09IFwiRGFpbHlcIil7XG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKChOdW1iZXIpKGVsZW1lbnQudGVtcC5kYXkpKX1cXHhCMGA7XG4gICAgICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHNldERhdGUoZWxlbWVudC5kdCwgZGF0YUpzb24udGltZXpvbmVfb2Zmc2V0KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgoTnVtYmVyKShlbGVtZW50LnRlbXApKX1cXHhCMGA7XG4gICAgICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHNldEhvdXIoZWxlbWVudC5kdCwgZGF0YUpzb24udGltZXpvbmVfb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZWxlbWVudC53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgXG4gICAgICAgICAgICBkYXkuYXBwZW5kKGRhdGUsIHRlbXBlcmF0dXJlLCBpY29uKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoZGF5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgfVxufSAgIFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBzZXR1cFNlY3Rpb25zIH0gZnJvbSBcIi4vc2V0dXAuZG9tXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuc2V0dXBTZWN0aW9ucygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==