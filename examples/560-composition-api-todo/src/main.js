import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';

// import Composition API - otherwise it won't be used in Vue 2.x applications!
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

new Vue({
  render: h => h(App),
}).$mount('#app')
