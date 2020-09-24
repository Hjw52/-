'use strict';
const BaseController=require('./base');
const marked = require('marked')
class ArticleController extends BaseController{
    async detail(){
        const {ctx}=this
        const{id}=ctx.params
        let info=await ctx.model.Article.findOneAndUpdate({_id:id}, {$inc:{'views':1}}).populate('author')
        console.log(info)
        this.success(info)
    }
    async create(){
        const {ctx}=this
        const {id,}=ctx.state
        //console.log(id);
        const {title,content}=ctx.request.body;
        let obj={
            title:title,
            article:content,
            article_html:marked(content),
            author:id
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
    async info(){
        const {ctx}=this;
        const articles=await ctx.model.Article.find().populate('author');
        this.success(articles);
    }
}
module.exports = ArticleController