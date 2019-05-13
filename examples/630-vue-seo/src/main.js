import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
// importing vue-meta, to provide
// meta/SEO-information to pages and components
import Meta from 'vue-meta';

Vue.use(Meta);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
