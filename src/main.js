import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store/Store';

Vue.config.productionTip = false;

Vue.use({
  install(_Vue) {
    // eslint-disable-next-line no-param-reassign
    _Vue.prototype.$bus = new Vue();

    Vue.mixin({
      beforeDestroy() {
        // only destroy on root instances
        if (!this.$parent) {
          this.$bus.$destroy();
        }
      },
    });
  },
});

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
