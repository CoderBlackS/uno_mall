import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/index.less'
import { setupStore } from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
//加载全局图标采用按需引用图标方式
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//在加载路由之前需要调用一下此函数 进行存储否则刷新页面会失败
setupStore()
app.use(router)
app.use(store)
app.use(ElementPlus)
//刷新继续存一遍token
app.mount('#app')
