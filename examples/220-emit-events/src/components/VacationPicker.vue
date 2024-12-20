<template>
  <h1>{{ header }}</h1>
  <div class="row">
    <div class="col-6">
      <div class="alert alert-warning text-center">
        <h1>{{ currentCountry.name }}</h1>
        <h2>Capital: {{ currentCountry.capital }}</h2>
        <!--        Show a country rating, if available-->
        <template v-if="currentRating !== 0">
          my rating:
          <span class="badge bg-secondary badge-pill">
              {{ currentRating }}
          </span>
        </template>
      </div>
      <button @click="prevCountry()" class="btn btn-success"> &lt;&lt; Back</button>
      <button @click="nextCountry()" class="btn btn-success">Forward &gt;&gt;</button>
      <button @click="showDetails = !showDetails" class="btn btn-primary">
        <span v-if="showDetails">Hide details</span>
        <span v-if="!showDetails">Show details</span>
      </button>
    </div>
    <div class="col-6">
      <CountryDetail v-if="showDetails"
                     @rating="onRating($event)"
                     :country="currentCountry"/>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
// import the country countryData
import countryData from '@/data/CountryData';

// import the child component receiving the country details
import CountryDetail from "@/components/CountryDetail.vue";

// create variables
const header = 'Pick your next vacation';
const data = countryData;
const showDetails = ref(false);
const currentCountryId = ref(0);
const currentRating = ref(0);

// We received a rating! Handle event from the child component.
// This can be done in MULTIPLE ways. Also see https://vuejs.org/guide/components/events.html
const onRating = value => {
  // some debugging info. Can be deleted.
  console.log('received rating for :: ', currentCountry.value.name);
  console.log('value :: ', value);

  // Update rating property for the country. Also update the reactive currentRating property.
  // (if we ONLY use currentCountry.rating, it is not reactive, so the UI won't update. But
  // there are multiple ways of handling this! See also online).
  data.countries[currentCountryId.value].rating += value;
  currentRating.value += value;
}

// Computed properties.
// Automatically calculate current country, based on Id
const currentCountry = computed(() => {
  currentRating.value = data.countries[currentCountryId.value].rating ?
      data.countries[currentCountryId.value].rating : 0;
  return data.countries.find(c => c.id === currentCountryId.value) || data.countries[0] // fallback property for first load
})

// Go to the previous country
const prevCountry = () => {
  currentCountryId.value--;
  if (currentCountryId.value <= 0) {
    currentCountryId.value = data.countries.slice(-1)[0].id; // get the id of last country
  }
}
// Go to the next country
const nextCountry = () => {
  currentCountryId.value++;
  if (currentCountryId.value > data.countries.length) {
    currentCountryId.value = data.countries[0].id; // set id equal to first country
  }
}
</script>
