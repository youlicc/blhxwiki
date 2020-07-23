import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShipBooks from '../views/childpages/query/ship/ShipBooks.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/query/ship/shipbook',
    name: 'shipbook',
    component: ShipBooks
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

export default router
