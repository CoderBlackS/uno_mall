import { createStore,Store,useStore as useVuexStore} from 'vuex'
import { IRootState,IStoreType } from './types'
import login from './login/login'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'CoderBlackS',
      age: 25
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
//总仓库在页面刷新时Vuex会失去存储token和menuList需要在刷新时触发这个函数
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
//因ts类型问题 所以导出实例 并且添加store类型检测 //故以后使用此useStore
export function useStore():Store<IStoreType>{
  return useVuexStore()
}
export default store
