<script setup>
import {inject} from "vue";

const message = inject('messageProvider');
</script>

<template>
<div>
  <h2>This is the child 3 component</h2>
  <p>This component consumes the data from the MainComponent by using <code>inject</code>, 'skipping' one layer of components</p>
  <p>
    messageProvider: {{ message || 'undefined'}}
  </p>
</div>
</template>

<style scoped>
div {
  border: 1px solid aquamarine;
  padding: 10px;
}
</style>
