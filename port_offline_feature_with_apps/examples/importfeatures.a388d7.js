(function(r){function e(e){var n=e[0];var i=e[1];var u=e[2];var l,c,f=0,v=[];for(;f<n.length;f++){c=n[f];if(a[c]){v.push(a[c][0])}a[c]=0}for(l in i){if(Object.prototype.hasOwnProperty.call(i,l)){r[l]=i[l]}}if(s)s(e);while(v.length){v.shift()()}o.push.apply(o,u||[]);return t()}function t(){var r;for(var e=0;e<o.length;e++){var t=o[e];var n=true;for(var u=1;u<t.length;u++){var l=t[u];if(a[l]!==0)n=false}if(n){o.splice(e--,1);r=i(i.s=t[0])}}return r}var n={};var a={25:0};var o=[];function i(e){if(n[e]){return n[e].exports}var t=n[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,i);t.l=true;return t.exports}i.m=r;i.c=n;i.d=function(r,e,t){if(!i.o(r,e)){Object.defineProperty(r,e,{configurable:false,enumerable:true,get:t})}};i.r=function(r){Object.defineProperty(r,"__esModule",{value:true})};i.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};i.d(e,"a",e);return e};i.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)};i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=u.push.bind(u);u.push=e;u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=l;o.push([392,0]);return t()})({391:function(r,e,t){"use strict";t.r(e);var n=t(497);var a=t.n(n);var o=t(22);var i=t(260);var u=t(19);var l=t(25);var c=t(4);var s=t(292);var f=t(17);var v=t(38);var p=t(35);var h=t(34);var d={};d.module=angular.module("app",["gettext",o["a"].name,i["a"].name]);d.MainController=function(r){var e=this;this.kmlFormat_=new s["a"]({extractStyles:false});this.vectorSource_=new h["b"];this.map=new u["a"]({layers:[new f["a"]({source:new p["b"]}),new v["a"]({source:this.vectorSource_})],view:new l["a"]({center:[0,0],zoom:2})});this.fileReaderSupported=undefined;this.fileContent="";r.$watch(function(){return e.fileContent},this.importKml_.bind(this))};d.MainController.$inject=["$scope"];d.MainController.prototype.importKml_=function(r){var e=this.map;var t=this.vectorSource_;var n=this.kmlFormat_.readFeatures(r,{featureProjection:"EPSG:3857"});t.clear(true);t.addFeatures(n);var a=t.getExtent();var o=e.getSize();if(o&&!c["H"](a)){e.getView().fit(a,o)}};d.module.controller("MainController",d.MainController);e["default"]=d},392:function(r,e,t){t(53);t(55);r.exports=t(391)},497:function(r,e){}});
//# sourceMappingURL=importfeatures.a388d7.js.map