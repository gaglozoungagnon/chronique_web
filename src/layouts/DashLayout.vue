<template>
  <div class="flex h-screen">
    <!-- Barre latérale -->
    <div class="w-1/7 shadow-2xl  bg-gray-800 text-gray-700">
      <!-- Logo du tableau de bord -->
      <router-link class="flex items-center hidden md:block" to="/home">
        <img src="../assets/AP.png" alt="Logo" class="h-12 mt-4 w-auto " />
      </router-link>
      <div @click="isOpen = !isOpen" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current bg-white">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div
        :class="isOpen ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
      <!-- Menu de la barre latérale -->
      <ul class="py-4 mt-6">
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-2xl font-bold text-white hover:text-gray-300"
            active-class="text-green-600"
           @click="isOpen = !isOpen"
            to="/statistique"
            >Dashboard</router-link
          >
        </li>
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white font-bold hover:text-gray-300"
            active-class="text-green-600"
            @click="isOpen = !isOpen"
            to="/histoiredash"
            >Vos histoires</router-link
          >
        </li>
       <!-- <li class="px-4 py-2 hover:bg-gray-600">
          <a
            class="text-white font-bold hover:text-gray-300"
            active-class="text-green-600"
            href="#"  target="_blank" rel="noopener noreferrer"
            >Guide des bonnes pratiques
          </a>
        </li>
        <li class="px-4 py-2 hover:bg-gray-600">
          <a
            class="text-white font-bold hover:text-gray-300"
            active-class="text-green-600"
            href="#"  target="_blank" rel="noopener noreferrer"
            >Politique de retrait
          </a>
        </li>-->
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white font-bold hover:text-gray-300"
            active-class="text-green-600"
            to="/home"
            >Aller au site</router-link
          >
        </li>
      </ul>
      </div>
    </div>

    <!-- Contenu du tableau de bord -->
    <div class="w-full p-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      isOpen: false,
    };
  },
};

</script>
