<template>
    <div class="login-container">
    <div class="title-container">
        <Logo style='margin-top: 20px;' />  
      </div>
    <el-form class="login-form" ref="form" :model="form" :rules="rules" style="margin-top:-100px">

      <el-form-item prop="tel">
        <span class="svg-container">
          <i class="el-icon-mobile"></i>
        </span>
        <el-input
          ref="tel"
          v-model="form.tel"
          placeholder="账号/手机号"
          name="tel"
        >
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        
        <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input
          ref="password"
          v-model="form.password"
          placeholder="密码"
          name="password"
          type="password"
        >

        </el-input>
      </el-form-item>


 <el-form-item style="border:0px">
      <el-button type="primary" @click.native.prevent="handleLogin">
        登录
      </el-button>
      <el-button type="info" style="margin-left:70px">
        <nuxt-link to="/register">
        还没账号？点击注册
         </nuxt-link>
      </el-button>
       </el-form-item>
    </el-form>
    
  </div>
</template>
<script>
const md5 = require('md5')
export default {
  layout:"login",

  data(){
    return{
      form:{
        tel:'',
        password:''
      },
      rules:{
        tel:[
          {required:true,message:'请输入手机号',trigger: 'blur' },
          {min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
   handleLogin(){
       this.$refs.form.validate( async valid=>{
          if(valid){
        let ret = await this.$store.dispatch('user/login',{
          tel:this.form.tel,
          password:md5(this.form.password)
        })
      console.log(ret)
      if(ret.code==0){
        localStorage.setItem('token',ret.data.token)
        this.$notify({
          title:'登录成功',
          type:'success',
          duration: 2000
        })
        setTimeout(()=>{
          this.$router.push({path:"/"})
        },1000)
      }else{
        this.$notify({
          title:ret.message,
          type:'error'
        })
      } 
    }
     })
    }
  }
}
</script>