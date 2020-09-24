<template>
<div class="item" @click="getArticle">
<div class="meta-head">
<p>{{article.author.nickname}}</p>
<p>{{FormatDate(article.updatedAt)}}</p>
<p></p>
</div>
<div class="title">{{article.title}}</div>
<img src="../assets/articlex1.jpg"/>
<div class="buttom">
<i class="el-icon-star-on">{{article.views}}</i>
<i class="el-icon-share" style="margin-left:10px">分享</i>
</div>
 <el-divider class="diver"/>
</div>
</template>

<script>
import {FormatDate} from '../utils/tools'
export default {
    props:{
        article:{
            type:Object
        }
    },
    methods:{
        FormatDate,
        getArticle(){
             this.$router.push({path:"/article/"+this.article._id})
        }
    }
}
</script>
<style scoped>
.item{
   
    cursor: pointer;
    background: #fff;
}
.item:hover{
    background-color:#F7F9F9;
}
.meta-head{
    display: flex;
    align-items: baseline;
    white-space: nowrap;
}
.meta-head p{
    font-size: 0.8rem;
    color: #b2bac2;
}
.title{
    position:relative;
    margin-top:20px;
    display:flex;
    justify-content: flex-start;
    left:30px;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
    color: black;
}
p{
    margin-left:20px;
}
img{
    top: -40px;
    margin-right: -400px;
    width: auto;
    height: auto; 
    max-width: 100%; 
    max-height: 100%;
    width: 80px;
    height: 80px;
    position: relative;
    border-radius:2px;
}
.buttom{
    margin-top: -6%;
    margin-left: -82%;
}
.diver{
     margin-top:10px !important;
      margin-bottom: 0px !important;
}
</style>
