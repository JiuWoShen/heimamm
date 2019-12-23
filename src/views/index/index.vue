<template>
  <el-container class="indexContainner">
    <el-header class="myheader">
      <div class="left">
        <i class="el-icon-s-fold icon" @click="isCollapse = !isCollapse"></i>
        <img src="../../assets/index_logo.png" alt />
        <span>黑马面面</span>
      </div>
      <div class="right">
        <img :src="userInfo.avatar" alt />
        <!-- 计算属性处理过的 提交载荷数据 当做属性来使用 -->
        <span class="userName">{{userInfo.username}}，你好</span>
        <el-button type="primary" size="small" @click="exit">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside class="myaside" width="auto">
        <!-- 导航菜单--------高亮显示在当前的路由-----$route.path-----当前路由的信息 -->
        <el-menu
          :collapse="isCollapse"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item v-if="['管理员','老师'].includes(userInfo.role)" index="/index/chart">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据概览</span>
          </el-menu-item>
          <el-menu-item v-if="['管理员'].includes(userInfo.role)" index="/index/user">
            <i class="el-icon-user"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
          <el-menu-item v-if="['管理员','老师','学生'].includes(userInfo.role)" index="/index/question">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">题库列表</span>
          </el-menu-item>
          <el-menu-item v-if="['管理员','老师'].includes(userInfo.role)" index="/index/enterprise">
            <i class="el-icon-office-building"></i>
            <span slot="title">企业列表</span>
          </el-menu-item>
          <el-menu-item v-if="['管理员','老师'].includes(userInfo.role)" index="/index/subject">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">学科列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="mymain">
        <!-- 嵌套路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import {getToken} from '../../utils/token.js'
// import {userInfo} from '../../api/user.js'

import { userExit } from "../../api/user.js";
import {removeToken} from '../../utils/token.js'

export default {
  name: "index",
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    // 当做属性来使用
    userInfo(){
      return this.$store.state.userMess;
    }
  },
  methods: {
    exit() {
      this.$confirm("是否退出？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          userExit().then(res => {
            // window.console.log(res)
            if (res.data.code === 200) {
              // 确认退出返回首页------这里是router路由器的信息-----清除页面用户信息及token
              this.$router.push("/login");
              removeToken();
              this.$store.state.username;
              this.$store.state.userPic;
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  // 访问首页应判断是否携带token----尽早判断-----嵌套组件无需再判断，因为想要方文嵌套组件就一定会执行index的生命周期钩子
  // 迁移到导航守卫中
  /* beforeCreate() {
    // token不存在提示用户
    if(!getToken()){
      this.$message.warning('请先登录！');
      this.$router.push('/login');
    }
  }, */
  created() {
    // 迁移到 router 中 做更先一步的 token 判断
    /* userInfo().then(res=>{
      if(res.data.code === 200){
        // 将用户信息渲染
        this.username=res.data.data.username;
        // this.userPic= process.env.VUE_APP_BASEURL + '/' +  res.data.data.avatar;
        this.userPic= `${process.env.VUE_APP_BASEURL}/${res.data.data.avatar}`;
      }else if(res.data.code===206){
        // 在这里进行token判断----网速慢等原因会造成  判断时  页面跳转
        this.$message.warning('是个高手，请进行常规操作，谢谢！！');
        this.$router.push('/login');
      }
      window.console.log(res);
    }) */
  }
};
</script>
 
<style lang='less'>
.indexContainner {
  width: 100%;
  height: 100%;
  .myheader {
    width: 100%;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between; //两头分布

    .left {
      display: flex;
      align-items: center;
      .icon {
        font-size: 24px;
        margin-right: 22px;
      }
      img {
        margin-right: 11px;
        width: 33px;
      }
      span {
        font-size: 22px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      img {
        width: 43px;
        height: 43px;
        border-radius: 43px;
        margin-right: 9px;
      }
      .userName {
        font-size: 14px;
        margin-right: 38px;
      }
    }
  }
  .el-container {
    height: 100%;
    .myaside {
      height: 100%;
      width: 200px;

      // 加样式，折叠更丝滑
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
      }
    }
    .mymain {
      background:rgba(232,233,236,1);
      height: 100%;
    }
  }
}
</style>