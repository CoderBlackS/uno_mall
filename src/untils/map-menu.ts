import {RouteRecordRaw} from 'vue-router'

export function mapMenuToRoutes(useMenus:any[]):RouteRecordRaw[]{
  const routes:RouteRecordRaw[]= []
  //1、先去加载默认所有的routes
  const allRoutes:RouteRecordRaw[]=[]
  const routeFiles =require.context('../router',true,/\.ts/)
  routeFiles.keys().filter((key) =>{
    const route = require('../router' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  allRoutes.shift()
  console.log(allRoutes)
  //2、根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus:any[])=>{
    //遍历路由
    for(const menu of menus){
      if(menu.type === 2){
        const route = allRoutes.find((route)=>{
          return route.path === menu.path
        })
        if (route) routes.push(route)
      }else{
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(useMenus)
  return routes
}


