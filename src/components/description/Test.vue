<template>
  <div class="main">
    <p class="title">考核要求</p>
    <p class="content">将实验预习、实验操作、实验报告 “三位一体”全面考核和评价学生的学习成效。具体考核要求、评分细则和比例见下表</p>
    <div class="table-wrap">
        <img src="./image/test.png" alt="" style="width:450px;height:270px;">
    </div>
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
