<script>
export default {
  name: "RegisterFrom",

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        // local: null,
      },
      alert: {
        type: "",
        message: "",
      },
      processing: false,
    };
  },
  // created() {
  //   this.form.local = this.$i18n.locale;
  // },
  methods: {},
};
</script>

<template>
  <div class="flex">
    <div class="w-2/4 mt-24">
      <h1 class="font-bold text-5xl text-left ml-24">
        Nous serons heureux de vous lire
      </h1>
      <h1 class="font-sans text-2xl text-left ml-24">
        Un service client à votre écoute pour vous répondre et vous accompagner
        en toute situation.
      </h1>
      <h1 class="font-sans text-2xl text-left ml-24 mt-2">Contactez-nous !</h1>
      <h1 class="font-Bold text-2xl text-left ml-24 mt-12">
        Contributions et demandes de renseignements par écrit
      </h1>
      <h1 class="font-sans text-2xl text-left ml-24 mt-2 text-blue-500">
        contact@afriplume.com
      </h1>
      <h1 class="font-Bold text-2xl text-left ml-24 mt-4">
        Commentaires et plaintes lecteur

      </h1>
      <h1 class="font-sans text-2xl text-left ml-24 mt-2 text-blue-500">
       support@afriplume.com
      </h1>
      <h1 class="font-Bold text-2xl text-left ml-24 mt-4">
        Commentaires et plaintes écrivains


      </h1>
      <h1 class="font-sans text-2xl text-left ml-24 mt-2 text-blue-500">
       ecrivain@afriplume.com
      </h1>
       <h1 class="font-Bold text-2xl text-left ml-24 mt-4">
        Collaborations 
      </h1>
      <h1 class="font-sans text-2xl text-left ml-24 mt-2 text-blue-500">
       commercial@afriplume.com
      </h1>
    </div>
    <div
      class="p-6 space-y-4 md:space-y-6 sm:p-8 w-96 mx-auto my-auto mt-24 box-shadow-all-sides rounded-xl"
    >
      <h1 class="font-bold text-2xl">Contactez-nous</h1>
      <form
        method="POST"
        action="#"
        class="space-y-4 md:space-y-6"
        @submit.prevent="register()"
      >
        <div class="">
          <label class="block font-bold text-sm text-gray-700 text-left">
            Votre Nom</label
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
            >Adresse E-mail</label
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
            >Numéro de télephone</label
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
        <div class="space-y-1 mt-5">
          <label class="block font-bold text-sm text-gray-700 text-left"
            >Votre message</label
          >
          <div class="mt-1">
            <textarea
              class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
              v-model="form.password"
              autocomplete="current-password"
              required
            />
          </div>
        </div>
        <Button
          type="submit"
          class="bg-green-600 text-gray-700 px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
        >
          Envoyer
        </Button>
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