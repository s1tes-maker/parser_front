import { createRouter, createWebHistory } from 'vue-router';
import demoComponents from './demo-components';
import { loadingBar } from 'heyui';
import utils from "@js/common/utils";

const routeConfig = {
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@components/login/index'),
      meta: {auth: false}
    },
    {
      path: '/',
      component: () => import('@components/app/app-frame'),
      children: [
        {
          path: '/start',
          name: 'Home',
          component: () => import('@components/home/start'),
          meta: { title: 'Главная', icon: 'icon-monitor', auth: true }
        },
        {
          path: '/system-error',
          name: 'SystemError',
          component: () => import('@components/error-pages/500'),
          meta: { title: '系统错误' }
        },
        {
          path: '/permission-error',
          name: 'PermissionError',
          component: () => import('@components/error-pages/403'),
          meta: { title: '权限错误' }
        },
        {
          path: '/notfound-error',
          name: 'NotfoundError',
          component: () => import('@components/error-pages/404'),
          meta: { title: '页面找不到' }
        },
        {
          path: '/authorization',
          name: 'Authorization',
          component: () => import('@components/management/authorization'),
          meta: { title: '权限管理' }
        },
        {
          path: '/users',
          name: 'Users',
          component: () => import('@components/management/users'),
          meta: { title: '用户管理' }
        },
        ...demoComponents,
        {
          path: '/:pathMatch(.*)*',
          name: 'CommonNotfoundError',
          component: () => import('@components/error-pages/404'),
          meta: { title: '页面找不到' }
        }
      ]
    }
  ]
};

const router = createRouter({
  history: createWebHistory(),
  routes: routeConfig.routes
});

let isFirstRouter = true;

router.beforeEach((to, from, next) => {

  /*if (to.meta && to.meta.auth === true) {
     if (typeof(utils.getLocal('token')) == "undefined" || utils.getLocal('token') == 'null') window.location = '/login';
  }*/
  loadingBar.start();

  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Админ';
  }
  isFirstRouter = false;
  next();
});

router.afterEach(() => {
  loadingBar.success();
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  let layoutContent = document.querySelector('.h-layout-content');
  if (layoutContent) {
    layoutContent.scrollTop = 0;
  }
  // baidu 统计，如果有自己的统计，请至index.html修改至自己的埋点
  if (window._hmt) {
    window._hmt.push(['_trackPageview', window.location.pathname]);
  }
});

export default router;
