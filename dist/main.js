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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    font-family:arial;\n    background-color: #19386d;\n    margin: 0;\n}\n\n.flexify-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.flexify-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    width: 100vw;\n    height: 100vh;\n    color: #fff;\n}\n\n/*Options container styles*/\n.logo-container{\n    width:8%;\n}\n.logo{\n    height: 3rem;\n    width: 3rem;\n    padding: .3em 0 0 .3em;\n}\n\n.logo-container p{\n    margin: 0;\n}\n\n/*Main container styles*/\n.main-container{\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    width: 70%;\n    max-width: 700px; \n    min-height: 210px;\n    height: 100%;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.vertical-line{\n    border-left: 3px solid #000;\n    height: 100vh;\n    width: 3px;\n    position: fixed;\n    top: 0;\n    justify-self: left;\n}\n\n.search-container{\n    margin: 1em 0 0 0;\n    width: fit-content;\n    min-width: 10rem;\n    max-height: 2.5rem;\n}\n\n.search-container input{\n    font-size: 1.5rem;\n    border: .1em none #000;\n    border-radius: 5px;  \n    width: 85%;\n}\n\n.search-container img{\n    width: 12.5%;\n}\n.weather-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 30%;\n    width: 100%;\n    min-height: fit-content;\n    margin: 2rem 0 0 0;\n    background-color: #546bab;\n    border-style: none;\n}\n\n.weather-container{\n    height: 100%;\n    width: 50%;\n}\n\n.location-div{\n    display: flex;\n    align-items: center;\n}\n\n.flag{\n    height: 2rem;\n    margin: 0 0 0 .5em;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.location-container p{\n    margin: 0;\n    text-align: center;\n}\n.location-container img{\n    justify-self: center;\n    align-self: center;\n    height: 10rem;\n    width: 10rem;\n}\n\n.weather-container button span{\n    padding: 0 1rem 0 1rem;\n}\n\n.temperature{\n    margin: 0;\n    font-size:5rem;\n    justify-self: center;\n}\n\n.temperature-container{\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.data-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 1rem;\n    height: 40%;\n    width: 100%;\n    margin: 2rem 0 0 0;\n}\n\n.data-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    background-color: #546bab;\n    border-style: none;\n    height: 100%;\n}\n\n.data-div:hover, .weather-div:hover{\n    background-color: #546babaf;\n}\n\n.data-div div{\n    width: 100%;\n    display: grid;\n    grid-template-columns: auto auto;\n}\n.data-div p{\n    text-align: center;\n    align-self: center;\n}\n\n.data-div img{\n    max-height: 2rem;\n    max-width: 2rem;\n    margin: .2em .2em 0 .2em;\n}\n\n\n.temperature-container div{\n    font-size: 1.5rem;\n}\n\n.temperature-container div p{\n    margin: 5px 0 0 0;\n}\n\n/*Forecast container styles*/\n.forecast-container{\n    display: grid;\n    grid-template-rows: auto auto;\n    max-width: 290px;\n    width: 28%;\n    height: 95%;\n    background-color: #546bab;\n    border-style: none;\n    border-color: #000;\n    border-radius: 10px;\n    margin: .5em .5em 0 0;\n}\n\n.timeframe-container{\n    justify-self: center;\n    width: 13rem;\n}\n\n.timeframe-container p{\n    text-align: center;\n    width: 6rem;\n    font-size: 2rem;\n    height: fit-content;\n    padding: 0 0 .5em 0;\n    margin: 0;\n}\n\n.timeframe-container img{\n    max-height: 3rem;\n    max-width: 3rem;\n    text-align: center;\n}\n\n.forecasts{\n    width: 100%;\n    overflow-y: auto;\n}\n\n.day{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    align-items: center;\n    width: 100%;\n    padding: 0 0 .5em 0;\n    border-bottom: 2px solid #fff;\n}\n\n.day p{\n    padding-left: 20px;\n}\n\n.day img{\n    max-width: 6rem\n}\n\n.weather-div, .data-div{\n    border-radius: 20px;\n}\n\nbutton{\n    display: flex;\n    flex-direction: row;\n    font-size: 1.5rem;\n    width: fit-content;\n    height: 2.5rem;\n    margin-bottom: 30px;\n    border-radius: 15px;\n    border-style: none;\n    background-color: #fff;\n    color: #000;\n    align-self: center;\n}\n\nh1{\n    font-size: 1.5rem;\n}\n\nspan{\n    width: fit-content;\n}\n\nspan:hover{\n    text-decoration: underline;\n}\n\n@media (max-width: 767px){\n\n    .container{\n        flex-direction: column;\n        align-items: center;\n        height: 100vh;\n        width: 100vw;\n    }\n\n    .forecast-container{\n        width: 90vw;\n        max-width: 90vw;\n        height: 15%;\n        margin: 0 0 2.5rem 0;\n    }\n\n    .timeframe-container{\n        position: absolute;\n        margin-left: 2em;\n        height: 10%;\n        width: fit-content;\n        margin-top: .5em;\n        align-self: center;\n    }\n\n    .timeframe-container img{\n        height: 2rem;\n        width: 2rem;\n    }\n\n    .forecasts{\n        flex-direction: row;\n        height: fit-content;\n        margin-top: 2em;\n        width: 100%;\n    }\n\n    .vertical-line{\n        display: none;\n    }\n\n    .main-container{\n        width: 100vw;\n        height: 80%;\n        padding: 0;\n    }\n\n    .data-container{\n        width: 90%;\n        height: fit-content;\n        margin-top: .5em;\n    }\n\n    .data-div{\n        padding: .2em;\n        height: 130px;\n    }\n\n    .data-div p{\n        margin: 0 0 1.5em 0;\n    }\n\n    h1{\n        font-size: 1.2rem\n    }\n\n    .day{\n        border-bottom: none;\n    }\n\n    .day img{\n        width: 3rem;\n    }\n    \n    .search-container{\n        width: 15rem;\n        margin-left: 2.5rem;\n    }\n\n    .weather-div{\n        flex-direction: column;\n        align-items: center;\n        width: 90%;\n        height: 40%;\n    }\n    .logo-container{\n        position: absolute;\n        left: 0;\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .weather-container{\n        height: 14rem;\n        width: fit-content;\n        justify-content: space-between;\n    }\n\n    .location-div{\n        align-items: center;\n        justify-content: center;\n    }\n\n    .location-div img{\n        height: 2rem;\n    }\n\n    .location-container{\n        height: 80px;\n\n    }\n\n    .location-container img{\n       display: none;\n    }\n\n    button{\n        margin-bottom: 0;\n        align-self: center;\n        width: fit-content;\n        color: #000;\n    }\n\n    @media (max-height: 825px){\n\n        .main-container{\n            height: 85%;\n        }\n\n        .timeframe-container{\n            align-self: center;\n            height: fit-content;\n        }\n\n        .forecast-container{\n            height: 15%;\n            margin: 0;\n            margin-bottom: .5em;\n        }\n\n        .forecasts{\n            height: 100;\n            margin-top: 1.3em;\n        }\n\n        .data-container{\n            margin-top: .8em;\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            grid-template-rows: none;\n            width: 90vw;\n            overflow-y: auto;\n        }\n\n        .weather-div{\n            height: fit-content;\n        }\n\n        .data-div{\n            height: 110px;\n            width: 135px;\n        }\n\n        button{\n            width: fit-content;\n            color: #000;\n        }\n    }\n}\n/*General styles*/\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');\n\nbody{\n    font-family:arial;\n    background-color: #19386d;\n    margin: 0;\n}\n\n.flexify-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.flexify-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    width: 100vw;\n    height: 100vh;\n    color: #fff;\n}\n\n/*Options container styles*/\n.logo-container{\n    width:8%;\n}\n.logo{\n    height: 3rem;\n    width: 3rem;\n    padding: .3em 0 0 .3em;\n}\n\n.logo-container p{\n    margin: 0;\n}\n\n/*Main container styles*/\n.main-container{\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    width: 70%;\n    max-width: 700px; \n    min-height: 210px;\n    height: 100%;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.vertical-line{\n    border-left: 3px solid #000;\n    height: 100vh;\n    width: 3px;\n    position: fixed;\n    top: 0;\n    justify-self: left;\n}\n\n.search-container{\n    margin: 1em 0 0 0;\n    width: fit-content;\n    min-width: 10rem;\n    max-height: 2.5rem;\n}\n\n.search-container input{\n    font-size: 1.5rem;\n    border: .1em none #000;\n    border-radius: 5px;  \n    width: 85%;\n}\n\n.search-container img{\n    width: 12.5%;\n}\n.weather-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 30%;\n    width: 100%;\n    min-height: fit-content;\n    margin: 2rem 0 0 0;\n    background-color: #546bab;\n    border-style: none;\n}\n\n.weather-container{\n    height: 100%;\n    width: 50%;\n}\n\n.location-div{\n    display: flex;\n    align-items: center;\n}\n\n.flag{\n    height: 2rem;\n    margin: 0 0 0 .5em;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.location-container p{\n    margin: 0;\n    text-align: center;\n}\n.location-container img{\n    justify-self: center;\n    align-self: center;\n    height: 10rem;\n    width: 10rem;\n}\n\n.weather-container button span{\n    padding: 0 1rem 0 1rem;\n}\n\n.temperature{\n    margin: 0;\n    font-size:5rem;\n    justify-self: center;\n}\n\n.temperature-container{\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.data-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 1rem;\n    height: 40%;\n    width: 100%;\n    margin: 2rem 0 0 0;\n}\n\n.data-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    background-color: #546bab;\n    border-style: none;\n    height: 100%;\n}\n\n.data-div:hover, .weather-div:hover{\n    background-color: #546babaf;\n}\n\n.data-div div{\n    width: 100%;\n    display: grid;\n    grid-template-columns: auto auto;\n}\n.data-div p{\n    text-align: center;\n    align-self: center;\n}\n\n.data-div img{\n    max-height: 2rem;\n    max-width: 2rem;\n    margin: .2em .2em 0 .2em;\n}\n\n\n.temperature-container div{\n    font-size: 1.5rem;\n}\n\n.temperature-container div p{\n    margin: 5px 0 0 0;\n}\n\n/*Forecast container styles*/\n.forecast-container{\n    display: grid;\n    grid-template-rows: auto auto;\n    max-width: 290px;\n    width: 28%;\n    height: 95%;\n    background-color: #546bab;\n    border-style: none;\n    border-color: #000;\n    border-radius: 10px;\n    margin: .5em .5em 0 0;\n}\n\n.timeframe-container{\n    justify-self: center;\n    width: 13rem;\n}\n\n.timeframe-container p{\n    text-align: center;\n    width: 6rem;\n    font-size: 2rem;\n    height: fit-content;\n    padding: 0 0 .5em 0;\n    margin: 0;\n}\n\n.timeframe-container img{\n    max-height: 3rem;\n    max-width: 3rem;\n    text-align: center;\n}\n\n.forecasts{\n    width: 100%;\n    overflow-y: auto;\n}\n\n.day{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    align-items: center;\n    width: 100%;\n    padding: 0 0 .5em 0;\n    border-bottom: 2px solid #fff;\n}\n\n.day p{\n    padding-left: 20px;\n}\n\n.day img{\n    max-width: 6rem\n}\n\n.weather-div, .data-div{\n    border-radius: 20px;\n}\n\nbutton{\n    display: flex;\n    flex-direction: row;\n    font-size: 1.5rem;\n    width: fit-content;\n    height: 2.5rem;\n    margin-bottom: 30px;\n    border-radius: 15px;\n    border-style: none;\n    background-color: #fff;\n    color: #000;\n    align-self: center;\n}\n\nh1{\n    font-size: 1.5rem;\n}\n\nspan{\n    width: fit-content;\n}\n\nspan:hover{\n    text-decoration: underline;\n}\n\n@media (max-width: 767px){\n\n    .container{\n        flex-direction: column;\n        align-items: center;\n        height: 100vh;\n        width: 100vw;\n    }\n\n    .forecast-container{\n        width: 90vw;\n        max-width: 90vw;\n        height: 15%;\n        margin: 0 0 2.5rem 0;\n    }\n\n    .timeframe-container{\n        position: absolute;\n        margin-left: 2em;\n        height: 10%;\n        width: fit-content;\n        margin-top: .5em;\n        align-self: center;\n    }\n\n    .timeframe-container img{\n        height: 2rem;\n        width: 2rem;\n    }\n\n    .forecasts{\n        flex-direction: row;\n        height: fit-content;\n        margin-top: 2em;\n        width: 100%;\n    }\n\n    .vertical-line{\n        display: none;\n    }\n\n    .main-container{\n        width: 100vw;\n        height: 80%;\n        padding: 0;\n    }\n\n    .data-container{\n        width: 90%;\n        height: fit-content;\n        margin-top: .5em;\n    }\n\n    .data-div{\n        padding: .2em;\n        height: 130px;\n    }\n\n    .data-div p{\n        margin: 0 0 1.5em 0;\n    }\n\n    h1{\n        font-size: 1.2rem\n    }\n\n    .day{\n        border-bottom: none;\n    }\n\n    .day img{\n        width: 3rem;\n    }\n    \n    .search-container{\n        width: 15rem;\n        margin-left: 2.5rem;\n    }\n\n    .weather-div{\n        flex-direction: column;\n        align-items: center;\n        width: 90%;\n        height: 40%;\n    }\n    .logo-container{\n        position: absolute;\n        left: 0;\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .weather-container{\n        height: 14rem;\n        width: fit-content;\n        justify-content: space-between;\n    }\n\n    .location-div{\n        align-items: center;\n        justify-content: center;\n    }\n\n    .location-div img{\n        height: 2rem;\n    }\n\n    .location-container{\n        height: 80px;\n\n    }\n\n    .location-container img{\n       display: none;\n    }\n\n    button{\n        margin-bottom: 0;\n        align-self: center;\n        width: fit-content;\n        color: #000;\n    }\n\n    @media (max-height: 825px){\n\n        .main-container{\n            height: 85%;\n        }\n\n        .timeframe-container{\n            align-self: center;\n            height: fit-content;\n        }\n\n        .forecast-container{\n            height: 15%;\n            margin: 0;\n            margin-bottom: .5em;\n        }\n\n        .forecasts{\n            height: 100;\n            margin-top: 1.3em;\n        }\n\n        .data-container{\n            margin-top: .8em;\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            grid-template-rows: none;\n            width: 90vw;\n            overflow-y: auto;\n        }\n\n        .weather-div{\n            height: fit-content;\n        }\n\n        .data-div{\n            height: 110px;\n            width: 135px;\n        }\n\n        button{\n            width: fit-content;\n            color: #000;\n        }\n    }\n}\n/*General styles*/\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxL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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDdEI7O0FBRXRCLHlEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL3NldHVwLmRvbS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OmFyaWFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzODZkO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5mbGV4aWZ5LXJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXhpZnktY29sdW1ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKk9wdGlvbnMgY29udGFpbmVyIHN0eWxlcyovXFxuLmxvZ28tY29udGFpbmVye1xcbiAgICB3aWR0aDo4JTtcXG59XFxuLmxvZ297XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIHBhZGRpbmc6IC4zZW0gMCAwIC4zZW07XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qTWFpbiBjb250YWluZXIgc3R5bGVzKi9cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4OyBcXG4gICAgbWluLWhlaWdodDogMjEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4udmVydGljYWwtbGluZXtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcXG4gICAgbWF4LWhlaWdodDogMi41cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogLjFlbSBub25lICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciBpbWd7XFxuICAgIHdpZHRoOiAxMi41JTtcXG59XFxuLndlYXRoZXItZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAycmVtIDAgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ubG9jYXRpb24tZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxhZ3tcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW46IDAgMCAwIC41ZW07XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIgcHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sb2NhdGlvbi1jb250YWluZXIgaW1ne1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lciBidXR0b24gc3BhbntcXG4gICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJle1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTo1cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lcntcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG59XFxuXFxuLmRhdGEtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxufVxcblxcbi5kYXRhLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmJhYjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXRhLWRpdjpob3ZlciwgLndlYXRoZXItZGl2OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiYWY7XFxufVxcblxcbi5kYXRhLWRpdiBkaXZ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuLmRhdGEtZGl2IHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZGF0YS1kaXYgaW1ne1xcbiAgICBtYXgtaGVpZ2h0OiAycmVtO1xcbiAgICBtYXgtd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbjogLjJlbSAuMmVtIDAgLjJlbTtcXG59XFxuXFxuXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVyIGRpdiBwe1xcbiAgICBtYXJnaW46IDVweCAwIDAgMDtcXG59XFxuXFxuLypGb3JlY2FzdCBjb250YWluZXIgc3R5bGVzKi9cXG4uZm9yZWNhc3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgbWF4LXdpZHRoOiAyOTBweDtcXG4gICAgd2lkdGg6IDI4JTtcXG4gICAgaGVpZ2h0OiA5NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IC41ZW0gLjVlbSAwIDA7XFxufVxcblxcbi50aW1lZnJhbWUtY29udGFpbmVye1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbn1cXG5cXG4udGltZWZyYW1lLWNvbnRhaW5lciBwe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDAgMCAuNWVtIDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRpbWVmcmFtZS1jb250YWluZXIgaW1ne1xcbiAgICBtYXgtaGVpZ2h0OiAzcmVtO1xcbiAgICBtYXgtd2lkdGg6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0c3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5kYXl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAyZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDAgLjVlbSAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxuLmRheSBwe1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5kYXkgaW1ne1xcbiAgICBtYXgtd2lkdGg6IDZyZW1cXG59XFxuXFxuLndlYXRoZXItZGl2LCAuZGF0YS1kaXZ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5zcGFue1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbnNwYW46aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xcblxcbiAgICAuY29udGFpbmVye1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcXG4gICAgICAgIGhlaWdodDogMTUlO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMi41cmVtIDA7XFxuICAgIH1cXG5cXG4gICAgLnRpbWVmcmFtZS1jb250YWluZXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxMCU7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC50aW1lZnJhbWUtY29udGFpbmVyIGltZ3tcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5mb3JlY2FzdHN7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC52ZXJ0aWNhbC1saW5le1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5kYXRhLWRpdntcXG4gICAgICAgIHBhZGRpbmc6IC4yZW07XFxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5kYXRhLWRpdiBwe1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMS41ZW0gMDtcXG4gICAgfVxcblxcbiAgICBoMXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXFxuICAgIH1cXG5cXG4gICAgLmRheXtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmRheSBpbWd7XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNlYXJjaC1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTVyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgICB9XFxuXFxuICAgIC53ZWF0aGVyLWRpdntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogNDAlO1xcbiAgICB9XFxuICAgIC5sb2dvLWNvbnRhaW5lcntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC53ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgICAgIGhlaWdodDogMTRyZW07XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWRpdntcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tZGl2IGltZ3tcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tY29udGFpbmVye1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcblxcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1jb250YWluZXIgaW1ne1xcbiAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBjb2xvcjogIzAwMDtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDgyNXB4KXtcXG5cXG4gICAgICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDg1JTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50aW1lZnJhbWUtY29udGFpbmVye1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5mb3JlY2FzdHN7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDA7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4zZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGF0YS1jb250YWluZXJ7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjhlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud2VhdGhlci1kaXZ7XFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kYXRhLWRpdntcXG4gICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMzVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuLypHZW5lcmFsIHN0eWxlcyovXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLFFBQVE7QUFDWjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFB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UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7O0lBRUE7O1FBRUk7WUFDSSxXQUFXO1FBQ2Y7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsbUJBQW1CO1FBQ3ZCOztRQUVBO1lBQ0ksV0FBVztZQUNYLFNBQVM7WUFDVCxtQkFBbUI7UUFDdkI7O1FBRUE7WUFDSSxXQUFXO1lBQ1gsaUJBQWlCO1FBQ3JCOztRQUVBO1lBQ0ksZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixxQ0FBcUM7WUFDckMsd0JBQXdCO1lBQ3hCLFdBQVc7WUFDWCxnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxtQkFBbUI7UUFDdkI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixXQUFXO1FBQ2Y7SUFDSjtBQUNKO0FBQ0EsaUJBQWlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZyZWRva2EmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6YXJpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTM4NmQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmZsZXhpZnktcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleGlmeS1jb2x1bW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qT3B0aW9ucyBjb250YWluZXIgc3R5bGVzKi9cXG4ubG9nby1jb250YWluZXJ7XFxuICAgIHdpZHRoOjglO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgcGFkZGluZzogLjNlbSAwIDAgLjNlbTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLypNYWluIGNvbnRhaW5lciBzdHlsZXMqL1xcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7IFxcbiAgICBtaW4taGVpZ2h0OiAyMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi52ZXJ0aWNhbC1saW5le1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAuMWVtIG5vbmUgIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgXFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGltZ3tcXG4gICAgd2lkdGg6IDEyLjUlO1xcbn1cXG4ud2VhdGhlci1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sb2NhdGlvbi1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGFne1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgLjVlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIGJ1dHRvbiBzcGFue1xcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVye1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSAwIDAgMDtcXG59XFxuXFxuLmRhdGEtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRhdGEtZGl2OmhvdmVyLCAud2VhdGhlci1kaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWJhZjtcXG59XFxuXFxuLmRhdGEtZGl2IGRpdntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbn1cXG4uZGF0YS1kaXYgcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kYXRhLWRpdiBpbWd7XFxuICAgIG1heC1oZWlnaHQ6IDJyZW07XFxuICAgIG1heC13aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luOiAuMmVtIC4yZW0gMCAuMmVtO1xcbn1cXG5cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVyIGRpdntcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIgZGl2IHB7XFxuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xcbn1cXG5cXG4vKkZvcmVjYXN0IGNvbnRhaW5lciBzdHlsZXMqL1xcbi5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDI5MHB4O1xcbiAgICB3aWR0aDogMjglO1xcbiAgICBoZWlnaHQ6IDk1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmJhYjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogLjVlbSAuNWVtIDAgMDtcXG59XFxuXFxuLnRpbWVmcmFtZS1jb250YWluZXJ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTNyZW07XFxufVxcblxcbi50aW1lZnJhbWUtY29udGFpbmVyIHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMCAwIC41ZW0gMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGltZWZyYW1lLWNvbnRhaW5lciBpbWd7XFxuICAgIG1heC1oZWlnaHQ6IDNyZW07XFxuICAgIG1heC13aWR0aDogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3Rze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmRheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDJmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMCAuNWVtIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uZGF5IHB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmRheSBpbWd7XFxuICAgIG1heC13aWR0aDogNnJlbVxcbn1cXG5cXG4ud2VhdGhlci1kaXYsIC5kYXRhLWRpdntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbnNwYW57XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuc3Bhbjpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XFxuXFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxNSU7XFxuICAgICAgICBtYXJnaW46IDAgMCAyLjVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAudGltZWZyYW1lLWNvbnRhaW5lcntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxuICAgICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRpbWVmcmFtZS1jb250YWluZXIgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0c3tcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnZlcnRpY2FsLWxpbmV7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAuZGF0YS1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtZGl2e1xcbiAgICAgICAgcGFkZGluZzogLjJlbTtcXG4gICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtZGl2IHB7XFxuICAgICAgICBtYXJnaW46IDAgMCAxLjVlbSAwO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgfVxcblxcbiAgICAuZGF5e1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGF5IGltZ3tcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItZGl2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgIH1cXG4gICAgLmxvZ28tY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItY29udGFpbmVye1xcbiAgICAgICAgaGVpZ2h0OiAxNHJlbTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tZGl2e1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1kaXYgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1jb250YWluZXJ7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LWhlaWdodDogODI1cHgpe1xcblxcbiAgICAgICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogODUlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRpbWVmcmFtZS1jb250YWluZXJ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZm9yZWNhc3QtY29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogMTUlO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0c3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjNlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kYXRhLWNvbnRhaW5lcntcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuOGVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC53ZWF0aGVyLWRpdntcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRhdGEtZGl2e1xcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4vKkdlbmVyYWwgc3R5bGVzKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9zZWFyY2guc3ZnXCI7XG5pbXBvcnQgQmFja0Fycm93IGZyb20gXCIuL2Fycm93X2JhY2suc3ZnXCI7XG5pbXBvcnQgRm9yd2FyZEFycm93IGZyb20gXCIuL2Fycm93X2ZvcndhcmQuc3ZnXCI7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vbG9jYXRpb24uc3ZnXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9jbG91ZHkucG5nXCI7XG5pbXBvcnQgUmFpbiBmcm9tIFwiLi9yYWluLnBuZ1wiO1xuaW1wb3J0IEh1bWlkaXR5IGZyb20gXCIuL3JhaW4tZHJvcHMucG5nXCI7XG5pbXBvcnQgRmVlbHMgZnJvbSBcIi4vdGhlcm1vbWV0ZXIucG5nXCI7XG5pbXBvcnQgV2luZCBmcm9tIFwiLi93aW5kLnBuZ1wiO1xuXG5sZXQgaXNDZWxzaXVzID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwU2VjdGlvbnMoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IHNldHVwT3B0aW9uc0NvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IHNldHVwTWFpbkNvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBzZXR1cEZvcmVjYXN0Q29udGFpbmVyKCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxvZ29Db250YWluZXIsIG1haW5Db250YWluZXIsIGZvcmVjYXN0Q29udGFpbmVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBPcHRpb25zQ29udGFpbmVyKCl7XG4gICAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nby1jb250YWluZXJcIiwgXCJmbGV4aWZ5LWNvbHVtblwiKTtcblxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IExvZ287XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcblxuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kKGxvZ28pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNldHVwTWFpbkNvbnRhaW5lcigpe1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1jb250YWluZXJcIiwgXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBzZWFyY2hJY29uLnNyYyA9IFNlYXJjaDtcbiAgICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBpZihzZWFyY2hCYXIudmFsdWUgIT09IFwiXCIpe1xuICAgICAgICAgICAgc2V0dXBEb20oZmxhZywgc2VhcmNoQmFyLnZhbHVlLCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpO1xuICAgICAgICAgICAgc2VhcmNoQmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIExvY2F0aW9uXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpPT57XG4gICAgICAgICAgICAgICAgc2VhcmNoQmFyLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlYXJjaEJhci5zZXRDdXN0b21WYWxpZGl0eShcIkVudGVyIGEgY2l0eVwiKTtcbiAgICAgICAgICAgIHNlYXJjaEJhci5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc2VhcmNoQmFyLnR5cGUgPSBcInRleHRcIjtcbiAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSBgU2VhcmNoIExvY2F0aW9uYDtcblxuICAgIHNlYXJjaENvbnRhaW5lci5hcHBlbmQoc2VhcmNoQmFyLCBzZWFyY2hJY29uKTtcblxuICAgIGNvbnN0IGRpdldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdldlYXRoZXIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZGl2XCIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb250YWluZXJcIiwgXCJmbGV4aWZ5LWNvbHVtblwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uSWNvbi5zcmMgPSBMb2NhdGlvbjtcbiAgICBsb2NhdGlvbkljb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uSWNvblwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvY2F0aW9uTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvY2F0aW9uXCIpO1xuXG4gICAgXG4gICAgY29uc3QgZmxhZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZsYWcuY2xhc3NMaXN0LmFkZChcImZsYWdcIik7XG5cbiAgICBjb25zdCBkaXZMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWRpdlwiKTtcblxuICAgIGRpdkxvY2F0aW9uLmFwcGVuZChsb2NhdGlvbkljb24sIGxvY2F0aW9uTmFtZSwgZmxhZyk7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVtcGVyYXR1cmVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpO1xuXG4gICAgY29uc3QgaGlnaEFuZExvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBoaWdoQW5kTG93Q29udGFpbmVyLmFwcGVuZChoaWdoLCBsb3cpO1xuXG4gICAgdGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kKHRlbXBlcmF0dXJlLCBoaWdoQW5kTG93Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ0blRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnN0IGNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjZWxzaXVzLnRleHRDb250ZW50ID0gXCJcXHhCMENcIjtcbiAgICBjZWxzaXVzLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcbiAgICBjZWxzaXVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBpc0NlbHNpdXMgPSB0cnVlO1xuICAgICAgICBzZXR1cERvbShmbGFnLCBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQsIGxvY2F0aW9uTmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyk7XG4gICAgICAgIGNlbHNpdXMuc3R5bGUudGV4dERlY29yYXRpb24gPSBcInVuZGVybGluZVwiO1xuICAgICAgICBmYWhyZW5oZWl0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZmFocmVuaGVpdC50ZXh0Q29udGVudCA9IFwiXFx4QjBGXCI7XG4gICAgZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgaXNDZWxzaXVzID0gZmFsc2U7XG4gICAgICAgIHNldHVwRG9tKGZsYWcsIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCwgbG9jYXRpb25OYW1lLCB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgd2VhdGhlckljb24sIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgZGF0ZSwgaGlnaCwgbG93KTtcbiAgICAgICAgY2Vsc2l1cy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICBmYWhyZW5oZWl0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcbiAgICB9KTtcblxuICAgIGJ0blRlbXBlcmF0dXJlLmFwcGVuZChjZWxzaXVzLFwiL1wiLCBmYWhyZW5oZWl0KTtcblxuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kKGRpdkxvY2F0aW9uLCB0ZW1wZXJhdHVyZUNvbnRhaW5lciwgYnRuVGVtcGVyYXR1cmUpO1xuXG4gICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kKHdlYXRoZXIsIHdlYXRoZXJJY29uLCBkYXRlKTtcblxuICAgIGRpdldlYXRoZXIuYXBwZW5kKHdlYXRoZXJDb250YWluZXIsIGxvY2F0aW9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGEtY29udGFpbmVyXCIsIFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCBkaXZDaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkNoYW5jZU9mUmFpbi5jbGFzc0xpc3QuYWRkKFwiZGF0YS1kaXZcIik7XG5cbiAgICBjb25zdCBoZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIxLmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IGNoYW5jZU9mUmFpbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGFuY2VPZlJhaW5JY29uLnNyYyA9IFJhaW47XG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUxLnRleHRDb250ZW50ID0gXCJQKFJhaW4pXCI7XG5cbiAgICBoZWFkZXIxLmFwcGVuZChjaGFuY2VPZlJhaW5JY29uLCB0aXRsZTEpO1xuXG4gICAgY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2hhbmNlT2ZSYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hhbmNlT2ZSYWluXCIpO1xuICAgIGRpdkNoYW5jZU9mUmFpbi5hcHBlbmQoaGVhZGVyMSwgY2hhbmNlT2ZSYWluKTtcblxuICAgIGNvbnN0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcjIuY2xhc3NMaXN0LmFkZChcImZsZXhpZnktcm93XCIpO1xuXG4gICAgY29uc3Qgd2luZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB3aW5kSWNvbi5zcmMgPSBXaW5kO1xuXG4gICAgY29uc3QgZGl2V2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZXaW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcImRhdGEtZGl2XCIpO1xuXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlMi50ZXh0Q29udGVudCA9IFwiV2luZCBTcGVlZFwiO1xuXG4gICAgaGVhZGVyMi5hcHBlbmQod2luZEljb24sIHRpdGxlMik7XG5cbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGRpdldpbmRTcGVlZC5hcHBlbmQoaGVhZGVyMiwgd2luZFNwZWVkKTtcbiAgICBcbiAgICBjb25zdCBkaXZGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKFwiZGF0YS1kaXZcIik7XG5cbiAgICBjb25zdCBoZWFkZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIzLmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IGZlZWxzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGZlZWxzSWNvbi5zcmMgPSBGZWVscztcblxuICAgIGNvbnN0IHRpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZTMudGV4dENvbnRlbnQgPSBcIkZlZWxzIExpa2VcIjtcblxuICAgIGhlYWRlcjMuYXBwZW5kKGZlZWxzSWNvbiwgdGl0bGUzKTtcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgZGl2RmVlbHNMaWtlLmFwcGVuZChoZWFkZXIzLCBmZWVsc0xpa2UpO1xuXG4gICAgY29uc3QgZGl2SHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJkYXRhLWRpdlwiKTtcblxuICAgIGNvbnN0IGhlYWRlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcjQuY2xhc3NMaXN0LmFkZChcImZsZXhpZnktcm93XCIpO1xuXG4gICAgY29uc3QgaHVtaWRpdHlJY29uID0gbmV3IEltYWdlKCk7XG4gICAgaHVtaWRpdHlJY29uLnNyYyA9IEh1bWlkaXR5O1xuXG4gICAgY29uc3QgdGl0bGU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlNC50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHlcIjtcblxuICAgIGhlYWRlcjQuYXBwZW5kKGh1bWlkaXR5SWNvbiwgdGl0bGU0KTtcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBkaXZIdW1pZGl0eS5hcHBlbmQoaGVhZGVyNCwgaHVtaWRpdHkpO1xuXG4gICAgZGF0YUNvbnRhaW5lci5hcHBlbmQoZGl2Q2hhbmNlT2ZSYWluLCBkaXZXaW5kU3BlZWQsIGRpdkZlZWxzTGlrZSwgZGl2SHVtaWRpdHkpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoc2VhcmNoQ29udGFpbmVyLCBkaXZXZWF0aGVyLCBkYXRhQ29udGFpbmVyKTtcblxuICAgIHNldHVwRG9tKGZsYWcsIFwiSm9oYW5uZXNidXJnXCIsIGxvY2F0aW9uTmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyk7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNldHVwRm9yZWNhc3RDb250YWluZXIoKXtcbiAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9yZWNhc3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JlY2FzdFwiKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGltZWZyYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aW1lZnJhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWVmcmFtZS1jb250YWluZXJcIiwgXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IHRpbWVmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpbWVmcmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpbWVmcmFtZVwiKTtcbiAgICB0aW1lZnJhbWUudGV4dENvbnRlbnQgPSBcIkRhaWx5XCI7XG5cbiAgICBjb25zdCBiYWNrQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYWNrQXJyb3cuc3JjID0gQmFja0Fycm93O1xuICAgIGJhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgY2hhbmdlVGltZUZyYW1lKHRpbWVmcmFtZSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbiAgICAgICAgbG9hZEZvcmVjYXN0KGxvY2F0aW9uLnRleHRDb250ZW50KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcndhcmRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIGZvcndhcmRBcnJvdy5zcmMgPSBGb3J3YXJkQXJyb3c7XG4gICAgZm9yd2FyZEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBjaGFuZ2VUaW1lRnJhbWUodGltZWZyYW1lKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuICAgICAgICBsb2FkRm9yZWNhc3QobG9jYXRpb24udGV4dENvbnRlbnQpO1xuICAgIH0pO1xuXG4gICAgdGltZWZyYW1lQ29udGFpbmVyLmFwcGVuZChiYWNrQXJyb3csIHRpbWVmcmFtZSwgZm9yd2FyZEFycm93KTtcblxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVmcmFtZUNvbnRhaW5lcilcblxuICAgIGNvbnNvbGUubG9nKHRpbWVmcmFtZUNvbnRhaW5lcilcblxuICAgIHJldHVybiBmb3JlY2FzdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGltZUZyYW1lKHRpbWVmcmFtZSl7XG4gICAgaWYodGltZWZyYW1lLnRleHRDb250ZW50ID09PSBcIkRhaWx5XCIpe1xuICAgICAgICB0aW1lZnJhbWUudGV4dENvbnRlbnQgPSBcIkhvdXJseVwiO1xuICAgIH1lbHNle1xuICAgICAgICB0aW1lZnJhbWUudGV4dENvbnRlbnQgPSBcIkRhaWx5XCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cERvbShmbGFnLCBjaXR5TmFtZSwgbG9jYXRpb25OYW1lLCB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgd2VhdGhlckljb24sIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgZGF0ZSwgaGlnaCwgbG93KXtcbiAgICB0cnl7XG4gICAgICAgIHNldERhdGEoZmxhZywgY2l0eU5hbWUsIGxvY2F0aW9uTmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyk7XG4gICAgICAgIGxvYWRGb3JlY2FzdChjaXR5TmFtZSk7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIFxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VXJsKHVybCl7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTpcImNvcnNcIn0pXG4gICAgXG4gICAgaWYocmVzcG9uc2Uub2sgPT0gZmFsc2Upe1xuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgICAgIFxuICAgICAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpPT57XG4gICAgICAgICAgICBzZWFyY2hCYXIuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgIH0pXG4gICAgICAgIHNlYXJjaEJhci5zZXRDdXN0b21WYWxpZGl0eShcIkVudGVyIGEgdmFsaWQgY2l0eVwiKTtcbiAgICAgICAgc2VhcmNoQmFyLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKGNpdHlOYW1lKXtcbiAgICB0cnl7XG4gICAgICAgIGxldCByZXNwb25zZTtcblxuICAgICAgICBpZihpc0NlbHNpdXMpe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBnZXRVcmwoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9ODRiMDlkNzM3ZjAzMmZiZjFmNTY3M2JkOTY0NTAyYzImdW5pdHM9bWV0cmljYClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGdldFVybChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD04NGIwOWQ3MzdmMDMyZmJmMWY1NjczYmQ5NjQ1MDJjMiZ1bml0cz1pbXBlcmlhbGApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGxldCBmbGFnID0gYGh0dHBzOi8vZmxhZ2Nkbi5jb20vOTZ4NzIvJHsocmVzcG9uc2VEYXRhLnN5cy5jb3VudHJ5KS50b0xvd2VyQ2FzZSgpfS5wbmdgO1xuICAgICAgICBsZXQgbG9jYXRpb24gPSByZXNwb25zZURhdGEubmFtZTtcbiAgICAgICAgbGV0IHRlbXBlcmF0dXJlID0gcmVzcG9uc2VEYXRhLm1haW4udGVtcDtcbiAgICAgICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IHJlc3BvbnNlRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgdGltZSA9IHJlc3BvbnNlRGF0YS5kdDtcbiAgICAgICAgbGV0IHRpbWVab25lID0gcmVzcG9uc2VEYXRhLnRpbWV6b25lO1xuICAgICAgICBsZXQgcHJlc3N1cmUgPSByZXNwb25zZURhdGEubWFpbi5wcmVzc3VyZTtcbiAgICAgICAgbGV0IHdpbmRTcGVlZCA9IHJlc3BvbnNlRGF0YS53aW5kLnNwZWVkO1xuICAgICAgICBsZXQgZmVlbHNMaWtlID0gcmVzcG9uc2VEYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICAgICAgbGV0IGh1bWlkaXR5ID0gcmVzcG9uc2VEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgICAgIGxldCBjb3VudHJ5ID0gcmVzcG9uc2VEYXRhLnN5cy5jb3VudHJ5O1xuICAgICAgICBsZXQgaGlnaCA9IHJlc3BvbnNlRGF0YS5tYWluLnRlbXBfbWF4O1xuICAgICAgICBsZXQgbG93ID0gcmVzcG9uc2VEYXRhLm1haW4udGVtcF9taW47XG4gICAgICAgIGxldCBsYXRpdHVkZSA9IHJlc3BvbnNlRGF0YS5jb29yZC5sYXQ7XG4gICAgICAgIGxldCBsb25naXR1ZGUgPSByZXNwb25zZURhdGEuY29vcmQubG9uO1xuICAgICAgICBsZXQgaWNvbiA9IHJlc3BvbnNlRGF0YS53ZWF0aGVyWzBdLmljb247XG5cbiAgICAgICAgcmV0dXJuIHsgZmxhZywgaWNvbiwgbG9jYXRpb24sIHRlbXBlcmF0dXJlLCB3ZWF0aGVyRGVzY3JpcHRpb24sIHRpbWUsIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgY291bnRyeSwgdGltZVpvbmUsIGhpZ2gsIGxvdywgcHJlc3N1cmUsIGxhdGl0dWRlLCBsb25naXR1ZGUgfTtcblxuICAgIH1jYXRjaChlcnJvcil7fVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjaXR5TmFtZSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGxvYWREYXRhKGNpdHlOYW1lKVxuXG4gICAgICAgIHJldHVybiBgJHtkYXRhLmxhdGl0dWRlfSAke2RhdGEubG9uZ2l0dWRlfWA7XG4gICAgICAgIFxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgfSBcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0RGF0YShmbGFnLCBjaXR5TmFtZSwgbmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXJEZXNjcmlwdGlvbiwgd2VhdGhlckljb24sIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgZGF0ZSwgaGlnaCwgbG93KXtcbiAgICB0cnl7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgbG9hZERhdGEoY2l0eU5hbWUpO1xuICAgICAgICBmbGFnLnNyYyA9IGRhdGEuZmxhZztcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb247XG4gICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgoTnVtYmVyKShkYXRhLnRlbXBlcmF0dXJlKSl9XFx4QjBgXG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IChkYXRhLndlYXRoZXJEZXNjcmlwdGlvbikudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBpZihpc0NlbHNpdXMpe1xuICAgICAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgoTnVtYmVyKShkYXRhLndpbmRTcGVlZCkpfSBrbS9oYDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKChOdW1iZXIpKGRhdGEud2luZFNwZWVkKSl9IG1waGA7XG4gICAgICAgIH1cbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgoTnVtYmVyKShkYXRhLmZlZWxzTGlrZSkpfVxceEIwYDtcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSVgO1xuICAgICAgICBoaWdoLnRleHRDb250ZW50ID0gYEg6ICR7TWF0aC5yb3VuZCgoTnVtYmVyKShkYXRhLmhpZ2gpKX1cXHhCMGA7XG4gICAgICAgIGxvdy50ZXh0Q29udGVudCA9IGBMOiAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS5sb3cpKX1cXHhCMGA7XG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBzZXREYXRlKGRhdGEudGltZSwgZGF0YS50aW1lWm9uZSk7XG4gICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbn1AMngucG5nYDtcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0RGF0ZSh0aW1lLCB0aW1lWm9uZSl7XG4gICAgbGV0IGRhdGVUb2tlbnMgPSBuZXcgRGF0ZSgodGltZSArIHRpbWVab25lKSAqIDEwMDApLnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKTtcblxuICAgIHJldHVybiBgJHtkYXRlVG9rZW5zWzBdfWA7XG59XG5cbmZ1bmN0aW9uIHNldEhvdXIodGltZSwgdGltZVpvbmUpe1xuICAgIGxldCBkYXRlVG9rZW5zID0gbmV3IERhdGUoKHRpbWUgKyB0aW1lWm9uZSkgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zcGxpdChcIjpcIik7XG4gICAgXG4gICAgcmV0dXJuIGAke2RhdGVUb2tlbnNbMF19OiR7ZGF0ZVRva2Vuc1sxXX1gO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRm9yZWNhc3QoY2l0eU5hbWUpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gKGF3YWl0IGdldENvb3JkaW5hdGVzKGNpdHlOYW1lKSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICBcbiAgICAgICAgaWYoaXNDZWxzaXVzKXtcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXNbMF19Jmxvbj0ke2Nvb3JkaW5hdGVzWzFdfSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD04NGIwOWQ3MzdmMDMyZmJmMWY1NjczYmQ5NjQ1MDJjMiZ1bml0cz1tZXRyaWNgLCB7bW9kZTogXCJjb3JzXCJ9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXNbMF19Jmxvbj0ke2Nvb3JkaW5hdGVzWzFdfSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD04NGIwOWQ3MzdmMDMyZmJmMWY1NjczYmQ5NjQ1MDJjMiZ1bml0cz1pbXBlcmlhbGAsIHttb2RlOiBcImNvcnNcIn0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBkYXRhSnNvbiA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0XCIpO1xuICAgIFxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImZsZXhpZnktY29sdW1uXCIsIFwiZm9yZWNhc3RzXCIpO1xuICAgIFxuICAgICAgICBjb25zdCB0aW1lZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVmcmFtZVwiKTtcbiAgICBcbiAgICAgICAgbGV0IGFycjtcbiAgICBcbiAgICAgICAgaWYodGltZWZyYW1lLnRleHRDb250ZW50ID09IFwiRGFpbHlcIil7XG4gICAgICAgICAgICBhcnIgPSBkYXRhSnNvbi5kYWlseTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmNlT2ZSYWluXCIpO1xuICAgICAgICAgICAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7KE1hdGgucm91bmQoKChOdW1iZXIpKGFyclswXS5wb3ApKSAqIDEwMCkpfSVgXG4gICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IGZpbGxlZEFycmF5ID0gZGF0YUpzb24uaG91cmx5O1xuICAgICAgICAgICAgYXJyID0gZmlsbGVkQXJyYXkuc2xpY2UoMCwgMjQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gbnVsbDtcbiAgICBcbiAgICAgICAgaWYoZm9yZWNhc3RDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JlY2FzdENvbnRhaW5lci5jaGlsZHJlblsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+eyBcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChcImRheVwiKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgXG4gICAgICAgICAgICBpZih0aW1lZnJhbWUudGV4dENvbnRlbnQgPT0gXCJEYWlseVwiKXtcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZWxlbWVudC50ZW1wLmRheSkpfVxceEIwYDtcbiAgICAgICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gc2V0RGF0ZShlbGVtZW50LmR0LCBkYXRhSnNvbi50aW1lem9uZV9vZmZzZXQpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKChOdW1iZXIpKGVsZW1lbnQudGVtcCkpfVxceEIwYDtcbiAgICAgICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gc2V0SG91cihlbGVtZW50LmR0LCBkYXRhSnNvbi50aW1lem9uZV9vZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtlbGVtZW50LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICBcbiAgICAgICAgICAgIGRheS5hcHBlbmQoZGF0ZSwgdGVtcGVyYXR1cmUsIGljb24pO1xuICAgICAgICAgICAgZGl2LmFwcGVuZChkYXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kKGRpdik7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICB9XG59ICAgXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHNldHVwU2VjdGlvbnMgfSBmcm9tIFwiLi9zZXR1cC5kb21cIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5zZXR1cFNlY3Rpb25zKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9