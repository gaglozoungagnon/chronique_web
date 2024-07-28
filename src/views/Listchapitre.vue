<template>
  <div class="relative shadow-md sm:rounded-lg bg-white mt-9">
    <div class="flex justify-start">
      <router-link class="" :to="`/addchapitre/${this.romanID}`">
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 whitespace-nowrap mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Ajouter un chapitre
        </button>
      </router-link>
    </div>

    <div class="flex">
      <div class="w-full">
        <div class="bg-gray-800 rounded-lg mt-4">
          <div class="h-6"></div>

          <div
            v-for="(chapitre, index) in chapitres"
            :key="index"
            class="flex items-center justify-between"
          >
            <div>
              
                <p class="text-xl font-sans ml-9 mt-6 text-white">
                  Chapitre {{ chapitre.number }} - {{ chapitre.name }}
                </p>
          
            </div>
            <div class="flex text-white mr-6">
              <router-link class="" :to="`/UpdateChapitre/${chapitre.id}`">
                <p class="ml-2 rounded-lg bg-green-600 px-2 py-2">
                  Modifier
                </p>
              </router-link>
              <button
                class="text-red-500 font-medium ml-2"
                @click="deleteBookModal(chapitre.id)"
              >
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 pr-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Supprimer
                </span>
              </button>
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
    @delete="bookDelete()"
  >
    <template #header>Supprimer</template>
    <template #body> Vous voulez suppprimer le chapitre </template>
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
      filter: "",
      deleteBookID: "",
      chapitres: [],
    };
  },
  computed: {
    filteredBooks() {
      const searchTerm = this.filter.toLowerCase();

      // Vérifiez si filter est non vide avant de filtrer les livres
      if (searchTerm.trim() !== "") {
        return this.books.filter((book) => {
          const authors = book.authors.toLowerCase();
          return authors.includes(searchTerm);
        });
      } else {
        // Si filter est vide, retournez un tableau vide
        return [];
      }
    },
  },
  created() {
    this.profile();
    this.book();
  },
  mounted() {
    this.romanID = this.$route.params.id;
  },
  methods: {
    deleteRepasModal() {
      this.showDeleteRepasModal = !this.showDeleteRepasModal;
    },
    deleteBookModal(id) {
       this.showDeleteRepasModal = !this.showDeleteRepasModal;
      this.deleteBookID = id;
      
    },
    async bookDelete() {
      try {
        const response = await axios.delete(`/api/chapters/${this.deleteBookID}`);
        if (response.status == 204) {
          this.books = response.data.data;
           this.showDeleteRepasModal = false;
          this.$router.push("/histoiredash");
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.filter = response.data.data.name;
          console.log(this.filter);
        }
      } catch (error) {
        console.error(error.response.data);
      }
    },
    async book() {
      console.log(this.romanID);
      try {
        const response = await axios.get(`/api/books/${this.$route.params.id}`);
        if (response.data) {
          this.books = response.data.data;
          this.chapitres = this.books.chapters;
          console.log(this.chapitres);
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
