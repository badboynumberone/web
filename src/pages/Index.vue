<template>
  <div class="main">
      <!--头部-->
      <Header></Header>
      <div class="body layout">
        <div class="left">
          <Nav></Nav>
        </div>
        <div class="right">

        </div>
      </div>
  </div>
</template>

<script>
  import Header from './../components/Header';
  import Nav from './../components/Nav';
  export default {
    name: 'Index',
    components:{
      Header,Nav
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
