<template>
  <v-navigation-drawer app temporary v-model="menu" width="300">
    <v-layout column fill-height>
      <v-list>
        <v-list-item link @click="$bus.$emit('import')">
          <v-list-item-icon>
            <v-icon>fa-file-import</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Import</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="$bus.$emit('export')">
          <v-list-item-icon>
            <v-icon>fa-file-export</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Export</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link @click="$bus.$emit('download')">
          <v-list-item-icon>
            <v-icon>fa-download</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Download script</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link disabled @click="$bus.$emit('compile')">
          <v-list-item-icon>
            <v-icon>fa-cogs</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Compile to exe</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link href="https://github.com/zvecr/vue-ahk/wiki">
          <v-list-item-icon>
            <v-icon>fa-question-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Online Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-spacer></v-spacer>
      <v-divider></v-divider>

      <v-list>
        <v-list-item two-line link href="http://www.zvecr.com">
          <v-list-item-avatar tile>
            <img src="icon_vector_min.svg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>zvecr.com</v-list-item-title>
            <v-list-item-subtitle>Check out my other creations</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    menu: {
      get() {
        return this.$store.state.menu;
      },
      set(value) {
        this.$store.commit('menu', value);
      },
    },
  },
};
</script>

<style>
/* bodge to work around blockly */
.theme--dark.v-navigation-drawer,
.theme--light.v-navigation-drawer {
  z-index: 100;
}
</style>
