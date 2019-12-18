import Vue from 'vue'
// 导入
import VueRouter from 'vue-router'
// 导入子组件
import login from '../views/login/login.vue'
import index from '../views/index/index.vue'
// 导入嵌套子组件
import user from '../views/index/user/user.vue'
import subject from '../views/index/subject/subject.vue'
import question from '../views/index/question/question.vue'
import enterprise from '../views/index/enterprise/enterprise.vue'
import chart from '../views/index/chart/chart.vue'

import {getToken} from "../utils/token"
// 注册
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/index',
            component: index,
            // 嵌套路由
            children: [
                {
                    path: 'user',
                    component: user
                },
                {
                    path: 'subject',
                    component: subject
                },
                {
                    path: 'chart',
                    component: chart
                },
                {
                    path: 'question',
                    component: question
                },
                {
                    path: 'enterprise',
                    component: enterprise
                },
            ]
        },
    ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
    window.console.log(to, from);
    if (to.path != '/login' || to.path != '/') {
        if (!getToken()) {
            // this.$message.warning('请先登录！');     //message是挂在Vue实例上的----这里访问不到
            window.alert('请先登录！');
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
})



// 暴露
export default router

