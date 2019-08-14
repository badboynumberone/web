<template>
  <div class="main">
    <p class="title">项目申报书</p>
      <p style="text-align: center;">
        <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" 
          codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" 
          height="620" width="650">
          <param name="allowFullScreen" value="true" />
          <param name="quality" value="high" />
          <param name="movie" value="../../static/swf/shenbaoshu.swf" />
            <embed allowfullscreen="true" height="620" pluginspage="http://www.macromedia.com/go/getflashplayer" 
            quality="high" src="../../static/swf/shenbaoshu.swf" type="application/x-shockwave-flash" width="650">
            </embed>
        </object>
      </p>
  </div>
</template>

<script>
export default {
  name: "DeclarationTemp",

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

  .two-title {
    @include sc(16px, #333333);
    line-height: 22px;
  }
  .content {
    @include sc(14px, #666666);
    line-height: 22px;
  }
}
</style>
