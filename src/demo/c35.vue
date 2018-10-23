<template>
    <div>
        <div class="p-1">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div style="height:500px">
            <h-echarts :option="option[value]"></h-echarts>
          </div>
        </div>
    </div>
</template>

<script>
import echartsData from './index.js'
export default {
  data () {
    return {
      option: echartsData,
      options: [
        {
          value: 0,
          label: '工具条可选段查看'
        }
      ],
      value: 0
    }
  }
}
</script>
