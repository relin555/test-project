import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SetBurger from '../views/SetBurger.vue'
const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/setBurger',
      name: 'SetBurger',
      component: SetBurger
    }
  ]
} );

export default router