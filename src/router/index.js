import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { DEAL_LOAD_NUM, SET_CRT } from '../store/types'

// 懒加载方式引入组件
const Login = () => import('@/pages/Login')
const Describe = () => import('@/pages/Describe')
const Explore = () => import('@/pages/Explore')

Vue.use(Router)

// 设置登陆页、首页路由名称
export const LOGIN_ROUTER = '/Login'
export const DEFAULT_ROUTER = '/Describe'

const router = new Router({
  routes: [
    {
      path: LOGIN_ROUTER,
      component: Login,
      meta: {
        loginCheck: inf => !inf,
        tag: 'login'
      }
    },
    {
      path: DEFAULT_ROUTER,
      component: Describe
    },
    {
      path: '/Explore',
      component: Explore,
      meta: {
        loginCheck: inf => !!inf
      }
    },
    {
      path: '/*',
      redirect: DEFAULT_ROUTER
    }
  ],
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  const replace = from.path === LOGIN_ROUTER
  const routersWithCheck = to.matched.filter(r => r.meta.loginCheck)
  // 校验通过=>跳转
  if (routersWithCheck.length === 0 || routersWithCheck.every(r => r.meta.loginCheck(store.state.userInf))) { return next({ replace }) }
  // 需要登录=>登录（跳转的页面只能是非登陆页，所以登录后要重定向）
  if (!store.state.userInf) {
    return next({
      replace,
      path: LOGIN_ROUTER,
      query: { redirect: to.fullPath }
    })
  }
  // 重复登录=>跳转到登录URL后的重定向页或首页
  if (to.path == LOGIN_ROUTER) return next({ replace, path: to.query.redirect || '/' })
  // 权限不够=>原先有页面则不跳，否则跳首页
  next({ replace, path: from.path == '/' ? '/' : false })
})
router.afterEach(to => {
  store.commit(DEAL_LOAD_NUM, { data: 0 })
  store.commit(SET_CRT, to.path)
})

export default router
