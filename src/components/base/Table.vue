<template>

  <div class="page">
    <div class="page-tool">
      <el-form :inline="true" :model="searchModal" class="demo-form-inline">


        <el-form-item :label="item.name" v-for="item in searchList">

          <el-input v-if="item.type==1" size="small" v-model="searchModal[item.filed]"
                    :placeholder="item.name"></el-input>
          <el-select v-if="item.type==2" size="small" v-model="searchModal[item.filed]" :placeholder="item.name">

            <el-option v-for="option in  item.data" :label="option.text" :value="option.value"></el-option>
          </el-select>

        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small" icon="el-icon-search" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="page-content">

      <div class="content-body">
        <el-table
          :data="tableData"
          style="width: 100%" align="center">
          <el-table-column v-for="item in columns"
                           :prop="item.filed"
                           :label="item.name"
                            >
          </el-table-column>

        </el-table>
      </div>
    </div>
  </div>
</template>


<script>


  export default {

    name: 'SearchForm',
    props: ['searchList', 'columns', 'dataQueryUrl'],
    data() {
      let searchModal = {};
      this.searchList.forEach(function (item) {
        searchModal[item.filed] = item.value;
      });
      return {
        searchModal,
        tableData: []

      }
    }, methods: {

      search() {
        var $this = this;
        this.getJson(this.dataQueryUrl, function (data) {
           console.log(data)
          $this.tableData = data
        })
      }
    }, created() {

      this.search();
    }


  }
</script>
