<template>
    <div class="subscribe medium-12 small-12 text-center">
        <h5>Ready to stay updated on new movies as they are uploaded to the site?
        </h5>
        <h6> Enter Your email address below and click the subscribe button.</h6>
        <form class=" grid-x">
            <label class="medium-10 small-10">
                <input type="text" placeholder="Enter Your Email Address" v-on:keyup=""
                       v-model="form.email">
            </label>
            <button type="button" class="primary button medium-2 small-2" v-on:click="subscribe">Subscribe <i class="fas fa-envelope"></i></button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Subscribe.vue",
        data(){
            return{
                form:{}
            }
        },
        methods:{

            subscribe(){
                this.$store.dispatch('subscribe',this.form)
            }

        }
    }
</script>

<style scoped lang="scss">

    .subscribe {
        background: #0a0a0a;
        min-height: 300px;
        padding: 100px 50px 100px 50px;
        color: #cacaca;
        line-height: 2.8;
        border-top: 1px solid #e1e1e1;
        h4{

        }

    }

</style>
