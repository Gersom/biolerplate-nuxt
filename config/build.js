export default {
  extractCSS: true,
  publicPath: process.env.NODE_ENV !== 'production' ? '/_nuxt/' : '/',
  filenames: {
    app: 'js/[name].js',
    chunk: 'js/[name].js',
    css: 'css/[name].css'
  },

  /*
  ** You can extend webpack config here
  */
  extend (config, ctx) {
  }
}
