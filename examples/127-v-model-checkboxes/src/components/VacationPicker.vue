<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>v-model on checkboxes</h2>
        <hr>
        <p v-for="country in data.countries" :key="country.id">
          <label>
            <input type="checkbox"
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
import ShowPerson from "./ShowPerson";

export default {
  name      : "VacationPicker",
  components: {ShowPerson},
  data() {
    return {
      data,
      title               : 'Vue Vacation Picker',
      selectedCountryIndex: 0,
      selectedCountries   : [],
      person              : {
        firstName: '',
        lastName : '',
        email    : ''
      },
      personName          : ''
    }
  },
  // Code, mixed in to this component
  mixins    : [mixins],
  // lifecycle hook
  created() {
    // eslint-disable-next-line no-console
    console.log('Vacation Picker is created...');
  },
  methods   : {
    setName() {
      // kopie van de firstname, deze wordt
      // doorgegeven aan de child component.
      this.personName = this.person.firstName;
    },
    selectCountry(index) {
      this.selectedCountryIndex = index;
    },
    postCountries() {
      alert('Send to database: ' +
          this.selectedCountries)
    }
  },
  computed  : {
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
