<template>
  <div class="main">
      <div class="container">
        <h3>项目描述</h3>
        <ul class="content">
          <li v-for="(item,index) in navList" :key="index"><a :class="['fill',activeIndex==index?'active':'']" :href="item.href">{{item.word}}</a></li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    props:{
        navList:{
          type:Array,
          required:true,
          default:function(){
            return [{
              word:"导航示例01",
              href:"http://www.baidu.com"
            },{
              word:"导航示例02",
              href:"http://www.baidu.com"
            },{
              word:"导航示例03",
              href:"http://www.baidu.com"
            },{
              word:"导航示例04",
              href:"http://www.baidu.com"
            }];
          }
        }
    },
    data(){
      return {
        activeIndex:0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/mixin";
  h3{
    font-weight: bold;
    padding-left: 10px;
    border-left: 5px solid $theme;
    margin: 20px 0;
  }
  .content{
    padding: 30px 0;
    border-radius: 10px;
    overflow: hidden;
    background: #EBEBEB;
    li{
      a{
        display: block;
        line-height: 40px;
        text-align: center;

      }
      a.active{
        border-left: 5px solid $theme;
        color: $theme;
        font-weight: bold;
      }
    }
  }
</style>
