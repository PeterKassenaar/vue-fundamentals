<template>
  <h1>{{ header }}</h1>
  <div class="row">
    <div class="col-6">
      <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(country, index) in data.countries"
            :class="{'lightblue' : country.cost < selectedCost}"
            :key="country.id">
          {{ country.name }}
        </li>
      </ul>
      <h2>Destinations cheaper than:</h2>
        <!--Using v-model here for two-way binding-->
        <label>
          <select class="form-control-lg" v-model="selectedCost">
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
          </select>
        </label>
    </div>
    <div class="col-6">
      <!-- Empty -->
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
// import the country countryData
import countryData from '@/data/CountryData';

// create variables
const header = ref('Conditionally applying styles');
const data = countryData;
const selectedCost = ref(1000);

// Conditional style applied to countries:
const highlightBackground = (index) => {
  console.log('checking background color for....' + index);
  // returning a valid CSS style object here, where the
  // property backgroundColor is set to lightBlue or transparent,
  // depending on the cost of a country. For instance: { backgroundColor: 'transparent'}
  return {
    backgroundColor: data.countries[index].cost < selectedCost.value ?
        'lightBlue' :
        'transparent'
  };
}
// NOT using a computed property here, because we CAN NOT pass parameters to
// a computed propertyp
</script>

<style scoped>
.lightblue{
  background-color: lightblue;
}
</style>
