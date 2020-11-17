// ../router/index.js
import Vue from 'vue'
import Router from 'vue-router'

// import the required components
import FileNotFound from "../components/404Component";
import CityList from "@/components/CityList";
import CityAdd from "@/components/CityAdd";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        // define all routes here....
        {
            path: '/',
            name: 'home',
            component: CityList
        },
        {
            path: '/add',
            name: 'add',
            component: CityAdd
        },
        {
            // catch all route
            path:'*',
            name:'404',
            component: FileNotFound
        }
    ]
})
