<template>
<div>
  <el-tabs class="head">
    <el-tab-pane label="热门" name="first"/>
    <el-tab-pane label="最新" name="second"/>
    <el-tab-pane label="热榜" name="third"/>
    <el-tab-pane label="专栏" name="fourth"/>
    <el-tab-pane label="为你推荐" name="five"/>
  </el-tabs>
    <Item v-for="index in 5" :key="index"/>
</div>
</template>

<script>
import Item from '../components/Item'
export default {
  components:{Item}
}
</script>
<style scoped>
.head{
    background: #fff;
    width: inherit;
    margin-top: -12px;
    
}
.head >>> div{
  margin-left:5px;
}

</style>
