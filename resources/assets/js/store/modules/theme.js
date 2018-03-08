// state
export const state = {
  dark: true,
  drawer: false,
}

// getters
export const getters = {
  dark: state => state.dark,
  drawer: state => state.drawer
}

// mutations
export const mutations = {
 	switchTheme (state, payload) {
    state.dark = payload
  },
  switchDrawer (state, payload) {
  	state.drawer = !state.drawer
  }
}

// actions
export const actions = {
  switchTheme ({ commit }, payload) {
    commit('switchTheme', payload)
  },
  switchDrawer ({ commit }) {
    commit('switchDrawer')
  }
}
