module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      /*
      ** Stop postcss from messing with css custom properties
      */
      require('postcss-cssnext')({
        features: {
          customProperties: false
        }
      })
    ]
  },
  plugins: [
    { src: `~plugins/vue-portal` }
  ],
  modules: [
    /*
    ** Make scss variables accessible in SFCs
    */
    ['nuxt-sass-resources-loader',
      [
        '@/assets/css/base/_vars.scss',
        '@/assets/css/base/_mixins.scss'
      ]
    ]
  ]
}

