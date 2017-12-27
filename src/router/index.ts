import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import shoppingCart from '@/components/shoppingCart.vue'
import Member from '@/components/Member.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import home from '@/components/home.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/shoppingCart',
      component: shoppingCart
    },
    {
      path: '/member',
      component: Member
    }
  ]
})
