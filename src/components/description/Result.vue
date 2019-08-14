<template>
  <div class="main">
    <p class="title">实验结果与结论要求</p>
    <p class="content">（1）是否记录每步实验结果：
        <el-radio v-model="step" label="1">是</el-radio>
        <el-radio v-model="step" label="2">否</el-radio>
    </p>
    <p class="content">（2）实验结果与结论要求：
        <el-radio v-model="result" label="1">实验报告</el-radio>
        <el-radio v-model="result" label="2">心得体会</el-radio>
        <el-radio v-model="result" label="3">其他</el-radio>
    <p class="content">（3）其他描述：</p>
  </div>
</template>

<script>
export default {
  name: "Result",

  data() {
    return {
      step: "1",
      result:"2"
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
