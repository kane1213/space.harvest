import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/index.vue'
const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/pages/Gallery/index.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
