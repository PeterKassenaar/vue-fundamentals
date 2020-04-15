import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// bootstrap stuff for some styling
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue Composition API
import compositionApi from '@vue/composition-api'
Vue.use(compositionApi)

new Vue({
    render: h => h(App),
}).$mount('#app')
