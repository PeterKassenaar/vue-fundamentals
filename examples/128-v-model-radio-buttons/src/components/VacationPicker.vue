<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>v-model on radio buttons</h2>
        <hr>
        <p v-for="country in data.countries" :key="country.id">
          <label>
            <input type="radio"
                   :value="country.name"
                   v-model="selectedCountries">
            {{ country.name }}
          </label>
        </p>
      </div>
      <div class="col">
        <h3>Selected Countries:</h3>
        <p>{{ selectedCountries }}</p>
        <p>
          <button class="btn btn-info"
                  @click="postCountries()">
            Post
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data/data';
import mixins from '../mixins/mixins';

export default {
  name    : "VacationPicker",
  data() {
    return {
      data,
      title               : 'Vue Vacation Picker',
      selectedCountryIndex: 0,
      selectedCountries   : []
    }
  },
  // Code, mixed in to this component
  mixins  : [mixins],
  // lifecycle hook
  created() {
    console.log('Vacation Picker is created...');
  },
  methods : {
    selectCountry(index) {
      this.selectedCountryIndex = index;
    },
    postCountries() {
      alert('Send to database: ' +
          this.selectedCountries)
    }
  },
  computed: {
    selectedCountry() {
      return {
        // longhand notation
        // id: this.data.countries[this.selectedCountryIndex].id,
        // name: this.data.countries[this.selectedCountryIndex].name,
        // capital: this.data.countries[this.selectedCountryIndex].capital,
        // cost: this.data.countries[this.selectedCountryIndex].cost,
        // details: this.data.countries[this.selectedCountryIndex].details,
        // img: this.data.countries[this.selectedCountryIndex].img

        // shorthand notation
        ...this.data.countries[this.selectedCountryIndex]
      }
    },
    isExpensive() {
      return this.data.countries[this.selectedCountryIndex].cost > 4000;
    }
  }
}
</script>

<style scoped>

</style>
