<template>
    <div class="login-container">
        <div class="header text-center">
            <h2>Admin Login</h2>
        </div>
        <div class="login">
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
                                <input type="password" placeholder="password" v-model="form.password">
                            </label>

                        </div>
                        <div class="medium-12 cell">
                            <button type="submit" class="success button" @click:login>Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

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
        padding : 40px 0px 0px 0px;
        text-align: center;
        h1{
            color: white;
        }

        button{
            background-image: linear-gradient(to right, #fda033,#b0487f);
            color:white;
            :hover{
                background-image: linear-gradient(to right,#b0487f, #fda033);
            }
        }


    }

</style>
