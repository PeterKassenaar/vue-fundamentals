import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from "@/views/Contact";
import FileNotFound from "@/components/404Component";

// 1. Set the routing table
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: FileNotFound
  },
]

// 2. Create the router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// 3. Configure:  Dynamically set the page title (globally!) Not on local route
router.beforeEach((to) => {
  // Look at the root level .env-file for the APP_TITLE variable
  const docT = `${process.env.VUE_APP_TITLE} - ${to.name}` // use the name from the route, see above
  document.title = docT
});


// 4. Configured router is exported
export default router;
