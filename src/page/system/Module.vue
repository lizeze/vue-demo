<template>
  <div class="page">


    <base-table :title="title" :dataQueryUrl="dataQueryUrl" :search-list="searchList" :columns="columns"
                :filedList="filedList" :order-field="orderFile" :data-save-url="dataSaveUrl"
                :data-delete-url="dataDeleteUrl"></base-table>


  </div>


</template>

<script>

  import BaseTable from "../../components/base/Table";

  export default {


    name: 'Module',
    components: {BaseTable},
    data() {
      let $this = this;
      return {

        title: "模块",
        orderFile: 'moduleId',
        searchList: [
          {name: '模块名称', filed: 'moduleName', type: 1, value: '', method: 5},

        ],
        columns: [{name: '模块名称', filed: 'moduleName'},

          {name: '创建时间', filed: 'createTime', type: 1}],

        filedList: [{name: 'ID', filed: 'moduleId', show: false},
          {name: '产品名称', filed: 'moduleName', value: '', type: 1}
          , {name: '创建时间', filed: 'createDate', show: false},
          {name: '产品', filed: 'productId', type: 2, data: $this.productData}],
        dataQueryUrl: 'module/all',
        dataSaveUrl: 'module/save',
        dataDeleteUrl: 'module/delete',
        productData: [{name: '1', value: '1'}]


      };
    },
    methods: {

      getAllProduct() {
        let $this = this;
        this.postJson('product/', {}, function (data) {


         console.log(data)

        })


      }


    }, created() {

    }, mounted() {

      this.getAllProduct()

    }
  }

</script>
