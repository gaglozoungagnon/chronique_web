<script>
export default {
  name: "RegisterFrom",
  
  data() {
    return {
      form: {
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
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-1/3 mx-auto my-auto mt-4 mb-4 box-shadow-all-sides">
    <h1 class="font-bold text-xl">Créez votre compte gratuit</h1>
    <form
      method="POST"
      action="#"
      class="space-y-4 md:space-y-6"
      @submit.prevent="login()"
    >
    <div class="">
        <label class="block font-bold text-sm text-gray-700 text-left">Name</label>
        <div class="mt-1">
          <input
          class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="text"
            autocomplete="current-email"
            required
          />
        </div>
      </div>

      <div class="">
        <label class="block font-bold text-sm text-gray-700 text-left">Email</label>
        <div class="mt-1">
          <input
          class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="email"
            autocomplete="current-email"
            required
          />
        </div>
      </div>
      <div class="space-y-1 mt-5">
        <label class="block font-bold text-sm text-gray-700 text-left">Password</label>
        <div class="mt-1">
          <input
          class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
            type="password"
            autocomplete="current-password"
            required
          />
        </div>
      </div>
      <Button
        type="submit"
        class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
       
      >
        
        S'inscrire
      </Button>
    </form>
   
  </div>
</template>
<style scoped>
  .box-shadow-all-sides {
    box-shadow: 1px 1px 8px rgba(0.2, 0.2, 0.2, 0.2); /* Ajustez les valeurs en conséquence */
  }
</style>