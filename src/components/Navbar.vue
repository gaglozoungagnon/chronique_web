<template>
    <nav class="bg-slate-50 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div>
          <img src="../assets/WADOUNOU.png" alt="Logo" class="h-12 w-auto" />
        </div>
        
        <!-- Barre de recherche -->
        <div class="rounded-full p-1 box-border border border-orange-500 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center py-1">
                    <input type="text" class=" rounded-full px-4 focus:outline-none w-full " placeholder="Search here ......." />
                    <button class="text-sm bg-green-600 py-2 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">Search</button>
         </div>
        <!-- Menu -->
        <ul class="flex space-x-4 text-lg  font-bold">
          <li><router-link class="text-slate-950 hover:text-gray-300" active-class="text-green-600" to="/">Home</router-link></li>
          <li><router-link class="text-slate-950 hover:text-gray-300" active-class="text-green-600" to="/commande">Commande</router-link></li>
          <li><router-link class="text-slate-950 hover:text-gray-300" active-class="text-green-600" to="/reservation">Reservation</router-link></li>
          <li><router-link class="text-slate-950 hover:text-gray-300" active-class="text-green-600" to="/restaurant">Restaurant</router-link></li>
          <li><router-link class="text-slate-950 hover:text-gray-300" active-class="text-green-600" to="/repas">Repas</router-link></li>
         
          
        </ul>

        <div class="flex items-center justify-end space-x-6  text-lg  font-bold ">
          <router-link class="poppins" active-class="text-green-600" to="/auth/login">Se connecter</router-link>
          <router-link class=" bg-green-600 px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" to="/auth/register">S'inscrire</router-link>
         
         </div>

      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>



  