<template>
  <div>
    <div class="alert alert-info" style="cursor: pointer">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
    <!--Injected content here, using a named Transition (see classes below)-->
    <Transition name="fade">
      <slot v-if="open"></slot>
    </Transition>
  </div>
</template>

<script setup>
import {ref} from "vue";

const open = ref(false);
</script>

<style scoped>
/* More info on the Transition
  component: https://vuejs.org/guide/built-ins/transition.html#the-transition-component
 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
