// 抽离api 
// 学科api抽离
// 导入axios
import axios from 'axios'
import { getToken } from '../utils/token';
// 将axios抽离------instance
// axios.defaults 只能设置一个 axios对象
// 如果项目中 可能用到多个 axios 支持创建一个
// 后续的接口调用直接用  instance 即可
const instance=axios.create({
    baseURL: process.env.VUE_APP_BASEURL,//项目基地址
    withCredentials: true, //允许浏览器带cookie发请求----跨域携带cookie
});


// 将请求方法暴露出去------用户信息请求
export function userInfo(){
    return instance({
        url:'/info',
        method:'get',
        headers:{
            token:getToken()
        }
    })
}
// 用户退出
export function userExit(){
    return instance({
        url:'/logout',
        method:'get',
        // 请求参数同样需要token
        headers:{
            token:getToken()
        }
    })
}