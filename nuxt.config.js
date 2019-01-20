const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: '/chase/'
} : {}

module.exports = {
  mode: 'universal',

  // Headers of the page
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Customize the progress-bar color
  loading: false,

  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Chase Whiteside` : 'Chase Whiteside';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site of Chase Whiteside' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    ...routerBase,

    middleware: ['routeDepth'],

    scrollBehavior: function (to, from, savedPosition) {
      return new Promise(resolve => {
        if (savedPosition) {
          resolve(savedPosition)
        }

        else {
          resolve({ x: 0, y: 0 })
        }
      })
    }
  },

  // Global CSS
  css: [
    '~/styles/global.scss'
  ],

  modules: [
    ['nuxt-sass-resources-loader', '~/styles/_bitsnpieces.scss']
  ],

  // Plugins to load before mounting the App
  plugins: [
  ],

  // Build configuration
  build: {
    extend (config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loaders: 'markdown-with-front-matter-loader',
        }
      )
    }
  }
}
