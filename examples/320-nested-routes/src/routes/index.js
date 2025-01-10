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
    {
        path: '/add',
        name: 'add',
        component: () => import('@/components/AddCountry.vue'), // lazy loaded component
        meta: { title: 'Add' }
    },
    {
        path: '/update',
        name: 'update',
        component: UpdateCountry,
        meta: { title: 'Update' }
    },
    {
        // catch all route
        path: '/:pathMatch(.*)*',
        name: '404',
        component: FileNotFound
    }
]
