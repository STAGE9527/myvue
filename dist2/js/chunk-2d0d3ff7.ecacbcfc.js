(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3ff7"],{"5ec4":function(t,s,l){"use strict";l.r(s);var i=function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("vs-row",{attrs:{"vs-justify":"center"}},[l("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-lg":"12","vs-xs":"12"}},[l("vs-card",[l("h3",{staticClass:"card-title d-flex"},[t._v("\n          Default Switch\n          "),l("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){t.defaultswitch=!0}}},[l("vs-icon",{attrs:{icon:"code"}})],1)],1),l("p",{staticClass:"card-subtitle"},[t._v("\n          To implement a switch element in the application, we add the component\n          "),l("code",[t._v("vs-switch")]),t._v(".\n        ")]),l("ul",{staticClass:"list-group list-group-horizontal-lg con-s"},[l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("true / active")]),l("vs-switch",{model:{value:t.switch1,callback:function(s){t.switch1=s},expression:"switch1"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("false / inactive")]),l("vs-switch",{model:{value:t.switch2,callback:function(s){t.switch2=s},expression:"switch2"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("disabled / active")]),l("vs-switch",{attrs:{disabled:"true"},model:{value:t.switch3,callback:function(s){t.switch3=s},expression:"switch3"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("disabled / inactive")]),l("vs-switch",{attrs:{disabled:"true"},model:{value:t.switch4,callback:function(s){t.switch4=s},expression:"switch4"}})],1)]),l("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.defaultswitch},on:{"update:active":function(s){t.defaultswitch=s}}},[l("vs-prism",[t._v('\n            <template lang="html">\n            <ul class="con-s">\n            <li>\n            <label for="">true / active</label>\n            <vs-switch v-model="switch1"/>\n            </li>\n            <li>\n            <label for="">false / inactive</label>\n            <vs-switch v-model="switch2"/>\n            </li>\n            <li>\n            <label for="">disabled / active</label>\n            <vs-switch disabled="true" v-model="switch3"/>\n            </li>\n            <li>\n            <label for="">disabled / inactive</label>\n            <vs-switch disabled="true" v-model="switch4"/>\n            </li>\n            </ul>\n            </template>\n            <script>\n            export default {\n            data(){\n            return {\n            switch1:true,\n            switch2:false,\n            switch3:true,\n            switch4:false,\n            }\n            }\n            }\n            <\/script>\n          ')])],1)],1),l("vs-card",[l("h3",{staticClass:"card-title d-flex"},[t._v("\n          Color Switch\n          "),l("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){t.colorswitch=!0}}},[l("vs-icon",{attrs:{icon:"code"}})],1)],1),l("p",{staticClass:"card-subtitle"},[t._v("You can choose the default Switch. You are able to use the Main Colors or RGB and HEX colors.")]),l("ul",{staticClass:"list-group list-group-horizontal-lg con-s"},[l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Primary")]),l("vs-switch",{model:{value:t.color1,callback:function(s){t.color1=s},expression:"color1"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Success")]),l("vs-switch",{attrs:{color:"success"},model:{value:t.color2,callback:function(s){t.color2=s},expression:"color2"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Danger")]),l("vs-switch",{attrs:{color:"danger"},model:{value:t.color3,callback:function(s){t.color3=s},expression:"color3"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Warning")]),l("vs-switch",{attrs:{color:"warning"},model:{value:t.color4,callback:function(s){t.color4=s},expression:"color4"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Dark")]),l("vs-switch",{attrs:{color:"Dark"},model:{value:t.color5,callback:function(s){t.color5=s},expression:"color5"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("\n              Color:\n              "),l("span",[t._v(t._s(t.color))])]),l("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],staticClass:"mr-2",attrs:{type:"color"},domProps:{value:t.color},on:{input:function(s){s.target.composing||(t.color=s.target.value)}}}),l("vs-switch",{attrs:{color:t.color},model:{value:t.color6,callback:function(s){t.color6=s},expression:"color6"}})],1)]),l("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.colorswitch},on:{"update:active":function(s){t.colorswitch=s}}},[l("vs-prism",[t._v('\n            <ul class="list-group list-group-horizontal-lg con-s">\n            <li class="list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center">\n            <label for="" class="mr-2 mb-0">Primary</label>\n            <vs-switch v-model="color1"/>\n            </li>\n            <li class="list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center">\n            <label for="" class="mr-2 mb-0">Success</label>\n            <vs-switch color="success" v-model="color2"/>\n            </li>\n            <li class="list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center">\n            <label for="" class="mr-2 mb-0">Danger</label>\n            <vs-switch color="danger" v-model="color3"/>\n            </li>\n            <li class="list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center">\n            <label for="" class="mr-2 mb-0">Warning</label>\n            <vs-switch color="warning" v-model="color4"/>\n            </li>\n            <li class="list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center">\n            <label for="" class="mr-2 mb-0">Dark</label>\n            <vs-switch color="Dark" v-model="color5"/>\n            </li>\n            <li class="list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center">\n            <label for="" class="mr-2 mb-0">Color: <span>'+t._s(t.color)+'</span></label>\n            <input v-model="color" type="color" class="mr-2">\n            <vs-switch :color="color" v-model="color6"/>\n            </li>\n            </ul>\n          ')])],1)],1),l("vs-card",[l("h3",{staticClass:"card-title d-flex"},[t._v("\n          Text Switch\n          "),l("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){t.textswitch=!0}}},[l("vs-icon",{attrs:{icon:"code"}})],1)],1),l("p",{staticClass:"card-subtitle"},[t._v("\n          You can add a descriptive text with the slot\n          "),l("code",[t._v("on")]),t._v(" or\n          "),l("code",[t._v("off")]),t._v(". You can also join the text with the icons.\n        ")]),l("ul",{staticClass:"list-group list-group-horizontal-lg con-s"},[l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{model:{value:t.text1,callback:function(s){t.text1=s},expression:"text1"}},[l("span",{attrs:{slot:"on"},slot:"on"},[t._v("On")]),l("span",{attrs:{slot:"off"},slot:"off"},[t._v("Off")])])],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{attrs:{color:"success"},model:{value:t.text2,callback:function(s){t.text2=s},expression:"text2"}},[l("span",{attrs:{slot:"on"},slot:"on"},[t._v("Accept")]),l("span",{attrs:{slot:"off"},slot:"off"},[t._v("Cancel")])])],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{attrs:{color:"danger","vs-icon-off":"close"},model:{value:t.text3,callback:function(s){t.text3=s},expression:"text3"}},[l("span",{attrs:{slot:"on"},slot:"on"},[t._v("Remove")])])],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{attrs:{color:"warning","vs-icon-on":"error_outline"},model:{value:t.text4,callback:function(s){t.text4=s},expression:"text4"}},[l("span",{attrs:{slot:"off"},slot:"off"},[t._v("Prevent")])])],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{attrs:{color:"dark","vs-icon-on":"check_box","vs-icon-off":"block"},model:{value:t.text5,callback:function(s){t.text5=s},expression:"text5"}},[l("span",{attrs:{slot:"on"},slot:"on"},[t._v("YES")]),l("span",{attrs:{slot:"off"},slot:"off"},[t._v("NO")])])],1)]),l("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.textswitch},on:{"update:active":function(s){t.textswitch=s}}},[l("vs-prism",[t._v('\n            <template lang="html">\n            <div class="centex">\n            <vs-switch v-model="switch1">\n            <span slot="on">On</span>\n            <span slot="off">Off</span>\n            </vs-switch>\n            <vs-switch color="success" v-model="switch2">\n            <span slot="on">Accept</span>\n            <span slot="off">Cancel</span>\n            </vs-switch>\n            <vs-switch color="danger" vs-icon-off="close" v-model="switch3">\n            <span slot="on">Remove</span>\n            </vs-switch>\n            <vs-switch color="warning" vs-icon-on="error_outline" v-model="switch4">\n            <span slot="off">Prevent</span>\n            </vs-switch>\n            <vs-switch color="dark" vs-icon-on="check_box" vs-icon-off="block" v-model="switch5">\n            <span slot="on">YES</span>\n            <span slot="off">NO</span>\n            </vs-switch>\n            </div>\n            </template>\n            <script>\n            export default {\n            data(){\n            return {\n            switch1:true,\n            switch2:true,\n            switch3:true,\n            switch4:true,\n            switch5:true,\n            }\n            }\n            }\n            <\/script>\n          ')])],1)],1),l("vs-card",[l("h3",{staticClass:"card-title d-flex"},[t._v("\n          Icon Switch\n          "),l("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){t.iconswitch=!0}}},[l("vs-icon",{attrs:{icon:"code"}})],1)],1),l("p",{staticClass:"card-subtitle"},[t._v("\n          We can add a representative icon inside our switch with the property\n          "),l("code",[t._v("vs-icon")]),t._v(". If you only need to add the icon in one of the states you can do it with the property\n          "),l("code",[t._v("vs-icon-on")]),t._v(" or\n          "),l("code",[t._v("vs-icon-off")])]),l("ul",{staticClass:"list-group list-group-horizontal-lg con-s"},[l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Primary")]),l("vs-switch",{attrs:{"vs-icon-off":"notifications_none","vs-icon-on":"done"},model:{value:t.icon1,callback:function(s){t.icon1=s},expression:"icon1"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Success")]),l("vs-switch",{attrs:{color:"success","vs-icon":"done"},model:{value:t.icon2,callback:function(s){t.icon2=s},expression:"icon2"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Danger")]),l("vs-switch",{attrs:{color:"danger","vs-icon":"close"},model:{value:t.icon3,callback:function(s){t.icon3=s},expression:"icon3"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Warning")]),l("vs-switch",{attrs:{color:"warning","vs-icon":"error_outline"},model:{value:t.icon4,callback:function(s){t.icon4=s},expression:"icon4"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("Dark")]),l("vs-switch",{attrs:{color:"dark","vs-icon":"volume_off"},model:{value:t.icon5,callback:function(s){t.icon5=s},expression:"icon5"}})],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("label",{staticClass:"mr-2 mb-0",attrs:{for:""}},[t._v("rgb(color) / #color")]),l("vs-switch",{attrs:{color:"rgb(51, 53, 83)","vs-icon":"photo_camera"},model:{value:t.icon6,callback:function(s){t.icon6=s},expression:"icon6"}})],1)]),l("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.iconswitch},on:{"update:active":function(s){t.iconswitch=s}}},[l("vs-prism",[t._v('\n            <template lang="html">\n            <ul class="con-s">\n            <li>\n            <label for="">Primary</label>\n            <vs-switch v-model="switch1" vs-icon-off="notifications_none" vs-icon-on="done"/>\n            </li>\n            <li>\n            <label for="">Success</label>\n            <vs-switch color="success" v-model="switch2" vs-icon="done"/>\n            </li>\n            <li>\n            <label for="">Danger</label>\n            <vs-switch color="danger" v-model="switch3" vs-icon="close"/>\n            </li>\n            <li>\n            <label for="">Warning</label>\n            <vs-switch color="warning" v-model="switch4" vs-icon="error_outline"/>\n            </li>\n            <li>\n            <label for="">Dark</label>\n            <vs-switch color="dark" v-model="switch5" vs-icon="volume_off"/>\n            </li>\n            <li>\n            <label for="">rgb(color) / #color</label>\n            <vs-switch color="rgb(51, 53, 83)" v-model="switch6" vs-icon="photo_camera"/>\n            </li>\n            </ul>\n            </template>\n            <script>\n            export default {\n            data(){\n            return {\n            switch1:false,\n            switch2:false,\n            switch3:false,\n            switch4:false,\n            switch5:false,\n            switch6:false\n            }\n            }\n            }\n            <\/script>\n          ')])],1)],1),l("vs-card",[l("h3",{staticClass:"card-title d-flex"},[t._v("\n          Array Value Switch\n          "),l("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){t.arrayswitch=!0}}},[l("vs-icon",{attrs:{icon:"code"}})],1)],1),l("p",{staticClass:"card-subtitle"},[t._v("For saving the values in an array, you could simply pass it as a value.")]),l("div",{staticClass:"d-flex align-items-center"},[l("div",{staticClass:"p-3 shadow modelx mb-3 mb-md-0 w-25 font-weight-bold"},[t._v(t._s(t.switchArray))]),l("ul",{staticClass:"list-group list-group-horizontal-lg con-s ml-3"},[l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{attrs:{"vs-type":"success","vs-value":"luis"},model:{value:t.switchArray,callback:function(s){t.switchArray=s},expression:"switchArray"}},[t._v("Luis")])],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{attrs:{"vs-type":"success","vs-value":"carols"},model:{value:t.switchArray,callback:function(s){t.switchArray=s},expression:"switchArray"}},[t._v("Carols")])],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{attrs:{"vs-type":"success","vs-value":"summer"},model:{value:t.switchArray,callback:function(s){t.switchArray=s},expression:"switchArray"}},[t._v("Summer")])],1),l("li",{staticClass:"list-group-item rounded-0 py-2 list-group-item rounded-0 py-2 d-flex align-items-center"},[l("vs-switch",{attrs:{"vs-type":"success","vs-value":"lyon"},model:{value:t.switchArray,callback:function(s){t.switchArray=s},expression:"switchArray"}},[t._v("Lyon")])],1)])]),l("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.arrayswitch},on:{"update:active":function(s){t.arrayswitch=s}}},[l("vs-prism",[t._v('\n            <template lang="html">\n            <ul class="ul">\n            <li class="modelx">\n            '+t._s(t.switchArray)+'\n            </li>\n            <li>\n            <vs-switch vs-type="success" v-model="switchArray" vs-value="luis">Luis</vs-switch>\n            </li>\n            <li>\n            <vs-switch vs-type="success" v-model="switchArray" vs-value="carols">Carols</vs-switch>\n            </li>\n            <li>\n            <vs-switch vs-type="success" v-model="switchArray" vs-value="summer">Summer</vs-switch>\n            </li>\n            <li>\n            <vs-switch vs-type="success" v-model="switchArray" vs-value="lyon">Lyon</vs-switch>\n            </li>\n            </ul>\n            </template>\n            <script>\n            export default {\n            data(){\n            return {\n            switchArray:[\'luis\'],\n            }\n            }\n            }\n            <\/script>\n          ')])],1)],1)],1)],1)},e=[],o={name:"switch",data:function(){return{title:"Switch",defaultswitch:!1,switch1:!0,switch2:!1,switch3:!0,switch4:!1,colorswitch:!1,color:"#5a3cc4",color1:!0,color2:!0,color3:!0,color4:!0,color5:!0,color6:!0,textswitch:!1,text1:!0,text2:!0,text3:!0,text4:!0,text5:!0,iconswitch:!1,icon1:!1,icon2:!1,icon3:!1,icon4:!1,icon5:!1,icon6:!1,arrayswitch:!1,switchArray:["luis"]}}},n=o,c=l("2877"),a=Object(c["a"])(n,i,e,!1,null,null,null);s["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0d3ff7.ecacbcfc.js.map