// src/routes.js
import { createRouter, createWebHistory } from 'vue-router';


// Importez les composants associés à chaque route
import Home from './views/Home.vue';
import Chapitre from './views/Chapitre.vue';
import Ecrire from './views/Ecrire.vue';
import Parametre from './views/Parametre.vue';
import RomanDetail from './views/RomanDetail.vue';
import LoginForm from './views/LoginForm.vue';
import RegisterFrom from './views/RegisterFrom.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/chapitre', component: Chapitre },
  { path: '/ecrire', component: Ecrire },
  { path: '/parametre', component: Parametre },
  { path: '/romandetail', component: RomanDetail },
  { path: '/auth/login', component: LoginForm },
  { path: '/auth/register', component: RegisterFrom },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;