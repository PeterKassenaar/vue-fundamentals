<template>
    <div>
        <h2>Country Details</h2>
        <div v-if="country">
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
                <li class="list-group-item">Visit this country: ${{ country.cost}}</li>
                <li class="list-group-item" v-if="isExpensive">
                    <span class="badge badge-danger badge-pill">Expensive!</span>
                </li>
                <li class="list-group-item" v-if="isOnSale">
                    <span class="badge badge-warning badge-pill">On Sale!</span>
                </li>
                <li class="list-group-item text-center">
                    <button class="btn btn-outline-primary"
                            @click="addCountryToCart(country)">
                        Add to cart
                    </button>
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
        created() {
            // Set the simple parameters
            this.id = this.$route.params.id;

            // fetch the correct country from the loaded data
            this.country = this.data.countries.find(c => c.id === +this.id);
        },
        data() {
            return {
                data,
                country: null
            }
        },
        // Update nested view, Method 2 - Create a watcher.
        // The component is updated on route change.
        watch: {
            '$route'(to, from) {
                console.log(to, from); // logging, so you can see what's going on
                this.id = to.params.id;
                this.country = this.data.countries.find(c => c.id === +this.id);
            }
        },
        // Update nested view, Method 3 - use the beforeRouteUpdate() method,
        // introduced in Vue 2.2.
        // beforeRouteUpdate(to, from, next) {
        // 	this.id = to.params.id;
        // 	this.country = this.data.countries.find(c => c.id === +this.id);
        // 	next();
        // },
        methods: {
            getImgUrl(img) {
                return require('../assets/countries/' + img);
            },
            addCountryToCart(country) {
                this.$store.dispatch('cart/addCountryToCart', country)
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
