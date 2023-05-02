import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import OtisView from '../views/OtisView.vue';
import ContactView from '../views/ContactView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/otis',
    component: OtisView
  },
  {
    path: '/contact',
    component: ContactView
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView,
  }
];

const router = createRouter({
  history: createWebHistory(), // (import.meta.env.BASE_URL)
  routes,
  linkExactActiveClass: 'font-bold border-second-green border-b-3 text-second-green hover:bg-transparent hover:border-transparent',
});

export default router;
