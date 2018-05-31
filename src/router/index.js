import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Element from 'element-ui';
import UserInfo from '../page/base/User';
import IndexPage from '../page/index';
import Role from '../page/base/Role'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import moment from "moment";
import mock from '../mock/mock'

Vue.prototype.$moment = moment;
Vue.use(Element);
Vue.use(Router)
Vue.use(Router)
const ip = "http://localhost:8081/";
Vue.prototype.getJson = function (url, callback) {
  axios.get(url).then(function (response) {
    callback && callback(response.data.list);

  })
}
Vue.prototype.postJson = function (url, data, callback) {

  axios.post(ip + url, data).then(function (res) {

    callback && callback(res.data);

  })
}


Vue.prototype.alertWarning = function (mess) {
  this.$message({
    message: mess,
    type: 'warning'
  });
}


Vue.prototype.alertSuccess = function (mess) {
  this.$message({
    message: mess,
    type: 'success'
  });
}

Vue.prototype.confirm = function (mess, callback) {
  this.$confirm(mess, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(function () {
    callback && callback();
  })
}


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
      children: [

        {
          path: 'userinfo',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: 'baseform',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: 'role',
          name: 'Role',
          component: Role
        }
      ]
    },


  ]
})
