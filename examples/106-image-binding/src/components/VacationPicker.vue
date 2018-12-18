<template>
    <div class="">
        <h1>{{ header }}</h1>
        <div class="row">
            <div class="col-6">
                <ul class="list-group">
                    <li @click="selectCountry(country)"
                        class="list-group-item" v-for="country in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{country.name}}
                </span>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <h2>Selected:</h2>
                <ul class="list-group">
                    <li class="list-group-item">{{ selectedCountry.id}}</li>
                    <li class="list-group-item">{{ selectedCountry.name}}</li>
                    <li class="list-group-item">{{ selectedCountry.capital}}</li>
                    <li class="list-group-item">
                        <img :src="getImgUrl(selectedCountry.img)"
                             :alt="selectedCountry.img"
                             class="img-fluid" >
                    </li>

                    <li class="list-group-item">{{ selectedCountry.details}}</li>
                    <li class="list-group-item" v-if="isExpensive">
                        <span class="badge badge-danger badge-pill">Expensive!</span>
                    </li>
                    <li class="list-group-item" v-if="isOnSale">
                        <span class="badge badge-warning badge-pill">On Sale!</span>
                    </li>
                </ul>
            </div>
        </div>
        <hr>
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
				header: 'Pick your next vacation',
				counter: 0,
				selectedCountryIndex: 0
			}
		},
		methods: {
			selectCountry(country) {
				this.selectedCountryIndex = this.data.countries.indexOf(country);
			},
            getImgUrl(img){
				console.log(img);
				return require('../assets/countries/' + img);
            }
		},
		computed: {
			selectedCountry() {
				return {
					// longhand notation: annotate every property
					// id: this.data.countries[this.selectedCountryIndex].id,
					// name: this.data.countries[this.selectedCountryIndex].name,
					// capital: this.data.countries[this.selectedCountryIndex].capital,
					// cost: this.data.countries[this.selectedCountryIndex].cost,
					// details: this.data.countries[this.selectedCountryIndex].details,
					// img: this.data.countries[this.selectedCountryIndex].img

					// shorthand notation: use the spread operator (=more elegant & scalable)
					...this.data.countries[this.selectedCountryIndex]
				}
			},
			isExpensive() {
				return data.countries[this.selectedCountryIndex].cost > 4000;
			},
			isOnSale() {
				return data.countries[this.selectedCountryIndex].cost < 1000;
			}
		}
	}
</script>

<style scoped>

</style>
