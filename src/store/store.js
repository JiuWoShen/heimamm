import Vue from 'vue'
// 导包
import Vuex from 'vuex'
// 注册
Vue.use(Vuex)
// 实例化
const store = new Vuex.Store({
    // 类似于 vue实例 中的 data  -----存储需要共享的数据
    state: {
        username:'',
        userPic:'',
    },
})
// 暴露出去
export default store