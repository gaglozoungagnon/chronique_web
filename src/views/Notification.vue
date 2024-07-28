<template class="">
  <div class="bg-gray-900 ">
    <div class="h-24 bg-gray-800 flex items-center justify-center">
      <h1 class="font-bold text-4xl text-white">Notifications</h1>
    </div>
    <div class="mt-4 lg:mr-36 lg:ml-36  rounded-lg">
      <div class="mt-2">
        <div class="">
          <div class="genres-select-container items-between">
            <div
              v-for="(notifiaction, index) in notifiactions"
              :key="index"
              class="flex text-white mt-6 w-full"
            >
              <label class="inline-flex items-center lg:ml-36 lg:w-1/2 lg:ml-16 mt-6 ml-6 w-2/3">
                <div class="w-full flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 hidden md:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  <span class="font-sans lg:ml-2">{{
                    notifiaction.data.message
                  }}</span>
                </div>
              </label>
              <label class="inline-flex items-center mt-6 lg:ml-96 lg:w-1/2 w-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="lg:w-12 lg:h-12 h-6 w-6 ml-16 lg:ml-0 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-6"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      notifiactions: [],
      messages: [],
    };
  },
  created() {
    this.notifiaction();
  },

  methods: {
    async notifiaction() {
      try {
        const response = await axios.get("/api/notifications");
        if (response.data) {
          this.notifiactions = response.data;
          this.messages = this.notifiactions.data;
          console.log(this.notifiactions);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés pour le slider ici */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

input:checked {
  background-color: #22c55e; /* bg-green-500 */
}

input:checked ~ span:last-child {
  --tw-translate-x: 1.75rem; /* translate-x-7 */
}
</style>
