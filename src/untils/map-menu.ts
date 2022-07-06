import {RouteRecordRaw} from 'vue-router'
//获取路由里超级管理员权限信息
export function mapMenuToRoutes(useMenus:any[]):RouteRecordRaw[]{
  const routes:RouteRecordRaw[]= []
  //1、先去加载默认所有的routes
  const allRoutes:RouteRecordRaw[]=[]
  const routeFiles =require.context('../router/main',true,/\.ts/)
  routeFiles.keys().filter((key) =>{
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  //2、根据菜单获取需要添加的routes
  //根据vuex里存的menuList信息 因一级路由仅做展示需要二级路由故采用递归的方式
  const _recurseGetRoute = (menus:any[])=>{
    //遍历路由
    for(const menu of menus){
      if(menu.type === 2){
        const route = allRoutes.find((route)=>{
          return route.path === menu.path
        })
        if (route) routes.push(route)
      }else{
        //递归找到menu的children进行递归调用自身
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(useMenus)
  return routes
}

