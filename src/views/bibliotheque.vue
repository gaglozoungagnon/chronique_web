<template>
  <div class="bg-white">
    <div  class="mx-24 mt-9">
      <h1 class="text-4xl font-bold text-left text-gray-700">
       {{this.book[0].category.name}}
      </h1>
      <div 
        class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4"
      >
        <div
            v-for="(book, index) in book"
            :key="index"
            class="flex-shrink-0 w-44 mx-4"
          >
            <router-link
            :to="`/romandetail/${book.id}`"
              
              class="block overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
            >
              <img
                :src="book.banner_desktop"
                :alt="book.banner_desktop"
                class="object-cover  h-64 rounded"
              />
              <div class="py-5">
                <p
                  class="mb-2  text-xs flex font-semibold text-gray-600 ml-16 uppercase"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="mt-1 ml-4">{{ book.nbr_read }} k</span>
                </p>
                <p class="text-2xl font-bold leading-5">{{ book.name }}</p>
                <p class="mt-2 text-xs font-semibold text-gray-600 uppercase">
                  {{ book.category.name }}
                </p>
              </div>
            </router-link>
          </div>
        
      </div>
    </div>
    
  </div>
  <!-- Composant de modal -->
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import ModalComponent from "../components/ModalComponent .vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    ModalComponent,
  },
  data() {
    return {
      book: [],
      gens:"",
      isDropdownOpen: false,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (to.params.id !== from.params.id) {
        // Le paramètre de route a changé, récupérons les livres
        this.fetchBooks(to.params.id);
      }
      next();
    });

    // Récupérez les livres lorsque le composant est créé pour la première fois
    this.fetchBooks(this.$route.params.id);
  
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get(`api/books?filter[category_id]=${this.$route.params.id}`);
        if (response.data) {
          this.book = response.data.data;
          this.gens = this.book[0].category.name;
          
          
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
  background-image: url("~@/assets/OF18NR0.jpg");
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

.slider-item {
  animation: slide 15s linear infinite;
}

@keyframes slide {
  0%,
  100% {
    transform: translateX(0%);
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-200%);
  }

  75% {
    transform: translateX(-300%);
  }
}
</style>
