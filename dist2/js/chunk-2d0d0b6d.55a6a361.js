(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0b6d"],{"68c8":function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("vs-row",{attrs:{"vs-justify":"center"}},[s("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-lg":"12","vs-xs":"12"}},[s("vs-card",[s("h3",{staticClass:"card-title d-flex"},[a._v("\n          Default Tabs\n          "),s("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){a.defaulttabs=!0}}},[s("vs-icon",{attrs:{icon:"code"}})],1)],1),s("p",{staticClass:"card-subtitle"},[a._v("\n          To implement a tabs, use the\n          "),s("code",[a._v("vs-tabs")]),a._v(" component. It must include\n          "),s("code",[a._v("vs-tab")]),a._v(" child components that represent each tab.\n        ")]),s("vs-tabs",[s("vs-tab",{attrs:{label:"Home"}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("Home")])]),s("vs-tab",{attrs:{label:"Service"}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("Service")])]),s("vs-tab",{attrs:{label:"login"}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("login")])]),s("vs-tab",{attrs:{disabled:"",label:"Disabled"}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("Disabled")])]),s("vs-tab",{attrs:{label:"Lorem ipsum dolor sit amet"}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("Lorem ipsum dolor sit amet")])])],1),s("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:a.defaulttabs},on:{"update:active":function(t){a.defaulttabs=t}}},[s("vs-prism",[a._v('\n            <template lang="html">\n            <div class="">\n            <vs-tabs>\n            <vs-tab label="Home">\n            <div class="con-tab-ejemplo">\n            Home\n            </div>\n            </vs-tab>\n            <vs-tab label="Service">\n            <div class="con-tab-ejemplo">\n            Service\n            </div>\n            </vs-tab>\n            <vs-tab label="login">\n            <div class="con-tab-ejemplo">\n            login\n            </div>\n            </vs-tab>\n            <vs-tab disabled label="Disabled">\n            <div class="con-tab-ejemplo">\n            Disabled\n            </div>\n            </vs-tab>\n            <vs-tab label="Lorem ipsum dolor sit amet">\n            <div class="con-tab-ejemplo">\n            Lorem ipsum dolor sit amet\n            </div>\n            </vs-tab>\n            </vs-tabs>\n            </div>\n            </template>\n          ')])],1)],1),s("vs-card",[s("h3",{staticClass:"card-title d-flex"},[a._v("\n          Color Tabs\n          "),s("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){a.colortabs=!0}}},[s("vs-icon",{attrs:{icon:"code"}})],1)],1),s("p",{staticClass:"card-subtitle"},[a._v("\n          You can change the color of the component with the property\n          "),s("code",[a._v("color")]),a._v(", the parameter allows the main colors and HEX or RGB\n        ")]),s("vs-tabs",{attrs:{color:a.colorx}},[s("vs-tab",{attrs:{label:"Success"},on:{click:function(t){a.colorx="success"}}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("Success")])]),s("vs-tab",{attrs:{label:"Danger"},on:{click:function(t){a.colorx="danger"}}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("Danger")])]),s("vs-tab",{attrs:{label:"Warning"},on:{click:function(t){a.colorx="warning"}}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("Warning")])]),s("vs-tab",{attrs:{label:"Dark"},on:{click:function(t){a.colorx="dark"}}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("Dark")])]),s("vs-tab",{attrs:{label:"RGB | HEX"},on:{click:function(t){a.colorx="rgb(16, 233, 179)"}}},[s("div",{staticClass:"con-tab-ejemplo"},[a._v("RGB | HEX")])])],1),s("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:a.colortabs},on:{"update:active":function(t){a.colortabs=t}}},[s("vs-prism",[a._v('\n            <template lang="html">\n            <div>\n            <vs-tabs :color="colorx">\n            <vs-tab @click="colorx = \'success\'" label="Success">\n            <div class="con-tab-ejemplo">\n            Success\n            </div>\n            </vs-tab>\n            <vs-tab @click="colorx = \'danger\'" label="Danger">\n            <div class="con-tab-ejemplo">\n            Danger\n            </div>\n            </vs-tab>\n            <vs-tab @click="colorx = \'warning\'" label="Warning">\n            <div class="con-tab-ejemplo">\n            Warning\n            </div>\n            </vs-tab>\n            <vs-tab @click="colorx = \'dark\'" label="Dark">\n            <div class="con-tab-ejemplo">\n            Dark\n            </div>\n            </vs-tab>\n            <vs-tab @click="colorx = \'rgb(16, 233, 179)\'" label="RGB | HEX">\n            <div class="con-tab-ejemplo">\n            RGB | HEX\n            </div>\n            </vs-tab>\n            </vs-tabs>\n            </div>\n            </template>\n            <script>\n            export default {\n            data:()=>({\n            colorx:\'success\'\n            }),\n            }\n            <\/script>\n          ')])],1)],1),s("vs-card",[s("h3",{staticClass:"card-title d-flex"},[a._v("\n          Alignments Tabs\n          "),s("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){a.aligntabs=!0}}},[s("vs-icon",{attrs:{icon:"code"}})],1)],1),s("p",{staticClass:"card-subtitle"},[a._v("\n          Change the alignment of the buttons with the property alignments. The allowed values are\n        ")]),s("ul",{staticClass:"list-group list-group-horizontal mb-3"},[s("li",{staticClass:"list-group-item rounded-0 py-2"},[s("span",[a._v("center")])]),s("li",{staticClass:"list-group-item rounded-0 py-2"},[s("span",[a._v("right")])]),s("li",{staticClass:"list-group-item rounded-0 py-2"},[s("span",[a._v("fixed")])])]),s("vs-card",[s("h3",[a._v("Default")]),s("hr"),s("vs-tabs",[s("vs-tab",{attrs:{label:"Home"}},[s("div")]),s("vs-tab",{attrs:{label:"Documents"}},[s("div")]),s("vs-tab",{attrs:{label:"Contributors"}},[s("div")]),s("vs-tab",{attrs:{label:"Ecosistem"}},[s("div")])],1),s("h3",[a._v("Center")]),s("hr"),s("vs-tabs",{attrs:{alignment:"center"}},[s("vs-tab",{attrs:{label:"Home"}},[s("div")]),s("vs-tab",{attrs:{label:"Documents"}},[s("div")]),s("vs-tab",{attrs:{label:"Contributors"}},[s("div")]),s("vs-tab",{attrs:{label:"Ecosistem"}},[s("div")])],1),s("h3",[a._v("Right")]),s("hr"),s("vs-tabs",{attrs:{alignment:"right"}},[s("vs-tab",{attrs:{label:"Home"}},[s("div")]),s("vs-tab",{attrs:{label:"Documents"}},[s("div")]),s("vs-tab",{attrs:{label:"Contributors"}},[s("div")]),s("vs-tab",{attrs:{label:"Ecosistem"}},[s("div")])],1),s("h3",[a._v("Fixed")]),s("hr"),s("vs-tabs",{attrs:{alignment:"fixed"}},[s("vs-tab",{attrs:{label:"Home"}},[s("div")]),s("vs-tab",{attrs:{label:"Documents"}},[s("div")]),s("vs-tab",{attrs:{label:"Contributors"}},[s("div")]),s("vs-tab",{attrs:{label:"Ecosistem"}},[s("div")])],1)],1),s("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:a.aligntabs},on:{"update:active":function(t){a.aligntabs=t}}},[s("vs-prism",[a._v('\n            <template lang="html">\n            <div class="">\n            <h3>\n            Default\n            </h3>\n            <vs-tabs>\n            <vs-tab label="Home">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Documents">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Contributors">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Ecosistem">\n            <div>\n            </div>\n            </vs-tab>\n            </vs-tabs>\n            <h3>\n            Center\n            </h3>\n            <vs-tabs alignment="center">\n            <vs-tab label="Home">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Documents">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Contributors">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Ecosistem">\n            <div>\n            </div>\n            </vs-tab>\n            </vs-tabs>\n            <h3>\n            Right\n            </h3>\n            <vs-tabs alignment="right">\n            <vs-tab label="Home">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Documents">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Contributors">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Ecosistem">\n            <div>\n            </div>\n            </vs-tab>\n            </vs-tabs>\n            <h3>\n            Fixed\n            </h3>\n            <vs-tabs alignment="fixed">\n            <vs-tab label="Home">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Documents">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Contributors">\n            <div>\n            </div>\n            </vs-tab>\n            <vs-tab label="Ecosistem">\n            <div>\n            </div>\n            </vs-tab>\n            </vs-tabs>\n            </div>\n            </template>\n          ')])],1)],1),s("vs-card",[s("h3",{staticClass:"card-title d-flex"},[a._v("\n          Position Tabs\n          "),s("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){a.postabs=!0}}},[s("vs-icon",{attrs:{icon:"code"}})],1)],1),s("p",{staticClass:"card-subtitle"},[a._v("\n          You can change the position of the menu with the property\n          "),s("code",[a._v("vs-position")]),a._v(" that as a value you can have:\n          "),s("code",[a._v("top, right,bottom, left")]),a._v(".\n        ")]),s("vs-tabs",{attrs:{color:"rgb(32, 201, 192)"}},[s("vs-tab",{attrs:{label:"Top"}},[s("vs-tabs",[s("vs-tab",{attrs:{label:"Home"}},[s("span",[a._v("Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.")])]),s("vs-tab",{attrs:{label:"Service"}},[s("span",[a._v("Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.")])]),s("vs-tab",{attrs:{label:"login"}},[s("span",[a._v("Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.")])]),s("vs-tab",{attrs:{disabled:"",label:"Disabled"}},[s("span",[a._v("Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.")])])],1)],1),s("vs-tab",{attrs:{label:"Right"}},[s("vs-tabs",{attrs:{position:"right",color:"rgb(29, 55, 194)"}},[s("vs-tab",{attrs:{label:"Home"}},[s("span",[a._v("Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.")])]),s("vs-tab",{attrs:{label:"Service"}},[s("span",[a._v("Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.")])]),s("vs-tab",{attrs:{label:"login"}},[s("span",[a._v("Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.")])]),s("vs-tab",{attrs:{disabled:"",label:"Disabled"}},[s("span",[a._v("Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.")])])],1)],1),s("vs-tab",{attrs:{label:"Bottom"}},[s("vs-tabs",{attrs:{position:"bottom",color:"rgb(29, 55, 194)"}},[s("vs-tab",{attrs:{label:"Home"}},[s("span",[a._v("Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.")])]),s("vs-tab",{attrs:{label:"Service"}},[s("span",[a._v("Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.")])]),s("vs-tab",{attrs:{label:"login"}},[s("span",[a._v("Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.")])]),s("vs-tab",{attrs:{disabled:!0,label:"Disabled"}},[s("span",[a._v("Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.")])])],1)],1),s("vs-tab",{attrs:{label:"Left"}},[s("vs-tabs",{attrs:{position:"left",color:"danger"}},[s("vs-tab",{attrs:{label:"Home"}},[s("span",[a._v("Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.")])]),s("vs-tab",{attrs:{label:"Service"}},[s("span",[a._v("Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.")])]),s("vs-tab",{attrs:{label:"login"}},[s("span",[a._v("Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.")])]),s("vs-tab",{attrs:{disabled:!0,label:"Disabled"}},[s("span",[a._v("Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.")])])],1)],1)],1),s("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:a.postabs},on:{"update:active":function(t){a.postabs=t}}},[s("vs-prism",[a._v('\n            <vs-tabs color="rgb(32, 201, 192)">\n            <vs-tab label="Top">\n            \x3c!-- top --\x3e\n            <vs-tabs color="rgb(201, 32, 178)">\n            <vs-tab label="Home">\n            <span>Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.</span>\n            </vs-tab>\n            <vs-tab label="Service">\n            <span>Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.</span>\n            </vs-tab>\n            <vs-tab label="login">\n            <span>Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.</span>\n            </vs-tab>\n            <vs-tab disabled label="Disabled">\n            <span>Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.</span>\n            </vs-tab>\n            </vs-tabs>\n            </vs-tab>\n            <vs-tab label="Right">\n            \x3c!-- right --\x3e\n            <vs-tabs position="right" color="rgb(29, 55, 194)">\n            <vs-tab label="Home">\n            <span>Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.</span>\n            </vs-tab>\n            <vs-tab label="Service">\n            <span>Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.</span>\n            </vs-tab>\n            <vs-tab label="login">\n            <span>Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.</span>\n            </vs-tab>\n            <vs-tab disabled label="Disabled">\n            <span>Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.</span>\n            </vs-tab>\n            </vs-tabs>\n            </vs-tab>\n            <vs-tab label="Bottom">\n            \x3c!-- bottom --\x3e\n            <vs-tabs position="bottom" color="rgb(29, 55, 194)">\n            <vs-tab label="Home">\n            <span>Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.</span>\n            </vs-tab>\n            <vs-tab label="Service">\n            <span>Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.</span>\n            </vs-tab>\n            <vs-tab label="login">\n            <span>Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.</span>\n            </vs-tab>\n            <vs-tab :disabled="true" label="Disabled">\n            <span>Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.</span>\n            </vs-tab>\n            </vs-tabs>\n            </vs-tab>\n            <vs-tab label="Left">\n            \x3c!-- left --\x3e\n            <vs-tabs position="left" color="danger">\n            <vs-tab label="Home">\n            <span>Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.</span>\n            </vs-tab>\n            <vs-tab label="Service">\n            <span>Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.</span>\n            </vs-tab>\n            <vs-tab label="login">\n            <span>Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.</span>\n            </vs-tab>\n            <vs-tab :disabled="true" label="Disabled">\n            <span>Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.</span>\n            </vs-tab>\n            </vs-tabs>\n            </vs-tab>\n            </vs-tabs>\n          ')])],1)],1),s("vs-card",[s("h3",{staticClass:"card-title d-flex"},[a._v("\n          Icons Tabs\n          "),s("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(t){a.icontabs=!0}}},[s("vs-icon",{attrs:{icon:"code"}})],1)],1),s("p",{staticClass:"card-subtitle"},[a._v("\n          You can add a left icon inside each tab with the property\n          "),s("code",[a._v("icon")]),a._v(" that has the same values as the\n          "),s("code",[a._v("icon")]),a._v(" component.\n        ")]),s("vs-tabs",{attrs:{color:a.colorx2}},[s("vs-tab",{attrs:{label:"Pets",icon:"pets"},on:{click:function(t){a.colorx2="#2962ff"}}}),s("vs-tab",{attrs:{label:"Bank",icon:"account_balance"},on:{click:function(t){a.colorx2="#36bea6"}}}),s("vs-tab",{attrs:{label:"Dashboard",icon:"dashboard"},on:{click:function(t){a.colorx2="#f62d51"}}}),s("vs-tab",{attrs:{label:"Profile",icon:"account_circle"},on:{click:function(t){a.colorx2="#ffbc34"}}})],1),s("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:a.icontabs},on:{"update:active":function(t){a.icontabs=t}}},[s("vs-prism",[a._v('\n            <template lang="html">\n            <div>\n            <vs-tabs :color="colorx">\n            <vs-tab label="Pets" icon="pets" @click="colorx = \'#8B0000\'">\n            </vs-tab>\n            <vs-tab label="Bank" icon="account_balance" @click="colorx = \'#FFA500\'">\n            </vs-tab>\n            <vs-tab label="Dashboard" icon="dashboard" @click="colorx = \'#551A8B\'">\n            </vs-tab>\n            <vs-tab label="Profile" icon="account_circle" @click="colorx = \'#0000FF\'">\n            </vs-tab>\n            </vs-tabs>\n            </div>\n            </template>\n            <script>\n            export default {\n            data:()=>({\n            colorx: \'#8B0000\'\n            })\n            }\n            <\/script>\n            </template>\n          ')])],1)],1)],1)],1)},n=[],l={name:"tabs",data:function(){return{title:"Tabs",defaulttabs:!1,colortabs:!1,colorx:"success",aligntabs:!1,postabs:!1,icontabs:!1,colorx2:"primary"}}},o=l,i=s("2877"),r=Object(i["a"])(o,e,n,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d0b6d.55a6a361.js.map