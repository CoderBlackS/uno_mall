<template>
 <div class="nav-menu">
   <div class='logo'>
     <img class='img' src='~@/assets/img/logo.svg' alt='logo'>
     <span v-if='!collapse' class='title'>UNO-Applet</span>
   </div>
   <el-menu
     active-text-color="#ffd04b"
     background-color="#545c64"
     class="el-menu-vertical-demo"
     :unique-opened='true'
     default-active="2"
     text-color="#fff"
     @open="handleOpen"
     @close="handleClose"
     :collapse="collapse"
     >
     <template v-for='item in userMenus' :key='item.id'>
        <!--二级菜单-->
       <template v-if='item.pid===0'>
         <!--二级菜单可以展开的标题-->
         <el-sub-menu :index='item.id + ""'>
           <template #title>
            <template v-if='item.id===1'>
              <el-icon><Shop /></el-icon>
            </template>
             <template v-else>
               <el-icon><ShoppingBag /></el-icon>
             </template>
             <span>{{item.title}}</span>
           </template>
           <!--遍历里面的item -->
           <template v-for='suite in item.children' :key='suite.item'>
             <el-menu-item :index='suite.id + ""' @click='handleMenuItemClick(suite)'>
               <i v-if='suite.icon' :class='suite.icon'></i>
               <span>{{suite.title}}</span>
             </el-menu-item>
           </template>
         </el-sub-menu>
       </template>
        <!--一级菜单-->
       <template v-else>
         <el-menu-item :index='item.id + ""'>
           <i v-if='item.icon' :class='item.icon'></i>
           <span>{{item.title}}</span>
         </el-menu-item>
       </template>
     </template>
   </el-menu>
 </div>
</template>

<script lang="ts" >
import {useStore} from '@/store'
import { computed,defineComponent } from 'vue'
import {useRouter} from "vue-router"
export default defineComponent({
  props:{
    collapse:{
      type:Boolean,
      default:false
    }
  },
  setup(){
    const store = useStore()
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const router = useRouter()
    const handleMenuItemClick = (item:any)=>{
      console.log(item)
      router.push({
        path:item.path ?? '/not-found'
      })
    }
    const userMenus = computed(()=>store.state.login.userMenus)
    return {
      userMenus,
      handleOpen,
      handleClose,
      handleMenuItemClick
    }
  }
})

</script>

<style scoped lang='less'>
.logo{
  display: flex;
  height: 24px;
  padding: 14px 10px 10px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .img{
    height: 100%;
    margin: 0 10px;
  }
  .title{
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}
.el-menu {
  border-right:none;
}
::v-deep .el-sub-menu__title{
  background-color: rgb(53 76 98) !important;
}
</style>

