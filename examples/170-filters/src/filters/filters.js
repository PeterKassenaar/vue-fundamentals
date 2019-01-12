// filters.js - global Vue filters
import Vue from 'vue';

// Defining a global filter, before creating the Vue instance
// This assigns a leading zero if id < 10
Vue.filter('formatId', function (value) {
	if(!value)return;
	return value >= 10 ? value : '0' + value
});
