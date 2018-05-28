<template>

  <div>
    <table rules=rows>
      <thead>
      <tr>
        <th>序号</th>
        <th v-for="item in  header">
          <a   href="#" @click.prevent="sortBy(item.key)"> {{item.text}}</a>
        </th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(row,index) in filteredData">
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
    data() {
      let sortOrders = {};
      this.header.forEach(function (item) {
        sortOrders[item.key] = 1

      })
      return {
        sortOrders: sortOrders,
        sortKey: ''
      }

    }
    , computed: {
      filteredData: function () {

        let sortKey = this.sortKey;
        let order = this.sortOrders[sortKey] || 1;
        let data = this.list;
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })

        }
        return data;
      }

    }, methods: {

      sortBy: function (key) {

        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1
      }

    }


  }

</script>

<style>
  table {

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
