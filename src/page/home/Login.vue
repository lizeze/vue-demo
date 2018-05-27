<template>
  <div class="container">

    <div class="login-panel">
      <div class="header">

        <h4> 易软天创项目管理系统</h4>
      </div>

      <div class="login-content">
        <div class="login-form">

          <table>

            <tr>

              <td>用户名</td>
              <td><input type="text"></td>
            </tr>
            <tr>

              <td>密码</td>
              <td><input type="password"></td>
            </tr>
            <tr>
              <td colspan="2">

                <button @click="login">登陆</button>
              </td>

            </tr>
          </table>

        </div>

      </div>

    </div>


  </div>

</template>


<script>

  export default {

    methods: {
      login: function () {
        this.$router.push({//你需要接受路由的参数再跳转
          path: '/index'
        });
      }


    }

  }


</script>

<style>

  body {

    /*background-color: #0F3462;*/
  }

  .container .login-panel {

    width: 540px;
    margin: 0 auto;
    border: 1px solid #dfdfdf;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -moz-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.75);
  }

  .container .header {
    /*background-color: #EEF3FD;*/
    min-height: 70px;
    background-color: #edf3fe;
    border-bottom: 1px
  }

  .container .header h4 {
    text-align: left;
    line-height: 70px;
    font-size: 14px;
    margin: 0 0 0 20px;
  }

  .login-panel .login-content {
    background-image: url("../../assets/zt-logo.png");
    background-repeat: no-repeat;
    min-height: 160px;
    background-color: #FFFFFF;
    background-position: 50px;
    padding: 20px;
    color: #141414;
    font-size: 14px;
    font-weight: bold;

  }

  .login-panel .login-content .login-form {

    margin-left: 170px;
  }

  .login-panel .login-content .login-form table {

    margin: 0px auto;
  }

  login-panel .login-content .login-form table tr td {

  }


</style>
