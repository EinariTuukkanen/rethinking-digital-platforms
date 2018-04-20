// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import App from './App'
// import ListData from './components/ListData.vue'
// import GroupData from './components/GroupData.vue'

// const NotFound = { template: '<p>Page not found</p>' }

Vue.config.productionTip = false

// const routes = {
//   '/': Home,
//   '/list': ListData,
//   '/groups': GroupData
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute] || NotFound
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })
