import Blockly from "node-blockly/browser";

const DETECT_MODS = [["CTRL","^"], ["ALT","!"], ["SHIFT","+"], ["WIN","#"]];
const SEND_MODS = [["CTRL","Ctrl"], ["ALT","Alt"], ["SHIFT","Shift"], ["WIN","Win"]];
const KEYS = [["CTRL","Ctrl"], ["TAB","Tab"], ["UP","Up"], ["ENTER","Enter"], ["Numpad0","Numpad0"]];

Blockly.defineBlocksWithJsonArray([{
  "type": "ahk_msgbox",
  "message0": "Message Box with %1",
  "args0": [
    {
      "type": "field_input",
      "name": "MSG",
      "text": "Hello World"
    }
  ],
  "previousStatement": "action",
  "nextStatement": "action",
  "style": "action_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_hotkey",
  "message0": "When %1 Then %2",
  "args0": [
    {
      "type": "input_value",
      "name": "CONDITION",
      "check": "detect"
    },
    {
      "type": "input_statement",
      "name": "OUTPUT",
      "check": "action"
    }
  ],
  "style": "rule_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_print",
  "message0": "Print %1",
  "args0": [
    {
      "type": "field_input",
      "name": "MSG",
      "text": "Hello World"
    }
  ],
  "previousStatement": "action",
  "nextStatement": "action",
  "style": "action_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_run",
  "message0": "Run %1",
  "args0": [
    {
      "type": "field_input",
      "name": "EXE",
      "text": "notepad.exe"
    }
  ],
  "previousStatement": "action",
  "nextStatement": "action",
  "style": "action_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_send",
  "message0": "Send %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "action"
    }
  ],
  "previousStatement": "action",
  "nextStatement": "action",
  "style": "action_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_send_keypress",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "keycode",
      "text": "A"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "action"
    }
  ],
  "output": "action",
  "style": "action_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_send_modifier",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOD",
      "options": SEND_MODS
    },
    {
      "type": "input_value",
      "name": "KEY",
      "check": "action"
    }
  ],
  "inputsInline": true,
  "output": "action",
  "style": "action_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_send_key",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "KEY",
      "options": KEYS
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "action"
    }
  ],
  "inputsInline": false,
  "output": "action",
  "style": "action_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_detect_mod",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOD",
      "options": DETECT_MODS
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "detect"
    }
  ],
  "inputsInline": true,
  "output": "detect",
  "style": "detect_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_detect_key",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "KEY",
      "options": KEYS
    }
  ],
  "inputsInline": false,
  "output": "detect",
  "style": "detect_type",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ahk_detect_keypress",
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": "KEY",
      "text": "A"
    }
  ],
  "output": "detect",
  "style": "detect_type",
  "tooltip": "",
  "helpUrl": ""
}]);
