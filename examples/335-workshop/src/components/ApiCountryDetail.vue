<template>
  <div>
    <!--    Show message when loading details, or when error occurs-->
    <div v-if="errors.length">
      <p class="text-danger">Error: {{ errors[0] }}</p>
    </div>
    <div v-else-if="!country">
      <p>Loading country details...</p>
    </div>
    <!-- No errors, Country successfully fetched. Details here -->
    <div v-else>
      <h2>Details for {{ country.name.common }}</h2>
      <table class="table table-striped">
        <tbody>
        <tr>
          <td>Flag</td>
          <td><img :src="country.flags.png" class="imgFlag" :alt="'Flag of '+ country.name.common"></td>
        </tr>
        <tr>
          <td>Capital</td>
          <td>{{ country.capital ? country.capital[0] : 'N/A' }}</td>
        </tr>
        <tr>
          <td>Population</td>
          <td>{{ country.population }}</td>
        </tr>
        <tr>
          <td>Region / Subregion</td>
          <td>{{ country.region }} / {{ country.subregion }}</td>
        </tr>
        <tr>
          <td>Timezones</td>
          <td>{{ country.timezones.join(', ') }}</td>
        </tr>
        <tr>
          <td>Calling Code</td>
          <td>{{ country.idd.root }}{{ country.idd.suffixes[0] }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

// Reactive variables for this component
const country = ref(null); // Use `null` initially since it may be empty
const name = ref('');
const errors = ref([]);
const route = useRoute();

// URL of the external API
const url = 'https://restcountries.com/v3.1/name/';

// Function to fetch country data. It is used inside the onMounted lifecycle hook below.
const fetchCountryDetails = async () => {
  try {
    // Get country name from the route parameters
    name.value = route.params.name;

    // Perform Axios GET request
    const response = await axios.get(`${url}${name.value}?fullText=true`);
    console.log(response.data); // Debugging: View the structure of the response

    // Validate the API response
    if (response.data && Array.isArray(response.data) && response.data.length > 0) {
      country.value = response.data[0];
    } else {
      errors.value.push(`No data found for the country: ${name.value}`);
      country.value = null; // Reset `country` in case of no valid data
    }
  } catch (err) {
    // Log the error and update the `errors` array
    console.error(err);
    errors.value.push(`Failed to load country details: ${err.message}`);
    country.value = null; // reset `country` value in case of error
  }
};

// Fetch data on component mount
onMounted(fetchCountryDetails);
</script>

<style scoped>
.imgFlag {
  max-width: 180px;
  border: 1px solid gray;
  border-radius: 8px;
  margin-right: 4px;
}
</style>
