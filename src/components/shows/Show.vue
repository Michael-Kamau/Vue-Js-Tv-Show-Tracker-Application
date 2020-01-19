<template>
    <div class="show">
        <!--        <h4>This is where I will show the video  </h4>-->
        <!--        {{show.name}}-->
        <!--        <slot></slot>-->
        <!--        <div>-->
        <!--            <iframe v-bind:src="url" frameborder="0"></iframe>-->
        <!--        </div>-->


        <iframe width="100%" height="250" :src="url" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>

    </div>

</template>

<script>
    export default {
        name: "shows.vue",
        props: ['url'],




    }
</script>

<style scoped>

</style>
