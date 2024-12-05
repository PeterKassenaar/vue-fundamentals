<template>
  <h1>{{ header }}</h1>
  <div class="row">
    <div class="col-6">
      <ul class="list-group">
        <li @click="selectCountry(country.id)"
            class="list-group-item"
            v-for="country in data.countries"
            :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{ country.name }}
                </span>
        </li>
      </ul>
    </div>
    <div class="col-6" v-if="currentCountry">
      <h2>Selected:</h2>
      <ul class="list-group">
        <li class="list-group-item">{{ currentCountry.id }}</li>
        <li class="list-group-item">{{ currentCountry.name }}</li>
        <li class="list-group-item">{{ currentCountry.capital }}</li>
        <li class="list-group-item">{{ currentCountry.details }}</li>
        <!--        Binding an image-->
        <li class="list-group-item">
          <img :src="imgUrl" :alt="'image of ' + currentCountry.name" class="img-fluid">
        </li>
        <li class="list-group-item" v-if="isExpensive">
          <span class="badge bg-danger rounded-pill">Expensive!</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
// import the country countryData
import countryData from '@/data/CountryData';

// create variables
const header = 'Pick your next vacation';
const data = countryData;
const currentCountryId = ref(0);

// Automatically calculate current country, based on Id
const currentCountry = computed(() => {
  return data.countries.find(c => c.id === currentCountryId.value)
})

// Automatically calculate if a destination is expensive
const isExpensive = computed(() => {
  return currentCountry.value.cost > 4000;
});

// A computed property that returns the URL to the image for currentCountry.
const imgUrl = computed(() => {
  return new URL(`/src/assets/countries/${currentCountry.value.img}`, import.meta.url).href;
})


// Update the Id when the user clicks a country
const selectCountry = id => {
  currentCountryId.value = id;
}

</script>
