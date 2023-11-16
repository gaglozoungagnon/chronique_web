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
  methods: {
   
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
      <a
        href="/auth/login"
        class="font-sans text-blue-700 hover:underline dark:text-primary-500"
      >
        Se connecter</a
      >
    </p>
  </div>
</template>
<style scoped>
.box-shadow-all-sides {
  box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
}
</style>