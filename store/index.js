export const state = () => ({
  contentScrolled: false,
  routeHistory: ['Home'],
  routeDepth: '1',
  routeTransitionDirection: 'transition--route-slide-left-'
})

export const mutations = {
  setContentScrolledState(state,payload) {
    state.contentScrolled = payload
  },

  contentScrolled(state) {
    state.contentScrolled = true
    // console.log('set to true ')
  },

  contentNotScrolled(state) {
    state.contentScrolled = false
    // console.log('set to false ')
  },

  removeRouteTitleFromHistory(state) {
    state.routeHistory.pop()
  },

  handleHistory(state, payload) {
    if (typeof payload !== "undefined") {
      state.routeHistory.push(payload)
    }

    else {
      state.routeHistory = ["Home"]
    }

    // if new page is second to last in history, w're going back, so remove last from history
    if (state.routeHistory.length > 1 && state.routeHistory[state.routeHistory.length - 2] == payload) {
      state.routeHistory.pop()
    }
  },

  setRouteTransitionDirection(state, newRouteDepth) {
    state.routeTransitionDirection = newRouteDepth > state.routeDepth ? 'transition--route-slide-left-' : 'transition--route-slide-right-'
  
    state.routeDepth = newRouteDepth
  }
}