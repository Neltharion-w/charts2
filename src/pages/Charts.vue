<template>
    <div class="charts-page h-100">
      <aside class="bg-dark text-aside">
        <ul class="list-group">
          <li v-for="item in aside" :key="item.mao" @click="jump(item.mao)" :class="{active:mao==item.mao}" class="list-group-item d-flex align-items-center">
              <i :class="['cool-'+item.icon]" class="d-inline-block border border-white rounded-circle iconfont"></i>
              <span class="chart-name">{{item.name}}</span>
          </li>
        </ul>
      </aside>
      <h-scroll-listen class="charts-pic" ref="scroll" @in="m=>{mao=m}">
        <p class="m-1 border p-3">p</p>
        <p board="zx" class="mao m-1 border p-3">1</p>
        <p class="m-1 border p-3">p</p>
        <p board="2" class="mao m-1 border p-3">2</p>
        <p class="m-1 border p-3">p</p>
        <p board="3" class="mao m-1 border p-3">3</p>
        <p class="m-1 border p-3">p</p>
        <p board="4" class="mao m-1 border p-3">4</p>
        <p class="m-1 border p-3">p</p>
        <p board="5" class="mao m-1 border p-3">5</p>
        <p class="m-1 border p-3">p</p>
        <p board="6" class="mao m-1 border p-3">6</p>
        <p class="m-1 border p-3">p</p>
        <p board="7" class="mao m-1 border p-3">7</p>
        <p class="m-1 border p-3">p</p>
        <p board="8" class="mao m-1 border p-3">8</p>
        <p class="m-1 border p-3">p</p>
        <p board="9" class="mao m-1 border p-3">9</p>
        <p class="m-1 border p-3">p</p>
        <p board="10" class="mao m-1 border p-3">10</p>
        <p class="m-1 border p-3">p</p>
      </h-scroll-listen>
    </div>
</template>

<script>
export default {
  data() {
    return {
      mao: null,
      aside: [
        {
          name: "折线图",
          mao: "zx",
          icon: "zhexiantu"
        },
        {
          name: "柱状图",
          mao: "zz",
          icon: "histogram"
        },
        {
          name: "饼状图",
          mao: "bz",
          icon: "pie-chart_icon"
        },
        {
          name: "散点图",
          mao: "sd",
          icon: "sandiantu"
        },
        {
          name: "雷达图",
          mao: "ld",
          icon: "leidatu"
        },
        {
          name: "热力图",
          mao: "rl",
          icon: "relitu"
        },
        {
          name: "关系图",
          mao: "gx",
          icon: "guanxitu"
        },
        {
          name: "树状图",
          mao: "sz",
          icon: "shuzhuangtu"
        },
        {
          name: "旭日图",
          mao: "xr",
          icon: "fsux_tubiao_xuritu"
        },
        {
          name: "仪表盘",
          mao: "yb",
          icon: "yibiaopan"
        },
        {
          name: "词云图",
          mao: "cy",
          icon: "fsux_tubiao_ciyun"
        },
        {
          name: "自定义系列",
          mao: "zdy",
          icon: "zidingyi"
        }
      ]
    };
  },
  methods: {
    jump(mao) {
      this.$refs["scroll"].jump(mao);
    }
  }
};
</script>

<style lang="scss">
.charts-page {
  display: grid;
  grid-template-columns: 180px 1fr;
  aside {
    overflow: auto;
    @include scroll($scrollbar-width, true, $dark);
  }
  .charts-pic {
    @include scroll;
  }
  .iconfont {
    $h: 32px;
    width: $h;
    height: $h;
    line-height: $h;
    text-align: center;
    font-size: 1.3rem;
  }
  .chart-name {
    font-size: 0.875rem;
    margin-left: 10px;
  }
  li {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background-color: #162436;
    }
  }
}
</style>
