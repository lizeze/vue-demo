<template>
  <div class="page">
    <div class="page-tool">
      <search-form :dataQueryUrl="dataQueryUrl" :search-list="searchList" :columns="columns"></search-form>

    </div>
    <div class="page-content">

      <div class="content-body">


      </div>


    </div>
  </div>
</template>

<script>
  import SearchForm from "../../components/base/SearchForm";

  export default {

    name: 'UserInfo',
    components: {SearchForm},
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
