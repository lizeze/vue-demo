<template>
  <el-container>
    <el-header>
      <div class="title">权限管理系统</div>
    </el-header>
    <el-container>

      <el-aside style="width: 200px">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" :unique-opened="uniqueOpened" background-color="#F6F6F6" :router="isRouter">
          <el-submenu index="1">
            <template slot="title">

              <span slot="title">系统设置</span>
            </template>
            <el-menu-item index="role">角色</el-menu-item>
            <el-menu-item index="buglist">页面</el-menu-item>
            <el-menu-item index="bug">Bug</el-menu-item>
            <el-menu-item index="product">产品</el-menu-item>
            <el-menu-item index="module">模块</el-menu-item>


          </el-submenu>


          <el-submenu index="2">
            <template slot="title">

              <span slot="title">导航一</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
            <el-menu-item index="2-5">选项5</el-menu-item>
            <el-menu-item index="2-6">选项6</el-menu-item>
            <el-menu-item index="2-6">选项6</el-menu-item>
            <el-menu-item index="2-6">选项6</el-menu-item>

          </el-submenu>
        </el-menu>

      </el-aside>
      <el-main>
        <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>


</template>

<script>

  export default {

    name: 'Index',
    data: function () {

      return {
        isCollapse: false,
        uniqueOpened: true,
        isRouter:true


      }
    }, methods: {

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }

</script>

<style scoped>

  .el-menu-item {
    margin-left: 20px;
    font-size: 12px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 600px;
  }

  .el-header {

    color: #FFFFFF;
    background: #4496EC;
    font-family: Kai;
    font-size: 17px;
  }

  .el-header .title {
    margin: 18px;

    text-align: left;
  }

  .el-main {
    padding: 0px;

    margin: 0px;
    background: #FFFFFF;
  }

  .breadcrumb {

    background: #F6F6F6;
    text-align: right;
    padding: 20px 0px;
  }

</style>
