<template>
  <nav class="bg-gray-900 text-white">
    <div class="container mx-auto flex justify-between items-center py-4">
      <router-link class="flex items-center" to="/">
        <img src="#" alt="" class="w-8 h-8" />
        <spam class="text-xl  font-bold">Top Chronique</spam>

      </router-link>

      <div class="flex items-center space-x-4">
        <router-link class="text-gray-300 hover:text-white transition duration-300" to="/">Accueil </router-link>
        <div class="relative" x-data="{ open: false }">
          <button @click="open = !open" aria-haspopup="true"
            class=" px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none">
            <div class="flex items-center">
              <span class="text-sm">Parcourir</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="w-4 h-4 ml-2 -mt-1">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
          
        </div>
        <div
          class="rounded-full bg-gray-800 text-gray-300 p-1  bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center py-1">
          <input type="text" class=" rounded-full px-4 focus:outline-none w-full bg-gray-800 text-gray-300 "
            placeholder="Search here ......." />
          <button
            class="text-sm bg-gray-800 text-gray-300 py-2 px-6 rounded-full  poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">Search</button>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <router-link class="text-gray-300 hover:text-white transition duration-300" to="/ecrire">Écrire</router-link>
        <router-link class="text-gray-300 hover:text-white transition duration-300" to="/parametre">
          <span class="material-icons-outlined"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
        </router-link>
        
        <router-link
            class="text-white border border-white rounded-full py-1 px-4 hover:bg-white hover:text-gray-900 transition duration-300" to="/auth/login">
            Me connecter
          </router-link>
       
      </div>
    </div>
  </nav>
</template>
  
<script>


export default {
  name: 'Navbar',

  isNavOpen: false,

};
</script>



  