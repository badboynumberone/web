<template>
<!-- 申报书 -->
  <div class="main">
      <!--头部-->
      <Header></Header>
      <div class="body layout">
        <DeclarationTemp></DeclarationTemp>
      </div>
       <!-- foot -->
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './../components/Header';
  import Footer from './../components/Footer';
  import DeclarationTemp from '../components/declaration/DeclarationTemp'
  export default {
    name: 'Index',
    components:{
      Header,
      Footer,
      DeclarationTemp
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
