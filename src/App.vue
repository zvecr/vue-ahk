<template>
  <v-app>
    <app-header @download="genAHK" @import="doImport" @export="doExport"></app-header>

    <v-content>
      <app-blockly v-model="editorState" ref="editor"/>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import { saveAs } from "file-saver";

import AppBlockly from "./components/Blockly";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

export default {
  name: "App",
  components: {
    AppBlockly,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      editorState: ""
    };
  },
  methods: {
    doImport() {
      // TODO: find npm FileReader.readAsText lib like file-saver
      const vm = this;
      const i = document.createElement("input");
      i.type = "file";
      i.onchange = function(e) {
        const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        const file = files[0];

        const fr = new FileReader();
        fr.onload = () => {
          var xmlish = new DOMParser().parseFromString(fr.result, "text/xml");
          if (xmlish.querySelector("parsererror")) {
            return;
          }

          vm.editorState = fr.result;
          // TODO: find a way to propagate change without infinite loop
          vm.$refs.editor.doImport(fr.result);
        };

        fr.readAsText(file);
      };
      i.click();
    },
    doExport() {
      const blob = new Blob([this.editorState], {
        type: "text/plain;charset=utf-8"
      });
      saveAs(blob, "script.xml");
    },
    genAHK() {
      const blob = new Blob([this.$refs.editor.doGen()], {
        type: "text/plain;charset=utf-8"
      });
      saveAs(blob, "script.ahk");
    }
  }
};
</script>
