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
      <el-form class="login_form" ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" class="phone" prefix-icon="el-icon-user">手机</el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" class="pass" show-password prefix-icon="el-icon-lock">密码</el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="18">
            <el-input v-model="form.capture" class="check" prefix-icon="el-icon-key">验证码</el-input>
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
          <el-button type="primary" class="registerBtn" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右边图片 -->
    <img class="login-img" src="../../assets/login_banner_ele.png" alt />

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        capture: "",
        checked: false
      },
    };
  },
  methods: {
    login() {},
    register() {},
 
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