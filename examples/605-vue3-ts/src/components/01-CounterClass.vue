<template>
  <pre>export default class Counter extends Vue</pre>
  <h2>Current counter: {{ counter.count }} </h2>
  <button @click="increment" class="btn btn-success">+1</button>
  <button @click="decrement" class="btn btn-warning">-1</button>
  <button @click="reset" class="btn btn-info">Reset</button>
</template>

<script lang="ts">

import {Vue} from 'vue-class-component';
import {Counter} from "@/model/counterModel";

// The Class model is used here. The exported component is
// extending from vue-class-component. It uses the default TS class notation
// regarding properties, methods and so on.
export default class CounterExtends extends Vue {

  counter: Counter = {count:0}
  increment() {
    this.counter.count++
  }

  decrement(){
    this.counter.count--;
  }

  reset(){
    this.counter.count = 0
  }
}
</script>

<style scoped>

</style>
