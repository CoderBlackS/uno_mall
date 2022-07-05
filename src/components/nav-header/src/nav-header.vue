<template>
  <div class='nav-header'>
    <div class='1' @click='handleFoldClick'>
      <template v-if='isFold === false'>
        <el-icon class="fold_menu"><Fold /></el-icon>
      </template>
      <template v-else>
        <el-icon class="fold_menu"><Expand /></el-icon>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
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
  .fold_menu{
    font-size: 24px;
  }
}
</style>
