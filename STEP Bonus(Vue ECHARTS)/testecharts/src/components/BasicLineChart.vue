<template>
  <div>
   <v-chart :options="option"/>
  </div>
</template>

<script>
export default {
  name: "BasicLineChart",
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [33, 3333, 4, 2234, 1, 1330, 1320],
            type: "line",
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
