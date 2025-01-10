// router/index.js
// import the required components
import VacationPicker from "@/components/VacationPicker.vue";
import UpdateCountry from "@/components/UpdateCountry.vue";
import FileNotFound from "@/components/FileNotFound.vue";

// alternative for lazy loading
// const AddCountry = () => import('../components/AddCountry.vue')

export const routes = [
    // define all routes here....
    {
        path: '/',
        name: 'home',
        component: VacationPicker
    },
    {
        path: '/add',
        name: 'add',
        component: () => import('@/components/AddCountry.vue'), // lazy loaded component
    },
    {
        path: '/update',
        name: 'update',
        component: UpdateCountry
    },
    {
        path: '/detail/:id/:name',
        name: 'detail',
        component: () => import('@/components/CountryDetail.vue'),
    },
    {
        // catch all route
        path: '/:pathMatch(.*)*',
        name: '404',
        component: FileNotFound
    }
]
