import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/index.vue'
import _ from 'lodash'

// alert(process.env.NODE_ENV)
const mode = _.get(import.meta, 'mode', 'production')

const base = mode === 'development' ? '/' : '/space.harvest/'

console.log({ base, mode, meta: import.meta })
console.log({ base, mode, meta: import.meta })
console.log({ base, mode, meta: import.meta })
console.log({ base, mode, meta: import.meta })

const routes = [
  // {
  //   path: '/',
  //   redirect: { name: 'Home' },
  // },
  { path: base, name: 'home', component: Home },
  {
    path: base + 'gallery',
    name: 'gallery',
    component: () => import('@/pages/Gallery/index.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
