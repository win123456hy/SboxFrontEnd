import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import DashBoard from './components/DashBoard.vue'
import About from './components/About.vue'
import Register from './components/Register.vue'
import Term from './components/Term.vue'
import Table from './components/Table.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: DashBoard },
  { path: '/about', component: About },
  { path: '/register', component: Register },
  { path: '/term', component: Term },
  { path: '/table', component: Table }
]


const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;
