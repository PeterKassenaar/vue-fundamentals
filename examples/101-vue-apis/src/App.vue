<script setup>
import CompositionAPI from "@/components/CompositionAPI.vue";
import OptionsAPI from "@/components/OptionsAPI.vue";
</script>

<template>
  <!--  Here, we use different styles of components. They can be mixed and matched inside the same project-->
  <OptionsAPI/>
  <hr>
  <!--  Starting from Vue 3, the Composition API is recommended, though the Options API still works.-->
  <CompositionAPI/>
  <hr>
  <p>
    Please see the source code of <i>the components</i>, NOT the source code of the rendered page :-).
  </p>
</template>
