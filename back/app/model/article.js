module.exports = app=>{
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
  
    // 定义一个文章模型
    const ArticleSchema = new Schema({
      __v:{type:Number, select:false},
      title: {type:String, required:true},
      article: {type:String, required:true, select:false},
      article_html: {type:String, required:true},
      //对应作者ID
      author:{
          type:Schema.Types.ObjectId,
          ref:'User',
          require:true
      },
      views:{type:Number, required:false, default:1}
    }, { timestamps:true})
    return mongoose.model('Article', ArticleSchema)
  }