import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Contact from '@/pages/Contact.vue'

const routerHistory = createWebHistory() //相当于原本mode:history

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/contact',
      component: Contact,
    },
  ],
})

export default router
