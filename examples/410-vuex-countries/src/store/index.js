// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios';

const url = 'https://restcountries.eu/rest/v2/all';

export default new Vuex.Store({
    state: {
        loadingStatus: 'notloading',
        countries: [],
        errors: []
    },
    mutations: {
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
    actions: {
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
    getters: {
        // only return the requested country from the store
        getCountry: (state) => (name) => {
            return state.countries.find(c => c.name === name)
        }
    }
})
