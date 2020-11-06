<template>
  <div id="app" class="container">
    <VacationPicker/>
  </div>
</template>

<script>
import VacationPicker from "./components/VacationPicker";

export default {
  name: 'app',
  components: {
    VacationPicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
