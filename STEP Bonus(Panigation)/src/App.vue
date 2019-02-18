<template>
  <div id="app">
    <Panigation @on-change="getCurrentPage" :totalItem="totalItem" :sizePerPage="sizePerPage" :currentPage="currentPage"/>
  </div>
</template>

<script>
import Panigation from "./components/Panigation.vue";

export default {
  name: "app",
  components: {
    Panigation
  },
  data() {
    return {
      totalItem: 156,
    };
  },
  methods: {
    getCurrentPage(value) {
      let { totalItem, sizePerPage, currentPage } = value;
      this.totalItem = totalItem;
      this.sizePerPage = sizePerPage;
      this.currentPage = currentPage;
    }
  }
};
</script>

<style>
</style>
