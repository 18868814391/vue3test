import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from '@/router/index.js'
import { store } from '@/store/index.js'
import './permission.js'
app.use(router) //Vue.use(router)被舍弃
app.use(store)
app.mount('#app')
