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
    <!-- 等候图片 -->
    <br>

    <p class="title">用户操作系统要求（如Windows、Unix、IOS、Android等）</p>
    <p class="content">（1）计算机操作系统和版本要求：Windows 7及以上</p>
    <p class="content">（2）其他计算终端操作系统和版本要求：无</p>
    <p class="content">（3）支持移动端：根据具体需求进行选择</p>
    <br>

    <p class="title">用户非操作系统软件配置要求（如浏览器、特定软件等）</p>
    <p class="two-title">（1）需要特定插件：</p>
    <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）插件名称&nbsp;&nbsp;Unity Web Player</p>
    <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）插件容量&nbsp;&nbsp;1.82MB</p>
    <p class="content">
        <a href="https://unity3d.com/cn/webplayer" target="_Blank">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下载链接: https://unity3d.com/cn/webplayer
        </a>
    </p>
    <p class="two-title">（2）其他计算终端非操作系统软件配置要求（需说明是否可提供相关软件下载服务）</p>
    <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）浏览器推荐使用谷歌（Google Chrome）浏览器55.0以上版本、火狐（Firefox）浏览器50.0以上版本</p>
    <br>

    <p class="title">用户硬件配置要求（如主频、内存、显存、存储容量等）</p>
    <p class="two-title">（1）计算机硬件配置要求</p>
    <div style="margin-top:5px;">
      <img src="./image/hardware.png" alt="">
    </div>
    <p class="two-title">（2）其他计算终端硬件配置要求：无</p>
    
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
