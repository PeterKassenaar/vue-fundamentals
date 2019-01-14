<template>
    <div>
        <h2>{{ country.name }}</h2>
        <ul class="list-group">
            <li class="list-group-item">{{ country.id}}
            <span class="float-right">
                <button @click="setRating(1)" class="btn btn-success btn-sm">+1</button>
                <button @click="setRating(-1)" class="btn btn-danger btn-sm">-1</button>
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

            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "CountryDetail",
		props: {
			// example props, including validation types
			country: {
				type: Object,
				required: true
			}
		},
		methods: {
			getImgUrl(img) {
				return require('../assets/countries/' + img);
			},
			setRating(value){
				// emit the rating up to the parent component
                this.$emit('rating', value);
            }
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
