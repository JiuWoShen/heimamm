import Vue from 'vue'
// 导入
import VueRouter from 'vue-router'
// 导入子组件
import login from '../views/login/login.vue'

// 注册
Vue.use(VueRouter)
// 实例化
const router=new VueRouter({
    routes: [
        {
            path:'/',
            component:login
        },
        {
            path:'/login',
            component:login
        },
    ]
})
// 暴露
export default router

