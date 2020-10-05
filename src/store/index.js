import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import { coreui } from './coreui.module'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    coreui
  }
});