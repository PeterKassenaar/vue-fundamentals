<template>
  <div class="">
    <h1>{{ header }}</h1>
    <p>Click an item to add it to an array</p>
    <ul class="list-group">
      <li class="list-group-item"
          @mouseover="selectedCountry = country"
          @click="selectCountry(country)"
          :class="{'selected': country === selectedCountry}"
          v-for="(country) in data.countries" :key="country.id">
                <span :title="country.details">
                    {{ country.id }} - {{ country.name }}
                </span>
      </li>
    </ul>
    <div v-if="selectedCountries.length > 0">
      <h3>Selected countries:</h3>
      <ul>
        <li v-for="country in selectedCountries" :key="country.id">
          {{ country.id }} - {{ country.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import the country data
import data from '../data/data';

export default {
  name: "VacationListSelect",
  data() {
    return {
      data,
      header: 'Hover over a destination to select it',
      selectedCountry: undefined,
      selectedCountries: []
    }
  },
  methods: {
    selectCountry(country) {
      // Check if the country exists in the array of selected countries?
      this.selectedCountries.includes(country)
          // Yes - filter it out
          ? this.selectedCountries = this.selectedCountries.filter(c => c !== country)
          // No - add it to the array using the spread operator (instead of .push() )
          : this.selectedCountries = [...this.selectedCountries, country];
    }
  }
}
</script>

<style scoped>
/* This class is applied if the country is hovered over */
/* Credits: https://jsfiddle.net/Herteby/todqxteh/*/
.selected {
  background-color: #15670f;
  color: white;
}

</style>
