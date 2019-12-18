<template>
  <el-container class="indexContainner">
    <el-header class="myheader">
      <div class="left">
        <i class="el-icon-s-fold icon" @click="isCollapse = !isCollapse"></i>
        <img src="../../assets/index_logo.png" alt />
        <span>黑马面面</span>
      </div>
      <div class="right">
        <img src="../../assets/index_header.jpg" alt="">
        <span class="userName">李达，你好</span>
        <el-button type="primary" size="small">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside class="myaside" width='auto'>
        <!-- 导航菜单 -->
        <el-menu :collapse="isCollapse"
          default-active="/index/user"   
          class="el-menu-vertical-demo" router>
          <el-menu-item index="/index/chart">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据概览</span>
          </el-menu-item>
          <el-menu-item index="/index/user">
            <i class="el-icon-user"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
          <el-menu-item index="/index/question">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">题库列表</span>
          </el-menu-item>
          <el-menu-item index="/index/enterprise">
            <i class="el-icon-office-building"></i>
            <span slot="title">企业列表</span>
          </el-menu-item>
          <el-menu-item index="/index/subject">
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
import {getToken} from '../../utils/token.js'
export default {
  name: "index",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    
  },
  // 访问首页应判断是否携带token----尽早判断-----嵌套组件无需再判断，因为想要方文嵌套组件就一定会执行index的生命周期钩子
  // 迁移到导航守卫中
  /* beforeCreate() {
    if(!getToken()){
      this.$message.warning('请先登录！');
      this.$router.push('/login');
    }
  }, */
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
    justify-content: space-between;  //两头分布

    .left{
      display: flex;
      align-items: center;
      .icon{
        font-size: 24px;
        margin-right: 22px;
      }
      img{
        margin-right: 11px;
        width: 33px;
      }
      span{
        font-size: 22px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      img{
        width: 43px;
        height: 43px;
        border-radius: 43px;
        margin-right: 9px;
        } 
        .userName{
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
      background-color: aqua;
      height: 100%;
    }
  }
}
</style>