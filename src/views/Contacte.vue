<script>
import spiner from "../components/spiner.vue";
import axios from 'axios';
export default {
  name: "RegisterFrom",
  components: {
    spiner
  },

  data() {
    return {
       formData: {
        name: '',
        email: '',
        message: ''
      },
      alert: {
        type: "",
        message: "",
      },
      processing: false,
       isModalOpen: false,
      isLoading: false,
      userID:"",
      userName:"",
      userEmail:"",
    };
  },
  created() {
    this.profile();
    //this.book();
  },
  methods: {
 async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.userID = response.data.data.id;
          this.userName=response.data.data.name;
          this.userEmail=response.data.data.email;
          window.scrollTo(0, 0);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    submitForm() {
      this.isLoading = true;
      this.formData.email = this.userEmail;
      this.formData.name = this.userName;
      axios.post('/api/sendemail', this.formData)
        .then(response => {
          this.formData={},
          this.isLoading = false;
          console.log(response.data);
        })
        .catch(error => {
         this.isLoading = false;
          console.error(error);
        });
    }
  },
};
</script>

<template>
  <div class="lg:flex">
    <div class="lg:w-2/4 mt-24">
      <h1 class="font-bold lg:text-5xl text-2xl text-left lg:ml-24 ml-6">
        Nous serons heureux de vous lire
      </h1>
      <h1 class="font-sans lg:text-2xl text-lg text-left lg:ml-24 ml-6">
        Un service client à votre écoute pour vous répondre et vous accompagner
        en toute situation.
      </h1>
      <h1 class="font-sans lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-2">
        Contactez-nous !
      </h1>
      <h1 class="font-Bold lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-12">
        Contributions et demandes de renseignements par écrit
      </h1>
      <h1
        class="font-sans lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-2 text-blue-500"
      >
        contact@afriplume.com
      </h1>
      <h1 class="font-Bold lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-4">
        Commentaires et plaintes lecteur
      </h1>
      <h1
        class="font-sans lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-2 text-blue-500"
      >
        support@afriplume.com
      </h1>
      <h1 class="font-Bold lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-4">
        Commentaires et plaintes écrivains
      </h1>
      <h1
        class="font-sans lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-2 text-blue-500"
      >
        ecrivain@afriplume.com
      </h1>
      <h1 class="font-Bold lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-4">
        Collaborations
      </h1>
      <h1
        class="font-sans lg:text-2xl text-lg text-left lg:ml-24 ml-6 mt-2 text-blue-500"
      >
        commercial@afriplume.com
      </h1>
    </div>
    <div
      class="p-6 space-y-4 md:space-y-6 sm:p-16 mx-auto my-auto mt-24 box-shadow-all-sides rounded-xl"
    >
      <h1 class="font-bold text-2xl">Contactez-nous</h1>
      <form
        method="POST"
        action="#"
        class="space-y-4 md:space-y-6"
        @submit.prevent="submitForm"
      >
        <div class="space-y-1 mt-5">
          
          <div class="mt-1">
            <textarea
              class="block  p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
              v-model="formData.message"
              autocomplete="current-password"
              placeholder="votre message"
              required
              rows="10"
              cols="40"
              
            ></textarea>
          </div>
        </div>
         <button
              class="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-3 w-lg:w-full w-80 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <span v-if="isLoading">
              <spiner />
            </span>
            <span v-else> Envoyer</span>
            </button>
      </form>
    </div>
  </div>
  <div class="h-9"></div>
</template>
<style scoped>
.box-shadow-all-sides {
  box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
}
</style>
