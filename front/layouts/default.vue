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
      <el-menu-item index="3">
        <nuxt-link to="/pins">今日沸点</nuxt-link>
      </el-menu-item>
      <el-menu-item index="4">
        <nuxt-link to="/topic">话题区</nuxt-link>
      </el-menu-item>
      <el-menu-item index="5">
        <nuxt-link to="/activity">活动</nuxt-link>
      </el-menu-item>
      <el-menu-item index="6">
        <nuxt-link to="/discover">发现</nuxt-link>
      </el-menu-item>
      <el-menu-item v-if="!userinfo._id" index="9" class="pull-right">
        <nuxt-link to="/register">注册 </nuxt-link>
      </el-menu-item>
      <el-menu-item v-if="!userinfo._id" index="10" class="pull-right">
        <nuxt-link to="/login">登录 </nuxt-link>
      </el-menu-item>
      
      
     
      <el-menu-item v-if="!userinfo._id" index="11" class="pull-right">
       <el-dropdown trigger="click">
       <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
       <i>用户名</i>
       <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >
         <nuxt-link :to="'/user/'+userinfo._id"><i class="el-icon-user"></i>我的主页</nuxt-link>
        </el-dropdown-item>
         <el-dropdown-item ><i class="el-icon-message-solid"></i>消息列表</el-dropdown-item>
        <el-dropdown-item ><i class="el-icon-thumb"></i>我赞过的</el-dropdown-item>
        <el-dropdown-item ><i class="el-icon-star-on"></i>我的收集</el-dropdown-item>
        <el-dropdown-item ><i class="el-icon-s-tools"></i>设置</el-dropdown-item>
        <el-dropdown-item ><i class="el-icon-back"></i>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </el-menu-item>
      
      <el-menu-item v-if="!userinfo._id" index="12" class="pull-right">
        <nuxt-link to="/editor/new">
          <el-button type="success" round>写文章</el-button>
        </nuxt-link>
      </el-menu-item>
        <el-menu-item index="13" class="pull-right">
      <el-input
       placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2">
     </el-input>
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
  data(){
    return{
      input2:""
    }
  },
  mounted(){
 const token = localStorage.getItem('token')
    if(token){
      // 比如这个接口，是需要登录才能访问的
      //dispatch 路径
     // this.$store.dispatch('user/info')
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
  border-bottom:0px;
}
a{
    text-decoration: none;
    color: inherit;
}
.el-menu-item { transition: none !important; }
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
</style>
