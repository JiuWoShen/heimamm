<template>
  <div class="question_containner">
    <!-- 上面的卡片 -->
    <el-col class="topCard">
      <el-card shadow="always">
        <!-- 上面卡片的表单 -->
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline">
          <el-form-item label="学科">
            <el-select v-model="ruleForm.subject" placeholder="请选择学科">
              <!-- label是下拉显示的文字-----若没有则默认将下拉侠士为value -->
              <el-option
                v-for="(item,index) in subjectList"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="阶段">
            <el-select v-model="ruleForm.step" placeholder="请选择阶段">
              <el-option label="初级" value="1"></el-option>
              <el-option label="中级" value="2"></el-option>
              <el-option label="高级" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业">
            <el-select v-model="ruleForm.enterprise" placeholder="请选择企业">
              <el-option
                v-for="(item,index) in enterpriseList"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="题型">
            <el-select v-model="ruleForm.type" placeholder="请选择题型">
              <el-option label="单选" value="1"></el-option>
              <el-option label="多选" value="2"></el-option>
              <el-option label="简答" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-select v-model="ruleForm.difficulty" placeholder="请选择难度">
              <el-option label="简单" value="1"></el-option>
              <el-option label="一般" value="2"></el-option>
              <el-option label="困难" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="作者">
            <el-input class="sub" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="ruleForm.status" placeholder="请选择状态">
              <el-option label="禁用" value="0"></el-option>
              <el-option label="启用" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期">
            <!-- elementUI 插件 -->
            <el-date-picker class="smallInput" v-model="value" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="标题" class="specialinput">
            <el-input class="sub" v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item class="btnSmall btnflex">
            <el-button type="primary" @click="getData">搜索</el-button>
            <el-button @click="delet">清除</el-button>
            <!-- 字体图标有点大，就先用加号吧----- icon='el-icon-plus' -->
            <el-button type="primary" @click="qustionFormVisible= true">+ 新增试题</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <!-- 下面的盒子 -->
    <el-col class="bottomCard">
      <el-card shadow="always">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="180"></el-table-column>
          <el-table-column label="题目" width="180"></el-table-column>
          <el-table-column label="学科·阶段"></el-table-column>
          <el-table-column label="题型"></el-table-column>
          <el-table-column label="企业"></el-table-column>
          <el-table-column label="创建者"></el-table-column>
          <el-table-column label="状态"></el-table-column>
          <el-table-column label="访问量"></el-table-column>
          <el-table-column label="操作"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 子组件的使用-----不能嵌套至任何表单或表格内部----平铺作为页面元素即可 -->
    <addquestion></addquestion>
  </div>
</template>

<script>
import { listSubject } from "../../../api/subject.js";
import { listEnterprise } from "../../../api/enterprise.js";
// 导入子组件
import addquestion from './components/addquestion'

export default {
  components:{
    // 注册
    addquestion
  },
  data() {
    return {
      ruleForm: {},
      rules: {},
      addFormVisible: false,
      tableData: [],
      subjectList: [],
      enterpriseList: [],
      // 日期选择器
      value: "",
      // 新增表单的显示控制
      qustionFormVisible:false,
    };
  },
  methods: {
    delet() {},
    getData() {}
  },
  created() {
    // 获取学科
    listSubject().then(res => {
      this.subjectList = res.data.items;
    });
    // 获取企业
    listEnterprise().then(res => {
      this.enterpriseList = res.data.items;
    });
  }
};
</script>

<style lang='less'>
.question_containner {
  .topCard {
    .el-form-item__content {
      width: 150px;
    }
    .el-form-item__label {
      margin: 0 30px;
      padding-right: 0;
    }
    .btnflex .el-form-item__content {
      display: flex;
    }
    .specialinput .el-form-item__content {
      width: 388px;
    }
    //时间输入框
    .el-date-editor,.smallInput{
      width: 100%;
    }
  }
  .bottomCard {
    margin-top: 21px;
  }
}
</style>