<template>
<div  class="subjectContainner">
  <el-row :gutter="12">
    <el-col class="topCard" :span="24">
      <el-card shadow="always">
        <!-- 上面卡片的表单 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="smallInput" label="学科编号">
            <el-input class="sub" v-model="formInline.rid"></el-input>
          </el-form-item>
          <el-form-item label="学科名称">
            <el-input class="sub" v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item class="smallInput" label="创建者">
            <el-input class="sub" v-model="formInline.username"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.status" placeholder="请选择状态">
              <el-option label="禁用" value="0"></el-option>
              <el-option label="启用" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="btnSmall">
            <el-button type="primary" @click="getData">搜索</el-button>
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
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column prop="rid" label="学科编号"></el-table-column>
          <el-table-column prop="name" label="学科名称"></el-table-column>
          <el-table-column prop="short_name" label="简称"></el-table-column>
          <el-table-column prop="username" label="创建者"></el-table-column>
          <el-table-column prop="create_time" label="创建日期"></el-table-column>
          <el-table-column prop="status" label="状态">
            <!-- 自定义行模板 -->
            <template slot-scope="scope">
            <span v-if="scope.row.status==1">启用</span>
            <span v-else class="red">禁用</span>
            </template>
          </el-table-column>
          <el-table-column prop="opration" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="text" @click="handleChange(scope.row)">{{scope.row.status === 1?'禁用':'启用'}}</el-button>
              <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSize"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPage">
    </el-pagination>
      </el-card>
    </el-col>
  </el-row>
   <!-- 子组件的使用----当做标签 -->
    <addSubject></addSubject>
    <editSubject ref="editruleForm"></editSubject>
</div>
</template>

<script>
// 导入子组件
import addSubject from './components/addSubject'
import editSubject from './components/editSubject'
// 导入请求方法
import {statusSubject,listSubject,removeSubject} from '../../../api/subject.js'
export default {
  name:'subject',
  // 注册子组件
  components:{
    addSubject,
    editSubject,
  },
  data() {
    return {
      // 上面卡片  表单的数据
      formInline: {
        // 学科编号
        rid: "",
        // 学科名称
        name: "",
        // 创建者
        username: "",
        // 状态
        status:'',
      },
      // 下面卡片的表格数据
      tableData: [
        {
          rid: "",
          name: "",
          // short_name: "",
          username: "",
          create_time: "",
          status: '',
        }
      ],
      // 分页数据
      currentPage: 1,  //当前显示页数
      totalPage:0,    //数据总条数------这里总要给个初始数字
      pageSize:[3,5,9], //页容量选项----每页多少条数据------相应total/pagesize就是会有几页----然后页码条也会相应变化
      limit:5,    //每页有几条

      // 新增表单的显示与否
      addFormVisible: false,
      editFormVisible: false,
    };
  },
  methods: {
    // 清除搜索
    delet() {
      for(var key in this.formInline) {
        this.formInline[key]='';
      }
      this.getData();
    },
    // 上面表单操作事件
    handleEdit(row){ //这里是形参
    // 编辑逻辑
    // 表单显示
      this.editFormVisible=true;
      // 给子组件的表单赋值--------复杂类型的赋值------采用深拷贝
      this.$refs.editruleForm.editSubjectForm=JSON.parse(JSON.stringify(row));
      window.console.log(row);
    },
      // 调用该状态接口
    handleChange(row){
      statusSubject({
        id:row.id
      }).then(res=>{
        window.console.log(res);
        if(res.code===200){
          this.$message.success('状态修改成功！');
          this.getData();
        }
      })
      // window.console.log(row);
    },
      // 数据删除
    handleDelete(row){
      // window.console.log('删除数据',row);
      this.$confirm('确定要删除吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeSubject({
            id:row.id
          }).then(res=>{
            // window.console.log(res);
            if(res.code===200){
              this.$message.success('删除成功');
              this.getData();
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    // 分页方法
      // 页容量改变回调函数
    handleSizeChange(val) {
      window.console.log(`每页 ${val} 条`);
      this.limit=val;
      // 重新获取数据
      this.getData();
    },
      // 当前页的回调函数
    handleCurrentChange(val) {
      this.currentPage=val;
      window.console.log(`当前页: ${val}`);
      // 重新获取数据
      this.getData();
    },
    // 刷新页面数据
    getData(){
      // 获取学科列表------传参渲染全部数据
    listSubject({
      // 传参----搜索条件
      page:this.currentPage,
      limit:this.limit,
      ...this.formInline,
    }).then(res=>{
      // window.console.log('获取',res);
      if(res.code===200){
        // 返回的学科数据
        this.tableData = res.data.items;
        // 总页数
        this.totalPage = res.data.pagination.total;
      }
    })
    },
  },
  // 一进页面就发请求渲染数据
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
    .red{
      color: red;
    }
  }
}
</style>