import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: ''
    },
    mutations: {
        UPDATE_MSG(state, val) {
            state.msg = val
            console.log(val)
        }
    },
    actions: {},
    modules: {}
})
