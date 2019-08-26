<template>
  <v-footer dark padless>
    <v-card flat tile width="100%" class="secondary lighten-1 white--text text-center">
      <v-card-actions class="secondary justify-center">
        &copy; {{ new Date().getFullYear() }}&nbsp;-&nbsp;
        <strong>zvecr.com</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
};
</script>

<style>
footer {
  user-select: none;
}
</style>
