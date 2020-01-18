<template>
    <div class="shows" :style="cssVars">
<!--        <img :src="show.image" alt=""/>-->
        <h4>{{show.name}} </h4>
        <h5>Cast by: <small>{{show.cast}}</small></h5>
        <h6>{{show.genre}}</h6>
        <i>{{show.year}}</i>
        <button type="button" class="alert button" v-on:click="deleteShow">Delete</button>

    </div>
</template>

<script>
    export default {
        name: "Shows",
        props: ['show'],
        methods: {
            deleteShow() {
                this.$store.dispatch('deleteShow', this.show)
            },
        },
        computed: {
            cssVars() {
                return {
                    'background-image':  this.show.image,
                }
            }
        }

    }
</script>

<style scoped lang="scss">


    .shows {

        /*width: 150px;*/
        /*!*height: 100px;*!*/
        /*background-image: url(http://www.alexanderbar.me/images/Tinyworld-montage_09.jpg);*/
        /*background-size: cover;*/
        /*background-repeat: no-repeat;*/
        /*background-position: 50% 50%;*/


        min-height: 90%;
        width: 100%;
        padding:70px 20px 40px 20px;
        background:
                /* top, transparent red */
                linear-gradient(to right,
                        rgba(0, 0, 0, 0.95),
                        rgba(0, 0, 0, 0.5)
                ),
                    /* bottom, image */
                url(http://www.alexanderbar.me/images/Tinyworld-montage_09.jpg);
        background-size: cover;
        color: #f1f1f1;
        line-height: 0.8;

    }

    /*.shows {*/
    /*    border-bottom: 6px solid #45a049;*/
    /*    background-color: #e1e1e1;*/
    /*    padding: 0px;*/
    /*    margin: 0px 0px 10px 0px;*/
    /*    margin-bottom: 10px;*/
    /*    border-radius: 10px;*/
    /*    !*width: 480px;*!*/
    /*    img {*/
    /*        !*width:100%;*!*/
    /*        height: 200px;*/
    /*    }*/


    /*}*/

</style>
