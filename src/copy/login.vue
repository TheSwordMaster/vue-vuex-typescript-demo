<template>
  <div class="hello">
<div class="block">
    <span class="demonstration"></span>
    <el-carousel height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="input">
    <h1 style="text-algin=center;">购物，乐享生活</h1>
    <div><el-input suffix-icon="el-icon-edit" placeholder="帐号/用户名" type="tel" v-model="username"> </el-input>
    </div>
    <div><el-input suffix-icon="el-icon-edit" placeholder="密码" type="password" v-modal="password"></el-input>
    </div>
<div>


</div>
<div class="denglu">
<el-button type="primary" class="mint-button--large" v-on:click="login">登   录</el-button>
</div>
<div class="zhuce">
<el-button type="primary" class="mint-button--large" v-on:click="register">注   册</el-button>
</div>
  </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'login',
  data () {
    return {
    }
  },

  methods: {
    login (){
      this.$router.push({ path: '/home' })
    },
    register (){
      this.$router.push({ path: '/register' })
    },
    hello () {
      console.log('Hello world')
    }
  }
})
</script>
<style scoped>
.input{
  width: 480px;
  height: 668px;
  margin: 0 auto;
}
.mint-button--large {
    width: 100%;
    height: 3rem;
}
.denglu{
padding: 1.5rem .5rem;
}
.zhuce{
padding: 0.5rem .5rem;
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
  .msg{
    text-align: center;
  }
</style>