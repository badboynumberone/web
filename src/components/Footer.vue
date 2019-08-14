<template>
  <div class="main">
     <div class="top">
        <div class="content layout">
          <img src="/static/images/jklogo.png" alt="">
          <h1>动漫学院</h1>
          <p>动画角色表演动作捕捉虚拟仿真实验项目</p>
        </div>
     </div>
     <div class="bottom">
        <div class="content layout">
          <div class="container">
            <a class="active" href="">首页</a>
            <a href="">项目描述</a>
            <a href="">网络要求</a>
            <a href="">架构及技术</a>
            <a href="">项目特色</a>
            <a href="">服务计划</a>
            <a href="">申报书</a>
          </div>
        </div>
     </div>
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
