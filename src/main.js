import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router/router.js'
// 导入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入全局样式
import './style/base.css'

//导入store
import store from './store/store' 

// 导入全局过滤器
import './filters/filters.js'

// 注册
Vue.use(ElementUI);

Vue.config.productionTip = false

// 测试环境变量
window.console.log(process.env.VUE_APP_BASEURL)

new Vue({
  // 注入 
  store,
  router,
  render: h => h(App),
}).$mount('#app')
