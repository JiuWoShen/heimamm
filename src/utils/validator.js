// 验证邮箱手机号
// 自定义验证规则：---手机号
export var checkPhone = (rule, value, callback) => {
    // 判断是否为空
    if (!value) {
      callback(new Error("手机号不能为空"));
    } else {
      // 判断手机号格式---正则
      var checked = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (checked.test(value) == true) {
        callback();
      } else {
        callback(new Error("手机号格式错误"));
      }
    }
  };
export var checkEmail = (rule, value, callback) => {
    // 判断是否为空
    if (!value) {
      callback(new Error("邮箱不能为空"));
    } else {
      // 判断手机号格式---正则
      var checked = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      if (checked.test(value) == true) {
        callback();
      } else {
        callback(new Error("邮箱格式错误"));
      }
    }
  };