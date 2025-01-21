<script setup>
import {useCounterStore} from "@/stores/counterStore.js";

// composable, benefitting from the Composition API
const counterStore = useCounterStore();

</script>

<template>
  <h1>Simple counter store example</h1>
  <!--  1. Retrieve the count property from the store-->
  <h2>Count: {{ counterStore.count }}</h2>
  
  <!--  2. Update the count property from the store-->
  <button
      class="btn btn-primary"
      @click="counterStore.increment()">Increment (+)
  </button>
  <button
      class="btn btn-secondary"
      @click="counterStore.decrement()">Decrement (-)
  </button>
  <button
      class="btn btn-info"
      @click="counterStore.reset()">Reset (0)
  </button>
</template>

