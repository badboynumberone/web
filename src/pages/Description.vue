<template>
  <div class="main">
      <!--头部-->
      <Header></Header>
  </div>
</template>

<script>
  import Header from './../components/Header';
  export default {
    name: 'Index',
    components:{
      Header
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/mixin";
</style>
