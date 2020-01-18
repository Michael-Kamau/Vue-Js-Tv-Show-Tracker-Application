<template>
    
</template>

<script>
    export default {
        name: "Logout.vue",
        created() {
            this.$store.dispatch('destroyToken')
                .then(response =>{
                    this.$router.push('/admin')
                })
        }

    }
</script>

<style scoped>

</style>
