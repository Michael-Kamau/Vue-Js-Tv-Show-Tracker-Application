<template>
    <div class="app">
        <div class="navbar">
            <ul class="menu">
                <li class=""><a><router-link to="/">StarShows</router-link></a></li>
<!--                <li><a><router-link to="/about">About</router-link></a></li>-->
<!--                <li><a><router-link to="/show">Show</router-link></a></li>-->
                <li v-if="loggedIn"><a><router-link to="/addShow">Add Show</router-link></a></li>
                <li v-if="!loggedIn"><a><router-link to="/admin">Login</router-link></a></li>
                <li v-if="loggedIn"><a><router-link to="/logout">Logout</router-link></a></li>

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
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn
            }
        }
        ,
        mounted() {
            this.$store.dispatch('getShowsData')
        }
    }
</script>

<style lang="scss">





</style>
