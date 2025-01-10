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

router.beforeEach((to, from, next) => {
    // 1. Do something globally BEFORE entering a route, for instance setting the page title
    // Make sure to have a global .env file with a key and title.
    // Also see routes/index.js for the meta-information on the title per component
    const title = `${import.meta.env.VITE_APP_TITLE} - ${to.meta.title}`
    document.title = title || import.meta.env.VITE_APP_TITLE; // Fallback to app title;
    next(); // Don't forget to call next() to allow navigation

    // 2. Authenticate a user before entering a route
    // ...call authentication process...
    // return true | false, based on auth.
})

// 3. mounting the router to App
createApp(App)
    .use(router) // 'use' before 'mount'
    .mount('#app')
