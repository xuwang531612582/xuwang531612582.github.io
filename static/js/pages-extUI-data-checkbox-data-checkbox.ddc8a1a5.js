(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-data-checkbox-data-checkbox"],{2942:function(t,e,a){var i=a("6e97");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("1732d310",i,!0,{sourceMap:!1,shadowMode:!1})},"2a02":function(t,e,a){"use strict";a.r(e);var i=a("7c97"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"2e5a":function(t,e,a){"use strict";a.r(e);var i=a("f850"),o=a("8d94");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("40f8");var r,l=a("f0c5"),c=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"3f87abbd",null,!1,i["a"],r);e["default"]=c.exports},"40f8":function(t,e,a){"use strict";var i=a("62f6"),o=a.n(i);o.a},"53d8":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uniSection:a("2e5a").default,uniGroup:a("067e").default,uniDataCheckbox:a("a199").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-text",{staticClass:"example-info"},[t._v("通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用")]),a("uni-section",{attrs:{title:"多选",type:"line"}}),a("uni-group",{attrs:{title:"基础用法"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),a("uni-data-checkbox",{attrs:{multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(e){t.$set(t.formData,"hobby",e)},expression:"formData.hobby"}})],1),a("uni-group",{attrs:{title:"更多样式-button"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),a("uni-data-checkbox",{attrs:{mode:"button",multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(e){t.$set(t.formData,"hobby",e)},expression:"formData.hobby"}})],1),a("uni-group",{attrs:{title:"更多样式-tag"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),a("uni-data-checkbox",{attrs:{mode:"tag",multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(e){t.$set(t.formData,"hobby",e)},expression:"formData.hobby"}})],1),a("uni-group",{attrs:{title:"更多样式-list"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),a("uni-data-checkbox",{attrs:{mode:"list",multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(e){t.$set(t.formData,"hobby",e)},expression:"formData.hobby"}})],1),a("uni-group",{attrs:{title:"禁用"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),a("uni-data-checkbox",{attrs:{mode:"button",multiple:!0,localdata:t.hobby2},model:{value:t.formData.hobby,callback:function(e){t.$set(t.formData,"hobby",e)},expression:"formData.hobby"}})],1),a("uni-group",{attrs:{title:"最大最小值"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),a("uni-data-checkbox",{attrs:{min:"1",max:"2",multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(e){t.$set(t.formData,"hobby",e)},expression:"formData.hobby"}})],1),a("uni-group",{attrs:{title:"自定义高亮颜色"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),a("uni-data-checkbox",{attrs:{selectedColor:"red",multiple:!0,localdata:t.hobby2},model:{value:t.formData.hobby,callback:function(e){t.$set(t.formData,"hobby",e)},expression:"formData.hobby"}})],1),a("uni-section",{attrs:{title:"单选",type:"line"}}),a("uni-group",{attrs:{title:"基础用法"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),a("uni-data-checkbox",{attrs:{localdata:t.sex},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("uni-group",{attrs:{title:"更多样式-button"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),a("uni-data-checkbox",{attrs:{mode:"button",localdata:t.sex},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("uni-group",{attrs:{title:"更多样式-tag"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),a("uni-data-checkbox",{attrs:{mode:"tag",localdata:t.sex},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("uni-group",{attrs:{title:"更多样式-list"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),a("uni-data-checkbox",{attrs:{mode:"list",icon:"right",localdata:t.sex},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("uni-group",{attrs:{title:"禁用"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),a("uni-data-checkbox",{attrs:{mode:"button",localdata:t.sex1},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("uni-group",{attrs:{title:"自定义高亮颜色"}},[a("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),a("uni-data-checkbox",{attrs:{selectedColor:"red",localdata:t.sex1},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1)],1)},n=[]},"62f6":function(t,e,a){var i=a("bb4d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("20d530d0",i,!0,{sourceMap:!1,shadowMode:!1})},"6e97":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-7d1a7f60]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-7d1a7f60]{font-size:14px;line-height:inherit}.example[data-v-7d1a7f60]{padding:0 15px 15px}.example-info[data-v-7d1a7f60]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-7d1a7f60]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-7d1a7f60]{padding:0 15px}.example-info[data-v-7d1a7f60]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-7d1a7f60]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-7d1a7f60]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-7d1a7f60]{font-size:18px;color:#fff}.word-btn[data-v-7d1a7f60]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-7d1a7f60]{background-color:#4ca2ff}.example[data-v-7d1a7f60]{padding:10px;background-color:#fff}.text[data-v-7d1a7f60]{font-size:14px;color:#333;margin-bottom:10px}body.?%PAGE?%[data-v-7d1a7f60]{background-color:#efeff4}',""]),t.exports=e},"7c97":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{formData:{value:1,hobby:[1]},sex:[{text:"男",value:0},{text:"女",value:1},{text:"未知",value:2}],sex1:[{text:"男",value:0},{text:"女",value:1,disable:!0},{text:"未知",value:2}],hobby:[{text:"足球",value:0},{text:"篮球",value:1},{text:"游泳",value:2}],hobby2:[{text:"足球",value:0,disable:!0},{text:"篮球",value:1,disable:!0},{text:"游泳",value:2}]}},onLoad:function(){},onReady:function(){},methods:{}};e.default=i},"8d94":function(t,e,a){"use strict";a.r(e);var i=a("dfda"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},b043:function(t,e,a){"use strict";a.r(e);var i=a("53d8"),o=a("2a02");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("e270");var r,l=a("f0c5"),c=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"7d1a7f60",null,!1,i["a"],r);e["default"]=c.exports},bb4d:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-section[data-v-3f87abbd]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-3f87abbd]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-3f87abbd]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-3f87abbd]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-3f87abbd]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-3f87abbd]{font-size:14px;color:#333}.distraction[data-v-3f87abbd]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-3f87abbd]{font-size:12px;color:#999}",""]),t.exports=e},dfda:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},e270:function(t,e,a){"use strict";var i=a("2942"),o=a.n(i);o.a},f850:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?a("v-uni-view",{staticClass:"uni-section__head"},[a("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),a("v-uni-view",{staticClass:"uni-section__content"},[a("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?a("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},n=[]}}]);