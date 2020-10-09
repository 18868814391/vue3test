import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      count: 1,
    }
  },
  mutations: {
    ADD(state) {
      state.count++
    },
  },
  actions: {
    add({ commit }) {
      commit('ADD')
    },
  },
  modules: {},
})
