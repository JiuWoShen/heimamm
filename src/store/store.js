import Vue from 'vue'
// 导包
import Vuex from 'vuex'
// 注册
Vue.use(Vuex)
// 实例化
const store = new Vuex.Store({
    // 类似于 vue实例 中的 data  -----存储需要共享的数据
    state: {
        userMess:{}
    },
    mutations: {    //监测数据的实时变化
        userInfo (state,newUserMess) {
            // 数据变化时  将state数据修改
          state.userMess=newUserMess

        }
    }
})
// 暴露出去
export default store