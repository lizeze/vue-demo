<template>


  <div>
    <base-table :title="title" :dataQueryUrl="dataQueryUrl" :search-list="searchList" :columns="columns"
                :filedList="filedList" :order-field="orderFile" :data-save-url="dataSaveUrl"
                :data-delete-url="dataDeleteUrl"></base-table>

  </div>

</template>
<script>
  import BaseTable from "../../components/base/Table";

  export default {
    components: {BaseTable},
    name: 'Product',
    data() {


      return {
        title: "产品",
        orderFile: 'productId',
        searchList: [
          {name: '产品', filed: 'productName', type: 1, value: '',method:5},

        ],
        columns: [{name: '产品', filed: 'productName'},
          {name: '描述', filed: 'productDescribe'},
          {name: '创建时间', filed: 'createTime', type: 1}],

        filedList: [{name: 'ID', filed: 'productId', key: true},
          {name: '产品名称', filed: 'productName', value: ''},
          {
            name: '产品描述',
            filed: 'productDescribe',
            value: ''
          }, {name: '创建时间', filed: 'createDate', key: true}],
        dataQueryUrl: 'product/all',
        dataSaveUrl: 'product/save',
        dataDeleteUrl: 'product/delete'

      }
    }
  }
</script>
