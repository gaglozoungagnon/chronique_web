<template>
  <footer class="bg-black text-white lg:h-52 shadow-lg">
    <div class="lg:ml-80">
      <div class="lg:flex flex-col md:flex-row">
        <!-- Section de contact -->
        <div class="md:w-1/3 mt-9">
          <router-link class="" to="/">
            <img src="../assets/AP.png" alt="Logo" class="ml-24 w-2/4 h-12"
          /></router-link>
          <p class="mt-2">Connectez-vous à vos auteurs préférés et</p>
          <p>voyagez à travers les pages d'histoires.</p>
        </div>

        <!-- Contenu à gauche -->
        <h1 class="text-4xl font-bold border border-white mt-4"></h1>

        <!-- Réseaux sociaux -->
        <div class="lg:mt-9 mt-6">
          <div class="lg:ml-9">
            <p class="">Suivez-nous</p>
          </div>
          <ul class="flex space-x-4 ml-28 mt-1">
            
            <li>
              <a
                href="https://web.facebook.com/people/AfriPlume/61553397908968/?mibextid=PtKPJ9"
                target="_blank"
                class="text-white hover:text-gray-400"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-9 w-9"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
           
            <li>
              <a href="https://www.instagram.com/afriplume/" class="text-white hover:text-gray-400"
                ><svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-9 h-9 text-white"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@afriplume?_t=8l1Agpe0ga5&_r=1"
                target="_blank"
                class="text-white hover:text-gray-400"
              >
                <img
                  class="w-9 text-white"
                  src="../assets/tik-tok_3046133.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <div class="flex ml-24">
            <router-link class="" to="/contacte">
              <p class="lg:ml-2 mt-2">Nous contacter</p></router-link
            >
            <router-link class="" to="/propos">
              <p class="lg:ml-4 mt-2 ml-2">Apropos</p>
            </router-link>
          </div>
          <div class="flex lg:ml-12 ml-4">
            <router-link class="" to="/condiction">
              <p class="ml-4 mt-2">CGU</p></router-link
            >
            <router-link class="" to="/faq">
              <p class="ml-4 mt-2">FAQ</p>
            </router-link>
            <router-link class="" to="/politique">
              <p class="ml-2 mt-2">Politique de confidentialité</p></router-link
            >
          </div>
          <div class="lg:ml-12 mt-1 mr-4 lg:mr-0">
            <p>AfriPlume @2023 Tous droits reservès</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
