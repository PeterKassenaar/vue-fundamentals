<template>
  <div class="container">
    <CounterStandard/>
    <hr>
    <CounterComposition/>
  </div>
</template>

<script>

import CounterStandard from "@/components/CounterStandard";
import CounterComposition from "@/components/CounterComposition";

export default {
  name: 'App',
  components: {
    CounterComposition,
    CounterStandard
  }
}
</script>
