// filters.js - global Vue filters
import Vue from 'vue';

// Defining a global filter, before creating the Vue instance
// This assigns a leading zero if id < 10
Vue.filter('formatId', value => {
	if (!value) return;
	return value >= 10 ? value : '0' + value
});

// Defining filter parameters
Vue.filter('currency', (value, locale, symbol) => {
	if (!value) return;
	return Intl.NumberFormat(locale, {
		style: 'currency',
		currency: symbol
	}).format(value)
});

// Invalid: it is forbidden to add HTML to values.
// In the UI the HTML-tags will be escaped
Vue.filter('mailto', value => {
	if (!value) return;
	return `<a href="mailto:${value}">${value}</a>`;
});
