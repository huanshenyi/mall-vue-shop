import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

const state = {
  username: '', // ログインユーザーネーム
  cartCount: 0  // ショッピングカートの数
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
