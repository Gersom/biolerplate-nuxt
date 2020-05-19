import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/pages/index'
import Example from '~/pages/example'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/gg',
        name: 'Example',
        component: Example
      }
    ]
  })
}
