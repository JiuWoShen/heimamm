import instance from '../utils/request'

// 获取题目信息
export function questionList(params){
    return instance({
        url:'/question/list',
        method:'get',
        params
    })
}
// 移出题目
export function questionList(data){
    return instance({
        url:'/question/remove',
        method:'post',
        data
    })
}
// 修改题目状态
export function questionList(data){
    return instance({
        url:'/question/status',
        method:'post',
        data
    })
}
// 新增题目
export function questionList(data){
    return instance({
        url:'/question/add',
        method:'post',
        data
    })
}
// 单个题目详情
export function questionList(data){
    return instance({
        url:'/question/one',
        method:'post',
        data
    })
}
// 单个题目编辑
export function questionList(data){
    return instance({
        url:'/question/edit',
        method:'post',
        data
    })
}
// 上传文件--视频解析接口
export function questionList(data){
    return instance({
        url:'/question/upload',
        method:'post',
        data
    })
}