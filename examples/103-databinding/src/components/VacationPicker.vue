<template>
    <div class="">
        <h1>{{ header }}</h1>
        <ul class="list-group">
            <li class="list-group-item" v-for="(country, index) in data.countries">
                <span :id="country.id"
                      :title="country.details">
                    {{ index}} - {{country.name}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
	// import the country data
	import data from '../data/data';

	export default {
		name: 'VacationPicker',
		data() {
			return {
				// make data available in app. This is shorthand notation for 'data : data'
				data,
				header: 'Pick your next vacation'
			}
		}
	}
</script>

<style scoped>

</style>
