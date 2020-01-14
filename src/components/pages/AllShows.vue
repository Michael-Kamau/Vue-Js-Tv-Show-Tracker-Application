<template>
    <div class="shows">
        <h1 class="header">Welcome to the shows page</h1>

        <div v-for="show in this.$store.getters.getAllShows">
            <!--            {{show.name}}-->
            <shows v-bind:show="show">Show</shows>
        </div>

    </div>

</template>

<script>
    import Shows from "../shows/Shows.vue";

    export default {
        name: "AllShows.vue",
        components: {Shows},
    }
</script>

<style scoped lang="scss">

    .shows {



    }

</style>
