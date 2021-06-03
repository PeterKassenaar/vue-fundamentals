<template>
  <pre>export default defineComponent</pre>
  <h2>Current counter: {{ counter.count }} </h2>
  <button @click="increment" class="btn btn-success">+1</button>
  <button @click="decrement" class="btn btn-warning">-1</button>
  <button @click="reset" class="btn btn-info">Reset</button>
</template>

<script lang="ts">


import {Counter} from "@/model/counterModel";
import {defineComponent} from "vue";

// The Options API is used here. The component is NOT a class, but
// wrapped in defineComponent from Vue core.
// More info: https://v3.vuejs.org/guide/typescript-support.html#defining-vue-components
export default defineComponent({

  data() {
    return {
      counter: {count: 0} as Counter
    }
  },
  methods: {
    increment() {
      this.counter.count++
    },

    decrement() {
      this.counter.count--;
    },

    reset() {
      this.counter.count = 0
    }
  }
});
</script>
