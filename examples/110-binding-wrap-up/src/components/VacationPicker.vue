<template>
    <div class="">
        <h1>
            <img src="../assets/logo.png" alt="vue logo" style="width:80px"/>
            Vue vacation picker</h1>
        <div class="row">
            <div class="col-6">
                <div class="alert alert-warning text-center">
                    <h1>{{ selectedCountry.name}}</h1>
                    <h2>Capital: {{ selectedCountry.capital}}
                        <span v-if="isOnSale" class="badge badge-light">Sale!</span>
                        <span v-if="isExpensive" class="badge badge-danger">(expensive)</span>
                    </h2>
                </div>
                <button @click="prevCountry()" class="btn btn-success"> << Back</button>
                <button @click="nextCountry()" class="btn btn-success">Forward >></button>
                <button @click="showDetails = !showDetails" class="btn btn-primary">
                    <span v-if="showDetails">Hide details</span>
                    <span v-if="!showDetails">Show details</span>
                </button>
            </div>
            <div class="col-6" v-if="showDetails">
                <h2>{{ selectedCountry.name }}</h2>
                <ul class="list-group">
                    <li class="list-group-item">{{ selectedCountry.id}}</li>
                    <li class="list-group-item">{{ selectedCountry.name}}</li>
                    <li class="list-group-item">{{ selectedCountry.capital}}</li>
                    <li class="list-group-item">
                        <img :src="getImgUrl(selectedCountry.img)"
                             :alt="selectedCountry.img"
                             class="img-fluid">
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
			prevCountry: function () {
				this.currentCountryIndex--;
				if (this.currentCountryIndex < 0) {
					this.currentCountryIndex = this.data.countries.length - 1;
				}
			},
			nextCountry: function () {
				this.currentCountryIndex++;
				if (this.currentCountryIndex > this.data.countries.length - 1) {
					this.currentCountryIndex = 0;
				}
			},
			getImgUrl(img) {
				console.log(img);
				return require('../assets/countries/' + img);
			}
		},
        //**************** Computed properties
		computed: {
			selectedCountry() {
				return {
					...this.data.countries[this.currentCountryIndex]
				}
			},
			isExpensive() {
				return data.countries[this.currentCountryIndex].cost > 4000;
			},
			isOnSale() {
				return data.countries[this.currentCountryIndex].cost < 1000;
			}
		}
	}
</script>

<style scoped>

</style>
