(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-canvas"],{"011e":function(t,a,i){"use strict";i.r(a);var n=i("0252"),s=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,(function(){return n[t]}))}(e);a["default"]=s.a},"0252":function(t,a,i){"use strict";function n(t){var a=t.x,i=t.y,n=t.vx,s=t.vy,e=t.canvasWidth,c=t.canvasHeight,r=t.ctx;this.canvasWidth=e,this.canvasHeight=c,this.ctx=r,this.x=a,this.y=i,this.vx=n,this.vy=s,this.radius=5}function s(t,a){return Math.pow(Math.pow(t,2)+Math.pow(a,2),.5)}i("cb29"),i("4160"),i("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle="#007AFF",this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},n.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var e={methods:{start:function(t,a,i,e){for(var c=e.getDataset().width,r=e.getDataset().height,u=document.querySelectorAll(".canvas>canvas")[0],o=u.getContext("2d"),h=3,d=[],f=3,v=20,l=0;l<f;l++)for(var p=s(c/2,r/2)/f*l,x=0;x<v;x++){var y=2*x*Math.PI/v,g=Math.sin(y),w=Math.cos(y),b=p*w+c/2,M=p*g+r/2,m=h*w,W=h*g;d.push(new n({x:b,y:M,vx:m,vy:W,canvasWidth:c,canvasHeight:r,ctx:o,radius:5}))}function _(t){o.clearRect(0,0,u.width,u.height),t.forEach((function(t){t.move(),t.draw()})),requestAnimationFrame((function(){_(t)}))}_(d)}}};a.default=e},"1cc2":function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){return n}));var n={pageHead:i("5087").default},s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"page-body"},[i("v-uni-view",{staticClass:"page-body-wrapper"},[i("v-uni-canvas",{wxsProps:{"change:start":"startStatus"},staticClass:"canvas",attrs:{"canvas-id":"canvas",start:t.startStatus,"change:start":t.animate.start,"data-width":t.canvasWidth,"data-height":t.canvasWidth}})],1)],1)],1)},e=[]},3993:function(t,a,i){"use strict";i.r(a);var n=i("fd70"),s=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,(function(){return n[t]}))}(e);a["default"]=s.a},"4cfc":function(t,a,i){"use strict";var n=i("fd6d"),s=i.n(n);s.a},6395:function(t,a,i){"use strict";i.r(a);var n=i("1cc2"),s=i("011e");for(var e in s)"default"!==e&&function(t){i.d(a,t,(function(){return s[t]}))}(e);var c=i("3993");for(var e in c)"default"!==e&&function(t){i.d(a,t,(function(){return c[t]}))}(e);i("4cfc");var r=i("f0c5");s["default"].__module="animate";var u=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,"1785a7a1",null,!1,n["a"],s["default"]);a["default"]=u.exports},a29f:function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".page-body-wrapper[data-v-1785a7a1]{text-align:center}.canvas[data-v-1785a7a1]{width:%?610?%;height:%?610?%;margin:auto;background-color:#fff}",""]),t.exports=a},cb29:function(t,a,i){var n=i("23e7"),s=i("81d5"),e=i("44d2");n({target:"Array",proto:!0},{fill:s}),e("fill")},fd6d:function(t,a,i){var n=i("a29f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("3885d653",n,!0,{sourceMap:!1,shadowMode:!1})},fd70:function(t,a,i){"use strict";i("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var t=this;this.$nextTick((function(){uni.createSelectorQuery().select(".canvas").boundingClientRect((function(a){t.canvasWidth=a.width,t.startStatus=!0})).exec()}))}};a.default=n}}]);