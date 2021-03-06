import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from '@/router/index.js'
import { store } from '@/store/index.js'
import './permission.js'

// import { Button } from 'ant-design-vue'  //太大了先不用
// import 'ant-design-vue/lib/button/style/css'
// app.config.productionTip = false
// app.use(Button)
app.directive('highlight', {
  beforeMount(el, binding, vnode, prevVnode) {
    // let spinner = document.createElement('div')
    // spinner.innerHTML = `<i>dir</i>`
    // el.appendChild(spinner)
    el.style.background = binding.value
  },
})

app.use(router) //Vue.use(router)被舍弃
app.use(store)

app.mount('#app')
