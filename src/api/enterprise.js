// 导入请求api
import instance from '../utils/request'

// 获取企业列表
export function listEnterprise(params){
    return instance({
        url:'/enterprise/list',
        method:'get',
        params
    })
}
// 企业添加
export function addEnterprise(data){
    return instance({
        url:'/enterprise/add',
        method:'post',
        data
    })
}
// 企业状态设置
export function statusEnterprise(data){
    return instance({
        url:'/enterprise/status',
        method:'post',
        data
    })
}
// 企业删除
export function removeEnterprise(data){
    return instance({
        url:'/enterprise/remove',
        method:'post',
        data
    })
}
// 企业编辑
export function editEnterprise(data){
    return instance({
        url:'/enterprise/edit',
        method:'post',
        data
    })
}

