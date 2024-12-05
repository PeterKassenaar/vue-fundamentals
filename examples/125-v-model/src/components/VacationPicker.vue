<template>
  <h1>{{ header }}</h1>
  <div class="row">
    <div class="col-6">
      <ul class="list-group">
        <li
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
    <div class="col-6">
      <!--  *********************-->
      <!--  Creating a list of new countries via v-model-->
      <!--  *********************-->
      <h2><label for="newCountry">New Countries</label></h2>
      <input type="text"
             id="newCountry"
             class="form-control-lg"
             v-model="newCountry"
             placeholder="New Country"
             @keyup.enter="addCountry()"
      >
      <button @click="addCountry()" class="btn btn-info">
        Add Country
      </button>
      <ul class="list-group">
        <li class="list-group-item"
            v-for="(country, index) in newCountries" :key="index">
          {{ country }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
// import the country countryData
import countryData from '@/data/CountryData';

// create variables
const header = 'Pick your next vacation';
const data = countryData;

// Array, holding the newly added countries
const newCountries = ref([])
const newCountry = ref('');

// Adding a new country to the array
const addCountry = () => {
  newCountries.value.push(newCountry.value);
}

</script>
