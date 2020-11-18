<template>
<div class="total">
  <div class="login-container">
    <div class="title-container">
        <Logo style='margin-top: 20px;' />  
      </div>
 <el-form class="login-form" ref="form" :model="form" :rules="rules">

      <el-form-item prop="tel">
        <span class="svg-container">
          <i class="el-icon-mobile"></i>
        </span>
        <el-input
          ref="tel"
          v-model="form.tel"
          placeholder="手机号"
          name="tel"
        >

        </el-input>
      </el-form-item>
 <el-form-item prop="nickname">
        
        <span class="svg-container">
          <i class="el-icon-user"></i>
        </span>
        <el-input
          ref="nickname"
          v-model="form.nickname"
          placeholder="用户名"
          name="nickname"
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

      <el-form-item prop="repassword">
        
        <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input
          ref="repassword"
          v-model="form.repassword"
          placeholder="再次输入密码"
          name="repassword"
          type="password"

        >

        </el-input>
      </el-form-item>

      <el-form-item prop="captcha" class="email-code">
        
        <div class="send-email-btn">
          <img @click="resetCaptcha" :src="code.captcha" alt="">
        </div>
        <span class="svg-container">
          <i class="el-icon-user"></i>
        </span>
        <el-input

          ref="captcha"
          v-model="form.captcha"
          placeholder="验证码"
          name="captcha"
        >

        </el-input>
      </el-form-item>

      <el-button type="primary" @click.native.prevent="handleRegister">
        注册
      </el-button>
       <el-button type="info" style="margin-left:70px">
        <nuxt-link to="/login">
        已有账号？返回登录
         </nuxt-link>
      </el-button>
    </el-form>
  </div>
  </div>
</template>


<script>
import md5 from 'md5'
export default {
  layout:"login",
  data(){
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      form:{
        tel:"",
        captcha:"",
        password:'',
        repassword:'',
        nickname:''
      },
      rules:{
        tel:[
          {required:true,message:'请输入手机号',trigger: 'blur' },
          {min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur'}
        ],
        nickname:[
          {required:true,message:'请输入用户名'},
        ],
        password:[
          {required:true,message:'请输入密码'},
        ],
        repassword:[
          {required:true,message:'请再次输入密码'},
          {validator: validatePass2, trigger: 'blur'}
        ],
        captcha:[
          {required:true,message:'请输入验证码'},
        ]
      },
      code:{
        captcha:'/api/user/captcha'
      }
    }
  },
  methods:{
    resetCaptcha(){
      this.code.captcha = '/api/user/captcha?_t='+new Date().getTime()
    },
    handleRegister(){
      // 先忽略前端的认证
      // 密码长度复杂度认证
      // 两次输入密码是否相同的认证
      this.$refs.form.validate( async valid=>{
        if(valid){
          let obj = {
            tel:this.form.tel,
            captcha:this.form.captcha,
            password:md5(this.form.password),
            nickname:this.form.nickname
          }
          let ret = await this.$http.post('/user/register',obj)
          console.log(ret)
         if(ret&&ret.code==0){
            this.$notify({
             title:'注册成功',
             type:'success'
        });
         setTimeout(()=>{
          this.$router.push({path:"/login"})
        },500)
         }else{
           this.$notify({
             title:ret.message,
             type:'error'
        })
        this.resetCaptcha();
         }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.total{
  // background-image:  radial-gradient(circle at 20% 20%, #99CCCC, #7171B7);
  background: linear-gradient( #99CCCC,#00FFCC);
}
 .el-input__inner::placeholder {
        color: #fff;
        
    }
     /* 谷歌 */
    .el-input__inner::-webkit-input-placeholder {
        color: #fff;
       
    }
     /* 火狐 */
   .el-input__inner:-moz-placeholder {
        color: #fff;
       
    }
     /*ie*/
   .el-input__inner:-ms-input-placeholder {
        color: #fff;
    }
.email-code{
  width:340px;
  position: relative;
  .send-email-btn{
    position: absolute;
    right:-110px;
    .el-button{
      width:90px;
      height:50px;
    }
    img{
     width:90px;
      height:50px;
      cursor: pointer;
    }
  }
}
</style>