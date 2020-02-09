<template>
    <el-dialog class="addquestion"
      title="新增题库测试"
      fullscreen
      :visible.sync="$parent.qustionFormVisible"
      @opened="opened"
    >
      <el-form :model="addquestionform">
        <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="addquestionform.name" autocomplete="off"></el-input>
        </el-form-item>-->
        <el-form-item label="学科" :label-width="formLabelWidth">
          <el-select v-model="addquestionform.subject" placeholder="请选择学科">
            <el-option
              v-for="item in $parent.subjectList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阶段" :label-width="formLabelWidth">
          <el-select v-model="addquestionform.step" placeholder="请选择阶段">
            <el-option label="初级" value="1"></el-option>
            <el-option label="中级" value="2"></el-option>
            <el-option label="高级" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="企业" :label-width="formLabelWidth">
          <el-select v-model="addquestionform.enterprise" placeholder="请选择企业">
            <el-option
              v-for="item in $parent.enterpriseList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth">
          <el-cascader
            size="large"
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"
            :value="110000"
          ></el-cascader>
        </el-form-item>
        <!-- 题型单选框组 -->
        <el-form-item label="题型" :label-width="formLabelWidth">
          <el-radio-group v-model="typeradio_upChange">
            <el-radio :label="1" :value='1'>单选</el-radio>
            <el-radio :label="2" :value='2'>多选</el-radio>
            <el-radio :label="3" :value='3'>简答</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 难度单选框组 -->
        <el-form-item label="难度" :label-width="formLabelWidth">
          <el-radio-group>
            <el-radio :label="1">简单</el-radio>
            <el-radio :label="2">一般</el-radio>
            <el-radio :label="3">困难</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-divider></el-divider>
        <!-- 第一个富文本编辑器 -->
        <el-form-item label="试题标题" :label-width="formLabelWidth"></el-form-item>
        <div id="toolbarhead" class="toolbar"></div>
        <div id="toolbarbody" class="text">
          <!--可使用 min-height 实现编辑区域自动增加高度-->
        </div>
        <!-- 题型 -->
        
        <el-form-item class="singleselect" label="单选" v-if="typeradio_upChange==1">
        <!-- 单选框组 -->
          <el-radio-group v-model="typeradio_singleChange">
            <!-- 选项A -->
            <div class="typeSelected">
              <el-radio label="A"></el-radio>
              <el-input class="selectInput" v-model="input" placeholder="请输入内容"></el-input>
              <!-- 上传图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <!-- 选项B -->
            <div class="typeSelected">
              <el-radio label="B"></el-radio>
              <el-input class="selectInput" v-model="input" placeholder="请输入内容"></el-input>
              <!-- 上传图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <!-- 选项C -->
            <div class="typeSelected">
              <el-radio label="C"></el-radio>
              <el-input class="selectInput" v-model="input" placeholder="请输入内容"></el-input>
              <!-- 上传图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <!-- 选项D -->
            <div class="typeSelected">
              <el-radio label="D"></el-radio>
              <el-input class="selectInput" v-model="input" placeholder="请输入内容"></el-input>
              <!-- 上传图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="singleselect" label="多选" v-if="typeradio_upChange==2" >
          <!-- 多选框组 -->
          <el-checkbox-group v-model="checkList">
            <div class="typeSelected">
              <el-checkbox label="A"></el-checkbox>
              <el-input class="selectInput" v-model="input" placeholder="请输入内容"></el-input>
              <!-- 上传图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="typeSelected">
              <el-checkbox label="B"></el-checkbox>
              <el-input class="selectInput" v-model="input" placeholder="请输入内容"></el-input>
              <!-- 上传图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="typeSelected">
              <el-checkbox label="C"></el-checkbox>
              <el-input class="selectInput" v-model="input" placeholder="请输入内容"></el-input>
              <!-- 上传图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="typeSelected">
              <el-checkbox label="D"></el-checkbox>
              <el-input class="selectInput" v-model="input" placeholder="请输入内容"></el-input>
              <!-- 上传图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item class="singleselect" label="简答" v-else>
          <!-- 简答题 -->
          <el-input type='textarea' :rows='5'></el-input>
        </el-form-item>
        <el-divider></el-divider>
        <!-- 解析视频 -->
        <el-form-item label="解析视频" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="3"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-divider></el-divider>
        <!-- 答案解析富文本编辑器 -->
        <el-form-item label="答案解析" :label-width="formLabelWidth"></el-form-item>
        <div id="answhead" class="toolbar"></div>
        <div id="answbody" class="text">
          <!--可使用 min-height 实现编辑区域自动增加高度-->
        </div>
        <el-divider></el-divider>
        <!-- 试题备注 -->
        <el-form-item label='试题备注'>
          <el-input type='textarea' :rows='3'></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$parent.qustionFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="$parent.qustionFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
</template>

<script>
// 导入省市联动
import { regionDataPlus } from "element-china-area-data";
import wangEditor from "wangeditor";
export default {
  data() {
    return {
      addquestionform: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "90px",
      //   省市联动数据
      options: regionDataPlus,
      selectedOptions: [],
      //   题型单选框组
      typeradio_upChange: 3,
      typeradio_singleChange:'A',
      // 多选框组
      checkList: ['A'],
      // 标题富文本编辑
      titleEditor: undefined,
      // 题型选项
      input: "",
      // 图片上传
      imageUrl: "",
      // 视频解析
      fileList: [],
      // 答案解析富文本
      answerEditor:undefined,
    };
  },
  methods: {
    handleChange() {},
    //   elementUI dialog 的方法钩子----在这里注册富文本
    opened() {
      if (this.titleEditor === undefined) {
        this.titleEditor = new wangEditor("#toolbarhead", "#toolbarbody");
        this.titleEditor.create();
      }
      if (this.answerEditor === undefined) {
        this.answerEditor = new wangEditor("#answhead", "#answbody");
        this.answerEditor.create();
      }

    },
    // 图片上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 视频解析
    
  }
};
</script>

<style lang='less'>
.addquestion {
  //  .el-dialog {
  //   width: 602px;
  // }
  // 表单宽度
  .el-form {
    width: 70%;
    margin: 0 auto;
  }
  .el-radio-group {
    width: 100%;
  }
  /* 头部样式 */
  .el-dialog__header {
    background: linear-gradient(to right, rgba(1, 197, 250) rgba(19, 148, 250));
    height: 54px;
    line-height: 54px;
    padding: 0;
    span {
      color: white;
      margin-left: 18px;
    }
  }
  // 
  .el-form-item__content{
    margin-left: 0;
  }
  // 标题富文本
  .toolbar {
    border: 1px solid #ccc;
  }
  .text {
    border: 1px solid #ccc;
    height: 100px;
  }
  // 上传图片样式
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .singleselect {
    width: 100%;
    margin-top: 59px;
    .el-radio-group {
      width: 100%;
    }
    .typeSelected {
      margin-bottom: 45px;
      display: flex;
      align-items: center;
      // 选项调间距
      .selectInput {
        flex: 1;
        margin: 0 31px 0 20px;
      }
    }
  }
  .dialog-footer{
    text-align: center;
  }
  
}
</style>