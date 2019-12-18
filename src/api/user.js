// 创建axios
import axios from 'axios'
import {getToken} from '../utils/token'
const instance = axios.create({
    baseURL:process.env.VUE_APP_BASEURL,  //项目基地址
    withCredentials: true,//允许浏览器携带cookie发送请求
})
// 将请求方法暴露出去------用户信息请求
export function userInfo(){
    return instance({
        url:'/info',
        method:'get',
        headers:{
            token:getToken(),
        }
    })
}