<template>
  <div class="page">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first">
        <div class="content">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-row>
              <el-col :span="12">
                <el-form-item label="所属产品">
                  <el-select class="form-control" v-model="BugModel.appId">
                    <el-option
                      v-for="item in appData"
                      :key="item.text"
                      :label="item.text"
                      :value="item.value">
                    </el-option>


                  </el-select>
                </el-form-item>

              </el-col>

              <el-col :span="12">
                <el-form-item label="所属模块">

                  <el-select class="form-control" v-model="BugModel.modularId">
                    <el-option
                      v-for="item in modularData"
                      :key="item.text"
                      :label="item.text"
                      :value="item.value">
                    </el-option>

                  </el-select>
                </el-form-item>

              </el-col>


            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="类型">
                  <el-select class="form-control" v-model="BugModel.bugType">
                    <el-option
                      v-for="item in bugType"
                      :key="item.text"
                      :label="item.text"
                      :value="item.value">
                    </el-option>

                  </el-select>
                </el-form-item>

              </el-col>

              <el-col :span="12">
                <el-form-item label="等级">


                  <el-select class="form-control" v-model="BugModel.bugLevel">
                    <el-option
                      v-for="item in bugLeavlData"
                      :key="item.text"
                      :label="item.text"
                      :value="item.value">
                    </el-option>

                  </el-select>
                </el-form-item>

              </el-col>


            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="指派给">
                  <el-input class="form-control" v-model="BugModel.personId"></el-input>
                </el-form-item>

              </el-col>

              <el-col :span="12">
                <el-form-item label="截止日期">
                  <el-date-picker style="width: 100%" v-model="BugModel.completionTime"

                                  type="date"
                                  placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>

              </el-col>


            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="标题">
                  <el-input v-model="BugModel.bugName"></el-input>
                </el-form-item>

              </el-col>


            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="重现步骤">
                  <el-input
                    type="textarea"
                    v-mode="BugModel.bugDescribe"
                    :rows="2"
                    autosize
                    placeholder="请输入内容"
                  >
                  </el-input>
                </el-form-item>

              </el-col>


            </el-row>


            <el-row>
              <el-col :span="24">
                <el-button type="primary" @click="saveBug">保存</el-button>

              </el-col>


            </el-row>
          </el-form>

        </div>
        <!--<base-form :filed-list="filedList"></base-form>-->
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <el-upload
          name="file"
          action="http://localhost:8081/upload/files"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">

          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>


  </div>


</template>
<script>
  import BaseForm from "../../components/base/Form";

  export default {
    name: 'AddBug',
    components: {BaseForm},
    data() {
      return {
        appData: [{

          text: '安庆', value: 1
        }],
        modularData: [

          {text: '罐区监控', value: 1},
          {text: '装置监控', value: 2},
          {text: '物料平衡', value: 3},
          {text: '进厂监控', value: 4},
          {text: '出厂监控', value: 5},


        ],
        bugType: [
          {text: '界面优化', value: 1},
          {text: '功能错误', value: 2},
          {text: '设计问题', value: 3},
          {text: '其他', value: 4},


        ],
        bugLeavlData: [
          {text: '高', value: 1},
          {text: '低', value: 2},
          {text: '一般', value: 3},


        ],
        dialogImageUrl: '',
        dialogVisible: false,


        BugModel: {
          bugId: '',
          bugDescribe: '',
          bugName: '',
          appId: "",
          bugId: '',
          modularId: '',
          modularName: '',
          createTime: null,
          completionTime: null,
          personId: '',
          bugLevel: '',
          bugType: ''
        },
        activeName: 'first',
        labelPosition: 'right'
      }
    }, methods: {
      saveBug() {
  let  $this=this;
         this.postJson('bug/save',this.BugModel,function () {

             $this.alertSuccess('成功')
         })

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style>


  .form-control {

    width: 100%;
  }

</style>
