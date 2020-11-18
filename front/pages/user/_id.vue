<template>
  <div>
    <header class="user-header"></header>
     <el-avatar class="avatar" shape="square" :size="180" fit="contain" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
     <span class="user-name">{{userinfo.nickname}}</span>
    
  </div>
</template>
<script>
export default{
  created(){
     let {id}=this.$route.params;
  },
    mouted(){
     
    },
  computed:{
    userinfo(){
      return this.$store.state.user
    }
  },
}
</script>
<style scoped>
.user-header{
  border: 0;
  width: 100%;
  height: 25vh;
  min-height: 200px;
  background: linear-gradient(#CCFFFF,#FFFFFF);
}
.avatar{
  margin-top: -7rem;
  margin-left: 5rem;
}
.user-name{
  font-size: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-left: 10px;
  position: relative;
  top: -15px;
}
</style>