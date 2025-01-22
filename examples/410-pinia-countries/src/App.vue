<script setup>
import {useCounterStore} from "@/stores/counterStore.js";
import CounterValue from "@/components/CounterValue.vue";
import CountryList from "@/components/CountryList.vue";

const counterStore = useCounterStore();

</script>

<template>
  <div class="container">
    <CountryList/>
  </div>

</template>

