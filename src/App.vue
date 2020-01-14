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

<style >

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
        border-right:1px solid #bbb;
    }

    li:last-child {
        border-right: none;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active) {
        background-color: #111;
    }

    .active {
        background-color: #4CAF50;
    }

    .header {
        padding: 60px;
        text-align: center;
        background: #1abc9c;
        color: white;
        font-size: 30px;
    }

</style>
