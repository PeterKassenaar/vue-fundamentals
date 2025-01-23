

import { createApp } from 'vue'
import App from './App.vue'
// Or, in one take:
import {createPinia} from "pinia";
// import store stuff
const pinia = createPinia();

// import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App)
    .use(pinia)
    .mount('#app')
