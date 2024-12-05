<script setup>
// The Composition API has the <script setup> attribute and mainly uses
// reactivity functions to 'compose' the component together. They are often
// prefixed with 'use...' (like useFetch(), useLocalStorage(), etc).
// This way, we can compose components out of smaller functions which
// leads to better reusability of code.
//
// You will also often find imports of ref(), reactive() and more typical
// Composition API functions.
//
// For TypeScript, you will find <script setup lang="ts"> on top of the component
import {ref} from 'vue';

const count = ref(0)
const increment = () => {
  count.value++;
}
// or, in classical notation:
// function increment(){
//   count.value++;
// }
</script>

<template>
  <div>
    <h1>This is a component, using the <code>Composition API</code></h1>
    <p>Please look at the source code</p>
  </div>
</template>

<style scoped>

</style>
