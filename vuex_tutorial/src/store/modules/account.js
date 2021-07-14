const state = {
  name: 'sherwin'
}

const mutations = {
  SET_NAME(state,value){
    state.name = value // 注意不是this.state哦！！！
  }
}

const actions = {
  updateName(context, value) {
    context.commit('SET_NAME', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
