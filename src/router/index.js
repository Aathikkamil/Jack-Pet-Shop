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
 
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component:  () => import('../views/ContactView.vue')
  },
  {
    path: '/Product',
    name: 'Product',
    component:  () => import('../views/ProductView.vue')
  },
  
  
  {
    path: '/dogShop',
    name: 'DogShop',
    component:  () => import('../components/dogShop.vue')
  },
  {
    path: '/catShop',
    name: 'catShop',
    component:  () => import('../components/catShop.vue')
  },
  

  {
    path: '/SignIn',
    name: 'signIn',
    component:  () => import('../views/LoginView.vue')
  },
  {
    path: '/SignUp',
    name: 'signup',
    component:  () => import('../views/RegisterView.vue')
  },
 
  {
    path: '/OthersProduct',
    name: 'Thoers',
    component:  () => import('../components/OthersShop.vue')
    
  },
 

  {
    path: '/FeedView',
    name: 'feed',
    component:  () => import('../components/FeedView.vue')
  },
  {
    path: '/News',
    name: 'newsView',
    component:  () => import('../components/NewsView.vue')
  },
  {
    path: '/DonatePet',
    name: 'DonatePet',
    component:  () => import('../components/DonatePet.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
