<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 ">
    <!-- Arrière-plan obscurci -->
    <div class="fixed inset-0 bg-black opacity-50"></div>

    <!-- Contenu du modal -->
    <div class="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <!-- Bouton de fermeture du modal -->
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="closeModal">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <!-- Contenu du formulaire -->
      <form @submit.prevent="submitOrder">
        <h1 class="text-2xl font-semibold mb-4">Commande de repas</h1>

        <div class="mx-4 ">

        <div class="-mx-3 flex flex-wrap ">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="fName" class="mb-3 block text-xl font-sans">
                  Nom Complet
                </label>
                <input type="text" name="fName" id="fName" placeholder=" Nom Complet"
                  class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="lName" class="mb-3 block text-xl font-sans">
                  Contact
                </label>
                <input type="text" name="lName" id="lName" placeholder="Contact"
                  class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="fName" class="mb-3 block text-xl font-sans">
                  Adresse livraison
                </label>
                <input type="text" name="fName" id="fName" placeholder=" Adresse"
                  class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="lName" class="mb-3 block text-xl font-sans">
                  Decription
                </label>
                <input type="text" name="lName" id="lName" placeholder="Decription"
                  class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
          </div>
          
          
        </div>
        

        <!-- Bouton de soumission du formulaire -->
        <div class="">
          <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-600">Commander</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
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

<style>
/* Styles Tailwind CSS peuvent être ajoutés ici si nécessaire */
</style>
