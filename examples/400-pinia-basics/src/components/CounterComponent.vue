<script setup>
import {useCounterStore} from "@/stores/counterStore.js";

const counterStore = useCounterStore();

</script>

<template>
  <h1>Simple counter store example</h1>
  <h2>Count: {{ counterStore.count }}</h2>
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

<style scoped>

</style>
