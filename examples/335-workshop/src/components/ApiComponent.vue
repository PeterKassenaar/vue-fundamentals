<template>
  <div>
    <h2>All countries in the world</h2>
    <ul class="list-group" v-if="countries && countries.length">
      <li class="list-group-item" v-for="country of countries" :key="country.name">
                <span class="float-left">
                    <img :src="country.flags.png" class="imgFlag" alt="Flag of this country">
                </span>
        <h4>{{ country.name.common }} </h4>
        <p>{{ country.capital ? country.capital[0] : '' }}, pop. {{ country.population }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import {onMounted, ref} from "vue";

const fields = 'name,capital,population,flags'; // fields to retrieve from the API, see https://restcountries.com/v3.1/all
const url = `https://restcountries.com/v3.1/all?fields=${fields}`
const countries = ref([]);
const errors = ref([]);

onMounted(() =>{
  axios.get(url)
      .then(response => countries.value = response.data)
      .catch(error => errors.value.push(error));
})

// async/await version - results in UI are identical
// but we have to use the onMounted lifecycle hook in this case
// onMounted(async () =>{
//   try {
//     const response = await axios.get(url)
//     countries.value = response.data;
//   } catch (error) {
//     errors.value.push(errors);
//   }
// })
</script>

<style scoped>
.imgFlag {
  max-width: 80px;
  border: 1px solid gray;
  border-radius: 8px;
  margin-right: 4px;
}
</style>
