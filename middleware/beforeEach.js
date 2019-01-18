export default ({ app }) => {
  app.beforeRouteUpdate((to, from, next) => {
    console.log('MIDDLEWARE')
    next()
    // console.log()
  })
}