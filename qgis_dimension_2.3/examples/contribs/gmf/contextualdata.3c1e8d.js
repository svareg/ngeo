!function(e){function t(t){for(var o,l,u=t[0],c=t[1],i=t[2],s=0,f=[];s<u.length;s++)l=u[s],r[l]&&f.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(p&&p(t);f.length;)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={28:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var p=c;a.push([464,0]),n()}({463:function(e,t,n){"use strict";n.r(t);n(574);var o=n(280),r=n(43),a=n(107),l=n(45),u=n(59),c=n(73),i=n(54),p=n(83),s={};s.module=angular.module("gmfapp",["gettext",o.a.name,r.a.name,a.a.name]),s.module.value("gmfRasterUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/raster"),s.module.value("gmfContextualdatacontentTemplateUrl","partials/contextualdata.html"),s.module.constant("defaultTheme","Demo"),s.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),s.MainController=function(){this.map=new u.a({layers:[new i.a({source:new p.a})],view:new c.a({projection:l.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:3})})},s.MainController.prototype.onRasterData=function(e,t){return{elelvation_diff:t.srtm-t.aster}},s.module.controller("MainController",s.MainController),t.default=s},464:function(e,t,n){n(61),n(60),e.exports=n(463)},574:function(e,t){}});
//# sourceMappingURL=contextualdata.3c1e8d.js.map