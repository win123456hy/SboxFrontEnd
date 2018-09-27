<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="(product,index) in saleProducts" :key="index">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}}</span>
      </li>
    </ul>
      <button @click="reducePrice">Reduce price</button>
  </div>
</template>

<script>
export default {
  name: "product-list-two",
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    reducePrice() {
      this.$store.dispatch("reducePrice",2);
    }
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
