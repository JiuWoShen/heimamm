import Vue from 'vue'
// 导入
import VueRouter from 'vue-router'
// 导入子组件
import login from '../views/login/login.vue'
import index from '../views/index/index.vue'

import {getToken} from "../utils/token"
import {userInfo} from '../api/user'

// 导入嵌套路由
import children from './children'

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

            // 路由重定向-------也照样会有权限问题
            // redirect:'/index/chart',

            // meta
            meta:{
                power:['管理员','老师','学生']
            },

            // 嵌套路由
            children
        },
    ]
})

// 导入store
import store from '../store/store'


// element-Ui按需导入
import {Message} from 'element-ui';

// 声明一个白名单----地址数组
const whitePath=['/login','/'];

// 导航守卫
router.beforeEach((to, from, next) => {
    // window.console.log(to, from);
    // 不在白名单需要 token认证 ----  不需要区分大小写
    if (whitePath.includes(to.path.toLocaleLowerCase()) == false ) {
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

                //   用户的状态为禁用就不可登陆
                  if(res.data.data.status==1){
                      res.data.data.avatar= `${process.env.VUE_APP_BASEURL}/${res.data.data.avatar}`;
                    //   将此时登录的用户信息存储到共享仓库中
                      store.commit('userInfo',res.data.data);

                    //  要去的页面的白名单中有该角色----即可以访问
                    if(to.meta.power.includes(res.data.data.role)){
                        next();  //直接next就 OK    ---放用户通行
                    }else{
                        Message.warning('你没有访问权限！')
                    }

                  }else{
                    //   禁用状态----提示用户
                    Message.warning('账号被冻结，请联系管理员！');
                  }
                }else if(res.data.code===206){
                  Message.warning('是个高手，请进行常规操作，谢谢！！');
                  next('/login');
                }
                window.console.log('登录信息',res.data);
              })
        }
    } else {
        next();
    }
})



// 暴露
export default router

