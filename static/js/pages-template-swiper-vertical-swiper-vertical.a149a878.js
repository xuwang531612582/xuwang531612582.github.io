(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-swiper-vertical-swiper-vertical"],{"1e9a":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,"\nuni-page-body[data-v-6681b00c]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.page[data-v-6681b00c]{-webkit-box-flex:1;-webkit-flex:1;flex:1\n    /* width: 750rpx; */}.swiper[data-v-6681b00c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#007aff}.swiper-item[data-v-6681b00c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.video[data-v-6681b00c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\nwidth:100%\n}",""]),e.exports=i},"5e43":function(e,i,t){"use strict";var n=t("7293"),a=t.n(n);a.a},7293:function(e,i,t){var n=t("1e9a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("5ac02280",n,!0,{sourceMap:!1,shadowMode:!1})},9226:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=[{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"}],a={data:function(){return{circular:!0,videoList:[{id:"video0",src:"",img:""},{id:"video1",src:"",img:""},{id:"video2",src:"",img:""}],videoDataList:[]}},onLoad:function(e){},onReady:function(){this.init(),this.getData()},methods:{init:function(){this._videoIndex=0,this._videoContextList=[];for(var e=0;e<this.videoList.length;e++)this._videoContextList.push(uni.createVideoContext("video"+e,this));this._videoDataIndex=0},getData:function(e){var i=this;this.videoDataList=n,setTimeout((function(){i.updateVideo(!0)}),200)},onSwiperChange:function(e){var i=this,t=e.detail.current;if(t!==this._videoIndex){var n=!1;0===t&&this._videoIndex===this.videoList.length-1?n=!0:t===this.videoList.length-1&&0===this._videoIndex?n=!1:t>this._videoIndex&&(n=!0),n?this._videoDataIndex++:this._videoDataIndex--,this._videoDataIndex<0?this._videoDataIndex=this.videoDataList.length-1:this._videoDataIndex>=this.videoDataList.length&&(this._videoDataIndex=0),this.circular=0!=this._videoDataIndex,this._videoIndex>=0&&(this._videoContextList[this._videoIndex].pause(),this._videoContextList[this._videoIndex].seek(0)),this._videoIndex=t,setTimeout((function(){i.updateVideo(n)}),200)}},getNextIndex:function(e){var i=this._videoIndex+(e?1:-1);return i<0?this.videoList.length-1:i>=this.videoList.length?0:i},getNextDataIndex:function(e){var i=this._videoDataIndex+(e?1:-1);return i<0?this.videoDataList.length-1:i>=this.videoDataList.length?0:i},updateVideo:function(e){var i=this;this.$set(this.videoList[this._videoIndex],"src",this.videoDataList[this._videoDataIndex].src),this.$set(this.videoList[this.getNextIndex(e)],"src",this.videoDataList[this.getNextDataIndex(e)].src),setTimeout((function(){i._videoContextList[i._videoIndex].play()}),200),console.log("v:"+this._videoIndex+" d:"+this._videoDataIndex+"; next v:"+this.getNextIndex(e)+" next d:"+this.getNextDataIndex(e))}}};i.default=a},"9f25":function(e,i,t){"use strict";t.r(i);var n=t("a557"),a=t("bc40");for(var d in a)["default"].indexOf(d)<0&&function(e){t.d(i,e,(function(){return a[e]}))}(d);t("5e43");var s,o=t("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"6681b00c",null,!1,n["a"],s);i["default"]=r.exports},a557:function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return d})),t.d(i,"a",(function(){return n}));var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"page"},[t("v-uni-swiper",{staticClass:"swiper",attrs:{circular:e.circular,vertical:!0},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.onSwiperChange.apply(void 0,arguments)}}},e._l(e.videoList,(function(e){return t("v-uni-swiper-item",{key:e.id},[t("v-uni-video",{ref:e.id,refInFor:!0,staticClass:"video",attrs:{id:e.id,src:e.src,controls:!1,loop:!0,"show-center-play-btn":!1}})],1)})),1)],1)},d=[]},bc40:function(e,i,t){"use strict";t.r(i);var n=t("9226"),a=t.n(n);for(var d in n)["default"].indexOf(d)<0&&function(e){t.d(i,e,(function(){return n[e]}))}(d);i["default"]=a.a}}]);