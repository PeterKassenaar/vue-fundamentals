<template>
    <div class="">
        <h1>{{ header }}</h1>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="country in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id | formatId }} - {{country.name | uppercase }}
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
        // creating a local filter, called 'uppercase'. This is used in the UI
        filters:{
			uppercase(value){
				if(!value){
					return;
                }
				return value.toUpperCase();
            }
        }
	}
</script>

<style scoped>

</style>
