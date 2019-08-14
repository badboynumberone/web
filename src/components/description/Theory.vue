<template>
  <div class="main">
    <p class="title">实验原理</p>
    <p class="content">
      婴儿在不同状态下的啼哭声是有差异的，主要表现在语音所呈现的基频、能量等方面。运用Praat软件，将收集的啼哭音频进行处理，呈现该音频的波形图和对应的语谱图，
      分析波形图中波形振动的规律性和语谱图中呈现的基频、短时能量等特征，可为婴儿啼哭辨析提供一定的依据。(见图1、图2)
    </p>
    <div class="img-wrap">
      <div class="left">
        <img src="./image/theory-one.png" alt style="width:320px;height:180px" />
        <p>图1 饥饿啼哭波形图及对应的语谱图</p>
      </div>
      <div class="right">
        <img src="./image/theory-two.png" alt style="width:320px;height:180px" />
        <p>图2 肠绞痛啼哭波形图及对应的语谱图</p>
      </div>
    </div>
    <p class="content">
      波形越密集，啼哭音调就越高；波形幅度越大，啼哭响度就越大。当婴儿因正常的生理性需求而啼哭时，情绪变化相对稳定，波形幅度较小，响度较低，波形振动的规律性较为明显。
      当婴儿处于病理性或疼痛状态时，由于情绪不稳定，啼哭声音波形的幅度较大，波形更加密集，振动更加无规律性。
    </p>
    <p class="content">
      波形越密集，啼哭音调就越高；波形幅度越大，啼哭响度就越大。当婴儿因正常的生理性需求而啼哭时，情绪变化相对稳定，波形幅度较小，响度较低，波形振动的规律性较为明显。
      当婴儿处于病理性或疼痛状态时，由于情绪不稳定，啼哭声音波形的幅度较大，波形更加密集，振动更加无规律性。
    </p>
    <p class="content">
      从短时能量方面看，语音的能量随着时间变化，语音信号的能量特征和啼哭信息有着较强的相关性。对于婴儿来说，往往他们高兴、愤怒、饥饿时，声音能量会伴随着这些情绪而发生变化。
      不舒服、困倦等情绪发生时，往往声音能量会低于高兴、平静的情绪。能量值的大小通过颜色表示，颜色越深，表示该点的语音能量越强。语谱图颜色深的区域所占面积越大，谐波成分越密集，表明语音能量越大。
    </p>
  </div>
</template>

<script>
export default {
  name: "Theory",

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
  .img-wrap {
    @include fc;
    p {
      @include sc(14px, #666666);
      text-align: center;
      line-height: 22px;
      margin-bottom: 15px;
    }
  }
}
</style>
