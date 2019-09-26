import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Bootstrap & additional styles stuff
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';


// Import Vuelidate for use in the project.
// I created a plugin for that (essentially just
// a .js-file telling Vue to use Vuelidate).
import './plugins/vuelidate';

// Router stuff
import router from './router';

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
