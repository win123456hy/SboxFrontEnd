<template>
  <div>
    <p>Thời gian 1:  {{timeOne.format("D M YYYY HH:ss:mm")}}</p>
    <p>Thời gian 2:  {{timeTwo.format("D M YYYY HH:ss:mm")}}</p>
    <span>Khoảng thời gian giữa 2 thời điểm là:</span>
    {{year}} năm
    {{month}} tháng
    {{day}} ngày
    {{hour}} giờ
    {{minutes}} phút
    {{second}} giây
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "HelloWorld",
  data() {
    return {
      timeOne: this.$moment("2016-9-02"),
      timeTwo: this.$moment("2016-10-08")
    };
  },
  computed: {
    timeDifferent() {
      return this.timeTwo.diff(this.timeOne);
    },
    hour() {
      return this.$moment.duration(this.timeDifferent).hours();
    },
    minutes() {
      return this.$moment.duration(this.timeDifferent).minutes();
    },
    second() {
      return this.$moment.duration(this.timeDifferent).seconds();
    },
    day() {
      return this.$moment.duration(this.timeDifferent).days();
    },
    month() {
      return this.$moment.duration(this.timeDifferent).months();
    },
    year() {
      return this.$moment.duration(this.timeDifferent).years();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
