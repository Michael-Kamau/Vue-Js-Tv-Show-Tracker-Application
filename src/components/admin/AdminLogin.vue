<template>
    <div class="login">
        <form>
            <div class="grid-x grid-padding-x">
                <div class=" login medium-6 small-12">
                    <div class="medium-12 cell">
                        <label>Username
                            <input type="text" placeholder="username" v-bind="form.username">
                        </label>
                    </div>
                    <div class="medium-12 cell">
                        <label>Password
                            <input type="text" placeholder="password" v-bind="form.password">
                        </label>

                    </div>
                    <div class="medium-12 cell">
                        <button type="button" class="success button" @click:login>Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AdminLogin.vue",
        data() {
            return {
                form: {}
            }
        },
        methods:{
            login(){

            }
        }
    }
</script>

<style scoped>
    .login {
        margin: auto;

    }

</style>
