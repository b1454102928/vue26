import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page', // 别名alias
    name: 'Home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      // if (from.name === 'About') alert('这是从about页来的')
      // else alert('这不是从about页来的')
      next()
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana' // 对象模式
    },
    meta: {
      title: '关于'
    }
  },
  // 动态路由匹配
  {
    path: '/argu/:name',
    name: 'Argu',
    component: () => import('@/views/argu.vue'),
    props: true // name当作传入参数
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名视图
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    // redirect: '/'
    // redirect: {
    //   name: 'Home'
    // }
    redirect: to => '/'
    // {
    //   // console.log(to)
    //   // return '/'
    //   // return {
    //   //   name: 'Home'
    //   // }
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
