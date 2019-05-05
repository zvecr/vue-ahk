import Blockly from 'node-blockly/browser';

Blockly.AHK = new Blockly.Generator('AHK');

Blockly.AHK.ORDER_ATOMIC = 0;
Blockly.AHK.ORDER_NONE = 99;

Blockly.AHK.scrub_ = function (block, code) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  const nextCode = Blockly.AHK.blockToCode(nextBlock);

  return (nextCode) ? (`${code}\n${nextCode}`) : code;
};

Blockly.AHK.ahk_hotkey = function (block) {
  const value_condition = Blockly.AHK.valueToCode(block, 'CONDITION', Blockly.AHK.ORDER_NONE);
  const statements_output = Blockly.AHK.statementToCode(block, 'OUTPUT');

  return `; GEN HOTKEY
${value_condition}::
${statements_output}
return
`;
};

Blockly.AHK.ahk_msgbox = function (block) {
  const text_msg = block.getFieldValue('MSG');

  return `MsgBox, ${text_msg}`;
};

Blockly.AHK.ahk_print = function (block) {
  const text_msg = block.getFieldValue('MSG');

  return `Send, {Text}${text_msg}`;
};

Blockly.AHK.ahk_run = function (block) {
  const text_exe = block.getFieldValue('EXE');

  return `Run, ${text_exe}`;
};

Blockly.AHK.ahk_send = function (block) {
  const value_name = Blockly.AHK.valueToCode(block, 'NAME', Blockly.AHK.ORDER_NONE);

  return `Send, ${value_name}`;
};

Blockly.AHK.ahk_send_keypress = function (block) {
  const text_keycode = block.getFieldValue('keycode');
  const value_name = Blockly.AHK.valueToCode(block, 'NAME', Blockly.AHK.ORDER_NONE);

  const code = text_keycode + value_name;

  return [code, Blockly.AHK.ORDER_NONE];
};

Blockly.AHK.ahk_send_modifier = function (block) {
  const dropdown_mod = block.getFieldValue('MOD');
  const value_key = Blockly.AHK.valueToCode(block, 'KEY', Blockly.AHK.ORDER_NONE);

  const code = `{${dropdown_mod} down}${value_key}{${dropdown_mod} up}`;

  return [code, Blockly.AHK.ORDER_NONE];
};

Blockly.AHK.ahk_send_key = function (block) {
  const dropdown_key = block.getFieldValue('KEY');
  const value_name = Blockly.AHK.valueToCode(block, 'NAME', Blockly.AHK.ORDER_NONE);

  const code = `{${dropdown_key}}${value_name}`;

  return [code, Blockly.AHK.ORDER_NONE];
};

Blockly.AHK.ahk_detect_mod = function (block) {
  const dropdown_mod = block.getFieldValue('MOD');
  const value_name = Blockly.AHK.valueToCode(block, 'NAME', Blockly.AHK.ORDER_NONE);

  const code = `${dropdown_mod}${value_name}`;

  return [code, Blockly.AHK.ORDER_NONE];
};

Blockly.AHK.ahk_detect_key = function (block) {
  const dropdown_key = block.getFieldValue('KEY');

  const code = dropdown_key;

  return [code, Blockly.AHK.ORDER_NONE];
};

Blockly.AHK.ahk_detect_keypress = function (block) {
  const text_key = block.getFieldValue('KEY');

  // lowercase as docs suggest - forces use of shift mod
  const code = text_key.toLowerCase();

  // TODO: is needed??
  // if(code.length > 0){
  //   console.log("warn: maybe only one char???")
  // }

  return [code, Blockly.AHK.ORDER_NONE];
};

export default Blockly.AHK;
