<template>
  <div></div>
</template>

<script>
import G2 from '@antv/g2'
import { DataSet } from '@antv/data-set'
import data from './assets/data/antv-keywords.json'
import img from './assets/image/h2.png'
/* eslint-disable no-undef */
export default {
  mounted () {
    var vm = this
    function getTextAttrs (cfg) {
      return _.assign(
        {},
        {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: 'center',
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: 'Alphabetic'
        },
        cfg.style
      )
    }
    // 给point注册一个词云的shape
    G2.Shape.registerShape('point', 'cloud', {
      drawShape: function drawShape (cfg, container) {
        var attrs = getTextAttrs(cfg)
        return container.addShape('text', {
          attrs: _.assign(attrs, {
            x: cfg.x,
            y: cfg.y
          })
        })
      }
    })
    var dv = new DataSet.View().source(data)
    var range = dv.range('value')
    var min = range[0]
    var max = range[1]
    var imageMask = new Image()
    imageMask.crossOrigin = ''
    imageMask.src = img
    imageMask.onload = function () {
      dv.transform({
        type: 'tag-cloud',
        fields: ['name', 'value'],
        imageMask: imageMask,
        font: 'Verdana',
        size: [window.innerWidth, window.innerHeight], // 宽高设置最好根据 imageMask 做调整
        padding: 0,
        timeInterval: 5000, // max execute time
        rotate: function rotate () {
          var random = ~~(Math.random() * 4) % 4
          if (random == 2) {
            random = 0
          }
          return random * 90 // 0, 90, 270
        },
        fontSize: function fontSize (d) {
          return ((d.value - min) / (max - min)) * (32 - 8) + 8
        }
      })
      var chart = new G2.Chart({
        container: vm.$el,
        forceFit: true,
        height: 560,
        padding: 20
      })
      chart.source(dv, {
        x: {
          nice: false
        },
        y: {
          nice: false
        }
      })
      chart.legend(false)
      chart.axis(false)
      chart.tooltip({
        showTitle: false
      })
      chart.coord().reflect()
      chart
        .point()
        .position('x*y')
        .color('text')
        .shape('cloud')
      chart.render()
    }
  }
}
</script>
