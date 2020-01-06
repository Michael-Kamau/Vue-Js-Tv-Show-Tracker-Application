import './src/sass/styles.scss';
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Main from './components/Main.vue';
import About from "./components/About.vue";
import ErrorPage from "./components/ErrorPage.vue";

Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            component: Main,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            name: 'error',
            component: ErrorPage
        }]
})


new Vue({
    router,
    render: (createEl)=>createEl(App)
}).$mount('#app')

console.log('Hi from my javascript')
