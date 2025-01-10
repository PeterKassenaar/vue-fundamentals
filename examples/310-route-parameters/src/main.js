import {createApp} from 'vue'
import App from './App.vue'

// 0. Bootstrap styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. importing the router stuff
import {createRouter, createWebHistory} from "vue-router";
import {routes} from "@/routes/index.js";

// 2. creating the router
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 3. mounting the router to App
createApp(App)
    .use(router) // 'use' before 'mount'
    .mount('#app')
