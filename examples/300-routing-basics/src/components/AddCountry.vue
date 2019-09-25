<template>
    <div>
        <h1>Add a Country</h1>
        <h2>// TODO... </h2>
        <button @click="goHome()">Home</button>
    </div>
</template>

<script>
	export default {
		name: "AddCountry",
        methods:{
			goHome(){
				this.$router.push('/')
            }

        }
	}
</script>

<style scoped>

</style>
