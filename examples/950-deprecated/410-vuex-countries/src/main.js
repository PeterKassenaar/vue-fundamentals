// main.js
import Vue from 'vue';
import App from './App.vue';

// Bootstrap styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import router stuff
import router from './router'

// import vuex stuff
import store from './store'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
