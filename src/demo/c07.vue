<template>
  <div></div>
</template>

<script>
import G2 from '@antv/g2'
import { DataSet } from '@antv/data-set'
import data from './assets/data/diamond.json'
export default {
  /* eslint-disable no-undef */
  mounted () {
    var DataView = DataSet.DataView
    var chart = new G2.Chart({
      container: this.$el,
      forceFit: true,
      height: 400,
      padding: [20, 80]
    })
    chart.source(data, {
      cut: {
        sync: true
      },
      mean: {
        sync: true,
        tickCount: 5
      }
    })
    chart.legend('cut', {
      position: 'top'
    })
    chart.axis('cut', {
      label: null,
      tickLine: null
    })
    chart.tooltip({
      crosshairs: false
    })
    chart.facet('tree', {
      fields: ['clarity'],
      line: {
        stroke: '#c0d0e0'
      },
      lineSmooth: true,
      // padding: 0,
      eachView: function eachView (view, facet) {
        var data = facet.data
        var dv = new DataView()
        dv.source(data).transform({
          type: 'aggregate',
          fields: ['price'],
          operations: ['mean'],
          as: ['mean'],
          groupBy: ['cut']
        })
        view.source(dv)
        view
          .interval()
          .position('cut*mean')
          .color('cut')
      }
    })
    chart.render()
  }
}
</script>

<style scoped>
</style>
