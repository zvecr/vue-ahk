import Vue from 'vue';
import './plugins/vuetify';
import store from './store/Store';
import App from './App.vue';
import 'typeface-roboto/index.css';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
