import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Contact from '@/pages/Contact.vue'
import Hooks from '@/pages/Hooks.vue'
import Blogs from '@/pages/blogs.vue'
import blogDetail from '@/pages/blogDetail.vue'

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
    {
      path: '/hooks',
      component: Hooks,
    },
    {
      path: '/blogs',
      component: Blogs,
    },
    {
      path: '/blogDetail',
      component: blogDetail,
    },
  ],
})

export default router
