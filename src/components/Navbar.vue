<template>
  <nav class="bg-black text-white shadow-xl">
    <div class="container mx-auto flex justify-between items-center py-4 shadow-xl">
      <router-link class="flex items-center" to="/">
        <img src="../assets/AP.png" alt="" class="w-full h-12 ml-9" />
      </router-link>

      <div class="flex items-center space-x-4 mr-32">
        <router-link class="text-white hover:text-gray-700 transition duration-300" to="/bibliotheque">Bibliothéque
        </router-link>
        <router-link class="text-white hover:text-gray-700 transition duration-300" to="/auteurs">Nos auteurs
        </router-link>

        <div class="relative inline-block text-left">
          <button @click="toggleDropdown" @mousedown.stop
            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
            Parcourir

            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true">
              <path fill-rule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="isDropdownOpen" id="dropdown-menu"
            class="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
              <div class="py-2 flex" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                <div v-for="(groupe, index) in groupesCategories" :key="index">
                  <a v-for="(category, categoryIndex) in groupe" :key="categoryIndex"
                    class="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                    role="menuitem">
                    {{ category.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="rounded-full text-gray-900 p-1 border border-gray-300 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center py-1">
          <input type="text" class="rounded-full px-4 focus:outline-none w-full bg-white text-gray-900"
            placeholder="Recherche ......." />
          <button
            class="text-sm bg-white border border-gray-300 text-gray-900 py-2 px-6 rounded-full poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
            Recherche
          </button>
        </div>
      </div>

      <div class="flex items-center mr-4 space-x-4">
        <router-link class="text-white hover:text-gray-700 transition duration-300" to="/lecture">Liste de
          lecture</router-link>
        <router-link class="text-white hover:text-gray-700 transition duration-300" to="/ecrire">Écrire</router-link>
        <router-link class="text-white hover:text-gray-700 transition duration-300" to="/parametre">
          <span class="material-icons-outlined"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
        </router-link>
        <router-link class="text-white hover:text-gray-700 transition duration-300" to="/notification">
          <span class="material-icons-outlined">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </span>
        </router-link>
        <div
          class="text-white border border-gray-300 rounded-full py-1 px-4 hover:bg-white hover:text-gray-900 transition duration-300"
          @click="showModalRepas = true">
          Se connecter
        </div>
      </div>
    </div>
  </nav>
  <TheModal width="w-full md:w-2/3 lg:w-1/3" :is-open="showModalRepas" @close-modal="showModalRepas = false">
    <template #header>Se connecter</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addContact()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-8">
                  <a href="{{ url('/auth/google') }}" class="bg-blue-500 text-white p-2 rounded ml-24">Se connecter avec
                    Google</a>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mail" />
                  <div class="relative mt-1">
                    <BaseInput class="mt-2" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mot de passe" />
                  <BaseInput id="language" class="mt-2" />
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="hidden sm:flex sm:items-start">
                    <div class="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel for="remember" class="text-sm font-medium text-primary-normal dark:text-gray-300">Se
                        souvenir de moi</BaseLabel>
                      <a href="/auth/forgot-password" class="text-sm font-medium ml-32">
                        Mot de passe oublie
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="hidden sm:flex sm:items-start">
                    <div class="ml-1 text-sm">
                      <BaseLabel for="remember" class="text-sm font-medium text-primary-normal dark:text-gray-300 ml-32">
                        Pas encore de compte</BaseLabel>
                      <a href="/auth/register"
                        class="font-sans text-blue-700 hover:underline dark:text-primary-500 ml-36 mt-2">
                        Inscrivez vous ici</a>
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
import TheModal from "./TheModal.vue";
import BaseInput from "./BaseInput.vue";
import BaseLabel from "./BaseLabel.vue";
import AddModalFooter from "./AddModalFooter.vue";
import { mapState } from "vuex";
export default {
  name: "Navbar",
  components: {
    BaseLabel,
    BaseInput,
    TheModal,
    AddModalFooter,
  },
  data() {
    return {
      isDropdownOpen: false,
      showModalRepas: false,
      categoriesParGroupe: 4
    };
  },
  created() {
    this.fetchCategories();
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
    groupesCategories() {
      const groupes = [];
      for (let i = 0; i < this.categories.length; i += this.categoriesParGroupe) {
        groupes.push(this.categories.slice(i, i + this.categoriesParGroupe));
      }
      return groupes;
    }
  },
  methods: {
    async fetchCategories() {
      this.$store.dispatch("categories/fetchCategories");
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>


  