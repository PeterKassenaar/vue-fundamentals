// router/index.js
// import the required components
import VacationPicker from "@/components/VacationPicker.vue";
import FileNotFound from "@/components/FileNotFound.vue";
import ApiComponent from "@/components/ApiComponent.vue";

export const routes = [
    // define all routes here....
    {
        path: '/',
        name: 'home',
        component: VacationPicker,
        // child route - the clicked item is shown inside a nested <router-view>
        children: [
            {
                path: ':id',
                name: 'detail',
                component: () => import('@/components/CountryDetail.vue')
            },
        ],
        meta: {title: 'Home'}
    },
    // Component for using to the country API RestCountries
    {
        path: '/api',
        name: 'api',
        component: ApiComponent
    },
    {
        path: '/api-search',
        name: 'api-search',
        component: () => import('@/components/ApiSearchCountry.vue')
    },
    {
        path: '/api-detail/:name',
        name: 'api-detail',
        component: () => import('@/components/ApiCountryDetail.vue')
    },
    {
        // catch all route
        path: '/:pathMatch(.*)*',
        name: '404',
        component: FileNotFound
    }
]
