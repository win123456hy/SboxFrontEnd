<template>
  <div id="app">
    <div class="all">
      <Menu @menu-change="getChange" :widthMn="widthMenu"/>
      <DisplayCode @view-change="getChangeView" :widthCd="widthCode" :isShow="isButtonVisibility"/>
    </div>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
import DisplayCode from "./components/displayCode.vue";

export default {
  name: "app",
  components: {
    Menu,
    DisplayCode
  },
  data() {
    return {
      widthMenu: "200px",
      widthCode: "1100px",
      isButtonVisibility: "hidden"
    };
  },

  methods: {
    getChange(wMenu, wCode, isShowView) {
      this.widthMenu = wMenu;
      this.widthCode = wCode;
      if (isShowView) this.isButtonVisibility = "visible";
    },
    getChangeView(widthCode, widthMenu) {
      this.widthCode = widthCode;
      this.widthMenu = widthMenu;
      this.isButtonVisibility = "hidden";
    }
  }
};
</script>

<style>
#app {
  font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
  color: #35495e;
}
.all {
  display: flex;
  height: 500px;
  width: 820px;
}

.top {
  display: flex;
  height: 50px;
  width: auto;
}
</style>
