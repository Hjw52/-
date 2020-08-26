'use strict';
const Controller=require('egg').Controller;

//基类 提供公用方法
class BaseController extends Controller{
    //成功返回
    success(data){
        this.ctx.body={
            code:0,
            data
        }
    }
    //返回消息
    message(msg){
        this.ctx.body={
            code:0,
            message:msg
        }
    }
    //错误返回
    error(msg,code=-1){
        this.ctx.body={
            code,
            message:msg
        }
    }

}
module.exports=BaseController