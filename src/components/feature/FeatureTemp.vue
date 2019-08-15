<template>
  <div class="main">
    <p class="title">实验教学项目特色</p>
    <p class="two-title">实验方案设计思路：</p>
    <p class="content">
        通过该实验教学，学生可以学习和掌握动画角色表演中较为复杂的动作设计的基本内容，将复杂的、专业性强的动作，如舞蹈动作、打斗动作、体育运动等，从节奏、速度、时间等方面，
        分解为多角度、多侧面的单帧画面，并能够使其的镜头表现丰富化，让复杂动作能够更为直观、明确，学生能够对复杂动作的细节有充分的了解，弥补了传统教学中单一镜头、固定模式的表现形式。 
    </p>
    <br>

    <p class="two-title">实验教学方法：</p>
    <p class="content">
        该实验操作交互性强，学生深度参与，理实融合，循序渐进，体验感较好，从而解决当前实验教学中普遍存在学生只看不做、操作少、体验差、参与度低的问题，达到良好的教学效果。
    </p>
    <br>

    <p class="two-title">评价体系：</p>
    <p class="content">
        该虚拟实验系统自动记录学生实验操作过程和实验数据使用过程，进行综合评价得到学生的实验成绩。学生完成实验后，还必须在虚拟仿真实验系统上完成实验报告，老师在线上对学生提交的实验报告进行综合评价。
        <br>
        该实验项目在开放式虚拟仿真实验教学管理系统和共享平台上运行，教师可利用该平台在线上安排学生预习、指导学生实验和批改实验报告并与学生互动交流，实现了全流程、一体化、交互式的教学管理与评价。
    </p>
    <br>

    <p class="two-title">传统教学的延伸与拓展：</p>
    <p class="content">
        本实验项目在《动画运动规律》、《原画设计》、《动画造型》、《三维动画短片》等课程基础上，运用动作捕捉技术，通过虚拟仿真实验系统的转换和优化，
        学生可在三维场景下开展“动画角色表演动作捕捉虚拟仿真实验项目”，学习动画角色表演动作捕捉实验的基本内容、仪器设备、操作步骤和数据分析方法，实现对传统理论教学和实验教学的延伸和拓展。
    </p>
  </div>
</template>

<script>
export default {
  name: "FeatureTemp",

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
