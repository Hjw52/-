<template>
  <el-container>
  <el-header style="background-color: #FFF">
    <el-menu mode="horizontal">
      <el-menu-item index="1">
       <Logo class='logo'/>  
      </el-menu-item>
      <el-menu-item index="2">
        <nuxt-link to="/">首页</nuxt-link>
      </el-menu-item>
      <el-menu-item v-if="userinfo._id" index="3" class="pull-right">
        <nuxt-link :to="'/user/'+userinfo._id">{{userinfo.nickname}}</nuxt-link>
      </el-menu-item>
      <el-menu-item v-if="userinfo._id" index="4" class="pull-right">
        <nuxt-link to="/editor/new">
          <el-button>写文章</el-button>
        </nuxt-link>
      </el-menu-item>
      <el-menu-item v-if="!userinfo._id" index="5" class="pull-right">
        <nuxt-link to="/register">注册 </nuxt-link>
      </el-menu-item>
      <el-menu-item v-if="!userinfo._id" index="6" class="pull-right">
        <nuxt-link to="/login">登录 </nuxt-link>
      </el-menu-item>
    </el-menu>

  </el-header>
  <el-main>
    <nuxt />
  </el-main>
  <el-footer>
  </el-footer>
</el-container>
</template>
<script>
export default{
  mounted(){
 const token = localStorage.getItem('token')
    if(token){
      // 比如这个接口，是需要登录才能访问的
      //dispatch 路径
      this.$store.dispatch('user/info')
    }
  },
  computed:{
    userinfo(){
      return this.$store.state.user
    }
  }
}
</script>
<style>
html {
  font-family : 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #eee;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.logo{
  width: auto;
  height: 60%;
}
.pull-right{
  float: right !important;
}
a{
    text-decoration: none;
    color: inherit;
}
</style>
