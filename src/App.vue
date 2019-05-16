<template>
  <v-app>
    <app-header/>
    <app-menu/>

    <app-quick-help/>

    <v-content>
      <app-editor ref="editor"/>
    </v-content>

    <app-footer/>
  </v-app>
</template>

<script>
import AppEditor from './components/AHK/Editor.vue';
import AppHeader from './components/Header.vue';
import AppMenu from './components/Menu.vue';
import AppFooter from './components/Footer.vue';
import AppQuickHelp from './components/QuickHelp.vue';

export default {
  name: 'App',
  components: {
    AppEditor,
    AppHeader,
    AppMenu,
    AppFooter,
    AppQuickHelp,
  },
};
</script>
