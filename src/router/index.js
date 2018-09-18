import Vue from 'vue'
import Router from 'vue-router'
import oldhello from '@/components/oldhello'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'oldhello',
      component: oldhello
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ]
})
