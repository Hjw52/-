<template>
  <div class="acticleDetail">
    <div class="userinfo">
       <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="60"></el-avatar>
       <span class="username">{{this.$store.state.article.author.nickname}}</span>
       <div class="meta">
         <span>{{FormatDate(this.$store.state.article.time)}}</span>
         <span style="margin-left:10px">阅读量{{this.$store.state.article.views}}</span>
       </div>
       <el-row style="left: 85%;top: -50px;position: relative;">
        <el-button round style="right=10px">关注</el-button>
        </el-row>
    </div>
    <div class="title">
       <h1 v-html="this.$store.state.article.title"/>
    </div>
  <el-divider style="opacity: 0.3;"></el-divider>
     <div class="content"  v-html="this.$store.state.article.article_html"></div>
  </div>
</template>
<script>
import {FormatDate} from '@/utils/tools'
export default{
  data(){
    return{
      article:{
        id:'',
        title:'',
        views:1,
        article_html:'',
        author:{}
      }
    }
  },
    created(){
      let {id}=this.$route.params;
      this.article.id=id;
      this.getArticle();
    },
    methods:{
      FormatDate,
      async getArticle(){
        let ret= await this.$store.dispatch('article/detail',this.article.id)
        console.log(this.$store.state.article)
      }
    }
}
</script>
<style scoped>
.acticleDetail{
  display: flex;
  background: #fff;
  flex-direction:column;
  justify-content: center;
  width: 60%;
  min-width: 700px;
  margin: auto;
}
.userinfo{
 margin-top:20px;
 margin-left: 20px;
}
.username{
  font-size: 1.2rem;
  margin-left: 10px;
  position: relative;
    top: -30px;
}
.meta{
  margin-left: 70px;
  margin-top: -25px;
  color: #909090;
  font-size: 0.9rem;
}
.title{
  margin-left: 40px;
  font: 1.5rem sans-serif;
}
.content{
  margin-top: 30px;
   margin-left: 40px;
   margin-bottom: 30px;
}
</style>