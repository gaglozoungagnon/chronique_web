<template>
  <div class="bg-white h-full">
    <div class="custom-background lg:h-96 h-60">
      <div class="">
        <p
          class="p-2 text-2xl font-bold text-center lg:mx-auto lg:w-4/6 lg:text-5xl text-gray-100"
        >
          Afriplume, plongez dans l’âme de l’Afrique à travers des mots vibrants
          et des récits authentiques.
        </p>
      </div>
      <div v-if="this.user === ''" class="mt-9">
        <button
          class="text-gray-700 rounded-lg bg-green-500 px-8 py-2 text-xl"
          @click="showModalRepas = true"
        >
          J'écris une histoire
        </button>
      </div>
      <div v-else class="mt-9">
        <router-link
          class="text-gray-700 rounded-lg bg-green-500 px-8 py-2 text-xl"
          to="/histoiredash"
        >
          J'écris une histoire
        </router-link>
      </div>
    </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-12">
      POURQUOI PUBLIER SUR AFRIPLUME ?
    </h3>
    <div>
      <div class="lg:flex mt-4 mx-9 lg:mx-24 mt-6">
        <div
          class="bg-blue-500 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative lg:ml-4 lg:w-1/3"
        >
          <img
            class="w-full h-72 transform transition duration-300 hover:scale-105"
            src="../assets/bussiness.jpg"
            alt=""
          />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-black poppins text-2xl">Visibilité</h1>
            <p class="text-white poppins text-sm text-center">
              Afriplume offre une plateforme de publication qui atteint un
              public diversifié à travers tout le continent africain, offrant
              une visibilité inégalée pour les auteurs.
            </p>
          </div>
        </div>
        <div
          class="bg-blue-500 lg:ml-4 mt-6 lg:mt-0 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative lg:w-1/3"
        >
          <img
            class="w-full h-72 transform transition duration-300 hover:scale-105"
            src="../assets/customer.jpg"
            alt=""
          />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-black poppins text-2xl">Interaction</h1>
            <p class="text-white poppins text-sm text-center">
              Sur Afriplume, vous pouvez recevoir des commentaires, des
              réactions et des notes sur vos chapitres. Cela vous permet de
              bénéficier de retours constructifs et de vous connecter aisément
              avec votre communauté.
            </p>
          </div>
        </div>
        <div
          class="bg-blue-500 lg:ml-4 mt-6 lg:mt-0 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative lg:w-1/3"
        >
          <img
            class="w-full h-72 transform transition duration-300 hover:scale-105"
            src="../assets/copyright.jpg"
            alt=""
          />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-black poppins text-2xl">Droit d’auteur</h1>
            <p class="text-white poppins text-sm text-center">
              Nous accordons une grande importance à la protection des droits
              d’auteur. En publiant sur Afriplume, vous pouvez être sûr que
              votre livre est sécurisé et que vous bénéficiez de la
              reconnaissance que vous méritez
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="mt-4 lg:mx-24 mx-9 mt-9">
        <div
          class="bg-blue-700 w-full lg:flex transition transform duration-700 p-4 rounded-lg relative lg:ml-4 lg:h-80 lg:mr-24"
        >
          <img
            class="transform transition duration-300 hover:scale-105"
            src="../assets/ethnic-employee-pressing-button.jpg"
            alt=""
          />
          <div
            class="lg:items-center my-3 lg:w-1/2 space-y-2 mt-12 mx-4 lg:mx-0"
          >
            <div class="lg:flex">
              <h1 class="lg:ml-9 text-white poppins text-3xl mt-1">
                Concours d'ecriture
              </h1>
            </div>
            <div class="lg:flex lg:ml-9">
              <h1 class="text-white text-xl mt-2">
                Découvrez nos concours lucratifs et éclairez votre chemin vers
                la célébrité littéraire, votre plume est votre guide
              </h1>
            </div>
            <div class="lg:flex lg:ml-9 mt-2">
              <router-link to="/concours" target="_blank">
                <button
                  class="text-gray-700 rounded-lg bg-yellow-500 px-8 py-2 text-xl mt-2"
                >
                  En savoir plus
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="h-6"></div>
      </div>
    </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-12">
      Quelques chiffres clefs
    </h3>
    <div>
      <div class="lg:flex mt-4 lg:mx-24 mx-9 mt-6">
        <div
          class="bg-black lg:ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative lg:w-1/4"
        >
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-green-700 font-bold text-4xl">200</h1>
            <p class="text-white text-xl text-center">Lecteurs</p>
          </div>
        </div>
        <div
          class="bg-black lg:ml-4 mt-4 lg:mt-0 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative lg:w-1/4"
        >
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-green-700 font-bold text-4xl">3k</h1>
            <p class="text-white text-xl text-center">Chapitre lu</p>
          </div>
        </div>
        <div
          class="bg-black lg:ml-4 mt-4 lg:mt-0 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative lg:w-1/4"
        >
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-green-700 font-bold text-4xl">30</h1>
            <p class="text-white text-xl text-center">Livres</p>
          </div>
        </div>

        <div
          class="bg-black lg:ml-4 mt-4 lg:mt-0 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative lg:w-1/4"
        >
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-green-700 font-bold text-4xl">25</h1>
            <p class="text-white text-xl text-center">Auteurs</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="mt-4 lg:mx-24 mx-9 mt-9">
        <div
          class="bg-blue-700 w-full lg:flex transition transform duration-700 p-4 rounded-lg relative lg:ml-4 lg:h-80 lg:mr-24"
        >
          <img
            class="transform transition duration-300 hover:scale-105"
            src="../assets/aerial-view-woman-using-retro-typewriter.jpg"
            alt=""
          />
          <div
            class="lg:items-center my-3 lg:w-1/2 space-y-2 mt-12 mx-4 lg:mx-0"
          >
            <div class="lg:flex">
              <h1 class="lg:ml-9 text-white poppins text-3xl mt-1">
                Decouvrir notre blog
              </h1>
            </div>
            <div class="lg:flex lg:ml-9">
              <h1 class="text-white poppins text-xl text-left mt-2">
                Découvrez nos concours lucratifs et éclairez votre chemin vers
                la célébrité littéraire, votre plume est votre guide
              </h1>
            </div>
            <div class="lg:flex lg:ml-9 mt-2">
              <a href="https://blogs.afriplume.com/" target="_blank">
                <button
                  class="text-gray-700 rounded-lg bg-yellow-500 px-8 py-2 text-xl mt-2"
                >
                  Aller aux blog
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="h-6"></div>
      </div>
    </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-12">Paroles d’Auteurs</h3>
    <div class="grid gap-2 lg:grid-cols-3 mx-9 mt-6">
      <div
        v-for="(temoignage, index) in temoignages.filter((t) => t.status === 1)"
        :key="index"
        class="max-w-md p-4 border border-white rounded-3xl shadow-lg"
      >
        <div class="h-44">
          <p class="mt-2 text-gray-700 text-left text-sm">
            {{ temoignage.comment }}
          </p>
        </div>
        <div class="flex mt-4">
          <div
            v-if="temoignage.user.profile_photo_path === null"
            class="justify-start"
          >
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              src="../assets/download.png"
              alt=""
            />
          </div>
          <div v-else class="justify-start">
            <img
              class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
              :src="temoignage.user.profile_photo_path"
              alt=""
            />
          </div>
          <a
            href="#"
            class="text-xl font-medium text-gray-700 mt-4 text-left ml-6"
          >
            {{ temoignage.user.name }} <br />
            <span class="text-sm">{{ temoignage.user.description }}</span>
          </a>
        </div>
      </div>
    </div>
    <h3
      class="lg:font-bold text-gray-700 lg:text-2xl text-lg mt-12 mx-6 lg:mx-0"
    >
      Sur Afriplume chaque page à une histoire unique.
    </h3>

    <div v-if="this.user === ''" class="mt-9">
      <button
        class="text-gray-700 rounded-lg bg-green-500 px-8 py-2 text-xl"
        @click="showModalRepas = true"
      >
        J'écris une histoire
      </button>
    </div>
    <div v-else class="mt-9">
      <router-link
        class="text-gray-700 rounded-lg bg-green-500 px-8 py-2 text-xl"
        to="/histoiredash"
      >
        J'écris une histoire
      </router-link>
    </div>
    <div class="h-6"></div>
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
                    <BaseInput v-model="form.email" class="mt-2 text-black" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mot de passe" />
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
                      <router-link
                        to="/auth/register"
                        class="font-sans text-blue-700 hover:underline dark:text-primary-500 ml-36 mt-2"
                      >
                        Inscrivez vous ici</router-link
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

<script>
import axios from "axios";
import TheModal from "../components/TheModal.vue";
import AddModalFooter from "../components/AddModalFooter.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import TokenService from "../services/storage.service";
import ApiService from "../services/api.service";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    BaseLabel,
    BaseInput,
    TheModal,
    AddModalFooter,
  },
  data() {
    return {
      form: {
        //name: "",
        email: "",
        password: "",
        // role_id: "3",
        // local: null,
      },
      user: "",
      showModalRepas: false,
      showPassword: false,
      temoignages: [],
    };
  },
  created() {
    this.fetchProfiles();
    this.profile();
    this.temoignage();
  },
  computed: {
    ...mapState({
      profiles: (state) => state.profiles.profiles,
    }),
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async fetchProfiles() {
      this.$store.dispatch("profiles/fetchProfiles");
    },
    profiAction() {
      this.isProfil = !this.isProfil;
    },
    async login() {
      try {
        const response = await axios.post("/api/auth/login", this.form);
        if (response.status === 200) {
          TokenService.saveToken(response.data.access_token);
          ApiService.setHeader();
          this.showModalRepas = false;
          this.profile();
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
    async temoignage() {
      try {
        const response = await axios.get("/api/testimonies");
        if (response.data) {
          this.temoignages = response.data.data;
          console.log(this.temoignages);
          //console.log(this.filter);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.user = response.data.data.id;
          console.log(this.user);
          //console.log(this.filter);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
  },
};
</script>

<style scoped>
.custom-background {
  background-image: url("~@/assets/write-neopload-banner.jpeg");
  /* Remplacez 'votre-image.jpg' par le nom de votre image */
  background-size: cover;
  /* Ajustez la taille de l'image */
  background-repeat: no-repeat;
  background-position: center center;
  /* Centrez l'image */
  /* Ajoutez d'autres styles Tailwind CSS ou CSS personnalisés au besoin */
}

/* Ajoutez des styles personnalisés pour le slider ici */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
