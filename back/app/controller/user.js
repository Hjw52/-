'use strict';
const BaseController=require('./base');
const md5 = require('md5')
var HashSalt = 'hjw1997@'
class UserController extends BaseController{
    async info(){
      let {ctx}=this;
      let {tel}=ctx.state;
      const user= await this.checkUser(tel);
      this.success(user)
    }
    async captcha(){
        // controller只写业务逻辑，公用的功能，抽象成service，
        // 生成验证码，放在service最好
        const {ctx} = this
        const captcha = this.service.utils.captcha()
    
       // console.log('图片验证码',captcha.text)
        ctx.session.captcha = captcha.text
        //console.log(ctx.session.captcha)
        ctx.response.type = 'image/svg+xml'
        ctx.body = captcha.data
      }
      //判断是否存在
      async checkUser(tel){
          const user=await this.ctx.model.User.findOne({tel});
          return user;
      }
      //添加用户
      async create(){
        const {ctx} = this
        const {tel, nickname,password,captcha} =ctx.request.body
        //console.log(captcha, ctx.session.captcha)
        if(captcha.toUpperCase() == ctx.session.captcha.toUpperCase()){
            if(await this.checkUser(tel)){
                return this.error('该用户已存在')
            }
            let ret=await ctx.model.User.create({
                tel,
                nickname,
                //密码再次加密
                password:md5(password + HashSalt)
            })
            if(ret._id){
                this.success("注册用户成功")
            }
        }else{
          this.error("验证码错误")
        }
        // 新增用户  
      }
      //登录方法
      async login(){
          let {ctx,app}=this
         // console.log(ctx.request.body)
          let {tel,password}=ctx.request.body
         // console.log(tel+","+password)
          let user=await ctx.model.User.findOne({
              tel,
              password:md5(password+HashSalt)
          })
          if(user){
              let {nickname}=user;
              //生成token
              const token = app.jwt.sign({
                nickname,
                tel,
                _id:user._id
              },app.config.jwt.secret, {
                expiresIn:'1h'
              })
              this.success({
                tel,
                nickname,
                token
            })
          }else{
            this.error('用户名或密码错误！')
          } 
      }
}
module.exports = UserController;