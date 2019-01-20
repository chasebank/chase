import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      contentScrolled: false,
      currentRouteTitle: '',
      routeHistory: '',
      routeDepth: '1',
      routeTransitionDirection: 'transition--route-slide-right-'
    },
    
    mutations: {
      contentScrolled(state) {
        state.contentScrolled = true
        console.log('set to true ')
      },

      contentNotScrolled(state) {
        state.contentScrolled = false
        console.log('set to false ')
      },

      handleHistory(state, payload) {
        if (typeof payload !== "undefined") {
  
          if (state.routeHistory[state.routeHistory.length - 1] == payload) {
            state.routeHistory.pop()
            // console.log('popped')
          }
          
          else if (state.currentRouteTitle != '') {
            state.routeHistory.push(state.currentRouteTitle)
          }
  
          state.currentRouteTitle = payload
  
        } else {
          state.currentRouteTitle = ''

          state.routeHistory = ["Home"]
        }
      },

      removeHistory(state) {
        state.routeHistory.pop()
      },

      setRouteTransitionDirection(state, newRouteDepth) {
        newRouteDepth < state.routeDepth ? state.routeTransitionDirection = 'transition--route-slide-right-' : state.routeTransitionDirection = 'transition--route-slide-left-'
        
        state.routeDepth = newRouteDepth
      }
    }
  })
}

export default createStore