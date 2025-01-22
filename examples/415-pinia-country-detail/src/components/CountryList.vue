<script setup>
import {useCountryStore} from "@/stores/countryStore.js";
import {onMounted, ref} from "vue";

const countryStore = useCountryStore()
const countries = ref([])

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

// clear countrylist. They remain available in the store
const clearCountries = () => {
  countries.value = [];
}

// reset the countries from the store, e.g. remove them from memory
const resetCountries = () => {
  countryStore.resetCountries();
  countries.value = [];
}

// onMounted, check if already countries are available in the store
// (this is useful when returning from a detail page)
onMounted(() => {
  countries.value = countryStore.countries
})
</script>

<template>
  <h2>List of Countries - click for details:</h2>
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
  <div v-if="countryStore.loading">
    <img src="../assets/spinner.gif" alt="loading indicator....">
  </div>
  <ul class="list-group" v-if="countryStore.countries.length > 0">
    <li class="list-group-item" v-for="country in countries" :key="country.name.common">
      <router-link :to="{
        name: 'CountryDetail',
        params: { name: country.name.common }
      }" class="countryLink">
        <img :src="country.flags.png" style="max-width: 80px" alt="">
        &nbsp;{{ country.name.common }}
      </router-link>

    </li>
  </ul>
</template>

<style scoped>
.countryLink {
  text-decoration: none;
  font-size: x-large;
  color: black;
  padding-left: 10px
}
</style>
