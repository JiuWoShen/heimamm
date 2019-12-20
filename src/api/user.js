// 导入请求
import instance from '../utils/request'


// 将请求方法暴露出去------用户信息请求
export function userInfo(){
    return instance({
        url:'/info',
        method:'get',
    })
}
// 用户退出
export function userExit(){
    return instance({
        url:'/logout',
        method:'get',
        // 请求参数同样需要token
    })
}