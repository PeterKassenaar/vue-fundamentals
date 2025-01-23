<script setup>
import {useRoute} from 'vue-router';
import {useCountryStore} from "@/stores/countryStore.js";
import {computed} from "vue";

const route = useRoute();
const countryStore = useCountryStore();

// Retrieve the country name from the route parameter
const countryName = route.params.name;

// Computed property to get details of the country from the store
const country = computed(() => countryStore.getCountryByName(countryName));
</script>

<template>
  <!--  Expand template if desired-->
  <div v-if="country">
    <h2>{{ country.name.common }}</h2>
    <img :src="country.flags.png" alt="Country flag" style="max-width: 200px;">
    <p><strong>Region:</strong> {{ country.region }}</p>
    <p><strong>Population:</strong> {{ country.population.toLocaleString() }}</p>
    <p><strong>Capital:</strong> {{ country.capital ? country.capital.join(', ') : 'N/A' }}</p>
  </div>
  <div v-else>
    <p>Country details not found.</p>
  </div>
</template>
