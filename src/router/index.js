import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {breadcrumb: 'Home'}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {breadcrumb: 'About'}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginRegisterView.vue'),
    meta: {breadcrumb: 'Login'}
  },
  {
    path: "/galery",
    name: "galery",
    component: () => import("../views/GalerijaView.vue"),
    meta: {breadcrumb: 'Galery'}
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
    meta: {breadcrumb: 'Cart'}
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/LoginRegisterView.vue'),
    meta: {breadcrumb: 'Register'}
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.vue'),
    meta: {breadcrumb: 'Menu'}
  },
  {
    path: '/menu/:food_type',
    name: 'menu_food_type',
    component: () => import('../views/FoodList.vue'),
    meta: {
      breadcrumb: 'Menu',
      breadcrumbDynamic: route => `Menu ${route.params.food_type}`
    } 
  },
  {
    path: '/menu/:food_type/:meal_id',
    name: 'menu-food-type-meal',
    component: () => import('../views/MealDetails.vue'),
    meta : {
      breadcrumb: 'menu',
      breadcrumbDynamic: route => `Menu ${route.params.food_type} ${route.params.meal_id}`
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/OrderView.vue'),
    meta: {breadcrumb: 'Orders'}
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
