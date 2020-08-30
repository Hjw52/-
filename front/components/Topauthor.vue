<template>
<div class="list-item">
<el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
<p>掘金大神</p>
</div>
</template>
<script>
export default{
 
}
</script>
<style scoped>
.list-item{
     display: flex;
    align-items: baseline;
    white-space: nowrap;
    cursor: pointer;
}
.list-item p{
   top: -30px;
    left: 10px;
    position: relative;
    font-size: 0.9rem;
}
</style>