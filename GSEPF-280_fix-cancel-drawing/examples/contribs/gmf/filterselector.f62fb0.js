(function(e){function r(r){var t=r[0];var i=r[1];var l=r[2];var s,u,m=0,f=[];for(;m<t.length;m++){u=t[m];if(o[u]){f.push(o[u][0])}o[u]=0}for(s in i){if(Object.prototype.hasOwnProperty.call(i,s)){e[s]=i[s]}}if(c)c(r);while(f.length){f.shift()()}n.push.apply(n,l||[]);return a()}function a(){var e;for(var r=0;r<n.length;r++){var a=n[r];var t=true;for(var l=1;l<a.length;l++){var s=a[l];if(o[s]!==0)t=false}if(t){n.splice(r--,1);e=i(i.s=a[0])}}return e}var t={};var o={19:0};var n=[];function i(r){if(t[r]){return t[r].exports}var a=t[r]={i:r,l:false,exports:{}};e[r].call(a.exports,a,a.exports,i);a.l=true;return a.exports}i.m=e;i.c=t;i.d=function(e,r,a){if(!i.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:a})}};i.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};i.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};i.d(r,"a",r);return r};i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[];var s=l.push.bind(l);l.push=r;l=l.slice();for(var u=0;u<l.length;u++)r(l[u]);var c=s;n.push([438,0]);return a()})({437:function(e,r,a){"use strict";a.r(r);(function(e){var t=a(560);var o=a.n(t);var n=a(278);var i=a.n(n);var l=a(183);var s=a(190);var u=a(307);var c=a(108);var m=a(74);var f=a(56);var v=a(23);var p=a(135);var h=a(185);var g=a(186);var d=a(62);var w=a(94);var y=a(59);var b=a(37);var T=a(46);var M=a(31);var j=a(52);function k(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}var x={};x.module=angular.module("gmfapp",["gettext",l["a"].name,s["a"].module.name,c["a"].name,m["a"].module.name,u["a"].name,f["a"].name,v["a"].module.name,p["a"].module.name,w["a"].module.name,h["a"].name,g["a"].name]);x.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background");x.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi");x.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background");x.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers/");x.module.constant("defaultTheme","Filters");x.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");x.MainController=function(){r.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources","ngeoToolActivateMgr"];function r(a,t,o,n,i,l){var s=this;k(this,r);this.scope_=a;o.loadThemes();this.gmfTreeManager=n;this.map=new b["a"]({layers:[new M["a"]({source:new j["a"]})],view:new T["a"]({projection:y["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})});t.setDatasourceMap(this.map);o.getThemesObject().then(function(e){if(e){for(var r=0,a=e.length;r<a;r++){if(e[r].id===175){s.gmfTreeManager.setFirstLevelGroups(e[r].children);break}}}});this.toolGroup="mapTools";this.filterSelectorActive=true;var u=new d["a"](this,"filterSelectorActive");l.registerTool("dummyTools",u,true);this.dummyActive=false;var c=new d["a"](this,"dummyActive");l.registerTool("dummyTools",c,false);this.queryActive=true;var m=new d["a"](this,"queryActive");l.registerTool(this.toolGroup,m,true);e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return r}();x.module.controller("MainController",x.MainController);r["default"]=x}).call(this,a(38))},438:function(e,r,a){a(73);a(72);e.exports=a(437)},560:function(e,r){}});
//# sourceMappingURL=filterselector.f62fb0.js.map