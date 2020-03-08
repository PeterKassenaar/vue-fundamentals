import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// main.js
// import Composition API
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

new Vue({
  render: h => h(App),
}).$mount('#app')
