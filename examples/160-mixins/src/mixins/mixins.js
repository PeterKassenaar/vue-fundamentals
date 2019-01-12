// mixins.js - export default mixins in this application.
// They can be loaded into every component that needs them.
export default {
	// Using the 'created' lifecycle hook in a mixin. See
	// https://vuejs.org/v2/guide/mixins.html for details
	created(){
		console.log('The component is created - lifecycle hook mixin called');
	},
}
