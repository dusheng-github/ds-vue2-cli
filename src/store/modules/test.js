const state = { count: 0 }

const getters = {}

const actions = {
  addAction({ commit }, step) {
    commit('add', step)
  }
}

const mutations = {
  add(state, step) {
    state.count += step
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
