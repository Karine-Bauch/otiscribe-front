import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import OtisView from '../views/OtisView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/otis',
      name: 'Otis en Action',
      component: OtisView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  linkExactActiveClass: 'font-bold border-second-green border-b-3 text-second-green hover:bg-transparent hover:border-transparent',
  
});

export default router;
