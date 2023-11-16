<template class="bg-white h-full">
  <div class="bg-white h-full">
    <div class="h-24 bg-gray-800 flex items-center justify-center">
      <h1 class="font-bold text-4xl text-white">Paramètres</h1>
    </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-6">Genres préférés</h3>
    <div
      class="mt-4 mr-36 ml-36 bg-blue-400 flex items-center justify-center h-full rounded-lg"
    >
      <div class="mt-6">
        <div class="">
          <div class="mt-4">
            <span class="font-sans text-white text-sm"
              >Sélectionne au moins un genre.</span
            >
            <span class="font-sans text-white text-sm"
              >Ces informations seront utilisées pour personnaliser ton
              expérience.</span
            >
          </div>
          <div class="genres-select-container items-between">
            <div class="flex text-white mt-6 w-full">
              <label class="inline-flex items-center ml-24 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/fantasy.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Fantaisie</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
              <label class="inline-flex items-center ml-60 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/romance.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Romance</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
            </div>
            <div class="flex text-white mt-6 w-full">
              <label class="inline-flex items-center ml-24 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/action.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Action</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
              <label class="inline-flex items-center ml-60 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/adventure.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Adventure</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
            </div>
            <div class="flex text-white mt-6 w-full">
              <label class="inline-flex items-center ml-24 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/historical.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Historique</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
              <label class="inline-flex items-center ml-60 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/horror.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Horreur</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
            </div>
            <div class="flex text-white mt-6 w-full">
              <label class="inline-flex items-center ml-24 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/sci_fi.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Sci-fi</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
              <label class="inline-flex items-center ml-60 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/thriller.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Thiller</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
            </div>
            <div class="flex text-white mt-6 w-full">
              <label class="inline-flex items-center ml-24 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/youth_literature.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Littérature Jeunesse</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
              <label class="inline-flex items-center ml-60 w-1/2">
                <div class="w-1/4 flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/diverse_fiction.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Littérature Générale</span>
                </div>
                <input type="checkbox" class="h-4 w-1/4 ml-24" />
              </label>
            </div>
            <!-- Ajoutez des étiquettes similaires pour les autres genres -->
          </div>
        </div>
        <div class="mt-4">
          <button class="text-white bg-green-700 px-8 py-2 text-xl" disabled>
            Valider
          </button>
        </div>
      </div>
    </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-6">Liste noire de tags</h3>
    <div
      class="mt-4 mr-36 ml-36 bg-blue-400 h-52 flex items-center justify-center rounded-lg"
    >
      <div class="mt-6">
        <div class="">
          <div class="mt-4">
            <span class="font-sans text-white text-sm"
              >Sélectionne les tags que tu souhaites blacklister. Les web-novels
              contenant ces tags ne te seront plus affichés.</span
            >
          </div>
          <div class="genres-select-container mt-4 flex items-between">
            <input
              class="w-full h-10 px-4 py-2 mr-24 ml-24 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              autocomplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="false"
              aria-haspopup="true"
              id="tagInputId"
              placeholder="Rechercher un tag"
            />
          </div>
        </div>
        <div class="mt-4">
          <button class="text-white bg-green-700 px-8 py-2 text-xl" disabled>
            Valider
          </button>
        </div>
      </div>
    </div>

    <h3 class="font-bold text-gray-700 text-2xl mt-6">Contenu adulte</h3>
    <div class="mt-4 mr-36 ml-36 bg-blue-400 h-24 rounded-lg">
      <div class="mt-6">
        <div class="">
          <div class="genres-select-container items-between">
            <div class="flex text-white mt-6 w-full">
              <label class="inline-flex items-center ml-24 w-1/2 mt-6">
                <div class="w-full flex">
                  <img
                    height="24"
                    width="24"
                    src="../assets/mature.svg"
                    alt="fantasy"
                    class="mr-2"
                  />
                  <span class="font-sans">Voir du contenu adulte</span>
                </div>
              </label>
              <label class="inline-flex items-center mt-6 ml-60 w-1/2">
                <label
                  class="flex items-center relative w-max cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"
                  />
                  <span
                    class="absolute font-medium text-xs uppercase right-1 text-gray-700"
                  >
                    OFF
                  </span>
                  <span
                    class="absolute font-medium text-xs uppercase right-8 text-gray-700"
                  >
                    ON
                  </span>
                  <span
                    class="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200"
                  />
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-6"></div>
  </div>
</template>
  
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
  
<style scoped>
/* Ajoutez des styles personnalisés pour le slider ici */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

input:checked {
  background-color: #22c55e; /* bg-green-500 */
}

input:checked ~ span:last-child {
  --tw-translate-x: 1.75rem; /* translate-x-7 */
}
</style>
  