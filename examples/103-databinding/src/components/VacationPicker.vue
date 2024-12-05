<template>
    <div class="">
        <h1>{{ header }}</h1>
        <ul class="list-group">
            <li class="list-group-item" v-for="country in data.countries" :key="country.id">
                 {{country.name}}
            </li>
        </ul>
        <!--**********************-->
        <!--Workshop: Add your CustomerData here-->
        <!--**********************-->
    </div>
</template>

<script setup>
	// import the country countryData
	import countryData from '@/data/CountryData';

  // create variables
  const header = 'Pick your next vacation';
  const data = countryData;
</script>
