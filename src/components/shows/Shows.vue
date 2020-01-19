<template>

    <div class="shows-container" :style="{ backgroundImage: `url('${this.show.image}')` }">
        <div class="shows grid-y"  >
            <!--        <img :src="show.image" alt=""/>-->
            <h4>Movie:&nbsp;{{show.name}} </h4>
            <h6>Cast by:&nbsp;<small>{{show.cast}}</small></h6>
            <h6>Genre:&nbsp; {{show.genre}}</h6>
            <h6>Year:&nbsp;{{show.year}}</h6>
            <h6>Rating:&nbsp;{{show.rating}}<i class="fas fa-star"></i></h6>
            <button type="button" class=" button" v-bind:class="{ success: watch }" v-on:click="toggleWatch">Watch Movie &nbsp;<i
                    class="fas fa-film"></i></button>
            <button type="button" class="alert button" v-on:click="deleteShow" v-if="this.$store.getters.loggedIn">Delete <i
                    class="fas fa-trash-alt"></i></button>
            <div v-if="watch">
                <Show v-bind:url="videoUrl"></Show>

            </div>
        </div>

    </div>


<!--    :style="{ backgroundImage: `url('${this.show.image}')` }"-->
</template>

<script>
    import Show from "./Show.vue";

    export default {
        name: "Shows",
        props: ['show'],
        components: {Show},
        data() {
            return {
                watch: false,
            }
        },
        methods: {
            deleteShow() {

                if(confirm("Do you really want to delete "+this.show.name+" ?")){

                    this.$store.dispatch('deleteShow', this.show)
                }

            },
            toggleWatch() {
                this.watch = !this.watch
            }

        },
        computed: {
            cssVars() {
                return {
                    // 'background-image': this.show.image,
                    bgImage: this.show.image
                }
            },

            videoUrl() {
                let url = this.show.video.replace("watch?v=", "embed/")
                return url+'?autoplay=1' //to mute, also append '&mute=1'


            }

        }

    }
</script>

<style scoped lang="scss">
    .shows-container{
        background: black;
        color: #f1f1f1;
        line-height: 1.8;
        border-radius: 15px;
        margin: 2px;
        background-size: cover;
    }


    .shows {

        /*width: 150px;*/
        /*!*height: 100px;*!*/
        /*background-image: url(http://www.alexanderbar.me/images/Tinyworld-montage_09.jpg);*/
        /*background-size: cover;*/
        /*background-repeat: no-repeat;*/
        /*background-position: 50% 50%;*/


        min-height: 90%;
        width: 100%;
        padding: 70px 20px 10px 20px;
        background: /* top, transparent red */
                linear-gradient(to right,
                        rgba(0, 0, 0, 0.95),
                        rgba(0, 0, 0, 0.5)
                );
                    /* bottom, image */
               /*url(http://www.alexanderbar.me/images/Tinyworld-montage_09.jpg);*/



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
