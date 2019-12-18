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
import {userInfo} from '../api/user'
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

// 导入store
import store from '../store/store'


// element-Ui按需导入
import {Message} from 'element-ui';

// 导航守卫
router.beforeEach((to, from, next) => {
    // window.console.log(to, from);
    if (to.path != '/login') {
        if (!getToken()) {
            Message.warning('请先登录！');     //message是挂在Vue实例上的----这里访问不到
            // window.alert('请先登录！');
            next('/login');
        } else {
            // 有token-----需判断是否为真的token
            // next();
            userInfo().then(res=>{
                if(res.data.code === 200){
                  // 页面跳转  并  将用户信息渲染
                  store.state.username=res.data.data.username;
                  // this.userPic= process.env.VUE_APP_BASEURL + '/' +  res.data.data.avatar;
                  store.state.userPic= `${process.env.VUE_APP_BASEURL}/${res.data.data.avatar}`;
                  next();  //直接next就 OK    ---是放用户通行
                }else if(res.data.code===206){
                  Message.warning('是个高手，请进行常规操作，谢谢！！');
                  next('/login');
                }
                window.console.log(res);
              })
        }
    } else {
        next();
    }
})



// 暴露
export default router

