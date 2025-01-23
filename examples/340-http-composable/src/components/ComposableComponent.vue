<template>
  <div>
    <h2>All countries via Composable</h2>
    <p>The countrylist in this component is retrieved via an independent 'service' in a composable function from the
      file <code>useCountries.js</code>. Visually the results are the same, but the <code>http</code>-code is much more
      reusable this way.
    </p>
    <p>See the code of <code>ComposableComponent.vue</code> and <code>@/composables/useCountries.js</code> for more details.</p>
    <ul class="list-group" v-if="countries && countries.length">
      <li class="list-group-item" v-for="country of countries" :key="country.name">
                <span class="float-left">
                    <img :src="country.flags.png" class="imgFlag" alt="Flag of this country">
                </span>
        <h4>{{ country.name.common }} </h4>
        <p>{{ country.capital ? country.capital[0] : '' }}, pop. {{ country.population }}</p>
      </li>
    </ul>

    <!-- Display error messages, if any -->
    <div v-if="errors && errors.length" class="alert alert-danger">
      <p v-for="error in errors" :key="error">{{ error.message }}</p>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {useCountries} from "@/composables/useCountries.js";

// Import and use the composable. Using ES6 destructuring
// here to assign the exported variables and functions to local variables.
const { countries, errors, fetchCountries } = useCountries();

// Fetch the countries when the component is mounted
onMounted(() => {
  fetchCountries();
});

</script>

<style scoped>
.imgFlag {
  max-width: 80px;
  border: 1px solid gray;
  border-radius: 8px;
  margin-right: 4px;
}
</style>
