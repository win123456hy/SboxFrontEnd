<template>
  <div>
    <div class="left" :style="{width:widthMn}">
      <div class="top">
        <p>EXAMPLE FILES</p>
        <button @click="minimizeMenu"></button>
      </div>
      <div class="bottom">
        <ItemParent nameMenu="PAGES" :items="pages"/>
        <ItemParent nameMenu="PLUGINS" :items="plugins"/>
        <ItemChild  :item="{name:'nuxt.config.js',link:'/nuxt.config.js',tabIndex:4}"/>
        <ItemChild  :item="{name:'package.json',link:'/package.json',tabIndex:5}"/>
      </div>
    </div>
  </div>
</template>

<script>
import ItemParent from "./itemParent.vue";
import ItemChild from "./itemChild.vue";

export default {
  name: "Menu",
  props: ["widthMn"],
  components: {
    ItemParent,
    ItemChild
  },
  data() {
    return {
      pages: [
        {
          name: "about.vue",
          link: "/pages/about.vue",
          tabIndex: 1
        },
        {
          name: "index.vue",
          link: "/pages/index.vue",
          tabIndex: 2
        }
      ],
      plugins: [
        {
          name: "vue-notifications.js",
          link: "/plugins/vue-notification.js",
          tabIndex: 3
        }
      ]
    };
  },
  methods: {
    minimizeMenu() {
      this.widthMn = "0px";
      this.$emit("menu-change", this.widthMn, "1300px", true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  background: green;
  width: 200px;
  transition: width 0.3s;
}
.left > .top {
  background: #dbdfe1;
}
.left > .bottom {
  background: #eef0f1;
  height: 500px;
}
p {
  font-size: 15px;
  letter-spacing: 1px;
  margin: 0px;
  margin: auto 20px;
  height: 24px;
}

button {
  margin-left: 10px;
  background: url("../assets/close-button.png") no-repeat;
  background-size: 12px;
  width: 17px;
  height: 17px;
  border: none;
}
button:hover {
  cursor: pointer;
}
button:focus {
  outline: none;
}
.top {
  display: flex;
  align-items: center;
}
</style>
