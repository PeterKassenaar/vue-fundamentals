// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios';

const url = 'https://restcountries.eu/rest/v2/all';

export default new Vuex.Store({
    state: {
        // State for working with the shopping cart
        items: [],
        checkoutStatus: null,
        // State for working with the RestCountries API
        loadingStatus: 'notloading',
        countries: [],
        errors: []
    },
    mutations: {
        // Mutations for working with the Shopping Cart
        ADD_TO_CART(state, payload) {
            state.items = [...state.items, payload]
        },
        REMOVE_FROM_CART(state, payload) {
            state.items = state.items.filter(item => item !== payload)
        },
        SET_CHECKOUT_STATUS(state, payload) {
            state.checkoutStatus = payload;
        },
        CLEAR_CART(state) {
            state.items = [];
        },
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
    actions: {
        // Actions for working with the Shopping Cart
        addCountryToCart(context, country) {
            context.commit('SET_CHECKOUT_STATUS', null);
            context.commit('ADD_TO_CART', country);
            // TODO: check if country is already in cart, the increment the number, instead of just adding it again
        },
        removeCountryFromCart(context, country) {
            context.commit('SET_CHECKOUT_STATUS', null);
            context.commit('REMOVE_FROM_CART', country);
        },
        checkout(context) {
            context.commit('SET_CHECKOUT_STATUS', 'successful');
            console.log('Checked out. TODO: Save in database: ', [...this.state.items]);
            context.commit('CLEAR_CART');
        },
        clearCart(context) {
            context.commit('CLEAR_CART');
        },
        resetStatus(context){
            context.commit('SET_CHECKOUT_STATUS', null)
        },
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
    getters: {
        // Getters for working with the Shopping Cart
        cartProducts: (state) => {
            return state.items;
        },
        cartTotalPrice: (state) => {
            let totalPrice = 0;
            state.items.forEach(item => {
                totalPrice += item.cost;
            });
            return totalPrice;
            // if you like the .reduce function you could do it this way:
        },
        // Getters for working with the RestCountries API
        // only return the requested country from the store
        getCountry: (state) => (name) => {
            return state.countries.find(c => c.name === name)
        }
    }
})
