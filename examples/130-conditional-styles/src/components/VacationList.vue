<template>
    <div class="">
        <h1>{{ header }}</h1>
        <ul class="list-group">
            <li class="list-group-item"
                :style="highlightBackground(index)"
                v-for="(country, index) in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{country.name}}
                </span>
            </li>
        </ul>
        <h2>Destinations cheaper than:
            <select class="form-control-lg" v-model="selectedCost">
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="3000">3000</option>
                <option value="4000">4000</option>
                <option value="5000">5000</option>
                <option value="6000">6000</option>
            </select>
        </h2>
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
				selectedCost: 1000
			}
		},
		methods: {
			highlightBackground(index) {
				console.log('checking background color for....' + index);
				// returning a valid CSS style object here, where the
        // property backgroundColor is set to lightBlue or transparent,
        // depending on the cost of a country. For instance: { backgroundColor: 'transparent'}
				return {
					backgroundColor:
						this.data.countries[index].cost < this.selectedCost ?
							'lightBlue' :
							'transparent'
				}
			}
		}
	}
</script>

<style scoped>

</style>
