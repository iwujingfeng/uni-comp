(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-file-file"],{"0152":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=uni.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,success:function(t){e.tempFilePath=t.tempFilePaths[0]},fail:function(e){}})},saveFile:function(){var e=this;this.tempFilePath.length>0?uni.saveFile({tempFilePath:this.tempFilePath,success:function(t){e.savedFilePath=t.savedFilePath,uni.setStorageSync("savedFilePath",t.savedFilePath),uni.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(e){uni.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(e),showCancel:!1})}}):uni.showModal({content:"请选择文件",showCancel:!1})},clear:function(){uni.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){uni.downloadFile({url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b3f1d0b0-5168-11eb-bd01-97bc1429a9ff.pdf",success:function(e){uni.openDocument({filePath:e.tempFilePath,success:function(){console.log("打开文档成功")}})}})}}};t.default=i},4309:function(e,t,n){var i=n("d454");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("7e9e06e5",i,!0,{sourceMap:!1,shadowMode:!1})},"436e":function(e,t,n){"use strict";n.r(t);var i=n("0152"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},ab29:function(e,t,n){"use strict";n.r(t);var i=n("b455"),a=n("436e");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("f0e2");var o,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"2592387d",null,!1,i["a"],o);t["default"]=l.exports},b455:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var i={pageHead:n("5087").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e.tempFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:e.tempFilePath,mode:"aspectFit"}})]:e._e(),!e.tempFilePath&&e.savedFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:e.savedFilePath,mode:"aspectFit"}})]:e._e(),e.tempFilePath||e.savedFilePath?e._e():[n("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 请选择文件")])],n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"btn-savefile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveFile.apply(void 0,arguments)}}},[e._v("保存文件")]),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._v("删除文件")])],1),n("v-uni-view",{staticClass:"btn-area"},[n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openDocument.apply(void 0,arguments)}}},[e._v("打开pdf文件")])],1)],2)],1)},s=[]},d454:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".image[data-v-2592387d]{width:100%;height:%?360?%}.btn-savefile[data-v-2592387d]{background-color:#007aff;color:#fff}",""]),e.exports=t},f0e2:function(e,t,n){"use strict";var i=n("4309"),a=n.n(i);a.a}}]);