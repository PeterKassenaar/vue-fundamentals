<template>
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
  {{ id }}, {{ name }}
</template>


<script setup>
// We tell the component that it receives a 'country' property.
// Also, we assign it to the local variable 'country', via ES6-destructuring.
// The local country variable is reactive.
import {computed} from "vue";

const {country, name, id} = defineProps({
  country: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
    validator(value) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value);
    }
  }
})

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
