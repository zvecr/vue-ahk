(function(e){function t(t){for(var a,i,r=t[0],c=t[1],s=t[2],u=0,d=[];u<r.length;u++)i=r[u],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},l=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var p=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"40b0":function(e,t,n){"use strict";var a=n("ccac"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),o=n("bb71");n("da64"),n("15f5");a["a"].use(o["a"],{iconfont:"fa",theme:{primary:"#2C3539",secondary:"#007F7F"}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-header",{on:{download:e.genAHK,import:e.doImport,export:e.doExport}}),n("v-content",[n("app-editor",{ref:"editor",model:{value:e.editorState,callback:function(t){e.editorState=t},expression:"editorState"}})],1),n("app-footer")],1)},i=[],r=n("21a6"),c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blocklyDivParent"},[n("div",{staticClass:"blocklyDiv"})])}],p=n("e680"),u=n.n(p);u.a.AHK=new u.a.Generator("AHK"),u.a.AHK.ORDER_ATOMIC=0,u.a.AHK.ORDER_NONE=99,u.a.AHK.scrub_=function(e,t){var n=e.nextConnection&&e.nextConnection.targetBlock(),a=u.a.AHK.blockToCode(n);return a?"".concat(t,"\n").concat(a):t},u.a.AHK.ahk_hotkey=function(e){var t=u.a.AHK.valueToCode(e,"CONDITION",u.a.AHK.ORDER_NONE),n=u.a.AHK.statementToCode(e,"OUTPUT");return"; GEN HOTKEY\n".concat(t,"::\n").concat(n,"\nreturn\n")},u.a.AHK.ahk_msgbox=function(e){var t=e.getFieldValue("MSG");return"MsgBox, ".concat(t)},u.a.AHK.ahk_print=function(e){var t=e.getFieldValue("MSG");return"Send, {Text}".concat(t)},u.a.AHK.ahk_run=function(e){var t=e.getFieldValue("EXE");return"Run, ".concat(t)},u.a.AHK.ahk_send=function(e){var t=u.a.AHK.valueToCode(e,"NAME",u.a.AHK.ORDER_NONE);return"Send, ".concat(t)},u.a.AHK.ahk_send_keypress=function(e){var t=e.getFieldValue("keycode"),n=u.a.AHK.valueToCode(e,"NAME",u.a.AHK.ORDER_NONE),a=t+n;return[a,u.a.AHK.ORDER_NONE]},u.a.AHK.ahk_send_modifier=function(e){var t=e.getFieldValue("MOD"),n=u.a.AHK.valueToCode(e,"KEY",u.a.AHK.ORDER_NONE),a="{".concat(t," down}").concat(n,"{").concat(t," up}");return[a,u.a.AHK.ORDER_NONE]},u.a.AHK.ahk_send_key=function(e){var t=e.getFieldValue("KEY"),n=u.a.AHK.valueToCode(e,"NAME",u.a.AHK.ORDER_NONE),a="{".concat(t,"}").concat(n);return[a,u.a.AHK.ORDER_NONE]},u.a.AHK.ahk_detect_mod=function(e){var t=e.getFieldValue("MOD"),n=u.a.AHK.valueToCode(e,"NAME",u.a.AHK.ORDER_NONE),a="".concat(t).concat(n);return[a,u.a.AHK.ORDER_NONE]},u.a.AHK.ahk_detect_key=function(e){var t=e.getFieldValue("KEY"),n=t;return[n,u.a.AHK.ORDER_NONE]},u.a.AHK.ahk_detect_keypress=function(e){var t=e.getFieldValue("KEY"),n=t.toLowerCase();return[n,u.a.AHK.ORDER_NONE]};var d=u.a.AHK,m=["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","!","#","+","^","{","","Enter","Escape","Space","Tab","Backspace","Delete","Insert","Up","Down","Left","Right","Home","End","PgUp","PgDn","CapsLock","ScrollLock","NumLock","Control","LControl","RControl","Alt","LAlt","RAlt","Shift","LShift","RShift","LWin","RWin","Numpad0","Numpad1","Numpad2","Numpad3","Numpad4","Numpad5","Numpad6","Numpad7","Numpad8","Numpad9","NumpadDot","NumpadEnter","NumpadMult","NumpadDiv","NumpadAdd","NumpadSub","NumpadDel","NumpadIns","NumpadClear","NumpadUp","NumpadDown","NumpadLeft","NumpadRight","NumpadHome","NumpadEnd","NumpadPgUp","NumpadPgDn","Browser_Back","Browser_Forward","Browser_Refresh","Browser_Stop","Browser_Search","Browser_Favorites","Browser_Home","Volume_Mute","Volume_Down","Volume_Up","Media_Next","Media_Prev","Media_Stop","Media_Play_Pause","Launch_Mail","Launch_Media","Launch_App1","Launch_App2","PrintScreen","CtrlBreak","Pause"].map(function(e){return[e,e]}),f=[["Ctrl","^"],["Alt","!"],["Shift","+"],["Win","#"]],k=["Ctrl","Alt","Shift","Win"].map(function(e){return[e,e]});u.a.defineBlocksWithJsonArray([{type:"ahk_msgbox",message0:"Message Box With %1",args0:[{type:"field_input",name:"MSG",text:"Hello World"}],previousStatement:"action",nextStatement:"action",style:"action_type",tooltip:"",helpUrl:""},{type:"ahk_hotkey",message0:"When %1 Then %2",args0:[{type:"input_value",name:"CONDITION",check:"detect"},{type:"input_statement",name:"OUTPUT",check:"action"}],style:"rule_type",tooltip:"",helpUrl:""},{type:"ahk_print",message0:"Print %1",args0:[{type:"field_input",name:"MSG",text:"Hello World"}],previousStatement:"action",nextStatement:"action",style:"action_type",tooltip:"",helpUrl:""},{type:"ahk_run",message0:"Run %1",args0:[{type:"field_input",name:"EXE",text:"notepad.exe"}],previousStatement:"action",nextStatement:"action",style:"action_type",tooltip:"",helpUrl:""},{type:"ahk_send",message0:"Send %1",args0:[{type:"input_value",name:"NAME",check:"action"}],previousStatement:"action",nextStatement:"action",style:"action_type",tooltip:"A Send action with fine grain control. See https://autohotkey.com/docs/commands/Send.htm",helpUrl:""},{type:"ahk_send_keypress",message0:"Raw Sequence %1 %2",args0:[{type:"field_input",name:"keycode",text:"abc"},{type:"input_value",name:"NAME",check:"action"}],output:"action",style:"action_type",tooltip:"Raw sequence which requires escaping. See https://autohotkey.com/docs/commands/Send.htm",helpUrl:""},{type:"ahk_send_modifier",message0:"Modifier %1 and %2",args0:[{type:"field_dropdown",name:"MOD",options:k},{type:"input_value",name:"KEY",check:"action"}],inputsInline:!0,output:"action",style:"action_type",tooltip:"",helpUrl:""},{type:"ahk_send_key",message0:"Key %1 %2",args0:[{type:"field_dropdown",name:"KEY",options:m},{type:"input_value",name:"NAME",check:"action"}],inputsInline:!1,output:"action",style:"action_type",tooltip:"",helpUrl:""},{type:"ahk_detect_mod",message0:"Modifier %1 and %2",args0:[{type:"field_dropdown",name:"MOD",options:f},{type:"input_value",name:"NAME",check:"detect"}],inputsInline:!0,output:"detect",style:"detect_type",tooltip:"",helpUrl:""},{type:"ahk_detect_key",message0:"Key %1",args0:[{type:"field_dropdown",name:"KEY",options:m}],inputsInline:!1,output:"detect",style:"detect_type",tooltip:"",helpUrl:""},{type:"ahk_detect_keypress",message0:"key %1",args0:[{type:"field_input",name:"KEY",text:"a"}],output:"detect",style:"detect_type",tooltip:"",helpUrl:""}]);var v={rule_type:{colourPrimary:"#1abc9c"},detect_type:{colourPrimary:"#3498db"},action_type:{colourPrimary:"#e67e22"}},_={ahk_rule_category:{colour:"#3498db"},ahk_action_category:{colour:"#e67e22"}};u.a.Themes.AHK=new u.a.Theme(v,_);var h=u.a.Themes.AHK,y='<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">\n<category name="Rules" colour="#3498db" categorystyle="ahk_rule_category">\n  <block type="ahk_hotkey"></block>\n  <block type="ahk_detect_keypress">\n    <field name="KEY">a</field>\n  </block>\n  <block type="ahk_detect_mod">\n    <field name="MOD">Ctrl</field>\n  </block>\n  <block type="ahk_detect_key">\n    <field name="KEY">Esc</field>\n  </block>\n</category>\n<category name="Actions" colour="#e67e22" categorystyle="ahk_action_category">\n  <block type="ahk_print">\n    <field name="MSG">Hello World</field>\n  </block>\n  <block type="ahk_run">\n    <field name="EXE">notepad.exe</field>\n  </block>\n  <block type="ahk_msgbox">\n    <field name="MSG">Hello World</field>\n  </block>\n  <block type="ahk_send"></block>\n  <block type="ahk_send_keypress">\n    <field name="keycode">a</field>\n  </block>\n  <block type="ahk_send_key">\n    <field name="KEY">Esc</field>\n  </block>\n  <block type="ahk_send_modifier">\n    <field name="MOD">Ctrl</field>\n  </block>\n</category>\n<sep></sep>\n<category name="Templates">\n  <block type="ahk_hotkey">\n    <value name="CONDITION">\n      <block type="ahk_detect_mod">\n        <field name="MOD">Ctrl</field>\n        <value name="NAME">\n          <block type="ahk_detect_keypress">\n            <field name="KEY">j</field>\n          </block>\n        </value>\n      </block>\n    </value>\n    <statement name="OUTPUT">\n      <block type="ahk_msgbox">\n        <field name="MSG">Going to type \'Hello World\'</field>\n        <next>\n          <block type="ahk_print">\n            <field name="MSG">Hello World</field>\n          </block>\n        </next>\n      </block>\n    </statement>\n  </block>\n  <block type="ahk_hotkey">\n    <value name="CONDITION">\n      <block type="ahk_detect_mod">\n        <field name="MOD">Shift</field>\n        <value name="NAME">\n          <block type="ahk_detect_keypress">\n            <field name="KEY">j</field>\n          </block>\n        </value>\n      </block>\n    </value>\n    <statement name="OUTPUT">\n      <block type="ahk_run">\n        <field name="EXE">notepad.exe</field>\n      </block>\n    </statement>\n  </block>\n  <block type="ahk_hotkey">\n    <value name="CONDITION">\n      <block type="ahk_detect_key">\n        <field name="KEY">F23</field>\n      </block>\n    </value>\n    <statement name="OUTPUT">\n      <block type="ahk_send">\n        <value name="NAME">\n          <block type="ahk_send_modifier">\n            <field name="MOD">Ctrl</field>\n            <value name="KEY">\n              <block type="ahk_send_keypress">\n                <field name="keycode">c</field>\n              </block>\n            </value>\n          </block>\n        </value>\n      </block>\n    </statement>\n  </block>\n  <block type="ahk_hotkey">\n    <value name="CONDITION">\n      <block type="ahk_detect_key">\n        <field name="KEY">F24</field>\n      </block>\n    </value>\n    <statement name="OUTPUT">\n      <block type="ahk_send">\n        <value name="NAME">\n          <block type="ahk_send_keypress">\n            <field name="keycode">{Ctrl down}v{Ctrl up}</field>\n          </block>\n        </value>\n      </block>\n    </statement>\n  </block>\n</category>\n</xml>',b=y,g={props:{value:{type:String}},data:function(){return{worksapce:null}},mounted:function(){var e=this,t=this.$el.querySelector(".blocklyDiv");this.workspace=u.a.inject(t,{toolbox:b,theme:h,sounds:!1,horizontalLayout:!1,toolboxPosition:"start",media:"./",grid:{spacing:20,length:3,colour:"#ff000000",snap:!0},trashcan:!1}),this.doImport(this.value),this.workspace.addChangeListener(function(t){t.type!==u.a.Events.UI&&e.$emit("input",e.doExport())}),window.addEventListener("resize",function(){return u.a.svgResize(e.workspace)},!1)},methods:{doExport:function(){var e=u.a.Xml.workspaceToDom(this.workspace);return u.a.Xml.domToText(e)},doImport:function(e){if(u.a.mainWorkspace.clear(),e){var t=u.a.Xml.textToDom(e);u.a.Xml.domToWorkspace(t,this.workspace)}},doGen:function(){return d.workspaceToCode(this.workspace)}}},E=g,N=(n("40b0"),n("2877")),w=Object(N["a"])(E,c,s,!1,null,null,null),A=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{dark:"",flat:"",color:"primary"}},[n("v-toolbar-side-icon",{nativeOn:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"white--text"},[e._v("AutoHotkey Editor")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",{on:{click:function(t){return e.$emit("download")}}},[e._v("fa-download")])],1)],1),n("app-menu",{on:{download:function(t){return e.$emit("download")},import:function(t){return e.$emit("import")},export:function(t){return e.$emit("export")}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}})],1)},x=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{app:"",absolute:"",temporary:"",value:e.value},on:{input:function(t){return e.$emit("input",t)}}},[n("v-list",[n("v-list-tile",{on:{click:function(t){return e.$emit("import")}}},[n("v-list-tile-action",[n("v-icon",[e._v("fa-file-import")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Import")])],1)],1),n("v-list-tile",{on:{click:function(t){return e.$emit("export")}}},[n("v-list-tile-action",[n("v-icon",[e._v("fa-file-export")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Export")])],1)],1),n("v-divider"),n("v-list-tile",{on:{click:function(t){return e.$emit("download")}}},[n("v-list-tile-action",[n("v-icon",[e._v("fa-download")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Download script")])],1)],1),n("v-list-tile",{attrs:{disabled:""},on:{click:function(t){return e.$emit("compile")}}},[n("v-list-tile-action",[n("v-icon",[e._v("fa-cogs")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Compile to exe")])],1)],1),n("v-divider"),n("v-list-tile",{on:{click:e.help}},[n("v-list-tile-action",[n("v-icon",[e._v("fa-question-circle")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Online Help")])],1)],1)],1),n("v-spacer"),n("v-divider"),n("v-list",{attrs:{"two-line":""}},[n("v-list-tile",{on:{click:e.home}},[n("v-list-tile-avatar",{attrs:{tile:""}},[n("img",{attrs:{src:"icon_vector_min.svg"}})]),n("v-list-tile-content",[n("v-list-tile-title",[e._v("zvecr.com")]),n("v-list-tile-sub-title",[e._v("Check out my other stuff")])],1)],1)],1)],1)},T=[],S={props:["value"],methods:{home:function(){window.location.href="http://www.zvecr.com"},help:function(){window.location.href="https://github.com/zvecr/vue-ahk/wiki"}}},H=S,D=(n("efa6"),n("6544")),M=n.n(D),C=n("ce7e"),F=n("132d"),R=n("8860"),V=n("ba95"),I=n("40fe"),U=n("c954"),P=n("5d23"),L=n("f774"),$=n("9910"),j=Object(N["a"])(H,K,T,!1,null,null,null),Y=j.exports;M()(j,{VDivider:C["a"],VIcon:F["a"],VList:R["a"],VListTile:V["a"],VListTileAction:I["a"],VListTileAvatar:U["a"],VListTileContent:P["a"],VListTileSubTitle:P["b"],VListTileTitle:P["c"],VNavigationDrawer:L["a"],VSpacer:$["a"]});var B={data:function(){return{drawer:!1}},components:{AppMenu:Y}},W=B,G=n("8336"),X=n("71d9"),z=n("706c"),q=n("2a7f"),J=Object(N["a"])(W,O,x,!1,null,null,null),Q=J.exports;M()(J,{VBtn:G["a"],VIcon:F["a"],VSpacer:$["a"],VToolbar:X["a"],VToolbarSideIcon:z["a"],VToolbarTitle:q["a"]});var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{dark:"",height:"auto"}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-actions",{staticClass:"primary justify-center"},[e._v("\n      © "+e._s((new Date).getFullYear())+" - "),n("strong",[e._v("zvecr")])])],1)],1)},ee=[],te={},ne=te,ae=n("b0af"),oe=n("99d9"),le=n("553a"),ie=Object(N["a"])(ne,Z,ee,!1,null,null,null),re=ie.exports;M()(ie,{VCard:ae["a"],VCardActions:oe["a"],VFooter:le["a"]});var ce={name:"App",components:{AppEditor:A,AppHeader:Q,AppFooter:re},data:function(){return{editorState:""}},methods:{doImport:function(){var e=this,t=document.createElement("input");t.type="file",t.onchange=function(t){var n=t.dataTransfer?t.dataTransfer.files:t.target.files,a=n[0],o=new FileReader;o.onload=function(){var t=(new DOMParser).parseFromString(o.result,"text/xml");t.querySelector("parsererror")||(e.editorState=o.result,e.$refs.editor.doImport(o.result))},o.readAsText(a)},t.click()},doExport:function(){var e=new Blob([this.editorState],{type:"text/plain;charset=utf-8"});Object(r["saveAs"])(e,"script.xml")},genAHK:function(){var e=new Blob([this.$refs.editor.doGen()],{type:"text/plain;charset=utf-8"});Object(r["saveAs"])(e,"script.ahk")}}},se=ce,pe=n("7496"),ue=n("549c"),de=Object(N["a"])(se,l,i,!1,null,null,null),me=de.exports;M()(de,{VApp:pe["a"],VContent:ue["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(me)}}).$mount("#app")},be0f:function(e,t,n){},ccac:function(e,t,n){},efa6:function(e,t,n){"use strict";var a=n("be0f"),o=n.n(a);o.a}});
//# sourceMappingURL=app.d3aeaa88.js.map