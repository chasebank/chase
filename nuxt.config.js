// const pkg = require('./package')

import Mode from "frontmatter-markdown-loader/mode"

import projects from './pages/portfolio/list.js'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: '/chase/'
} : {}

export default {
  mode: "universal",

  // Headers of the page
  // head: {
  //   title: pkg.name,
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     { hid: "description", name: "description", content: pkg.description }
  //   ],
  //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  // },

  // Customize the progress-bar color
  loading: false,

  head: {
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} - Chase Whiteside` : "Chase Whiteside";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Personal site of Chase Whiteside"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  router: {
    ...routerBase,

    middleware: ["routeDepth"],

    // scrollBehavior: function(to, from, savedPosition) {
    //   return new Promise(resolve => {
    //     if (savedPosition) {
    //       resolve(savedPosition);
    //     } else {
    //       resolve({ x: 0, y: 0 });
    //     }
    //   });
    // }

    scrollBehavior(to, from, savedPosition) {
      let savedScrollPositions = this.app.$root.scroll_positions

      if (from.meta.saveScrollPosition) {
        savedScrollPositions[from.name] = {
          x: document.documentElement.scrollLeft,
          y: document.documentElement.scrollTop
        }
      }

      if (savedPosition) {
        return savedPosition
      } else {
        
      }

      if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
      } else {
        const position = {}

        // scroll to anchor by returning the selector
        if (to.hash) {
          position.selector = `[id='${to.hash}']`

          // specify offset of the element
          if (to.hash === '#anchor2') {
            position.offset = { y: 100 }
          }

          // bypass #1number check
          // if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
          if (document.querySelector(`[id='${to.hash}']`)) {
            return position
          }

          // if the returned position is falsy or an empty object,
          // will retain current scroll position.
          return false
        }

        else {
          return to.meta.saveScrollPosition && savedScrollPositions.hasOwnProperty(to.name) ? savedScrollPositions[to.name] : { x: 0, y: 0 }
        }
      }
    },
  },

  generate: {

  },

  // Global CSS
  css: [
    "~/styles/global.scss",
    "~/styles/projects/projects.scss"
  ],

  modules: [
    '@nuxtjs/style-resources',
    'nuxt-responsive-loader'
  ],

  responsiveLoader: {
    format: 'jpg',
    min: 250,
    max: 1000,
    steps: 3,
    adapter: require("responsive-loader/sharp"),
    quality: 75
  },

  styleResources: {
    scss: [
      "~/styles/_bitsnpieces.scss",
    ]
  },

  // Plugins to load before mounting the App
  plugins: [
    // { src: "~/plugins/TweenMax", ssr: false }
  ],

  // Build configuration
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.HTML, Mode.VUE_RENDER_FUNCTIONS],
          vue: {
            root: "DynamicMarkdown"
          }
        }
      })
    },
  },

  generate: {
    routes: [
      '404'
    ]
    .concat(projects.map(w => `/portfolio/${w}`))
    // .concat(blogsEs.map(w => `es/blog/${w}`))
  }
};
