<template>
    <div>
        <h2>Countries via API - stored in Vuex store</h2>
        <button @click="fetchCountries()" class="btn btn-success">Fetch countries</button>
        <button @click="clearCountries()" class="btn btn-danger">Clear countries</button>
        <!--Loading indicator/spinner-->
        <div v-if="!loading">
            <h3 style="margin: 0 auto;">Loading...</h3>
            <img src="../../assets/spinner.gif" alt="Loading indicator...">
        </div>
        <!--Oh no, something bad happened! -->
        <div v-if="error" class="alert alert-danger">
            <h3>Error!</h3>
            <div>{{ errorList }}</div>
        </div>
        <!--List with country data-->
        <ul class="list-group" v-if="countries && countries.length">
            <li class="list-group-item"
                v-for="country of countries"
                @click="getCountry(country.name)"
                :key="country.name">
                <span class="float-left">
                    <img :src="country.flag" class="imgFlag" alt="Flag of this country">
                </span>
                <h4>{{ country.name }} </h4>
                <p>{{ country.capital}}, pop. {{ country.population}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "ApiVuexComponent",
		methods: {
			// 1. fetch all countries from the store
			fetchCountries() {
				this.$store.dispatch('countries/fetchCountries')
			},
			// 2. clear countries from the store
			clearCountries() {
				this.$store.dispatch('countries/clearCountries')
			},
			// 3. get a specific country - no additional http-req needed, b/c country is already in the store
			getCountry(name) {
				console.log('Getting details for:::', name);
				this.$router.push({
					name: 'vuex-detail',
					params: {
						name: name
					}
				})
			}
		},
		computed: {
			countries() {
				return this.$store.state.countries.countries;
			},
			loading() {
				return this.$store.state.countries.loadingStatus === 'notloading'
			},
			error() {
				return this.$store.state.countries.errors.length > 0;
			},
			errorList() {
				return this.$store.state.countries.errors;
			}
		}
	}
</script>

<style scoped>
    .imgFlag {
        max-width: 80px;
        border: 1px solid gray;
        border-radius: 8px;
        margin-right: 4px;
    }
</style>
