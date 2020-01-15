<template>
    <div class="shows">
        <img :src="show.image" alt=""/>
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
        border-bottom: 6px solid #45a049;
        background-color: #e1e1e1;
        padding: 20px;
        margin-bottom: 10px;
        border-radius: 10px;
        width: 480px;


    }

</style>
