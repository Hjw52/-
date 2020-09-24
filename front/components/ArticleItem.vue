<template>
<div style="min-width:506px; background: #fff;">
  <el-tabs class="head">
    <el-tab-pane label="热门" name="first"/>
    <el-tab-pane label="最新" name="second"/>
    <el-tab-pane label="热榜" name="third"/>
    <el-tab-pane label="专栏" name="fourth"/>
    <el-tab-pane label="为你推荐" name="five"/>
  </el-tabs>
    <Item v-for="item in articles" :key="item._id" :article=item />
</div>
</template>

<script>
import Item from '../components/Item'
export default {
  components:{Item},
  created(){
    this.getArticle();
  },
  data(){
    return{
      articles:[]
    }
  },
  methods:{
    async getArticle(){
      let ret= await this.$store.dispatch('article/info');
      this.articles=ret.data;
       console.log(this.articles);
    }
  }
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
