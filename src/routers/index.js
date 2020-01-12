import Router from 'vue-router'
import Vue from 'vue'


import Index from "../components/pages/Index.vue";
import AllShows from "../components/pages/AllShows.vue";
import ErrorPage from "../components/pages/ErrorPage.vue";
import About from "../components/pages/About.vue";

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
            path: '/shows',
            name: 'shows',
            component: AllShows,
        },
        {
            path: '*',
            name: 'error',
            component: ErrorPage
        }]
})
