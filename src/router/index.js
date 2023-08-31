import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

// 创建VueRouter实例
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'login',
            component: Login,
        },
        {
            path: "/login",
            redirect: '/',
        },
        {
            path: "/home",
            name: 'Home',
            component: Home,
        }
    ]
})

// 导入路由实例
export default router