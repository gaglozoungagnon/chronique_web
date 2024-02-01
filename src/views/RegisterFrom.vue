<script>
import axios from "axios";
import TheModal from "../components/TheModal.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import AddModalFooter from "../components/AddModalFooter.vue";
import TokenService from "../services/storage.service";
import ApiService from "../services/api.service";
export default {
  name: "RegisterFrom",
  components: {
    BaseLabel,
    BaseInput,
    AddModalFooter,
    TheModal,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
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
    };
  },
  created() {
    //this.role();
  },
  methods: {
    async register() {
      try {
        const response = await axios.post("/api/auth/register", this.form);
        if (response.status == 201) {
          this.showModalRepas = !this.showModalRepas;
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
    async login() {
      try {
        const response = await axios.post("/api/auth/login", this.forms);
        if (response.data.access_token) {
          TokenService.saveToken(response.data.access_token);
          ApiService.setHeader();
          this.$router.push("/");
          //this.profile();
          //this.role();
        }
      } catch (error) {
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
<template>
  <div
    class="p-6 space-y-4 md:space-y-6 sm:p-8 w-2/3 mx-auto my-auto mt-24 box-shadow-all-sides"
  >
    <h1 class="font-bold text-xl">Créez votre compte gratuit</h1>
    <form
      method="POST"
      action="#"
      class="space-y-4 md:space-y-6"
      @submit.prevent="register()"
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
      <div class="space-y-1 mt-5">
        <label class="block font-bold text-sm text-gray-700 text-left"
          >Password</label
        >
        <div class="mt-1">
          <input
            class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="password"
            v-model="form.password"
            autocomplete="current-password"
            required
          />
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
          href="/"
          class="text-sm font-medium text-blue-700 hover:underline dark:text-primary-500"
        >
          Retourner au site
        </a>
      </div>
      <Button
        type="submit"
        class="bg-green-600 text-gray-700 px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
      >
        S'inscrire
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
                    <BaseInput v-model="forms.email" class="mt-2" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mot de passe" />
                  <BaseInput
                    type="password"
                    id="language"
                    v-model="forms.password"
                    class="mt-2"
                  />
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
                        >Se souvenir de moi</BaseLabel
                      >
                      <a
                        href="/auth/forgot-password"
                        class="text-sm font-medium ml-32"
                      >
                        Mot de passe oublie
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="hidden sm:flex sm:items-start">
                    <div class="ml-1 text-sm">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300 ml-32"
                      >
                        Pas encore de compte</BaseLabel
                      >
                      <a
                        href="/auth/register"
                        class="font-sans text-blue-700 hover:underline dark:text-primary-500 ml-36 mt-2"
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
      <AddModalFooter @cancel="showModalRepas = false" @send="login()" />
    </template>
  </TheModal>
</template>
<style scoped>
.box-shadow-all-sides {
  box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
}
</style>