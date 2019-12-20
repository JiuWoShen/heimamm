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


// 拦截器设置
// 发送请求的拦截-------可以设置请求头---
instance.interceptors.request.use(function (config) {
    // window.console.log("发送请求前");
    // window.console.log(config); //这里就可以取到token-----因此可以在这里设置token--此后在组件中无需进行导入与添加请求头
    config.headers.token=getToken();   
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 返回数据的拦截------可以筛选返回数据层级-------返回状态
instance.interceptors.response.use(function (response) {
    // window.console.log("相应数据后")
    // window.console.log(response.data)
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance