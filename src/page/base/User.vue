<template>
  <div class="page">
    <div class="page-tool">
      <base-table :dataQueryUrl="dataQueryUrl" :search-list="searchList" :columns="columns"></base-table>

        <!--<base-form></base-form>-->
    </div>
    <div class="page-content">

      <div class="content-body">


      </div>


    </div>
  </div>
</template>

<script>
  import BaseTable from "../../components/base/Table";
  import BaseForm from "../../components/base/Form";

  export default {

    name: 'UserInfo',
    components: {BaseForm, BaseTable},
    data() {
      return {

        searchList: [
          {name: '姓名', filed: 'name', type: 1},
          {name: '部门', filed: 'dept', type: 2, data: [{text: '部门1', value: 2}, {text: '部门3', value: 3}]},


        ],
        columns: [{name: '姓名', filed: 'name'},
          {name: '部门', filed: 'dept'}, {
          name: '邮箱',
          filed: 'email'
        },
          {name: '地址', filed: 'address'}],

        dataQueryUrl: 'users'


      }
    }, methods: {
      formatter(row, column) {
        return row.address;
      }
    }

  }


</script>
