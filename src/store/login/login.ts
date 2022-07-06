import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '@/store/types'
import router from '@/router'
import { accountLoginRequest,loginLeftMenus } from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import localCache from '@/untils/cache'
import {mapMenuToRoutes} from "@/untils/map-menu"
//模块中的泛型有两个值一个是当前login 一个是根
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    //存token
    changeToken(state, token: string) {
      state.token = token
    },
    //存菜单信息
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    //这里无论何时都会保存一下状态关系
    //  userMenus =>route 动态路由
    //  将routes=>添加到router里面
     const routes = mapMenuToRoutes(userMenus)
      routes.forEach((route)=>{
        router.addRoute("main",route)
      })

    }
  },
  actions: {
    //账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      //左侧权限菜单
      const loginMenus = await loginLeftMenus()
      commit('changeUserMenus',loginMenus.data)
      localCache.setCache('loginMenus', loginMenus.data)
      //跳转首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const leftMenus = localCache.getCache('loginMenus')
      if (leftMenus) {
        commit('changeUserMenus', leftMenus)
      }

    }
  }
}

export default loginModule
