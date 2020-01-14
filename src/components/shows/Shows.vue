<template>
    <div class="shows">
        <h4>{{show.name}} </h4>
        <h5>Cast by: <small>{{show.cast}}</small></h5>
        <h6>{{show.genre}}</h6>
        <i>{{show.year}}</i>

    </div>
</template>

<script>
    export default {
        name: "Shows",
        props:['show']
    }
</script>

<style scoped>
    .shows{
        background: #f0ebf0;
        border-radius: 10px;
        padding:20px;
        margin:10px;
        width: 480px;
    }

</style>
