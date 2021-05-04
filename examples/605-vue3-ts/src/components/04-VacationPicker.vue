<template>
  <div>
    <h2>Vue-ts VacationPicker</h2>
    <ul class="list-group">
      <li class="list-group-item"
          v-for="country in countries"
          :key="country.id"
          @click="showCountry(country)">
        {{ country.id }} - {{ country.name }}
      </li>
    </ul>
    <div v-if="currentCountry">
      <h2>{{ currentCountry.name }}
      </h2>
      <p>
        {{ currentCountry.details }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import countryData from "@/data/CountryData"
import {Country} from "@/model/countryModel";

export default defineComponent({
  name: "VacationPicker",
  data() {
    return {
      countries: countryData.countries as Country[],
      currentCountry: {} as Country
    }
  },
  methods: {
    showCountry(country: Country): void {
      this.currentCountry = country;
    }
  },
  props:{
    //...
  },
  components:{
    //...
  },
  computed:{
    //...
  }
})
</script>

<style scoped>

</style>
