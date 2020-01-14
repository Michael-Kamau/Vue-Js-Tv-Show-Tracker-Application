<template>
    <div class="addShow">
        <p class="header">Add New Show</p>
        <div class="myForm">
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
                    <input type="button" value="Add Show" @click="postShow">
                </div>
            </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "AddShow.vue",
        data(){
            return{
                form:{},
            }
        },
        methods:{
            postShow(){
                this.$store.dispatch('postShow', this.form);
                this.form={}
            },
        }
    }
</script>

<style scoped>
    .myForm{
        width:40%;
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
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
    }

    input[type=button]:hover {
        background-color: #45a049;
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


    .main_container{
        display: flex;
    }

</style>
