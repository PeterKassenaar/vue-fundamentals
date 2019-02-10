// ../router/index.js
import Vue from 'vue'
import Router from 'vue-router'

// import the required components
import VacationPicker from "../components/VacationPicker";
import CountryDetail from "../components/CountryDetail";
import ApiVuexComponent from "../components/ApiVuexComponent";
import ApiVuexDetail from "../components/ApiVuexDetail";
import CounterComponent from "../components/CounterComponent";
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
		{
			path: '/vuex',
			name: 'vuex',
			component: ApiVuexComponent
		},
		{
			path: '/vuex-detail/:name',
			name: 'vuex-detail',
			component: ApiVuexDetail
		},
		{
			path: '/counter',
			name: 'counter',
			component: CounterComponent
		},
	]
})
