<script>
import axios from "axios";
import TokenService from "../services/storage.service";
import ApiService from "../services/api.service";
import spiner from "../components/spiner.vue";
import TheModal from "../components/TheModal.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import AlertComponent from "../components/AlertComponent.vue";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
export default {
  name: "LoginForm",
  components: {
    AlertComponent,
    spiner,
    BaseLabel,
    BaseInput,
    TheModal,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        // local: null,
      },
      addform: {
        email: "",
      },
      showAlert: false,
      alert: {
        message: "",
      },
      processing: false,
      user: "",
      role_id: "",
      roles_id: "",
      isLoading: false,
      showPassword: false,
      showModalMotdePasse: false,
    };
  },
  created() {},
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async login() {
      try {
        this.isLoading = true;
        const response = await axios.post("/api/auth/login", this.form);
        if (response.data.access_token) {
          TokenService.saveToken(response.data.access_token);
          ApiService.setHeader();
          this.$router.push("/home");
          this.isLoading = false;
          //this.profile();
          //this.role();
        }
      } catch (error) {
        // Gestion des erreurs HTTP
        this.isLoading = false;
        if (error.response && error.response.status === 422) {
          this.showAlert = true;
          this.alert.message = "Adresse e-mail ou mot de passe incorrect.";
        } else {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose s'est mal passé. Merci d'essayer plus tard.";
        }

        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
    async motdepasse() {
      try {
        this.isLoading = true;
        const response = await axios.post(
          "/api/auth/password/email",
          this.addform
        );
        if (response.status === 200) {
          this.isLoading = false;
          this.showModalMotdePasse = false;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre demande a été reçue, veuillez vérifier votre boîte mail.",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        this.isLoading = false;
        // Gestion des erreurs HTTP
        if (error.response && error.response.status === 422) {
          this.showAlert = true;
          this.alert.message = "Adresse e-mail ou mot de passe incorrect.";
        } else {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose s'est mal passé. Merci d'essayer plus tard.";
        }

        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
  },
};
</script>

<template class="">
  <div
    class="p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-1/3 mx-auto my-auto mt-4 mb-4 box-shadow-all-sides"
  >
    <div v-show="showAlert">
      <AlertComponent :content="alert.message" type-alert="error" />
    </div>
    <h1 class="font-bold text-xl">Se connecter</h1>
    <form
      method="POST"
      action="#"
      class="space-y-4 md:space-y-6"
      @submit.prevent="login()"
    >
      <div class="">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Mail</label
        >
        <div class="mt-1">
          <input
            class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="email"
            v-model="form.email"
            autocomplete="current-email"
            required
          />
        </div>
      </div>
      <div class="space-y-1 mt-5">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Password</label
        >
        <div class="relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            class="block w-full p-2 text-gray-500 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            v-model="form.password"
            required
          />
          <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute inset-y-0 right-0 px-3 flex items-center"
          >
            <svg
              v-if="showPassword"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 3a7 7 0 015.464 2.536A7 7 0 0118 10a7 7 0 01-2.536 5.464A7 7 0 0110 18a7 7 0 01-5.464-2.536A7 7 0 012 10a7 7 0 012.536-5.464A7 7 0 0110 3zm0 2a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5zm0 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="hidden sm:flex sm:items-start">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div class="ml-1 text-sm">
            <label
              for="remember"
              class="text-sm font-medium text-primary-normal dark:text-gray-300"
              >Se souvenir de moi
            </label>
          </div>
        </div>

        <div
          @click="showModalMotdePasse = true"
          class="text-sm font-medium text-primary-normal hover:underline dark:text-primary-500"
        >
          Mot de passe oublie
        </div>
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-gray-700 px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <span v-else> Connexion</span>
      </button>
    </form>
    <p class="text-sm text-gray-500">
      Pas encore de compte
      <a
        href="/auth/register"
        class="font-sans text-blue-700 hover:underline dark:text-primary-500"
      >
        Inscrivez vous ici</a
      >
    </p>
  </div>
  <TheModal
    width="w-full md:w-2/3 lg:w-1/3"
    :is-open="showModalMotdePasse"
    @close-modal="showModalMotdePasse = false"
  >
    <template #header>Mot de passe oublier</template>

    <template #body>
      <div v-show="showAlert">
        <AlertComponent :content="alert.message" type-alert="error" />
      </div>
      <form action="#" method="POST" @submit.prevent="motdepasse()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mail" />
                  <div class="relative mt-1">
                    <BaseInput
                      v-model="addform.email"
                      class="mt-2 text-black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <Button
        type="submit"
        class="bg-green-600 text-gray-700 px-4 mt-2 mb-2 py-2 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
        @click="motdepasse()"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <span v-else> Envoyer</span>
      </Button>
    </template>
  </TheModal>
</template>
<style scoped>
.box-shadow-all-sides {
  box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
}
</style>
