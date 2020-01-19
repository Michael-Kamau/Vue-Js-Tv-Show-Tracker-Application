import Router from 'vue-router'
import Vue from 'vue'


import Index from "../components/pages/Index.vue";
import ErrorPage from "../components/pages/ErrorPage.vue";
import About from "../components/pages/About.vue";
import AddShow from "../components/admin/AddShow.vue";
import AdminLogin from "../components/admin/AdminLogin.vue";
import Logout from "../components/admin/Logout.vue";
import Show from "../components/shows/Show.vue";

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'app',
            component: Index,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/show',
            name: 'show',
            component: Show,
        },
        {
            path: '/addShow',
            name: 'addShow',
            component: AddShow,
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminLogin,
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
        },
        {
            path: '*',
            name: 'error',
            component: ErrorPage
        }]
})
