/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: false,
    help: false,
  },
  mutations: {
    menu(state, val) {
      state.menu = val;
    },
    help(state, val) {
      state.help = val;
    },
  },
});
