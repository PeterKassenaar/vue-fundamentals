import {createApp} from 'vue'
import App from './App.vue'

// Bootstrap styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// importing the router stuff
import {createRouter, createWebHistory} from "vue-router";
import {routes} from "@/routes/index.js";

// creating the router
const router = createRouter({
    history: createWebHistory(),
    routes
})

// mounting the router to App
createApp(App)
    .use(router) // 'use' before 'mount'
    .mount('#app')
