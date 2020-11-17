import Vue from 'vue'
import App from './App.vue'

// firestore stuff
import {firestorePlugin} from "vuefire";
Vue.use(firestorePlugin)

// bootstrap stuff & font-awesome for icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

// router stuff
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
