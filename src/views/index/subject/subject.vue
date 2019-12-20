<template>
<div  class="subjectContainner">
  <el-row :gutter="12">
    <el-col class="topCard" :span="24">
      <el-card shadow="always">
        <!-- 上面卡片的表单 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="smallInput" label="学科编号">
            <el-input class="sub" v-model="formInline.num"></el-input>
          </el-form-item>
          <el-form-item label="学科名称">
            <el-input class="sub" v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item class="smallInput" label="创建者">
            <el-input class="sub" v-model="formInline.creater"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.state" placeholder="请选择状态">
              <el-option label="禁用" value="0"></el-option>
              <el-option label="启用" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="btnSmall">
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button @click="delet">清除</el-button>
            <!-- 字体图标有点大，就先用加号吧----- icon='el-icon-plus' -->
            <el-button type="primary" @click="addFormVisible= true">+ 新增学科</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card shadow="always" class="bottomCard">
        <!-- 下面的表格 -->
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column type="index" label="序号" width="70"></el-table-column>
          <el-table-column prop="num" label="学科编号" width="100"></el-table-column>
          <el-table-column prop="name" label="学科名称" width="170"></el-table-column>
          <el-table-column prop="jian" label="简称" width="90"></el-table-column>
          <el-table-column prop="creater" label="创建者" width="90"></el-table-column>
          <el-table-column prop="creatDate" label="创建日期" width="150"></el-table-column>
          <el-table-column prop="state" label="状态" width="100"></el-table-column>
          <el-table-column prop="opration" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="text" @click="handleForbidden(scope.$index, scope.row)">禁用</el-button>
              <el-button type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total='totalPage'
        ></el-pagination>
      </el-card>
    </el-col>
  </el-row>
   <!-- 子组件的使用----当做标签 -->
    <addSubject></addSubject>
</div>
</template>

<script>
// 导入子组件
import addSubject from './components/addSubject'
// 导入请求方法
import {listSubject} from '../../../api/subject.js'
export default {
  // 注册子组件
  components:{
    addSubject
  },
  data() {
    return {
      // 上面卡片  表单的数据
      formInline: {
        // 学科编号
        num: "",
        // 学科名称
        name: "",
        // 创建者
        creater: "",
        // 状态
        state: ""
      },
      // 下面卡片的表格数据
      tableData: [
        {
          num: "",
          name: "",
          jian: "",
          creater: "",
          creatDate: "",
          state: '',
        }
      ],

      // 分页数据
      currentPage: '',
      totalPage:'',

      // 新增表单的显示与否
      addFormVisible: false,
    };
  },
  methods: {
    search() {
      
    },
    delet() {
      
    },
    // 上面表单操作事件
    handleEdit(index,row){ //这里是形参
      window.console.log(index, row);
    },
    handleForbidden(index,row){
      window.console.log(index, row);
    },
    handleDelete(index,row){
      window.console.log(index, row);
    },
    // 分页方法
    handleSizeChange(val) {
      window.console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      window.console.log(`当前页: ${val}`);
    },
    // 刷新页面数据
    getData(){
      // 获取学科列表
    listSubject().then(res=>{
      window.console.log('获取',res);
      if(res.code===200){
        this.tableData=res.data.items;
        this.totalPage=res.pagination.total;
        this.currentPage=res.data.pagination.page;
        // window.console.log(this.tableData);
      }
    })
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang='less'>
.subjectContainner {
  .topCard {
    margin-bottom: 19px;

    .el-form-item__content {
      width: 149px;
    }
    .smallInput .el-form-item__content {
      width: 100px;
    }
    .btnSmall .el-form-item__content {
      width: 100%;
    }
  }
  .bottomCard {
    /* 分页居中 */
    .el-pagination {
      margin-top: 30px;
      text-align: center;
    }
  }
}
</style>