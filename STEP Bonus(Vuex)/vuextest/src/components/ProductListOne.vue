<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product,index) in saleProducts" :key="index">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(10)">Reduce price</button>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "product-list-one",
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["saleProducts"])
  },
  methods: {
    ...mapActions(["reducePrice"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
span {
  font-size: 30px;
  width: 400px;
  height: 50px;
  display: inline-block;
  text-align: center;
}
.name {
  background: skyblue;
}
.price {
  background: yellow;
}
</style>
