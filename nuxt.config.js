import config from './.contentful.json'
// @ts-ignore
const contentful = require('contentful')
require('dotenv').config()

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
})

export default {
  // Environment variables
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_SEARCH_CLIENT: process.env.ALGOLIA_SEARCH_CLIENT
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'contentful',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/site.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/contentful',
    '@/plugins/global-components'
  ],

  router: {
    async extendRoutes (routes, resolve) {
      const routesArr = [
        {
          path: '/',
          component: resolve(__dirname, 'pages/list/index.vue')
        }
      ]

      // Dynamic routes
      await Promise.all([
        client.getEntries({
          content_type: 'article'
        })
      ]).then(([articleEntries]) => {
        return [...articleEntries.items.map((entry) => {
          routesArr.push({
            path: '/' + entry.fields.slug,
            component: resolve(__dirname, 'pages/article/ViewArticle.vue')
          })
        })]
      })

      routesArr.forEach((route) => {
        routes.push(route)
      })
    }
  },
  generate: {
    fallback: true
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-purgecss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es']
  }
}
