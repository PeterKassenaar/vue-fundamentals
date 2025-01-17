<template>
  <div class="">
    <h1>{{ header }}</h1>
    <ul class="list-group">
      <!--*************-->
      <!--Workshop: add eventlistener for click-event to li-element. -->
      <!-- Show the name + capital of clicked city in an alert-box-->
      <!--*************-->
      <li
          @mouseover="logCity(country.name)"
          class="list-group-item"
          v-for="country in data.countries"
          :key="country.id"
      >
        <span :id="country.id" :title="country.details">{{ country.id }} - {{ country.name }}</span>
      </li>
    </ul>
    <h2>Capture click events</h2>
    <h3>{{ counter }}</h3>
    <button @click="increase()" class="btn btn-success">Increase ++</button>
    <button @click="decrease()" class="btn btn-danger">Decrease --</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
// import the country countryData
import countryData from '@/data/CountryData';

// create variables
const header = 'Pick your next vacation';
const data = countryData;
const counter = ref(0);

// classical notation
function increase() {
  counter.value++;
}

function decrease() {
  counter.value--;
}

// modern notation
// const increase = () => {
//   counter.value++;
// }
//
// const decrease = () => {
//   counter.value--;
// }
const logCity = countryName => {
  console.log({countryName});
}
</script>
