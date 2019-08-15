<template>
  <!-- 项目描述 -->
  <div class="main">
    <!--头部-->
    <Header></Header>
    <div class="body layout">
      <Purpose v-if="false"></Purpose>
      <Theory v-if="false"></Theory>
      <Material v-if="false"></Material>
      <Device v-if="false"></Device>
      <Method v-if="false"></Method>
      <MethodStep v-if="false"></MethodStep>
      <Result v-if="false"></Result>
      <FaceStudent v-if="false"></FaceStudent>
      <UseCase v-if="false"></UseCase>
      <Test v-if="true"></Test>
    </div>
    <!-- foot -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Purpose from "../components/description/Purpose";
import Theory from "../components/description/Theory";
import Material from "../components/description/Material";
import Device from "../components/description/Device";
import Method from "../components/description/Method";
import MethodStep from "../components/description/MethodStep";
import Result from "../components/description/Result";
import FaceStudent from "../components/description/FaceStudent";
import UseCase from "../components/description/UseCase";
import Test from "../components/description/Test";

export default {
  name: "Description",
  components: {
    Header,
    Purpose,
    Footer,
    Theory,
    Material,
    Device,
    Method,
    MethodStep,
    Result,
    FaceStudent,
    UseCase,
    Test
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/styles/mixin";

</style>
