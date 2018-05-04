import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import ListData from './components/ListData.vue'
import GroupData from './components/GroupData.vue'
import Details from './components/Details.vue'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      props: true
    }
  ]
})

// Auto scroll to page top
router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
  next()
})

export default router
