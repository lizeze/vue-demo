<template>
  <div class="page">

    <base-table :columns="columns" :search-list="searchList" :data-query-url="dataQueryUrl" :filedList="filedList"
                :dataSaveUrl="dataSaveUrl" :dataDeleteUrl="dataDeleteUrl" >

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
          {name: '角色', filed: 'roleName', type: 1},

        ],
        columns: [{name: '角色', filed: 'roleName'},
          {name: '描述', filed: 'roleDescribe'},
          {name: '创建时间', filed: 'createDate', type: 1}],

        dataQueryUrl: 'role/all',
        dataSaveUrl: 'role/save',
        dataDeleteUrl: 'role/delete',
        filedList: [{name: 'ID', filed: 'roleId', key: true}, {name: '角色', filed: 'roleName', value: ''}, {
          name: '描述',
          filed: 'roleDescribe',
          value: ''
        },{name:'创建时间',filed:'createDate',key:true}]


      }


    },methods:{


      deleteData(){

        this.zeze=!this.zeze

      }
    }

  }
</script>
