<template>
  <el-row :gutter="12" class="subjectContainner">
    <el-col class="topCard" :span="24">
      <el-card shadow="always">
        <!-- 上面卡片的表单 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="smallInput" label="学科编号">
            <el-input class='sub' v-model="formInline.num"></el-input>
          </el-form-item>
          <el-form-item label="学科名称">
            <el-input class='sub' v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item class="smallInput" label="创建者">
            <el-input class='sub' v-model="formInline.creater"></el-input>
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
            <el-button type="primary" @click="dialogFormVisible = true"> + 新增学科</el-button>
          </el-form-item>
        </el-form>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input class='sub' v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="编辑" value="edit"></el-option>
                <el-option label="禁用" value="forbidden"></el-option>
                <el-option label="删除" value="delete"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card shadow="always" class="bottomCard">
        <!-- 下面的表格 -->
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="index" label="序号" width="70"></el-table-column>
          <el-table-column prop="num" label="学科编号" width="100"></el-table-column>
          <el-table-column prop="name" label="学科名称" width="170"></el-table-column>
          <el-table-column prop="jian" label="简称" width="90"></el-table-column>
          <el-table-column prop="creater" label="创建者" width="90"></el-table-column>
          <el-table-column prop="creatDate" label="创建日期" width="150"></el-table-column>
          <el-table-column prop="state" label="状态" width="100"></el-table-column>
          <el-table-column prop="opration" label="操作"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        num: "",
        name: "",
        creater: "",
        state: ""
      },
      tableData: [
        {
          index: "1",
          num: "QD001",
          name: "前端与移动开发",
          jian: "前端",
          creater: "小灰灰",
          creatDate: "2019-12-18",
          state: "启用",
          opration: "编辑 禁用 删除"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      // 表单数据
      dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    };
  },
  methods: {
    search() {
      window.console.log("submit!");
    },
    delet() {
      window.console.log("submit!");
    },
    addSubject() {},
    // 分页方法
    handleSizeChange(val) {
      window.console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      window.console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang='less'>
.subjectContainner{
  .topCard {
    margin-bottom: 19px;

    .el-form-item__content{
      width: 149px;
    }
    .smallInput .el-form-item__content{
      width: 100px;
    }
    .btnSmall .el-form-item__content{
      width: 100%;
    }
  }
  .bottomCard{
    /* 分页居中 */
    .el-pagination {
      margin-top: 30px;
      text-align: center;
    }
  }
}
</style>