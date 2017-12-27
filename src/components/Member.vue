<template>
<el-input
  placeholder="请输入内容"
  v-model="input1"
  :disabled="true">
</el-input>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      input1: ''
    }
  }
})
</script>

