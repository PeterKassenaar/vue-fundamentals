import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    routes:[
        {
            path: '/clients',
            name: 'clients',
            component:()=> import(/* webpackChunkName: "clients" */ './modules/clients/Clients.vue')
        }
    ]
})
