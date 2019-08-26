<template>
<div>
  <v-app-bar dark color="primary">
    <v-app-bar-nav-icon @click="menu = true"></v-app-bar-nav-icon>

      <v-toolbar-title>AutoHotkey Editor</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon @click="help = true">fas fa-question</v-icon>
      </v-btn>
      <v-btn icon class="hidden-sm-and-down">
        <v-icon @click="$bus.$emit('download')">fa-download</v-icon>
      </v-btn>
  </v-app-bar>
</div>
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
    help: {
      get() {
        return this.$store.state.help;
      },
      set(value) {
        this.$store.commit('help', value);
      },
    },
  },
};
</script>

<style>
</style>
