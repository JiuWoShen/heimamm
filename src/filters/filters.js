// 全局过滤器----不需要暴露，只要可以运行即可
import vue from 'vue'
import moment from 'moment'
// 注册全局过滤器
            // 过滤器名
vue.filter('formatTime',function(time){
    //       想要的时间格式      回调函数--传入要处理的时间
    return moment(time).format('YYYY🍒MM🍇DD');

})