<template>
  <div class="login-box">
    <!-- 左边表单容器 -->
    <div class="left-box">
      <!-- 表头 -->
      <div class="title">
        <img src="../../assets/login_title.png" alt />
        <span class="title_pre">黑马面面</span>
        <i></i>
        <span class="title_aft">用户登录</span>
      </div>

      <!-- 表单 -->
      <!-- 关联表单验证规则 -->
      <el-form class="login_form" ref="form" :model="form" :rules="rules">
          <!-- 每项通过 prop 关联 -->
        <el-form-item prop="phone">
          <el-input v-model="form.phone" placeholder="手机号" class="phone" prefix-icon="el-icon-user">手机</el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input
            v-model="form.password"
            class="pass"
            show-password
            prefix-icon="el-icon-lock"
            placeholder="密码"
          >密码</el-input>
        </el-form-item>
        <el-form-item prop="capture">
          <el-col :span="18">
            <el-input
              v-model="form.capture"
              class="check"
              prefix-icon="el-icon-key"
            >验证码</el-input>
          </el-col>
          <el-col :span="6">
            <img src="../../assets/login_capture.png" alt />
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="form.checked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" class="registerBtn">注册</el-button>
        </el-form-item>
      </el-form>

      <!--  -->
    </div>
    <!-- 右边图片 -->
    <img class="login-img" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
     // 自定义验证规则：---手机号
  var checkPhone = (rule, value, callback) => {
    // 判断是否为空
        if (!value) {
          callback(new Error('手机号不能为空'));
        } else {
          // 判断手机号格式---正则
          var checked=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
          if (checked.test(value)==true) {
            callback();
          }else{
            callback(new Error('手机号格式错误'));
          }
        }
      };
    return {
      form: {
        name: "",
        password: "",
        capture: "",
        // 勾选框的初始值
        checked: false
      },
      rules: {
        // prop名对应这里验证规则名
        phone:[{ required: true,validator:checkPhone,trigger: "change" }],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "change" }
        ],
        capture: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          { min: 4, max: 4, message: "验证码长度为 4 ", trigger: "change" }
        ],
        
      }
    };
  },
  methods: {
    // 表单表单验证---是否勾选
    login(){}
  }
};
</script>

<style lang="less">
//less写法的引入----或者  import
.login-box {
  // 高度继承父盒子----body
  display: flex;
  // 上下居中
  align-items: center;
  // 左右居中
  justify-content: center;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  position: relative;
  .left-box {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 44px;
    box-sizing: border-box;
    .title {
      // 距离顶部的距离已用 padding 挤开
      display: flex;
      align-items: center;
      img {
        margin-right: 16px;
      }
      .title_pre {
        font-size: 24px;
        margin-right: 14px;
      }
      i {
        height: 27px;
        width: 1px;
        background-color: #c7c7c7;
        margin-right: 12px;
      }
      .title_aft {
        font-size: 22px;
      }
    }
    .login_form {
      margin-top: 27px;
      .phone {
        width: 100%;
        height: 45px;
      }
      .pass {
        width: 100%;
        height: 45px;
      }
      img {
        height: 40px;
        width: 100%;
      }
      //   复选框字对齐
      .el-checkbox {
        // 复选框与文字对齐----------在渲染出的页面查看类名设置样式
        display: flex;
        align-items: center;
        .el-checkbox__label {
          //   让文字对齐
          display: flex;
          align-items: center;
        }
      }
      .el-button {
        width: 100%;
      }
      .registerBtn {
        margin-left: 0;
        margin-top: 26px;
      }
    }
  }
  .login-img {
  }
}
</style>