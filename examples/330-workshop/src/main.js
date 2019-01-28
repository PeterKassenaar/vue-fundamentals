// main.js
import Vue from 'vue';
import App from './App.vue';

// Bootstrap styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import router stuff
import router from './router'

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
