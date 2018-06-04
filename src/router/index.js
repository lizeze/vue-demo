import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui';
import UserInfo from '../page/base/User';
import IndexPage from '../page/index';
import PageManager from '../page/base/Page'
import Role from '../page/base/Role'
import BugInfo from '../page/bug/AddBug'
import BugList from '../page/bug/BugList'
import  Product from  '../page/system/product'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import moment from "moment";

Vue.prototype.$moment = moment;
Vue.use(Element);
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

Vue.prototype.modularData = function () {


  return [

    {text: '罐区监控', value: 1},
    {text: '装置监控', value: 2},
    {text: '物料平衡', value: 3},
    {text: '进厂监控', value: 4},
    {text: '出厂监控', value: 5},


  ]
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

Vue.prototype.$bugState = function (value) {
  let BugData = [
    {text: '待确认', value: 1},
    {text: '已确认', value: 2},
    {text: '已开始', value: 3},
    {text: '延期', value: 4},
    {text: '完成', value: 5},
    {text: '关闭', value: 6},
    {text: '驳回', value: 7},
  ]
  if (value) {
    let text = "";
    for (let i = 0; i < BugData.length; i++) {
      let element = BugData[i];
      if (element.value == value) {
        text = element.text;
        break;
      }
    }
    return text;
  } else {
    let bugState = {
      noConfirm: 1,
      Confirm: 2,
      Start: 3,
      Delay: 4,
      Complete: 5,
      Close: 6,
      Reject: 7


    }
    return {

      bugState, BugData
    }
  }


}

Vue.prototype.$searchModal = function (orderField) {
  return {
    pageSize: 10,
    pageIndex: 1,
    orderField: orderField,
    isAsc: 'true',
    fields: []
  }
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
          path: 'buglist',
          name: 'BugList',
          component: BugList
        },
        {
          path: 'role',
          name: 'Role',
          component: Role
        },
        {
          path: 'bug',
          name: 'Bug',
          component: BugInfo
        },{
          path: 'product',
          name: 'product',
          component: Product
        }
      ]
    },


  ]
})
