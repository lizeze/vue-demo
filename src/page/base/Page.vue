<template>

  <div class="page">


    <el-row :gutter="20">
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="header">
            <h4>页面</h4>

          </div>
          <div v-for="o in 4" :key="o" class="text item">
            <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

          </div>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="header">
            <h4>页面编辑</h4>

          </div>
        <base-form></base-form>
        </el-card>
      </el-col>
    </el-row>


  </div>
</template>
<script>

  //todo 增加页面配置，页面和菜单分开
  import BaseForm from "../../components/base/Form";

  export default {

    name: 'Page',
    components: {BaseForm},
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },

        treeData: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            }]
          }]
        }
          ]


      }


    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>

<style>


  .box-card {
    /*width: 280px;*/

    man-height: 400px;



  }

  .box-card .header {

    text-align: left;
  }
</style>
