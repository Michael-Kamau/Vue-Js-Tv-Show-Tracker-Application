<template>
    <div class="subscriber-container text-left">
        <h4>Email Address</h4>
        <h6>User id</h6>
        <h6>Verification String</h6>

    </div>
    
</template>

<script>
    export default {
        name: "Users.vue",
        props:['user']
    }
</script>

<style scoped lang="scss">
    .subscriber-container{
        border-bottom: 1px solid red;
    }

</style>
