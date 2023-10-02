// src/routes.js
import { createRouter, createWebHistory } from 'vue-router';


// Importez les composants associés à chaque route
import Home from './views/Home.vue';
import Restaurant from './views/Restaurant.vue';
import Repas from './views/Repas.vue';
import Reservation from './views/Reservation.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/restaurant', component: Restaurant },
  { path: '/repas', component: Repas },
  { path: '/reservation', component: Reservation },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;