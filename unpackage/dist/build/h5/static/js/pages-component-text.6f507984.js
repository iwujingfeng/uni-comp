(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-text"],{"028f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".text-box[data-v-9a6437be]{margin-bottom:%?40?%;padding:%?40?% 0;display:-webkit-box;display:-webkit-flex;display:flex;min-height:%?300?%;background-color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;font-size:%?30?%;color:#353535;line-height:1.8}",""]),t.exports=e},"486b":function(t,e,n){"use strict";n("a15b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"text",texts:["HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","......"],text:"",canAdd:!0,canRemove:!1,extraLine:[]}},methods:{add:function(t){this.extraLine.push(this.texts[this.extraLine.length%12]),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0},remove:function(t){this.extraLine.length>0&&(this.extraLine.pop(),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0)}}};e.default=i},"6f7f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={pageHead:n("5087").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"text-box",attrs:{"scroll-y":"true"}},[n("v-uni-text",[t._v(t._s(t.text))])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary",disabled:!t.canAdd},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("add line")]),n("v-uni-button",{attrs:{type:"warn",disabled:!t.canRemove},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove.apply(void 0,arguments)}}},[t._v("remove line")])],1)],1)],1)},r=[]},"7d36":function(t,e,n){"use strict";var i=n("c9d7"),a=n.n(i);a.a},c9d7:function(t,e,n){var i=n("028f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2f6b16d7",i,!0,{sourceMap:!1,shadowMode:!1})},ded7:function(t,e,n){"use strict";n.r(e);var i=n("486b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},f93d:function(t,e,n){"use strict";n.r(e);var i=n("6f7f"),a=n("ded7");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("7d36");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"9a6437be",null,!1,i["a"],o);e["default"]=s.exports}}]);