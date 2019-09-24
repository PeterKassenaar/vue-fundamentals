<template>
    <div>
        <div class="row">
            <div class="col-6">
                <h1>{{ title }}</h1>
                <ul class="list-group">
                    <li v-for="(country, index) in data.countries"
                        @click="selectCountry(index)"
                        :key="country.id"
                        class="list-group-item">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id}} -
                    {{ country.name }}
                </span>
                    </li>
                </ul>
                <!--                *********************-->
                <!--                Creating a list of new countries via v-model-->
                <!--                *********************-->
                <hr>
                <h2><label for="newCountry">New Countries</label></h2>
                <input type="text"
                       id="newCountry"
                       class="form-control-lg"
                       v-model="newCountry"
                       placeholder="New Country"
                       @keyup.enter="addCountry()"
                >
                <button @click="addCountry()" class="btn btn-info">
                    Add Country
                </button>
                <ul class="list-group">
                    <li class="list-group-item"
                        v-for="(country, index) in newCountries" :key="index">
                        {{ country }}
                    </li>
                </ul>

            </div>
            <div class="col-6">
                <h2>Selected:</h2>
                <ul class="list-group">
                    <li class="list-group-item">{{ selectedCountry.id}}</li>
                    <li class="list-group-item">{{ selectedCountry.name}}</li>
                    <li class="list-group-item">{{ selectedCountry.capital}}</li>
                    <li class="list-group-item">{{ selectedCountry.details}}</li>
                    <li class="list-group-item">
                        <img :src="getImgUrl(selectedCountry.img)"
                             :alt="selectedCountry.img"
                             class="img-fluid">
                    </li>
                    <li class="list-group-item" v-if="isExpensive">
                        <span class="badge badge-danger badge-pill">
                            Expensive!
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">

            </div>
        </div>
    </div>
</template>

<script>
	import data from '../data/data';
	import mixins from '../mixins/mixins';

	export default {
		name: "VacationPicker",
		data() {
			return {
				data,
				title: 'Vue Vacation Picker',
				selectedCountryIndex: 0,
				newCountry: '',
				newCountries: []
			}
		},
		// Code, mixed in to this component
		mixins: [mixins],
		// lifecycle hook
		created() {
			console.log('Vacation Picker is created...');
		},
		methods: {
			selectCountry(index) {
				this.selectedCountryIndex = index;
			},
			addCountry() {
				this.newCountries.push(this.newCountry);
				this.newCountry = '';
			},
		},
		computed: {
			selectedCountry() {
				return {
					// longhand notation
					// id: this.data.countries[this.selectedCountryIndex].id,
					// name: this.data.countries[this.selectedCountryIndex].name,
					// capital: this.data.countries[this.selectedCountryIndex].capital,
					// cost: this.data.countries[this.selectedCountryIndex].cost,
					// details: this.data.countries[this.selectedCountryIndex].details,
					// img: this.data.countries[this.selectedCountryIndex].img

					// shorthand notation
					...this.data.countries[this.selectedCountryIndex]
				}
			},
			isExpensive() {
				return this.data.countries[this.selectedCountryIndex].cost > 4000;
			}
		}
	}
</script>

<style scoped>

</style>
