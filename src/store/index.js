import Vue from 'vue';
import Vuex from 'vuex';
import calendar from './calendar/index.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    calendar,
  },
});

export default store;
