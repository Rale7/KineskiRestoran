import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginRegisterView.vue')
  },
  {
    path: "/galery",
    name: "galery",
    component: () => import("../views/GalerijaView.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue")
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/LoginRegisterView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/menu/:food_type',
    name: 'menu_food_type',
    component: () => import('../views/FoodList.vue')
  },
  {
    path: '/menu/:food_type/:meal_id',
    name: 'menu-food-type-meal',
    component: () => import('../views/MealDetails.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/OrderView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
