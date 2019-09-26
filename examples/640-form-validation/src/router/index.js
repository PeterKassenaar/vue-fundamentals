// Router stuff
import Vue from 'vue';
import Router from 'vue-router';

// Components
import BasicValidation from "../components/BasicValidation";
import CustomValidation from "../components/CustomValidation";

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: BasicValidation //() => import('../components/BasicValidation.vue')
		},
		{
			path: '/custom',
			component: CustomValidation //() => import('../components/CustomValidation.vue')
		},
		{
			// redirect to homepage if 404
			path: '*',
			redirect: '/'
		}
	]
})
