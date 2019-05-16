<template>
  <app-blockly :config="config" lang="AHK" ref="blockly" v-model="editorState"/>
</template>

<script>
import { saveAs } from 'file-saver';

import AppBlockly from '../Blockly.vue';
import theme from './theme';
import toolbox from './toolbox';

// Bind AHK support
import './generator';
import './blocks';

export default {
  components: {
    AppBlockly,
  },
  computed: {
    config() {
      return {
        toolbox,
        theme,
        sounds: false,
        horizontalLayout: false,
        toolboxPosition: 'end',
        media: './',
        grid: {
          spacing: 20, length: 3, colour: '#ecf0f1', snap: true,
        },
        trashcan: false,
      };
    },
    editorState: {
      get() {
        return this.$store.state.editor;
      },
      set(value) {
        this.$store.commit('editor', value);
      },
    },
  },
  created() {
    this.$bus.$on('import', this.import);
    this.$bus.$on('export', this.export);
    this.$bus.$on('download', this.generate);
    this.$bus.$on('compile', () => {
      throw new Error('Not implemented');
    });
  },
  methods: {
    import() {
      // TODO: find npm FileReader.readAsText lib like file-saver
      const vm = this;
      const i = document.createElement('input');
      i.type = 'file';
      // eslint-disable-next-line func-names
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
          vm.$refs.blockly.import(fr.result);
        };

        fr.readAsText(file);
      };
      i.click();
    },
    export() {
      const blob = new Blob([this.editorState], {
        type: 'text/plain;charset=utf-8',
      });
      saveAs(blob, 'script.xml');
    },
    generate() {
      const blob = new Blob([this.$refs.blockly.generate()], {
        type: 'text/plain;charset=utf-8',
      });
      saveAs(blob, 'script.ahk');
    },
  },
};
</script>

<style>
/* TODO: tidy up this style investigation */
.blocklySvg {
}

.blocklyText,
.blocklyTreeLabel,
.blocklyHtmlInput {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.blocklyHtmlInput {
  background-color: white;
}
.blocklyTreeLabel {
  color: rgba(0, 0, 0, 0.87);
}
.blocklyToolboxDiv {
  background-color: #ddd;
  /* padding-right: 1px; */
}
.blocklyFlyoutBackground {
  fill: #eee;
  fill-opacity: 1;
}
.blocklyFlyout {
  /* box-shadow */
}
/* .blocklyMainWorkspaceScrollbar,
.blocklyScrollbarBackground{
  color: aqua !important;
  background: aqua !important;
  opacity: 1;
} */
.blocklyScrollbarHandle {
  /* rx: 5;
  ry: 5; */
  fill: rgba(0, 0, 0, 0.12);
  fill-opacity: 1;
}
.blocklySelected > .blocklyPath {
  stroke: rgba(0, 0, 0, 0.54);
  stroke-width: 2px;
}
</style>
