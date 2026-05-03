import { createRouter, createWebHistory } from "vue-router";

const routes = [
    //{ path: '/', name: 'Home', component: () => import('../App.vue') },
    { path: '/nev', name: 'nev', component: () => import('../components/nev.vue') }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router