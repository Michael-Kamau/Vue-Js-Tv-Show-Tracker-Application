<template>
    <div class="show">
        <h4>Show</h4>
        {{show.name}}
        <slot></slot>
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
