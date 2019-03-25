<template>
    <div class="">
        <h1>{{ header }}</h1>
        <ul class="list-group">
            <li class="list-group-item" v-for="country in data.countries">
                <span :id="country.id"
                     :title="country.details">
                    {{country.name}}
                </span>
            </li>
        </ul>
        <!--**********************-->
        <!--Workshop: Add your CustomerData here-->
        <!--**********************-->
    </div>
</template>

<script>
	// import the country countryData
	import countryData from '../data/CountryData';

	export default {
		name: 'VacationPicker',
		data() {
			return {
				// make countryData available in app. This is shorthand notation for 'countryData : countryData'
				data: countryData,
				header: 'Pick your next vacation',
			}
		}
	}
</script>

<style scoped>

</style>
