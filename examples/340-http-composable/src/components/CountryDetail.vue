<template>
  <div>
    <h3>Country id : {{ id }}</h3>
    <div v-if="country">
      <h2>{{ country.name }}</h2>
      <ul class="list-group">
        <li class="list-group-item">{{ country.id }}</li>
        <li class="list-group-item">{{ country.name }}</li>
        <li class="list-group-item">{{ country.capital }}</li>
        <li class="list-group-item">
          <img :src="imgUrl"
               :alt="country.value?.img || 'Image of ' + country.name"
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
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";
import countryData from "@/data/CountryData.js";

// using the current URL with useRoute() composable and extracting the parameters.
const route = useRoute();

const id = ref(parseInt(route.params.id, 10)); // convert string from URL to number

// Initial country, based on route parameters
const country = ref(countryData.countries.find((country) => country.id === id));

// Update country once the url/route changes
watch(
    () => route.params.id,
    (newId) =>{
      console.log('load newId:: ', newId);
      id.value = +newId; // shortcut for parseInt(newId, 10);
      country.value = countryData.countries.find((country) => country.id === id.value);
    }
)

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
// Country is now inside a ref(), we therefore need to get country.value.img.
// A fallback empty string is provided if the image is not found.
const imgUrl = computed(() => {
  // check if country exists and return the 'img' property from the 'ref()', otherwise
  // return an empty string
  return country.value
    ? new URL(`/src/assets/countries/${country.value.img}`, import.meta.url).href
    : '';

})
</script>
