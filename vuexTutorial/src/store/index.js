import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex);

// 创建vuex实例
const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount: function (state) {
      return state.count + 1
    }
  },
  mutations: {
    add(state) {
      state.count = state.count + 1
    },
    reduction(state, n) {
      state.count = state.count - n
    }
  },
  actions: {
    addFun(context) {
      context.commit('add')
    },
    reductionFun(context, n) {
      context.commit('reduction', parseInt(n))
    }
  }

});

// 导出store
export default store;




