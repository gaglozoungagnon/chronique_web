<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <!-- Arrière-plan obscurci -->
    <div class="fixed inset-0 bg-black opacity-50"></div>

    <!-- Contenu du modal -->
    <div class="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <!-- Bouton de fermeture du modal -->
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="closeModal">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Contenu du formulaire -->
      <form @submit.prevent="submitOrder">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-1/3 mx-auto my-auto mt-4 mb-4 box-shadow-all-sides">
          <h1 class="font-bold text-xl">Se connecter</h1>
          <div>
            <label class="block font-bold text-sm text-gray-700 text-left">Mail</label>
            <div class="mt-1">
              <BaseInput type="email" autocomplete="current-email" v-model="order.name" required />
            </div>
          </div>
          <div class="space-y-1 mt-5">
            <label class="block font-bold text-sm text-gray-700 text-left">Password</label>
            <div class="mt-1">
              <BaseInput type="password" autocomplete="current-password" v-model="order.meal" required />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="hidden sm:flex sm:items-start">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div class="ml-1 text-sm">
                <BaseLabel for="remember" class="text-sm font-medium text-primary-normal dark:text-gray-300">Se souvenir de moi</BaseLabel>
              </div>
            </div>

            <a href="/auth/forgot-password" class="text-sm font-medium text-primary-normal hover:underline dark:text-primary-500">
              Mot de passe oublié
            </a>
          </div>

          <button type="submit" class="bg-green-600 text-gray-700 px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
            Connexion
          </button>
        </div>
      </form>
      <p class="text-sm text-gray-500">
        Pas encore de compte
        <a href="/auth/register" class="font-sans text-blue-700 hover:underline dark:text-primary-500">Inscrivez-vous ici</a>
      </p>
    </div>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseLabel from "./BaseLabel.vue";


export default {
  props: {
    isOpen: Boolean,
  },
  components: {
    BaseLabel,
    BaseInput,
  
  },
  data() {
    return {
      order: {
        name: "",
        meal: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    submitOrder() {
      // Envoyer la commande au backend ou effectuer d'autres actions
      console.log("Commande soumise :", this.order);

      // Fermer le modal après avoir soumis la commande
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.box-shadow-all-sides {
  box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
}
</style>
