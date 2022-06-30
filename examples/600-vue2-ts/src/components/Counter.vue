<template>
  <div>
    <pre>export default defineComponent</pre>
    <h2>Current counter: {{ counter.count }} </h2>
    <button @click="increment" class="btn btn-success">+1</button>
    <button @click="decrement" class="btn btn-warning">-1</button>
    <button @click="reset" class="btn btn-info">Reset</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Counter} from "@/models/counterModel";

export default Vue.extend({
  name: "Counter",
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

})
</script>

<style scoped>

</style>
