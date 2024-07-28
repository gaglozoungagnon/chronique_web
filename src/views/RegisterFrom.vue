<script>
import axios from "axios";
import TheModal from "../components/TheModal.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
//import AddModalFooter from "../components/AddModalFooter.vue";
import AlertComponent from "../components/AlertComponent.vue";
import TokenService from "../services/storage.service";
import ApiService from "../services/api.service";
import spiner from "../components/spiner.vue";
export default {
  name: "RegisterFrom",
  components: {
    BaseLabel,
    BaseInput,
    //AddModalFooter,
    TheModal,
    spiner,
    AlertComponent,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        banner:"",
        role_id: "3",
        // local: null,
      },
      forms: {
        //name: "",
        email: "",
        password: "",
        // role_id: "3",
        // local: null,
      },
      showAlert: false,
      alert: {
        message: "",
      },
      showModalRepas: false,
      isLoading: false,
      isLoadinging: false,
      passwordErrorMessage: "",
      showPassword: false,
    };
  },
  created() {
    //this.role();
  },
  methods: {
    preventPaste(event) {
      event.preventDefault();
      const clipboardData = event.clipboardData || window.clipboardData;
      if (clipboardData) {
        const text = clipboardData.getData("text/plain");
        const passwordInput = document.getElementById("passwordInput");
        const startPosition = passwordInput.selectionStart;
        const endPosition = passwordInput.selectionEnd;
        const currentValue = this.form.password || "";
        const newValue =
          currentValue.substring(0, startPosition) +
          text +
          currentValue.substring(endPosition);
        this.form.password = newValue;
        this.validatePassword(); // Valider le mot de passe après le collage
      }
    },
    validatePassword() {
      // eslint-disable-next-line no-useless-escape
      const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

      if (!passwordPattern.test(this.form.password)) {
        this.passwordErrorMessage =
          "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule.";
      } else {
        this.passwordErrorMessage = "";
      }
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async register() {
      try {
        this.isLoading = true;

        const response = await axios.post("/api/auth/register", this.form);
        if (response.status == 201) {
          this.showModalRepas = !this.showModalRepas;
          this.isLoading = false;
        } else {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose s'est mal passé. Merci d'essayer plus tard.";
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
          this.isLoading = false;
        }
      } catch (error) {
        if (error.response.status !== 500) {
          this.showAlert = true;
          this.alert.message = error.response.data.data[0];
          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        }
        this.isLoading = false;
      }
    },
    async login() {
      try {
        this.isLoadinging = true;
        const response = await axios.post("/api/auth/login", this.forms);
        if (response.data.access_token) {
          TokenService.saveToken(response.data.access_token);
          ApiService.setHeader();
          this.$router.push("/home");
          this.isLoadinging = false;
          //this.profile();
          //this.role();
        }
      } catch (error) {
        // Gestion des erreurs HTTP
        this.isLoadinging = false;
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
<template>
  <div
    class="p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-2/3 mx-auto my-auto mt-9 box-shadow-all-sides"
  >
    <div v-show="showAlert">
      <AlertComponent :content="alert.message" type-alert="error" />
    </div>
    <h1 class="font-bold text-xl">Créez votre compte gratuit</h1>
    <form
      method="POST"
      action="#"
      class="space-y-4 md:space-y-6"
      @submit.prevent="!passwordErrorMessage && register()"
    >
      <!--<div class="col-span-8 sm:col-span-8">
        <div class="col-span-8 sm:col-span-8">
          <div class="flex items-center justify-center dark:bg-gray-800">
            <button
              class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            >
              <img
                class="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span class="text-gray-700">Se connecter avec Google</span>
            </button>
          </div>
        </div>
      </div>-->
      <div class="">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Nom</label
        >
        <div class="mt-1">
          <input
            class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="text"
            v-model="form.name"
            autocomplete="current-email"
            required
          />
        </div>
      </div>

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
      <div class="">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Télephone (facultatif)</label
        >
        <div class="mt-1">
          <input
          v-model="form.banner"
            class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="tel"
            autocomplete="current-tel"
          />
        </div>
      </div>
      <div class="space-y-1 mt-5">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Password</label
        >
        <div class="mt-1">
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
              v-model="form.password"
              autocomplete="current-password"
              @input="validatePassword"
              @paste="preventPaste"
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
        <div class="text-red-500" v-if="passwordErrorMessage">
          {{ passwordErrorMessage }}
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
              >J'ai lu et accepter les contiction d'utilisation
            </label>
          </div>
        </div>

        <a
          href="/home"
          class="text-sm font-medium text-blue-700 hover:underline dark:text-primary-500"
        >
          Retourner au site
        </a>
      </div>
      <Button
        type="submit"
        class="bg-blue-600 text-gray-700 px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <span v-else> S'inscrire</span>
      </Button>
    </form>
    <p class="text-sm text-gray-500">
      Vous avez déjà un compte
      <button
        @click="showModalRepas = true"
        class="font-sans text-blue-700 hover:underline dark:text-primary-500"
      >
        Se connecter
      </button>
    </p>
  </div>

  <TheModal
    width="w-full md:w-2/3 lg:w-1/3"
    :is-open="showModalRepas"
    @close-modal="showModalRepas = false"
  >
    <template #header>Se connecter</template>

    <template #body>
      <div v-show="showAlert">
        <AlertComponent :content="alert.message" type-alert="error" />
      </div>
      <form action="#" method="POST" @submit.prevent="login()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <!-- <div class="col-span-8 sm:col-span-8">
                  <div
                    class="flex items-center justify-center  dark:bg-gray-800"
                  >
                    <button
                      class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                    >
                      <img
                        class="w-6 h-6"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      <span class="text-gray-700">Se connecter avec Google</span>
                    </button>
                  </div>
                </div>-->
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mail" />
                  <div class="relative mt-1">
                    <BaseInput v-model="forms.email" class="mt-2 text-black" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mot de passe" />
                  <div class="relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="block w-full p-2 text-gray-500 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                      v-model="forms.password"
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
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="flex sm:items-start">
                    <div class=" ">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm lg:flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm whitespace-nowrap font-medium text-primary-normal dark:text-gray-300"
                        >Se souvenir de moi</BaseLabel
                      >
                      <router-link
                        to="/auth/forgot-password"
                        class="font-sans text-blue-700 hover:underline dark:text-primary-500 lg:ml-24"
                      >
                        Mot de passe oublie</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="flex sm:items-start">
                    <div class="ml-1 text-sm">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300 lg:ml-32"
                      >
                        Pas encore de compte</BaseLabel
                      >
                      <a
                        href="/auth/register"
                        class="font-sans text-blue-700 hover:underline dark:text-primary-500 lg:ml-36 mt-2"
                      >
                        Inscrivez vous ici</a
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
      <Button
        type="submit"
        class="bg-blue-600 text-gray-700 px-4 mt-2 mb-2 py-2 focus:outline-none poppins rounded-lg mx-auto block md:inline-block transform transition duration-300 hover:scale-105"
        @click="login()"
      >
        <span v-if="isLoadinging">
          <spiner />
        </span>
        <span v-else> Connexion</span>
      </Button>
    </template>
  </TheModal>
</template>
<style scoped>
.box-shadow-all-sides {
  box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
}
</style>
