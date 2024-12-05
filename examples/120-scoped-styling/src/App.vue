<script setup>
import ComponentOne from "@/components/ComponentOne.vue";
import ComponentTwo from "@/components/ComponentTwo.vue";
import ComponentThree from "@/components/ComponentThree.vue";
</script>

<template>
  <div id="app" class="container">
    <h1>Three components. Same class name, different styling.</h1>
    <p>This is because every component contains <code>scoped</code> styles.</p>
    <hr>
    <ComponentOne/>
    <ComponentTwo/>
    <ComponentThree/>
  </div>
</template>
