// router/index.js
// import the required components
import VacationPicker from "@/components/VacationPicker.vue";
import FileNotFound from "@/components/FileNotFound.vue";
import ApiComponent from "@/components/ApiComponent.vue";
import ComposableComponent from "@/components/ComposableComponent.vue";

// alternative for lazy loading
// const AddCountry = () => import('../components/AddCountry.vue')

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
                component:()=>  import('@/components/CountryDetail.vue')
            },
        ],
        meta: { title: 'Home' }
    },
    // Component for using http directly
    {
        path: '/api',
        name: 'api',
        component: ApiComponent
    },
    // Component for using an http composable functions
    {
        path: '/composable',
        name: 'composable',
        component: ComposableComponent
    },
    {
        // catch all route
        path: '/:pathMatch(.*)*',
        name: '404',
        component: FileNotFound
    }
]
