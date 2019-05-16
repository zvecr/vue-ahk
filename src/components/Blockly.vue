<template>
  <div class="blocklyDivParent">
    <div class="blocklyDiv"/>
  </div>
</template>

<script>
import Blockly from 'node-blockly/browser';

export default {
  props: {
    config: { type: Object, required: true },
    lang: { type: String, required: true },
    value: { type: String },
  },
  data() {
    return {
      worksapce: null,
    };
  },
  mounted() {
    const child = this.$el.querySelector('.blocklyDiv');

    this.workspace = Blockly.inject(child, this.config);

    this.import(this.value);

    this.workspace.addChangeListener((event) => {
      if (event.type === Blockly.Events.UI) {
        return;
      }
      this.$emit('input', this.export());
    });

    window.addEventListener(
      'resize',
      () => Blockly.svgResize(this.workspace),
      false,
    );
  },
  methods: {
    export() {
      const xml = Blockly.Xml.workspaceToDom(this.workspace);
      return Blockly.Xml.domToText(xml);
    },
    import(xmlText) {
      Blockly.mainWorkspace.clear();
      if (xmlText) {
        const xml = Blockly.Xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
      }
    },
    generate() {
      return Blockly[this.lang].workspaceToCode(this.workspace);
    },
  },
};
</script>

<style>
.blocklyDivParent {
  position: relative;
  width: 100%;
  height: 100%;
}
.blocklyDiv {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
