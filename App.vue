<template>
    <div class="app">
        <ul>
            <li> <a><router-link to="/">Go to Index</router-link></a></li>
            <li><a><router-link to="/about">Go to About</router-link></a></li>
            <li><a><router-link to="/products">Error page</router-link></a></li>
            <li><a><router-link to="/products">Error pagnew</router-link></a></li>
            <li class="test"><a><router-link to="/products">Error pagnew</router-link></a></li>
        </ul>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        name: "App",
        components:{
        }
    }
</script>

<style scoped>
    .test{
        color: red;
    }
</style>
