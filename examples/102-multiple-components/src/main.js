import Vue from 'vue'
import App from './App.vue'

// creating a global component
// (you don't do this very often in real applications)
Vue.component('ComponentA', {
	template: `<span>Hello World - this is component A</span>`
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
