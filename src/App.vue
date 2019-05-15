<template>
  <v-app>
    <app-header @download="genAHK"/>
    <app-menu @download="genAHK" @import="doImport" @export="doExport"/>

    <v-content>
      <app-quick-help/>
      <app-editor v-model="editorState" ref="editor"/>
    </v-content>

    <app-footer/>
  </v-app>
</template>

<script>
import { saveAs } from 'file-saver';

import AppEditor from './components/AHK/Editor.vue';
import AppHeader from './components/Header.vue';
import AppMenu from './components/Menu.vue';
import AppFooter from './components/Footer.vue';
import AppQuickHelp from './components/QuickHelp.vue';

export default {
  name: 'App',
  components: {
    AppEditor,
    AppHeader,
    AppMenu,
    AppFooter,
    AppQuickHelp,
  },
  data() {
    return {
      editorState: '',
    };
  },
  methods: {
    doImport() {
      // TODO: find npm FileReader.readAsText lib like file-saver
      const vm = this;
      const i = document.createElement('input');
      i.type = 'file';
      i.onchange = function (event) {
        const files = event.dataTransfer
          ? event.dataTransfer.files
          : event.target.files;
        const file = files[0];

        const fr = new FileReader();
        fr.onload = () => {
          const xmlish = new DOMParser().parseFromString(fr.result, 'text/xml');
          if (xmlish.querySelector('parsererror')) {
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
        type: 'text/plain;charset=utf-8',
      });
      saveAs(blob, 'script.xml');
    },
    genAHK() {
      const blob = new Blob([this.$refs.editor.doGen()], {
        type: 'text/plain;charset=utf-8',
      });
      saveAs(blob, 'script.ahk');
    },
  },
};
</script>
