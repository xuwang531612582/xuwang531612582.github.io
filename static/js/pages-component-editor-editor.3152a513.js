(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-editor-editor"],{"09a0":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"toolbar",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.format.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"iconfont icon-zitijiacu",class:t.formats.bold?"ql-active":"",attrs:{"data-name":"bold"}}),n("v-uni-view",{staticClass:"iconfont icon-zitixieti",class:t.formats.italic?"ql-active":"",attrs:{"data-name":"italic"}}),n("v-uni-view",{staticClass:"iconfont icon-zitixiahuaxian",class:t.formats.underline?"ql-active":"",attrs:{"data-name":"underline"}}),n("v-uni-view",{staticClass:"iconfont icon-zitishanchuxian",class:t.formats.strike?"ql-active":"",attrs:{"data-name":"strike"}}),n("v-uni-view",{staticClass:"iconfont icon-zuoduiqi",class:"left"===t.formats.align?"ql-active":"",attrs:{"data-name":"align","data-value":"left"}}),n("v-uni-view",{staticClass:"iconfont icon-juzhongduiqi",class:"center"===t.formats.align?"ql-active":"",attrs:{"data-name":"align","data-value":"center"}}),n("v-uni-view",{staticClass:"iconfont icon-youduiqi",class:"right"===t.formats.align?"ql-active":"",attrs:{"data-name":"align","data-value":"right"}}),n("v-uni-view",{staticClass:"iconfont icon-zuoyouduiqi",class:"justify"===t.formats.align?"ql-active":"",attrs:{"data-name":"align","data-value":"justify"}}),n("v-uni-view",{staticClass:"iconfont icon-line-height",class:t.formats.lineHeight?"ql-active":"",attrs:{"data-name":"lineHeight","data-value":"2"}}),n("v-uni-view",{staticClass:"iconfont icon-Character-Spacing",class:t.formats.letterSpacing?"ql-active":"",attrs:{"data-name":"letterSpacing","data-value":"2em"}}),n("v-uni-view",{staticClass:"iconfont icon-722bianjiqi_duanqianju",class:t.formats.marginTop?"ql-active":"",attrs:{"data-name":"marginTop","data-value":"20px"}}),n("v-uni-view",{staticClass:"iconfont icon-723bianjiqi_duanhouju",class:t.formats.previewarginBottom?"ql-active":"",attrs:{"data-name":"marginBottom","data-value":"20px"}}),n("v-uni-view",{staticClass:"iconfont icon-clearedformat",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.removeFormat.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-font",class:t.formats.fontFamily?"ql-active":"",attrs:{"data-name":"fontFamily","data-value":"Pacifico"}}),n("v-uni-view",{staticClass:"iconfont icon-fontsize",class:"24px"===t.formats.fontSize?"ql-active":"",attrs:{"data-name":"fontSize","data-value":"24px"}}),n("v-uni-view",{staticClass:"iconfont icon-text_color",class:"#0000ff"===t.formats.color?"ql-active":"",attrs:{"data-name":"color","data-value":"#0000ff"}}),n("v-uni-view",{staticClass:"iconfont icon-fontbgcolor",class:"#00ff00"===t.formats.backgroundColor?"ql-active":"",attrs:{"data-name":"backgroundColor","data-value":"#00ff00"}}),n("v-uni-view",{staticClass:"iconfont icon-date",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.insertDate.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon--checklist",attrs:{"data-name":"list","data-value":"check"}}),n("v-uni-view",{staticClass:"iconfont icon-youxupailie",class:"ordered"===t.formats.list?"ql-active":"",attrs:{"data-name":"list","data-value":"ordered"}}),n("v-uni-view",{staticClass:"iconfont icon-wuxupailie",class:"bullet"===t.formats.list?"ql-active":"",attrs:{"data-name":"list","data-value":"bullet"}}),n("v-uni-view",{staticClass:"iconfont icon-undo",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.undo.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-redo",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.redo.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-outdent",attrs:{"data-name":"indent","data-value":"-1"}}),n("v-uni-view",{staticClass:"iconfont icon-indent",attrs:{"data-name":"indent","data-value":"+1"}}),n("v-uni-view",{staticClass:"iconfont icon-fengexian",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.insertDivider.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-charutupian",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.insertImage.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-format-header-1",class:1===t.formats.header?"ql-active":"",attrs:{"data-name":"header","data-value":1}}),n("v-uni-view",{staticClass:"iconfont icon-zitixiabiao",class:"sub"===t.formats.script?"ql-active":"",attrs:{"data-name":"script","data-value":"sub"}}),n("v-uni-view",{staticClass:"iconfont icon-zitishangbiao",class:"super"===t.formats.script?"ql-active":"",attrs:{"data-name":"script","data-value":"super"}}),n("v-uni-view",{staticClass:"iconfont icon-shanchu",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clear.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-direction-rtl",class:"rtl"===t.formats.direction?"ql-active":"",attrs:{"data-name":"direction","data-value":"rtl"}})],1),n("v-uni-editor",{staticClass:"ql-container",attrs:{id:"editor",placeholder:"开始输入...",showImgSize:!0,showImgToolbar:!0,showImgResize:!0,"read-only":t.readOnly},on:{statuschange:function(a){arguments[0]=a=t.$handleEvent(a),t.onStatusChange.apply(void 0,arguments)},ready:function(a){arguments[0]=a=t.$handleEvent(a),t.onEditorReady.apply(void 0,arguments)}}})],1)],1)],1)},o=[]},"2d1f":function(t,a,n){"use strict";n.r(a);var e=n("09a0"),i=n("5b0c");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("d8d4");var c,d=n("f0c5"),s=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"9d44d714",null,!1,e["a"],c);a["default"]=s.exports},"42b7":function(t,a,n){var e=n("a6db");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("e84b7b38",e,!0,{sourceMap:!1,shadowMode:!1})},"5b0c":function(t,a,n){"use strict";n.r(a);var e=n("89d6"),i=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},"89d6":function(t,a,n){"use strict";n("99af"),n("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{readOnly:!1,formats:{}}},methods:{readOnlyChange:function(){this.readOnly=!this.readOnly},onEditorReady:function(){var t=this;uni.createSelectorQuery().select("#editor").context((function(a){t.editorCtx=a.context})).exec()},undo:function(){this.editorCtx.undo()},redo:function(){this.editorCtx.redo()},format:function(t){var a=t.target.dataset,n=a.name,e=a.value;n&&this.editorCtx.format(n,e)},onStatusChange:function(t){var a=t.detail;this.formats=a},insertDivider:function(){this.editorCtx.insertDivider({success:function(){console.log("insert divider success")}})},clear:function(){this.editorCtx.clear({success:function(t){console.log("clear success")}})},removeFormat:function(){this.editorCtx.removeFormat()},insertDate:function(){var t=new Date,a="".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate());this.editorCtx.insertText({text:a})},insertImage:function(){var t=this;uni.chooseImage({count:1,success:function(a){t.editorCtx.insertImage({src:a.tempFilePaths[0],alt:"图像",success:function(){console.log("insert image success")}})}})}},onLoad:function(){uni.loadFontFace({family:"Pacifico",source:'url("https://sungd.github.io/Pacifico.ttf")'})}};a.default=e},a6db:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@font-face{font-family:iconfont;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/editor-icon.ttf) format("truetype")}.iconfont[data-v-9d44d714]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-redo[data-v-9d44d714]:before{content:"\\e627"}.icon-undo[data-v-9d44d714]:before{content:"\\e633"}.icon-indent[data-v-9d44d714]:before{content:"\\eb28"}.icon-outdent[data-v-9d44d714]:before{content:"\\e6e8"}.icon-fontsize[data-v-9d44d714]:before{content:"\\e6fd"}.icon-format-header-1[data-v-9d44d714]:before{content:"\\e860"}.icon-format-header-4[data-v-9d44d714]:before{content:"\\e863"}.icon-format-header-5[data-v-9d44d714]:before{content:"\\e864"}.icon-format-header-6[data-v-9d44d714]:before{content:"\\e865"}.icon-clearup[data-v-9d44d714]:before{content:"\\e64d"}.icon-preview[data-v-9d44d714]:before{content:"\\e631"}.icon-date[data-v-9d44d714]:before{content:"\\e63e"}.icon-fontbgcolor[data-v-9d44d714]:before{content:"\\e678"}.icon-clearedformat[data-v-9d44d714]:before{content:"\\e67e"}.icon-font[data-v-9d44d714]:before{content:"\\e684"}.icon-723bianjiqi_duanhouju[data-v-9d44d714]:before{content:"\\e65f"}.icon-722bianjiqi_duanqianju[data-v-9d44d714]:before{content:"\\e660"}.icon-text_color[data-v-9d44d714]:before{content:"\\e72c"}.icon-format-header-2[data-v-9d44d714]:before{content:"\\e75c"}.icon-format-header-3[data-v-9d44d714]:before{content:"\\e75d"}.icon--checklist[data-v-9d44d714]:before{content:"\\e664"}.icon-baocun[data-v-9d44d714]:before{content:"\\ec09"}.icon-line-height[data-v-9d44d714]:before{content:"\\e7f8"}.icon-quanping[data-v-9d44d714]:before{content:"\\ec13"}.icon-direction-rtl[data-v-9d44d714]:before{content:"\\e66e"}.icon-direction-ltr[data-v-9d44d714]:before{content:"\\e66d"}.icon-selectall[data-v-9d44d714]:before{content:"\\e62b"}.icon-fuzhi[data-v-9d44d714]:before{content:"\\ec7a"}.icon-shanchu[data-v-9d44d714]:before{content:"\\ec7b"}.icon-bianjisekuai[data-v-9d44d714]:before{content:"\\ec7c"}.icon-fengexian[data-v-9d44d714]:before{content:"\\ec7f"}.icon-dianzan[data-v-9d44d714]:before{content:"\\ec80"}.icon-charulianjie[data-v-9d44d714]:before{content:"\\ec81"}.icon-charutupian[data-v-9d44d714]:before{content:"\\ec82"}.icon-wuxupailie[data-v-9d44d714]:before{content:"\\ec83"}.icon-juzhongduiqi[data-v-9d44d714]:before{content:"\\ec84"}.icon-yinyong[data-v-9d44d714]:before{content:"\\ec85"}.icon-youxupailie[data-v-9d44d714]:before{content:"\\ec86"}.icon-youduiqi[data-v-9d44d714]:before{content:"\\ec87"}.icon-zitidaima[data-v-9d44d714]:before{content:"\\ec88"}.icon-xiaolian[data-v-9d44d714]:before{content:"\\ec89"}.icon-zitijiacu[data-v-9d44d714]:before{content:"\\ec8a"}.icon-zitishanchuxian[data-v-9d44d714]:before{content:"\\ec8b"}.icon-zitishangbiao[data-v-9d44d714]:before{content:"\\ec8c"}.icon-zitibiaoti[data-v-9d44d714]:before{content:"\\ec8d"}.icon-zitixiahuaxian[data-v-9d44d714]:before{content:"\\ec8e"}.icon-zitixieti[data-v-9d44d714]:before{content:"\\ec8f"}.icon-zitiyanse[data-v-9d44d714]:before{content:"\\ec90"}.icon-zuoduiqi[data-v-9d44d714]:before{content:"\\ec91"}.icon-zitiyulan[data-v-9d44d714]:before{content:"\\ec92"}.icon-zitixiabiao[data-v-9d44d714]:before{content:"\\ec93"}.icon-zuoyouduiqi[data-v-9d44d714]:before{content:"\\ec94"}.icon-duigoux[data-v-9d44d714]:before{content:"\\ec9e"}.icon-guanbi[data-v-9d44d714]:before{content:"\\eca0"}.icon-shengyin_shiti[data-v-9d44d714]:before{content:"\\eca5"}.icon-Character-Spacing[data-v-9d44d714]:before{content:"\\e964"}.wrapper[data-v-9d44d714]{padding:5px}.iconfont[data-v-9d44d714]{display:inline-block;padding:8px 8px;width:24px;height:24px;cursor:pointer;font-size:20px}.toolbar[data-v-9d44d714]{box-sizing:border-box;border-bottom:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.ql-container[data-v-9d44d714]{box-sizing:border-box;padding:12px 15px;width:100%;min-height:30vh;height:auto;background:#fff;margin-top:20px;font-size:16px;line-height:1.5}.ql-active[data-v-9d44d714]{color:#06c}',""]),t.exports=a},d8d4:function(t,a,n){"use strict";var e=n("42b7"),i=n.n(e);i.a}}]);