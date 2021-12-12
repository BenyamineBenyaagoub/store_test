import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Products from '../views/Products.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Products',
    component: Products,
  },
  {
    path: '/Suppliers',
    name: 'Suppliers',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Suppliers.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue'),

  },
  {
    path: '/ProductForm',
    name: 'productForm',
    component: () => import(/* webpackChunkName: "ProductForm" */ '../views/ProductForm.vue'),
  },
  {
    path: '/SupplierForm',
    name: 'supplierForm',
    component: () => import(/* webpackChunkName: "ProductForm" */ '../views/SupplierForm.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/store_test',
  routes,
});

export default router;
