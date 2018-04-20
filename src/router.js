import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import ListData from './components/ListData.vue'
import GroupData from './components/GroupData.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: ListData
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupData
    }
  ]
})