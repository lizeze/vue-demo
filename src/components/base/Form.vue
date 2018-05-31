<template>
  <div class="form">
    <div class="form-title">

      <h2>{{title}}</h2>
    </div>
    <div class="form-body">


      <el-form :model="model" label-width="100px">
        <el-form-item :label="item.name" :prop="item.filed" v-for="item in filedList" v-if="!item.key">
          <el-input   v-if="!item.key"  v-model="model[item.filed]" :placeholder="item.name"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" v-on:click="$emit('submit-form',submitForm())">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>


    </div>

  </div>

</template>
<script>

  export default {

    name: 'BaseForm',
    props: ['filedList','title'],
    data() {
      let model = {};
      this.filedList.forEach(function (item) {
        model[item.filed] = item.value;
      });


      return {

        model


      };
    },
    methods: {
      submitForm() {
        return this.model;
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

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
