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
    // arc diagram layout
    var ds = new DataSet()
    var dv = ds.createView().source(data, {
      type: 'graph',
      edges: function edges (d) {
        return d.links
      }
    })
    dv.transform({
      type: 'diagram.arc',
      marginRatio: 0.5
      // sortBy: 'frequency' // id, weight, frequency, {function}
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

    var edgeView = chart.view()
    edgeView.coord('polar').reflect('y')
    edgeView.source(dv.edges)
    edgeView.axis(false)
    edgeView
      .edge()
      .position('x*y')
      .shape('arc')
      .color('source')
      .opacity(0.5)
      .tooltip('source*target')

    var nodeView = chart.view()
    nodeView.coord('polar').reflect('y')
    nodeView.source(dv.nodes)
    nodeView.axis(false)
    nodeView
      .point()
      .position('x*y')
      .shape('circle')
      .size('value')
      .color('id')
      .opacity(0.5)
      .style({
        stroke: 'grey'
      })
      .label('name', {
        labelEmit: true
      })

    chart.render()
  }
}
</script>
