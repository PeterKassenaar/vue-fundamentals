<template>
  <div class="row">
    <div class="col-6">
      <h1>{{ header }}</h1>
      <ul class="list-group">
        <li class="list-group-item"
            @click="showCountry(country)"
            v-for="country in data.countries" :key="country.id">
          {{ country.name }}
          <!--Using <router-link> instead of a @click event handler. Both are valid-->
          <!--<router-link :to="{name:'detail', params: {id: country.id, name: country.name} }">-->
          <!--{{ country.id }} - {{country.name}}-->
          <!--</router-link>-->
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <!--The Nested router view here-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
// import the country countryData
import countryData from '@/data/CountryData';
import {useRouter} from "vue-router";

// create variables
const header = 'Pick your next vacation';
const data = countryData;

// Routing from code
const router = useRouter()
const showCountry = (country) => {
  console.log('navigate to: ', country.name);
  router.push({
    name: 'detail',
    params: {
      id: country.id
    }
  }); // When using 'params', you MUST use 'name'
}

</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
