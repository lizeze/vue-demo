<template>
  <div class="page">

    <base-table :columns="columns" :search-list="searchList" :data-query-url="dataQueryUrl">

    </base-table>


  </div>


</template>
<script>
  import BaseTable from "../../components/base/Table";

  export default {
    name: 'Role',
    components: {BaseTable},
    data() {

      return {
        searchList: [
          {name: '角色', filed: 'name', type: 1},

        ],
        columns: [{name: '角色', filed: 'roleName'},
          {name: '描述', filed: 'roleDescribe'},
          {name: '创建时间', filed: 'createDate'}],

        dataQueryUrl: 'role/all'


      }


    }

  }
</script>
