<script setup>
import {useCountryStore} from "@/stores/countryStore.js";
import {ref, watch} from "vue";


const countryStore = useCountryStore()
const filter = ref('');
const countries = ref([])

// Automatically sync `filter` with `filterLetter` in the store
watch(filter, (newFilterValue) => {
  countryStore.filterLetter = newFilterValue; // Reactive two-way binding
});

const fetchCountries = async () => {
  try {
    if (countryStore.countries.length === 0) {
      // Only fetch countries if they are not already in the store
      await countryStore.fetchCountries();
    }
    // assign to local variable so we can possibly update/hide them independent from the store
    countries.value = countryStore.countries;
  } catch (error) {
    console.error("An error occurred while fetching countries:", error);
  }
}

const clearCountries = () => {
  countries.value = [];
}

// reset the countries from the store, e.g. remove them from memory
const resetCountries = () => {
  countryStore.resetCountries();
  countries.value = [];
}
</script>

<template>
  <h2>List of Countries - in Pinia store:</h2>
  <button class="btn btn-success btn-lg"
          @click="fetchCountries()">
    Fetch countries
  </button>
  <button class="btn btn-danger btn-lg"
          @click="clearCountries()">
    Clear countries
  </button>
  <button class="btn btn-dark btn-lg" v-if="countryStore.countries.length > 0"
          @click="resetCountries()">
    Clear countries from store
  </button>
  <!--  Optional workshop - creating a filter-->
  <!--  <p>Filter countries:-->
  <!--    <input type="text"-->
  <!--           class="form-control-lg"-->
  <!--           placeholder="Type a letter to filter"-->
  <!--           v-model="filter"></input>-->
  <!--  </p>-->
  <div v-if="countryStore.loading">
    <img src="../assets/spinner.gif" alt="loading indicator....">
  </div>
  <ul class="list-group" v-if="filter === ''">
    <li class="list-group-item" v-for="country in countries" :key="country.name.common">
      <img :src="country.flags.png" style="max-width: 80px" alt="">
      {{ country.name.common }}
    </li>
  </ul>
  <ul class="list-group" v-if="filter !== ''">
    <li class="list-group-item" v-for="country in countryStore.filteredCountries" :key="country.name.common">
      <img :src="country.flags.png" style="max-width: 80px" alt="">
      {{ country.name.common }}
    </li>
  </ul>
</template>

