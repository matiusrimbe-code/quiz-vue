import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'quizes',
    component: () => import('../views/Quizes.vue'),
  },
  {
    path: '/quizes',
    redirect: '/',
  },

  {
    path: '/quiz/:id',
    name: 'quiz',
    component: () => import('../views/Quiz.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
