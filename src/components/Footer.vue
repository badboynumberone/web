<template>
  <div class="main">
    <div class="layout left-right">
      <div>
        <p>建设单位：南京金陵学院</p>
        <p>地址：江苏省南京市秣周东路2号南京金陵学院</p>
      </div>
      <div class="clearfix">
        <p>联系电话：0512-87959882</p>
        <p class="fr">实验运行常见问题指南</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/styles/mixin";
.main {
  background: $theme;
  width: 100%;
  height: 110px;
  .left-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    p {
      @include sc(16px, #fff);
      line-height: 24px;
    }
  }
}
</style>
