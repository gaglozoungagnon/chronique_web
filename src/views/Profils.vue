<template>
  <div class="h-24 bg-gray-800 flex items-center justify-center">
    <h1 class="font-bold text-4xl text-white">Profils</h1>
  </div>
  <div
    class="lg:relative lg:overflow-x-auto shadow-md sm:rounded-lg bg-white mt-0 p-4"
  >
    <div class="justify-between">
      <div v-show="showAlert">
        <AlertComponent :content="alert.message" type-alert="error" />
      </div>

      <div
        v-if="isProfil === false"
        class="bg-white lg:mx-32 shadow overflow-hidden sm:rounded-lg"
      >
        <div class="px-4 py-5 sm:px-6 lg:flex lg:ml-44">
          <h3 class="text-lg mt-12 font-bold text-gray-900">Photo de profil</h3>
          <div class="lg:ml-auto lg:mr-80 ml-24">
            <div v-if="donne.profile_photo_path === null" class="col-span-3">
              <a href="/authors/yvan">
                <img
                  class="w-32 h-32 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt=""
                />
              </a>
            </div>
            <div v-else class="sm:col-span-3">
              <img
                class="w-32 h-32 rounded-full border-2 border-white cursor-pointer"
                :src="donne.profile_photo_path"
                alt=""
                @click="toggleImageSize"
                :class="{ 'w-64 h-64': isImageExpanded }"
              />
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-bold text-gray-500">Nom</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ donne.name }}
              </dd>
            </div>
            <div
              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-bold text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ donne.email }}
              </dd>
            </div>
            <div
              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-bold text-gray-500">Téléphone</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ donne.banner }}
              </dd>
            </div>
            <div
              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-bold text-gray-500">Biographie</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ donne.description }}
              </dd>
            </div>
            <div
              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-bold text-gray-500">Status</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ donne.status }}
              </dd>
            </div>
            <div
              class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 lg:ml-96"
            >
              <dd
                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:ml-20 ml-9 flex"
              >
                <button
                  @click="showModalProfils = true"
                  class="bg-green-600 text-white px-8 ml-4 py-2 focus:outline-none rounded-lg mt-2 transform transition duration-300"
                >
                  Modifier mot de passe
                </button>
              </dd>
            </div>
            <button
              type="submit"
              @click="profiAction()"
              class="bg-green-600 text-white px-8 py-2 mr-4 focus:outline-none rounded-lg mt-2 transform transition duration-300"
            >
              Mettre à jour
            </button>
          </dl>
        </div>
      </div>
      <div
        v-else
        class="bg-white lg:mx-32 shadow overflow-hidden sm:rounded-lg"
      >
        <form action="#" method="POST" @submit.prevent="submitForm()">
          <div>
            <div class="px-4 py-5 bg-white p-6">
              <div class="flex">
                <div class="lg:w-2/3 lg:mr-9 w-80">
                  <BaseLabel value="Nom" class="text-left font-bold" />
                  <BaseInput id="nom" v-model="addform.name" class="mt-1" />

                  <div class="col-span-8 sm:col-span-8">
                    <BaseLabel value="Email" class="text-left mt-2 font-bold" />
                    <BaseInput
                      id="prenom"
                      v-model="addform.email"
                      class="mt-1"
                    />
                  </div>
                  <div class="col-span-8 sm:col-span-8">
                    <BaseLabel
                      value="Telephone"
                      class="text-left mt-2 font-bold"
                    />
                    <BaseInput
                      id="prenom"
                      v-model="addform.banner"
                      class="mt-1"
                    />
                  </div>
                  <div class="col-span-8 sm:col-span-8">
                    <BaseLabel
                      value="Description"
                      class="text-left mt-2 font-bold"
                    />
                    <div class="relative mt-1">
                      <textarea
                        class="block lg:w-full p-2 h-48 w-80 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                        autocomplete="current-password"
                        v-model="addform.description"
                      />
                    </div>
                  </div>

                  <div class="col-span-8 sm:col-span-8">
                    <BaseLabel
                      value="Photo de profil"
                      class="text-left mt-2 font-bold"
                    />
                    <input
                      id="image"
                      type="file"
                      @change="onFileChange"
                      class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            class="bg-green-600 text-white px-8 py-2 focus:outline-none rounded-lg mt-2 transform transition duration-300"
          >
            <span v-if="isLoading">
              <spiner />
            </span>
            <span v-else> Mettre à jour</span>
          </Button>
        </form>
      </div>
    </div>
  </div>
  <TheModal
    width="w-full md:w-2/3 lg:w-1/3"
    :is-open="showModalProfils"
    @close-modal="showModalProfils = false"
  >
    <template #header>Modifier votre mot de passe</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="passwordUpdate()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Ancien mot de passe" />
                  <div class="relative mt-1">
                    <BaseInput
                      type="password"
                      v-model="form.old_password"
                      class="mt-2 text-black"
                    />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Nouveau mot de passe" />
                  <BaseInput
                    type="password"
                    id="language"
                    v-model="form.new_password"
                    class="mt-2 text-black"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Confirmé nouveau mot de passe" />
                  <BaseInput
                    type="password"
                    id="language"
                    v-model="form.new_confirm_password"
                    class="mt-2 text-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <AddFooter @cancel="showModalProfils = false" @send="passwordUpdate()" />
    </template>
  </TheModal>
</template>

<script>
import axios from "axios";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
//import BaseLabel from "../components/BaseLabel.vue";
//import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import spiner from "../components/spiner.vue";
import BaseInput from "../components/BaseInput.vue";
import TheModal from "../components/TheModal.vue";
import AlertComponent from "../components/AlertComponent.vue";
import AddFooter from "../components/AddFooter.vue";
export default {
  name: "LivreurDash",
  components: {
    AlertComponent,
    BaseLabel,
    BaseInput,
    AddFooter,
    spiner,
    TheModal,
  },
  data() {
    return {
      form: {
        old_password: "",
        new_password: "",
        new_confirm_password: "",
      },
      addform: {
        profile_photo_path: "",
        name: "",
        email: "",
        description: "",
        banner: "",
      },
      showAlert: false,
      alert: {
        message: "",
      },
      processing: false,
      isLoading: false,
      showDeleteLivreurModal: false,
      showModalLivreur: false,
      showModalLivreurUpdate: false,
      showModalProfils: false,
      user: "",
      livreurs: [],
      filter: "",
      donne: [],
      isProfil: false,
      isImageExpanded: false,
    };
  },
  created() {
    this.profile();
  },
  computed: {},
  methods: {
    profiAction() {
      this.isProfil = !this.isProfil;
    },
    toggleImageSize() {
      this.isImageExpanded = !this.isImageExpanded;
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.donne = response.data.data;
          this.addform.name = response.data.data.name;
          this.addform.email = response.data.data.email;
          this.addform.banner = response.data.data.banner;
          this.filter = response.data.data.id;
          console.log(this.donne);
          //console.log(this.filter);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async passwordUpdate() {
      try {
        const response = await axios.post(
          `/api/user/password-update`,
          this.form
        );
        if (response.status == 200) {
          this.addform = {};
          this.isLoading = false;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre mot de passe à été modifié avec succés",
            timeout: 5000,
          }).show();
          this.$router.push("/home");
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
    async users() {
      try {
        const response = await axios.post(
          `/api/users/${this.filter}`,
          this.addform
        );
        if (response.status == 200) {
          this.addform = {};
          this.isLoading = false;
          this.isProfil = false;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre profils à été modifié avec succés",
            timeout: 5000,
          }).show();
          this.profile();
          window.scrollTo(0, 0);
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
    addUsers() {
      this.isLoading = true;
      const formData = new FormData();

      formData.append("file", this.image);

      axios
        .post("api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status == 201) {
            this.addform.profile_photo_path = response.data.data.media_url;
            console.log(this.addform.profile_photo_path);
            this.users();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
      this.addRepas();
    },
    submitForm() {
      if (this.image) {
        this.addUsers();
      } else {
        this.users();
      }
    },
  },
};
</script>
