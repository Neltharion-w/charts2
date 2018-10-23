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
              <div class="pic p-2" @click="move(1)" >
                <h5>特殊数据标注</h5>
                <img class="d-inline-block w-100" src="../assets/01.jpg">
              </div>
              <div class="pic p-2" @click="move(2)" >
                <h5>区域着色1</h5>
                <img class="d-inline-block w-100" src="../assets/02.jpg">
              </div>
              <div class="pic p-2" @click="move(3)">
                <h5>区域着色2</h5>
                <img class="d-inline-block w-100" src="../assets/03.jpg">
              </div>
              <div class="pic p-2" @click="move(19)">
                <h5>可缩放时间轴</h5>
                <img class="d-inline-block w-100" src="../assets/19.jpg">
              </div>
              <div class="pic p-2" @click="move(23)">
                <h5>曲线折线图</h5>
                <img class="d-inline-block w-100" src="../assets/23.jpg">
              </div>
              <div class="pic p-2" @click="move(24)">
                <h5>lineWithChangingColor</h5>
                <img class="d-inline-block w-100" src="../assets/24.jpg">
              </div>
              <div class="pic p-2" @click="move(30)">
                <h5>实时刷新</h5>
                <img class="d-inline-block w-100" src="../assets/30.jpg">
              </div>
              <div class="pic p-2" @click="move(31)">
                <h5>可缩放的时间轴</h5>
                <img class="d-inline-block w-100" src="../assets/31.jpg">
              </div>
              <div class="pic p-2" @click="move(35)">
                <h5>工具条可选段查看</h5>
                <img class="d-inline-block w-100" src="../assets/35.jpg">
              </div>
            </div>
          </div>
          <div board="zz" class="chart-list mao">
            <h3>柱状图<span>Bar</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(12)">
                <h5>自定义柱状图</h5>
                <img class="d-inline-block w-100" src="../assets/12.jpg">
              </div>
              <div class="pic p-2" @click="move(21)">
                <h5>值轴持续时间</h5>
                <img class="d-inline-block w-100" src="../assets/21.jpg">
              </div>
              <div class="pic p-2" @click="move(28)">
                <h5>柱形范围图</h5>
                <img class="d-inline-block w-100" src="../assets/28.jpg">
              </div>
              <div class="pic p-2" @click="move(32)">
                <h5>可下钻的柱状图</h5>
                <img class="d-inline-block w-100" src="../assets/32.jpg">
              </div>
            </div>
          </div>
          <div board="bz" class="chart-list mao">
            <h3>饼状图<span>Pie</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(20)">
                <h5>甜甜圈与径向渐变</h5>
                <img class="d-inline-block w-100" src="../assets/20.jpg">
              </div>
              <div class="pic p-2" @click="move(22)">
                <h5>3D环形图</h5>
                <img class="d-inline-block w-100" src="../assets/22.jpg">
              </div>
              <div class="pic p-2" @click="move(33)">
                <h5>可下钻的饼状图</h5>
                <img class="d-inline-block w-100" src="../assets/33.jpg">
              </div>
            </div>
          </div>
          <div board="sd" class="chart-list mao">
            <h3>散点图<span>Scatter</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(25)">
                <h5>气泡图</h5>
                <img class="d-inline-block w-100" src="../assets/25.jpg">
              </div>
            </div>
          </div>
          <div board="rl" class="chart-list mao">
            <h3>热力图<span>Heatmap</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(4)">
                <h5>色块图</h5>
                <img class="d-inline-block w-100" src="../assets/04.jpg">
              </div>
              <div class="pic p-2" @click="move(5)">
                <h5>日历色块图</h5>
                <img class="d-inline-block w-100" src="../assets/05.jpg">
              </div>
              <div class="pic p-2" @click="move(34)">
                <h5>蜂巢图</h5>
                <img class="d-inline-block w-100" src="../assets/34.jpg">
              </div>
            </div>
          </div>
          <div board="gx" class="chart-list mao">
            <h3>关系图<span>Graph</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(8)">
                <h5>弧长链接图</h5>
                <img class="d-inline-block w-100" src="../assets/08.jpg">
              </div>
              <div class="pic p-2" @click="move(9)"> 
                <h5>弧长连接图</h5>
                <img class="d-inline-block w-100" src="../assets/09.jpg">
              </div>
              <div class="pic p-2" @click="move(10)">
                <h5>极坐标弧长连接图</h5>
                <img class="d-inline-block w-100" src="../assets/10.jpg">
              </div>
            </div>
          </div><div board="sz" class="chart-list mao">
            <h3>树状图<span>Tree</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(15)">
                <h5>紧凑树</h5>
                <img class="d-inline-block w-100" src="../assets/15.jpg">
              </div>
              <div class="pic p-2" @click="move(16)">
                <h5>生态树</h5>
                <img class="d-inline-block w-100" src="../assets/16.jpg">
              </div>
              <div class="pic p-2" @click="move(17)">
                <h5>脑洞树</h5>
                <img class="d-inline-block w-100" src="../assets/17.jpg">
              </div>
            </div>
          </div>
          <div board="xr" class="chart-list mao">
            <h3>旭日图<span>Sunburst</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(27)">
                <h5>旭日图</h5>
                <img class="d-inline-block w-100" src="../assets/27.jpg">
              </div>
            </div>  
          </div>
          <div board="yb" class="chart-list mao">
            <h3>仪表盘<span>Gauge</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(6)">
                <h5>仪表盘（多色）</h5>
                <img class="d-inline-block w-100" src="../assets/06.jpg">
              </div>
              <div class="pic p-2" @click="move(26)">
                <h5>活动图</h5>
                <img class="d-inline-block w-100" src="../assets/26.jpg">
              </div>
              
            </div>
          </div>
          <div board="cy" class="chart-list mao">
            <h3>词云图<span>Wordcloud</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(11)">
                <h5>带图片遮罩的词云</h5>
                <img class="d-inline-block w-100" src="../assets/11.jpg">
              </div>
              <div class="pic p-2" @click="move(29)">
                <h5>词云图</h5>
                <img class="d-inline-block w-100" src="../assets/29.jpg">
              </div>
            </div>
          </div>
          <div board="zdy" class="chart-list mao">
            <h3>自定义系列<span>Custom</span></h3>
            <div class="pics">
              <div class="pic p-2" @click="move(7)">
                <h5>tree 分面</h5>
                <img class="d-inline-block w-100" src="../assets/07.jpg">
              </div>
              <div class="pic p-2" @click="move(13)">
                <h5>水波图</h5>
                <img class="d-inline-block w-100" src="../assets/13.jpg">
              </div>
              <div class="pic p-2" @click="move(14)">
                <h5>水波图 - 自定义路径</h5>
                <img class="d-inline-block w-100" src="../assets/14.jpg">
              </div>
              <div class="pic p-2" @click="move(18)">
                <h5>工作流</h5>
                <img class="d-inline-block w-100" src="../assets/18.jpg">
              </div>
            </div>
          </div>
        </div>
      </h-scroll-listen>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mao: null,
      aside: [
        {
          name: '折线图',
          mao: 'zx',
          icon: 'zhexiantu'
        },
        {
          name: '柱状图',
          mao: 'zz',
          icon: 'histogram'
        },
        {
          name: '饼状图',
          mao: 'bz',
          icon: 'pie-chart_icon'
        },
        {
          name: '散点图',
          mao: 'sd',
          icon: 'sandiantu'
        },
        {
          name: '热力图',
          mao: 'rl',
          icon: 'relitu'
        },
        {
          name: '关系图',
          mao: 'gx',
          icon: 'guanxitu'
        },
        {
          name: '树状图',
          mao: 'sz',
          icon: 'shuzhuangtu'
        },
        {
          name: '旭日图',
          mao: 'xr',
          icon: 'fsux_tubiao_xuritu'
        },
        {
          name: '仪表盘',
          mao: 'yb',
          icon: 'yibiaopan'
        },
        {
          name: '词云图',
          mao: 'cy',
          icon: 'fsux_tubiao_ciyun'
        },
        {
          name: '自定义系列',
          mao: 'zdy',
          icon: 'zidingyi'
        }
      ]
    }
  },
  methods: {
    jump (mao) {
      this.$refs['scroll'].jump(mao)
    },
    move (id) {
      // this.$router.push({ name: 'Cdemo', params: { chartsId: id } });
      let routeData = this.$router.resolve({ path: 'Cdemo', query: { chartsId: id} });
      window.open(routeData.href,'_blank')
    }
  }
}
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
    background: #f3f3f3;
    background-size: 340px, auto;
    h3 {
      color: $gray-800;
      font-size: 24px;
      line-height: 1;
      span {
        margin-left: 10px;
        font-size: 20px;
        color: #999;
      }
      margin: 0;
      padding: 2/3 * $gap 0;
    }
  }
  .pics {
    color: var(--white);
    display: grid;
    @media screen and (min-width:480px){
      grid-template-columns: repeat(1, minmax(210px, 1fr));
    }
    @media screen and (min-width:768px){
      grid-template-columns: repeat(2, minmax(210px, 1fr));
    }
    @media screen and (min-width:992px){
      grid-template-columns: repeat(3, minmax(210px, 1fr));
    }
    @media screen and (min-width:1200px){
      grid-template-columns: repeat(4, minmax(210px, 1fr));
    }
    @media screen and (min-width:1600px){
      grid-template-columns: repeat(6, minmax(210px, 1fr));
    }
    
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
      color: #293c55;
    }
    background-color: #f9f9f9;
    box-shadow:0 1px 2px rgba(0,0,0,0.1);
  }
}
</style>
