<template>
  <div class="">
    <div class="custom-background ">
      <div class="flex ml-44 p-4">
        <img class="w-44 mt-4" src="../assets/image.webp" alt="" />

        <div class="my-3 space-y-2">
          <div class="flex mt-4">
            <button
              class="border border-white text-white px-4 py-1 rounded-xl ml-4"
            >
              <spam class="text-sm">Action</spam>
            </button>
            <button
              class="border border-white text-white px-4 py-2 ml-4 rounded-xl"
            >
              <spam class="text-sm">Fantaisie</spam>
            </button>
          </div>
          <p class="text-white text-2xl text-left ml-4 mt-2">Dra-Knight</p>

          <div class="flex items-center mt-2">
            <div class="text-white flex ml-4 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <p class="ml-2">71 Chapitre</p>
            </div>
            <div class="text-white flex w-full mr-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <spam class="ml-2">4.7 (162 notes)</spam>
            </div>
          </div>
          <div class="flex items-center mt-2">
            <div class="text-white flex w-full ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <spam class="ml-2">1.4k Chapitres lus</spam>
            </div>
            <div class="text-white flex w-full mr-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              <spam class="ml-2">184 Fans</spam>
            </div>
          </div>
          <div class="flex items-center mt-2">
            <router-link
              class="bg-green-600 ml-4 text-white px-12 py-2 flex focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
              to="/lire"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <spam class="ml-2">Lire</spam>
            </router-link>
            <button
              class="border border-white text-white flex px-12 py-2 ml-4 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>

              <spam class="ml-2">Ajouter</spam>
            </button>
            <button
              class="text-gray-700 flex px-12 py-2 ml-4 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
            ></button>
            <button
              class="text-white flex px-12 py-2 ml-4 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
            >
              Partager:
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white ">
      <div class="ml-44 mr-44 flex">
        <div class="mt-4 w-1/2 mr-32">
          <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">
            Synopsis
          </h3>
          <p class="text-gray-700 mt-2 text-left text-sm font-sans">
            Une histoire de voyage, d'aventures et d'apparences.
          </p>
          <p class="mt-4 text-gray-700 text-left text-sm font-sans">
            Se retrouvant à devoir la vie à un dragon amnésique qu'il devait
            chasser, Ewan Jesabell, chasseur de monstres, se voit contraint de
            lui servir de guide. Mais à peine partis, le duo se retrouve mêlé au
            Cercle, une société secrète, ainsi qu'au grand péril qui règne sur
            l'empire humain.
          </p>
          <boutton
            class="text-green-500 flex mt-2 flex focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
            <spam>Voir plus</spam>
          </boutton>

          <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">Tags</h3>
          <p class="mt-4 text-gray-700 text-left text-sm font-sans">
            #Ancien héros #Créatures magiques #Bêtes mythiques #Chasseurs
            #Chevaliers #Combats #Sous-entendu comique
          </p>
          <boutton
            class="text-green-500 flex mt-2 flex focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
            <spam>Voir plus</spam>
          </boutton>
          <div class="flex font-bold text-gray-700 text-2xl mt-4 text-left">
            <div>
              <p class="">Chapitres</p>
              <p class="text-sm font-sans mt-6 ml-4">71 Chapitres</p>
              <p class="text-sm font-sans mt-6 ml-9">
                Chapitre 1 - Par-delà les flammes.
              </p>
              <p class="text-sm font-sans mt-2 ml-9">6 janv. 2022</p>
            </div>
            <div>
              <p class="ml-24">Avis(0)</p>
            </div>
          </div>
        </div>
        <div class="mt-4 w-1/3 ">
          <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">
            Auteur
          </h3>
          <div class="mt-4 bg-black h-22 rounded-lg">
            <div class="flex text-white mt-6 w-full">
              <label class="inline-flex items-center w-1/2 mt-0">
                <div class="w-full flex">
                  <img
                    class="object-cover w-16 h-16 border-2 border-green-500 rounded-full ml-2"
                    src="https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652__340.jpg"
                  />
                  <span class="font-sans ml-2 mt-4">Albert GOMA</span>
                </div>
              </label>
              <label class="inline-flex items-center mt-2 w-1/2">
                <button
                  class="border border-green-500 text-white flex px-12 py-2 ml-4 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
                >
                  <spam class="ml-2">Soutenir</spam>
                </button>
              </label>
            </div>
          </div>
          <h3 class="font-bold text-gray-700 text-2xl mt-6 text-left">
            À propos de histoire
          </h3>
          <div class="mt-2 ">
            <div class="flex text-gray-300 items-center w-full bg-black h-12 rounded-lg">
              <label class="flex items-center mt-2 w-1/2">
                <span class="ml-6">Chapitre</span>
                <span class="ml-64">62</span>
              </label>
            </div>

            <div
              class="flex text-gray-300 mt-4 w-full bg-black h-12 rounded-lg"
            >
              <label class="inline-flex items-center w-1/2">
                <div class="w-full flex">
                  <span class="font-sans ml-6">Statut</span>
                </div>
              </label>
              <label class="inline-flex items-center w-1/2">
                <spam class="ml-24">En cours</spam>
              </label>
            </div>
            <div
              class="flex text-gray-300 mt-2 w-full bg-black h-12 rounded-lg"
            >
              <label class="inline-flex items-center w-2/3">
                <div class="w-full flex">
                  <span class="font-sans ml-6">Sortie du dernier chapitre</span>
                </div>
              </label>
              <label class="inline-flex items-center w-1/3">
                <spam class="ml-9"> 2 avr. 2023 </spam>
              </label>
            </div>
            <div
              class="flex text-gray-300 mt-2 w-full bg-black h-12 rounded-lg"
            >
              <label class="inline-flex items-center w-2/3">
                <div class="w-full flex">
                  <span class="font-sans ml-6">Fréquence de publication</span>
                </div>
              </label>
              <label class="inline-flex items-center w-1/3">
                <spam class="ml-2">1 Chp / 7 Jours</spam>
              </label>
            </div>
            <div
              class="flex text-gray-300 mt-2 w-full bg-white h-12 rounded-lg"
            >
              <label class="inline-flex items-center w-1/2">
                <button
                  class="bg-red-500 text-white flex px-6 py-2 ml-32 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
                  @click="showModalRepas = true"
                >
                  <spam class="ml-2">Signaler</spam>
                </button>
              </label>
            </div>
            <h3 class="font-bold text-gray-700 text-2xl mt-2 text-left">
              Tu aimeras sûrement
            </h3>
            <div class="flex ">
              <img class="w-24 " src="../assets/image.webp" alt="" />

              <div class="my-3 space-y-2">
                <div class="text-gray-800">
                  <p class="text-gray-800 text-xl text-left ml-4 font-bold">
                    Dra-Knight
                  </p>
                  <p class="text-sm text-left ml-4">Action</p>
                  <p class="text-sm text-left ml-4">
                    Les humains sont en voie d'extinction. Dans le désert de
                    Nahari, Syriel mène une vie simple, soumis aux mesures de
                    préservati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    <div class="h-9 "></div>
      
    </div>
  </div>
   <TheModal
    width="w-full md:w-2/3 lg:w-6/12"
    :is-open="showModalRepas"
    @close-modal="showModalRepas = false"
  >
    <template  #header >Signaler</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addContact()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
               
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="hidden sm:flex sm:items-start">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300"
                        >Spam </BaseLabel
                      >
                    </div>
                    <div class="flex items-center ml-80">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 ml-14 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300"
                        >Violation des droits d’auteurs </BaseLabel
                      >
                    </div>
                  </div>
                  
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="hidden sm:flex sm:items-start">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300"
                        >Discours ou symbole haineux </BaseLabel
                      >
                    </div>
                    <div class="flex items-center ml-56">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300"
                        >Contenu illégal ou préjudiciable  </BaseLabel
                      >
                    </div>
                  </div>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <AddModalFooter @cancel="showModalRepas = false" @send="addRepas()" />
    </template>
  </TheModal>
</template>
    
<script>
import TheModal from "../components/TheModal.vue";
import AddModalFooter from "../components/AddModalFooter.vue";
import BaseLabel from "../components/BaseLabel.vue";

export default {
  name: "App",
 components: {
    BaseLabel,
    
    TheModal,
    AddModalFooter,
  },
  data() {
    return {
      showModalRepas: false,
    };
  },
};
</script>    
<style scoped>
.custom-background {
  background-image: url("~@/assets/background.jpg");
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
    