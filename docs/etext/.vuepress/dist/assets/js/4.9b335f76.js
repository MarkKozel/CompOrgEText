(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{355:function(t,n,e){"use strict";e.r(n);var i=e(356),r=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n.default=r.a},356:function(t,n,e){var i=e(417);t.exports={props:{dataFileName:{type:String,required:!0},sortColumn:{type:String,required:!0}},mounted:function(){this.fileData=JSON.parse(i.readFileSync(this.dataFileName,"utf8"))},data:function(){return{fileData:{},sorted:[]}},methods:{onData:function(){for(var t in fileData)sorted.push(t)}}}},385:function(t,n,e){},417:function(t,n){},418:function(t,n,e){"use strict";e(385)},428:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}));var i=function(){var t=this.$createElement;this._self._c;return this._m(0)},r=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"question-tf"},[n("table",{staticStyle:{width:"100%"}},[n("tr")])])}]},433:function(t,n,e){"use strict";e.r(n);var i=e(428),r=e(355);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e(418);var u=e(23),o=Object(u.a)(r.default,i.a,i.b,!1,null,"307dd108",null);n.default=o.exports}}]);