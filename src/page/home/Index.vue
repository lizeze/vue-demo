<template>

  <div class="container">

    <header>
      <div class="toolBar">


        <h5>易软天创项目管理系统</h5>

        <div class="rightBar">

          <a>Demo</a>
          <a>退出</a>
          <a>帮助</a>
          <a>关于</a>

        </div>
      </div>

    </header>

    <nav>
      <router-link :to="{ name: 'List', params: { userId: 123 }}">User</router-link>
    </nav>
    <router-view    />

  </div>
</template>


<script>


  export default {


    name: 'Index',
    data(){


      return{

           buttons:[{text:'1111'},{text:'1111'},{text:'1111'}]

      }

    }
  }


</script>


<style>
  .container {

    margin-top: -10px;

    padding: 0px;
  }

  header .toolBar {

    background-color: #0F3462;

    height: 70px;
  }

  header .toolBar h5 {
    padding: 7px 11px;
    text-align: left;
    color: #fc0;
    font-weight: bold;
    margin: 0;
  }

  header .toolBar .rightBar {
    color: #ffffff;
    float: right;
    margin-top: -25px;
  }

  header .toolBar .rightBar a {
    padding: 0px 6px;

  }
   nav{
     float: left;
     margin-top: -37px;
     margin-left: 20px;
   }
</style>
