<template>
  <div>
    <h2 v-html="this.$store.state.article.title"/>
      <div v-html="this.$store.state.article.article_html"></div>
  </div>
</template>
<script>
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
    mounted(){
      let {id}=this.$route.params;
      this.article.id=id;
      this.getArticle();
    },
    methods:{
      async getArticle(){
        let ret= await this.$store.dispatch('article/detail',this.article.id)
        console.log(this.$store.state.article)
      }
    }
}
</script>