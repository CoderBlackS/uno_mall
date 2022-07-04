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
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
//因ts类型问题 所以导出实例 并且添加store类型检测
export function useStore():Store<IStoreType>{
  return useVuexStore()
}
export default store
