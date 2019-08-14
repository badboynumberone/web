<template>
<!-- 网络要求 -->
  <div class="main">
    <!--头部-->
    <Header></Header>

    <div class="body layout">
     <Mesh></Mesh>
    </div>
      <!-- foot -->
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './../components/Header';
  import Footer from './../components/Footer';
  import Mesh from '../components/require/Mesh'

  export default {
    name: 'Index',
    components:{
      Header,
      Footer,
      Mesh
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
