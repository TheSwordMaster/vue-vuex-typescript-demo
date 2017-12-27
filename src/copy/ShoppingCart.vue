<template>
  <div>
    
      <mt-header title="多个按钮" class="top-fixed">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right" @click="actionSheet"></mt-button>
</mt-header>
 <div class="invipform">

<mt-field label="姓名" placeholder="输入姓名" v-model="username"></mt-field>

<mt-field label="手机号码" placeholder="输入手机号码" type="tel" v-model="phone"></mt-field>

<mt-field label="会员级别" placeholder="输入会员" type="number" v-model="number"></mt-field>
<mt-field label="出生年月" placeholder="选择年月" type="text" @click="birthday"></mt-field>
<mt-field label="备注" placeholder="输入备注" type="textarea" rows="4" v-model="introduction"></mt-field>

    <product-list></product-list>
    
   
    <cart></cart>
</div>

<tabbar-nav></tabbar-nav>


    <mt-actionsheet
  :actions="sheetdata"
  v-model="sheetVisible">
</mt-actionsheet>

<mt-datetime-picker
  v-model="pickerVisible"
  type="date"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</mt-datetime-picker>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductList from "./ProductList.vue";
import Cart from "./Cart.vue";
import TabbarNav from "./TabbarNav.vue";
export default Vue.extend({
  components: { ProductList, Cart, TabbarNav },
  data() {
    return {
      // action sheet 选项内容
      sheetdata: [
        {
          name: "拍照",
          //method: this.getCamera // 调用methods中的函数
        },
        {
          name: "从相册中选择",
          //method: this.getLibrary // 调用methods中的函数
        }
      ],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false,
      pickerVisible:false

    };
  },
  methods: {
    actionSheet: function() {
      // 打开action sheet
      this.sheetVisible = true;
    },
    birthday:function(){
      this.pickerVisible=true;
    },
    getCamera: function() {
      console.log("打开照相机");
    },
    getLibrary: function() {
      console.log("打开相册");
    }
  }
});
</script>
<style scoped>
.invipform {
  padding: 2.3rem 0 5em 0;
  overflow: auto;
  height: 100%;
}

.top-fixed {
    right: 0;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1;
}

</style>
