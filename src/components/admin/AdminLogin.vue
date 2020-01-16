<template>
    <div class="login">
        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="medium-6 cell">
                        <label>Username
                            <input type="text" placeholder=".medium-6.cell" v-bind="form.username">
                        </label>
                    </div>
                    <div class="medium-6 cell">
                        <label>Password
                            <input type="text" placeholder=".medium-6.cell" v-bind="form.password">

                        </label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AdminLogin.vue",
        data(){
            return{
                form:{}
            }
        }
    }
</script>

<style scoped>

</style>
