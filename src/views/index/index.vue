<template>
  <el-container class="indexContainner">
    <el-header class="myheader">Header</el-header>
    <el-container>
      <el-aside class="myaside" width="200px">
        <!-- 导航菜单 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据概览</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-user"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">题库列表</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-office-building"></i>
            <span slot="title">企业列表</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">学科列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="mymain">
        <!-- 嵌套路由 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>
 
<style lang='less'>
.indexContainner {
  width: 100%;
  height: 100%;
  .myheader {
    width: 100%;
    background-color: gold;
  }
  .el-container {
    height: 100%;
    .myaside {
      background-color: pink;
      height: 100%;
      width: 201px;
    }
    .mymain {
      background-color: aqua;
      height: 100%;
    }
  }
}
</style>