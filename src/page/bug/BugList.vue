<template>

  <div class="page">

    <header>


      <el-button type="text" class="text-button" @click="search(2)">未关闭</el-button>
      <el-button class="text-button" type="text" @click="search(3)">所有</el-button>
      <el-button type="text" class="text-button" @click="search(4)">指派给我</el-button>
      <el-button type="text" class="text-button" @click="search(5)">未解决</el-button>
      <el-button type="text" class="text-button" @click="search(1)">未关闭</el-button>

    </header>


    <el-row :gutter="20">
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="header">
            <h4>模块</h4>

          </div>
          <div class="text item">
            <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

          </div>
        </el-card>
      </el-col>

      <el-col :span="20">
        <el-card class="box-card">

          <el-table size="mini" :data="tableData" align="center">


            <el-table-column label="等级" prop="bugLevel">


            </el-table-column>
            <el-table-column label="Bug标题">

              <template slot-scope="scope">

                <a href="#">{{ scope.row.bugName }}</a>
              </template>

            </el-table-column>
            <el-table-column label="状态" prop="bugState">


            </el-table-column>
            <el-table-column label="创建" prop="creayeUserId">


            </el-table-column>
            <el-table-column label="负责人" prop="creayeUserId">


            </el-table-column>

          </el-table>
        </el-card>


      </el-col>
    </el-row>


  </div>
</template>
<script>

  //todo 增加页面配置，页面和菜单分开
  import BaseForm from "../../components/base/Form";
  import BaseTable from "../../components/base/Table";

  export default {

    name: 'BugList',
    components: {BaseTable, BaseForm},
    data() {
      let searchList = [
        {name: 'bugState', field: 'bugState'},

      ];
      let $data = {
        defaultProps: {
          children: 'children',
          label: 'text'
        },
        treeData: this.modularData(),
        searchList,
        searchModel: this.$searchModal('bugId'),
        tableData: [],
        searchSwitch: false
      };
      for (let i = 0; i < searchList.length; i++) {
        $data[searchList[i].field] = ''
      }
      return $data


    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },

      search(state) {
        let $this = this;
        let searchModel = $this.searchModel;
        this.bugState = state;
        let list = [];
        for (let i = 0; i < this.searchList.length; i++) {
          let element = this.searchList[i];
          list.push({field: element.field, value: this[element.field]})
        }

        searchModel.fields = list;
        this.postJson('/bug/all', searchModel, function (data) {

          $this.tableData = data.content;

        })

      }
    }, created() {

      // this.search();

    }, computed: {

      load() {
        let searchSwitch = this.searchSwitch;
        this.search();


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

  header {
    text-align: left;
    padding: 5px;
    border: 1px solid #DDDDDD;
    margin-bottom: 17px;
    color: #141414;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

  header .text-button {

    font-size: 13px;

    color: inherit;
  }

  a {
    text-decoration: none;
  }
</style>
