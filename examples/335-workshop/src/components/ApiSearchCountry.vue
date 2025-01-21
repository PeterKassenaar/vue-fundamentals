<template>
  <div>
    <h2>Search for a country</h2>
    <p>
      <input type="text"
             @keyup.enter="searchCountry()"
             v-model="countryName" class="form-control-lg" placeholder="Country name...">
      <button @click="searchCountry()" class="btn btn-primary">Go!</button>
    </p>
    <hr>
    <ul class="list-group" v-if="countries && countries.length">
      <li class="list-group-item"
          v-for="country of countries"
          @click="getCountry(country.name.common)"
          :key="country.name.common">
                <span class="float-left">
                    <img :src="country.flags.png" class="imgFlag" alt="Flag of this country">
                </span>
        <h4>{{ country.name.common }} </h4>
        <p>{{ country.capital ? country.capital[0] : '' }}, pop. {{ country.population }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import {ref} from "vue";
import {useRouter} from "vue-router";

const url = 'https://restcountries.com/v3.1/name/';
const countries = ref([]);
const countryName = ref('')
const router = useRouter()

// Directly search for the country. We COULD also store this in a lifecycle hook.
// For this, see for instance ApiCountryDetail.vue.
const searchCountry = () => {
  axios.get(`${url}${countryName.value}`)
      .then(response => {
        countries.value = response.data;
      })
}

const getCountry = name => {
  router.push({
    name: 'api-detail',
    params: {
      name: name
    }
  })
}

</script>

<style scoped>
.imgFlag {
  max-width: 80px;
  border: 1px solid gray;
  border-radius: 8px;
  margin-right: 4px;
}
li{
  cursor: pointer;
}
</style>
