import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import {createRouter,createWebHistory} from "vue-router";


const routes = [
  { path: '/', component: Home },
  {path:'/admin', component: Admin}
]


export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})