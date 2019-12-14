import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router/router.js'
// 导入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入全局样式
import './style/base.css'

// 注册
Vue.use(ElementUI);

Vue.config.productionTip = false

// 测试环境变量
window.console.log(process.env.VUE_APP_BASEURL)

new Vue({
  // 注入
  router,
  render: h => h(App),
}).$mount('#app')
