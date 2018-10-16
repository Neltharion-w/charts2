<template>
    <div class="charts-page h-100">
      <aside class="bg-dark d-none d-md-block text-aside">
        <ul class="list-group list-group-flush">
          <li v-for="item in aside" :key="item.mao" @click="jump(item.mao)" :class="{active:mao==item.mao}" class="list-group-item d-flex align-items-center">
              <i :class="['cool-'+item.icon]" class="d-inline-block border border-white rounded-circle iconfont"></i>
              <span class="chart-name">{{item.name}}</span>
          </li>
        </ul>
      </aside>
      <h-scroll-listen class="chart-scroll" ref="scroll" @in="m=>{mao=m}">
        <div>
          <div board="zx" class="mao">
            <h3>折线图<span>Line</span></h3>
            <div class="pics">
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
            </div>
          </div>
          <div board="zz" class="chart-list mao">
            <h3>柱状图<span>Bar</span></h3>
            <div class="pics">
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
              <div class="pic p-2">
                <h5>Basic Line Chart</h5>
                <img class="d-inline-block w-100" src="../assets/line-simple.png">
              </div>
            </div>
          </div>
        </div>
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
  $gap: 30px;
  @include media-breakpoint-up(md) {
    display: grid;
    grid-template-columns: 180px 1fr;
  }
  aside {
    overflow: auto;
    @include scroll($scrollbar-width, true, $dark);
    li {
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        background-color: #162436;
      }
    }
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
  .chart-scroll {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0 $gap $gap;
    @include scroll($scrollbar-width, false, #6d47d9);
    background: url(../assets/topography.svg),
      linear-gradient(110deg, #f93d66, #6d47d9);
    background-size: 340px, auto;
    h3 {
      color: $gray-800;
      font-size: 24px;
      line-height: 1;
      span {
        margin-left: 10px;
        font-size: 20px;
        color: $gray-700;
      }
      margin: 0;
      padding: 2/3 * $gap 0;
    }
  }
  .pics {
    color: var(--white);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: $gap;
  }
  .pic {
    cursor: pointer;
    &:hover {
      h5 {
        text-decoration: underline;
      }
    }
    h5 {
      text-decoration: #162436;
      font-weight: normal;
      font-size: 1rem;
      color: var(--white);
    }
    background-color: rgba(255, 255, 255, 0.2);
  }
}
</style>
