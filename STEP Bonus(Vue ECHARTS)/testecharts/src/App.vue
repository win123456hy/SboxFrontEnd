<template>
  <div id="app">
    <BasicLineChart/>
    <BasicAreaChart/>
    <SmoothedLineChart/>
    <Stackedareachart/>
    <WeatherChart/>
    <Stackedbarchart/>
    <DoughnutChart/>
    <PiewithScrollableLegend/>
  </div>
</template>

<script>
import BasicLineChart from './components/BasicLineChart.vue'
import BasicAreaChart from './components/BasicAreaChart.vue'
import SmoothedLineChart from './components/SmoothedLineChart.vue'
import Stackedareachart from './components/Stackedareachart.vue'
import WeatherChart from './components/WeatherChart.vue'
import Stackedbarchart from './components/Stackedbarchart.vue'
import DoughnutChart from './components/DoughnutChart.vue'
import PiewithScrollableLegend from './components/PiewithScrollableLegend.vue'

export default {
  name: 'app',
  components: {
    BasicLineChart,
    BasicAreaChart,
    SmoothedLineChart,
    Stackedareachart,
    WeatherChart,
    Stackedbarchart,
    DoughnutChart,
    PiewithScrollableLegend
  }
}
</script>

<style>

</style>
