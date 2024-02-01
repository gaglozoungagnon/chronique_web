<template>
  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white p-4 mt-9"
  >
    <div class="flex items-center justify-between pb-4">
      <label for="table-search" class="sr-only">Rechercher</label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          wire:model="search"
          class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Rechercher ..."
        />
      </div>
      <div>
        <router-link to="/addroman">
          <button
            class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Ajouter un roman
          </button>
        </router-link>
      </div>
    </div>
    <div class="flex" v-for="(book, index) in books" :key="index">
      <div class="w-full">
        <div class="bg-gray-800 h-52 rounded-lg mt-4">
          <div class="h-6"></div>
          <div >
            <div class="flex">
                <router-link class=""  :to="`/romandeupdate/${book.id}`">
              <div class="flex">
                <img
                  class="w-32 h-40 transform transition duration-300 hover:scale-105 relative ml-9"
                  :src="book.banner_desktop"
                  alt=""
                />
                <div class="">
                  <p class="text-white text-lg font-bold ml-4 text-left">
                    {{ book.name }}
                  </p>
                  <p class="text-white mt-2 text-lg font-bold ml-4 text-left">
                    {{book.chapters && book.chapters.length !== 0 ? book.chapters.length : '0 '}} chapitre
                  </p>
                  <p class="text-white mt-2 text-lg font-bold ml-4 text-left">
                    {{ book.status }} 
                  </p>
                  <p class="text-white mt-2 text-lg font-bold ml-4 text-left">
                    {{ book.status_publish }}
                  </p>
                  <p
                    class="text-white mt-2 text-lg font-sans ml-4 text-left whitespace-nowrap"
                  >
                    Assurez-vous d'avoir rempli toutes les conditions listées
                    dans la page de histoire
                  </p>
                </div>
              </div>
                </router-link>
              <div class="flex ml-auto text-white">
                <div>
                  <router-link class=""  :to="`/addchapitre/${book.id}`">
                    <button
                      class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 whitespace-nowrap mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Ajouter un chapitre
                    </button>
                  </router-link>
                </div>
                <router-link class="mr-4" to="/dash">
                  <p class="ml-2 rounded-lg bg-green-600 px-2 py-2">
                    Statistique
                  </p>
                </router-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mt-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                <p class="mt-2 ml-2 mr-4">Partager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteModalFooter
    width="w-full md:w-2/3 lg:w-1/2"
    :is-open="showDeleteRepasModal"
    @cancel="showDeleteRepasModal = !showDeleteRepasModal"
    @delete="deleteRepas()"
  >
    <template #header>Supprimer</template>
    <template #body> Vous voulez suppprimer ce repas </template>
  </DeleteModalFooter>
  <TheModal
    width="w-full md:w-2/3 lg:w-1/3"
    :is-open="showModalRepas"
    @close-modal="showModalRepas = false"
  >
    <template #header> Ajouter une histoire</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addRepas()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Nom de l'histoire" />
                  <BaseInput id="nom" v-model="addform.name" class="mt-2" />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Description" />
                  <BaseInput
                    id="language"
                    v-model="addform.description"
                    class="mt-2"
                  />
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
  <TheModal
    width="w-full md:w-2/3 lg:w-1/2"
    :is-open="showModalRepasUpdate"
    @close-modal="showModalRepasUpdate = false"
  >
    <template #header> Mettre à jour le Repas</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addContact()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-4">
                  <BaseLabel value="Nom " />
                  <BaseInput
                    id="nom"
                    v-model="addform.first_name"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-4">
                  <BaseLabel value="Prix" />
                  <BaseInput
                    id="prenom"
                    v-model="addform.last_name"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Type" />
                  <div class="relative mt-1">
                    <BaseInput v-model="phone" class="mt-2" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Description" />
                  <BaseInput
                    id="language"
                    v-model="addform.language"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Image" />
                  <BaseInput
                    id="language"
                    type="file"
                    v-model="addform.language"
                    class="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <AddModalFooter
        @cancel="showModalRepasUpdate = false"
        @send="addContact()"
      />
    </template>
  </TheModal>
</template>

<script>
import axios from "axios";
import DeleteModalFooter from "../components/DeleteModalFooter.vue";
import TheModal from "../components/TheModal.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import AddModalFooter from "../components/AddModalFooter.vue";
export default {
  name: "RepasDash",
  components: {
    DeleteModalFooter,
    TheModal,
    BaseLabel,
    BaseInput,
    AddModalFooter,
  },
  data() {
    return {
      addform: {
        categoris_id: "",
        name: "",
        description: "",
        prix: "",
        image_url: "",
      },
      alert: {
        type: "",
        message: "",
      },
      processing: false,
      showDeleteRepasModal: false,
      showModalRepas: false,
      showModalRepasUpdate: false,
      books: [],
      user: "",
      filter: '',
    };
  },
  computed: {
  filteredBooks() {
    const searchTerm = this.filter.toLowerCase();

    // Vérifiez si filter est non vide avant de filtrer les livres
    if (searchTerm.trim() !== '') {
      return this.books.filter((book) => {
        const authors = book.authors.toLowerCase();
        return authors.includes(searchTerm);
      });
    } else {
      // Si filter est vide, retournez un tableau vide
      return [];
    }
  }
},
  created() {
     this.profile();
    this.book();
  },
  methods: {
    deleteRepasModal() {
      this.showDeleteRepasModal = !this.showDeleteRepasModal;
    },
    async profile() {
    try {
      const response = await axios.get("/api/profile");
      if (response.data) {
        this.filter = response.data.name;
        console.log(this.filter);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  },
    async book() {
      try {
        const response = await axios.get("/api/books/user");
        if (response.data) {
          this.books = response.data.data;
          console.log(this.tags);
        }
      } catch (error) {
        console.log(error.data);
      }
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
    },
  },
};
</script>