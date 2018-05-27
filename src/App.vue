<template>
  <div id="app">



    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: {}
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
    margin-top: 10px;
  }

  a {

    text-decoration: none;
    color: inherit;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }

  /*.clearfix{*+height:1%;}*/
</style>
