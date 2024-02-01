<template>
  <div class="flex h-screen">
    <!-- Barre latérale -->
    <div class="w-1/7 shadow-2xl  bg-gray-800 text-gray-700">
      <!-- Logo du tableau de bord -->
      <router-link class="flex items-center" to="/">
        <img src="../assets/AP.png" alt="Logo" class="h-12 mt-4 w-auto " />
      </router-link>

      <!-- Menu de la barre latérale -->
      <ul class="py-4 mt-6">
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-2xl font-bold text-white hover:text-gray-300"
            active-class="text-green-600"
            to="/statistique"
            >Dashboard</router-link
          >
        </li>
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white font-bold hover:text-gray-300"
            active-class="text-green-600"
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
            to="/"
            >Aller au site</router-link
          >
        </li>
      </ul>
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
};
</script>
