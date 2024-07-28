<template>

<div class="flex ">
  <!-- Barre latérale -->
  <div class="lg:w-2/4   hidden md:block">
    <!-- Logo du tableau de bord -->
    <router-link class="" to="/home">
        <img src="../assets/young-woman-working-from-modern-home.jpg" alt="Logo" class="w-full h-screen" />
        
      </router-link>
    
  </div>

  <!-- Contenu du tableau de bord -->
  <div class="lg:w-2/4 p-4 w-full">
    <slot/>
  </div>
</div>
</template>

<script>
export default {
  name: 'RegisterLayout',
};
</script>



