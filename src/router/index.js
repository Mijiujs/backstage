import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/UserLogin'
    },
    {
      path: '/UserLogin',
      name: "UserLogin",
      component: () => import(/* webpackChunkName: "UserLogin" */ '@/views/config/UserLogin'), // 路由懒加载
      meta: {
        title: '登录页'
      }
    },
    {
      path: '/UserList',
      name: "UserList",
      component: () => import(/* webpackChunkName: "UserList" */ '@/views/user/UserList'), // 路由懒加载
      meta: {
        title: '登录页'
      }
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;