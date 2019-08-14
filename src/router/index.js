import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Description from '@/pages/Description'
import Require from '@/pages/Require'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/description',
      name: 'Description',
      component: Description
    },
    {
      path: '/require',
      name: 'Require',
      component: Require
    }
  ]
})
