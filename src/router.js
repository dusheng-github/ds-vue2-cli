import Vue from 'vue'
import Router from 'vue-router'
import Account from './views/Account/router'

/* router.js */

Vue.use(Router)

let tid

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: null, meta: { auth: false, global: false } },
    Account,
  ]
})

const beforeEnter = route => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
}

router.beforeEach((to, from, next) => {
  clearInterval(tid)
  if (!window.user_id && (to.meta.auth !== false || to.meta.global !== false)) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  if (
    to.meta.global !== false &&
		!window.globalInfo &&
		window.loadingGlobalInfo
  ) {
    tid = setInterval(() => {
      if (window.globalInfo) {
        clearInterval(tid)
        beforeEnter(to)
        next()
      }
    }, 20)
  } else if (to.meta.userInfo === true && !window.userInfo) {
    tid = setInterval(() => {
      if (window.userInfo) {
        clearInterval(tid)
        beforeEnter(to)
        return next()
      }
    }, 20)
  } else {
    beforeEnter(to)
    next()
  }
})

export default router
