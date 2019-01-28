<template>
    <div>
        <h2>Another counter - also reading from the store</h2>
        <p>This component only reads from the store. We cannot update the value</p>
        <h3>{{ counter }}</h3>
    </div>
</template>

<script>
    export default {
        name: "AnotherCounter",
        computed:{
            counter(){
                return this.$store.state.counter;
            }
        }
    }
</script>

<style scoped>

</style>
