// 定义token的key
// 用作key的常量 一般会写成全部大写
const KEY = 'mmtoken';

// token的方法---保存   获取   移除  ----------直接在localstorage里操作的token
export function setToken(token) {
    localStorage.setItem(KEY, token);
}
// ------取与删只需要 KEY 即可-------无需传参
export function getToken() {
    localStorage.getItem(KEY);
}


export function removeToken() {
    localStorage.removeItem(KEY);
}