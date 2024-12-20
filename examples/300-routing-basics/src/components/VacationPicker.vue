<template>
  <div class="row">
    <div class="col-6">
      <h1>{{ header }}</h1>
      <ul class="list-group">
        <li class="list-group-item" v-for="country in data.countries" :key="country.id">
          {{country.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// import the country countryData
import countryData from '@/data/CountryData';

// create variables
const header = 'Pick your next vacation';
const data = countryData;


</script>
