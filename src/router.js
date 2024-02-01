// src/routes.js
import { createRouter, createWebHistory } from 'vue-router';
import loadingService from '@/services/loadingService';

// Importez les composants associés à chaque route
import Home from './views/Home.vue';
import AddChapitre from './views/AddChapitre.vue';
import Ecrire from './views/Ecrire.vue';
import Lecture from './views/Lecture.vue';
import Lire from './views/Lire.vue';
import Notification from './views/Notification.vue';
import Propos from './views/Propos.vue';
import Enoncer from './views/Enoncer.vue';
import bibliotheque from './views/bibliotheque.vue';
import Auteur from './views/Auteur.vue';
import politique from './views/politique.vue';
import auteurDetail from './views/auteurDetail.vue';
import Concours from './views/Concours.vue';
import histoireJeux from './views/histoireJeux.vue';
import Conditions from './views/Conditions.vue';
import Faq from './views/Faq.vue';
import DashBord from './views/DashBord.vue';
import Statistique from './views/Statistique.vue';
import HistoireDash from './views/HistoireDash.vue';
import AjouterRoman from './views/AjouterRoman.vue';
import UpdateRoman from './views/UpdateRoman.vue';
import Chapitre from './views/Chapitre.vue';
import Contacte from './views/Contacte.vue';
import Parametre from './views/Parametre.vue';
import RomanDetail from './views/RomanDetail.vue';
import LoginForm from './views/LoginForm.vue';
import Profils from './views/Profils.vue';
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
  { path: '/lire/:id/:index', component: Lire },
  { path: '/auteurs', component: Auteur },
  { path: '/concours', component: Concours },
  { path: '/auteurdetail', component: auteurDetail },
  { path: '/parametre', component: Parametre },
  { path: '/bibliotheque/:id', component: bibliotheque },
  { path: '/romandetail/:id', component: RomanDetail },
  
  { path: '/contacte', component: Contacte },
  { path: '/condiction', component: Conditions },
  { path: '/faq', component: Faq },
  { path: '/histoirejeux', component: histoireJeux },
  { path: '/politique', component: politique },
  {
    path: "/profils",
    component: Profils
  },
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
  { path: '/romandeupdate/:id',
   component: UpdateRoman,
   meta: { layout: DashLayout, public: false },
   },
  {
    path: "/addchapitre/:id",
    component: AddChapitre,
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
  
  router.beforeEach((to, from, next) => {
    
    loadingService.setLoading(true);
    setTimeout(() => {
      loadingService.setLoading(false);
    }, 3000);
    next();
  });
  

  export default router;