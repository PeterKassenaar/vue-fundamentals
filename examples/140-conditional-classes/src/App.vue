<template>
  <div id="app" class="container">
    <h1>Conditionally applying classes</h1>
    <VacationList/>
    <!--    <ConditionalClass />-->
    <!--    <VacationListSelect/>-->
  </div>
</template>

<script>

import VacationList from "./components/VacationList";
// import ConditionalClass from "@/components/ConditionalClass";
// import VacationListSelect from "@/components/VacationListSelect";

export default {
  name      : 'app',
  components: {
    VacationList,
    // ConditionalClass,
    // VacationListSelect,
  }
}
</script>
