<template>
    <div class="index grid-x">
        <div class="header grid-x">
            <h1 class="medium-12  cell ">Welcome to   index page</h1>
            <div class="medium-8 cell search">
                <label>
                    <input type="text" placeholder="Search Movie" v-on:keyup="" v-model="search">
                </label>
            </div>
        </div>

<!--        <div v-for="show in this.$store.getters.getAllShows" >-->
<!--            {{show.name}}-->
<!--        </div>-->
        <div v-for="show in this.$store.getters.getAllShows" class="medium-4 small-6 cell" v-if="show.name.toUpperCase().includes(search.toUpperCase()) || show.year.toString().includes(search.toUpperCase()) || show.genre.toUpperCase().includes(search.toUpperCase())">
            <!--            {{show.name}}-->
            <div >
                <shows v-bind:show="show" >Show</shows>
            </div>

        </div>
<!--        {{this.$store.getters.getAllShows[0].name}}-->

    </div>

</template>

<script>
    import AllShows from './AllShows.vue'
    import Shows from "../shows/Shows.vue";

    export default {
        name: "index.vue",
        components: {AllShows, Shows},
        data(){
            return{
                myShows:this.$store.getters.getAllShows,
                search:''
            }
        },

        methods:{


        },


    }
</script>

<style scoped lang="scss">
    .header{
        .search{
            margin:auto;
        }
    }

</style>
