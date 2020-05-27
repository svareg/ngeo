/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"modifyrectangle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([29,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/modifyrectangle.css":
/*!**************************************!*\
  !*** ./examples/modifyrectangle.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./examples/modifyrectangle.css?");

/***/ }),

/***/ "./examples/modifyrectangle.js":
/*!*************************************!*\
  !*** ./examples/modifyrectangle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _modifyrectangle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyrectangle.css */ \"./examples/modifyrectangle.css\");\n/* harmony import */ var _modifyrectangle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modifyrectangle_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ngeo_interaction_ModifyRectangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/interaction/ModifyRectangle.js */ \"./src/interaction/ModifyRectangle.js\");\n/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map.js */ \"./node_modules/ol/Map.js\");\n/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View.js */ \"./node_modules/ol/View.js\");\n/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer/Vector.js */ \"./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/OSM.js */ \"./node_modules/ol/source/OSM.js\");\n/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/Vector.js */ \"./node_modules/ol/source/Vector.js\");\n/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/Polygon.js */ \"./node_modules/ol/geom/Polygon.js\");\n/* harmony import */ var ol_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/Collection.js */ \"./node_modules/ol/Collection.js\");\n/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/Feature.js */ \"./node_modules/ol/Feature.js\");\n/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/style/Style.js */ \"./node_modules/ol/style/Style.js\");\n/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Circle.js */ \"./node_modules/ol/style/Circle.js\");\n/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Fill.js */ \"./node_modules/ol/style/Fill.js\");\n/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Stroke.js */ \"./node_modules/ol/style/Stroke.js\");\n/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngeo/map/module.js */ \"./src/map/module.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar appmodule = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"].name]);\n\nfunction MainController() {\n  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]()\n    })],\n    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      center: [-10997148, 4569099],\n      zoom: 4\n    })\n  });\n  var map = this.map;\n  var rectangle = new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]([[[-9e6, 4e6], [-11e6, 4e6], [-11e6, 6e6], [-9e6, 6e6]]]);\n  this.features = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]();\n  this.features.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]({\n    geometry: rectangle,\n    'isRectangle': true\n  }));\n\n  var style = function () {\n    var styles = {};\n    styles.Polygon = [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]({\n      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]({\n        color: [255, 255, 255, 0.5]\n      })\n    }), new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]({\n      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]({\n        color: [255, 255, 255, 1],\n        width: 5\n      })\n    }), new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]({\n      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]({\n        color: [0, 153, 255, 1],\n        width: 3\n      })\n    })];\n    styles.Point = [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]({\n      image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]({\n        radius: 7,\n        fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]({\n          color: [0, 153, 255, 1]\n        }),\n        stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]({\n          color: [255, 255, 255, 0.75],\n          width: 1.5\n        })\n      }),\n      zIndex: 100000\n    })];\n    styles.GeometryCollection = styles.Polygon.concat(styles.Point);\n    return function (feature, resolution) {\n      var geometry = feature.getGeometry();\n\n      if (!geometry) {\n        throw new Error('Missing geometry');\n      }\n\n      return styles[geometry.getType()];\n    };\n  }();\n\n  var vectorSource = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n    features: this.features\n  });\n  var vectorLayer = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    source: vectorSource\n  });\n  vectorLayer.setMap(map);\n  this.interaction = new ngeo_interaction_ModifyRectangle_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    features: this.features,\n    style: style\n  });\n  var interaction = this.interaction;\n  map.addInteraction(interaction);\n  interaction.setActive(true);\n}\n\nappmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./examples/modifyrectangle.js?");

/***/ }),

/***/ 29:
/*!************************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/modifyrectangle.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/modifyrectangle.js */\"./examples/modifyrectangle.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/modifyrectangle.js?");

/***/ }),

/***/ "dll-reference vendor_e4544f9f18f52e898dc0":
/*!**********************************************!*\
  !*** external "vendor_e4544f9f18f52e898dc0" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_e4544f9f18f52e898dc0;\n\n//# sourceURL=webpack:///external_%22vendor_e4544f9f18f52e898dc0%22?");

/***/ })

/******/ });