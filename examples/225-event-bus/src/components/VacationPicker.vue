<template>
    <div class="">
        <h1>
            <img src="../assets/logo.png" alt="vue logo" style="width:80px"/>
            Vue vacation picker</h1>
        <div class="row">
            <div class="col-6">
                <div class="alert alert-warning text-center">
                    <h1>
                        {{ country.name}}
                    </h1>
                    <h2>Capital: {{ country.capital}}</h2>
                    <div v-if="country.rating !== 0">
                        my rating:
                        <span class="badge badge-secondary badge-pill">{{country.rating}}</span>
                    </div>
                    <div v-if="country.favorite">
                        <span class="badge badge-secondary badge-pill">Favorite!</span>
                    </div>
                </div>
                <button @click="prevCountry()" class="btn btn-success"> << Back</button>
                <button @click="nextCountry()" class="btn btn-success">Forward >></button>
                <button @click="showDetails = !showDetails" class="btn btn-primary">
                    <span v-if="showDetails">Hide details</span>
                    <span v-if="!showDetails">Show details</span>
                </button>
                <ShoppingCart/>
            </div>
            <div class="col-6">
                <CountryDetail v-if="showDetails"
                               @rating="onRating($event)"
                               @fav="onFav($event)"
                               :country="country"/>
            </div>
        </div>
        <hr>
        <div class="small text-center">Copyright (C) 2019</div>
    </div>
</template>

<script>
	// import the country data
	import data from '../data/data';
	import CountryDetail from "./CountryDetail";
	import ShoppingCart from "./ShoppingCart";

	export default {
		name: 'VacationPicker',
		components: {ShoppingCart, CountryDetail},
		//**************** Data
		data() {
			return {
				data,
				showDetails: false,
				currentCountryIndex: 0
			}
		},
		//**************** Methods
		methods: {
			prevCountry() {
				this.currentCountryIndex--;
				if (this.currentCountryIndex < 0) {
					this.currentCountryIndex = this.data.countries.length - 1;
				}
			},
			nextCountry() {
				this.currentCountryIndex++;
				if (this.currentCountryIndex > this.data.countries.length - 1) {
					this.currentCountryIndex = 0;
				}
			},
			onRating(rating) {
				console.log('rating received for ' + this.country.name);
				this.data.countries[this.currentCountryIndex].rating += rating;
			},
			onFav(fav) {
				this.data.countries[this.currentCountryIndex].favorite = fav;
			}
		},
		//**************** Computed properties
		computed: {
			country() {
				return {
					...this.data.countries[this.currentCountryIndex]
				}
			}
		}
	}
</script>

<style scoped>

</style>
