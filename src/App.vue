<template>
  <v-app>
    <app-header @download="genAHK"></app-header>

    <v-content>
      <app-blockly v-model="xml_text" ref="foo"/>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppBlockly from "./components/Blockly";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

export default {
  name: "App",
  components: {
    AppBlockly,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      drawer: false,
      xml_text: ""
    };
  },
  methods: {
    doImport() {},
    genAHK() {
      this.$refs.foo.doGen();
    }
  }
};
</script>
