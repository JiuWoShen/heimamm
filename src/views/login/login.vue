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
          <el-input
            v-model="form.phone"
            placeholder="手机号"
            class="phone"
            prefix-icon="el-icon-user"
          >手机</el-input>
        </el-form-item>
        <el-form-item prop="password">
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
            <el-input v-model="form.capture" class="check" prefix-icon="el-icon-key">验证码</el-input>
          </el-col>
          <el-col :span="6">
            <!-- 点击可以更新验证码 -->
            <img :src="captuURL" alt @click="captureClick" />
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
          <!-- 点击登陆验证整个表单-----包括复选框 -->
          <el-button type="primary" @click="login_check">登录</el-button>
          <el-button type="primary" class="registerBtn" @click="dialogFormVisible = true">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右边图片 -->
    <img class="login-img" src="../../assets/login_banner_ele.png" alt />

    <!-- 对话框 -->
    <el-dialog title="用户注册" :visible.sync="dialogFormVisible">
      <el-form :model="register_form">
        <el-form-item label="头像" :label-width="formLabelWidth">
        <el-upload
        class="avatar-uploader"
        :action="uploadUrl"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图形码" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="17" :offset="1">
              <el-input v-model="form.piccode" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="6">
              <img class="chec" src="../../assets/login_capture.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="17" :offset="1">
              <el-input v-model="form.regis_check" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="6">
              <img class="chec" src="../../assets/login_capture.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    // 自定义验证规则：---手机号
    var checkPhone = (rule, value, callback) => {
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
    return {
      form: {
        phone: "",
        password: "",
        capture: "",
        // 勾选框的初始值
        checked: false
      },
      rules: {
        // prop名对应这里验证规则名
        phone: [{ required: true, validator: checkPhone, trigger: "change" }],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "change"
          }
        ],
        capture: [
          { required: true, message: "请输入验证码", trigger: "change" },
          { min: 4, max: 4, message: "验证码长度为 4 ", trigger: "change" }
        ]
      },
      // 验证码请求--地址
      captuURL: process.env.VUE_APP_BASEURL + "/captcha?type=login",
      // 注册表单数据
      register_form: {
        name: "",
        email: "",
        phone: "",
        pass: "",
        piccode: "",
        regis_check: "",
      },
      // 上传头像的图像地址
      imageUrl:'',
      // 图片上传地址----本地服务器的地址
      uploadUrl: process.env.VUE_APP_BASEURL + "/uploads",

      dialogFormVisible: false,
      formLabelWidth: "60px"
    };
  },
  methods: {
    // 表单表单验证---是否勾选
    login_check() {
      // 判断协议框是否勾选
      if (this.form.checked != true) {
        // 提示用户------ elementUI 提示框
        this.$message({
          showClose: true,
          message: "请选择同意协议",
          type: "warning"
        });
        // this.$message.warning('请选择同意协议');
      } else {
        this.$refs.form.validate(valid => {
          if (valid) {
            // 验证成功
            // this.$message.success('登录成功');

            // 成功后发送axios请求
            axios({
              url: process.env.VUE_APP_BASEURL + "/login",
              method: "post",
              withCredentials: true, //允许浏览器带cookie发请求
              data: {
                phone: this.form.phone,
                password: this.form.password,
                code: this.form.capture
              }
            }).then(res => {
              window.console.log(res);
            });
          } else {
            // 验证失败
            this.$message({
              showClose: true,
              message: "登陆失败",
              type: "error"
            });
            // this.$message.error("登录失败");
            return false;
          }
        });
      }
    },
    // 点击更换验证码图片------浏览器缓存机制会将相同请求返回同一数据----因此加时间戳或者随机数
    captureClick() {
      this.captuURL =
        process.env.VUE_APP_BASEURL + "/captcha?type=login&" + Date.now();
    },
    // 上传头像--
      handleAvatarSuccess(res, file) {
        // 生成本地的临时图片地址
        this.imageUrl = URL.createObjectURL(file.raw);
        
        window.console.log( this.imageUrl);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    
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
  // 注册验证
  .el-dialog {
    width: 603px;
    .el-dialog__header {
      text-align: center;
      background: linear-gradient(
        to right,
        rgb(1, 196, 250),
        rgb(19, 148, 250)
      );
    }
    // 上传头像样式
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .chec {
      width: 100%;
    }
    .el-form-item{
      text-align: center;
    }
  }
}
</style>