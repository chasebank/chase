export default function ({ store, route, redirect }) {
  const routeDepth = route.meta.reduce((depth, meta) => meta.depth || depth, 0)

  store.commit('setRouteTransitionDirection', routeDepth)
}