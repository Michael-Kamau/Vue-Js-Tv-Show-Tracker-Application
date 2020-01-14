<template>
    <div class="addShow">
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

</style>
