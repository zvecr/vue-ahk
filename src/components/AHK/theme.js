import Blockly from "node-blockly/browser";

const blockStyles = {
  rule_type: {
    colourPrimary: "#1abc9c"
  },
  detect_type: {
    colourPrimary: "#3498db"
  },
  action_type: {
    colourPrimary: "#e67e22"
  }
};

const categoryStyles = {
  ahk_rule_category: {
    colour: "#3498db"
  },
  ahk_action_category: {
    colour: "#e67e22"
  }
};

Blockly.Themes.AHK = new Blockly.Theme(blockStyles, categoryStyles);

export default Blockly.Themes.AHK;
