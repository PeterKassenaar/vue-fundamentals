// countries.js - vuex store module on countries via REST API
import axios from 'axios';
const url = 'https://restcountries.com/v2/all';

export default {
	namespaced:true,
	state:{
		// State for working with the RestCountries API
		loadingStatus: 'notloading',
		countries: [],
		errors: []
	},
	mutations: {
		// Mutations for working with the RestCountries API
		SET_LOADING_STATUS(state, payload) {
			state.loadingStatus = payload;
		},
		SET_COUNTRIES(state, payload) {
			state.countries = payload;
		},
		CLEAR_COUNTRIES(state) {
			state.countries = []
		},
		ADD_ERROR(state, payload) {
			state.errors = [...state.errors, payload]
		}
	},
	actions:{
		// Actions for working with the RestCountries API
		fetchCountries(context) {
			// 1. Set loading status
			context.commit('SET_LOADING_STATUS', 'loading');
			// 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
			axios.get(url)
				.then(result => {
					context.commit('SET_LOADING_STATUS', 'notloading');
					context.commit('SET_COUNTRIES', result.data);
				})
				.catch(err => {
					context.commit('SET_LOADING_STATUS', 'notloading');
					context.commit('SET_COUNTRIES', []);
					context.commit('ADD_ERROR', err);
				})
		},
		clearCountries(context) {
			context.commit('CLEAR_COUNTRIES')
		}
	},
	getters:{
		// Getters for working with the RestCountries API
		// only return the requested country from the store
		getCountry: (state) => (name) => {
			return state.countries.find(c => c.name === name)
		}
	}
}
