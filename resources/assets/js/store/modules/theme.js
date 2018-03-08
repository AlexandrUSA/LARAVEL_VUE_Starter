// state
export const state = {
  dark: true
}

// getters
export const getters = {
  dark: state => state.dark
}

// mutations
export const mutations = {
 switchTheme (state, payload) {
    state.dark = payload
  }
}

// actions
export const actions = {
  switchTheme ({ commit }, payload) {
    commit('switchTheme', payload)
  }
}
