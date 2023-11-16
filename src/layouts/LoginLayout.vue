<template>
 <!-- Barre latérale -->
  <div class=" h-screen  ">
    <!-- Logo du tableau de bord -->
    <router-link class=" " to="/">
       
        <img src="../assets/AFRIPLUMELOGO.jpg" alt="Logo" class="h-24  w-auto mx-auto my-auto mt-9" />
        
        
      </router-link>
  <!-- Contenu du tableau de bord -->
  <div class="w-full p-4">
    <slot/>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginLayout',
};
</script>

<style scoped>
.custom-background {
  background-image: url('~@/assets/hero.png');
  /* Remplacez 'votre-image.jpg' par le nom de votre image */
  background-size: cover;
  /* Ajustez la taille de l'image */
  background-repeat: no-repeat;
  background-position: center center;
  /* Centrez l'image */
  /* Ajoutez d'autres styles Tailwind CSS ou CSS personnalisés au besoin */
}

/* Ajoutez des styles personnalisés pour le slider ici */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
