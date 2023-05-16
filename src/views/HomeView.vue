<template>
    <div class="home">
        <el-container>
            <el-header>导航</el-header>
            <el-main>
                <el-tag><router-link to="/home/food">食品详情</router-link></el-tag>
                <el-tag type="success"><router-link to="/home/userdata">用户数据采集</router-link></el-tag>
                <el-tag type="info"><router-link to="/home/myCalculator">计算器</router-link></el-tag>
                <el-tag type="warning">标签四</el-tag>
                <el-tag type="danger">标签五</el-tag>
            </el-main>
        </el-container>
        <router-view></router-view>
    </div>
</template>


<script>
 export default{
    data(){
        return{

        }
    },
 }
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>