import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-roboto/index.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#2C3539',
        secondary: '#007F7F',
      },
      dark: {
        primary: '#2C3539',
        secondary: '#007F7F',
      },
    },
  },
});
