import { createRouter, createWebHistory } from "vue-router";
import Auth from '../views/Auth.vue'
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/dash/Home.vue";
import Categories from "../views/dash/Categories.vue";
import Artists from "../views/dash/Artists.vue";

const routes = [
  { path: '/', name: 'home', component: Auth},
  {
     path: '/play', name: 'dashboard', component: Dashboard, redirect: {name:'dashboard-home'} , meta: { requiresAuth: true, },
     children: [
      { path: 'home', component: Home, name: 'dashboard-home'  },
      { path: 'artists', component: Artists, name: 'dashboard-artists' },
      { path: 'categories', component: Categories, name: 'dashboard-categories' },
     ]
},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router