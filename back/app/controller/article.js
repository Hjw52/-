'use strict';
const BaseController=require('./base');
const marked = require('marked')
class ArticleController extends BaseController{
    async detail(){
        const {ctx}=this
        const{id}=ctx.params
        let info=await ctx.model.Article.findOneAndUpdate({_id:id}, {$inc:{'views':1}}).populate('author')
        this.success(info)
    }
    async create(){
        const {ctx}=this
        const {userid}=ctx.state
        const {title,content}=ctx.request.body;
        let obj={
            title:title,
            article:content,
            article_html:marked(content),
            author:userid
        }
        let ret=await ctx.model.Article.create(obj);
        if(ret._id){
            this.success({
                id:ret._id
            })
        }else{
            this.error('发布失败')
        }
    }
}
module.exports = ArticleController