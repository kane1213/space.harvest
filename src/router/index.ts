import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/index.vue'
const base = '/space.harvest/'
const routes = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
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
