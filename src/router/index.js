/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/Index';

Vue.use(Router);

/**
 * @for meta
 * @param title 标题
 * @param icon 图标
 * @param name 用来匹配路由名称
 */

const constantRouter = [
  // 首页
  {
    path: '/',
    redirect: '/',
    component: Layout,
    meta: { title: 'stable' },
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/Index'),
        meta: { title: 'Index' },
      },
    ]
  },
  // 404
  {
    path: '*',
    name: 'nopage',
    component: () => import(/* webpackChunkName: "nopage" */ '@/views/error-page/404.vue'),
    meta: { title: '404 - stable' },
  },
]

export default new Router({
  base: '/',
  mode: 'history',
  routes: constantRouter,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
