<template>
    <div class="app">
        <div class="tabs">
            <ul>
                <li class="is-active"><a><router-link to="/">Home</router-link></a></li>
                <li><a><router-link to="/about">About</router-link></a></li>
                <li><a><router-link to="/shows">Shows</router-link></a></li>
                <li><a><router-link to="/addShow">Add Show</router-link></a></li>

            </ul>
        </div>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
    
</template>

<script>
    import Index from "./components/pages/Index.vue";

    export default {
        name: "App",
        components:{
            Index
        },
        mounted() {
            this.$store.dispatch('getShowsData')
        }
    }
</script>

<style scoped>

</style>
