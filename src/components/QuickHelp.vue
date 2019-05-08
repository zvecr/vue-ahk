<template>
  <v-dialog v-model="dialog" :width="$vuetify.breakpoint.mdAndUp ? '50%' : 'auto'">
    <v-card>
      <v-toolbar dark flat card color="secondary">
        <v-toolbar-title class="white--text">Quick Help</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon @click="dialog = false">fa-times</v-icon>
        </v-btn>
      </v-toolbar>
      <v-layout
        pa-2
        wrap
        :row="$vuetify.breakpoint.mdAndUp"
        :column="$vuetify.breakpoint.smAndDown"
      >
        <v-flex xs8>
          <p>
            Add some blocks to the workspace. Start with dragging some
            <strong>Rules</strong>, then add some
            <strong>Actions</strong>.
          </p>
        </v-flex>

        <v-flex xs8>
          <p>Click the download icon to generate your ahk script.</p>
        </v-flex>

        <v-flex xs8>
          <p>See the template section for some initial ideas.</p>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
</style>
