(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226cdd"],{e9e8:function(t,n,a){"use strict";a.r(n);var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vs-row",{attrs:{"vs-justify":"center"}},[a("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-lg":"12","vs-xs":"12"}},[a("vs-card",[a("h3",{staticClass:"card-title d-flex"},[t._v("\n          Default Pagination\n          "),a("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(n){t.defaultpage=!0}}},[a("vs-icon",{attrs:{icon:"code"}})],1)],1),a("p",{staticClass:"card-subtitle"},[t._v("The pagination component consists of several elements, all of which are optional. So with no extra class, your pagination links will look as follow :")]),a("div",[a("vs-pagination",{attrs:{total:40},model:{value:t.currentx,callback:function(n){t.currentx=n},expression:"currentx"}})],1),a("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.defaultpage},on:{"update:active":function(n){t.defaultpage=n}}},[a("vs-prism",[t._v('\n            <template>\n            <div>\n            <vs-pagination :total="40" v-model="currentx"></vs-pagination>\n            </div>\n            </template>\n            <script>\n            export default {\n            data: () => ({\n            currentx: 14\n            })\n            }\n            <\/script>\n          ')])],1)],1),a("vs-card",[a("h3",{staticClass:"card-title d-flex"},[t._v("\n          Icon Pagination\n          "),a("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(n){t.iconpage=!0}}},[a("vs-icon",{attrs:{icon:"code"}})],1)],1),a("p",{staticClass:"card-subtitle"},[t._v("\n          To customize the previous and next page icons change the value of the\n          "),a("code",[t._v("prev-icon")]),t._v(" and\n          "),a("code",[t._v("prev-icon")]),t._v(" directives. By default, their values are respectively arrow_back and arrow_forward.\n        ")]),a("div",[a("vs-pagination",{attrs:{total:100,"prev-icon":"arrow_back","next-icon":"arrow_forward"},model:{value:t.iconpageination,callback:function(n){t.iconpageination=n},expression:"iconpageination"}})],1),a("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.iconpage},on:{"update:active":function(n){t.iconpage=n}}},[a("vs-prism",[t._v('\n            <template>\n            <div>\n            <vs-pagination :total="100" v-model="currentx" prev-icon="arrow_back" next-icon="arrow_forward"></vs-pagination>\n            </div>\n            </template>\n            <script>\n            export default {\n            data: () => ({\n            currentx: 64\n            })\n            }\n            <\/script>\n          ')])],1)],1),a("vs-card",[a("h3",{staticClass:"card-title d-flex"},[t._v("\n          Limit the amount of links shown\n          "),a("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(n){t.limitpage=!0}}},[a("vs-icon",{attrs:{icon:"code"}})],1)],1),a("p",{staticClass:"card-subtitle"},[t._v("\n          By default Vuesax will show a maximum of 9 links. This default behaviour can be changed by setting the\n          "),a("code",[t._v("max")]),t._v(" directive to a different integer value.\n        ")]),a("div",[a("vs-pagination",{attrs:{total:30,max:13},model:{value:t.limitx,callback:function(n){t.limitx=n},expression:"limitx"}})],1),a("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.limitpage},on:{"update:active":function(n){t.limitpage=n}}},[a("vs-prism",[t._v('\n            <template>\n            <div>\n            <vs-pagination :total="30" v-model="currentx" :max="13"></vs-pagination>\n            </div>\n            </template>\n            <script>\n            export default {\n            data: () => ({\n            currentx: 17\n            })\n            }\n            <\/script>\n          ')])],1)],1),a("vs-card",[a("h3",{staticClass:"card-title d-flex"},[t._v("\n          Goto Pagination\n          "),a("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(n){t.gotopage=!0}}},[a("vs-icon",{attrs:{icon:"code"}})],1)],1),a("p",{staticClass:"card-subtitle"},[t._v("\n          The\n          "),a("code",[t._v("goto")]),t._v(" directive will allow users to directly jump to a desired page.\n        ")]),a("div",[a("vs-pagination",{attrs:{total:20,goto:""},model:{value:t.gotox,callback:function(n){t.gotox=n},expression:"gotox"}})],1),a("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.gotopage},on:{"update:active":function(n){t.gotopage=n}}},[a("vs-prism",[t._v('\n            <template>\n            <div>\n            <vs-pagination :total="20" v-model="currentx" goto ></vs-pagination>\n            </div>\n            </template>\n            <script>\n            export default {\n            data: () => ({\n            currentx: 8\n            })\n            }\n            <\/script>\n          ')])],1)],1),a("vs-card",[a("h3",{staticClass:"card-title d-flex"},[t._v("\n          Color Pagination\n          "),a("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(n){t.colorpage=!0}}},[a("vs-icon",{attrs:{icon:"code"}})],1)],1),a("p",{staticClass:"card-subtitle"},[t._v("\n          You can change the color of the component with the property\n          "),a("code",[t._v("color")]),t._v(", you can use the Main colors or RGB and HEX colors\n        ")]),a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.colorx,expression:"colorx"}],staticClass:"input-color mr-3",attrs:{type:"color"},domProps:{value:t.colorx},on:{input:function(n){n.target.composing||(t.colorx=n.target.value)}}}),a("vs-pagination",{attrs:{color:t.colorx,total:20},model:{value:t.colorp,callback:function(n){t.colorp=n},expression:"colorp"}})],1),a("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.colorpage},on:{"update:active":function(n){t.colorpage=n}}},[a("vs-prism",[t._v('\n            <template lang="html">\n            <div class="centerx">\n            <input class="input-color" v-model="colorx" type="color">\n            <vs-pagination :color="colorx" :total="20" v-model="currentx"></vs-pagination>\n            </div>\n            </template>\n            <script>\n            export default {\n            data: ()=>({\n            colorx: \'#f91f43\',\n            currentx: 7\n            })\n            }\n            <\/script>\n          ')])],1)],1),a("vs-card",[a("h3",{staticClass:"card-title d-flex"},[t._v("\n          Programmatic Inc/Dec Pagination\n          "),a("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(n){t.colorpage=!0}}},[a("vs-icon",{attrs:{icon:"code"}})],1)],1),a("p",{staticClass:"card-subtitle"},[t._v("You can also update page number from outside of pagination component.")]),a("div",{staticClass:"btn-alignment"},[a("p",[t._v("Current: "+t._s(t.currentx))]),a("vs-button",{on:{click:function(n){t.currentx++}}},[t._v("Increment")]),a("vs-button",{on:{click:function(n){t.currentx--}}},[t._v("Decrement")]),a("br"),a("br"),a("vs-pagination",{attrs:{total:20},model:{value:t.icdec,callback:function(n){t.icdec=n},expression:"icdec"}})],1),a("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.colorpage},on:{"update:active":function(n){t.colorpage=n}}},[a("vs-prism",[t._v("\n            <template>\n            <div>\n            <p>Current: "+t._s(t.currentx)+'</p>\n            <vs-button @click="currentx++">Increment</vs-button>\n            <vs-button @click="currentx--">Decrement</vs-button>\n            <br><br>\n            <vs-pagination :total="20" v-model="currentx"></vs-pagination>\n            </div>\n            </template>\n            <script>\n            export default {\n            data: () => ({\n            currentx: 5\n            })\n            }\n            <\/script>\n          ')])],1)],1)],1)],1)},e=[],i={name:"pagination",data:function(){return{title:"Pagination",defaultpage:!1,currentx:14,iconpage:!1,iconpageination:64,limitpage:!1,limitx:17,gotopage:!1,gotox:12,colorpage:!1,colorx:"#f91f43",colorp:7,icdec:5}}},c=i,s=a("2877"),l=Object(s["a"])(c,o,e,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d226cdd.b5ea2f8a.js.map