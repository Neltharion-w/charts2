<template>
  <div></div>
</template>

<script>
import G6 from '@antv/g6'
const gPlugins = require('@antv/g6/build/plugins')
export default {
  /* eslint-disable no-undef */
  mounted () {
    G6.registerNode('rect', {
      getPath: function getPath (item) {
        var width = 100 // 一半宽
        var height = 40 // 一半高
        return G6.Util.getRectPath(-width / 2, -height / 2, width, height, 10)
      }
    })
    var data = {
      nodes: [
        {
          id: '收集日志'
        },
        {
          id: '入 es 集群'
        },
        {
          id: '入 hdfs'
        },
        {
          id: 'hive 计算'
        },
        {
          id: 'report'
        }
      ],
      edges: [
        {
          source: '收集日志',
          target: '入 es 集群'
        },
        {
          source: '收集日志',
          target: '入 hdfs'
        },
        {
          source: '入 hdfs',
          target: 'hive 计算'
        },
        {
          source: '入 es 集群',
          target: 'hive 计算'
        },
        {
          source: 'hive 计算',
          target: 'report'
        }
      ]
    }
    var graph = new G6.Graph({
      container: this.$el,
      fitView: 'cc',
      height: 500, // 画布高
      /* eslint-disable new-cap */
      plugins: [new gPlugins['layout.dagre']()],
      defaultIntersectBox: 'rect' // 使用矩形包围盒
    })

    graph.node({
      shape: 'rect',
      label: function label (model) {
        return model.id
      },

      style: {
        stroke: '#00C0A5',
        fill: '#92949F',
        fillOpacity: 0.45,
        lineWidth: 2
      }
    })
    graph.edge({
      style: {
        endArrow: true
      }
    })
    graph.read(data)
  }
}
</script>

<style scoped>
</style>
