<template>
<div>
<el-card class="box-card">
 <header>🎖️作者榜</header>
 <Topauthor v-for="index in 3" :key="index"/>
  <el-divider class="diver"/>
 <div class="footer">完整榜单 ></div>
</el-card>
</div>
</template>
<script>
import Topauthor from '../components/Topauthor'

export default{
  components:{Topauthor}
}
</script>
<style scoped>
 .box-card {
    width: 200px;
    height:300px;
  }
  header{
    border-bottom-style:solid;
    border-bottom-color:#f4f5f5;
  }
  .diver{
     margin-top:10px !important;
      margin-bottom: 0px !important;
}
  .footer{
      color: #007fff;
       cursor: pointer;
       margin-top: 17px;
  }
</style>