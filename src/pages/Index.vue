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
  import Header from './../components/Header';
  import Footer from './../components/Footer';
  import Nav from './../components/Nav';
  export default {
    name: 'Index',
    components:{
      Header,Footer,Nav
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
    display: flex;
    .left{
      width: 20%;
    }
  }
</style>
