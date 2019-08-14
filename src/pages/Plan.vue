<template>
  <div class="main">
    <!--头部-->
    <Header></Header>
    <div class="body layout">
      <FeatureTemp></FeatureTemp>
    </div>

    <!-- foot -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import FeatureTemp from "../components/plan/PlanTemp"

export default {
  name: "Index",
  components: {
    Header,
    FeatureTemp
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
