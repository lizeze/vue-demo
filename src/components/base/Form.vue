<template>
  <div class="form">
    <div class="form-title">
      <h2> {{setTitle}}</h2>
    </div>
    <div class="form-body">
      <el-form :model="view" label-width="100px" ref="ruleForm">
        <el-form-item :label="item.name" :prop="item.filed" v-for="item in filedList" v-if="item.show!=false">
          <el-input v-if="item.type==1" v-model="model[item.filed]" :placeholder="item.name"></el-input>
          <el-select   style="width: 100%" v-if="item.type==2" v-model="model[item.filed]" filterable placeholder="请选择">
            <el-option
                       v-for="option in item.data"
                       :key="option.value"
                       :label="option.text"
                       :value="option.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="$emit('submit-form',submitForm())">保存</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BaseForm',
    props: ['filedList', 'title', 'formData'],
    data() {
      return {
        model: {}

      };
    },
    methods: {
      submitForm() {
        let mod = this.model;


        return mod;
      },
      resetForm() {
        console.log(this.$refs.ruleForm + 'zzz')
        this.$refs.ruleForm.resetFields();
      }
    }, created() {

    },
    mounted() {
      this.resetForm();
    },
    computed: {
      setTitle() {


        let pageTitle = this.title;
        if (this.formData == null || this.formData == {})
          pageTitle = "新增" + pageTitle;
        else
          pageTitle = "修改" + pageTitle;
        return pageTitle;
      },
      view() {
        let mod = {};
        this.model = this.formData;
        if (this.model == null || this.model == {}) {

          this.filedList.forEach(function (item) {
            mod[item.filed] = item.value;
          });
          this.model = mod;
        }

        return this.model;

      }


    },

  }


</script>

<style scoped>

  .form .form-title {
    padding: 20px 10px;
    border-bottom: 1px solid #F1F1F1;
    text-align: left;
  }

  .form .form-body {

    margin: 20px auto;
  }
</style>
