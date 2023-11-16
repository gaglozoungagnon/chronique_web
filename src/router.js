// src/routes.js
import { createRouter, createWebHistory } from 'vue-router';


// Importez les composants associés à chaque route
import Home from './views/Home.vue';
import Chapitre from './views/Chapitre.vue';
import Ecrire from './views/Ecrire.vue';
import Lecture from './views/Lecture.vue';
import Lire from './views/Lire.vue';
import Notification from './views/Notification.vue';
import Propos from './views/Propos.vue';
import Enoncer from './views/Enoncer.vue';
import bibliotheque from './views/bibliotheque.vue';
import Auteur from './views/Auteur.vue';
import auteurDetail from './views/auteurDetail.vue';
import Concours from './views/Concours.vue';
import Conditions from './views/Conditions.vue';
import DashBord from './views/DashBord.vue';
import Statistique from './views/Statistique.vue';
import HistoireDash from './views/HistoireDash.vue';
import AjouterRoman from './views/AjouterRoman.vue';
import Contacte from './views/Contacte.vue';
import Parametre from './views/Parametre.vue';
import RomanDetail from './views/RomanDetail.vue';
import LoginForm from './views/LoginForm.vue';
import RegisterFrom from './views/RegisterFrom.vue';
import LoginLayout from './layouts/LoginLayout.vue';
import RegisterLayout from './layouts/RegisterLayout.vue';
import DashLayout from './layouts/DashLayout.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/chapitre', component: Chapitre },
  { path: '/ecrire', component: Ecrire },
  { path: '/lecture', component: Lecture },
  { path: '/notification', component: Notification },
  { path: '/enoncer', component: Enoncer },
  { path: '/propos', component: Propos },
  { path: '/lire', component: Lire },
  { path: '/auteurs', component: Auteur },
  { path: '/concours', component: Concours },
  { path: '/auteurdetail', component: auteurDetail },
  { path: '/parametre', component: Parametre },
  { path: '/bibliotheque', component: bibliotheque },
  { path: '/romandetail', component: RomanDetail },
  { path: '/contacte', component: Contacte },
  { path: '/condiction', component: Conditions },
  {
    path: '/auth/login',
    component: LoginForm,
    meta: { layout: LoginLayout, public: false },
  },
  {
    path: '/auth/register',
    component: RegisterFrom,
    meta: { layout: RegisterLayout, public: false }
  },
  {
    path: "/dash",
    component: DashBord,
    meta: { layout: DashLayout, public: false },
  },
  {
    path: "/addroman",
    component: AjouterRoman,
    meta: { layout: DashLayout, public: false },
  },
  {
    path: "/statistique",
    component: Statistique,
    meta: { layout: DashLayout, public: false },
  },
  {
    path: "/histoiredash",
    component: HistoireDash,
    meta: { layout: DashLayout, public: false },
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;