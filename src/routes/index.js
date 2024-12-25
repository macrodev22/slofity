import { createRouter, createWebHistory } from "vue-router";
import Auth from '../views/Auth.vue'
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: '/', name: 'home', component: Auth},
  { path: '/play', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true, } }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router