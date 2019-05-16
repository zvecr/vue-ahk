import Vue from 'vue';
import './plugins/vuetify';
import store from './store/Store';
import App from './App.vue';
import 'typeface-roboto/index.css';

Vue.config.productionTip = false;

Vue.use({
  install(_Vue) {
    // eslint-disable-next-line no-param-reassign
    _Vue.prototype.$bus = new Vue();

    Vue.mixin({
      beforeDestroy() {
        this.$bus.$destroy();
      },
    });
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
