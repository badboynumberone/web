<template>
  <div class="main">
    <p class="title">实验材料</p>
    <p class="content">无</p>
  </div>
</template>

<script>
export default {
  name: "Material",

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
  .content {
    @include sc(14px, #666666);
    line-height: 22px;
    margin-bottom: 15px;
  }
}
</style>
