(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22ce55"],{f4d5:function(l,s,e){"use strict";e.r(s);var t=function(){var l=this,s=l.$createElement,e=l._self._c||s;return e("vs-row",{attrs:{"vs-justify":"center"}},[e("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-lg":"12","vs-xs":"12"}},[e("vs-card",[e("h3",{staticClass:"card-title d-flex"},[l._v("\n        Default Inputs\n        "),e("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){l.defaulinputs=!0}}},[e("vs-icon",{attrs:{icon:"code"}})],1)],1),e("p",{staticClass:"card-subtitle"},[l._v("\n        The input is a functional part in an application, For implementing it we have the\n        "),e("code",[l._v("vs-input")]),l._v(" component.\n      ")]),e("div",{staticClass:"default-input d-flex align-items-center"},[e("vs-input",{staticClass:"inputx",attrs:{placeholder:"Placeholder"},model:{value:l.value1,callback:function(s){l.value1=s},expression:"value1"}}),e("vs-input",{staticClass:"inputx ml-3",attrs:{disabled:"",placeholder:"Disabled"},model:{value:l.value2,callback:function(s){l.value2=s},expression:"value2"}})],1),e("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:l.defaulinputs},on:{"update:active":function(s){l.defaulinputs=s}}},[e("vs-prism",[l._v('\n          <div class="default-input d-flex align-items-center">\n          <vs-input class="inputx" placeholder="Placeholder" v-model="value1"/>\n          <vs-input disabled class="inputx ml-3" placeholder="Disabled" v-model="value2"/>\n          </div>\n        ')])],1)],1),e("vs-card",[e("h3",{staticClass:"card-title d-flex"},[l._v("\n        Input Label\n        "),e("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){l.inputlabel=!0}}},[e("vs-icon",{attrs:{icon:"code"}})],1)],1),e("p",{staticClass:"card-subtitle"},[l._v("\n        Add a label to the input with the property\n        "),e("code",[l._v("label")]),l._v(".\n      ")]),e("div",{staticClass:"default-input d-flex align-items-center"},[e("vs-input",{staticClass:"inputx",attrs:{label:"Name",placeholder:"Placeholder"},model:{value:l.fname,callback:function(s){l.fname=s},expression:"fname"}}),e("vs-input",{staticClass:"inputx ml-3",attrs:{type:"password",label:"Password",placeholder:"Password"},model:{value:l.password,callback:function(s){l.password=s},expression:"password"}})],1),e("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:l.inputlabel},on:{"update:active":function(s){l.inputlabel=s}}},[e("vs-prism",[l._v('\n          <div class="default-input d-flex align-items-center">\n          <vs-input label="Name" class="inputx" placeholder="Placeholder" v-model="fname"/>\n          <vs-input type="password" label="Password" class="inputx ml-3" placeholder="Password" v-model="password"/>\n          </div>\n        ')])],1)],1),e("vs-card",[e("h3",{staticClass:"card-title d-flex"},[l._v("\n        Input Label Placehlder\n        "),e("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){l.inputlabelplace=!0}}},[e("vs-icon",{attrs:{icon:"code"}})],1)],1),e("p",{staticClass:"card-subtitle"},[l._v("\n        The placeholder can become a label when the input is focused. Use the property\n        "),e("code",[l._v("label-placeholder")]),l._v(" for making this.\n      ")]),e("div",{staticClass:"default-input d-flex align-items-center"},[e("vs-input",{attrs:{"label-placeholder":"Label-placeholder"},model:{value:l.lp1,callback:function(s){l.lp1=s},expression:"lp1"}}),e("vs-input",{staticClass:"ml-3",attrs:{disabled:"true","label-placeholder":"Label-placeholder-disabled"},model:{value:l.lp2,callback:function(s){l.lp2=s},expression:"lp2"}})],1),e("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:l.inputlabelplace},on:{"update:active":function(s){l.inputlabelplace=s}}},[e("vs-prism",[l._v('\n          <div class="default-input d-flex align-items-center">\n          <vs-input label-placeholder="Label-placeholder" v-model="lp1"/>\n          <vs-input disabled="true" class="ml-3" label-placeholder="Label-placeholder-disabled" v-model="lp2"/>\n          </div>\n        ')])],1)],1),e("vs-card",[e("h3",{staticClass:"card-title d-flex"},[l._v("\n        Input with Icons\n        "),e("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){l.inputicon=!0}}},[e("vs-icon",{attrs:{icon:"code"}})],1)],1),e("p",{staticClass:"card-subtitle"},[l._v("\n        The input can have icons. Use the property\n        "),e("code",[l._v("icon")]),l._v(". You can also also manipulate the icon's position with the property\n        "),e("code",[l._v("icon-after")]),l._v(".\n      ")]),e("vs-row",[e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{staticClass:"mt-0",attrs:{icon:"search",placeholder:"Search"},model:{value:l.inputicon1,callback:function(s){l.inputicon1=s},expression:"inputicon1"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{staticClass:"mt-3 mt-md-0",attrs:{"icon-after":"true","label-placeholder":"icon-after",icon:"mode_edit",placeholder:"Nombre"},model:{value:l.inputicon2,callback:function(s){l.inputicon2=s},expression:"inputicon2"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{staticClass:"mt-3 mt-md-0",attrs:{icon:"add","label-placeholder":"Label-placeholder"},model:{value:l.inputicon3,callback:function(s){l.inputicon3=s},expression:"inputicon3"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{staticClass:"mt-3",attrs:{"icon-after":"true",icon:"shopping_cart","label-placeholder":"Label-placeholder"},model:{value:l.inputicon4,callback:function(s){l.inputicon4=s},expression:"inputicon4"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{staticClass:"mt-3",attrs:{disabled:"true",icon:"error_outline","label-placeholder":"icon-disabled"},model:{value:l.inputicon5,callback:function(s){l.inputicon5=s},expression:"inputicon5"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{staticClass:"mt-3",attrs:{"icon-after":"true",disabled:"true",icon:"email","label-placeholder":"icon-disabled"},model:{value:l.inputicon6,callback:function(s){l.inputicon6=s},expression:"inputicon6"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{staticClass:"mt-3",attrs:{"icon-no-border":"",icon:"account_circle","label-placeholder":"icon-no-border"},model:{value:l.inputicon7,callback:function(s){l.inputicon7=s},expression:"inputicon7"}})],1)],1),e("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:l.inputicon},on:{"update:active":function(s){l.inputicon=s}}},[e("vs-prism",[l._v('\n          <vs-row>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input icon="search" placeholder="Search" class="mt-0" v-model="inputicon1"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input icon-after="true" label-placeholder="icon-after" class="mt-3 mt-md-0" icon="mode_edit" placeholder="Nombre" v-model="inputicon2"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input icon="add" label-placeholder="Label-placeholder" class="mt-3 mt-md-0" v-model="inputicon3"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input icon-after="true" icon="shopping_cart" class="mt-3" label-placeholder="Label-placeholder" v-model="inputicon4"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input disabled="true" icon="error_outline" class="mt-3" label-placeholder="icon-disabled" v-model="inputicon5"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input icon-after="true" disabled="true" class="mt-3" icon="email" label-placeholder="icon-disabled" v-model="inputicon6"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input icon-no-border icon="account_circle" class="mt-3" label-placeholder="icon-no-border" v-model="inputicon7"/>\n          </vs-col>\n          </vs-row>\n        ')])],1)],1),e("vs-card",[e("h3",{staticClass:"card-title d-flex"},[l._v("\n        Input with Colors\n        "),e("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){l.inputcolor=!0}}},[e("vs-icon",{attrs:{icon:"code"}})],1)],1),e("p",{staticClass:"card-subtitle"},[l._v("\n        You can change the color of the borders when the focus the input with the property\n        "),e("code",[l._v("color")]),l._v(". You are able to use the Main Colors or RGB and HEX colors.\n      ")]),e("vs-row",[e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{"label-placeholder":"Default"},model:{value:l.colorinput1,callback:function(s){l.colorinput1=s},expression:"colorinput1"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{color:"success","label-placeholder":"Success"},model:{value:l.colorinput2,callback:function(s){l.colorinput2=s},expression:"colorinput2"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{color:"danger","label-placeholder":"Danger"},model:{value:l.colorinput3,callback:function(s){l.colorinput3=s},expression:"colorinput3"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{color:"warning","label-placeholder":"Warning"},model:{value:l.colorinput4,callback:function(s){l.colorinput4=s},expression:"colorinput4"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{color:"dark","label-placeholder":"Dark"},model:{value:l.colorinput5,callback:function(s){l.colorinput5=s},expression:"colorinput5"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{color:"rgb(213, 14, 151)","label-placeholder":"RGB: rgb(213, 14, 151)"},model:{value:l.colorinput6,callback:function(s){l.colorinput6=s},expression:"colorinput6"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{color:"#11e988","label-placeholder":"HEX: #11e988"},model:{value:l.colorinput7,callback:function(s){l.colorinput7=s},expression:"colorinput7"}})],1)],1),e("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:l.inputcolor},on:{"update:active":function(s){l.inputcolor=s}}},[e("vs-prism",[l._v('\n          <vs-row>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input label-placeholder="Default" v-model="colorinput1"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input color="success" label-placeholder="Success" v-model="colorinput2"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input color="danger" label-placeholder="Danger" v-model="colorinput3"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input color="warning" label-placeholder="Warning" v-model="colorinput4"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input color="dark" label-placeholder="Dark" v-model="colorinput5"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="colorinput6"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input color="#11e988" label-placeholder="HEX: #11e988" v-model="colorinput7"/>\n          </vs-col>\n          </vs-row>\n        ')])],1)],1),e("vs-card",[e("h3",{staticClass:"card-title d-flex"},[l._v("\n        Input with Validation\n        "),e("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){l.inputvalidation=!0}}},[e("vs-icon",{attrs:{icon:"code"}})],1)],1),e("p",{staticClass:"card-subtitle"},[l._v("\n        You can add a state for example of in affirmative response to a validation with\n        "),e("code",[l._v("success")]),l._v(" and if it is necessary to add a description or help to the user you can do it with the property\n        "),e("code",[l._v("description")])]),e("vs-row",[e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{success:!0,"success-text":"The mail is valid",placeholder:"Email Success","val-icon-success":"done"},model:{value:l.value1,callback:function(s){l.value1=s},expression:"value1"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{danger:!0,"danger-text":"The password does not meet the standards",placeholder:"Password Danger","val-icon-danger":"clear"},model:{value:l.value2,callback:function(s){l.value2=s},expression:"value2"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{warning:!0,"warning-text":"The entered data could not be verified",placeholder:"Date Warning","val-icon-warning":"warning"},model:{value:l.value3,callback:function(s){l.value3=s},expression:"value3"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{"description-text":"Just enter the first two numbers of your phone",placeholder:"Phone Description"},model:{value:l.value4,callback:function(s){l.value4=s},expression:"value4"}})],1)],1),e("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:l.inputvalidation},on:{"update:active":function(s){l.inputvalidation=s}}},[e("vs-prism",[l._v('\n          <vs-row>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input\n          :success="true"\n          success-text="The mail is valid"\n          placeholder="Email Success"\n          val-icon-success="done"\n          v-model="value1"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input\n          :danger="true"\n          danger-text="The password does not meet the standards"\n          placeholder="Password Danger"\n          val-icon-danger="clear"\n          v-model="value2"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input\n          :warning="true"\n          warning-text="The entered data could not be verified"\n          placeholder="Date Warning"\n          val-icon-warning="warning"\n          v-model="value3"/>\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input\n          description-text="Just enter the first two numbers of your phone"\n          placeholder="Phone Description"\n          v-model="value4"/>\n          </vs-col>\n          </vs-row>\n        ')])],1)],1),e("vs-card",[e("h3",{staticClass:"card-title d-flex"},[l._v("\n        Input with Size\n        "),e("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(s){l.inputsize=!0}}},[e("vs-icon",{attrs:{icon:"code"}})],1)],1),e("vs-row",[e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{size:"large",placeholder:"Size large"},model:{value:l.inputsize1,callback:function(s){l.inputsize1=s},expression:"inputsize1"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{size:"default",placeholder:"Size default"},model:{value:l.inputsize2,callback:function(s){l.inputsize2=s},expression:"inputsize2"}})],1),e("vs-col",{attrs:{"vs-lg":"4","vs-xs":"12"}},[e("vs-input",{attrs:{size:"small",placeholder:"Size small"},model:{value:l.inputsize3,callback:function(s){l.inputsize3=s},expression:"inputsize3"}})],1)],1),e("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:l.inputsize},on:{"update:active":function(s){l.inputsize=s}}},[e("vs-prism",[l._v('\n          <vs-row>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input size="large" placeholder="Size large" v-model="inputsize1" />\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input size="default" placeholder="Size default" v-model="inputsize2" />\n          </vs-col>\n          <vs-col vs-lg="4" vs-xs="12">\n          <vs-input size="small" placeholder="Size small" v-model="inputsize3" />\n          </vs-col>\n          </vs-row>\n        ')])],1)],1)],1)],1)},n=[],a={name:"input",data:function(){return{title:"Input",defaulinputs:!1,value1:"",value2:"",inputlabel:!1,fname:"",password:"",inputlabelplace:!1,lp1:"",lp2:"",inputicon:!1,inputicon1:"",inputicon2:"",inputicon3:"",inputicon4:"",inputicon5:"",inputicon6:"",inputicon7:"",inputcolor:!1,colorinput1:"",colorinput2:"",colorinput3:"",colorinput4:"",colorinput5:"",colorinput6:"",colorinput7:"",inputvalidation:!1,inputsize:!1,inputsize1:"",inputsize2:"",inputsize3:""}}},o=a,i=e("2877"),c=Object(i["a"])(o,t,n,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22ce55.d5730b61.js.map