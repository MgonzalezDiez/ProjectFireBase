import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: undefined
  },
  mutations: {
    SET_USER (state, user)
    {
      state.currentUser = user
    }
  },
  actions: {
    setUser ({ commit }, user)
    {
      commit('SET_USER', user)
    }
  },
  modules: {
  }
})
