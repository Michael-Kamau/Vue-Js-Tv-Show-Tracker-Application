import Vue from 'vue'
import App from "./App.vue";
import store from "./store";
import router from "./routers"
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import './sass/styles.scss'

// Import the styles directly. (Or you could add them via script tags.)
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
