/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    font-family: poppins;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\nmain {\r\n    display: inline-grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 20px;\r\n    row-gap: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\nform {\r\n    margin: 50px 40px 50px 0px;\r\n    position: relative;\r\n    \r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n\r\n.location {\r\n    display: flex;\r\n    margin-left: 10px;\r\n    align-items: center;\r\n    grid-column: 1/3;\r\n    color: white;\r\n}\r\n.location > img{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.weather {\r\n    max-width: 267px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    grid-column: 1/3;\r\n    color: white;\r\n}\r\n.weather > img {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.weather > p {\r\n    font-size: 30px;\r\n}\r\n\r\n.temp {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n}\r\n.humidity {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.uv {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.uv > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.wind {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.wind > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n#text {\r\n    width: 180px;\r\n    height: 30px;\r\n    border-radius: 20px 0px 0px 20px;\r\n    border: none;\r\n    box-shadow: 0px 0px 10px 1px #bbbbbb;\r\n    padding-left: 20px;\r\n}\r\n\r\n#text::placeholder{\r\n    padding-left: 3px;\r\n}\r\n\r\nbutton > img {\r\n    width: 18px;\r\n    height: 18px;\r\n    margin-top: 3px;\r\n    margin-right: 2px;\r\n}\r\n\r\nbutton {\r\n    grid-column: 1/3;\r\n    height: 40px;\r\n    border-radius: 20px;\r\n    border: white 2px solid;\r\n    font-size: 25px;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-color: #8dbdff;\r\n    box-shadow: inset 0 0 0 0 white;\r\n    transition: box-shadow 0.3s, color 0.3s;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: inset 267px 0 0 0 white;\r\n    color: #8dbdff;\r\n}\r\n\r\n#text:focus {\r\n    outline: none;\r\n}\r\n\r\n#submit {\r\n    width: 45px;\r\n    height: 32px;\r\n    border-radius: 0px 20px 20px 0px;\r\n    border: none;\r\n    background-color:  #64a1f4;\r\n    color: white;\r\n    box-shadow: 4px 0px 10px 1px #bbbbbb;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n#submit:hover {\r\n    background-color:  #3488ff;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,oBAAoB;IACpB,qCAAqC;IACrC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;;AAEtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,yBAAyB;IACzB,+BAA+B;IAC/B,uCAAuC;AAC3C;;AAEA;IACI,mCAAmC;IACnC,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n\r\nbody{\r\n    font-family: poppins;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\nmain {\r\n    display: inline-grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 20px;\r\n    row-gap: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\nform {\r\n    margin: 50px 40px 50px 0px;\r\n    position: relative;\r\n    \r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n\r\n.location {\r\n    display: flex;\r\n    margin-left: 10px;\r\n    align-items: center;\r\n    grid-column: 1/3;\r\n    color: white;\r\n}\r\n.location > img{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.weather {\r\n    max-width: 267px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    grid-column: 1/3;\r\n    color: white;\r\n}\r\n.weather > img {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.weather > p {\r\n    font-size: 30px;\r\n}\r\n\r\n.temp {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n}\r\n.humidity {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.uv {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.uv > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.wind {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.wind > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n#text {\r\n    width: 180px;\r\n    height: 30px;\r\n    border-radius: 20px 0px 0px 20px;\r\n    border: none;\r\n    box-shadow: 0px 0px 10px 1px #bbbbbb;\r\n    padding-left: 20px;\r\n}\r\n\r\n#text::placeholder{\r\n    padding-left: 3px;\r\n}\r\n\r\nbutton > img {\r\n    width: 18px;\r\n    height: 18px;\r\n    margin-top: 3px;\r\n    margin-right: 2px;\r\n}\r\n\r\nbutton {\r\n    grid-column: 1/3;\r\n    height: 40px;\r\n    border-radius: 20px;\r\n    border: white 2px solid;\r\n    font-size: 25px;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-color: #8dbdff;\r\n    box-shadow: inset 0 0 0 0 white;\r\n    transition: box-shadow 0.3s, color 0.3s;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: inset 267px 0 0 0 white;\r\n    color: #8dbdff;\r\n}\r\n\r\n#text:focus {\r\n    outline: none;\r\n}\r\n\r\n#submit {\r\n    width: 45px;\r\n    height: 32px;\r\n    border-radius: 0px 20px 20px 0px;\r\n    border: none;\r\n    background-color:  #64a1f4;\r\n    color: white;\r\n    box-shadow: 4px 0px 10px 1px #bbbbbb;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n#submit:hover {\r\n    background-color:  #3488ff;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ display)
/* harmony export */ });
function display(data,tempType,type){

    let clear = document.querySelector("main");
    while (clear.hasChildNodes()) {
        clear.removeChild(clear.firstChild);
    }

    const main = document.querySelector('main');
    main.style.padding = '20px';

    let date = data.current.last_updated;
    let time = date[11]+date[12];

    if(~~time >= 21 && ~~time <= 23){
        main.style.backgroundColor = '#4b86b4';
    }
    if(~~time >= 0 && ~~time <= 6){
        main.style.backgroundColor = '#4b86b4';
    }
    if(~~time >= 7 && ~~time <= 20) {
        main.style.backgroundColor = '#8dbdff';
    }

    let but = document.createElement('button');
    but.setAttribute('class', 'tempChange');
    but.innerHTML = type;
   
    let divLocation = document.createElement('div');
    divLocation.setAttribute('class', 'location');
    let imgLocation = new Image();
    imgLocation.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVR4nMWVv0tCURzFlYQI2xSXBnOJlvoDxCIcgxpqc6u1H+A/UFNNKU1ttdZQU2NbBtWUa0VQzRKVUUPUJ75whMflab5r0IEv3PfOuedcv1+5Lxb7bwD9wCpwAbypbL1iXK/mQ0Cd9rgyTS8nr3cwD4ZE/yVqi4tXlYtln4BLx6QC9AEJoOpw5z4BTefkiQCXcHmfgEaEgIZPQM1pQ1XGVtsOV/MJKIcMs+mcvIWyT0AGeOd3mCYTOUAhlS4CtrzMFZB2hu3CuLR3gEIWOwQs9GSugDhwHGJu7+K+pklgGijpOQU8BsxtnRJXkjbZjXEW2AE+ZPQFFMUVgE9VQe+K0qA9tjfbznwSeAoYnwJrQD6gWbIKPOeBdWlbQeYxERbwIME+kPNoaw44kMd9mOBO5CEw4hEwChzJ4zZMYP18keBbd9EGMAOM6es2oLL1ODALbAJn2mN4BqbanWIY2AsMmQiwK2O37ZCdoEFgXlfFCXCj4bX+Rba+FmeaOdsTta1/gh+seL05hWcb9QAAAABJRU5ErkJggg=='
    let location = document.createElement('p');
    location.innerHTML = data.location.name;
    divLocation.appendChild(imgLocation);
    divLocation.appendChild(location);
    main.appendChild(divLocation);

    let divIcon = document.createElement('div');
    divIcon.setAttribute('class', 'weather');
    let img = new Image();
    img.src = data.current.condition.icon;
    main.appendChild(img);
    let text = document.createElement('p');
    text.innerHTML = data.current.condition.text;
    divIcon.appendChild(img);
    divIcon.appendChild(text);
    main.appendChild(divIcon);

    

    let divTemp = document.createElement('div');
    divTemp.setAttribute('class', 'temp');
    let imgTemp = new Image();
    imgTemp.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nGNgwAKapi7XnLlyx+xJizbVp82cycpACijsXcW5YvuRqw9ff/p/4/Hrf9NXbJ0GEj/h7JwGwkfd3DTwGlDeO1f/5NX7f0AGgPDy7YcPkOSCip7ZxmduPARrBuEVOw4fAokfc3JKB+HjLi6aZBlwwtHRGITP2NuL0NaAxYmZMbfyC/4/qqkB4zOZ2R9B4v6VW9JBOKBmC34vrI+M9XpXX///e38/GF8qLXvLQAo44ehojGzAtaycSyBx36otaSDsU7kJfzSedHExQTbgblraYaIN+M/AwHg1Kmr/154euAEvq6o+XgwJySLK+af9/b3e1NX9gmmGuyIl5QxRBlwKCSn+0t2NohmE72dl3SLKgJO+vtovKis/oBtwOylpN1EGgMC1qKhJbxsavsA0P8zNvXfZ39+KaANA4FxoaMjVmJhZVyMiek/5+8viUwwABMcPDtiB8I0AAAAASUVORK5CYII=';
    let temp = document.createElement('p');
    if(tempType == 'temp_c'){
        temp.innerHTML = 'Temperature '+'<br>'+ data.current[tempType]+'°C';
    }
    else{
        temp.innerHTML = 'Temperature '+'<br>'+ data.current[tempType]+'°F';
    }
    divTemp.appendChild(imgTemp);
    divTemp.appendChild(temp);
    main.appendChild(divTemp);

    let divHumidity = document.createElement('div');
    divHumidity.setAttribute('class', 'humidity');
    let imgHumidity = new Image();
    imgHumidity.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKUlEQVR4nGNgoDZY9PhTMAjjU2N24tt/GGZABqvuvuNf9OTzk0VPPj+f/eiDEMkGLHz8ec6iJ1/+gzCITZLTFz/9YrTo8ee/MANA7AWPvpoRpfn///+Mix5/OQLXDMXzH38+DZLD5nQUL0y99y0cXTMMd1z/nkjQgL7b317hMqD39tePeJ2fcuxr4OyHX//Pefj1f9/tr/9Lz33/H3X453/Hbb//G2/4/d9ow5//xht+meM0QGfNnzrdtX/+48M6a363IutB8YLu2t+LCBkAUoPTAJ01f+oJumDtn1qcXtBd819Jd+3vnzgNWPP7h/76/wp4A1J37Z8U3bW//2La/PuPzuo/SejqsSZl7dW/HXTX/tmpu/b3ZxDWWftnh+6aX3bYLMSZF8gBAIjigxCxkt0hAAAAAElFTkSuQmCC";
    let humidity = document.createElement('p');
    humidity.innerHTML = "humidity "+data.current.humidity+'%';
    divHumidity.appendChild(imgHumidity);
    divHumidity.appendChild(humidity);
    main.appendChild(divHumidity);

    let divUv = document.createElement('div');
    divUv.setAttribute('class', 'uv');
    let imgUv = new Image();
    imgUv.src = 'data:image/png;base64,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';
    let uv = document.createElement('p');
    uv.innerHTML = 'UV '+data.current.uv;
    divUv.appendChild(imgUv);
    divUv.appendChild(uv);
    main.appendChild(divUv);

    let divWind = document.createElement('div');
    divWind.setAttribute('class','wind');
    let imgWind = new Image();
    imgWind.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMklEQVR4nO2bXUxcRRTHp1abpjVa06bVFz8KTStSWAoU0TZbCzuzBVJMlNjY1sSHfqAYKAtLAXFtLS3uzC5SxUqNDxqf+qg+GBMfamJoYt+A1tJld6FiQVI+yjIHtOkxc/vFx+4CW5rdu72/5P829+b+z5x7Zmb3XEIMDOIDxEXbPxtdY24cWkEeFnIb8EnGZSXl0Mq4/Je5AJlQkgEq5E+My71FZ3AxiUcYl3sph4HCk4C7vgLMcwO+2Qy4w30nCLdEheywHB+mJJ6gHOrz3YBvtwDuOgW4s2mq6enadmJoYnPtlWYSDzAB7+c3Au75GlDNfjjjk7IA0w/7bqbZu2uJnsnj8jmrC2D36RDmOfQxIYeDBWHrJ/2YVNp5w+xof5zoFSbk6TeaAYu+nD7D8J2Fwwt3xzllNhNwbvIYc/0gbrRdRlOl72eiR8wOfJRxuKZSX70C92Zdngwxfqm2OtyrA5hW5cUNJX9OED1CxVh6QSPg7pYp5ocsHJeHusbqGnt5cgZk1Pgw4UA7FhXpcGlkYnxnYRPgW6emBODHsBchLlJB0mrAsQFMr/bh2v1tmFnjySB6w+oaz1NL386pxc8923W3CiNgtqMX0+xeLQCbav3bid4ocOAyJmTn3cLH5bjVOZES7hrWCM8zLm/mNFzHrLoeTC7r1AKQ5MAlRI/kHB9ZyYSsYxz4bOYVanWgAvDVj//GrLpuXFfcgetLLt4g8Y6F43IqZJNW/I4NaLOfWuHRZj/F1nUhopsyd+AZyuEoE7IlhnVaFUYqYJBxZf6aZj6j2oeJB9ox4WA7bq72J83bvLlxaAUVcGUu285YkMU5iluO9t0yX+PHde9d0GbfVOn9NaLZz20YedfiDGCsKtcZwJxPr+O2+kHccqRfM65ksnsx8WCHZj75kKeXRMrWowNH7tw01pVZ26297+tLLmrGEw60YarNe57cDwWO3mUbPrg0kVjcgbEqVeET9rdrppUSD7bjS6WXhk01fYVkIUhy4BKT3X8qtaKrNbXCcy4mZfO2miq7z2yq8n9kdvTr99RnYGBgYGAQxR8emJB2ymVVPEl5svDxHWHNMwHuaB9kHrQoB1dQ89m2q6tzGwI3ov2AD1rKY1Z135oZAUgv712VavPdtPCxqD/kg5LypjxmHv5rZdAs2FjmPa8OFcllHkwu64ozebSjcUq594+wdcBk76lLKfedTSn3t8aXfGfTqno+DGvewMDAwMDAICgOBz5i4bCdOmEfFbA/JuWEfcw5XmjlY5npLfgYWSiKzuBixuUv0d7KzkuqL4DLb9Q/xPcdAMbH86NuKEKpv9Eph5L7CoCFy13RNrIAaog4AFn1fWtMFf5RU2UPxrIyqnvxteMjobPBJd+JOAgZVb60lHLvb8mHui7EqjYe8lx8sbSzL6uuPxD8dYAB1V9M4p1s29XVFh44GTwTpJ3olQJxfRUV0qFaZKhrInW28YzDt0GCcI7ote2FcXl5SnWfJQh3mqSmZcB/ak9D9PlrNUyfzTm3yU1WnjPwNNFjoySbudmZc6PkZOWfGH6K6LFVls0MwJD5CwzZB3C7aXp6EQwQPTdLs5mGPg8xfun0jvE5ZU0so7XBBVvaOHyf44a12iDERVTIV4KaF4BWl9xD9Epug3yWCQkht7thPpi4nS1tuv+IigoojuQsQLmUue4x/XWJB4NxODZf81SMvU7iCSrkbsrhn9kDINvUCkLiEWsTPkGFrGAcfqdCTkyq9KNMyB9UkHT/zs8H9ensQ3HaMyALx/+3D7ZD/gBhKQAAAABJRU5ErkJggg==';
    let wind = document.createElement('p');
    wind.innerHTML = 'wind '+data.current.wind_kph+'kph';
    divWind.appendChild(imgWind);
    divWind.appendChild(wind);
    main.appendChild(divWind);

    
    main.appendChild(but);
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");



document.querySelector('#submit').disabled = true;

document.querySelector('#text').onkeyup = () =>{
    if(document.querySelector('#text').value.length > 0){
        document.querySelector('#submit').disabled = false;
    } else {
        document.querySelector('#submit').disabled = true;
    }
}

let type = 'Celsius';
let tempType = 'temp_c';
let city;
document.querySelector('form').onsubmit = () => {
    //users city choice
    city = document.querySelector('#text').value;
    loadapi(city);
    document.querySelector('#text').value = '';
    document.querySelector('#submit').disabled = true;
    return false;
}


async function loadapi(city){
    try {
        //load the api
        const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=d7929e16db5e4d209e5191549232603&q=${city}`, {
            mode: 'cors'
        })
        //comvert the responce to a json file
        const data = await responce.json();
        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, tempType, type);
        changeTemp();
    } 
    //if we catch an error we do this
    catch (error){
        const main = document.querySelector('main');
        main.style.padding = '20px';
        main.style.backgroundColor = '#8dbdff';
        main.innerHTML = 'Invalid location or there is no data aveliable';
        console.log(error);
    };
}

let count = 0;

function changeTemp(){
    document.querySelector('.tempChange').addEventListener('click',function(){

        if (count % 2 == 0){
            tempType = 'temp_f';
            type = 'Fahrenheit';
        } else{
            tempType = 'temp_c';
            type = 'Celsius';
        }
        count ++;
        loadapi(city);
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhIQUE4SDtBQUM5SDtBQUNBLCtDQUErQyw2QkFBNkIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsK0JBQStCLEtBQUssVUFBVSw2QkFBNkIsOENBQThDLHlCQUF5QixzQkFBc0IsNEJBQTRCLEtBQUssY0FBYyxtQ0FBbUMsMkJBQTJCLGFBQWEsVUFBVSxrQkFBa0IsS0FBSyxtQkFBbUIsc0JBQXNCLDBCQUEwQiw0QkFBNEIseUJBQXlCLHFCQUFxQixLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLDJCQUEyQixLQUFLLGtCQUFrQix5QkFBeUIsMkJBQTJCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLCtCQUErQix3QkFBd0IseUJBQXlCLHFCQUFxQixLQUFLLG9CQUFvQixxQkFBcUIsc0JBQXNCLEtBQUssa0JBQWtCLHdCQUF3QixLQUFLLGVBQWUsc0JBQXNCLGdDQUFnQyw0QkFBNEIsK0JBQStCLHdCQUF3Qiw2Q0FBNkMsNEJBQTRCLHFCQUFxQiwyQkFBMkIsNEJBQTRCLDJCQUEyQixLQUFLLGVBQWUsc0JBQXNCLGdDQUFnQyw0QkFBNEIsK0JBQStCLHdCQUF3Qiw2Q0FBNkMsNEJBQTRCLHFCQUFxQixLQUFLLFNBQVMsc0JBQXNCLGdDQUFnQywrQkFBK0IsNEJBQTRCLDZDQUE2Qyw0QkFBNEIscUJBQXFCLEtBQUssZUFBZSxvQkFBb0IscUJBQXFCLEtBQUssZUFBZSxzQkFBc0IsZ0NBQWdDLDRCQUE0QiwrQkFBK0Isd0JBQXdCLDZDQUE2Qyw0QkFBNEIscUJBQXFCLEtBQUssaUJBQWlCLG9CQUFvQixxQkFBcUIsS0FBSyxlQUFlLHFCQUFxQixxQkFBcUIseUNBQXlDLHFCQUFxQiw2Q0FBNkMsMkJBQTJCLEtBQUssMkJBQTJCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0IscUJBQXFCLHdCQUF3QiwwQkFBMEIsS0FBSyxnQkFBZ0IseUJBQXlCLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLHdCQUF3QixxQkFBcUIsd0JBQXdCLDJCQUEyQixrQ0FBa0Msd0NBQXdDLGdEQUFnRCxLQUFLLHNCQUFzQiw0Q0FBNEMsdUJBQXVCLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLGlCQUFpQixvQkFBb0IscUJBQXFCLHlDQUF5QyxxQkFBcUIsbUNBQW1DLHFCQUFxQiw2Q0FBNkMsMkJBQTJCLHdCQUF3QiwwQ0FBMEMsS0FBSyx1QkFBdUIsbUNBQW1DLEtBQUssZUFBZSxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxnSEFBZ0gsYUFBYSw2QkFBNkIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsK0JBQStCLEtBQUssVUFBVSw2QkFBNkIsOENBQThDLHlCQUF5QixzQkFBc0IsNEJBQTRCLEtBQUssY0FBYyxtQ0FBbUMsMkJBQTJCLGFBQWEsVUFBVSxrQkFBa0IsS0FBSyxtQkFBbUIsc0JBQXNCLDBCQUEwQiw0QkFBNEIseUJBQXlCLHFCQUFxQixLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLDJCQUEyQixLQUFLLGtCQUFrQix5QkFBeUIsMkJBQTJCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLCtCQUErQix3QkFBd0IseUJBQXlCLHFCQUFxQixLQUFLLG9CQUFvQixxQkFBcUIsc0JBQXNCLEtBQUssa0JBQWtCLHdCQUF3QixLQUFLLGVBQWUsc0JBQXNCLGdDQUFnQyw0QkFBNEIsK0JBQStCLHdCQUF3Qiw2Q0FBNkMsNEJBQTRCLHFCQUFxQiwyQkFBMkIsNEJBQTRCLDJCQUEyQixLQUFLLGVBQWUsc0JBQXNCLGdDQUFnQyw0QkFBNEIsK0JBQStCLHdCQUF3Qiw2Q0FBNkMsNEJBQTRCLHFCQUFxQixLQUFLLFNBQVMsc0JBQXNCLGdDQUFnQywrQkFBK0IsNEJBQTRCLDZDQUE2Qyw0QkFBNEIscUJBQXFCLEtBQUssZUFBZSxvQkFBb0IscUJBQXFCLEtBQUssZUFBZSxzQkFBc0IsZ0NBQWdDLDRCQUE0QiwrQkFBK0Isd0JBQXdCLDZDQUE2Qyw0QkFBNEIscUJBQXFCLEtBQUssaUJBQWlCLG9CQUFvQixxQkFBcUIsS0FBSyxlQUFlLHFCQUFxQixxQkFBcUIseUNBQXlDLHFCQUFxQiw2Q0FBNkMsMkJBQTJCLEtBQUssMkJBQTJCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0IscUJBQXFCLHdCQUF3QiwwQkFBMEIsS0FBSyxnQkFBZ0IseUJBQXlCLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLHdCQUF3QixxQkFBcUIsd0JBQXdCLDJCQUEyQixrQ0FBa0Msd0NBQXdDLGdEQUFnRCxLQUFLLHNCQUFzQiw0Q0FBNEMsdUJBQXVCLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLGlCQUFpQixvQkFBb0IscUJBQXFCLHlDQUF5QyxxQkFBcUIsbUNBQW1DLHFCQUFxQiw2Q0FBNkMsMkJBQTJCLHdCQUF3QiwwQ0FBMEMsS0FBSyx1QkFBdUIsbUNBQW1DLEtBQUssMkJBQTJCO0FBQ3poUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlIQUF5SCxLQUFLO0FBQzlIO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLHVEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICAgIHJvdy1nYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBtYXJnaW46IDUwcHggNDBweCA1MHB4IDBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubG9jYXRpb24gPiBpbWd7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDI2N3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLndlYXRoZXIgPiBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcbi53ZWF0aGVyID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5odW1pZGl0eSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG4udXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi51diA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi53aW5kIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi53aW5kID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RleHQge1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjYmJiYmJiO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0OjpwbGFjZWhvbGRlcntcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkYmRmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBjb2xvciAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAyNjdweCAwIDAgMCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6ICM4ZGJkZmY7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICAgIHdpZHRoOiA0NXB4O1xcclxcbiAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjNjRhMWY0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDRweCAwcHggMTBweCAxcHggI2JiYmJiYjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMzQ4OGZmO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgICByb3ctZ2FwOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IDQwcHggNTBweCAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbnB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmxvY2F0aW9uID4gaW1ne1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNjdweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi53ZWF0aGVyID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG4ud2VhdGhlciA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaHVtaWRpdHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuLnV2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG4udXYgPiBpbWcge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG4ud2luZCA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0IHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggI2JiYmJiYjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dDo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24gPiBpbWcge1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGJkZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgY29sb3IgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMjY3cHggMCAwIDAgd2hpdGU7XFxyXFxuICAgIGNvbG9yOiAjOGRiZGZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzY0YTFmNDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggMHB4IDEwcHggMXB4ICNiYmJiYmI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzM0ODhmZjtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXkoZGF0YSx0ZW1wVHlwZSx0eXBlKXtcclxuXHJcbiAgICBsZXQgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICAgIHdoaWxlIChjbGVhci5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICBjbGVhci5yZW1vdmVDaGlsZChjbGVhci5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgbWFpbi5zdHlsZS5wYWRkaW5nID0gJzIwcHgnO1xyXG5cclxuICAgIGxldCBkYXRlID0gZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcclxuICAgIGxldCB0aW1lID0gZGF0ZVsxMV0rZGF0ZVsxMl07XHJcblxyXG4gICAgaWYofn50aW1lID49IDIxICYmIH5+dGltZSA8PSAyMyl7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRiODZiNCc7XHJcbiAgICB9XHJcbiAgICBpZih+fnRpbWUgPj0gMCAmJiB+fnRpbWUgPD0gNil7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRiODZiNCc7XHJcbiAgICB9XHJcbiAgICBpZih+fnRpbWUgPj0gNyAmJiB+fnRpbWUgPD0gMjApIHtcclxuICAgICAgICBtYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOGRiZGZmJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wQ2hhbmdlJyk7XHJcbiAgICBidXQuaW5uZXJIVE1MID0gdHlwZTtcclxuICAgXHJcbiAgICBsZXQgZGl2TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkxvY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9jYXRpb24nKTtcclxuICAgIGxldCBpbWdMb2NhdGlvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nTG9jYXRpb24uc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFCaEVsRVFWUjRuTVdWdjB0Q1VSekZsWVFJMnhTWEJuT0psdm9EeENJY2d4cHFjNnUxSCtBL1VGTk5LVTF0dGRaUVUyTmJCdFdVYTBWUXpSS1ZVVVBVSjc1d2hNZmxhYjVyMElFdjNQZk91ZWRjdjErNUx4Yjdid0Q5d0Nwd0FieXBiTDFpWEsvbVEwQ2Q5cmd5VFM4bnIzY3dENFpFL3lWcWk0dFhsWXRsbjRCTHg2UUM5QUVKb09wdzV6NEJUZWZraVFDWGNIbWZnRWFFZ0laUFFNMXBRMVhHVnRzT1YvTUpLSWNNcyttY3ZJV3lUMEFHZU9kM21DWVRPVUFobFM0Q3Ryek1GWkIyaHUzQ3VMUjNnRUlXT3dRczlHU3VnRGh3SEdKdTcrSytwa2xnR2lqcE9RVThCc3h0blJKWGtqYlpqWEVXMkFFK1pQUUZGTVVWZ0U5VlFlK0swcUE5dGpmYnpud1NlQW9ZbndKclFENmdXYklLUE9lQmRXbGJRZVl4RVJid0lNRStrUE5vYXc0NGtNZDltT0JPNUNFdzRoRXdDaHpKNHpaTVlQMThrZUJiZDlFR01BT002ZXMyb0xMMU9EQUxiQUpuMm1ONEJxYmFuV0lZMkFzTW1RaXdLMk8zN1pDZG9FRmdYbGZGQ1hDajRiWCtSYmErRm1lYU9kc1R0YTEvZ2grc2VMMDVoV2NiOVFBQUFBQkpSVTVFcmtKZ2dnPT0nXHJcbiAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XHJcbiAgICBkaXZMb2NhdGlvbi5hcHBlbmRDaGlsZChpbWdMb2NhdGlvbik7XHJcbiAgICBkaXZMb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkxvY2F0aW9uKTtcclxuXHJcbiAgICBsZXQgZGl2SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXInKTtcclxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgZGl2SWNvbi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgZGl2SWNvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2SWNvbik7XHJcblxyXG4gICAgXHJcblxyXG4gICAgbGV0IGRpdlRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdlRlbXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wJyk7XHJcbiAgICBsZXQgaW1nVGVtcCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nVGVtcC5zcmMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUJVa2xFUVZSNG5HTmd3QUthcGk3WG5MbHl4K3hKaXpiVnA4MmN5Y3BBQ2lqc1hjVzVZdnVScXc5ZmYvcC80L0hyZjlOWGJKMEdFai9oN0p3R3drZmQzRFR3R2xEZU8xZi81Tlg3ZjBBR2dQRHk3WWNQa09TQ2lwN1p4bWR1UEFSckJ1RVZPdzRmQW9rZmMzSktCK0hqTGk2YVpCbHd3dEhSR0lUUDJOdUwwTmFBeFltWk1iZnlDLzQvcXFrQjR6T1oyUjlCNHY2Vlc5SkJPS0JtQzM0dnJJK005WHBYWC8vL2UzOC9HRjhxTFh2TFFBbzQ0ZWhvakd6QXRheWNTeUJ4MzZvdGFTRHNVN2tKZnpTZWRIRXhRVGJnYmxyYVlhSU4rTS9Bd0hnMUttci8xNTRldUFFdnE2bytYZ3dKeVNMSythZjkvYjNlMU5YOWdtbUd1eUlsNVF4UkJsd0tDU24rMHQyTm9obUU3MmRsM1NMS2dKTyt2dG92S2lzL29CdHdPeWxwTjFFR2dNQzFxS2hKYnhzYXZzQTBQOHpOdlhmWjM5K0thQU5BNEZ4b2FNalZtSmhaVnlNaWVrLzUrOHZpVXd3QUJNY1BEdGlCOEkwQUFBQUFTVVZPUks1Q1lJST0nO1xyXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpZih0ZW1wVHlwZSA9PSAndGVtcF9jJyl7XHJcbiAgICAgICAgdGVtcC5pbm5lckhUTUwgPSAnVGVtcGVyYXR1cmUgJysnPGJyPicrIGRhdGEuY3VycmVudFt0ZW1wVHlwZV0rJ8KwQyc7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHRlbXAuaW5uZXJIVE1MID0gJ1RlbXBlcmF0dXJlICcrJzxicj4nKyBkYXRhLmN1cnJlbnRbdGVtcFR5cGVdKyfCsEYnO1xyXG4gICAgfVxyXG4gICAgZGl2VGVtcC5hcHBlbmRDaGlsZChpbWdUZW1wKTtcclxuICAgIGRpdlRlbXAuYXBwZW5kQ2hpbGQodGVtcCk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdlRlbXApO1xyXG5cclxuICAgIGxldCBkaXZIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2SHVtaWRpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdodW1pZGl0eScpO1xyXG4gICAgbGV0IGltZ0h1bWlkaXR5ID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdIdW1pZGl0eS5zcmMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFCS1VsRVFWUjRuR05nb0RaWTlQaFRNQWpqVTJOMjR0dC9HR1pBQnF2dXZ1TmY5T1R6azBWUFBqK2YvZWlERU1rR0xIejhlYzZpSjEvK2d6Q0lUWkxURnovOVlyVG84ZWUvTUFOQTdBV1B2cG9ScGZuLy8vK01peDUvT1FMWERNWHpIMzgrRFpMRDVuUVVMMHk5OXkwY1hUTU1kMXovbmtqUWdMN2IzMTdoTXFEMzl0ZVBlSjJmY3V4cjRPeUhYLy9QZWZqMWY5L3RyLzlMejMzL0gzWDQ1My9IYmIvL0cyLzQvZDlvdzUvL3hodCttZU0wUUdmTm56cmR0WC8rNDhNNmEzNjNJdXRCOFlMdTJ0K0xDQmtBVW9QVEFKMDFmK29KdW1EdG4xcWNYdEJkODE5SmQrM3ZuemdOV1BQN2gvNzYvd3A0QTFKMzdaOFUzYlcvLzJMYS9QdVB6dW8vU2VqcXNTWmw3ZFcvSFhUWC90bXB1L2IzWnhEV1dmdG5oKzZhWDNiWUxNU1pGOGdCQUlqaWd4Q3hrdDBoQUFBQUFFbEZUa1N1UW1DQ1wiO1xyXG4gICAgbGV0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gXCJodW1pZGl0eSBcIitkYXRhLmN1cnJlbnQuaHVtaWRpdHkrJyUnO1xyXG4gICAgZGl2SHVtaWRpdHkuYXBwZW5kQ2hpbGQoaW1nSHVtaWRpdHkpO1xyXG4gICAgZGl2SHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXZIdW1pZGl0eSk7XHJcblxyXG4gICAgbGV0IGRpdlV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZVdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3V2Jyk7XHJcbiAgICBsZXQgaW1nVXYgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ1V2LnNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBR0lVbEVRVlI0bk8yYWZXd1RaUnpITDZBR2ZDTytRSHduaXJDUnNXNlRnb05CWnNaMUlWSFVhS1pHNVEvMUgvODFHenhQNXgrTlJnVjhTZnhIZ1JoRjJyVWR0NDIyU3lTaUpvaGcvQXN5RUFSNk4wQVl3VmMwVVJIczliN21udEx1N3RwdXZkNWRyN0Q5a2wreXJrK2U1L2wrN25uNTlubU80eWJEdllCRXY0Vkk5M0FUTlNCUnFNbE4xTUFrQURvNUFqQTVCZWprR3NCTjFNRGxzZ1pBcEpzZzBkMlFPbWZaWE84ZWlPUWJXK3VVT21leHZvcjBReHNycGJ2WjB4TEo5M1pEc0YwODY2TTZzc2pYOWxXYzlNK0VTQTllZ25BRUo3dHY1Nm9zOHZwNG91czJaeHM0V1RvRUNCMVRNYmhpQ1JKOE4rSytBU1I4aHhIbnp5SGgrNCtsK25lY1A1VDVqdTlHZ205R0lEQ2xhc1NYQ3dHeDlyc1I5NjFIM0RlQ2hBL21raitOaEc4ZEJsYmVWUlhpelVEQWpwVXpFZWMzSThGZk5DODhENFJheDBZTXR0N3F1dmlDaTQxSXQraWZPdjhzRXZ6djFvWG41VytJKzU3UnRTWFJyYTR0enNoc055RWt5U3IyZWZQQ3E1SHdmZVNBY09PSTJLUzJ4ZHBNa2xXc0QyN3ZUQmg4NUZyRStSM09pOC9sWjJxYlhEVUUxQ2RmV2ZIWi9CSkN4elZ1NitmUXYxeHdRWHcyTjdvcVBoMzFibEQ2bDdnbFBwT3g5cWRkRVEvQlc1TUsxcVNWN2EzdUFsQjNuQUpicE9NaFJ6d0g1YTMzQS9FMmx3SDRnRGovUVVYRkkrSnRrcmZPQlFPUTROMEhvSnFsUWY2ZWlnR1F3NTd2VlBHWkVWQU5BRml1cTRoNEJBSlRVcUdhMUNpQUtwZ0NiQnI0UnRRZlhZNERrSHViWHNpS1p3QmlEN2t2UHB2YjJ4YzdEaUFkOGV6VUFsRDZXOXdYbmhzRlBIVWNnQnl1UDZVRmtON21kVjk0THZrKzV3R0U1dityQXhDdXF3TGh1VHpvT0lCVWNKNmlCYUJ1aDFXMEVQNWEvaTJ0bERtaUxwaWFHOXpzL3E5YkI3WXRyaElBL0lWeU5ISHNlSHJNd3FOSDEzSXdINERjVTF0OUFFeG9zamdGTG8yQ3Z1Ykxkd3FZQ1RrMC8zd2hBSEt3Qm9pdnVQSVhRVGxjTjFJUWdMb2pSQnV2L0cwd0hXbjh2QmdBMTZkQ3JLM2JjUUN5NEYwOUZnQUdZV0JaeGNVckF5MUFuL2NKeHdGQTZKaWFDczZUeDRRUW5BZGxZSG5seFBlM1FBN052MmptTnNsU3lCSFAzdkZHZ2VvWEtqRWRGS0U1cy81RUdteTlaUjR6MExPb3NaQWhLcm93T3JFN3hGZW9vaStOdUxsQWJHRTlWOG1Rdy9XSFNnR1EzU0xaYURDYWtmRkVGaXpQUXhFZXpFeXpBeS9ydnorK3BxYm9RenZocnpVNHdTRkxBUERwMGpucW9XakpFTlN6QTRzQWxHMkxJSWRxUjBmWFZ3OGJ5dmpYRnUydlJJbkJDWFp5VmlQZDIvaWVGUURwWGkrVS9xVmdKOHV4dHN6eG1wcXh0c3ovRE9YejZvd3VBSkpFMFlqYU93YUEwZDhHSWtualdQZWRuQjBoUitvUGx3dkFjdm1JWndnaS9VSW5yTUFOY2VZeWw4cWpkWkdkdG9qUFhvM0pQWFZuS2c0Z3ZPQXNkclZPZzBoWDY4b05reGM1UXlEcGYwbFhKa21lNSt3TUNNMDN5ejExdjFRTVFNK0NzeEQ0R2F6dG9jN3JJSkcvTkU4M2tkYy9pUTVxNnZrYmh3TFhXeGN0c1dFVnhUQjVrbjNlTW51YUhHM1k3emlBY1AwQkNNM1REUUpEbXRYOVBNNEVjamZIT1BYS2RJamtIdzJnb00wdlNKQWU3WGZwM3FiM2krME9WZ0drZXg5WVg3QS9TZHB1Mk9JZXpYMG5rc2YwVTJTdHo1cjQ1UGl2cFNDNCtGNDU3Qmt5bWlXckFJcjJDWUVwa01pSUJzREhHZ0NmYU9vNEExaTRPNERKZDNJZ05EU21vdzI3VThFYTJTeUFWTEEyVlNvQTFwWkUzOVVBK0ZrVnlzQ0k1Q2ZOOEgrbll1SzFnVURyVlhMdm91ZnlBY3hsamk0VnJFMnowK1p3L2NsMHRDRWhDMDJyMVI4MnBnQWNKdzBHVTlTQ1liSk1QL3o5bnJIcUtCcDJ2WTFsUmxCWjVVVnlRT01KTmtDa2I5dGlmU0hSWFhhOGplVThBTnFsRVh5VTVlam5ybkw3emFrdkhxdW5xRmJmeG9KSWxiSUJpRlFadC95Uk5YZm9IWjhEMXRkS1FDUi82RHAyWk0wTlJjc09reGtHQU9kS2EwTmpqWjJ3dmxaQ25ZZDZVZjdIaTVkZCs1UkJ4TDRTMjlCYll5ZXNiN25CRmliOVV6MktIK2xOZWVWK29MZEFvcWNOQU40cXFZMDhhMnlUOWJVamNJemVCNGxjTkFnN0JaRjJJQm00a1dYbXlSdkUwd3M0L3Vyc2t0dlJXbU03cksrZEFZbThrVDlIeDBtUnZtYXFEYTAxdG1wOTdRN20wRVF5VURvQTBxYzZPbk50NUt5eE5ldnJLQVEyRW96VHdURHNSZks2V2ZGNmEyekIrbFlpa095YW95NXVrT2graVBSUGxoTFpCNG0rcWE0WGx1b2U5bnZLdHI3Y0JJci9BWCtrUC9qcmFIQU5BQUFBQUVsRlRrU3VRbUNDJztcclxuICAgIGxldCB1diA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHV2LmlubmVySFRNTCA9ICdVViAnK2RhdGEuY3VycmVudC51djtcclxuICAgIGRpdlV2LmFwcGVuZENoaWxkKGltZ1V2KTtcclxuICAgIGRpdlV2LmFwcGVuZENoaWxkKHV2KTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2VXYpO1xyXG5cclxuICAgIGxldCBkaXZXaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZXaW5kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd3aW5kJyk7XHJcbiAgICBsZXQgaW1nV2luZCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nV2luZC5zcmMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUZNa2xFUVZSNG5PMmJYVXhjUlJUSHAxYWJwalZhMDZiVkZ6OEtUU3RTV0FvVTBUWmJDenV6QlZKTWxOalkxc1NIZnFBWUtBdExBWEZ0TFMzdXpDNVN4VXFORHhxZitxZytHQk1mYW1Kb1l0K0ExdEpsZDZGaVFWSSt5aklIdE9reGMvdkZ4KzRDVzVyZHU3Mi81UDgyOStiK3o1eDdabWIzWEVJTURPSUR4RVhiUHh0ZFkyNGNXa0VlRm5JYjhFbkdaU1hsME1xNC9KZTVBSmxRa2dFcTVFK015NzFGWjNBeGlVY1lsM3NwaDRIQ2s0Qzd2Z0xNY3dPKzJReTR3MzBuQ0xkRWhleXdIQittSko2Z0hPcnozWUJ2dHdEdU9nVzRzMm1xNmVuYWRtSm9ZblB0bFdZU0R6QUI3K2MzQXU3NUdsRE5mampqazdJQTB3LzdicWJadTJ1Sm5zbmo4am1yQzJEMzZSRG1PZlF4SVllREJXSHJKLzJZVk5wNXcreG9mNXpvRlNiazZUZWFBWXUrbkQ3RDhKMkZ3d3QzeHpsbE5oTndidklZYy8wZ2JyUmRSbE9sNzJlaVI4d09mSlJ4dUtaU1g3MEM5Mlpkbmd3eGZxbTJPdHlyQTVoVzVjVU5KWDlPRUQxQ3hWaDZRU1BnN3BZcDVvY3NISmVIdXNicUdudDVjZ1prMVBndzRVQTdGaFhwY0dsa1lueG5ZUlBnVzZlbUJPREhzQmNoTGxKQjBtckFzUUZNci9iaDJ2MXRtRm5qeVNCNncrb2F6MU5MMzg2cHhjODkyM1czQ2lOZ3RxTVgwK3hlTFFDYmF2M2JpZDRvY09BeUptVG4zY0xINWJqVk9aRVM3aHJXQ004ekxtL21ORnpIckxvZVRDN3IxQUtRNU1BbFJJL2tIQjlaeVlTc1l4ejRiT1lWYW5XZ0F2RFZqLy9HckxwdVhGZmNnZXRMTHQ0ZzhZNkY0M0lxWkpOVy9JNE5hTE9mV3VIUlpqL0YxblVob3BzeWQrQVp5dUVvRTdJbGhuVmFGVVlxWUpCeFpmNmFaajZqMm9lSkI5b3g0V0E3YnE3Mko4M2J2TGx4YUFVVmNHVXUyODVZa01VNWlsdU85dDB5WCtQSGRlOWQwR2JmVk9uOU5hTFp6MjBZZWRmaURHQ3NLdGNad0p4UHIrTzIra0hjY3FSZk02NWtzbnN4OFdDSFpqNzVrS2VYUk1yV293Tkg3dHcwMXBWWjI2Mjk3K3RMTG1yR0V3NjBZYXJOZTU3Y0R3V08zbVViUHJnMGtWamNnYkVxVmVFVDlyZHJwcFVTRDdialM2V1hoazAxZllWa0lVaHk0QktUM1g4cXRhS3JOYlhDY3k0bVpmTzJtaXE3ejJ5cThuOWtkdlRyOTlSbllHQmdZR0FReFI4ZW1KQjJ5bVZWUEVsNXN2RHhIV0hOTXdIdWFCOWtIclFvQjFkUTg5bTJxNnR6R3dJM292MkFEMXJLWTFaMTM1b1pBVWd2NzEyVmF2UGR0UEN4cUQva2c1THlwanhtSHY1clpkQXMyRmptUGE4T0ZjbGxIa3d1NjRvemViU2pjVXE1OTQrd2RjQms3NmxMS2ZlZFRTbjN0OGFYZkdmVHFubytER3Zld01EQXdNREFJQ2dPQno1aTRiQ2RPbUVmRmJBL0p1V0VmY3c1WG1qbFk1bnBMZmdZV1NpS3p1Qml4dVV2MGQ3S3prdXFMNERMYjlRL3hQY2RBTWJIODZOdUtFS3B2OUVwaDVMN0NvQ0Z5MTNSTnJJQWFvZzRBRm4xZld0TUZmNVJVMlVQeHJJeXFudnh0ZU1qb2JQQkpkK0pPQWdaVmI2MGxITHZiOG1IdWk3RXFqWWU4bHg4c2JTekw2dXVQeEQ4ZFlBQjFWOU00cDFzMjlYVkZoNDRHVHdUcEozb2xRSnhmUlVWMHFGYVpLaHJJblcyOFl6RHQwR0NjSTdvdGUyRmNYbDVTbldmSlFoM21xU21aY0IvYWs5RDlQbHJOVXlmelRtM3lVMVdualB3Tk5Gam95U2J1ZG1aYzZQa1pPV2ZHSDZLNkxGVmxzME13SkQ1Q3d6WkIzQzdhWHA2RVF3UVBUZExzNW1HUGc4eGZ1bjBqdkU1WlUwc283WEJCVnZhT0h5ZjQ0YTEyaURFUlZUSVY0S2FGNEJXbDl4RDlFcHVnM3lXQ1FraHQ3dGhQcGk0blMxdHV2K0lpZ29vanVRc1FMbVV1ZTR4L1hXSkI0TnhPRFpmODFTTXZVN2lDU3JrYnNyaG45a0RJTnZVQ2tMaUVXc1RQa0dGckdBY2ZxZENUa3lxOUtOTXlCOVVrSFQvenM4SDllbnNRM0hhTXlBTHgvKzNEN1pEL2dCaEtRQUFBQUJKUlU1RXJrSmdnZz09JztcclxuICAgIGxldCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgd2luZC5pbm5lckhUTUwgPSAnd2luZCAnK2RhdGEuY3VycmVudC53aW5kX2twaCsna3BoJztcclxuICAgIGRpdldpbmQuYXBwZW5kQ2hpbGQoaW1nV2luZCk7XHJcbiAgICBkaXZXaW5kLmFwcGVuZENoaWxkKHdpbmQpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXZXaW5kKTtcclxuXHJcbiAgICBcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnV0KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJztcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dCcpLm9ua2V5dXAgPSAoKSA9PntcclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0JykudmFsdWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB0eXBlID0gJ0NlbHNpdXMnO1xyXG5sZXQgdGVtcFR5cGUgPSAndGVtcF9jJztcclxubGV0IGNpdHk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5vbnN1Ym1pdCA9ICgpID0+IHtcclxuICAgIC8vdXNlcnMgY2l0eSBjaG9pY2VcclxuICAgIGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dCcpLnZhbHVlO1xyXG4gICAgbG9hZGFwaShjaXR5KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0JykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkYXBpKGNpdHkpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL2xvYWQgdGhlIGFwaVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ZDc5MjllMTZkYjVlNGQyMDllNTE5MTU0OTIzMjYwMyZxPSR7Y2l0eX1gLCB7XHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb212ZXJ0IHRoZSByZXNwb25jZSB0byBhIGpzb24gZmlsZVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XHJcbiAgICAgICAgZGlzcGxheShkYXRhLCB0ZW1wVHlwZSwgdHlwZSk7XHJcbiAgICAgICAgY2hhbmdlVGVtcCgpO1xyXG4gICAgfSBcclxuICAgIC8vaWYgd2UgY2F0Y2ggYW4gZXJyb3Igd2UgZG8gdGhpc1xyXG4gICAgY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgICAgIG1haW4uc3R5bGUucGFkZGluZyA9ICcyMHB4JztcclxuICAgICAgICBtYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOGRiZGZmJztcclxuICAgICAgICBtYWluLmlubmVySFRNTCA9ICdJbnZhbGlkIGxvY2F0aW9uIG9yIHRoZXJlIGlzIG5vIGRhdGEgYXZlbGlhYmxlJztcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9O1xyXG59XHJcblxyXG5sZXQgY291bnQgPSAwO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGVtcCgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBDaGFuZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ICUgMiA9PSAwKXtcclxuICAgICAgICAgICAgdGVtcFR5cGUgPSAndGVtcF9mJztcclxuICAgICAgICAgICAgdHlwZSA9ICdGYWhyZW5oZWl0JztcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRlbXBUeXBlID0gJ3RlbXBfYyc7XHJcbiAgICAgICAgICAgIHR5cGUgPSAnQ2Vsc2l1cyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvdW50ICsrO1xyXG4gICAgICAgIGxvYWRhcGkoY2l0eSk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=