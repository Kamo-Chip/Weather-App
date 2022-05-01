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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    font-family:arial;\n    background-color: #19386d;\n    margin: 0;\n}\n\n.flexify-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.flexify-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    width: 100vw;\n    height: 100vh;\n    color: #fff;\n}\n\n/*Options container styles*/\n.logo-container{\n    width:8%;\n}\n.logo{\n    height: 3rem;\n    width: 3rem;\n    padding: .3em 0 0 .3em;\n}\n\n.logo-container p{\n    margin: 0;\n}\n\n/*Main container styles*/\n.main-container{\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    width: 70%;\n    max-width: 700px; \n    min-height: 210px;\n    height: 100%;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.vertical-line{\n    border-left: 3px solid #000;\n    height: 100vh;\n    width: 3px;\n    position: fixed;\n    top: 0;\n    justify-self: left;\n}\n\n.search-container{\n    margin: 1em 0 0 0;\n    width: fit-content;\n    min-width: 10rem;\n    max-height: 2.5rem;\n}\n\n.search-container input{\n    font-size: 1.5rem;\n    border: .1em none #000;\n    border-radius: 5px;  \n    width: 85%;\n}\n\n.search-container img{\n    width: 12.5%;\n}\n.weather-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 30%;\n    width: 100%;\n    min-height: fit-content;\n    margin: 2rem 0 0 0;\n    background-color: #546bab;\n    border-style: none;\n}\n\n.weather-container{\n    height: 100%;\n    width: 50%;\n}\n\n.location-div{\n    display: flex;\n    align-items: center;\n}\n\n.flag{\n    height: 2rem;\n    margin: 0 0 0 .5em;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.location-container p{\n    margin: 0;\n    text-align: center;\n}\n.location-container img{\n    justify-self: center;\n    align-self: center;\n    height: 10rem;\n    width: 10rem;\n}\n\n.weather-container button span{\n    padding: 0 1rem 0 1rem;\n}\n\n.temperature{\n    margin: 0;\n    font-size:5rem;\n    justify-self: center;\n}\n\n.temperature-container{\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.data-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 1rem;\n    max-height: 70%;\n    width: 100%;\n    margin: 2rem 0 0 0;\n}\n\n.data-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    background-color: #546bab;\n    border-style: none;\n    height: 100%;\n}\n\n.data-div:hover, .weather-div:hover{\n    background-color: #546babaf;\n}\n\n.data-div div{\n    width: 100%;\n    display: grid;\n    grid-template-columns: auto auto;\n}\n.data-div p{\n    text-align: center;\n}\n\n.data-div img{\n    max-height: 2rem;\n    max-width: 2rem;\n    margin: .2em .2em 0 .2em;\n}\n\n\n.temperature-container div{\n    font-size: 1.5rem;\n}\n\n.temperature-container div p{\n    margin: 5px 0 0 0;\n}\n\n/*Forecast container styles*/\n.forecast-container{\n    display: grid;\n    grid-template-rows: auto auto;\n    max-width: 290px;\n    width: 28%;\n    height: 95%;\n    background-color: #546bab;\n    border-style: none;\n    border-color: #000;\n    border-radius: 10px;\n    margin: .5em .5em 0 0;\n}\n\n.timeframe-container{\n    justify-self: center;\n    width: 13rem;\n}\n\n.timeframe-container p{\n    text-align: center;\n    width: 6rem;\n    font-size: 2rem;\n    height: fit-content;\n    padding: 0 0 .5em 0;\n    margin: 0;\n}\n\n.timeframe-container img{\n    max-height: 3rem;\n    max-width: 3rem;\n    text-align: center;\n}\n\n.forecasts{\n    width: 100%;\n    overflow-y: auto;\n}\n\n.day{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    align-items: center;\n    width: 100%;\n    padding: 0 0 .5em 0;\n    border-bottom: 2px solid #fff;\n}\n\n.day:hover{\n    background-color:rgba(221, 221, 221, 0.753);\n}\n\n.day p{\n    padding-left: 20px;\n}\n\n.day img{\n    max-width: 6rem\n}\n\n.weather-div, .data-div{\n    border-radius: 20px;\n}\n\nbutton{\n    font-size: 1.5rem;\n    width: 10rem;\n    height: 2.5rem;\n    margin-bottom: 30px;\n    border-radius: 15px;\n    border-style: none;\n    background-color: #fff;\n}\n\nh1{\n    margin: 0;\n    font-size: 1.5rem;\n    align-self: center;\n}\nspan:hover{\n    text-decoration: underline;\n}\n\n@media (max-width: 767px){\n\n    .container{\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .forecast-container{\n        width: 90vw;\n        max-width: 90vw;\n        height: 20%;\n        margin: 0 0 2.5rem 0;\n    }\n\n    .timeframe-container{\n        position: absolute;\n        height: 10%;\n        width: fit-content;\n        margin-top: .5rem;\n    }\n\n    .timeframe-container img{\n        height: 2rem;\n        width: 2rem;\n    }\n\n    .forecasts{\n        flex-direction: row;\n        height: fit-content;\n        margin-top: 4rem;\n        width: 100%;\n    }\n\n    .vertical-line{\n        display: none;\n    }\n\n    .main-container{\n        width: 100vw;\n        height: 80%;\n        padding: 0;\n    }\n\n    .data-container{\n        width: 90%;\n        height: 50%;\n    }\n\n    .data-div{\n        height: fit-content;\n        padding: .2em;\n    }\n\n    h1{\n        font-size: 1.2rem\n    }\n\n    .day{\n        border-bottom: none;\n    }\n\n    .day img{\n        width: 3rem;\n    }\n    \n    .search-container{\n        width: 15rem;\n        margin-left: 2.5rem;\n    }\n\n    .weather-div{\n        flex-direction: column;\n        align-items: center;\n        width: 90%;\n        height: 40%;\n    }\n    .logo-container{\n        position: absolute;\n        left: 0;\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .weather-container{\n        height: 14rem;\n        width: fit-content;\n        justify-content: space-between;\n    }\n\n    .location-div{\n        align-items: center;\n        justify-content: center;\n    }\n\n    .location-div img{\n        height: 2rem;\n    }\n\n    .location-container{\n        height: 80px;\n\n    }\n\n    .location-container img{\n       display: none;\n    }\n\n    button{\n        margin-bottom: 0;\n        align-self: center;\n        \n    }\n\n    @media (max-height: 841px){\n\n        .main-container{\n            height: 70%;\n        }\n\n        .forecast-container{\n            height: 20%;\n            margin-bottom: 3rem;\n        }\n\n        .data-container{\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            grid-template-rows: none;\n            width: 90vw;\n            overflow-y: auto;\n        }\n\n        .weather-div{\n            height: fit-content;\n        }\n\n        .data-div{\n            height: 130px;\n            width: 135px;\n        }\n    }\n}\n/*General styles*/\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');\n\nbody{\n    font-family:arial;\n    background-color: #19386d;\n    margin: 0;\n}\n\n.flexify-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.flexify-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    width: 100vw;\n    height: 100vh;\n    color: #fff;\n}\n\n/*Options container styles*/\n.logo-container{\n    width:8%;\n}\n.logo{\n    height: 3rem;\n    width: 3rem;\n    padding: .3em 0 0 .3em;\n}\n\n.logo-container p{\n    margin: 0;\n}\n\n/*Main container styles*/\n.main-container{\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    width: 70%;\n    max-width: 700px; \n    min-height: 210px;\n    height: 100%;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.vertical-line{\n    border-left: 3px solid #000;\n    height: 100vh;\n    width: 3px;\n    position: fixed;\n    top: 0;\n    justify-self: left;\n}\n\n.search-container{\n    margin: 1em 0 0 0;\n    width: fit-content;\n    min-width: 10rem;\n    max-height: 2.5rem;\n}\n\n.search-container input{\n    font-size: 1.5rem;\n    border: .1em none #000;\n    border-radius: 5px;  \n    width: 85%;\n}\n\n.search-container img{\n    width: 12.5%;\n}\n.weather-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 30%;\n    width: 100%;\n    min-height: fit-content;\n    margin: 2rem 0 0 0;\n    background-color: #546bab;\n    border-style: none;\n}\n\n.weather-container{\n    height: 100%;\n    width: 50%;\n}\n\n.location-div{\n    display: flex;\n    align-items: center;\n}\n\n.flag{\n    height: 2rem;\n    margin: 0 0 0 .5em;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.location-container p{\n    margin: 0;\n    text-align: center;\n}\n.location-container img{\n    justify-self: center;\n    align-self: center;\n    height: 10rem;\n    width: 10rem;\n}\n\n.weather-container button span{\n    padding: 0 1rem 0 1rem;\n}\n\n.temperature{\n    margin: 0;\n    font-size:5rem;\n    justify-self: center;\n}\n\n.temperature-container{\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.data-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 1rem;\n    max-height: 70%;\n    width: 100%;\n    margin: 2rem 0 0 0;\n}\n\n.data-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    background-color: #546bab;\n    border-style: none;\n    height: 100%;\n}\n\n.data-div:hover, .weather-div:hover{\n    background-color: #546babaf;\n}\n\n.data-div div{\n    width: 100%;\n    display: grid;\n    grid-template-columns: auto auto;\n}\n.data-div p{\n    text-align: center;\n}\n\n.data-div img{\n    max-height: 2rem;\n    max-width: 2rem;\n    margin: .2em .2em 0 .2em;\n}\n\n\n.temperature-container div{\n    font-size: 1.5rem;\n}\n\n.temperature-container div p{\n    margin: 5px 0 0 0;\n}\n\n/*Forecast container styles*/\n.forecast-container{\n    display: grid;\n    grid-template-rows: auto auto;\n    max-width: 290px;\n    width: 28%;\n    height: 95%;\n    background-color: #546bab;\n    border-style: none;\n    border-color: #000;\n    border-radius: 10px;\n    margin: .5em .5em 0 0;\n}\n\n.timeframe-container{\n    justify-self: center;\n    width: 13rem;\n}\n\n.timeframe-container p{\n    text-align: center;\n    width: 6rem;\n    font-size: 2rem;\n    height: fit-content;\n    padding: 0 0 .5em 0;\n    margin: 0;\n}\n\n.timeframe-container img{\n    max-height: 3rem;\n    max-width: 3rem;\n    text-align: center;\n}\n\n.forecasts{\n    width: 100%;\n    overflow-y: auto;\n}\n\n.day{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    align-items: center;\n    width: 100%;\n    padding: 0 0 .5em 0;\n    border-bottom: 2px solid #fff;\n}\n\n.day:hover{\n    background-color:rgba(221, 221, 221, 0.753);\n}\n\n.day p{\n    padding-left: 20px;\n}\n\n.day img{\n    max-width: 6rem\n}\n\n.weather-div, .data-div{\n    border-radius: 20px;\n}\n\nbutton{\n    font-size: 1.5rem;\n    width: 10rem;\n    height: 2.5rem;\n    margin-bottom: 30px;\n    border-radius: 15px;\n    border-style: none;\n    background-color: #fff;\n}\n\nh1{\n    margin: 0;\n    font-size: 1.5rem;\n    align-self: center;\n}\nspan:hover{\n    text-decoration: underline;\n}\n\n@media (max-width: 767px){\n\n    .container{\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .forecast-container{\n        width: 90vw;\n        max-width: 90vw;\n        height: 20%;\n        margin: 0 0 2.5rem 0;\n    }\n\n    .timeframe-container{\n        position: absolute;\n        height: 10%;\n        width: fit-content;\n        margin-top: .5rem;\n    }\n\n    .timeframe-container img{\n        height: 2rem;\n        width: 2rem;\n    }\n\n    .forecasts{\n        flex-direction: row;\n        height: fit-content;\n        margin-top: 4rem;\n        width: 100%;\n    }\n\n    .vertical-line{\n        display: none;\n    }\n\n    .main-container{\n        width: 100vw;\n        height: 80%;\n        padding: 0;\n    }\n\n    .data-container{\n        width: 90%;\n        height: 50%;\n    }\n\n    .data-div{\n        height: fit-content;\n        padding: .2em;\n    }\n\n    h1{\n        font-size: 1.2rem\n    }\n\n    .day{\n        border-bottom: none;\n    }\n\n    .day img{\n        width: 3rem;\n    }\n    \n    .search-container{\n        width: 15rem;\n        margin-left: 2.5rem;\n    }\n\n    .weather-div{\n        flex-direction: column;\n        align-items: center;\n        width: 90%;\n        height: 40%;\n    }\n    .logo-container{\n        position: absolute;\n        left: 0;\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .weather-container{\n        height: 14rem;\n        width: fit-content;\n        justify-content: space-between;\n    }\n\n    .location-div{\n        align-items: center;\n        justify-content: center;\n    }\n\n    .location-div img{\n        height: 2rem;\n    }\n\n    .location-container{\n        height: 80px;\n\n    }\n\n    .location-container img{\n       display: none;\n    }\n\n    button{\n        margin-bottom: 0;\n        align-self: center;\n        \n    }\n\n    @media (max-height: 841px){\n\n        .main-container{\n            height: 70%;\n        }\n\n        .forecast-container{\n            height: 20%;\n            margin-bottom: 3rem;\n        }\n\n        .data-container{\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            grid-template-rows: none;\n            width: 90vw;\n            overflow-y: auto;\n        }\n\n        .weather-div{\n            height: fit-content;\n        }\n\n        .data-div{\n            height: 130px;\n            width: 135px;\n        }\n    }\n}\n/*General styles*/\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8s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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDBDQUFRO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixzQ0FBSTs7QUFFL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQ0FBSTs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNkNBQUs7O0FBRXpCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDRDQUFROztBQUUvQjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw0Q0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSx1QkFBdUIsK0NBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvc2V0dXAuZG9tLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZyZWRva2EmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgZm9udC1mYW1pbHk6YXJpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTM4NmQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmZsZXhpZnktcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleGlmeS1jb2x1bW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qT3B0aW9ucyBjb250YWluZXIgc3R5bGVzKi9cXG4ubG9nby1jb250YWluZXJ7XFxuICAgIHdpZHRoOjglO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgcGFkZGluZzogLjNlbSAwIDAgLjNlbTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLypNYWluIGNvbnRhaW5lciBzdHlsZXMqL1xcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7IFxcbiAgICBtaW4taGVpZ2h0OiAyMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi52ZXJ0aWNhbC1saW5le1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAuMWVtIG5vbmUgIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgXFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGltZ3tcXG4gICAgd2lkdGg6IDEyLjUlO1xcbn1cXG4ud2VhdGhlci1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sb2NhdGlvbi1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGFne1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgLjVlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIGJ1dHRvbiBzcGFue1xcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVye1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxufVxcblxcbi5kYXRhLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmJhYjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXRhLWRpdjpob3ZlciwgLndlYXRoZXItZGl2OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiYWY7XFxufVxcblxcbi5kYXRhLWRpdiBkaXZ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuLmRhdGEtZGl2IHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRhdGEtZGl2IGltZ3tcXG4gICAgbWF4LWhlaWdodDogMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAycmVtO1xcbiAgICBtYXJnaW46IC4yZW0gLjJlbSAwIC4yZW07XFxufVxcblxcblxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIgZGl2e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciBkaXYgcHtcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxufVxcblxcbi8qRm9yZWNhc3QgY29udGFpbmVyIHN0eWxlcyovXFxuLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIG1heC13aWR0aDogMjkwcHg7XFxuICAgIHdpZHRoOiAyOCU7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAuNWVtIC41ZW0gMCAwO1xcbn1cXG5cXG4udGltZWZyYW1lLWNvbnRhaW5lcntcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG59XFxuXFxuLnRpbWVmcmFtZS1jb250YWluZXIgcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNnJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwIDAgLjVlbSAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi50aW1lZnJhbWUtY29udGFpbmVyIGltZ3tcXG4gICAgbWF4LWhlaWdodDogM3JlbTtcXG4gICAgbWF4LXdpZHRoOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMmZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAwIC41ZW0gMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5kYXk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMjEsIDIyMSwgMjIxLCAwLjc1Myk7XFxufVxcblxcbi5kYXkgcHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZGF5IGltZ3tcXG4gICAgbWF4LXdpZHRoOiA2cmVtXFxufVxcblxcbi53ZWF0aGVyLWRpdiwgLmRhdGEtZGl2e1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbmgxe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbnNwYW46aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xcblxcbiAgICAuY29udGFpbmVye1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgICBtYXJnaW46IDAgMCAyLjVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAudGltZWZyYW1lLWNvbnRhaW5lcntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLnRpbWVmcmFtZS1jb250YWluZXIgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0c3tcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC52ZXJ0aWNhbC1saW5le1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogNTAlO1xcbiAgICB9XFxuXFxuICAgIC5kYXRhLWRpdntcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nOiAuMmVtO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgfVxcblxcbiAgICAuZGF5e1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGF5IGltZ3tcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItZGl2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgIH1cXG4gICAgLmxvZ28tY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItY29udGFpbmVye1xcbiAgICAgICAgaGVpZ2h0OiAxNHJlbTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tZGl2e1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1kaXYgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1jb250YWluZXJ7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LWhlaWdodDogODQxcHgpe1xcblxcbiAgICAgICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC53ZWF0aGVyLWRpdntcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRhdGEtZGl2e1xcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbi8qR2VuZXJhbCBzdHlsZXMqL1xcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixNQUFNO0lBQ04sa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFdBQVc7UUFDWCxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZOztJQUVoQjs7SUFFQTtPQUNHLGFBQWE7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCOztJQUV0Qjs7SUFFQTs7UUFFSTtZQUNJLFdBQVc7UUFDZjs7UUFFQTtZQUNJLFdBQVc7WUFDWCxtQkFBbUI7UUFDdkI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IscUNBQXFDO1lBQ3JDLHdCQUF3QjtZQUN4QixXQUFXO1lBQ1gsZ0JBQWdCO1FBQ3BCOztRQUVBO1lBQ0ksbUJBQW1CO1FBQ3ZCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLFlBQVk7UUFDaEI7SUFDSjtBQUNKO0FBQ0EsaUJBQWlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZyZWRva2EmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6YXJpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTM4NmQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmZsZXhpZnktcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleGlmeS1jb2x1bW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qT3B0aW9ucyBjb250YWluZXIgc3R5bGVzKi9cXG4ubG9nby1jb250YWluZXJ7XFxuICAgIHdpZHRoOjglO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgcGFkZGluZzogLjNlbSAwIDAgLjNlbTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLypNYWluIGNvbnRhaW5lciBzdHlsZXMqL1xcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7IFxcbiAgICBtaW4taGVpZ2h0OiAyMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi52ZXJ0aWNhbC1saW5le1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAuMWVtIG5vbmUgIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgXFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGltZ3tcXG4gICAgd2lkdGg6IDEyLjUlO1xcbn1cXG4ud2VhdGhlci1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDZiYWI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sb2NhdGlvbi1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGFne1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgLjVlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIGJ1dHRvbiBzcGFue1xcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVye1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxufVxcblxcbi5kYXRhLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmJhYjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXRhLWRpdjpob3ZlciwgLndlYXRoZXItZGl2OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiYWY7XFxufVxcblxcbi5kYXRhLWRpdiBkaXZ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuLmRhdGEtZGl2IHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRhdGEtZGl2IGltZ3tcXG4gICAgbWF4LWhlaWdodDogMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAycmVtO1xcbiAgICBtYXJnaW46IC4yZW0gLjJlbSAwIC4yZW07XFxufVxcblxcblxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIgZGl2e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciBkaXYgcHtcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxufVxcblxcbi8qRm9yZWNhc3QgY29udGFpbmVyIHN0eWxlcyovXFxuLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIG1heC13aWR0aDogMjkwcHg7XFxuICAgIHdpZHRoOiAyOCU7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2YmFiO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAuNWVtIC41ZW0gMCAwO1xcbn1cXG5cXG4udGltZWZyYW1lLWNvbnRhaW5lcntcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG59XFxuXFxuLnRpbWVmcmFtZS1jb250YWluZXIgcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNnJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwIDAgLjVlbSAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi50aW1lZnJhbWUtY29udGFpbmVyIGltZ3tcXG4gICAgbWF4LWhlaWdodDogM3JlbTtcXG4gICAgbWF4LXdpZHRoOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMmZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAwIC41ZW0gMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5kYXk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMjEsIDIyMSwgMjIxLCAwLjc1Myk7XFxufVxcblxcbi5kYXkgcHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZGF5IGltZ3tcXG4gICAgbWF4LXdpZHRoOiA2cmVtXFxufVxcblxcbi53ZWF0aGVyLWRpdiwgLmRhdGEtZGl2e1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbmgxe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbnNwYW46aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xcblxcbiAgICAuY29udGFpbmVye1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgICBtYXJnaW46IDAgMCAyLjVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAudGltZWZyYW1lLWNvbnRhaW5lcntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLnRpbWVmcmFtZS1jb250YWluZXIgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0c3tcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC52ZXJ0aWNhbC1saW5le1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogNTAlO1xcbiAgICB9XFxuXFxuICAgIC5kYXRhLWRpdntcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nOiAuMmVtO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgfVxcblxcbiAgICAuZGF5e1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGF5IGltZ3tcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItZGl2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgIH1cXG4gICAgLmxvZ28tY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItY29udGFpbmVye1xcbiAgICAgICAgaGVpZ2h0OiAxNHJlbTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tZGl2e1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1kaXYgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1jb250YWluZXJ7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LWhlaWdodDogODQxcHgpe1xcblxcbiAgICAgICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRhdGEtY29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC53ZWF0aGVyLWRpdntcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRhdGEtZGl2e1xcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbi8qR2VuZXJhbCBzdHlsZXMqL1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2VhcmNoIGZyb20gXCIuL3NlYXJjaC5zdmdcIjtcbmltcG9ydCBCYWNrQXJyb3cgZnJvbSBcIi4vYXJyb3dfYmFjay5zdmdcIjtcbmltcG9ydCBGb3J3YXJkQXJyb3cgZnJvbSBcIi4vYXJyb3dfZm9yd2FyZC5zdmdcIjtcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi9sb2NhdGlvbi5zdmdcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2Nsb3VkeS5wbmdcIjtcbmltcG9ydCBSYWluIGZyb20gXCIuL3JhaW4ucG5nXCI7XG5pbXBvcnQgSHVtaWRpdHkgZnJvbSBcIi4vcmFpbi1kcm9wcy5wbmdcIjtcbmltcG9ydCBGZWVscyBmcm9tIFwiLi90aGVybW9tZXRlci5wbmdcIjtcbmltcG9ydCBXaW5kIGZyb20gXCIuL3dpbmQucG5nXCI7XG5cbmxldCBpc0NlbHNpdXMgPSB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTZWN0aW9ucygpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gc2V0dXBPcHRpb25zQ29udGFpbmVyKCk7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gc2V0dXBNYWluQ29udGFpbmVyKCk7XG5cbiAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IHNldHVwRm9yZWNhc3RDb250YWluZXIoKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQobG9nb0NvbnRhaW5lciwgbWFpbkNvbnRhaW5lciwgZm9yZWNhc3RDb250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBzZXR1cE9wdGlvbnNDb250YWluZXIoKXtcbiAgICBjb25zdCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWNvbnRhaW5lclwiLCBcImZsZXhpZnktY29sdW1uXCIpO1xuXG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ28uc3JjID0gTG9nbztcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuXG4gICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmQobG9nbyk7XG5cbiAgICByZXR1cm4gb3B0aW9uc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gc2V0dXBNYWluQ29udGFpbmVyKCl7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWNvbnRhaW5lclwiLCBcImZsZXhpZnktcm93XCIpO1xuXG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHNlYXJjaEljb24uc3JjID0gU2VhcmNoO1xuICAgIHNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGlmKHNlYXJjaEJhci52YWx1ZSAhPT0gXCJcIil7XG4gICAgICAgICAgICBzZXR1cERvbShmbGFnLCBzZWFyY2hCYXIudmFsdWUsIGxvY2F0aW9uTmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyk7XG4gICAgICAgICAgICBzZWFyY2hCYXIudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggTG9jYXRpb25cIjtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBzZWFyY2hCYXIuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VhcmNoQmFyLnNldEN1c3RvbVZhbGlkaXR5KFwiRW50ZXIgYSBjaXR5XCIpO1xuICAgICAgICAgICAgc2VhcmNoQmFyLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzZWFyY2hCYXIudHlwZSA9IFwidGV4dFwiO1xuICAgIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9IGBTZWFyY2ggTG9jYXRpb25gO1xuXG4gICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZChzZWFyY2hCYXIsIHNlYXJjaEljb24pO1xuXG4gICAgY29uc3QgZGl2V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2V2VhdGhlci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1kaXZcIik7XG5cbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNvbnRhaW5lclwiLCBcImZsZXhpZnktY29sdW1uXCIpO1xuXG4gICAgY29uc3QgbG9jYXRpb25JY29uID0gbmV3IEltYWdlKCk7XG4gICAgbG9jYXRpb25JY29uLnNyYyA9IExvY2F0aW9uO1xuICAgIGxvY2F0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25JY29uXCIpO1xuXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbG9jYXRpb25OYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9jYXRpb25cIik7XG5cbiAgICBcbiAgICBjb25zdCBmbGFnID0gbmV3IEltYWdlKCk7XG4gICAgZmxhZy5jbGFzc0xpc3QuYWRkKFwiZmxhZ1wiKTtcblxuICAgIGNvbnN0IGRpdkxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24tZGl2XCIpO1xuXG4gICAgZGl2TG9jYXRpb24uYXBwZW5kKGxvY2F0aW9uSWNvbiwgbG9jYXRpb25OYW1lLCBmbGFnKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZW1wZXJhdHVyZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmUtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVcIik7XG5cbiAgICBjb25zdCBoaWdoQW5kTG93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGhpZ2hBbmRMb3dDb250YWluZXIuYXBwZW5kKGhpZ2gsIGxvdyk7XG5cbiAgICB0ZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmQodGVtcGVyYXR1cmUsIGhpZ2hBbmRMb3dDb250YWluZXIpO1xuXG4gICAgY29uc3QgYnRuVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNlbHNpdXMudGV4dENvbnRlbnQgPSBcIlxceEIwQ1wiO1xuICAgIGNlbHNpdXMuc3R5bGUudGV4dERlY29yYXRpb24gPSBcInVuZGVybGluZVwiO1xuICAgIGNlbHNpdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGlzQ2Vsc2l1cyA9IHRydWU7XG4gICAgICAgIHNldHVwRG9tKGZsYWcsIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCwgbG9jYXRpb25OYW1lLCB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgd2VhdGhlckljb24sIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgZGF0ZSwgaGlnaCwgbG93KTtcbiAgICAgICAgY2Vsc2l1cy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCI7XG4gICAgICAgIGZhaHJlbmhlaXQuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBmYWhyZW5oZWl0LnRleHRDb250ZW50ID0gXCJcXHhCMEZcIjtcbiAgICBmYWhyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBpc0NlbHNpdXMgPSBmYWxzZTtcbiAgICAgICAgc2V0dXBEb20oZmxhZywgbG9jYXRpb25OYW1lLnRleHRDb250ZW50LCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpO1xuICAgICAgICBjZWxzaXVzLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICAgIGZhaHJlbmhlaXQuc3R5bGUudGV4dERlY29yYXRpb24gPSBcInVuZGVybGluZVwiO1xuICAgIH0pO1xuXG4gICAgYnRuVGVtcGVyYXR1cmUuYXBwZW5kKGNlbHNpdXMsXCIvXCIsIGZhaHJlbmhlaXQpO1xuXG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmQoZGl2TG9jYXRpb24sIHRlbXBlcmF0dXJlQ29udGFpbmVyLCBidG5UZW1wZXJhdHVyZSk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmQod2VhdGhlciwgd2VhdGhlckljb24sIGRhdGUpO1xuXG4gICAgZGl2V2VhdGhlci5hcHBlbmQod2VhdGhlckNvbnRhaW5lciwgbG9jYXRpb25Db250YWluZXIpO1xuXG4gICAgY29uc3QgZGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0YUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0YS1jb250YWluZXJcIiwgXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IGRpdkNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Q2hhbmNlT2ZSYWluLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWRpdlwiKTtcblxuICAgIGNvbnN0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcjEuY2xhc3NMaXN0LmFkZChcImZsZXhpZnktcm93XCIpO1xuXG4gICAgY29uc3QgY2hhbmNlT2ZSYWluSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNoYW5jZU9mUmFpbkljb24uc3JjID0gUmFpbjtcblxuICAgIGNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZTEudGV4dENvbnRlbnQgPSBcIlAoUmFpbilcIjtcblxuICAgIGhlYWRlcjEuYXBwZW5kKGNoYW5jZU9mUmFpbkljb24sIHRpdGxlMSk7XG5cbiAgICBjb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjaGFuY2VPZlJhaW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGFuY2VPZlJhaW5cIik7XG4gICAgZGl2Q2hhbmNlT2ZSYWluLmFwcGVuZChoZWFkZXIxLCBjaGFuY2VPZlJhaW4pO1xuXG4gICAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyMi5jbGFzc0xpc3QuYWRkKFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCB3aW5kSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHdpbmRJY29uLnNyYyA9IFdpbmQ7XG5cbiAgICBjb25zdCBkaXZXaW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdldpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwiZGF0YS1kaXZcIik7XG5cbiAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUyLnRleHRDb250ZW50ID0gXCJXaW5kIFNwZWVkXCI7XG5cbiAgICBoZWFkZXIyLmFwcGVuZCh3aW5kSWNvbiwgdGl0bGUyKTtcblxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgZGl2V2luZFNwZWVkLmFwcGVuZChoZWFkZXIyLCB3aW5kU3BlZWQpO1xuICAgIFxuICAgIGNvbnN0IGRpdkZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2RmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWRpdlwiKTtcblxuICAgIGNvbnN0IGhlYWRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcjMuY2xhc3NMaXN0LmFkZChcImZsZXhpZnktcm93XCIpO1xuXG4gICAgY29uc3QgZmVlbHNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZmVlbHNJY29uLnNyYyA9IEZlZWxzO1xuXG4gICAgY29uc3QgdGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlMy50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZVwiO1xuXG4gICAgaGVhZGVyMy5hcHBlbmQoZmVlbHNJY29uLCB0aXRsZTMpO1xuXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBkaXZGZWVsc0xpa2UuYXBwZW5kKGhlYWRlcjMsIGZlZWxzTGlrZSk7XG5cbiAgICBjb25zdCBkaXZIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcImRhdGEtZGl2XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyNC5jbGFzc0xpc3QuYWRkKFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCBodW1pZGl0eUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBodW1pZGl0eUljb24uc3JjID0gSHVtaWRpdHk7XG5cbiAgICBjb25zdCB0aXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGU0LnRleHRDb250ZW50ID0gXCJIdW1pZGl0eVwiO1xuXG4gICAgaGVhZGVyNC5hcHBlbmQoaHVtaWRpdHlJY29uLCB0aXRsZTQpO1xuXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGRpdkh1bWlkaXR5LmFwcGVuZChoZWFkZXI0LCBodW1pZGl0eSk7XG5cbiAgICBkYXRhQ29udGFpbmVyLmFwcGVuZChkaXZDaGFuY2VPZlJhaW4sIGRpdldpbmRTcGVlZCwgZGl2RmVlbHNMaWtlLCBkaXZIdW1pZGl0eSk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChzZWFyY2hDb250YWluZXIsIGRpdldlYXRoZXIsIGRhdGFDb250YWluZXIpO1xuXG4gICAgc2V0dXBEb20oZmxhZywgXCJKb2hhbm5lc2J1cmdcIiwgbG9jYXRpb25OYW1lLCB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgd2VhdGhlckljb24sIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgZGF0ZSwgaGlnaCwgbG93KTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gc2V0dXBGb3JlY2FzdENvbnRhaW5lcigpe1xuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcmVjYXN0XCIpO1xuICAgIGZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aW1lZnJhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbWVmcmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGltZWZyYW1lLWNvbnRhaW5lclwiLCBcImZsZXhpZnktcm93XCIpO1xuXG4gICAgY29uc3QgdGltZWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGltZWZyYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGltZWZyYW1lXCIpO1xuICAgIHRpbWVmcmFtZS50ZXh0Q29udGVudCA9IFwiRGFpbHlcIjtcblxuICAgIGNvbnN0IGJhY2tBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tBcnJvdy5zcmMgPSBCYWNrQXJyb3c7XG4gICAgYmFja0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBjaGFuZ2VUaW1lRnJhbWUodGltZWZyYW1lKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuICAgICAgICBsb2FkRm9yZWNhc3QobG9jYXRpb24udGV4dENvbnRlbnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9yd2FyZEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgZm9yd2FyZEFycm93LnNyYyA9IEZvcndhcmRBcnJvdztcbiAgICBmb3J3YXJkQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGNoYW5nZVRpbWVGcmFtZSh0aW1lZnJhbWUpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG4gICAgICAgIGxvYWRGb3JlY2FzdChsb2NhdGlvbi50ZXh0Q29udGVudCk7XG4gICAgfSk7XG5cbiAgICB0aW1lZnJhbWVDb250YWluZXIuYXBwZW5kKGJhY2tBcnJvdywgdGltZWZyYW1lLCBmb3J3YXJkQXJyb3cpO1xuXG4gICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZWZyYW1lQ29udGFpbmVyKVxuXG4gICAgY29uc29sZS5sb2codGltZWZyYW1lQ29udGFpbmVyKVxuXG4gICAgcmV0dXJuIGZvcmVjYXN0Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUaW1lRnJhbWUodGltZWZyYW1lKXtcbiAgICBpZih0aW1lZnJhbWUudGV4dENvbnRlbnQgPT09IFwiRGFpbHlcIil7XG4gICAgICAgIHRpbWVmcmFtZS50ZXh0Q29udGVudCA9IFwiSG91cmx5XCI7XG4gICAgfWVsc2V7XG4gICAgICAgIHRpbWVmcmFtZS50ZXh0Q29udGVudCA9IFwiRGFpbHlcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwRG9tKGZsYWcsIGNpdHlOYW1lLCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpe1xuICAgIHRyeXtcbiAgICAgICAgc2V0RGF0YShmbGFnLCBjaXR5TmFtZSwgbG9jYXRpb25OYW1lLCB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgd2VhdGhlckljb24sIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgZGF0ZSwgaGlnaCwgbG93KTtcbiAgICAgICAgbG9hZEZvcmVjYXN0KGNpdHlOYW1lKTtcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRVcmwodXJsKXtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOlwiY29yc1wifSlcbiAgICBcbiAgICBpZihyZXNwb25zZS5vayA9PSBmYWxzZSl7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICAgICAgXG4gICAgICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCk9PntcbiAgICAgICAgICAgIHNlYXJjaEJhci5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2VhcmNoQmFyLnNldEN1c3RvbVZhbGlkaXR5KFwiRW50ZXIgYSB2YWxpZCBjaXR5XCIpO1xuICAgICAgICBzZWFyY2hCYXIucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoY2l0eU5hbWUpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuXG4gICAgICAgIGlmKGlzQ2Vsc2l1cyl7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGdldFVybChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD04NGIwOWQ3MzdmMDMyZmJmMWY1NjczYmQ5NjQ1MDJjMiZ1bml0cz1tZXRyaWNgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZ2V0VXJsKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPTg0YjA5ZDczN2YwMzJmYmYxZjU2NzNiZDk2NDUwMmMyJnVuaXRzPWltcGVyaWFsYCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgbGV0IGZsYWcgPSBgaHR0cHM6Ly9mbGFnY2RuLmNvbS85Nng3Mi8keyhyZXNwb25zZURhdGEuc3lzLmNvdW50cnkpLnRvTG93ZXJDYXNlKCl9LnBuZ2A7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IHJlc3BvbnNlRGF0YS5uYW1lO1xuICAgICAgICBsZXQgdGVtcGVyYXR1cmUgPSByZXNwb25zZURhdGEubWFpbi50ZW1wO1xuICAgICAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uID0gcmVzcG9uc2VEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIGxldCB0aW1lID0gcmVzcG9uc2VEYXRhLmR0O1xuICAgICAgICBsZXQgdGltZVpvbmUgPSByZXNwb25zZURhdGEudGltZXpvbmU7XG4gICAgICAgIGxldCBwcmVzc3VyZSA9IHJlc3BvbnNlRGF0YS5tYWluLnByZXNzdXJlO1xuICAgICAgICBsZXQgd2luZFNwZWVkID0gcmVzcG9uc2VEYXRhLndpbmQuc3BlZWQ7XG4gICAgICAgIGxldCBmZWVsc0xpa2UgPSByZXNwb25zZURhdGEubWFpbi5mZWVsc19saWtlO1xuICAgICAgICBsZXQgaHVtaWRpdHkgPSByZXNwb25zZURhdGEubWFpbi5odW1pZGl0eTtcbiAgICAgICAgbGV0IGNvdW50cnkgPSByZXNwb25zZURhdGEuc3lzLmNvdW50cnk7XG4gICAgICAgIGxldCBoaWdoID0gcmVzcG9uc2VEYXRhLm1haW4udGVtcF9tYXg7XG4gICAgICAgIGxldCBsb3cgPSByZXNwb25zZURhdGEubWFpbi50ZW1wX21pbjtcbiAgICAgICAgbGV0IGxhdGl0dWRlID0gcmVzcG9uc2VEYXRhLmNvb3JkLmxhdDtcbiAgICAgICAgbGV0IGxvbmdpdHVkZSA9IHJlc3BvbnNlRGF0YS5jb29yZC5sb247XG4gICAgICAgIGxldCBpY29uID0gcmVzcG9uc2VEYXRhLndlYXRoZXJbMF0uaWNvbjtcblxuICAgICAgICByZXR1cm4geyBmbGFnLCBpY29uLCBsb2NhdGlvbiwgdGVtcGVyYXR1cmUsIHdlYXRoZXJEZXNjcmlwdGlvbiwgdGltZSwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBjb3VudHJ5LCB0aW1lWm9uZSwgaGlnaCwgbG93LCBwcmVzc3VyZSwgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9O1xuXG4gICAgfWNhdGNoKGVycm9yKXt9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGNpdHlOYW1lKXtcbiAgICB0cnl7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgbG9hZERhdGEoY2l0eU5hbWUpXG5cbiAgICAgICAgcmV0dXJuIGAke2RhdGEubGF0aXR1ZGV9ICR7ZGF0YS5sb25naXR1ZGV9YDtcbiAgICAgICAgXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICB9IFxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXREYXRhKGZsYWcsIGNpdHlOYW1lLCBuYW1lLCB0ZW1wZXJhdHVyZSwgd2VhdGhlckRlc2NyaXB0aW9uLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YShjaXR5TmFtZSk7XG4gICAgICAgIGZsYWcuc3JjID0gZGF0YS5mbGFnO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbjtcbiAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKChOdW1iZXIpKGRhdGEudGVtcGVyYXR1cmUpKX1cXHhCMGBcbiAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gKGRhdGEud2VhdGhlckRlc2NyaXB0aW9uKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmKGlzQ2Vsc2l1cyl7XG4gICAgICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKChOdW1iZXIpKGRhdGEud2luZFNwZWVkKSl9IGttL2hgO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS53aW5kU3BlZWQpKX0gbXBoYDtcbiAgICAgICAgfVxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKChOdW1iZXIpKGRhdGEuZmVlbHNMaWtlKSl9XFx4QjBgO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9JWA7XG4gICAgICAgIGhpZ2gudGV4dENvbnRlbnQgPSBgSDogJHtNYXRoLnJvdW5kKChOdW1iZXIpKGRhdGEuaGlnaCkpfVxceEIwYDtcbiAgICAgICAgbG93LnRleHRDb250ZW50ID0gYEw6ICR7TWF0aC5yb3VuZCgoTnVtYmVyKShkYXRhLmxvdykpfVxceEIwYDtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHNldERhdGUoZGF0YS50aW1lLCBkYXRhLnRpbWVab25lKTtcbiAgICAgICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5pY29ufUAyeC5wbmdgO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXRlKHRpbWUsIHRpbWVab25lKXtcbiAgICBsZXQgZGF0ZVRva2VucyA9IG5ldyBEYXRlKCh0aW1lICsgdGltZVpvbmUpICogMTAwMCkudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpO1xuXG4gICAgcmV0dXJuIGAke2RhdGVUb2tlbnNbMF19YDtcbn1cblxuZnVuY3Rpb24gc2V0SG91cih0aW1lLCB0aW1lWm9uZSl7XG4gICAgbGV0IGRhdGVUb2tlbnMgPSBuZXcgRGF0ZSgodGltZSArIHRpbWVab25lKSAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygpLnNwbGl0KFwiOlwiKTtcbiAgICBcbiAgICByZXR1cm4gYCR7ZGF0ZVRva2Vuc1swXX06JHtkYXRlVG9rZW5zWzFdfWA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRGb3JlY2FzdChjaXR5TmFtZSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSAoYXdhaXQgZ2V0Q29vcmRpbmF0ZXMoY2l0eU5hbWUpKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBkYXRhO1xuICAgIFxuICAgICAgICBpZihpc0NlbHNpdXMpe1xuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlc1swXX0mbG9uPSR7Y29vcmRpbmF0ZXNbMV19JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJmFwcGlkPTg0YjA5ZDczN2YwMzJmYmYxZjU2NzNiZDk2NDUwMmMyJnVuaXRzPW1ldHJpY2AsIHttb2RlOiBcImNvcnNcIn0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlc1swXX0mbG9uPSR7Y29vcmRpbmF0ZXNbMV19JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJmFwcGlkPTg0YjA5ZDczN2YwMzJmYmYxZjU2NzNiZDk2NDUwMmMyJnVuaXRzPWltcGVyaWFsYCwge21vZGU6IFwiY29yc1wifSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGRhdGFKc29uID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3RcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZmxleGlmeS1jb2x1bW5cIiwgXCJmb3JlY2FzdHNcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpbWVmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZWZyYW1lXCIpO1xuICAgIFxuICAgICAgICBsZXQgYXJyO1xuICAgIFxuICAgICAgICBpZih0aW1lZnJhbWUudGV4dENvbnRlbnQgPT0gXCJEYWlseVwiKXtcbiAgICAgICAgICAgIGFyciA9IGRhdGFKc29uLmRhaWx5O1xuICAgICAgICAgICAgY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuY2VPZlJhaW5cIik7XG4gICAgICAgICAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHsoTWF0aC5yb3VuZCgoKE51bWJlcikoYXJyWzBdLnBvcCkpICogMTAwKSl9JWBcbiAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgZmlsbGVkQXJyYXkgPSBkYXRhSnNvbi5ob3VybHk7XG4gICAgICAgICAgICBhcnIgPSBmaWxsZWRBcnJheS5zbGljZSgwLCAyNCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBudWxsO1xuICAgIFxuICAgICAgICBpZihmb3JlY2FzdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcmVjYXN0Q29udGFpbmVyLmNoaWxkcmVuWzFdKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT57IFxuICAgICAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKFwiZGF5XCIpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBcbiAgICAgICAgICAgIGlmKHRpbWVmcmFtZS50ZXh0Q29udGVudCA9PSBcIkRhaWx5XCIpe1xuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgoTnVtYmVyKShlbGVtZW50LnRlbXAuZGF5KSl9XFx4QjBgO1xuICAgICAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBzZXREYXRlKGVsZW1lbnQuZHQsIGRhdGFKc29uLnRpbWV6b25lX29mZnNldCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZWxlbWVudC50ZW1wKSl9XFx4QjBgO1xuICAgICAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBzZXRIb3VyKGVsZW1lbnQuZHQsIGRhdGFKc29uLnRpbWV6b25lX29mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2VsZW1lbnQud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgIFxuICAgICAgICAgICAgZGF5LmFwcGVuZChkYXRlLCB0ZW1wZXJhdHVyZSwgaWNvbik7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKGRheSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgIH1cbn0gICBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgc2V0dXBTZWN0aW9ucyB9IGZyb20gXCIuL3NldHVwLmRvbVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbnNldHVwU2VjdGlvbnMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=