<template>
  <div>
    <v-toolbar dark flat color="primary">
      <v-toolbar-side-icon @click="menu = true"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">AutoHotkey Editor</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="help = true">fas fa-question</v-icon>
      </v-btn>
      <v-btn icon class="hidden-sm-and-down">
        <v-icon @click="$emit('download')">fa-download</v-icon>
      </v-btn>
    </v-toolbar>
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
