<script setup>
import {useCounterStore} from "@/stores/counterStore.js";

const counterStore = useCounterStore();
</script>

<template>
  <p>Another component, also reading counter value from the store. We can NOT update the store from this component</p>
  <h2>Current counter value: {{ counterStore.count }}</h2>
</template>
