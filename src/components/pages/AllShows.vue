<template>
    <div class="shows">
        <h1>Welcome to the shows page</h1>
        <shows/>
    </div>
    
</template>

<script>
    import Shows from "../shows/Shows.vue";
    export default {
        name: "AllShows.vue",
        components:[ Shows]
    }
</script>

<style scoped>

</style>
