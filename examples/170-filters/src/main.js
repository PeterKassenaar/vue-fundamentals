import Vue from 'vue';
import App from './App.vue';

// Bootstrap styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

// global filters
import './filters/filters.js'

new Vue({
  render: h => h(App),
}).$mount('#app');
