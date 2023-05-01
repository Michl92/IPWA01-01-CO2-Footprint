// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Klimawandel',
    component: () => import('@/views/KlimawandelView.vue'),
  },
  {
    path: '/nachhaltigkeit',
    name: 'Nachhaltigkeit',
    component: () => import('@/views/NachhaltigkeitView.vue'),
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('@/views/ImpressumView.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/RechtlicheHinweiseView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
