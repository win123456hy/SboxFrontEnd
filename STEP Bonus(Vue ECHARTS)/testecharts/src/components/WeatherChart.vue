<template>
  <div>
   <v-chart @click="onClick" :options="option"/>
  </div>
</template>

<script>
var dataAxis = [
  "点",
  "击",
  "柱",
  "子",
  "或",
  "者",
  "两",
  "指",
  "在",
  "触",
  "屏",
  "上",
  "滑",
  "动",
  "能",
  "够",
  "自",
  "动",
  "缩",
  "放"
];
var data = [
  220,
  182,
  191,
  234,
  290,
  330,
  310,
  123,
  442,
  321,
  90,
  149,
  210,
  122,
  133,
  334,
  198,
  123,
  125,
  220
];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
export default {
  name: "WeatherChart",
  data() {
    return {
      ins: null,
      echarts: null,
      option: {
        title: {
          text: "特性示例：渐变色 阴影 点击缩放",
          subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            textStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#999"
            }
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              normal: { color: "rgba(0,0,0,0.05)" }
            },
            barGap: "-100%",
            barCategoryGap: "40%",
            data: dataShadow,
            animation: false
          },
          {
            type: "bar",
            data: data,
            color: "skyblue"
          }
        ]
      }
    };
  },
  methods: {
    onClick(instance, echarts) {
      this.ins = instance;
      this.ins.dispatchAction({
        type: "dataZoom",
        startValue: dataAxis[Math.max(echarts.dataIndex - 6 / 2, 0)],
        endValue:
          dataAxis[Math.min(echarts.dataIndex + 6 / 2, data.length - 1)]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
