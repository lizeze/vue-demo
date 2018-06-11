<template>
  <div class="page">
    <header>
      <el-row>
        <el-col :span="20">

          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button   @click="onSubmit">查询</el-button>


                <el-button>新增同级节点</el-button>
                <el-button>新增子级节点</el-button>
                <el-button  type="danger">删除</el-button>

            </el-form-item>
          </el-form>
        </el-col>

      </el-row>
    </header>
    <main>
      <div class="tool">
        <el-row>
        </el-row>
      </div>
       <div>
      <el-row>
        <el-col :span="9">
          <el-card class="box-card">
            <div slot="header" class="box-header">
              <span>页面</span>
            </div>

          </el-card>
        </el-col>
      </el-row>
       </div>
    </main>
  </div>
</template>


<script>

  export default {
    name: 'Page',
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },

  }

</script>

<style scoped>


  header {

    border-bottom: 1px solid #DDDDDD;
    margin-bottom: 10px;

  }

    main .tool{
      margin-bottom: 10px;



    }

</style>
