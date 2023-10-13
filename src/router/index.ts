import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // component: () => import('@/views/Home.vue')
    component: () => import('@/views/Ocr.vue')
  },
  {
    path: '/ocr',
    component: () => import('@/views/Ocr.vue')
  },
  // {
  //   path: '/guide/:locale',
  //   redirect: () => {
  //     window.location.href = 'https://github.com';
  //   }
  // },
  {
    // Not found
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
