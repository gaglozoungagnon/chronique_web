<template>
  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white p-4 mt-9"
  >
    <div class="flex items-center justify-between pb-4 ml-12 mr-12">
      <div class="relative"></div>
    </div>
    <div class="ml-12 mr-12">
      <form action="#" method="POST" @submit.prevent="updateRoman()">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold text-left text-gray-900">
              Information generale du roman
            </h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label
                  for="first-name"
                  class="block text-sm font-bold text-left text-gray-900"
                  >Titre</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    v-model="book.name"
                    class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="last-name"
                  class="block text-sm font-bold text-left text-gray-900"
                  >Phrase d'accroche</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    v-model="book.slug"
                    class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="last-name"
                  class="block text-sm font-bold text-left text-gray-900"
                  >Tome</label
                >
                <div class="mt-2">
                  <input
                    type="number"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    v-model="book.tome"
                    class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="country"
                  class="block text-sm font-bold text-left text-gray-900"
                  >Genres</label
                >
                <div class="mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    v-model="book.category_id"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option
                      v-for="(categorie, index) in categories"
                      :key="index"
                      :value="categorie.id"
                    >
                      {{ categorie.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="country"
                  class="block text-sm font-bold text-left text-gray-900"
                  >Tags</label
                >
                <div class="mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    v-model="tages"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option
                      v-for="(tag, index) in tages"
                      :key="index"
                      :value="tag.id"
                    >
                      {{ tag.type_tag.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="country"
                  class="block text-sm font-bold text-left text-gray-900"
                  >Status</label
                >
                <div class="mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    v-model="book.status"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="En cours">En cours</option>
                    <option value="Terminé">Terminé</option>
                    <option value="Abandonné">Abandonné</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="about"
                  class="block text-sm font-bold text-left text-gray-900"
                  >Description</label
                >
                <div class="mt-2">
                  <textarea
                    class="block lg:w-full p-2 h-48 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                    autocomplete="current-password"
                    v-model="book.description"
                    required
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="cover-photo"
                  class="block text-sm font-bold text-left text-gray-900"
                  >Cover photo</label
                >
                <label for="images" class="drop-container" id="dropcontainer">
                  <span class="drop-title text-gray-600"
                    >Déposer vos fichiers</span
                  >
                  <span class="text-gray-600"> ou</span>
                  <input
                    type="file"
                    @change="onFileChange"
                    id="images"
                    accept="image/*"
                  />
                </label>
              </div>
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 dark:focus:ring-blue-800"
              >
                Publier le livre
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
import { mapState } from "vuex";
export default {
  name: "RepasDash",
  components: {},
  data() {
    return {
      addform: {
        slug: "",
        name: "",
        authors: [],
        description: "",
        banner_desktop: "",
        user_id: "",
        category_id: "",
        tags: [],
        status: "En cours",
        nbr_read: 0,
        faction: false,
        status_publish: "Publié",
      },
      alert: {
        type: "",
        message: "",
      },
      processing: false,
      showDeleteRepasModal: false,
      showModalRepas: false,
      showModalRepasUpdate: false,
      book: [],
      user: "",
      tages: [],
     
    };
  },
  created() {
    this.fetchCategories();
    this.profile();
    this.books();
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
  },
  methods: {
    async fetchCategories() {
     this.$store.dispatch("categories/fetchCategories");
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.addform.user_id = response.data.id;
        }
      } catch (error) {
        console.log(error.data);
      }
    },

    async books() {
      try {
        const response = await axios.get(`/api/books/${this.$route.params.id}`);
        if (response.data) {
          this.book = response.data.data;
          this.tages = this.book.tags;
          console.log(this.book);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async updateRoman() {
      try {
        const response = await axios.post(
          `/api/books/${this.$route.params.id}`,
          this.book
        );
        if (response.status == 201) {
          this.addform = {};
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre romman à été enregistrer avec succés",
            timeout: 5000,
          }).show();
          this.$router.push("/histoiredash");
        } else {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose c'est mal passé. Merci d'essayer plus tard!";
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        }
      } catch (error) {
        if (error.response.status !== 500) {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose c'est mal passé. Merci d'essayer plus tard!";
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        }
      }
    },
  },
};
</script>
<style >
.drop-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 200px;
  padding: 20px;
  border: 2px dashed #222245;
  color: #222245;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
}

.drop-container:hover {
  background-color: #eee;
}

.drop-title {
  color: #222245;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

input[type="file"] {
  width: 350px;
  max-width: 100%;
  color: #222245;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #222245;
}

input[type="file"]:focus {
  outline: 2px dashed #222245;
  outline-offset: 2px;
}

input[type="file"]::file-selector-button {
  margin-right: 8px;
  border: none;
  background-color: #222245;
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
}

input[type="file"]::file-selector-button:hover {
  background-color: #4747b8;
}

@media (prefers-color-scheme: dark) {
  body {
    color: #fff;
  }

  .drop-container {
    border-color: #35356e;
    color: #fff;
  }

  .drop-container:hover {
    background-color: #282853;
  }

  .drop-title {
    color: #fff;
  }

  input[type="file"] {
    color: #fff;
    border: 1px solid #35356e;
    background-color: #1e1e3f;
  }

  input[type="file"]:focus {
    outline: 2px dashed #7c7cc0;
    outline-offset: 2px;
  }

  input[type="file"]::file-selector-button {
    background-color: #35356e;
    color: #fff;
  }
}
</style>