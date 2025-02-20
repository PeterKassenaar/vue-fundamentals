<script setup>
import ChildThree from "@/components/ChildThree.vue";
</script>

<template>
  <div>
    <h2>This is the child 1 component</h2>
    <p>It does nothing. It is just a container for Child 3 component.</p>
    <p>
      <ChildThree/>
    </p>
  </div>
</template>

<style scoped>
div {
  border: 1px solid blue;
  padding: 10px;
}
</style>
