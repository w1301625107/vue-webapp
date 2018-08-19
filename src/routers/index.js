import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash', //后端支持可开
  routes: [{
      path: '/',
      component: () =>
        import ('@views/home/index.vue')
    },
    {
      path: '/rank',
      component: () =>
        import ('@views/rank/index.vue')
    },
    {
      path: '/404',
      name: 'Page404',
      component: () =>
        import ('@views/error-page/404.vue')
    },
    {
      path: '*',
      component: () =>
        import ('@views/error-page/404.vue')
    },
  ]
})