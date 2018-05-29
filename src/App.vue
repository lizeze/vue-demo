<template>
  <div id="app" class="clearfix">
    <header>
      <div class="head-inner clearfix">
        <div class="logo">
          <img src="./assets/logo.png" alt="">

        </div>
        <nav>
          <ul class="clearfix">
            <li><a href="#">登陆</a></li>
            <li class="nav-pile">|</li>
            <li><a href="#">注册</a></li>
            <li class="nav-pile">|</li>
            <li><a href="#">关于</a></li>
          </ul>

        </nav>
      </div>
    </header>

     <footer>

       © 2016 fishenal MIT
     </footer>
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
    /*margin-top: 10px;*/
  }

  a {

    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }

  header {

    background: #363636;
  }

  header .logo {
    float: left;
    display: inline-block;
  }

  header .logo img {

    width: 50px;
    margin: 15px 120px;

  }

  header nav {
    display: inline-block;
    float: right;

  }

  header nav ul {

    margin: 27px 120px;
  }

  header nav ul li {

    float: left;
    color: #B0AA9E;

    font-size: 14px;

  }

  .nav-pile {
    padding: 0px 10px;
  }

   footer{


     background: #E3E4E8;
     line-height: 30px;
      margin-top: 30px;
     padding: 40px 0px;
     text-align: center;
   }
</style>
