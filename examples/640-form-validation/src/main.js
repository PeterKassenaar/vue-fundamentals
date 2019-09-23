import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Import Vuelidate for use in the project.
// I created a plugin for that (essentially just a .js-file telling Vue to use Vuelidate).
import './plugins/vuelidate';

// Bootstrap stuff
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  render: h => h(App),
}).$mount('#app');
