// 抽离api 
// 学科api抽离
// 导入axios
import axios from 'axios'
// 将axios抽离------instance
// axios.defaults 只能设置一个 axios对象
// 如果项目中 可能用到多个 axios 支持创建一个
// 后续的接口调用直接用  instance 即可
const instance=axios.create({
    baseURL: process.env.VUE_APP_BASEURL,//项目基地址
    withCredentials: true, //允许浏览器带cookie发请求----跨域携带cookie
});

// 暴露  请求  接口  export  方法名  ----login
export function login(data){
    return instance({
        // 具体的请求方法
        url:'/login',
        method:'post',
        data     //解构赋值
    })
}
//----sendsms--短信验证码
export function sendsms(data){
    return instance({
        // 具体的请求方法
        url:'/sendsms',
        method:'post',
        data     //解构赋值
    })
}
//----register--短信验证码
export function register(data){
    return instance({
        // 具体的请求方法
        url:'/register',
        method:'post',
        data     //解构赋值
    })
}