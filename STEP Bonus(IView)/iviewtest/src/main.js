import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import IView from './iview.js'
import '../my-theme/index.less'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router, IView
}).$mount('#app')
