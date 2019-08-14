<template>
  <div class="main">
    <p class="title">试验项目应用情况</p>
    <p class="content">
      （1）本校上线时间 ： 2019年08月14日   
    </p>

    <p class="content">
      （2）已服务过的本校学生人数： 8888人  
    </p>

    <p class="content">
      （3）是否纳入到教学计划：
      <el-radio v-model="plan" label="1">是</el-radio>
      <el-radio v-model="plan" label="2">否</el-radio>
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      (勾选“是”，请附所属课程教学大纲）
    </p>

    <p class="content">
      （4）是否面向社会提供服务：
      <el-radio v-model="serve" label="1">是</el-radio>
      <el-radio v-model="serve" label="2">否</el-radio>
    </p>

    <p class="content">
      （5）社会开放时间 ：2019年08月14日  ，已服务人数 ：8888人
    </p>
  </div>
</template>

<script>
export default {
  name: "UseCase",

  data() {
    return {
      plan: "1",
      serve:"1"
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
