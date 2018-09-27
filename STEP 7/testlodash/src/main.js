import Vue from 'vue'
import App from './App.vue'
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false

const options = { name: 'lodash' } // customize the way you want to call it

Vue.use(VueLodash, options) // options is optional

new Vue({
  render: h => h(App)
}).$mount('#app')
