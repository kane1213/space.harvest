import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home/index.vue'
import _ from 'lodash'

const mode = _.get(window, 'EnvMode', 'production')
// const base = mode === 'development' ? '/' : '/space.harvest/'
const base = '/'
const routes = [
  // ...(mode === 'production'
  //   ? {
  //       path: '/',
  //       redirect: { name: 'Home' },
  //     }
  //   : {}),
  { path: base, name: 'home', component: Home },
  {
    path: base + 'gallery',
    name: 'gallery',
    component: () => import('@/pages/Gallery/index.vue'),
  },
  {
    path: base + 'assets',
    name: 'assets',
    component: () => import('@/pages/Assets/index.vue'),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
