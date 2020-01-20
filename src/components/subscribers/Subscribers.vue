<template>
    <div class="subscriber-container text-left grid-y">
        <h5>StarShows Subscriber</h5>
        <h6>Subscriber id: {{subscriber.id}}</h6>
        <div class="grid-x">
            <div class="small-12 large-6">
                <h6 >Subscriber Email <i class="fas fa-envelope"></i>: {{subscriber.email}} </h6>
            </div>
            <div class="small-12 large-6">
                <button type="button" class="alert button" @click="adminUnsubscribe">Unsubscribe <i class="fas fa-user-times"></i></button>
            </div>

        </div>



    </div>
    
</template>

<script>
    export default {
        name: "subscriber",
        props:['subscriber'],
        methods:{
            adminUnsubscribe(){
                this.$store.dispatch('adminUnsubscribe',this.subscriber)
            }
        }
    }
</script>

<style scoped lang="scss">
    .subscriber-container{
        border-bottom: 1px solid #69ff52;
        margin-bottom: 20px;
    }

</style>
