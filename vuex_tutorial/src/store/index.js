import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account
  },
  state: {
    count: 0
  },
  mutations: {
    ADD_COUNT(state, value){
      state.count += value
    },
    DELETE_COUNT(state, value){
      state.count -= value
    }
  },
  actions: {
    increment (context) {
      context.commit('ADD_COUNT', 5)
    },
    reduction (context) {
      context.commit('DELETE_COUNT', 5)
    }
  },
})
