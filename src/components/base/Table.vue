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
          <el-button type="primary" size="small" icon="el-icon-circle-plus" @click="handleAdd">新增
          </el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteData">删除</el-button>

        </el-form-item>
      </el-form>
    </div>
    <div class="page-content">
      <div class="content-body">
        <el-table
          :data="tableData"
          @selection-change="handleSelectionChange"
          stripe
          row-key="roleId"
          style="width: 100%"
          align="center"
          :size="size">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            type="index"
          >
          </el-table-column>
          <el-table-column v-for="item in columns"
                           :prop="item.filed"
                           :label="item.name"
                           :key="item.filed"
                           :size="size"
                           sortable
                           :formatter="item.type==1?dateFormat:null"
          >
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>

            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="content-footer">
        <el-pagination
          background
          layout="prev, pager, next,jumper,sizes,total"
          :page-sizes="pageSizes"
          :total="total"
          @prev-click="prevclick"
          @next-click="nextclick"
          @current-change="currentchange"
          @size-change="sizechange">
        </el-pagination>
      </div>
    </div>

    <el-dialog :visible.sync="dialogFormVisible">
      <base-form ref="form" :filedList="filedList" v-on:submit-form="submitForm" :title="title"
                 :formData="editData"></base-form>

    </el-dialog>
  </div>


</template>
<script>
  // import moment from 'vue-moment'

  import BaseForm from "./Form";

  export default {
    name: 'BaseTable',
    components: {BaseForm},
    props: ['searchList', 'columns', 'dataQueryUrl', 'filedList', 'dataSaveUrl', 'dataDeleteUrl'],
    data() {
      let searchModal = {};
      this.searchList.forEach(function (item) {
        searchModal[item.filed] = item.value;
      });


      return {
        searchModal,
        title: '新增角色',
        editData: {},
        multipleSelection: [],
        size: 'small',
        tableData: [],
        pageSizes: [10, 15, 20, 25],
        pageIndex: 1,
        pageSize: 10,
        total: 0,
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
      handleEdit(index, row) {
        this.title = "修改角色";
        let mod = {};
        for (let i = 0; i < this.filedList.length; i++) {
          let element = this.filedList[i];
          mod[element.filed] = row[element.filed]
        }
        this.editData = mod;
        this.dialogFormVisible = true


      },
      handleAdd() {
        this.dialogFormVisible = true;
        this.title = "新增角色";
        this.editData = null;


      },
      deleteData() {
        var $this = this;
        if (this.multipleSelection.length <= 0) {
          this.alertWarning('未选择项');
          return
        }

        $this.confirm('确认删除吗', function () {
          $this.postJson($this.dataDeleteUrl, $this.multipleSelection, function (data) {
            $this.alertSuccess('删除成功');
            $this.search();

          })
        })


      },
      handleSelectionChange(val) {
        this.multipleSelection = val;

        console.log(val)
      },
      prevclick(pageIndex) {
        if (this.pageIndex == pageIndex) return
        this.pageIndex = pageIndex
        this.search();
      },
      nextclick(pageIndex) {
        if (this.pageIndex == pageIndex) return
        this.pageIndex = pageIndex
        this.search();

      },
      currentchange(pageIndex) {
        if (this.pageIndex == pageIndex) return
        this.pageIndex = pageIndex
        this.search();

      },
      sizechange(pageSize) {
        this.pageSize = pageSize;
        this.search();

      },


      submitForm: function (model) {
        let $this = this;
        this.postJson(this.dataSaveUrl, model, function (data) {
          $this.alertSuccess('保存成功')
          $this.dialogFormVisible = false
          $this.search()

        })


      },
      getSearchModal() {
        let searchMod = {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          orderField: 'roleId',
          isAsc: 'true',
          fields: []
        };
        for (var item in this.searchModal) {
          searchMod.fields.push({field: item, value: this.searchModal[item]});

        }
        return searchMod;

      },
      search() {
        var $this = this;
        this.postJson(this.dataQueryUrl, this.getSearchModal(), function (data) {
          $this.tableData = data.content;
          $this.total = data.totalElements;
        })
      },
      dateFormat: function (row, column) {

        if (row.createDate == null) return '';

        return this.$moment(new Date(row.createDate)).format("YYYY-MM-DD HH:mm");
      }
    }

    , created() {

      this.search();
    }

  }
</script>
