const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://192.168.21.166:55',
        pathRewrite: {
          '^/api': ''
        },
        //如果设置成true：发送请求头中host会设置成target·
        changeOrigin: true
      }
    }
  },
  //按需引入element ui
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  //文件路径
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  }
})
