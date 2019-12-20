// 导入请求api
import instance from '../utils/request'

// 新增学科
export function addSubject(data){
    return instance({
        url:'/subject/add',
        method:'post',
        data
    })
}

// 获取列表------注意get请求的
export function listSubject(params){
    return instance({
        url:'/subject/list',
        method:'get',
        params
    })
}
// 学科状态设置
export function statusSubject(data){
    return instance({
        url:'/subject/status',
        method:'post',
        data
    })
}
// 学科编辑
export function editSubject(data){
    return instance({
        url:'/subject/edit',
        method:'post',
        data
    })
}
// 学科删除
export function removeSubject(data){
    return instance({
        url:'/subject/remove',
        method:'post',
        data
    })
}