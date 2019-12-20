<template>
  <div class="addSubject">
    <el-dialog title="新增学科" :visible.sync="$parent.addFormVisible">
    <el-form :model="form">
      <el-form-item label="学科编号" :label-width="formLabelWidth">
        <el-input class="sub" v-model="form.num" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科名称" :label-width="formLabelWidth">
        <el-input class="sub" v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科简称" :label-width="formLabelWidth">
        <el-input class="sub" v-model="form.intro" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科简介" :label-width="formLabelWidth">
        <el-input class="sub" v-model="form.jian" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科备注" :label-width="formLabelWidth">
        <el-input class="sub" v-model="form.beizhu" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$parent.addFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addSub">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
// 导入新增请求
import {addSubject} from '../../../../api/subject.js'
export default {
  data() {
    return {
      // 新增表单数据
    //   表单显示控件在父组件中
      form: {
        name: "",
        num: "",
        intro:'',
        jian: "",
        beizhu: ""
      },
      formLabelWidth: "80px"
    };
  },
  methods: {
    // 点击确定----实现新增
    addSub(){
      addSubject({
        rid:this.form.num,
        name:this.form.name
      }).then(res=>{
        // window.console.log(res);
        if(res.code===200){
          this.$parent.getData();
          this.$parent.addFormVisible = false;
        }
      })
    }
  },
};
</script>

<style lang='less'>
.addSubject{   //一般加一个全局类包裹---不受外界样式干扰
  .el-dialog__header{
    background: linear-gradient(to right,rgba(1, 196, 250) rgba(19, 148, 250));
    text-align: center;
    span{
      color: white;
    }
    i{
      color: white;
    }
  }
  .el-dialog__footer{
    text-align: center;
  }
}
</style>