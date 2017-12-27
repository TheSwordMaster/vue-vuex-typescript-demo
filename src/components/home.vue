<template>
<el-container>
  <el-header>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" v-on:click="geren">个人中心</el-menu-item>
  <el-menu-item index="2" v-on:click="list">订单管理</el-menu-item>
  <el-menu-item index="3" v-on:click="gouwuche">购物车</el-menu-item>
</el-menu>

  </el-header>
  <el-main>
    <el-row :gutter="20">
  <el-col :span="5">
    <div class="grid-content bg-purple">
      <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
  </el-col>
  <el-col :span="14"><div class="grid-content bg-purple">
    <el-autocomplete class="search"
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect" 
></el-autocomplete><el-button type="primary" icon="el-icon-search">搜索</el-button>

  </div>
  </el-col>

  <el-col :span="5"><div class="grid-content bg-purple">
    <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
  </el-col>
</el-row>

<el-row :gutter="20">
  <el-col :span="5"><div class="grid-content bg-purple1">
    </div>
    </el-col>

    
  <el-col :span="14"><div class="grid-content bg-purple"><img class="img1" src="../assets/1.jpg"></div>
  <el-row>
  <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/hamburger.png" class="image">
      <div style="padding: 10px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">购买</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</el-col>


  <el-col :span="5"><div class="grid-content bg-purple2"></div></el-col>
</el-row>

  </el-main>
</el-container>
</template>


<style>
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple1{
    background: #d3dce6;
    height:650px;
  }
  .bg-purple2{
    background: #d3dce6;
    height:650px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .img1{
    width:1080px;
  }


  
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }


.search{
  width: 900px;
  padding:19px 0 19px 39px;
  margin-top:30px;
  margin-right:10px;
}
.demonstration{
  margin-top: 30px;
}



.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'home',
  data () {
    return {
       input23: ''
    }
  },
   methods: {
    gouwuche (){
      this.$router.push({ path: '/shoppingCart' })
    },
    geren (){
      this.$router.push({ path: '/member' })
    }
  }
})
</script>