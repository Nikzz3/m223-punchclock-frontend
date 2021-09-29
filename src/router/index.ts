import Vue from 'vue';
import VueRouter from 'vue-router';
import Punchclock from '../components/Punchclock/Punchclock.vue';
import Registration from '../components/Registration/Registration.vue';
import Login from '../components/Login/Login.vue';
import About from '../views/About.vue';
import Admin from '../components/Admin/Admin.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Punchclock
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/login' && to.path !== '/registration') {
    try {
      const token = localStorage.getItem('auth_token');
      if (token) {
        next();
      } else {
        next('/login');
      }
    } catch (error) {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
