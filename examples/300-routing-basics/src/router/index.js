// ../router/index.js
import Vue from 'vue'
import Router from 'vue-router'

// import the required components
import VacationPicker from "../components/VacationPicker";
import AddCountry from "../components/AddCountry";
import UpdateCountry from "../components/UpdateCountry";
import CountryDetail from "../components/CountryDetail";
import FileNotFound from "../components/404Component";
//
Vue.use(Router);

export default new Router({
	routes: [
		// define all routes here....
		{
			path: '/',
			name: 'home',
			component: VacationPicker
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
		},
		{
			path: '/detail',
			name: 'detail',
			component: CountryDetail
		},
		{
			// catch all route
			path:'*',
			name:'404',
			component: FileNotFound
		}
	]
})
