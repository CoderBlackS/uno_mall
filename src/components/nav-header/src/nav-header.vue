<template>
  <div class='nav-header'>
    <div class='icon-nav_header' @click='handleFoldClick'>
      <template v-if='isFold === false'>
        <el-icon class="fold_menu"><Fold /></el-icon>
      </template>
      <template v-else>
        <el-icon class="fold_menu"><Expand /></el-icon>
      </template>
    </div>
    <!--面包屑导航-->
    <div class='content'>
      <div>面包屑</div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import UserInfo from "./user-Info.vue"
export default defineComponent({
  components:{
    UserInfo
  },
  emits:['foldChange'],
  setup(props,{emit}){
    const isFold = ref(false)
    const handleFoldClick = ()=>{
      isFold.value = !isFold.value
      emit('foldChange',isFold.value)
    }
    return{
      isFold,
      handleFoldClick
    }
  }
})

</script>

<style scoped lang='less'>
.nav-header{
  display: flex;
  align-items: center;
  width: 100%;
  .fold_menu{
    font-size: 24px;
    cursor: pointer;
    position: relative;
    top: 4px;
  }
  .content{
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
}

</style>
