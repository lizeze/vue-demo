<template>
  <custom-table v-bind:header="header" :list="list"></custom-table>

</template>
<script>
  import CustomTable from "../components/base/CustomTable";

  export default {
    components: {CustomTable},
    data() {
      return {
        header: [{text: '姓名', key: 'name'},
          {text: '年龄', key: 'age'},
          {text: '性别', key: 'sex'}],
        list: [
          {name: '李泽泽', age: 12, sex: '男'},
          {name: '李泽泽', age: 12, sex: '男'}, {name: '李泽泽', age: 12, sex: '男'}, {name: '李泽泽', age: 12, sex: '男'}
        ]
      }
    }
  }
</script>
