<template>
    <div class="index">
        <h1>Welcome to the index page</h1>
        <div v-for="show in this.$store.getters.getAllShows" >
            {{show.name}}
        </div>
<!--        {{this.$store.getters.getAllShows[0].name}}-->

    </div>

</template>

<script>
    export default {
        name: "index.vue",
    }
</script>

<style scoped>

</style>
