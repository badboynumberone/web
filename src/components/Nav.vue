<template>
  <div class="main">

  </div>
</template>

<script>
  export default {
    name: 'Header',

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/mixin";
  .bottom{
    @include wh(100%,70px);
    -moz-box-shadow:0px 1px 2px #2D75E0; -webkit-box-shadow:0px 1px 2px #2D75E0; box-shadow:0px 1px 2px #2D75E0;
    background: $theme;
    .content{
      @include fc;
      .container{
        a{
          display: inline-block;
          line-height: 70px;
          padding: 0 20px;
          @include sc(16px,#fff);
          font-weight: 400;
          transition: all 0.5s;
          &:hover{
            font-weight: bold;
            color: $theme;
            background: #DFDBDC;
          }
        }
        a.active{
          color: $theme;
          background: #DFDBDC;
          font-weight: bold;
        }
      }
    }
  }
  .top{
    @include wh(100%,160px);
    background: url("/static/images/banner.png") repeat-x ;
    .content{
      height: 100%;
      @include fc();
      img{
        margin-right: 25px;
      }
      h1{
        font-weight: bold;
        @include sc(40px,#133971);
        margin-right: 10px;
      }
      p{
        @include sc(25px,#133971);
        position: relative;
        top: 7px;
      }
    }
  }
</style>
