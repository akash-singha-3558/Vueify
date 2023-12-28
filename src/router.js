import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import ProductDetails from "./views/ProductDetails.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/productDetails/:id", component: ProductDetails },
];

export const router = createRouter({
 
  history: createWebHistory(),
  routes,
});
