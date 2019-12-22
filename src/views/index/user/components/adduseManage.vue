<template>
  <div class="addUser">
    <el-dialog title="新增用户" :visible.sync="$parent.addFormVisible">
      <el-form :model="addUsemanage" :rules="addrules" ref="addruleForm">
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input class="sub" v-model="addUsemanage.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
          <el-input class="sub" v-model="addUsemanage.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
          <el-input class="sub" v-model="addUsemanage.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role" :label-width="formLabelWidth">
          <el-select v-model="addUsemanage.role_id" placeholder="请选择角色">
            <el-option label="管理员" value="2"></el-option>
            <el-option label="老师" value="3"></el-option>
            <el-option label="学生" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="addUsemanage.status" placeholder="请选择状态">
            <el-option label="禁用" value="0"></el-option>
            <el-option label="启用" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户备注" :label-width="formLabelWidth">
          <el-input class="sub" v-model="addUsemanage.remark" autocomplete="off"></el-input>
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
import { adduser } from "../../../../api/userManager";
import {checkEmail,checkPhone} from '../../../../utils/validator'
export default {
  data() {
    return {
      // 新增表单数据
      //   表单显示控件在父组件中
      addUsemanage: {
      
      },
      formLabelWidth: "80px",
      // 表单验证规则
      addrules: {
        username: [
          { required: true, message: "用户名不得为空", trigger: "blur" }
        ],
        // 邮箱是确切匹配
        email: [{ required: true, validator: checkEmail, trigger: "blur" }],
        phone: [
          { required: true, validator: checkPhone, trigger: "blur" }
        ],
        role: [
          { required: true, message: "角色不得为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 点击确定----实现新增
    addSub() {
      // 新增将整个表单的数据传过去
      adduser(this.addUsemanage).then(res => {
        window.console.log(res);
        if (res.code === 200) {
          this.$parent.getData();
          this.$parent.addFormVisible = false;
        } else if (res.code == 201) {
          this.$message.error("用户编码已存在");
        }
      });
    }
  }
};
</script>

<style lang='less'>
.addUser {
  //一般加一个全局类包裹---不受外界样式干扰
  .el-dialog__header {
    background: linear-gradient(to right, rgba(1, 196, 250) rgba(19, 148, 250));
    text-align: center;
    span {
      color: white;
    }
    i {
      color: white;
    }
  }
  .el-dialog__footer {
    text-align: center;
  }
}
</style>