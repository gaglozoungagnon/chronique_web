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
        <ul class="flex space-x-4 text-xl font-sans font-bold">
          <li><a href="#" class="text-slate-950  hover:text-gray-300">Home</a></li>
          <li><a href="#" class="text-slate-950 hover:text-gray-300">Commande</a></li>
          <li><a href="#" class="text-slate-950 hover:text-gray-300">Reservation</a></li>
          <li><a href="#" class="text-slate-950 hover:text-gray-300">Repas</a></li>
          <li><a href="#" class="text-slate-950 hover:text-gray-300">Restaurant</a></li>
          
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>



  