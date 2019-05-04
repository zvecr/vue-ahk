const toolbox = `<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
  <category name="Rules" colour="#3498db" categorystyle="ahk_rule_category">
    <block type="ahk_hotkey"></block>
    <block type="ahk_detect_keypress">
      <field name="KEY">A</field>
    </block>
    <block type="ahk_detect_mod">
      <field name="MOD">Ctrl</field>
    </block>
    <block type="ahk_detect_key">
      <field name="KEY">Esc</field>
    </block>
  </category>
  <category name="Action" colour="#e67e22" categorystyle="ahk_action_category">
    <block type="ahk_print">
      <field name="MSG">Hello World</field>
    </block>
    <block type="ahk_run">
      <field name="EXE">notepad.exe</field>
    </block>
    <block type="ahk_msgbox">
      <field name="MSG">Hello World</field>
    </block>
    <block type="ahk_send"></block>
    <block type="ahk_send_keypress">
      <field name="keycode">A</field>
    </block>
    <block type="ahk_send_key">
      <field name="KEY">Esc</field>
    </block>
    <block type="ahk_send_modifier">
      <field name="MOD">Ctrl</field>
    </block>
  </category>
  <sep></sep>
  <category name="Templates">
    <block type="ahk_hotkey">
      <value name="CONDITION">
        <block type="ahk_detect_mod">
          <field name="MOD">Ctrl</field>
          <value name="NAME">
            <block type="ahk_detect_keypress">
              <field name="KEY">J</field>
            </block>
          </value>
        </block>
      </value>
      <statement name="OUTPUT">
        <block type="ahk_print">
          <field name="MSG">Hello World</field>
        </block>
      </statement>
    </block>
    <block type="ahk_hotkey">
      <value name="CONDITION">
        <block type="ahk_detect_mod">
          <field name="MOD">SHIFT</field>
          <value name="NAME">
            <block type="ahk_detect_keypress">
              <field name="KEY">J</field>
            </block>
          </value>
        </block>
      </value>
      <statement name="OUTPUT">
        <block type="ahk_run">
          <field name="EXE">notepad.exe</field>
        </block>
      </statement>
    </block>
    <block type="ahk_hotkey">
      <value name="CONDITION">
        <block type="ahk_detect_key">
          <field name="KEY">F24</field>
        </block>
      </value>
      <statement name="OUTPUT">
        <block type="ahk_msgbox">
          <field name="MSG">About to type 'Hello World'</field>
          <next>
            <block type="ahk_send">
              <value name="NAME">
                <block type="ahk_send_keypress">
                  <field name="keycode">A</field>
                  <value name="NAME">
                    <block type="ahk_send_key">
                      <field name="KEY">ENTER</field>
                    </block>
                  </value>
                </block>
              </value>
            </block>
          </next>
        </block>
      </statement>
    </block>
  </category>
</xml>`;

export default toolbox;
