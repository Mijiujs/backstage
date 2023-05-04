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
    // {
    //   path: '/UserList',
    //   name: "UserList",
    //   component: () => import(/* webpackChunkName: "UserList" */ '@/views/user/UserList'), // 路由懒加载
    //   meta: {
    //     title: '登录页'
    //   }
    // },

    {
      path:'/home',
      name:"home",
      component: () => import('../views/HomeView.vue'),
      children:[
        {
          path:'food',
          name:"food",
          component: () => import('../views/FoodDetail.vue')
        },

        {
          path:'userdata',
          name:"userdata",
          component: () => import('../views/UserDataCollect.vue')
        },
      ]
    },



    // {
    //   path: '/Test',
    //   name: "Test",
    //   component: () => import(/* webpackChunkName: "UserList" */ '@/views/user/Test'), // 路由懒加载
    //   meta: {
    //     title: '登录页'
    //   }
    // },
  ],
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title;
  next();
});


export default router;