<template>
    <div class="addShow grid-x">
        <div class="header">
            <h2>Admin Panel Page</h2>
        </div>

        <div class="mySection small-12 medium-6">
           <h4>Add New Show</h4>
            <p v-if="error">
                Please Ensure all the fields are filled correctly:
            </p>
            <form enctype="multipart/form-data">
                <div class="row">
                    <div class="col-25">
                        <label for="show_name">Show Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="show_name" name="show_name"  v-model="form.name">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="show_cast">Show Casts</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="show_cast" name="show_cast"  v-model="form.cast">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="show_genre">Show Genre</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="show_genre" name="show_genre"  v-model="form.genre">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="show_rating">Show Rating</label>
                    </div>
                    <div class="col-75">
                        <input type="number" id="show_rating" name="show_rating"  v-model="form.rating">
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label for="show_year">Show Year</label>
                    </div>
                    <div class="col-75">
                        <input type="number" id="show_year" name="show_year"  v-model="form.year">
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label for="show_image">Cover Image Link</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="show_image" name="show_image"  v-model="form.image">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="show_link">Videos Link</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="show_link" name="show_link"  v-model="form.video">
                    </div>
                </div>
                <div class="row">
                    <input type="button" value="Add Show" @click="postShow">
                </div>
            </form>


        </div>
        <div class="mySection small-12 medium-6 ">
            <h4>Users</h4>
            <div class="subscribers" >
                <Subscribers v-bind:subscriber="subscriber" v-for="subscriber in this.$store.getters.getSubscribers"></Subscribers>

            </div>

        </div>

    </div>
</template>

<script>
    import Subscribers from "../subscribers/Subscribers.vue";
    export default {
        name: "AddShow.vue",
        components:{Subscribers},
        data(){
            return{
                form:{},
                error:false
            }
        },
        methods:{
            postShow(){
                this.error=false
                if(this.form.name && this.form.cast && this.form.genre && this.form.rating && this.form.year && this.form.image && this.form.video){
                    this.$store.dispatch('postShow', this.form);
                    this.form={}
                }else{
                    this.error=true
                }

            },
        },
        created() {
            this.$store.dispatch('getAllSubscribers')
        },

        mounted() {
            if(!this.$store.getters.loggedIn){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped lang="scss">
    .addShow{
        background: #fbfbfb;
        text-align: center;
        color: #000000;
    }

    .mySection{
        padding: 15px;
        form{
            border: 1px solid #e0e0e0;
            padding: 10px;
            border-radius: 10px;
        }
        .subscribers{
            overflow:scroll;
            height:480px;
        }
    }





    * {
        box-sizing: border-box;
    }

    input[type=number],input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
    }

    label {
        padding: 12px 12px 12px 0;
        display: inline-block;
    }

    input[type=button] {
        /*background-color: #4CAF50;*/
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
        background-image: linear-gradient(to right, #fda033,#b0487f);
    }

    input[type=button]:hover {
        /*background-color: #45a049;*/
        background-image: linear-gradient(to right,#b0487f, #fda033);
    }

    .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }

    .col-25 {
        float: left;
        width: 25%;
        margin-top: 6px;
    }

    .col-75 {
        float: left;
        width: 75%;
        margin-top: 6px;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .col-25, .col-75, input[type=submit] {
            width: 100%;
            margin-top: 0;
        }
    }



</style>
