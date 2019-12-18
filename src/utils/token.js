// 定义token的key
// 用作key的常量 一般会写成全部大写
// const KEY = 'mmtoken';   //保存在本地的属性名

// token的方法---保存   获取   移除  ----------直接在localstorage里操作的token
export function setToken(token) {
    return localStorage.setItem('mmtoken', token);
}
// ------取与删只需要 KEY 即可-------无需传参
export function getToken() {
    return localStorage.getItem('mmtoken');
}


export function removeToken() {
    return localStorage.removeItem('mmtoken');      //函数方法必须有返回值啊---外部调用才有效
}