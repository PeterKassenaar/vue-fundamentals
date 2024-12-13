<template>
  <h1>{{ header }}</h1>
  <div class="row">
    <div class="col-6">
      <ul class="list-group">
        <li
            class="list-group-item"
            v-for="country in data.countries"
            :key="country.id">
          {{ country.name }}
        </li>
      </ul>
    </div>
    <div class="col-6">
      <h3>Update the component:</h3>
      <p>{{ count }}</p>
      <p>
        <button class="btn btn-info"
                @click="count++">+1
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated, ref} from "vue";
// import the country countryData
import countryData from '@/data/CountryData';

// create variables
const header = ref('Pick your next vacation');
const data = countryData;
const count = ref(0);

//***************************
// Using the lifecycle hooks
//***************************
onMounted(() => {
  console.log('The component is mounted - lifecycle hook called');
  // update the header
  header.value = 'Vaction Picker - component is created';
});

onUpdated(() => {
  console.log('The component is updated ::', count.value);
})

// Not used here: onUnmounted()
// Workshop - create a usage for yourself (example: when hiding and showing the component, this lifecycle hook will be called).
onUnmounted(()=>{
  // void
})

</script>
