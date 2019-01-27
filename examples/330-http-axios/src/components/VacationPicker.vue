<template>
    <div class="row">
        <div class="col-md-6">
            <h1>{{ header }}</h1>
            <ul class="list-group">
                <li class="list-group-item"
                    @click="showCountry(country)"
                    v-for="country in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{country.name}}
                </span>
                <!--Using <router-link> instead of a @click event handler. Both are valid-->
                <!--<router-link :to="{name:'detail', params: {id: country.id} }">-->
                <!--{{ country.id }} - {{country.name}}-->
                <!--</router-link>-->
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <!--The Nested router view here-->
            <!--Updating the child view, Method 1 - -->
            <!--bind a :key to the router-view. The component-->
            <!--will be destroyed and recreated on changing of the route. -->
            <!--Personally I don't think this is good, b/c its possible that this is -->
            <!--a very expensive operation on the DOM. But hey, it works.-->
            <!--<router-view :key="$route.fullPath"></router-view>-->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
	// import the country data
	import data from '../data/data';

	export default {
		name: 'VacationPicker',
		data() {
			return {
				data,
				header: 'Pick your next vacation'
			}
		},
		methods: {
			// a method for navigating to the specific country from code, instead of HTML
			showCountry(country) {
				console.log('navigate to ' + country.name);
				// navigate to next page using the parametrized route.
				// We now need an object notation to push the route. We can't use just
				// string concatenation, so this won't work: this.$router.push('/detail' + country.id + ...)
				this.$router.push({
					name: 'detail',
					params: {
						id: country.id,
						name: country.name
					}
				})
			}
		}
	}
</script>

<style scoped>

</style>
