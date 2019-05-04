<template>
  <div class="blocklyDivParent">
    <div class="blocklyDiv"></div>
  </div>
</template>

<script>
import Blockly from "node-blockly/browser";
import generator from "./generator";
import blocks from "./blocks";
import theme from "./theme";
import toolbox from "./toolbox";

export default {
  props: {
    value: { type: String }
  },
  data() {
    return {
      worksapce: null
    };
  },
  mounted() {
    let child = this.$el.querySelector(".blocklyDiv");

    this.workspace = Blockly.inject(child, {
      toolbox: toolbox,
      theme: theme,
      sounds: false,
      horizontalLayout: false,
      toolboxPosition: "start",
      media: "./",
      grid: { spacing: 20, length: 3, colour: "#ff000000", snap: true },
      trashcan: false
    });

    this.doImport(this.value);

    this.workspace.addChangeListener(event => {
      if (event.type === Blockly.Events.UI) {
        return;
      }
      this.$emit("input", this.doExport());
    });

    window.addEventListener(
      "resize",
      () => Blockly.svgResize(this.workspace),
      false
    );
  },
  methods: {
    doExport() {
      const xml = Blockly.Xml.workspaceToDom(this.workspace);
      return Blockly.Xml.domToText(xml);
    },
    doImport(xml_text) {
      Blockly.mainWorkspace.clear();
      if (xml_text) {
        const xml = Blockly.Xml.textToDom(xml_text);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
      }
    },
    doGen() {
      return generator.workspaceToCode(this.workspace);
    }
  }
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
  /* box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12); */
  /* left: 2px; */
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
