<template>
  <div class="page">
    <div class="page-tool">
      <el-form :inline="true" :model="searchModal" class="demo-form-inline">
        <el-form-item :label="item.name" v-for="item in searchList">
          <el-input v-if="item.type==1" size="small" v-model="searchModal[item.filed]"
                    :placeholder="item.name"></el-input>
          <el-select v-if="item.type==2" size="small" v-model="searchModal[item.filed]" :placeholder="item.name">
            <el-option v-for="option in  item.data" :label="option.text" :value="option.value"
                       :key="option.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" icon="el-icon-search" @click="search">查询</el-button>
          <el-button type="primary" size="small" icon="el-icon-circle-plus" @click="dialogFormVisible = true">新增
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="page-content">
      <div class="content-body">
        <el-table
          :data="tableData"
          stripe
          row-key="id"
          style="width: 100%" align="center">
          <el-table-column v-for="item in columns"
                           :prop="item.filed"
                           :label="item.name"
                           :key="item.filed"
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="content-footer">
        <el-pagination
          background
          layout="prev, pager, next,jumper,sizes,total"
          :page-sizes="pageSizes"
          :total="100"
          @prev-click="prevclick"
          @next-click="nextclick"
          @current-change="currentchange"
          @size-change="sizechange">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form label-position="right" label-width="100px">
        <el-form-item label="名称">
          <el-input size="small"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>


</template>
<script>
  export default {
    name: 'BaseTable',
    props: ['searchList', 'columns', 'dataQueryUrl'],
    data() {
      let searchModal = {};
      this.searchList.forEach(function (item) {
        searchModal[item.filed] = item.value;
      });


      return {
        searchModal,
        tableData: [],
        pageSizes: [10, 15, 20, 25],
        pageIndex: 1,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    }, methods: {
      prevclick(pageIndex) {
        if (this.pageIndex == pageIndex) return
        this.pageIndex = pageIndex
      },
      nextclick(pageIndex) {
        if (this.pageIndex == pageIndex) return
        this.pageIndex = pageIndex
      },
      currentchange(pageIndex) {
        if (this.pageIndex == pageIndex) return
        this.pageIndex = pageIndex
      },
      sizechange(pageSize) {

      },
      search() {
        var $this = this;
        this.postJson(this.dataQueryUrl, this.searchModal, function (data) {
          $this.tableData = data
        })
      }
    }, created() {

      this.search();
    }

  }
</script>
