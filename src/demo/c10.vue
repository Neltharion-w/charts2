<template>
  <div></div>
</template>

<script>
import G2 from '@antv/g2'
import { DataSet } from '@antv/data-set'
import data from './assets/data/relationship-with-weight.json'
export default {
  /* eslint-disable no-undef */
  mounted () {
    var ds = new DataSet()
    var dv = ds.createView().source(data, {
      type: 'graph',
      edges: function edges (d) {
        return d.links
      }
    })
    dv.transform({
      type: 'diagram.arc',
      sourceWeight: function sourceWeight (e) {
        return e.sourceWeight
      },
      targetWeight: function targetWeight (e) {
        return e.targetWeight
      },
      weight: true,
      marginRatio: 0.3
    })

    var chart = new G2.Chart({
      container: this.$el,
      forceFit: true,
      height: 700,
      padding: [100, 0]
    })
    chart.legend(false)
    chart.tooltip({
      showTitle: false
    })

    chart.scale({
      x: {
        sync: true
      },
      y: {
        sync: true
      }
    })

    var edgeView = chart.view()
    edgeView.source(dv.edges)
    edgeView.coord('polar').reflect('y')
    edgeView.axis(false)
    edgeView
      .edge()
      .position('x*y')
      .shape('arc')
      .color('source')
      .opacity(0.5)
      .tooltip('source*target*value')

    var nodeView = chart.view()
    nodeView.source(dv.nodes)
    nodeView.coord('polar').reflect('y')
    nodeView.axis(false)
    nodeView
      .polygon()
      .position('x*y')
      .color('id')
      .label('name', {
        labelEmit: true,
        textStyle: {
          fill: '#8c8c8c'
        }
      })

    chart.render()
  }
}
</script>
