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
/******/ 		"offline": 0
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
/******/ 	deferredModules.push([31,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/offline.css":
/*!******************************!*\
  !*** ./examples/offline.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/offline.js":
/*!*****************************!*\
  !*** ./examples/offline.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/fontawesome.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _offline_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offline.css */ "./examples/offline.css");
/* harmony import */ var _offline_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_offline_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_dependencies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common_dependencies.js */ "./examples/common_dependencies.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_offline_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/offline/module.js */ "./src/offline/module.js");
/* harmony import */ var ngeo_offline_Configuration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/offline/Configuration.js */ "./src/offline/Configuration.js");
/* harmony import */ var ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/offline/ServiceManager.js */ "./src/offline/ServiceManager.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_11__);
var exports = {};












exports.module = angular__WEBPACK_IMPORTED_MODULE_11___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_offline_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].module.name]);
exports.module.value('ngeoOfflineTestUrl', '../../src/offline/component.html');
ngeo_offline_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].service('ngeoOfflineConfiguration', ngeo_offline_Configuration_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

var MainController = function MainController(ngeoFeatureOverlayMgr, ngeoNetworkStatus, ngeoOfflineServiceManager) {
  this.offlineExtentSize = 10000;
  this.ngeoNetworkStatus = ngeoNetworkStatus;
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      center: [352379, 5172733],
      zoom: 4
    })
  });
  ngeoFeatureOverlayMgr.init(this.map);
  ngeoOfflineServiceManager.setSaveService('offlineDownloader');
  ngeoOfflineServiceManager.setRestoreService('ngeoOfflineRestorer');
};

MainController.$inject = ["ngeoFeatureOverlayMgr", "ngeoNetworkStatus", "ngeoOfflineServiceManager"];
MainController.$inject = ["ngeoFeatureOverlayMgr", "ngeoNetworkStatus", "ngeoOfflineServiceManager"];
exports.module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/AbstractLocalforageWrapper.js":
/*!***************************************************!*\
  !*** ./src/offline/AbstractLocalforageWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Action;

var exports = function () {
  function AbstractLocalforageWrapper() {
    this.waitingPromises_ = new Map();
    this.currentId_ = 0;
  }

  var _proto = AbstractLocalforageWrapper.prototype;

  _proto.setItem = function setItem() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return this.createAction.apply(this, ['setItem'].concat(args));
  };

  _proto.getItem = function getItem() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.createAction.apply(this, ['getItem'].concat(args));
  };

  _proto.clear = function clear() {
    return this.createAction('clear');
  };

  _proto.config = function config() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.createAction.apply(this, ['config'].concat(args));
  };

  _proto.createAction = function createAction(command) {
    var id = ++this.currentId_;

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    var action = {
      'plugin': 'localforage',
      'command': command,
      'args': args,
      'id': id
    };
    var waitingPromise = {};
    var promise = new Promise(function (resolve, reject) {
      waitingPromise['resolve'] = resolve;
      waitingPromise['reject'] = reject;
    });
    this.waitingPromises_.set(id, waitingPromise);
    this.postToBackend(action);
    return promise;
  };

  _proto.receiveMessage = function receiveMessage(event) {
    var action = event['data'];
    var id = action['id'];
    var command = action['command'];
    var args = action['args'] || [];
    var context = action['context'];
    var msg = action['msg'];
    var waitingPromise = this.waitingPromises_.get(id);

    if (command === 'error') {
      console.error(msg, args, context);

      if (waitingPromise) {
        waitingPromise.reject(args, context);
        this.waitingPromises_.delete(id);
      }
    } else if (command === 'response') {
      waitingPromise.resolve.apply(waitingPromise, args);
      this.waitingPromises_.delete(id);
    } else {
      console.error('Unhandled command', JSON.stringify(action, null, '\t'));
    }
  };

  _proto.postToBackend = function postToBackend(action) {};

  return AbstractLocalforageWrapper;
}();

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/Configuration.js":
/*!**************************************!*\
  !*** ./src/offline/Configuration.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Observable.js */ "./node_modules/ol/Observable.js");
/* harmony import */ var ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/layer/Layer.js */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Image.js */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_Image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Image.js */ "./node_modules/ol/source/Image.js");
/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/ImageWMS.js */ "./node_modules/ol/source/ImageWMS.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_tilegrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/tilegrid.js */ "./node_modules/ol/tilegrid.js");
/* harmony import */ var ngeo_offline_SerializerDeserializer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/offline/SerializerDeserializer.js */ "./src/offline/SerializerDeserializer.js");
/* harmony import */ var ngeo_offline_LocalforageCordovaWrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/offline/LocalforageCordovaWrapper.js */ "./src/offline/LocalforageCordovaWrapper.js");
/* harmony import */ var ngeo_offline_LocalforageAndroidWrapper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/offline/LocalforageAndroidWrapper.js */ "./src/offline/LocalforageAndroidWrapper.js");
/* harmony import */ var ngeo_offline_LocalforageIosWrapper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/offline/LocalforageIosWrapper.js */ "./src/offline/LocalforageIosWrapper.js");
/* harmony import */ var ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngeo/CustomEvent.js */ "./src/CustomEvent.js");
/* harmony import */ var ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngeo/offline/utils.js */ "./src/offline/utils.js");
/* harmony import */ var localforage_src_localforage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! localforage/src/localforage.js */ "./node_modules/localforage/src/localforage.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



















var exports = function (_olObservable) {
  exports.$inject = ["$rootScope", "ngeoBackgroundLayerMgr", "ngeoOfflineGutter"];

  _inheritsLoose(exports, _olObservable);

  function exports($rootScope, ngeoBackgroundLayerMgr, ngeoOfflineGutter) {
    var _this;

    _this = _olObservable.call(this) || this;
    _this.localforage_ = _this.createLocalforage();

    _this.configureLocalforage();

    _this.rootScope_ = $rootScope;
    _this.hasData = false;

    _this.initializeHasOfflineData();

    _this.ngeoBackgroundLayerMgr_ = ngeoBackgroundLayerMgr;
    _this.serDes_ = new ngeo_offline_SerializerDeserializer_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      gutter: ngeoOfflineGutter
    });
    _this.gutter_ = ngeoOfflineGutter;
    return _this;
  }

  var _proto = exports.prototype;

  _proto.dispatchProgress_ = function dispatchProgress_(progress) {
    this.dispatchEvent(new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_14__["default"]('progress', {
      'progress': progress
    }));
  };

  _proto.initializeHasOfflineData = function initializeHasOfflineData() {
    var _this2 = this;

    this.getItem('offline_content').then(function (value) {
      return _this2.setHasOfflineData(!!value);
    });
  };

  _proto.hasOfflineData = function hasOfflineData() {
    return this.hasData;
  };

  _proto.setHasOfflineData = function setHasOfflineData(value) {
    var needDigest = value !== this.hasData;
    this.hasData = value;

    if (needDigest) {
      this.rootScope_.$applyAsync();
    }
  };

  _proto.traceGetSetItem = function traceGetSetItem(msg, key, promise) {
    return promise;
  };

  _proto.createLocalforage = function createLocalforage() {
    if (location.search.includes('localforage=cordova')) {
      console.log('Using cordova localforage');
      return new ngeo_offline_LocalforageCordovaWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
    } else if (location.search.includes('localforage=android')) {
      console.log('Using android localforage');
      return new ngeo_offline_LocalforageAndroidWrapper_js__WEBPACK_IMPORTED_MODULE_12__["default"]();
    } else if (location.search.includes('localforage=ios')) {
      console.log('Using ios localforage');
      return new ngeo_offline_LocalforageIosWrapper_js__WEBPACK_IMPORTED_MODULE_13__["default"]();
    }

    return localforage_src_localforage_js__WEBPACK_IMPORTED_MODULE_16__["default"];
  };

  _proto.configureLocalforage = function configureLocalforage() {
    this.localforage_.config({
      'name': 'ngeoOfflineStorage',
      'version': 1.0,
      'storeName': 'offlineStorage'
    });
  };

  _proto.getItem = function getItem(key) {
    return this.traceGetSetItem('getItem', key, this.localforage_['getItem'](key));
  };

  _proto.removeItem = function removeItem(key) {
    return this.traceGetSetItem('removeItem', key, this.localforage_['removeItem'](key));
  };

  _proto.setItem = function setItem(key, value) {
    return this.traceGetSetItem('setItem', key, this.localforage_['setItem'](key, value));
  };

  _proto.clear = function clear() {
    this.setHasOfflineData(false);
    return this.traceGetSetItem('clear', '', this.localforage_['clear']());
  };

  _proto.estimateLoadDataSize = function estimateLoadDataSize(map) {
    return 50;
  };

  _proto.getLayerKey = function getLayerKey(layerItem) {
    return layerItem.layer.get('label');
  };

  _proto.onTileDownloadSuccess = function onTileDownloadSuccess(progress, tile) {
    this.dispatchProgress_(progress);

    if (tile.response) {
      return this.setItem(ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["default"].normalizeURL(tile.url), tile.response);
    }

    return Promise.resolve();
  };

  _proto.onTileDownloadError = function onTileDownloadError(progress) {
    this.dispatchProgress_(progress);
    return Promise.resolve();
  };

  _proto.getExtentByZoom = function getExtentByZoom(map, layer, ancestors, userExtent) {
    var currentZoom = map.getView().getZoom();
    var results = [];
    [0, 1, 2, 3, 4].forEach(function (dz) {
      results.push({
        zoom: currentZoom + dz,
        extent: userExtent
      });
    });
    return results;
  };

  _proto.sourceImageWMSToTileWMS = function sourceImageWMSToTileWMS(source, projection) {
    if (source instanceof ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_7__["default"] && source.getUrl() && source.getImageLoadFunction() === ol_source_Image_js__WEBPACK_IMPORTED_MODULE_6__["defaultImageLoadFunction"]) {
      var tileGrid = Object(ol_tilegrid_js__WEBPACK_IMPORTED_MODULE_9__["createForProjection"])(source.getProjection() || projection, 42, 256);
      source = new ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        gutter: this.gutter_,
        url: source.getUrl(),
        tileGrid: tileGrid,
        attributions: source.getAttributions(),
        projection: source.getProjection(),
        params: source.getParams()
      });
    }

    return source;
  };

  _proto.createLayerMetadatas = function createLayerMetadatas(map, userExtent) {
    var _this3 = this;

    var layersItems = [];

    var visitLayer = function visitLayer(layer, ancestors) {
      if (layer instanceof ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        var extentByZoom = _this3.getExtentByZoom(map, layer, ancestors, userExtent);

        var projection = ol_proj_js__WEBPACK_IMPORTED_MODULE_5__["get"](map.getView().getProjection());

        var source = _this3.sourceImageWMSToTileWMS(layer.getSource(), projection);

        var layerType;
        var layerSerialization;

        if (layer instanceof ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"] || layer instanceof ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
          layerType = 'tile';
          layerSerialization = _this3.serDes_.serializeTileLayer(layer, source);
        } else if (layer instanceof ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          layerType = 'vector';
        }

        var backgroundLayer = _this3.ngeoBackgroundLayerMgr_.get(map) === layer;
        layersItems.push({
          backgroundLayer: backgroundLayer,
          map: map,
          extentByZoom: extentByZoom,
          layerType: layerType,
          layerSerialization: layerSerialization,
          layer: layer,
          source: source,
          ancestors: ancestors
        });
      }

      return true;
    };

    map.getLayers().forEach(function (root) {
      ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["default"].traverseLayer(root, [], visitLayer);
    });
    return layersItems;
  };

  _proto.createTileLoadFunction_ = function createTileLoadFunction_(offlineLayer) {
    var that = this;

    var tileLoadFunction = function tileLoadFunction(imageTile, src) {
      that.getItem(ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["default"].normalizeURL(src)).then(function (content) {
        if (!content) {
          content = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
        }

        imageTile.getImage().src = content;
      });
    };

    return tileLoadFunction;
  };

  _proto.recreateOfflineLayer = function recreateOfflineLayer(offlineLayer) {
    if (offlineLayer.layerType === 'tile') {
      var serialization = offlineLayer.layerSerialization;
      var tileLoadFunction = this.createTileLoadFunction_(offlineLayer);
      var layer = this.serDes_.deserializeTileLayer(serialization, tileLoadFunction);
      return layer;
    }

    return null;
  };

  _proto.getMaxNumberOfParallelDownloads = function getMaxNumberOfParallelDownloads() {
    return 11;
  };

  return exports;
}(ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/Downloader.js":
/*!***********************************!*\
  !*** ./src/offline/Downloader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/has.js */ "./node_modules/ol/has.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source/WMTS.js */ "./node_modules/ol/source/WMTS.js");
/* harmony import */ var ngeo_offline_TilesDownloader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/offline/TilesDownloader.js */ "./src/offline/TilesDownloader.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_4__);
function _createForOfIteratorHelperLoose(o) { var i = 0; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } i = o[Symbol.iterator](); return i.next.bind(i); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function magnitude2(a, b) {
  var magnitudeSquared = 0;

  for (var i = 0; i < a.length; ++i) {
    magnitudeSquared += Math.pow(a[1] - b[1], 2);
  }

  return magnitudeSquared;
}

var Downloader = function () {
  Downloader.$inject = ["ngeoOfflineConfiguration"];

  function Downloader(ngeoOfflineConfiguration) {
    this.configuration_ = ngeoOfflineConfiguration;
    this.tileDownloader_ = null;
  }

  var _proto = Downloader.prototype;

  _proto.cancel = function cancel() {
    this.tileDownloader_.cancel();
  };

  _proto.queueLayerTiles_ = function queueLayerTiles_(layerMetadata, queue) {
    var source = layerMetadata.source;
    var map = layerMetadata.map,
        extentByZoom = layerMetadata.extentByZoom;

    if (!source) {
      return;
    }

    console.assert(source instanceof ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_1__["default"] || source instanceof ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    var projection = map.getView().getProjection();
    var tileGrid = source.getTileGrid();
    var tileUrlFunction = source.getTileUrlFunction();
    console.assert(extentByZoom);

    var _loop = function _loop() {
      var extentZoom = _step.value;
      var z = extentZoom.zoom;
      var extent = extentZoom.extent;
      var queueByZ = [];
      var minX = void 0,
          minY = void 0,
          maxX = void 0,
          maxY = void 0;
      tileGrid.forEachTileCoord(extent, z, function (coord) {
        maxX = coord[1];
        maxY = coord[2];

        if (minX === undefined || minY === undefined) {
          minX = coord[1];
          minY = coord[2];
        }

        var url = tileUrlFunction(coord, ol_has_js__WEBPACK_IMPORTED_MODULE_0__["DEVICE_PIXEL_RATIO"], projection);
        console.assert(url);
        var tile = {
          coord: coord,
          url: url,
          response: null
        };
        queueByZ.push(tile);
      });
      var centerTileCoord = [z, (minX + maxX) / 2, (minY + maxY) / 2];
      queueByZ.sort(function (a, b) {
        return magnitude2(a.coord, centerTileCoord) - magnitude2(b.coord, centerTileCoord);
      });
      queue.push.apply(queue, queueByZ);
    };

    for (var _iterator = _createForOfIteratorHelperLoose(extentByZoom), _step; !(_step = _iterator()).done;) {
      _loop();
    }
  };

  _proto.save = function save(extent, map) {
    var _this = this;

    var layersMetadatas = this.configuration_.createLayerMetadatas(map, extent);
    var persistentLayers = [];
    var queue = [];
    var zooms = [];

    for (var _iterator2 = _createForOfIteratorHelperLoose(layersMetadatas), _step2; !(_step2 = _iterator2()).done;) {
      var layerItem = _step2.value;

      if (layerItem.layerType === 'tile') {
        var tiles = [];
        this.queueLayerTiles_(layerItem, tiles);
        queue.push.apply(queue, tiles);
      }

      persistentLayers.push({
        backgroundLayer: layerItem.backgroundLayer,
        layerType: layerItem.layerType,
        layerSerialization: layerItem.layerSerialization,
        key: this.configuration_.getLayerKey(layerItem)
      });
      layerItem.extentByZoom.forEach(function (obj) {
        var zoom = obj.zoom;

        if (zooms.indexOf(zoom) < 0) {
          zooms.push(zoom);
        }
      });
    }

    var persistentObject = {
      extent: extent,
      layers: persistentLayers,
      zooms: zooms.sort(function (a, b) {
        return a < b ? -1 : 1;
      })
    };
    var setOfflineContentPromise = this.configuration_.setItem('offline_content', persistentObject);
    var maxDownloads = this.configuration_.getMaxNumberOfParallelDownloads();
    this.tileDownloader_ = new ngeo_offline_TilesDownloader_js__WEBPACK_IMPORTED_MODULE_3__["default"](queue, this.configuration_, maxDownloads);
    var tileDownloadPromise = this.tileDownloader_.download();
    var allPromise = Promise.all([setOfflineContentPromise, tileDownloadPromise]);

    var setHasOfflineData = function setHasOfflineData() {
      return _this.configuration_.setHasOfflineData(true);
    };

    allPromise.then(setHasOfflineData, setHasOfflineData);
    return allPromise;
  };

  return Downloader;
}();

var name = 'offlineDownloader';
Downloader.module = angular__WEBPACK_IMPORTED_MODULE_4___default.a.module(name, []).service(name, Downloader);
var exports = Downloader;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageAndroidWrapper.js":
/*!**************************************************!*\
  !*** ./src/offline/LocalforageAndroidWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(AndroidWrapper, _AbstractWrapper);

  function AndroidWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window['androidWrapper'] = _assertThisInitialized(_this);
    return _this;
  }

  var _proto = AndroidWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    var stringified = JSON.stringify(action);
    window['ngeoHost']['postMessageToAndroid'](stringified);
  };

  _proto.receiveFromAndroid = function receiveFromAndroid(actionString) {
    var action = JSON.parse(actionString);
    this.receiveMessage({
      'data': action
    });
  };

  return AndroidWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageCordovaWrapper.js":
/*!**************************************************!*\
  !*** ./src/offline/LocalforageCordovaWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(CordovaWrapper, _AbstractWrapper);

  function CordovaWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window.addEventListener('message', _this.receiveMessage.bind(_assertThisInitialized(_this)), false);
    return _this;
  }

  var _proto = CordovaWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    window['parent'].postMessage(action, '*');
  };

  return CordovaWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageIosWrapper.js":
/*!**********************************************!*\
  !*** ./src/offline/LocalforageIosWrapper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(IosWrapper, _AbstractWrapper);

  function IosWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window['iosWrapper'] = _assertThisInitialized(_this);
    return _this;
  }

  var _proto = IosWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    if (action['command'] === 'setItem') {
      action['args'][1] = JSON.stringify(action['args'][1]);
    }

    var stringified = JSON.stringify(action);
    window['webkit']['messageHandlers']['ios']['postMessage'](stringified);
  };

  _proto.receiveFromIos = function receiveFromIos(actionString) {
    var action = JSON.parse(actionString);
    action['args'] = (action['args'] || []).map(function (item) {
      return JSON.parse(item);
    });
    this.receiveMessage({
      'data': action
    });
  };

  return IosWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/Mode.js":
/*!*****************************!*\
  !*** ./src/offline/Mode.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


var Mode = function () {
  Mode.$inject = ["ngeoOfflineConfiguration"];

  function Mode(ngeoOfflineConfiguration) {
    this.enabled_ = false;
    this.component_;
    this.ngeoOfflineConfiguration_ = ngeoOfflineConfiguration;
  }

  var _proto = Mode.prototype;

  _proto.isEnabled = function isEnabled() {
    return this.enabled_;
  };

  _proto.enable = function enable() {
    this.enabled_ = true;
  };

  _proto.registerComponent = function registerComponent(component) {
    this.component_ = component;
  };

  _proto.activateOfflineMode = function activateOfflineMode() {
    this.component_.activateOfflineMode();
  };

  _proto.hasData = function hasData() {
    return this.ngeoOfflineConfiguration_.hasOfflineData();
  };

  return Mode;
}();

var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOfflineMode', []);
module.service('ngeoOfflineMode', Mode);
Mode.module = module;
/* harmony default export */ __webpack_exports__["default"] = (Mode);

/***/ }),

/***/ "./src/offline/NetworkStatus.js":
/*!**************************************!*\
  !*** ./src/offline/NetworkStatus.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);



var Service = function () {
  Service.$inject = ["$document", "$window", "$timeout", "$rootScope", "ngeoOfflineTestUrl"];

  function Service($document, $window, $timeout, $rootScope, ngeoOfflineTestUrl) {
    this.$document_ = $document;
    this.$window_ = $window;
    this.$timeout_ = $timeout;
    this.$rootScope_ = $rootScope;
    this.ngeoOfflineTestUrl_ = ngeoOfflineTestUrl;
    this.count_ = 0;
    this.offline_;
    this.promise_;
    this.initialize_();
  }

  var _proto = Service.prototype;

  _proto.initialize_ = function initialize_() {
    var _this = this;

    this.offline_ = !this.$window_.navigator.onLine;
    this.$window_.addEventListener('offline', function () {
      _this.triggerChangeStatusEvent_(true);
    });
    this.$window_.addEventListener('online', function () {
      _this.check(undefined);
    });

    if (this.$document_['ajaxError']) {
      this.$document_['ajaxError'](function (evt, jqxhr, settings, thrownError) {
        if (!/^(canceled|abort)$/.test(thrownError)) {
          _this.check(2000);
        }
      });
    }
  };

  _proto.check = function check(timeout) {
    var _this2 = this;

    if (this.promise_) {
      this.$timeout_.cancel(this.promise_);
      this.promise_ = undefined;
    }

    if (timeout !== undefined) {
      this.count_++;
      this.promise_ = this.$timeout_(function () {
        return _this2.check();
      }, timeout);
      return;
    }

    $.ajax({
      method: 'GET',
      url: this.ngeoOfflineTestUrl_,
      timeout: 1000,
      success: function success() {
        _this2.count_ = 0;

        if (_this2.offline_) {
          _this2.triggerChangeStatusEvent_(false);
        }
      },
      error: function error() {
        _this2.count_++;

        if (_this2.count_ > 2 && !_this2.offline_) {
          _this2.triggerChangeStatusEvent_(true);
        }
      }
    });
  };

  _proto.triggerChangeStatusEvent_ = function triggerChangeStatusEvent_(offline) {
    this.offline_ = offline;
    this.$rootScope_.$digest();
  };

  _proto.isDisconnected = function isDisconnected() {
    return !!this.offline_;
  };

  return Service;
}();

var name = 'ngeoNetworkStatus';
Service.module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, [ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_0__["default"].name]);
Service.module.service(name, Service);

var httpInterceptor = function httpInterceptor($q, ngeoDebounce, ngeoNetworkStatus) {
  var debouncedCheck = ngeoDebounce(function () {
    return ngeoNetworkStatus.check(undefined);
  }, 2000, false);
  return {
    request: function request(config) {
      return config;
    },
    requestError: function requestError(rejection) {
      return $q.reject(rejection);
    },
    response: function response(_response) {
      return _response;
    },
    responseError: function responseError(rejection) {
      debouncedCheck();
      return $q.reject(rejection);
    }
  };
};

httpInterceptor.$inject = ["$q", "ngeoDebounce", "ngeoNetworkStatus"];
httpInterceptor.$inject = ["$q", "ngeoDebounce", "ngeoNetworkStatus"];
Service.module.factory('httpInterceptor', httpInterceptor);

Service.module.configFunction_ = function ($httpProvider) {
  $httpProvider.interceptors.push('httpInterceptor');
};

Service.module.configFunction_.$inject = ["$httpProvider"];
Service.module.config(Service.module.configFunction_);
Service.module.value('ngeoOfflineTestUrl', '');
var exports = Service;
/* harmony default export */ __webpack_exports__["default"] = (exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/offline/Restorer.js":
/*!*********************************!*\
  !*** ./src/offline/Restorer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_map_BackgroundLayerMgr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/map/BackgroundLayerMgr.js */ "./src/map/BackgroundLayerMgr.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelperLoose(o) { var i = 0; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } i = o[Symbol.iterator](); return i.next.bind(i); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var Restorer = function () {
  Restorer.$inject = ["ngeoOfflineConfiguration", "ngeoBackgroundLayerMgr"];

  function Restorer(ngeoOfflineConfiguration, ngeoBackgroundLayerMgr) {
    this.configuration_ = ngeoOfflineConfiguration;
    this.ngeoBackgroundLayerMgr_ = ngeoBackgroundLayerMgr;
  }

  var _proto = Restorer.prototype;

  _proto.restore = function restore(map) {
    var _this = this;

    return this.configuration_.getItem('offline_content').then(function (offlineContent) {
      return _this.doRestore(map, offlineContent);
    });
  };

  _proto.doRestore = function doRestore(map, offlineContent) {
    map.getLayerGroup().getLayers().clear();

    for (var _iterator = _createForOfIteratorHelperLoose(offlineContent.layers), _step; !(_step = _iterator()).done;) {
      var offlineLayer = _step.value;
      var layer = this.configuration_.recreateOfflineLayer(offlineLayer);

      if (layer) {
        map.addLayer(layer);

        if (offlineLayer.backgroundLayer) {
          this.ngeoBackgroundLayerMgr_.set(map, layer);
        }
      }
    }

    return offlineContent.extent;
  };

  return Restorer;
}();

var name = 'ngeoOfflineRestorer';
Restorer.module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, [ngeo_map_BackgroundLayerMgr_js__WEBPACK_IMPORTED_MODULE_0__["default"].name]).service(name, Restorer);
var exports = Restorer;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/SerializerDeserializer.js":
/*!***********************************************!*\
  !*** ./src/offline/SerializerDeserializer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/tilegrid/TileGrid.js */ "./node_modules/ol/tilegrid/TileGrid.js");
/* harmony import */ var ol_tilegrid_WMTS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/tilegrid/WMTS.js */ "./node_modules/ol/tilegrid/WMTS.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/WMTS.js */ "./node_modules/ol/source/WMTS.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");







var SerDes = function () {
  function SerDes(_ref) {
    var gutter = _ref.gutter;
    this.gutter_ = gutter;
  }

  var _proto = SerDes.prototype;

  _proto.createBaseObject_ = function createBaseObject_(olObject) {
    var properties = olObject.getProperties();
    var obj = {};

    for (var key in properties) {
      var value = properties[key];
      var typeOf = typeof value;

      if (typeOf === 'string' || typeOf === 'number') {
        obj[key] = value;
      }
    }

    return obj;
  };

  _proto.serializeTilegrid = function serializeTilegrid(tilegrid) {
    var obj = {};
    obj['extent'] = tilegrid.getExtent();
    obj['minZoom'] = tilegrid.getMinZoom();
    obj['origin'] = tilegrid.getOrigin(0);
    obj['resolutions'] = tilegrid.getResolutions();
    obj['tileSize'] = tilegrid.getTileSize(tilegrid.getMinZoom());
    return JSON.stringify(obj);
  };

  _proto.deserializeTilegrid = function deserializeTilegrid(serialization) {
    var options = JSON.parse(serialization);
    return new ol_tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
  };

  _proto.serializeTilegridWMTS = function serializeTilegridWMTS(tilegrid) {
    if (!tilegrid) {
      return undefined;
    }

    var obj = {};
    var resolutions = tilegrid.getResolutions();
    obj['extent'] = tilegrid.getExtent();
    obj['minZoom'] = tilegrid.getMinZoom();
    obj['matrixIds'] = tilegrid.getMatrixIds();
    obj['resolutions'] = resolutions;
    obj['origins'] = [];

    for (var z = 0; z < resolutions.length; ++z) {
      obj['origins'].push(tilegrid.getOrigin(z));
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeTilegridWMTS = function deserializeTilegridWMTS(serialization) {
    var options = JSON.parse(serialization);
    return new ol_tilegrid_WMTS_js__WEBPACK_IMPORTED_MODULE_1__["default"](options);
  };

  _proto.serializeSourceTileWMS = function serializeSourceTileWMS(source) {
    var obj = this.createBaseObject_(source);
    obj['params'] = source.getParams();
    obj['urls'] = source.getUrls();
    obj['tileGrid'] = this.serializeTilegrid(source.getTileGrid());
    var projection = source.getProjection();

    if (projection) {
      obj['projection'] = ol_proj_js__WEBPACK_IMPORTED_MODULE_2__["get"](source.getProjection()).getCode();
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeSourceTileWMS = function deserializeSourceTileWMS(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    options.tileLoadFunction = tileLoadFunction;

    if (options.tileGrid) {
      options.tileGrid = this.deserializeTilegrid(options.tileGrid);
    }

    options.gutter = this.gutter_;
    return new ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__["default"](options);
  };

  _proto.serializeSourceWMTS = function serializeSourceWMTS(source) {
    var obj = this.createBaseObject_(source);
    obj.dimensions = source.getDimensions();
    obj.format = source.getFormat();
    obj.urls = source.getUrls();
    obj.version = source.getVersion();
    obj.layer = source.getLayer();
    obj.style = source.getStyle();
    obj.matrixSet = source.getMatrixSet();
    var tileGridWMTS = source.getTileGrid();
    obj.tileGrid = this.serializeTilegridWMTS(tileGridWMTS);
    obj.requestEncoding = source.getRequestEncoding();
    var projection = source.getProjection();

    if (projection) {
      obj.projection = ol_proj_js__WEBPACK_IMPORTED_MODULE_2__["get"](source.getProjection()).getCode();
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeSourceWMTS = function deserializeSourceWMTS(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    options.tileLoadFunction = tileLoadFunction;

    if (options.tileGrid) {
      options.tileGrid = this.deserializeTilegridWMTS(options.tileGrid);
    }

    return new ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__["default"](options);
  };

  _proto.makeInfinitySerializable_ = function makeInfinitySerializable_(number) {
    if (number === Infinity) {
      return 1000;
    }

    return number;
  };

  _proto.serializeTileLayer = function serializeTileLayer(layer, source) {
    var obj = this.createBaseObject_(layer);
    obj.opacity = layer.getOpacity();
    obj.visible = layer.getVisible();
    obj.minResolution = layer.getMinResolution();
    obj.maxResolution = this.makeInfinitySerializable_(layer.getMaxResolution());
    obj.zIndex = layer.getZIndex();
    source = source || layer.getSource();

    if (source instanceof ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      obj.source = this.serializeSourceTileWMS(source);
      obj.sourceType = 'tileWMS';
    } else if (source instanceof ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
      obj.source = this.serializeSourceWMTS(source);
      obj.sourceType = 'WMTS';
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeTileLayer = function deserializeTileLayer(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    var sourceType = options['sourceType'];

    if (sourceType === 'tileWMS') {
      options.source = this.deserializeSourceTileWMS(options.source, tileLoadFunction);
    } else if (sourceType === 'WMTS') {
      options.source = this.deserializeSourceWMTS(options.source, tileLoadFunction);
    }

    return new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__["default"](options);
  };

  return SerDes;
}();

var exports = SerDes;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/ServiceManager.js":
/*!***************************************!*\
  !*** ./src/offline/ServiceManager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


var ServiceManager = function () {
  ServiceManager.$inject = ["$injector"];

  function ServiceManager($injector) {
    this.$injector_ = $injector;
    this.saveService_ = null;
    this.restoreService_ = null;
  }

  var _proto = ServiceManager.prototype;

  _proto.getOfflineService_ = function getOfflineService_(serviceLike, method) {
    if (typeof serviceLike === 'string') {
      if (!this.$injector_.has(serviceLike)) {
        console.error("The offline " + method + " service could not be found");
        return;
      }

      var service = this.$injector_.get(serviceLike);

      if (!service[method]) {
        console.error("The offline service " + serviceLike + " does not have a " + method + " method");
        return;
      }

      return service;
    }

    if (!serviceLike[method]) {
      console.error("The provided offline service does not have a " + method + " method");
      return;
    }

    return serviceLike;
  };

  _proto.setSaveService = function setSaveService(saveLikeService) {
    this.saveService_ = this.getOfflineService_(saveLikeService, 'save');
  };

  _proto.setRestoreService = function setRestoreService(restoreLikeService) {
    this.restoreService_ = this.getOfflineService_(restoreLikeService, 'restore');
  };

  _proto.cancel = function cancel() {
    if (!this.saveService_) {
      console.warn('You must register a saveService first');
      return;
    }

    this.saveService_.cancel();
  };

  _proto.save = function save(extent, map) {
    if (!this.saveService_) {
      console.warn('You must register a saveService first');
      return;
    }

    this.saveService_.save(extent, map);
  };

  _proto.restore = function restore(map) {
    if (!this.restoreService_) {
      console.warn('You must register a restoreService first');
      return Promise.reject();
    }

    return this.restoreService_.restore(map);
  };

  return ServiceManager;
}();

ServiceManager.module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOfflineServiceManager', []);
ServiceManager.module.service('ngeoOfflineServiceManager', ServiceManager);
/* harmony default export */ __webpack_exports__["default"] = (ServiceManager);

/***/ }),

/***/ "./src/offline/TilesDownloader.js":
/*!****************************************!*\
  !*** ./src/offline/TilesDownloader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function blobToDataUrl(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

var exports = function () {
  function exports(tiles, callbacks, workers) {
    this.maxNumberOfWorkers_ = workers;
    this.wasStarted_ = false;
    this.tiles_ = tiles;
    this.callbacks_ = callbacks;
    this.allCount_ = 0;
    this.okCount_ = 0;
    this.koCount_ = 0;
    this.requestedCount_ = 0;
    this.resolvePromise_;
    this.promise_ = null;
    this.tileIndex_ = 0;
    this.cancel_ = false;
  }

  var _proto = exports.prototype;

  _proto.cancel = function cancel() {
    this.cancel_ = true;
  };

  _proto.downloadTile_ = function downloadTile_() {
    var _this = this;

    if (this.cancel_ || this.tileIndex_ >= this.tiles_.length) {
      return;
    }

    var tile = this.tiles_[this.tileIndex_++];
    var tileUrl = tile.url;
    var xhr = new XMLHttpRequest();
    xhr['tileUrl'] = tile.url;
    xhr.open('GET', tileUrl, true);
    xhr.responseType = 'blob';

    var onTileDownloaded = function onTileDownloaded() {
      if (_this.allCount_ === _this.tiles_.length) {
        _this.resolvePromise_();
      }

      _this.downloadTile_();
    };

    var errorCallback = function errorCallback(e) {
      if (_this.cancel_) {
        return;
      }

      ++_this.allCount_;
      ++_this.koCount_;
      var progress = _this.allCount_ / _this.tiles_.length;

      _this.callbacks_.onTileDownloadError(progress).then(onTileDownloaded, onTileDownloaded);
    };

    var onloadCallback = function onloadCallback(e) {
      var response = e.target.response;

      if (response && response.size !== 0) {
        blobToDataUrl(response).then(function (dataUrl) {
          if (_this.cancel_) {
            return;
          }

          ++_this.allCount_;
          ++_this.okCount_;
          tile.response = dataUrl;
          var progress = _this.allCount_ / _this.tiles_.length;

          _this.callbacks_.onTileDownloadSuccess(progress, tile).then(onTileDownloaded, onTileDownloaded);
        }, function () {
          if (_this.cancel_) {
            return;
          }

          errorCallback(e);
        });
      } else {
        if (_this.cancel_) {
          return;
        }

        ++_this.allCount_;
        ++_this.okCount_;

        _this.callbacks_.onTileDownloadSuccess(_this.allCount_ / _this.tiles_.length, tile).then(onTileDownloaded, onTileDownloaded);
      }
    };

    xhr.onload = onloadCallback;
    xhr.onerror = errorCallback;
    xhr.onabort = errorCallback;
    xhr.ontimeout = errorCallback;
    xhr.send();
    ++this.requestedCount_;
  };

  _proto.download = function download() {
    var _this2 = this;

    if (this.promise_) {
      return this.promise_;
    }

    this.promise_ = new Promise(function (resolve, reject) {
      _this2.resolvePromise_ = resolve;
    });
    console.assert(this.tiles_);

    if (this.tiles_.length === 0) {
      this.callbacks_.onTileDownloadError(1);
      this.resolvePromise_();
    } else {
      for (var i = 0; i < this.maxNumberOfWorkers_; ++i) {
        this.downloadTile_();
      }
    }

    return this.promise_;
  };

  return exports;
}();

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/component.html":
/*!************************************!*\
  !*** ./src/offline/component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="main-button">\n  <span ng-if="!$ctrl.hasData()">\n    <div class="no-data" ng-click="$ctrl.toggleViewExtentSelection()"></div>\n  </span>\n  <span ng-if="$ctrl.hasData()">\n    <div class="with-data" ng-click="$ctrl.showMenu()"></div>\n  </span>\n</div>\n\n<div ng-if="$ctrl.selectingExtent && !$ctrl.networkStatus.isDisconnected()" class="validate-extent btn btn-primary">\n  <div ng-if="!$ctrl.downloading" ng-click="$ctrl.computeSizeAndDisplayAlertLoadData()" translate>Save map</div>\n  <div ng-if="$ctrl.downloading" ng-click="$ctrl.askAbortDownload()" translate>Abort</div>\n</div>\n\n\n<div ng-if="$ctrl.downloading" class="in-progress">\n  <div>{{$ctrl.progressPercents}}%</div>\n</div>\n\n<ngeo-modal ng-model="$ctrl.menuDisplayed">\n  <div class="modal-header">\n    <button type="button" class="close"\n              data-dismiss="modal"\n              aria-label="{{\'Close\' | translate}}">\n      <span aria-hidden="true">&times;</span>\n    </button>\n    <h4 class="modal-title" translate>Offline map</h4>\n  </div>\n  <div class="modal-body">\n    <div ng-if="$ctrl.hasData()">\n      <button type="button" class="extent-zoom btn btn-default"\n              ng-if="!$ctrl.offlineMode.isEnabled()"\n              ng-click="$ctrl.activateOfflineMode()"\n              translate>Activate offline mode\n      </button>\n      <button type="button" class="extent-zoom btn btn-default"\n              ng-if="$ctrl.offlineMode.isEnabled() && !$ctrl.networkStatus.isDisconnected()"\n              ng-click="$ctrl.deactivateOfflineMode()"\n              translate>Deactivate offline mode\n      </button>\n\n      <button type="button" class="extent-show btn btn-default"\n              ng-if="$ctrl.offlineMode.isEnabled()"\n              ng-click="$ctrl.toggleExtentVisibility()">\n        <span ng-if="$ctrl.isExtentVisible()" translate>Hide extent</span>\n        <span ng-if="!$ctrl.isExtentVisible()" translate >Show extent</span>\n      </button>\n      <button type="button" class="delete btn btn-default"\n              ng-if="!$ctrl.networkStatus.isDisconnected()"\n              ng-click="$ctrl.displayAlertDestroyData = true"\n              translate>Delete data\n      </button>\n    </div>\n    <div ng-if="!$ctrl.hasData() && !$ctrl.networkStatus.isDisconnected()">\n      <button type="button" class="new-data btn btn-default"\n              ng-click="$ctrl.toggleViewExtentSelection()"\n              translate>Save new map\n      </button>\n    </div>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertLoadData">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>~{{$ctrl.estimatedLoadDataSize}}MB of maps will be downloaded (until scale 1:25\'000) - Don\'t lock your device or navigate away from this site during the download process. Deactivate "private" mode of your browser.</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.validateExtent()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertNoLayer">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>No maps selected for saving.</p>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Ok\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertDestroyData">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>Do you really want to remove your data ?</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.deleteData()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertAbortDownload">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>Do you really want to remove your data ?</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.abortDownload()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              ng-click="$ctrl.followDownloadProgression_()"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n';

}
return __p
}

/***/ }),

/***/ "./src/offline/component.js":
/*!**********************************!*\
  !*** ./src/offline/component.js ***!
  \**********************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr.js */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_message_modalComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/message/modalComponent.js */ "./src/message/modalComponent.js");
/* harmony import */ var ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils.js */ "./src/utils.js");
/* harmony import */ var ol_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Collection.js */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Observable.js */ "./node_modules/ol/Observable.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/GeometryLayout.js */ "./node_modules/ol/geom/GeometryLayout.js");
/* harmony import */ var ol_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/has.js */ "./node_modules/ol/has.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_9__);










var module = angular__WEBPACK_IMPORTED_MODULE_9___default.a.module('ngeoOffline', [ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, ngeo_message_modalComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
module.value('ngeoOfflineTemplateUrl', function (element, attrs) {
  var templateUrl = attrs['ngeoOfflineTemplateurl'];
  return templateUrl !== undefined ? templateUrl : 'ngeo/offline/component.html';
});
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/offline/component.html', __webpack_require__(/*! ./component.html */ "./src/offline/component.html"));
}]);
ngeoOfflineTemplateUrl.$inject = ["$element", "$attrs", "ngeoOfflineTemplateUrl"];

function ngeoOfflineTemplateUrl($element, $attrs, ngeoOfflineTemplateUrl) {
  return ngeoOfflineTemplateUrl($element, $attrs);
}

var component = {
  bindings: {
    'map': '<ngeoOfflineMap',
    'extentSize': '<?ngeoOfflineExtentsize',
    'maskMargin': '<?ngeoOfflineMaskMargin',
    'minZoom': '<?ngeoOfflineMinZoom',
    'maxZoom': '<?ngeoOfflineMaxZoom'
  },
  controller: 'ngeoOfflineController',
  templateUrl: ngeoOfflineTemplateUrl
};
module.component('ngeoOffline', component);
var Controller = function () {
  Controller.$inject = ["$timeout", "ngeoFeatureOverlayMgr", "ngeoOfflineServiceManager", "ngeoOfflineConfiguration", "ngeoOfflineMode", "ngeoNetworkStatus"];

  function Controller($timeout, ngeoFeatureOverlayMgr, ngeoOfflineServiceManager, ngeoOfflineConfiguration, ngeoOfflineMode, ngeoNetworkStatus) {
    var _this = this;

    this.$timeout_ = $timeout;
    this.ngeoOfflineServiceManager_ = ngeoOfflineServiceManager;
    this.ngeoOfflineConfiguration_ = ngeoOfflineConfiguration;
    this.offlineMode = ngeoOfflineMode;
    this.networkStatus = ngeoNetworkStatus;
    this.map;
    this.extentSize;
    this.featuresOverlay_ = ngeoFeatureOverlayMgr.getFeatureOverlay();
    this.overlayCollection_ = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.featuresOverlay_.setFeatures(this.overlayCollection_);
    this.postcomposeListener_;
    this.postComposeListenerKey_ = null;
    this.dataPolygon_ = null;
    this.selectingExtent = false;
    this.downloading = false;
    this.progressPercents = 0;
    this.menuDisplayed = false;
    this.displayAlertAbortDownload = false;
    this.displayAlertLoadData = false;
    this.displayAlertNoLayer = false;
    this.maskMargin;
    this.minZoom;
    this.maxZoom;
    this.originalMinZoom;
    this.originalMaxZoom;
    this.estimatedLoadDataSize;

    this.progressCallback_ = function (event) {
      var progress = event.detail['progress'];
      _this.progressPercents = Math.floor(progress * 100);

      if (progress === 1) {
        _this.finishDownload_();
      }

      _this.$timeout_(function () {}, 0);
    };
  }

  var _proto = Controller.prototype;

  _proto.$onInit = function $onInit() {
    this.offlineMode.registerComponent(this);
    this.postcomposeListener_ = this.createMaskPostcompose_();
    this.ngeoOfflineConfiguration_.on('progress', this.progressCallback_);
    this.maskMargin = this.maskMargin || 100;
    this.minZoom = this.minZoom || 10;
    this.maxZoom = this.maxZoom || 15;
  };

  _proto.$onDestroy = function $onDestroy() {
    this.ngeoOfflineConfiguration_.un('progress', this.progressCallback_);
  };

  _proto.hasData = function hasData() {
    return this.ngeoOfflineConfiguration_.hasOfflineData();
  };

  _proto.computeSizeAndDisplayAlertLoadData = function computeSizeAndDisplayAlertLoadData() {
    this.estimatedLoadDataSize = this.ngeoOfflineConfiguration_.estimateLoadDataSize(this.map);

    if (this.estimatedLoadDataSize > 0) {
      this.displayAlertLoadData = true;
    } else {
      this.displayAlertNoLayer = true;
    }
  };

  _proto.toggleViewExtentSelection = function toggleViewExtentSelection(finished) {
    this.menuDisplayed = false;
    this.selectingExtent = !this.selectingExtent;

    if (this.postComposeListenerKey_) {
      Object(ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__["unByKey"])(this.postComposeListenerKey_);
      this.postComposeListenerKey_ = null;
      this.removeZoomConstraints_();
    }

    if (this.selectingExtent && !this.postComposeListenerKey_) {
      this.addZoomConstraints_();
      this.postComposeListenerKey_ = this.map.on('postcompose', this.postcomposeListener_);
    }

    this.map.render();
  };

  _proto.validateExtent = function validateExtent() {
    this.progressPercents = 0;
    var extent = this.getDowloadExtent_();
    this.downloading = true;
    this.ngeoOfflineServiceManager_.save(extent, this.map);
  };

  _proto.finishDownload_ = function finishDownload_() {
    this.downloading = false;
    this.toggleViewExtentSelection(true);
  };

  _proto.askAbortDownload = function askAbortDownload() {
    this.displayAlertAbortDownload = true;
  };

  _proto.abortDownload = function abortDownload() {
    this.downloading = false;
    this.ngeoOfflineServiceManager_.cancel();
    this.deleteData();
  };

  _proto.showMenu = function showMenu() {
    this.menuDisplayed = true;
  };

  _proto.activateOfflineMode = function activateOfflineMode() {
    var _this2 = this;

    this.ngeoOfflineServiceManager_.restore(this.map).then(function (extent) {
      _this2.dataPolygon_ = _this2.createPolygonFromExtent_(extent);

      var size = _this2.map.getSize();

      _this2.map.getView().fit(extent, {
        size: size
      });

      _this2.menuDisplayed = false;

      _this2.displayExtent_();

      _this2.offlineMode.enable();
    });
  };

  _proto.deactivateOfflineMode = function deactivateOfflineMode() {
    window.location.reload();
  };

  _proto.toggleExtentVisibility = function toggleExtentVisibility() {
    if (this.isExtentVisible()) {
      this.overlayCollection_.clear();
    } else {
      this.displayExtent_();
    }
  };

  _proto.isExtentVisible = function isExtentVisible() {
    return this.overlayCollection_.getLength() > 0;
  };

  _proto.deleteData = function deleteData() {
    var _this3 = this;

    this.overlayCollection_.clear();
    this.dataPolygon_ = null;

    if (this.networkStatus.isDisconnected()) {
      this.menuDisplayed = false;
    }

    var reloadIfInOfflineMode = function reloadIfInOfflineMode() {
      if (_this3.offlineMode.isEnabled()) {
        _this3.deactivateOfflineMode();
      }
    };

    this.ngeoOfflineConfiguration_.clear().then(reloadIfInOfflineMode);
  };

  _proto.displayExtent_ = function displayExtent_() {
    if (!this.isExtentVisible()) {
      var feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.dataPolygon_);
      this.overlayCollection_.push(feature);
    }
  };

  _proto.addZoomConstraints_ = function addZoomConstraints_() {
    var view = this.map.getView();
    var zoom = view.getZoom();
    this.originalMinZoom = view.getMinZoom();
    this.originalMaxZoom = view.getMaxZoom();

    if (zoom < this.minZoom) {
      view.setZoom(this.minZoom);
    } else if (zoom > this.maxZoom) {
      view.setZoom(this.maxZoom);
    }

    view.setMaxZoom(this.maxZoom);
    view.setMinZoom(this.minZoom);
  };

  _proto.removeZoomConstraints_ = function removeZoomConstraints_() {
    var view = this.map.getView();
    view.setMaxZoom(this.originalMaxZoom);
    view.setMinZoom(this.originalMinZoom);
  };

  _proto.createMaskPostcompose_ = function createMaskPostcompose_() {
    var _this4 = this;

    return function (evt) {
      var context = evt.context;
      var frameState = evt.frameState;
      var resolution = frameState.viewState.resolution;
      var viewportWidth = frameState.size[0] * frameState.pixelRatio;
      var viewportHeight = frameState.size[1] * frameState.pixelRatio;
      var extentLength = _this4.extentSize ? _this4.extentSize / resolution * ol_has_js__WEBPACK_IMPORTED_MODULE_8__["DEVICE_PIXEL_RATIO"] : Math.min(viewportWidth, viewportHeight) - _this4.maskMargin * 2;
      var extentHalfLength = Math.ceil(extentLength / 2);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(viewportWidth, 0);
      context.lineTo(viewportWidth, viewportHeight);
      context.lineTo(0, viewportHeight);
      context.lineTo(0, 0);
      context.closePath();

      var extent = _this4.createExtent_([viewportWidth / 2, viewportHeight / 2], extentHalfLength);

      context.moveTo(extent[0], extent[1]);
      context.lineTo(extent[0], extent[3]);
      context.lineTo(extent[2], extent[3]);
      context.lineTo(extent[2], extent[1]);
      context.lineTo(extent[0], extent[1]);
      context.closePath();
      context.fillStyle = 'rgba(0, 5, 25, 0.5)';
      context.fill();
    };
  };

  _proto.createPolygonFromExtent_ = function createPolygonFromExtent_(extent) {
    var projExtent = this.map.getView().getProjection().getExtent();
    return new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_6__["default"]([Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["extentToRectangle"])(projExtent), Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["extentToRectangle"])(extent)], ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"].XY);
  };

  _proto.createExtent_ = function createExtent_(center, halfLength) {
    var minx = center[0] - halfLength;
    var miny = center[1] - halfLength;
    var maxx = center[0] + halfLength;
    var maxy = center[1] + halfLength;
    return [minx, miny, maxx, maxy];
  };

  _proto.getDowloadExtent_ = function getDowloadExtent_() {
    var center = this.map.getView().getCenter();
    var halfLength = Math.ceil(this.extentSize || this.getExtentSize_()) / 2;
    return this.createExtent_(center, halfLength);
  };

  _proto.getExtentSize_ = function getExtentSize_() {
    var mapSize = this.map.getSize();
    var maskSizePixel = ol_has_js__WEBPACK_IMPORTED_MODULE_8__["DEVICE_PIXEL_RATIO"] * Math.min(mapSize[0], mapSize[1]) - this.maskMargin * 2;
    var maskSizeMeter = maskSizePixel * this.map.getView().getResolution() / ol_has_js__WEBPACK_IMPORTED_MODULE_8__["DEVICE_PIXEL_RATIO"];
    return maskSizeMeter;
  };

  return Controller;
}();
module.controller('ngeoOfflineController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/offline/module.js":
/*!*******************************!*\
  !*** ./src/offline/module.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/component.js */ "./src/offline/component.js");
/* harmony import */ var ngeo_offline_NetworkStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/offline/NetworkStatus.js */ "./src/offline/NetworkStatus.js");
/* harmony import */ var ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/offline/ServiceManager.js */ "./src/offline/ServiceManager.js");
/* harmony import */ var ngeo_offline_Downloader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/offline/Downloader.js */ "./src/offline/Downloader.js");
/* harmony import */ var ngeo_offline_Restorer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/offline/Restorer.js */ "./src/offline/Restorer.js");
/* harmony import */ var ngeo_offline_Mode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/offline/Mode.js */ "./src/offline/Mode.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_6__);







var exports = angular__WEBPACK_IMPORTED_MODULE_6___default.a.module('ngeoOfflineModule', [ngeo_offline_component_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, ngeo_offline_NetworkStatus_js__WEBPACK_IMPORTED_MODULE_1__["default"].module.name, ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].module.name, ngeo_offline_Downloader_js__WEBPACK_IMPORTED_MODULE_3__["default"].module.name, ngeo_offline_Restorer_js__WEBPACK_IMPORTED_MODULE_4__["default"].module.name, ngeo_offline_Mode_js__WEBPACK_IMPORTED_MODULE_5__["default"].module.name]);
exports.value('ngeoOfflineGutter', 96);
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/utils.js":
/*!******************************!*\
  !*** ./src/offline/utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Group.js */ "./node_modules/ol/layer/Group.js");
var exports = {};


exports.traverseLayer = function (layer, ancestors, visitor) {
  var descend = visitor(layer, ancestors);

  if (descend && layer instanceof ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    layer.getLayers().forEach(function (childLayer) {
      exports.traverseLayer(childLayer, [].concat(ancestors, [layer]), visitor);
    });
  }
};

var extractor = new RegExp('[^/]*//[^/]+/(.*)');

exports.normalizeURL = function (url) {
  var matches = url.match(extractor);
  return matches[1];
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ 31:
/*!****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/offline.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/offline.js */"./examples/offline.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9vZmZsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0Fic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0NvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvRG93bmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9Mb2NhbGZvcmFnZUFuZHJvaWRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0xvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvTG9jYWxmb3JhZ2VJb3NXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL01vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvTmV0d29ya1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9SZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9TZXJpYWxpemVyRGVzZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL1NlcnZpY2VNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL1RpbGVzRG93bmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwib2ZmbGluZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFszMSxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgZXhwb3J0cyA9IHt9O1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvZm9udGF3ZXNvbWUubWluLmNzcyc7XG5pbXBvcnQgJy4vb2ZmbGluZS5jc3MnO1xuaW1wb3J0ICcuL2NvbW1vbl9kZXBlbmRlbmNpZXMuanMnO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcuanMnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IG5nZW9NYXBNb2R1bGUgZnJvbSAnbmdlby9tYXAvbW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvT2ZmbGluZU1vZHVsZSBmcm9tICduZ2VvL29mZmxpbmUvbW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24gZnJvbSAnbmdlby9vZmZsaW5lL0NvbmZpZ3VyYXRpb24uanMnO1xuaW1wb3J0IE5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIgZnJvbSAnbmdlby9vZmZsaW5lL1NlcnZpY2VNYW5hZ2VyLmpzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuZXhwb3J0cy5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWydnZXR0ZXh0Jywgbmdlb01hcE1vZHVsZS5uYW1lLCBuZ2VvT2ZmbGluZU1vZHVsZS5uYW1lLCBOZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyLm1vZHVsZS5uYW1lXSk7XG5leHBvcnRzLm1vZHVsZS52YWx1ZSgnbmdlb09mZmxpbmVUZXN0VXJsJywgJy4uLy4uL3NyYy9vZmZsaW5lL2NvbXBvbmVudC5odG1sJyk7XG5uZ2VvT2ZmbGluZU1vZHVsZS5zZXJ2aWNlKCduZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24nLCBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24pO1xuXG52YXIgTWFpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiBNYWluQ29udHJvbGxlcihuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IsIG5nZW9OZXR3b3JrU3RhdHVzLCBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyKSB7XG4gIHRoaXMub2ZmbGluZUV4dGVudFNpemUgPSAxMDAwMDtcbiAgdGhpcy5uZ2VvTmV0d29ya1N0YXR1cyA9IG5nZW9OZXR3b3JrU3RhdHVzO1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKClcbiAgICB9KV0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBjZW50ZXI6IFszNTIzNzksIDUxNzI3MzNdLFxuICAgICAgem9vbTogNFxuICAgIH0pXG4gIH0pO1xuICBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IuaW5pdCh0aGlzLm1hcCk7XG4gIG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIuc2V0U2F2ZVNlcnZpY2UoJ29mZmxpbmVEb3dubG9hZGVyJyk7XG4gIG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIuc2V0UmVzdG9yZVNlcnZpY2UoJ25nZW9PZmZsaW5lUmVzdG9yZXInKTtcbn07XG5cbk1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIiwgXCJuZ2VvTmV0d29ya1N0YXR1c1wiLCBcIm5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJcIl07XG5NYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibmdlb0ZlYXR1cmVPdmVybGF5TWdyXCIsIFwibmdlb05ldHdvcmtTdGF0dXNcIiwgXCJuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXCJdO1xuZXhwb3J0cy5tb2R1bGUuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsInZhciBBY3Rpb247XG5cbnZhciBleHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBYnN0cmFjdExvY2FsZm9yYWdlV3JhcHBlcigpIHtcbiAgICB0aGlzLndhaXRpbmdQcm9taXNlc18gPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5jdXJyZW50SWRfID0gMDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBYnN0cmFjdExvY2FsZm9yYWdlV3JhcHBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldEl0ZW0gPSBmdW5jdGlvbiBzZXRJdGVtKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3Rpb24uYXBwbHkodGhpcywgWydzZXRJdGVtJ10uY29uY2F0KGFyZ3MpKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQWN0aW9uLmFwcGx5KHRoaXMsIFsnZ2V0SXRlbSddLmNvbmNhdChhcmdzKSk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQWN0aW9uKCdjbGVhcicpO1xuICB9O1xuXG4gIF9wcm90by5jb25maWcgPSBmdW5jdGlvbiBjb25maWcoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQWN0aW9uLmFwcGx5KHRoaXMsIFsnY29uZmlnJ10uY29uY2F0KGFyZ3MpKTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlQWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlQWN0aW9uKGNvbW1hbmQpIHtcbiAgICB2YXIgaWQgPSArK3RoaXMuY3VycmVudElkXztcblxuICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgIH1cblxuICAgIHZhciBhY3Rpb24gPSB7XG4gICAgICAncGx1Z2luJzogJ2xvY2FsZm9yYWdlJyxcbiAgICAgICdjb21tYW5kJzogY29tbWFuZCxcbiAgICAgICdhcmdzJzogYXJncyxcbiAgICAgICdpZCc6IGlkXG4gICAgfTtcbiAgICB2YXIgd2FpdGluZ1Byb21pc2UgPSB7fTtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHdhaXRpbmdQcm9taXNlWydyZXNvbHZlJ10gPSByZXNvbHZlO1xuICAgICAgd2FpdGluZ1Byb21pc2VbJ3JlamVjdCddID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIHRoaXMud2FpdGluZ1Byb21pc2VzXy5zZXQoaWQsIHdhaXRpbmdQcm9taXNlKTtcbiAgICB0aGlzLnBvc3RUb0JhY2tlbmQoYWN0aW9uKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8ucmVjZWl2ZU1lc3NhZ2UgPSBmdW5jdGlvbiByZWNlaXZlTWVzc2FnZShldmVudCkge1xuICAgIHZhciBhY3Rpb24gPSBldmVudFsnZGF0YSddO1xuICAgIHZhciBpZCA9IGFjdGlvblsnaWQnXTtcbiAgICB2YXIgY29tbWFuZCA9IGFjdGlvblsnY29tbWFuZCddO1xuICAgIHZhciBhcmdzID0gYWN0aW9uWydhcmdzJ10gfHwgW107XG4gICAgdmFyIGNvbnRleHQgPSBhY3Rpb25bJ2NvbnRleHQnXTtcbiAgICB2YXIgbXNnID0gYWN0aW9uWydtc2cnXTtcbiAgICB2YXIgd2FpdGluZ1Byb21pc2UgPSB0aGlzLndhaXRpbmdQcm9taXNlc18uZ2V0KGlkKTtcblxuICAgIGlmIChjb21tYW5kID09PSAnZXJyb3InKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1zZywgYXJncywgY29udGV4dCk7XG5cbiAgICAgIGlmICh3YWl0aW5nUHJvbWlzZSkge1xuICAgICAgICB3YWl0aW5nUHJvbWlzZS5yZWplY3QoYXJncywgY29udGV4dCk7XG4gICAgICAgIHRoaXMud2FpdGluZ1Byb21pc2VzXy5kZWxldGUoaWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gJ3Jlc3BvbnNlJykge1xuICAgICAgd2FpdGluZ1Byb21pc2UucmVzb2x2ZS5hcHBseSh3YWl0aW5nUHJvbWlzZSwgYXJncyk7XG4gICAgICB0aGlzLndhaXRpbmdQcm9taXNlc18uZGVsZXRlKGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIGNvbW1hbmQnLCBKU09OLnN0cmluZ2lmeShhY3Rpb24sIG51bGwsICdcXHQnKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wb3N0VG9CYWNrZW5kID0gZnVuY3Rpb24gcG9zdFRvQmFja2VuZChhY3Rpb24pIHt9O1xuXG4gIHJldHVybiBBYnN0cmFjdExvY2FsZm9yYWdlV3JhcHBlcjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IG9sT2JzZXJ2YWJsZSBmcm9tICdvbC9PYnNlcnZhYmxlLmpzJztcbmltcG9ydCBvbExheWVyTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvTGF5ZXIuanMnO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yLmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbExheWVySW1hZ2UgZnJvbSAnb2wvbGF5ZXIvSW1hZ2UuanMnO1xuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2ouanMnO1xuaW1wb3J0IHsgZGVmYXVsdEltYWdlTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvc291cmNlL0ltYWdlLmpzJztcbmltcG9ydCBvbFNvdXJjZUltYWdlV01TIGZyb20gJ29sL3NvdXJjZS9JbWFnZVdNUy5qcyc7XG5pbXBvcnQgb2xTb3VyY2VUaWxlV01TIGZyb20gJ29sL3NvdXJjZS9UaWxlV01TLmpzJztcbmltcG9ydCB7IGNyZWF0ZUZvclByb2plY3Rpb24gYXMgY3JlYXRlVGlsZUdyaWRGb3JQcm9qZWN0aW9uIH0gZnJvbSAnb2wvdGlsZWdyaWQuanMnO1xuaW1wb3J0IFNlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIgZnJvbSAnbmdlby9vZmZsaW5lL1NlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0xvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlQW5kcm9pZFdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0xvY2FsZm9yYWdlQW5kcm9pZFdyYXBwZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlSW9zV3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvTG9jYWxmb3JhZ2VJb3NXcmFwcGVyLmpzJztcbmltcG9ydCBuZ2VvQ3VzdG9tRXZlbnQgZnJvbSAnbmdlby9DdXN0b21FdmVudC5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnbmdlby9vZmZsaW5lL3V0aWxzLmpzJztcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZS9zcmMvbG9jYWxmb3JhZ2UuanMnO1xuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIChfb2xPYnNlcnZhYmxlKSB7XG4gIGV4cG9ydHMuJGluamVjdCA9IFtcIiRyb290U2NvcGVcIiwgXCJuZ2VvQmFja2dyb3VuZExheWVyTWdyXCIsIFwibmdlb09mZmxpbmVHdXR0ZXJcIl07XG5cbiAgX2luaGVyaXRzTG9vc2UoZXhwb3J0cywgX29sT2JzZXJ2YWJsZSk7XG5cbiAgZnVuY3Rpb24gZXhwb3J0cygkcm9vdFNjb3BlLCBuZ2VvQmFja2dyb3VuZExheWVyTWdyLCBuZ2VvT2ZmbGluZUd1dHRlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX29sT2JzZXJ2YWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMubG9jYWxmb3JhZ2VfID0gX3RoaXMuY3JlYXRlTG9jYWxmb3JhZ2UoKTtcblxuICAgIF90aGlzLmNvbmZpZ3VyZUxvY2FsZm9yYWdlKCk7XG5cbiAgICBfdGhpcy5yb290U2NvcGVfID0gJHJvb3RTY29wZTtcbiAgICBfdGhpcy5oYXNEYXRhID0gZmFsc2U7XG5cbiAgICBfdGhpcy5pbml0aWFsaXplSGFzT2ZmbGluZURhdGEoKTtcblxuICAgIF90aGlzLm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JfID0gbmdlb0JhY2tncm91bmRMYXllck1ncjtcbiAgICBfdGhpcy5zZXJEZXNfID0gbmV3IFNlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIoe1xuICAgICAgZ3V0dGVyOiBuZ2VvT2ZmbGluZUd1dHRlclxuICAgIH0pO1xuICAgIF90aGlzLmd1dHRlcl8gPSBuZ2VvT2ZmbGluZUd1dHRlcjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gZXhwb3J0cy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRpc3BhdGNoUHJvZ3Jlc3NfID0gZnVuY3Rpb24gZGlzcGF0Y2hQcm9ncmVzc18ocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IG5nZW9DdXN0b21FdmVudCgncHJvZ3Jlc3MnLCB7XG4gICAgICAncHJvZ3Jlc3MnOiBwcm9ncmVzc1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdGlhbGl6ZUhhc09mZmxpbmVEYXRhID0gZnVuY3Rpb24gaW5pdGlhbGl6ZUhhc09mZmxpbmVEYXRhKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5nZXRJdGVtKCdvZmZsaW5lX2NvbnRlbnQnKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5zZXRIYXNPZmZsaW5lRGF0YSghIXZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaGFzT2ZmbGluZURhdGEgPSBmdW5jdGlvbiBoYXNPZmZsaW5lRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNEYXRhO1xuICB9O1xuXG4gIF9wcm90by5zZXRIYXNPZmZsaW5lRGF0YSA9IGZ1bmN0aW9uIHNldEhhc09mZmxpbmVEYXRhKHZhbHVlKSB7XG4gICAgdmFyIG5lZWREaWdlc3QgPSB2YWx1ZSAhPT0gdGhpcy5oYXNEYXRhO1xuICAgIHRoaXMuaGFzRGF0YSA9IHZhbHVlO1xuXG4gICAgaWYgKG5lZWREaWdlc3QpIHtcbiAgICAgIHRoaXMucm9vdFNjb3BlXy4kYXBwbHlBc3luYygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udHJhY2VHZXRTZXRJdGVtID0gZnVuY3Rpb24gdHJhY2VHZXRTZXRJdGVtKG1zZywga2V5LCBwcm9taXNlKSB7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZUxvY2FsZm9yYWdlID0gZnVuY3Rpb24gY3JlYXRlTG9jYWxmb3JhZ2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbG9jYWxmb3JhZ2U9Y29yZG92YScpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNpbmcgY29yZG92YSBsb2NhbGZvcmFnZScpO1xuICAgICAgcmV0dXJuIG5ldyBMb2NhbGZvcmFnZUNvcmRvdmFXcmFwcGVyKCk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2xvY2FsZm9yYWdlPWFuZHJvaWQnKSkge1xuICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGFuZHJvaWQgbG9jYWxmb3JhZ2UnKTtcbiAgICAgIHJldHVybiBuZXcgTG9jYWxmb3JhZ2VBbmRyb2lkV3JhcHBlcigpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdsb2NhbGZvcmFnZT1pb3MnKSkge1xuICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGlvcyBsb2NhbGZvcmFnZScpO1xuICAgICAgcmV0dXJuIG5ldyBMb2NhbGZvcmFnZUlvc1dyYXBwZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxmb3JhZ2U7XG4gIH07XG5cbiAgX3Byb3RvLmNvbmZpZ3VyZUxvY2FsZm9yYWdlID0gZnVuY3Rpb24gY29uZmlndXJlTG9jYWxmb3JhZ2UoKSB7XG4gICAgdGhpcy5sb2NhbGZvcmFnZV8uY29uZmlnKHtcbiAgICAgICduYW1lJzogJ25nZW9PZmZsaW5lU3RvcmFnZScsXG4gICAgICAndmVyc2lvbic6IDEuMCxcbiAgICAgICdzdG9yZU5hbWUnOiAnb2ZmbGluZVN0b3JhZ2UnXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKGtleSkge1xuICAgIHJldHVybiB0aGlzLnRyYWNlR2V0U2V0SXRlbSgnZ2V0SXRlbScsIGtleSwgdGhpcy5sb2NhbGZvcmFnZV9bJ2dldEl0ZW0nXShrZXkpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhY2VHZXRTZXRJdGVtKCdyZW1vdmVJdGVtJywga2V5LCB0aGlzLmxvY2FsZm9yYWdlX1sncmVtb3ZlSXRlbSddKGtleSkpO1xuICB9O1xuXG4gIF9wcm90by5zZXRJdGVtID0gZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhY2VHZXRTZXRJdGVtKCdzZXRJdGVtJywga2V5LCB0aGlzLmxvY2FsZm9yYWdlX1snc2V0SXRlbSddKGtleSwgdmFsdWUpKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLnNldEhhc09mZmxpbmVEYXRhKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy50cmFjZUdldFNldEl0ZW0oJ2NsZWFyJywgJycsIHRoaXMubG9jYWxmb3JhZ2VfWydjbGVhciddKCkpO1xuICB9O1xuXG4gIF9wcm90by5lc3RpbWF0ZUxvYWREYXRhU2l6ZSA9IGZ1bmN0aW9uIGVzdGltYXRlTG9hZERhdGFTaXplKG1hcCkge1xuICAgIHJldHVybiA1MDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TGF5ZXJLZXkgPSBmdW5jdGlvbiBnZXRMYXllcktleShsYXllckl0ZW0pIHtcbiAgICByZXR1cm4gbGF5ZXJJdGVtLmxheWVyLmdldCgnbGFiZWwnKTtcbiAgfTtcblxuICBfcHJvdG8ub25UaWxlRG93bmxvYWRTdWNjZXNzID0gZnVuY3Rpb24gb25UaWxlRG93bmxvYWRTdWNjZXNzKHByb2dyZXNzLCB0aWxlKSB7XG4gICAgdGhpcy5kaXNwYXRjaFByb2dyZXNzXyhwcm9ncmVzcyk7XG5cbiAgICBpZiAodGlsZS5yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SXRlbSh1dGlscy5ub3JtYWxpemVVUkwodGlsZS51cmwpLCB0aWxlLnJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uVGlsZURvd25sb2FkRXJyb3IgPSBmdW5jdGlvbiBvblRpbGVEb3dubG9hZEVycm9yKHByb2dyZXNzKSB7XG4gICAgdGhpcy5kaXNwYXRjaFByb2dyZXNzXyhwcm9ncmVzcyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIF9wcm90by5nZXRFeHRlbnRCeVpvb20gPSBmdW5jdGlvbiBnZXRFeHRlbnRCeVpvb20obWFwLCBsYXllciwgYW5jZXN0b3JzLCB1c2VyRXh0ZW50KSB7XG4gICAgdmFyIGN1cnJlbnRab29tID0gbWFwLmdldFZpZXcoKS5nZXRab29tKCk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBbMCwgMSwgMiwgMywgNF0uZm9yRWFjaChmdW5jdGlvbiAoZHopIHtcbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIHpvb206IGN1cnJlbnRab29tICsgZHosXG4gICAgICAgIGV4dGVudDogdXNlckV4dGVudFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgX3Byb3RvLnNvdXJjZUltYWdlV01TVG9UaWxlV01TID0gZnVuY3Rpb24gc291cmNlSW1hZ2VXTVNUb1RpbGVXTVMoc291cmNlLCBwcm9qZWN0aW9uKSB7XG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIG9sU291cmNlSW1hZ2VXTVMgJiYgc291cmNlLmdldFVybCgpICYmIHNvdXJjZS5nZXRJbWFnZUxvYWRGdW5jdGlvbigpID09PSBkZWZhdWx0SW1hZ2VMb2FkRnVuY3Rpb24pIHtcbiAgICAgIHZhciB0aWxlR3JpZCA9IGNyZWF0ZVRpbGVHcmlkRm9yUHJvamVjdGlvbihzb3VyY2UuZ2V0UHJvamVjdGlvbigpIHx8IHByb2plY3Rpb24sIDQyLCAyNTYpO1xuICAgICAgc291cmNlID0gbmV3IG9sU291cmNlVGlsZVdNUyh7XG4gICAgICAgIGd1dHRlcjogdGhpcy5ndXR0ZXJfLFxuICAgICAgICB1cmw6IHNvdXJjZS5nZXRVcmwoKSxcbiAgICAgICAgdGlsZUdyaWQ6IHRpbGVHcmlkLFxuICAgICAgICBhdHRyaWJ1dGlvbnM6IHNvdXJjZS5nZXRBdHRyaWJ1dGlvbnMoKSxcbiAgICAgICAgcHJvamVjdGlvbjogc291cmNlLmdldFByb2plY3Rpb24oKSxcbiAgICAgICAgcGFyYW1zOiBzb3VyY2UuZ2V0UGFyYW1zKClcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZUxheWVyTWV0YWRhdGFzID0gZnVuY3Rpb24gY3JlYXRlTGF5ZXJNZXRhZGF0YXMobWFwLCB1c2VyRXh0ZW50KSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgbGF5ZXJzSXRlbXMgPSBbXTtcblxuICAgIHZhciB2aXNpdExheWVyID0gZnVuY3Rpb24gdmlzaXRMYXllcihsYXllciwgYW5jZXN0b3JzKSB7XG4gICAgICBpZiAobGF5ZXIgaW5zdGFuY2VvZiBvbExheWVyTGF5ZXIpIHtcbiAgICAgICAgdmFyIGV4dGVudEJ5Wm9vbSA9IF90aGlzMy5nZXRFeHRlbnRCeVpvb20obWFwLCBsYXllciwgYW5jZXN0b3JzLCB1c2VyRXh0ZW50KTtcblxuICAgICAgICB2YXIgcHJvamVjdGlvbiA9IG9sUHJvai5nZXQobWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkpO1xuXG4gICAgICAgIHZhciBzb3VyY2UgPSBfdGhpczMuc291cmNlSW1hZ2VXTVNUb1RpbGVXTVMobGF5ZXIuZ2V0U291cmNlKCksIHByb2plY3Rpb24pO1xuXG4gICAgICAgIHZhciBsYXllclR5cGU7XG4gICAgICAgIHZhciBsYXllclNlcmlhbGl6YXRpb247XG5cbiAgICAgICAgaWYgKGxheWVyIGluc3RhbmNlb2Ygb2xMYXllclRpbGUgfHwgbGF5ZXIgaW5zdGFuY2VvZiBvbExheWVySW1hZ2UpIHtcbiAgICAgICAgICBsYXllclR5cGUgPSAndGlsZSc7XG4gICAgICAgICAgbGF5ZXJTZXJpYWxpemF0aW9uID0gX3RoaXMzLnNlckRlc18uc2VyaWFsaXplVGlsZUxheWVyKGxheWVyLCBzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGxheWVyIGluc3RhbmNlb2Ygb2xMYXllclZlY3Rvcikge1xuICAgICAgICAgIGxheWVyVHlwZSA9ICd2ZWN0b3InO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJhY2tncm91bmRMYXllciA9IF90aGlzMy5uZ2VvQmFja2dyb3VuZExheWVyTWdyXy5nZXQobWFwKSA9PT0gbGF5ZXI7XG4gICAgICAgIGxheWVyc0l0ZW1zLnB1c2goe1xuICAgICAgICAgIGJhY2tncm91bmRMYXllcjogYmFja2dyb3VuZExheWVyLFxuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIGV4dGVudEJ5Wm9vbTogZXh0ZW50Qnlab29tLFxuICAgICAgICAgIGxheWVyVHlwZTogbGF5ZXJUeXBlLFxuICAgICAgICAgIGxheWVyU2VyaWFsaXphdGlvbjogbGF5ZXJTZXJpYWxpemF0aW9uLFxuICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBhbmNlc3RvcnM6IGFuY2VzdG9yc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIG1hcC5nZXRMYXllcnMoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB1dGlscy50cmF2ZXJzZUxheWVyKHJvb3QsIFtdLCB2aXNpdExheWVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGF5ZXJzSXRlbXM7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVRpbGVMb2FkRnVuY3Rpb25fID0gZnVuY3Rpb24gY3JlYXRlVGlsZUxvYWRGdW5jdGlvbl8ob2ZmbGluZUxheWVyKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIHRpbGVMb2FkRnVuY3Rpb24gPSBmdW5jdGlvbiB0aWxlTG9hZEZ1bmN0aW9uKGltYWdlVGlsZSwgc3JjKSB7XG4gICAgICB0aGF0LmdldEl0ZW0odXRpbHMubm9ybWFsaXplVVJMKHNyYykpLnRoZW4oZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgY29udGVudCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVFBQUFDMUhBd0NBQUFBQzBsRVFWUjQybU5rWUFBQUFBWUFBakNCMEM4QUFBQUFTVVZPUks1Q1lJST0nO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VUaWxlLmdldEltYWdlKCkuc3JjID0gY29udGVudDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGlsZUxvYWRGdW5jdGlvbjtcbiAgfTtcblxuICBfcHJvdG8ucmVjcmVhdGVPZmZsaW5lTGF5ZXIgPSBmdW5jdGlvbiByZWNyZWF0ZU9mZmxpbmVMYXllcihvZmZsaW5lTGF5ZXIpIHtcbiAgICBpZiAob2ZmbGluZUxheWVyLmxheWVyVHlwZSA9PT0gJ3RpbGUnKSB7XG4gICAgICB2YXIgc2VyaWFsaXphdGlvbiA9IG9mZmxpbmVMYXllci5sYXllclNlcmlhbGl6YXRpb247XG4gICAgICB2YXIgdGlsZUxvYWRGdW5jdGlvbiA9IHRoaXMuY3JlYXRlVGlsZUxvYWRGdW5jdGlvbl8ob2ZmbGluZUxheWVyKTtcbiAgICAgIHZhciBsYXllciA9IHRoaXMuc2VyRGVzXy5kZXNlcmlhbGl6ZVRpbGVMYXllcihzZXJpYWxpemF0aW9uLCB0aWxlTG9hZEZ1bmN0aW9uKTtcbiAgICAgIHJldHVybiBsYXllcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TWF4TnVtYmVyT2ZQYXJhbGxlbERvd25sb2FkcyA9IGZ1bmN0aW9uIGdldE1heE51bWJlck9mUGFyYWxsZWxEb3dubG9hZHMoKSB7XG4gICAgcmV0dXJuIDExO1xuICB9O1xuXG4gIHJldHVybiBleHBvcnRzO1xufShvbE9ic2VydmFibGUpO1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobykgeyB2YXIgaSA9IDA7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgcmV0dXJuIGZ1bmN0aW9uICgpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IGkgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgcmV0dXJuIGkubmV4dC5iaW5kKGkpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuaW1wb3J0IHsgREVWSUNFX1BJWEVMX1JBVElPIH0gZnJvbSAnb2wvaGFzLmpzJztcbmltcG9ydCBvbFNvdXJjZVRpbGVXTVMgZnJvbSAnb2wvc291cmNlL1RpbGVXTVMuanMnO1xuaW1wb3J0IG9sU291cmNlV01UUyBmcm9tICdvbC9zb3VyY2UvV01UUy5qcyc7XG5pbXBvcnQgVGlsZXNEb3dubG9hZGVyIGZyb20gJ25nZW8vb2ZmbGluZS9UaWxlc0Rvd25sb2FkZXIuanMnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbmZ1bmN0aW9uIG1hZ25pdHVkZTIoYSwgYikge1xuICB2YXIgbWFnbml0dWRlU3F1YXJlZCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgbWFnbml0dWRlU3F1YXJlZCArPSBNYXRoLnBvdyhhWzFdIC0gYlsxXSwgMik7XG4gIH1cblxuICByZXR1cm4gbWFnbml0dWRlU3F1YXJlZDtcbn1cblxudmFyIERvd25sb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIERvd25sb2FkZXIuJGluamVjdCA9IFtcIm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvblwiXTtcblxuICBmdW5jdGlvbiBEb3dubG9hZGVyKG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbl8gPSBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy50aWxlRG93bmxvYWRlcl8gPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERvd25sb2FkZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgdGhpcy50aWxlRG93bmxvYWRlcl8uY2FuY2VsKCk7XG4gIH07XG5cbiAgX3Byb3RvLnF1ZXVlTGF5ZXJUaWxlc18gPSBmdW5jdGlvbiBxdWV1ZUxheWVyVGlsZXNfKGxheWVyTWV0YWRhdGEsIHF1ZXVlKSB7XG4gICAgdmFyIHNvdXJjZSA9IGxheWVyTWV0YWRhdGEuc291cmNlO1xuICAgIHZhciBtYXAgPSBsYXllck1ldGFkYXRhLm1hcCxcbiAgICAgICAgZXh0ZW50Qnlab29tID0gbGF5ZXJNZXRhZGF0YS5leHRlbnRCeVpvb207XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUuYXNzZXJ0KHNvdXJjZSBpbnN0YW5jZW9mIG9sU291cmNlVGlsZVdNUyB8fCBzb3VyY2UgaW5zdGFuY2VvZiBvbFNvdXJjZVdNVFMpO1xuICAgIHZhciBwcm9qZWN0aW9uID0gbWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgdmFyIHRpbGVHcmlkID0gc291cmNlLmdldFRpbGVHcmlkKCk7XG4gICAgdmFyIHRpbGVVcmxGdW5jdGlvbiA9IHNvdXJjZS5nZXRUaWxlVXJsRnVuY3Rpb24oKTtcbiAgICBjb25zb2xlLmFzc2VydChleHRlbnRCeVpvb20pO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICB2YXIgZXh0ZW50Wm9vbSA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIHogPSBleHRlbnRab29tLnpvb207XG4gICAgICB2YXIgZXh0ZW50ID0gZXh0ZW50Wm9vbS5leHRlbnQ7XG4gICAgICB2YXIgcXVldWVCeVogPSBbXTtcbiAgICAgIHZhciBtaW5YID0gdm9pZCAwLFxuICAgICAgICAgIG1pblkgPSB2b2lkIDAsXG4gICAgICAgICAgbWF4WCA9IHZvaWQgMCxcbiAgICAgICAgICBtYXhZID0gdm9pZCAwO1xuICAgICAgdGlsZUdyaWQuZm9yRWFjaFRpbGVDb29yZChleHRlbnQsIHosIGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICBtYXhYID0gY29vcmRbMV07XG4gICAgICAgIG1heFkgPSBjb29yZFsyXTtcblxuICAgICAgICBpZiAobWluWCA9PT0gdW5kZWZpbmVkIHx8IG1pblkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG1pblggPSBjb29yZFsxXTtcbiAgICAgICAgICBtaW5ZID0gY29vcmRbMl07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gdGlsZVVybEZ1bmN0aW9uKGNvb3JkLCBERVZJQ0VfUElYRUxfUkFUSU8sIHByb2plY3Rpb24pO1xuICAgICAgICBjb25zb2xlLmFzc2VydCh1cmwpO1xuICAgICAgICB2YXIgdGlsZSA9IHtcbiAgICAgICAgICBjb29yZDogY29vcmQsXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgcmVzcG9uc2U6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgcXVldWVCeVoucHVzaCh0aWxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNlbnRlclRpbGVDb29yZCA9IFt6LCAobWluWCArIG1heFgpIC8gMiwgKG1pblkgKyBtYXhZKSAvIDJdO1xuICAgICAgcXVldWVCeVouc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gbWFnbml0dWRlMihhLmNvb3JkLCBjZW50ZXJUaWxlQ29vcmQpIC0gbWFnbml0dWRlMihiLmNvb3JkLCBjZW50ZXJUaWxlQ29vcmQpO1xuICAgICAgfSk7XG4gICAgICBxdWV1ZS5wdXNoLmFwcGx5KHF1ZXVlLCBxdWV1ZUJ5Wik7XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoZXh0ZW50Qnlab29tKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIF9sb29wKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zYXZlID0gZnVuY3Rpb24gc2F2ZShleHRlbnQsIG1hcCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgbGF5ZXJzTWV0YWRhdGFzID0gdGhpcy5jb25maWd1cmF0aW9uXy5jcmVhdGVMYXllck1ldGFkYXRhcyhtYXAsIGV4dGVudCk7XG4gICAgdmFyIHBlcnNpc3RlbnRMYXllcnMgPSBbXTtcbiAgICB2YXIgcXVldWUgPSBbXTtcbiAgICB2YXIgem9vbXMgPSBbXTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGxheWVyc01ldGFkYXRhcyksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgbGF5ZXJJdGVtID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICBpZiAobGF5ZXJJdGVtLmxheWVyVHlwZSA9PT0gJ3RpbGUnKSB7XG4gICAgICAgIHZhciB0aWxlcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXVlTGF5ZXJUaWxlc18obGF5ZXJJdGVtLCB0aWxlcyk7XG4gICAgICAgIHF1ZXVlLnB1c2guYXBwbHkocXVldWUsIHRpbGVzKTtcbiAgICAgIH1cblxuICAgICAgcGVyc2lzdGVudExheWVycy5wdXNoKHtcbiAgICAgICAgYmFja2dyb3VuZExheWVyOiBsYXllckl0ZW0uYmFja2dyb3VuZExheWVyLFxuICAgICAgICBsYXllclR5cGU6IGxheWVySXRlbS5sYXllclR5cGUsXG4gICAgICAgIGxheWVyU2VyaWFsaXphdGlvbjogbGF5ZXJJdGVtLmxheWVyU2VyaWFsaXphdGlvbixcbiAgICAgICAga2V5OiB0aGlzLmNvbmZpZ3VyYXRpb25fLmdldExheWVyS2V5KGxheWVySXRlbSlcbiAgICAgIH0pO1xuICAgICAgbGF5ZXJJdGVtLmV4dGVudEJ5Wm9vbS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIHpvb20gPSBvYmouem9vbTtcblxuICAgICAgICBpZiAoem9vbXMuaW5kZXhPZih6b29tKSA8IDApIHtcbiAgICAgICAgICB6b29tcy5wdXNoKHpvb20pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcGVyc2lzdGVudE9iamVjdCA9IHtcbiAgICAgIGV4dGVudDogZXh0ZW50LFxuICAgICAgbGF5ZXJzOiBwZXJzaXN0ZW50TGF5ZXJzLFxuICAgICAgem9vbXM6IHpvb21zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPCBiID8gLTEgOiAxO1xuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciBzZXRPZmZsaW5lQ29udGVudFByb21pc2UgPSB0aGlzLmNvbmZpZ3VyYXRpb25fLnNldEl0ZW0oJ29mZmxpbmVfY29udGVudCcsIHBlcnNpc3RlbnRPYmplY3QpO1xuICAgIHZhciBtYXhEb3dubG9hZHMgPSB0aGlzLmNvbmZpZ3VyYXRpb25fLmdldE1heE51bWJlck9mUGFyYWxsZWxEb3dubG9hZHMoKTtcbiAgICB0aGlzLnRpbGVEb3dubG9hZGVyXyA9IG5ldyBUaWxlc0Rvd25sb2FkZXIocXVldWUsIHRoaXMuY29uZmlndXJhdGlvbl8sIG1heERvd25sb2Fkcyk7XG4gICAgdmFyIHRpbGVEb3dubG9hZFByb21pc2UgPSB0aGlzLnRpbGVEb3dubG9hZGVyXy5kb3dubG9hZCgpO1xuICAgIHZhciBhbGxQcm9taXNlID0gUHJvbWlzZS5hbGwoW3NldE9mZmxpbmVDb250ZW50UHJvbWlzZSwgdGlsZURvd25sb2FkUHJvbWlzZV0pO1xuXG4gICAgdmFyIHNldEhhc09mZmxpbmVEYXRhID0gZnVuY3Rpb24gc2V0SGFzT2ZmbGluZURhdGEoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29uZmlndXJhdGlvbl8uc2V0SGFzT2ZmbGluZURhdGEodHJ1ZSk7XG4gICAgfTtcblxuICAgIGFsbFByb21pc2UudGhlbihzZXRIYXNPZmZsaW5lRGF0YSwgc2V0SGFzT2ZmbGluZURhdGEpO1xuICAgIHJldHVybiBhbGxQcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBEb3dubG9hZGVyO1xufSgpO1xuXG52YXIgbmFtZSA9ICdvZmZsaW5lRG93bmxvYWRlcic7XG5Eb3dubG9hZGVyLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKS5zZXJ2aWNlKG5hbWUsIERvd25sb2FkZXIpO1xudmFyIGV4cG9ydHMgPSBEb3dubG9hZGVyO1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBBYnN0cmFjdFdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0Fic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLmpzJztcblxudmFyIGV4cG9ydHMgPSBmdW5jdGlvbiAoX0Fic3RyYWN0V3JhcHBlcikge1xuICBfaW5oZXJpdHNMb29zZShBbmRyb2lkV3JhcHBlciwgX0Fic3RyYWN0V3JhcHBlcik7XG5cbiAgZnVuY3Rpb24gQW5kcm9pZFdyYXBwZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQWJzdHJhY3RXcmFwcGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB3aW5kb3dbJ2FuZHJvaWRXcmFwcGVyJ10gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQW5kcm9pZFdyYXBwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5wb3N0VG9CYWNrZW5kID0gZnVuY3Rpb24gcG9zdFRvQmFja2VuZChhY3Rpb24pIHtcbiAgICB2YXIgc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShhY3Rpb24pO1xuICAgIHdpbmRvd1snbmdlb0hvc3QnXVsncG9zdE1lc3NhZ2VUb0FuZHJvaWQnXShzdHJpbmdpZmllZCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlY2VpdmVGcm9tQW5kcm9pZCA9IGZ1bmN0aW9uIHJlY2VpdmVGcm9tQW5kcm9pZChhY3Rpb25TdHJpbmcpIHtcbiAgICB2YXIgYWN0aW9uID0gSlNPTi5wYXJzZShhY3Rpb25TdHJpbmcpO1xuICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2Uoe1xuICAgICAgJ2RhdGEnOiBhY3Rpb25cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQW5kcm9pZFdyYXBwZXI7XG59KEFic3RyYWN0V3JhcHBlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgQWJzdHJhY3RXcmFwcGVyIGZyb20gJ25nZW8vb2ZmbGluZS9BYnN0cmFjdExvY2FsZm9yYWdlV3JhcHBlci5qcyc7XG5cbnZhciBleHBvcnRzID0gZnVuY3Rpb24gKF9BYnN0cmFjdFdyYXBwZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ29yZG92YVdyYXBwZXIsIF9BYnN0cmFjdFdyYXBwZXIpO1xuXG4gIGZ1bmN0aW9uIENvcmRvdmFXcmFwcGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0Fic3RyYWN0V3JhcHBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBfdGhpcy5yZWNlaXZlTWVzc2FnZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgZmFsc2UpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb3Jkb3ZhV3JhcHBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnBvc3RUb0JhY2tlbmQgPSBmdW5jdGlvbiBwb3N0VG9CYWNrZW5kKGFjdGlvbikge1xuICAgIHdpbmRvd1sncGFyZW50J10ucG9zdE1lc3NhZ2UoYWN0aW9uLCAnKicpO1xuICB9O1xuXG4gIHJldHVybiBDb3Jkb3ZhV3JhcHBlcjtcbn0oQWJzdHJhY3RXcmFwcGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBBYnN0cmFjdFdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0Fic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLmpzJztcblxudmFyIGV4cG9ydHMgPSBmdW5jdGlvbiAoX0Fic3RyYWN0V3JhcHBlcikge1xuICBfaW5oZXJpdHNMb29zZShJb3NXcmFwcGVyLCBfQWJzdHJhY3RXcmFwcGVyKTtcblxuICBmdW5jdGlvbiBJb3NXcmFwcGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0Fic3RyYWN0V3JhcHBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgd2luZG93Wydpb3NXcmFwcGVyJ10gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW9zV3JhcHBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnBvc3RUb0JhY2tlbmQgPSBmdW5jdGlvbiBwb3N0VG9CYWNrZW5kKGFjdGlvbikge1xuICAgIGlmIChhY3Rpb25bJ2NvbW1hbmQnXSA9PT0gJ3NldEl0ZW0nKSB7XG4gICAgICBhY3Rpb25bJ2FyZ3MnXVsxXSA9IEpTT04uc3RyaW5naWZ5KGFjdGlvblsnYXJncyddWzFdKTtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShhY3Rpb24pO1xuICAgIHdpbmRvd1snd2Via2l0J11bJ21lc3NhZ2VIYW5kbGVycyddWydpb3MnXVsncG9zdE1lc3NhZ2UnXShzdHJpbmdpZmllZCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlY2VpdmVGcm9tSW9zID0gZnVuY3Rpb24gcmVjZWl2ZUZyb21Jb3MoYWN0aW9uU3RyaW5nKSB7XG4gICAgdmFyIGFjdGlvbiA9IEpTT04ucGFyc2UoYWN0aW9uU3RyaW5nKTtcbiAgICBhY3Rpb25bJ2FyZ3MnXSA9IChhY3Rpb25bJ2FyZ3MnXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShpdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKHtcbiAgICAgICdkYXRhJzogYWN0aW9uXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIElvc1dyYXBwZXI7XG59KEFic3RyYWN0V3JhcHBlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7IiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbnZhciBNb2RlID0gZnVuY3Rpb24gKCkge1xuICBNb2RlLiRpbmplY3QgPSBbXCJuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25cIl07XG5cbiAgZnVuY3Rpb24gTW9kZShuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLmVuYWJsZWRfID0gZmFsc2U7XG4gICAgdGhpcy5jb21wb25lbnRfO1xuICAgIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXyA9IG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNb2RlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaXNFbmFibGVkID0gZnVuY3Rpb24gaXNFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZWRfO1xuICB9O1xuXG4gIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdGhpcy5lbmFibGVkXyA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdGhpcy5jb21wb25lbnRfID0gY29tcG9uZW50O1xuICB9O1xuXG4gIF9wcm90by5hY3RpdmF0ZU9mZmxpbmVNb2RlID0gZnVuY3Rpb24gYWN0aXZhdGVPZmZsaW5lTW9kZSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudF8uYWN0aXZhdGVPZmZsaW5lTW9kZSgpO1xuICB9O1xuXG4gIF9wcm90by5oYXNEYXRhID0gZnVuY3Rpb24gaGFzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLmhhc09mZmxpbmVEYXRhKCk7XG4gIH07XG5cbiAgcmV0dXJuIE1vZGU7XG59KCk7XG5cbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09mZmxpbmVNb2RlJywgW10pO1xubW9kdWxlLnNlcnZpY2UoJ25nZW9PZmZsaW5lTW9kZScsIE1vZGUpO1xuTW9kZS5tb2R1bGUgPSBtb2R1bGU7XG5leHBvcnQgZGVmYXVsdCBNb2RlOyIsImltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxudmFyIFNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIFNlcnZpY2UuJGluamVjdCA9IFtcIiRkb2N1bWVudFwiLCBcIiR3aW5kb3dcIiwgXCIkdGltZW91dFwiLCBcIiRyb290U2NvcGVcIiwgXCJuZ2VvT2ZmbGluZVRlc3RVcmxcIl07XG5cbiAgZnVuY3Rpb24gU2VydmljZSgkZG9jdW1lbnQsICR3aW5kb3csICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBuZ2VvT2ZmbGluZVRlc3RVcmwpIHtcbiAgICB0aGlzLiRkb2N1bWVudF8gPSAkZG9jdW1lbnQ7XG4gICAgdGhpcy4kd2luZG93XyA9ICR3aW5kb3c7XG4gICAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgICB0aGlzLiRyb290U2NvcGVfID0gJHJvb3RTY29wZTtcbiAgICB0aGlzLm5nZW9PZmZsaW5lVGVzdFVybF8gPSBuZ2VvT2ZmbGluZVRlc3RVcmw7XG4gICAgdGhpcy5jb3VudF8gPSAwO1xuICAgIHRoaXMub2ZmbGluZV87XG4gICAgdGhpcy5wcm9taXNlXztcbiAgICB0aGlzLmluaXRpYWxpemVfKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VydmljZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXRpYWxpemVfID0gZnVuY3Rpb24gaW5pdGlhbGl6ZV8oKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMub2ZmbGluZV8gPSAhdGhpcy4kd2luZG93Xy5uYXZpZ2F0b3Iub25MaW5lO1xuICAgIHRoaXMuJHdpbmRvd18uYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnRyaWdnZXJDaGFuZ2VTdGF0dXNFdmVudF8odHJ1ZSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2luZG93Xy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jaGVjayh1bmRlZmluZWQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuJGRvY3VtZW50X1snYWpheEVycm9yJ10pIHtcbiAgICAgIHRoaXMuJGRvY3VtZW50X1snYWpheEVycm9yJ10oZnVuY3Rpb24gKGV2dCwganF4aHIsIHNldHRpbmdzLCB0aHJvd25FcnJvcikge1xuICAgICAgICBpZiAoIS9eKGNhbmNlbGVkfGFib3J0KSQvLnRlc3QodGhyb3duRXJyb3IpKSB7XG4gICAgICAgICAgX3RoaXMuY2hlY2soMjAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2hlY2sgPSBmdW5jdGlvbiBjaGVjayh0aW1lb3V0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9taXNlXykge1xuICAgICAgdGhpcy4kdGltZW91dF8uY2FuY2VsKHRoaXMucHJvbWlzZV8pO1xuICAgICAgdGhpcy5wcm9taXNlXyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvdW50XysrO1xuICAgICAgdGhpcy5wcm9taXNlXyA9IHRoaXMuJHRpbWVvdXRfKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jaGVjaygpO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6IHRoaXMubmdlb09mZmxpbmVUZXN0VXJsXyxcbiAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICBfdGhpczIuY291bnRfID0gMDtcblxuICAgICAgICBpZiAoX3RoaXMyLm9mZmxpbmVfKSB7XG4gICAgICAgICAgX3RoaXMyLnRyaWdnZXJDaGFuZ2VTdGF0dXNFdmVudF8oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgICBfdGhpczIuY291bnRfKys7XG5cbiAgICAgICAgaWYgKF90aGlzMi5jb3VudF8gPiAyICYmICFfdGhpczIub2ZmbGluZV8pIHtcbiAgICAgICAgICBfdGhpczIudHJpZ2dlckNoYW5nZVN0YXR1c0V2ZW50Xyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by50cmlnZ2VyQ2hhbmdlU3RhdHVzRXZlbnRfID0gZnVuY3Rpb24gdHJpZ2dlckNoYW5nZVN0YXR1c0V2ZW50XyhvZmZsaW5lKSB7XG4gICAgdGhpcy5vZmZsaW5lXyA9IG9mZmxpbmU7XG4gICAgdGhpcy4kcm9vdFNjb3BlXy4kZGlnZXN0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRGlzY29ubmVjdGVkID0gZnVuY3Rpb24gaXNEaXNjb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5vZmZsaW5lXztcbiAgfTtcblxuICByZXR1cm4gU2VydmljZTtcbn0oKTtcblxudmFyIG5hbWUgPSAnbmdlb05ldHdvcmtTdGF0dXMnO1xuU2VydmljZS5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuYW1lLCBbbmdlb01pc2NEZWJvdW5jZS5uYW1lXSk7XG5TZXJ2aWNlLm1vZHVsZS5zZXJ2aWNlKG5hbWUsIFNlcnZpY2UpO1xuXG52YXIgaHR0cEludGVyY2VwdG9yID0gZnVuY3Rpb24gaHR0cEludGVyY2VwdG9yKCRxLCBuZ2VvRGVib3VuY2UsIG5nZW9OZXR3b3JrU3RhdHVzKSB7XG4gIHZhciBkZWJvdW5jZWRDaGVjayA9IG5nZW9EZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5nZW9OZXR3b3JrU3RhdHVzLmNoZWNrKHVuZGVmaW5lZCk7XG4gIH0sIDIwMDAsIGZhbHNlKTtcbiAgcmV0dXJuIHtcbiAgICByZXF1ZXN0OiBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9LFxuICAgIHJlcXVlc3RFcnJvcjogZnVuY3Rpb24gcmVxdWVzdEVycm9yKHJlamVjdGlvbikge1xuICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgIH0sXG4gICAgcmVzcG9uc2U6IGZ1bmN0aW9uIHJlc3BvbnNlKF9yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICB9LFxuICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIHJlc3BvbnNlRXJyb3IocmVqZWN0aW9uKSB7XG4gICAgICBkZWJvdW5jZWRDaGVjaygpO1xuICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgIH1cbiAgfTtcbn07XG5cbmh0dHBJbnRlcmNlcHRvci4kaW5qZWN0ID0gW1wiJHFcIiwgXCJuZ2VvRGVib3VuY2VcIiwgXCJuZ2VvTmV0d29ya1N0YXR1c1wiXTtcbmh0dHBJbnRlcmNlcHRvci4kaW5qZWN0ID0gW1wiJHFcIiwgXCJuZ2VvRGVib3VuY2VcIiwgXCJuZ2VvTmV0d29ya1N0YXR1c1wiXTtcblNlcnZpY2UubW9kdWxlLmZhY3RvcnkoJ2h0dHBJbnRlcmNlcHRvcicsIGh0dHBJbnRlcmNlcHRvcik7XG5cblNlcnZpY2UubW9kdWxlLmNvbmZpZ0Z1bmN0aW9uXyA9IGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2h0dHBJbnRlcmNlcHRvcicpO1xufTtcblxuU2VydmljZS5tb2R1bGUuY29uZmlnRnVuY3Rpb25fLiRpbmplY3QgPSBbXCIkaHR0cFByb3ZpZGVyXCJdO1xuU2VydmljZS5tb2R1bGUuY29uZmlnKFNlcnZpY2UubW9kdWxlLmNvbmZpZ0Z1bmN0aW9uXyk7XG5TZXJ2aWNlLm1vZHVsZS52YWx1ZSgnbmdlb09mZmxpbmVUZXN0VXJsJywgJycpO1xudmFyIGV4cG9ydHMgPSBTZXJ2aWNlO1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG8pIHsgdmFyIGkgPSAwOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHJldHVybiBmdW5jdGlvbiAoKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH07IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSBpID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IHJldHVybiBpLm5leHQuYmluZChpKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmltcG9ydCBuZ2VvTWFwQmFja2dyb3VuZExheWVyTWdyIGZyb20gJ25nZW8vbWFwL0JhY2tncm91bmRMYXllck1nci5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxudmFyIFJlc3RvcmVyID0gZnVuY3Rpb24gKCkge1xuICBSZXN0b3Jlci4kaW5qZWN0ID0gW1wibmdlb09mZmxpbmVDb25maWd1cmF0aW9uXCIsIFwibmdlb0JhY2tncm91bmRMYXllck1nclwiXTtcblxuICBmdW5jdGlvbiBSZXN0b3JlcihuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24sIG5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3IpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25fID0gbmdlb09mZmxpbmVDb25maWd1cmF0aW9uO1xuICAgIHRoaXMubmdlb0JhY2tncm91bmRMYXllck1ncl8gPSBuZ2VvQmFja2dyb3VuZExheWVyTWdyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlc3RvcmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVzdG9yZSA9IGZ1bmN0aW9uIHJlc3RvcmUobWFwKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25fLmdldEl0ZW0oJ29mZmxpbmVfY29udGVudCcpLnRoZW4oZnVuY3Rpb24gKG9mZmxpbmVDb250ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMuZG9SZXN0b3JlKG1hcCwgb2ZmbGluZUNvbnRlbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5kb1Jlc3RvcmUgPSBmdW5jdGlvbiBkb1Jlc3RvcmUobWFwLCBvZmZsaW5lQ29udGVudCkge1xuICAgIG1hcC5nZXRMYXllckdyb3VwKCkuZ2V0TGF5ZXJzKCkuY2xlYXIoKTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uob2ZmbGluZUNvbnRlbnQubGF5ZXJzKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBvZmZsaW5lTGF5ZXIgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciBsYXllciA9IHRoaXMuY29uZmlndXJhdGlvbl8ucmVjcmVhdGVPZmZsaW5lTGF5ZXIob2ZmbGluZUxheWVyKTtcblxuICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgIG1hcC5hZGRMYXllcihsYXllcik7XG5cbiAgICAgICAgaWYgKG9mZmxpbmVMYXllci5iYWNrZ3JvdW5kTGF5ZXIpIHtcbiAgICAgICAgICB0aGlzLm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JfLnNldChtYXAsIGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZsaW5lQ29udGVudC5leHRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIFJlc3RvcmVyO1xufSgpO1xuXG52YXIgbmFtZSA9ICduZ2VvT2ZmbGluZVJlc3RvcmVyJztcblJlc3RvcmVyLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5hbWUsIFtuZ2VvTWFwQmFja2dyb3VuZExheWVyTWdyLm5hbWVdKS5zZXJ2aWNlKG5hbWUsIFJlc3RvcmVyKTtcbnZhciBleHBvcnRzID0gUmVzdG9yZXI7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImltcG9ydCBPbFRpbGVncmlkVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQuanMnO1xuaW1wb3J0IE9sVGlsZWdyaWRXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMuanMnO1xuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2ouanMnO1xuaW1wb3J0IE9sU291cmNlVGlsZVdNUyBmcm9tICdvbC9zb3VyY2UvVGlsZVdNUy5qcyc7XG5pbXBvcnQgT2xTb3VyY2VXTVRTIGZyb20gJ29sL3NvdXJjZS9XTVRTLmpzJztcbmltcG9ydCBPbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcblxudmFyIFNlckRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VyRGVzKF9yZWYpIHtcbiAgICB2YXIgZ3V0dGVyID0gX3JlZi5ndXR0ZXI7XG4gICAgdGhpcy5ndXR0ZXJfID0gZ3V0dGVyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNlckRlcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUJhc2VPYmplY3RfID0gZnVuY3Rpb24gY3JlYXRlQmFzZU9iamVjdF8ob2xPYmplY3QpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IG9sT2JqZWN0LmdldFByb3BlcnRpZXMoKTtcbiAgICB2YXIgb2JqID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykge1xuICAgICAgdmFyIHZhbHVlID0gcHJvcGVydGllc1trZXldO1xuICAgICAgdmFyIHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcblxuICAgICAgaWYgKHR5cGVPZiA9PT0gJ3N0cmluZycgfHwgdHlwZU9mID09PSAnbnVtYmVyJykge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgX3Byb3RvLnNlcmlhbGl6ZVRpbGVncmlkID0gZnVuY3Rpb24gc2VyaWFsaXplVGlsZWdyaWQodGlsZWdyaWQpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgb2JqWydleHRlbnQnXSA9IHRpbGVncmlkLmdldEV4dGVudCgpO1xuICAgIG9ialsnbWluWm9vbSddID0gdGlsZWdyaWQuZ2V0TWluWm9vbSgpO1xuICAgIG9ialsnb3JpZ2luJ10gPSB0aWxlZ3JpZC5nZXRPcmlnaW4oMCk7XG4gICAgb2JqWydyZXNvbHV0aW9ucyddID0gdGlsZWdyaWQuZ2V0UmVzb2x1dGlvbnMoKTtcbiAgICBvYmpbJ3RpbGVTaXplJ10gPSB0aWxlZ3JpZC5nZXRUaWxlU2l6ZSh0aWxlZ3JpZC5nZXRNaW5ab29tKCkpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICB9O1xuXG4gIF9wcm90by5kZXNlcmlhbGl6ZVRpbGVncmlkID0gZnVuY3Rpb24gZGVzZXJpYWxpemVUaWxlZ3JpZChzZXJpYWxpemF0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIHJldHVybiBuZXcgT2xUaWxlZ3JpZFRpbGVHcmlkKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5zZXJpYWxpemVUaWxlZ3JpZFdNVFMgPSBmdW5jdGlvbiBzZXJpYWxpemVUaWxlZ3JpZFdNVFModGlsZWdyaWQpIHtcbiAgICBpZiAoIXRpbGVncmlkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgcmVzb2x1dGlvbnMgPSB0aWxlZ3JpZC5nZXRSZXNvbHV0aW9ucygpO1xuICAgIG9ialsnZXh0ZW50J10gPSB0aWxlZ3JpZC5nZXRFeHRlbnQoKTtcbiAgICBvYmpbJ21pblpvb20nXSA9IHRpbGVncmlkLmdldE1pblpvb20oKTtcbiAgICBvYmpbJ21hdHJpeElkcyddID0gdGlsZWdyaWQuZ2V0TWF0cml4SWRzKCk7XG4gICAgb2JqWydyZXNvbHV0aW9ucyddID0gcmVzb2x1dGlvbnM7XG4gICAgb2JqWydvcmlnaW5zJ10gPSBbXTtcblxuICAgIGZvciAodmFyIHogPSAwOyB6IDwgcmVzb2x1dGlvbnMubGVuZ3RoOyArK3opIHtcbiAgICAgIG9ialsnb3JpZ2lucyddLnB1c2godGlsZWdyaWQuZ2V0T3JpZ2luKHopKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzZXJpYWxpemVUaWxlZ3JpZFdNVFMgPSBmdW5jdGlvbiBkZXNlcmlhbGl6ZVRpbGVncmlkV01UUyhzZXJpYWxpemF0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIHJldHVybiBuZXcgT2xUaWxlZ3JpZFdNVFMob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnNlcmlhbGl6ZVNvdXJjZVRpbGVXTVMgPSBmdW5jdGlvbiBzZXJpYWxpemVTb3VyY2VUaWxlV01TKHNvdXJjZSkge1xuICAgIHZhciBvYmogPSB0aGlzLmNyZWF0ZUJhc2VPYmplY3RfKHNvdXJjZSk7XG4gICAgb2JqWydwYXJhbXMnXSA9IHNvdXJjZS5nZXRQYXJhbXMoKTtcbiAgICBvYmpbJ3VybHMnXSA9IHNvdXJjZS5nZXRVcmxzKCk7XG4gICAgb2JqWyd0aWxlR3JpZCddID0gdGhpcy5zZXJpYWxpemVUaWxlZ3JpZChzb3VyY2UuZ2V0VGlsZUdyaWQoKSk7XG4gICAgdmFyIHByb2plY3Rpb24gPSBzb3VyY2UuZ2V0UHJvamVjdGlvbigpO1xuXG4gICAgaWYgKHByb2plY3Rpb24pIHtcbiAgICAgIG9ialsncHJvamVjdGlvbiddID0gb2xQcm9qLmdldChzb3VyY2UuZ2V0UHJvamVjdGlvbigpKS5nZXRDb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH07XG5cbiAgX3Byb3RvLmRlc2VyaWFsaXplU291cmNlVGlsZVdNUyA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplU291cmNlVGlsZVdNUyhzZXJpYWxpemF0aW9uLCB0aWxlTG9hZEZ1bmN0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIG9wdGlvbnMudGlsZUxvYWRGdW5jdGlvbiA9IHRpbGVMb2FkRnVuY3Rpb247XG5cbiAgICBpZiAob3B0aW9ucy50aWxlR3JpZCkge1xuICAgICAgb3B0aW9ucy50aWxlR3JpZCA9IHRoaXMuZGVzZXJpYWxpemVUaWxlZ3JpZChvcHRpb25zLnRpbGVHcmlkKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLmd1dHRlciA9IHRoaXMuZ3V0dGVyXztcbiAgICByZXR1cm4gbmV3IE9sU291cmNlVGlsZVdNUyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2VyaWFsaXplU291cmNlV01UUyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVNvdXJjZVdNVFMoc291cmNlKSB7XG4gICAgdmFyIG9iaiA9IHRoaXMuY3JlYXRlQmFzZU9iamVjdF8oc291cmNlKTtcbiAgICBvYmouZGltZW5zaW9ucyA9IHNvdXJjZS5nZXREaW1lbnNpb25zKCk7XG4gICAgb2JqLmZvcm1hdCA9IHNvdXJjZS5nZXRGb3JtYXQoKTtcbiAgICBvYmoudXJscyA9IHNvdXJjZS5nZXRVcmxzKCk7XG4gICAgb2JqLnZlcnNpb24gPSBzb3VyY2UuZ2V0VmVyc2lvbigpO1xuICAgIG9iai5sYXllciA9IHNvdXJjZS5nZXRMYXllcigpO1xuICAgIG9iai5zdHlsZSA9IHNvdXJjZS5nZXRTdHlsZSgpO1xuICAgIG9iai5tYXRyaXhTZXQgPSBzb3VyY2UuZ2V0TWF0cml4U2V0KCk7XG4gICAgdmFyIHRpbGVHcmlkV01UUyA9IHNvdXJjZS5nZXRUaWxlR3JpZCgpO1xuICAgIG9iai50aWxlR3JpZCA9IHRoaXMuc2VyaWFsaXplVGlsZWdyaWRXTVRTKHRpbGVHcmlkV01UUyk7XG4gICAgb2JqLnJlcXVlc3RFbmNvZGluZyA9IHNvdXJjZS5nZXRSZXF1ZXN0RW5jb2RpbmcoKTtcbiAgICB2YXIgcHJvamVjdGlvbiA9IHNvdXJjZS5nZXRQcm9qZWN0aW9uKCk7XG5cbiAgICBpZiAocHJvamVjdGlvbikge1xuICAgICAgb2JqLnByb2plY3Rpb24gPSBvbFByb2ouZ2V0KHNvdXJjZS5nZXRQcm9qZWN0aW9uKCkpLmdldENvZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzZXJpYWxpemVTb3VyY2VXTVRTID0gZnVuY3Rpb24gZGVzZXJpYWxpemVTb3VyY2VXTVRTKHNlcmlhbGl6YXRpb24sIHRpbGVMb2FkRnVuY3Rpb24pIHtcbiAgICB2YXIgb3B0aW9ucyA9IEpTT04ucGFyc2Uoc2VyaWFsaXphdGlvbik7XG4gICAgb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uID0gdGlsZUxvYWRGdW5jdGlvbjtcblxuICAgIGlmIChvcHRpb25zLnRpbGVHcmlkKSB7XG4gICAgICBvcHRpb25zLnRpbGVHcmlkID0gdGhpcy5kZXNlcmlhbGl6ZVRpbGVncmlkV01UUyhvcHRpb25zLnRpbGVHcmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE9sU291cmNlV01UUyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8ubWFrZUluZmluaXR5U2VyaWFsaXphYmxlXyA9IGZ1bmN0aW9uIG1ha2VJbmZpbml0eVNlcmlhbGl6YWJsZV8obnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA9PT0gSW5maW5pdHkpIHtcbiAgICAgIHJldHVybiAxMDAwO1xuICAgIH1cblxuICAgIHJldHVybiBudW1iZXI7XG4gIH07XG5cbiAgX3Byb3RvLnNlcmlhbGl6ZVRpbGVMYXllciA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVRpbGVMYXllcihsYXllciwgc291cmNlKSB7XG4gICAgdmFyIG9iaiA9IHRoaXMuY3JlYXRlQmFzZU9iamVjdF8obGF5ZXIpO1xuICAgIG9iai5vcGFjaXR5ID0gbGF5ZXIuZ2V0T3BhY2l0eSgpO1xuICAgIG9iai52aXNpYmxlID0gbGF5ZXIuZ2V0VmlzaWJsZSgpO1xuICAgIG9iai5taW5SZXNvbHV0aW9uID0gbGF5ZXIuZ2V0TWluUmVzb2x1dGlvbigpO1xuICAgIG9iai5tYXhSZXNvbHV0aW9uID0gdGhpcy5tYWtlSW5maW5pdHlTZXJpYWxpemFibGVfKGxheWVyLmdldE1heFJlc29sdXRpb24oKSk7XG4gICAgb2JqLnpJbmRleCA9IGxheWVyLmdldFpJbmRleCgpO1xuICAgIHNvdXJjZSA9IHNvdXJjZSB8fCBsYXllci5nZXRTb3VyY2UoKTtcblxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBPbFNvdXJjZVRpbGVXTVMpIHtcbiAgICAgIG9iai5zb3VyY2UgPSB0aGlzLnNlcmlhbGl6ZVNvdXJjZVRpbGVXTVMoc291cmNlKTtcbiAgICAgIG9iai5zb3VyY2VUeXBlID0gJ3RpbGVXTVMnO1xuICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgT2xTb3VyY2VXTVRTKSB7XG4gICAgICBvYmouc291cmNlID0gdGhpcy5zZXJpYWxpemVTb3VyY2VXTVRTKHNvdXJjZSk7XG4gICAgICBvYmouc291cmNlVHlwZSA9ICdXTVRTJztcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzZXJpYWxpemVUaWxlTGF5ZXIgPSBmdW5jdGlvbiBkZXNlcmlhbGl6ZVRpbGVMYXllcihzZXJpYWxpemF0aW9uLCB0aWxlTG9hZEZ1bmN0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIHZhciBzb3VyY2VUeXBlID0gb3B0aW9uc1snc291cmNlVHlwZSddO1xuXG4gICAgaWYgKHNvdXJjZVR5cGUgPT09ICd0aWxlV01TJykge1xuICAgICAgb3B0aW9ucy5zb3VyY2UgPSB0aGlzLmRlc2VyaWFsaXplU291cmNlVGlsZVdNUyhvcHRpb25zLnNvdXJjZSwgdGlsZUxvYWRGdW5jdGlvbik7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VUeXBlID09PSAnV01UUycpIHtcbiAgICAgIG9wdGlvbnMuc291cmNlID0gdGhpcy5kZXNlcmlhbGl6ZVNvdXJjZVdNVFMob3B0aW9ucy5zb3VyY2UsIHRpbGVMb2FkRnVuY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgT2xMYXllclRpbGUob3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIFNlckRlcztcbn0oKTtcblxudmFyIGV4cG9ydHMgPSBTZXJEZXM7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG52YXIgU2VydmljZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIFNlcnZpY2VNYW5hZ2VyLiRpbmplY3QgPSBbXCIkaW5qZWN0b3JcIl07XG5cbiAgZnVuY3Rpb24gU2VydmljZU1hbmFnZXIoJGluamVjdG9yKSB7XG4gICAgdGhpcy4kaW5qZWN0b3JfID0gJGluamVjdG9yO1xuICAgIHRoaXMuc2F2ZVNlcnZpY2VfID0gbnVsbDtcbiAgICB0aGlzLnJlc3RvcmVTZXJ2aWNlXyA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VydmljZU1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRPZmZsaW5lU2VydmljZV8gPSBmdW5jdGlvbiBnZXRPZmZsaW5lU2VydmljZV8oc2VydmljZUxpa2UsIG1ldGhvZCkge1xuICAgIGlmICh0eXBlb2Ygc2VydmljZUxpa2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXRoaXMuJGluamVjdG9yXy5oYXMoc2VydmljZUxpa2UpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgb2ZmbGluZSBcIiArIG1ldGhvZCArIFwiIHNlcnZpY2UgY291bGQgbm90IGJlIGZvdW5kXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXJ2aWNlID0gdGhpcy4kaW5qZWN0b3JfLmdldChzZXJ2aWNlTGlrZSk7XG5cbiAgICAgIGlmICghc2VydmljZVttZXRob2RdKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgb2ZmbGluZSBzZXJ2aWNlIFwiICsgc2VydmljZUxpa2UgKyBcIiBkb2VzIG5vdCBoYXZlIGEgXCIgKyBtZXRob2QgKyBcIiBtZXRob2RcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgfVxuXG4gICAgaWYgKCFzZXJ2aWNlTGlrZVttZXRob2RdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHByb3ZpZGVkIG9mZmxpbmUgc2VydmljZSBkb2VzIG5vdCBoYXZlIGEgXCIgKyBtZXRob2QgKyBcIiBtZXRob2RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlcnZpY2VMaWtlO1xuICB9O1xuXG4gIF9wcm90by5zZXRTYXZlU2VydmljZSA9IGZ1bmN0aW9uIHNldFNhdmVTZXJ2aWNlKHNhdmVMaWtlU2VydmljZSkge1xuICAgIHRoaXMuc2F2ZVNlcnZpY2VfID0gdGhpcy5nZXRPZmZsaW5lU2VydmljZV8oc2F2ZUxpa2VTZXJ2aWNlLCAnc2F2ZScpO1xuICB9O1xuXG4gIF9wcm90by5zZXRSZXN0b3JlU2VydmljZSA9IGZ1bmN0aW9uIHNldFJlc3RvcmVTZXJ2aWNlKHJlc3RvcmVMaWtlU2VydmljZSkge1xuICAgIHRoaXMucmVzdG9yZVNlcnZpY2VfID0gdGhpcy5nZXRPZmZsaW5lU2VydmljZV8ocmVzdG9yZUxpa2VTZXJ2aWNlLCAncmVzdG9yZScpO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKCF0aGlzLnNhdmVTZXJ2aWNlXykge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCByZWdpc3RlciBhIHNhdmVTZXJ2aWNlIGZpcnN0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlU2VydmljZV8uY2FuY2VsKCk7XG4gIH07XG5cbiAgX3Byb3RvLnNhdmUgPSBmdW5jdGlvbiBzYXZlKGV4dGVudCwgbWFwKSB7XG4gICAgaWYgKCF0aGlzLnNhdmVTZXJ2aWNlXykge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCByZWdpc3RlciBhIHNhdmVTZXJ2aWNlIGZpcnN0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlU2VydmljZV8uc2F2ZShleHRlbnQsIG1hcCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3RvcmUgPSBmdW5jdGlvbiByZXN0b3JlKG1hcCkge1xuICAgIGlmICghdGhpcy5yZXN0b3JlU2VydmljZV8pIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IG11c3QgcmVnaXN0ZXIgYSByZXN0b3JlU2VydmljZSBmaXJzdCcpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzdG9yZVNlcnZpY2VfLnJlc3RvcmUobWFwKTtcbiAgfTtcblxuICByZXR1cm4gU2VydmljZU1hbmFnZXI7XG59KCk7XG5cblNlcnZpY2VNYW5hZ2VyLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyJywgW10pO1xuU2VydmljZU1hbmFnZXIubW9kdWxlLnNlcnZpY2UoJ25nZW9PZmZsaW5lU2VydmljZU1hbmFnZXInLCBTZXJ2aWNlTWFuYWdlcik7XG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTWFuYWdlcjsiLCJmdW5jdGlvbiBibG9iVG9EYXRhVXJsKGJsb2IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgIH07XG5cbiAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgfSk7XG59XG5cbnZhciBleHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBleHBvcnRzKHRpbGVzLCBjYWxsYmFja3MsIHdvcmtlcnMpIHtcbiAgICB0aGlzLm1heE51bWJlck9mV29ya2Vyc18gPSB3b3JrZXJzO1xuICAgIHRoaXMud2FzU3RhcnRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLnRpbGVzXyA9IHRpbGVzO1xuICAgIHRoaXMuY2FsbGJhY2tzXyA9IGNhbGxiYWNrcztcbiAgICB0aGlzLmFsbENvdW50XyA9IDA7XG4gICAgdGhpcy5va0NvdW50XyA9IDA7XG4gICAgdGhpcy5rb0NvdW50XyA9IDA7XG4gICAgdGhpcy5yZXF1ZXN0ZWRDb3VudF8gPSAwO1xuICAgIHRoaXMucmVzb2x2ZVByb21pc2VfO1xuICAgIHRoaXMucHJvbWlzZV8gPSBudWxsO1xuICAgIHRoaXMudGlsZUluZGV4XyA9IDA7XG4gICAgdGhpcy5jYW5jZWxfID0gZmFsc2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gZXhwb3J0cy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICB0aGlzLmNhbmNlbF8gPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5kb3dubG9hZFRpbGVfID0gZnVuY3Rpb24gZG93bmxvYWRUaWxlXygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuY2FuY2VsXyB8fCB0aGlzLnRpbGVJbmRleF8gPj0gdGhpcy50aWxlc18ubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRpbGUgPSB0aGlzLnRpbGVzX1t0aGlzLnRpbGVJbmRleF8rK107XG4gICAgdmFyIHRpbGVVcmwgPSB0aWxlLnVybDtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyWyd0aWxlVXJsJ10gPSB0aWxlLnVybDtcbiAgICB4aHIub3BlbignR0VUJywgdGlsZVVybCwgdHJ1ZSk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcblxuICAgIHZhciBvblRpbGVEb3dubG9hZGVkID0gZnVuY3Rpb24gb25UaWxlRG93bmxvYWRlZCgpIHtcbiAgICAgIGlmIChfdGhpcy5hbGxDb3VudF8gPT09IF90aGlzLnRpbGVzXy5sZW5ndGgpIHtcbiAgICAgICAgX3RoaXMucmVzb2x2ZVByb21pc2VfKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmRvd25sb2FkVGlsZV8oKTtcbiAgICB9O1xuXG4gICAgdmFyIGVycm9yQ2FsbGJhY2sgPSBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKGUpIHtcbiAgICAgIGlmIChfdGhpcy5jYW5jZWxfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgKytfdGhpcy5hbGxDb3VudF87XG4gICAgICArK190aGlzLmtvQ291bnRfO1xuICAgICAgdmFyIHByb2dyZXNzID0gX3RoaXMuYWxsQ291bnRfIC8gX3RoaXMudGlsZXNfLmxlbmd0aDtcblxuICAgICAgX3RoaXMuY2FsbGJhY2tzXy5vblRpbGVEb3dubG9hZEVycm9yKHByb2dyZXNzKS50aGVuKG9uVGlsZURvd25sb2FkZWQsIG9uVGlsZURvd25sb2FkZWQpO1xuICAgIH07XG5cbiAgICB2YXIgb25sb2FkQ2FsbGJhY2sgPSBmdW5jdGlvbiBvbmxvYWRDYWxsYmFjayhlKSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSBlLnRhcmdldC5yZXNwb25zZTtcblxuICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnNpemUgIT09IDApIHtcbiAgICAgICAgYmxvYlRvRGF0YVVybChyZXNwb25zZSkudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xuICAgICAgICAgIGlmIChfdGhpcy5jYW5jZWxfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKytfdGhpcy5hbGxDb3VudF87XG4gICAgICAgICAgKytfdGhpcy5va0NvdW50XztcbiAgICAgICAgICB0aWxlLnJlc3BvbnNlID0gZGF0YVVybDtcbiAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBfdGhpcy5hbGxDb3VudF8gLyBfdGhpcy50aWxlc18ubGVuZ3RoO1xuXG4gICAgICAgICAgX3RoaXMuY2FsbGJhY2tzXy5vblRpbGVEb3dubG9hZFN1Y2Nlc3MocHJvZ3Jlc3MsIHRpbGUpLnRoZW4ob25UaWxlRG93bmxvYWRlZCwgb25UaWxlRG93bmxvYWRlZCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuY2FuY2VsXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yQ2FsbGJhY2soZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF90aGlzLmNhbmNlbF8pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICArK190aGlzLmFsbENvdW50XztcbiAgICAgICAgKytfdGhpcy5va0NvdW50XztcblxuICAgICAgICBfdGhpcy5jYWxsYmFja3NfLm9uVGlsZURvd25sb2FkU3VjY2VzcyhfdGhpcy5hbGxDb3VudF8gLyBfdGhpcy50aWxlc18ubGVuZ3RoLCB0aWxlKS50aGVuKG9uVGlsZURvd25sb2FkZWQsIG9uVGlsZURvd25sb2FkZWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIub25sb2FkID0gb25sb2FkQ2FsbGJhY2s7XG4gICAgeGhyLm9uZXJyb3IgPSBlcnJvckNhbGxiYWNrO1xuICAgIHhoci5vbmFib3J0ID0gZXJyb3JDYWxsYmFjaztcbiAgICB4aHIub250aW1lb3V0ID0gZXJyb3JDYWxsYmFjaztcbiAgICB4aHIuc2VuZCgpO1xuICAgICsrdGhpcy5yZXF1ZXN0ZWRDb3VudF87XG4gIH07XG5cbiAgX3Byb3RvLmRvd25sb2FkID0gZnVuY3Rpb24gZG93bmxvYWQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9taXNlXykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XG4gICAgfVxuXG4gICAgdGhpcy5wcm9taXNlXyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIF90aGlzMi5yZXNvbHZlUHJvbWlzZV8gPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMudGlsZXNfKTtcblxuICAgIGlmICh0aGlzLnRpbGVzXy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzXy5vblRpbGVEb3dubG9hZEVycm9yKDEpO1xuICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heE51bWJlck9mV29ya2Vyc187ICsraSkge1xuICAgICAgICB0aGlzLmRvd25sb2FkVGlsZV8oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcbiAgfTtcblxuICByZXR1cm4gZXhwb3J0cztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibWFpbi1idXR0b25cIj5cXG4gIDxzcGFuIG5nLWlmPVwiISRjdHJsLmhhc0RhdGEoKVwiPlxcbiAgICA8ZGl2IGNsYXNzPVwibm8tZGF0YVwiIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlVmlld0V4dGVudFNlbGVjdGlvbigpXCI+PC9kaXY+XFxuICA8L3NwYW4+XFxuICA8c3BhbiBuZy1pZj1cIiRjdHJsLmhhc0RhdGEoKVwiPlxcbiAgICA8ZGl2IGNsYXNzPVwid2l0aC1kYXRhXCIgbmctY2xpY2s9XCIkY3RybC5zaG93TWVudSgpXCI+PC9kaXY+XFxuICA8L3NwYW4+XFxuPC9kaXY+XFxuXFxuPGRpdiBuZy1pZj1cIiRjdHJsLnNlbGVjdGluZ0V4dGVudCAmJiAhJGN0cmwubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpXCIgY2xhc3M9XCJ2YWxpZGF0ZS1leHRlbnQgYnRuIGJ0bi1wcmltYXJ5XCI+XFxuICA8ZGl2IG5nLWlmPVwiISRjdHJsLmRvd25sb2FkaW5nXCIgbmctY2xpY2s9XCIkY3RybC5jb21wdXRlU2l6ZUFuZERpc3BsYXlBbGVydExvYWREYXRhKClcIiB0cmFuc2xhdGU+U2F2ZSBtYXA8L2Rpdj5cXG4gIDxkaXYgbmctaWY9XCIkY3RybC5kb3dubG9hZGluZ1wiIG5nLWNsaWNrPVwiJGN0cmwuYXNrQWJvcnREb3dubG9hZCgpXCIgdHJhbnNsYXRlPkFib3J0PC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuPGRpdiBuZy1pZj1cIiRjdHJsLmRvd25sb2FkaW5nXCIgY2xhc3M9XCJpbi1wcm9ncmVzc1wiPlxcbiAgPGRpdj57eyRjdHJsLnByb2dyZXNzUGVyY2VudHN9fSU8L2Rpdj5cXG48L2Rpdj5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLm1lbnVEaXNwbGF5ZWRcIj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwie3tcXCdDbG9zZVxcJyB8IHRyYW5zbGF0ZX19XCI+XFxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPk9mZmxpbmUgbWFwPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgPGRpdiBuZy1pZj1cIiRjdHJsLmhhc0RhdGEoKVwiPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZXh0ZW50LXpvb20gYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIG5nLWlmPVwiISRjdHJsLm9mZmxpbmVNb2RlLmlzRW5hYmxlZCgpXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwuYWN0aXZhdGVPZmZsaW5lTW9kZSgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5BY3RpdmF0ZSBvZmZsaW5lIG1vZGVcXG4gICAgICA8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImV4dGVudC16b29tIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBuZy1pZj1cIiRjdHJsLm9mZmxpbmVNb2RlLmlzRW5hYmxlZCgpICYmICEkY3RybC5uZXR3b3JrU3RhdHVzLmlzRGlzY29ubmVjdGVkKClcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC5kZWFjdGl2YXRlT2ZmbGluZU1vZGUoKVwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+RGVhY3RpdmF0ZSBvZmZsaW5lIG1vZGVcXG4gICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImV4dGVudC1zaG93IGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBuZy1pZj1cIiRjdHJsLm9mZmxpbmVNb2RlLmlzRW5hYmxlZCgpXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlRXh0ZW50VmlzaWJpbGl0eSgpXCI+XFxuICAgICAgICA8c3BhbiBuZy1pZj1cIiRjdHJsLmlzRXh0ZW50VmlzaWJsZSgpXCIgdHJhbnNsYXRlPkhpZGUgZXh0ZW50PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gbmctaWY9XCIhJGN0cmwuaXNFeHRlbnRWaXNpYmxlKClcIiB0cmFuc2xhdGUgPlNob3cgZXh0ZW50PC9zcGFuPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBuZy1pZj1cIiEkY3RybC5uZXR3b3JrU3RhdHVzLmlzRGlzY29ubmVjdGVkKClcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC5kaXNwbGF5QWxlcnREZXN0cm95RGF0YSA9IHRydWVcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPkRlbGV0ZSBkYXRhXFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IG5nLWlmPVwiISRjdHJsLmhhc0RhdGEoKSAmJiAhJGN0cmwubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpXCI+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXctZGF0YSBidG4gYnRuLWRlZmF1bHRcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC50b2dnbGVWaWV3RXh0ZW50U2VsZWN0aW9uKClcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPlNhdmUgbmV3IG1hcFxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvbmdlby1tb2RhbD5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLmRpc3BsYXlBbGVydExvYWREYXRhXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPldhcm5pbmc8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgIDxwIHRyYW5zbGF0ZT5+e3skY3RybC5lc3RpbWF0ZWRMb2FkRGF0YVNpemV9fU1CIG9mIG1hcHMgd2lsbCBiZSBkb3dubG9hZGVkICh1bnRpbCBzY2FsZSAxOjI1XFwnMDAwKSAtIERvblxcJ3QgbG9jayB5b3VyIGRldmljZSBvciBuYXZpZ2F0ZSBhd2F5IGZyb20gdGhpcyBzaXRlIGR1cmluZyB0aGUgZG93bmxvYWQgcHJvY2Vzcy4gRGVhY3RpdmF0ZSBcInByaXZhdGVcIiBtb2RlIG9mIHlvdXIgYnJvd3Nlci48L3A+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ2YWxpZGF0ZSBidG4gYnRuLXByaW1hcnlcIlxcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC52YWxpZGF0ZUV4dGVudCgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5Pa1xcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+Q2FuY2VsXFxuICAgICAgPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L25nZW8tbW9kYWw+XFxuXFxuPG5nZW8tbW9kYWwgbmctbW9kZWw9XCIkY3RybC5kaXNwbGF5QWxlcnROb0xheWVyXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPldhcm5pbmc8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgIDxwIHRyYW5zbGF0ZT5ObyBtYXBzIHNlbGVjdGVkIGZvciBzYXZpbmcuPC9wPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+T2tcXG4gICAgICA8L2J1dHRvbj5cXG4gIDwvZGl2Plxcbjwvbmdlby1tb2RhbD5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLmRpc3BsYXlBbGVydERlc3Ryb3lEYXRhXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPldhcm5pbmc8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgIDxwIHRyYW5zbGF0ZT5EbyB5b3UgcmVhbGx5IHdhbnQgdG8gcmVtb3ZlIHlvdXIgZGF0YSA/PC9wPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidmFsaWRhdGUgYnRuIGJ0bi1wcmltYXJ5XCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwuZGVsZXRlRGF0YSgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5Pa1xcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+Q2FuY2VsXFxuICAgICAgPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L25nZW8tbW9kYWw+XFxuXFxuPG5nZW8tbW9kYWwgbmctbW9kZWw9XCIkY3RybC5kaXNwbGF5QWxlcnRBYm9ydERvd25sb2FkXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPldhcm5pbmc8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgIDxwIHRyYW5zbGF0ZT5EbyB5b3UgcmVhbGx5IHdhbnQgdG8gcmVtb3ZlIHlvdXIgZGF0YSA/PC9wPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidmFsaWRhdGUgYnRuIGJ0bi1wcmltYXJ5XCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwuYWJvcnREb3dubG9hZCgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5Pa1xcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLmZvbGxvd0Rvd25sb2FkUHJvZ3Jlc3Npb25fKClcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPkNhbmNlbFxcbiAgICAgIDwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuPC9uZ2VvLW1vZGFsPlxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iLCJpbXBvcnQgbmdlb01hcEZlYXR1cmVPdmVybGF5TWdyIGZyb20gJ25nZW8vbWFwL0ZlYXR1cmVPdmVybGF5TWdyLmpzJztcbmltcG9ydCBuZ2VvTWVzc2FnZU1vZGFsQ29tcG9uZW50IGZyb20gJ25nZW8vbWVzc2FnZS9tb2RhbENvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBleHRlbnRUb1JlY3RhbmdsZSB9IGZyb20gJ25nZW8vdXRpbHMuanMnO1xuaW1wb3J0IE9sQ29sbGVjdGlvbiBmcm9tICdvbC9Db2xsZWN0aW9uLmpzJztcbmltcG9ydCB7IHVuQnlLZXkgfSBmcm9tICdvbC9PYnNlcnZhYmxlLmpzJztcbmltcG9ydCBPbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZS5qcyc7XG5pbXBvcnQgT2xHZW9tUG9seWdvbiBmcm9tICdvbC9nZW9tL1BvbHlnb24uanMnO1xuaW1wb3J0IG9sR2VvbUdlb21ldHJ5TGF5b3V0IGZyb20gJ29sL2dlb20vR2VvbWV0cnlMYXlvdXQuanMnO1xuaW1wb3J0IHsgREVWSUNFX1BJWEVMX1JBVElPIH0gZnJvbSAnb2wvaGFzLmpzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvT2ZmbGluZScsIFtuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IubmFtZSwgbmdlb01lc3NhZ2VNb2RhbENvbXBvbmVudC5uYW1lXSk7XG5tb2R1bGUudmFsdWUoJ25nZW9PZmZsaW5lVGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gYXR0cnNbJ25nZW9PZmZsaW5lVGVtcGxhdGV1cmwnXTtcbiAgcmV0dXJuIHRlbXBsYXRlVXJsICE9PSB1bmRlZmluZWQgPyB0ZW1wbGF0ZVVybCA6ICduZ2VvL29mZmxpbmUvY29tcG9uZW50Lmh0bWwnO1xufSk7XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ25nZW8vb2ZmbGluZS9jb21wb25lbnQuaHRtbCcsIHJlcXVpcmUoJy4vY29tcG9uZW50Lmh0bWwnKSk7XG59XSk7XG5uZ2VvT2ZmbGluZVRlbXBsYXRlVXJsLiRpbmplY3QgPSBbXCIkZWxlbWVudFwiLCBcIiRhdHRyc1wiLCBcIm5nZW9PZmZsaW5lVGVtcGxhdGVVcmxcIl07XG5cbmZ1bmN0aW9uIG5nZW9PZmZsaW5lVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycywgbmdlb09mZmxpbmVUZW1wbGF0ZVVybCkge1xuICByZXR1cm4gbmdlb09mZmxpbmVUZW1wbGF0ZVVybCgkZWxlbWVudCwgJGF0dHJzKTtcbn1cblxudmFyIGNvbXBvbmVudCA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICAnbWFwJzogJzxuZ2VvT2ZmbGluZU1hcCcsXG4gICAgJ2V4dGVudFNpemUnOiAnPD9uZ2VvT2ZmbGluZUV4dGVudHNpemUnLFxuICAgICdtYXNrTWFyZ2luJzogJzw/bmdlb09mZmxpbmVNYXNrTWFyZ2luJyxcbiAgICAnbWluWm9vbSc6ICc8P25nZW9PZmZsaW5lTWluWm9vbScsXG4gICAgJ21heFpvb20nOiAnPD9uZ2VvT2ZmbGluZU1heFpvb20nXG4gIH0sXG4gIGNvbnRyb2xsZXI6ICduZ2VvT2ZmbGluZUNvbnRyb2xsZXInLFxuICB0ZW1wbGF0ZVVybDogbmdlb09mZmxpbmVUZW1wbGF0ZVVybFxufTtcbm1vZHVsZS5jb21wb25lbnQoJ25nZW9PZmZsaW5lJywgY29tcG9uZW50KTtcbmV4cG9ydCB2YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIiwgXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIiwgXCJuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXCIsIFwibmdlb09mZmxpbmVDb25maWd1cmF0aW9uXCIsIFwibmdlb09mZmxpbmVNb2RlXCIsIFwibmdlb05ldHdvcmtTdGF0dXNcIl07XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigkdGltZW91dCwgbmdlb0ZlYXR1cmVPdmVybGF5TWdyLCBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyLCBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24sIG5nZW9PZmZsaW5lTW9kZSwgbmdlb05ldHdvcmtTdGF0dXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgICB0aGlzLm5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJfID0gbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcjtcbiAgICB0aGlzLm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbl8gPSBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5vZmZsaW5lTW9kZSA9IG5nZW9PZmZsaW5lTW9kZTtcbiAgICB0aGlzLm5ldHdvcmtTdGF0dXMgPSBuZ2VvTmV0d29ya1N0YXR1cztcbiAgICB0aGlzLm1hcDtcbiAgICB0aGlzLmV4dGVudFNpemU7XG4gICAgdGhpcy5mZWF0dXJlc092ZXJsYXlfID0gbmdlb0ZlYXR1cmVPdmVybGF5TWdyLmdldEZlYXR1cmVPdmVybGF5KCk7XG4gICAgdGhpcy5vdmVybGF5Q29sbGVjdGlvbl8gPSBuZXcgT2xDb2xsZWN0aW9uKCk7XG4gICAgdGhpcy5mZWF0dXJlc092ZXJsYXlfLnNldEZlYXR1cmVzKHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fKTtcbiAgICB0aGlzLnBvc3Rjb21wb3NlTGlzdGVuZXJfO1xuICAgIHRoaXMucG9zdENvbXBvc2VMaXN0ZW5lcktleV8gPSBudWxsO1xuICAgIHRoaXMuZGF0YVBvbHlnb25fID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGluZ0V4dGVudCA9IGZhbHNlO1xuICAgIHRoaXMuZG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzUGVyY2VudHMgPSAwO1xuICAgIHRoaXMubWVudURpc3BsYXllZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUFsZXJ0QWJvcnREb3dubG9hZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUFsZXJ0TG9hZERhdGEgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlBbGVydE5vTGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLm1hc2tNYXJnaW47XG4gICAgdGhpcy5taW5ab29tO1xuICAgIHRoaXMubWF4Wm9vbTtcbiAgICB0aGlzLm9yaWdpbmFsTWluWm9vbTtcbiAgICB0aGlzLm9yaWdpbmFsTWF4Wm9vbTtcbiAgICB0aGlzLmVzdGltYXRlZExvYWREYXRhU2l6ZTtcblxuICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFja18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBwcm9ncmVzcyA9IGV2ZW50LmRldGFpbFsncHJvZ3Jlc3MnXTtcbiAgICAgIF90aGlzLnByb2dyZXNzUGVyY2VudHMgPSBNYXRoLmZsb29yKHByb2dyZXNzICogMTAwKTtcblxuICAgICAgaWYgKHByb2dyZXNzID09PSAxKSB7XG4gICAgICAgIF90aGlzLmZpbmlzaERvd25sb2FkXygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy4kdGltZW91dF8oZnVuY3Rpb24gKCkge30sIDApO1xuICAgIH07XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29udHJvbGxlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLiRvbkluaXQgPSBmdW5jdGlvbiAkb25Jbml0KCkge1xuICAgIHRoaXMub2ZmbGluZU1vZGUucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5wb3N0Y29tcG9zZUxpc3RlbmVyXyA9IHRoaXMuY3JlYXRlTWFza1Bvc3Rjb21wb3NlXygpO1xuICAgIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5vbigncHJvZ3Jlc3MnLCB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfKTtcbiAgICB0aGlzLm1hc2tNYXJnaW4gPSB0aGlzLm1hc2tNYXJnaW4gfHwgMTAwO1xuICAgIHRoaXMubWluWm9vbSA9IHRoaXMubWluWm9vbSB8fCAxMDtcbiAgICB0aGlzLm1heFpvb20gPSB0aGlzLm1heFpvb20gfHwgMTU7XG4gIH07XG5cbiAgX3Byb3RvLiRvbkRlc3Ryb3kgPSBmdW5jdGlvbiAkb25EZXN0cm95KCkge1xuICAgIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy51bigncHJvZ3Jlc3MnLCB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfKTtcbiAgfTtcblxuICBfcHJvdG8uaGFzRGF0YSA9IGZ1bmN0aW9uIGhhc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5oYXNPZmZsaW5lRGF0YSgpO1xuICB9O1xuXG4gIF9wcm90by5jb21wdXRlU2l6ZUFuZERpc3BsYXlBbGVydExvYWREYXRhID0gZnVuY3Rpb24gY29tcHV0ZVNpemVBbmREaXNwbGF5QWxlcnRMb2FkRGF0YSgpIHtcbiAgICB0aGlzLmVzdGltYXRlZExvYWREYXRhU2l6ZSA9IHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5lc3RpbWF0ZUxvYWREYXRhU2l6ZSh0aGlzLm1hcCk7XG5cbiAgICBpZiAodGhpcy5lc3RpbWF0ZWRMb2FkRGF0YVNpemUgPiAwKSB7XG4gICAgICB0aGlzLmRpc3BsYXlBbGVydExvYWREYXRhID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5QWxlcnROb0xheWVyID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZVZpZXdFeHRlbnRTZWxlY3Rpb24gPSBmdW5jdGlvbiB0b2dnbGVWaWV3RXh0ZW50U2VsZWN0aW9uKGZpbmlzaGVkKSB7XG4gICAgdGhpcy5tZW51RGlzcGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RpbmdFeHRlbnQgPSAhdGhpcy5zZWxlY3RpbmdFeHRlbnQ7XG5cbiAgICBpZiAodGhpcy5wb3N0Q29tcG9zZUxpc3RlbmVyS2V5Xykge1xuICAgICAgdW5CeUtleSh0aGlzLnBvc3RDb21wb3NlTGlzdGVuZXJLZXlfKTtcbiAgICAgIHRoaXMucG9zdENvbXBvc2VMaXN0ZW5lcktleV8gPSBudWxsO1xuICAgICAgdGhpcy5yZW1vdmVab29tQ29uc3RyYWludHNfKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0aW5nRXh0ZW50ICYmICF0aGlzLnBvc3RDb21wb3NlTGlzdGVuZXJLZXlfKSB7XG4gICAgICB0aGlzLmFkZFpvb21Db25zdHJhaW50c18oKTtcbiAgICAgIHRoaXMucG9zdENvbXBvc2VMaXN0ZW5lcktleV8gPSB0aGlzLm1hcC5vbigncG9zdGNvbXBvc2UnLCB0aGlzLnBvc3Rjb21wb3NlTGlzdGVuZXJfKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5yZW5kZXIoKTtcbiAgfTtcblxuICBfcHJvdG8udmFsaWRhdGVFeHRlbnQgPSBmdW5jdGlvbiB2YWxpZGF0ZUV4dGVudCgpIHtcbiAgICB0aGlzLnByb2dyZXNzUGVyY2VudHMgPSAwO1xuICAgIHZhciBleHRlbnQgPSB0aGlzLmdldERvd2xvYWRFeHRlbnRfKCk7XG4gICAgdGhpcy5kb3dubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXy5zYXZlKGV4dGVudCwgdGhpcy5tYXApO1xuICB9O1xuXG4gIF9wcm90by5maW5pc2hEb3dubG9hZF8gPSBmdW5jdGlvbiBmaW5pc2hEb3dubG9hZF8oKSB7XG4gICAgdGhpcy5kb3dubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMudG9nZ2xlVmlld0V4dGVudFNlbGVjdGlvbih0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8uYXNrQWJvcnREb3dubG9hZCA9IGZ1bmN0aW9uIGFza0Fib3J0RG93bmxvYWQoKSB7XG4gICAgdGhpcy5kaXNwbGF5QWxlcnRBYm9ydERvd25sb2FkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uYWJvcnREb3dubG9hZCA9IGZ1bmN0aW9uIGFib3J0RG93bmxvYWQoKSB7XG4gICAgdGhpcy5kb3dubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcl8uY2FuY2VsKCk7XG4gICAgdGhpcy5kZWxldGVEYXRhKCk7XG4gIH07XG5cbiAgX3Byb3RvLnNob3dNZW51ID0gZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgdGhpcy5tZW51RGlzcGxheWVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uYWN0aXZhdGVPZmZsaW5lTW9kZSA9IGZ1bmN0aW9uIGFjdGl2YXRlT2ZmbGluZU1vZGUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLm5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJfLnJlc3RvcmUodGhpcy5tYXApLnRoZW4oZnVuY3Rpb24gKGV4dGVudCkge1xuICAgICAgX3RoaXMyLmRhdGFQb2x5Z29uXyA9IF90aGlzMi5jcmVhdGVQb2x5Z29uRnJvbUV4dGVudF8oZXh0ZW50KTtcblxuICAgICAgdmFyIHNpemUgPSBfdGhpczIubWFwLmdldFNpemUoKTtcblxuICAgICAgX3RoaXMyLm1hcC5nZXRWaWV3KCkuZml0KGV4dGVudCwge1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMyLm1lbnVEaXNwbGF5ZWQgPSBmYWxzZTtcblxuICAgICAgX3RoaXMyLmRpc3BsYXlFeHRlbnRfKCk7XG5cbiAgICAgIF90aGlzMi5vZmZsaW5lTW9kZS5lbmFibGUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZGVhY3RpdmF0ZU9mZmxpbmVNb2RlID0gZnVuY3Rpb24gZGVhY3RpdmF0ZU9mZmxpbmVNb2RlKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlRXh0ZW50VmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHRvZ2dsZUV4dGVudFZpc2liaWxpdHkoKSB7XG4gICAgaWYgKHRoaXMuaXNFeHRlbnRWaXNpYmxlKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheUV4dGVudF8oKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmlzRXh0ZW50VmlzaWJsZSA9IGZ1bmN0aW9uIGlzRXh0ZW50VmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5Q29sbGVjdGlvbl8uZ2V0TGVuZ3RoKCkgPiAwO1xuICB9O1xuXG4gIF9wcm90by5kZWxldGVEYXRhID0gZnVuY3Rpb24gZGVsZXRlRGF0YSgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fLmNsZWFyKCk7XG4gICAgdGhpcy5kYXRhUG9seWdvbl8gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpKSB7XG4gICAgICB0aGlzLm1lbnVEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcmVsb2FkSWZJbk9mZmxpbmVNb2RlID0gZnVuY3Rpb24gcmVsb2FkSWZJbk9mZmxpbmVNb2RlKCkge1xuICAgICAgaWYgKF90aGlzMy5vZmZsaW5lTW9kZS5pc0VuYWJsZWQoKSkge1xuICAgICAgICBfdGhpczMuZGVhY3RpdmF0ZU9mZmxpbmVNb2RlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5jbGVhcigpLnRoZW4ocmVsb2FkSWZJbk9mZmxpbmVNb2RlKTtcbiAgfTtcblxuICBfcHJvdG8uZGlzcGxheUV4dGVudF8gPSBmdW5jdGlvbiBkaXNwbGF5RXh0ZW50XygpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHRlbnRWaXNpYmxlKCkpIHtcbiAgICAgIHZhciBmZWF0dXJlID0gbmV3IE9sRmVhdHVyZSh0aGlzLmRhdGFQb2x5Z29uXyk7XG4gICAgICB0aGlzLm92ZXJsYXlDb2xsZWN0aW9uXy5wdXNoKGZlYXR1cmUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkWm9vbUNvbnN0cmFpbnRzXyA9IGZ1bmN0aW9uIGFkZFpvb21Db25zdHJhaW50c18oKSB7XG4gICAgdmFyIHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG4gICAgdmFyIHpvb20gPSB2aWV3LmdldFpvb20oKTtcbiAgICB0aGlzLm9yaWdpbmFsTWluWm9vbSA9IHZpZXcuZ2V0TWluWm9vbSgpO1xuICAgIHRoaXMub3JpZ2luYWxNYXhab29tID0gdmlldy5nZXRNYXhab29tKCk7XG5cbiAgICBpZiAoem9vbSA8IHRoaXMubWluWm9vbSkge1xuICAgICAgdmlldy5zZXRab29tKHRoaXMubWluWm9vbSk7XG4gICAgfSBlbHNlIGlmICh6b29tID4gdGhpcy5tYXhab29tKSB7XG4gICAgICB2aWV3LnNldFpvb20odGhpcy5tYXhab29tKTtcbiAgICB9XG5cbiAgICB2aWV3LnNldE1heFpvb20odGhpcy5tYXhab29tKTtcbiAgICB2aWV3LnNldE1pblpvb20odGhpcy5taW5ab29tKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlWm9vbUNvbnN0cmFpbnRzXyA9IGZ1bmN0aW9uIHJlbW92ZVpvb21Db25zdHJhaW50c18oKSB7XG4gICAgdmFyIHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG4gICAgdmlldy5zZXRNYXhab29tKHRoaXMub3JpZ2luYWxNYXhab29tKTtcbiAgICB2aWV3LnNldE1pblpvb20odGhpcy5vcmlnaW5hbE1pblpvb20pO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVNYXNrUG9zdGNvbXBvc2VfID0gZnVuY3Rpb24gY3JlYXRlTWFza1Bvc3Rjb21wb3NlXygpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgY29udGV4dCA9IGV2dC5jb250ZXh0O1xuICAgICAgdmFyIGZyYW1lU3RhdGUgPSBldnQuZnJhbWVTdGF0ZTtcbiAgICAgIHZhciByZXNvbHV0aW9uID0gZnJhbWVTdGF0ZS52aWV3U3RhdGUucmVzb2x1dGlvbjtcbiAgICAgIHZhciB2aWV3cG9ydFdpZHRoID0gZnJhbWVTdGF0ZS5zaXplWzBdICogZnJhbWVTdGF0ZS5waXhlbFJhdGlvO1xuICAgICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gZnJhbWVTdGF0ZS5zaXplWzFdICogZnJhbWVTdGF0ZS5waXhlbFJhdGlvO1xuICAgICAgdmFyIGV4dGVudExlbmd0aCA9IF90aGlzNC5leHRlbnRTaXplID8gX3RoaXM0LmV4dGVudFNpemUgLyByZXNvbHV0aW9uICogREVWSUNFX1BJWEVMX1JBVElPIDogTWF0aC5taW4odmlld3BvcnRXaWR0aCwgdmlld3BvcnRIZWlnaHQpIC0gX3RoaXM0Lm1hc2tNYXJnaW4gKiAyO1xuICAgICAgdmFyIGV4dGVudEhhbGZMZW5ndGggPSBNYXRoLmNlaWwoZXh0ZW50TGVuZ3RoIC8gMik7XG4gICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgY29udGV4dC5tb3ZlVG8oMCwgMCk7XG4gICAgICBjb250ZXh0LmxpbmVUbyh2aWV3cG9ydFdpZHRoLCAwKTtcbiAgICAgIGNvbnRleHQubGluZVRvKHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgIGNvbnRleHQubGluZVRvKDAsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgIGNvbnRleHQubGluZVRvKDAsIDApO1xuICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgdmFyIGV4dGVudCA9IF90aGlzNC5jcmVhdGVFeHRlbnRfKFt2aWV3cG9ydFdpZHRoIC8gMiwgdmlld3BvcnRIZWlnaHQgLyAyXSwgZXh0ZW50SGFsZkxlbmd0aCk7XG5cbiAgICAgIGNvbnRleHQubW92ZVRvKGV4dGVudFswXSwgZXh0ZW50WzFdKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGV4dGVudFswXSwgZXh0ZW50WzNdKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGV4dGVudFsyXSwgZXh0ZW50WzNdKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGV4dGVudFsyXSwgZXh0ZW50WzFdKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGV4dGVudFswXSwgZXh0ZW50WzFdKTtcbiAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDUsIDI1LCAwLjUpJztcbiAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVBvbHlnb25Gcm9tRXh0ZW50XyA9IGZ1bmN0aW9uIGNyZWF0ZVBvbHlnb25Gcm9tRXh0ZW50XyhleHRlbnQpIHtcbiAgICB2YXIgcHJvakV4dGVudCA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkuZ2V0RXh0ZW50KCk7XG4gICAgcmV0dXJuIG5ldyBPbEdlb21Qb2x5Z29uKFtleHRlbnRUb1JlY3RhbmdsZShwcm9qRXh0ZW50KSwgZXh0ZW50VG9SZWN0YW5nbGUoZXh0ZW50KV0sIG9sR2VvbUdlb21ldHJ5TGF5b3V0LlhZKTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlRXh0ZW50XyA9IGZ1bmN0aW9uIGNyZWF0ZUV4dGVudF8oY2VudGVyLCBoYWxmTGVuZ3RoKSB7XG4gICAgdmFyIG1pbnggPSBjZW50ZXJbMF0gLSBoYWxmTGVuZ3RoO1xuICAgIHZhciBtaW55ID0gY2VudGVyWzFdIC0gaGFsZkxlbmd0aDtcbiAgICB2YXIgbWF4eCA9IGNlbnRlclswXSArIGhhbGZMZW5ndGg7XG4gICAgdmFyIG1heHkgPSBjZW50ZXJbMV0gKyBoYWxmTGVuZ3RoO1xuICAgIHJldHVybiBbbWlueCwgbWlueSwgbWF4eCwgbWF4eV07XG4gIH07XG5cbiAgX3Byb3RvLmdldERvd2xvYWRFeHRlbnRfID0gZnVuY3Rpb24gZ2V0RG93bG9hZEV4dGVudF8oKSB7XG4gICAgdmFyIGNlbnRlciA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICB2YXIgaGFsZkxlbmd0aCA9IE1hdGguY2VpbCh0aGlzLmV4dGVudFNpemUgfHwgdGhpcy5nZXRFeHRlbnRTaXplXygpKSAvIDI7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRXh0ZW50XyhjZW50ZXIsIGhhbGZMZW5ndGgpO1xuICB9O1xuXG4gIF9wcm90by5nZXRFeHRlbnRTaXplXyA9IGZ1bmN0aW9uIGdldEV4dGVudFNpemVfKCkge1xuICAgIHZhciBtYXBTaXplID0gdGhpcy5tYXAuZ2V0U2l6ZSgpO1xuICAgIHZhciBtYXNrU2l6ZVBpeGVsID0gREVWSUNFX1BJWEVMX1JBVElPICogTWF0aC5taW4obWFwU2l6ZVswXSwgbWFwU2l6ZVsxXSkgLSB0aGlzLm1hc2tNYXJnaW4gKiAyO1xuICAgIHZhciBtYXNrU2l6ZU1ldGVyID0gbWFza1NpemVQaXhlbCAqIHRoaXMubWFwLmdldFZpZXcoKS5nZXRSZXNvbHV0aW9uKCkgLyBERVZJQ0VfUElYRUxfUkFUSU87XG4gICAgcmV0dXJuIG1hc2tTaXplTWV0ZXI7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KCk7XG5tb2R1bGUuY29udHJvbGxlcignbmdlb09mZmxpbmVDb250cm9sbGVyJywgQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiaW1wb3J0IG5nZW9PZmZsaW5lQ29tcG9uZW50IGZyb20gJ25nZW8vb2ZmbGluZS9jb21wb25lbnQuanMnO1xuaW1wb3J0IG5nZW9PZmZsaW5lTmV0d29ya1N0YXR1cyBmcm9tICduZ2VvL29mZmxpbmUvTmV0d29ya1N0YXR1cy5qcyc7XG5pbXBvcnQgbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlciBmcm9tICduZ2VvL29mZmxpbmUvU2VydmljZU1hbmFnZXIuanMnO1xuaW1wb3J0IGRvd25sb2FkZXIgZnJvbSAnbmdlby9vZmZsaW5lL0Rvd25sb2FkZXIuanMnO1xuaW1wb3J0IHJlc3RvcmVyIGZyb20gJ25nZW8vb2ZmbGluZS9SZXN0b3Jlci5qcyc7XG5pbXBvcnQgbW9kZSBmcm9tICduZ2VvL29mZmxpbmUvTW9kZS5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbnZhciBleHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ25nZW9PZmZsaW5lTW9kdWxlJywgW25nZW9PZmZsaW5lQ29tcG9uZW50Lm5hbWUsIG5nZW9PZmZsaW5lTmV0d29ya1N0YXR1cy5tb2R1bGUubmFtZSwgbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlci5tb2R1bGUubmFtZSwgZG93bmxvYWRlci5tb2R1bGUubmFtZSwgcmVzdG9yZXIubW9kdWxlLm5hbWUsIG1vZGUubW9kdWxlLm5hbWVdKTtcbmV4cG9ydHMudmFsdWUoJ25nZW9PZmZsaW5lR3V0dGVyJywgOTYpO1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJ2YXIgZXhwb3J0cyA9IHt9O1xuaW1wb3J0IG9sTGF5ZXJHcm91cCBmcm9tICdvbC9sYXllci9Hcm91cC5qcyc7XG5cbmV4cG9ydHMudHJhdmVyc2VMYXllciA9IGZ1bmN0aW9uIChsYXllciwgYW5jZXN0b3JzLCB2aXNpdG9yKSB7XG4gIHZhciBkZXNjZW5kID0gdmlzaXRvcihsYXllciwgYW5jZXN0b3JzKTtcblxuICBpZiAoZGVzY2VuZCAmJiBsYXllciBpbnN0YW5jZW9mIG9sTGF5ZXJHcm91cCkge1xuICAgIGxheWVyLmdldExheWVycygpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkTGF5ZXIpIHtcbiAgICAgIGV4cG9ydHMudHJhdmVyc2VMYXllcihjaGlsZExheWVyLCBbXS5jb25jYXQoYW5jZXN0b3JzLCBbbGF5ZXJdKSwgdmlzaXRvcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBleHRyYWN0b3IgPSBuZXcgUmVnRXhwKCdbXi9dKi8vW14vXSsvKC4qKScpO1xuXG5leHBvcnRzLm5vcm1hbGl6ZVVSTCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdmFyIG1hdGNoZXMgPSB1cmwubWF0Y2goZXh0cmFjdG9yKTtcbiAgcmV0dXJuIG1hdGNoZXNbMV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6UEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=