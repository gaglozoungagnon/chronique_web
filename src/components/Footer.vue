<template>
    <footer class="bg-black text-white h-44 shadow-lg">
      <div class="ml-80 ">
        <div class="flex flex-col md:flex-row ">
          <!-- Section de contact -->
          <div class="md:w-1/3 mt-9">
          <router-link class="" to="/">
              <img src="../assets/AP.png" alt="Logo" class="ml-24 w-2/4 h-12" /></router-link>
            <p class="mt-2">Connectez vous à vos auteurs préfèrés et</p>
            <p>voyagez à traves des pages d'histoires</p>
           
          </div>
  
 
          <!-- Contenu à gauche -->
          <h1 class="text-4xl font-bold border border-white mt-4"></h1>
        
          <!-- Réseaux sociaux -->
          <div class="  mt-12">
            <p class="mr-9">Suivez-nous</p>
            <ul class="flex space-x-4 ml-28 mt-1">
              <li><a href="#" class="text-white hover:text-gray-400"><svg fill="currentColor" viewBox="0 0 24 24" class="h-9 w-9" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a></li>
              <li><a href="#" class="text-white hover:text-gray-400"><svg fill="currentColor" viewBox="0 0 24 24" class="h-9 w-9" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a></li>
              <li><a href="#" class="text-white hover:text-gray-400"><svg fill="currentColor" viewBox="0 0 24 24" class="h-9 w-9" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg></a></li>
              <li><a href="#" class="text-white hover:text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-9 h-9 text-white" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg></a></li>
            </ul>
            <div class="flex ml-12">
            <p class="mr-1 mt-2">C.G.U Confidentialité  </p>
            <router-link class="" to="/faq">
            <p class="ml-4 mt-2">FAQ  </p>
             </router-link>
            <router-link class="" to="/propos">
            <p class="ml-4 mt-2">Apropos </p>
            </router-link>
            <router-link class="" to="/contacte">
            <p class="ml-4 mt-2">Nous contacter </p></router-link>
            <router-link class="" to="/condiction">
            <p class="ml-4 mt-2">Conditions d'utilisations </p></router-link>
            </div>
            <p class="ml-9">Top chronique @2023 Tous droits reservès</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  }
  </script>
  