import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import Components from './components'
import VueParticles from 'vue-particles'

Vue.prototype.$echarts = echarts

import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'

// const app = createApp(App)
// app.use(router)
// app.use(VueParticles)
// app.mount('#app')
//import store from './store'
//Vue.use(VueRouter)
//import { createApp } from 'vue'

Vue.use(VueParticles)
Vue.use(Components)

new Vue({
    el: '#app',
    // 注册路由
    router,
    render(h){
        return h(App);
    }
})