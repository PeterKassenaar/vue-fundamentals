<template>
<div>
    <hr>
    <h3>Coming from the parent component ==></h3>
    <h3>{{ message }}</h3>
    <h3>This component is updated {{ counter }} time<span v-if="counter !== 1">s</span>
    </h3>
</div>
</template>

<script>
	export default {
		name: "TextboxChild",
        props: ['message'],
        data(){
			return{
				counter: 1
            }
        },
        // lifecycle hook, called before the message is updated from the parent.
        // Try what happens if you use the 'updated()' lifecycle hook here!
        beforeUpdate() {
			console.log('beforeupdate() called...' + this.message);
			this.counter++;
		}
	}
</script>

<style scoped>

</style>
