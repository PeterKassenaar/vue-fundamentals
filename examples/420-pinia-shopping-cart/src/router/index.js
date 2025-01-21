import {createRouter, createWebHistory} from 'vue-router'
import VacationPicker from "@/components/VacationPicker.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VacationPicker,
    }
  ],
})

export default router
