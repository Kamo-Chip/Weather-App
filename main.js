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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    font-family:arial;\n    background-color:#ffffff;\n    margin: 0;\n}\n\n.flexify-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.flexify-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    width: 100vw;\n    height: 100vh;\n\n}\n\n/*Options container styles*/\n.logo-container{\n    width:8%;\n}\n.logo{\n    height: 3rem;\n    width: 3rem;\n    padding: .3em 0 0 .3em;\n}\n\n.logo-container p{\n    margin: 0;\n}\n\n/*Main container styles*/\n.main-container{\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    width: 60%;\n    max-width: 600px; \n    min-height: 210px;\n    height: 100%;\n    align-items: center;\n}\n\n.vertical-line{\n    border-left: 3px solid #000;\n    height: 100vh;\n    width: 3px;\n    position: fixed;\n    top: 0;\n    justify-self: left;\n}\n\n.search-container{\n    margin: 1em 0 0 0;\n    width: fit-content;\n    min-width: 10rem;\n    max-height: 2.5rem;\n}\n\n.search-container input{\n    font-size: 1.5rem;\n    border: .1em solid;\n    border-radius: 10px;  \n    width: 85%;\n}\n\n.search-container img{\n    width: 15%;\n}\n.weather-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 30%;\n    width: 100%;\n    min-height: fit-content;\n    margin: 2rem 0 0 0;\n    background-color: rgb(93, 176, 253);\n    border: .2em solid;\n}\n\n.weather-container{\n    height: 100%;\n    width: 50%;\n}\n\n.location-div{\n    display: flex;\n    align-items: center;\n}\n\n.flag{\n    height: 2rem;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.location-container p{\n    margin: 0;\n    text-align: center;\n}\n.location-container img{\n    justify-self: center;\n    align-self: center;\n    height: 10rem;\n    width: 10rem;\n}\n\n.weather-container button span{\n    padding: 0 1rem 0 1rem;\n}\n\n.temperature{\n    margin: 0;\n    font-size:5rem;\n    justify-self: center;\n}\n\n.temperature-container{\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.data-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 1rem;\n    max-height: 70%;\n    width: 100%;\n    margin: 2rem 0 0 0;\n}\n\n.data-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    background-color: rgb(93, 176, 253);\n    border-style: solid;\n    border-width: 4px;\n    height: 100%;\n}\n\n.data-div:hover, .weather-div:hover{\n    background-color: rgba(93, 176, 253, 0.63);;\n}\n\n.data-div p{\n    text-align: center;\n}\n\n.data-div img{\n    max-height: 2rem;\n    max-width: 2rem;\n    margin: .1em 0;\n}\n\n.temperature-container div{\n    font-size: 1.5rem;\n}\n\n.temperature-container div p{\n    margin: 5px 0 0 0;\n}\n\n/*Forecast container styles*/\n.forecast-container{\n    display: grid;\n    grid-template-rows: auto auto;\n    overflow-y: auto;\n    width: 28%;\n   \n}\n\n.timeframe-container{\n    justify-self: center;\n    width: 13rem;\n}\n\n.timeframe-container p{\n    width: 5rem;\n    font-size: 2rem;\n    margin: 0 .5rem 0 0 ;\n}\n\n.timeframe-container img{\n    max-height: 3rem;\n    max-width: 3rem;\n    text-align: center;\n}\n\n.forecasts{\n    width: 100%;\n}\n\n.day{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    align-items: center;\n    min-height: 5rem;\n    width: 100%;\n    padding: 0 0 .5em 0;\n    border-bottom: 2px solid #000;\n}\n\n.day:hover{\n    background-color:rgba(221, 221, 221, 0.753);\n}\n\n.day p{\n    padding-left: 20px;\n}\n\n.day img{\n    max-width: 6rem\n}\n\n@media (max-width: 767px){\n    .forecast-container{\n        display: none;\n    }\n\n    .container{\n        justify-content:center;\n    }\n\n    .main-container{\n        width: 90vw;\n    }\n    \n    .search-container{\n        width: 15rem;\n    }\n\n    .weather-div{\n        flex-direction: column;\n        align-items: center;\n        height: 40%;\n    }\n    .logo-container{\n        position: absolute;\n        left: 0;\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .weather-container{\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .location-div{\n        align-items: center;\n        justify-content: center;\n    }\n\n    .location-div{\n        \n    }\n    .location-div img{\n        height: 2rem;\n    }\n\n    .location-container{\n        height: 80px;\n\n    }\n\n    .location-container img{\n       display: none;\n    }\n\n    button{\n        margin: 2rem 0 0 0;\n        align-self: center;\n    }\n}\n/*General styles*/\n.weather-div, .data-div{\n    border-radius: 20px;\n}\n\nbutton{\n    font-size: 1.5rem;\n    width: 200px;\n    height: 40px;\n    margin-bottom: 30px;\n    border-radius: 15px;\n    border-style: solid;\n    border-color: #000;\n    background-color: #fff;\n}\n\nh1{\n    text-align: center;\n    font-size: 1.5rem;\n}\nspan:hover{\n    text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');\n\nbody{\n    font-family:arial;\n    background-color:#ffffff;\n    margin: 0;\n}\n\n.flexify-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.flexify-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    width: 100vw;\n    height: 100vh;\n\n}\n\n/*Options container styles*/\n.logo-container{\n    width:8%;\n}\n.logo{\n    height: 3rem;\n    width: 3rem;\n    padding: .3em 0 0 .3em;\n}\n\n.logo-container p{\n    margin: 0;\n}\n\n/*Main container styles*/\n.main-container{\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    width: 60%;\n    max-width: 600px; \n    min-height: 210px;\n    height: 100%;\n    align-items: center;\n}\n\n.vertical-line{\n    border-left: 3px solid #000;\n    height: 100vh;\n    width: 3px;\n    position: fixed;\n    top: 0;\n    justify-self: left;\n}\n\n.search-container{\n    margin: 1em 0 0 0;\n    width: fit-content;\n    min-width: 10rem;\n    max-height: 2.5rem;\n}\n\n.search-container input{\n    font-size: 1.5rem;\n    border: .1em solid;\n    border-radius: 10px;  \n    width: 85%;\n}\n\n.search-container img{\n    width: 15%;\n}\n.weather-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 30%;\n    width: 100%;\n    min-height: fit-content;\n    margin: 2rem 0 0 0;\n    background-color: rgb(93, 176, 253);\n    border: .2em solid;\n}\n\n.weather-container{\n    height: 100%;\n    width: 50%;\n}\n\n.location-div{\n    display: flex;\n    align-items: center;\n}\n\n.flag{\n    height: 2rem;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.location-container p{\n    margin: 0;\n    text-align: center;\n}\n.location-container img{\n    justify-self: center;\n    align-self: center;\n    height: 10rem;\n    width: 10rem;\n}\n\n.weather-container button span{\n    padding: 0 1rem 0 1rem;\n}\n\n.temperature{\n    margin: 0;\n    font-size:5rem;\n    justify-self: center;\n}\n\n.temperature-container{\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.data-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 1rem;\n    max-height: 70%;\n    width: 100%;\n    margin: 2rem 0 0 0;\n}\n\n.data-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    background-color: rgb(93, 176, 253);\n    border-style: solid;\n    border-width: 4px;\n    height: 100%;\n}\n\n.data-div:hover, .weather-div:hover{\n    background-color: rgba(93, 176, 253, 0.63);;\n}\n\n.data-div p{\n    text-align: center;\n}\n\n.data-div img{\n    max-height: 2rem;\n    max-width: 2rem;\n    margin: .1em 0;\n}\n\n.temperature-container div{\n    font-size: 1.5rem;\n}\n\n.temperature-container div p{\n    margin: 5px 0 0 0;\n}\n\n/*Forecast container styles*/\n.forecast-container{\n    display: grid;\n    grid-template-rows: auto auto;\n    overflow-y: auto;\n    width: 28%;\n   \n}\n\n.timeframe-container{\n    justify-self: center;\n    width: 13rem;\n}\n\n.timeframe-container p{\n    width: 5rem;\n    font-size: 2rem;\n    margin: 0 .5rem 0 0 ;\n}\n\n.timeframe-container img{\n    max-height: 3rem;\n    max-width: 3rem;\n    text-align: center;\n}\n\n.forecasts{\n    width: 100%;\n}\n\n.day{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    align-items: center;\n    min-height: 5rem;\n    width: 100%;\n    padding: 0 0 .5em 0;\n    border-bottom: 2px solid #000;\n}\n\n.day:hover{\n    background-color:rgba(221, 221, 221, 0.753);\n}\n\n.day p{\n    padding-left: 20px;\n}\n\n.day img{\n    max-width: 6rem\n}\n\n@media (max-width: 767px){\n    .forecast-container{\n        display: none;\n    }\n\n    .container{\n        justify-content:center;\n    }\n\n    .main-container{\n        width: 90vw;\n    }\n    \n    .search-container{\n        width: 15rem;\n    }\n\n    .weather-div{\n        flex-direction: column;\n        align-items: center;\n        height: 40%;\n    }\n    .logo-container{\n        position: absolute;\n        left: 0;\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .weather-container{\n        height: fit-content;\n        width: fit-content;\n    }\n\n    .location-div{\n        align-items: center;\n        justify-content: center;\n    }\n\n    .location-div{\n        \n    }\n    .location-div img{\n        height: 2rem;\n    }\n\n    .location-container{\n        height: 80px;\n\n    }\n\n    .location-container img{\n       display: none;\n    }\n\n    button{\n        margin: 2rem 0 0 0;\n        align-self: center;\n    }\n}\n/*General styles*/\n.weather-div, .data-div{\n    border-radius: 20px;\n}\n\nbutton{\n    font-size: 1.5rem;\n    width: 200px;\n    height: 40px;\n    margin-bottom: 30px;\n    border-radius: 15px;\n    border-style: solid;\n    border-color: #000;\n    background-color: #fff;\n}\n\nh1{\n    text-align: center;\n    font-size: 1.5rem;\n}\nspan:hover{\n    text-decoration: underline;\n}\n"],"sourceRoot":""}]);
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
    title1.textContent = "Chance of Rain";

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

    const vLine2 = document.createElement("div");
    vLine2.classList.add("vertical-line");

    forecastContainer.appendChild(vLine2);

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

    return `${dateTokens[0]}, ${dateTokens[2]} ${dateTokens[1]} `;
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
    
        if(forecastContainer.children.length > 2){
            forecastContainer.removeChild(forecastContainer.children[2]);
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

module.exports = __webpack_require__.p + "6dfb5c161b0428de8c18.svg";

/***/ }),

/***/ "./src/arrow_forward.svg":
/*!*******************************!*\
  !*** ./src/arrow_forward.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5761bac40a982f54dd19.svg";

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

module.exports = __webpack_require__.p + "bbdfa6499b0b69136643.svg";

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

module.exports = __webpack_require__.p + "4a3d702862b90186cc74.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlDQUFpQyxHQUFHLFNBQVMsaUZBQWlGLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUss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Q0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDdEI7O0FBRXRCLHlEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL3NldHVwLmRvbS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OmFyaWFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmZsZXhpZnktcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleGlmeS1jb2x1bW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLypPcHRpb25zIGNvbnRhaW5lciBzdHlsZXMqL1xcbi5sb2dvLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6OCU7XFxufVxcbi5sb2dve1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBwYWRkaW5nOiAuM2VtIDAgMCAuM2VtO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIgcHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKk1haW4gY29udGFpbmVyIHN0eWxlcyovXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDsgXFxuICAgIG1pbi1oZWlnaHQ6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi52ZXJ0aWNhbC1saW5le1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAuMWVtIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgXFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGltZ3tcXG4gICAgd2lkdGg6IDE1JTtcXG59XFxuLndlYXRoZXItZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAycmVtIDAgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDE3NiwgMjUzKTtcXG4gICAgYm9yZGVyOiAuMmVtIHNvbGlkO1xcbn1cXG5cXG4ud2VhdGhlci1jb250YWluZXJ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmxvY2F0aW9uLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsYWd7XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvY2F0aW9uLWNvbnRhaW5lciBpbWd7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIGJ1dHRvbiBzcGFue1xcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVye1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxufVxcblxcbi5kYXRhLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCAxNzYsIDI1Myk7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXRhLWRpdjpob3ZlciwgLndlYXRoZXItZGl2OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkzLCAxNzYsIDI1MywgMC42Myk7O1xcbn1cXG5cXG4uZGF0YS1kaXYgcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGF0YS1kaXYgaW1ne1xcbiAgICBtYXgtaGVpZ2h0OiAycmVtO1xcbiAgICBtYXgtd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbjogLjFlbSAwO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVyIGRpdntcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIgZGl2IHB7XFxuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xcbn1cXG5cXG4vKkZvcmVjYXN0IGNvbnRhaW5lciBzdHlsZXMqL1xcbi5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMjglO1xcbiAgIFxcbn1cXG5cXG4udGltZWZyYW1lLWNvbnRhaW5lcntcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG59XFxuXFxuLnRpbWVmcmFtZS1jb250YWluZXIgcHtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIC41cmVtIDAgMCA7XFxufVxcblxcbi50aW1lZnJhbWUtY29udGFpbmVyIGltZ3tcXG4gICAgbWF4LWhlaWdodDogM3JlbTtcXG4gICAgbWF4LXdpZHRoOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMmZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAwIC41ZW0gMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5kYXk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMjEsIDIyMSwgMjIxLCAwLjc1Myk7XFxufVxcblxcbi5kYXkgcHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZGF5IGltZ3tcXG4gICAgbWF4LXdpZHRoOiA2cmVtXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XFxuICAgIC5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgfVxcblxcbiAgICAud2VhdGhlci1kaXZ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogNDAlO1xcbiAgICB9XFxuICAgIC5sb2dvLWNvbnRhaW5lcntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC53ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWRpdntcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tZGl2e1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgLmxvY2F0aW9uLWRpdiBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uLWNvbnRhaW5lcntcXG4gICAgICAgIGhlaWdodDogODBweDtcXG5cXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tY29udGFpbmVyIGltZ3tcXG4gICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuLypHZW5lcmFsIHN0eWxlcyovXFxuLndlYXRoZXItZGl2LCAuZGF0YS1kaXZ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbmgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5zcGFuOmhvdmVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0lBQ2YsTUFBTTtJQUNOLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixVQUFVOztBQUVkOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7O0lBRUE7O0lBRUE7SUFDQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZOztJQUVoQjs7SUFFQTtPQUNHLGFBQWE7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0FBQ0o7QUFDQSxpQkFBaUI7QUFDakI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZyZWRva2EmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6YXJpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZmxleGlmeS1yb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4aWZ5LWNvbHVtbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG5cXG4vKk9wdGlvbnMgY29udGFpbmVyIHN0eWxlcyovXFxuLmxvZ28tY29udGFpbmVye1xcbiAgICB3aWR0aDo4JTtcXG59XFxuLmxvZ297XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIHBhZGRpbmc6IC4zZW0gMCAwIC4zZW07XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qTWFpbiBjb250YWluZXIgc3R5bGVzKi9cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4OyBcXG4gICAgbWluLWhlaWdodDogMjEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnZlcnRpY2FsLWxpbmV7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICAgIG1hcmdpbjogMWVtIDAgMCAwO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogMTByZW07XFxuICAgIG1heC1oZWlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IC4xZW0gc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICBcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW1ne1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG4ud2VhdGhlci1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgMTc2LCAyNTMpO1xcbiAgICBib3JkZXI6IC4yZW0gc29saWQ7XFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ubG9jYXRpb24tZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxhZ3tcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubG9jYXRpb24tY29udGFpbmVyIGltZ3tcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1jb250YWluZXIgYnV0dG9uIHNwYW57XFxuICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6NXJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wZXJhdHVyZS1jb250YWluZXJ7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxufVxcblxcbi5kYXRhLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICAgIG1heC1oZWlnaHQ6IDcwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSAwIDAgMDtcXG59XFxuXFxuLmRhdGEtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDE3NiwgMjUzKTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRhdGEtZGl2OmhvdmVyLCAud2VhdGhlci1kaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTMsIDE3NiwgMjUzLCAwLjYzKTs7XFxufVxcblxcbi5kYXRhLWRpdiBwe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXRhLWRpdiBpbWd7XFxuICAgIG1heC1oZWlnaHQ6IDJyZW07XFxuICAgIG1heC13aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luOiAuMWVtIDA7XFxufVxcblxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIgZGl2e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciBkaXYgcHtcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxufVxcblxcbi8qRm9yZWNhc3QgY29udGFpbmVyIHN0eWxlcyovXFxuLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiAyOCU7XFxuICAgXFxufVxcblxcbi50aW1lZnJhbWUtY29udGFpbmVye1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbn1cXG5cXG4udGltZWZyYW1lLWNvbnRhaW5lciBwe1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IDAgLjVyZW0gMCAwIDtcXG59XFxuXFxuLnRpbWVmcmFtZS1jb250YWluZXIgaW1ne1xcbiAgICBtYXgtaGVpZ2h0OiAzcmVtO1xcbiAgICBtYXgtd2lkdGg6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0c3tcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kYXl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAyZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDAgLjVlbSAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuLmRheTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIyMSwgMjIxLCAyMjEsIDAuNzUzKTtcXG59XFxuXFxuLmRheSBwe1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5kYXkgaW1ne1xcbiAgICBtYXgtd2lkdGg6IDZyZW1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcXG4gICAgLmZvcmVjYXN0LWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lcntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zZWFyY2gtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDE1cmVtO1xcbiAgICB9XFxuXFxuICAgIC53ZWF0aGVyLWRpdntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgIH1cXG4gICAgLmxvZ28tY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXItY29udGFpbmVye1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tZGl2e1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1kaXZ7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAubG9jYXRpb24tZGl2IGltZ3tcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb24tY29udGFpbmVye1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcblxcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbi1jb250YWluZXIgaW1ne1xcbiAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIG1hcmdpbjogMnJlbSAwIDAgMDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG4vKkdlbmVyYWwgc3R5bGVzKi9cXG4ud2VhdGhlci1kaXYsIC5kYXRhLWRpdntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuaDF7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbnNwYW46aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9zZWFyY2guc3ZnXCI7XG5pbXBvcnQgQmFja0Fycm93IGZyb20gXCIuL2Fycm93X2JhY2suc3ZnXCI7XG5pbXBvcnQgRm9yd2FyZEFycm93IGZyb20gXCIuL2Fycm93X2ZvcndhcmQuc3ZnXCI7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vbG9jYXRpb24uc3ZnXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9jbG91ZHkucG5nXCI7XG5pbXBvcnQgUmFpbiBmcm9tIFwiLi9yYWluLnBuZ1wiO1xuaW1wb3J0IEh1bWlkaXR5IGZyb20gXCIuL3JhaW4tZHJvcHMucG5nXCI7XG5pbXBvcnQgRmVlbHMgZnJvbSBcIi4vdGhlcm1vbWV0ZXIucG5nXCI7XG5pbXBvcnQgV2luZCBmcm9tIFwiLi93aW5kLnBuZ1wiO1xuXG5sZXQgaXNDZWxzaXVzID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwU2VjdGlvbnMoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IHNldHVwT3B0aW9uc0NvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IHNldHVwTWFpbkNvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBzZXR1cEZvcmVjYXN0Q29udGFpbmVyKCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxvZ29Db250YWluZXIsIG1haW5Db250YWluZXIsIGZvcmVjYXN0Q29udGFpbmVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBPcHRpb25zQ29udGFpbmVyKCl7XG4gICAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nby1jb250YWluZXJcIiwgXCJmbGV4aWZ5LWNvbHVtblwiKTtcblxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IExvZ287XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcblxuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kKGxvZ28pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNldHVwTWFpbkNvbnRhaW5lcigpe1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1jb250YWluZXJcIiwgXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBzZWFyY2hJY29uLnNyYyA9IFNlYXJjaDtcbiAgICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBpZihzZWFyY2hCYXIudmFsdWUgIT09IFwiXCIpe1xuICAgICAgICAgICAgc2V0dXBEb20oZmxhZywgc2VhcmNoQmFyLnZhbHVlLCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpO1xuICAgICAgICAgICAgc2VhcmNoQmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIExvY2F0aW9uXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpPT57XG4gICAgICAgICAgICAgICAgc2VhcmNoQmFyLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlYXJjaEJhci5zZXRDdXN0b21WYWxpZGl0eShcIkVudGVyIGEgY2l0eVwiKTtcbiAgICAgICAgICAgIHNlYXJjaEJhci5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc2VhcmNoQmFyLnR5cGUgPSBcInRleHRcIjtcbiAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSBgU2VhcmNoIExvY2F0aW9uYDtcblxuICAgIHNlYXJjaENvbnRhaW5lci5hcHBlbmQoc2VhcmNoQmFyLCBzZWFyY2hJY29uKTtcblxuICAgIGNvbnN0IGRpdldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdldlYXRoZXIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZGl2XCIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb250YWluZXJcIiwgXCJmbGV4aWZ5LWNvbHVtblwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uSWNvbi5zcmMgPSBMb2NhdGlvbjtcbiAgICBsb2NhdGlvbkljb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uSWNvblwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvY2F0aW9uTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvY2F0aW9uXCIpO1xuXG4gICAgXG4gICAgY29uc3QgZmxhZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZsYWcuY2xhc3NMaXN0LmFkZChcImZsYWdcIik7XG5cbiAgICBjb25zdCBkaXZMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWRpdlwiKTtcblxuICAgIGRpdkxvY2F0aW9uLmFwcGVuZChsb2NhdGlvbkljb24sIGxvY2F0aW9uTmFtZSwgZmxhZyk7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVtcGVyYXR1cmVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpO1xuXG4gICAgY29uc3QgaGlnaEFuZExvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBoaWdoQW5kTG93Q29udGFpbmVyLmFwcGVuZChoaWdoLCBsb3cpO1xuXG4gICAgdGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kKHRlbXBlcmF0dXJlLCBoaWdoQW5kTG93Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ0blRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnN0IGNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjZWxzaXVzLnRleHRDb250ZW50ID0gXCJcXHhCMENcIjtcbiAgICBjZWxzaXVzLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcbiAgICBjZWxzaXVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBpc0NlbHNpdXMgPSB0cnVlO1xuICAgICAgICBzZXR1cERvbShmbGFnLCBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQsIGxvY2F0aW9uTmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyk7XG4gICAgICAgIGNlbHNpdXMuc3R5bGUudGV4dERlY29yYXRpb24gPSBcInVuZGVybGluZVwiO1xuICAgICAgICBmYWhyZW5oZWl0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZmFocmVuaGVpdC50ZXh0Q29udGVudCA9IFwiXFx4QjBGXCI7XG4gICAgZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgaXNDZWxzaXVzID0gZmFsc2U7XG4gICAgICAgIHNldHVwRG9tKGZsYWcsIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCwgbG9jYXRpb25OYW1lLCB0ZW1wZXJhdHVyZSwgd2VhdGhlciwgd2VhdGhlckljb24sIHdpbmRTcGVlZCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgZGF0ZSwgaGlnaCwgbG93KTtcbiAgICAgICAgY2Vsc2l1cy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICBmYWhyZW5oZWl0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcbiAgICB9KTtcblxuICAgIGJ0blRlbXBlcmF0dXJlLmFwcGVuZChjZWxzaXVzLFwiL1wiLCBmYWhyZW5oZWl0KTtcblxuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kKGRpdkxvY2F0aW9uLCB0ZW1wZXJhdHVyZUNvbnRhaW5lciwgYnRuVGVtcGVyYXR1cmUpO1xuXG4gICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kKHdlYXRoZXIsIHdlYXRoZXJJY29uLCBkYXRlKTtcblxuICAgIGRpdldlYXRoZXIuYXBwZW5kKHdlYXRoZXJDb250YWluZXIsIGxvY2F0aW9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGEtY29udGFpbmVyXCIsIFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCBkaXZDaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkNoYW5jZU9mUmFpbi5jbGFzc0xpc3QuYWRkKFwiZGF0YS1kaXZcIik7XG5cbiAgICBjb25zdCBoZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIxLmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IGNoYW5jZU9mUmFpbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGFuY2VPZlJhaW5JY29uLnNyYyA9IFJhaW47XG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUxLnRleHRDb250ZW50ID0gXCJDaGFuY2Ugb2YgUmFpblwiO1xuXG4gICAgaGVhZGVyMS5hcHBlbmQoY2hhbmNlT2ZSYWluSWNvbiwgdGl0bGUxKTtcblxuICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNoYW5jZU9mUmFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoYW5jZU9mUmFpblwiKTtcbiAgICBkaXZDaGFuY2VPZlJhaW4uYXBwZW5kKGhlYWRlcjEsIGNoYW5jZU9mUmFpbik7XG5cbiAgICBjb25zdCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIyLmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IHdpbmRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgd2luZEljb24uc3JjID0gV2luZDtcblxuICAgIGNvbnN0IGRpdldpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2V2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWRpdlwiKTtcblxuICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZTIudGV4dENvbnRlbnQgPSBcIldpbmQgU3BlZWRcIjtcblxuICAgIGhlYWRlcjIuYXBwZW5kKHdpbmRJY29uLCB0aXRsZTIpO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBkaXZXaW5kU3BlZWQuYXBwZW5kKGhlYWRlcjIsIHdpbmRTcGVlZCk7XG4gICAgXG4gICAgY29uc3QgZGl2RmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcImRhdGEtZGl2XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyMy5jbGFzc0xpc3QuYWRkKFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCBmZWVsc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBmZWVsc0ljb24uc3JjID0gRmVlbHM7XG5cbiAgICBjb25zdCB0aXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUzLnRleHRDb250ZW50ID0gXCJGZWVscyBMaWtlXCI7XG5cbiAgICBoZWFkZXIzLmFwcGVuZChmZWVsc0ljb24sIHRpdGxlMyk7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGRpdkZlZWxzTGlrZS5hcHBlbmQoaGVhZGVyMywgZmVlbHNMaWtlKTtcblxuICAgIGNvbnN0IGRpdkh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZIdW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiZGF0YS1kaXZcIik7XG5cbiAgICBjb25zdCBoZWFkZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXI0LmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LXJvd1wiKTtcblxuICAgIGNvbnN0IGh1bWlkaXR5SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGh1bWlkaXR5SWNvbi5zcmMgPSBIdW1pZGl0eTtcblxuICAgIGNvbnN0IHRpdGxlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZTQudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5XCI7XG5cbiAgICBoZWFkZXI0LmFwcGVuZChodW1pZGl0eUljb24sIHRpdGxlNCk7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgZGl2SHVtaWRpdHkuYXBwZW5kKGhlYWRlcjQsIGh1bWlkaXR5KTtcblxuICAgIGRhdGFDb250YWluZXIuYXBwZW5kKGRpdkNoYW5jZU9mUmFpbiwgZGl2V2luZFNwZWVkLCBkaXZGZWVsc0xpa2UsIGRpdkh1bWlkaXR5KTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHNlYXJjaENvbnRhaW5lciwgZGl2V2VhdGhlciwgZGF0YUNvbnRhaW5lcik7XG5cbiAgICBzZXR1cERvbShmbGFnLCBcIkpvaGFubmVzYnVyZ1wiLCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzZXR1cEZvcmVjYXN0Q29udGFpbmVyKCl7XG4gICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcmVjYXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9yZWNhc3RcIik7XG4gICAgZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRpbWVmcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGltZWZyYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lZnJhbWUtY29udGFpbmVyXCIsIFwiZmxleGlmeS1yb3dcIik7XG5cbiAgICBjb25zdCB0aW1lZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aW1lZnJhbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aW1lZnJhbWVcIik7XG4gICAgdGltZWZyYW1lLnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xuXG4gICAgY29uc3QgYmFja0Fycm93ID0gbmV3IEltYWdlKCk7XG4gICAgYmFja0Fycm93LnNyYyA9IEJhY2tBcnJvdztcbiAgICBiYWNrQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGNoYW5nZVRpbWVGcmFtZSh0aW1lZnJhbWUpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG4gICAgICAgIGxvYWRGb3JlY2FzdChsb2NhdGlvbi50ZXh0Q29udGVudCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3J3YXJkQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb3J3YXJkQXJyb3cuc3JjID0gRm9yd2FyZEFycm93O1xuICAgIGZvcndhcmRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgY2hhbmdlVGltZUZyYW1lKHRpbWVmcmFtZSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbiAgICAgICAgbG9hZEZvcmVjYXN0KGxvY2F0aW9uLnRleHRDb250ZW50KTtcbiAgICB9KTtcblxuICAgIHRpbWVmcmFtZUNvbnRhaW5lci5hcHBlbmQoYmFja0Fycm93LCB0aW1lZnJhbWUsIGZvcndhcmRBcnJvdyk7XG5cbiAgICBjb25zdCB2TGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZMaW5lMi5jbGFzc0xpc3QuYWRkKFwidmVydGljYWwtbGluZVwiKTtcblxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHZMaW5lMik7XG5cbiAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lZnJhbWVDb250YWluZXIpXG5cbiAgICBjb25zb2xlLmxvZyh0aW1lZnJhbWVDb250YWluZXIpXG5cbiAgICByZXR1cm4gZm9yZWNhc3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRpbWVGcmFtZSh0aW1lZnJhbWUpe1xuICAgIGlmKHRpbWVmcmFtZS50ZXh0Q29udGVudCA9PT0gXCJEYWlseVwiKXtcbiAgICAgICAgdGltZWZyYW1lLnRleHRDb250ZW50ID0gXCJIb3VybHlcIjtcbiAgICB9ZWxzZXtcbiAgICAgICAgdGltZWZyYW1lLnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBEb20oZmxhZywgY2l0eU5hbWUsIGxvY2F0aW9uTmFtZSwgdGVtcGVyYXR1cmUsIHdlYXRoZXIsIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyl7XG4gICAgdHJ5e1xuICAgICAgICBzZXREYXRhKGZsYWcsIGNpdHlOYW1lLCBsb2NhdGlvbk5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyLCB3ZWF0aGVySWNvbiwgd2luZFNwZWVkLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBkYXRlLCBoaWdoLCBsb3cpO1xuICAgICAgICBsb2FkRm9yZWNhc3QoY2l0eU5hbWUpO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVybCh1cmwpe1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge21vZGU6XCJjb3JzXCJ9KVxuICAgIFxuICAgIGlmKHJlc3BvbnNlLm9rID09IGZhbHNlKXtcbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICBcbiAgICAgICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKT0+e1xuICAgICAgICAgICAgc2VhcmNoQmFyLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICB9KVxuICAgICAgICBzZWFyY2hCYXIuc2V0Q3VzdG9tVmFsaWRpdHkoXCJFbnRlciBhIHZhbGlkIGNpdHlcIik7XG4gICAgICAgIHNlYXJjaEJhci5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRGF0YShjaXR5TmFtZSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG5cbiAgICAgICAgaWYoaXNDZWxzaXVzKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZ2V0VXJsKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPTg0YjA5ZDczN2YwMzJmYmYxZjU2NzNiZDk2NDUwMmMyJnVuaXRzPW1ldHJpY2ApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBnZXRVcmwoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9ODRiMDlkNzM3ZjAzMmZiZjFmNTY3M2JkOTY0NTAyYzImdW5pdHM9aW1wZXJpYWxgKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBsZXQgZmxhZyA9IGBodHRwczovL2ZsYWdjZG4uY29tLzk2eDcyLyR7KHJlc3BvbnNlRGF0YS5zeXMuY291bnRyeSkudG9Mb3dlckNhc2UoKX0ucG5nYDtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gcmVzcG9uc2VEYXRhLm5hbWU7XG4gICAgICAgIGxldCB0ZW1wZXJhdHVyZSA9IHJlc3BvbnNlRGF0YS5tYWluLnRlbXA7XG4gICAgICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSByZXNwb25zZURhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IHRpbWUgPSByZXNwb25zZURhdGEuZHQ7XG4gICAgICAgIGxldCB0aW1lWm9uZSA9IHJlc3BvbnNlRGF0YS50aW1lem9uZTtcbiAgICAgICAgbGV0IHByZXNzdXJlID0gcmVzcG9uc2VEYXRhLm1haW4ucHJlc3N1cmU7XG4gICAgICAgIGxldCB3aW5kU3BlZWQgPSByZXNwb25zZURhdGEud2luZC5zcGVlZDtcbiAgICAgICAgbGV0IGZlZWxzTGlrZSA9IHJlc3BvbnNlRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gICAgICAgIGxldCBodW1pZGl0eSA9IHJlc3BvbnNlRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgICAgICBsZXQgY291bnRyeSA9IHJlc3BvbnNlRGF0YS5zeXMuY291bnRyeTtcbiAgICAgICAgbGV0IGhpZ2ggPSByZXNwb25zZURhdGEubWFpbi50ZW1wX21heDtcbiAgICAgICAgbGV0IGxvdyA9IHJlc3BvbnNlRGF0YS5tYWluLnRlbXBfbWluO1xuICAgICAgICBsZXQgbGF0aXR1ZGUgPSByZXNwb25zZURhdGEuY29vcmQubGF0O1xuICAgICAgICBsZXQgbG9uZ2l0dWRlID0gcmVzcG9uc2VEYXRhLmNvb3JkLmxvbjtcbiAgICAgICAgbGV0IGljb24gPSByZXNwb25zZURhdGEud2VhdGhlclswXS5pY29uO1xuXG4gICAgICAgIHJldHVybiB7IGZsYWcsIGljb24sIGxvY2F0aW9uLCB0ZW1wZXJhdHVyZSwgd2VhdGhlckRlc2NyaXB0aW9uLCB0aW1lLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGNvdW50cnksIHRpbWVab25lLCBoaWdoLCBsb3csIHByZXNzdXJlLCBsYXRpdHVkZSwgbG9uZ2l0dWRlIH07XG5cbiAgICB9Y2F0Y2goZXJyb3Ipe31cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eU5hbWUpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YShjaXR5TmFtZSlcblxuICAgICAgICByZXR1cm4gYCR7ZGF0YS5sYXRpdHVkZX0gJHtkYXRhLmxvbmdpdHVkZX1gO1xuICAgICAgICBcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgIH0gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldERhdGEoZmxhZywgY2l0eU5hbWUsIG5hbWUsIHRlbXBlcmF0dXJlLCB3ZWF0aGVyRGVzY3JpcHRpb24sIHdlYXRoZXJJY29uLCB3aW5kU3BlZWQsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGRhdGUsIGhpZ2gsIGxvdyl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGxvYWREYXRhKGNpdHlOYW1lKTtcbiAgICAgICAgZmxhZy5zcmMgPSBkYXRhLmZsYWc7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uO1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS50ZW1wZXJhdHVyZSkpfVxceEIwYFxuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAoZGF0YS53ZWF0aGVyRGVzY3JpcHRpb24pLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYoaXNDZWxzaXVzKXtcbiAgICAgICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS53aW5kU3BlZWQpKX0ga20vaGA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgoTnVtYmVyKShkYXRhLndpbmRTcGVlZCkpfSBtcGhgO1xuICAgICAgICB9XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS5mZWVsc0xpa2UpKX1cXHhCMGA7XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0lYDtcbiAgICAgICAgaGlnaC50ZXh0Q29udGVudCA9IGBIOiAke01hdGgucm91bmQoKE51bWJlcikoZGF0YS5oaWdoKSl9XFx4QjBgO1xuICAgICAgICBsb3cudGV4dENvbnRlbnQgPSBgTDogJHtNYXRoLnJvdW5kKChOdW1iZXIpKGRhdGEubG93KSl9XFx4QjBgO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gc2V0RGF0ZShkYXRhLnRpbWUsIGRhdGEudGltZVpvbmUpO1xuICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDJ4LnBuZ2A7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldERhdGUodGltZSwgdGltZVpvbmUpe1xuICAgIGxldCBkYXRlVG9rZW5zID0gbmV3IERhdGUoKHRpbWUgKyB0aW1lWm9uZSkgKiAxMDAwKS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIik7XG5cbiAgICByZXR1cm4gYCR7ZGF0ZVRva2Vuc1swXX0sICR7ZGF0ZVRva2Vuc1syXX0gJHtkYXRlVG9rZW5zWzFdfSBgO1xufVxuXG5mdW5jdGlvbiBzZXRIb3VyKHRpbWUsIHRpbWVab25lKXtcbiAgICBsZXQgZGF0ZVRva2VucyA9IG5ldyBEYXRlKCh0aW1lICsgdGltZVpvbmUpICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKCkuc3BsaXQoXCI6XCIpO1xuICAgIFxuICAgIHJldHVybiBgJHtkYXRlVG9rZW5zWzBdfToke2RhdGVUb2tlbnNbMV19YDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEZvcmVjYXN0KGNpdHlOYW1lKXtcbiAgICB0cnl7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IChhd2FpdCBnZXRDb29yZGluYXRlcyhjaXR5TmFtZSkpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgXG4gICAgICAgIGlmKGlzQ2Vsc2l1cyl7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9ODRiMDlkNzM3ZjAzMmZiZjFmNTY3M2JkOTY0NTAyYzImdW5pdHM9bWV0cmljYCwge21vZGU6IFwiY29yc1wifSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9ODRiMDlkNzM3ZjAzMmZiZjFmNTY3M2JkOTY0NTAyYzImdW5pdHM9aW1wZXJpYWxgLCB7bW9kZTogXCJjb3JzXCJ9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZGF0YUpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJmbGV4aWZ5LWNvbHVtblwiLCBcImZvcmVjYXN0c1wiKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGltZWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lZnJhbWVcIik7XG4gICAgXG4gICAgICAgIGxldCBhcnI7XG4gICAgXG4gICAgICAgIGlmKHRpbWVmcmFtZS50ZXh0Q29udGVudCA9PSBcIkRhaWx5XCIpe1xuICAgICAgICAgICAgYXJyID0gZGF0YUpzb24uZGFpbHk7XG4gICAgICAgICAgICBjb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5jZU9mUmFpblwiKTtcbiAgICAgICAgICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAkeyhNYXRoLnJvdW5kKCgoTnVtYmVyKShhcnJbMF0ucG9wKSkgKiAxMDApKX0lYFxuICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBmaWxsZWRBcnJheSA9IGRhdGFKc29uLmhvdXJseTtcbiAgICAgICAgICAgIGFyciA9IGZpbGxlZEFycmF5LnNsaWNlKDAsIDI0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IG51bGw7XG4gICAgXG4gICAgICAgIGlmKGZvcmVjYXN0Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDIpe1xuICAgICAgICAgICAgZm9yZWNhc3RDb250YWluZXIucmVtb3ZlQ2hpbGQoZm9yZWNhc3RDb250YWluZXIuY2hpbGRyZW5bMl0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYXJyLmZvckVhY2goZWxlbWVudCA9PnsgXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIFxuICAgICAgICAgICAgaWYodGltZWZyYW1lLnRleHRDb250ZW50ID09IFwiRGFpbHlcIil7XG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKChOdW1iZXIpKGVsZW1lbnQudGVtcC5kYXkpKX1cXHhCMGA7XG4gICAgICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHNldERhdGUoZWxlbWVudC5kdCwgZGF0YUpzb24udGltZXpvbmVfb2Zmc2V0KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgoTnVtYmVyKShlbGVtZW50LnRlbXApKX1cXHhCMGA7XG4gICAgICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHNldEhvdXIoZWxlbWVudC5kdCwgZGF0YUpzb24udGltZXpvbmVfb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZWxlbWVudC53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgXG4gICAgICAgICAgICBkYXkuYXBwZW5kKGRhdGUsIHRlbXBlcmF0dXJlLCBpY29uKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoZGF5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgfVxufSAgIFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBzZXR1cFNlY3Rpb25zIH0gZnJvbSBcIi4vc2V0dXAuZG9tXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuc2V0dXBTZWN0aW9ucygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==