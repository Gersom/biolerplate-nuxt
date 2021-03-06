import Build from './config/build'
import Server from './config/server'
import Extends from './config/extends'
import Axios from './config/axios'
import Generate from './config/generate'
import Head from './src/record/heads/default'

export default {
  ...Server,
  ...Extends,

  head: { ...Head },
  axios: { ...Axios },
  build: { ...Build },
  generate: { ...Generate },

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
