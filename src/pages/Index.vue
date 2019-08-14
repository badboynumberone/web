<template>
  <div class="main">
      <!--头部-->
      <Header></Header>
      <div class="body layout">
        
      </div>

      <!-- Foot -->
      <Footer></Footer>
  </div>
</template>

<script>
  import Header from './../components/Header'
  import Footer from './../components/Footer';
  export default {
    name: 'Index',
    components:{
      Header,
      Footer
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
  .body{
    height: 600px;
  }
</style>
