<template>
    <div>
        <h2>{{ country.name }}</h2>
        <ul class="list-group">
            <li class="list-group-item">{{ country.id}}
                <span class="float-right">
                <button @click="setRating(1)" class="btn btn-success btn-sm">+1</button>
                <button @click="setRating(-1)" class="btn btn-danger btn-sm">-1</button>
                <button @click="setFav()" class="btn btn-dark btn-sm">Fav
                </button>
                    <span v-if="isFavorite">Favorite!</span>
            </span>
            </li>
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
            <li class="list-group-item">
                Price: {{ country.cost }}
                <button @click="order(country)"
                        class="btn btn-success">
                    Order now!
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
	// 1. import the eventbus, to publish events to:
	import EventBus from '../shared/eventBus'

	export default {
		name: "CountryDetail",
		props: {
			country: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				isFavorite: false
			}
		},
		methods: {
			order(country) {
				// 2. Order a country => publish an event on the EventBus.
				// The eventname itself can of course be a constant instead
				// of a string.
				EventBus.$emit('ORDER_COUNTRY', country);
				console.log('Event emitted for ::', country.name); // just logging
			},
            // existing functions...
			getImgUrl(img) {
				return require('../assets/countries/' + img);
			},
			setRating(value) {
				this.$emit('rating', value);
			},
			setFav() {
				this.isFavorite = !this.isFavorite;
				this.$emit('fav', this.isFavorite);
			},

		},
		computed: {
			isExpensive() {
				return this.country.cost > 4000;
			}
			,
			isOnSale() {
				return this.country.cost < 1000;
			}
		}
	}
</script>

<style scoped>

</style>
