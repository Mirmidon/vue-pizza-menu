import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PizzaSize from '../views/PizzaSize.vue'
import PizzaToppings from '../views/PizzaToppings.vue'
import CustomerDetails from '../views/CustomerDetails.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pizza-size',
    name: 'PizzaSize',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: PizzaSize
  },
  {
    path: '/pizza-toppings',
    name: 'PizzaToppings',
    component: PizzaToppings
  },
  {
    path: '/customer-details',
    name: 'CustomerDetails',
    component: CustomerDetails
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
