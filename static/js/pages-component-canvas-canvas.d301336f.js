(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-canvas-canvas"],{"2cdc":function(t,a,i){"use strict";i.r(a);var n=i("ca05"),s=i.n(n);for(var e in n)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(e);a["default"]=s.a},"63de":function(t,a,i){"use strict";i.r(a);var n=i("eb59"),s=i.n(n);for(var e in n)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(e);a["default"]=s.a},"67f3":function(t,a,i){"use strict";i.r(a);var n=i("b884"),s=i("2cdc");for(var e in s)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(e);var c=i("63de");for(var e in c)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return c[t]}))}(e);i("88fa");var r=i("f0c5");s["default"].__module="animate";var u=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,"0141d872",null,!1,n["a"],s["default"]);a["default"]=u.exports},"7d71":function(t,a,i){var n=i("a266");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("494f3f83",n,!0,{sourceMap:!1,shadowMode:!1})},"88fa":function(t,a,i){"use strict";var n=i("7d71"),s=i.n(n);s.a},a266:function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".page-body-wrapper[data-v-0141d872]{text-align:center}.canvas[data-v-0141d872]{width:%?610?%;height:%?610?%;margin:auto;background-color:#fff}",""]),t.exports=a},b884:function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){return n}));var n={pageHead:i("0586").default},s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"page-body"},[i("v-uni-view",{staticClass:"page-body-wrapper"},[i("v-uni-canvas",{wxsProps:{"change:start":"startStatus"},staticClass:"canvas",attrs:{"canvas-id":"canvas",start:t.startStatus,"change:start":t.animate.start,"data-width":t.canvasWidth,"data-height":t.canvasWidth}})],1)],1)],1)},e=[]},ca05:function(t,a,i){"use strict";function n(t){var a=t.x,i=t.y,n=t.vx,s=t.vy,e=t.canvasWidth,c=t.canvasHeight,r=t.ctx;this.canvasWidth=e,this.canvasHeight=c,this.ctx=r,this.x=a,this.y=i,this.vx=n,this.vy=s,this.radius=5}function s(t,a){return Math.pow(Math.pow(t,2)+Math.pow(a,2),.5)}i("cb29"),i("4160"),i("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle="#007AFF",this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},n.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var e={methods:{start:function(t,a,i,e){for(var c=e.getDataset().width,r=e.getDataset().height,u=document.querySelectorAll(".canvas>canvas")[0],o=u.getContext("2d"),d=3,h=[],f=3,v=20,l=0;l<f;l++)for(var x=s(c/2,r/2)/f*l,p=0;p<v;p++){var y=2*p*Math.PI/v,b=Math.sin(y),g=Math.cos(y),w=x*g+c/2,M=x*b+r/2,m=d*g,W=d*b;h.push(new n({x:w,y:M,vx:m,vy:W,canvasWidth:c,canvasHeight:r,ctx:o,radius:5}))}function _(t){o.clearRect(0,0,u.width,u.height),t.forEach((function(t){t.move(),t.draw()})),requestAnimationFrame((function(){_(t)}))}_(h)}}};a.default=e},cb29:function(t,a,i){var n=i("23e7"),s=i("81d5"),e=i("44d2");n({target:"Array",proto:!0},{fill:s}),e("fill")},eb59:function(t,a,i){"use strict";i("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var t=this;this.$nextTick((function(){uni.createSelectorQuery().select(".canvas").boundingClientRect((function(a){t.canvasWidth=a.width,t.startStatus=!0})).exec()}))}};a.default=n}}]);