// ../router/index.js
import Vue from 'vue'
import Router from 'vue-router'

// import the required components
import VacationPicker from "../components/VacationPicker";
import AddCountry from "../components/AddCountry";
import UpdateCountry from "../components/UpdateCountry";
import CountryDetail from "../components/CountryDetail";
import ApiComponent from "../components/ApiComponent";
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
			path: '/add',
			name: 'add',
			component: AddCountry
		},
		{
			path: '/update',
			name: 'update',
			component: UpdateCountry
		}
	]
})
