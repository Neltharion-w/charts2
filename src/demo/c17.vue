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
      anchor: [[0, 0.5], [1, 0.5]]
    })
    G6.registerEdge('smooth', {
      getPath: function getPath (item) {
        var points = item.getPoints()
        var start = points[0]
        var end = points[points.length - 1]
        var hgap = Math.abs(end.x - start.x)
        if (end.x > start.x) {
          return [
            ['M', start.x, start.y],
            [
              'C',
              start.x + hgap / 4,
              start.y,
              end.x - hgap / 2,
              end.y,
              end.x,
              end.y
            ]
          ]
        }
        return [
          ['M', start.x, start.y],
          [
            'C',
            start.x - hgap / 4,
            start.y,
            end.x + hgap / 2,
            end.y,
            end.x,
            end.y
          ]
        ]
      }
    })
    var layout = new G6.Layouts.Mindmap({
      direction: 'H', // 方向（LR/RL/H/TB/BT/V）
      getHGap: function getHGap () /* d */ {
        // 横向间距
        return 100
      },
      getVGap: function getVGap () /* d */ {
        // 竖向间距
        return 10
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
        return model.name
      }
    })
    tree.edge({
      shape: 'smooth'
    })
    tree.on('afterchange', function () {
      tree.getNodes().forEach(function (node) {
        var model = node.getModel()
        var label = node.getLabel()
        var keyShape = node.getKeyShape()
        var parent = node.getParent()
        var box = keyShape.getBBox()
        var labelBox = label.getBBox()
        var dx = (box.maxX - box.minX + labelBox.maxX - labelBox.minX) / 2 + 8
        var dy = (box.maxY - box.minY) / 2 + 8
        if (parent) {
          var parentModel = parent.getModel()
          if (parentModel.x > model.x) {
            dx = -dx
          }
          dy = 0
        } else {
          dx = 0
        }
        label.attr({
          x: dx,
          y: dy
        })
      })
      tree.draw()
    })
    tree.read({
      roots: [data]
    })
  }
}
</script>

<style scoped>
</style>
