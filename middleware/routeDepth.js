export default function ({ store, route, redirect }) {
  // const routeDepth = route.meta.map((meta) => {
  //   if (meta.depth && typeof meta.depth !== 'undefined')
  //     return meta.depth
  //   return 0
  // })

  const routeDepth = route.meta.reduce((depth, meta) => meta.depth || depth, 0)

  // send depth to the store
  // store.commit('setRouteTransitionDirection', routeDepth)
}