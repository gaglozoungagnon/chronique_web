// src/routes.js
import { createRouter, createWebHistory } from 'vue-router';


// Importez les composants associés à chaque route
import Home from './views/Home.vue';
import Restaurant from './views/Restaurant.vue';
import Repas from './views/Repas.vue';
import Reservation from './views/Reservation.vue';
import Commande from './views/Commande.vue';
import RestaurantDetail from './views/RestaurantDetail.vue';
import LoginForm from './views/LoginForm.vue';
import RegisterFrom from './views/RegisterFrom.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/restaurant', component: Restaurant },
  { path: '/repas', component: Repas },
  { path: '/reservation', component: Reservation },
  { path: '/commande', component: Commande },
  { path: '/restaurantdetail', component: RestaurantDetail },
  { path: '/auth/login', component: LoginForm },
  { path: '/auth/register', component: RegisterFrom },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;