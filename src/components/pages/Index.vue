<template>
    <div class="index grid-x">
        <div class="header grid-x text-center">
            <h2 class="medium-12  cell ">Welcome to StarShows</h2>
            <h4 class="medium-12 ">Unlimited movies, TV shows, and more...</h4>
            <div class="medium-8 cell search">
                <label>
                    <input type="text" placeholder="Search Movie by Name, Genre, Cast or Year" v-on:keyup=""
                           v-model="search">
                </label>
            </div>


        </div>

        <div class="movies medium-12 small-12 large-12 grid-x">
            <div v-for="show in this.$store.getters.getAllShows" class="medium-4 small-12 cell"
                 v-if="show.name.toUpperCase().includes(search.toUpperCase()) || show.year.toString().includes(search.toUpperCase()) || show.genre.toUpperCase().includes(search.toUpperCase())">
                <!--            {{show.name}}-->
                <div>
                    <shows v-bind:show="show">Show</shows>
                </div>

            </div>
        </div>
        <hr>
        <div class="subscribe medium-12 small-12 large-12 ">

            <Subscribe></Subscribe>
        </div>


    </div>

</template>

<script>
    import AllShows from './AllShows.vue';
    import Shows from "../shows/Shows.vue";
    import Subscribe from "./Subscribe.vue";

    export default {
        name: "index.vue",
        components: {AllShows, Shows, Subscribe},
        data() {
            return {
                myShows: this.$store.getters.getAllShows,
                search: '',
                email: ''
            }
        },

        methods: {},


    }
</script>

<style scoped lang="scss">
    .header {
        .search {
            margin: auto;
        }
    }

    .movies {
        min-height: 90%;
        background: #0a0a0a;
    }

    /*.subscribe {*/
    /*    background: #0a0a0a;*/
    /*    min-height: 300px;*/
    /*    padding: 50px;*/

    /*}*/


</style>
