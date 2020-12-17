(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b66b9"],{"1ca2":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-row",{attrs:{"vs-justify":"center"}},[n("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-lg":"12","vs-xs":"12"}},[n("vs-card",[n("h3",{staticClass:"card-title d-flex"},[t._v("\n        With Alert\n        "),n("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(e){t.defaultalert=!0}}},[n("vs-icon",{attrs:{icon:"code"}})],1)],1),n("p",{staticClass:"card-subtitle"},[t._v("\n        To generate a dialog we have the global function\n        "),n("code",[t._v("$vs.dialog")]),t._v(" the parameters to generate the dialog are\n      ")]),n("vs-row",[n("vs-col",{attrs:{"vs-lg":"8","vs-xs":"12"}},[n("vs-list",[n("vs-list-item",{attrs:{title:"title",subtitle:"title of the dialogue - String"}}),n("vs-list-item",{attrs:{title:"text",subtitle:"internal text of the dialog - String"}}),n("vs-list-item",{attrs:{title:"color",subtitle:"color of the component - Colors, RGB, HEX"}}),n("vs-list-item",{attrs:{title:"accept",subtitle:"function that executes the user accept the dialog - Function"}}),n("vs-list-item",{attrs:{title:"cancel",subtitle:"function that executes the user to cancel the dialog (if it is a confirm type) - Function"}}),n("vs-list-item",{attrs:{title:"type",subtitle:"determines the type of dialog (alert or confirm) - alert, confirm"}}),n("vs-list-item",{attrs:{title:"buttonAccept",subtitle:"determines the type of accept button - Boolean"}}),n("vs-list-item",{attrs:{title:"buttonCancel",subtitle:"determines the type of cancel button - Boolean"}})],1)],1)],1),n("div",{staticClass:"m-3 btn-alignment"},[n("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(e){return t.openAlert("primary")}}},[t._v("Alert Primary")]),n("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(e){return t.openAlert("success")}}},[t._v("Alert Success")]),n("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(e){return t.openAlert("danger")}}},[t._v("Alert Danger")]),n("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(e){return t.openAlert("warning")}}},[t._v("Alert Warning")]),n("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(e){return t.openAlert("dark")}}},[t._v("Alert Dark")]),n("vs-button",{attrs:{color:"primary",type:"gradient"},on:{click:function(e){return t.openAlert(null)}}},[t._v("Alert Color RGB | HEX")])],1),n("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.defaultalert},on:{"update:active":function(e){t.defaultalert=e}}},[n("vs-prism",[t._v('\n          <div class="m-3 btn-alignment">\n          <vs-button @click="openAlert(\'primary\')" color="primary" type="flat">Alert Primary</vs-button>\n          <vs-button @click="openAlert(\'success\')" color="success" type="flat">Alert Success</vs-button>\n          <vs-button @click="openAlert(\'danger\')" color="danger" type="flat">Alert Danger</vs-button>\n          <vs-button @click="openAlert(\'warning\')" color="warning" type="flat">Alert Warning</vs-button>\n          <vs-button @click="openAlert(\'dark\')" color="dark" type="flat">Alert Dark</vs-button>\n          <vs-button @click="openAlert(null)" color="primary" type="gradient">Alert Color RGB | HEX</vs-button>\n          </div>\n          <script>\n          export default {\n          data:()=>({\n          colorAlert:\'primary\',\n          titleAlert:\'Alert\',\n          activeAlert:false,\n          valueInput:\'\',\n          }),\n          methods:{\n          openAlert(color){\n          this.colorAlert = color || this.getColorRandom()\n          this.$vs.dialog({\n          color:this.colorAlert,\n          title: `Dialog - ${this.colorAlert}`,\n          text: \'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\',\n          accept:this.acceptAlert\n          })\n          },\n          acceptAlert(){\n          this.$vs.notify({\n          color:this.colorAlert,\n          title:\'Accept Selected\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\'\n          })\n          },\n          getColorRandom(){\n          function getRandomInt(min, max) {\n          return Math.floor(Math.random() * (max - min)) + min;\n          }\n          return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`\n          },\n          }\n          }\n          <\/script>\n        ')])],1)],1),n("vs-card",[n("h3",{staticClass:"card-title d-flex"},[t._v("\n        With Confirm Alert\n        "),n("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(e){t.confirmalert=!0}}},[n("vs-icon",{attrs:{icon:"code"}})],1)],1),n("p",{staticClass:"card-subtitle"},[t._v("If you need a dialog of type confirm you can do it just by changing the type as a parameter inside the main function.")]),n("div",[n("vs-button",{attrs:{color:"primary",type:"gradient"},on:{click:function(e){return t.openConfirm()}}},[t._v("Alert Primary")])],1),n("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.confirmalert},on:{"update:active":function(e){t.confirmalert=e}}},[n("vs-prism",[t._v("\n          <div>\n          <vs-button @click=\"openConfirm()\" color=\"danger\" type=\"gradient\">Alert Primary</vs-button>\n          </div>\n          <script>\n          export default {\n          data: () => ({\n          activeConfirm: false\n          }),\n          methods: {\n          openConfirm() {\n          this.$vs.dialog({\n          type: 'confirm',\n          color: 'danger',\n          title: `Confirm`,\n          text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups.',\n          accept: this.acceptAlert\n          })\n          },\n          acceptAlert() {\n          this.$vs.notify({\n          color: 'danger',\n          title: 'Deleted image',\n          text: 'The selected image was successfully deleted'\n          })\n          },\n          }\n          }\n          <\/script>\n        ")])],1)],1),n("vs-card",[n("h3",{staticClass:"card-title d-flex"},[t._v("\n        With Promt Alert\n        "),n("vs-button",{staticClass:"ml-auto p-0",attrs:{type:"line"},on:{click:function(e){t.promtalert=!0}}},[n("vs-icon",{attrs:{icon:"code"}})],1)],1),n("p",{staticClass:"card-subtitle"},[t._v("\n        To add a dialog of type prompt we have a global function a completely independent component\n        "),n("code",[t._v("vs-prompt")]),t._v(". This allows more flexibility with the input and ability to add any type of input and components.\n      ")]),n("vs-row",[n("vs-col",{attrs:{"vs-lg":"6","vs-xs":"12"}},[n("div",{staticClass:"d-flex align-items-center"},[n("vs-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt=!0}}},[t._v("Run prompt")]),n("div",{staticClass:"modelx bg-light p-3 shadow ml-3 rounded-pill"},[n("span",{staticClass:"text-primary font-weight-bold border-bottom pb-1 border-primary mr-3"},[t._v("Security Code Here:")]),t._v("\n              "+t._s(null==t.val?"null":t.val)+"\n            ")])],1)]),n("vs-col",{attrs:{"vs-lg":"6","vs-xs":"12"}},[n("div",{staticClass:"d-flex align-items-center"},[n("vs-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt2=!0}}},[t._v("Run prompt inputs")]),n("div",{staticClass:"modelx bg-light p-3 shadow ml-3 rounded-pill"},[n("span",{staticClass:"text-primary font-weight-bold border-bottom pb-1 border-primary mr-3"},[t._v("Name Here:")]),n("span",{staticClass:"mr-3 border-right pr-3"},[t._v(t._s(t.valMultipe.value1))]),n("span",{staticClass:"text-primary font-weight-bold border-bottom pb-1 border-primary mr-3"},[t._v("Last Name Here:")]),t._v("\n              "+t._s(t.valMultipe.value2)+"\n            ")])],1)])],1),n("vs-prompt",{attrs:{active:t.activePrompt},on:{cancel:function(e){t.val=""},accept:t.acceptAlert3,close:t.close,"update:active":function(e){t.activePrompt=e}}},[n("div",{staticClass:"p-2 pb-0"},[t._v("\n          Enter the security code\n          "),n("vs-input",{staticClass:"mb-3",attrs:{placeholder:"Code"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}),n("vs-select",{staticClass:"selectExample",attrs:{label:"Figuras"},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}},t._l(t.options1,function(t,e){return n("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1)]),n("vs-prompt",{attrs:{color:"danger","is-valid":t.validName,active:t.activePrompt2},on:{cancel:function(e){t.valMultipe.value1="",t.valMultipe.value2=""},accept:t.acceptAlert3,close:t.close,"update:active":function(e){t.activePrompt2=e}}},[n("div",{staticClass:"con-exemple-prompt"},[t._v("\n          Enter your first and last name to\n          "),n("b",[t._v("continue")]),t._v(".\n          "),n("vs-input",{staticClass:"mb-3",attrs:{placeholder:"Name"},model:{value:t.valMultipe.value1,callback:function(e){t.$set(t.valMultipe,"value1",e)},expression:"valMultipe.value1"}}),n("vs-input",{staticClass:"mb-3",attrs:{placeholder:"Last Name"},model:{value:t.valMultipe.value2,callback:function(e){t.$set(t.valMultipe,"value2",e)},expression:"valMultipe.value2"}}),n("vs-alert",{attrs:{active:!t.validName,color:"danger",icon:"new_releases"}},[t._v("Fields can not be empty please enter the data")])],1)]),n("vs-popup",{staticClass:"holamundo",attrs:{title:"Code",active:t.promtalert},on:{"update:active":function(e){t.promtalert=e}}},[n("vs-prism",[t._v('\n          <template lang="html">\n          <div class="centerx con-exemple-prompt">\n          \x3c!-- <vs-button @click="openPrompt" color="primary" type="border">Run prompt</vs-button> --\x3e\n          <div class="modelx">\n          '+t._s(null==t.val?"null":t.val)+'\n          </div>\n          <vs-button @click="activePrompt = true" color="primary" type="border">Run prompt</vs-button>\n          <div class="modelx">\n          '+t._s(t.valMultipe.value1)+"\n          "+t._s(t.valMultipe.value2)+'\n          </div>\n          <vs-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vs-button>\n          <vs-prompt\n          @cancel="val=\'\'"\n          @accept="acceptAlert"\n          @close="close"\n          :active.sync="activePrompt">\n          <div class="con-exemple-prompt">\n          Enter the security code\n          <vs-input placeholder="Code" placeholder="Code" v-model="val"/>\n          <vs-select\n          class="selectExample"\n          label="Figuras"\n          v-model="select1"\n          >\n          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />\n          </vs-select>\n          </div>\n          </vs-prompt>\n          <vs-prompt\n          color="danger"\n          @cancel="valMultipe.value1=\'\',valMultipe.value2=\'\'"\n          @accept="acceptAlert"\n          @close="close"\n          :is-valid="validName"\n          :active.sync="activePrompt2">\n          <div class="con-exemple-prompt">\n          Enter your first and last name to <b>continue</b>.\n          <vs-input placeholder="Name" v-model="valMultipe.value1"/>\n          <vs-input placeholder="Last Name" v-model="valMultipe.value2"/>\n          <vs-alert :active="!validName" color="danger" icon="new_releases" >\n          Fields can not be empty please enter the data\n          </vs-alert>\n          </div>\n          </vs-prompt>\n          </div>\n          </template>\n          <script>\n          import Vue from \'vue\'\n          export default {\n          data(){\n          return {\n          select1:2,\n          options1:[\n          {text:\'IT\',value:0},\n          {text:\'Blade Runner\',value:2},\n          {text:\'Thor Ragnarok\',value:3},\n          ],\n          activePrompt:false,\n          activePrompt2:false,\n          val:\'\',\n          valMultipe:{\n          value1:\'\',\n          value2:\'\'\n          },\n          }\n          },\n          computed:{\n          validName(){\n          return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)\n          }\n          },\n          methods:{\n          acceptAlert(color){\n          this.$vs.notify({\n          color:\'success\',\n          title:\'Accept Selected\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\'\n          })\n          },\n          close(){\n          this.$vs.notify({\n          color:\'danger\',\n          title:\'Closed\',\n          text:\'You close a dialog!\'\n          })\n          },\n          }\n          }\n          <\/script>\n        ')])],1)],1)],1)],1)},a=[],o={name:"dialog",data:function(){return{title:"Dialog",defaultalert:!1,colorAlert:"primary",titleAlert:"Alert",activeAlert:!1,valueInput:"",activeConfirm:!1,confirmalert:!1,select1:2,options1:[{text:"IT",value:0},{text:"Blade Runner",value:2},{text:"Thor Ragnarok",value:3}],activePrompt:!1,activePrompt2:!1,val:"",valMultipe:{value1:"",value2:""},promtalert:!1}},computed:{validName:function(){return this.valMultipe.value1.length>0&&this.valMultipe.value2.length>0}},methods:{openAlert:function(t){this.colorAlert=t||this.getColorRandom(),this.$vs.dialog({color:this.colorAlert,title:"Dialog - ".concat(this.colorAlert),text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",accept:this.acceptAlert})},acceptAlert:function(){this.$vs.notify({color:this.colorAlert,title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},getColorRandom:function(){function t(t,e){return Math.floor(Math.random()*(e-t))+t}return"rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")")},openConfirm:function(){this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",accept:this.acceptAlert2})},acceptAlert2:function(){this.$vs.notify({color:"primary",title:"Deleted image",text:"The selected image was successfully deleted"})},acceptAlert3:function(){this.$vs.notify({color:"success",title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},close:function(){this.$vs.notify({color:"danger",title:"Closed",text:"You close a dialog!"})}}},r=o,i=n("2877"),s=Object(i["a"])(r,l,a,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0b66b9.0ffa51ec.js.map