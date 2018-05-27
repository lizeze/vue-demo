import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '../page/List'
import Login from '../page/home/Login'
import Index from '../page/home/Index'
import App from '../App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [


        {

          path: 'list',
          name: 'List',
          component: List
        }
      ]
    }
  ]
})
