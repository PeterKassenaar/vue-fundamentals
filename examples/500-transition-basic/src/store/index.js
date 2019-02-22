// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

// import the various modules
import counter from './modules/counter'
import countries from './modules/countries'
import cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		counter,
		countries,
		cart
	}
})
