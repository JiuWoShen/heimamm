// 导入请求api
import instance from '../utils/request'

// 新增用户
export function adduser(data){
    return instance({
        url:'/user/add',
        method:'post',
        data
    })
}

// 获取列表------注意get请求的
export function listuser(params){
    return instance({
        url:'/user/list',
        method:'get',
        params
    })
}
// 用户状态设置
export function statususer(data){
    return instance({
        url:'/user/status',
        method:'post',
        data
    })
}
// 用户编辑
export function edituser(data){
    return instance({
        url:'/user/edit',
        method:'post',
        data
    })
}
// 用户删除
export function removeuser(data){
    return instance({
        url:'/user/remove',
        method:'post',
        data
    })
}