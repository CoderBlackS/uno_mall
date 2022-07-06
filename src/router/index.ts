//使用corderwhy插件生成动态路由路径进行匹配
//coderwhy add3page ipdate -d src/views/shop/update
import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import localCache from '@/untils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    name:'main',
    component: () => import('../views/main/Main.vue')
  //  children:[]  根据userMenus决定
  },
  {
    path: '/login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path:'/:pathMatch(.*)*',
    component:()=>import('@/views/not-found/Not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

//没有token跳转首页
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  console.log(router.getRoutes())
})

export default router
