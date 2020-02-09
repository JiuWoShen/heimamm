// 自定义指令集-----不需要暴露，自要保证执行即可
import Vue from 'vue'
import store from '../store/store'

Vue.directive('hidden',{
    inserted:function(el,binding){
        // window.console.log(el);//DOM元素
        // window.console.log(binding.value);//自定义标签给DOM元素传的值
        // 我们定义的是黑名单---因此此时登录用户的角色在名单中即将相应元素隐藏
        if(binding.value.includes(store.state.userMess.role)){  //这里注意store中取用户信息的方式
            el.parentNode.removeChild(el);
        }
    }
})