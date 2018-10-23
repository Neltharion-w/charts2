<template>
  <div id="chartdiv"></div>
</template>

<script>
export default {
  /* eslint-disable no-undef */
  mounted () {
    AmCharts.makeChart('chartdiv', {
      type: 'pie',
      theme: 'light',
      innerRadius: '40%',
      gradientRatio: [
        -0.4,
        -0.4,
        -0.4,
        -0.4,
        -0.4,
        -0.4,
        0,
        0.1,
        0.2,
        0.1,
        0,
        -0.2,
        -0.5
      ],
      dataProvider: [
        {
          country: 'Lithuania',
          litres: 501.9
        },
        {
          country: 'Czech Republic',
          litres: 301.9
        },
        {
          country: 'Ireland',
          litres: 201.1
        },
        {
          country: 'Germany',
          litres: 165.8
        },
        {
          country: 'Australia',
          litres: 139.9
        },
        {
          country: 'Austria',
          litres: 128.3
        }
      ],
      balloonText: '[[value]]',
      valueField: 'litres',
      titleField: 'country',
      balloon: {
        drop: true,
        adjustBorderColor: false,
        color: '#FFFFFF',
        fontSize: 16
      },
      export: {
        enabled: true
      }
    })
  }
}
</script>
<style scoped>
/* eslint-disable no-tabs */
#chartdiv {
  width: 100%;
  height: 500px;
  font-size: 11px;
}
</style>
