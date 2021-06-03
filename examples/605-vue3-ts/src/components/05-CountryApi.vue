<template>
  <div>
    <h2>Search for a country</h2>
    <p>
      <input type="text"
             @keyup.enter="searchCountry()"
             v-model="countryName"
             class="form-control-lg"
             placeholder="Country name...">
      <button @click="searchCountry()"
              class="btn btn-primary">Go!
      </button>
    </p>
    <hr>
    <ul class="list-group" v-if="countries && countries.length">
      <li class="list-group-item"
          v-for="country of countries"
          @click="getCountry(country.name)"
          :key="country.name">
                <span class="float-left">
                    <img :src="country.flag"
                         class="imgFlag"
                         :alt="'Flag of' + country.name">
                </span>
        <h4>{{ country.name }} </h4>
        <p>{{ country.capital }}, pop. {{ country.population }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from 'axios';
import {CountryApi} from '@/model/countryModel';

export default defineComponent({
  name: "05-CountryApi",
  data() {
    return {
      url: 'https://restcountries.eu/rest/v2/name/' as string,
      fields: '?fields=name;flag;population;capital' as string,
      countries: [] as CountryApi[],
      countryName: '' as string
    }
  },
  methods: {
    searchCountry() {
      axios.get(`${this.url}${this.countryName}${this.fields}`)
          .then(response => {
            this.countries = response.data;
            // just some logging
            console.log(response.data);
          })
    },
    // If such a route were available:
    // getCountry(name :string) {
    //   this.$router.push({
    //     name: 'api-detail',
    //     params: {
    //       name: name
    //     }
    //   })
    // }
  }
})
</script>

<style scoped>
.imgFlag {
  max-width: 80px;
}
</style>
