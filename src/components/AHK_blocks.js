import Blockly from "node-blockly/browser";

const DETECT_MODS = [["CTRL","^"], ["ALT","!"], ["SHIFT","+"], ["WIN","#"]];
const SEND_MODS = [["CTRL","Ctrl"], ["ALT","Alt"], ["SHIFT","Shift"], ["WIN","Win"]];
const KEYS = [["CTRL","Ctrl"], ["TAB","Tab"], ["UP","Up"], ["ENTER","Enter"], ["Numpad0","Numpad0"]];

Blockly.Blocks['ahk_msgbox'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Message Box with ")
          .appendField(new Blockly.FieldTextInput("Hello World"), "MSG");
      this.setPreviousStatement(true, "action");
      this.setNextStatement(true, "action");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_hotkey'] = {
    init: function() {
      this.appendValueInput("CONDITION")
          .setCheck("detect")
          .appendField("When");
      this.appendStatementInput("OUTPUT")
          .setCheck("action")
          .appendField("Then");
      this.setColour(290);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_print'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Print")
          .appendField(new Blockly.FieldTextInput("Hello World"), "MSG");
      this.setPreviousStatement(true, "action");
      this.setNextStatement(true, "action");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_run'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Run")
          .appendField(new Blockly.FieldTextInput("notepad.exe"), "EXE");
      this.setPreviousStatement(true, "action");
      this.setNextStatement(true, "action");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_send'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("action")
          .appendField("Send");
      this.setPreviousStatement(true, "action");
      this.setNextStatement(true, "action");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_send_keypress'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("action")
          .appendField(new Blockly.FieldTextInput("A"), "keycode");
      this.setOutput(true, "action");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_send_modifier'] = {
    init: function() {
      this.appendValueInput("KEY")
          .setCheck("action")
          .appendField(new Blockly.FieldDropdown(SEND_MODS), "MOD");
      this.setInputsInline(true);
      this.setOutput(true, "action");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_send_key'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("action")
          .appendField(new Blockly.FieldDropdown(KEYS), "KEY");
      this.setInputsInline(false);
      this.setOutput(true, "action");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_detect_mod'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("detect")
          .appendField(new Blockly.FieldDropdown(DETECT_MODS), "MOD");
      this.setInputsInline(true);
      this.setOutput(true, "detect");
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_detect_key'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(KEYS), "KEY");
      this.setInputsInline(false);
      this.setOutput(true, "detect");
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ahk_detect_keypress'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("A"), "KEY");
      this.setOutput(true, "detect");
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };