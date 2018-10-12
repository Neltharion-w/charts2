<template>
    <div class="h-100 bg-dark youke" style="overflow:auto">
      <div class="pro-desc">
        该项目收集表现力强、交互性优的图表，所有素材来源于当前主流图表库(ECharts,Hcharts,阿里的G2/G6等)。
        领导要求前端推动UI设计，便于设计者在设计网页时，可快速浏览及选择合适的图表。
        由于前端人员审美等主观因素限制，在图表的选择上，难免存在令人不满意的地方，希望有建议和意见的用户帮助我们进步。
      </div>

    </div>
</template>

<style lang="scss">
.youke {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1rem 1fr 1rem;
  @include media-breakpoint-up(md) {
    grid-template-columns: 2rem 1fr 2rem;
  }
}
.pro-desc {
  grid-column-start: 2;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  -webkit-background-clip: text;
  background-image: url(../assets/copy_texture_7_large.jpg);
  background-repeat: repeat-y;
  background-size: 100% auto;
  color: transparent;
  font-size: 2rem;
  @include media-breakpoint-up(md) {
    font-size: 2.5rem;
  }
}
</style>
