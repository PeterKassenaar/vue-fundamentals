<template>
    <div>
        <h1>A Counter component - the standard way</h1>
        <p>A classical counter, starting from {{ start }}</p>
        <h2>{{ counter }}</h2>
        <button @click="increment"
                class="btn btn-primary">
            Increment
        </button>
        <button @click="decrement"
                class="btn btn-secondary">
            decrement
        </button>
    </div>
</template>

<script>
	export default {
		name: "CounterStandard",
		data() {
			return {
				counter: 0
			}
		},
		props: {
			start: {
				type: Number,
				default: 0,
				required: false
			}
		},
		created() {
			this.counter = this.start;
		},
		methods: {
			increment() {
				this.counter++;
			},
			decrement() {
				this.counter--;
			}
		}
	}
</script>

<style scoped>

</style>
