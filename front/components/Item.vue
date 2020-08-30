<template>
<div class="item">
<div class="meta-head">
<p>kaka</p>
<p>15小时前</p>
<p>web前端</p>
</div>
<div class="title">Vue与React十大对比</div>
<img src="../assets/articlex1.jpg"/>
<div class="buttom">
<i class="el-icon-star-on">18</i>
<i class="el-icon-share" style="margin-left:10px">分享</i>
</div>
 <el-divider class="diver"/>
</div>
</template>

<script>
export default {
 
}
</script>
<style scoped>
.item{
    left:0;
    height:120px;
    width:100%;
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
   right:250px;
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
    right: -250px;
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
    margin-top:-60px;
     position: relative;
    margin-left:-640px;
}
.diver{
     margin-top:10px !important;
      margin-bottom: 0px !important;
}
</style>
