(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbe587bc"],{"5a58":function(n,t,o){"use strict";o.r(t);var a=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("vs-row",{attrs:{"vs-justify":"center"}},[o("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-lg":"12","vs-xs":"12"}},[o("vs-card",[o("h3",{staticClass:"card-title d-flex"},[n._v("\n        Default loading\n        "),o("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){n.defaultloading=!0}}},[o("vs-icon",{attrs:{icon:"code"}})],1)],1),o("p",{staticClass:"card-subtitle"},[n._v("\n        To add a loading in any part of your application we have the global function\n        "),o("code",[n._v("$vs.loading ()")]),n._v(", and then when you want to remove it we have\n        "),o("code",[n._v("$vs.loading.close()")]),n._v(".\n      ")]),o("vs-button",{attrs:{type:"filled",color:"primary"},on:{click:n.openLoading}},[n._v("Loading Default")]),o("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:n.defaultloading},on:{"update:active":function(t){n.defaultloading=t}}},[o("vs-prism",[n._v('\n          <template lang="html">\n          <div class="centerx">\n          <vs-button @click="openLoading" type="filled" color="primary">Loading Default</vs-button>\n          </div>\n          </template>\n          <script>\n          export default {\n          methods:{\n          openLoading(){\n          this.$vs.loading()\n          setTimeout( ()=> {\n          this.$vs.loading.close()\n          }, 2000);\n          },\n          }\n          }\n          <\/script>\n        ')])],1)],1),o("vs-card",[o("h3",{staticClass:"card-title d-flex"},[n._v("\n        Loading Type\n        "),o("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){n.loadingtype=!0}}},[o("vs-icon",{attrs:{icon:"code"}})],1)],1),o("p",{staticClass:"card-subtitle"},[n._v("\n        You can change the\n        "),o("code",[n._v("type")]),n._v(" of animation with the type property and the animations so far are:\n      ")]),o("ul",{staticClass:"list-group list-group-horizontal-lg mb-3"},[o("li",{staticClass:"list-group-item rounded-0 py-2"},[o("span",[n._v("point")])]),o("li",{staticClass:"list-group-item py-2"},[o("span",[n._v("radius")])]),o("li",{staticClass:"list-group-item py-2"},[o("span",[n._v("border")])]),o("li",{staticClass:"list-group-item py-2"},[o("span",[n._v("corners")])]),o("li",{staticClass:"list-group-item py-2"},[o("span",[n._v("sound")])]),o("li",{staticClass:"list-group-item rounded-0 py-2"},[o("span",[n._v("material")])])]),o("div",{staticClass:"fill-row-loading d-flex align-items-center justify-content-center"},n._l(n.types,function(t){return o("div",{key:t,staticClass:"vs-con-loading__container loading-example",class:{activeLoading:n.activeLoading},attrs:{id:["loading-"+t]},on:{click:function(o){return n.openLoading2(t)}}})}),0),o("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:n.loadingtype},on:{"update:active":function(t){n.loadingtype=t}}},[o("vs-prism",[n._v('\n          <template lang="html">\n          <div class="demo-alignment">\n          <div class="fill-row-loading">\n          <div :class="{\'activeLoading\':activeLoading}" @click="openLoading(type)" v-for="type in types" :id="[`loading-${type}`]" class="vs-con-loading__container loading-example">\n          </div>\n          </div>\n          </div>\n          </template>\n          <script>\n          export default {\n          data:()=>({\n          types:[\n          \'default\',\n          \'point\',\n          \'radius\',\n          \'corners\',\n          \'border\',\n          \'sound\',\n          \'material\',\n          ],\n          activeLoading:false,\n          }),\n          mounted(){\n          this.types.forEach((type)=>{\n          this.$vs.loading({\n          container: `#loading-${type}`,\n          type,\n          text:type\n          })\n          })\n          },\n          methods:{\n          openLoading(type){\n          this.activeLoading = true\n          this.$vs.loading({\n          type:type,\n          })\n          setTimeout( ()=> {\n          this.activeLoading = false\n          this.$vs.loading.close()\n          }, 3000);\n          },\n          }\n          }\n          <\/script>\n          <style lang="scss">\n          .fill-row-loading {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-wrap: wrap;\n          .loading-example {\n          width: 120px;\n          float: left;\n          height: 120px;\n          box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);\n          border-radius: 10px;\n          margin: 8px;\n          transition: all 0.3s ease;\n          cursor: pointer;\n          &:hover {\n          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);\n          transform: translate(0, 4px);\n          }\n          h4 {\n          z-index: 40000;\n          position: relative;\n          text-align: center;\n          padding: 10px;\n          }\n          &.activeLoading {\n          opacity: 0 !important;\n          transform: scale(0.5);\n          }\n          }\n          }\n          </style>\n        ')])],1)],1),o("vs-card",[o("h3",{staticClass:"card-title d-flex"},[n._v("\n        Loading Color\n        "),o("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){n.loadingcolor=!0}}},[o("vs-icon",{attrs:{icon:"code"}})],1)],1),o("p",{staticClass:"card-subtitle"},[n._v("\n        You can change the color of the loading with the property\n        "),o("code",[n._v("color")]),n._v(".\n      ")]),o("div",{},[o("input",{directives:[{name:"model",rawName:"v-model",value:n.colorLoading,expression:"colorLoading"}],attrs:{type:"color",name:"",value:""},domProps:{value:n.colorLoading},on:{input:function(t){t.target.composing||(n.colorLoading=t.target.value)}}}),o("vs-button",{staticClass:"ml-3",attrs:{type:"gradient",color:"primary"},on:{click:n.openLoadingColor}},[n._v("Primary")])],1),o("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:n.loadingcolor},on:{"update:active":function(t){n.loadingcolor=t}}},[o("vs-prism",[n._v('\n          <template lang="html">\n          <div class="centerx">\n          <input type="color" v-model="colorLoading" name="" value="">\n          <vs-button @click="openLoadingColor" type="gradient" color="danger">Danger</vs-button>\n          </div>\n          </template>\n          <script>\n          export default {\n          data(){\n          return {\n          colorLoading:\'#7d0c3f\',\n          }\n          },\n          methods:{\n          openLoadingColor(){\n          this.$vs.loading({color:this.colorLoading})\n          setTimeout( ()=> {\n          this.$vs.loading.close()\n          }, 2000);\n          },\n          }\n          }\n          <\/script>\n        ')])],1)],1),o("vs-card",[o("h3",{staticClass:"card-title d-flex"},[n._v("\n        Loading Backgroundcolor\n        "),o("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){n.loadingbgcolor=!0}}},[o("vs-icon",{attrs:{icon:"code"}})],1)],1),o("p",{staticClass:"card-subtitle"},[n._v("\n        If you need to change the background of the loading, you can use the property\n        "),o("code",[n._v("background")]),n._v(".\n      ")]),o("div",{},[o("input",{directives:[{name:"model",rawName:"v-model",value:n.backgroundLoading,expression:"backgroundLoading"}],attrs:{type:"color",name:"",value:""},domProps:{value:n.backgroundLoading},on:{input:function(t){t.target.composing||(n.backgroundLoading=t.target.value)}}}),o("vs-button",{staticClass:"ml-3",attrs:{type:"gradient",color:"primary"},on:{click:n.openLoadingBackground}},[n._v("Primary")])],1),o("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:n.loadingbgcolor},on:{"update:active":function(t){n.loadingbgcolor=t}}},[o("vs-prism",[n._v('\n          <template lang="html">\n          <div class="centerx">\n          <input type="color" v-model="backgroundLoading" name="" value="">\n          <vs-button @click="openLoadingBackground" type="gradient" color="success">Success</vs-button>\n          </div>\n          </template>\n          <script>\n          export default {\n          data(){\n          return {\n          backgroundLoading:\'#22c16b\',\n          }\n          },\n          methods:{\n          openLoadingBackground(){\n          this.$vs.loading({background:this.backgroundLoading,color:\'rgb(255, 255, 255)\'})\n          setTimeout( ()=> {\n          this.$vs.loading.close()\n          }, 3000);\n          },\n          }\n          }\n          <\/script>\n        ')])],1)],1),o("vs-card",[o("h3",{staticClass:"card-title d-flex"},[n._v("\n        Loading Contained\n        "),o("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){n.containedloading=!0}}},[o("vs-icon",{attrs:{icon:"code"}})],1)],1),o("p",{staticClass:"card-subtitle"},[n._v("\n        To add a loading within a container, call the\n        "),o("code",[n._v("$ vs.loading ()")]),n._v(" global function passing the\n        "),o("code",[n._v("container")]),n._v(" and the\n        "),o("code",[n._v("scale")]),n._v(" parameters. When you want to remove it we have\n        "),o("code",[n._v("$ vs.loading.close ()")]),n._v(", passing the\n        "),o("code",[n._v("same")]),n._v(" container parameter.\n      ")]),o("div",{},[o("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container",attrs:{id:"button-with-loading",type:"relief",vslor:"primary"},on:{click:n.openLoadingContained}},[n._v("Button with Loading")]),o("vs-button",{staticClass:"ml-3",attrs:{type:"relief",vslor:"primary"},on:{click:n.openLoadingInDiv}},[n._v("Div with Loading")]),o("div",{staticClass:"fill-row px-3 py-5 w-25 mt-3 shadow"},[o("div",{staticClass:"vs-con-loading__container",attrs:{id:"div-with-loading"}},[n._v("Load Me!")])])],1),o("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:n.containedloading},on:{"update:active":function(t){n.containedloading=t}}},[o("vs-prism")],1)],1)],1)],1)},i=[],e=(o("ac6a"),{name:"list",data:function(){return{title:"List",defaultloading:!1,loadingtype:!1,types:["default","point","radius","corners","border","sound","material"],activeLoading:!1,loadingcolor:!1,colorLoading:"#2962ff",loadingbgcolor:!1,backgroundLoading:"#2962ff",containedloading:!1}},methods:{openLoading:function(){var n=this;this.$vs.loading(),setTimeout(function(){n.$vs.loading.close()},2e3)},openLoading2:function(n){var t=this;this.activeLoading=!0,this.$vs.loading({type:n}),setTimeout(function(){t.activeLoading=!1,t.$vs.loading.close()},3e3)},openLoadingColor:function(){var n=this;this.$vs.loading({color:this.colorLoading}),setTimeout(function(){n.$vs.loading.close()},2e3)},openLoadingBackground:function(){var n=this;this.$vs.loading({background:this.backgroundLoading,color:"rgb(255, 255, 255)"}),setTimeout(function(){n.$vs.loading.close()},3e3)},openLoadingContained:function(){var n=this;this.$vs.loading({background:this.backgroundLoading,color:this.colorLoading,container:this.refs.loadableButton,scale:.45}),setTimeout(function(){n.$vs.loading.close(n.refs.loadableButton)},3e3)},openLoadingInDiv:function(){var n=this;this.$vs.loading({container:"#div-with-loading",scale:.6}),setTimeout(function(){n.$vs.loading.close("#div-with-loading > .con-vs-loading")},3e3)}},mounted:function(){var n=this;this.types.forEach(function(t){n.$vs.loading({container:"#loading-".concat(t),type:t,text:t})})}}),s=e,l=(o("d390"),o("2877")),c=Object(l["a"])(s,a,i,!1,null,null,null);t["default"]=c.exports},ac6a:function(n,t,o){for(var a=o("cadf"),i=o("0d58"),e=o("2aba"),s=o("7726"),l=o("32e9"),c=o("84f2"),d=o("2b4c"),r=d("iterator"),p=d("toStringTag"),g=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},u=i(v),m=0;m<u.length;m++){var f,h=u[m],L=v[h],y=s[h],b=y&&y.prototype;if(b&&(b[r]||l(b,r,g),b[p]||l(b,p,h),c[h]=g,L))for(f in a)b[f]||e(b,f,a[f],!0)}},d390:function(n,t,o){"use strict";var a=o("fd1c"),i=o.n(a);i.a},fd1c:function(n,t,o){}}]);
//# sourceMappingURL=chunk-bbe587bc.26bb5c97.js.map