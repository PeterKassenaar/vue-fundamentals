<template>
    <div class="">
        <h1>{{ header }}</h1>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="country in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{country.name}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
	// import the country data
	import data from '../data/data';

	export default {
		name: "VacationList",
		data() {
			return {
				data,
				header: 'List of destinations',
			}
		},
        // Using the 'created' lifecycle hook. See
        //  https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks for details
		created(){
			console.log('The component is created - lifecycle hook called');
			// update the header
            this.header = 'The component is created';
		},
	}
</script>

<style scoped>

</style>
