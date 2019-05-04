import Blockly from "node-blockly/browser";

const KEYS = [
'F1',
'F2',
'F3',
'F4',
'F5',
'F6',
'F7',
'F8',
'F9',
'F10',
'F11',
'F12',
'F13',
'F14',
'F15',
'F16',
'F17',
'F18',
'F19',
'F20',
'F21',
'F22',
'F23',
'F24',
'!',
'#',
'+',
'^',
'{',
'',
'Enter',
'Escape',
'Space',
'Tab',
'Backspace',
'Delete',
'Insert',
'Up',
'Down',
'Left',
'Right',
'Home',
'End',
'PgUp',
'PgDn',

'CapsLock',
'ScrollLock',
'NumLock',

'Control',
'LControl',
'RControl',

'Alt',
'LAlt',
'RAlt',

'Shift',
'LShift',
'RShift',

'LWin',
'RWin',

'Numpad0',
'Numpad1',
'Numpad2',
'Numpad3',
'Numpad4',
'Numpad5',
'Numpad6',
'Numpad7',
'Numpad8',
'Numpad9',
'NumpadDot',
'NumpadEnter',
'NumpadMult',
'NumpadDiv',
'NumpadAdd',
'NumpadSub',

'NumpadDel',
'NumpadIns',
'NumpadClear',
'NumpadUp',
'NumpadDown',
'NumpadLeft',
'NumpadRight',
'NumpadHome',
'NumpadEnd',
'NumpadPgUp',
'NumpadPgDn',

'Browser_Back',
'Browser_Forward',
'Browser_Refresh',
'Browser_Stop',
'Browser_Search',
'Browser_Favorites',
'Browser_Home',
'Volume_Mute',
'Volume_Down',
'Volume_Up',
'Media_Next',
'Media_Prev',
'Media_Stop',
'Media_Play_Pause',
'Launch_Mail',
'Launch_Media',
'Launch_App1',
'Launch_App2',

'PrintScreen',
'CtrlBreak',
'Pause',
].map(x => [x, x]);

const DETECT_MODS = [["Ctrl","^"], ["Alt","!"], ["Shift","+"], ["Win","#"]];

const SEND_MODS = [
  'Ctrl',
  'Alt',
  'Shift',
  'Win',
/*
  'RCtrl',
  'RAlt',
  'RShift',
  'RWin',
*/
].map(x => [x, x]);

Blockly.defineBlocksWithJsonArray([{
  "type": "ahk_msgbox",
  "message0": "Message Box With %1",
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
  "tooltip": "A Send action with fine grain control. See https://autohotkey.com/docs/commands/Send.htm",
  "helpUrl": ""
},
{
  "type": "ahk_send_keypress",
  "message0": "Raw Sequence %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "keycode",
      "text": "abc"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "action"
    }
  ],
  "output": "action",
  "style": "action_type",
  "tooltip": "Raw sequence which requires escaping. See https://autohotkey.com/docs/commands/Send.htm",
  "helpUrl": ""
},
{
  "type": "ahk_send_modifier",
  "message0": "Modifier %1 and %2",
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
  "message0": "Key %1 %2",
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
  "message0": "Modifier %1 and %2",
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
  "message0": "Key %1",
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
  "message0": "key %1",
  "args0": [
    {
      "type": "field_input",
      "name": "KEY",
      "text": "a"
    }
  ],
  "output": "detect",
  "style": "detect_type",
  "tooltip": "",
  "helpUrl": ""
}]);
