// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('@/views/ImpressumView.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/PrivacyView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
