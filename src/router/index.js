import Vue from 'vue'
import Router from 'vue-router'
import Skills from '@/components/Skills'
import About from '@/components/About'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/test/:name',
      name: 'test',
      component: test
    }
  ]
})
