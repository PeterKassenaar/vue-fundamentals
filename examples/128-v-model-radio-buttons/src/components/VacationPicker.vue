<template>
  <h1>{{ header }}</h1>
  <div class="row">
    <div class="col-6">
      <ul class="list-group">
        <li
            class="list-group-item"
            v-for="country in data.countries"
            :key="country.id">
          <label>
            <!-- Using a radio button - only 1 country can be selected-->
            <input type="radio"
                   :value="country.name"
                   v-model="selectedCountries">
            {{ country.name }}
          </label>
        </li>
      </ul>
    </div>
    <div class="col-6">
      <h3>Selected Countries:</h3>
      <!-- Using the <template> tag here. It only renders if there are selected countries,-->
      <!-- but don't add a node to the DOM (like React <Fragment>). See also https://vuejs.org/guide/essentials/template-syntax.html-->
      <template v-if="selectedCountries.length > 0">
        <p>{{ selectedCountries }}</p>
        <p>
          <button class="btn btn-info"
                  @click="postCountries()">
            Post
          </button>
        </p>
      </template>
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
const selectedCountries = ref([]);

const postCountries = () => {
  alert(`Send to database: ${selectedCountries.value}`);
}

</script>
