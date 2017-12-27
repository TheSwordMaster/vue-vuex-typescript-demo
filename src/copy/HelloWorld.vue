<template>
  <div class="hello">
    <mt-swipe :auto="4000">
  <mt-swipe-item><img src="../assets/logo.png"></mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>

    <h1>{{ msg }}</h1>
<mt-field label="手机号码" placeholder="输入手机号码" type="tel" v-model="username"> </mt-field>
<mt-field label="密码" placeholder="输入密码" type="password" v-modal="password"></mt-field>
<mt-field label="验证码" placeholder="输入验证码" v-model="captcha">
  <img src="../assets/img.png" height="45px" width="100px">
</mt-field>
<div class="login-k">
<mt-button type="primary" class="mint-button--large" v-on:click="login">登   录</mt-button>
</div>
<div class="login-c">
<mt-button type="primary" class="mint-button--large" v-on:click="huiyuan">会   员</mt-button></div>
    <!-- <router-link to="/vuex">ShoppingCart Example</router-link> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.hello();
    /**用户名 */
    const username='13921593';
    
  },
  methods: {
    login (){
      this.$router.push({ path: '/home' })
    },
    huiyuan (){
      this.$router.push({ path: '/member' })
    },
    hello () {
      console.log('Hello world')
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-button--large {
    width: 100%;
    height: 3rem;
}
.login-k{
padding: 1.5rem .5rem;
}
.login-c{
padding: 1.5rem .5rem;
}
/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
