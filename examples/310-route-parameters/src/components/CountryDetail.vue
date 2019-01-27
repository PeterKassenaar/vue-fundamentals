<template>
    <div>
        <h2>Showing Country Details...</h2>
        <h3>Country id : {{ id }}</h3>
        <h3>country name: {{ name }}</h3>
        <div v-if="country">
            <h2>{{ country.name }}</h2>
            <ul class="list-group">
                <li class="list-group-item">{{ country.id}}</li>
                <li class="list-group-item">{{ country.name}}</li>
                <li class="list-group-item">{{ country.capital}}</li>
                <li class="list-group-item">
                    <img :src="getImgUrl(country.img)"
                         :alt="country.img"
                         class="img-fluid">
                </li>
                <li class="list-group-item">{{ country.details}}</li>
                <li class="list-group-item" v-if="isExpensive">
                    <span class="badge badge-danger badge-pill">Expensive!</span>
                </li>
                <li class="list-group-item" v-if="isOnSale">
                    <span class="badge badge-warning badge-pill">On Sale!</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
	// import the country data - later on we're going to fetch data from an API
	import data from '../data/data';

	export default {
		name: "CountryDetail",
        created(){
			// Set the simple parameters
			this.id = this.$route.params.id;
			this.name = this.$route.params.name;

			// fetch the correct country from the loaded data
            this.country = this.data.countries.find(c => c.id === +this.id);
        },
        data(){
			return {
				data
            }
        },
		methods: {
			getImgUrl(img) {
				return require('../assets/countries/' + img);
			}
		},
		computed: {
			isExpensive() {
				return this.country.cost > 4000;
			},
			isOnSale() {
				return this.country.cost < 1000;
			}
		}
	}
</script>

<style scoped>

</style>
