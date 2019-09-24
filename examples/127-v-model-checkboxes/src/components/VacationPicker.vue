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
<!--                ***************-->
<!--                Below: result of the workshop: passing data from one component
                    as a prop to another (child) component. Comment in to see the results-->
<!--                ***************-->
<!--                <div style="border: 1px solid red; padding :4px; margin:4px;">-->
<!--                    <p class="text-muted text-sm-left">component: VacationPicker.vue</p>-->
<!--                    <input type="text" class="form-control-lg"-->
<!--                           v-model="person.firstName" placeholder="name..."-->
<!--                           @keyup.enter="setName()">-->
<!--                    <ShowPerson :name="personName"/>-->
<!--                </div>-->

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
                <hr>
                <p v-for="country in data.countries" :key="country.id">
                    <input type="checkbox"
                           :value="country.name"
                           v-model="selectedCountries">
                    {{ country.name}}
                </p>
            </div>
            <div class="col">
                <h3>Selected Countries:</h3>
                <p>{{ selectedCountries }}</p>
                <p>
                    <button class="btn btn-info"
                            @click="postCountries()">
                        Post
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
	import data from '../data/data';
	import mixins from '../mixins/mixins';
	import ShowPerson from "./ShowPerson";

	export default {
		name: "VacationPicker",
		components: {ShowPerson},
		data() {
			return {
				data,
				title: 'Vue Vacation Picker',
				selectedCountryIndex: 0,
				selectedCountries: [],
				person: {
					firstName: '',
					lastName: '',
					email: ''
				},
				personName: ''
			}
		},
		// Code, mixed in to this component
		mixins: [mixins],
		// lifecycle hook
		created() {
			// eslint-disable-next-line no-console
			console.log('Vacation Picker is created...');
		},
		methods: {
			setName() {
				// kopie van de firstname, deze wordt
                // doorgegeven aan de child component.
				this.personName = this.person.firstName;
			},
			selectCountry(index) {
				this.selectedCountryIndex = index;
			},
			postCountries() {
				alert('Send to database: ' +
					this.selectedCountries)
			}
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
