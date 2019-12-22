<template>
  <div class="addSubject">
    <el-dialog title="新增企业" :visible.sync="$parent.addFormVisible">
    <el-form :model="addenterprise" :rules="addrules" ref="addruleForm">
      <el-form-item label="企业编号" prop='eid' :label-width="formLabelWidth">
        <el-input class="sub" v-model="addenterprise.eid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="企业名称" prop='name' :label-width="formLabelWidth">
        <el-input class="sub" v-model="addenterprise.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="企业简介" :label-width="formLabelWidth">
        <el-input class="sub" v-model="addenterprise.intro" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="企业简称" :label-width="formLabelWidth">
        <el-input class="sub" v-model="addenterprise.short_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="企业备注" :label-width="formLabelWidth">
        <el-input class="sub" v-model="addenterprise.remark" autocomplete="off"></el-input>
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
import {addEnterprise} from '../../../../api/enterprise'
export default {
  data() {
    return {
      // 新增表单数据
    //   表单显示控件在父组件中
      addenterprise: {
        name: "",
        eid: "",
        intro:'',
        short_name:'',
        remark:'',
      },
      formLabelWidth: "80px",
      // 表单验证规则
      addrules:{
        name: [
            { required: true, message: '企业名称不得为空', trigger: 'blur' },
          ],
        eid: [
            { required: true, message: '企业编号不得为空', trigger: 'blur' },
          ],
        short_name: [
            { required: true, message: '企业简称不得为空', trigger: 'blur' },
          ],
        remark: [
            { required: true, message: '企业简介不得为空', trigger: 'blur' },
          ],
      }
    };
  },
  methods: {
    // 点击确定----实现新增
    addSub(){
      // 新增将整个表单的数据传过去
      addEnterprise(this.addenterprise).then(res=>{
        window.console.log(res);
        if(res.code===200){
          this.$parent.getData();
          this.$parent.addFormVisible = false;
        }else if(res.code==201){
          this.$message.error('企业编码已存在');
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