import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



export const store = new Vuex.Store({
  state: {
    products: [
      {
        name: "Banana Skin",
        price: 20
      },
      {
        name: "Shiny Star",
        price: 40
      },
      {
        name: "Green Shells",
        price: 60
      },
      {
        name: "Red Shells",
        price: 80
      }
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(p => {
        return {
          name: "**" + p.name + "**",
          price: p.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations:{
    reducePrice:(state,payload)=>{
      state.products.forEach(element => {
        element.price-=payload;
      });
    }
  },
  actions:{
    reducePrice:(context,payload)=>{
      setInterval(function() {
        context.commit("reducePrice",payload);
      },1000);
    }
  }
});