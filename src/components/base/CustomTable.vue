<template>

  <div>
    <table rules=rows >
      <thead>
      <tr>
        <th>序号</th>
        <th v-for="item in  header">
          <a> {{item.text}}</a>
        </th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(row,index) in list">
        <td>{{index+1}}</td>
        <td v-for="item in header">

          {{row[item.key]}}
        </td>

      </tr>

      </tbody>

    </table>
  </div>
</template>

<script>

  export default {

    name: 'CustomTable',
    props: ['header', 'list'],


  }

</script>

<style>
  table{

     width: 90%;
  }
   table thead tr th {

      padding: 0px 10px;
   }

  table tbody tr {
    display: table-row;
  }


  table tbody tr td {
    vertical-align: top;
    display: table-cell;
    padding: 5px;

    line-height: 1.42857143;

    border-bottom: 1px solid #DDDDDD;
    /*border-bottom: 1px solid #DDDDDD;*/
  }


</style>
