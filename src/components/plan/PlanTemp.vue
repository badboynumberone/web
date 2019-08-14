<template>
  <div class="main">
    <p class="title">实验教学项目持续建设服务计划</p>
    <p class="two-title">1.项目持续建设与服务计划：</p>
    <p class="content">&nbsp;&nbsp;（1）满足课程需求：计划增加**门虚拟仿真实验课程，建立电子专业实验教学体系，帮助学生理解**实验课程相关理论。</p>
    <p class="content">&nbsp;&nbsp;（2）满足专业需求：面向电子信息与**专业学生，系统掌握专业相关的理论基础知识，具备**专业知识和应用能力，能从事技术指导、试验研究等方面的工作。</p>
    <p class="content">&nbsp;&nbsp;（3）建设具有专业特色对虚拟仿真实验项目，增加器材种类、交互功能设计，满足教师和学生对于创新型实验的设计需求。</p>
    <p class="content">&nbsp;&nbsp;（4）开放式虚拟仿真管理平台建设和更新：增强平台对优质资源的共享能力和稳定性，满足更大的用户并发访问。加强虚实统一管理能力，结合我校虚拟仿真实际教学情况，建立校级开放式虚拟仿真管理平台。</p>
    
    <br>

    <p class="two-title">2.面向高校的教学推广应用计划：
    <p class="content">&nbsp;&nbsp;（1）未来学科建设过程中，通过举办会议、成立论坛、接待参访等形式，与校内外及国内外兄弟院校、相关机构的对口院系进行虚拟实验资源项目建设思路、经验和成果的资源共享；多市及省内的其它相关专业的学校和学生能共享我们的建设成果，培养学生的综合创新能力服务；</p>
    <p class="content">&nbsp;&nbsp;（2）综合应用多媒体、大数据、三维建模、人工智能、人机交互、传感器、超级计算、虚拟现实、增强现实、云计算等网络化、数字化、智能化技术手段，丰富虚拟仿真实验内容，优化**实验；举办**技能大赛，促进和提升学生的专业实践能力。</p>

    <br>

    <p class="two-title">3.面向社会的推广应用计划：</p>
     <p class="content">&nbsp;&nbsp;不断补充、更新教学资源，面向社会提供免登录链接，提供教学训练所用资源。面向定点企业提供培训及考核服务。</p>
  </div>
</template>

<script>
export default {
  name: "PlanTemp",

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
