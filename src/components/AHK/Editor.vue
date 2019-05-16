<template>
  <app-blockly :config="config" lang="AHK" ref="blockly"/>
</template>

<script>
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
  },
  methods: {
    export() {
      return this.$refs.blockly.export();
    },
    import(xmlText) {
      return this.$refs.blockly.import(xmlText);
    },
    generate() {
      return this.$refs.blockly.generate();
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
