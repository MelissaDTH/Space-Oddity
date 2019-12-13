import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../components/Signup';

Vue.use(VueRouter);

const routes = [
  // routes are defined in order to switch the current view used in the <router-view> component.
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/planets',
    name: 'planets',
    component: () => import('../views/Planets')
  },
  {
    path: '/snake-game-welcome',
    name: 'GameWelcome',
    component: () => import('@/views/GameWelcome.vue'),
    // meta: { hideFooter: true }

  },
  {
    path: '/snake-game',
    name: 'game',
    component: () => import('../views/SnakeGame'),
    meta: { hideNavigation: true, hideFooter: true }
  },
  {
    path: '/planets/photo-of-the-day',
    name: 'photoDay',
    component: () => import('../views/AstronomyPhoto')
  },
  {
    path: '/planets/mars-rover',
    name: 'marsRover',
    component: () => import('../views/MarsRover'),
    meta: { hideFooter: true }
  },
  {
    path: '/signup',
    component: Signup
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
