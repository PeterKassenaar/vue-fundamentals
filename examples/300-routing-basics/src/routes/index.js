// router/index.js
// import the required components
import VacationPicker from "@/components/VacationPicker.vue";
import AddCountry from "@/components/AddCountry.vue";
import UpdateCountry from "@/components/UpdateCountry.vue";
import CountryDetail from "@/components/CountryDetail.vue";
import FileNotFound from "@/components/FileNotFound.vue";

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
        component: AddCountry
    },
    {
        path: '/update',
        name: 'update',
        component: UpdateCountry
    },
    {
        path: '/detail',
        name: 'detail',
        component: CountryDetail
    },
    {
        // catch all route
        path: '/:pathMatch(.*)*',
        name: '404',
        component: FileNotFound
    }
]
