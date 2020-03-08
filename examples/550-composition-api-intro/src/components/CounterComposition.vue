<template>
    <div>
        <h1>A Counter component - with composition API</h1>
        <p>The exact same user interface, template stays the same. Starting from {{ start }}</p>
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
	import {ref} from '@vue/composition-api';

	export default {
		name: "CounterComposition",
		props: {
			start: {
				type: String, // note: it should be 'string' here, not Number
				default: '0',
				required: false
			}
		},
		setup(props) {
			// initialize our counter, based on the existence of a prop 'start'
			const counter = props.start ? ref(props.start) : ref(0);

			const increment = () => {
				counter.value++;
			};

			const decrement = () => {
				counter.value--;
			};

			// return an object with the values you want to expose to the template
			return {
				counter,
				increment,
				decrement
			}
		}
	}
</script>
