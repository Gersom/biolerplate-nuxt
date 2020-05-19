import Build from './config/build'
import Head from './config/head'
import Server from './config/server'
import Extends from './config/extends'
import Axios from './config/axios'

export default {
  ...Server,
  ...Extends,

  head: { ...Head },
  axios: { ...Axios },
  build: { ...Build },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // CSS/Stylus file in the project
    '@/assets/stylus/main.styl'
  ]
}
