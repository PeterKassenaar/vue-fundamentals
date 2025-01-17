<script setup>
import CounterComponent from "@/components/CounterComponent.vue";
import CounterValue from "@/components/CounterValue.vue";
</script>

<template>
  <div class="container">
    <CounterComponent/>
    <hr>
    <!--    Another component, also reading counter value from the store. -->
    <!--    This is intentionally a read-only component.-->
    <!--    <CounterValue />-->
  </div>
</template>

