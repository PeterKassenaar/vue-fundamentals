import { createApp } from 'vue'
import App from './App.vue'

import {createPinia} from "pinia";
// import store stuff
const pinia = createPinia();

// import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// 1. importing the router stuff
import {createRouter, createWebHistory} from "vue-router";
import {routes} from "@/routes/index.js";

// 2. creating the router
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
