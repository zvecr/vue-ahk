<template>
  <v-navigation-drawer
    style="display:flex;flex-direction:column;"
    app
    absolute
    temporary
    :value="value"
    @input="$emit('input', $event)"
  >
    <v-list>
      <v-list-tile @click="$emit('import')">
        <v-list-tile-action>
          <v-icon>fa-file-import</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Import</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="$emit('export')">
        <v-list-tile-action>
          <v-icon>fa-file-export</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Export</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile @click="$emit('download')">
        <v-list-tile-action>
          <v-icon>fa-download</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Download script</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile disabled @click="$emit('compile')">
        <v-list-tile-action>
          <v-icon>fa-cogs</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Compile to exe</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile @click="help">
        <v-list-tile-action>
          <v-icon>fa-question</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Help</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-spacer></v-spacer>

    <v-divider></v-divider>
    <v-list two-line>
      <v-list-tile @click="home">
        <v-list-tile-avatar tile>
          <img src="icon_vector_min.svg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>zvecr.com</v-list-tile-title>
          <v-list-tile-sub-title>Check out my other stuff</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    home() {
      window.location.href = "http://www.zvecr.com";
    },
    help(){
      window.location.href = "https://github.com/zvecr/vue-ahk/wiki";
    }
  }
};
</script>

<style>
/* bodge to work around blockly */
.theme--dark.v-navigation-drawer,
.theme--light.v-navigation-drawer {
  z-index: 100;
}
</style>
