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
      path: '/vue3test',
      component: Home,
    },
    {
      path: '/vue3test/contact',
      component: Contact,
    },
    {
      path: '/vue3test/hooks',
      component: Hooks,
    },
    {
      path: '/vue3test/blogs',
      component: Blogs,
    },
    {
      path: '/vue3test/blogDetail',
      component: blogDetail,
    },
  ],
})

export default router
