(function(r){function e(e){var t=e[0];var u=e[1];var i=e[2];var l,f,c=0,p=[];for(;c<t.length;c++){f=t[c];if(o[f]){p.push(o[f][0])}o[f]=0}for(l in u){if(Object.prototype.hasOwnProperty.call(u,l)){r[l]=u[l]}}if(s)s(e);while(p.length){p.shift()()}a.push.apply(a,i||[]);return n()}function n(){var r;for(var e=0;e<a.length;e++){var n=a[e];var t=true;for(var i=1;i<n.length;i++){var l=n[i];if(o[l]!==0)t=false}if(t){a.splice(e--,1);r=u(u.s=n[0])}}return r}var t={};var o={5:0};var a=[];function u(e){if(t[e]){return t[e].exports}var n=t[e]={i:e,l:false,exports:{}};r[e].call(n.exports,n,n.exports,u);n.l=true;return n.exports}u.m=r;u.c=t;u.d=function(r,e,n){if(!u.o(r,e)){Object.defineProperty(r,e,{configurable:false,enumerable:true,get:n})}};u.r=function(r){Object.defineProperty(r,"__esModule",{value:true})};u.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};u.d(e,"a",e);return e};u.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)};u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=i.push.bind(i);i.push=e;i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var s=l;a.push([349,0]);return n()})({348:function(r,e,n){"use strict";n.r(e);var t=n(474);var o=n.n(t);var a=n(106);var u=n(19);var i=n(25);var l=n(17);var f=n(35);var s=n(22);var c={};c.module=angular.module("app",["gettext",s["a"].name,a["a"].name]);c.MainController=function(r){this.map=new u["a"]({layers:[new l["a"]({source:new f["b"]})],view:new i["a"]({center:[-10635142.37,4813698.29],zoom:1,maxZoom:4})});this.scales=[2e8,1e8,5e7,25e6,12e6];this.options={dropup:true}};c.MainController.$inject=["$scope"];c.module.controller("MainController",c.MainController);e["default"]=c},349:function(r,e,n){n(53);n(55);r.exports=n(348)},474:function(r,e){}});
//# sourceMappingURL=scaleselector.350b80.js.map