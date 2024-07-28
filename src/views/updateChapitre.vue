<template>
  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white p-4 mt-9"
  >
    <div class="lg:ml-12 lg:mr-12">
      <form action="#" method="POST" @submit.prevent="chapitre()">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold text-left text-gray-900">
              Information chapitre
            </h2>

            <div class="mt-10">
              <div class="lg:flex w-full">
                <div class="lg:w-2/4 lg:mr-4">
                  <label
                    for="title"
                    class="block text-sm font-bold text-left text-gray-900"
                    >Titre</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      v-model="chapitres.name"
                      class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                    />
                  </div>
                </div>

                <div class="lg:w-2/4 lg:mr-4">
                  <label
                    for="catchphrase"
                    class="block text-sm font-bold text-left text-gray-900"
                    >Numéro</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      v-model="chapitres.number"
                      class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 class="text-base font-semibold text-left text-gray-900 mt-6">
              Contenu du chapitre
            </h2>

            <div class="flex col-span-8 sm:col-span-8">
              <div class="hidden sm:flex sm:items-start">
                <div class="flex items-center mt-2">
                  <input
                    type="checkbox"
                    class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div class="ml-1 text-sm flex mt-2">
                  <BaseLabel
                    for="remember"
                    class="text-sm font-medium text-primary-normal dark:text-gray-300 ml-4"
                    >Adapte votre texte lorsque vous le collez
                    (recommandé)</BaseLabel
                  >
                </div>
              </div>
            </div>
            <div class="flex col-span-8 sm:col-span-8">
              <div class="hidden sm:flex sm:items-start">
                <div class="flex items-center mt-2">
                  <input
                    type="checkbox"
                    class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div class="ml-1 text-sm flex mt-2">
                  <BaseLabel
                    for="remember"
                    class="text-sm font-medium text-primary-normal dark:text-gray-300 ml-4"
                    >Supprime les espaces sous les paragraphes lorsque vous
                    collez votre texte
                  </BaseLabel>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <Editor
                v-model="chapitres.contain"
                api-key="w8rrfindih3k10qkv6rpaduqvi7y4plzgfk56jge394lwlch"
                :init="{
                  plugins: '',
                }"
              />
            </div>
            <div v-if="previewData" class="mt-6">
              <h2 class="text-lg font-semibold text-gray-900">
                Aperçu du chapitre
              </h2>
              <p><strong>Titre:</strong> {{ previewData.name }}</p>
              <p><strong>Numéro:</strong> {{ previewData.number }}</p>
              <p v-html=" previewData.contain"></p>
              <!-- Affichez d'autres données du formulaire ici -->
            </div>
            <div class="lg:flex">
              <button
                class="bg-blue-500 text-white hidden md:block mr-6 px-8 py-2 focus:outline-none poppins rounded-lg mt-4 transform transition duration-300 hover:scale-105"
                @click="showModalRepas = true"
              >
                Programmer l'envoi
              </button>
              <button
              type="button"
                class="bg-blue-500 text-white  mr-6 px-8 py-2 focus:outline-none poppins rounded-lg mt-4 transform transition duration-300 hover:scale-105"
                @click="showPreview"
              >
                Aperçu
              </button>
              <button
                class="bg-blue-500 text-white mr-6 px-8 py-2 focus:outline-none poppins rounded-lg mt-4 transform transition duration-300 hover:scale-105"
              >
                <span v-if="isLoading">
                  <spiner />
                </span>
                <span v-else> Enregistrer les modifications</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script >
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
//import TheModal from "../components/TheModal.vue";
import BaseLabel from "../components/BaseLabel.vue";
//import BaseInput from "../components/BaseInput.vue";
//import AddModalFooter from "../components/AddModalFooter.vue";
import spiner from "../components/spiner.vue";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
export default {
  name: "RepasDash",
  components: {
    //TheModal,
    BaseLabel,
    spiner,
    //BaseInput,
    //AddModalFooter,
    Editor,
  },
  data() {
    return {
      addform: {
        name: "",
        contain: "",
        number: "",
        book_id: "",
        volume: 0,
      },
      previewData: null,
      showModalRepas: false,
      isLoading: false,
      chapitres:[],
    };
  },
  mounted() {
    this.addform.book_id = this.$route.params.id;
  },
   created() {
    //this.profile();
    this.Getchapitre();
  },
  methods: {
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    showPreview() {
      // Affichez les données prévisualisées
      this.isLoading = false;
      this.previewData = { ...this.addform };
    },
    async Getchapitre() {
      try {
        const response = await axios.get(`/api/chapters/${this.$route.params.id}`);
        if (response.data) {
          this.chapitres = response.data.data;
          console.log(this.chapitres);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async chapitre() {
      try {
        this.isLoading = true;
        this.addform.book_id=this.chapitres.book.id;
        this.addform.name = this.chapitres.name;
        this.addform.contain=this.chapitres.contain;
        this.addform.number=this.chapitres.number;
        const response = await axios.post(`/api/chapters/${this.$route.params.id}`, this.addform);
        if (response.status == 200) {
          this.addform = {};
          this.isLoading = false;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre chapitre à été enregistrer avec succés",
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
    async tag() {
      try {
        const response = await axios.get("/api/type_tags");
        if (response.data) {
          this.tags = response.data.data;
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