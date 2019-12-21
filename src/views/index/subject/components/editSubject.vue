<template>
  <div class="editSubject">
    <el-dialog title="编辑学科" :visible.sync="$parent.editFormVisible">
    <el-form :model="editSubjectForm" :rules="editrules" ref="editruleForm">
      <el-form-item label="学科编号" prop='rid' :label-width="formLabelWidth">
        <el-input class="sub" v-model="editSubjectForm.rid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科名称" prop='name' :label-width="formLabelWidth">
        <el-input class="sub" v-model="editSubjectForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科简称" :label-width="formLabelWidth">
        <el-input class="sub" v-model="editSubjectForm.short_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科简介" :label-width="formLabelWidth">
        <el-input class="sub" v-model="editSubjectForm.intro" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科备注" :label-width="formLabelWidth">
        <el-input class="sub" v-model="editSubjectForm.remark" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$parent.editFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="editSub">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
// 导入新增请求
import {editSubject} from '../../../../api/subject.js'
export default {
  data() {
    return {
      // 新增表单数据
    //   表单显示控件在父组件中
      editSubjectForm: {
        name: "",
        rid: "",
        intro:'',
        short_name: "",
        remark:'',
      },
      formLabelWidth: "80px",
      // 表单验证规则
      editrules:{
        name: [
            { required: true, message: '学科名称不得为空', trigger: 'blur' },
          ],
        rid: [
            { required: true, message: '学科编号不得为空', trigger: 'blur' },
          ],
      }
    };
  },
  methods: {
    // 点击确定----实现新增
    editSub(){
      // 新增将整个表单的数据传过去
      editSubject(this.editSubjectForm).then(res=>{
        window.console.log(res);
        if(res.code===200){
          this.$parent.getData();
          this.$parent.editFormVisible = false;
        }else if(res.code==201){
          this.$message.error('课程编码已存在');
        }
      })
    }
  },
};
</script>

<style lang='less'>
.editSubject{   //一般加一个全局类包裹---不受外界样式干扰
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