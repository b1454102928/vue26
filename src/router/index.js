import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

// 全局前置守卫
const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  // if (to.meta.title)
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next('/')
    else next()
  }
})

// 导航被确认之前，所有组件内守卫和异步路由组件被解析之后被调用
// router.beforeResolve((to, from, next) => {
//   //
// })

// 后置钩子
router.afterEach((to, from) => {
  // logining = false
})

/* 完整的导航流程
 * 1. 导航被触发
 * 2.在失活的组件 (即将离开的页面组件)里调用离开守卫beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件(即将进入的页面组件) 里调用 beforeRouteEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局的后置守卫 aferEach
 * 11.触发DOM更新
 * 12.用创建好的实例调用beforeRouteEnter守卫里传给next的回调函数
*/

export default router
