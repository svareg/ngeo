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
/******/ 		"importdatasource": 0
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
/******/ 	deferredModules.push([12,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/importdatasource.css":
/*!****************************************************!*\
  !*** ./contribs/gmf/examples/importdatasource.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/importdatasource.js":
/*!***************************************************!*\
  !*** ./contribs/gmf/examples/importdatasource.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _importdatasource_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importdatasource.css */ "./contribs/gmf/examples/importdatasource.css");
/* harmony import */ var _importdatasource_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_importdatasource_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/src/tooltip.js */ "./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */ var gmf_datasource_Manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/datasource/Manager.js */ "./contribs/gmf/src/datasource/Manager.js");
/* harmony import */ var gmf_import_importdatasourceComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/import/importdatasourceComponent.js */ "./contribs/gmf/src/import/importdatasourceComponent.js");
/* harmony import */ var gmf_layertree_component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gmf/layertree/component.js */ "./contribs/gmf/src/layertree/component.js");
/* harmony import */ var gmf_layertree_TreeManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gmf/layertree/TreeManager.js */ "./contribs/gmf/src/layertree/TreeManager.js");
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gmf/theme/Themes.js */ "./contribs/gmf/src/theme/Themes.js");
/* harmony import */ var ngeo_datasource_DataSources_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/datasource/DataSources.js */ "./src/datasource/DataSources.js");
/* harmony import */ var ngeo_query_bboxQueryComponent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/query/bboxQueryComponent.js */ "./src/query/bboxQueryComponent.js");
/* harmony import */ var ngeo_query_mapQueryComponent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/query/mapQueryComponent.js */ "./src/query/mapQueryComponent.js");
/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ "./node_modules/@geoblocks/proj/src/EPSG_21781.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");


















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_datasource_Manager_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_import_importdatasourceComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, gmf_layertree_component_js__WEBPACK_IMPORTED_MODULE_6__["default"].name, gmf_layertree_TreeManager_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, gmf_map_component_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_9__["default"].name, ngeo_datasource_DataSources_js__WEBPACK_IMPORTED_MODULE_10__["default"].name, ngeo_query_bboxQueryComponent_js__WEBPACK_IMPORTED_MODULE_11__["default"].name, ngeo_query_mapQueryComponent_js__WEBPACK_IMPORTED_MODULE_12__["default"].name]);
module.value('gmfTreeUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].GMF_THEMES);
module.value('gmfLayersUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].GMF_LAYERS);
module.value('gmfExternalOGCServers', [{
  'name': 'Swiss Topo WMS',
  'type': 'WMS',
  'url': 'https://wms.geo.admin.ch/?lang=fr'
}, {
  'name': 'ASIT VD',
  'type': 'WMTS',
  'url': 'https://ows.asitvd.ch/wmts/1.0.0/WMTSCapabilities.xml'
}, {
  'name': 'Swiss Topo WMTS',
  'type': 'WMTS',
  'url': 'https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=fr'
}]);
module.constant('defaultTheme', 'Filters');
module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');

var MainController = function MainController($scope, gmfDataSourcesManager, gmfThemes, gmfTreeManager, ngeoDataSources) {
  var _this = this;

  this.scope_ = $scope;
  gmfThemes.loadThemes();
  this.gmfTreeManager = gmfTreeManager;
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_17__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_13__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [537635, 152640],
      zoom: 2
    })
  });
  gmfDataSourcesManager.setDatasourceMap(this.map);
  gmfThemes.getThemesObject().then(function (themes) {
    if (themes) {
      for (var i = 0, ii = themes.length; i < ii; i++) {
        if (themes[i].id === 175) {
          _this.gmfTreeManager.setFirstLevelGroups(themes[i].children);

          break;
        }
      }
    }
  });
  this.queryActive = true;
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    trigger: 'hover'
  });
};

MainController.$inject = ["$scope", "gmfDataSourcesManager", "gmfThemes", "gmfTreeManager", "ngeoDataSources"];
MainController.$inject = ["$scope", "gmfDataSourcesManager", "gmfThemes", "gmfTreeManager", "ngeoDataSources"];
module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 12:
/*!**************************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/importdatasource.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/importdatasource.js */"./contribs/gmf/examples/importdatasource.js");


/***/ })

/******/ });
//# sourceMappingURL=importdatasource.js.map