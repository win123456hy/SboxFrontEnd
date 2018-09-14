import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewAbout from './components/viewAbout.vue'
import ViewIndex from './components/viewIndex.vue'
import ViewNotification from './components/viewNotification.vue'
import ViewNuxtConfig from './components/viewNuxtConfig.vue'
import ViewPackageJson from './components/viewPackageJson.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/pages/about.vue', component: ViewAbout },
  { path: '/pages/index.vue', component: ViewIndex },
  { path: '/plugins/vue-notification.js', component: ViewNotification },
  { path: '/nuxt.config.js', component: ViewNuxtConfig },
  { path: '/package.json', component: ViewPackageJson }
/*   { path: '/', redirect: '/dashboard' },
  { path: '*', redirect: '/' } */
]

let router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;