<template>
<!-- 项目特色 -->
  <div class="main">
      <!--头部-->
      <Header></Header>
      <div class="body layout">
        <FeatureTemp></FeatureTemp>
      </div>
      <!-- foot -->
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './../components/Header';
  import Footer from './../components/Footer';
  import FeatureTemp from '../components/feature/FeatureTemp'

  export default {
    name: 'Index',
    components:{
      Header,
      Footer,
      FeatureTemp
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
