<template>
  <div>
    <v-toolbar dark flat color="primary">
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">AutoHotkey Editor</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="$emit('download')">fa-download</v-icon>
      </v-btn>
    </v-toolbar>
    <app-menu v-model="drawer"></app-menu>
  </div>
</template>

<script>
import AppMenu from "./Menu";
export default {
  data() {
    return {
      drawer: false
    };
  },
  components: {
    AppMenu
  }
};
</script>

<style>
</style>
