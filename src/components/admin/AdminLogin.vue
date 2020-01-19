<template>
    <div class="login">
        <h1>Admin login</h1>
        <form action="#" @submit.prevent="login">
            <div class="grid-x grid-padding-x">
                <div class=" login medium-6 small-12">
                    <div class="medium-12 cell">
                        <label>Username
                            <input type="text" placeholder="username" v-model="form.username">
                        </label>
                    </div>
                    <div class="medium-12 cell">
                        <label>Password
                            <input type="text" placeholder="password" v-model="form.password">
                        </label>

                    </div>
                    <div class="medium-12 cell">
                        <button type="submit" class="success button" @click:login>Login</button>
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
                form: {},
                username:'',
                password:'',
            }
        },
        methods:{
            login(){
                this.$store.dispatch('retrieveToken',this.form)
                .then(response =>{
                    this.$router.push('addShow')
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        margin: auto;
        background: #0a0a0a;
        min-height: 500px;
        padding :100px 0px 0px 0px;
        text-align: center;
        h1{
            color: white;
        }

    }

</style>
