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
import {ref} from "vue";
import axios from "axios";

const fields = 'name,capital,population,flags'; // fields to retrieve from the API, see https://restcountries.com/v3.1/all
const url = `https://restcountries.com/v3.1/all?fields=${fields}`
const countries = ref([]);
const errors = ref([]);

// The actual API call, using axios as an external dependency
axios.get(url)
    .then(response => countries.value = response.data)
    .catch(error => errors.value.push(error));

//**********************************
// **** ALTERNATIVES ***
//**********************************
// 1) fetch version - results in UI are identical
// fetch(url)
//     .then(async (response) => {
//         if (!response.ok) throw new Error(`HTTP ${response.status}`);
//         const data = await response.json();
//         countries.value = data;
//     })
//     .catch((error) => errors.value.push(error));

// 2) async/await version - results in UI are identical
// we also have to use the onMounted lifecycle hook in this case
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
