<template>
  <div>
    <h2>Showing Country Details...</h2>
    <h3>Country id : {{ id }}</h3>
    <h3>country name: {{ name }}</h3>
    <div v-if="country">
      <h2>{{ country.name }}</h2>
      <ul class="list-group">
        <li class="list-group-item">{{ country.id }}</li>
        <li class="list-group-item">{{ country.name }}</li>
        <li class="list-group-item">{{ country.capital }}</li>
        <li class="list-group-item">
          <img :src="imgUrl"
               :alt="country.img"
               class="img-fluid">
        </li>
        <li class="list-group-item">{{ country.details }}</li>
        <li class="list-group-item" v-if="isExpensive">
          <span class="badge bg-danger badge-pill">Expensive!</span>
        </li>
        <li class="list-group-item" v-if="isOnSale">
          <span class="badge bg-warning badge-pill">On Sale!</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import {computed } from "vue";
import {useRoute, useRouter} from "vue-router";
import countryData from "@/data/CountryData.js";

// using the current URL with useRoute() composable and extracting the parameters.
const route = useRoute();
const router = useRouter()

const id = parseInt(route.params.id, 10); // convert string from URL to number
const name = route.params.name;

// get correct country, based on route parameters
const country = countryData.countries.find((country) => country.id === id);

// Computed properties.
// Automatically calculate if a destination is expensive
const isExpensive = computed(() => {
  return country.cost > 4000;
});

// Automatically calculate if a destination is on Sale
const isOnSale = computed(() => {
  return country.cost < 1000;
});

// A computed property that returns the URL to the image for currentCountry.
const imgUrl = computed(() => {
  return new URL(`/src/assets/countries/${country.img}`, import.meta.url).href;
})
</script>
