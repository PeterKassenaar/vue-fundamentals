<template>
    <div>
        <h1>{{ counter }}</h1>
        <div>
            <button @click="increment()" class="btn btn-success">Increment</button>
            <button @click="decrement()" class="btn btn-info">Decrement</button>
            <br>
            <button @click="reset()" class="btn btn-danger">Reset</button>
        </div>
    </div>
</template>

<script>
	export default {
		// CounterComponent.vue
		name: "Counter",
		methods: {
			increment() {
				this.$store.dispatch('counter/increment', 1)
			},
			decrement() {
				this.$store.dispatch('counter/decrement', 1)
			},
			reset(){
				this.$store.dispatch('counter/reset')
			}
		},
		computed:{
			counter(){
				return this.$store.state.counter.counter;
			}
		}
	}
</script>

<style scoped>

</style>
