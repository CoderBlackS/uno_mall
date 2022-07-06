import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.less'
import { setupStore } from './store'
//全局element ui——plus样式
import 'element-plus/dist/index.css'
import {accountLoginRequest} from "@/service/shop/shop"
//加载全局图标采用按需引用图标方式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//在加载路由之前需要调用一下此函数 进行存储否则刷新页面会失败
setupStore()
app.use(router)
app.use(store)
//刷新继续存一遍token
app.mount('#app')

accountLoginRequest(1,1).then(res=>{
  console.log(res)
})
