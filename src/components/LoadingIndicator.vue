<!-- LoadingIndicator.vue -->
<template>
  <div v-if="loading" class="loading-overlay">
   <div class="loader-container">
    <div class="loader"></div>
  </div>

  </div>
</template>

<script>
import loadingService from '@/services/loadingService';

export default {
  computed: {
    loading() {
      return loadingService.getLoading();
    },
  },
};
</script>

<style>
/* Ajoutez du style pour l'overlay de chargement si nécessaire */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  border: 8px solid #3498db; /* Couleur de la bordure */
  border-top: 8px solid transparent; /* Couleur transparente pour créer l'effet de rotation */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
