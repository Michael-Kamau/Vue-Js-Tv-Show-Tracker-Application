<template>
    <div class="show">
        <h4>Show</h4>
        {{show.name}}
    </div>
    
</template>

<script>
    export default {
        name: "shows.vue",
        props:['show']
    }
</script>

<style scoped>

</style>
