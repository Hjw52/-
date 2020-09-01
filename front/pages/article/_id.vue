<template>
  <div>
      <div></div>
  </div>
</template>
<seript>
export default{
  data(){
    return{
      article:{
        title:'',
        views:1,
        author:{

        }
      }
    }
  },
    beforeCreated(){
      console.log(1)
      let {id}=this.$route.params;
      this.id=id;
      this.getArticle(id);
    },
    methods:{
      async getArticle(id){
            console.log('调用');
          let ret = await this.$http.get('/article/'+id)
        // let ret= await this.$store.dispatch('article/datail',this.id)
         this.article = ret.data
         console.log(this.article)
      }
    }
}
</seript>