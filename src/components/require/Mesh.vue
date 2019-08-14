<template>
  <div class="main">
    <p class="title">有效链接网址</p>
    <div class="address-wrap">
        <div class="fang-zhen">
            <p>仿真项目</p>
            <p>
                <a href="http://nzxy.ujs.owvlab.net/virexp/dxgd" target="_Blank">http://nzxy.ujs.owvlab.net/virexp/dxgd</a>
            </p>
        </div>
        <div class="manage">
            <p>管理后台</p>
            <p>
                <a href="http://nzxy.ujs.owvlab.net/virexp/dxgd" target="_Blank">http://nzxy.ujs.owvlab.net/virexp/dxgd</a>   
            </p>
        </div>
    </div>
    <br>
    <p class="title">网络条件要求</p>
    <p class="two-title">（1）说明客户端到服务器的带宽要求（需提供测试带宽服务）</p>
    <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）基于公有云服务器部署的系统，5M-10M带宽</p>
    <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）基于局域网服务器部署的系统，10M-50M带宽</p>

    <p class="two-title">（2）说明能够支持的同时在线人数（需提供在线排队提示服务）</p>
    <p class="content">支持100个学生同时在线并发访问和请求，如果单个实验被占用，则提示后面进行在线等待，等待前面一个预约实验结束后，进入下一个预约队列。</p>
  </div>
</template>

<script>
export default {
  name: "Mesh",

  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin";
.main {
  width: 66%;
  margin-top: 15px;
  .title {
    @include sc(24px, #333333);
    margin-bottom: 15px;
  }
  .address-wrap{
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
          @include sc(14px,#666666);
          line-height:22px;
      }
  }
  .two-title{
      @include sc(14px, #333333);
      line-height:22px;
      
  }
  .content {
    @include sc(14px, #666666);
    line-height: 22px;
  }
}
</style>
