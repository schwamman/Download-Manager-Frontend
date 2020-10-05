export const coreui = {
  namespaced: true,
  state: {
    sidebarShow: 'responsive',
    sidebarMinimize: false
  },
  actions: {
    toggleSidebarDesktop({ commit }) {
      commit('toggleSidebarDesktop')
    },
    toggleSidebarMobile({ commit }) {
      commit('toggleSidebarMobile')
    },
    set({ commit }, [variable, value]) {
      console.log('here', variable, value)
      commit('set', [variable, value])
    }
  },
  mutations: {
    toggleSidebarDesktop (state) {
      const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
      state.sidebarShow = sidebarOpened ? false : 'responsive'
    },
    toggleSidebarMobile (state) {
      const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
      state.sidebarShow = sidebarClosed ? true : 'responsive'
    },
    set (state, [variable, value]) {
      state[variable] = value
    }
  }
}



