<template>
    <div>
        <div class="showbox" style="margin-top:30px;">
          <!-- {{this.$route.query.chartsId}}
          {{this.$route.params.chartsId}} -->
            <component :is="'c'+this.$route.query.chartsId"></component>
            <!-- <component :is="'c'+this.$route.params.chartsId"></component> -->
        </div>
        <!-- <div>
            <button @click="move">返回</button>
        </div> -->
    </div>
</template>
<script>
import Highcharts from 'highcharts/highstock'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsDrilldown from 'highcharts/modules/drilldown'
import Highcharts3D from 'highcharts/highcharts-3d'
import * as theme from 'highcharts/themes/grid-light'

import c1 from './c01'
import c2 from './c02'
import c3 from './c03'
import c4 from './c04'
import c5 from './c05'
import c6 from './c06'
import c7 from './c07'
import c8 from './c08'
import c9 from './c09'
import c10 from './c10'
import c11 from './c11'
import c12 from './c12'
import c13 from './c13'
import c14 from './c14'
import c15 from './c15'
import c16 from './c16'
import c17 from './c17'
import c18 from './c18'
import c19 from './c19'
import c20 from './c20'
import c21 from './c21'
import c22 from './c22'
import c23 from './c23'
import c24 from './c24'
import c25 from './c25'
import c26 from './c26'
import c27 from './c27'
import c28 from './c28'
import c29 from './c29'
import c30 from './c30'
import c31 from './c31'
import c32 from './c32'
import c33 from './c33'
import c34 from './c34'
import c35 from './c35'
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts)
Highcharts3D(Highcharts)
theme(Highcharts)
export default {
  components: {
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
    c21,
    c22,
    c23,
    c24,
    c25,
    c26,
    c27,
    c28,
    c29,
    c30,
    c31,
    c32,
    c33,
    c34,
    c35
  },
  methods: {
    // move () {
    //   this.$router.push({ path: '/Charts' })
    // }
  }
}
</script>
