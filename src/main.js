import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import 'typeface-roboto/index.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
