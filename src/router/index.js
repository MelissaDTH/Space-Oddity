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
    component: () => import('../views/Planets')
  },
  {
    path: '/world-map',
    component: () => import('../views/Worldmap')
  },
  {
    path: '/planets/photo-of-the-day',
    component: () => import('../views/AstronomyPhoto')
  },
  {
    path: '/planets/mars-rover',
    component: () => import('../views/MarsRover')
  },
  {
    path: '/signup',
    component: Signup
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
