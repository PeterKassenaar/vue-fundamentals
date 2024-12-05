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
      <h2>Countries cheaper than</h2>
      <label>
        <select class="form-control-lg"
                v-model="selectedCost"
                @change="filterCountries"
        >
          <option v-for="(cost, index) in costs"
                  :key="index"
                  :value="cost">
            {{ cost }}
          </option>
        </select>
      </label>
      <ul class="list-group">
        <li v-for="(country, index) in filteredCountries"
            :key="index"
            class="list-group-item">
          {{ country.name }} (EUR: {{ country.cost }})
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
const costs = ref([1000, 2000, 3000, 4000, 5000, 6000]);
const selectedCost = ref(1000);
const filteredCountries = ref([])

// Method to calculate a new array, holding the correct countries.
const filterCountries = () => {
  filteredCountries.value = data.countries.filter(country => country.cost < selectedCost.value);
}

// Workshop: rewrite the function above to a computed value!

</script>
