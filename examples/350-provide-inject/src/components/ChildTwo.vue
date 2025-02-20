<script setup>
import {inject} from "vue";

const message = inject('messageProvider');
</script>

<template>
<div>
  <h2>This is the child 2 component</h2>
  <p>
    It also consumes the data from the MainComponent. It is NOT a child of Child 1.
  </p>
  <p>
    It is a 'dumb' component, which does not have any logic.
  </p>
  <p>
    messageProvider says: {{ message || 'undefined'}}
  </p>
</div>
</template>

<style scoped>
div {
  border: 1px solid green;
  padding: 10px;
}
</style>
