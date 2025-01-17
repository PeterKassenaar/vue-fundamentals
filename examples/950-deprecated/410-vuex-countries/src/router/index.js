// ../router/index.js
import Vue from 'vue'
import Router from 'vue-router'

// import the required components
import VacationPicker from "../components/VacationPicker.vue";
import CountryDetail from "../components/CountryDetail.vue";
import ApiComponent from "../components/ApiComponent.vue";
import ApiCountryDetail from "../components/ApiCountryDetail.vue";
import ApiVuexComponent from "../components/ApiVuexComponent.vue";
import ApiVuexDetail from "../components/ApiVuexDetail.vue";
//
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		// define all routes here....
		{
			path: '/',
			name: 'home',
			component: VacationPicker,
			// child route - the clicked item is shown inside a nested <router-view>
			children: [
				{
					path: 'detail/:id',
					name: 'detail',
					component: CountryDetail
				},
			]
		},
		// Component for using to the country API RestCountries
		{
			path: '/api',
			name: 'api',
			component: ApiComponent
		},
		{
			path: '/api-detail/:name',
			name: 'api-detail',
			component: ApiCountryDetail
		},
		{
			path: '/vuex',
			name: 'vuex',
			component: ApiVuexComponent
		},
		{
			path: '/vuex-detail/:name',
			name: 'vuex-detail',
			component: ApiVuexDetail
		}
	]
})
