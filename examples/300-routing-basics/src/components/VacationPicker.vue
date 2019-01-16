<template>
    <div class="row">
        <div class="col-md-6">
        <h1>{{ header }}</h1>
        <ul class="list-group">
            <li class="list-group-item"
                @click="showCountry(country)"
                v-for="country in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{country.name}}
                </span>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
	// import the country data
	import data from '../data/data';

	export default {
		name: 'VacationPicker',
		data() {
			return {
				data,
				header: 'Pick your next vacation'
			}
		},
        methods:{
			// a method for navigating to the specific country from code, instead of HTML
			showCountry(country){
				console.log('navigate to ' + country.name);
				// navigate to next page - we're going to use parameters later on.
				this.$router.push('/detail')
            }
        }
	}
</script>

<style scoped>

</style>
