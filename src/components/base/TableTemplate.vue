<template>

  <div class="page">
    <el-table :data="tableData"   align="center">

      <el-table-column v-for="item in columns" :prop="item.filed" :label="item.name"
                       style="width: 100%"></el-table-column>
    </el-table>
  </div>

</template>
<script>

  export default {

    name: 'TableTemplate',
    props: ['columns', 'tableData']

  }

</script>
