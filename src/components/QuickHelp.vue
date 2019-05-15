<template>
  <v-dialog v-model="help" :width="$vuetify.breakpoint.mdAndUp ? '50%' : 'auto'">
    <v-card>
      <v-toolbar dark flat card color="secondary">
        <v-toolbar-title class="white--text">Quick Help</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon @click="help = false">fa-times</v-icon>
        </v-btn>
      </v-toolbar>

      <v-layout pa-3>
        <v-img src="screencast.gif" ontain class="elevation-5"/>
      </v-layout>

      <v-card-text>
        <ol pt-3>
          <li>
            Add some blocks to the workspace. Start with dragging some
            <strong>Rules</strong>, then add some
            <strong>Actions</strong>.
          </li>

          <li>Click the download icon to generate your ahk script.</li>

          <li>See the template section for some initial ideas.</li>
        </ol>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
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
