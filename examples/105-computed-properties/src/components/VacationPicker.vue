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
        <li class="list-group-item" v-if="isExpensive">
          <span class="badge bg-danger rounded-pill">Expensive!</span>
        </li>
        <!--*******************-->
        <!--Workshop: Show a badge if a destination is On Sale -->
        <!--i.e. costs less than 1000-->
        <!--*******************-->
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

// Update the Id when the user clicks a country
const selectCountry = id => {
  currentCountryId.value = id;
}

// Automatically calculate current country, based on Id
const currentCountry = computed(()=>{
  return data.countries.find(c => c.id === currentCountryId.value)
})

// Automatically calculate if a destination is expensive
const isExpensive = computed(() => {
  return currentCountry.value.cost > 4000;
});
// Workshop: create a computed property for the isOnSale property of this component

</script>
