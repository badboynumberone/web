import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Description from '@/pages/Description'
import Require from '@/pages/Require'
import Feature from '@/pages/Feature'
import Plan from '@/pages/Plan'
import Declaration from '@/pages/Declaration'

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
    },
    {
      path: '/feature',
      name: 'Feature',
      component: Feature
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/declaration',
      name: 'Declaration',
      component: Declaration
    }
  ]
})
