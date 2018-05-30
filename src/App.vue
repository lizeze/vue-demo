<template>
  <div id="app">


    <router-view></router-view>


  </div>
</template>

<script>

  export default {
    name: 'App',

  }
</script>

<style>


  * {
    bpoder: 0px;
    margin: 0px;
    padding: 0px
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 10px;*/
  }

  .page-tool {
    text-align: left;
    margin: 20px auto;
  }

  .page {

    margin: 20px;
  }

  .page .page-content .content-footer {
    text-align: right;
    margin: 19px;
  }
</style>
