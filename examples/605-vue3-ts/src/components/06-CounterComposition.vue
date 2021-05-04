<template>
  <div>
    <h1>A Counter component - with Vue 3 composition API</h1>
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

<script lang="ts">
import {ref, defineComponent } from 'vue';
export default defineComponent({
  name: "06-CounterComposition",
  props:{
    start: {
      type: String, // note: it should be 'string' here, not Number
      default: '0',
      required: false
    }
  },
  setup(props){
    // initialize our counter, based on the existence of a prop 'start'
    const counter = props.start
        ? ref<number>(+props.start) // explicitly cast the value to a number, using Generics
        : ref(0); // type inference, if no 'start' property provide. No need for casting

    const increment = () => {
      counter.value++; // now works, because properly typed
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
})
</script>

<style scoped>

</style>
