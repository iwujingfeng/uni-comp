(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-combox-combox"],{"08f0":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};t.default=n},"15c5":function(e,t,i){"use strict";var n=i("b0c4"),o=i.n(n);o.a},"2a17":function(e,t,i){var n=i("5abb");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("6f226a91",n,!0,{sourceMap:!1,shadowMode:!1})},"2c46":function(e,t,i){"use strict";i.r(t);var n=i("9606"),o=i("9881");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("9fdd");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"7bc22022",null,!1,n["a"],l);t["default"]=c.exports},3516:function(e,t,i){"use strict";var n=i("4ea4");i("4de4"),i("c975"),i("a9e3"),i("d3b7"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("2c46")),a={name:"uniCombox",components:{uniIcons:o.default},props:{label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:function(){return[]}},emptyTips:{type:String,default:"无匹配项"},value:{type:[String,Number],default:""}},data:function(){return{showSelector:!1,inputVal:""}},computed:{labelStyle:function(){return"auto"===this.labelWidth?{}:{width:this.labelWidth}},filterCandidates:function(){var e=this;return this.candidates.filter((function(t){return t.toString().indexOf(e.inputVal)>-1}))},filterCandidatesLength:function(){return this.filterCandidates.length}},watch:{value:{handler:function(e){this.inputVal=e},immediate:!0}},methods:{toggleSelector:function(){this.showSelector=!this.showSelector},onFocus:function(){this.showSelector=!0},onBlur:function(){var e=this;setTimeout((function(){e.showSelector=!1}),153)},onSelectorClick:function(e){this.inputVal=this.filterCandidates[e],this.showSelector=!1,this.$emit("input",this.inputVal)},onInput:function(){var e=this;setTimeout((function(){e.$emit("input",e.inputVal)}))}}};t.default=a},"3d57":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={components:{},data:function(){return{candidates:["北京","南京","东京","武汉","天津","上海","海口"],city:""}},methods:{}};t.default=n},"3ec2":function(e,t,i){var n=i("9e81");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("74d3d4d9",n,!0,{sourceMap:!1,shadowMode:!1})},"4dea":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[e.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},a=[]},"5abb":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'.uni-combox[data-v-9bee502c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:40px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-combox__label[data-v-9bee502c]{font-size:16px;line-height:22px;padding-right:10px;color:#999}.uni-combox__input-box[data-v-9bee502c]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-combox__input[data-v-9bee502c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:16px;height:22px;line-height:22px}.uni-combox__input-arrow[data-v-9bee502c]{padding:10px}.uni-combox__selector[data-v-9bee502c]{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:42px;left:0;width:100%;background-color:#fff;-webkit-border-radius:6px;border-radius:6px;-webkit-box-shadow:#ddd 4px 4px 8px,#ddd -4px -4px 8px;box-shadow:#ddd 4px 4px 8px,#ddd -4px -4px 8px;z-index:2}.uni-combox__selector-scroll[data-v-9bee502c]{max-height:200px;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-combox__selector[data-v-9bee502c]::before{content:"";position:absolute;width:0;height:0;border-bottom:solid 6px #fff;border-right:solid 6px transparent;border-left:solid 6px transparent;left:50%;top:-6px;margin-left:-6px}.uni-combox__selector-empty[data-v-9bee502c],\n.uni-combox__selector-item[data-v-9bee502c]{\n\nline-height:36px;font-size:14px;text-align:center;border-bottom:solid 1px #ddd;margin:0 10px;cursor:pointer}.uni-combox__selector-empty[data-v-9bee502c]:last-child,\n.uni-combox__selector-item[data-v-9bee502c]:last-child{border-bottom:none}',""]),e.exports=t},"5f55":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=n},"75e36":function(e,t,i){"use strict";i.r(t);var n=i("3d57"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"82bc":function(e,t,i){"use strict";i.r(t);var n=i("4dea"),o=i("b9ed");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("f0af");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"83509928",null,!1,n["a"],l);t["default"]=c.exports},"91b3":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-06893b1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-06893b1e]{font-size:14px;line-height:inherit}.example[data-v-06893b1e]{padding:0 15px 15px}.example-info[data-v-06893b1e]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-06893b1e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-06893b1e]{padding:0 15px}.example-info[data-v-06893b1e]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-06893b1e]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-06893b1e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-06893b1e]{font-size:18px;color:#fff}.word-btn[data-v-06893b1e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-border-radius:6px;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-06893b1e]{background-color:#4ca2ff}.example-body[data-v-06893b1e]{padding:0 12px;background-color:#fff}.result-box[data-v-06893b1e]{text-align:center;padding:20px 0;font-size:16px}body.?%PAGE?%[data-v-06893b1e]{background-color:#efeff4}',""]),e.exports=t},"943a":function(e,t,i){"use strict";i.r(t);var n=i("b2b3"),o=i("75e36");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("15c5");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"06893b1e",null,!1,n["a"],l);t["default"]=c.exports},9606:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},a=[]},9881:function(e,t,i){"use strict";i.r(t);var n=i("9a07"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"98e0":function(e,t,i){"use strict";i.r(t);var n=i("3516"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"992e":function(e,t,i){"use strict";var n=i("2a17"),o=i.n(n);o.a},"9a07":function(e,t,i){"use strict";var n=i("4ea4");i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("08f0")),a={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:o.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=a},"9e81":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-section[data-v-83509928]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-83509928]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-83509928]{height:15px;background-color:silver;-webkit-border-radius:5px;border-radius:5px;width:3px}.circle[data-v-83509928]{width:8px;height:8px;-webkit-border-top-right-radius:50px;border-top-right-radius:50px;-webkit-border-top-left-radius:50px;border-top-left-radius:50px;-webkit-border-bottom-left-radius:50px;border-bottom-left-radius:50px;-webkit-border-bottom-right-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-83509928]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-83509928]{font-size:14px;color:#333}.distraction[data-v-83509928]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-83509928]{font-size:12px;color:#999}",""]),e.exports=t},"9fdd":function(e,t,i){"use strict";var n=i("acf6"),o=i.n(n);o.a},a169:function(e,t,i){e.exports=i.p+"static/fonts/uni.75745d34.ttf"},aa29:function(e,t,i){var n=i("24fb"),o=i("1de5"),a=i("a169");t=n(!1);var l=o(a);t.push([e.i,"\n@font-face{font-family:uniicons;src:url("+l+') format("truetype")}\n.uni-icons[data-v-7bc22022]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},acf6:function(e,t,i){var n=i("aa29");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("9254852c",n,!0,{sourceMap:!1,shadowMode:!1})},b0c4:function(e,t,i){var n=i("91b3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("ccb43a1c",n,!0,{sourceMap:!1,shadowMode:!1})},b2b3:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniSection:i("82bc").default,uniCombox:i("d2eb").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-text",{staticClass:"example-info"},[e._v("组合框一般用于可以选择也可以输入的表单项")]),i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",candidates:e.candidates,placeholder:"请选择所在城市"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),i("v-uni-view",{staticClass:"result-box"},[i("v-uni-text",[e._v("所选城市为："+e._s(e.city))])],1)],1),i("uni-section",{attrs:{title:"设置label宽度",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",labelWidth:"150px",candidates:e.candidates,placeholder:"请选择所在城市"}})],1),i("uni-section",{attrs:{title:"设置无匹配项时的提示语",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",emptyTips:"这里啥都没有",placeholder:"请选择所在城市"}})],1)],1)},a=[]},b9ed:function(e,t,i){"use strict";i.r(t);var n=i("5f55"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},bafb:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("2c46").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-combox"},[e.label?i("v-uni-view",{staticClass:"uni-combox__label",style:e.labelStyle},[i("v-uni-text",[e._v(e._s(e.label))])],1):e._e(),i("v-uni-view",{staticClass:"uni-combox__input-box"},[i("v-uni-input",{staticClass:"uni-combox__input",attrs:{type:"text",placeholder:e.placeholder},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)}},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}}),i("uni-icons",{staticClass:"uni-combox__input-arrow",attrs:{type:"arrowdown",size:"14"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}}),e.showSelector?i("v-uni-view",{staticClass:"uni-combox__selector"},[i("v-uni-scroll-view",{staticClass:"uni-combox__selector-scroll",attrs:{"scroll-y":"true"}},[0===e.filterCandidatesLength?i("v-uni-view",{staticClass:"uni-combox__selector-empty"},[i("v-uni-text",[e._v(e._s(e.emptyTips))])],1):e._e(),e._l(e.filterCandidates,(function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-combox__selector-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelectorClick(n)}}},[i("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1):e._e()],1)],1)},a=[]},d2eb:function(e,t,i){"use strict";i.r(t);var n=i("bafb"),o=i("98e0");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("992e");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"9bee502c",null,!1,n["a"],l);t["default"]=c.exports},f0af:function(e,t,i){"use strict";var n=i("3ec2"),o=i.n(n);o.a}}]);