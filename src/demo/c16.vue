<template>
  <div></div>
</template>

<script>
import G6 from '@antv/g6'
import data from './assets/data/modeling-methods.json'
export default {
  /* eslint-disable no-undef */
  mounted () {
    G6.registerNode('treeNode', {
      anchor: [[0, 0.5], [0.5, 1]]
    })
    G6.registerEdge('VH', {
      getPath: function getPath (item) {
        var points = item.getPoints()
        var start = points[0]
        var end = points[points.length - 1]
        return [
          ['M', start.x, start.y],
          ['L', start.x, end.y],
          ['L', end.x, end.y]
        ]
      }
    })
    var layout = new G6.Layouts.IndentedTree({
      direction: 'LR', // 方向（LR/RL/H）
      indent: 30, // 缩进量
      getVGap: function getVGap () /* d */ {
        // 竖向间距
        return 4
      }
    })
    var tree = new G6.Tree({
      container: this.$el, // 容器ID
      height: 500, // 画布高
      layout: layout,
      fitView: 'autoZoom' // 自动缩放
    })
    tree.node({
      shape: 'treeNode',
      size: 8,
      label: function label (model) {
        if (model.children && model.children.length > 0) {
          return {
            text: model.name,
            textAlign: 'right'
          }
        }
        return {
          text: model.name,
          textAlign: 'left'
        }
      },
      labelOffsetX: function labelOffsetX (model) {
        if (model.children && model.children.length > 0) {
          return -10
        }
        return 10
      }
    })
    tree.edge({
      shape: 'VH'
    })
    tree.read({
      roots: [data]
    })
  }
}
</script>

<style scoped>
</style>
