(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-combox-combox"],{"02eb":function(e,t,i){"use strict";i.r(t);var n=i("1ebd"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"0f4d":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'.uni-combox[data-v-05a71e54]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:40px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-combox__label[data-v-05a71e54]{font-size:16px;line-height:22px;padding-right:10px;color:#999}.uni-combox__input-box[data-v-05a71e54]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-combox__input[data-v-05a71e54]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:16px;height:22px;line-height:22px}.uni-combox__input-arrow[data-v-05a71e54]{padding:10px}.uni-combox__selector[data-v-05a71e54]{box-sizing:border-box;position:absolute;top:42px;left:0;width:100%;background-color:#fff;border-radius:6px;box-shadow:#ddd 4px 4px 8px,#ddd -4px -4px 8px;z-index:2}.uni-combox__selector-scroll[data-v-05a71e54]{max-height:200px;box-sizing:border-box}.uni-combox__selector[data-v-05a71e54]::before{content:"";position:absolute;width:0;height:0;border-bottom:solid 6px #fff;border-right:solid 6px transparent;border-left:solid 6px transparent;left:50%;top:-6px;margin-left:-6px}.uni-combox__selector-empty[data-v-05a71e54],\n.uni-combox__selector-item[data-v-05a71e54]{\n\nline-height:36px;font-size:14px;text-align:center;border-bottom:solid 1px #ddd;margin:0 10px}.uni-combox__selector-empty[data-v-05a71e54]:last-child,\n.uni-combox__selector-item[data-v-05a71e54]:last-child{border-bottom:none}',""]),e.exports=t},"160d":function(e,t,i){var n=i("0f4d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("978678b8",n,!0,{sourceMap:!1,shadowMode:!1})},"1ebd":function(e,t,i){"use strict";var n=i("4ea4");i("4de4"),i("c975"),i("a9e3"),i("d3b7"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("2ba4")),a={name:"uniCombox",components:{uniIcons:o.default},props:{label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:function(){return[]}},emptyTips:{type:String,default:"无匹配项"},value:{type:[String,Number],default:""}},data:function(){return{showSelector:!1,inputVal:""}},computed:{labelStyle:function(){return"auto"===this.labelWidth?{}:{width:this.labelWidth}},filterCandidates:function(){var e=this;return this.candidates.filter((function(t){return t.toString().indexOf(e.inputVal)>-1}))},filterCandidatesLength:function(){return this.filterCandidates.length}},watch:{value:{handler:function(e){this.inputVal=e},immediate:!0}},methods:{toggleSelector:function(){this.showSelector=!this.showSelector},onFocus:function(){this.showSelector=!0},onBlur:function(){var e=this;setTimeout((function(){e.showSelector=!1}),50)},onSelectorClick:function(e){this.inputVal=this.filterCandidates[e],this.showSelector=!1,this.$emit("input",this.inputVal)},onInput:function(){var e=this;setTimeout((function(){e.$emit("input",e.inputVal)}))}}};t.default=a},"2ba4":function(e,t,i){"use strict";i.r(t);var n=i("7bd7"),o=i("f225");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("7b60");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"7bc22022",null,!1,n["a"],l);t["default"]=c.exports},"2e5a":function(e,t,i){"use strict";i.r(t);var n=i("f850"),o=i("8d94");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("40f8");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3f87abbd",null,!1,n["a"],l);t["default"]=c.exports},"36bd":function(e,t,i){"use strict";var n=i("4ea4");i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("f2a0")),a={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:o.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=a},"40f8":function(e,t,i){"use strict";var n=i("62f6"),o=i.n(n);o.a},"550a":function(e,t,i){"use strict";i.r(t);var n=i("e19e"),o=i("02eb");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("eaf6");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"05a71e54",null,!1,n["a"],l);t["default"]=c.exports},"62f6":function(e,t,i){var n=i("bb4d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("20d530d0",n,!0,{sourceMap:!1,shadowMode:!1})},"77db":function(e,t,i){"use strict";i.r(t);var n=i("89c4"),o=i("fcf5");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("b76a");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"06893b1e",null,!1,n["a"],l);t["default"]=c.exports},"7b60":function(e,t,i){"use strict";var n=i("96a8"),o=i.n(n);o.a},"7bd7":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},a=[]},"80c7":function(e,t,i){e.exports=i.p+"static/fonts/uni.75745d34.ttf"},8813:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={components:{},data:function(){return{candidates:["北京","南京","东京","武汉","天津","上海","海口"],city:""}},methods:{}};t.default=n},"89c4":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniSection:i("2e5a").default,uniCombox:i("550a").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-text",{staticClass:"example-info"},[e._v("组合框一般用于可以选择也可以输入的表单项")]),i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",candidates:e.candidates,placeholder:"请选择所在城市"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),i("v-uni-view",{staticClass:"result-box"},[i("v-uni-text",[e._v("所选城市为："+e._s(e.city))])],1)],1),i("uni-section",{attrs:{title:"设置label宽度",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",labelWidth:"150px",candidates:e.candidates,placeholder:"请选择所在城市"}})],1),i("uni-section",{attrs:{title:"设置无匹配项时的提示语",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",emptyTips:"这里啥都没有",placeholder:"请选择所在城市"}})],1)],1)},a=[]},"8d94":function(e,t,i){"use strict";i.r(t);var n=i("dfda"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"96a8":function(e,t,i){var n=i("db43");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("41eba8a8",n,!0,{sourceMap:!1,shadowMode:!1})},ada7:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-06893b1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-06893b1e]{font-size:14px;line-height:inherit}.example[data-v-06893b1e]{padding:0 15px 15px}.example-info[data-v-06893b1e]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-06893b1e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-06893b1e]{padding:0 15px}.example-info[data-v-06893b1e]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-06893b1e]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-06893b1e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-06893b1e]{font-size:18px;color:#fff}.word-btn[data-v-06893b1e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-06893b1e]{background-color:#4ca2ff}.example-body[data-v-06893b1e]{padding:0 12px;background-color:#fff}.result-box[data-v-06893b1e]{text-align:center;padding:20px 0;font-size:16px}body.?%PAGE?%[data-v-06893b1e]{background-color:#efeff4}',""]),e.exports=t},b232:function(e,t,i){var n=i("ada7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("512fe330",n,!0,{sourceMap:!1,shadowMode:!1})},b76a:function(e,t,i){"use strict";var n=i("b232"),o=i.n(n);o.a},bb4d:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-section[data-v-3f87abbd]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-3f87abbd]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-3f87abbd]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-3f87abbd]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-3f87abbd]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-3f87abbd]{font-size:14px;color:#333}.distraction[data-v-3f87abbd]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-3f87abbd]{font-size:12px;color:#999}",""]),e.exports=t},db43:function(e,t,i){var n=i("24fb"),o=i("1de5"),a=i("80c7");t=n(!1);var l=o(a);t.push([e.i,"\n@font-face{font-family:uniicons;src:url("+l+') format("truetype")}\n.uni-icons[data-v-7bc22022]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},dfda:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=n},e19e:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("2ba4").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-combox"},[e.label?i("v-uni-view",{staticClass:"uni-combox__label",style:e.labelStyle},[i("v-uni-text",[e._v(e._s(e.label))])],1):e._e(),i("v-uni-view",{staticClass:"uni-combox__input-box"},[i("v-uni-input",{staticClass:"uni-combox__input",attrs:{type:"text",placeholder:e.placeholder},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)}},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}}),i("uni-icons",{staticClass:"uni-combox__input-arrow",attrs:{type:"arrowdown",size:"14"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}}),e.showSelector?i("v-uni-view",{staticClass:"uni-combox__selector"},[i("v-uni-scroll-view",{staticClass:"uni-combox__selector-scroll",attrs:{"scroll-y":"true"}},[0===e.filterCandidatesLength?i("v-uni-view",{staticClass:"uni-combox__selector-empty"},[i("v-uni-text",[e._v(e._s(e.emptyTips))])],1):e._e(),e._l(e.filterCandidates,(function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-combox__selector-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelectorClick(n)}}},[i("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1):e._e()],1)],1)},a=[]},eaf6:function(e,t,i){"use strict";var n=i("160d"),o=i.n(n);o.a},f225:function(e,t,i){"use strict";i.r(t);var n=i("36bd"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},f2a0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};t.default=n},f850:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[e.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},a=[]},fcf5:function(e,t,i){"use strict";i.r(t);var n=i("8813"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a}}]);