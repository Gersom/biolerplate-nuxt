import Vue from 'vue'
import Router from 'vue-router'

import Contact from '~/pages/Contact'
import Home from '~/pages/index'
import Us from '~/pages/us'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }, {
        path: '/nosotros',
        name: 'Us',
        component: Us
      }, {
        path: '/contacto',
        name: 'Contact',
        component: Contact
      }
    ]
  })
}
