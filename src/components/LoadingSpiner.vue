<!-- LoadingIndicator.vue -->
<template>
    <div class="loader-spinner"></div>
</template>


<style>



.loader-spinner {
  border: 5px solid #ece817; /* Couleur de la bordure */
  border-top: 8px solid transparent; /* Couleur transparente pour créer l'effet de rotation */
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
