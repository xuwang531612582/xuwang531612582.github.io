(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fav-fav"],{"009b":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-fav[data-v-6d832934]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:60px;height:25px;line-height:25px;text-align:center;border-radius:3px}.uni-fav--circle[data-v-6d832934]{border-radius:30px}.uni-fav-star[data-v-6d832934]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:24px;margin-right:3px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-fav-text[data-v-6d832934]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:25px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:14px}",""]),e.exports=t},"10d5":function(e,t,i){"use strict";i.r(t);var n=i("66ae"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"1b85":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-3d8faa65]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-3d8faa65]{font-size:14px;line-height:inherit}.example[data-v-3d8faa65]{padding:0 15px 15px}.example-info[data-v-3d8faa65]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-3d8faa65]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-3d8faa65]{padding:0 15px}.example-info[data-v-3d8faa65]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-3d8faa65]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-3d8faa65]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-3d8faa65]{font-size:18px;color:#fff}.word-btn[data-v-3d8faa65]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-3d8faa65]{background-color:#4ca2ff}\n.favBtn[data-v-3d8faa65]{margin:0 %?20?% %?20?% 0}.example-body-fullWidth[data-v-3d8faa65]{padding:%?32?% 0}.example-body-first[data-v-3d8faa65]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}body.?%PAGE?%[data-v-3d8faa65]{background-color:#efeff4}',""]),e.exports=t},"2b44":function(e,t,i){"use strict";i.r(t);var n=i("652b"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"4b40":function(e,t,i){"use strict";var n=i("5d5c"),a=i.n(n);a.a},"5d5c":function(e,t,i){var n=i("009b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("aa65ddbc",n,!0,{sourceMap:!1,shadowMode:!1})},"652b":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("2ba4")),o={name:"UniFav",components:{uniIcons:a.default},props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){uni.report&&(this.checked?uni.report("收藏","收藏"):uni.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};t.default=o},"66ae":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={components:{},data:function(){return{checkList:[!1,!1,!1,!1,!1,!1],contentText:{contentDefault:"追番",contentFav:"已追番"}}},methods:{favClick:function(e){this.checkList[e]=!this.checkList[e],this.$forceUpdate()}}};t.default=n},"7f58":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("2ba4").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-fav",class:[!0===e.circle||"true"===e.circle?"uni-fav--circle":""],style:[{backgroundColor:e.checked?e.bgColorChecked:e.bgColor}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.checked||!0!==e.star&&"true"!==e.star?e._e():i("uni-icons",{staticClass:"uni-fav-star",style:{color:e.checked?e.fgColorChecked:e.fgColor},attrs:{color:e.fgColor,size:"14",type:"star-filled"}}),i("v-uni-text",{staticClass:"uni-fav-text",style:{color:e.checked?e.fgColorChecked:e.fgColor}},[e._v(e._s(e.checked?e.contentText.contentFav:e.contentText.contentDefault))])],1)},o=[]},"901a":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniSection:i("2e5a").default,uniFav:i("e62f").default,uniNavBar:i("f31d").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"example-fav"},[i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body example-body-first"},[i("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[0]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(0)}}}),i("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[1],star:!1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(1)}}}),i("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[2],circle:!0,"bg-color":"#dd524d","bg-color-checked":"#007aff","fg-color":"#ffffff","fg-color-checked":"#ffffff"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(2)}}}),i("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[3],"bg-color":"#f8f8f8","bg-color-checked":"#eeeeee","fg-color":"#333333","fg-color-checked":"#333333"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(3)}}})],1),i("uni-section",{attrs:{title:"自定义文字",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[4],"content-text":e.contentText},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(4)}}})],1),i("uni-section",{staticClass:"hideOnPc",attrs:{title:"在自定义导航栏使用",type:"line"}}),i("v-uni-view",{staticClass:"example-body example-body-fullWidth hideOnPc"},[i("uni-nav-bar",{staticStyle:{width:"100%"},attrs:{fixed:!1,"left-icon":"arrowleft",title:"标题",color:"#333333","background-color":"#FFFFFF"}},[i("template",{attrs:{slot:"right"},slot:"right"},[i("uni-fav",{staticClass:"favBtn-nav",attrs:{checked:e.checkList[5],circle:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(5)}}})],1)],2)],1)],1)},o=[]},a156:function(e,t,i){"use strict";var n=i("b430"),a=i.n(n);a.a},ab10:function(e,t,i){"use strict";i.r(t);var n=i("901a"),a=i("10d5");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("a156");var c,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3d8faa65",null,!1,n["a"],c);t["default"]=l.exports},b430:function(e,t,i){var n=i("1b85");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("7fcb4d7e",n,!0,{sourceMap:!1,shadowMode:!1})},e62f:function(e,t,i){"use strict";i.r(t);var n=i("7f58"),a=i("2b44");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("4b40");var c,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6d832934",null,!1,n["a"],c);t["default"]=l.exports}}]);